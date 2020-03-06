import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Importamos la librería de polyfills
import '@babel/polyfill';
import 'whatwg-fetch';

ReactDOM.render(
  <main>
    <App />
  </main>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const cacheName = "app-files-v1";

const filesToCache = [
  '/'
]

self.addEventListener('install', (event)=>{
  console.log('El SW ha sido instalado');

  event.waitUntil(
    caches.open(cacheName).then(cache =>{
      console.log('Chaché abierta');
      return cacheName.addAll(filesToCache);
    } )  
  )
});


self.addEventListener('fetch', function(event){
  event.respondWith(
    acches.match(event.request).then(
      function(response){
        if (response){
          console.log("cache");
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});


self.addEventListener('activate', function(e){
  console.log('activado');
});

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('El service worker SW se ha registrado correctamente: ', registration.scope);
    }, (err) => {
      console.log('El registro del SW ha fallado: ', err);
    });
  });
}