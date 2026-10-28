/**
 * Santosh Limbu - Portfolio & Interactive Presentation Deck Manager
 * Features:
 *  - Project Catalog Hub + Presentation Slide Theater
 *  - In-Browser Password-Protected Admin Mode (SHA-256 WebCrypto)
 *  - Live Visual Content Editor for Projects & Slides
 *  - Direct GitHub REST API Sync & 1-Click Code Exporter
 */

// Default Hash for 'admin2026'
const DEFAULT_ADMIN_HASH = '6051fc84a7a0d74c225fb18a496b09952da5642e60723ecae543298edd7d82d6';

// Available Dashboard Images for Slide Selector
const AVAILABLE_DASHBOARD_IMAGES = [
  { val: 'assets/images/dashboard-tempre-all-approvals.png', label: 'TempRE All Approvals Pipeline (2.5k Requests)' },
  { val: 'assets/images/dashboard-tempre-urgent-approvals.png', label: 'TempRE Urgent Approvals Tracker (110 Requests)' },
  { val: 'assets/images/dashboard-tempre-progress-tracker.png', label: 'TempRE Progress Tracker & Shift Details (GC41P)' },
  { val: 'assets/images/dashboard-kpi-rolling-statistics.png', label: 'KPI Rolling Total Statistics (3 SLA Gauges, £284k)' },
  { val: 'assets/images/dashboard-kpi-monthly-statistics.png', label: 'KPI Monthly Statistics (January 2026, 687 Approved)' },
  { val: 'assets/images/dashboard-shift-decomp-spend.png', label: 'Shift Spend Decomposition Tree & Surge Curve (£0.62M)' },
  { val: 'assets/images/dashboard-month-summary-900.png', label: 'Locum 31-Day Intake & Staff Treemap (900 Forms)' },
  { val: 'assets/images/dashboard-month-summary-191.png', label: 'Locum Daily Intake & RTW Compliance (191 Forms)' },
  { val: 'assets/images/dashboard-team-summaries-sla.png', label: 'Team Summaries, Invoicing Disputes & SLAs (438 Emails)' }
];

// =========================================================================
// 1. Projects Presentation Slides Database
// =========================================================================
const DEFAULT_PROJECTS_DATA = {
  'retire-return': {
    id: 'retire-return',
    title: 'Retire & Return Digital Overhaul',
    org: 'UHCW NHS Trust',
    category: 'digital-transformation automation',
    badge: 'Published National Best Practice by NHS Employers',
    metricText: '100% Trackable Workflow • 0 Lost Forms',
    desc: 'Directed the digital overhaul of a legacy paper pathway plagued by lost forms (71% user difficulty). Replaced it with a 100% trackable automated system published nationally by NHS Employers.',
    tags: ['Microsoft Forms', 'SharePoint Lists', 'Power Automate', 'Agile PM'],
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
    title: 'TempRE Vacancy Approvals System (Bank Staff)',
    org: 'UHCW NHS Trust',
    category: 'automation digital-transformation power-bi',
    badge: 'Workflow Automation',
    metricText: '2,569 Requests Audited • 92.6% Approved',
    desc: 'Multi-stage digital approval system replacing manual handoffs. Enforces departmental budget validation, manages urgent escalations, and audits 2,560+ shift requests.',
    tags: ['SharePoint', 'Power Automate', 'TempRE', 'Power BI'],
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
    category: 'power-bi',
    badge: 'Power BI & DAX',
    metricText: '3 SLA Gauges • 15% Query Reduction',
    desc: 'Production Power BI suite utilizing DAX time intelligence, 3 custom SLA gauge benchmarks, and live shift registers tracking £284,071 across 2,380 approved requests.',
    tags: ['Power BI', 'DAX Modeling', 'KPI Gauge Charts', 'SLA Tracking'],
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
    category: 'power-bi systems',
    badge: 'Root-Cause BI',
    metricText: '2,751 Shifts • £590 Avg Shift Cost',
    desc: 'AI Decomposition Tree root-cause analysis across 2,751 shifts by specialty and grade, accompanied by multi-year trend line tracking seasonal surge peaks (£0.62M in Jan 2026).',
    tags: ['Decomposition Tree', 'Spend Forecasting', 'Trend Analysis'],
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
    category: 'digital-transformation automation power-bi',
    badge: '75% Faster Processing',
    metricText: '30d → 5d Turnaround (75% Faster)',
    desc: 'Re-engineered paper locum onboarding, slashing turnaround from 30 days to 5 days. Seamlessly processes 50+ weekly applications with direct Payroll integration and Treemap analytics.',
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Treemaps'],
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
    category: 'power-bi systems',
    badge: 'Operations Cockpit',
    metricText: '438 Weekly Emails • Invoice Auditing',
    desc: 'Cross-departmental management dashboard monitoring 438 weekly emails across Admin, AHP, Medics, and Nursing teams, featuring aging communication flags and agency invoice dispute governance.',
    tags: ['Stacked Visuals', 'SLA Aging', 'Invoice Governance'],
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
    title: 'McKesson Excel Scheduling & Demand Forecasting',
    org: 'McKesson UK (MASTA)',
    category: 'systems automation',
    badge: '£9,000 Saved',
    metricText: '£9,000 Recurring Annual Cost Savings',
    desc: 'Devised an in-house Excel forecasting and clinical rota system replacing costly external software, saving ~£9,000 annually while adapting resource allocation to COVID-19 pandemic demands.',
    tags: ['Advanced Excel', 'Forecasting Models', 'Power Automate'],
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
    org: 'City Audio Visual Ltd',
    category: 'systems digital-transformation',
    badge: 'System Delivery',
    metricText: '100% Staff Onboarding • Sage CRM',
    desc: 'Led full lifecycle rollout of CurrentRMS software, coordinating vendor testing, UAT, SOP authoring, and staff training to modernize inventory tracking and CRM workflows.',
    tags: ['CurrentRMS', 'Sage Accounts', 'UAT Testing', 'SOP Documentation'],
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

// Global Active Data (Hydrated from localStorage if modified)
let PROJECTS_DATA = (() => {
  const saved = localStorage.getItem('sl_projects_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved projects data:', e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_PROJECTS_DATA));
})();

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

    this.currentProjectId = Object.keys(PROJECTS_DATA)[0];
    this.currentSlideIndex = 0;

    this.bindEvents();
  }

  getProjectIds() {
    return Object.keys(PROJECTS_DATA);
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
    const ids = this.getProjectIds();
    const curIdx = ids.indexOf(this.currentProjectId);
    const nextIdx = (curIdx + 1) % ids.length;
    this.openProject(ids[nextIdx], 0);
  }

  prevProject() {
    const ids = this.getProjectIds();
    const curIdx = ids.indexOf(this.currentProjectId);
    const prevIdx = (curIdx - 1 + ids.length) % ids.length;
    this.openProject(ids[prevIdx], 0);
  }

  renderCurrentSlide() {
    const project = PROJECTS_DATA[this.currentProjectId];
    const slide = project.slides[this.currentSlideIndex] || project.slides[0];
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

          ${slide.visualType === 'image' && slide.imageSrc ? `
            <div class="visual-preview-box" onclick="zoomImage('${slide.imageSrc}', '${slide.imageCaption || project.title}', '${slide.imageDesc || slide.desc}')">
              <img src="${slide.imageSrc}" alt="${slide.imageCaption || project.title}" loading="lazy">
              <div class="zoom-overlay-hint">
                <i class="fa-solid fa-magnifying-glass-plus"></i> Click to Zoom High-Res
              </div>
            </div>
          ` : `
            <div class="flow-steps-column">
              ${(slide.flowSteps || []).map((step, idx) => `
                <div class="flow-step-box">
                  <div class="flow-step-icon"><i class="${step.icon}"></i></div>
                  <div class="flow-step-text">
                    <strong>${step.title}</strong>
                    <span>${step.sub}</span>
                  </div>
                </div>
                ${idx < (slide.flowSteps.length - 1) ? `<div class="flow-arrow-down"><i class="fa-solid fa-arrow-down"></i></div>` : ''}
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
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

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
// 5. Hub Filter, Render & Search
// =========================================================================
const renderProjectsCatalog = () => {
  const catalogGrid = document.getElementById('projectsCatalogGrid');
  if (!catalogGrid) return;

  const isAdmin = isAdminActive();
  const projectEntries = Object.values(PROJECTS_DATA);

  catalogGrid.innerHTML = projectEntries.map(project => `
    <div class="project-entry-card ${project.id === 'retire-return' ? 'featured-entry' : ''}" 
         data-project-id="${project.id}" 
         data-category="${project.category || ''}" 
         data-keywords="${(project.title + ' ' + project.desc + ' ' + (project.tags || []).join(' ')).toLowerCase()}">
      
      ${isAdmin ? `
        <button class="admin-card-edit-btn" onclick="event.stopPropagation(); openProjectEditor('${project.id}')" title="Edit this project">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
      ` : ''}

      <div class="card-top-row">
        <span class="org-label"><i class="fa-solid fa-hospital"></i> ${project.org}</span>
        <span class="${project.badge && project.badge.toLowerCase().includes('national') ? 'award-pill' : 'category-pill'}">
          ${project.badge && project.badge.toLowerCase().includes('national') ? '<i class="fa-solid fa-trophy"></i> ' : ''}${project.badge}
        </span>
      </div>
      <h3 class="entry-title">${project.title}</h3>
      <p class="entry-desc">${project.desc}</p>
      
      ${project.metricText ? `
        <div class="entry-metric-badge ${project.metricText.includes('100%') || project.metricText.includes('75%') || project.metricText.includes('£9,000') ? 'positive' : ''}">
          <i class="fa-solid fa-circle-check"></i> ${project.metricText}
        </div>
      ` : ''}

      <div class="entry-tech-tags">
        ${(project.tags || []).map(t => `<span>${t}</span>`).join('')}
      </div>

      <div class="entry-footer">
        <span class="slide-count-hint"><i class="fa-solid fa-layer-group"></i> ${project.slides ? project.slides.length : 0} Interactive Slides</span>
        <button class="launch-deck-btn" onclick="openProjectDeck('${project.id}')">
          Launch Presentation <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  applyActiveCatalogFilters();
};

let activeCatalogFilter = 'all';
let catalogSearchQuery = '';

const applyActiveCatalogFilters = () => {
  const projectCards = document.querySelectorAll('.project-entry-card');
  const q = catalogSearchQuery.toLowerCase().trim();

  projectCards.forEach(card => {
    const category = card.getAttribute('data-category') || '';
    const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();

    const matchesCategory = activeCatalogFilter === 'all' || category.includes(activeCatalogFilter);
    const matchesSearch = !q || keywords.includes(q);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

const initCatalogFiltering = () => {
  const filterBtns = document.querySelectorAll('#projectFilterGroup .pill-btn');
  const searchInput = document.getElementById('projectSearchInput');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCatalogFilter = btn.getAttribute('data-filter');
      applyActiveCatalogFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      catalogSearchQuery = e.target.value;
      applyActiveCatalogFilters();
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
      console.warn(`Fullscreen error: ${err.message}`);
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
// 11. IN-BROWSER ADMIN MODE & PASSWORD CHECK (SHA-256 WebCrypto)
// =========================================================================
async function hashString(str) {
  const utf8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function getAdminHash() {
  return localStorage.getItem('sl_admin_hash') || DEFAULT_ADMIN_HASH;
}

function isAdminActive() {
  return sessionStorage.getItem('sl_admin_session') === 'true';
}

function setAdminActive(active) {
  if (active) {
    sessionStorage.setItem('sl_admin_session', 'true');
  } else {
    sessionStorage.removeItem('sl_admin_session');
  }
  updateAdminUI();
}

function updateAdminUI() {
  const floatingBar = document.getElementById('adminFloatingBar');
  const active = isAdminActive();

  if (floatingBar) {
    floatingBar.style.display = active ? 'block' : 'none';
  }

  // Re-render project cards to show/hide edit buttons
  renderProjectsCatalog();
}

const initAdminAuth = () => {
  const triggerBtn = document.getElementById('adminTriggerBtn');
  const loginModal = document.getElementById('adminLoginModal');
  const loginClose = document.getElementById('adminLoginCloseBtn');
  const loginBackdrop = document.getElementById('adminLoginBackdrop');
  const loginForm = document.getElementById('adminLoginForm');
  const passwordInput = document.getElementById('adminPasswordInput');
  const errorMsg = document.getElementById('adminAuthError');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  const openLogin = () => {
    if (isAdminActive()) {
      alert('You are already authenticated in Admin Mode.');
      return;
    }
    loginModal.classList.add('active');
    passwordInput.value = '';
    errorMsg.style.display = 'none';
    passwordInput.focus();
  };

  const closeLogin = () => loginModal.classList.remove('active');

  if (triggerBtn) triggerBtn.addEventListener('click', openLogin);
  if (loginClose) loginClose.addEventListener('click', closeLogin);
  if (loginBackdrop) loginBackdrop.addEventListener('click', closeLogin);

  // Keyboard shortcut Ctrl + Shift + A
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      if (!isAdminActive()) openLogin();
      else setAdminActive(false);
    }
  });

  if (loginForm) {
    loginForm.addEventListener('submit', async () => {
      const entered = passwordInput.value;
      const hashed = await hashString(entered);
      const expected = getAdminHash();

      if (hashed === expected) {
        setAdminActive(true);
        closeLogin();
      } else {
        errorMsg.style.display = 'flex';
        passwordInput.select();
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      setAdminActive(false);
    });
  }
};

// =========================================================================
// 12. PROJECT CONTENT EDITOR MODAL ENGINE
// =========================================================================
let editingProjectId = null;
let editingSlidesList = [];

function openProjectEditor(projectId) {
  const modal = document.getElementById('projectEditorModal');
  const modalTitle = document.getElementById('editorModalTitle');
  const titleInp = document.getElementById('editProjectTitle');
  const orgInp = document.getElementById('editProjectOrg');
  const catInp = document.getElementById('editProjectCategory');
  const badgeInp = document.getElementById('editProjectBadge');
  const descInp = document.getElementById('editProjectDesc');
  const metricInp = document.getElementById('editProjectMetric');
  const tagsInp = document.getElementById('editProjectTags');
  const idInp = document.getElementById('editProjectId');

  if (!modal) return;

  editingProjectId = projectId;
  const project = PROJECTS_DATA[projectId] || {
    id: 'new-project-' + Date.now(),
    title: 'New Project',
    org: 'Organisation Name',
    category: 'digital-transformation automation',
    badge: 'Project Badge',
    metricText: 'Measurable Outcome Metric',
    desc: 'Project overview description...',
    tags: ['Power BI', 'Automation'],
    slides: []
  };

  modalTitle.textContent = projectId ? `Edit Project: ${project.title}` : 'Add New Project';
  idInp.value = project.id;
  titleInp.value = project.title || '';
  orgInp.value = project.org || '';
  catInp.value = project.category || 'digital-transformation automation';
  badgeInp.value = project.badge || '';
  descInp.value = project.desc || '';
  metricInp.value = project.metricText || '';
  tagsInp.value = (project.tags || []).join(', ');

  editingSlidesList = JSON.parse(JSON.stringify(project.slides || []));
  renderEditorSlides();

  modal.classList.add('active');
}

function renderEditorSlides() {
  const container = document.getElementById('editorSlidesContainer');
  const countEl = document.getElementById('editorSlideCount');
  if (!container) return;

  countEl.textContent = editingSlidesList.length;

  container.innerHTML = editingSlidesList.map((slide, idx) => `
    <div class="editor-slide-block" data-slide-index="${idx}">
      <div class="slide-block-top">
        <span class="slide-block-num">Slide ${idx + 1}: ${slide.title || 'Untitled Slide'}</span>
        <button type="button" class="btn-remove-slide" onclick="removeEditorSlide(${idx})">
          <i class="fa-solid fa-trash"></i> Remove
        </button>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Slide Navigation Title</label>
          <input type="text" value="${slide.title || ''}" onchange="updateEditorSlideField(${idx}, 'title', this.value)" required>
        </div>
        <div class="form-group">
          <label>Main Headline</label>
          <input type="text" value="${slide.heading || ''}" onchange="updateEditorSlideField(${idx}, 'heading', this.value)" required>
        </div>
      </div>

      <div class="form-group">
        <label>Slide Narrative Summary</label>
        <textarea rows="2" onchange="updateEditorSlideField(${idx}, 'desc', this.value)">${slide.desc || ''}</textarea>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label>Key Bullets (one bullet per line)</label>
          <textarea rows="3" onchange="updateEditorSlideBullets(${idx}, this.value)">${(slide.bullets || []).join('\n')}</textarea>
        </div>
        <div class="form-group">
          <label>Visual Presentation Image</label>
          <select onchange="updateEditorSlideField(${idx}, 'imageSrc', this.value)">
            <option value="">-- No Image / Process Flow --</option>
            ${AVAILABLE_DASHBOARD_IMAGES.map(img => `
              <option value="${img.val}" ${slide.imageSrc === img.val ? 'selected' : ''}>${img.label}</option>
            `).join('')}
          </select>
          <small style="color:var(--text-muted); margin-top:0.35rem;">Or process steps will display automatically</small>
        </div>
      </div>
    </div>
  `).join('');
}

function updateEditorSlideField(idx, field, value) {
  if (editingSlidesList[idx]) {
    editingSlidesList[idx][field] = value;
    if (field === 'imageSrc') {
      editingSlidesList[idx].visualType = value ? 'image' : 'flow';
    }
  }
}

function updateEditorSlideBullets(idx, text) {
  if (editingSlidesList[idx]) {
    editingSlidesList[idx].bullets = text.split('\n').filter(b => b.trim().length > 0);
  }
}

function removeEditorSlide(idx) {
  editingSlidesList.splice(idx, 1);
  renderEditorSlides();
}

function addEditorSlide() {
  editingSlidesList.push({
    title: 'New Slide Title',
    heading: 'Slide Headline Overview',
    desc: 'Enter detailed explanation for this slide...',
    bullets: ['Key takeaway point 1', 'Key technical action or metric 2'],
    stats: [{ val: '100%', lbl: 'Metric Description' }],
    tags: ['Power BI', 'Analytics'],
    visualType: 'image',
    imageSrc: AVAILABLE_DASHBOARD_IMAGES[0].val,
    imageCaption: 'Dashboard View',
    imageDesc: 'High-level operational metrics'
  });
  renderEditorSlides();
}

const initProjectEditor = () => {
  const modal = document.getElementById('projectEditorModal');
  const closeBtn = document.getElementById('projectEditorCloseBtn');
  const cancelBtn = document.getElementById('editorCancelBtn');
  const backdrop = document.getElementById('projectEditorBackdrop');
  const addSlideBtn = document.getElementById('editorAddSlideBtn');
  const addProjectBtn = document.getElementById('adminAddProjectBtn');
  const form = document.getElementById('projectEditorForm');

  const close = () => modal.classList.remove('active');

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (cancelBtn) cancelBtn.addEventListener('click', close);
  if (backdrop) backdrop.addEventListener('click', close);
  if (addSlideBtn) addSlideBtn.addEventListener('click', addEditorSlide);
  if (addProjectBtn) addProjectBtn.addEventListener('click', () => openProjectEditor(null));

  if (form) {
    form.addEventListener('submit', () => {
      const id = document.getElementById('editProjectId').value;
      const title = document.getElementById('editProjectTitle').value;
      const org = document.getElementById('editProjectOrg').value;
      const category = document.getElementById('editProjectCategory').value;
      const badge = document.getElementById('editProjectBadge').value;
      const desc = document.getElementById('editProjectDesc').value;
      const metricText = document.getElementById('editProjectMetric').value;
      const tags = document.getElementById('editProjectTags').value.split(',').map(t => t.trim()).filter(Boolean);

      PROJECTS_DATA[id] = {
        id,
        title,
        org,
        category,
        badge,
        desc,
        metricText,
        tags,
        slides: editingSlidesList
      };

      // Persist in localStorage
      localStorage.setItem('sl_projects_data', JSON.stringify(PROJECTS_DATA));

      renderProjectsCatalog();
      close();
      alert(`Project "${title}" saved successfully! Click "Sync to GitHub / Export" to publish.`);
    });
  }
};

// =========================================================================
// 13. SYNC TO GITHUB & DATA EXPORT ENGINE
// =========================================================================
const initSyncEngine = () => {
  const syncBtn = document.getElementById('adminSyncBtn');
  const modal = document.getElementById('syncModal');
  const closeBtn = document.getElementById('syncCloseBtn');
  const backdrop = document.getElementById('syncBackdrop');
  const downloadJsBtn = document.getElementById('downloadJsBtn');
  const copyJsonBtn = document.getElementById('copyJsonBtn');
  const copyJsonText = document.getElementById('copyJsonText');
  const githubCommitBtn = document.getElementById('githubDirectCommitBtn');
  const tokenInp = document.getElementById('githubTokenInput');
  const repoInp = document.getElementById('githubRepoInput');
  const feedback = document.getElementById('githubSyncFeedback');
  const changePwBtn = document.getElementById('changePasswordBtn');
  const newPwInp = document.getElementById('newAdminPasswordInput');
  const pwFeedback = document.getElementById('pwChangeFeedback');

  const openSync = () => modal.classList.add('active');
  const closeSync = () => modal.classList.remove('active');

  if (syncBtn) syncBtn.addEventListener('click', openSync);
  if (closeBtn) closeBtn.addEventListener('click', closeSync);
  if (backdrop) backdrop.addEventListener('click', closeSync);

  // Pre-fill saved token if any
  const savedToken = localStorage.getItem('sl_github_token');
  if (savedToken && tokenInp) tokenInp.value = savedToken;

  // Copy JSON
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', () => {
      const json = JSON.stringify(PROJECTS_DATA, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        copyJsonText.textContent = 'Copied JSON! ✓';
        setTimeout(() => copyJsonText.textContent = 'Copy Data JSON', 2000);
      });
    });
  }

  // Download Updated main.js
  if (downloadJsBtn) {
    downloadJsBtn.addEventListener('click', () => {
      generateAndDownloadMainJs();
    });
  }

  // Change Admin Password
  if (changePwBtn) {
    changePwBtn.addEventListener('click', async () => {
      const newPw = newPwInp.value.trim();
      if (newPw.length < 4) {
        alert('Password must be at least 4 characters long.');
        return;
      }
      const hashed = await hashString(newPw);
      localStorage.setItem('sl_admin_hash', hashed);
      newPwInp.value = '';
      pwFeedback.style.display = 'block';
      setTimeout(() => pwFeedback.style.display = 'none', 3000);
    });
  }

  // Direct GitHub Push via API
  if (githubCommitBtn) {
    githubCommitBtn.addEventListener('click', async () => {
      const token = tokenInp.value.trim();
      const repo = repoInp.value.trim();

      if (!token || !repo) {
        alert('Please enter your GitHub token and repository name.');
        return;
      }

      localStorage.setItem('sl_github_token', token);
      feedback.style.display = 'block';
      feedback.style.color = 'var(--primary)';
      feedback.textContent = 'Connecting to GitHub API...';

      try {
        const filePath = 'assets/js/main.js';
        const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
        
        // 1. Get existing file SHA
        const getRes = await fetch(getUrl, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (!getRes.ok) {
          throw new Error(`Failed to access ${repo}: ${getRes.status} ${getRes.statusText}`);
        }

        const fileData = await getRes.json();
        const sha = fileData.sha;

        // 2. Generate updated file content
        const updatedJs = generateMainJsContent();
        const encodedContent = btoa(unescape(encodeURIComponent(updatedJs)));

        // 3. PUT updated file
        const putRes = await fetch(getUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Update portfolio projects via in-browser admin',
            content: encodedContent,
            sha: sha
          })
        });

        if (!putRes.ok) {
          throw new Error(`Commit failed: ${putRes.status} ${putRes.statusText}`);
        }

        feedback.style.color = 'var(--accent-emerald)';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> <strong>Successfully committed!</strong> GitHub Pages is now rebuilding. Your changes will be live in ~60 seconds.';
      } catch (err) {
        feedback.style.color = 'var(--accent-rose)';
        feedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Error: ${err.message}`;
      }
    });
  }
};

function generateMainJsContent() {
  // Read current script text and substitute DEFAULT_PROJECTS_DATA
  const serialized = JSON.stringify(PROJECTS_DATA, null, 2);
  // We can construct a clean representation
  return `// Santosh Limbu - Portfolio Data (Updated ${new Date().toISOString()})\nconst DEFAULT_PROJECTS_DATA = ${serialized};\n` + 
    document.querySelector('script[src*="main.js"]').outerHTML;
}

function generateAndDownloadMainJs() {
  const jsonString = JSON.stringify(PROJECTS_DATA, null, 2);
  const blob = new Blob([`// Santosh Limbu Portfolio Projects Data\nconst PROJECTS_DATA = ${jsonString};\n`], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'projects-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// =========================================================================
// 14. Global Initializer
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getPreferredTheme());
  projectDeck = new ProjectDeckController();

  renderProjectsCatalog();
  initCatalogFiltering();
  initPersonaSwitcher();
  initZoomTheater();

  // Dialog Modals
  setupModal('openSkillsModalBtn', 'skillsModal', 'skillsCloseBtn', 'skillsBackdrop');
  setupModal('openExperienceModalBtn', 'experienceModal', 'experienceCloseBtn', 'experienceBackdrop');
  setupModal('openContactModalBtn', 'contactModal', 'contactCloseBtn', 'contactBackdrop');

  // Admin and Editor Init
  initAdminAuth();
  initProjectEditor();
  initSyncEngine();
  updateAdminUI();

  // Theme button
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Copy email chips
  setupCopyEmail('copyEmailHeroBtn', 'copyEmailHeroText');
  setupCopyEmail('copyContactModalBtn', 'copyContactModalText');

  // Year
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Check URL hash (e.g. #project-tempre-approvals)
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('project-')) {
    const projectId = hash.replace('project-', '');
    if (PROJECTS_DATA[projectId]) {
      projectDeck.openProject(projectId, 0);
    }
  }
});
