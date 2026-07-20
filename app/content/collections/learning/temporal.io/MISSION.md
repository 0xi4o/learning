# Mission: Temporal.io

## Why

Build long-running, failure-prone processes that are reliable by default — and understand the machinery well enough to reason about what happens when things break, not just drive the API. Ilango wants working fluency with the Go SDK _and_ a real model of how durable execution works underneath (event history, replay, task queues).

## Success looks like

- Design and run a non-trivial Go workflow locally: activities, retries, timers, signals.
- Explain, step by step, what happens when a worker crashes mid-workflow — and predict what the new worker does.
- Draw the workflow/activity boundary correctly for a new problem, and justify it via the determinism constraint.
- Test workflows with the time-skipping test environment instead of waiting out real timers.

## Constraints

- Go SDK (chosen deliberately — the server itself is Go, which serves the internals goal).
- Starting point: has read about Temporal but not run anything yet.
- Short lessons, one win each. Plain English, minimal jargon, British spellings.

## Out of scope

- Temporal Cloud operations, self-hosting at production scale, multi-cluster.
- Other SDKs (TypeScript/Python/Java) except for occasional contrast.
- Nexus and advanced multi-service features — until the fundamentals are solid.
