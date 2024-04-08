(()=>{function b(i){return+i+""===i}var c=class{tabs;runtime;constructor(e,n){this.tabs=e,this.runtime=n}static initialize(e,n=chrome.runtime){let t=new c(e,n);return t.initialize(),t}initialize(){this.runtime.onConnect.addListener(e=>{if(b(e.name)){this.registerDevToolsForTab(e);return}if(!e.sender||!e.sender.tab||e.sender.tab.id===void 0||e.sender.frameId===void 0){console.warn("Received a connection from an unknown sender",e);return}this.registerContentScriptForTab(e)})}ensureTabExists(e){this.tabs[e]??={devtools:null,contentScripts:{}}}registerDevToolsForTab(e){let n=parseInt(e.name,10);this.ensureTabExists(n);let t=this.tabs[n];t.devtools=e,t.devtools.onDisconnect.addListener(()=>{t.devtools=null;for(let s of Object.values(t.contentScripts))s.enabled=!1});for(let[s,o]of Object.entries(t.contentScripts))o.backendReady.then(()=>{if(o.port===null)throw new Error("Expected Content to have already connected before the backendReady event on the same page.");this.doublePipe(t.devtools,o),t.devtools.postMessage({topic:"contentScriptConnected",args:[parseInt(s,10),o.port.name,o.port.sender.url]})})}registerContentScriptForTab(e){let n=e.sender,t=n.frameId,s=n.tab.id;this.ensureTabExists(s);let o=this.tabs[s];o.contentScripts[t]===void 0&&(o.contentScripts[t]={port:null,enabled:!1,frameId:-1});let r=o.contentScripts[t];r.port=e,r.frameId=t,r.enabled=r.enabled??!1,e.onDisconnect.addListener(()=>{delete o.contentScripts[t],Object.keys(o.contentScripts).length===0&&delete this.tabs[s]}),r.backendReady=new Promise(a=>{let d=u=>{u.topic==="backendReady"&&(a(),o.devtools&&(this.doublePipe(o.devtools,r),o.devtools.postMessage({topic:"contentScriptConnected",args:[t,r.port.name,r.port.sender.url]})),e.onMessage.removeListener(d))};e.onMessage.addListener(d),e.onDisconnect.addListener(()=>{e.onMessage.removeListener(d)})})}doublePipe(e,n){if(e===null)throw new Error("DevTools port is equal to null");let t=n.port;if(t===null)throw new Error("Content script port is equal to null");console.log("Creating two-way communication channel",Date.now(),this.tabs);let s=a=>{if(a.topic==="enableFrameConnection"){if(a.args.length!==2)throw new Error("Expected two arguments for enableFrameConnection");let[d,u]=a.args;if(d===n.frameId){let l=this.tabs[u];if(l===void 0)throw new Error(`Expected tab to be registered with tabId ${u}`);for(let m of Object.keys(l.contentScripts))l.contentScripts[m].enabled=!1;n.enabled=!0,e.postMessage({topic:"frameConnected",args:[n.frameId]})}}!n.enabled||t.postMessage(a)};e.onMessage.addListener(s);let o=a=>{!n.enabled||e.postMessage(a)};t.onMessage.addListener(o);let r=()=>{e.onMessage.removeListener(s),e.postMessage({topic:"contentScriptDisconnected",args:[n.frameId,n.port.name]}),t.onMessage.removeListener(o)};t.onDisconnect.addListener(()=>r())}};function p(i){return i.isAngular?!i.isIvy||!i.isSupportedAngularVersion?"unsupported.html":i.isDebugMode?"supported.html":"production.html":"not-angular.html"}if(chrome!==void 0&&chrome.runtime!==void 0){let i=chrome.runtime.getManifest().manifest_version===3,e=(()=>{let t={setIcon:()=>{},setPopup:()=>{}};return i?chrome.action||t:chrome.browserAction||t})();e.setIcon({path:{16:chrome.runtime.getURL("assets/icon-bw16.png"),48:chrome.runtime.getURL("assets/icon-bw48.png"),128:chrome.runtime.getURL("assets/icon-bw128.png")}},()=>{}),chrome.runtime.onMessage.addListener((t,s)=>{!t.isAngularDevTools||(s&&s.tab&&e.setPopup({tabId:s.tab.id,popup:`popups/${p(t)}`}),s&&s.tab&&t.isAngular&&e.setIcon({tabId:s.tab.id,path:{16:chrome.runtime.getURL("assets/icon16.png"),48:chrome.runtime.getURL("assets/icon48.png"),128:chrome.runtime.getURL("assets/icon128.png")}},()=>{}))});let n={};c.initialize(n)}})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=background_bundle.js.map
