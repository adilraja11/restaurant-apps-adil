if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const o=e=>n(e,d),r={module:{uri:d},exports:f,require:o};i[d]=Promise.all(s.map((e=>r[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-927b2f12"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"5d982326781d6f8ea98b.jpg",revision:null},{url:"app.bundle.js",revision:"2b2f580c09264fe564f9362881098c1c"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"4af4a89fc8cb03cefca8c57c5856d690"},{url:"favicon.png",revision:"b21e9fe3daed52c9fd34d94f82bb7ec7"},{url:"icons/icon-128x128.png",revision:"b21e9fe3daed52c9fd34d94f82bb7ec7"},{url:"icons/icon-256x256.png",revision:"a8df84a1824527294c80af0fb2320b43"},{url:"icons/icon-32x32.png",revision:"872b9f6dd74243ab7dd7b594df272f7c"},{url:"icons/icon-512x512.png",revision:"00957f2d5d5736c8fe1afcd2c742c756"},{url:"icons/icon-64x64.png",revision:"792130367955aa2459f515c7b3b1d935"},{url:"index.html",revision:"596d0823274c31f926f82045e748569d"},{url:"sw.bundle.js",revision:"d87cd8203d00139a79b0cfe4719c2131"},{url:"sw.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"Foodify-V1",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=generateSW.bundle.js.map
