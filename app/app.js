(function () {
  const data = window.PROTOTYPE_DATA;
  const state = {
    lifestyleTier: "comfortable",
    cityTier: "medium_cost",
    interests: new Set(),
    normalHours: false,
    lowAi: false,
    avoidHubs: false,
  };

  const els = {
    lifestyleTier: document.getElementById("lifestyle-tier"),
    cityTier: document.getElementById("city-tier"),
    interestChips: document.getElementById("interest-chips"),
    normalHours: document.getElementById("normal-hours"),
    lowAi: document.getElementById("low-ai"),
    avoidHubs: document.getElementById("avoid-hubs"),
    resetButton: document.getElementById("reset-button"),
    summary: document.getElementById("summary"),
    results: document.getElementById("results"),
    resultsCaption: document.getElementById("results-caption"),
    graph: document.getElementById("graph"),
    pathCount: document.getElementById("path-count"),
  };

  const degreesById = new Map(data.degrees.map((item) => [item.degree_id, item]));
  const professionsById = new Map(data.professions.map((item) => [item.profession_id, item]));

  function niceLabel(value) {
    return value.replaceAll("_", " ");
  }

  function titleCase(value) {
    return niceLabel(value).replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function money(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }

  function hourly(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  }

  function loadSelects() {
    data.lifestyle_tiers.forEach((tier) => {
      const option = document.createElement("option");
      option.value = tier.lifestyle_tier_id;
      option.textContent = `${tier.lifestyle_tier_name} (${money(Number(tier.base_required_income_usd))})`;
      els.lifestyleTier.appendChild(option);
    });
    data.city_cost_tiers.forEach((tier) => {
      const option = document.createElement("option");
      option.value = tier.city_cost_tier_id;
      option.textContent = `${tier.city_cost_tier_name} (${tier.income_multiplier}x)`;
      els.cityTier.appendChild(option);
    });
  }

  function loadInterests() {
    data.interests.forEach((interest) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = interest.interest_name;
      button.dataset.id = interest.interest_id;
      button.addEventListener("click", () => {
        if (state.interests.has(interest.interest_id)) {
          state.interests.delete(interest.interest_id);
        } else {
          state.interests.add(interest.interest_id);
        }
        button.classList.toggle("active", state.interests.has(interest.interest_id));
        render();
      });
      els.interestChips.appendChild(button);
    });
  }

  function getSelectedTargetIncome() {
    const tier = data.lifestyle_tiers.find((item) => item.lifestyle_tier_id === state.lifestyleTier);
    const city = data.city_cost_tiers.find((item) => item.city_cost_tier_id === state.cityTier);
    return Number(tier.base_required_income_usd) * Number(city.income_multiplier);
  }

  function interestScore(path) {
    if (state.interests.size === 0) {
      return 0.55;
    }
    const degree = degreesById.get(path.degree_id);
    const profession = professionsById.get(path.profession_id);
    const combined = new Set([...(degree.interest_tags || []), ...(profession.interest_tags || [])]);
    let hits = 0;
    state.interests.forEach((interest) => {
      if (combined.has(interest)) {
        hits += 1;
      }
    });
    return hits / state.interests.size;
  }

  function scheduleScore(path) {
    let score = 1;
    if (path.avg_weekly_hours_estimate >= 50) score -= 0.35;
    else if (path.avg_weekly_hours_estimate >= 45) score -= 0.18;
    if (path.schedule_type === "shift") score -= 0.22;
    if (path.schedule_type === "irregular") score -= 0.25;
    if (path.weekend_work_likelihood === "high") score -= 0.2;
    if (path.night_work_likelihood === "high") score -= 0.2;
    return Math.max(0, score);
  }

  function aiScore(path) {
    if (!state.lowAi) return 0.65;
    return path.ai_exposure === "low" ? 1 : path.ai_exposure === "medium" ? 0.55 : 0.12;
  }

  function geoScore(path) {
    if (!state.avoidHubs) return 0.65;
    return path.geographic_concentration === "local_anywhere"
      ? 1
      : path.geographic_concentration === "regional"
      ? 0.62
      : 0.18;
  }

  function computeScore(path) {
    const targetIncome = getSelectedTargetIncome();
    const incomeScore = Math.min(path.median_annual_wage_usd / targetIncome, 1.15) / 1.15;
    const interestFit = interestScore(path);
    const hoursFit = scheduleScore(path);
    const aiFit = aiScore(path);
    const geoFit = geoScore(path);
    const weighting = state.normalHours
      ? { income: 0.3, interest: 0.2, hours: 0.3, ai: 0.1, geo: 0.1 }
      : { income: 0.4, interest: 0.2, hours: 0.18, ai: 0.12, geo: 0.1 };
    const composite =
      incomeScore * weighting.income +
      interestFit * weighting.interest +
      hoursFit * weighting.hours +
      aiFit * weighting.ai +
      geoFit * weighting.geo;
    return {
      composite,
      incomeScore,
      interestFit,
      hoursFit,
      aiFit,
      geoFit,
      targetIncome,
    };
  }

  function scoreLabel(value) {
    if (value >= 0.82) return "Strong fit";
    if (value >= 0.67) return "Solid fit";
    if (value >= 0.52) return "Conditional";
    return "Tough fit";
  }

  function renderSummary(scoredPaths) {
    const best = scoredPaths[0];
    const targetIncome = getSelectedTargetIncome();
    const avgHourly =
      scoredPaths.reduce((sum, item) => sum + item.path.median_hourly_wage_usd, 0) / Math.max(scoredPaths.length, 1);
    const avgHours =
      scoredPaths.reduce((sum, item) => sum + item.path.avg_weekly_hours_estimate, 0) / Math.max(scoredPaths.length, 1);
    els.summary.innerHTML = `
      <article class="summary-card">
        <h3>Target income</h3>
        <strong>${money(targetIncome)}</strong>
        <span class="caption">based on your lifestyle and city settings</span>
      </article>
      <article class="summary-card">
        <h3>Top match</h3>
        <strong>${best ? best.path.profession_name : "No match"}</strong>
        <span class="caption">${best ? best.path.degree_name : "Try changing filters"}</span>
      </article>
      <article class="summary-card">
        <h3>Average hourly</h3>
        <strong>${hourly(avgHourly || 0)}</strong>
        <span class="caption">across the currently visible paths</span>
      </article>
      <article class="summary-card">
        <h3>Average week</h3>
        <strong>${Math.round(avgHours || 0)} hrs</strong>
        <span class="caption">before nights/weekends are factored in</span>
      </article>
    `;
  }

  function resultCard(item) {
    const path = item.path;
    const profession = professionsById.get(path.profession_id);
    const premiumLine =
      path.supports_premium ? "Can support a premium life." : path.supports_comfortable ? "Can support a comfortable life." : "More likely to support a simple life unless costs stay low.";
    const trainingNote = path.additional_training_required
      ? `<p class="tradeoff"><strong>Extra training:</strong> ${titleCase(path.additional_training_required)}.</p>`
      : "";
    return `
      <article class="result-card">
        <div class="card-head">
          <div>
            <h3>${path.degree_name} → ${path.profession_name}</h3>
            <div class="meta-strip">${scoreLabel(item.score.composite)} · ${premiumLine}</div>
          </div>
          <div class="score-pill">${Math.round(item.score.composite * 100)}</div>
        </div>
        <div class="stats">
          <div class="stat">
            <span>Hourly</span>
            <strong>${hourly(path.median_hourly_wage_usd)}</strong>
          </div>
          <div class="stat">
            <span>Annual</span>
            <strong>${money(path.median_annual_wage_usd)}</strong>
          </div>
          <div class="stat">
            <span>Typical week</span>
            <strong>${path.avg_weekly_hours_estimate} hrs</strong>
          </div>
          <div class="stat">
            <span>Outlook</span>
            <strong>${path.outlook_growth_pct}% growth</strong>
          </div>
        </div>
        <div class="stats">
          <div class="stat">
            <span>Schedule</span>
            <strong>${titleCase(path.schedule_type)}</strong>
          </div>
          <div class="stat">
            <span>AI exposure</span>
            <strong>${titleCase(path.ai_exposure)}</strong>
          </div>
          <div class="stat">
            <span>City pressure</span>
            <strong>${titleCase(path.geographic_concentration)}</strong>
          </div>
          <div class="stat">
            <span>Boundary quality</span>
            <strong>${titleCase(path.boundary_quality)}</strong>
          </div>
        </div>
        <div class="tags">
          ${(profession.top_skills || [])
            .slice(0, 5)
            .map((skill) => `<span class="tag">${skill.skill_name}</span>`)
            .join("")}
        </div>
        <p class="tradeoff"><strong>Tradeoff:</strong> ${path.tradeoff_summary}</p>
        <p class="tradeoff"><strong>Hours note:</strong> ${profession.hours_note}</p>
        ${trainingNote}
      </article>
    `;
  }

  function renderResults(scoredPaths) {
    els.resultsCaption.textContent = `${scoredPaths.length} paths currently visible`;
    els.results.innerHTML = scoredPaths.map(resultCard).join("");
  }

  function renderGraph(scoredPaths) {
    const svg = els.graph;
    svg.innerHTML = "";
    const top = scoredPaths.slice(0, 5);
    const degreeIds = [...new Set(top.map((item) => item.path.degree_id))];
    const professionIds = [...new Set(top.map((item) => item.path.profession_id))];
    const skillIds = [...new Set(top.flatMap((item) => (professionsById.get(item.path.profession_id).top_skills || []).slice(0, 3).map((skill) => skill.skill_id)))];

    const width = 980;
    const height = 520;
    const columns = { degree: 180, profession: 490, skill: 805 };

    function layout(ids, x) {
      return ids.map((id, index) => ({
        id,
        x,
        y: 85 + index * ((height - 140) / Math.max(ids.length - 1, 1)),
      }));
    }

    const degreeNodes = layout(degreeIds, columns.degree);
    const professionNodes = layout(professionIds, columns.profession);
    const skillNodes = layout(skillIds, columns.skill);
    const positions = new Map([...degreeNodes, ...professionNodes, ...skillNodes].map((node) => [node.id, node]));

    function line(x1, y1, x2, y2) {
      const el = document.createElementNS("http://www.w3.org/2000/svg", "line");
      el.setAttribute("x1", x1);
      el.setAttribute("y1", y1);
      el.setAttribute("x2", x2);
      el.setAttribute("y2", y2);
      el.setAttribute("class", "graph-link");
      return el;
    }

    top.forEach((item) => {
      const degree = positions.get(item.path.degree_id);
      const profession = positions.get(item.path.profession_id);
      if (degree && profession) {
        svg.appendChild(line(degree.x + 16, degree.y, profession.x - 16, profession.y));
      }
      (professionsById.get(item.path.profession_id).top_skills || []).slice(0, 3).forEach((skill) => {
        const skillNode = positions.get(skill.skill_id);
        if (profession && skillNode) {
          svg.appendChild(line(profession.x + 16, profession.y, skillNode.x - 16, skillNode.y));
        }
      });
    });

    function drawNode(node, label, nodeClass) {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", node.x);
      circle.setAttribute("cy", node.y);
      circle.setAttribute("r", 12);
      circle.setAttribute("class", nodeClass);
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", node.x + 18);
      text.setAttribute("y", node.y + 4);
      text.setAttribute("class", "graph-label");
      text.textContent = label;
      group.appendChild(circle);
      group.appendChild(text);
      svg.appendChild(group);
    }

    degreeNodes.forEach((node) => drawNode(node, degreesById.get(node.id).degree_name, "graph-node-degree"));
    professionNodes.forEach((node) => drawNode(node, professionsById.get(node.id).profession_name, "graph-node-profession"));
    skillNodes.forEach((node) => {
      const profession = top
        .map((item) => professionsById.get(item.path.profession_id))
        .find((entry) => (entry.top_skills || []).some((skill) => skill.skill_id === node.id));
      const skill = (profession.top_skills || []).find((entry) => entry.skill_id === node.id);
      drawNode(node, skill.skill_name, "graph-node-skill");
    });
  }

  function render() {
    const scoredPaths = data.paths
      .map((path) => ({ path, score: computeScore(path) }))
      .sort((a, b) => b.score.composite - a.score.composite);

    els.pathCount.textContent = String(data.paths.length);
    renderSummary(scoredPaths);
    renderResults(scoredPaths);
    renderGraph(scoredPaths);
  }

  function bindEvents() {
    els.lifestyleTier.addEventListener("change", (event) => {
      state.lifestyleTier = event.target.value;
      render();
    });
    els.cityTier.addEventListener("change", (event) => {
      state.cityTier = event.target.value;
      render();
    });
    els.normalHours.addEventListener("change", (event) => {
      state.normalHours = event.target.checked;
      render();
    });
    els.lowAi.addEventListener("change", (event) => {
      state.lowAi = event.target.checked;
      render();
    });
    els.avoidHubs.addEventListener("change", (event) => {
      state.avoidHubs = event.target.checked;
      render();
    });
    els.resetButton.addEventListener("click", () => {
      state.lifestyleTier = "comfortable";
      state.cityTier = "medium_cost";
      state.interests.clear();
      state.normalHours = false;
      state.lowAi = false;
      state.avoidHubs = false;
      els.lifestyleTier.value = state.lifestyleTier;
      els.cityTier.value = state.cityTier;
      els.normalHours.checked = false;
      els.lowAi.checked = false;
      els.avoidHubs.checked = false;
      document.querySelectorAll(".chip").forEach((chip) => chip.classList.remove("active"));
      render();
    });
  }

  loadSelects();
  loadInterests();
  els.lifestyleTier.value = state.lifestyleTier;
  els.cityTier.value = state.cityTier;
  bindEvents();
  render();
})();
