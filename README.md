# Santosh Limbu - Professional Project & Data Portfolio

An interactive, responsive portfolio website showcasing digital transformation projects, Power BI executive dashboards, and process automation case studies delivered across healthcare and corporate environments.

Designed to be hosted directly on **GitHub Pages** with zero build configuration.

---

## 🌟 Key Features

- **Executive Impact Metrics**: Highlights major quantifiable achievements including 75% process acceleration, £9,000+ recurring annual savings, and 2,500+ digital approvals audited.
- **Dynamic Recruiter Persona Switcher**: Allows hiring managers to tailor the summary text based on their target profile (*Data Analyst & BI*, *Project Coordinator / PM*, or *Digital Transformation & Automation*).
- **High-Resolution Power BI Showcase**: Includes 9 production dashboard screenshots with an interactive category filter and full-screen modal lightbox (with keyboard navigation: `Esc`, `←`, `→`).
- **Comprehensive Project Case Studies**: Structured breakdown of challenges, technical actions, and measurable outcomes for flagship projects (including the **NHS Employers National Best-Practice Case Study**).
- **Interactive Project Filtering & Real-Time Search**: Instant search by tool, keyword, or metric (e.g. searching *"DAX"*, *"SharePoint"*, *"£9,000"*, or *"Agile"*).
- **Visual Skills Matrix**: Tiered proficiency levels (Expert, Advanced, Developing) with concrete tool tags.
- **Career Timeline & Certifications**: Chronological journey covering UHCW NHS Trust, McKesson UK, and City Audio Visual, alongside the Google Project Management Professional Certificate.
- **Modern UI & Accessibility**:
  - Dark / Light mode toggle with automatic OS preference detection and `localStorage` persistence.
  - One-click email copy helper.
  - Print-ready stylesheet (`@media print`) for instant export to clean PDF.

---

## 📁 Repository Structure

```text
ProjectPortfolio/
├── index.html                 # Main single-page interactive portfolio
├── README.md                  # Project documentation & GitHub Pages deployment guide
├── .gitignore                 # Standard ignore file
└── assets/
    ├── css/
    │   └── style.css          # Production styling, light/dark themes, responsive rules, print styles
    ├── js/
    │   └── main.js            # Interactivity: lightbox, persona toggle, live search, theme switch
    └── images/                # High-resolution dashboard screenshots
        ├── dashboard-kpi-rolling-statistics.png
        ├── dashboard-kpi-monthly-statistics.png
        ├── dashboard-shift-decomp-spend.png
        ├── dashboard-tempre-all-approvals.png
        ├── dashboard-tempre-urgent-approvals.png
        ├── dashboard-tempre-progress-tracker.png
        ├── dashboard-month-summary-900.png
        ├── dashboard-month-summary-191.png
        └── dashboard-team-summaries-sla.png
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

This site is built with pure standard web technologies (HTML5, CSS3, Vanilla JS). It requires no build tools or package managers and works natively with GitHub Pages out of the box.

### Step 1: Create a new repository on GitHub
1. Log in to your GitHub account: [github.com/santosh-limbu](https://github.com/santosh-limbu).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `project-portfolio`).
4. Keep it **Public** (required for free GitHub Pages).
5. Leave "Initialize this repository with a README" **unchecked** (we already have files created).
6. Click **Create repository**.

### Step 2: Push this repository to GitHub
In your local terminal (PowerShell or Git Bash) inside this project folder:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Interactive portfolio with Power BI showcase"

# 4. Set the default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repository URL)
git remote add origin https://github.com/santosh-limbu/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** (tab at the top).
3. On the left sidebar, click on **Pages** (under *Code and automation*).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and `/ (root)`.
5. Click **Save**.

Within 1–2 minutes, your portfolio will be live at:
```text
https://santosh-limbu.github.io/portfolio/
```
*(or `https://santosh-limbu.github.io` if the repository is named `santosh-limbu.github.io`)*.

---

## 🛠️ Technologies Used

- **HTML5 & Semantic Elements** (Accessible landmarks, meta tags, OpenGraph ready)
- **Modern CSS3** (Custom properties/tokens, CSS Grid, Flexbox, Glassmorphism, Print media query)
- **Vanilla JavaScript (ES6+)** (DOM manipulation, IntersectionObserver, Clipboard API)
- **Font Awesome 6.5.1** (Free vector icons)
- **Google Fonts** (Inter, Plus Jakarta Sans, JetBrains Mono)

---

## 👤 Contact

- **Santosh Limbu**
- **Location**: Coventry, United Kingdom
- **Email**: [s.limbu@hotmail.com](mailto:s.limbu@hotmail.com)
- **LinkedIn**: [linkedin.com/in/slimbu](https://linkedin.com/in/slimbu)
- **GitHub**: [github.com/santosh-limbu](https://github.com/santosh-limbu)
