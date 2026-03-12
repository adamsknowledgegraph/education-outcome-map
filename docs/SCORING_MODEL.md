# Scoring Model

## Goal

Create a simple, explainable MVP scoring model.

Do not optimize for perfect realism in v1.
Optimize for clarity and usefulness.

## Inputs

### User Inputs

- interests
- lifestyle tier
- city cost tier
- schedule preference

### Schedule Preference

For MVP:

- `I want predictable hours`
- `I can tolerate some unpredictability`
- `I care more about earnings than schedule`

## Path Inputs

Each degree/career path should have:

- annual wage
- hourly wage
- estimated weekly hours
- schedule type
- boundary quality
- predictability
- ai exposure
- geographic concentration
- growth/outlook
- interest tags

## Core Scores

### 1. Lifestyle Fit Score

Question:

Can this path support the user's desired lifestyle in the selected cost tier?

Simple logic:

- compare path earnings against lifestyle threshold
- adjust for city cost tier

Output:

- weak fit
- partial fit
- strong fit

### 2. Time Cost Score

Question:

How much of the user's life does this work consume?

Use:

- weekly hours
- schedule type
- boundary quality

Higher time cost if:

- hours are long
- nights/weekends are common
- boundaries are weak

### 3. Schedule Fit Score

Question:

Does this path match the user's preferred schedule quality?

Higher fit if:

- predictable schedule
- strong boundaries
- lower likelihood of nights/weekends

### 4. Interest Fit Score

Question:

Does the path align with the user's selected interests?

For MVP:

- use simple category matching

### 5. Opportunity Score

Question:

How attractive is this path from a career-outcome perspective?

Use:

- pay
- outlook
- lifestyle fit

### 6. Resilience Score

Question:

How durable and location-flexible is this path likely to be?

Use:

- AI exposure
- geographic concentration

Higher resilience if:

- AI exposure is lower
- the job can be practiced in many places

## Suggested MVP Weights

Default weight mix:

- lifestyle fit: 35%
- time cost / schedule fit: 30%
- interest fit: 20%
- opportunity score: 10%
- resilience score: 5%

This is intentionally not salary-maximizing.

## Threshold Thinking

### City Cost Tiers

For MVP, use rough multipliers:

- low cost: 0.85x
- medium cost: 1.00x
- high cost: 1.25x

### Lifestyle Thresholds

For MVP, define baseline lifestyle thresholds as rough annual gross income assumptions:

- simple: lower threshold
- comfortable: medium threshold
- premium: high threshold

These can be replaced later with better cost-of-living logic.

## Example Interpretation

The UI should not only show scores.
It should explain them.

Examples:

- "Strong pay, but evenings are often lost to work."
- "Supports a comfortable lifestyle in medium-cost cities."
- "Predictable schedule, but lower premium-lifestyle upside."
- "Good fit if you value weekends and routine."

## Heuristic Defaults

When direct schedule data does not exist, use profession-level assumptions.

Examples:

- investment banking -> long hours, weak boundaries, low predictability
- investment banking -> high AI pressure on some tasks, major-hub-dependent
- software engineering -> moderate to long hours, medium predictability
- software engineering -> medium AI pressure, some hub concentration but variable
- nursing -> shift work, moderate predictability
- nursing -> lower AI exposure, local-anywhere
- teaching -> lower pay, stronger yearly rhythm, after-hours work exists
- teaching -> lower AI exposure, local-anywhere
- construction trades -> earlier finish, stronger end-of-day boundary
- construction trades -> low AI exposure, local-anywhere

These assumptions should be stored explicitly later in a lookup table.
