# 📊 GitHub Analytics

A modern, high-performance web application designed to turn developer GitHub activity and repository metrics into insightful, visually stunning analytics. Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Recharts**, and smooth motion animations.

---

## 🚀 Overview

**GitHub Analytics** provides an intuitive, sleek dashboard to help developers and teams explore contribution patterns, analyze repository statistics, inspect language distributions, and track coding streaks with ease.

---

## ✨ Features

- **📈 Developer Overview Dashboard**
  - Instant summary of key stats: Total Commits, Public Repositories, Current Streak, and Longest Streak.
  - Interactive profile summary with quick links to GitHub.

- **📊 Advanced Activity & Contribution Analytics**
  - **Contribution Heatmap Grid**: Visual breakdown of daily commit frequency.
  - **Commit Trends**: Multi-month commit trajectory charts.
  - **Active Day Breakdown**: Identifies peak productivity days of the week.
  - **Weekly Performance**: Granular weekly commit analysis.

- **📁 Repository Explorer & Filter Engine**
  - Search repositories by name, description, or keyword.
  - Filter by programming language (JavaScript, TypeScript, Python, Go, CSS, and more).
  - Multi-criteria sorting: Stars, Forks, Recent Updates, Creation Date, and Alphabetical order.
  - Comprehensive metrics: Aggregated star count, total forks, and unique language counts.

- **🎨 Modern UI & Interactive Navigation**
  - Futuristic dark-themed layout with sharp grid borders.
  - Animated floating **Dock** navigation powered by Motion and Lucide icons.
  - Custom canvas & CSS loaders with smooth GSAP animations.

- **🤖 AI Chatbot Assistant**
  - Context-aware AI Chatbot powered by Google Gemini to analyze profiles, roast/review accounts, and suggest pinned repo strategies.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | [React 19](https://react.dev/), [Vite](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), [Styled Components](https://styled-components.com/) |
| **Data Visualizations** | [Recharts](https://recharts.org/) |
| **Animations & UI** | [Motion](https://motion.dev/), [GSAP](https://gsap.com/), [Lucide React](https://lucide.dev/) |
| **Linting & Quality** | [Oxlint](https://oxc.rs/) |

---

## 📁 Project Structure

```text
├── public/                # Static assets and icons
├── src/
│   ├── assets/            # SVG icons and visual assets
│   ├── components/        # Modular UI components
│   │   ├── ActivityByWeek/
│   │   ├── Chatbot/       # AI Chatbot component
│   │   ├── CommitActivityChart/
│   │   ├── ContributionGrid/
│   │   ├── Dock/          # Floating interactive navigation dock
│   │   ├── LanguageChart/ # Language distribution pie/donut chart
│   │   ├── Loader/        # Custom visual loaders
│   │   ├── MostActiveDays/
│   │   ├── Nav/           # Header navigation
│   │   ├── ProfileCard/   # User summary card
│   │   ├── RecentActivity/
│   │   ├── RepoStats/     # Aggregated repository metrics
│   │   ├── RepositoryCard/
│   │   ├── RepositorySearch/
│   │   └── StatCard/      # Highlight stat metric tiles
│   ├── layouts/           # Global application layout wrappers
│   ├── pages/             # App views (Dashboard, Activity, Repos, Compare, Analyze)
│   ├── App.jsx            # Main route configurations
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global Tailwind CSS styles
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite build configuration
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** (or **pnpm** / **yarn**)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaunakRaj567/GitHub-Analytics.git
   cd GitHub-Analytics/app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local development server with Hot Module Replacement (HMR).
- `npm run build` — Bundles and optimizes the app for production.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs Oxlint for fast code analysis.