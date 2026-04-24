/* ============================================================
   THE INDIAN NUMISMATIC — Global JavaScript
   ============================================================ */

'use strict';

// ── Sample coin data (replace with your real data) ──────────
const COINS_DB = [
  {
    id: "IN-001",
    name: "⅛ Paisa",
    ruler: "Tipu Sultan",
    kingdom: "Kingdom of Mysore",
    era: "Mughal & Sultanate",
    period: "1782–1799 A.D.",
    mint: "Pattan Mint",
    grade: "Extremely Fine",
    denomination: "⅛ Paisa",
    metal: "Copper",
    rarity: "Scarce",
    country: "India",
    description: "A superb example from the Pattan mint under Tipu Sultan's reign. Features a decorated elephant motif with date above. Extremely fine grade — surfaces crisp with original lustre.",
    obverse: "Decorated elephant with date above",
    reverse: "Persian script legends",
    weight: "2.1g",
    diameter: "14mm",
    tags: ["Mysore", "Tipu Sultan", "Copper", "Paisa"],
    image: "images/IN-001.jpg",
    images: ["images/IN-001.jpg"],
    featured: true
  },
  {
    id: "IN-002",
    name: "Rupee",
    ruler: "Aurangzeb",
    kingdom: "Mughal Empire",
    era: "Mughal & Sultanate",
    period: "1658–1707 A.D.",
    mint: "Surat Mint",
    grade: "Very Fine",
    denomination: "1 Rupee",
    metal: "Silver",
    rarity: "Uncommon",
    country: "India",
    description: "Silver rupee struck at the Surat mint under Aurangzeb Alamgir. Crisp Nastaliq calligraphy with regnal year. Classic Mughal aesthetic.",
    obverse: "Kalima with Emperor's name and title",
    reverse: "Mint name and regnal year",
    weight: "11.4g",
    diameter: "24mm",
    tags: ["Mughal", "Silver", "Rupee", "Aurangzeb"],
    image: "images/IN-002.jpg",
    images: ["images/IN-002.jpg"],
    featured: true
  },
  {
    id: "IN-003",
    name: "Fanam",
    ruler: "Various",
    kingdom: "Kingdom of Travancore",
    era: "South Indian Kingdoms",
    period: "18th Century A.D.",
    mint: "Unknown",
    grade: "Fine",
    denomination: "Fanam",
    metal: "Gold",
    rarity: "Rare",
    country: "India",
    description: "Tiny gold fanam from the Kingdom of Travancore. Depicts the conch shell — the symbol of the Travancore royal house — on the obverse.",
    obverse: "Conch shell (Shankha)",
    reverse: "Geometric floral pattern",
    weight: "0.38g",
    diameter: "7mm",
    tags: ["Travancore", "Gold", "Fanam", "South India"],
    image: "images/IN-003.jpg",
    images: ["images/IN-003.jpg"],
    featured: false
  },
  {
    id: "IN-004",
    name: "Half Anna",
    ruler: "Victoria",
    kingdom: "British India",
    era: "Colonial Era",
    period: "1862 A.D.",
    mint: "Calcutta Mint",
    grade: "Good Very Fine",
    denomination: "½ Anna",
    metal: "Copper",
    rarity: "Common",
    country: "India",
    description: "First issue half anna under Queen Victoria's crowned portrait — minted at Calcutta. Excellent detail on the crown.",
    obverse: "Queen Victoria crowned portrait",
    reverse: "Value and date within wreath",
    weight: "6.25g",
    diameter: "25mm",
    tags: ["British India", "Victoria", "Copper", "Anna"],
    image: "images/IN-004.jpg",
    images: ["images/IN-004.jpg"],
    featured: false
  },
  {
    id: "IN-005",
    name: "Kori",
    ruler: "Pragmulji II",
    kingdom: "Kutch State",
    era: "Princely States",
    period: "1875–1876 A.D.",
    mint: "Bhuj Mint",
    grade: "Fine+",
    denomination: "Kori",
    metal: "Silver",
    rarity: "Scarce",
    country: "India",
    description: "Silver kori from Kutch state (Pragmulji II). The Kutch kori is famous for its distinctive Arabic calligraphy and decorative border.",
    obverse: "Arabic legends with floral border",
    reverse: "Devanagari inscriptions with date",
    weight: "4.5g",
    diameter: "20mm",
    tags: ["Kutch", "Princely State", "Silver", "Kori"],
    image: "images/IN-005.jpg",
    images: ["images/IN-005.jpg"],
    featured: false
  },
  {
    id: "IN-006",
    name: "Pagoda",
    ruler: "Various",
    kingdom: "Vijayanagara Empire",
    era: "South Indian Kingdoms",
    period: "15th–16th Century A.D.",
    mint: "Unknown",
    grade: "Very Fine",
    denomination: "Pagoda",
    metal: "Gold",
    rarity: "Very Rare",
    country: "India",
    description: "Vijayanagara gold pagoda — one of the most iconic coins of South India. Obverse shows the principal deity Venkateshwara seated, reverse shows a punch mark.",
    obverse: "Deity Venkateshwara enthroned",
    reverse: "Punch-mark with floral motif",
    weight: "3.4g",
    diameter: "14mm",
    tags: ["Vijayanagara", "Gold", "Pagoda", "South India"],
    image: "images/IN-006.jpg",
    images: ["images/IN-006.jpg"],
    featured: true
  },
  {
    id: "IN-007",
    name: "Tanka",
    ruler: "Iltutmish",
    kingdom: "Delhi Sultanate",
    era: "Mughal & Sultanate",
    period: "1210–1236 A.D.",
    mint: "Delhi Mint",
    grade: "Fine",
    denomination: "Tanka",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India",
    description: "Early Delhi Sultanate silver tanka under Shamsuddin Iltutmish — among the first true Islamic coinage of India. Bold Arabic legends.",
    obverse: "Sultan's name and title in Kufic script",
    reverse: "Kalima in Arabic",
    weight: "10.9g",
    diameter: "31mm",
    tags: ["Delhi Sultanate", "Silver", "Tanka", "Medieval"],
    image: "images/IN-007.jpg",
    images: ["images/IN-007.jpg"],
    featured: false
  },
  {
    id: "IN-008",
    name: "Punch-Marked Coin",
    ruler: "Unknown",
    kingdom: "Mauryan Empire",
    era: "Ancient India",
    period: "3rd–2nd Century B.C.",
    mint: "Imperial Mint",
    grade: "Fine",
    denomination: "Karshapana",
    metal: "Silver",
    rarity: "Rare",
    country: "India",
    description: "Ancient silver karshapana of the Mauryan era — one of India's earliest coinage. Five punch marks on obverse include sun, six-armed symbol and elephant.",
    obverse: "Five punch marks: sun, hexagonal symbol, elephant, hill, crescent",
    reverse: "Single banker's marks",
    weight: "3.4g",
    diameter: "17mm",
    tags: ["Ancient", "Mauryan", "Silver", "Punch-Marked"],
    image: "images/IN-008.jpg",
    images: ["images/IN-008.jpg"],
    featured: true
  },
  {
    id: "IN-009",
    name: "Drachm",
    ruler: "Menander I",
    kingdom: "Indo-Greek Kingdom",
    era: "Ancient India",
    period: "155–130 B.C.",
    mint: "Taxila Mint",
    grade: "Very Fine",
    denomination: "Drachm",
    metal: "Silver",
    rarity: "Very Rare",
    country: "India / Pakistan",
    description: "Silver drachm of Menander I Soter — the greatest of the Indo-Greek kings. Helmeted portrait on obverse, Athena Alkidemos on reverse with Kharosthi and Greek legends.",
    obverse: "Helmeted portrait of Menander facing right",
    reverse: "Athena Alkidemos with spear and shield — Greek and Kharosthi legends",
    weight: "2.4g",
    diameter: "17mm",
    tags: ["Indo-Greek", "Silver", "Drachm", "Ancient"],
    image: "images/IN-009.jpg",
    images: ["images/IN-009.jpg"],
    featured: true
  },
  {
    id: "IN-010",
    name: "Gold Dinar",
    ruler: "Chandragupta II",
    kingdom: "Gupta Empire",
    era: "Ancient India",
    period: "375–415 A.D.",
    mint: "Unknown",
    grade: "Good Very Fine",
    denomination: "Dinar",
    metal: "Gold",
    rarity: "Extremely Rare",
    country: "India",
    description: "Gold dinar of Chandragupta II Vikramaditya — the 'Lion Slayer' type. King shown slaying a lion with bow. Reverse shows Goddess Lakshmi seated on lotus.",
    obverse: "King standing slaying lion with arrow",
    reverse: "Goddess Lakshmi seated on lotus with legend",
    weight: "8.3g",
    diameter: "20mm",
    tags: ["Gupta", "Gold", "Dinar", "Ancient"],
    image: "images/IN-010.jpg",
    images: ["images/IN-010.jpg"],
    featured: true
  },
  {
    id: "IN-011",
    name: "Quarter Rupee",
    ruler: "George V",
    kingdom: "British India",
    era: "Colonial Era",
    period: "1916 A.D.",
    mint: "Bombay Mint",
    grade: "Uncirculated",
    denomination: "¼ Rupee",
    metal: "Silver",
    rarity: "Uncommon",
    country: "India",
    description: "Superb UNC quarter rupee of George V from the Bombay mint. Full mint lustre with sharp strike on all devices.",
    obverse: "George V crowned portrait left",
    reverse: "Value and date within wreath with crown",
    weight: "2.9g",
    diameter: "19mm",
    tags: ["British India", "George V", "Silver", "Rupee"],
    image: "images/IN-011.jpg",
    images: ["images/IN-011.jpg"],
    featured: false
  },
  {
    id: "IN-012",
    name: "Mohur",
    ruler: "Akbar",
    kingdom: "Mughal Empire",
    era: "Mughal & Sultanate",
    period: "1556–1605 A.D.",
    mint: "Agra Mint",
    grade: "Fine+",
    denomination: "Mohur",
    metal: "Gold",
    rarity: "Very Rare",
    country: "India",
    description: "Gold mohur of Akbar the Great struck at Agra. Bears the Ilahi era date and Akbar's titles. A masterpiece of Mughal gold coinage.",
    obverse: "Emperor's name and titles in Persian",
    reverse: "Mint name, Ilahi regnal year",
    weight: "10.9g",
    diameter: "22mm",
    tags: ["Mughal", "Gold", "Mohur", "Akbar"],
    image: "images/IN-012.jpg",
    images: ["images/IN-012.jpg"],
    featured: false
  }
];

// Derive filter options from data
const ALL_ERAS = [...new Set(COINS_DB.map(c => c.era))].sort();
const ALL_METALS = [...new Set(COINS_DB.map(c => c.metal))].sort();
const ALL_KINGDOMS = [...new Set(COINS_DB.map(c => c.kingdom))].sort();

// ── Nav mobile toggle ────────────────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  // Inject backdrop element once
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // Move nav-links to body on mobile to escape sticky header stacking context
  function ensureMobilePlacement() {
    if (window.innerWidth <= 768 && navLinks.parentElement !== document.body) {
      document.body.appendChild(navLinks);
    } else if (window.innerWidth > 768 && navLinks.parentElement === document.body) {
      const navWrapper = document.querySelector('.nav-wrapper');
      if (navWrapper) navWrapper.insertBefore(navLinks, hamburger);
    }
  }
  ensureMobilePlacement();
  window.addEventListener('resize', ensureMobilePlacement);

  function openDrawer() {
    navLinks.classList.add('open');
    hamburger.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
  }

  function closeDrawer() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menu');
  }

  function toggleDrawer() {
    navLinks.classList.contains('open') ? closeDrawer() : openDrawer();
  }

  hamburger.addEventListener('click', toggleDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close on link click — let navigation happen first
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      setTimeout(closeDrawer, 50);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Close drawer if window is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeDrawer();
  });

  // Swipe right to close
  let touchStartX = 0;
  navLinks.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  navLinks.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX < -50) closeDrawer();
  }, { passive: true });

  // Highlight active page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Modal / Lightbox ─────────────────────────────────────────
let currentModal = null;

function openModal(coinId) {
  const coin = COINS_DB.find(c => c.id === coinId);
  if (!coin) return;

  const overlay = document.getElementById('coin-modal');
  if (!overlay) return;

  // Populate modal
  overlay.querySelector('.modal-kingdom').textContent = `${coin.kingdom} · ${coin.period}`;
  overlay.querySelector('.modal-title').textContent = `${coin.denomination} — ${coin.ruler}`;

  const specs = overlay.querySelector('.coin-specs');
  specs.innerHTML = [
    ['Mint', coin.mint],
    ['Metal', coin.metal],
    ['Grade', coin.grade],
    ['Weight', coin.weight],
    ['Diameter', coin.diameter],
    ['Rarity', coin.rarity],
    ['Obverse', coin.obverse],
    ['Reverse', coin.reverse],
  ].map(([l, v]) => `
    <div class="spec-item">
      <span class="spec-label">${l}</span>
      <span class="spec-value">${v}</span>
    </div>
  `).join('');

  overlay.querySelector('.modal-desc').textContent = coin.description;

  // Images
  const mainImg = overlay.querySelector('.modal-main-image');
  const thumbsEl = overlay.querySelector('.modal-thumbs');

  const imgs = coin.images && coin.images.length ? coin.images : [coin.image];

  mainImg.src = imgs[0];
  mainImg.alt = coin.name;
  mainImg.onerror = () => { mainImg.src = 'images/placeholder.jpg'; };

  thumbsEl.innerHTML = imgs.map((src, i) => `
    <img src="${src}" alt="${coin.name} ${i+1}" class="modal-thumb ${i===0?'active':''}"
         onerror="this.src='images/placeholder.jpg'"
         onclick="switchModalImage(this, '${src}')">
  `).join('');

  // Catalog ID
  const idEl = overlay.querySelector('.modal-catalog-id');
  if (idEl) idEl.textContent = `#${coin.id}`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  currentModal = overlay;
}

function switchModalImage(thumb, src) {
  const modal = thumb.closest('.modal-overlay');
  modal.querySelector('.modal-main-image').src = src;
  modal.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function closeModal() {
  if (!currentModal) return;
  currentModal.classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function initModal() {
  const overlay = document.getElementById('coin-modal');
  if (!overlay) return;

  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── Coin Grid Renderer ───────────────────────────────────────
function renderCoinCards(coins, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!coins.length) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-dim);">
        <p style="font-family:'Cinzel',serif;font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase;">
          No coins match your search
        </p>
      </div>`;
    return;
  }

  container.innerHTML = coins.map((coin, i) => `
    <div class="coin-card animate-in animate-delay-${Math.min(i%4+1,4)}"
         onclick="openModal('${coin.id}')" tabindex="0" role="button"
         aria-label="View ${coin.name} from ${coin.kingdom}">
      <div class="coin-card-image">
        <img src="${coin.image}" alt="${coin.name} — ${coin.kingdom}"
             loading="lazy"
             onerror="this.src='images/placeholder.jpg'">
        <span class="coin-card-badge">${coin.metal}</span>
        <span class="coin-card-id">${coin.id}</span>
      </div>
      <div class="coin-card-body">
        <span class="coin-card-kingdom">${coin.kingdom}</span>
        <p class="coin-card-name">${coin.denomination} · ${coin.ruler}</p>
        <div class="coin-card-meta">
          <span class="meta-tag">${coin.period}</span>
          <span class="meta-tag">${coin.grade}</span>
          ${coin.rarity !== 'Common' ? `<span class="meta-tag">${coin.rarity}</span>` : ''}
        </div>
        <p class="coin-card-desc">${coin.description}</p>
      </div>
    </div>
  `).join('');

  // Keyboard accessibility
  container.querySelectorAll('.coin-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ── Filter Engine ────────────────────────────────────────────
function filterCoins({ search = '', era = '', metal = '', rarity = '' } = {}) {
  return COINS_DB.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || (
      c.name.toLowerCase().includes(q) ||
      c.kingdom.toLowerCase().includes(q) ||
      c.ruler.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    );
    const matchEra = !era || c.era === era;
    const matchMetal = !metal || c.metal.toLowerCase() === metal.toLowerCase();
    const matchRarity = !rarity || c.rarity.toLowerCase() === rarity.toLowerCase();
    return matchSearch && matchEra && matchMetal && matchRarity;
  });
}

// ── Collection page filter init ──────────────────────────────
function initCollectionFilters() {
  const searchEl = document.getElementById('coin-search');
  const eraEl = document.getElementById('filter-era');
  const metalEl = document.getElementById('filter-metal');
  const rarityEl = document.getElementById('filter-rarity');
  const countEl = document.getElementById('results-count');

  if (!searchEl) return;

  function update() {
    const filtered = filterCoins({
      search: searchEl.value,
      era: eraEl ? eraEl.value : '',
      metal: metalEl ? metalEl.value : '',
      rarity: rarityEl ? rarityEl.value : ''
    });
    renderCoinCards(filtered, 'coins-grid');
    if (countEl) countEl.textContent = `${filtered.length} coin${filtered.length !== 1 ? 's' : ''}`;
  }

  [searchEl, eraEl, metalEl, rarityEl].filter(Boolean).forEach(el => {
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });

  // Era pill filters
  document.querySelectorAll('.filter-pill[data-era]').forEach(pill => {
    pill.addEventListener('click', () => {
      const era = pill.dataset.era;
      if (eraEl) eraEl.value = era;
      document.querySelectorAll('.filter-pill[data-era]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      update();
    });
  });

  // Populate selects
  if (eraEl) {
    eraEl.innerHTML = '<option value="">All Eras</option>' +
      ALL_ERAS.map(e => `<option value="${e}">${e}</option>`).join('');
  }
  if (metalEl) {
    metalEl.innerHTML = '<option value="">All Metals</option>' +
      ALL_METALS.map(m => `<option value="${m}">${m}</option>`).join('');
  }

  // Initial render
  update();
}

// ── Home page featured coins ─────────────────────────────────
function initHomeFeatured() {
  const featured = COINS_DB.filter(c => c.featured).slice(0, 6);
  renderCoinCards(featured, 'featured-grid');
}

// ── Stats ────────────────────────────────────────────────────
function initStats() {
  const stats = {
    total: COINS_DB.length,
    kingdoms: new Set(COINS_DB.map(c => c.kingdom)).size,
    metals: new Set(COINS_DB.map(c => c.metal)).size,
    eras: new Set(COINS_DB.map(c => c.era)).size
  };

  Object.entries(stats).forEach(([key, val]) => {
    const el = document.getElementById(`stat-${key}`);
    if (el) animateNumber(el, val);
  });
}

function animateNumber(el, target) {
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (target > 99 ? '+' : '');
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ── Intersection Observer for animations ─────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ── Contact form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = 'rgba(200,168,75,0.15)';
    btn.style.color = 'var(--gold)';
    btn.style.borderColor = 'var(--gold-dark)';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style = '';
      form.reset();
    }, 3000);
  });
}

// ── Image placeholder fallback ───────────────────────────────
function initImageFallbacks() {
  // Create a canvas-based placeholder
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  const ctx = canvas.getContext('2d');

  // Dark background
  ctx.fillStyle = '#0d0b08';
  ctx.fillRect(0, 0, 400, 400);

  // Gold circle
  ctx.strokeStyle = '#c8a84b44';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, Math.PI * 2);
  ctx.stroke();

  // Inner circle
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, Math.PI * 2);
  ctx.stroke();

  // Coin symbol
  ctx.fillStyle = '#3a3020';
  ctx.font = '80px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🪙', 200, 200);

  window.PLACEHOLDER_IMG = canvas.toDataURL();

  document.querySelectorAll('img[onerror]').forEach(img => {
    if (!img.getAttribute('onerror').includes('placeholder')) return;
    img.addEventListener('error', function() {
      if (!this.dataset.errored) {
        this.dataset.errored = '1';
        this.src = window.PLACEHOLDER_IMG;
      }
    });
  });
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initModal();
  initScrollAnimations();
  initContactForm();

  // Page-specific inits
  if (document.getElementById('featured-grid')) initHomeFeatured();
  if (document.getElementById('coins-grid')) initCollectionFilters();
  if (document.getElementById('stat-total')) initStats();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});