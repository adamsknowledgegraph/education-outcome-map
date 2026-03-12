# Graph Evolution

## Goal

Make sure the MVP can evolve into a richer knowledge graph without changing the core semantics.

## What To Preserve From Day 1

### Stable IDs

Every entity needs a durable canonical ID.

### External Mappings

Keep room for:

- CIP codes
- SOC codes
- O*NET codes
- institution IDs

### Relationship Evidence

Every important relationship should eventually support:

- `confidence`
- `evidence_type`
- `source`
- `notes`

Even if V1 only fills some of these fields.

## Recommended Table Evolution

### Current MVP Tables

- `degrees`
- `professions`
- `skills`
- `degree_to_profession`
- `profession_to_skill`
- `profession_lifestyle_profiles`

### Future Graph-Native Tables

#### nodes

Fields:

- `node_id`
- `node_type`
- `canonical_name`
- `display_name`
- `source`
- `external_refs_json`

#### edges

Fields:

- `edge_id`
- `from_node_id`
- `edge_type`
- `to_node_id`
- `confidence`
- `source`
- `evidence_type`
- `notes`

#### attributes

Fields:

- `node_id`
- `attribute_name`
- `attribute_value`
- `attribute_type`
- `source`

## Important Modeling Rule

Do not over-encode everything as columns forever.

Some things that are columns in V1 may later become:

- node attributes
- edge attributes
- new node types

That is okay if the semantics stay clean.

## Example Evolution

### V1

`profession_lifestyle_profiles` holds:

- hours
- schedule_type
- predictability
- AI exposure
- geographic concentration

### Later

This could evolve into:

- a `lifestyle_profile` node
- connected to `profession`
- with versioned attribute records and regional variants

## Anti-Patterns To Avoid

- using display labels as primary keys
- merging source data and heuristics without marking them
- storing relationships only as free-text notes
- hard-coding one degree to one profession
- overfitting the ontology to the first demo

