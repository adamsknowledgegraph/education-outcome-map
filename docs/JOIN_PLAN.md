# Join Plan

## Goal

Combine official public data with explicit lifestyle heuristics.

The join plan should preserve graph-ready semantics:

- canonical node IDs
- typed edge tables
- separable source facts and derived judgments

## Official Inputs

### College Scorecard

Provides:

- degree/program side
- institution/field context

### BLS OEWS

Provides:

- occupation-level annual and hourly wage
- employment counts

### BLS Projections

Provides:

- outlook growth
- openings context

### O*NET

Provides:

- occupation-to-skill relationships
- occupational descriptors

## Heuristic Inputs

### profession_lifestyle_profiles_seed.csv

Provides:

- weekly hours estimate
- schedule type
- boundary quality
- predictability
- AI exposure
- geographic concentration
- nights/weekends likelihood

## Join Strategy

### Step 1

Create `professions` from BLS occupation data.

### Step 2

Attach O*NET-derived skill data through profession/SOC mappings.

### Step 3

Attach lifestyle heuristics by normalized profession id or SOC-linked lookup.

### Step 4

Attach degree/program mappings from College Scorecard and a curated degree-to-profession bridge.

### Step 5

Generate user-facing path rows with:

- pay
- hours
- schedule
- boundary quality
- predictability
- AI exposure
- geographic concentration
- lifestyle fit

## Practical MVP Rule

If a path lacks clean degree-to-profession evidence:

- keep it out of the top recommendations
- or mark it as lower confidence

Better to have fewer believable paths than a giant noisy graph.
