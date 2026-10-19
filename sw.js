
self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  // Always use the network. Do not cache client data or API responses.
  event.respondWith(fetch(event.request));
});
