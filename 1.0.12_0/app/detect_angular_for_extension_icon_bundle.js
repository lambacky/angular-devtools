(()=>{var u=()=>i()&&_(),l=()=>typeof window.document.querySelector("[ng-version]")?.__ngContext__<"u",i=()=>!!c(),d=()=>{let r=c();if(!r)return!1;let t=parseInt(r.toString().split(".")[0],10);return i()&&(t>=12||t===0)},_=()=>typeof ng=="object"&&(typeof ng.getComponent=="function"||typeof ng.probe=="function"),c=()=>{let r=document.querySelector("[ng-version]");return r?r.getAttribute("ng-version"):null};var o=class{};var a=class extends o{_source;_destination;_listeners=[];constructor(t,s){super(),this._source=t,this._destination=s}onAny(t){let s=e=>{e.source!==window||!e.data||!e.data.topic||e.data.source!==this._destination||t(e.data.topic,e.data.args)};return window.addEventListener("message",s),this._listeners.push(s),()=>{this._listeners.splice(this._listeners.indexOf(s),1),window.removeEventListener("message",s)}}on(t,s){let e=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||n.data.topic===t&&s.apply(null,n.data.args)};return window.addEventListener("message",e),this._listeners.push(e),()=>{this._listeners.splice(this._listeners.indexOf(e),1),window.removeEventListener("message",e)}}once(t,s){let e=n=>{n.source!==window||!n.data||n.data.source!==this._destination||!n.data.topic||(n.data.topic===t&&s.apply(null,n.data.args),window.removeEventListener("message",e))};window.addEventListener("message",e)}emit(t,s){return window.postMessage({source:this._source,topic:t,args:s,__ignore_ng_zone__:!0},"*"),!0}destroy(){this._listeners.forEach(t=>window.removeEventListener("message",t)),this._listeners=[]}};var m=new a(`angular-devtools-detect-angular-${location.href}`,`angular-devtools-content-script-${location.href}`);function g(r){let t=i(),s=d(),e=u(),n=l(),f={isIvy:n,isAngular:t,isDebugMode:e,isSupportedAngularVersion:s,isAngularDevTools:!0};r.postMessage(f,"*"),m.emit("detectAngular",[{isIvy:n,isAngular:t,isDebugMode:e,isSupportedAngularVersion:s,isAngularDevTools:!0}]),setTimeout(()=>g(r),1e3)}g(window);})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=detect_angular_for_extension_icon_bundle.js.map