import{h as R,r as L,u as h,S as T,N as D,O,Q as y,F as v,s as M,R as N,T as B,m as g,V as p,W as q,X as U,A as S,z as V}from"./runtime.DaZT9Ljh.js";const z=!1;function m(r,e){var i;var a=r&&((i=r[T])==null?void 0:i.t);return r===e||a===e}function G(r,e,a,i){R(()=>{var t,u;return L(()=>{t=u,u=(i==null?void 0:i())||[],h(()=>{r!==a(...u)&&(e(r,...u),t&&m(a(...t),r)&&e(null,...t))})}),()=>{R(()=>{u&&m(a(...u),r)&&e(null,...u)})}})}function K(r,e,a,i){var A;var t=(a&N)!==0,u=(a&B)!==0,w=(a&q)!==0,f=r[e],s=(A=D(r,e))==null?void 0:A.set,l=i,E=!0,b=()=>(w&&E&&(E=!1,l=h(i)),l);if(f===void 0&&i!==void 0){if(s&&u)throw new Error("ERR_SVELTE_BINDING_FALLBACK");f=b(),s&&s(f)}var o=u?()=>{var n=r[e];return n===void 0?b():(E=!0,n)}:()=>{var n=r[e];return n!==void 0&&(l=void 0),n===void 0?l:n};if(!(a&O))return o;if(s)return function(n){return arguments.length===1?(s(n),n):o()};var c=!1,I=!1,d=g(f),_=p(()=>{var n=o(),P=v(d);return c?(c=!1,I=!0,P):(I=!1,d.v=n)});return t||(_.equals=y),function(n){var P=v(_);return(U||z)&&(c=I,o(),v(d)),arguments.length>0?(_.equals(n)||(c=!0,M(d,n),v(_)),n):P}}function F(r){if(S===null)throw new Error("onMount can only be used during component initialisation.");S.r?V(()=>{const e=h(r);if(typeof e=="function")return e}):Y(S).m.push(r)}function Q(r){if(S===null)throw new Error("onDestroy can only be used during component initialisation.");F(()=>()=>h(r))}function Y(r){return r.u??(r.u={a:[],b:[],m:[]})}export{Q as a,G as b,F as o,K as p};
