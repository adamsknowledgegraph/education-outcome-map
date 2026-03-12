# Degree -> Career -> Lifestyle Map

## Goal

Help students understand:

- what degrees lead to
- what careers those degrees commonly unlock
- what those careers pay
- what that pay means in real life

The core idea is to make outcomes legible through:

- degree -> profession maps
- profession -> skill maps
- salary and employment data
- lifestyle scenarios translated into hourly expectations

## Main Product Idea

A dashboard where someone can:

1. pick interests
2. pick lifestyle preferences
3. explore degrees
4. see career paths and likely outcomes
5. compare the real-world tradeoffs

## Key User Question

"If I choose this degree, what kind of life can I realistically afford?"

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

The MVP should let a user:

- choose a degree or field of interest
- see common career outcomes
- see estimated hourly pay and annual pay
- compare those outcomes against simple lifestyle profiles
- explore a network graph of degree -> career -> skills

## V1 Decision

V1 is US-only.

Reason:

- strongest official public data stack
- easier degree/program to earnings linkage
- native hourly wage data is available
- faster to prototype cleanly

## First Prototype

The current prototype combines:

- O*NET 30.2 occupation, skills, interests, job zone, and work-context data
- O*NET's 2020 CIP -> O*NET-SOC crosswalk
- a curated set of official BLS Occupational Outlook Handbook metrics for wages, growth, employment, and openings

Build the generated datasets and dashboard:

```bash
python3 scripts/build_prototype.py
```

Open the prototype directly:

```bash
open app/index.html
```

Expected public share URL after GitHub Pages deploys:

```text
https://adamsknowledgegraph.github.io/education-outcome-map/
```

Main generated outputs:

- `data/degrees_v1.csv`
- `data/professions_v1.csv`
- `data/profession_lifestyle_profiles_v1.csv`
- `data/path_outcomes_v1.csv`
- `app/data/prototype-data.js`
