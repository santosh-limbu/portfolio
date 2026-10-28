/**
 * Santosh Limbu - Portfolio & Interactive Presentation Deck Manager
 * Handles Main Hub Project Catalog + Fullscreen Project Slide Theater
 */

// =========================================================================
// 1. Projects Presentation Slides Database
// =========================================================================
const PROJECTS_DATA = {
  'retire-return': {
    id: 'retire-return',
    title: 'Retire & Return Digital Overhaul',
    org: 'UHCW NHS Trust',
    badge: 'Published National Best Practice by NHS Employers',
    slides: [
      {
        title: 'Problem & Operational Friction',
        heading: 'Legacy Paper Pathway Inefficiencies',
        desc: 'Overhauled a manual, paper-based "retire-and-return" pathway that previously suffered from misplaced documentation, poor cross-departmental communication, and widespread staff dissatisfaction.',
        stats: [
          { val: '71%', lbl: 'Staff Found Process Complicated' },
          { val: '32%', lbl: 'Manager Satisfaction Rate' }
        ],
        bullets: [
          'Critical NHS retiree forms were repeatedly misplaced between Clinical wards, HR, and Payroll.',
          'Applicants had zero real-time visibility, leading to high administrative inquiry volume.',
          'Complex multi-signatory approval chains delayed vital healthcare professionals returning to work.'
        ],
        tags: ['Process Mapping', 'NHS Healthcare', 'User Research', 'Agile Delivery'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-file-excel', title: '1. Paper Submission', sub: 'Manual paper form completed by returning retiree' },
          { icon: 'fa-solid fa-triangle-exclamation', title: '2. Disjointed Handoffs', sub: 'Forms delayed in inter-departmental transit' },
          { icon: 'fa-solid fa-clock', title: '3. Weeks in Limbo', sub: 'Zero applicant status tracking or audit log' }
        ]
      },
      {
        title: 'Technical Solution Architecture',
        heading: 'Automated Multi-Stage Cloud Workflow',
        desc: 'Engineered an end-to-end automated digital system using Microsoft Forms, Power Automate conditional approval trees, and a centralized SharePoint tracking worklist.',
        stats: [
          { val: '100%', lbl: 'Paperless Automation' },
          { val: '4-Tier', lbl: 'Dynamic Approval Engine' }
        ],
        bullets: [
          'Standardized digital intake via Microsoft Forms captures structured applicant criteria.',
          'Power Automate dynamically directs conditional approval requests to designated managers.',
          'Centralized SharePoint register updates live statuses with zero risk of misplaced paperwork.',
          'Automated trigger alerts deliver instant email updates to applicant, manager, and payroll.'
        ],
        tags: ['Microsoft Forms', 'SharePoint Online', 'Power Automate', 'Workflow Automation'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-clipboard-question', title: '1. MS Forms Intake', sub: 'Captures retiree criteria and approval requirements' },
          { icon: 'fa-solid fa-code-branch', title: '2. Power Automate Routing', sub: 'Conditional multi-tier approval tree based on staff band' },
          { icon: 'fa-solid fa-table-list', title: '3. SharePoint Worklist', sub: 'Centralized live audit log accessible to HR and Payroll' },
          { icon: 'fa-solid fa-envelope-circle-check', title: '4. Automated Triggers', sub: 'Immediate status confirmations to all stakeholders' }
        ]
      },
      {
        title: 'Measurable Outcomes & Recognition',
        heading: 'National NHS Employers Case Study',
        desc: 'Delivered a 100% trackable digital process that eliminated lost forms, drastically accelerated approvals, and earned top national recognition.',
        stats: [
          { val: '100%', lbl: 'Workflow Traceability' },
          { val: '0', lbl: 'Lost Application Forms' }
        ],
        bullets: [
          'Published nationally by NHS Employers as a best-practice exemplar digital case study.',
          'Earned internal UHCW Trust organizational awards for staff satisfaction and digital innovation.',
          'Created comprehensive digital toolkit (SOPs, flowcharts, FAQs) for smooth staff adoption.'
        ],
        tags: ['NHS Employers', 'National Case Study', 'SOPs', 'Award Winner'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-trophy', title: 'National Case Study', sub: 'Published by NHS Employers as best-practice benchmark' },
          { icon: 'fa-solid fa-award', title: 'Trust Innovation Award', sub: 'Honored with internal healthcare excellence award' },
          { icon: 'fa-solid fa-circle-check', title: '100% Audit Trail', sub: 'Permanent digital compliance and accountability' }
        ]
      }
    ]
  },

  'tempre-approvals': {
    id: 'tempre-approvals',
    title: 'TempRE Vacancy Approvals System',
    org: 'UHCW NHS Trust',
    badge: 'Workflow Automation & Audit',
    slides: [
      {
        title: 'System Overview & Routing Logic',
        heading: 'Agile Vacancy Approvals System',
        desc: 'Automated end-to-end multi-tier vacancy approval workflow replacing manual paper handoffs. Enforces rigorous budget checks, handles urgent escalations, and ensures only approved vacancies reach the TempRE system.',
        stats: [
          { val: '2,569', lbl: 'Shift Requests Audited' },
          { val: '92.6%', lbl: 'Approved (2,380 Shifts)' }
        ],
        bullets: [
          'Mapped end-to-end hand-offs between Requesting Departments, TSS, GDO, and DCMO officers.',
          'Built complex conditional approval logic in Power Automate (Standard, Urgent, Amended).',
          'Automated confirmation triggers to TSS ensure zero unapproved shifts are published.'
        ],
        tags: ['SharePoint Lists', 'Power Automate', 'TempRE', 'Agile PM'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-tempre-all-approvals.png',
        imageCaption: 'TempRE Vacancy Approvals Executive Pipeline (2,569 Requests)',
        imageDesc: 'High-level volume dashboard monitoring 2,569 total requests, weekly intake peaks, and status distribution.'
      },
      {
        title: 'Production Dashboard: Executive Pipeline',
        heading: 'Approval Pipeline & Volume Surge Analytics',
        desc: 'Macro-level operational oversight dashboard tracking weekly submission surges (peaking at 331 weekly requests), completion trajectories, and bottleneck statuses.',
        stats: [
          { val: '331', lbl: 'Peak Weekly Intake' },
          { val: '2,380', lbl: 'Completed Decisions' }
        ],
        bullets: [
          'Visualizes status distribution across New, Sent to GDO, Chasing Requester, and Rejected.',
          'Tracks completion trends against incoming demand to maintain hospital staffing levels.',
          'Empowers senior leadership with immediate visibility of pending approval bottlenecks.'
        ],
        tags: ['Power BI', 'Pipeline Analytics', 'Executive Overview', 'Volume Trends'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-tempre-all-approvals.png',
        imageCaption: 'TempRE Vacancy Approvals Executive Pipeline',
        imageDesc: 'Displays intake spikes, approved vs completed trajectories, and request status distribution.'
      },
      {
        title: 'Production Dashboard: Urgent Shift Tracker',
        heading: 'Urgent Clinical Shift Approvals Tracker',
        desc: 'Specialized dashboard isolating high-priority urgent clinical shift requests (110 total, 103 approved) with diagnostic rejection analysis for GDO and DCMO officers.',
        stats: [
          { val: '110', lbl: 'Urgent Shifts Flagged' },
          { val: '93.6%', lbl: 'Urgent Approval Rate' }
        ],
        bullets: [
          'Monitors fast-track clinical requests requiring rapid medical leadership escalation.',
          'Tracks rejection reasons (GDO vs DCMO) to safeguard ward staffing protocols.',
          'Weekly trend lines identify periods of severe acute staffing pressures.'
        ],
        tags: ['Urgent Workflows', 'Escalation Tracking', 'Clinical Governance'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-tempre-urgent-approvals.png',
        imageCaption: 'TempRE Urgent Vacancy Approvals Tracker',
        imageDesc: 'Monitors 110 urgent clinical requests, weekly submission patterns, and rejection diagnostics.'
      },
      {
        title: 'Interactive Progress Tracker & Shift Details',
        heading: 'Shift Verification & Budget Validation',
        desc: 'Granular drill-through interface showing individual job reference shift records, automated departmental budget validation, and shift calendar scheduling.',
        stats: [
          { val: '4-Stage', lbl: 'Visual Progress Tracker' },
          { val: '£55-£100', lbl: 'Hourly Grade Rates' }
        ],
        bullets: [
          'Features a dynamic 4-stage progress chevron tracker (Stage 1, Stage 2, GDO, DCMO).',
          'Automatic departmental budget validation indicator verifies financial compliance.',
          'Interactive shift calendar grid confirms coverage across core and unsocial hours.'
        ],
        tags: ['Interactive Drill-through', 'Budget Logic', 'Calendar Grid', 'Audit Register'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-tempre-progress-tracker.png',
        imageCaption: 'TempRE Progress Tracker & Shift Verification Suite',
        imageDesc: 'Granular view displaying 4-stage progress tracker, budget checkmark, and shift calendar.'
      }
    ]
  },

  'powerbi-kpis': {
    id: 'powerbi-kpis',
    title: 'Healthcare KPI & SLA Reporting Suite',
    org: 'UHCW NHS Trust',
    badge: 'Advanced Power BI & DAX',
    slides: [
      {
        title: 'BI Architecture & DAX Modeling',
        heading: 'Production Healthcare Reporting Suite',
        desc: 'Executive reporting suite built with advanced DAX calculations, live KPI gauge benchmarks against NHS SLAs, and interactive drill-throughs that reduced reporting queries by 15%.',
        stats: [
          { val: '4.43d', lbl: 'Avg Approval Turnaround' },
          { val: '£284k', lbl: 'Live Spend Audited' }
        ],
        bullets: [
          'Formulated complex DAX measures for rolling statistics, elapsed days, and time intelligence.',
          'Automated near real-time scheduled refreshes, eliminating manual spreadsheet collation.',
          'Specialty-level slicers for Anaesthetics, General Surgery, Acute Medicine, and Paediatrics.'
        ],
        tags: ['Power BI', 'DAX Measures', 'Power Query', 'Data Modeling'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-kpi-rolling-statistics.png',
        imageCaption: 'Key Performance Indicators: Rolling Total Statistics',
        imageDesc: 'Executive dashboard with 3 SLA gauges, 4.43 days turnaround, and £284,071 spend register.'
      },
      {
        title: 'Rolling Total Statistics Dashboard',
        heading: 'Executive SLA Gauge Benchmarks',
        desc: 'Executive overview measuring turnaround time across multi-tier approvals against targets, featuring 3 custom DAX KPI gauges and a live £284,071 financial register.',
        stats: [
          { val: '2.06d', lbl: 'Shifts Linked (Target <2.5d)' },
          { val: '1.30d', lbl: 'GDO Approval (Target <2.0d)' },
          { val: '0.07d', lbl: 'DCMO Approval SLA' }
        ],
        bullets: [
          'KPI Gauge charts provide immediate visual RAG status against agreed Trust benchmarks.',
          'Donut chart highlights overall average completion turnaround (4.43 days).',
          'Live table details individual creator, specialty, cost, and elapsed days.'
        ],
        tags: ['KPI Gauges', 'SLA Tracking', 'Donut Charts', 'Financial Register'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-kpi-rolling-statistics.png',
        imageCaption: 'Rolling KPI Statistics Dashboard (£284,071 Tracked)',
        imageDesc: 'Displays SLA compliance gauges, donut completion turnaround, and financial spend table.'
      },
      {
        title: 'Monthly Performance Dashboard',
        heading: 'Granular Monthly SLA Tracking',
        desc: 'Operational monthly view providing granular SLA tracking for 687 approved requests totaling £107,686.72, with an average completion time of 3.93 days.',
        stats: [
          { val: '687', lbl: 'Approved Requests (Jan 2026)' },
          { val: '3.93d', lbl: 'Average Turnaround' }
        ],
        bullets: [
          'Granular filtering by clinical group (Clinical Diagnostic, Emergency Medicine, Surgery).',
          'Compares urgent vs standard approval duration across clinical specialties.',
          'Enables departmental heads to independently identify and resolve localized delays.'
        ],
        tags: ['Monthly KPIs', 'Specialty Slicers', 'Healthcare Data', 'Benchmark Tracking'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-kpi-monthly-statistics.png',
        imageCaption: 'Monthly KPI Statistics Dashboard (January 2026)',
        imageDesc: 'Operational monthly view tracking 687 approved requests and £107,686.72 in shift spend.'
      }
    ]
  },

  'spend-decomp': {
    id: 'spend-decomp',
    title: 'Shift Spend Decomposition Tree & Winter Surge',
    org: 'UHCW NHS Trust',
    badge: 'Root-Cause BI & Forecasting',
    slides: [
      {
        title: 'Root-Cause Shift Analytics',
        heading: 'Unit Economics & Clinical Spend Modeling',
        desc: 'Leveraged Power BI AI Decomposition Trees to perform root-cause analysis on 2,751 shifts by clinical division, coupled with multi-year spend trends tracking winter operational pressures.',
        stats: [
          { val: '£590.11', lbl: 'Average Cost per Shift' },
          { val: '2,751', lbl: 'Total Shifts Categorized' }
        ],
        bullets: [
          'Deconstructs total shift demand across Surgical Services (836), Emergency (639), and Medicine (577).',
          'Provides granular breakdown by staff grade: Consultant, FY1, FY2, GP, and ST3+.',
          'Identifies fragile clinical services requiring proactive rota intervention.'
        ],
        tags: ['Decomposition Tree', 'Unit Economics', 'Grade Modeling', 'Root Cause'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-shift-decomp-spend.png',
        imageCaption: 'TempRE Vacancy Shift Data & Bank Spend Trend',
        imageDesc: 'AI Decomposition tree deconstructing 2,751 shifts alongside multi-year bank spend curve.'
      },
      {
        title: 'Winter Surge Spend Curve',
        heading: 'Seasonal Surge Forecasting & Peaks',
        desc: 'Interactive line chart tracking historical bank spend across 2024–2026, highlighting summer baselines (£0.01M) and sharp winter emergency surges peaking at £0.62M in Jan 2026.',
        stats: [
          { val: '£0.62M', lbl: 'Peak Winter Spend (Jan 2026)' },
          { val: '£0.01M', lbl: 'Baseline Summer Spend' }
        ],
        bullets: [
          'Visualizes winter operational pressures on NHS bank and locum expenditure.',
          'Enables executive financial directors to anticipate seasonal budget allocations.',
          'Connected live to TempRE shift data for near real-time budget forecasting.'
        ],
        tags: ['Spend Forecasting', 'Trend Analysis', 'Seasonal Surge', 'Financial Governance'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-shift-decomp-spend.png',
        imageCaption: 'Bank Spend Surge Trend Line (Peaking at £0.62M)',
        imageDesc: 'Multi-year bank spend trend line highlighting winter pressures from 2024 through 2026.'
      }
    ]
  },

  'locum-forms': {
    id: 'locum-forms',
    title: 'Bank & Locum Additional Assignment Forms',
    org: 'UHCW NHS Trust',
    badge: '75% Faster Processing',
    slides: [
      {
        title: 'Process Re-Engineering Overview',
        heading: '75% Reduction in Locum Onboarding Time',
        desc: 'Re-engineered the paper-based onboarding application pathway. Slashed turnaround from 30 days to 5 days, handling 50+ weekly applications with zero lost files and direct Payroll integration.',
        stats: [
          { val: '30d → 5d', lbl: '75% Processing Improvement' },
          { val: '50+', lbl: 'Weekly Applications Handled' }
        ],
        bullets: [
          'Replaced lost paper applications with structured digital Power Apps and Power Automate flows.',
          'Integrated automated approval routing with internal Trust payroll validation.',
          'Automated email updates notify candidates at every step of their onboarding lifecycle.'
        ],
        tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Payroll Integration'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-month-summary-900.png',
        imageCaption: 'Additional Assignments: 31-Day Operational Summary (900 Intake)',
        imageDesc: 'Operational intake dashboard tracking 900 applications, status distribution, and Treemap.'
      },
      {
        title: '31-Day Intake & Staff Treemap',
        heading: 'High-Volume Onboarding Treemap Analytics',
        desc: 'Operational dashboard tracking 900 applications in a 31-day period, utilizing a large multi-colored Treemap to segment applicants by staffing group and approval stage.',
        stats: [
          { val: '900', lbl: 'Total Applications in Period' },
          { val: '378', lbl: 'Awaiting Payroll Completion' }
        ],
        bullets: [
          'Treemap segments Medical & Dental (116), Nursing (64), Support Workers, and Admin.',
          'Visualizes status progression: Closed (302), Application Expired, TempRE Setup, Archived.',
          'Wave line chart tracks month-by-month and quarterly intake fluctuations.'
        ],
        tags: ['Treemaps', 'Intake Curve', 'Status Segmentation', 'Workforce Analytics'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-month-summary-900.png',
        imageCaption: '31-Day Operational Intake Summary & Treemap',
        imageDesc: 'Displays intake wave line chart, status pie chart, and staffing group Treemap.'
      },
      {
        title: 'Daily Flow & Compliance Tracking',
        heading: 'Daily Intake Flow & Right-to-Work Checks',
        desc: 'Granular operational cockpit monitoring day-by-day submission volumes and proactive Right-to-Work (RTW) verifications to prevent clinical deployment delays.',
        stats: [
          { val: '191', lbl: 'Applications in 31-Day Span' },
          { val: '124', lbl: 'Awaiting Payroll Sign-off' }
        ],
        bullets: [
          'Daily frequency curve highlights submission peaks (up to 13 applications daily).',
          'Isolates pending RTW checks and Loop Setup verifications before clinical onboarding.',
          'Ensures regulatory compliance across all medical, dental, and allied health professionals.'
        ],
        tags: ['Daily Tracking', 'Compliance Verification', 'RTW Checks'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-month-summary-191.png',
        imageCaption: 'Daily Intake Flow & Status Transitions Dashboard',
        imageDesc: 'Granular day-by-day intake curve with RTW check tracking and status transitions.'
      }
    ]
  },

  'team-ops': {
    id: 'team-ops',
    title: 'Team Operations & Invoicing SLA Tracker',
    org: 'UHCW NHS Trust',
    badge: 'Operations Cockpit & Finance',
    slides: [
      {
        title: 'Cross-Team Cockpit Overview',
        heading: 'Multi-Department Operational Performance',
        desc: 'Cross-departmental management dashboard monitoring 438 weekly communications across Admin, AHP, Medics, and Nursing teams, incorporating invoice dispute auditing and SLA tracking.',
        stats: [
          { val: '438', lbl: 'Weekly Emails Audited' },
          { val: '4', lbl: 'Clinical & Admin Teams' }
        ],
        bullets: [
          'Visual aging communication flags highlight oldest pending emails to prevent SLA breaches.',
          'Monitors FOI weekly and monthly reporting schedules for executive review.',
          'Provides clear workload distribution balancing across Admin, Medics, and Nursing rosters.'
        ],
        tags: ['Stacked Bar Charts', 'Team Workload', 'SLA Aging', 'Operations'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-team-summaries-sla.png',
        imageCaption: 'Team Operational Performance & Invoicing SLA Tracker',
        imageDesc: 'Dashboard tracking 438 weekly communications, oldest emails, and agency invoice disputes.'
      },
      {
        title: 'Agency Invoicing Governance',
        heading: 'Invoice Dispute & Agency Resolution',
        desc: 'Dedicated financial governance module monitoring agency invoice statuses, dispute resolution times, and overdue queries over 30 days.',
        stats: [
          { val: '100%', lbl: 'Dispute Visibility' },
          { val: '9', lbl: 'Invoices Processed' }
        ],
        bullets: [
          'Categorizes invoices: Processed, Dispute with Agency, Disputing with Dept, Overdue (>30d).',
          'Tracks compliance checklists for Medics Pending and Nursing onboarding.',
          'Ensures contractual alignment with staffing agencies to prevent billing overcharges.'
        ],
        tags: ['Invoice Auditing', 'Agency SLAs', 'Financial Governance'],
        visualType: 'image',
        imageSrc: 'assets/images/dashboard-team-summaries-sla.png',
        imageCaption: 'Invoicing Summary & Compliance Tracking',
        imageDesc: 'Details agency invoice disputes, overdue queries, and nursing compliance checklists.'
      }
    ]
  },

  'mckesson-system': {
    id: 'mckesson-system',
    title: 'McKesson Excel Scheduling & Forecasting',
    org: 'McKesson UK (MASTA Travel Health)',
    badge: '£9,000 Annual Recurring Savings',
    slides: [
      {
        title: 'Software Replacement & Savings',
        heading: 'In-House Rota & Forecasting System',
        desc: 'Devised and deployed an integrated Excel forecasting and clinical rota system to replace costly commercial software, delivering ~£9,000 in recurring annual savings while navigating COVID-19 pandemic resource constraints.',
        stats: [
          { val: '£9,000', lbl: 'Annual Recurring Cost Savings' },
          { val: '100%', lbl: 'Operational Rota Reliability' }
        ],
        bullets: [
          'Eliminated third-party subscription fees by engineering an in-house workbook solution.',
          'Built robust data validation rules and formulas ensuring payroll and rota accuracy.',
          'Authored business cases that identified additional revenue streams for the company.'
        ],
        tags: ['Advanced Excel', 'Cost Reduction', 'Formulas & Pivots', 'Resource Allocation'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-file-invoice-dollar', title: '1. Cost Analysis', sub: 'Identified £9,000 in external software subscription overhead' },
          { icon: 'fa-solid fa-file-excel', title: '2. Custom Architecture', sub: 'Engineered interconnected workbook system with validation' },
          { icon: 'fa-solid fa-piggy-bank', title: '3. Full Replacement', sub: 'Maintained 100% rota reliability with zero software cost' }
        ]
      },
      {
        title: 'Pandemic Resource Allocation',
        heading: 'COVID-19 Staffing Models & Automated Alerts',
        desc: 'Formulated clinical forecasting models to dynamically reallocate travel health nurses in response to rapidly shifting COVID-19 pandemic mandates and travel clinic demand.',
        stats: [
          { val: 'Agile', lbl: 'COVID-19 Redeployment' },
          { val: 'Automated', lbl: 'Reporting via Power Automate' }
        ],
        bullets: [
          'Modeled clinic utilization and nurse coverage across fluctuating regional restrictions.',
          'Integrated Power Automate workflows for automated reminder notifications and reports.',
          'Delivered weekly status reports with comprehensive utilization analysis for executive review.'
        ],
        tags: ['Forecasting Models', 'COVID-19 Response', 'Power Automate', 'Rota Planning'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-chart-line', title: '1. Demand Modeling', sub: 'Forecasted clinic demand amidst fluctuating travel bans' },
          { icon: 'fa-solid fa-user-nurse', title: '2. Dynamic Allocation', sub: 'Redeployed clinical nurses to highest-demand centers' },
          { icon: 'fa-solid fa-bolt', title: '3. Automated Reporting', sub: 'Power Automate triggered utilization summaries' }
        ]
      }
    ]
  },

  'city-av': {
    id: 'city-av',
    title: 'CurrentRMS Cloud System Implementation',
    org: 'City Audio Visual Ltd (CAV)',
    badge: 'System Delivery & CRM',
    slides: [
      {
        title: 'Full Lifecycle Implementation',
        heading: 'CurrentRMS Cloud System Rollout',
        desc: 'Led the end-to-end implementation of CurrentRMS cloud software, modernizing inventory control, event scheduling, and client quotation workflows across the business.',
        stats: [
          { val: 'Full', lbl: 'Lifecycle Delivery' },
          { val: '100%', lbl: 'Staff Onboarding & Adoption' }
        ],
        bullets: [
          'Evaluated vendor options, managed implementation timeline, and orchestrated UAT.',
          'Authored comprehensive user guides and Standard Operating Procedures (SOPs).',
          'Delivered hands-on staff training sessions ensuring zero disruption during launch.'
        ],
        tags: ['CurrentRMS', 'UAT Testing', 'SOP Authoring', 'Change Management'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-magnifying-glass', title: '1. Vendor Evaluation', sub: 'Researched and presented software options to directors' },
          { icon: 'fa-solid fa-vial-circle-check', title: '2. Testing & UAT', sub: 'Managed milestones, hardware upgrades, and user acceptance' },
          { icon: 'fa-solid fa-graduation-cap', title: '3. Training & SOPs', sub: 'Conducted staff training sessions for 100% adoption' }
        ]
      },
      {
        title: 'Inventory Innovation & Financials',
        heading: 'Barcode Tracking Proposal & Sage CRM',
        desc: 'Maintained customer CRM accuracy and equipment databases, managing debtor control through Sage Accounts and authoring a business proposal for automated barcode stock control.',
        stats: [
          { val: 'Sage', lbl: 'Accounts & CRM Integration' },
          { val: 'Barcode', lbl: 'Stock Control Innovation' }
        ],
        bullets: [
          'Managed end-to-end customer quotation pipeline with prompt hiring cost communications.',
          'Developed business proposal for a barcode scanning system to automate stock-checks.',
          'Acted as first point of contact for IT support, resolving hardware and web content issues.'
        ],
        tags: ['Sage Accounts', 'Inventory Control', 'Hardware Maintenance', 'CRM'],
        visualType: 'flow',
        flowSteps: [
          { icon: 'fa-solid fa-file-invoice', title: '1. Sage Financials', sub: 'Managed invoicing, customer data, and debt recovery' },
          { icon: 'fa-solid fa-barcode', title: '2. Barcode Proposal', sub: 'Formulated business case for automated warehouse tracking' },
          { icon: 'fa-solid fa-headset', title: '3. Technical Support', sub: 'Provided first-line hardware, website, and CRM maintenance' }
        ]
      }
    ]
  }
};

// =========================================================================
// 2. Persona Focus Profiles
// =========================================================================
const PERSONA_PROFILES = {
  data: {
    label: "Data & BI Focus",
    text: "Data-focused project professional with 5+ years of experience transforming complex healthcare and operational datasets into intuitive, high-impact Power BI dashboards. Proficient in advanced DAX modeling, KPI gauge tracking against SLAs, and decomposition trees for root-cause analysis that empower clinical and executive stakeholders to independently make data-driven decisions."
  },
  pm: {
    label: "PM & Agile Focus",
    text: "Project management professional with over 3 years of experience working in cross-functional teams, implementing technical solutions, and delivering successful digital transformation initiatives. Skilled in Agile/Scrum methodologies, stakeholder management, technical documentation, and utilizing PM tools (Jira, Trello, Monday.com, PM3) to track milestones and ensure on-time delivery across NHS departments."
  },
  digital: {
    label: "Digital Transformation Focus",
    text: "Project Support Officer skilled in transforming complex manual processes into streamlined digital workflows through digital innovation. Proven track record leading digital overhauls—including an NHS Employers nationally recognized case study—combining Power Automate, SharePoint, and Power Apps to cut turnaround times by 75% and eliminate lost paperwork."
  }
};

// =========================================================================
// 3. Project Presentation Deck Controller
// =========================================================================
class ProjectDeckController {
  constructor() {
    this.deckModal = document.getElementById('deckModal');
    this.deckStage = document.getElementById('deckSlideStage');
    this.deckBackBtn = document.getElementById('deckBackBtn');
    this.deckCloseBtn = document.getElementById('deckCloseBtn');
    this.deckPrevBtn = document.getElementById('deckPrevSlideBtn');
    this.deckNextBtn = document.getElementById('deckNextSlideBtn');
    this.deckPrevProjectBtn = document.getElementById('deckPrevProjectBtn');
    this.deckNextProjectBtn = document.getElementById('deckNextProjectBtn');
    this.deckFullscreenBtn = document.getElementById('deckFullscreenBtn');

    this.deckProjectTitle = document.getElementById('deckProjectTitle');
    this.deckCurrentSlideTitle = document.getElementById('deckCurrentSlideTitle');
    this.deckCounterCurrent = document.getElementById('deckCounterCurrent');
    this.deckCounterTotal = document.getElementById('deckCounterTotal');
    this.deckDotsContainer = document.getElementById('deckDotsContainer');

    this.projectIds = Object.keys(PROJECTS_DATA);
    this.currentProjectId = this.projectIds[0];
    this.currentSlideIndex = 0;

    this.bindEvents();
  }

  openProject(projectId, slideIndex = 0) {
    if (!PROJECTS_DATA[projectId]) return;

    this.currentProjectId = projectId;
    this.currentSlideIndex = slideIndex;

    this.deckModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Update URL hash
    if (window.history.replaceState) {
      window.history.replaceState(null, null, `#project-${projectId}`);
    }

    this.renderCurrentSlide();
  }

  closeDeck() {
    this.deckModal.classList.remove('active');
    document.body.style.overflow = '';

    // Clear hash
    if (window.history.replaceState) {
      window.history.replaceState(null, null, ' ');
    }
  }

  nextSlide() {
    const project = PROJECTS_DATA[this.currentProjectId];
    if (this.currentSlideIndex < project.slides.length - 1) {
      this.currentSlideIndex++;
      this.renderCurrentSlide();
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderCurrentSlide();
    }
  }

  nextProject() {
    const curIdx = this.projectIds.indexOf(this.currentProjectId);
    const nextIdx = (curIdx + 1) % this.projectIds.length;
    this.openProject(this.projectIds[nextIdx], 0);
  }

  prevProject() {
    const curIdx = this.projectIds.indexOf(this.currentProjectId);
    const prevIdx = (curIdx - 1 + this.projectIds.length) % this.projectIds.length;
    this.openProject(this.projectIds[prevIdx], 0);
  }

  renderCurrentSlide() {
    const project = PROJECTS_DATA[this.currentProjectId];
    const slide = project.slides[this.currentSlideIndex];
    const total = project.slides.length;
    const currentNum = this.currentSlideIndex + 1;

    // Header info
    this.deckProjectTitle.textContent = project.title;
    this.deckCurrentSlideTitle.textContent = `Slide ${currentNum} of ${total}: ${slide.title}`;

    // Counter
    this.deckCounterCurrent.textContent = String(currentNum).padStart(2, '0');
    this.deckCounterTotal.textContent = String(total).padStart(2, '0');

    // Button states
    this.deckPrevBtn.disabled = this.currentSlideIndex === 0;
    this.deckNextBtn.disabled = this.currentSlideIndex === total - 1;

    // Dots
    this.deckDotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = `deck-dot ${i === this.currentSlideIndex ? 'active' : ''}`;
      dot.title = `Go to Slide ${i + 1}`;
      dot.addEventListener('click', () => {
        this.currentSlideIndex = i;
        this.renderCurrentSlide();
      });
      this.deckDotsContainer.appendChild(dot);
    }

    // Render Slide Content in Stage
    this.deckStage.innerHTML = `
      <div class="project-slide-view">
        
        <!-- Left Narrative Column -->
        <div class="slide-left-details">
          <div>
            <div class="slide-header-tags">
              <span class="slide-org-tag"><i class="fa-solid fa-hospital"></i> ${project.org}</span>
              <span class="badge-award-pill"><i class="fa-solid fa-tag"></i> ${project.badge}</span>
            </div>

            <h2 class="slide-main-heading">${slide.heading}</h2>
            <p class="slide-desc-text">${slide.desc}</p>

            ${slide.stats && slide.stats.length ? `
              <div class="slide-stats-banner">
                ${slide.stats.map(s => `
                  <div class="banner-stat-unit">
                    <strong>${s.val}</strong>
                    <span>${s.lbl}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <ul class="slide-bullet-list">
              ${slide.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          <div class="slide-tags-row">
            ${slide.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>

        <!-- Right Visual / Dashboard Column -->
        <div class="slide-right-visual">
          <div class="visual-top-bar">
            <h4><i class="fa-solid fa-chart-column"></i> ${slide.visualType === 'image' ? 'Production Dashboard View' : 'Architecture & Process Flow'}</h4>
            <span class="category-pill">${project.badge}</span>
          </div>

          ${slide.visualType === 'image' ? `
            <div class="visual-preview-box" onclick="zoomImage('${slide.imageSrc}', '${slide.imageCaption}', '${slide.imageDesc}')">
              <img src="${slide.imageSrc}" alt="${slide.imageCaption}" loading="lazy">
              <div class="zoom-overlay-hint">
                <i class="fa-solid fa-magnifying-glass-plus"></i> Click to Zoom High-Res
              </div>
            </div>
          ` : `
            <div class="flow-steps-column">
              ${slide.flowSteps.map((step, idx) => `
                <div class="flow-step-box">
                  <div class="flow-step-icon"><i class="${step.icon}"></i></div>
                  <div class="flow-step-text">
                    <strong>${step.title}</strong>
                    <span>${step.sub}</span>
                  </div>
                </div>
                ${idx < slide.flowSteps.length - 1 ? `<div class="flow-arrow-down"><i class="fa-solid fa-arrow-down"></i></div>` : ''}
              `).join('')}
            </div>
          `}
        </div>

      </div>
    `;
  }

  bindEvents() {
    if (this.deckBackBtn) this.deckBackBtn.addEventListener('click', () => this.closeDeck());
    if (this.deckCloseBtn) this.deckCloseBtn.addEventListener('click', () => this.closeDeck());
    if (this.deckPrevBtn) this.deckPrevBtn.addEventListener('click', () => this.prevSlide());
    if (this.deckNextBtn) this.deckNextBtn.addEventListener('click', () => this.nextSlide());
    if (this.deckPrevProjectBtn) this.deckPrevProjectBtn.addEventListener('click', () => this.prevProject());
    if (this.deckNextProjectBtn) this.deckNextProjectBtn.addEventListener('click', () => this.nextProject());
    if (this.deckFullscreenBtn) this.deckFullscreenBtn.addEventListener('click', toggleFullscreen);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!this.deckModal.classList.contains('active')) return;
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'Escape') {
        const zoomTheater = document.getElementById('imageZoomTheater');
        if (zoomTheater && zoomTheater.classList.contains('active')) {
          zoomTheater.classList.remove('active');
        } else {
          this.closeDeck();
        }
      }

      if (e.key === 'ArrowRight' || e.code === 'Space' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      }

      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      }

      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    });
  }
}

// Global accessor
let projectDeck;
function openProjectDeck(projectId, slideIndex = 0) {
  if (projectDeck) {
    projectDeck.openProject(projectId, slideIndex);
  }
}

// =========================================================================
// 4. Image Lightbox Zoom
// =========================================================================
function zoomImage(src, title, desc) {
  const theater = document.getElementById('imageZoomTheater');
  const img = document.getElementById('zoomTheaterImg');
  const titleEl = document.getElementById('zoomTheaterTitle');
  const descEl = document.getElementById('zoomTheaterDesc');

  if (!theater || !img) return;
  img.src = src;
  if (titleEl) titleEl.textContent = title || 'High-Resolution View';
  if (descEl) descEl.textContent = desc || '';
  theater.classList.add('active');
}

const initZoomTheater = () => {
  const theater = document.getElementById('imageZoomTheater');
  const closeBtn = document.getElementById('zoomTheaterCloseBtn');
  const backdrop = document.getElementById('zoomTheaterBackdrop');

  const close = () => theater?.classList.remove('active');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
};

// =========================================================================
// 5. Hub Filter & Real-Time Search
// =========================================================================
const initCatalogFiltering = () => {
  const filterBtns = document.querySelectorAll('#projectFilterGroup .pill-btn');
  const searchInput = document.getElementById('projectSearchInput');
  const projectCards = document.querySelectorAll('.project-entry-card');

  let activeFilter = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    const q = searchQuery.toLowerCase().trim();

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();

      const matchesCategory = activeFilter === 'all' || category.includes(activeFilter);
      const matchesSearch = !q || keywords.includes(q);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.25s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
};

// =========================================================================
// 6. Recruiter Persona Focus Switcher
// =========================================================================
const initPersonaSwitcher = () => {
  const triggerBtn = document.getElementById('personaTriggerBtn');
  const popover = document.getElementById('personaPopover');
  const activeLabel = document.getElementById('activePersonaText');
  const blurbCard = document.getElementById('dynamicBlurbCard');
  const blurbText = document.getElementById('dynamicBlurbText');
  const items = document.querySelectorAll('.popover-item');

  if (!triggerBtn || !popover) return;

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && e.target !== triggerBtn) {
      popover.classList.remove('show');
    }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const persona = item.getAttribute('data-persona');
      if (!PERSONA_PROFILES[persona]) return;

      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      if (activeLabel) activeLabel.textContent = PERSONA_PROFILES[persona].label;

      if (blurbCard && blurbText) {
        blurbCard.style.opacity = '0.3';
        blurbCard.style.transform = 'translateY(3px)';
        setTimeout(() => {
          blurbText.textContent = PERSONA_PROFILES[persona].text;
          blurbCard.style.opacity = '1';
          blurbCard.style.transform = 'translateY(0)';
        }, 150);
      }

      popover.classList.remove('show');
    });
  });
};

// =========================================================================
// 7. Modals (Skills, Experience, Contact)
// =========================================================================
const setupModal = (openBtnId, modalId, closeBtnId, backdropId) => {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);
  const backdrop = document.getElementById(backdropId);

  if (!modal) return;

  const open = () => modal.classList.add('active');
  const close = () => modal.classList.remove('active');

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
};

// =========================================================================
// 8. Theme Switcher Engine
// =========================================================================
const getPreferredTheme = () => {
  const saved = localStorage.getItem('sl_theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('sl_theme', theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
};

const toggleTheme = () => {
  const current = document.body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
};

// =========================================================================
// 9. Fullscreen Helper
// =========================================================================
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Fullscreen request error: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
};

// =========================================================================
// 10. Copy Email Helper
// =========================================================================
const setupCopyEmail = (btnId, textId) => {
  const btn = document.getElementById(btnId);
  const textEl = document.getElementById(textId);
  if (!btn || !textEl) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const email = 's.limbu@hotmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const orig = textEl.textContent;
      textEl.textContent = 'Copied! ✓';
      btn.style.borderColor = 'var(--accent-emerald)';
      setTimeout(() => {
        textEl.textContent = orig;
        btn.style.borderColor = '';
      }, 2000);
    }).catch(err => console.error('Copy failed:', err));
  });
};

// =========================================================================
// 11. Initializer
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getPreferredTheme());
  projectDeck = new ProjectDeckController();

  initCatalogFiltering();
  initPersonaSwitcher();
  initZoomTheater();

  // Dialog Modals
  setupModal('openSkillsModalBtn', 'skillsModal', 'skillsCloseBtn', 'skillsBackdrop');
  setupModal('openExperienceModalBtn', 'experienceModal', 'experienceCloseBtn', 'experienceBackdrop');
  setupModal('openContactModalBtn', 'contactModal', 'contactCloseBtn', 'contactBackdrop');

  // Theme button
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Copy email chips
  setupCopyEmail('copyEmailHeroBtn', 'copyEmailHeroText');
  setupCopyEmail('copyContactModalBtn', 'copyContactModalText');

  // Check URL hash (e.g. #project-tempre-approvals)
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('project-')) {
    const projectId = hash.replace('project-', '');
    if (PROJECTS_DATA[projectId]) {
      projectDeck.openProject(projectId, 0);
    }
  }
});
