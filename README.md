# ExileOfExiles
I created a chat bot (my exiler) to help me on my exile journey. GG noob

# We'll enhance the README content with some relevant GitHub-friendly emoji/icons for sections.

readme_with_icons = """
# 🎯 Path of Exile Assistant Chatbot

## 1️⃣ Goals & Scope
**🎯 Goal:** Build a chatbot assistant for Path of Exile that helps players:
- 💬 Ask/answer game knowledge (mechanics, crafting, atlas, builds, league mechanics…)
- 🔗 Connect PoE account for personalization (characters, stash, atlas progress…)
- 🛠️ Provide utilities via PoE APIs (item pricing, trade search, ladder, economy…)

**📦 Scope v1:**
- ⚡ Real-time chat in web app (React) with streaming responses.
- 🔐 OAuth PoE login & account linking.
- 📊 Retrieve basic player data: character list, passive tree, stash tab meta, atlas progress, challenges.
- 🛠️ Quick utilities: item pricing, affix lookup, vendor recipes, currency conversion, build tips & links.
- 📚 Game knowledge via RAG over docs/patch notes/wiki.
- 🗂️ Store chat history & context.

**🚫 Out of v1 scope:** native mobile app, voice chat, advanced guild tooling, full crafting simulator, PoB full parsing, automated trading.

---

## 2️⃣ Stakeholders & Personas
- 🆕 **New players:** basic guides, recipes, cheap builds.
- ⚔️ **Mid-core:** quick pricing, atlas/passive optimization, map farming.
- 🏆 **Power users/streamers:** deep mechanics, crafting, strategy, character insights.
- 👩‍💻 **Dev team:** BE Python, FE React, DevOps, Data/ML (RAG & intent).

---

## 3️⃣ Assumptions & Constraints
- 📜 Comply with API Terms & rate limits.
- 🚫 No gameplay/trade automation violating ToS.
- ☁️ Cloud infra (Postgres, Redis, Object Storage).
- 🌐 UI in Vietnamese (v1), English after (i18n ready).

---

## 4️⃣ Architecture Overview
- 🖥️ **FE:** React + Vite, SSE/WebSocket streaming.
- 🐍 **BE:** FastAPI, OAuth, LLM orchestration, PoE API adapters.
- 🧠 **LLM:** LangChain/LlamaIndex + RAG.
- 💾 **Vector DB:** Postgres + pgvector/Qdrant.
- ⚡ **Cache:** Redis.
- ☁️ **Storage:** S3-compatible.
- 📈 **Observability:** OpenTelemetry, Prometheus/Grafana, Sentry.

---

## 5️⃣ Integrations & Data Sources
- 🔑 PoE OAuth2 login & link.
- 📂 Player data (characters, stash, atlas, challenges).
- 📊 Market data from PoE trade API, PoE.Ninja.
- 📚 Knowledge from PoE Wiki, patch notes, guides.

---

## 6️⃣ Functional Requirements
### 💬 Chat Assistant
- Multi-turn conversation, reset context.
- Intent classification: Knowledge, Player-linked, Market/Trade, Utility.
- Tool calls per intent, cite sources.
- Guardrails for ToS safety.

### 🔐 Login & Account Link
- OAuth2 login, encrypted token, refresh.
- Consent & revoke options.
- Account page to manage link.

### 🛠️ Item & Economy Utilities
- Quick item pricing.
- Affix/mod explanation.
- Vendor recipe lookup.
- Currency conversion.
- Trade search URL generation.

### 🎯 Personalization
- Character list & summary.
- Gear/atlas/passive suggestions.

### 📂 Conversation Management
- Save & pin chats.
- Export JSON/Markdown.
- Feedback system.

---

## 7️⃣ Non-Functional Requirements
- ⚡ Performance: TTFB < 2s, full < 6s.
- 📈 Availability: 99.5% uptime/month.
- 🔐 Security: encryption, TLS, RBAC, rate limits.
- 📦 Scalability: autoscale, cache per league.
- 🛠️ Maintainability: linting, coverage, contracts.

---

## 8️⃣ API Design
### 🔐 Auth & User
```http
POST /auth/poe/login
GET  /auth/poe/callback
POST /auth/logout
GET  /me
DELETE /me/link
