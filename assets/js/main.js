/**
 * Santosh Limbu - Interactive PowerPoint Deck Architecture
 * Handles slide navigation, keyboard shortcuts, slide sorter grid,
 * interactive sub-tabs, dashboard image switchers, and lightbox zoom.
 */

class PresentationDeck {
  constructor() {
    this.slides = Array.from(document.querySelectorAll('.deck-slide'));
    this.totalSlides = this.slides.length;
    this.currentIndex = 0; // 0-based index

    // DOM Elements
    this.headerSlideTitle = document.getElementById('headerSlideTitle');
    this.counterCurrent = document.getElementById('counterCurrent');
    this.counterTotal = document.getElementById('counterTotal');
    this.prevBtn = document.getElementById('prevSlideBtn');
    this.nextBtn = document.getElementById('nextSlideBtn');
    this.dotsStrip = document.getElementById('slideDotsStrip');
    this.railList = document.getElementById('railList');
    this.sorterGrid = document.getElementById('sorterGrid');
    this.sorterModal = document.getElementById('sorterModal');
    this.zoomModal = document.getElementById('zoomModal');
    this.zoomImg = document.getElementById('zoomImg');
    this.zoomTitle = document.getElementById('zoomTitle');
    this.zoomDesc = document.getElementById('zoomDesc');

    this.init();
  }

  init() {
    if (this.counterTotal) {
      this.counterTotal.textContent = String(this.totalSlides).padStart(2, '0');
    }

    this.buildSlideDots();
    this.buildSlideRail();
    this.buildSlideSorter();
    this.bindEvents();
    this.bindSubTabs();
    this.bindImageSwitchers();
    this.checkInitialHash();
    this.updateUI();
  }

  // --- Dynamic Builders ---
  buildSlideDots() {
    if (!this.dotsStrip) return;
    this.dotsStrip.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const dot = document.createElement('div');
      dot.className = `slide-dot ${idx === 0 ? 'active' : ''}`;
      dot.title = `Slide ${idx + 1}: ${slide.getAttribute('data-title') || ''}`;
      dot.addEventListener('click', () => this.goToSlide(idx + 1));
      this.dotsStrip.appendChild(dot);
    });
  }

  buildSlideRail() {
    if (!this.railList) return;
    this.railList.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const item = document.createElement('div');
      item.className = `rail-thumb-item ${idx === 0 ? 'active' : ''}`;
      item.dataset.slideNum = idx + 1;
      
      const num = String(idx + 1).padStart(2, '0');
      const title = slide.getAttribute('data-title') || `Slide ${idx + 1}`;
      
      item.innerHTML = `
        <span class="thumb-num">${num}</span>
        <span class="thumb-title">${title}</span>
      `;
      item.addEventListener('click', () => this.goToSlide(idx + 1));
      this.railList.appendChild(item);
    });
  }

  buildSlideSorter() {
    if (!this.sorterGrid) return;
    this.sorterGrid.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `sorter-slide-card ${idx === 0 ? 'active' : ''}`;
      card.dataset.slideNum = idx + 1;

      const num = String(idx + 1).padStart(2, '0');
      const title = slide.getAttribute('data-title') || `Slide ${idx + 1}`;
      const subtitle = slide.querySelector('.slide-headline, .hub-hero-role, h2, h3')?.textContent || 'Interactive Slide';

      card.innerHTML = `
        <div class="sorter-card-top">
          <span class="sorter-num">SLIDE ${num}</span>
          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem; color:var(--text-muted)"></i>
        </div>
        <h4 class="sorter-title">${title}</h4>
        <p class="sorter-desc">${subtitle.substring(0, 75)}...</p>
      `;
      card.addEventListener('click', () => {
        this.goToSlide(idx + 1);
        this.closeSorter();
      });
      this.sorterGrid.appendChild(card);
    });
  }

  // --- Navigation Engine ---
  goToSlide(slideNumber) {
    const targetIdx = Math.max(0, Math.min(slideNumber - 1, this.totalSlides - 1));
    if (targetIdx === this.currentIndex && this.slides[this.currentIndex].classList.contains('active')) return;

    // Transition slides
    this.slides[this.currentIndex].classList.remove('active');
    this.currentIndex = targetIdx;
    this.slides[this.currentIndex].classList.add('active');

    // Update URL hash without jumping
    const slideId = this.slides[this.currentIndex].getAttribute('data-slide-id') || `slide-${this.currentIndex + 1}`;
    if (window.history.replaceState) {
      window.history.replaceState(null, null, `#${slideId}`);
    }

    this.updateUI();
  }

  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 2);
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex);
    }
  }

  updateUI() {
    const slideNum = this.currentIndex + 1;
    const formattedNum = String(slideNum).padStart(2, '0');
    const currentSlide = this.slides[this.currentIndex];
    const title = currentSlide.getAttribute('data-title') || '';

    // Update Counter
    if (this.counterCurrent) this.counterCurrent.textContent = formattedNum;

    // Update Header Badge
    if (this.headerSlideTitle) {
      this.headerSlideTitle.textContent = `${formattedNum}. ${title}`;
    }

    // Update Prev / Next buttons state
    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0;
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;

    // Update Dots
    if (this.dotsStrip) {
      const dots = this.dotsStrip.querySelectorAll('.slide-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentIndex);
      });
    }

    // Update Rail Thumbnails & Scroll active into view
    if (this.railList) {
      const items = this.railList.querySelectorAll('.rail-thumb-item');
      items.forEach((item, idx) => {
        const isActive = idx === this.currentIndex;
        item.classList.toggle('active', isActive);
        if (isActive) {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Update Sorter modal selection
    if (this.sorterGrid) {
      const cards = this.sorterGrid.querySelectorAll('.sorter-slide-card');
      cards.forEach((card, idx) => {
        card.classList.toggle('active', idx === this.currentIndex);
      });
    }
  }

  checkInitialHash() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    // Find slide by slide-id or slide number
    const foundIdx = this.slides.findIndex(s => {
      const id = s.getAttribute('data-slide-id');
      const num = s.getAttribute('data-num');
      return id === hash || `slide-${num}` === hash || num === hash;
    });

    if (foundIdx !== -1) {
      this.goToSlide(foundIdx + 1);
    }
  }

  // --- Sub-Tabs inside Project Slides ---
  bindSubTabs() {
    document.querySelectorAll('.sub-tabs-container').forEach(container => {
      const buttons = container.querySelectorAll('.sub-tab-btn');
      const contents = container.querySelectorAll('.sub-tab-content');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetTabId = btn.getAttribute('data-tab');
          buttons.forEach(b => b.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          btn.classList.add('active');
          const targetEl = container.querySelector(`#${targetTabId}`);
          if (targetEl) targetEl.classList.add('active');
        });
      });
    });
  }

  // --- Multi-Image Switcher inside Slides ---
  bindImageSwitchers() {
    document.querySelectorAll('.visual-deck-card').forEach(card => {
      const buttons = card.querySelectorAll('.switcher-btn');
      const images = card.querySelectorAll('.deck-preview-img');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetImgId = btn.getAttribute('data-img-target');
          buttons.forEach(b => b.classList.remove('active'));
          images.forEach(img => img.classList.remove('active'));

          btn.classList.add('active');
          const targetImg = card.querySelector(`#${targetImgId}`);
          if (targetImg) targetImg.classList.add('active');
        });
      });
    });
  }

  // --- High-Resolution Lightbox Zoom ---
  zoomImage(src, title, desc) {
    if (!this.zoomModal || !this.zoomImg) return;
    this.zoomImg.src = src;
    if (this.zoomTitle) this.zoomTitle.textContent = title || 'Dashboard View';
    if (this.zoomDesc) this.zoomDesc.textContent = desc || '';
    this.zoomModal.classList.add('active');
  }

  closeZoom() {
    if (this.zoomModal) {
      this.zoomModal.classList.remove('active');
    }
  }

  // --- Slide Sorter Modal ---
  openSorter() {
    if (this.sorterModal) {
      this.sorterModal.classList.add('active');
    }
  }

  closeSorter() {
    if (this.sorterModal) {
      this.sorterModal.classList.remove('active');
    }
  }

  toggleSorter() {
    if (this.sorterModal && this.sorterModal.classList.contains('active')) {
      this.closeSorter();
    } else {
      this.openSorter();
    }
  }

  // --- Events and Keybindings ---
  bindEvents() {
    // Buttons
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

    // Sorter buttons
    const openSorterBtn = document.getElementById('openSorterBtn');
    const footerSorterBtn = document.getElementById('footerSorterBtn');
    const currentSlideBadge = document.getElementById('currentSlideBadge');
    const sorterCloseBtn = document.getElementById('sorterCloseBtn');
    const sorterBackdrop = document.getElementById('sorterBackdrop');

    if (openSorterBtn) openSorterBtn.addEventListener('click', () => this.toggleSorter());
    if (footerSorterBtn) footerSorterBtn.addEventListener('click', () => this.toggleSorter());
    if (currentSlideBadge) currentSlideBadge.addEventListener('click', () => this.toggleSorter());
    if (sorterCloseBtn) sorterCloseBtn.addEventListener('click', () => this.closeSorter());
    if (sorterBackdrop) sorterBackdrop.addEventListener('click', () => this.closeSorter());

    // Zoom modal close
    const zoomCloseBtn = document.getElementById('zoomCloseBtn');
    const zoomBackdrop = document.getElementById('zoomBackdrop');
    if (zoomCloseBtn) zoomCloseBtn.addEventListener('click', () => this.closeZoom());
    if (zoomBackdrop) zoomBackdrop.addEventListener('click', () => this.closeZoom());

    // Thumbnail Rail Toggle
    const railToggleBtn = document.getElementById('railToggleBtn');
    const slideRail = document.getElementById('slideRail');
    if (railToggleBtn && slideRail) {
      railToggleBtn.addEventListener('click', () => {
        slideRail.classList.toggle('collapsed');
        const icon = railToggleBtn.querySelector('i');
        if (icon) {
          icon.className = slideRail.classList.contains('collapsed') 
            ? 'fa-solid fa-chevron-right' 
            : 'fa-solid fa-chevron-left';
        }
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept if focused on an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      // Close open modals on Escape
      if (e.key === 'Escape') {
        this.closeZoom();
        this.closeSorter();
        document.getElementById('contactPopModal')?.classList.remove('active');
        document.getElementById('personaMenu')?.classList.remove('show');
        return;
      }

      // Next Slide
      if (['ArrowRight', 'Space', 'PageDown', 'KeyL'].includes(e.code) || e.key === 'ArrowRight') {
        if (!this.sorterModal.classList.contains('active') && !this.zoomModal.classList.contains('active')) {
          e.preventDefault();
          this.nextSlide();
        }
      }

      // Previous Slide
      if (['ArrowLeft', 'PageUp', 'KeyH'].includes(e.code) || e.key === 'ArrowLeft') {
        if (!this.sorterModal.classList.contains('active') && !this.zoomModal.classList.contains('active')) {
          e.preventDefault();
          this.prevSlide();
        }
      }

      // Home & End
      if (e.key === 'Home') {
        e.preventDefault();
        this.goToSlide(1);
      }
      if (e.key === 'End') {
        e.preventDefault();
        this.goToSlide(this.totalSlides);
      }

      // 'G' for Sorter Grid
      if (e.key === 'g' || e.key === 'G') {
        this.toggleSorter();
      }

      // 'F' for Fullscreen
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }

      // 'T' for Theme
      if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      }
    });
  }
}

// =========================================================================
// Persona Switcher Engine
// =========================================================================
const personaBioMap = {
  data: {
    label: "Data & BI Focus",
    text: "Data-focused project professional with 5+ years of experience transforming complex healthcare datasets into intuitive, high-impact Power BI dashboards. Proficient in advanced DAX modeling, KPI gauge tracking against SLAs, and decomposition trees for root-cause analysis that empower clinical and executive stakeholders to independently make data-driven decisions."
  },
  pm: {
    label: "PM & Agile Focus",
    text: "Project management professional with over 3 years of experience in cross-functional teams, implementing technical solutions, and delivering successful digital transformation initiatives. Skilled in Agile/Scrum methodologies, stakeholder management, technical documentation, and utilizing PM tools (Jira, Trello, Monday.com, PM3) to track milestones and ensure on-time delivery across NHS departments."
  },
  digital: {
    label: "Digital Transformation Focus",
    text: "Project Support Officer skilled in transforming complex manual processes into streamlined digital workflows through digital innovation. Proven track record leading digital overhauls—including an NHS Employers nationally recognized case study—combining Power Automate, SharePoint, and Power Apps to cut turnaround times by 75% and eliminate lost paperwork."
  }
};

const initPersonaSwitcher = () => {
  const triggerBtn = document.getElementById('personaDropdownBtn');
  const personaMenu = document.getElementById('personaMenu');
  const activeLabel = document.getElementById('activePersonaLabel');
  const hubBioText = document.getElementById('hubBioText');
  const hubBioBox = document.getElementById('hubBioBox');
  const menuItems = document.querySelectorAll('.persona-menu-item');

  if (!triggerBtn || !personaMenu) return;

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    personaMenu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!personaMenu.contains(e.target) && e.target !== triggerBtn) {
      personaMenu.classList.remove('show');
    }
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const persona = item.getAttribute('data-persona');
      if (!personaBioMap[persona]) return;

      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');

      if (activeLabel) activeLabel.textContent = personaBioMap[persona].label;

      if (hubBioBox && hubBioText) {
        hubBioBox.style.opacity = '0.3';
        hubBioBox.style.transform = 'translateY(3px)';
        setTimeout(() => {
          hubBioText.textContent = personaBioMap[persona].text;
          hubBioBox.style.opacity = '1';
          hubBioBox.style.transform = 'translateY(0)';
        }, 150);
      }

      personaMenu.classList.remove('show');
    });
  });
};

// =========================================================================
// Theme Toggle Engine
// =========================================================================
const getStoredTheme = () => {
  const saved = localStorage.getItem('sl_theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('sl_theme', theme);
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    themeToggle.title = theme === 'dark' ? 'Switch to Light Mode [Press T]' : 'Switch to Dark Mode [Press T]';
  }
};

const toggleTheme = () => {
  const current = document.body.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
};

// =========================================================================
// Fullscreen Engine
// =========================================================================
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

// =========================================================================
// Copy Email Helper
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
// Contact Popup Modal
// =========================================================================
const initContactPopup = () => {
  const openBtn = document.getElementById('quickContactBtn');
  const modal = document.getElementById('contactPopModal');
  const closeBtn = document.getElementById('popClose');
  const backdrop = document.getElementById('popBackdrop');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (backdrop) backdrop.addEventListener('click', () => modal.classList.remove('active'));
};

// =========================================================================
// Global Initialization
// =========================================================================
let deck;

document.addEventListener('DOMContentLoaded', () => {
  setTheme(getStoredTheme());
  deck = new PresentationDeck();
  initPersonaSwitcher();
  initContactPopup();

  // Fullscreen button
  const fsBtn = document.getElementById('fullscreenBtn');
  if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

  // Theme button
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Setup copy helpers
  setupCopyEmail('copyEmailDeckBtn', 'copyEmailDeckText');
  setupCopyEmail('copyEmailContactBtn', 'copyEmailContactText');
  setupCopyEmail('popCopyEmail', 'popCopyText');
});
