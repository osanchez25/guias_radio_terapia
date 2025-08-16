const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = 'offline.html';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'styles.css',
  'font.js',
  'analytics.js',
  'back.js',
  'offline.html',
  'cabeza_cuello.html',
  'cancer_gastrico.html',
  'cancer_pelvis.html',
  'cancer_prostata.html',
  'mama_torax.html',
  'proteccion_radiologica.html',
  'tumores_snc.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request).then(response => response || caches.match(OFFLINE_URL))
      )
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  }
});
