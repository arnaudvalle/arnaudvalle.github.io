const version = "0.1.0";
const cacheName = `arnaudvalle-${version}`;

// Caching homepage and assets.
self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => {
        return cache.addAll([
            `/`,
            `/index.html`,
            `/assets/css/style.css`,
            `/assets/js/scripts.js`,
            `/assets/images/avatar.svg`
        ]).then(() => self.skipWaiting());
    }));
});

// Check in our cache and return the cached version of the assets if we have them.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(cacheName)
          .then(cache => cache.match(event.request, {ignoreSearch: true}))
          .then(response => {
          return response || fetch(event.request);
        })
      );
    
});