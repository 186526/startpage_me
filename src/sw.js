importScripts(
  'https://cdn.jsdelivr.net/npm/workbox-cdn@4.2.0/workbox/workbox-sw.js',
);
console.log('service worker 注册成功');
self.addEventListener('install', (e) => {
  console.log('Service worker 安装成功');
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  console.log('Service worker 激活||应用更新 成功');
});
if (workbox) {
  workbox.core.setCacheNameDetails({
    prefix: 'startpage_me',
    suffix: '0.0.4 sw-stable',
    precache: 'precache',
    runtime: 'runtime',
  });
  workbox.routing.registerRoute(
    /\/web_modules/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60 * 4,
        }),
      ],
      cacheName: 'src',
    }),
  );
  workbox.routing.registerRoute(
    /\/_dist_/,
    new workbox.strategies.StaleWhileRevalidate({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60 * 4,
        }),
      ],
      cacheName: 'src',
    }),
  );
  workbox.routing.registerRoute(
    /\/css/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60 * 4,
        }),
      ],
      cacheName: 'src',
    }),
  );
  workbox.routing.registerRoute(
    /\/js/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60 * 4,
        }),
      ],
      cacheName: 'src',
    }),
  );
  workbox.routing.registerRoute(
    /\/pic/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
      cacheName: 'assets',
    }),
  );
  workbox.routing.registerRoute(
    /\/icons/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
      cacheName: 'assets',
    }),
  );
  workbox.routing.registerRoute(
    /\/assets/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 24 * 60 * 60,
        }),
      ],
      cacheName: 'assets',
    }),
  );
  workbox.routing.registerRoute(
    '/avatar',
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
      ],
      cacheName: 'startpage_me',
    }),
  );
  workbox.routing.registerRoute(
    '/manifest.json',
    new workbox.strategies.StaleWhileRevalidate({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
      ],
      cacheName: 'startpage_me',
    }),
  );
  workbox.routing.registerRoute(
    '/',
    new workbox.strategies.StaleWhileRevalidate({
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24,
        }),
      ],
      cacheName: 'startpage_me',
    }),
  );
}
