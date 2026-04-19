const CACHE = 'tokushin-memo-v1';
const ASSETS = ['/', '/tokushin-memo/', '/tokushin-memo/index.html', '/tokushin-memo/data.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
