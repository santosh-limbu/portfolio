# Santosh Limbu - Interactive Portfolio & Project Slide Theater

A modern, interactive portfolio website designed for recruiters and hiring managers. It features a clean, single-page executive landing hub with a tailored summary blurb, quantifiable impact metrics, and an interactive catalog of projects. 

Clicking any project seamlessly launches an interactive **PowerPoint-style presentation slide theater** for deep-dive inspection with live production dashboards and process architectures.

Hosted directly on **GitHub Pages** with zero build configuration.

---

## 🌟 Architecture & Key Features

### 1. Single-Page Executive Hub (Default View)
- **Executive Summary Blurb**: Highlights specialization in Power BI development, complex operational datasets, DAX modeling, and digital transformation.
- **Dynamic Recruiter Persona Switcher**: Tailor the summary blurb in 1 click for **Data Analyst & BI**, **Project Coordinator / PM**, or **Digital Transformation**.
- **Quantifiable Impact Strip**:
  - **75% Faster Processing**: Locum onboarding reduced from 30 days to 5 days.
  - **£9,000+ Annual Savings**: In-house rota and forecasting replacement at McKesson.
  - **2,500+ Digital Approvals Audited**: Centralized governance via TempRE.
  - **100% Audit Trail**: Zero lost forms; published national case study by NHS Employers.
- **Project Directory Catalog**: Filterable by *Power BI & Analytics*, *Digital Transformation*, *Workflow Automation*, and *Systems & Modeling*, complete with real-time keyword search.

### 2. Fullscreen Presentation Deck Theater
Clicking on any project launches its dedicated interactive presentation slides:
- **Retire & Return Digital Overhaul** (*Published National Best-Practice Case Study by NHS Employers* & Trust Award Winner) - 3 slides with process flow architecture.
- **TempRE Vacancy Approvals System** (*2,569 shift requests audited, GDO/DCMO multi-tier approval routing*) - 4 slides with production executive pipeline, urgent shift tracker, and progress tracker.
- **Healthcare KPI & SLA Reporting Suite** (*DAX time intelligence, 3 custom SLA gauge charts, £284k+ live spend tracked*) - 3 slides comparing rolling statistics and monthly views.
- **Shift Spend Decomposition Tree & Winter Surge** (*AI Decomposition Tree and multi-year winter surge curve peaking at £0.62M*) - 2 slides with unit cost analytics.
- **Bank & Locum Additional Assignment Forms** (*75% faster turnaround: 30 days to 5 days on 50+ weekly applications*) - 3 slides with Treemap analytics and RTW compliance checks.
- **Team Operations & Invoicing SLA Tracker** (*438 weekly communications monitored with agency invoice dispute governance*) - 2 slides.
- **McKesson UK Scheduling & Rota System** (*£9,000 annual recurring software savings & COVID-19 pandemic modeling*) - 2 slides.
- **CurrentRMS Full Lifecycle Implementation** (*UAT management, SOP documentation, and 100% staff adoption*) - 2 slides.

### 3. Presentation Navigation & Controls
- **Slide Navigation**: `< Previous Slide` and `Next Slide >` buttons, slide counter (`01 / 03`), and clickable progress dots.
- **Project Switcher**: Move to the next or previous project (`Next Project →`) without closing the presentation.
- **Click-to-Zoom High-Resolution Lightbox**: Click any dashboard screenshot to inspect DAX visuals, needle gauges, and data tables in high resolution.
- **Keyboard Shortcuts**:
  - `←` or `PageUp`: Previous slide
  - `→`, `Space`, or `PageDown`: Next slide
  - `Esc`: Close presentation and return to Hub (or close modal)
  - `F`: Toggle Fullscreen Presentation Mode

### 4. Interactive Quick Modals
- **Skills Matrix Modal**: 4-category tiered matrix (*Data Visualization*, *Automation*, *Project Management*, *Databases & Systems*).
- **Career Timeline Modal**: Chronological history covering UHCW NHS Trust, McKesson UK, and City Audio Visual, plus the Google Project Management Certificate.
- **Contact & Print**: 1-click email copy helper (`s.limbu@hotmail.com`) and print-ready stylesheet (`@media print`) for instant PDF export.

---

## 📁 Repository Structure

```text
ProjectPortfolio/
├── index.html                 # Single-page executive hub + slide theater modal
├── README.md                  # Documentation & GitHub Pages guide
├── .gitignore                 # Clean ignore rules
└── assets/
    ├── css/
    │   └── style.css          # Executive hub styling, presentation theater, dark/light themes
    ├── js/
    │   └── main.js            # Projects slide database, presentation controller, search & filters
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

This site uses pure standard web technologies (HTML5, CSS3, Vanilla JS). It requires no build tools or package managers and works natively on GitHub Pages out of the box.

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
