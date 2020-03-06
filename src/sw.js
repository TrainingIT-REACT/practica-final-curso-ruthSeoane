self.addEventListener('install', (event) => {
    console.log("El service worker ha sido instalado :)");
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener('activate', function(e){
    console.log('activado');

    return self.clients.claim;
})