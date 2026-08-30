/**
 * MAAN MANDIR MOBILE DEVOTEE PORTAL - APPLICATION LOGIC
 * Dynamic Tabs, Live Stream Detector, Audio Player, PDF Catalog, Updates Drawer, & PWA Registration
 */

// Sample Data Catalog for Maan Mandir Digital Content
const APP_DATA = {
  liveStream: {
    isLive: true,
    title: "🔴 LIVE: Shri Ramesh Baba Ji Maharaj Pravachan & Braj Leela",
    channel: "Maan Mandir Official YouTube Channel",
    viewerCount: "4,820 Devotees Watching",
    youtubeEmbedId: "live_stream_placeholder",
    startedAt: "10 mins ago"
  },
  
  notifications: [
    {
      id: 1,
      type: "live",
      title: "🔴 Live Webcast Started",
      desc: "Shri Ramesh Baba Ji Maharaj Pravachan live from Barsana Dham.",
      time: "10 mins ago",
      unread: true
    },
    {
      id: 2,
      type: "audio",
      title: "🎵 New Audio Released on SoundCloud",
      desc: "Radha Naama Mahima & Daily Braj Kirtan by Maan Mandir Kirtan Mandal.",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 3,
      type: "book",
      title: "📚 New Magazine Issue Uploaded",
      desc: "Braj Ras Monthly Magazine - Current Issue is now available for download.",
      time: "1 day ago",
      unread: true
    },
    {
      id: 4,
      type: "info",
      title: "🌸 Braj Yatra & Seva Update",
      desc: "Registration opens for upcoming Chaurasi Kos Braj Yatra.",
      time: "3 days ago",
      unread: false
    }
  ],

  youtubeVideos: [
    {
      id: "v1",
      title: "Shri Ramesh Baba Ji Maharaj - Evening Pravachan",
      date: "Today",
      duration: "45:20",
      views: "12K",
      isNew: true,
      category: "Pravachan"
    },
    {
      id: "v2",
      title: "Braj Yatra Kirtan & Raas Leela at Barsana",
      date: "Yesterday",
      duration: "32:10",
      views: "24K",
      isNew: true,
      category: "Braj Leela"
    },
    {
      id: "v3",
      title: "Shri Mataji Gaushala Seva & Gauseva Mahima",
      date: "3 days ago",
      duration: "18:45",
      views: "8.5K",
      isNew: false,
      category: "Gauseva"
    },
    {
      id: "v4",
      title: "Divine Bhajans by Maan Mandir Sangeet Mandal",
      date: "5 days ago",
      duration: "55:00",
      views: "42K",
      isNew: false,
      category: "Kirtan"
    }
  ],

  audioTracks: [
    {
      id: "a1",
      title: "Radha Krishna Name Smaran Kirtan",
      artist: "Maan Mandir Kirtan Mandal",
      duration: "28:15",
      isNew: true,
      url: "https://soundcloud.com/maanmandir/radha-kirtan-demo"
    },
    {
      id: "a2",
      title: "Braj Dham Mahima Katha - Part 1",
      artist: "Shri Ramesh Baba Ji Maharaj",
      duration: "42:10",
      isNew: true,
      url: "https://soundcloud.com/maanmandir/braj-dham-katha"
    },
    {
      id: "a3",
      title: "Shri Ji Ki Aarti & Morning Stuti",
      artist: "Maan Mandir Priests",
      duration: "12:30",
      isNew: false,
      url: "https://soundcloud.com/maanmandir/shri-ji-aarti"
    },
    {
      id: "a4",
      title: "Barsana Dhaam Radha Rani Bhajan",
      artist: "Devotee Audio Ensemble",
      duration: "15:40",
      isNew: false,
      url: "https://soundcloud.com/maanmandir/barsana-bhajan"
    }
  ],

  booksAndMagazines: [
    {
      id: "b1",
      title: "Braj Ras Monthly Magazine (Latest Edition)",
      subtitle: "Monthly Spiritual Publication of Maan Mandir Trust",
      author: "Maan Mandir Seva Sansthan",
      pages: 48,
      size: "4.2 MB",
      isNew: true,
      pdfUrl: "https://maanmandir.org/publications/braj-ras-latest.pdf"
    },
    {
      id: "b2",
      title: "Shri Braj 84 Kos Yatra Margadarshika",
      subtitle: "Complete Guide for Braj Dham Parikrama Devotees",
      author: "Shri Ramesh Baba Ji Maharaj",
      pages: 120,
      size: "12.5 MB",
      isNew: true,
      pdfUrl: "https://maanmandir.org/publications/braj-yatra-guide.pdf"
    },
    {
      id: "b3",
      title: "Maan Mandir Gauseva & Gaushala Vrittanta",
      subtitle: "History and Initiatives of Mataji Gaushala Barsana",
      author: "Maan Mandir Trust",
      pages: 36,
      size: "3.1 MB",
      isNew: false,
      pdfUrl: "https://maanmandir.org/publications/gaushala-info.pdf"
    },
    {
      id: "b4",
      title: "Sri Radha Rani Naam Smaran & Stotra",
      subtitle: "Collection of Divine Stotram and Hymns",
      author: "Sansthan Scholars",
      pages: 64,
      size: "5.8 MB",
      isNew: false,
      pdfUrl: "https://maanmandir.org/publications/radha-stotra.pdf"
    }
  ]
};

// Current Audio State
let currentPlayingAudio = null;
let isAudioPlaying = false;

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initNotificationDrawer();
  renderContent();
  initAudioPlayer();
  initSearch();
  registerServiceWorker();
});

// Tab Navigation logic
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

// Devotee Notification Drawer Toggle
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

// Render Notifications inside Drawer
function renderNotificationsList() {
  const container = document.getElementById('notifications-container');
  if (!container) return;

  container.innerHTML = APP_DATA.notifications.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}">
      <div style="font-weight: 700; font-size: 13px; color: var(--text-dark); margin-bottom: 2px;">
        ${notif.title}
      </div>
      <div style="font-size: 12px; color: var(--text-medium);">
        ${notif.desc}
      </div>
      <div class="notification-time">${notif.time}</div>
    </div>
  `).join('');
}

// Render Main Lists
function renderContent() {
  renderHomeRecentUpdates();
  renderYouTubeTab();
  renderAudioTab();
  renderBooksTab();
}

// Render Home Screen Recent Activity Ticker
function renderHomeRecentUpdates() {
  const container = document.getElementById('home-updates-list');
  if (!container) return;

  const recentItems = [
    { title: "🔴 Live: Evening Pravachan by Ramesh Baba Ji", type: "Live Webcast", time: "Active Now" },
    { title: "🎵 New Audio: Radha Naama Smaran Kirtan", type: "SoundCloud", time: "2h ago" },
    { title: "📚 New Release: Braj Ras Monthly Magazine", type: "PDF Book", time: "1d ago" }
  ];

  container.innerHTML = recentItems.map(item => `
    <div class="content-card">
      <div class="card-thumb">
        <span class="card-thumb-icon">${item.type.includes('Live') ? '🔴' : item.type.includes('Audio') ? '🎵' : '📚'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span>${item.type}</span> • <span>${item.time}</span>
        </div>
      </div>
      <button class="card-action-btn" onclick="switchTab('${item.type.includes('Live') ? 'youtube' : item.type.includes('Audio') ? 'audio' : 'books'}')">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  `).join('');
}

// Render YouTube Videos List
function renderYouTubeTab() {
  const container = document.getElementById('youtube-videos-list');
  if (!container) return;

  container.innerHTML = APP_DATA.youtubeVideos.map(video => `
    <div class="content-card" onclick="openVideoModal('${video.title}')">
      <div class="card-thumb" style="background: var(--light-blue);">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div class="card-body">
        <div class="card-title">${video.title}</div>
        <div class="card-meta">
          <span>${video.category}</span> • <span>${video.duration}</span> • <span>${video.views} views</span>
        </div>
      </div>
      ${video.isNew ? '<span class="badge-new">NEW</span>' : ''}
    </div>
  `).join('');
}

// Render Audio Tab (SoundCloud / MP3s)
function renderAudioTab() {
  const container = document.getElementById('audio-tracks-list');
  if (!container) return;

  container.innerHTML = APP_DATA.audioTracks.map(track => `
    <div class="content-card">
      <div class="card-thumb" style="background: var(--ice-blue);">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      <div class="card-body" onclick="playAudioTrack('${track.id}')">
        <div class="card-title">${track.title}</div>
        <div class="card-meta">
          <span>${track.artist}</span> • <span>${track.duration}</span>
        </div>
      </div>
      ${track.isNew ? '<span class="badge-new">NEW</span>' : ''}
      <button class="card-action-btn" onclick="playAudioTrack('${track.id}')">
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>
  `).join('');
}

// Render Books & Magazines Tab
function renderBooksTab() {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  container.innerHTML = APP_DATA.booksAndMagazines.map(book => `
    <div class="book-card">
      <div class="book-cover">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
        <div class="book-cover-title" style="margin-top: 6px;">${book.title.substring(0, 15)}...</div>
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${book.title} ${book.isNew ? '<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">NEW</span>' : ''}</div>
          <div class="book-desc">${book.subtitle}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${book.pages} Pages • ${book.size} PDF</div>
        </div>
        <div class="book-buttons">
          <button class="btn-primary" onclick="openPdfModal('${book.title}', '${book.pdfUrl}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> Read
          </button>
          <button class="btn-outline" onclick="downloadPdf('${book.title}', '${book.pdfUrl}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg> Download
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

// Play Audio Functionality
window.playAudioTrack = function(trackId) {
  const track = APP_DATA.audioTracks.find(t => t.id === trackId);
  if (!track) return;

  currentPlayingAudio = track;
  isAudioPlaying = true;

  const player = document.getElementById('floating-audio-player');
  const titleEl = document.getElementById('player-track-title');
  const authorEl = document.getElementById('player-track-author');
  const playBtnIcon = document.getElementById('player-play-icon');

  if (player && titleEl && authorEl) {
    titleEl.textContent = track.title;
    authorEl.textContent = track.artist;
    player.classList.add('active');
    if (playBtnIcon) {
      playBtnIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`; // pause icon
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

// Modals Handler (Video & PDF Readers)
window.openVideoModal = function(title) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h3 style="font-size: 16px; font-weight:700; color: var(--primary-blue); margin-bottom: 12px;">${title}</h3>
    <div style="width:100%; height:210px; background:#000; border-radius: var(--radius-md); display:flex; align-items:center; justify-content:center; color:#fff; flex-direction:column; gap:10px;">
      <svg width="48" height="48" fill="red" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      <span style="font-size: 13px;">YouTube Video Player Embed</span>
    </div>
    <div style="margin-top: 14px; text-align:right;">
      <button class="btn-primary" onclick="closeModal()">Close Player</button>
    </div>
  `;
  modal.classList.add('active');
};

window.openPdfModal = function(title, url) {
  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h3 style="font-size: 16px; font-weight:700; color: var(--primary-blue); margin-bottom: 8px;">${title}</h3>
    <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">Maan Mandir Official In-App Reader</p>
    <div style="width:100%; height:320px; background: var(--bg-tertiary); border-radius: var(--radius-md); border:1px solid var(--border-blue); display:flex; align-items:center; justify-content:center; color: var(--primary-blue); flex-direction:column; gap:10px; padding:20px; text-align:center;">
      <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      <span style="font-size: 13px; font-weight:600;">Interactive PDF Document Viewer</span>
      <span style="font-size: 11px; color: var(--text-muted);">Loaded from Maan Mandir Server</span>
    </div>
    <div style="margin-top: 14px; display:flex; justify-content:space-between; align-items:center;">
      <button class="btn-outline" onclick="downloadPdf('${title}', '${url}')">Direct Download</button>
      <button class="btn-primary" onclick="closeModal()">Close Reader</button>
    </div>
  `;
  modal.classList.add('active');
};

window.downloadPdf = function(title, url) {
  alert(`Radhe Radhe! Downloading PDF for: ${title}`);
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
    if (!query) {
      renderContent();
      return;
    }
    // Filter audio tracks
    const filteredAudio = APP_DATA.audioTracks.filter(t => t.title.toLowerCase().includes(query) || t.artist.toLowerCase().includes(query));
    const audioContainer = document.getElementById('audio-tracks-list');
    if (audioContainer) {
      audioContainer.innerHTML = filteredAudio.map(track => `
        <div class="content-card" onclick="playAudioTrack('${track.id}')">
          <div class="card-body">
            <div class="card-title">${track.title}</div>
            <div class="card-meta"><span>${track.artist}</span></div>
          </div>
        </div>
      `).join('');
    }
  });
}

// Service Worker Registration for PWA Home Screen Installation
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered Successfully', reg.scope))
      .catch(err => console.error('Service Worker Registration Failed', err));
  }
}
