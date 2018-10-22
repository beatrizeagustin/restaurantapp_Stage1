let staticCacheName = 'v1'
// install sw
self.addEventListener('install', event => {
  // wait until promise is finished
  event.waitUntil(
    // handle caching all assets
    caches
      .open(staticCacheName)
      .then(cache => {
        console.log('Service Worker: caching files')
      return cache.addAll([
        '/',
        '/index.html',
        'restaurant.html',
        'css/styles.css',
        'css/responsive.css',
        'js/main.js',
        'imgs/icon.png',
        ]);
    })
  );
});

// activate sw to clean up old cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('wittr-') &&
                 cacheName != staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
/*
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
*/
