const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Bd00s2by.js","../chunks/disclose-version.D2u4SeCP.js","../chunks/runtime.8FjZJPOv.js","../chunks/class.ygUjBjtg.js","../chunks/stores.BJ9zgRtt.js","../chunks/entry.CIvqfVFZ.js","../chunks/attributes.AYSCMNQw.js","../assets/0.SwhSQTLN.css","../nodes/1.mf2MNEh7.js","../chunks/render.BFSsBS53.js","../nodes/2.gSMW2kEx.js","../assets/2.CZi8PWBX.css","../nodes/3.D8wjxqJn.js","../chunks/if.ZA7qb4Hz.js","../chunks/index-client.C239lJAN.js","../chunks/each.CWocde0M.js","../assets/3.D925Ie99.css","../nodes/4.Cyu88Cd3.js","../assets/4.BfC-7cBh.css"])))=>i.map(i=>d[i]);
var I=n=>{throw TypeError(n)};var j=(n,t,r)=>t.has(n)||I("Cannot "+r);var c=(n,t,r)=>(j(n,t,"read from private field"),r?r.call(n):t.get(n)),P=(n,t,r)=>t.has(n)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,r),L=(n,t,r,o)=>(j(n,t,"write to private field"),o?o.call(n,r):t.set(n,r),r);import{b as H,c as J,d as K,x as E,s as k,v as Q,m as X,p as Y,U as Z,R as M,V as N,a as $,f as O,t as tt}from"../chunks/runtime.8FjZJPOv.js";import{h as et,m as rt,u as st,s as nt}from"../chunks/render.BFSsBS53.js";import{h as B,d as ot,j as at,f as x,C as A,a as b,s as U,t as W,c as it,D as ct,r as lt}from"../chunks/disclose-version.D2u4SeCP.js";import{p as ut,i as C}from"../chunks/if.ZA7qb4Hz.js";import{p as D,o as dt,b as S}from"../chunks/index-client.C239lJAN.js";function T(n,t,r){B&&ot();var o=n,a,e;H(()=>{a!==(a=t())&&(e&&(K(e),e=null),a&&(e=J(()=>r(o,a))))}),B&&(o=at)}function ft(n){return class extends mt{constructor(t){super({component:n,...t})}}}var _,d;class mt{constructor(t){P(this,_);P(this,d);var r=new Map,o=(e,s)=>{var l=X(s);return r.set(e,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(e,s){return E(r.get(s)??o(s,Reflect.get(e,s)))},has(e,s){return E(r.get(s)??o(s,Reflect.get(e,s))),Reflect.has(e,s)},set(e,s,l){return k(r.get(s)??o(s,l),l),Reflect.set(e,s,l)}});L(this,d,(t.hydrate?et:rt)(t.component,{target:t.target,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),L(this,_,a.$$events);for(const e of Object.keys(c(this,d)))e==="$set"||e==="$destroy"||e==="$on"||Q(this,e,{get(){return c(this,d)[e]},set(s){c(this,d)[e]=s},enumerable:!0});c(this,d).$set=e=>{Object.assign(a,e)},c(this,d).$destroy=()=>{st(c(this,d))}}$set(t){c(this,d).$set(t)}$on(t,r){c(this,_)[t]=c(this,_)[t]||[];const o=(...a)=>r.call(this,...a);return c(this,_)[t].push(o),()=>{c(this,_)[t]=c(this,_)[t].filter(a=>a!==o)}}$destroy(){c(this,d).$destroy()}}_=new WeakMap,d=new WeakMap;const ht="modulepreload",_t=function(n,t){return new URL(n,t).href},q={},R=function(t,r,o){let a=Promise.resolve();if(r&&r.length>0){const e=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.all(r.map(u=>{if(u=_t(u,o),u in q)return;q[u]=!0;const v=u.endsWith(".css"),p=v?'[rel="stylesheet"]':"";if(!!o)for(let f=e.length-1;f>=0;f--){const h=e[f];if(h.href===u&&(!v||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${p}`))return;const i=document.createElement("link");if(i.rel=v?"stylesheet":ht,v||(i.as="script",i.crossOrigin=""),i.href=u,l&&i.setAttribute("nonce",l),document.head.appendChild(i),v)return new Promise((f,h)=>{i.addEventListener("load",f),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}return a.then(()=>t()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})},Pt={};var vt=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),gt=W("<!> <!>",1);function yt(n,t){Y(t,!0);let r=D(t,"components",15,()=>[]),o=D(t,"data_0",3,null),a=D(t,"data_1",3,null);Z(()=>t.stores.page.set(t.page)),M(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),a(),t.stores.page.notify()});let e=O(!1),s=O(!1),l=O(null);dt(()=>{const g=t.stores.page.subscribe(()=>{E(e)&&(k(s,!0),N().then(()=>{k(l,ut(document.title||"untitled page"))}))});return k(e,!0),g});var u=gt(),v=x(u);C(v,()=>t.constructors[1],g=>{var i=A(),f=x(i);T(f,()=>t.constructors[0],(h,y)=>{S(y(h,{get data(){return o()},children:(m,bt)=>{var V=A(),z=x(V);T(z,()=>t.constructors[1],(F,G)=>{S(G(F,{get data(){return a()},get form(){return t.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),b(m,V)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),b(g,i)},g=>{var i=A(),f=x(i);T(f,()=>t.constructors[0],(h,y)=>{S(y(h,{get data(){return o()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),b(g,i)});var p=U(U(v,!0));C(p,()=>E(e),g=>{var i=vt(),f=it(i);C(f,()=>E(s),h=>{var y=ct();tt(()=>nt(y,E(l))),b(h,y)}),lt(i),b(g,i)}),b(n,u),$()}const Lt=ft(yt),Ot=[()=>R(()=>import("../nodes/0.Bd00s2by.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),()=>R(()=>import("../nodes/1.mf2MNEh7.js"),__vite__mapDeps([8,1,2,9,4,5]),import.meta.url),()=>R(()=>import("../nodes/2.gSMW2kEx.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>R(()=>import("../nodes/3.D8wjxqJn.js"),__vite__mapDeps([12,1,2,13,14,9,15,3,16]),import.meta.url),()=>R(()=>import("../nodes/4.Cyu88Cd3.js"),__vite__mapDeps([17,1,2,9,13,15,6,18]),import.meta.url)],At=[],Ct={"/":[2],"/completions":[3],"/embeddings":[4]},Dt={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Ct as dictionary,Dt as hooks,Pt as matchers,Ot as nodes,Lt as root,At as server_loads};
