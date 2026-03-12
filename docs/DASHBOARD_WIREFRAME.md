# Dashboard Wireframe

## Goal

Create a dashboard that helps a student answer:

"What kind of life does this degree path actually lead to?"

## Screen 1: Choose Your Inputs

### Header

- Title: "Pick the life you want, then explore the paths that can support it."

### Input Block A: Interests

- multi-select chips
- examples:
  - tech
  - healthcare
  - design
  - business
  - research
  - helping people
  - building things

### Input Block B: Lifestyle

- radio cards:
  - simple
  - comfortable
  - premium

Each card has a short explanation.

### Input Block C: City Cost

- segmented control:
  - low cost
  - medium cost
  - high cost

### Input Block D: Schedule Preference

- radio cards:
  - I want predictable hours
  - I can tolerate some unpredictability
  - I care more about earnings than schedule

### CTA

- "Show me paths"

## Screen 2: Recommended Paths

### Main Layout

List or card grid of best-fit paths.

Each card shows:

- degree / field
- career outcome
- hourly pay
- annual pay
- average weekly hours
- schedule type
- AI exposure
- geographic concentration
- lifestyle fit
- one-sentence tradeoff summary

### Example Tradeoff Summary

- "Higher earnings, but weak work-life boundaries."
- "More predictable schedule, but lower premium-lifestyle upside."
- "Good match for a comfortable life with weekends mostly free."

### Filters

- degree family
- career family
- pay range
- weekly hours
- schedule type

## Screen 3: Path Detail

### Left Side

- degree
- likely professions
- key skills
- outlook / demand

### Right Side

- annual pay
- hourly pay
- weekly hours
- schedule type
- predictability
- boundary quality
- AI exposure
- geographic concentration
- lifestyle fit by cost tier

### "Compromises" Box

This box is important.

It should say things like:

- "This path can fund a premium lifestyle, but often costs evenings and weekends."
- "This path supports a comfortable life and better routine, but lower upside."
- "This path pays well, but is concentrated in major-city hubs."
- "This path looks durable against AI, but has lower premium-lifestyle upside."

## Screen 4: Network View

Graph:

- degree -> profession -> skill

Interactions:

- hover to highlight connections
- click a profession to show lifestyle/pay sidebar
- click a skill to see which professions depend on it

## Screen 5: Compare View

Compare 2-4 paths side by side:

- hourly pay
- annual pay
- weekly hours
- schedule type
- predictability
- boundary quality
- AI exposure
- geographic concentration
- lifestyle fit

This is where the tradeoffs become obvious.

## MVP Design Rule

Do not make it feel like a dense academic tool.

It should feel:

- visual
- humane
- slightly opinionated
- easy to understand in under 60 seconds
