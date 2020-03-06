// const cacheName = "app-files-v1";
// const filesToCache = [
//   '/',
//   '/main.js'
// ];

import {precacheAndRoute} from 'workbox-precaching';

self.addEventListener('install', (event)=>{
    console.log('El SW ha sido instalado');
  
    precacheAndRoute(self.__WB_MANIFEST);

    // event.waitUntil(
    //   caches.open(cacheName).then(cache =>{
    //     console.log('Chaché abierta');
        
    //     return cache.addAll(filesToCache);
    //   } )  
    // )
  });

// self.addEventListener('fetch', function(event){
//     event.respondWith(
//         caches.match(event.request).then(
//             function(response){
//                 if (response){
//                     return response;
//                 }
//                 return fetch(event.request);
//         })
//     );
// });

self.addEventListener('activate', function(e){
    console.log('activado');

    //return self.clients.claim;
});

self.addEventListener('message', (e) =>{
    if(e.data.action==='skipWaiting'){
        self.skipWaiting();
    }
})
