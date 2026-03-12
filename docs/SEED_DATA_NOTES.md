# Seed Data Notes

## Purpose

These seed files are for product prototyping and ontology validation.

They are not yet a full official-source import.

## Seed Files

- `degrees_seed.csv`
- `professions_seed.csv`
- `skills_seed.csv`
- `degree_to_profession_seed.csv`
- `profession_to_skill_seed.csv`
- `degree_interest_tags_seed.csv`
- `profession_interest_tags_seed.csv`
- `profession_lifestyle_profiles_seed.csv`
- `lifestyle_tiers.csv`
- `city_cost_tiers.csv`
- `interests_seed.csv`

## Important Constraints

- salary values are prototype estimates for now
- several mappings are curated heuristics
- codes like CIP and SOC are not filled unless confidence is high
- many-to-many graph structure is more important than exhaustive accuracy in this phase

## Immediate Use

This data is enough to:

- prototype the knowledge graph
- build a first dashboard
- test scoring
- validate UX language around tradeoffs

## Next Step

Replace or enrich seed data with official imports from:

- College Scorecard
- BLS OEWS
- BLS Projections
- O*NET
