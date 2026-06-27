const CACHE_NAME = 'trustwallet-support-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/images/hero.avif',
  '/images/footerLogo.svg',
  '/images/support1.svg',
  '/images/support2.svg',
  '/images/support3.svg',
  '/images/support4.svg',
  '/images/support5.svg',
  '/images/support6.svg',
  '/images/trending1.svg',
  '/images/trending2.svg',
  '/images/trending3.svg',
  '/images/trending4.svg',
  '/images/trending5.svg',
  '/images/trending6.svg',
  '/images/twt-utility.svg',
  '/_next/static/media/11bf447c34a2180c-s.p.ttf',
  '/_next/static/media/e21d6bf08459d7e0-s.p.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        return networkResponse;
      });
    })
  );
});
