import{b as Z,E as F,H as $,c as j,r as G,d as J,e as ee,I as re,q as ae,f as z,g as H,s as B,h as m,i as D,m as ne,j as K,k as fe,l as le,n as se,o as te,S as ie,u as ue}from"./runtime.CFYtZ9C8.js";import{e as ve,h,b as Q,i as oe,d as U,r as de,g as k,j as _e,k as Ee,l as pe}from"./disclose-version.hGTx8sci.js";let w=null;function ye(l,e){return e}function Ae(l,e,a,i){for(var u=[],d=e.length,v=0;v<d;v++)fe(e[v].e,u,!0);var T=d>0&&u.length===0&&a!==null;if(T){var E=a.parentNode;_e(E),E.append(a),i.clear(),C(l,e[0].prev,e[d-1].next)}le(u,()=>{for(var _=0;_<d;_++){var p=e[_];T||(i.delete(p.k),C(l,p.prev,p.next)),se(p.e,!T)}})}function Ce(l,e,a,i,u,d=null){var v={flags:e,items:new Map,first:null},T=(e&F)!==0;if(T){var E=l;l=h?Q(E.firstChild):E.appendChild(ve())}var _=null;Z(()=>{var p=a(),n=oe(p)?p:p==null?[]:Array.from(p),A=n.length,f=v.flags;f&D&&!pe(n)&&!(ie in n)&&(f^=D,f&ue&&!(f&H)&&(f^=H));let o=!1;if(h){var g=l.data===$;(g!==(A===0)||U===void 0)&&(de(Ee),k(!1),o=!0)}if(h){for(var t=U,I=null,S,r=0;r<A;r++){if(t.nodeType!==8||t.data!==j){o=!0,k(!1);break}t=Q(t);var s=n[r],b=i(s,r);S=P(t,v,I,null,s,b,r,u,f),v.items.set(b,S),t=t.nextSibling,I=S}if(A>0)for(;t!==l;){var x=t.nextSibling;t.remove(),t=x}}h||ge(n,v,l,u,f,i),d!==null&&(A===0?_?G(_):_=J(()=>d(l)):_!==null&&ee(_,()=>{_=null})),o&&k(!0)})}function ge(l,e,a,i,u,d){var O,M,Y,q;var v=(u&te)!==0,T=(u&(H|m))!==0,E=l.length,_=e.items,p=e.first,n=p,A=new Set,f=null,o=new Set,g=[],t=[],I,S,r,s;if(v)for(s=0;s<E;s+=1)I=l[s],S=d(I,s),r=_.get(S),r!==void 0&&((O=r.a)==null||O.measure(),o.add(r));for(s=0;s<E;s+=1){if(I=l[s],S=d(I,s),r=_.get(S),r===void 0){var b=n?n.e.nodes.start:a;f=P(b,e,f,f===null?e.first:f.next,I,S,s,i,u),_.set(S,f),g=[],t=[],n=f.next;continue}if(T&&Se(r,I,s,u),r.e.f&re&&(G(r.e),v&&((M=r.a)==null||M.unfix(),o.delete(r))),r!==n){if(A.has(r)){if(g.length<t.length){var x=t[0],y;f=x.prev;var L=g[0],N=g[g.length-1];for(y=0;y<g.length;y+=1)X(g[y],x,a);for(y=0;y<t.length;y+=1)A.delete(t[y]);C(e,L.prev,N.next),C(e,f,L),C(e,N,x),n=x,f=N,s-=1,g=[],t=[]}else A.delete(r),X(r,n,a),C(e,r.prev,r.next),C(e,r,f===null?e.first:f.next),C(e,f,r),f=r;continue}for(g=[],t=[];n!==null&&n.k!==S;)A.add(n),t.push(n),n=n.next;if(n===null)continue;r=n}g.push(r),f=r,n=r.next}const c=Array.from(A);for(;n!==null;)c.push(n),n=n.next;var R=c.length;if(R>0){var W=u&F&&E===0?a:null;if(v){for(s=0;s<R;s+=1)(Y=c[s].a)==null||Y.measure();for(s=0;s<R;s+=1)(q=c[s].a)==null||q.fix()}Ae(e,c,W,_)}v&&ae(()=>{var V;for(r of o)(V=r.a)==null||V.apply()}),z.first=e.first&&e.first.e,z.last=f&&f.e}function Se(l,e,a,i){i&H&&B(l.v,e),i&m?B(l.i,a):l.i=a}function P(l,e,a,i,u,d,v,T,E){var _=w;try{var p=(E&H)!==0,n=(E&D)===0,A=p?n?ne(u):K(u):u,f=E&m?K(v):v,o={i:f,v:A,k:d,a:null,e:null,prev:a,next:i};return w=o,o.e=J(()=>T(l,A,f),h),o.e.prev=a&&a.e,o.e.next=i&&i.e,a===null?e.first=o:(a.next=o,a.e.next=o.e),i!==null&&(i.prev=o,i.e.prev=o.e),o}finally{w=_}}function X(l,e,a){for(var i=l.next?l.next.e.nodes.start:a,u=e?e.e.nodes.start:a,d=l.e.nodes.start;d!==i;){var v=d.nextSibling;u.before(d),d=v}}function C(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{Ce as e,ye as i};
