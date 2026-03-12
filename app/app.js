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
    pulseDegrees: document.getElementById("pulse-degrees"),
    pulseCareers: document.getElementById("pulse-careers"),
    pulsePrograms: document.getElementById("pulse-programs"),
    pulseSources: document.getElementById("pulse-sources"),
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
    schoolCaption: document.getElementById("school-caption"),
    schoolResults: document.getElementById("school-results"),
    compareCaption: document.getElementById("compare-caption"),
    compare: document.getElementById("compare"),
    graphCaption: document.getElementById("graph-caption"),
    graph: document.getElementById("graph"),
  };

  const degreesById = new Map(data.degrees.map((item) => [item.degree_id, item]));
  const professionsById = new Map(data.professions.map((item) => [item.profession_id, item]));
  const pathsByDegree = new Map();

  data.degrees.forEach((degree) => {
    pathsByDegree.set(
      degree.degree_id,
      data.paths.filter((path) => path.degree_id === degree.degree_id),
    );
  });

  function clamp(value, low, high) {
    return Math.max(low, Math.min(high, value));
  }

  function niceLabel(value) {
    return String(value || "").replaceAll("_", " ");
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
      maximumFractionDigits: 2,
    }).format(Number(value || 0));
  }

  function shortNumber(value) {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(Number(value || 0));
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
        if (state.interests.has(interest.interest_id)) state.interests.delete(interest.interest_id);
        else state.interests.add(interest.interest_id);
        render();
      });
      button.dataset.id = interest.interest_id;
      els.interestChips.appendChild(button);
    });

    data.profile_schema.strengths.forEach((strength) => {
      const button = chipButton(strength.label, false, () => {
        if (state.strengths.has(strength.strength_id)) state.strengths.delete(strength.strength_id);
        else state.strengths.add(strength.strength_id);
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
    if (scoreBreakdown.income >= 0.9) reasons.push("Income is strong against the selected lifestyle target.");
    if (scoreBreakdown.schedule >= 0.8) reasons.push("Hours and schedule are relatively compatible with having a life outside work.");
    if (scoreBreakdown.access >= 0.8) reasons.push("The route looks realistic on grades, budget, and training time.");
    if (degree.pathway_type === "trade" || degree.time_to_complete_years <= 2) {
      reasons.push("It is one of the faster or lower-debt routes in the dataset.");
    }
    if (state.lowAi && path.ai_exposure === "low") reasons.push("It scores well on AI durability.");
    if (state.avoidHubs && path.geographic_concentration === "local_anywhere") {
      reasons.push("It should not require a major-hub move to access the work.");
    }
    if (!reasons.length) reasons.push("This is a balanced route, not a pure prestige or salary play.");
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

  function renderSources(sources, limit = 4) {
    if (!sources || !sources.length) return `<span class="muted">No linked sources</span>`;
    return sources
      .slice(0, limit)
      .map((source) => {
        if (!source.url) return `<span class="source-link">${source.label}</span>`;
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

  function renderWorkStyles(workStyles) {
    if (!workStyles || !workStyles.length) return `<span class="muted">No work-style profile loaded</span>`;
    return workStyles
      .slice(0, 4)
      .map((item) => metricChip(`${item.name} (${item.score.toFixed(1)})`))
      .join("");
  }

  function renderTechExamples(examples) {
    if (!examples || !examples.length) return `<span class="muted">No common tools loaded</span>`;
    return examples
      .slice(0, 4)
      .map((item) => metricChip(item.example))
      .join("");
  }

  function selectivityBand(program) {
    const admission = Number(program.admission_rate || 0);
    const sat = Number(program.sat_average || 0);
    if (sat >= 1450 || (admission > 0 && admission <= 0.15)) return { label: "Very selective", rank: 5 };
    if (sat >= 1320 || (admission > 0 && admission <= 0.35)) return { label: "Selective", rank: 4 };
    if (sat >= 1180 || (admission > 0 && admission <= 0.65)) return { label: "Moderately selective", rank: 3 };
    if (admission > 0) return { label: "More open access", rank: 2 };
    return { label: "Selectivity unclear", rank: 3 };
  }

  function selectivityFit(program) {
    const selected = academicRanks.get(state.academicProfile) || 3;
    const band = selectivityBand(program);
    const gap = band.rank - selected;
    if (gap <= 0) return 1;
    if (gap === 1) return 0.72;
    if (gap === 2) return 0.42;
    return 0.2;
  }

  function affordabilityFit(program) {
    const selected = budgetRanks.get(state.budget) || 2;
    const price = Number(program.avg_net_price || program.tuition_in_state || 0);
    let required = 2;
    if (price > 34000) required = 3;
    else if (price > 18000) required = 2;
    else required = 1;
    const gap = required - selected;
    if (gap <= 0) return 1;
    if (gap === 1) return 0.66;
    return 0.34;
  }

  function schoolOutcomeScore(program) {
    const earnings = Number(program.program_earnings_4yr || program.institution_earnings_10yr || 0);
    const completion = Number(program.completion_rate || 0);
    return clamp((earnings / 120000) * 0.62 + (completion || 0.45) * 0.38, 0.18, 1);
  }

  function schoolFitScore(program) {
    return (
      selectivityFit(program) * 0.32 +
      affordabilityFit(program) * 0.28 +
      schoolOutcomeScore(program) * 0.24 +
      clamp(Number(program.featured_score || 0), 0.15, 1) * 0.16
    );
  }

  function programStateLine(program) {
    return `${program.institution_city}, ${program.institution_state}`;
  }

  function buildUpsides(path) {
    const items = [];
    if (path.median_hourly_wage_usd >= 40) items.push(`High hourly upside at ${hourly(path.median_hourly_wage_usd)}/hr.`);
    if (path.openings_annual >= 40000) items.push(`${shortNumber(path.openings_annual)} openings each year keeps demand broad.`);
    if (path.ai_exposure === "low") items.push("The work is relatively durable against AI compression.");
    if (path.geographic_concentration === "local_anywhere") {
      items.push("You can access versions of this work in many places, not just elite hubs.");
    }
    if (path.avg_weekly_hours_estimate <= 40 && path.schedule_type === "normal") {
      items.push("The schedule is one of the cleaner lifestyle fits in the current set.");
    }
    if (!items.length) items.push("Its value is in the overall blend of realism, upside, and access.");
    return items.slice(0, 3);
  }

  function buildCompromises(path) {
    const items = [];
    if (path.avg_weekly_hours_estimate >= 48) items.push(`Expect long weeks around ${path.avg_weekly_hours_estimate} hours.`);
    if (path.schedule_type === "shift" || path.schedule_type === "irregular") {
      items.push("The real sacrifice is calendar control, not just effort.");
    }
    if (path.ai_exposure === "high") items.push("Routine parts of the job are likely to be reshaped by AI.");
    if (path.geographic_concentration === "major_hub_dependent") {
      items.push("Top versions of the job tend to cluster in specific metros.");
    }
    if (path.additional_training_required && path.additional_training_required !== "None") {
      items.push(`There may still be an extra hurdle beyond the credential: ${niceLabel(path.additional_training_required)}.`);
    }
    if (!items.length) items.push("The tradeoff is milder here, but execution and internships still matter.");
    return items.slice(0, 3);
  }

  function renderProgramExamples(programs) {
    if (!programs || !programs.length) {
      return `<div class="empty-state">No named school examples are loaded for this route yet.</div>`;
    }
    return programs
      .slice(0, 5)
      .map(
        (program) => `
          <div class="career-row">
            <div>
              <strong>${program.institution_name}</strong>
              <span>${programStateLine(program)} · ${program.program_title}</span>
              <span>${selectivityBand(program).label} · ${program.segment_label.replaceAll("_", " ")}</span>
            </div>
            <em>${program.avg_net_price ? money(program.avg_net_price) : program.tuition_in_state ? money(program.tuition_in_state) : "Price unclear"}</em>
          </div>
        `,
      )
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
      return `<div class="empty-state">Nothing clears the current profile. Loosen grades, cost, time, or reality filters and the map should widen.</div>`;
    }

    return paths
      .map((path) => {
        const profession = path.profession || {};
        const professionSources = profession.source_links || path.source_links || [];
        const educationMix =
          (path.required_education_distribution || []).slice(0, 2).map((item) => `${item.label} (${Math.round(item.value)}%)`).join(" · ") ||
          "Education mix not loaded";

        return `
          <article class="result-card">
            <div class="card-head">
              <div>
                <h3>${path.profession_name}</h3>
                <p>Best current route: ${path.degree_name}</p>
              </div>
              <div class="score-pill">${path.scorePercent}% fit</div>
            </div>

            <div class="meta-strip">
              ${metricChip(path.pathway_type === "trade" ? "Trade route" : titleCase(path.award_level))}
              ${metricChip(`${path.estimated_total_training_years} yrs total training`)}
              ${metricChip(`${hourly(path.median_hourly_wage_usd)}/hr`)}
              ${metricChip(`${path.avg_weekly_hours_estimate} hrs/week`)}
              ${metricChip(titleCase(path.schedule_type))}
              ${metricChip(`${titleCase(path.ai_exposure)} AI pressure`)}
            </div>

            <div class="route-layout">
              <div class="route-block">
                <div class="stats-grid">
                  <div class="stat"><span>Annual pay</span><strong>${money(path.median_annual_wage_usd)}</strong></div>
                  <div class="stat"><span>Openings / year</span><strong>${shortNumber(path.openings_annual)}</strong></div>
                  <div class="stat"><span>School options</span><strong>${path.institution_examples.length}</strong></div>
                  <div class="stat"><span>Required education mix</span><strong>${educationMix}</strong></div>
                </div>

                <p class="callout">${path.tradeoff_summary}</p>
                <p class="callout warm">${path.reality_check}</p>

                <div class="section-label">Why this showed up</div>
                <ul class="route-list">${path.matchReasons.map((item) => `<li>${item}</li>`).join("")}</ul>

                <div class="section-label">Real school examples</div>
                <div class="career-list">${renderProgramExamples(path.institution_examples)}</div>
              </div>

              <div class="route-block">
                <div class="fact-grid">
                  <div class="fact-card"><span>Hours reality</span><strong>${path.avg_weekly_hours_estimate} hrs/week</strong></div>
                  <div class="fact-card"><span>Calendar</span><strong>${titleCase(path.schedule_type)}</strong></div>
                  <div class="fact-card"><span>Location need</span><strong>${titleCase(path.geographic_concentration)}</strong></div>
                  <div class="fact-card"><span>Access signal</span><strong>${Math.round(path.scoreBreakdown.access * 100)}%</strong></div>
                </div>

                <div class="section-label">What you get</div>
                <ul class="route-list">${buildUpsides(path).map((item) => `<li>${item}</li>`).join("")}</ul>

                <div class="section-label">What you give up</div>
                <ul class="route-list">${buildCompromises(path).map((item) => `<li>${item}</li>`).join("")}</ul>

                <div class="section-label">Core skills</div>
                <div class="inline-list">${renderTopSkills(path.top_skills)}</div>

                <div class="section-label">Work style</div>
                <div class="inline-list">${renderWorkStyles(path.top_work_styles)}</div>

                <div class="section-label">Common tools</div>
                <div class="inline-list">${renderTechExamples(path.technology_examples)}</div>

                <div class="section-label">Evidence</div>
                <div class="source-list">${renderSources(professionSources)}</div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function degreeCards(degrees) {
    if (!degrees.length) {
      return `<div class="empty-state">Nothing currently scores as a clean fit. Try widening cost or time constraints, or add interests so the ranking has something stronger to work with.</div>`;
    }

    return degrees
      .map((degree) => {
        const downstream = degree.downstream.slice(0, 3);
        const lead = downstream[0];
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
              ${metricChip(`${titleCase(degree.cost_band)} cost`)}
              ${metricChip(`Academic profile: ${titleCase(degree.academic_profile_min)}`)}
              ${metricChip(`${degree.program_states_covered || 0} coverage geographies`)}
            </div>

            <div class="route-layout">
              <div class="route-block">
                <div class="stats-grid">
                  <div class="stat"><span>Best downstream pay</span><strong>${hourly(degree.max_downstream_hourly_wage_usd)}/hr</strong></div>
                  <div class="stat"><span>Best openings</span><strong>${shortNumber(degree.best_openings_annual)}</strong></div>
                  <div class="stat"><span>School options</span><strong>${degree.institution_example_count}</strong></div>
                  <div class="stat"><span>Access fit</span><strong>${Math.round(degree.scoreBreakdown.access * 100)}%</strong></div>
                </div>

                <p class="callout">This route wins when the student profile fits the work and the time-plus-cost tradeoff still makes sense.</p>
                <p class="callout warm">${degree.grade_proxy_note}</p>

                <div class="section-label">Best downstream outcomes</div>
                <div class="career-list">
                  ${downstream
                    .map(
                      (path) => `
                        <div class="career-row">
                          <div>
                            <strong>${path.profession_name}</strong>
                            <span>${hourly(path.median_hourly_wage_usd)}/hr · ${path.avg_weekly_hours_estimate} hrs/week · ${titleCase(path.schedule_type)}</span>
                            <span>${titleCase(path.ai_exposure)} AI pressure · ${titleCase(path.geographic_concentration)}</span>
                          </div>
                          <em>${path.scorePercent}% fit</em>
                        </div>
                      `,
                    )
                    .join("")}
                </div>
              </div>

              <div class="route-block">
                <div class="fact-grid">
                  <div class="fact-card"><span>Interest fit</span><strong>${Math.round(degree.scoreBreakdown.interest * 100)}%</strong></div>
                  <div class="fact-card"><span>Strength fit</span><strong>${Math.round(degree.scoreBreakdown.strength * 100)}%</strong></div>
                  <div class="fact-card"><span>Career upside</span><strong>${lead ? lead.profession_name : "None"}</strong></div>
                  <div class="fact-card"><span>Program spread</span><strong>${degree.program_states_covered || 0} geographies</strong></div>
                </div>

                <div class="section-label">Real school examples</div>
                <div class="career-list">${renderProgramExamples(degree.institution_examples)}</div>

                <div class="section-label">Core evidence</div>
                <div class="source-list">${renderSources(degree.source_links)}</div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function collectSchoolOptions(items, mode) {
    const byId = new Map();

    if (mode === "lifestyle_first") {
      items.forEach((path) => {
        path.institution_examples.forEach((program) => {
          const schoolScore = schoolFitScore(program);
          const combinedScore = path.score * 0.6 + schoolScore * 0.4;
          const existing = byId.get(program.program_option_id);
          const candidate = {
            ...program,
            routeName: path.degree_name,
            careerName: path.profession_name,
            routeScore: path.score,
            schoolFit: schoolScore,
            combinedScore,
          };
          if (!existing || candidate.combinedScore > existing.combinedScore) {
            byId.set(program.program_option_id, candidate);
          }
        });
      });
    } else {
      items.forEach((degree) => {
        degree.institution_examples.forEach((program) => {
          const schoolScore = schoolFitScore(program);
          const combinedScore = degree.score * 0.58 + schoolScore * 0.42;
          const existing = byId.get(program.program_option_id);
          const candidate = {
            ...program,
            routeName: degree.degree_name,
            careerName: degree.downstream[0]?.profession_name || "Mapped downstream path",
            routeScore: degree.score,
            schoolFit: schoolScore,
            combinedScore,
          };
          if (!existing || candidate.combinedScore > existing.combinedScore) {
            byId.set(program.program_option_id, candidate);
          }
        });
      });
    }

    return [...byId.values()].sort((a, b) => b.combinedScore - a.combinedScore).slice(0, 10);
  }

  function schoolCards(programs) {
    if (!programs.length) {
      return `<div class="empty-state">No school options are available for the current slice yet.</div>`;
    }

    return programs
      .map((program) => {
        const selectivity = selectivityBand(program);
        const price = Number(program.avg_net_price || program.tuition_in_state || 0);
        return `
          <article class="school-card">
            <div class="school-kicker">
              <div>
                <h3>${program.institution_name}</h3>
                <span>${programStateLine(program)}</span>
              </div>
              <span class="school-badge school-score">${Math.round(program.combinedScore * 100)}% school fit</span>
            </div>

            <div class="school-meta">
              ${program.routeName} · ${program.careerName}
            </div>

            <div class="school-badges">
              <span class="school-badge">${program.program_title}</span>
              <span class="school-badge">${selectivity.label}</span>
              <span class="school-badge">${program.segment_label.replaceAll("_", " ")}</span>
              <span class="school-badge">${price ? money(price) : "Price unclear"}</span>
            </div>

            <div class="fact-grid">
              <div class="fact-card"><span>Program / school earnings</span><strong>${program.program_earnings_4yr ? money(program.program_earnings_4yr) : money(program.institution_earnings_10yr)}</strong></div>
              <div class="fact-card"><span>Completion</span><strong>${program.completion_rate ? Math.round(program.completion_rate * 100) + "%" : "Unknown"}</strong></div>
              <div class="fact-card"><span>Admission</span><strong>${program.admission_rate ? Math.round(program.admission_rate * 100) + "%" : "Open/unknown"}</strong></div>
              <div class="fact-card"><span>SAT average</span><strong>${program.sat_average || "N/A"}</strong></div>
            </div>

            <div class="school-sources">${renderSources(program.source_links, 3)}</div>
          </article>
        `;
      })
      .join("");
  }

  function compareTable(rows, mode) {
    if (!rows.length) {
      return `<div class="empty-state">No rows available for comparison yet.</div>`;
    }

    if (mode === "lifestyle_first") {
      return `
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Pay / hr</th>
              <th>Hours</th>
              <th>Schedule</th>
              <th>AI</th>
              <th>Hub need</th>
              <th>Schools</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .slice(0, 6)
              .map(
                (path) => `
                  <tr>
                    <td class="matrix-route">
                      <strong>${path.profession_name}</strong>
                      <span class="matrix-note">via ${path.degree_name}</span>
                    </td>
                    <td>${hourly(path.median_hourly_wage_usd)}</td>
                    <td>${path.avg_weekly_hours_estimate}</td>
                    <td>${titleCase(path.schedule_type)}</td>
                    <td>${titleCase(path.ai_exposure)}</td>
                    <td>${titleCase(path.geographic_concentration)}</td>
                    <td>${path.institution_examples.length}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      `;
    }

    return `
      <table>
        <thead>
          <tr>
            <th>Education route</th>
            <th>Duration</th>
            <th>Academic bar</th>
            <th>Cost</th>
            <th>Coverage</th>
            <th>Top downstream</th>
            <th>Best pay / hr</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .slice(0, 6)
            .map(
              (degree) => `
                <tr>
                  <td class="matrix-route">
                    <strong>${degree.degree_name}</strong>
                    <span class="matrix-note">${titleCase(degree.award_level)} · ${titleCase(degree.pathway_type)}</span>
                  </td>
                  <td>${degree.time_to_complete_years} yrs</td>
                  <td>${titleCase(degree.academic_profile_min)}</td>
                  <td>${titleCase(degree.cost_band)}</td>
                  <td>${degree.program_states_covered || 0}</td>
                  <td>${degree.downstream[0]?.profession_name || "None"}</td>
                  <td>${hourly(degree.max_downstream_hourly_wage_usd)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    `;
  }

  function renderSummary(results) {
    if (state.journey === "lifestyle_first") {
      const top = results[0];
      const shortRoutes = results.filter((item) => Number(item.estimated_total_training_years) <= 2 && item.score >= 0.6);
      const tradeRoutes = results.filter((item) => item.pathway_type === "trade" && item.score >= 0.55);
      renderSummaryCards([
        {
          label: "Lifestyle Target",
          value: money(selectedTargetIncome()),
          note: "Income threshold after the chosen city-cost multiplier.",
        },
        {
          label: "Top Match",
          value: top ? top.profession_name : "No strong match",
          note: top ? `${top.degree_name} · ${hourly(top.median_hourly_wage_usd)}/hr` : "Loosen the profile to widen the search.",
        },
        {
          label: "Fast Options",
          value: String(shortRoutes.length),
          note: "Routes at 2 years or less that still clear a strong score.",
        },
        {
          label: "Trade Routes",
          value: String(tradeRoutes.length),
          note: "Paid-training or trade-style routes that remain competitive here.",
        },
      ]);
      els.summaryTitle.textContent = "Lifestyle-first readout";
      els.summaryCaption.textContent =
        "This ranking starts with the life the student wants to protect, then backs into careers and education routes that still make that life plausible.";
    } else {
      const top = results[0];
      const accessible = results.filter((item) => item.scoreBreakdown.access >= 0.7);
      const quick = results.filter((item) => Number(item.time_to_complete_years) <= 2).sort((a, b) => b.score - a.score)[0];
      const broadest = results.sort((a, b) => (b.program_states_covered || 0) - (a.program_states_covered || 0))[0];
      renderSummaryCards([
        {
          label: "Best Education Fit",
          value: top ? top.degree_name : "No strong fit",
          note: top ? `${titleCase(top.award_level)} · ${top.time_to_complete_years} years` : "Adjust grades, cost, or time filters.",
        },
        {
          label: "Accessible Options",
          value: String(accessible.length),
          note: "Routes that look reasonably reachable on grades, cost, and time.",
        },
        {
          label: "Fastest Good Option",
          value: quick ? quick.degree_name : "None yet",
          note: quick ? `${quick.time_to_complete_years} years · ${quick.downstream[0]?.profession_name || "Mapped path"}` : "No 1-2 year route clears the current profile cleanly.",
        },
        {
          label: "Broadest School Coverage",
          value: broadest ? `${broadest.program_states_covered} geographies` : "N/A",
          note: broadest ? broadest.degree_name : "No school coverage loaded.",
        },
      ]);
      els.summaryTitle.textContent = "Education-fit readout";
      els.summaryCaption.textContent =
        "This ranking starts with what looks realistic for the student, then shows the career upside, school options, and hidden lifestyle costs downstream.";
    }
  }

  function renderGraph(paths) {
    const svg = els.graph;
    svg.innerHTML = "";

    if (!paths.length) return;

    const degreeIds = [...new Set(paths.map((item) => item.degree_id))];
    const professionIds = [...new Set(paths.map((item) => item.profession_id))];
    const skillIds = [
      ...new Set(paths.flatMap((item) => (item.top_skills || []).slice(0, 2).map((skill) => skill.skill_id))),
    ];

    const degreeNodes = degreeIds.map((id) => ({ id, label: degreesById.get(id).degree_name, type: "degree" }));
    const professionNodes = professionIds.map((id) => ({ id, label: professionsById.get(id).profession_name, type: "profession" }));
    const skillNodes = skillIds.map((id) => {
      const skill = paths.flatMap((item) => item.top_skills || []).find((item) => item.skill_id === id);
      return { id, label: skill ? skill.skill_name : id, type: "skill" };
    });

    const columns = [
      { label: "Education", x: 170, width: 220, nodes: degreeNodes },
      { label: "Careers", x: 490, width: 220, nodes: professionNodes },
      { label: "Skills", x: 810, width: 220, nodes: skillNodes },
    ];

    const positions = new Map();
    const ns = "http://www.w3.org/2000/svg";

    columns.forEach((column) => {
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", String(column.x - 110));
      rect.setAttribute("y", "34");
      rect.setAttribute("rx", "24");
      rect.setAttribute("ry", "24");
      rect.setAttribute("width", String(column.width));
      rect.setAttribute("height", "492");
      rect.setAttribute("class", "graph-column");
      svg.appendChild(rect);

      const label = document.createElementNS(ns, "text");
      label.setAttribute("x", String(column.x - 92));
      label.setAttribute("y", "62");
      label.setAttribute("class", "graph-group-label");
      label.textContent = column.label;
      svg.appendChild(label);

      const step = 430 / Math.max(column.nodes.length, 1);
      column.nodes.forEach((node, index) => {
        positions.set(node.id, {
          x: column.x - 76,
          y: 86 + index * step,
          width: 152,
          height: 34,
          type: node.type,
          label: node.label,
        });
      });
    });

    function drawLink(sourceId, targetId) {
      const source = positions.get(sourceId);
      const target = positions.get(targetId);
      if (!source || !target) return;
      const path = document.createElementNS(ns, "path");
      const x1 = source.x + source.width;
      const y1 = source.y + source.height / 2;
      const x2 = target.x;
      const y2 = target.y + target.height / 2;
      path.setAttribute(
        "d",
        `M ${x1} ${y1} C ${x1 + 70} ${y1}, ${x2 - 70} ${y2}, ${x2} ${y2}`,
      );
      path.setAttribute("class", "graph-link");
      svg.appendChild(path);
    }

    paths.forEach((path) => {
      drawLink(path.degree_id, path.profession_id);
      (path.top_skills || []).slice(0, 2).forEach((skill) => drawLink(path.profession_id, skill.skill_id));
    });

    positions.forEach((position) => {
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", String(position.x));
      rect.setAttribute("y", String(position.y));
      rect.setAttribute("rx", "14");
      rect.setAttribute("ry", "14");
      rect.setAttribute("width", String(position.width));
      rect.setAttribute("height", String(position.height));
      rect.setAttribute("class", `graph-node ${position.type}`);
      svg.appendChild(rect);

      const label = document.createElementNS(ns, "text");
      label.setAttribute("x", String(position.x + 12));
      label.setAttribute("y", String(position.y + 21));
      label.setAttribute("class", "graph-label");
      label.textContent = position.label.length > 24 ? `${position.label.slice(0, 22)}…` : position.label;
      svg.appendChild(label);
    });
  }

  function render() {
    syncChipState();

    els.pathCount.textContent = Number(data.prototype_scope.path_count).toLocaleString("en-US");
    els.scopeCopy.textContent = `${data.prototype_scope.degree_count} routes · ${data.prototype_scope.profession_count} careers · ${data.prototype_scope.program_option_count} real program options`;
    els.pulseDegrees.textContent = Number(data.prototype_scope.degree_count).toLocaleString("en-US");
    els.pulseCareers.textContent = Number(data.prototype_scope.profession_count).toLocaleString("en-US");
    els.pulsePrograms.textContent = Number(data.prototype_scope.program_option_count).toLocaleString("en-US");
    els.pulseSources.textContent = Number(data.sources.length).toLocaleString("en-US");

    const decoratedPaths = data.paths.map(decoratePath).sort((a, b) => b.score - a.score);
    const decoratedDegrees = data.degrees.map(decorateDegree).sort((a, b) => b.score - a.score);

    if (state.journey === "lifestyle_first") {
      const topPaths = decoratedPaths.slice(0, 8);
      const schoolOptions = collectSchoolOptions(topPaths, "lifestyle_first");
      els.resultsTitle.textContent = "Career paths that match this life";
      els.resultsCaption.textContent =
        "These are ranked by lifestyle fit first, then realism of access, downstream demand, and how directly the education route leads into the job.";
      els.schoolCaption.textContent =
        "Named programs are ranked by route fit plus school affordability, selectivity, completion, and earnings signals.";
      els.compareCaption.textContent =
        "Use this to see where the compromise really sits: hours, AI, hub dependence, and school coverage.";
      els.graphCaption.textContent =
        "This slice follows the strongest lifestyle-first routes from education to career to skill demand.";
      els.results.innerHTML = pathCards(topPaths);
      els.schoolResults.innerHTML = schoolCards(schoolOptions);
      els.compare.innerHTML = compareTable(topPaths, "lifestyle_first");
      renderSummary(topPaths);
      renderGraph(topPaths.slice(0, 6));
    } else {
      const topDegrees = decoratedDegrees.slice(0, 7);
      const schoolOptions = collectSchoolOptions(topDegrees, "education_first");
      const graphPaths = topDegrees.flatMap((degree) => degree.downstream.slice(0, 2)).slice(0, 6);
      els.resultsTitle.textContent = "Education options that fit this student";
      els.resultsCaption.textContent =
        "These are ranked by realism first, then by the quality of the downstream work, the lifestyle tradeoffs, and the spread of real school options.";
      els.schoolCaption.textContent =
        "These are the most promising real programs after factoring in school fit, cost, selectivity, and outcome signals.";
      els.compareCaption.textContent =
        "This view compares the route itself before a student gets lost in school-brand prestige.";
      els.graphCaption.textContent =
        "This slice follows the best-fit education routes into their strongest downstream careers and core skill demands.";
      els.results.innerHTML = degreeCards(topDegrees);
      els.schoolResults.innerHTML = schoolCards(schoolOptions);
      els.compare.innerHTML = compareTable(topDegrees, "education_first");
      renderSummary(topDegrees);
      renderGraph(graphPaths);
    }
  }

  buildJourneyToggle();
  setupFilters();
  buildChips();
  render();
})();
