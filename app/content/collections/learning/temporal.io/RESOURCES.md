# Temporal.io Resources

## Knowledge

- [Docs: Temporal Workflows — core concepts](https://docs.temporal.io/workflows)
  The canonical definitions: Workflow Definition vs Execution, determinism, what's forbidden in workflow code. Use for: any conceptual claim about workflows.
- [Docs: Event History walkthrough with the Go SDK](https://docs.temporal.io/encyclopedia/event-history/event-history-go)
  Commands vs Events, how replay reconstructs state, why non-determinism breaks replay. Use for: the internals of durable execution. **Primary source for Lesson 1.**
- [Docs: Activities](https://docs.temporal.io/activities)
  What belongs in activities, retry semantics, timeouts. Use for: the workflow/activity boundary.
- [Docs: Go SDK developer guide](https://docs.temporal.io/develop/go)
  API-level reference for everything Go: workers, activity options, signals, queries. Use for: writing actual code.
- [Learn Temporal: Get started with Go](https://learn.temporal.io/getting_started/go/)
  Official hands-on path — dev server setup, [first program](https://learn.temporal.io/getting_started/go/first_program_in_go/), [build from scratch](https://learn.temporal.io/getting_started/go/hello_world_in_go/). Use for: first practical session.
- [GitHub: temporalio/samples-go](https://github.com/temporalio/samples-go)
  Official runnable samples for nearly every pattern. Use for: seeing idiomatic Go for a feature before using it.
- [Go package docs: go.temporal.io/sdk](https://pkg.go.dev/go.temporal.io/sdk)
  API reference. Use for: exact signatures and options structs.
- [Blog: The definitive guide to Durable Execution — Temporal](https://temporal.io/blog/what-is-durable-execution)
  The vendor's own framing of the paradigm. Use for: big-picture positioning; read with the usual vendor-blog salt.
- [Podcast: SE Radio 596 — Maxim Fateev on Durable Execution](https://se-radio.net/2023/12/se-radio-596-maxim-fateev-on-durable-execution-with-temporalse-radio-596/)
  Temporal's co-creator explaining the design rationale in his own words. Use for: the "why is it built this way" internals goal.

## Wisdom (Communities)

- [Temporal Community Forum](https://community.temporal.io/)
  Official Discourse forum, active staff participation. Use for: design questions, "is this the right boundary?" critique.
- [Temporal Community page — Slack and events](https://temporal.io/community)
  Entry point to the community Slack. Use for: quick questions, real-time help.

## Gaps

- A high-quality independent (non-vendor) deep-dive on Temporal _server_ internals — sharding, the matching service, history service. Needed once lessons reach server architecture.
- A good writeup on production worker tuning in Go. Needed later, pre-deployment.
