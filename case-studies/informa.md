# Informa — Sanitized Case Study Draft

## One-line summary

Informa is an agentic briefing system that turns noisy AI, technology, and research sources into concise, source-aware digests with editorial judgment and send/no-send controls.

## The problem

Most newsletters and feeds create more work for the reader. They collect links, summarize articles, and push updates, but they often leave the user with the same underlying burden: deciding what matters, what changed, what conflicts, and what deserves attention.

The product question behind Informa is:

> What would it take to make an AI briefing system genuinely better than reading newsletters?

## Product approach

Informa explores a workflow that combines ingestion, filtering, synthesis, editorial review, and delivery.

Instead of treating summarization as the product, it treats judgment as the product surface:

- what should be included
- what should be ignored
- what is meaningfully new
- where sources agree or disagree
- why something matters to the reader
- when not sending is better than sending

## AI role

AI is used to assist with:

- source ingestion
- de-duplication
- topic clustering
- summarization
- source comparison
- draft digest generation
- backlog review
- editorial assistance
- operational checks

## Human/editorial role

The system is designed around editorial judgment, not fully automated publishing.

A good briefing product needs taste, skepticism, and source awareness. AI can help process and draft, but the product should still preserve a clear standard for what deserves to be sent.

## Design principles

1. **Better than reading newsletters.** The system should reduce cognitive load.
2. **Send less when appropriate.** A no-send decision can be a feature.
3. **Source awareness matters.** The system should know why a source is being used.
4. **Disagreement is valuable.** Conflicting coverage should be surfaced, not flattened.
5. **Operations are product.** Reliability, auditability, and review flows are part of the user experience.

## Why this belongs in the portfolio

Informa represents a different side of AI product leadership: not just generating content, but designing an operational system around signal, trust, and judgment.

It is a private implementation project, but the product lessons are public-facing:

- AI products need taste and restraint.
- Agentic workflows require guardrails and observability.
- A useful briefing system must decide what not to say.
- The system record matters because product behavior improves through memory, tests, and review.

## Public status

Implementation private. This document is a sanitized case-study draft for portfolio use.
