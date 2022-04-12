const CACHE_NAME = "cryptocademy-v1";
const urlsToCache = ['offline.html'];

addEventListener('install', (event) => {
    event.waitUntil(async function() {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(urlsToCache);
    }());
});
  
// See https://developers.google.com/web/updates/2017/02/navigation-preload#activating_navigation_preload
addEventListener('activate', event => {
    event.waitUntil(async function() {
        // Feature-detect
        if (self.registration.navigationPreload) {
            // Enable navigation preloads!
            await self.registration.navigationPreload.enable();
            console.log("navigationPreload Enabled")
        }
    }());
});
  
addEventListener('fetch', (event) => {
    const { request } = event;

    // Always bypass for range requests, due to browser bugs
    if (request.headers.has('range')) return;
    event.respondWith(async function() {
        // Try to get from the cache:
        const cachedResponse = await caches.match(request);
        if (cachedResponse) return cachedResponse;

        try {
            // See https://developers.google.com/web/updates/2017/02/navigation-preload#using_the_preloaded_response
            const response = await event.preloadResponse;
            if (response) return response;

            // Otherwise, get from the network
            return await fetch(request);
            
        } catch (err) {
            // If this was a navigation, show the offline page:
            if (request.mode === 'navigate') {
                return caches.match('offline.html');
            }
            // Otherwise throw
            throw err;
        }
    }());
});