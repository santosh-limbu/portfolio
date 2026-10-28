/**
 * Santosh Limbu - Professional Portfolio
 * Core Interactivity: Lightbox, Dynamic Persona, Filtering, Live Search, Theme Toggle
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Theme Toggle (Light / Dark Mode with LocalStorage & OS Preference)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  const getPreferredTheme = () => {
    const saved = localStorage.getItem('sl_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('sl_theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeToggle.setAttribute('title', 'Switch to Light Mode');
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
      }
    }
  };

  // Initialize theme
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = body.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // =========================================================================
  // 2. Mobile Navigation Menu Toggle
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close mobile menu on clicking any link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // =========================================================================
  // 3. Active Nav Link on Scroll (IntersectionObserver)
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const highlightNav = () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // =========================================================================
  // 4. Recruiter Persona Switcher (Dynamic Bio Box)
  // =========================================================================
  const personaBioMap = {
    data: "Data-focused project professional with 5+ years of experience transforming complex healthcare and operational datasets into intuitive, high-impact Power BI dashboards. Proficient in advanced DAX modeling, KPI gauge tracking against SLAs, and decomposition trees for root-cause analysis that empower clinical and executive stakeholders to independently make data-driven decisions.",
    pm: "Project management professional with over 3 years of experience working in cross-functional teams, implementing technical solutions, and delivering successful digital transformation initiatives. Skilled in Agile/Scrum methodologies, stakeholder management, technical documentation, and utilizing PM tools (Jira, Trello, Monday.com, PM3) to track milestones and ensure on-time delivery in high-stakes healthcare environments.",
    digital: "Project Support Officer skilled in transforming complex manual processes into streamlined digital workflows through digital innovation. Proven track record leading digital overhauls—including an NHS Employers nationally recognized case study—combining Power Automate, SharePoint, and Power Apps to cut turnaround times by 75% and eliminate lost paperwork."
  };

  const personaButtons = document.querySelectorAll('.persona-btn');
  const heroBioText = document.getElementById('heroBioText');
  const heroBioCard = document.getElementById('heroBioCard');

  personaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPersona = btn.getAttribute('data-persona');
      if (!personaBioMap[targetPersona]) return;

      personaButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (heroBioCard && heroBioText) {
        heroBioCard.style.opacity = '0.4';
        heroBioCard.style.transform = 'translateY(4px)';

        setTimeout(() => {
          heroBioText.textContent = personaBioMap[targetPersona];
          heroBioCard.style.opacity = '1';
          heroBioCard.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  });

  // =========================================================================
  // 5. Power BI Dashboard Category Filtering
  // =========================================================================
  const dashFilterBtns = document.querySelectorAll('.dash-tab-btn');
  const dashboardCards = document.querySelectorAll('.dashboard-card');

  dashFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dashFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      dashboardCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 6. High-Resolution Dashboard Lightbox Modal with Next/Prev & Keyboard Support
  // =========================================================================
  const imageModal = document.getElementById('imageModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalCounter = document.getElementById('modalCounter');

  let currentDashIndex = 0;
  const visibleDashboards = () => Array.from(document.querySelectorAll('.dashboard-card')).filter(card => card.style.display !== 'none');

  const openLightbox = (index) => {
    const list = visibleDashboards();
    if (!list.length || index < 0 || index >= list.length) return;

    currentDashIndex = index;
    const card = list[currentDashIndex];

    const imgSrc = card.getAttribute('data-img');
    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-desc');

    if (modalImage) modalImage.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalCounter) modalCounter.textContent = `${currentDashIndex + 1} / ${list.length}`;

    if (imageModal) {
      imageModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (imageModal) {
      imageModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  const showNextDashboard = () => {
    const list = visibleDashboards();
    if (!list.length) return;
    currentDashIndex = (currentDashIndex + 1) % list.length;
    openLightbox(currentDashIndex);
  };

  const showPrevDashboard = () => {
    const list = visibleDashboards();
    if (!list.length) return;
    currentDashIndex = (currentDashIndex - 1 + list.length) % list.length;
    openLightbox(currentDashIndex);
  };

  // Attach card click handlers
  dashboardCards.forEach(card => {
    card.addEventListener('click', () => {
      const list = visibleDashboards();
      const index = list.indexOf(card);
      if (index !== -1) openLightbox(index);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeLightbox);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeLightbox);
  if (modalNextBtn) modalNextBtn.addEventListener('click', showNextDashboard);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', showPrevDashboard);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!imageModal || !imageModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextDashboard();
    if (e.key === 'ArrowLeft') showPrevDashboard();
  });

  // =========================================================================
  // 7. Key Projects Filter & Real-Time Search
  // =========================================================================
  const projectFilterBtns = document.querySelectorAll('#projectFilterPills .filter-btn');
  const projectSearchInput = document.getElementById('projectSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const projectCards = document.querySelectorAll('.project-card');

  let currentCategory = 'all';
  let searchQuery = '';

  const applyProjectFilters = () => {
    const query = searchQuery.trim().toLowerCase();

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardKeywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();

      const matchesCategory = (currentCategory === 'all') || cardCategory.includes(currentCategory);
      const matchesSearch = !query || cardKeywords.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.35s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
    }
  };

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyProjectFilters();
    });
  });

  if (projectSearchInput) {
    projectSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyProjectFilters();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (projectSearchInput) {
        projectSearchInput.value = '';
        searchQuery = '';
        projectSearchInput.focus();
        applyProjectFilters();
      }
    });
  }

  // =========================================================================
  // 8. One-Click Copy Email Helper
  // =========================================================================
  const setupCopyEmail = (btnId, textId) => {
    const btn = document.getElementById(btnId);
    const textEl = document.getElementById(textId);
    if (!btn || !textEl) return;

    btn.addEventListener('click', () => {
      const email = 's.limbu@hotmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = textEl.textContent;
        textEl.textContent = 'Copied to Clipboard! ✓';
        btn.classList.add('copied');

        setTimeout(() => {
          textEl.textContent = originalText;
          btn.classList.remove('copied');
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    });
  };

  setupCopyEmail('copyEmailHeroBtn', 'copyEmailText');
  setupCopyEmail('copyEmailBottomBtn', 'copyEmailBottomText');

  // Set Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
