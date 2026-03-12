# V1 Tables

## Goal

Define a simple set of tables for the US MVP that can support:

- degree exploration
- career exploration
- skill mapping
- hourly/annual pay display
- lifestyle scoring
- dashboard filtering and comparison

## Table 1: degrees

One row per degree/program/field grouping used in the MVP.

### Fields

- `degree_id`
- `degree_node_id`
- `degree_name`
- `degree_family`
- `cip_code`
- `award_level`
- `source`
- `notes`

### Example

- `degree_id`: `cs_bachelors`
- `degree_node_id`: `degree:computer_science_bachelors`
- `degree_name`: `Computer Science`
- `degree_family`: `Technology`
- `cip_code`: `11.0701`
- `award_level`: `bachelors`

## Table 2: professions

One row per occupation.

### Fields

- `profession_id`
- `profession_node_id`
- `profession_name`
- `soc_code`
- `profession_family`
- `median_annual_wage_usd`
- `median_hourly_wage_usd`
- `employment_count`
- `outlook_growth_pct`
- `openings_annual`
- `source`

## Table 3: skills

One row per skill.

### Fields

- `skill_id`
- `skill_node_id`
- `skill_name`
- `skill_category`
- `source`

## Table 4: degree_to_profession

Maps degree paths to likely occupations.

### Fields

- `degree_id`
- `profession_id`
- `edge_type`
- `path_strength`
- `confidence`
- `source`
- `notes`

### Notes

`path_strength` can be:

- low
- medium
- high

`confidence` can be a 0-1 score or a simple categorical value later.

## Table 5: profession_to_skill

Maps occupations to required or important skills.

### Fields

- `profession_id`
- `skill_id`
- `edge_type`
- `importance_score`
- `level_score`
- `source`

## Table 6: profession_lifestyle_profiles

Stores the work/lifestyle assumptions for each occupation.

### Fields

- `profession_id`
- `lifestyle_profile_node_id`
- `avg_weekly_hours_band`
- `avg_weekly_hours_estimate`
- `schedule_type`
- `boundary_quality`
- `predictability`
- `ai_exposure`
- `geographic_concentration`
- `physical_intensity`
- `remote_friendliness`
- `weekend_work_likelihood`
- `night_work_likelihood`
- `heuristic_flag`
- `source`
- `notes`

### Notes

This is the key MVP table for "what your life will look like."

Even though this is a wide table in V1, it should be treated as a graph-ready node/attribute layer.

## Table 7: lifestyle_tiers

Defines lifestyle thresholds.

### Fields

- `lifestyle_tier_id`
- `lifestyle_tier_node_id`
- `lifestyle_tier_name`
- `base_required_income_usd`
- `description`

### Tiers

- simple
- comfortable
- premium

## Table 8: city_cost_tiers

Defines cost multipliers for the MVP.

### Fields

- `city_cost_tier_id`
- `city_cost_tier_node_id`
- `city_cost_tier_name`
- `income_multiplier`
- `description`

### Values

- low_cost
- medium_cost
- high_cost

## Table 9: interests

Simple controlled interest taxonomy for the MVP.

### Fields

- `interest_id`
- `interest_node_id`
- `interest_name`
- `description`

## Table 10: degree_interest_tags

Maps degrees to interest categories.

### Fields

- `degree_id`
- `interest_id`
- `edge_type`
- `weight`

## Table 11: profession_interest_tags

Maps professions to interest categories.

### Fields

- `profession_id`
- `interest_id`
- `edge_type`
- `weight`

## Derived View: path_outcomes

This can be a generated table or query result.

Each row represents a degree -> profession path with all major user-facing metrics.

### Fields

- `degree_id`
- `profession_id`
- `degree_name`
- `profession_name`
- `median_annual_wage_usd`
- `median_hourly_wage_usd`
- `avg_weekly_hours_estimate`
- `schedule_type`
- `boundary_quality`
- `predictability`
- `ai_exposure`
- `geographic_concentration`
- `outlook_growth_pct`
- `path_strength`
- `interest_fit_score`
- `lifestyle_fit_simple`
- `lifestyle_fit_comfortable`
- `lifestyle_fit_premium`

## MVP Build Order

1. professions
2. profession_lifestyle_profiles
3. skills
4. profession_to_skill
5. degrees
6. degree_to_profession
7. lifestyle_tiers
8. city_cost_tiers
9. interest tables
10. derived path_outcomes
