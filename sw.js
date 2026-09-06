// Maan Mandir Devotee Mobile Portal - Service Worker (v79)
const CACHE_NAME = 'maanmandir-v79';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=79',
  './app.js?v=79',
  './manifest.json',
  './assets/images/app_icon.jpg?v=79',
  './assets/images/maanini_app_logo.png?v=79',
  './assets/images/hero_banner.jpg?v=79',
  './assets/images/maan_bihari_lal_banner.jpg?v=79',
  './assets/images/gauseva_qr_standee.jpg?v=79',
  './assets/images/gauseva_qr_code.jpg?v=79',
  './assets/images/mataji_gaushala_banner.jpg?v=79',
  './assets/images/idfc_maanmandir_qr_standee.jpg?v=79',
  './assets/images/qr_maanmandir_app_branded.png?v=79',
  './assets/images/qr_maanini_app_branded.png?v=79'
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
