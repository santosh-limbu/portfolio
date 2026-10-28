# Santosh Limbu - Interactive PowerPoint-Style Project Portfolio

An interactive, single-page presentation deck portfolio designed for employers and hiring managers. It fits completely within a single viewport without requiring scrolling and delivers a slide-based PowerPoint experience with interactive project deep-dives, live dashboard image switchers, and high-resolution zoom.

Hosted directly on **GitHub Pages** with zero build configuration.

---

## 🌟 Presentation Deck Features

- **No-Scroll 100vh Viewport Architecture**: Fits cleanly on desktop and laptop displays without page scrolling.
- **PowerPoint-Style Slide Navigation**:
  - **12 Interactive Slides** covering projects, healthcare data suites, skills, and certifications.
  - **Left Thumbnail Rail**: Collapsible thumbnail strip allowing 1-click jumps across all slides.
  - **Bottom Presentation Control Bar**: `< Previous`, `Next >`, slide counter (`01 / 12`), interactive progress dots, and keyboard shortcuts.
  - **Slide Sorter Modal (`Press G`)**: PowerPoint-style grid view to inspect all 12 slides at a glance.
  - **Fullscreen Presentation Mode (`Press F`)**: Expands into an executive pitch deck.
- **Interactive Project Deep Dives**:
  - **Retire & Return Overhaul** (*Published National Best-Practice Case Study by NHS Employers* & Trust Award Winner).
  - **TempRE Vacancy Approvals System** (*2,500+ shift requests, multi-tier approval logic, TSS/GDO/DCMO automated triggers*).
  - **Healthcare KPI & SLA Reporting Suite** (*DAX rolling statistics, 3 custom SLA gauge charts, £284k+ live spend tracked*).
  - **Shift Spend Decomposition Tree & Trends** (*AI Decomposition Tree and multi-year winter surge curve peaking at £0.62M*).
  - **Bank & Locum Additional Assignment Forms** (*75% faster turnaround: 30 days down to 5 days on 50+ weekly applications*).
  - **Team Operations & Invoicing SLA Tracker** (*438 weekly communications monitored with agency invoice dispute governance*).
  - **McKesson UK Scheduling & Rota System** (*£9,000 annual recurring software savings & COVID-19 pandemic modeling*).
  - **CurrentRMS Full Lifecycle Implementation** (*UAT management, SOP documentation, and 100% staff adoption*).
- **Interactive Multi-Image Dashboards**: Click tabs inside project slides to toggle between different dashboard views and click to zoom into high-resolution screenshots.
- **Dynamic Recruiter Persona Switcher**: Tailor the executive summary for *Data Analyst & BI*, *Project Coordinator / PM*, or *Digital Transformation*.
- **Keyboard Shortcuts**:
  - `←` or `PageUp`: Previous slide
  - `→`, `Space`, or `PageDown`: Next slide
  - `Home` / `End`: First / Last slide
  - `G`: Open Slide Sorter grid
  - `F`: Toggle Fullscreen presentation
  - `T`: Toggle Dark / Light theme
  - `Esc`: Close modals

---

## 📁 Repository Structure

```text
ProjectPortfolio/
├── index.html                 # Main PowerPoint presentation deck
├── README.md                  # Documentation & GitHub Pages guide
├── .gitignore                 # Standard ignore file
└── assets/
    ├── css/
    │   └── style.css          # Viewport-fitted presentation styles, slide transitions, light/dark themes
    ├── js/
    │   └── main.js            # PresentationDeck engine, keyboard shortcuts, slide sorter, sub-tabs
    └── images/                # High-resolution Power BI dashboard screenshots
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

This site uses pure standard web technologies (HTML5, modern CSS3, Vanilla JS). It requires no build tools or package managers and works natively on GitHub Pages out of the box.

### Step 1: Create a Repository on GitHub
1. Log in to [github.com/santosh-limbu](https://github.com/santosh-limbu).
2. Click the **+** icon in the top right → **New repository**.
3. Name your repository (e.g., `portfolio` or `project-portfolio`).
4. Set it to **Public** and leave "Initialize with a README" **unchecked**.
5. Click **Create repository**.

### Step 2: Push to GitHub
In your local terminal inside `d:\💻Dev\ProjectPortfolio`:

```bash
# 1. Link to your GitHub repository (replace with your repository URL)
git remote add origin https://github.com/santosh-limbu/portfolio.git

# 2. Push to GitHub
git push -u origin main
```

### Step 3: Turn on GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top) → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and folder `/ (root)`
4. Click **Save**.

Your presentation portfolio will be live in ~60 seconds at:
```text
https://santosh-limbu.github.io/portfolio/
```

---

## 👤 Contact

- **Santosh Limbu**
- **Location**: Coventry, United Kingdom
- **Email**: [s.limbu@hotmail.com](mailto:s.limbu@hotmail.com)
- **LinkedIn**: [linkedin.com/in/slimbu](https://linkedin.com/in/slimbu)
- **GitHub**: [github.com/santosh-limbu](https://github.com/santosh-limbu)
