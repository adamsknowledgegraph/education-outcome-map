from __future__ import annotations

import csv
import json
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from statistics import mean

from openpyxl import load_workbook


ROOT = Path("/Users/adam/Agents/degree-career-map")
DATA_DIR = ROOT / "data"
RAW_ONET_DIR = ROOT / "raw" / "onet" / "db_30_2_text" / "db_30_2_text"
CIP_CROSSWALK = ROOT / "raw" / "crosswalks" / "Education_CIP_to_ONET_SOC.xlsx"
APP_DIR = ROOT / "app"
APP_DATA_JS = APP_DIR / "data" / "prototype-data.js"

INTEREST_META = {
    "tech": {
        "interest_id": "tech",
        "interest_name": "Technology",
        "description": "Building software, systems, and digital products.",
    },
    "healthcare": {
        "interest_id": "healthcare",
        "interest_name": "Healthcare",
        "description": "Helping people through medical or care work.",
    },
    "design": {
        "interest_id": "design",
        "interest_name": "Design",
        "description": "Visual, product, and user experience work.",
    },
    "business": {
        "interest_id": "business",
        "interest_name": "Business",
        "description": "Strategy, finance, operations, and commercial roles.",
    },
    "research": {
        "interest_id": "research",
        "interest_name": "Research",
        "description": "Analysis, investigation, evidence, and problem-solving.",
    },
    "communication": {
        "interest_id": "communication",
        "interest_name": "Communication",
        "description": "Writing, presenting, teaching, persuading, or coordinating.",
    },
    "hands_on": {
        "interest_id": "hands_on",
        "interest_name": "Hands-on Work",
        "description": "Practical and physical work with tangible outputs.",
    },
    "helping_people": {
        "interest_id": "helping_people",
        "interest_name": "Helping People",
        "description": "Service, support, care, and impact-oriented work.",
    },
}


def load_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def write_csv(path: Path, rows: list[dict], fieldnames: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def load_tsv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8-sig") as handle:
        return list(csv.DictReader(handle, delimiter="\t"))


def load_cip_crosswalk(path: Path) -> list[dict[str, str]]:
    workbook = load_workbook(path, read_only=True, data_only=True)
    sheet = workbook[workbook.sheetnames[0]]
    rows = []
    for cip_code, cip_title, onet_soc_code, onet_title in sheet.iter_rows(min_row=5, values_only=True):
        if not cip_code:
            continue
        rows.append(
            {
                "cip_code": str(cip_code),
                "cip_title": str(cip_title),
                "onet_soc_code": str(onet_soc_code),
                "onet_title": str(onet_title),
            }
        )
    return rows


def slug(text: str) -> str:
    return (
        text.lower()
        .replace("&", "and")
        .replace("/", " ")
        .replace(",", "")
        .replace(".", "")
        .replace("-", " ")
        .replace("(", "")
        .replace(")", "")
    ).strip().replace(" ", "_")


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def to_float(value: str) -> float:
    if value in ("", None):
        return 0.0
    return float(value)


def to_int(value: str) -> int:
    if value in ("", None):
        return 0
    return int(float(value))


def split_tags(value: str) -> list[str]:
    return [item.strip() for item in value.split(";") if item.strip()]


def load_ranked_measure(rows: list[dict[str, str]], scale_id: str) -> dict[str, list[dict[str, float | str]]]:
    grouped: dict[str, list[dict[str, float | str]]] = defaultdict(list)
    for row in rows:
        if row.get("Scale ID") != scale_id:
            continue
        grouped[row["O*NET-SOC Code"]].append(
            {
                "name": row["Element Name"],
                "importance_score": round(float(row["Data Value"]), 2),
                "level_score": 0.0,
            }
        )
    for code, items in grouped.items():
        deduped = {}
        for item in items:
            deduped[item["name"]] = item
        grouped[code] = sorted(deduped.values(), key=lambda item: item["importance_score"], reverse=True)
    return grouped


def load_level_lookup(rows: list[dict[str, str]], scale_id: str) -> dict[tuple[str, str], float]:
    lookup = {}
    for row in rows:
        if row.get("Scale ID") != scale_id:
            continue
        lookup[(row["O*NET-SOC Code"], row["Element Name"])] = round(float(row["Data Value"]), 2)
    return lookup


def top_interest_profile(rows: list[dict[str, str]]) -> dict[str, list[dict[str, float | str]]]:
    grouped: dict[str, list[dict[str, float | str]]] = defaultdict(list)
    for row in rows:
        grouped[row["O*NET-SOC Code"]].append(
            {"name": row["Element Name"], "score": round(float(row["Data Value"]), 2)}
        )
    for code in grouped:
        grouped[code] = sorted(grouped[code], key=lambda item: item["score"], reverse=True)
    return grouped


def work_context_lookup(rows: list[dict[str, str]]) -> dict[str, dict[str, float]]:
    grouped: dict[str, dict[str, list[float]]] = defaultdict(lambda: defaultdict(list))
    for row in rows:
        code = row["O*NET-SOC Code"]
        element = row["Element Name"]
        scale = row["Scale ID"]
        value = float(row["Data Value"])
        if scale == "CX":
            grouped[code][element].append(value)
        elif scale in {"CXP", "CTP"}:
            grouped[code][f"{element}__{row['Category']}"].append(value)

    flattened: dict[str, dict[str, float]] = defaultdict(dict)
    for code, items in grouped.items():
        for key, values in items.items():
            flattened[code][key] = round(mean(values), 2)
    return flattened


def derive_schedule_descriptor(context: dict[str, float], override: str) -> str:
    if override:
        return override
    regular = context.get("Work Schedules__1", 0.0)
    irregular = context.get("Work Schedules__2", 0.0)
    seasonal = context.get("Work Schedules__3", 0.0)
    if irregular >= max(regular, seasonal):
        return "irregular"
    if seasonal > regular:
        return "seasonal"
    return "normal"


def build_tradeoff_summary(path: dict[str, str | int | float], target_income: float) -> str:
    annual = float(path["median_annual_wage_usd"])
    hours = int(path["avg_weekly_hours_estimate"])
    ai = path["ai_exposure"]
    geo = path["geographic_concentration"]
    schedule = path["schedule_type"]
    if annual >= target_income and hours >= 48:
        return "Can fund the target lifestyle, but often costs evenings or flexibility."
    if annual >= target_income and geo == "major_hub_dependent":
        return "Strong income path, but it often pulls you toward major city hubs."
    if ai == "low" and geo == "local_anywhere":
        return "Lower AI risk and easier to practice in many places, with more grounded day-to-day tradeoffs."
    if schedule in {"shift", "irregular"}:
        return "Income can work, but your calendar may be the real compromise."
    return "Balanced path with tradeoffs that are easier to explain than just annual salary."


def main() -> None:
    manual_degrees = load_csv(DATA_DIR / "manual_degrees.csv")
    manual_professions = load_csv(DATA_DIR / "manual_profession_overrides.csv")
    manual_paths = load_csv(DATA_DIR / "manual_path_overrides.csv")
    lifestyle_tiers = load_csv(DATA_DIR / "lifestyle_tiers.csv")
    city_cost_tiers = load_csv(DATA_DIR / "city_cost_tiers.csv")
    cip_crosswalk = load_cip_crosswalk(CIP_CROSSWALK)

    occupation_rows = load_tsv(RAW_ONET_DIR / "Occupation Data.txt")
    skills_rows = load_tsv(RAW_ONET_DIR / "Skills.txt")
    knowledge_rows = load_tsv(RAW_ONET_DIR / "Knowledge.txt")
    interests_rows = load_tsv(RAW_ONET_DIR / "Interests.txt")
    work_context_rows = load_tsv(RAW_ONET_DIR / "Work Context.txt")
    job_zone_rows = load_tsv(RAW_ONET_DIR / "Job Zones.txt")

    occupation_lookup = {row["O*NET-SOC Code"]: row for row in occupation_rows}
    skill_importance = load_ranked_measure(skills_rows, "IM")
    skill_levels = load_level_lookup(skills_rows, "LV")
    knowledge_importance = load_ranked_measure(knowledge_rows, "IM")
    knowledge_levels = load_level_lookup(knowledge_rows, "LV")
    interest_profiles = top_interest_profile(interests_rows)
    context_lookup = work_context_lookup(work_context_rows)
    job_zone_lookup = {row["O*NET-SOC Code"]: row["Job Zone"] for row in job_zone_rows}

    crosswalk_by_cip: dict[str, set[str]] = defaultdict(set)
    for row in cip_crosswalk:
        crosswalk_by_cip[row["cip_code"]].add(row["onet_soc_code"])

    degrees_out = []
    degree_interest_tags = []
    for degree in manual_degrees:
        node_id = f"degree:{slug(degree['degree_name'])}_{degree['award_level']}"
        degrees_out.append(
            {
                "degree_id": degree["degree_id"],
                "degree_node_id": node_id,
                "degree_name": degree["degree_name"],
                "degree_family": degree["degree_family"],
                "cip_code": degree["cip_code"],
                "award_level": degree["award_level"],
                "source": degree["source_type"],
                "notes": degree["notes"],
            }
        )
        for interest in split_tags(degree["interest_tags"]):
            degree_interest_tags.append(
                {
                    "degree_id": degree["degree_id"],
                    "interest_id": interest,
                    "edge_type": "tagged_with",
                    "weight": 1.0,
                }
            )

    professions_out = []
    lifestyle_out = []
    profession_interest_tags = []
    profession_skill_rows = []
    unique_skills = {}

    for profession in manual_professions:
        code = profession["onet_soc_code"]
        occupation = occupation_lookup.get(code, {})
        context = context_lookup.get(code, {})
        top_skills = skill_importance.get(code, [])[:5]
        for item in top_skills:
            item["level_score"] = skill_levels.get((code, item["name"]), 0.0)
        top_knowledge = knowledge_importance.get(code, [])[:3]
        for item in top_knowledge:
            item["level_score"] = knowledge_levels.get((code, item["name"]), 0.0)

        for item in top_skills + top_knowledge:
            skill_id = slug(item["name"])
            unique_skills[skill_id] = {
                "skill_id": skill_id,
                "skill_node_id": f"skill:{skill_id}",
                "skill_name": item["name"],
                "skill_category": "knowledge" if item in top_knowledge else "skill",
                "source": "onet_30_2",
            }
            profession_skill_rows.append(
                {
                    "profession_id": profession["profession_id"],
                    "skill_id": skill_id,
                    "edge_type": "requires",
                    "importance_score": round(float(item["importance_score"]), 2),
                    "level_score": round(float(item["level_score"]), 2),
                    "source": "onet_30_2",
                }
            )

        for interest in split_tags(profession["interest_tags"]):
            profession_interest_tags.append(
                {
                    "profession_id": profession["profession_id"],
                    "interest_id": interest,
                    "edge_type": "tagged_with",
                    "weight": 1.0,
                }
            )

        professions_out.append(
            {
                "profession_id": profession["profession_id"],
                "profession_node_id": f"profession:{profession['profession_id']}",
                "profession_name": profession["profession_name"],
                "soc_code": code,
                "profession_family": profession["profession_family"],
                "median_annual_wage_usd": to_int(profession["median_annual_wage_usd"]),
                "median_hourly_wage_usd": round(float(profession["median_hourly_wage_usd"]), 2),
                "employment_count": to_int(profession["employment_count"]),
                "outlook_growth_pct": to_int(profession["outlook_growth_pct"]),
                "openings_annual": to_int(profession["openings_annual"]),
                "job_zone": job_zone_lookup.get(code, ""),
                "onet_title": occupation.get("Title", profession["profession_name"]),
                "onet_description": occupation.get("Description", ""),
                "source": profession["source"],
                "ooh_url": profession["ooh_url"],
            }
        )

        lifestyle_out.append(
            {
                "profession_id": profession["profession_id"],
                "lifestyle_profile_node_id": f"lifestyle:{profession['profession_id']}",
                "avg_weekly_hours_band": (
                    "60_plus"
                    if to_int(profession["avg_weekly_hours_estimate"]) >= 60
                    else "50_60"
                    if to_int(profession["avg_weekly_hours_estimate"]) >= 50
                    else "40_50"
                    if to_int(profession["avg_weekly_hours_estimate"]) >= 40
                    else "35_45"
                ),
                "avg_weekly_hours_estimate": to_int(profession["avg_weekly_hours_estimate"]),
                "schedule_type": derive_schedule_descriptor(context, profession["schedule_type"]),
                "boundary_quality": profession["boundary_quality"],
                "predictability": profession["predictability"],
                "ai_exposure": profession["ai_exposure"],
                "geographic_concentration": profession["geographic_concentration"],
                "physical_intensity": profession["physical_intensity"],
                "remote_friendliness": profession["remote_friendliness"],
                "weekend_work_likelihood": profession["weekend_work_likelihood"],
                "night_work_likelihood": profession["night_work_likelihood"],
                "heuristic_flag": "mixed",
                "source": f"{profession['source']};onet_30_2",
                "notes": f"{profession['hours_note']} {profession['notes']}".strip(),
                "time_pressure_score": round(context.get("Time Pressure", 0.0), 2),
                "contact_with_others_score": round(context.get("Contact With Others", 0.0), 2),
                "email_score": round(context.get("E-Mail", 0.0), 2),
                "face_to_face_score": round(
                    context.get("Face-to-Face Discussions with Individuals and Within Teams", 0.0), 2
                ),
                "sitting_score": round(context.get("Spend Time Sitting", 0.0), 2),
                "standing_score": round(context.get("Spend Time Standing", 0.0), 2),
                "walking_score": round(context.get("Spend Time Walking or Running", 0.0), 2),
                "regular_schedule_pct": round(context.get("Work Schedules__1", 0.0), 2),
                "irregular_schedule_pct": round(context.get("Work Schedules__2", 0.0), 2),
                "seasonal_schedule_pct": round(context.get("Work Schedules__3", 0.0), 2),
            }
        )

    profession_lookup = {row["profession_id"]: row for row in professions_out}
    lifestyle_lookup = {row["profession_id"]: row for row in lifestyle_out}
    profession_by_soc = {row["soc_code"]: row for row in professions_out}

    degree_to_profession_out = []
    path_outcomes = []

    default_target_income = 80000.0
    for path in manual_paths:
        degree = next(item for item in degrees_out if item["degree_id"] == path["degree_id"])
        profession = profession_by_soc[path["onet_soc_code"]]
        lifestyle = lifestyle_lookup[profession["profession_id"]]
        crosswalk_match = False
        if degree["cip_code"]:
            crosswalk_match = path["onet_soc_code"] in crosswalk_by_cip.get(degree["cip_code"], set())
        degree_to_profession_out.append(
            {
                "degree_id": degree["degree_id"],
                "profession_id": profession["profession_id"],
                "edge_type": "leads_to",
                "path_strength": path["path_strength"],
                "confidence": path["confidence"],
                "source": path["source"],
                "notes": path["path_note"],
                "crosswalk_match": "yes" if crosswalk_match else "no",
                "additional_training_required": path["additional_training_required"],
            }
        )

        interest_matches = set(split_tags(next(d for d in manual_degrees if d["degree_id"] == degree["degree_id"])["interest_tags"])) & set(
            split_tags(next(p for p in manual_professions if p["profession_id"] == profession["profession_id"])["interest_tags"])
        )
        interest_fit = round(0.45 + 0.18 * len(interest_matches), 2)
        hours_penalty = 0.0 if lifestyle["avg_weekly_hours_estimate"] <= 42 else 0.08 if lifestyle["avg_weekly_hours_estimate"] <= 48 else 0.18
        premium_support = float(profession["median_annual_wage_usd"]) >= 150000
        comfortable_support = float(profession["median_annual_wage_usd"]) >= default_target_income
        simple_support = float(profession["median_annual_wage_usd"]) >= 45000
        path_outcomes.append(
            {
                "degree_id": degree["degree_id"],
                "profession_id": profession["profession_id"],
                "degree_name": degree["degree_name"],
                "profession_name": profession["profession_name"],
                "median_annual_wage_usd": profession["median_annual_wage_usd"],
                "median_hourly_wage_usd": profession["median_hourly_wage_usd"],
                "employment_count": profession["employment_count"],
                "outlook_growth_pct": profession["outlook_growth_pct"],
                "openings_annual": profession["openings_annual"],
                "avg_weekly_hours_estimate": lifestyle["avg_weekly_hours_estimate"],
                "schedule_type": lifestyle["schedule_type"],
                "boundary_quality": lifestyle["boundary_quality"],
                "predictability": lifestyle["predictability"],
                "ai_exposure": lifestyle["ai_exposure"],
                "geographic_concentration": lifestyle["geographic_concentration"],
                "physical_intensity": lifestyle["physical_intensity"],
                "remote_friendliness": lifestyle["remote_friendliness"],
                "weekend_work_likelihood": lifestyle["weekend_work_likelihood"],
                "night_work_likelihood": lifestyle["night_work_likelihood"],
                "path_strength": path["path_strength"],
                "confidence": float(path["confidence"]),
                "crosswalk_match": crosswalk_match,
                "additional_training_required": path["additional_training_required"],
                "job_zone": profession["job_zone"],
                "interest_fit_baseline": clamp(interest_fit - hours_penalty, 0.2, 1.0),
                "supports_simple": simple_support,
                "supports_comfortable": comfortable_support,
                "supports_premium": premium_support,
                "tradeoff_summary": build_tradeoff_summary(
                    {
                        **profession,
                        **lifestyle,
                    },
                    default_target_income,
                ),
                "source_url": profession["ooh_url"],
                "path_note": path["path_note"],
            }
        )

    skills_out = sorted(unique_skills.values(), key=lambda row: row["skill_name"])

    interest_out = [INTEREST_META[key] for key in INTEREST_META]

    graph_nodes = []
    graph_links = []
    seen_nodes = set()

    for degree in degrees_out:
        node = {
            "id": degree["degree_id"],
            "label": degree["degree_name"],
            "type": "degree",
            "group": degree["degree_family"],
        }
        graph_nodes.append(node)
        seen_nodes.add(node["id"])

    for profession in professions_out:
        node = {
            "id": profession["profession_id"],
            "label": profession["profession_name"],
            "type": "profession",
            "group": profession["profession_family"],
        }
        graph_nodes.append(node)
        seen_nodes.add(node["id"])

    top_skill_ids_by_profession = defaultdict(list)
    for row in profession_skill_rows:
        if len(top_skill_ids_by_profession[row["profession_id"]]) < 3:
            top_skill_ids_by_profession[row["profession_id"]].append(row["skill_id"])
    for skill_id in sorted({item for values in top_skill_ids_by_profession.values() for item in values}):
        skill = next(row for row in skills_out if row["skill_id"] == skill_id)
        if skill_id not in seen_nodes:
            graph_nodes.append(
                {
                    "id": skill_id,
                    "label": skill["skill_name"],
                    "type": "skill",
                    "group": skill["skill_category"],
                }
            )
            seen_nodes.add(skill_id)

    for row in degree_to_profession_out:
        graph_links.append({"source": row["degree_id"], "target": row["profession_id"], "type": "leads_to"})
    for profession_id, skill_ids in top_skill_ids_by_profession.items():
        for skill_id in skill_ids:
            graph_links.append({"source": profession_id, "target": skill_id, "type": "requires"})

    degree_interest_lookup = defaultdict(list)
    for row in degree_interest_tags:
        degree_interest_lookup[row["degree_id"]].append(row["interest_id"])
    profession_interest_lookup = defaultdict(list)
    for row in profession_interest_tags:
        profession_interest_lookup[row["profession_id"]].append(row["interest_id"])

    professions_for_app = []
    manual_profession_lookup = {row["profession_id"]: row for row in manual_professions}
    skill_lookup = {row["skill_id"]: row for row in skills_out}
    profession_skill_lookup = defaultdict(list)
    for row in profession_skill_rows:
        profession_skill_lookup[row["profession_id"]].append(row)
    for row in professions_out:
        pid = row["profession_id"]
        manual = manual_profession_lookup[pid]
        ranked_skills = sorted(
            profession_skill_lookup[pid],
            key=lambda item: (item["importance_score"], item["level_score"]),
            reverse=True,
        )
        top_skill_bundle = []
        for skill_row in ranked_skills[:5]:
            skill = skill_lookup[skill_row["skill_id"]]
            top_skill_bundle.append(
                {
                    "skill_id": skill["skill_id"],
                    "skill_name": skill["skill_name"],
                    "skill_category": skill["skill_category"],
                    "importance_score": skill_row["importance_score"],
                    "level_score": skill_row["level_score"],
                }
            )
        professions_for_app.append(
            {
                **row,
                **lifestyle_lookup[pid],
                "interest_tags": profession_interest_lookup[pid],
                "top_skills": top_skill_bundle,
                "interest_profile": interest_profiles.get(row["soc_code"], [])[:3],
                "hours_note": manual["hours_note"],
                "notes": manual["notes"],
            }
        )

    degrees_for_app = []
    for row in degrees_out:
        degrees_for_app.append({**row, "interest_tags": degree_interest_lookup[row["degree_id"]]})

    app_payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "sources": {
            "onet_database_release": "30.2",
            "cip_crosswalk": "2020 Classification of Instructional Programs (CIP) to O*NET-SOC 2019",
            "bls_reference": "Selected occupation pages from the Occupational Outlook Handbook, accessed March 12, 2026.",
        },
        "lifestyle_tiers": lifestyle_tiers,
        "city_cost_tiers": city_cost_tiers,
        "interests": interest_out,
        "degrees": degrees_for_app,
        "professions": professions_for_app,
        "paths": path_outcomes,
        "graph": {"nodes": graph_nodes, "links": graph_links},
    }

    write_csv(
        DATA_DIR / "degrees_v1.csv",
        degrees_out,
        ["degree_id", "degree_node_id", "degree_name", "degree_family", "cip_code", "award_level", "source", "notes"],
    )
    write_csv(
        DATA_DIR / "professions_v1.csv",
        professions_out,
        [
            "profession_id",
            "profession_node_id",
            "profession_name",
            "soc_code",
            "profession_family",
            "median_annual_wage_usd",
            "median_hourly_wage_usd",
            "employment_count",
            "outlook_growth_pct",
            "openings_annual",
            "job_zone",
            "onet_title",
            "onet_description",
            "source",
            "ooh_url",
        ],
    )
    write_csv(
        DATA_DIR / "skills_v1.csv",
        skills_out,
        ["skill_id", "skill_node_id", "skill_name", "skill_category", "source"],
    )
    write_csv(
        DATA_DIR / "degree_to_profession_v1.csv",
        degree_to_profession_out,
        [
            "degree_id",
            "profession_id",
            "edge_type",
            "path_strength",
            "confidence",
            "source",
            "notes",
            "crosswalk_match",
            "additional_training_required",
        ],
    )
    write_csv(
        DATA_DIR / "profession_to_skill_v1.csv",
        profession_skill_rows,
        ["profession_id", "skill_id", "edge_type", "importance_score", "level_score", "source"],
    )
    write_csv(
        DATA_DIR / "profession_lifestyle_profiles_v1.csv",
        lifestyle_out,
        [
            "profession_id",
            "lifestyle_profile_node_id",
            "avg_weekly_hours_band",
            "avg_weekly_hours_estimate",
            "schedule_type",
            "boundary_quality",
            "predictability",
            "ai_exposure",
            "geographic_concentration",
            "physical_intensity",
            "remote_friendliness",
            "weekend_work_likelihood",
            "night_work_likelihood",
            "heuristic_flag",
            "source",
            "notes",
            "time_pressure_score",
            "contact_with_others_score",
            "email_score",
            "face_to_face_score",
            "sitting_score",
            "standing_score",
            "walking_score",
            "regular_schedule_pct",
            "irregular_schedule_pct",
            "seasonal_schedule_pct",
        ],
    )
    write_csv(
        DATA_DIR / "degree_interest_tags_v1.csv",
        degree_interest_tags,
        ["degree_id", "interest_id", "edge_type", "weight"],
    )
    write_csv(
        DATA_DIR / "profession_interest_tags_v1.csv",
        profession_interest_tags,
        ["profession_id", "interest_id", "edge_type", "weight"],
    )
    write_csv(
        DATA_DIR / "path_outcomes_v1.csv",
        path_outcomes,
        list(path_outcomes[0].keys()),
    )

    (APP_DIR / "data").mkdir(parents=True, exist_ok=True)
    APP_DATA_JS.write_text(
        "window.PROTOTYPE_DATA = " + json.dumps(app_payload, indent=2) + ";\n",
        encoding="utf-8",
    )
    (DATA_DIR / "path_outcomes_v1.json").write_text(json.dumps(app_payload["paths"], indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
