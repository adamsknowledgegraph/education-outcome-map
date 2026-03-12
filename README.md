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
