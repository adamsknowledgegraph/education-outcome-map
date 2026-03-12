# Heuristics

## Why heuristics exist in V1

Not every important dimension is available in clean public datasets.

The MVP still needs to answer:

- do you keep your evenings?
- do you lose weekends?
- is your schedule stable?
- how much of your life does the job consume?

So V1 uses explicit heuristics where data is missing.

## Heuristic-first fields

- `avg_weekly_hours_estimate`
- `schedule_type`
- `boundary_quality`
- `predictability`
- `ai_exposure`
- `geographic_concentration`
- `weekend_work_likelihood`
- `night_work_likelihood`

## Rules

1. Heuristics should be stored explicitly, not hidden in code.
2. Every heuristic row should have `heuristic_flag=yes`.
3. Notes should explain the reasoning.
4. Replace heuristic values with real source-backed values later when possible.

## Schedule Type Definitions

- `normal`: mostly daytime, weekdays, weekends usually free
- `extended`: daytime-oriented but long days common
- `shift`: rotations, nights, weekends, hospital/service-style pattern
- `irregular`: on-call, highly variable, unpredictable timing

## Boundary Quality Definitions

- `strong`: work usually ends with the workday
- `moderate`: occasional spillover into evenings or deadlines
- `weak`: work regularly consumes evenings/weekends or intrudes unpredictably

## Predictability Definitions

- `high`: routine is stable week to week
- `medium`: some variance, but still fairly understandable
- `low`: timing and intensity are frequently unpredictable

## AI Exposure Definitions

- `low`: highly physical, licensed, in-person, or relationship-heavy work that is harder to automate end-to-end
- `medium`: some tasks are automatable, but the full role still depends on judgment, context, or execution in the real world
- `high`: large parts of the role are repeatable knowledge work, synthesis, drafting, or presentation-heavy output

## Geographic Concentration Definitions

- `local_anywhere`: can be practiced in most towns/cities with broad demand
- `regional`: more concentrated in larger regional markets, but not only elite hubs
- `major_hub_dependent`: disproportionately concentrated in major metros or specific industry hubs

## How to communicate heuristics in product

Use phrasing like:

- "estimated schedule pattern"
- "typical work pattern"
- "lifestyle estimate"

Do not pretend these values are exact.
