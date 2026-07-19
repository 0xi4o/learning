---
title: Golang
description: Getting fluent with Go — goroutines, channels, and writing idiomatic, production-ready services.
tags:
    - Language
    - Backend
    - Concurrency
date: 2026-01-15
progress: 'current'
---

# Golang

Getting fluent with Go — the language, its tooling, and the mindset. The goal is
idiomatic, production-ready services, not just passing syntax familiarity.

## Concurrency

Go's concurrency model is the headline feature. Goroutines are cheap, and channels
make sharing state by communicating feel natural:

```go
func worker(jobs <-chan int, results chan<- int) {
	for j := range jobs {
		results <- j * 2
	}
}

func main() {
	jobs := make(chan int, 100)
	results := make(chan int, 100)
	go worker(jobs, results)
	// ...
}
```

## What I'm working through

- The scheduler and how goroutines map onto OS threads
- `context` for cancellation and deadlines
- Error handling idioms and when to wrap vs. sentinel errors

> The best way to learn Go is to read the standard library — it is the style guide.
