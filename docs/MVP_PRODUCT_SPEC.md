# MVP Product Spec

## Product Name

Degree -> Career -> Lifestyle Map

## MVP Goal

Show a student how a degree path connects to:

- likely careers
- required skills
- hourly and annual earnings
- realistic lifestyle fit

## Primary User

- student exploring education options

Secondary users:

- parents
- counselors
- career-switchers

## Core User Flow

### Flow A: Start from interests

1. Pick interests
2. Pick lifestyle preference
3. See recommended degree paths
4. Explore likely careers
5. Compare hourly pay and lifestyle fit

### Flow B: Start from degree

1. Pick a degree or field
2. See common professions
3. See skills required
4. See pay and outlook
5. See what lifestyle it likely supports

### Flow C: Start from desired life

1. Pick a lifestyle profile
2. Pick city/cost tier
3. See careers that support it
4. See the degrees most associated with those careers

## Inputs

### Interests

Examples:

- technology
- design
- healthcare
- business
- research
- communication

### Lifestyle Preference

Use 3 simple tiers for MVP:

#### 1. Simple

- lower monthly spend
- values stability and flexibility
- minimal luxury assumptions

#### 2. Comfortable

- moderate discretionary spend
- can travel sometimes
- can save and enjoy convenience

#### 3. Luxury

- high discretionary spend
- premium housing/travel/taste assumptions

For wording in product UI, prefer:

- simple
- comfortable
- premium

`Premium` is better than `luxury` for the actual interface.

### City Cost Tier

For MVP:

- low cost
- medium cost
- high cost

## Main Screens

### 1. Landing / Input Screen

User chooses:

- interests
- lifestyle tier
- city cost tier

### 2. Path Results Screen

Cards for:

- degree
- profession
- hourly pay
- annual pay
- lifestyle fit
- outlook

### 3. Network Graph Screen

Graph:

- degree -> profession -> skill

Interactions:

- click degree to highlight paths
- click profession to reveal wages and outlook
- click skill to show overlap across careers

### 4. Compare Screen

Compare multiple paths side by side on:

- pay
- hourly rate
- growth
- lifestyle fit
- skill requirements

## Key Metrics To Show

- hourly wage estimate
- annual wage estimate
- estimated average weekly hours
- schedule type
- boundary quality
- predictability
- AI exposure
- geographic concentration
- job outlook signal
- lifestyle fit score
- interest fit score

## UX Principles

- simple language
- visually intuitive
- no academic jargon unless explained
- make tradeoffs obvious
- prioritize understanding over completeness

## What Makes This Interesting

This should feel less like a static salary tool and more like:

- a life-path explorer
- a visual decision tool
- a way to imagine consequences before choosing a degree

## Core Product Truth

This product is about tradeoffs, not just upside.

It should explicitly help users see:

- what they can afford
- what kind of schedule they may live with
- how much of their week work is likely to consume
- what compromises they make for higher earnings
- how exposed the path may be to AI disruption
- whether the path may require living in a major hub
