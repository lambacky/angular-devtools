(()=>{var r=class{};var d=class extends r{_port;_disconnected=!1;_listeners=[];constructor(e){super(),this._port=e,e.onDisconnect.addListener(()=>{this._disconnected=!0})}onAny(e){let s=t=>{e(t.topic,t.args)};return this._port.onMessage.addListener(s),this._listeners.push(s),()=>{this._listeners.splice(this._listeners.indexOf(s),1),this._port.onMessage.removeListener(s)}}on(e,s){let t=n=>{n.topic===e&&s.apply(null,n.args)};return this._port.onMessage.addListener(t),this._listeners.push(t),()=>{this._listeners.splice(this._listeners.indexOf(t),1),this._port.onMessage.removeListener(t)}}once(e,s){let t=n=>{n.topic===e&&(s.apply(null,n.args),this._port.onMessage.removeListener(t))};this._port.onMessage.addListener(t)}emit(e,s){return this._disconnected?!1:(this._port.postMessage({topic:e,args:s,__ignore_ng_zone__:!0}),!0)}destroy(){this._listeners.forEach(e=>window.removeEventListener("message",e)),this._listeners=[]}};var o=class extends r{_source;_destination;_listeners=[];constructor(e,s){super(),this._source=e,this._destination=s}onAny(e){let s=t=>{t.source!==window||!t.data||!t.data.topic||t.data.source!==this._destination||e(t.data.topic,t.data.args)};return window.addEventListener("message",s),this._listeners.push(s),()=>{this._listeners.splice(this._listeners.indexOf(s),1),window.removeEventListener("message",s)}}on(e,s){let t=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||n.data.topic===e&&s.apply(null,n.data.args)};return window.addEventListener("message",t),this._listeners.push(t),()=>{this._listeners.splice(this._listeners.indexOf(t),1),window.removeEventListener("message",t)}}once(e,s){let t=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||(n.data.topic===e&&s.apply(null,n.data.args),window.removeEventListener("message",t))};window.addEventListener("message",t)}emit(e,s){return window.postMessage({source:this._source,topic:e,args:s,__ignore_ng_zone__:!0},"*"),!0}destroy(){this._listeners.forEach(e=>window.removeEventListener("message",e)),this._listeners=[]}};var h=!1,u=!1,l=!1,_=chrome.runtime.connect({name:`${document.title||location.href}`}),m=()=>{a.emit("shutdown"),a.destroy(),c.destroy(),h=!0};_.onDisconnect.addListener(m);var f=new o(`angular-devtools-content-script-${location.href}`,`angular-devtools-detect-angular-${location.href}`);f.on("detectAngular",i=>{if(u||i.isAngularDevTools!==!0||i.isAngular!==!0||i.isDebugMode!==!0||i.isSupportedAngularVersion!==!0||document.contentType!=="text/html")return;let e=document.createElement("script");e.src=chrome.runtime.getURL("app/backend_bundle.js"),document.documentElement.appendChild(e),document.documentElement.removeChild(e),u=!0});var a=new o(`angular-devtools-content-script-${location.href}`,`angular-devtools-backend-${location.href}`),c=new d(_),g=()=>{a.emit("handshake")};c.onAny((i,e)=>{a.emit(i,e)});a.onAny((i,e)=>{l=!0,c.emit(i,e)});if(!l){console.log("Attempting initialization",new Date);let i=()=>{l||h||(g(),setTimeout(i,500))};i()}})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=content_script_bundle.js.map
