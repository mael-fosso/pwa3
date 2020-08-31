self.addEventListener("install", e =>{
    console.log("install dcode!");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo.png"]);
        })
    );
});
self.addEventListener("fetch", e => {
    console.log('Interceptinp fetch request for: ${e.request.url}');
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})
