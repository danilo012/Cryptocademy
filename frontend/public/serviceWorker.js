const CACHE_NAME = "cryptocademy-v1";
const urlsToCache = 'offline.html';

const self = this;

// install sw
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('opened cache')

            // return cache.addAll(urlsToCache);
            return cache.add(new Request(urlsToCache, { cache: "reload" }))
        })
    )
})

// self.addEventListener("install", event => {
//     this.skipWaiting();
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//         .then(cache => {
//             return fetch('/offline')
//             .then(response => cache.put('/offline', new Response(response.body)));
//         })
//     )
// });

// listen  for requests
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
        .then(() => {
            return fetch(e.request)
            .catch(() => caches.match('offline.html'))
        })

    )
})
// activate the sw
self.addEventListener('activate', (e) => {
    
    if ("navigationPreload" in self.registration) {
        self.registration.navigationPreload.enable()
        .then(() => {
            console.log("navigationPreload is enabled")
        });
    }  
    // Tell the active service worker to take control of the page immediately.
    self.clients.claim();
    
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    e.waitUntil(
        caches.keys()
        .then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})
