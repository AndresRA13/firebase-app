if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BQMnevbP.js",revision:null},{url:"assets/index-D8C3JD01.css",revision:null},{url:"index.html",revision:"84b66c4b4d740c6f5d2499f54839d0d6"},{url:"registerSW.js",revision:"127d86c84265c0bb35ef1410524443c7"},{url:"pwa-64x64.png",revision:"48ee82c337c09d84ed75389d817f7b54"},{url:"pwa-192x192.png",revision:"48ee82c337c09d84ed75389d817f7b54"},{url:"pwa-512x512.png",revision:"48ee82c337c09d84ed75389d817f7b54"},{url:"manifest.webmanifest",revision:"81375eeb94bf59881d2f959004ebbcc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
