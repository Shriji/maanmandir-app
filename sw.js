// Maan Mandir Devotee Mobile Portal - Service Worker (v28)
const CACHE_NAME = 'maanmandir-v28';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=28',
  './app.js?v=28',
  './manifest.json',
  './assets/images/app_icon.jpg',
  './assets/images/hero_banner.jpg',
  './assets/images/shri_murlikaji_banner.jpg',
  './assets/images/shri_murlikaji_avatar.jpg',
  './assets/images/yt/yt-main_banner.jpg',
  './assets/images/yt/yt-main_avatar.jpg',
  './assets/images/yt/yt-ramjilal_banner.jpg',
  './assets/images/yt/yt-ramjilal_avatar.jpg',
  './assets/images/yt/yt-shrijididi_banner.jpg',
  './assets/images/yt/yt-shrijididi_avatar.jpg',
  './assets/images/yt/yt-divyapath_banner.jpg',
  './assets/images/yt/yt-divyapath_avatar.jpg',
  './assets/images/yt/yt-brajyatra_banner.jpg',
  './assets/images/yt/yt-brajyatra_avatar.jpg',
  './assets/images/yt/yt-gaushala_banner.jpg',
  './assets/images/yt/yt-cowvet_banner.jpg',
  './assets/images/yt/yt-cowvet_avatar.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network First Strategy: Always fetch fresh JS/CSS/Images from server first
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match('./index.html');
        });
      })
  );
});
