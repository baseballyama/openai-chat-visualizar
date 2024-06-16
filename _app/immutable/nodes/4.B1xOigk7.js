import{h as re,a as h,t as V,c as m,s as t,f as se}from"../chunks/disclose-version.CDsBjsTn.js";import{Y as le,k as x,t as k,D as s,s as _,a7 as l}from"../chunks/runtime.DDr4Obdx.js";import{e as O,s as $}from"../chunks/render.CTEkstN-.js";import{p as q,i as E}from"../chunks/if.BDGG8Z79.js";import{e as ie,i as ne}from"../chunks/each.BiQ8TT8c.js";import{a as oe,r as ue,b as I,s as F}from"../chunks/attributes.tPGF1xG6.js";function ce(e,i,c,o=c){e.addEventListener(i,c);const j=e.__on_r;j?e.__on_r=()=>{j(),o()}:e.__on_r=o,oe()}function K(e,i,c){ce(e,"input",()=>{c(H(e)?J(e.value):e.value)}),le(()=>{var o=i();if(re&&e.defaultValue!==e.value){c(e.value);return}H(e)&&o===J(e.value)||e.type==="date"&&!o&&!e.value||(e.value=o??"")})}function H(e){var i=e.type;return i==="number"||i==="range"}function J(e){return e===""?null:+e}var ve=V('<textarea class="vector svelte-1ruqg1j" readonly=""></textarea>'),de=V('<textarea class="vector svelte-1ruqg1j" readonly=""></textarea>'),pe=V('<ul class="svelte-1ruqg1j"><li class="svelte-1ruqg1j"><textarea placeholder="Input your sentence" class="svelte-1ruqg1j"></textarea> <!></li> <li class="svelte-1ruqg1j"><textarea placeholder="Input your sentence" class="svelte-1ruqg1j"></textarea> <!></li> <li class="svelte-1ruqg1j"> </li> <li class="svelte-1ruqg1j"><button class="svelte-1ruqg1j">Delete</button></li></ul>'),_e=V('<p class="progress svelte-1ruqg1j"> </p>'),ge=V('<p class="openai-api-key svelte-1ruqg1j">OpenAI API key</p> <input placeholder="OpenAI API key" class="api-input svelte-1ruqg1j"> <p class="input-error svelte-1ruqg1j"> </p> <ul class="svelte-1ruqg1j"><li class="svelte-1ruqg1j">Sentence1</li> <li class="svelte-1ruqg1j">Sentence2</li> <li class="svelte-1ruqg1j">Cosine Similarity</li> <li class="svelte-1ruqg1j">Delete</li></ul> <!> <div class="buttons svelte-1ruqg1j"><button class="svelte-1ruqg1j">+ Add</button> <button class="execute-button svelte-1ruqg1j">Embeddings</button></div> <!>',1);function he(e){let i=x(q(sessionStorage.getItem("openaiApiKey")||"")),c=x("");const o={};let j=x(0),A=x(0),v=x(q([{a:"",aVector:[],b:"",bVector:[],similarity:0}]));const L=()=>{_(v,q([...s(v),{a:"",aVector:[],b:"",bVector:[],similarity:0}]))},R=r=>{_(v,q(s(v).filter((a,n)=>n!==r)))},C=async r=>{if(o[r])return o[r];const u=(await(await fetch("https://api.openai.com/v1/embeddings",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s(i)}`},body:JSON.stringify({input:r,model:"text-embedding-3-small"})})).json()).data[0].embedding;return o[r]=u,u},Y=(r,a)=>{const n=(d,g)=>{let p=0;for(let b=0;b<d.length;b++)p+=d[b]*g[b];return p},u=d=>{let g=0;for(let p=0;p<d.length;p++)g+=d[p]*d[p];return Math.sqrt(g)};return n(r,a)/(u(r)*u(a))},G=async()=>{if(_(j,q(s(v).length)),_(A,0),_(c,""),s(i)===""){_(c,"Please input your OpenAI API key");return}sessionStorage.setItem("openaiApiKey",s(i)),s(v).flatMap(async r=>{const[a,n]=await Promise.all([C(r.a),C(r.b)]);_(A,s(A)+1);const u=Y(a,n);r.aVector=a,r.bVector=n,r.similarity=u,_(v,q([...s(v)]))})};var D=ge(),Q=se(D),S=t(t(Q,!0));ue(S);var T=t(t(S,!0)),U=m(T),W=t(t(T,!0)),M=t(t(W,!0));ie(M,65,()=>s(v),ne,(r,a,n)=>{var u=pe(),d=m(u),g=m(d);I(g);var p=t(t(g,!0));E(p,()=>l(a).aVector.length>0,f=>{var y=ve();I(y),k(()=>F(y,`[${l(a).aVector.length>0&&l(a).aVector.join(", ")}]<`)),h(f,y)});var b=t(t(d,!0)),P=m(b);I(P);var w=t(t(P,!0));E(w,()=>l(a).bVector.length>0,f=>{var y=de();I(y),k(()=>F(y,`[${l(a).bVector.length>0&&l(a).bVector.join(", ")}]<`)),h(f,y)});var B=t(t(b,!0)),ee=m(B);k(()=>$(ee,l(a).similarity===0?"(Not Embedded)":l(a).similarity.toFixed(6)));var te=t(t(B,!0)),ae=m(te);K(g,()=>l(a).a,f=>l(a).a=f),K(P,()=>l(a).b,f=>l(a).b=f),O("click",ae,()=>R(l(n)),!1),h(r,u)});var N=t(t(M,!0)),z=m(N),X=t(t(z,!0)),Z=t(t(N,!0));E(Z,()=>s(j)>0,r=>{var a=_e(),n=m(a);k(()=>$(n,`${s(A)??""}/${s(j)??""} tasks completed`)),h(r,a)}),k(()=>$(U,s(c))),K(S,()=>s(i),r=>_(i,r)),O("click",z,L,!1),O("click",X,G,!1),h(e,D)}export{he as component};
