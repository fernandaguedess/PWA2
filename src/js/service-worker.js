var cacheName = 'insighter+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './src/views/cadmaquinas.html',
        './src/views/editmaquinas.html',
        './src/views/home.html',
        './src/views/listamaquinas.html',
        './src/views/login.html',
        './src/views/dashmaquinas.html',
        './src/views/notificacoes.html',
        './src/views/perfil.html',
        './src/views/seguranca.html',
        './src/views/seguranca.html',
        './src/views/Signin.html',
        './src/views/termos.html',
        
        './src/css/ajuda.css',
        './src/css/cadmaquinas.css',
        './src/css/dashmaquinas.css',
        './src/css/editmaquinas.css',
        './src/css/home.css',
        './src/css/listamaquinas.css',
        './src/css/login.css',
        './src/css/NavBar.css',
        './src/css/notificacoes.css',
        './src/css/seguranca.css',
        './src/css/senha.css',
        './src/css/Signin.css',
        './src/css/termos.css',
        './src/css/style.css',


        //Imagens
        './src/assets/background.png',
        './src/assets/logo.png',
        './src/assets/logoEye.png',
        
       
        './src/assets/Icon/64.png',
        './src/assets/Icon/128.png',
        './src/assets/Icon/144.png',
        './src/assets/Icon/152.png',
        './src/assets/Icon/167.png',
        './src/assets/Icon/180.png',
        './src/assets/Icon/196.png',
        './src/assets/Icon/512.png',
        './src/assets/Icon/1024.png'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});