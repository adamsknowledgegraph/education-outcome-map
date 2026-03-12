# Education Outcome Map

## Goal

Help students understand:

- what education routes are realistic for them
- what careers those routes commonly unlock
- what those careers pay per hour and per year
- what those careers actually do to schedule, lifestyle, and location choices

## Main Product Idea

A student-facing dashboard where someone can:

1. start from the lifestyle they want, then discover careers and education paths
2. start from student fit, then discover realistic education routes first
3. compare trades, associate pathways, and bachelor's routes in the same system
4. see hourly pay, working hours, AI pressure, and hub dependence side by side
5. click back to the official evidence behind each recommendation

## Key User Question

"Given my profile, what education path is realistic, and what kind of life does it actually buy me?"

## Profile Inputs

The prototype is intentionally profile-first:

- interests
- strengths and abilities
- academic profile / grades
- budget tolerance
- time willing to spend training
- lifestyle preferences

## Project Structure

- `docs/PROJECT_BRIEF.md`
- `docs/AGENT_ROLES.md`
- `docs/DATA_MODEL.md`
- `data/`
- `design/`
- `notes/`
- `scripts/build_prototype.py`
- `app/index.html`

## Specialist Agents

- `degree-product`
- `degree-data`
- `degree-viz`

## MVP

The MVP lets a user:

- choose between `lifestyle-first` and `education-fit-first`
- compare degrees, trades, and shorter credentials in one flow
- see common career outcomes with hourly pay, annual pay, openings, hours, and schedule
- see AI exposure, hub dependence, and boundary quality
- explore a graph slice of education -> career -> skills
- inspect linked BLS and O*NET evidence

## V1 Decision

V1 is US-only.

Reason:

- strongest official public data stack
- easier education-to-occupation linkage
- native hourly wage data is available
- faster to prototype cleanly

## Current Prototype Data Stack

The current prototype combines:

- O*NET 30.2 occupation, skills, interests, job zone, and work-context data
- O*NET's 2020 CIP -> O*NET-SOC crosswalk
- College Scorecard institution and CIP-4 program data for real school examples across all 50 states plus DC
- official BLS Occupational Outlook Handbook pages for wages, growth, employment, and openings
- official BLS field-of-degree pages for field-level degree context
- a student-facing lifestyle overlay for hours, schedule, AI exposure, and geographic concentration

Named program options are generated into `data/education_programs_v1.csv` and folded into the app so users can see actual universities, community colleges, and trade-oriented providers for each route.

## Build

Build the generated datasets and dashboard:

```bash
COLLEGE_SCORECARD_API_KEY=your_key python3 scripts/fetch_scorecard_programs.py
python3 scripts/build_prototype.py
```

Open the prototype directly:

```bash
open app/index.html
```

Public share URL:

```text
https://adamsknowledgegraph.github.io/education-outcome-map/
```

## Main Generated Outputs

- `data/degrees_v1.csv`
- `data/professions_v1.csv`
- `data/degree_options_v1.csv`
- `data/education_programs_v1.csv`
- `data/profession_lifestyle_profiles_v1.csv`
- `data/path_outcomes_v1.csv`
- `data/source_registry_v1.json`
- `data/grc20-compatible-graph.json`
- `app/data/prototype-data.js`

## Current Coverage Notes

- The program layer currently includes 3,657 named school-program options from a nationwide College Scorecard pull.
- The school layer now keeps multiple strong options per degree and state instead of only one featured example.
- Trade and shorter routes are prioritized alongside bachelor's degrees through community colleges, technical colleges, and apprenticeship-adjacent providers.
- O*NET enrichment now includes education distributions, work styles, and common technology examples for the featured occupation set.
- A few paths still lack named school examples because College Scorecard's CIP-4 buckets are too coarse for them right now: `radiologic_technology_associate`, `respiratory_therapy_associate`, and `tile_setting_certificate`.
