# Remote Portfolio Micro-Frontend

This project is a standalone **remote micro-frontend** application built with Vue 3 and TypeScript. Its purpose is to be dynamically consumed by a host or "shell" application using Module Federation.

It is part of a larger architectural demonstration and is deployed as a separate entity to showcase a professional, multi-team, multi-repository micro-frontend workflow.

**This application is not intended to be run standalone in production.** It serves its bundled assets to be consumed by its host application, the [Derayah Market Watch Shell](https://github.com/ranibb/market-watch).

---

## 🚀 Exposed Components

This remote application exposes the following components via Module Federation:

| Path | Component | Description |
| :--- | :--- | :--- |
| `./PortfolioSummary` | `PortfolioSummary.vue` | A simple UI component that displays a snapshot of a user's investment portfolio. |

## 🛠️ Technologies Used

- **Framework:** Vue 3 (Composition API)
- **Language:** TypeScript
- **Bundler:** Vite
- **Micro-Frontend:** Vite Plugin for Module Federation

---

## ⚙️ Local Development Setup

This project is designed to be run in parallel with its host application.

### 1. Run the Remote (This Project)

The remote application must be **built** first and then **served** using Vite's preview server. This ensures the `remoteEntry.js` manifest file is available for the host to consume.

```bash
# Install dependencies
npm install

# Build the application for production
npm run build

# Serve the contents of the /dist folder on port 5001
npm run preview -- --port 5001
```

### 2. Run the Host (Shell)

In a separate terminal, run the host application (`derayah-market-watch`) in development mode.

```bash
# In the derayah-market-watch project directory
npm run dev
```

The host application is configured to look for this remote at `http://localhost:5001`.

## 📦 Deployment

This application is deployed as a standalone site to Netlify. Its sole purpose in production is to serve its assets to the live host application.

To ensure seamless cross-origin communication, a `public/_headers` file is included to configure the necessary **CORS (Cross-Origin Resource Sharing)** headers, allowing the host domain to fetch the remote's assets.