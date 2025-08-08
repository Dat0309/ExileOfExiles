# ExileOfExiles
I created a chat bot (my exiler) to help me on my exile journey. GG noob

import pypandoc

# The detailed requirement text from the assistant's previous response, translated header into English README format.
# We'll prepare the content with Markdown styling for GitHub.
readme_content = """
# Path of Exile Assistant Chatbot

## 1. Goals & Scope
**Goal:** Build a chatbot assistant for Path of Exile that helps players:
- Ask/answer game knowledge (mechanics, crafting, atlas, builds, league mechanics…)
- Connect PoE account for personalization (characters, stash, atlas progress…)
- Provide utilities via PoE APIs (item pricing, trade search, ladder, economy…)

**Scope v1:**
- Real-time chat in web app (React) with streaming responses.
- OAuth PoE login & account linking.
- Retrieve basic player data: character list, passive tree, stash tab meta, atlas progress, challenges.
- Quick utilities: item pricing, affix lookup, vendor recipes, currency conversion, build tips & links.
- Game knowledge via RAG (retrieval-augmented generation) over docs/patch notes/wiki.
- Store chat history & context.

**Out of v1 scope:** native mobile app, voice chat, advanced guild tooling, full crafting simulator, PoB full parsing, automated trading.

---

## 2. Stakeholders & Personas
- **New players:** basic guides, recipes, cheap builds.
- **Mid-core:** quick pricing, atlas/passive optimization, map farming.
- **Power users/streamers:** deep mechanics, crafting, strategy, character insights.
- **Dev team:** BE Python, FE React, DevOps, Data/ML (RAG & intent).

---

## 3. Assumptions & Constraints
- Comply with API Terms & rate limits from PoE and data sources.
- No gameplay or trade automation that violates ToS.
- Cloud infra available (Postgres, Redis, Object Storage).
- **Language:** UI in Vietnamese (v1), English support after (i18n ready).

---

## 4. Architecture Overview
- **FE (React + Vite):** Chat UI, Auth, utilities pages. WebSocket/SSE for streaming.
- **API Gateway/BE (Python FastAPI):** Auth, chatbot orchestration, PoE API adapters, pricing logic.
- **LLM Orchestrator:** Python (LangChain/LlamaIndex) + RAG (vector DB).
- **Vector DB:** PostgreSQL + pgvector or Qdrant.
- **Cache:** Redis.
- **Storage:** S3-compatible.
- **Observability:** OpenTelemetry + Prometheus/Grafana + Sentry.
- **Streaming:** WebSocket/SSE.

---

## 5. Integrations & Data Sources
- **PoE OAuth2 login & link account.**
- Player data (characters, passive tree, stash meta, atlas, challenges).
- Economy/Market: PoE trade API, PoE.Ninja.
- Knowledge corpus: PoE Wiki, patch notes, dev manifesto, guides.

---

## 6. Functional Requirements
### Chat Assistant
- Multi-turn conversation with reset.
- Intent classification: Knowledge, Player-linked, Market/Trade, Utility.
- Tool calls per intent.
- Cite sources in responses.
- Guardrails against ToS violations.

### Login & Account Link
- OAuth2 login with token encryption & refresh.
- Consent screen & revoke option.
- Account page to manage link status.

### Item & Economy Utilities
- Quick pricing from item text.
- Affix/mod explanation with tier info.
- Vendor recipes lookup.
- Currency conversion.
- Trade search link generation.

### Personalization
- Show characters & summary info.
- Gear/atlas/passive upgrade suggestions.

### Conversation Management
- Store chat history with pin option.
- Export to JSON/Markdown.
- Feedback on answers.

---

## 7. Non-Functional Requirements
- **Performance:** TTFB < 2s for simple RAG, total < 6s for API calls.
- **Availability:** 99.5% uptime/month.
- **Security:** Token encryption, TLS, RBAC, rate limiting.
- **Scalability:** Autoscaling BE, cache per league.
- **Observability:** Tracing, error alerts.
- **Maintainability:** Linting, test coverage, adapter contracts.

---

## 8. API Design (FastAPI example)
### Auth & User
```http
POST /auth/poe/login
GET  /auth/poe/callback
POST /auth/logout
GET  /me
DELETE /me/link
