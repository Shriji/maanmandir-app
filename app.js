/**
 * MAAN MANDIR MOBILE DEVOTEE PORTAL - APPLICATION LOGIC
 * Dynamic Tabs, Live Stream Detector, Audio Player with SoundCloud & Maanini Banners, PDF Catalog, Updates Drawer, Font Resizer (A-/A/A+), Bilingual Switcher (EN/HI), Single Direct Download Link, & Instant Search
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
    tileAudioDesc: "SoundCloud & Maanini",
    tileBooks: "Publications",
    tileBooksDesc: "Books & Magazines",
    tileSeva: "Gauseva & Info",
    tileSevaDesc: "Braj Yatra & Seva",
    latestUpdates: "⚡ Latest Updates for Devotees",
    tabHome: "Home",
    tabLive: "Live",
    tabAudio: "Audio",
    tabBooks: "Publications",
    tabSeva: "Seva",
    subtabBooks: "Books (ग्रंथ)",
    subtabMagazines: "Monthly Magazine (पत्रिका)",
    downloadBtn: "Download / Open PDF",
    notificationsTitle: "Devotee Updates",
    scTitle: "Maan Mandir SoundCloud Channel",
    scDesc: "Listen to official Pravachans, daily Braj Kirtan, and Bhajans by Maan Mandir Sangeet Mandal on SoundCloud.",
    scBtn: "Launch SoundCloud Channel ↗",
    maaniniTitle: "Maanini.app Portal",
    maaniniDesc: "Access the dedicated Maanini.app digital experience directly from your mobile device.",
    maaniniBtn: "Launch Maanini.app Portal ↗"
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
    tileAudioDesc: "साउंडक्लाउड व मानिनी",
    tileBooks: "प्रकाशन",
    tileBooksDesc: "ग्रंथ एवं मासिक पत्रिकाएं",
    tileSeva: "गौसेवा व जानकारी",
    tileSevaDesc: "ब्रज यात्रा व गौशाला",
    latestUpdates: "⚡ भक्तों हेतु नवीनतम समाचार",
    tabHome: "मुख्य",
    tabLive: "लाइव",
    tabAudio: "ऑडियो",
    tabBooks: "प्रकाशन",
    tabSeva: "सेवा",
    subtabBooks: "ग्रंथ व पुस्तकें",
    subtabMagazines: "मासिक पत्रिका (Patrika)",
    downloadBtn: "डाउनलोड / खोलें",
    notificationsTitle: "भक्त अपडेट्स",
    scTitle: "मान मंदिर आधिकारिक साउंडक्लाउड",
    scDesc: "साउंडक्लाउड पर मान मंदिर संगीत मंडल द्वारा नित्य ब्रज संकीर्तन, भजन व बाबा जी के दिव्य प्रवचन सुनें।",
    scBtn: "साउंडक्लाउड चैनल खोलें ↗",
    maaniniTitle: "मानिनी ऐप पोर्टल",
    maaniniDesc: "मानिनी डिजिटल अनुभव का आनंद सीधे अपने मोबाइल में लें।",
    maaniniBtn: "मानिनी पोर्टल खोलें ↗"
  }
};

// Current App State
let currentLang = localStorage.getItem('mm_lang') || 'en';
let fontScaleStep = parseInt(localStorage.getItem('mm_font_step') || '1');
let currentPlayingAudio = null;
let isAudioPlaying = false;
let currentSubTab = 'books'; // 'books' or 'magazines'
let fetchedBooksList = [];
let fetchedMagazinesList = [];

// Sample Data Catalog
const APP_DATA = {
  notifications: [
    { id: 1, titleEn: "🔴 Live Webcast Started", titleHi: "🔴 लाइव सत्संग प्रारंभ", descEn: "Shri Ramesh Baba Ji Maharaj Pravachan live from Barsana Dham.", descHi: "बरसाना धाम से श्री रमेश बाबा जी महाराज का लाइव प्रवचन।", time: "10m ago", unread: true },
    { id: 2, titleEn: "🎵 New Audio Released", titleHi: "🎵 नया संकीर्तन जारी", descEn: "Radha Naama Mahima & Daily Braj Kirtan.", descHi: "राधा नाम महिमा एवं नित्य ब्रज संकीर्तन।", time: "2h ago", unread: true },
    { id: 3, titleEn: "📰 Monthly Magazines & Cover Artworks Synced", titleHi: "📰 मासिक पत्रिका मुख्य पृष्ठ चित्र सिंक हुए", descEn: "All book & magazine covers synced directly from MaanMandir.org.", descHi: "मान मंदिर वेबसाइट से सभी पत्रिका व ग्रंथ आवरण चित्र सिंक हो गए।", time: "1d ago", unread: true }
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
  ]
};

// Official MaanMandir.org Books Catalog with Real Website Covers
const FALLBACK_WEBSITE_BOOKS = [
  { 
    id: "b1", 
    titleEn: "Rasili Braj Yatra - Gujarati", 
    titleHi: "रसीली ब्रज यात्रा - गुजराती", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-gujarati-3/", 
    isNew: true, 
    downloads: "382 Downloads" 
  },
  { 
    id: "b2", 
    titleEn: "Rasili Braj Yatra - English", 
    titleHi: "रसीली ब्रज यात्रा - अंग्रेजी", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/06/Rasili-Braj-Yatra-English-Cover-for-website-1-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/rasili-braj-yatra-english/", 
    isNew: true, 
    downloads: "379 Downloads" 
  },
  { 
    id: "b3", 
    titleEn: "Radha Sudha Nidhi - Short Gutka", 
    titleHi: "श्री राधा सुधा निधि - लघुकथा गुटका", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2025/10/Radha-sudha-5-5x8-5.jpg", 
    pdfUrl: "https://maanmandir.org/download/radha-sudha-nidhi-gutka/", 
    isNew: true, 
    downloads: "2.3K Downloads" 
  },
  { 
    id: "b4", 
    titleEn: "Bhagvatamritam - Part 02", 
    titleHi: "भगवदामृतम् - द्वितीय भाग", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-02-1-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/bhagvatamritam-part-02/", 
    isNew: false, 
    downloads: "10.3K Downloads" 
  },
  { 
    id: "b5", 
    titleEn: "Bhagvatamritam - Part 01", 
    titleHi: "भगवदामृतम् - प्रथम भाग", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/bhagwatam-cover-part-01-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/bhagvatamritam-part-01/", 
    isNew: false, 
    downloads: "10.4K Downloads" 
  },
  { 
    id: "b6", 
    titleEn: "Gahvar Pradeep - Gahvarvan Ke Diptimaan Sant", 
    titleHi: "गह्वर प्रदीप - गह्वरवन के दीप्तिमान संत", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/09/Gahvar-Pradeep-Cover.jpg", 
    pdfUrl: "https://maanmandir.org/download/gahvar-pradeep-gahvarvan-ke-jyotimaan-sant/", 
    isNew: false, 
    downloads: "9.4K Downloads" 
  },
  { 
    id: "b7", 
    titleEn: "Mandir Nirman Se Bhagwat Prapti", 
    titleHi: "मंदिर निर्माण से भगवत प्राप्ति", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Mandir-Nirman-Se-Bhagwat-Prapti-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/mandir-nirman-se-bhagwat-prapti/", 
    isNew: false, 
    downloads: "10.1K Downloads" 
  },
  { 
    id: "b8", 
    titleEn: "Shri Chandra Sakhi Ji Rachit Pad", 
    titleHi: "श्री चंद्रसखी जी रचित पद", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Chandra-Sakhi-Ji-Rachit-Pad-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-chandra-sakhi-ji-rachit-pad/", 
    isNew: false, 
    downloads: "10.5K Downloads" 
  },
  { 
    id: "b9", 
    titleEn: "Shri Radha Ras", 
    titleHi: "श्री राधा रस", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Ras-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-radha-ras/", 
    isNew: false, 
    downloads: "10.8K Downloads" 
  },
  { 
    id: "b10", 
    titleEn: "Shri Radha Sudha Shatak", 
    titleHi: "श्री राधा सुधा शतक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2023/03/Shri-Radha-Sudha-Shatak-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/shri-radha-sudha-shatak/", 
    isNew: false, 
    downloads: "10.4K Downloads" 
  }
];

// Official MaanMandir.org Monthly Magazines Catalog with Real Website Covers & Downloads
const FALLBACK_WEBSITE_MAGAZINES = [
  { 
    id: "m1", 
    titleEn: "Maan Mandir Patrika June 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - जून २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-06-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-june-2026/", 
    isNew: true, 
    downloads: "271 Downloads" 
  },
  { 
    id: "m2", 
    titleEn: "Maan Mandir Patrika May 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - मई २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-05-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-may-2026/", 
    isNew: true, 
    downloads: "235 Downloads" 
  },
  { 
    id: "m3", 
    titleEn: "Maan Mandir Patrika April 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - अप्रैल २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-04-Patrika-frong-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-april-2026/", 
    isNew: true, 
    downloads: "213 Downloads" 
  },
  { 
    id: "m4", 
    titleEn: "Maan Mandir Patrika March 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - मार्च २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/07/2026-03-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-mar-2026/", 
    isNew: false, 
    downloads: "122 Downloads" 
  },
  { 
    id: "m5", 
    titleEn: "Maan Mandir Patrika February 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - फरवरी २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-02-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-feb-2026/", 
    isNew: false, 
    downloads: "2.7K Downloads" 
  },
  { 
    id: "m6", 
    titleEn: "Maan Mandir Patrika January 2026", 
    titleHi: "मान मंदिर मासिक पत्रिका - जनवरी २०२६ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2026-01-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-jan-2026/", 
    isNew: false, 
    downloads: "2.7K Downloads" 
  },
  { 
    id: "m7", 
    titleEn: "Maan Mandir Patrika December 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - दिसंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-12-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-dec-2025/", 
    isNew: false, 
    downloads: "2.6K Downloads" 
  },
  { 
    id: "m8", 
    titleEn: "Maan Mandir Patrika November 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - नवंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-11-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-nov-2025/", 
    isNew: false, 
    downloads: "1.8K Downloads" 
  },
  { 
    id: "m9", 
    titleEn: "Maan Mandir Patrika October 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - अक्टूबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-10-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-oct-2025/", 
    isNew: false, 
    downloads: "1.8K Downloads" 
  },
  { 
    id: "m10", 
    titleEn: "Maan Mandir Patrika September 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - सितंबर २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2026/02/2025-09-Patrika-front-page-pdf.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-sep-2025/", 
    isNew: false, 
    downloads: "1.7K Downloads" 
  },
  { 
    id: "m11", 
    titleEn: "Maan Mandir Patrika August 2025", 
    titleHi: "मान मंदिर मासिक पत्रिका - अगस्त २०२५ अंक", 
    coverImg: "https://maanmandir.org/wp-content/uploads/2025/08/2025-08-Patrika-front-page.jpg", 
    pdfUrl: "https://maanmandir.org/download/patrika-aug-2025/", 
    isNew: false, 
    downloads: "4.8K Downloads" 
  }
];

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initFontResizer();
  initNavigation();
  initNotificationDrawer();
  renderContent();
  fetchLiveWebsiteBooks();
  fetchLiveWebsiteMagazines();
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

  const enBtn = document.getElementById('btn-lang-en');
  const hiBtn = document.getElementById('btn-lang-hi');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (hiBtn) hiBtn.classList.toggle('active', lang === 'hi');

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
  setElementText('txt-tile-seva', t.tileSeva);
  setElementText('txt-tile-seva-desc', t.tileSevaDesc);
  setElementText('txt-latest-updates', t.latestUpdates);
  setElementText('txt-tab-home', t.tabHome);
  setElementText('txt-tab-live', t.tabLive);
  setElementText('txt-tab-audio', t.tabAudio);
  setElementText('txt-tab-books', t.tabBooks);
  setElementText('txt-tab-seva', t.tabSeva);
  setElementText('txt-subtab-books', t.subtabBooks);
  setElementText('txt-subtab-magazines', t.subtabMagazines);
  setElementText('txt-notifications-title', t.notificationsTitle);
  
  // SoundCloud & Maanini Banner Text
  setElementText('txt-sc-title', t.scTitle);
  setElementText('txt-sc-desc', t.scDesc);
  setElementText('txt-sc-btn', t.scBtn);
  setElementText('txt-maanini-title', t.maaniniTitle);
  setElementText('txt-maanini-desc', t.maaniniDesc);
  setElementText('txt-maanini-btn', t.maaniniBtn);

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  renderContent();
  renderNotificationsList();
};

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// Fetch Live Books with Real WordPress Titles & Cover Artworks (Category 208)
function fetchLiveWebsiteBooks() {
  fetchedBooksList = FALLBACK_WEBSITE_BOOKS; // Start with verified catalog immediately

  fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=208&per_page=50')
    .then(res => res.json())
    .then(posts => {
      if (posts && posts.length > 0) {
        const parsedBooks = [];
        posts.forEach((post, idx) => {
          let cleanTitle = post.title && post.title.rendered 
            ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim()
            : 'Maan Mandir Book';

          let coverImgUrl = '';
          let pdfDownloadUrl = '';
          let downloadCount = 'Synced';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            
            const imgEl = doc.querySelector('img');
            if (imgEl) coverImgUrl = imgEl.getAttribute('src');

            const linkEl = doc.querySelector('a.dlm-download-link');
            if (linkEl) pdfDownloadUrl = linkEl.getAttribute('href');

            const countEl = doc.querySelector('.dlm-download-count');
            if (countEl) downloadCount = countEl.textContent.trim();
          }

          if (cleanTitle && pdfDownloadUrl) {
            parsedBooks.push({
              id: `wp-post-${post.id}`,
              titleEn: cleanTitle,
              titleHi: cleanTitle,
              coverImg: coverImgUrl || FALLBACK_WEBSITE_BOOKS[idx % FALLBACK_WEBSITE_BOOKS.length].coverImg,
              pdfUrl: pdfDownloadUrl,
              isNew: idx < 3,
              downloads: downloadCount
            });
          }
        });

        if (parsedBooks.length > 0) {
          fetchedBooksList = parsedBooks;
          const searchInput = document.getElementById('global-search-input');
          const query = searchInput ? searchInput.value.trim() : '';
          if (currentSubTab === 'books') renderBooksTab(query);
        }
      }
    })
    .catch(err => {
      console.log('Website Live Fetch Sync (Books): Using pre-cached catalog', err);
    });
}

// Fetch Live Magazine Posts with Real WordPress Titles & Front-Page Cover Artworks (Category 175)
function fetchLiveWebsiteMagazines() {
  fetchedMagazinesList = FALLBACK_WEBSITE_MAGAZINES; // Start with verified catalog immediately

  fetch('https://maanmandir.org/wp-json/wp/v2/posts?categories=175&per_page=50')
    .then(res => res.json())
    .then(posts => {
      if (posts && posts.length > 0) {
        const parsedMagazines = [];
        posts.forEach((post, idx) => {
          let cleanTitle = post.title && post.title.rendered 
            ? post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim()
            : 'Maan Mandir Patrika';

          let coverImgUrl = '';
          let pdfDownloadUrl = '';
          let downloadCount = 'Synced';

          if (post.content && post.content.rendered) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.content.rendered, 'text/html');
            
            const imgEl = doc.querySelector('img');
            if (imgEl) coverImgUrl = imgEl.getAttribute('src');

            const linkEl = doc.querySelector('a.dlm-download-link');
            if (linkEl) pdfDownloadUrl = linkEl.getAttribute('href');

            const countEl = doc.querySelector('.dlm-download-count');
            if (countEl) downloadCount = countEl.textContent.trim();
          }

          if (cleanTitle && pdfDownloadUrl) {
            parsedMagazines.push({
              id: `wp-mag-${post.id}`,
              titleEn: cleanTitle,
              titleHi: cleanTitle.replace('Maan Mandir Patrika', 'मान मंदिर मासिक पत्रिका'),
              coverImg: coverImgUrl || FALLBACK_WEBSITE_MAGAZINES[idx % FALLBACK_WEBSITE_MAGAZINES.length].coverImg,
              pdfUrl: pdfDownloadUrl,
              isNew: idx < 3,
              downloads: downloadCount
            });
          }
        });

        if (parsedMagazines.length > 0) {
          fetchedMagazinesList = parsedMagazines;
          const searchInput = document.getElementById('global-search-input');
          const query = searchInput ? searchInput.value.trim() : '';
          if (currentSubTab === 'magazines') renderMagazinesTab(query);
        }
      }
    })
    .catch(err => {
      console.log('Website Live Fetch Sync (Magazines): Using pre-cached magazine catalog', err);
    });
}

// Switch Sub Tab (Books vs Magazines)
window.switchPublicationSubTab = function(subTab) {
  currentSubTab = subTab;

  const booksBtn = document.getElementById('btn-subtab-books');
  const magBtn = document.getElementById('btn-subtab-magazines');

  if (booksBtn) booksBtn.classList.toggle('active', subTab === 'books');
  if (magBtn) magBtn.classList.toggle('active', subTab === 'magazines');

  const searchInput = document.getElementById('global-search-input');
  const query = searchInput ? searchInput.value.trim() : '';

  if (subTab === 'books') renderBooksTab(query);
  else renderMagazinesTab(query);
};

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
  const searchInput = document.getElementById('global-search-input');
  const query = searchInput ? searchInput.value.trim() : '';

  if (currentSubTab === 'books') renderBooksTab(query);
  else renderMagazinesTab(query);
}

function renderHomeRecentUpdates() {
  const container = document.getElementById('home-updates-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  const recentItems = [
    { title: isHi ? "🔴 लाइव: सांध्य प्रवचन श्री रमेश बाबा जी" : "🔴 Live: Evening Pravachan by Ramesh Baba Ji", type: isHi ? "लाइव प्रसारण" : "Live Webcast", time: "Active Now" },
    { title: isHi ? "🎵 नया कीर्तन: श्री राधा नाम स्मरण" : "🎵 New Audio: Radha Naama Smaran Kirtan", type: "SoundCloud", time: "2h ago" },
    { title: isHi ? "📚 मासिक पत्रिका व ग्रंथ सिंक" : "📚 Official Books & Monthly Magazines Synced", type: isHi ? "पीडीएफ प्रकाशन" : "PDF Magazine", time: "Live Sync" }
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

// Render Books Section with Single Direct Download / Open Button & Search Filter
function renderBooksTab(searchQuery = '') {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  let booksToRender = fetchedBooksList.length > 0 ? fetchedBooksList : FALLBACK_WEBSITE_BOOKS;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    booksToRender = booksToRender.filter(b => 
      (b.titleEn && b.titleEn.toLowerCase().includes(q)) ||
      (b.titleHi && b.titleHi.toLowerCase().includes(q))
    );
  }

  if (booksToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई पुस्तक नहीं मिली' : 'No books found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य शब्द का प्रयोग करें' : 'Try searching for another title or author'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = booksToRender.map(book => `
    <div class="book-card">
      <div class="book-cover" style="${book.coverImg ? `background: url('${book.coverImg}') center/cover no-repeat;` : ''}">
        ${!book.coverImg ? `
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <div class="book-cover-title" style="margin-top: 6px;">${(isHi ? book.titleHi : book.titleEn).substring(0, 14)}...</div>
        ` : ''}
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${isHi ? book.titleHi : book.titleEn} ${book.isNew ? `<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">${isHi ? 'नया' : 'NEW'}</span>` : ''}</div>
          <div class="book-desc">${isHi ? 'मान मंदिर सेवा संस्थान ट्रस्ट' : 'Maan Mandir Seva Sansthan Trust'}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">PDF Document • ${book.downloads || 'Direct Download'}</div>
        </div>
        <div class="book-buttons" style="margin-top:8px;">
          <a href="${book.pdfUrl}" target="_blank" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; width:100%; justify-content:center;">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            ${isHi ? 'डाउनलोड / PDF खोलें' : 'Download / Open PDF'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Monthly Magazine Section with Single Direct Download / Open Button & Search Filter
function renderMagazinesTab(searchQuery = '') {
  const container = document.getElementById('books-catalog-list');
  if (!container) return;

  const isHi = currentLang === 'hi';
  let magsToRender = fetchedMagazinesList.length > 0 ? fetchedMagazinesList : FALLBACK_WEBSITE_MAGAZINES;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    magsToRender = magsToRender.filter(m => 
      (m.titleEn && m.titleEn.toLowerCase().includes(q)) ||
      (m.titleHi && m.titleHi.toLowerCase().includes(q))
    );
  }

  if (magsToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:35px 15px; color:var(--text-muted);">
        <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
        <p style="font-size:1.05rem; font-weight:700;">${isHi ? 'कोई मासिक पत्रिका नहीं मिली' : 'No magazine issues found matching search'}</p>
        <p style="font-size:0.82rem; margin-top:4px;">${isHi ? 'कृपया अन्य वर्ष या माह खोजें' : 'Try searching for another month or year'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = magsToRender.map(mag => `
    <div class="book-card">
      <div class="book-cover" style="${mag.coverImg ? `background: url('${mag.coverImg}') center/cover no-repeat;` : 'background: linear-gradient(135deg, var(--primary-blue), #0f52ba);'}">
        ${!mag.coverImg ? `
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
          <div class="book-cover-title" style="margin-top: 6px;">Patrika</div>
        ` : ''}
      </div>
      <div class="book-info">
        <div>
          <div class="book-title">${isHi ? mag.titleHi : mag.titleEn} ${mag.isNew ? `<span class="badge-new" style="position:static; display:inline-block; vertical-align:middle; margin-left:6px;">${isHi ? 'नया' : 'NEW'}</span>` : ''}</div>
          <div class="book-desc">${isHi ? 'मान मंदिर मासिक पत्रिका • बरसाना' : 'Maan Mandir Monthly Magazine • Barsana'}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">PDF Edition • ${mag.downloads || 'Direct Download'}</div>
        </div>
        <div class="book-buttons" style="margin-top:8px;">
          <a href="${mag.pdfUrl}" target="_blank" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; width:100%; justify-content:center;">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            ${isHi ? 'डाउनलोड / PDF खोलें' : 'Download / Open PDF'}
          </a>
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

window.closeModal = function() {
  const modal = document.getElementById('app-modal');
  if (modal) modal.classList.remove('active');
};

// Global Instant Perform Search Function
window.performSearch = function() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  const query = searchInput.value.trim();

  // Only switch active tab pane if user is NOT already on Publications tab
  const booksPane = document.getElementById('tab-books');
  if (booksPane && !booksPane.classList.contains('active')) {
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    navItems.forEach(nav => nav.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const publicationsNav = document.querySelector('.nav-item[data-tab="books"]');
    if (publicationsNav) publicationsNav.classList.add('active');
    booksPane.classList.add('active');
  }

  if (currentSubTab === 'books') {
    renderBooksTab(query);
  } else {
    renderMagazinesTab(query);
  }
};

// Instant Realtime Search Filter Logic
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  // Bind to input, keyup, change, search, paste events for instant responsiveness
  ['input', 'keyup', 'change', 'search', 'paste'].forEach(evt => {
    searchInput.addEventListener(evt, window.performSearch);
  });

  // Handle Enter key on mobile soft keyboards
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      window.performSearch();
      searchInput.blur();
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
