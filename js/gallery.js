/**
 * LensCraft Studio — gallery.js
 * Gallery filter, masonry reveal, lightbox modal
 */

/* ══ GALLERY DATA ════════════════════════════════════════════ */
const galleryItems = [
  { id:1,  cat:'wedding',  title:'Golden Hour Vows',    h:'gp-h3', grad:'gp-wedding',  icon:'💍' },
  { id:2,  cat:'portrait', title:'Studio Portrait',     h:'gp-h1', grad:'gp-portrait', icon:'🎭' },
  { id:3,  cat:'fashion',  title:'Editorial Look',      h:'gp-h2', grad:'gp-fashion',  icon:'👗' },
  { id:4,  cat:'nature',   title:'Forest Light',        h:'gp-h4', grad:'gp-nature',   icon:'🌿' },
  { id:5,  cat:'events',   title:'Grand Reception',     h:'gp-h2', grad:'gp-events',   icon:'🎉' },
  { id:6,  cat:'wedding',  title:'First Dance',         h:'gp-h1', grad:'gp-wedding',  icon:'💒' },
  { id:7,  cat:'portrait', title:'Classic B&W',         h:'gp-h3', grad:'gp-portrait', icon:'🖤' },
  { id:8,  cat:'fashion',  title:'Runway Glamour',      h:'gp-h2', grad:'gp-fashion',  icon:'✨' },
  { id:9,  cat:'nature',   title:'Misty Mountain',      h:'gp-h3', grad:'gp-nature',   icon:'🏔️' },
  { id:10, cat:'events',   title:'Gala Night',          h:'gp-h1', grad:'gp-events',   icon:'🥂' },
  { id:11, cat:'wedding',  title:'Bridal Elegance',     h:'gp-h2', grad:'gp-wedding',  icon:'👰' },
  { id:12, cat:'portrait', title:'Natural Light',       h:'gp-h4', grad:'gp-portrait', icon:'☀️' },
  { id:13, cat:'fashion',  title:'Urban Edge',          h:'gp-h3', grad:'gp-fashion',  icon:'🏙️' },
  { id:14, cat:'nature',   title:'Golden Fields',       h:'gp-h1', grad:'gp-nature',   icon:'🌾' },
  { id:15, cat:'events',   title:'Corporate Event',     h:'gp-h2', grad:'gp-events',   icon:'🏢' },
  { id:16, cat:'wedding',  title:'Sunset Ceremony',     h:'gp-h3', grad:'gp-wedding',  icon:'🌅' },
];

/* ══ BUILD MASONRY ════════════════════════════════════════════ */
const grid = document.getElementById('masonryGrid');

function buildGallery(items) {
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'masonry-item fade-in';
    el.dataset.id  = item.id;
    el.dataset.cat = item.cat;
    el.dataset.title = item.title;
    el.style.animationDelay = (i % 8 * 0.06) + 's';
    el.innerHTML = `
      <div class="gallery-placeholder ${item.h} ${item.grad}">
        <span class="ph-icon">${item.icon}</span>
        <span class="ph-cat">${item.cat}</span>
      </div>
      <div class="gallery-hover-overlay">
        <div class="hover-overlay-info">
          <h4>${item.title}</h4>
          <span>${item.cat}</span>
        </div>
        <div class="hover-expand-btn">+</div>
      </div>
    `;
    el.addEventListener('click', () => openLightbox(item.id));
    grid.appendChild(el);
  });
}

buildGallery(galleryItems);

/* ══ FILTER ══════════════════════════════════════════════════ */
let activeFilter = 'all';

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.filter;

    const filtered = activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter(i => i.cat === activeFilter);

    buildGallery(filtered);
  });
});

/* ══ LIGHTBOX ════════════════════════════════════════════════ */
const lightbox     = document.getElementById('lightboxOverlay');
const lbClose      = document.getElementById('lbClose');
const lbTitle      = document.getElementById('lbTitle');
const lbCat        = document.getElementById('lbCat');
const lbContent    = document.getElementById('lbContent');
const lbPrev       = document.getElementById('lbPrev');
const lbNext       = document.getElementById('lbNext');

let currentItems = galleryItems;
let currentIndex = 0;

function openLightbox(id) {
  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.cat === activeFilter);

  currentItems = filtered;
  currentIndex = filtered.findIndex(i => i.id === id);
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const item = currentItems[currentIndex];
  if (!item) return;

  lbTitle.textContent = item.title;
  lbCat.textContent   = item.cat.charAt(0).toUpperCase() + item.cat.slice(1) + ' Photography';
  lbContent.innerHTML = `
    <div class="lightbox-placeholder ${item.grad}">
      <span class="ph-icon" style="font-size:5rem;opacity:0.45;">${item.icon}</span>
      <span>${item.title}</span>
    </div>
  `;
}

lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

lbPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
  renderLightbox();
});

lbNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentItems.length;
  renderLightbox();
});

/* Keyboard navigation */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length; renderLightbox(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentItems.length; renderLightbox(); }
});

/* Touch swipe */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) {
    currentIndex = dx < 0
      ? (currentIndex + 1) % currentItems.length
      : (currentIndex - 1 + currentItems.length) % currentItems.length;
    renderLightbox();
  }
});
