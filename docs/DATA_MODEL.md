# Data Model

## Nodes

### Degree

Examples:

- Computer Science
- Nursing
- Economics
- Design

Fields:

- degree_id
- degree_name
- field
- level
- institution
- region

### Profession

Examples:

- Software Engineer
- Nurse
- Product Designer
- Financial Analyst

Fields:

- profession_id
- profession_name
- industry
- median_salary
- hourly_estimate
- employment_rate

### Skill

Examples:

- programming
- communication
- analysis
- design systems
- clinical knowledge

Fields:

- skill_id
- skill_name
- category

### Lifestyle Profile

Examples:

- simple
- comfortable
- luxury

Fields:

- profile_id
- name
- target_monthly_budget
- city_cost_multiplier
- notes

## Edges

### degree_leads_to_profession

Fields:

- degree_id
- profession_id
- strength
- source

### profession_requires_skill

Fields:

- profession_id
- skill_id
- importance

### profession_supports_lifestyle

Derived from:

- hourly pay
- city costs
- working hours assumptions
- lifestyle budget thresholds

## Derived Metrics

- hourly wage estimate
- monthly take-home proxy
- lifestyle fit score
- interest fit score
- path attractiveness score

