/* 혹한기 요새: 30일의 생존 서비스워커
 * - 내비게이션: network-first, 오프라인이면 캐시된 index.html
 * - 같은 출처 정적 자산: stale-while-revalidate (NETWORK_FIRST_DESTINATIONS에 든 종류는 network-first)
 * - 프리캐시는 셸(index.html·manifest·아이콘)만. 그 외 자산은 처음 사용될 때 캐시된다.
 * 배포 내용이 바뀌어 캐시를 강제로 비워야 하면 CACHE_VERSION을 올린다.
 */
const CACHE_VERSION = 'v1';
const CACHE_NAME = `frost-fortress-30days-${CACHE_VERSION}`;
const CACHE_PREFIX = 'frost-fortress-30days-';
// 해시 없는 파일명으로 배포되는 스크립트/스타일은 버전이 섞이지 않도록 network-first로 처리한다.
const NETWORK_FIRST_DESTINATIONS = [];
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function putInCache(request, response) {
  if (!response || !response.ok || response.type === 'opaque') return;
  const copy = response.clone();
  caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    putInCache(request, response);
    return response;
  } catch (err) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    throw err;
  }
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    putInCache(request, response);
    return response;
  } catch (err) {
    const cache = await caches.open(CACHE_NAME);
    const cached = (await cache.match(request, { ignoreSearch: true })) || (await cache.match('./index.html'));
    if (cached) return cached;
    throw err;
  }
}

async function staleWhileRevalidate(event) {
  const { request } = event;
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request).then((response) => {
    putInCache(request, response);
    return response;
  });
  if (cached) {
    event.waitUntil(network.catch(() => {}));
    return cached;
  }
  return network;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // 범위(scope) 밖 요청은 건드리지 않는다.
  if (!url.href.startsWith(self.registration.scope)) return;
  // Range 요청(오디오/비디오 스트리밍)은 브라우저 기본 처리에 맡긴다.
  if (request.headers.has('range')) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }
  if (NETWORK_FIRST_DESTINATIONS.includes(request.destination)) {
    event.respondWith(networkFirst(request));
    return;
  }
  event.respondWith(staleWhileRevalidate(event));
});
