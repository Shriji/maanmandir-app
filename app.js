/**
 * MAAN MANDIR MOBILE DEVOTEE PORTAL - APPLICATION LOGIC
 * Dynamic Tabs, Live Stream Detector, Audio Player, PDF Catalog, Updates Drawer, Font Resizer (A-/A/A+), Bilingual Switcher (EN/HI), & PWA Registration
 */

// Bilingual Translation Dictionary (English 🇬🇧 & Hindi 🇮🇳)
const TRANSLATIONS = {
  en: {
    appTitle: "Maan Mandir",
    appSubtitle: "Barsana Dham Portal",
    liveBanner: "🔴 LIVE NOW: Ramesh Baba Ji Pravachan",
    watchLive: "Watch Live",
    searchPlaceholder: "Search Pravachans, Kirtan, Books, Magazines...",
    heroTitle: "Shri Radharani Temple & Maan Mandir",
    heroSubtitle: "Maan Mandir Seva Sansthan Trust • Shri Ramesh Baba Ji Maharaj",
    heroTag: "Barsana Dham",
    sectionResources: "Devotee Resources",
    tileLive: "Live & YouTube",
    tileLiveDesc: "Pravachans & Streams",
    tileAudio: "Kirtan & Audio",
    tileAudioDesc: "SoundCloud & MP3s",
    tileBooks: "Books & Magazine",
    tileBooksDesc: "PDF Publications",
    tileMaanini: "Maanini Portal",
    tileMaaniniDesc: "Maanini.app Launcher",
    tileSocial: "Social Media",
    tileSocialDesc: "Facebook, Insta, X",
    tileSeva: "Gauseva & Info",
    tileSevaDesc: "Braj Yatra & Seva",
    latestUpdates: "⚡ Latest Updates for Devotees",
    tabHome: "Home",
    tabLive: "Live",
    tabAudio: "Audio",
    tabBooks: "Books",
    tabMaanini: "Maanini",
    tabSeva: "Seva",
    readBtn: "Read",
    downloadBtn: "Download",
    notificationsTitle: "Devotee Updates"
  },
  hi: {
    appTitle: "मान मंदिर",
    appSubtitle: "बरसाना धाम पोर्टल",
    liveBanner: "🔴 लाइव: श्री रमेश बाबा जी महाराज प्रवचन",
    watchLive: "लाइव देखें",
    searchPlaceholder: "प्रवचन, कीर्तन, पुस्तकें, पत्रिका खोजें...",
    heroTitle: "श्री लाडली लाला जू मंदिर व मान मंदिर",
    heroSubtitle: "मान मंदिर सेवा संस्थान ट्रस्ट • श्री रमेश बाबा जी महाराज",
    heroTag: "बरसाना धाम",
    sectionResources: "भक्त सेवा एवं साधन",
    tileLive: "लाइव व यूट्यूब",
    tileLiveDesc: "प्रवचन व कथाएं",
    tileAudio: "कीर्तन व ऑडियो",
    tileAudioDesc: "साउंडक्लाउड व संकीर्तन",
    tileBooks: "पुस्तके व पत्रिका",
    tileBooksDesc: "पीडीएफ ग्रंथ एवं पत्रिका",
    tileMaanini: "मानिनी पोर्टल",
    tileMaaniniDesc: "मानिनी ऐप खोलें",
    tileSocial: "सोशल मीडिया",
    tileSocialDesc: "फेसबुक, इंस्टा, व्हाट्सएप",
    tileSeva: "गौसेवा व जानकारी",
    tileSevaDesc: "ब्रज यात्रा व गौशाला",
    latestUpdates: "⚡ भक्तों हेतु नवीनतम समाचार",
    tabHome: "मुख्य",
    tabLive: "लाइव",
    tabAudio: "ऑडियो",
    tabBooks: "ग्रंथ",
    tabMaanini: "मानिनी",
    tabSeva: "सेवा",
    readBtn: "पढ़ें",
    downloadBtn: "डाउनलोड",
    notificationsTitle: "भक्त अपडेट्स"
  }
};

// Current App State
let currentLang = localStorage.getItem('mm_lang') || 'en';
let fontScaleStep = parseInt(localStorage.getItem('mm_font_step') || '1');
let currentPlayingAudio = null;
let isAudioPlaying = false;

// Sample Data Catalog
const APP_DATA = {
  notifications: [
    { id: 1, titleEn: "🔴 Live Webcast Started", titleHi: "🔴 लाइव सत्संग प्रारंभ", descEn: "Shri Ramesh Baba Ji Maharaj Pravachan live from Barsana Dham.", descHi: "बरसाना धाम से श्री रमेश बाबा जी महाराज का लाइव प्रवचन।", time: "10m ago", unread: true },
    { id: 2, titleEn: "🎵 New Audio Released", titleHi: "🎵 नया संकीर्तन जारी", descEn: "Radha Naama Mahima & Daily Braj Kirtan.", descHi: "राधा नाम महिमा एवं नित्य ब्रज संकीर्तन।", time: "2h ago", unread: true },
    { id: 3, titleEn: "📚 New Magazine Issue", titleHi: "📚 नई ब्रज रस पत्रिका", descEn: "Braj Ras Monthly Magazine - Current Issue.", descHi: "ब्रज रस मासिक पत्रिका का नवीनतम अंक प्रकाशित।", time: "1d ago", unread: true }
  ],

  youtubeVideos: [
    { id: "v1", titleEn: "Shri Ramesh Baba Ji Maharaj - Evening Pravachan", titleHi: "श्री रमेश बाबा जी महाराज - सांध्य प्रवचन", date: "Today", duration: "45:20", views: "12K", isNew: true, category: "Pravachan" },
    { id: "v2", titleEn: "Braj Yatra Kirtan & Raas Leela at Barsana", titleHi: "बरसाना में ब्रज यात्रा कीर्तन व रासलीला", date: "Yesterday", duration: "32:10", views: "24K", isNew: true, category: "Braj Leela" },
    { id: "v3", titleEn: "Shri Mataji Gaushala Seva & Gauseva Mahima", titleHi: "श्री माताजी गौशाला सेवा व गौ महिमा", date: "3 days ago", duration: "18:45", views: "8.5K", isNew: false, category: "Gauseva" }
  ],

  audioTracks: [
    { id: "a1", titleEn: "Radha Krishna Name Smaran Kirtan", titleHi: "श्री राधा कृष्ण नाम स्मरण कीर्तन", artist: "Maan Mandir Kirtan Mandal", duration: "28:15", isNew: true },
    { id: "a2", titleEn: "Braj Dham Mahima Katha - Part 1", titleHi: "ब्रज धाम महिमा कथा - भाग १", artist: "Shri Ramesh Baba Ji Maharaj", duration: "42:10", isNew: true },
    { id: "a3", titleEn: "Shri Ji Ki Aarti & Morning Stuti", titleHi: "श्री लाडली जू की आरती व प्रातः स्तुति", artist: "Maan Mandir Priests", duration: "12:30", isNew: false }
  ],

  booksAndMagazines: [
    { id: "b1", titleEn: "Braj Ras Monthly Magazine (Latest)", titleHi: "ब्रज रस मासिक पत्रिका (नवीनतम अंक)", subtitleEn: "Monthly Spiritual Publication", subtitleHi: "मान मंदिर ट्रस्ट की मासिक पत्रिका", pages: 48, size: "4.2 MB", isNew: true },
    { id: "b2", titleEn: "Shri Braj 84 Kos Yatra Margadarshika", titleHi: "श्री ब्रज ८४ कोस यात्रा मार्गदर्शिका", subtitleEn: "Complete Guide for Braj Dham Parikrama", subtitleHi: "ब्रज परिक्रमा हेतु सम्पूर्ण गाइड", pages: 120, size: "12.5 MB", isNew: true },
    { id: "b3", titleEn: "Maan Mandir Gauseva & Gaushala Info", titleHi: "मान मंदिर गौसेवा व माताजी गौशाला जानकारी", subtitleEn: "History of Mataji Gaushala Barsana", subtitleHi: "श्री माताजी गौशाला बरसाना का इतिहास", pages: 36, size: "3.1 MB", isNew: false }
  ]
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initFontResizer();
  initNavigation();
  initNotificationDrawer();
  renderContent();
  initAudioPlayer();
  initSearch();
  registerServiceWorker();
});

// Bilingual Language Switcher Logic
function initLanguage() {
  setLanguage(currentLang);
}

window.setLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('mm_lang', lang);

  // Update Button Active Classes
  const enBtn = document.getElementById('btn-lang-en');
  const hiBtn = document.getElementById('btn-lang-hi');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (hiBtn) hiBtn.classList.toggle('active', lang === 'hi');

  // Translate static UI elements
  const t = TRANSLATIONS[lang];

  setElementText('txt-app-title', t.appTitle);
  setElementText('txt-app-subtitle', t.appSubtitle);
  setElementText('txt-live-banner', t.liveBanner);
  setElementText('txt-watch-live', t.watchLive);
  setElementText('txt-hero-tag', t.heroTag);
  setElementText('txt-hero-title', t.heroTitle);
  setElementText('txt-hero-subtitle', t.heroSubtitle);
  setElementText('txt-section-resources', t.sectionResources);
  setElementText('txt-tile-live', t.tileLive);
  setElementText('txt-tile-live-desc', t.tileLiveDesc);
  setElementText('txt-tile-audio', t.tileAudio);
  setElementText('txt-tile-audio-desc', t.tileAudioDesc);
  setElementText('txt-tile-books', t.tileBooks);
  setElementText('txt-tile-books-desc', t.tileBooksDesc);
  setElementText('txt-tile-maanini', t.tileMaanini);
  setElementText('txt-tile-maanini-desc', t.tileMaaniniDesc);
  setElementText('txt-tile-social', t.tileSocial);
  setElementText('txt-tile-social-desc', t.tileSocialDesc);
  setElementText('txt-tile-seva', t.tileSeva);
  setElementText('txt-tile-seva-desc', t.tileSevaDesc);
  setElementText('txt-latest-updates', t.latestUpdates);
  setElementText('txt-tab-home', t.tabHome);
  setElementText('txt-tab-live', t.tabLive);
  setElementText('txt-tab-audio', t.tabAudio);
  setElementText('txt-tab-books', t.tabBooks);
  setElementText('txt-tab-maanini', t.tabMaanini);
  setElementText('txt-tab-seva', t.tabSeva);
  setElementText('txt-notifications-title', t.notificationsTitle);

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // Re-render dynamic list content with new language
  renderContent();
  renderNotificationsList();
};

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Interactive Font Size Controls (A- / A / A+)
function initFontResizer() {
  applyFontStep(fontScaleStep);
}

window.changeFontSize = function(delta) {
  if (delta === 0) fontScaleStep = 1;
  else fontScaleStep = Math.max(0, Math.min(3, fontScaleStep + delta));
  applyFontStep(fontScaleStep);
};

function applyFontStep(step) {
  fontScaleStep = step;
  localStorage.setItem('mm_font_step', fontScaleStep);

  const fontScales = [95, 112, 128, 145];
  document.documentElement.style.fontSize = fontScales[fontScaleStep] + '%';

  const decBtn = document.getElementById('btn-font-dec');
  const resetBtn = document.getElementById('btn-font-reset');
  const incBtn = document.getElementById('btn-font-inc');

  if (decBtn) decBtn.classList.toggle('active', step === 0);
  if (resetBtn) resetBtn.classList.toggle('active', step === 1);
  if (incBtn) incBtn.classList.toggle('active', step >= 2);
}

// Navigation Tabs
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = item.getAttribute('data-tab');

      navItems.forEach(nav => nav.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      item.classList.add('active');
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Notifications Drawer
function initNotificationDrawer() {
  const bellBtn = document.getElementById('bell-notification-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerPanel = document.getElementById('drawer-panel');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawerOverlay.classList.add('active');
    drawerPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('active');
    drawerPanel.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (bellBtn) bellBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  renderNotificationsList();
}

function renderNotificationsList() {
  const container = document.getElementById('notifications-container');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = APP_DATA.notifications.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}">
      <div style="font-weight: 800; font-size: 0.92rem; color: var(--text-dark); margin-bottom: 2px;">
        ${isHi ? notif.titleHi : notif.titleEn}
      </div>
      <div style="font-size: 0.82rem; color: var(--text-medium);">
        ${isHi ? notif.descHi : notif.descEn}
      </div>
      <div class="notification-time">${notif.time}</div>
    </div>
  `).join('');
}

// Render Main Content
function renderContent() {
  renderHomeRecentUpdates();
  renderYouTubeTab();
  renderAudioTab();
  renderBooksTab();
}

function renderHomeRecentUpdates() {
  const container = document.getElementById('home-updates-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  const recentItems = [
    { title: isHi ? "🔴 लाइव: सांध्य प्रवचन श्री रमेश बाबा जी" : "🔴 Live: Evening Pravachan by Ramesh Baba Ji", type: isHi ? "लाइव प्रसारण" : "Live Webcast", time: "Active Now" },
    { title: isHi ? "🎵 नया कीर्तन: श्री राधा नाम स्मरण" : "🎵 New Audio: Radha Naama Smaran Kirtan", type: "SoundCloud", time: "2h ago" },
    { title: isHi ? "📚 नवीन अंक: ब्रज रस मासिक पत्रिका" : "📚 New Release: Braj Ras Monthly Magazine", type: isHi ? "पीडीएफ ग्रंथ" : "PDF Book", time: "1d ago" }
  ];

  container.innerHTML = recentItems.map(item => `
    <div class="content-card">
      <div class="card-thumb">
        <span>${item.type.includes('Live') || item.type.includes('प्रसारण') ? '🔴' : item.type.includes('Audio') || item.type.includes('SoundCloud') ? '🎵' : '📚'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span>${item.type}</span> • <span>${item.time}</span>
        </div>
      </div>
      <button class="card-action-btn" onclick="switchTab('${item.type.includes('Live') || item.type.includes('प्रसारण') ? 'youtube' : item.type.includes('Audio') || item.type.includes('SoundCloud') ? 'audio' : 'books'}')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  `).join('');
}

function renderYouTubeTab() {
  const container = document.getElementById('youtube-videos-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = APP_DATA.youtubeVideos.map(video => `
    <div class="content-card" onclick="openVideoModal('${isHi ? video.titleHi : video.titleEn}')">
      <div class="card-thumb" style="background: var(--light-blue);">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div class="card-body">
        <div class="card-title">${isHi ? video.titleHi : video.titleEn}</div>
        <div class="card-meta">
          <span>${video.category}</span> • <span>${video.duration}</span> • <span>${video.views} views</span>
        </div>
      </div>
      ${video.isNew ? `<span class="badge-new">${isHi ? 'नया' : 'NEW'}</span>` : ''}
    </div>
  `).join('');
}

function renderAudioTab() {
  const container = document.getElementById('audio-tracks-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  container.innerHTML = APP_DATA.audioTracks.map(track => `
    <div class="content-card">
      <div class="card-thumb" style="background: var(--ice-blue);">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      <div class="card-body" onclick="playAudioTrack('${track.id}')">
        <div class="card-title">${isHi ? track.titleHi : track.titleEn}</div>
        <div class="card-meta">
          <span>${track.artist}</span> • <span>${track.duration}</span>
        </div>
      </div>
      ${track.isNew ? `<span class="badge-new">${isHi ? 'नया' : 'NEW'}</span>` : ''}
      <button class="card-action-btn" onclick="playAudioTrack('${track.id}')">
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>
  `).join('');
}

function renderBooksTab() {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  const t = TRANSLATIONS[currentLang];

  container.innerHTML = APP_DATA.booksAndMagazines.map(book => `
    <div class="book-card">
      <div class="book-cover">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        <div class="book-cover-title" style="margin-top: 6px;">${(isHi ? book.titleHi : book.titleEn).substring(0, 14)}...</div>
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${isHi ? book.titleHi : book.titleEn} ${book.isNew ? `<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">${isHi ? 'नया' : 'NEW'}</span>` : ''}</div>
          <div class="book-desc">${isHi ? book.subtitleHi : book.subtitleEn}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${book.pages} Pages • ${book.size} PDF</div>
        </div>
        <div class="book-buttons">
          <button class="btn-primary" onclick="openPdfModal('${isHi ? book.titleHi : book.titleEn}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> ${t.readBtn}
          </button>
          <button class="btn-outline" onclick="downloadPdf('${isHi ? book.titleHi : book.titleEn}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> ${t.downloadBtn}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Switch Tab Programmatically
window.switchTab = function(tabName) {
  const targetNav = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (targetNav) targetNav.click();
};

// Play Audio Track
window.playAudioTrack = function(trackId) {
  const track = APP_DATA.audioTracks.find(t => t.id === trackId);
  if (!track) return;

  const isHi = currentLang === 'hi';
  currentPlayingAudio = track;
  isAudioPlaying = true;

  const player = document.getElementById('floating-audio-player');
  const titleEl = document.getElementById('player-track-title');
  const authorEl = document.getElementById('player-track-author');
  const playBtnIcon = document.getElementById('player-play-icon');

  if (player && titleEl && authorEl) {
    titleEl.textContent = isHi ? track.titleHi : track.titleEn;
    authorEl.textContent = track.artist;
    player.classList.add('active');
    if (playBtnIcon) {
      playBtnIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    }
  }
};

window.toggleAudioPlay = function() {
  isAudioPlaying = !isAudioPlaying;
  const playBtnIcon = document.getElementById('player-play-icon');
  if (playBtnIcon) {
    if (isAudioPlaying) {
      playBtnIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    } else {
      playBtnIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }
  }
};

// Modals Handler
window.openVideoModal = function(title) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h3 style="font-size: 1.1rem; font-weight:800; color: var(--primary-blue); margin-bottom: 12px;">${title}</h3>
    <div style="width:100%; height:210px; background:#000; border-radius: var(--radius-md); display:flex; align-items:center; justify-content:center; color:#fff; flex-direction:column; gap:10px;">
      <svg width="48" height="48" fill="red" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      <span style="font-size: 0.9rem;">YouTube Video Player Embed</span>
    </div>
    <div style="margin-top: 14px; text-align:right;">
      <button class="btn-primary" onclick="closeModal()">Close Player</button>
    </div>
  `;
  modal.classList.add('active');
};

window.openPdfModal = function(title) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h3 style="font-size: 1.1rem; font-weight:800; color: var(--primary-blue); margin-bottom: 8px;">${title}</h3>
    <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 14px;">Maan Mandir Official In-App Reader</p>
    <div style="width:100%; height:320px; background: var(--bg-tertiary); border-radius: var(--radius-md); border:1px solid var(--border-blue); display:flex; align-items:center; justify-content:center; color: var(--primary-blue); flex-direction:column; gap:10px; padding:20px; text-align:center;">
      <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      <span style="font-size: 0.92rem; font-weight:700;">Interactive PDF Document Viewer</span>
      <span style="font-size: 0.78rem; color: var(--text-muted);">Loaded from Maan Mandir Server</span>
    </div>
    <div style="margin-top: 14px; display:flex; justify-content:space-between; align-items:center;">
      <button class="btn-outline" onclick="downloadPdf('${title}')">Direct Download</button>
      <button class="btn-primary" onclick="closeModal()">Close Reader</button>
    </div>
  `;
  modal.classList.add('active');
};

window.downloadPdf = function(title) {
  const isHi = currentLang === 'hi';
  alert(`${isHi ? 'राधे राधे! डाउनलोड हो रहा है:' : 'Radhe Radhe! Downloading PDF:'} ${title}`);
};

window.closeModal = function() {
  const modal = document.getElementById('app-modal');
  if (modal) modal.classList.remove('active');
};

// Search Filter Logic
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const isHi = currentLang === 'hi';
    if (!query) {
      renderContent();
      return;
    }

    const filteredAudio = APP_DATA.audioTracks.filter(t => 
      (t.titleEn && t.titleEn.toLowerCase().includes(query)) ||
      (t.titleHi && t.titleHi.toLowerCase().includes(query)) ||
      (t.artist && t.artist.toLowerCase().includes(query))
    );

    const audioContainer = document.getElementById('audio-tracks-list');
    if (audioContainer) {
      audioContainer.innerHTML = filteredAudio.map(track => `
        <div class="content-card" onclick="playAudioTrack('${track.id}')">
          <div class="card-body">
            <div class="card-title">${isHi ? track.titleHi : track.titleEn}</div>
            <div class="card-meta"><span>${track.artist}</span></div>
          </div>
        </div>
      `).join('');
    }
  });
}

// Service Worker Registration for PWA Installation
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered Successfully', reg.scope))
      .catch(err => console.error('Service Worker Registration Failed', err));
  }
}
