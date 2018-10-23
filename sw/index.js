// let staticCacheName = 'v1'
// install sw
self.addEventListener('install', event => {
  // wait until promise is finished
  event.waitUntil(
    // handle caching all assets
    caches.open('v1').then(cache => {
        console.log('Service Worker: caching files')
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'css/responsive.css',
        'css/styles.css',
        'js/dbhelper.js',
        'js/main.js',
        'restaurant_info.js',
        'data/restaurans.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
        ]);
    })
  );
});
