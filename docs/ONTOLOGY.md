# Ontology

## Design Goal

Keep the MVP simple, but structure it so it can evolve into a full knowledge graph without painful rework.

## Core Rule

Treat the system as a graph already, even if the MVP is stored in CSV tables.

That means:

- stable node IDs
- explicit edge tables
- source/provenance fields
- typed relationships
- derived scores kept separate from source facts

## Node Types

### Degree

Represents an education program or field grouping.

Suggested ID format:

- `degree:<slug>`

Examples:

- `degree:computer_science_bachelors`
- `degree:nursing_bachelors`

### Profession

Represents an occupation or role.

Suggested ID format:

- `profession:<slug>`

Examples:

- `profession:software_engineer`
- `profession:investment_banker`

### Skill

Represents a skill concept.

Suggested ID format:

- `skill:<slug>`

Examples:

- `skill:data_analysis`
- `skill:communication`

### Lifestyle Profile

Represents the lived-work pattern associated with a profession.

Suggested ID format:

- `lifestyle_profile:<slug>`

Examples:

- `lifestyle_profile:software_engineer_default`
- `lifestyle_profile:investment_banker_default`

### Interest

Represents user-facing interest categories.

Suggested ID format:

- `interest:<slug>`

### Lifestyle Tier

Represents desired user lifestyle outcome.

Suggested ID format:

- `lifestyle_tier:<slug>`

### City Cost Tier

Represents cost normalization levels.

Suggested ID format:

- `city_cost_tier:<slug>`

## Relationship Types

Use explicit edge labels.

### Current V1 Relationships

- `degree -> leads_to -> profession`
- `profession -> requires -> skill`
- `profession -> has_lifestyle_profile -> lifestyle_profile`
- `degree -> tagged_with -> interest`
- `profession -> tagged_with -> interest`
- `lifestyle_tier -> adjusted_by -> city_cost_tier`

## Graph-Friendly Storage Principles

### 1. Stable Canonical IDs

Never rely on display names as keys.

Use:

- internal canonical IDs
- external reference codes where available

Examples:

- `cip_code`
- `soc_code`
- O*NET identifiers

### 2. Separate Nodes From Edges

Do not collapse relationships into a single wide table if you can avoid it.

Preferred:

- node tables
- edge tables

Even if a derived convenience table exists for UI performance.

### 3. Keep Source Facts Separate From Derived Judgments

Examples:

- wage from BLS = source fact
- lifestyle fit score = derived
- AI exposure heuristic = interpreted layer

This matters because the graph should remain auditable.

### 4. Keep Provenance On Every Important Table

At minimum, include:

- `source`
- `source_id` or external code where possible
- `notes`
- later: `updated_at`

### 5. Allow Many-to-Many Relationships

The graph must support:

- one degree -> many professions
- one profession -> many degrees
- one profession -> many skills
- one skill -> many professions

Do not optimize the schema around one-to-one assumptions.

## Recommended Evolution Path

### V1

CSV tables with stable IDs and explicit edge tables

### V2

Normalized warehouse-style tables with source snapshots

### V3

Knowledge graph / graph database or graph API layer with:

- typed nodes
- typed edges
- versioned provenance
- confidence and evidence on relationships

## Future Node Types

These should be easy to add later:

- `Institution`
- `Location`
- `Industry`
- `Credential`
- `CareerStage`
- `EmployerType`
- `WorkMode`

## Future Relationship Types

Examples:

- `degree -> offered_by -> institution`
- `profession -> concentrated_in -> location`
- `profession -> common_in -> industry`
- `profession -> transitions_to -> profession`
- `degree -> develops -> skill`
- `credential -> strengthens_access_to -> profession`

## Practical MVP Constraint

Keep the user-facing product simple.
Keep the underlying ontology expandable.

That means:

- simple UI categories
- graph-friendly internal structure

