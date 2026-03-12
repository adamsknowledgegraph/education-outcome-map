(function () {
  const data = window.PROTOTYPE_DATA;
  const academicRanks = new Map(
    data.profile_schema.academic_profiles.map((item) => [item.value, Number(item.rank)]),
  );
  const budgetRanks = new Map(
    data.profile_schema.budget_levels.map((item) => [item.value, Number(item.rank)]),
  );

  const state = {
    journey: "lifestyle_first",
    lifestyleTier: "comfortable",
    cityTier: "medium_cost",
    academicProfile: "solid",
    budget: "medium",
    maxTrainingYears: 4,
    interests: new Set(),
    strengths: new Set(),
    normalHours: false,
    lowAi: false,
    avoidHubs: false,
  };

  const els = {
    pathCount: document.getElementById("path-count"),
    scopeCopy: document.getElementById("scope-copy"),
    journeyToggle: document.getElementById("journey-toggle"),
    interestChips: document.getElementById("interest-chips"),
    strengthChips: document.getElementById("strength-chips"),
    academicProfile: document.getElementById("academic-profile"),
    budgetLevel: document.getElementById("budget-level"),
    maxTrainingYears: document.getElementById("max-training-years"),
    lifestyleTier: document.getElementById("lifestyle-tier"),
    cityTier: document.getElementById("city-tier"),
    normalHours: document.getElementById("normal-hours"),
    lowAi: document.getElementById("low-ai"),
    avoidHubs: document.getElementById("avoid-hubs"),
    resetButton: document.getElementById("reset-button"),
    summaryTitle: document.getElementById("summary-title"),
    summaryCaption: document.getElementById("summary-caption"),
    summary: document.getElementById("summary"),
    resultsTitle: document.getElementById("results-title"),
    resultsCaption: document.getElementById("results-caption"),
    results: document.getElementById("results"),
    graphCaption: document.getElementById("graph-caption"),
    graph: document.getElementById("graph"),
  };

  const degreesById = new Map(data.degrees.map((item) => [item.degree_id, item]));
  const professionsById = new Map(data.professions.map((item) => [item.profession_id, item]));
  const pathsByDegree = new Map();

  data.degrees.forEach((degree) => {
    const matching = data.paths.filter((path) => path.degree_id === degree.degree_id);
    pathsByDegree.set(degree.degree_id, matching);
  });

  function clamp(value, low, high) {
    return Math.max(low, Math.min(high, value));
  }

  function niceLabel(value) {
    return String(value).replaceAll("_", " ");
  }

  function titleCase(value) {
    return niceLabel(value).replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function money(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(value || 0));
  }

  function hourly(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(Number(value || 0));
  }

  function percent(value) {
    return `${Math.round(Number(value || 0))}%`;
  }

  function arrayAverage(values) {
    if (!values.length) return 0;
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  function selectedTargetIncome() {
    const tier = data.lifestyle_tiers.find((item) => item.lifestyle_tier_id === state.lifestyleTier);
    const city = data.city_cost_tiers.find((item) => item.city_cost_tier_id === state.cityTier);
    return Number(tier.base_required_income_usd) * Number(city.income_multiplier);
  }

  function chipButton(label, active, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = label;
    if (active) button.classList.add("active");
    button.addEventListener("click", onClick);
    return button;
  }

  function buildJourneyToggle() {
    data.profile_schema.journeys.forEach((journey) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "segment-button";
      button.dataset.id = journey.journey_id;
      button.innerHTML = `<strong>${journey.label}</strong><small>${journey.description}</small>`;
      button.addEventListener("click", () => {
        state.journey = journey.journey_id;
        render();
      });
      els.journeyToggle.appendChild(button);
    });
  }

  function loadSelect(select, items, valueKey, labelBuilder) {
    items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item[valueKey];
      option.textContent = labelBuilder(item);
      select.appendChild(option);
    });
  }

  function setupFilters() {
    loadSelect(
      els.academicProfile,
      data.profile_schema.academic_profiles,
      "value",
      (item) => item.label,
    );
    loadSelect(els.budgetLevel, data.profile_schema.budget_levels, "value", (item) => item.label);
    loadSelect(
      els.maxTrainingYears,
      data.profile_schema.training_limits_years,
      "value",
      (item) => item.label,
    );
    loadSelect(
      els.lifestyleTier,
      data.lifestyle_tiers,
      "lifestyle_tier_id",
      (item) => `${item.lifestyle_tier_name} (${money(item.base_required_income_usd)})`,
    );
    loadSelect(
      els.cityTier,
      data.city_cost_tiers,
      "city_cost_tier_id",
      (item) => `${item.city_cost_tier_name} (${item.income_multiplier}x)`,
    );

    els.academicProfile.value = state.academicProfile;
    els.budgetLevel.value = state.budget;
    els.maxTrainingYears.value = String(state.maxTrainingYears);
    els.lifestyleTier.value = state.lifestyleTier;
    els.cityTier.value = state.cityTier;

    els.academicProfile.addEventListener("change", () => {
      state.academicProfile = els.academicProfile.value;
      render();
    });
    els.budgetLevel.addEventListener("change", () => {
      state.budget = els.budgetLevel.value;
      render();
    });
    els.maxTrainingYears.addEventListener("change", () => {
      state.maxTrainingYears = Number(els.maxTrainingYears.value);
      render();
    });
    els.lifestyleTier.addEventListener("change", () => {
      state.lifestyleTier = els.lifestyleTier.value;
      render();
    });
    els.cityTier.addEventListener("change", () => {
      state.cityTier = els.cityTier.value;
      render();
    });

    els.normalHours.addEventListener("change", () => {
      state.normalHours = els.normalHours.checked;
      render();
    });
    els.lowAi.addEventListener("change", () => {
      state.lowAi = els.lowAi.checked;
      render();
    });
    els.avoidHubs.addEventListener("change", () => {
      state.avoidHubs = els.avoidHubs.checked;
      render();
    });

    els.resetButton.addEventListener("click", () => {
      state.journey = "lifestyle_first";
      state.lifestyleTier = "comfortable";
      state.cityTier = "medium_cost";
      state.academicProfile = "solid";
      state.budget = "medium";
      state.maxTrainingYears = 4;
      state.interests.clear();
      state.strengths.clear();
      state.normalHours = false;
      state.lowAi = false;
      state.avoidHubs = false;

      els.academicProfile.value = state.academicProfile;
      els.budgetLevel.value = state.budget;
      els.maxTrainingYears.value = String(state.maxTrainingYears);
      els.lifestyleTier.value = state.lifestyleTier;
      els.cityTier.value = state.cityTier;
      els.normalHours.checked = false;
      els.lowAi.checked = false;
      els.avoidHubs.checked = false;
      render();
    });
  }

  function buildChips() {
    data.interests.forEach((interest) => {
      const button = chipButton(interest.interest_name, false, () => {
        if (state.interests.has(interest.interest_id)) {
          state.interests.delete(interest.interest_id);
        } else {
          state.interests.add(interest.interest_id);
        }
        render();
      });
      button.dataset.id = interest.interest_id;
      els.interestChips.appendChild(button);
    });

    data.profile_schema.strengths.forEach((strength) => {
      const button = chipButton(strength.label, false, () => {
        if (state.strengths.has(strength.strength_id)) {
          state.strengths.delete(strength.strength_id);
        } else {
          state.strengths.add(strength.strength_id);
        }
        render();
      });
      button.dataset.id = strength.strength_id;
      els.strengthChips.appendChild(button);
    });
  }

  function syncChipState() {
    Array.from(els.interestChips.children).forEach((button) => {
      button.classList.toggle("active", state.interests.has(button.dataset.id));
    });
    Array.from(els.strengthChips.children).forEach((button) => {
      button.classList.toggle("active", state.strengths.has(button.dataset.id));
    });
    Array.from(els.journeyToggle.children).forEach((button) => {
      button.classList.toggle("active", button.dataset.id === state.journey);
    });
  }

  function interestScore(tags) {
    if (!state.interests.size) return 0.66;
    const tagSet = new Set(tags || []);
    let hits = 0;
    state.interests.forEach((interest) => {
      if (tagSet.has(interest)) hits += 1;
    });
    return clamp(hits / state.interests.size, 0.15, 1);
  }

  function strengthScore(fitScores) {
    if (!state.strengths.size) return 0.66;
    const values = [];
    state.strengths.forEach((strength) => {
      values.push(Number((fitScores && fitScores[strength]) || 0) / 5);
    });
    return clamp(arrayAverage(values), 0.15, 1);
  }

  function academicAccessScore(degree) {
    const selected = academicRanks.get(state.academicProfile) || 3;
    const required = Number(degree.academic_profile_min_rank || 1);
    const gap = required - selected;
    if (gap <= 0) return 1;
    if (gap === 1) return 0.74;
    if (gap === 2) return 0.42;
    return 0.16;
  }

  function budgetScore(degree) {
    const selected = budgetRanks.get(state.budget) || 2;
    const cost = Number(degree.cost_band_rank || 2);
    const gap = cost - selected;
    if (gap <= 0) return 1;
    if (gap === 1) return 0.68;
    return 0.35;
  }

  function trainingScore(years) {
    const gap = Number(years || 0) - Number(state.maxTrainingYears || 0);
    if (gap <= 0) return 1;
    if (gap <= 2) return 0.56;
    return 0.18;
  }

  function degreeAccessScore(degree) {
    return (
      academicAccessScore(degree) * 0.44 +
      budgetScore(degree) * 0.28 +
      trainingScore(degree.time_to_complete_years) * 0.28
    );
  }

  function incomeScore(path) {
    const ratio = Number(path.median_annual_wage_usd || 0) / selectedTargetIncome();
    if (ratio >= 1.15) return 1;
    if (ratio >= 1) return 0.92;
    if (ratio >= 0.8) return 0.76;
    if (ratio >= 0.6) return 0.56;
    return clamp(ratio, 0.18, 0.45);
  }

  function scheduleScore(path) {
    let score = 1;
    const hours = Number(path.avg_weekly_hours_estimate || 0);
    if (hours >= 55) score -= 0.34;
    else if (hours >= 48) score -= 0.2;
    else if (hours >= 44) score -= 0.1;

    if (path.schedule_type === "shift") score -= state.normalHours ? 0.28 : 0.16;
    if (path.schedule_type === "irregular") score -= state.normalHours ? 0.32 : 0.2;
    if (path.weekend_work_likelihood === "high") score -= state.normalHours ? 0.22 : 0.12;
    if (path.night_work_likelihood === "high") score -= state.normalHours ? 0.22 : 0.12;

    const boundaryScores = { strong: 1, moderate: 0.68, weak: 0.35 };
    const predictabilityScores = { high: 1, medium: 0.66, low: 0.36 };
    score = score * 0.52 + (boundaryScores[path.boundary_quality] || 0.6) * 0.28;
    score += (predictabilityScores[path.predictability] || 0.6) * 0.2;
    return clamp(score, 0.08, 1);
  }

  function aiGeoScore(path) {
    const aiScores = { low: 1, medium: 0.64, high: 0.28 };
    const geoScores = { local_anywhere: 1, regional: 0.68, major_hub_dependent: 0.28 };
    let score = 0.72;
    if (state.lowAi) score = aiScores[path.ai_exposure] || score;
    if (state.avoidHubs) {
      const geo = geoScores[path.geographic_concentration] || 0.6;
      score = state.lowAi ? (score + geo) / 2 : geo;
    }
    return clamp(score, 0.18, 1);
  }

  function confidenceScore(path) {
    return clamp(0.4 + Number(path.confidence || 0) * 0.6, 0.2, 1);
  }

  function openingsScore(path) {
    const openings = Number(path.openings_annual || 0);
    if (openings >= 80000) return 1;
    if (openings >= 40000) return 0.82;
    if (openings >= 15000) return 0.64;
    if (openings >= 5000) return 0.46;
    return 0.28;
  }

  function buildPathReasons(path, degree, scoreBreakdown) {
    const reasons = [];
    if (scoreBreakdown.income >= 0.9) reasons.push("Income is strong for your selected lifestyle target.");
    if (scoreBreakdown.schedule >= 0.8) reasons.push("Hours and schedule are relatively compatible with keeping a life outside work.");
    if (scoreBreakdown.access >= 0.8) reasons.push("The route looks realistic given your grades, budget, and training tolerance.");
    if (degree.pathway_type === "trade" || degree.award_level === "associates" || degree.time_to_complete_years <= 2) {
      reasons.push("This is one of the faster or lower-debt routes in the dataset.");
    }
    if (state.lowAi && path.ai_exposure === "low") reasons.push("It scores well on AI durability.");
    if (state.avoidHubs && path.geographic_concentration === "local_anywhere") {
      reasons.push("You should not need a major-hub move to access this path.");
    }
    if (!reasons.length) reasons.push("This is a balanced route rather than a pure prestige or income play.");
    return reasons.slice(0, 3);
  }

  function decoratePath(path) {
    const degree = degreesById.get(path.degree_id);
    const scoreBreakdown = {
      interest: interestScore(path.interest_tags),
      strength: strengthScore(path.fit_scores),
      access:
        degreeAccessScore(degree) * 0.58 +
        trainingScore(path.estimated_total_training_years) * 0.42,
      income: incomeScore(path),
      schedule: scheduleScore(path),
      aiGeo: aiGeoScore(path),
      confidence: confidenceScore(path),
      openings: openingsScore(path),
    };

    const score =
      scoreBreakdown.interest * 0.16 +
      scoreBreakdown.strength * 0.14 +
      scoreBreakdown.access * 0.2 +
      scoreBreakdown.income * 0.18 +
      scoreBreakdown.schedule * 0.15 +
      scoreBreakdown.aiGeo * 0.08 +
      scoreBreakdown.confidence * 0.05 +
      scoreBreakdown.openings * 0.04;

    return {
      ...path,
      score,
      scorePercent: Math.round(score * 100),
      degree,
      profession: professionsById.get(path.profession_id),
      scoreBreakdown,
      matchReasons: buildPathReasons(path, degree, scoreBreakdown),
    };
  }

  function decorateDegree(degree) {
    const downstream = (pathsByDegree.get(degree.degree_id) || [])
      .map(decoratePath)
      .sort((a, b) => b.score - a.score);

    const scoreBreakdown = {
      interest: interestScore(degree.interest_tags),
      strength: strengthScore(degree.fit_scores),
      access: degreeAccessScore(degree),
      downstream: arrayAverage(downstream.slice(0, 3).map((item) => item.score || 0)),
    };

    const score =
      scoreBreakdown.interest * 0.22 +
      scoreBreakdown.strength * 0.22 +
      scoreBreakdown.access * 0.34 +
      scoreBreakdown.downstream * 0.22;

    return {
      ...degree,
      downstream,
      score,
      scorePercent: Math.round(score * 100),
      scoreBreakdown,
    };
  }

  function metricChip(text) {
    return `<span class="mini-chip">${text}</span>`;
  }

  function renderSources(sources) {
    if (!sources || !sources.length) return `<span class="muted">No linked sources</span>`;
    return sources
      .slice(0, 4)
      .map((source) => {
        if (!source.url) {
          return `<span class="source-link">${source.label}</span>`;
        }
        return `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`;
      })
      .join("");
  }

  function renderTopSkills(skills) {
    if (!skills || !skills.length) return `<span class="muted">No skill profile loaded</span>`;
    return skills
      .slice(0, 4)
      .map((skill) => metricChip(`${skill.skill_name} (${Math.round(skill.importance_score)})`))
      .join("");
  }

  function renderSummaryCards(cards) {
    els.summary.innerHTML = cards
      .map(
        (card) => `
          <article class="summary-card">
            <h3>${card.label}</h3>
            <strong>${card.value}</strong>
            <p>${card.note}</p>
          </article>
        `,
      )
      .join("");
  }

  function pathCards(paths) {
    if (!paths.length) {
      return `<div class="empty-state">Nothing clears the current filters. Loosen the academic, budget, or schedule constraints and this will widen quickly.</div>`;
    }

    return paths
      .map((path) => {
        return `
          <article class="result-card">
            <div class="card-head">
              <div>
                <h3>${path.profession_name}</h3>
                <p>via ${path.degree_name}</p>
              </div>
              <div class="score-pill">${path.scorePercent}% fit</div>
            </div>

            <div class="meta-strip">
              ${metricChip(`${path.pathway_type === "trade" ? "Trade route" : titleCase(path.award_level)}`)}
              ${metricChip(`${path.estimated_total_training_years} yrs total training`)}
              ${metricChip(`${hourly(path.median_hourly_wage_usd)}/hr`)}
              ${metricChip(`${path.avg_weekly_hours_estimate} hrs/week`)}
              ${metricChip(titleCase(path.schedule_type))}
              ${metricChip(titleCase(path.ai_exposure) + " AI exposure")}
            </div>

            <div class="stats-grid">
              <div class="stat">
                <span>Annual pay</span>
                <strong>${money(path.median_annual_wage_usd)}</strong>
              </div>
              <div class="stat">
                <span>Openings / year</span>
                <strong>${Number(path.openings_annual).toLocaleString("en-US")}</strong>
              </div>
              <div class="stat">
                <span>Schedule</span>
                <strong>${titleCase(path.schedule_type)}</strong>
              </div>
              <div class="stat">
                <span>Location need</span>
                <strong>${titleCase(path.geographic_concentration)}</strong>
              </div>
            </div>

            <p class="callout">${path.tradeoff_summary}</p>
            <p class="callout warm">${path.reality_check}</p>

            <p class="metric-note"><strong>Why it fits:</strong> ${path.matchReasons.join(" ")}</p>
            <p class="metric-note"><strong>Reality check on access:</strong> ${path.grade_proxy_note}</p>

            <div class="section-label">Top skills</div>
            <div class="inline-list">${renderTopSkills(path.top_skills)}</div>

            <div class="section-label">Evidence</div>
            <div class="source-list">${renderSources(path.source_links)}</div>
          </article>
        `;
      })
      .join("");
  }

  function degreeCards(degrees) {
    if (!degrees.length) {
      return `<div class="empty-state">Nothing currently scores as a clean fit. Try widening your budget or time horizon, or add interests so the ranking has more to work with.</div>`;
    }

    return degrees
      .map((degree) => {
        const downstreamRows = degree.downstream.slice(0, 3);
        return `
          <article class="result-card">
            <div class="card-head">
              <div>
                <h3>${degree.degree_name}</h3>
                <p>${titleCase(degree.award_level)} · ${titleCase(degree.pathway_type)}</p>
              </div>
              <div class="score-pill">${degree.scorePercent}% fit</div>
            </div>

            <div class="meta-strip">
              ${metricChip(`${degree.time_to_complete_years} yrs`)}
              ${metricChip(titleCase(degree.cost_band) + " cost")}
              ${metricChip("Academic profile: " + titleCase(degree.academic_profile_min))}
              ${metricChip(`${degree.path_count} mapped outcomes`)}
            </div>

            <div class="stats-grid">
              <div class="stat">
                <span>Top downstream pay</span>
                <strong>${hourly(degree.max_downstream_hourly_wage_usd)}/hr</strong>
              </div>
              <div class="stat">
                <span>Best openings</span>
                <strong>${Number(degree.best_openings_annual).toLocaleString("en-US")}</strong>
              </div>
              <div class="stat">
                <span>Strength fit</span>
                <strong>${Math.round(degree.scoreBreakdown.strength * 100)}%</strong>
              </div>
              <div class="stat">
                <span>Access fit</span>
                <strong>${Math.round(degree.scoreBreakdown.access * 100)}%</strong>
              </div>
            </div>

            <p class="callout">This route fits best when a student’s interests and strengths line up with the work, and when the time + cost tradeoff still feels worth it.</p>
            <p class="callout warm">${degree.grade_proxy_note}</p>

            <div class="section-label">Best downstream outcomes</div>
            <div class="career-list">
              ${downstreamRows
                .map(
                  (path) => `
                    <div class="career-row">
                      <div>
                        <strong>${path.profession_name}</strong>
                        <span>${hourly(path.median_hourly_wage_usd)}/hr · ${path.avg_weekly_hours_estimate} hrs/week · ${titleCase(path.schedule_type)}</span>
                      </div>
                      <em>${path.scorePercent}% fit</em>
                    </div>
                  `,
                )
                .join("")}
            </div>

            <div class="section-label">Evidence</div>
            <div class="source-list">${renderSources(degree.source_links)}</div>
          </article>
        `;
      })
      .join("");
  }

  function renderSummary(results) {
    if (state.journey === "lifestyle_first") {
      const top = results[0];
      const shortRoutes = results.filter((item) => Number(item.estimated_total_training_years) <= 2 && item.score >= 0.6);
      const trades = results.filter((item) => item.pathway_type === "trade" && item.score >= 0.55);
      renderSummaryCards([
        {
          label: "Target Income",
          value: money(selectedTargetIncome()),
          note: "This is the lifestyle threshold after the selected city-cost multiplier.",
        },
        {
          label: "Top Match",
          value: top ? top.profession_name : "No match yet",
          note: top ? `${top.degree_name} · ${hourly(top.median_hourly_wage_usd)}/hr` : "Loosen the filters to widen the list.",
        },
        {
          label: "Fast Strong Fits",
          value: String(shortRoutes.length),
          note: "Routes at 2 years of training or less that still clear a decent match score.",
        },
        {
          label: "Trade Routes",
          value: String(trades.length),
          note: "High-confidence trade pathways that remain competitive under your current preferences.",
        },
      ]);
      els.summaryTitle.textContent = "Lifestyle-first summary";
      els.summaryCaption.textContent =
        "The ranking starts from the life the student wants, then backs into careers and education routes that feel realistic.";
    } else {
      const top = results[0];
      const accessible = results.filter((item) => item.scoreBreakdown.access >= 0.7);
      const quick = results
        .filter((item) => Number(item.time_to_complete_years) <= 2)
        .sort((a, b) => b.score - a.score)[0];
      const highUpside = results
        .filter((item) => item.downstream.length)
        .sort(
          (a, b) =>
            Number(b.max_downstream_annual_wage_usd || 0) - Number(a.max_downstream_annual_wage_usd || 0),
        )[0];

      renderSummaryCards([
        {
          label: "Best Education Fit",
          value: top ? top.degree_name : "No fit yet",
          note: top ? `${titleCase(top.award_level)} · ${top.time_to_complete_years} years` : "Adjust grades, cost, or time inputs.",
        },
        {
          label: "Accessible Options",
          value: String(accessible.length),
          note: "Degrees and credentials that look reasonably reachable on grades, cost, and time.",
        },
        {
          label: "Fastest Good Option",
          value: quick ? quick.degree_name : "None yet",
          note: quick ? `${quick.time_to_complete_years} years · ${quick.downstream[0]?.profession_name || "Mapped path"}` : "No 1-2 year route clears the current constraints.",
        },
        {
          label: "Highest Upside",
          value: highUpside ? highUpside.degree_name : "None yet",
          note: highUpside ? `Can plausibly lead to ${money(highUpside.max_downstream_annual_wage_usd)}` : "No downstream outcome loaded.",
        },
      ]);
      els.summaryTitle.textContent = "Education-fit summary";
      els.summaryCaption.textContent =
        "The ranking starts from what seems realistic for the student, then shows the career upside and tradeoffs downstream.";
    }
  }

  function renderGraph(paths) {
    const svg = els.graph;
    svg.innerHTML = "";

    if (!paths.length) {
      return;
    }

    const degreeIds = [...new Set(paths.map((item) => item.degree_id))];
    const professionIds = [...new Set(paths.map((item) => item.profession_id))];
    const skillIds = [...new Set(paths.flatMap((item) => item.top_skills.slice(0, 2).map((skill) => skill.skill_id)))];

    const degreeNodes = degreeIds.map((id) => ({ id, label: degreesById.get(id).degree_name }));
    const professionNodes = professionIds.map((id) => ({ id, label: professionsById.get(id).profession_name }));
    const skillNodes = skillIds.map((id) => {
      const skill = paths.flatMap((item) => item.top_skills).find((item) => item.skill_id === id);
      return { id, label: skill ? skill.skill_name : id };
    });

    const positions = new Map();
    const columns = [
      { label: "Education", x: 170, nodes: degreeNodes },
      { label: "Career", x: 490, nodes: professionNodes },
      { label: "Skills", x: 810, nodes: skillNodes },
    ];

    columns.forEach((column) => {
      const step = 480 / Math.max(column.nodes.length, 1);
      column.nodes.forEach((node, index) => {
        positions.set(node.id, {
          x: column.x,
          y: 62 + index * step + step / 2,
        });
      });

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", String(column.x - 60));
      label.setAttribute("y", "24");
      label.setAttribute("class", "graph-group-label");
      label.textContent = column.label;
      svg.appendChild(label);
    });

    function drawLink(sourceId, targetId) {
      const source = positions.get(sourceId);
      const target = positions.get(targetId);
      if (!source || !target) return;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        `M ${source.x} ${source.y} C ${source.x + 110} ${source.y}, ${target.x - 110} ${target.y}, ${target.x} ${target.y}`,
      );
      path.setAttribute("class", "graph-link");
      svg.appendChild(path);
    }

    paths.forEach((path) => {
      drawLink(path.degree_id, path.profession_id);
      path.top_skills.slice(0, 2).forEach((skill) => drawLink(path.profession_id, skill.skill_id));
    });

    positions.forEach((position, id) => {
      const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      node.setAttribute("cx", String(position.x));
      node.setAttribute("cy", String(position.y));
      node.setAttribute("r", "11");
      node.setAttribute("class", "graph-node");
      svg.appendChild(node);

      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      const isSkill = skillIds.includes(id);
      label.setAttribute("x", String(position.x + (isSkill ? 18 : 18)));
      label.setAttribute("y", String(position.y + 4));
      label.setAttribute("class", "graph-label");
      label.textContent = isSkill
        ? skillNodes.find((item) => item.id === id).label
        : degreeIds.includes(id)
          ? degreeNodes.find((item) => item.id === id).label
          : professionNodes.find((item) => item.id === id).label;
      svg.appendChild(label);
    });
  }

  function render() {
    syncChipState();
    els.pathCount.textContent = Number(data.prototype_scope.path_count).toLocaleString("en-US");
    els.scopeCopy.textContent = `${data.prototype_scope.degree_count} education routes · ${data.prototype_scope.profession_count} careers · ${data.prototype_scope.skill_count} skills with provenance`;

    const decoratedPaths = data.paths.map(decoratePath).sort((a, b) => b.score - a.score);
    const decoratedDegrees = data.degrees.map(decorateDegree).sort((a, b) => b.score - a.score);

    if (state.journey === "lifestyle_first") {
      const topPaths = decoratedPaths.slice(0, 9);
      els.resultsTitle.textContent = "Career paths that match this life";
      els.resultsCaption.textContent =
        "These are ranked by lifestyle fit, realism of access, and how directly the education route leads into the job.";
      els.graphCaption.textContent =
        "This slice follows the strongest lifestyle-first paths from education route to career to skill demand.";
      els.results.innerHTML = pathCards(topPaths);
      renderSummary(topPaths);
      renderGraph(topPaths.slice(0, 6));
    } else {
      const topDegrees = decoratedDegrees.slice(0, 8);
      els.resultsTitle.textContent = "Education options that fit this student";
      els.resultsCaption.textContent =
        "These are ranked by student fit first, then by the quality and plausibility of the downstream career outcomes.";
      els.graphCaption.textContent =
        "This slice follows the best-fit education routes into their highest-scoring downstream careers.";
      els.results.innerHTML = degreeCards(topDegrees);
      renderSummary(topDegrees);
      const graphPaths = topDegrees.flatMap((degree) => degree.downstream.slice(0, 2)).slice(0, 6);
      renderGraph(graphPaths);
    }
  }

  buildJourneyToggle();
  setupFilters();
  buildChips();
  render();
})();
