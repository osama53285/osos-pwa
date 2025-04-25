const CACHE_NAME = 'osos-cache-v1';
const ASSETS = ['/', 'index.html', 'manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => cache.addAll(ASSETS))
  );
});
