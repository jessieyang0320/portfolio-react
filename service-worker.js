"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio-react/index.html","c9d6cc5f6259d28f2c39f6df315c083a"],["/portfolio-react/static/css/main.98c4bd2c.css","45348edada5919dc1ea1b5914fc3202d"],["/portfolio-react/static/js/main.54e8f3c8.js","97d7195f6c9eabad51c209da3c856353"],["/portfolio-react/static/media/1.c6774363.jpg","c67743635d693957ae0200748013e309"],["/portfolio-react/static/media/10.cc6cd1e0.jpg","cc6cd1e0464dda8ee32e2dddf4ed4147"],["/portfolio-react/static/media/11.488c1ffe.jpg","488c1ffe5d3f62442b52d6f1c1c62cb1"],["/portfolio-react/static/media/12.2a25034c.jpg","2a25034cbe1aa768d1c892214950954c"],["/portfolio-react/static/media/13.49529a56.jpg","49529a568ed5616e97b1d885043a73bc"],["/portfolio-react/static/media/14.22beef36.jpg","22beef36f8392cd6994846f71e89f3ae"],["/portfolio-react/static/media/15.9a854e70.jpg","9a854e700bae18a9809052a0a57bc1a9"],["/portfolio-react/static/media/16.ad17d716.jpg","ad17d71604dcfa3d47a83fcde8f510b7"],["/portfolio-react/static/media/17.2fc40f47.jpg","2fc40f478c4e835a6f5b67821164a566"],["/portfolio-react/static/media/18.f2557f98.jpg","f2557f98e5c469057cbab1686b7f3ca5"],["/portfolio-react/static/media/2.22beef36.jpg","22beef36f8392cd6994846f71e89f3ae"],["/portfolio-react/static/media/3.5cd78f9b.jpg","5cd78f9ba59dfd1b6e1ef6f760cb17b8"],["/portfolio-react/static/media/4.0d44da2c.jpg","0d44da2cf27ee0999dad0149b9e705d2"],["/portfolio-react/static/media/5.8a9120db.jpg","8a9120db1ea1e6daafaadb5bfe6ba78a"],["/portfolio-react/static/media/6.e8ead398.jpg","e8ead398dc1ae654f9266f15a966c268"],["/portfolio-react/static/media/7.e8bbcab2.jpg","e8bbcab27a67cd2550a4dd7290447e6f"],["/portfolio-react/static/media/8.27d24a30.jpg","27d24a30396f8bb430787b6f5da0d42d"],["/portfolio-react/static/media/9.d7397f16.jpg","d7397f16202c7b129d8ecf28a373933b"],["/portfolio-react/static/media/city6 10.56.21 PM.6b5921fa.jpg","6b5921faba16ac4437e1f693ada935ab"],["/portfolio-react/static/media/data.4ace1a85.png","4ace1a85b31ed7139b4100e732a74628"],["/portfolio-react/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/portfolio-react/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/portfolio-react/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/portfolio-react/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/portfolio-react/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/portfolio-react/static/media/github-finder.754aee4c.jpg","754aee4c13711c3574b68864753324e9"],["/portfolio-react/static/media/github-finder.98b2d3e1.png","98b2d3e161c9b76b547fa78864e9b657"],["/portfolio-react/static/media/greenhouse1.b54a9432.JPG","b54a9432839825ff70a6d1241f13983e"],["/portfolio-react/static/media/greenhouse2.9c2c6dda.JPG","9c2c6dda89ce2f6b4ca4aec13f232c13"],["/portfolio-react/static/media/greenhouse3.2b50f818.JPG","2b50f81817484c326871f15c499db292"],["/portfolio-react/static/media/greenhouse4.911dd166.JPG","911dd166843847fe9428bf936971af9e"],["/portfolio-react/static/media/header-bkg.e36ff639.png","e36ff639b880a72ca34fcd602de8dc2c"],["/portfolio-react/static/media/home.a25ef3fc.jpg","a25ef3fc0ac1f4de7d06533c10f4ccde"],["/portfolio-react/static/media/homebanner.0df5f1c3.jpg","0df5f1c348748b47c5ba81c3984089ca"],["/portfolio-react/static/media/image-gallery.824c8dfd.png","824c8dfd8cb307ea1c239aad10335355"],["/portfolio-react/static/media/js.1bc6c5ce.png","1bc6c5ced557874d55f810b48e5bab64"],["/portfolio-react/static/media/leaf.836404ae.png","836404aefb8e56085052388f852b45f6"],["/portfolio-react/static/media/leaf2.645c2a2f.png","645c2a2f8077c08f83aa7d3826ec6d72"],["/portfolio-react/static/media/music-player.34fbbb77.png","34fbbb77569340ce174ef2f769a2c8b5"],["/portfolio-react/static/media/news-republic.106cd889.jpg","106cd8894974aacc56c5fa0ab0762119"],["/portfolio-react/static/media/news-republic.80650891.png","806508910ba464568ca75d8956fe03a2"],["/portfolio-react/static/media/profile-kgh.3d1c6d50.png","3d1c6d5061f77cc0b39d62c461b21350"],["/portfolio-react/static/media/react-gallery.3b6b9f27.jpg","3b6b9f276e33971b3b3195122b2080d7"],["/portfolio-react/static/media/react-music-player.7e68d7dc.jpg","7e68d7dcc5811c72852a90bd0a06da5c"],["/portfolio-react/static/media/report-template.1d7a815c.jpg","1d7a815c304c4e0a794ddf9b40ad16c0"],["/portfolio-react/static/media/responsive-web.79e43349.jpg","79e433496875c27fe434d05ef302fde3"],["/portfolio-react/static/media/responsive-website.0b687257.png","0b6872575d9c6b114ec6fb6533706706"],["/portfolio-react/static/media/tetris.b8904b87.jpg","b8904b87a555b0a85414f78a91cf05a8"],["/portfolio-react/static/media/travelMap.f96a280d.png","f96a280de291967e9b064f3c6a5c0965"],["/portfolio-react/static/media/v-hab.18b86c28.png","18b86c2892c3511fe159fbbfb8cbf4c1"],["/portfolio-react/static/media/v-hab.cb4d2f5d.jpg","cb4d2f5de9509ea9fbacfdda5c425415"],["/portfolio-react/static/media/vanilla-js.bf86192f.jpg","bf86192f15766fb3f8751b3978995ddc"],["/portfolio-react/static/media/websocket-tetris.cf86e556.png","cf86e556443b6cc72747a20372bf18d7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/portfolio-react/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});