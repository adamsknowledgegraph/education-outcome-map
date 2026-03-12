from __future__ import annotations

import csv
import json
import os
import time
from collections import defaultdict
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from urllib.error import HTTPError
from urllib.request import Request, urlopen


ROOT = Path("/Users/adam/Agents/degree-career-map")
DATA_DIR = ROOT / "data"
RAW_DIR = ROOT / "raw" / "scorecard"
API_BASE = "https://api.data.gov/ed/collegescorecard/v1/schools"
API_KEY = os.environ.get("COLLEGE_SCORECARD_API_KEY", "DEMO_KEY")

SCHOOL_FIELDS = ",".join(
    [
        "id",
        "school.name",
        "school.state",
        "school.city",
        "school.school_url",
        "school.ownership",
        "school.online_only",
        "school.degrees_awarded.predominant",
        "latest.student.size",
        "latest.admissions.admission_rate.overall",
        "latest.admissions.sat_scores.average.overall",
        "latest.cost.tuition.in_state",
        "latest.cost.tuition.out_of_state",
        "latest.cost.avg_net_price.overall",
        "latest.completion.rate_suppressed.overall",
        "latest.earnings.10_yrs_after_entry.median",
        "latest.programs.cip_4_digit",
    ]
)

OWNERSHIP_LABELS = {
    1: "Public",
    2: "Private nonprofit",
    3: "Private for-profit",
}

PREDOMINANT_LABELS = {
    1: "Certificate",
    2: "Associate",
    3: "Bachelor",
    4: "Graduate",
}

QUERY_SEGMENTS = [
    {"predominant": 3, "segment": "four_year", "per_page": 100},
    {"predominant": 2, "segment": "two_year", "per_page": 100},
    {"predominant": 1, "segment": "certificate_first", "per_page": 100},
]
MAX_PER_DEGREE_STATE = 3

FIELDNAMES = [
    "program_option_id",
    "degree_id",
    "degree_name",
    "degree_family",
    "award_level",
    "pathway_type",
    "institution_id",
    "institution_name",
    "institution_state",
    "institution_city",
    "institution_ownership_code",
    "institution_ownership",
    "institution_url",
    "scorecard_school_url",
    "predominant_award_code",
    "predominant_award_label",
    "program_cip4",
    "program_title",
    "program_credential_level",
    "program_credential_title",
    "program_awards_count",
    "program_earnings_1yr",
    "program_earnings_4yr",
    "institution_student_size",
    "institution_earnings_10yr",
    "completion_rate",
    "admission_rate",
    "sat_average",
    "avg_net_price",
    "tuition_in_state",
    "tuition_out_of_state",
    "query_segment",
    "segment_label",
    "featured_score",
    "degree_state_rank",
]


def load_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def write_csv(path: Path, rows: list[dict[str, Any]], fieldnames: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def get_json(url: str, retries: int = 6) -> dict[str, Any]:
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    last_error = None
    for attempt in range(retries):
        try:
            with urlopen(request, timeout=60) as response:
                time.sleep(1.5)
                return json.loads(response.read().decode("utf-8"))
        except HTTPError as exc:  # pragma: no cover - network retry path
            last_error = exc
            if exc.code == 429:
                retry_after = exc.headers.get("Retry-After")
                wait_seconds = float(retry_after) if retry_after else 10 + attempt * 5
                time.sleep(wait_seconds)
                continue
            if exc.code >= 500:
                time.sleep(2 + attempt * 2)
                continue
            raise
        except Exception as exc:  # pragma: no cover - network retry path
            last_error = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url}: {last_error}")


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def to_float(value: Any) -> float:
    if value in ("", None):
        return 0.0
    return float(value)


def to_int(value: Any) -> int:
    if value in ("", None):
        return 0
    return int(float(value))


def school_page_url(school_id: int, school_name: str) -> str:
    slug = school_name.lower().replace("&", "and").replace(".", "").replace("'", "")
    slug = "-".join(part for part in slug.replace("/", " ").replace(",", " ").split())
    return f"https://collegescorecard.ed.gov/school/?{school_id}-{slug}"


def degree_mapping() -> dict[str, dict[str, Any]]:
    manual_degrees = load_csv(DATA_DIR / "manual_degrees.csv")
    mapping: dict[str, dict[str, Any]] = {}
    for degree in manual_degrees:
        cip_code = degree["cip_code"].replace(".", "")[:4] if degree["cip_code"] else ""
        accepted_levels = set()
        if degree["award_level"] == "bachelors":
            accepted_levels = {3}
        elif degree["award_level"] == "associates":
            accepted_levels = {2}
        elif degree["award_level"] == "certificate":
            accepted_levels = {1, 2}
        elif degree["award_level"] == "apprenticeship":
            accepted_levels = {1, 2}

        mapping[degree["degree_id"]] = {
            "degree_id": degree["degree_id"],
            "degree_name": degree["degree_name"],
            "degree_family": degree["degree_family"],
            "award_level": degree["award_level"],
            "pathway_type": degree["pathway_type"],
            "interest_tags": degree["interest_tags"],
            "cip4": cip_code,
            "accepted_levels": accepted_levels,
            "title_keywords": [],
            "exclude_keywords": [],
        }

    mapping["electrician_apprenticeship"]["cip4"] = "4603"
    mapping["electrician_apprenticeship"]["title_keywords"] = ["electric", "power transmission"]
    mapping["carpentry_apprenticeship"]["cip4"] = "4602"
    mapping["carpentry_apprenticeship"]["title_keywords"] = ["carpent"]
    mapping["plumbing_apprenticeship"]["title_keywords"] = ["plumb"]
    mapping["hvac_certificate"]["title_keywords"] = ["heating", "air conditioning", "refrigeration", "hvac"]
    mapping["welding_certificate"]["title_keywords"] = ["precision metal working", "weld"]
    mapping["tile_setting_certificate"]["cip4"] = "4604"
    mapping["tile_setting_certificate"]["title_keywords"] = ["masonry", "tile", "stone"]
    mapping["radiologic_technology_associate"]["title_keywords"] = ["radiologic", "imaging"]
    mapping["respiratory_therapy_associate"]["title_keywords"] = ["respiratory"]
    mapping["radiologic_technology_associate"]["exclude_keywords"] = ["respiratory"]
    mapping["respiratory_therapy_associate"]["exclude_keywords"] = ["radiologic", "imaging"]
    mapping["paralegal_associate"]["title_keywords"] = ["legal support services", "legal assistant", "paralegal"]
    mapping["ux_design_bachelors"]["title_keywords"] = [
        "computer software and media applications",
        "web",
        "digital",
        "interface",
        "user",
    ]
    mapping["graphic_design_bachelors"]["title_keywords"] = ["design and applied arts", "graphic", "design"]
    mapping["communications_bachelors"]["title_keywords"] = ["communication"]
    mapping["social_work_bachelors"]["title_keywords"] = ["social work"]
    mapping["secondary_education_bachelors"]["title_keywords"] = ["teacher", "education"]
    mapping["healthcare_admin_bachelors"]["title_keywords"] = ["health", "administration", "management"]
    return mapping


def program_matches(degree: dict[str, Any], program: dict[str, Any]) -> bool:
    code = str(program.get("code", ""))
    if degree["cip4"] and code != degree["cip4"]:
        return False

    credential_level = to_int(program.get("credential", {}).get("level"))
    if degree["accepted_levels"] and credential_level not in degree["accepted_levels"]:
        return False

    title = str(program.get("title", "")).lower()
    keywords = degree["title_keywords"]
    exclude_keywords = degree["exclude_keywords"]
    if keywords and not any(keyword in title for keyword in keywords):
        return False
    if exclude_keywords and any(keyword in title for keyword in exclude_keywords):
        return False
    return True


def segment_label(degree: dict[str, Any], school: dict[str, Any], query_segment: str) -> str:
    predominant = to_int(school["school"]["degrees_awarded"]["predominant"])
    ownership = to_int(school["school"]["ownership"])
    if degree["pathway_type"] == "trade":
        return "trade_school" if predominant in {1, 2} else "construction_program"
    if predominant == 2:
        return "community_college" if ownership == 1 else "technical_college"
    if predominant == 1:
        return "certificate_provider"
    return "university"


def school_score(row: dict[str, Any], degree: dict[str, Any]) -> float:
    institution_earnings = to_float(row["institution_earnings_10yr"])
    completion = to_float(row["completion_rate"])
    awards = to_int(row["program_awards_count"])
    net_price = to_float(row["avg_net_price"])
    earnings_score = clamp(institution_earnings / 150000, 0, 1)
    completion_score = completion if completion else 0.4
    awards_score = clamp(awards / 120, 0, 1)
    affordability_score = 1 - clamp(net_price / 40000, 0, 1)

    if degree["pathway_type"] == "trade" or degree["award_level"] in {"certificate", "associates"}:
        return round(
            earnings_score * 0.24
            + completion_score * 0.22
            + awards_score * 0.22
            + affordability_score * 0.32,
            4,
        )

    return round(
        earnings_score * 0.38
        + completion_score * 0.28
        + awards_score * 0.18
        + affordability_score * 0.16,
        4,
    )


def fetch_segment_page(predominant: int, per_page: int, page: int) -> dict[str, Any]:
    params = {
        "api_key": API_KEY,
        "school.degrees_awarded.predominant": predominant,
        "fields": SCHOOL_FIELDS,
        "sort": "latest.earnings.10_yrs_after_entry.median:desc",
        "per_page": per_page,
        "page": page,
        "keys_nested": "true",
    }
    url = f"{API_BASE}?{urlencode(params)}"
    return get_json(url)


def fetch_custom_page(params: dict[str, Any]) -> list[dict[str, Any]]:
    query = {"api_key": API_KEY, "fields": SCHOOL_FIELDS, "keys_nested": "true", **params}
    url = f"{API_BASE}?{urlencode(query)}"
    return get_json(url).get("results", [])


def fetch_full_segment(predominant: int, segment: str, per_page: int) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    all_results: list[dict[str, Any]] = []
    raw_pages: dict[str, Any] = {}
    page = 0
    total_pages = None

    while True:
        key = f"{segment}_page_{page}"
        print(f"Fetching {key}...", flush=True)
        payload = fetch_segment_page(predominant, per_page, page)
        results = payload.get("results", [])
        raw_pages[key] = payload
        all_results.extend(results)

        metadata = payload.get("metadata", {}) or {}
        total = to_int(metadata.get("total"))
        if total_pages is None and per_page:
            total_pages = max(1, (total + per_page - 1) // per_page) if total else None

        page += 1
        if not results:
            break
        if total_pages is not None and page >= total_pages:
            break

    return all_results, raw_pages


def build_program_row(
    degree: dict[str, Any],
    school: dict[str, Any],
    program: dict[str, Any],
    query_segment: str,
) -> dict[str, Any]:
    school_name = school["school"]["name"]
    school_url = school["school"].get("school_url") or ""
    school_url = school_url if not school_url or school_url.startswith("http") else f"https://{school_url}"
    awards_count = max(
        to_int(program.get("counts", {}).get("ipeds_awards1")),
        to_int(program.get("counts", {}).get("ipeds_awards2")),
    )
    row = {
        "program_option_id": (
            f"{degree['degree_id']}:{school['school']['state']}:{school['id']}:"
            f"{program.get('code')}:{program.get('credential', {}).get('level')}"
        ),
        "degree_id": degree["degree_id"],
        "degree_name": degree["degree_name"],
        "degree_family": degree["degree_family"],
        "award_level": degree["award_level"],
        "pathway_type": degree["pathway_type"],
        "institution_id": to_int(school["id"]),
        "institution_name": school_name,
        "institution_state": school["school"]["state"],
        "institution_city": school["school"]["city"],
        "institution_ownership_code": to_int(school["school"]["ownership"]),
        "institution_ownership": OWNERSHIP_LABELS.get(
            to_int(school["school"]["ownership"]),
            "Unknown",
        ),
        "institution_url": school_url,
        "scorecard_school_url": school_page_url(to_int(school["id"]), school_name),
        "predominant_award_code": to_int(school["school"]["degrees_awarded"]["predominant"]),
        "predominant_award_label": PREDOMINANT_LABELS.get(
            to_int(school["school"]["degrees_awarded"]["predominant"]),
            "Unknown",
        ),
        "program_cip4": str(program.get("code", "")),
        "program_title": str(program.get("title", "")),
        "program_credential_level": to_int(program.get("credential", {}).get("level")),
        "program_credential_title": str(program.get("credential", {}).get("title", "")),
        "program_awards_count": awards_count,
        "program_earnings_1yr": to_int(
            program.get("earnings", {}).get("1_yr", {}).get("overall_median_earnings")
        ),
        "program_earnings_4yr": to_int(
            program.get("earnings", {}).get("4_yr", {}).get("overall_median_earnings")
        ),
        "institution_student_size": to_int(school.get("latest", {}).get("student", {}).get("size")),
        "institution_earnings_10yr": to_int(
            school.get("latest", {}).get("earnings", {}).get("10_yrs_after_entry", {}).get("median")
        ),
        "completion_rate": round(
            to_float(
                school.get("latest", {}).get("completion", {}).get("rate_suppressed", {}).get("overall")
            ),
            4,
        ),
        "admission_rate": round(
            to_float(
                school.get("latest", {}).get("admissions", {}).get("admission_rate", {}).get("overall")
            ),
            4,
        ),
        "sat_average": to_int(
            school.get("latest", {}).get("admissions", {}).get("sat_scores", {}).get("average", {}).get("overall")
        ),
        "avg_net_price": to_int(
            school.get("latest", {}).get("cost", {}).get("avg_net_price", {}).get("overall")
        ),
        "tuition_in_state": to_int(school.get("latest", {}).get("cost", {}).get("tuition", {}).get("in_state")),
        "tuition_out_of_state": to_int(
            school.get("latest", {}).get("cost", {}).get("tuition", {}).get("out_of_state")
        ),
        "query_segment": query_segment,
    }
    row["segment_label"] = segment_label(degree, school, query_segment)
    row["featured_score"] = school_score(row, degree)
    return row


def append_matching_rows(
    rows: list[dict[str, Any]],
    degree_map: dict[str, dict[str, Any]],
    results: list[dict[str, Any]],
    query_segment: str,
    allowed_degree_ids: set[str] | None = None,
) -> None:
    for school in results:
        if to_int(school.get("school", {}).get("online_only")) != 0:
            continue

        programs = school.get("latest", {}).get("programs", {}).get("cip_4_digit", []) or []
        for program in programs:
            for degree in degree_map.values():
                if allowed_degree_ids and degree["degree_id"] not in allowed_degree_ids:
                    continue
                if not program_matches(degree, program):
                    continue
                rows.append(build_program_row(degree, school, program, query_segment))


def main() -> None:
    degree_map = degree_mapping()
    RAW_DIR.mkdir(parents=True, exist_ok=True)

    raw_payload: dict[str, Any] = {}
    rows: list[dict[str, Any]] = []

    for segment in QUERY_SEGMENTS:
        results, payload_pages = fetch_full_segment(
            segment["predominant"],
            segment["segment"],
            segment["per_page"],
        )
        raw_payload.update(payload_pages)
        append_matching_rows(rows, degree_map, results, segment["segment"])

    ranked_by_degree_state: dict[tuple[str, str], list[dict[str, Any]]] = defaultdict(list)
    for row in rows:
        ranked_by_degree_state[(row["degree_id"], row["institution_state"])].append(row)

    featured_rows: list[dict[str, Any]] = []
    for key, candidates in ranked_by_degree_state.items():
        sorted_candidates = sorted(
            candidates,
            key=lambda item: (
                item["featured_score"],
                item["program_earnings_4yr"],
                item["institution_earnings_10yr"],
                item["completion_rate"],
            ),
            reverse=True,
        )
        for rank, candidate in enumerate(sorted_candidates[:MAX_PER_DEGREE_STATE], start=1):
            candidate = dict(candidate)
            candidate["degree_state_rank"] = rank
            featured_rows.append(candidate)

    featured_rows = sorted(
        featured_rows,
        key=lambda item: (item["degree_id"], -item["featured_score"], item["institution_state"]),
    )

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    (RAW_DIR / "featured_schools_snapshot.json").write_text(
        json.dumps(raw_payload, indent=2),
        encoding="utf-8",
    )

    write_csv(
        DATA_DIR / "education_programs_v1.csv",
        featured_rows,
        FIELDNAMES,
    )


if __name__ == "__main__":
    main()
