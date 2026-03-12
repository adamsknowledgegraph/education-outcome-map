# US MVP Data Stack

## Decision

Use US data for V1.

This is the best first market/data environment because it has the cleanest public stack for:

- degree/program data
- wages
- occupations
- skills
- employment outlook

## Core Sources

### 1. College Scorecard

Use for:

- institutions
- fields of study
- program-level or field-level outcomes
- earnings and cost context

Why it matters:

- it gives us degree/program-side data
- it includes field-of-study data and outcome-oriented fields
- it has an API

Key notes:

- requires an API key
- includes institution-level and field-of-study data

Source:

- College Scorecard API docs: https://collegescorecard.ed.gov/data/api/

### 2. BLS OEWS

Use for:

- occupation-level employment
- annual wages
- hourly wages
- regional breakdowns

Why it matters:

- this is the cleanest official source for `$/hour`
- it covers hundreds of occupations and multiple geographies

Key notes:

- approximately 830 occupations
- national, state, metro, and industry cuts

Source:

- BLS OEWS overview: https://www.bls.gov/oes/oes_emp.htm

### 3. O*NET

Use for:

- profession -> skill mapping
- work context
- interests
- education/training context

Why it matters:

- this gives the "profession requires skill" part of the graph
- it is structured and built for occupational analysis

Key notes:

- downloadable database
- web services exist
- permissive reuse with attribution

Source:

- O*NET database: https://www.onetcenter.org/database.html

### 4. BLS Employment Projections

Use for:

- growth outlook
- projected openings
- occupation trajectory context

Why it matters:

- a path should not only show pay; it should also show future demand

Source:

- BLS occupational employment projections: https://www.bls.gov/emp/data/occupational-data.htm

## Optional Supporting Sources

### Cost of living / lifestyle assumptions

Need for:

- simple / comfortable / luxury models
- city cost adjustments

V1 suggestion:

- start with manually defined lifestyle tiers
- then optionally add a public cost-of-living source later

### Alumni data

This is likely the hardest part.

For V1:

- do not block on alumni data
- treat it as a future enrichment layer

## Recommended V1 Join Logic

### Degree side

- program / field of study from College Scorecard
- map to CIP or related program categories

### Career side

- occupation definitions and wages from BLS OEWS
- growth/outlook from BLS Employment Projections

### Skill side

- occupation-to-skill mapping from O*NET

### Lifestyle side

- derived model from:
  - hourly wage
  - annual wage
  - assumed work hours
  - cost tier
  - taste profile

## V1 MVP Output Model

For each path:

- degree / field
- likely profession(s)
- hourly wage estimate
- annual wage estimate
- outlook / growth signal
- key skills
- lifestyle fit score

## What Not To Do In V1

- do not try to solve every country
- do not wait for perfect alumni data
- do not overcomplicate the lifestyle model
- do not build a giant universal ontology before testing the product

