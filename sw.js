// cache
const staticCache = 'recent-cache';

// things and elements to be cached
const elementsToCache = [
  '/',
  'index.html',
  'restaurant.html',
  'restaurant.html?id=1',
  'restaurant.html?id=2',
  'restaurant.html?id=3',
  'restaurant.html?id=4',
  'restaurant.html?id=5',
  'restaurant.html?id=6',
  'restaurant.html?id=7',
  'restaurant.html?id=8',
  'restaurant.html?id=9',
  'restaurant.html?id=10',
  '/data/restaurants.json',
  '/css/styles.css',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
];


// install event for service worker
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCache).then(function(cache){
      console.log(cache);
      return cache.addAll(elementsToCache);
    })
  );
});



// activate event
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith('recent-') && cacheName != staticCache;
        }).map(function (cacheName){
          return caches.delete(cacheName);
        })
      );
    })
  );
});



// fetch event
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});
