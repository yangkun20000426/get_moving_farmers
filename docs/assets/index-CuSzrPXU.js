(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},Ws=[],si=()=>{},gh=()=>!1,oa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),aa=n=>n.startsWith("onUpdate:"),an=Object.assign,bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mp=Object.prototype.hasOwnProperty,mt=(n,e)=>mp.call(n,e),Je=Array.isArray,Xs=n=>Yr(n)==="[object Map]",la=n=>Yr(n)==="[object Set]",yu=n=>Yr(n)==="[object Date]",it=n=>typeof n=="function",It=n=>typeof n=="string",Vn=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",_h=n=>(yt(n)||it(n))&&it(n.then)&&it(n.catch),vh=Object.prototype.toString,Yr=n=>vh.call(n),gp=n=>Yr(n).slice(8,-1),xh=n=>Yr(n)==="[object Object]",Ec=n=>It(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_p=/-\w/g,pn=ca(n=>n.replace(_p,e=>e.slice(1).toUpperCase())),vp=/\B([A-Z])/g,vs=ca(n=>n.replace(vp,"-$1").toLowerCase()),ua=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),wa=ca(n=>n?`on${ua(n)}`:""),ei=(n,e)=>!Object.is(n,e),Do=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Mh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bu;const ha=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ar(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=It(i)?yp(i):ar(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(It(n)||yt(n))return n}const xp=/;(?![^(]*\))/g,Mp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function yp(n){const e={};return n.replace(Sp,"").split(xp).forEach(t=>{if(t){const i=t.split(Mp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xn(n){let e="";if(It(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=xn(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ep=yc(bp);function Sh(n){return!!n||n===""}function Tp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=jr(n[i],e[i]);return t}function jr(n,e){if(n===e)return!0;let t=yu(n),i=yu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Vn(n),i=Vn(e),t||i)return n===e;if(t=Je(n),i=Je(e),t||i)return t&&i?Tp(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jr(n[o],e[o]))return!1}}return String(n)===String(e)}function wp(n,e){return n.findIndex(t=>jr(t,e))}const yh=n=>!!(n&&n.__v_isRef===!0),Re=n=>It(n)?n:n==null?"":Je(n)||yt(n)&&(n.toString===vh||!it(n.toString))?yh(n)?Re(n.value):JSON.stringify(n,bh,2):String(n),bh=(n,e)=>yh(e)?bh(n,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Aa(i,r)+" =>"]=s,t),{})}:la(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:Vn(e)?Aa(e):yt(e)&&!Je(e)&&!xh(e)?String(e):e,Aa=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&qt&&(qt.active?(this.parent=qt,this.index=(qt.scopes||(qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){++this._on===1&&(this.prevScope=qt,qt=this)}off(){if(this._on>0&&--this._on===0){if(qt===this)qt=this.prevScope;else{let e=qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Cp(){return qt}let Ct;const Ca=new WeakSet;class Eh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&(qt.active?qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),Ah(this);const e=Ct,t=zn;Ct=this,zn=!0;try{return this.fn()}finally{Ch(this),Ct=e,zn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ac(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let Th=0,Cr,Rr;function wh(n,e=!1){if(n.flags|=8,e){n.next=Rr,Rr=n;return}n.next=Cr,Cr=n}function Tc(){Th++}function wc(){if(--Th>0)return;if(Rr){let e=Rr;for(Rr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Cr;){let e=Cr;for(Cr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ah(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ch(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ac(i),Rp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function _l(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Rh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Fr)||(n.globalVersion=Fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_l(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=zn;Ct=n,zn=!0;try{Ah(n);const s=n.fn(n._value);(e.version===0||ei(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=t,zn=i,Ch(n),n.flags&=-3}}function Ac(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ac(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Rp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let zn=!0;const Ph=[];function wi(){Ph.push(zn),zn=!1}function Ai(){const n=Ph.pop();zn=n===void 0?!0:n}function Eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Fr=0;class Pp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!zn||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new Pp(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,Dh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,Fr++,this.notify(e)}notify(e){Tc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wc()}}}function Dh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Dh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const vl=new WeakMap,ds=Symbol(""),xl=Symbol(""),Or=Symbol("");function tn(n,e,t){if(zn&&Ct){let i=vl.get(n);i||vl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Cc),s.map=i,s.key=t),s.track()}}function Mi(n,e,t,i,s,r){const o=vl.get(n);if(!o){Fr++;return}const a=l=>{l&&l.trigger()};if(Tc(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&Ec(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Or||!Vn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Xs(n)&&a(o.get(xl)));break;case"delete":l||(a(o.get(ds)),Xs(n)&&a(o.get(xl)));break;case"set":Xs(n)&&a(o.get(ds));break}}wc()}function Ss(n){const e=pt(n);return e===n?e:(tn(e,"iterate",Or),In(n)?e:e.map(Gn))}function da(n){return tn(n=pt(n),"iterate",Or),n}function Zn(n,e){return Ci(n)?tr(ps(n)?Gn(e):e):Gn(e)}const Dp={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Ss(this).concat(...n.map(e=>Je(e)?Ss(e):e))},entries(){return Ra(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,e){return fi(this,"every",n,e,void 0,arguments)},filter(n,e){return fi(this,"filter",n,e,t=>t.map(i=>Zn(this,i)),arguments)},find(n,e){return fi(this,"find",n,e,t=>Zn(this,t),arguments)},findIndex(n,e){return fi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return fi(this,"findLast",n,e,t=>Zn(this,t),arguments)},findLastIndex(n,e){return fi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return fi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Pa(this,"includes",n)},indexOf(...n){return Pa(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return Pa(this,"lastIndexOf",n)},map(n,e){return fi(this,"map",n,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...e){return Tu(this,"reduce",n,e)},reduceRight(n,...e){return Tu(this,"reduceRight",n,e)},shift(){return ur(this,"shift")},some(n,e){return fi(this,"some",n,e,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return Ra(this,"values",n=>Zn(this,n))}};function Ra(n,e,t){const i=da(n),s=i[e]();return i!==n&&!In(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Lp=Array.prototype;function fi(n,e,t,i,s,r){const o=da(n),a=o!==n&&!In(n),l=o[e];if(l!==Lp[e]){const h=l.apply(n,r);return a?Gn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Zn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Tu(n,e,t,i){const s=da(n),r=s!==n&&!In(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Zn(n,c)),t.call(this,c,Zn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Zn(n,l):l}function Pa(n,e,t){const i=pt(n);tn(i,"iterate",Or);const s=i[e](...t);return(s===-1||s===!1)&&Dc(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function ur(n,e,t=[]){wi(),Tc();const i=pt(n)[e].apply(n,t);return wc(),Ai(),i}const Ip=yc("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function Up(n){Vn(n)||(n=String(n));const e=pt(this);return tn(e,"has",n),e.hasOwnProperty(n)}class Ih{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Wp:Oh:r?Fh:Nh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!s){let l;if(o&&(l=Dp[t]))return l;if(t==="hasOwnProperty")return Up}const a=Reflect.get(e,t,on(e)?e:i);if((Vn(t)?Lh.has(t):Ip(t))||(s||tn(e,"get",t),r))return a;if(on(a)){const l=o&&Ec(t)?a:a.value;return s&&yt(l)?Sl(l):l}return yt(a)?s?Sl(a):Br(a):a}}class Uh extends Ih{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Je(e)&&Ec(t);if(!this._isShallow){const c=Ci(r);if(!In(i)&&!Ci(i)&&(r=pt(r),i=pt(i)),!o&&on(r)&&!on(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,on(e)?e:s);return e===pt(s)&&(a?ei(i,r)&&Mi(e,"set",t,i):Mi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Vn(t)||!Lh.has(t))&&tn(e,"has",t),i}ownKeys(e){return tn(e,"iterate",Je(e)?"length":ds),Reflect.ownKeys(e)}}class Np extends Ih{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fp=new Uh,Op=new Np,Bp=new Uh(!0);const Ml=n=>n,to=n=>Reflect.getPrototypeOf(n);function kp(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),o=Xs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ml:e?tr:Gn;return!e&&tn(r,"iterate",l?xl:ds),an(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function no(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zp(n,e){const t={get(s){const r=this.__v_raw,o=pt(r),a=pt(s);n||(ei(s,a)&&tn(o,"get",s),tn(o,"get",a));const{has:l}=to(o),c=e?Ml:n?tr:Gn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&tn(pt(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=pt(r),a=pt(s);return n||(ei(s,a)&&tn(o,"has",s),tn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=pt(a),c=e?Ml:n?tr:Gn;return!n&&tn(l,"iterate",ds),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return an(t,n?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){const r=pt(this),o=to(r),a=pt(s),l=!e&&!In(s)&&!Ci(s)?a:s;return o.has.call(r,l)||ei(s,l)&&o.has.call(r,s)||ei(a,l)&&o.has.call(r,a)||(r.add(l),Mi(r,"add",l,l)),this},set(s,r){!e&&!In(r)&&!Ci(r)&&(r=pt(r));const o=pt(this),{has:a,get:l}=to(o);let c=a.call(o,s);c||(s=pt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ei(r,u)&&Mi(o,"set",s,r):Mi(o,"add",s,r),this},delete(s){const r=pt(this),{has:o,get:a}=to(r);let l=o.call(r,s);l||(s=pt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Mi(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,o=s.clear();return r&&Mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=kp(s,n,e)}),t}function Rc(n,e){const t=zp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const Hp={get:Rc(!1,!1)},Vp={get:Rc(!1,!0)},Gp={get:Rc(!0,!1)};const Nh=new WeakMap,Fh=new WeakMap,Oh=new WeakMap,Wp=new WeakMap;function Xp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $p(n){return n.__v_skip||!Object.isExtensible(n)?0:Xp(gp(n))}function Br(n){return Ci(n)?n:Pc(n,!1,Fp,Hp,Nh)}function qp(n){return Pc(n,!1,Bp,Vp,Fh)}function Sl(n){return Pc(n,!0,Op,Gp,Oh)}function Pc(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=$p(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ps(n){return Ci(n)?ps(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function Dc(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function Yp(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Mh(n,"__v_skip",!0),n}const Gn=n=>yt(n)?Br(n):n,tr=n=>yt(n)?Sl(n):n;function on(n){return n?n.__v_isRef===!0:!1}function Rt(n){return jp(n,!1)}function jp(n,e){return on(n)?n:new Kp(n,e)}class Kp{constructor(e,t){this.dep=new Cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||Ci(e);e=i?e:pt(e),ei(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function st(n){return on(n)?n.value:n}const Zp={get:(n,e,t)=>e==="__v_raw"?n:st(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return on(s)&&!on(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Bh(n){return ps(n)?n:new Proxy(n,Zp)}class Jp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return wh(this,!0),!0}get value(){const e=this.dep.track();return Rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qp(n,e,t=!1){let i,s;return it(n)?i=n:(i=n.get,s=n.set),new Jp(i,s,t)}const io={},Vo=new WeakMap;let ss;function em(n,e=!1,t=ss){if(t){let i=Vo.get(t);i||Vo.set(t,i=[]),i.push(n)}}function tm(n,e,t=Tt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:In(y)||s===!1||s===0?Si(y,1):Si(y);let u,h,f,d,g=!1,M=!1;if(on(n)?(h=()=>n.value,g=In(n)):ps(n)?(h=()=>c(n),g=!0):Je(n)?(M=!0,g=n.some(y=>ps(y)||In(y)),h=()=>n.map(y=>{if(on(y))return y.value;if(ps(y))return c(y);if(it(y))return l?l(y,2):y()})):it(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){wi();try{f()}finally{Ai()}}const y=ss;ss=u;try{return l?l(n,3,[d]):n(d)}finally{ss=y}}:h=si,e&&s){const y=h,L=s===!0?1/0:s;h=()=>Si(y(),L)}const m=Cp(),p=()=>{u.stop(),m&&m.active&&bc(m.effects,u)};if(r&&e){const y=e;e=(...L)=>{y(...L),p()}}let x=M?new Array(n.length).fill(io):io;const T=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(s||g||(M?L.some((w,I)=>ei(w,x[I])):ei(L,x))){f&&f();const w=ss;ss=u;try{const I=[L,x===io?void 0:M&&x[0]===io?[]:x,d];x=L,l?l(e,3,I):e(...I)}finally{ss=w}}}else u.run()};return a&&a(T),u=new Eh(h),u.scheduler=o?()=>o(T,!1):T,d=y=>em(y,!1,u),f=u.onStop=()=>{const y=Vo.get(u);if(y){if(l)l(y,4);else for(const L of y)L();Vo.delete(u)}},e?i?T(!0):x=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Si(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,on(n))Si(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)Si(n[i],e,t);else if(la(n)||Xs(n))n.forEach(i=>{Si(i,e,t)});else if(xh(n)){for(const i in n)Si(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Si(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(n,e,t,i){try{return i?n(...i):n()}catch(s){pa(s,e,t)}}function ai(n,e,t,i){if(it(n)){const s=Kr(n,e,t,i);return s&&_h(s)&&s.catch(r=>{pa(r,e,t)}),s}if(Je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ai(n[r],e,t,i));return s}}function pa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Tt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){wi(),Kr(r,null,10,[n,l,c]),Ai();return}}nm(n,t,s,i,o)}function nm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const dn=[];let Kn=-1;const $s=[];let Vi=null,Vs=0;const kh=Promise.resolve();let Go=null;function zh(n){const e=Go||kh;return n?e.then(this?n.bind(this):n):e}function im(n){let e=Kn+1,t=dn.length;for(;e<t;){const i=e+t>>>1,s=dn[i],r=kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Lc(n){if(!(n.flags&1)){const e=kr(n),t=dn[dn.length-1];!t||!(n.flags&2)&&e>=kr(t)?dn.push(n):dn.splice(im(e),0,n),n.flags|=1,Hh()}}function Hh(){Go||(Go=kh.then(Gh))}function sm(n){Je(n)?$s.push(...n):Vi&&n.id===-1?Vi.splice(Vs+1,0,n):n.flags&1||($s.push(n),n.flags|=1),Hh()}function wu(n,e,t=Kn+1){for(;t<dn.length;t++){const i=dn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;dn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vh(n){if($s.length){const e=[...new Set($s)].sort((t,i)=>kr(t)-kr(i));if($s.length=0,Vi){Vi.push(...e);return}for(Vi=e,Vs=0;Vs<Vi.length;Vs++){const t=Vi[Vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vi=null,Vs=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gh(n){try{for(Kn=0;Kn<dn.length;Kn++){const e=dn[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<dn.length;Kn++){const e=dn[Kn];e&&(e.flags&=-2)}Kn=-1,dn.length=0,Vh(),Go=null,(dn.length||$s.length)&&Gh()}}let Yt=null,Wh=null;function Wo(n){const e=Yt;return Yt=n,Wh=n&&n.type.__scopeId||null,e}function Xh(n,e=Yt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ku(-1);const r=Wo(e);let o;try{o=n(...s)}finally{Wo(r),i._d&&ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _i(n,e){if(Yt===null)return n;const t=xa(Yt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Tt]=e[s];r&&(it(r)&&(r={mounted:r,updated:r}),r.deep&&Si(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Zi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(wi(),ai(l,t,8,[n.el,a,n,e]),Ai())}}function rm(n,e){if(nn){let t=nn.provides;const i=nn.parent&&nn.parent.provides;i===t&&(t=nn.provides=Object.create(i)),t[n]=e}}function Lo(n,e,t=!1){const i=rg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const om=Symbol.for("v-scx"),am=()=>Lo(om);function Pr(n,e,t){return $h(n,e,t)}function $h(n,e,t=Tt){const{immediate:i,deep:s,flush:r,once:o}=t,a=an({},t),l=e&&i||!e&&r!=="post";let c;if(Hr){if(r==="sync"){const d=am();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=si,d.resume=si,d.pause=si,d}}const u=nn;a.call=(d,g,M)=>ai(d,u,g,M);let h=!1;r==="post"?a.scheduler=d=>{gn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Lc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=tm(n,e,a);return Hr&&(c?c.push(f):l&&f()),f}function lm(n,e,t){const i=this.proxy,s=It(n)?n.includes(".")?qh(i,n):()=>i[n]:n.bind(i,i);let r;it(e)?r=e:(r=e.handler,t=e);const o=Zr(this),a=$h(s,r.bind(i),t);return o(),a}function qh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const cm=Symbol("_vte"),um=n=>n.__isTeleport,fm=Symbol("_leaveCb");function Ic(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ic(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Yh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Au(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Xo=new WeakMap;function Dr(n,e,t,i,s=!1){if(Je(n)){n.forEach((M,m)=>Dr(M,e&&(Je(e)?e[m]:e),t,i,s));return}if(qs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Dr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?xa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,h=a.setupState,f=pt(h),d=h===Tt?gh:M=>Au(u,M)?!1:mt(f,M),g=(M,m)=>!(m&&Au(u,m));if(c!=null&&c!==l){if(Cu(e),It(c))u[c]=null,d(c)&&(h[c]=null);else if(on(c)){const M=e;g(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(it(l))Kr(l,a,12,[o,u]);else{const M=It(l),m=on(l);if(M||m){const p=()=>{if(n.f){const x=M?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Je(x)&&bc(x,r);else if(Je(x))x.includes(r)||x.push(r);else if(M)u[l]=[r],d(l)&&(h[l]=u[l]);else{const T=[r];g(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else M?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{p(),Xo.delete(n)};x.id=-1,Xo.set(n,x),gn(x,t)}else Cu(n),p()}}}function Cu(n){const e=Xo.get(n);e&&(e.flags|=8,Xo.delete(n))}ha().requestIdleCallback;ha().cancelIdleCallback;const qs=n=>!!n.type.__asyncLoader,jh=n=>n.type.__isKeepAlive;function hm(n,e){Kh(n,"a",e)}function dm(n,e){Kh(n,"da",e)}function Kh(n,e,t=nn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ma(e,i,t),t){let s=t.parent;for(;s&&s.parent;)jh(s.parent.vnode)&&pm(i,e,t,s),s=s.parent}}function pm(n,e,t,i){const s=ma(e,n,i,!0);Uc(()=>{bc(i[e],s)},t)}function ma(n,e,t=nn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{wi();const a=Zr(t),l=ai(e,t,n,o);return a(),Ai(),l});return i?s.unshift(r):s.push(r),r}}const Li=n=>(e,t=nn)=>{(!Hr||n==="sp")&&ma(n,(...i)=>e(...i),t)},mm=Li("bm"),ga=Li("m"),gm=Li("bu"),_m=Li("u"),vm=Li("bum"),Uc=Li("um"),xm=Li("sp"),Mm=Li("rtg"),Sm=Li("rtc");function ym(n,e=nn){ma("ec",n,e)}const bm="components",Zh=Symbol.for("v-ndc");function Ru(n){return It(n)?Em(bm,n,!1)||n:n||Zh}function Em(n,e,t=!0,i=!1){const s=Yt||nn;if(s){const r=s.type;{const a=ug(r,!1);if(a&&(a===e||a===pn(e)||a===ua(pn(e))))return r}const o=Pu(s[n]||r[n],e)||Pu(s.appContext[n],e);return!o&&i?r:o}}function Pu(n,e){return n&&(n[e]||n[pn(e)]||n[ua(pn(e))])}function Lt(n,e,t,i){let s;const r=t,o=Je(n);if(o||It(n)){const a=o&&ps(n);let l=!1,c=!1;a&&(l=!In(n),c=Ci(n),n=da(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?tr(Gn(n[u])):Gn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Tm(n,e,t={},i,s){if(Yt.ce||Yt.parent&&qs(Yt.parent)&&Yt.parent.ce){const c=Object.keys(t).length>0;return me(),js(ht,null,[Kt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),me();const o=r&&Jh(r(t)),a=t.key||o&&o.key,l=js(ht,{key:(a&&!Vn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Jh(n){return n.some(e=>Oc(e)?!(e.type===Ri||e.type===ht&&!Jh(e.children)):!0)?n:null}const yl=n=>n?vd(n)?xa(n):yl(n.parent):null,Lr=an(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yl(n.parent),$root:n=>yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=zh.bind(n.proxy)),$watch:n=>lm.bind(n)}),Da=(n,e)=>n!==Tt&&!n.__isScriptSetup&&mt(n,e),wm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==Tt&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==Tt&&mt(t,e))return o[e]=4,t[e];bl&&(o[e]=0)}}const c=Lr[e];let u,h;if(c)return e==="$attrs"&&tn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Tt&&mt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,mt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Da(s,e)?(s[e]=t,!0):i!==Tt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Tt&&a[0]!=="$"&&mt(n,a)||Da(e,a)||mt(r,a)||mt(i,a)||mt(Lr,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Du(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let bl=!0;function Am(n){const e=ed(n),t=n.proxy,i=n.ctx;bl=!1,e.beforeCreate&&Lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:T,unmounted:y,render:L,renderTracked:w,renderTriggered:I,errorCaptured:v,serverPrefetch:C,expose:k,inheritAttrs:N,components:G,directives:te,filters:re}=e;if(c&&Cm(c,i,null),o)for(const W in o){const V=o[W];it(V)&&(i[W]=V.bind(t))}if(s){const W=s.call(t,t);yt(W)&&(n.data=Br(W))}if(bl=!0,r)for(const W in r){const V=r[W],B=it(V)?V.bind(t,t):it(V.get)?V.get.bind(t,t):si,Me=!it(V)&&it(V.set)?V.set.bind(t):si,j=kt({get:B,set:Me});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>j.value,set:Se=>j.value=Se})}if(a)for(const W in a)Qh(a[W],i,t,W);if(l){const W=it(l)?l.call(t):l;Reflect.ownKeys(W).forEach(V=>{rm(V,W[V])})}u&&Lu(u,n,"c");function Z(W,V){Je(V)?V.forEach(B=>W(B.bind(t))):V&&W(V.bind(t))}if(Z(mm,h),Z(ga,f),Z(gm,d),Z(_m,g),Z(hm,M),Z(dm,m),Z(ym,v),Z(Sm,w),Z(Mm,I),Z(vm,x),Z(Uc,y),Z(xm,C),Je(k))if(k.length){const W=n.exposed||(n.exposed={});k.forEach(V=>{Object.defineProperty(W,V,{get:()=>t[V],set:B=>t[V]=B,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===si&&(n.render=L),N!=null&&(n.inheritAttrs=N),G&&(n.components=G),te&&(n.directives=te),C&&Yh(n)}function Cm(n,e,t=si){Je(n)&&(n=El(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Lo(s.from||i,s.default,!0):r=Lo(s.from||i):r=Lo(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Lu(n,e,t){ai(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qh(n,e,t,i){let s=i.includes(".")?qh(t,i):()=>t[i];if(It(n)){const r=e[n];it(r)&&Pr(s,r)}else if(it(n))Pr(s,n.bind(t));else if(yt(n))if(Je(n))n.forEach(r=>Qh(r,e,t,i));else{const r=it(n.handler)?n.handler.bind(t):e[n.handler];it(r)&&Pr(s,r,n)}}function ed(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),yt(e)&&r.set(e,l),l}function $o(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&$o(n,r,t,!0),s&&s.forEach(o=>$o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Rm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Rm={data:Iu,props:Uu,emits:Uu,methods:yr,computed:yr,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:yr,directives:yr,watch:Dm,provide:Iu,inject:Pm};function Iu(n,e){return e?n?function(){return an(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function Pm(n,e){return yr(El(n),El(e))}function El(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function un(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?an(Object.create(null),n,e):e}function Uu(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:an(Object.create(null),Du(n),Du(e??{})):e}function Dm(n,e){if(!n)return e;if(!e)return n;const t=an(Object.create(null),n);for(const i in e)t[i]=un(n[i],e[i]);return t}function td(){return{app:null,config:{isNativeTag:gh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lm=0;function Im(n,e){return function(i,s=null){it(i)||(i=an({},i)),s!=null&&!yt(s)&&(s=null);const r=td(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Lm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:hg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...h)):it(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Kt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,xa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ai(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ys;Ys=c;try{return u()}finally{Ys=h}}};return c}}let Ys=null;const Um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${vs(e)}Modifiers`];function Nm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let s=t;const r=e.startsWith("update:"),o=r&&Um(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>It(u)?u.trim():u)),o.number&&(s=t.map(fa)));let a,l=i[a=wa(e)]||i[a=wa(pn(e))];!l&&r&&(l=i[a=wa(vs(e))]),l&&ai(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ai(c,n,6,s)}}const Fm=new WeakMap;function nd(n,e,t=!1){const i=t?Fm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=nd(c,e,!0);u&&(a=!0,an(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(yt(n)&&i.set(n,null),null):(Je(r)?r.forEach(l=>o[l]=null):an(o,r),yt(n)&&i.set(n,o),o)}function _a(n,e){return!n||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,vs(e))||mt(n,e))}function Nu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:M}=n,m=Wo(n);let p,x;try{if(t.shapeFlag&4){const y=s||i,L=y;p=Jn(c.call(L,y,u,h,d,f,g)),x=a}else{const y=e;p=Jn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),x=e.props?a:Om(a)}}catch(y){Ir.length=0,pa(y,n,1),p=Kt(Ri)}let T=p;if(x&&M!==!1){const y=Object.keys(x),{shapeFlag:L}=T;y.length&&L&7&&(r&&y.some(aa)&&(x=Bm(x,r)),T=nr(T,x,!1,!0))}return t.dirs&&(T=nr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Ic(T,t.transition),p=T,Wo(m),p}const Om=n=>{let e;for(const t in n)(t==="class"||t==="style"||oa(t))&&((e||(e={}))[t]=n[t]);return e},Bm=(n,e)=>{const t={};for(const i in n)(!aa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function km(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Fu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(id(o,i,f)&&!_a(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fu(i,o,c):!0:!!o;return!1}function Fu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(id(e,n,r)&&!_a(t,r))return!0}return!1}function id(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!jr(i,s):i!==s}function zm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const sd={},rd=()=>Object.create(sd),od=n=>Object.getPrototypeOf(n)===sd;function Hm(n,e,t,i=!1){const s={},r=rd();n.propsDefaults=Object.create(null),ad(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:qp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Vm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=pt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_a(n.emitsOptions,f))continue;const d=e[f];if(l)if(mt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=pn(f);s[g]=Tl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{ad(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!mt(e,h)&&((u=vs(h))===h||!mt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Tl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!mt(e,h))&&(delete r[h],c=!0)}c&&Mi(n.attrs,"set","")}function ad(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ar(l))continue;const c=e[l];let u;s&&mt(s,u=pn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:_a(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=pt(t),c=a||Tt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Tl(s,l,h,c[h],n,!mt(c,h))}}return o}function Tl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Zr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vs(t))&&(i=!0))}return i}const Gm=new WeakMap;function ld(n,e,t=!1){const i=t?Gm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!it(n)){const u=h=>{l=!0;const[f,d]=ld(h,e,!0);an(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,Ws),Ws;if(Je(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Ou(h)&&(o[h]=Tt)}else if(r)for(const u in r){const h=pn(u);if(Ou(h)){const f=r[u],d=o[h]=Je(f)||it(f)?{type:f}:an({},f),g=d.type;let M=!1,m=!0;if(Je(g))for(let p=0;p<g.length;++p){const x=g[p],T=it(x)&&x.name;if(T==="Boolean"){M=!0;break}else T==="String"&&(m=!1)}else M=it(g)&&g.name==="Boolean";d[0]=M,d[1]=m,(M||mt(d,"default"))&&a.push(h)}}const c=[o,a];return yt(n)&&i.set(n,c),c}function Ou(n){return n[0]!=="$"&&!Ar(n)}const Nc=n=>n==="_"||n==="_ctx"||n==="$stable",Fc=n=>Je(n)?n.map(Jn):[Jn(n)],Wm=(n,e,t)=>{if(e._n)return e;const i=Xh((...s)=>Fc(e(...s)),t);return i._c=!1,i},cd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Nc(s))continue;const r=n[s];if(it(r))e[s]=Wm(s,r,i);else if(r!=null){const o=Fc(r);e[s]=()=>o}}},ud=(n,e)=>{const t=Fc(e);n.slots.default=()=>t},fd=(n,e,t)=>{for(const i in e)(t||!Nc(i))&&(n[i]=e[i])},Xm=(n,e,t)=>{const i=n.slots=rd();if(n.vnode.shapeFlag&32){const s=e._;s?(fd(i,e,t),t&&Mh(i,"_",s,!0)):cd(e,i)}else e&&ud(n,e)},$m=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:fd(s,e,t):(r=!e.$stable,cd(e,s)),o=e}else e&&(ud(n,e),o={default:1});if(r)for(const a in s)!Nc(a)&&o[a]==null&&delete s[a]},gn=Zm;function qm(n){return Ym(n)}function Ym(n,e){const t=ha();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=si,insertStaticContent:g}=n,M=(D,F,J,ae=null,ie=null,ce=null,ve=void 0,Ee=null,R=!!F.dynamicChildren)=>{if(D===F)return;D&&!fr(D,F)&&(ae=De(D),Se(D,ie,ce,!0),D=null),F.patchFlag===-2&&(R=!1,F.dynamicChildren=null);const{type:ue,ref:Te,shapeFlag:ye}=F;switch(ue){case va:m(D,F,J,ae);break;case Ri:p(D,F,J,ae);break;case Io:D==null&&x(F,J,ae,ve);break;case ht:G(D,F,J,ae,ie,ce,ve,Ee,R);break;default:ye&1?L(D,F,J,ae,ie,ce,ve,Ee,R):ye&6?te(D,F,J,ae,ie,ce,ve,Ee,R):(ye&64||ye&128)&&ue.process(D,F,J,ae,ie,ce,ve,Ee,R,Ye)}Te!=null&&ie?Dr(Te,D&&D.ref,ce,F||D,!F):Te==null&&D&&D.ref!=null&&Dr(D.ref,null,ce,D,!0)},m=(D,F,J,ae)=>{if(D==null)i(F.el=a(F.children),J,ae);else{const ie=F.el=D.el;F.children!==D.children&&c(ie,F.children)}},p=(D,F,J,ae)=>{D==null?i(F.el=l(F.children||""),J,ae):F.el=D.el},x=(D,F,J,ae)=>{[D.el,D.anchor]=g(D.children,F,J,ae,D.el,D.anchor)},T=({el:D,anchor:F},J,ae)=>{let ie;for(;D&&D!==F;)ie=f(D),i(D,J,ae),D=ie;i(F,J,ae)},y=({el:D,anchor:F})=>{let J;for(;D&&D!==F;)J=f(D),s(D),D=J;s(F)},L=(D,F,J,ae,ie,ce,ve,Ee,R)=>{if(F.type==="svg"?ve="svg":F.type==="math"&&(ve="mathml"),D==null)w(F,J,ae,ie,ce,ve,Ee,R);else{const ue=D.el&&D.el._isVueCE?D.el:null;try{ue&&ue._beginPatch(),C(D,F,ie,ce,ve,Ee,R)}finally{ue&&ue._endPatch()}}},w=(D,F,J,ae,ie,ce,ve,Ee)=>{let R,ue;const{props:Te,shapeFlag:ye,transition:se,dirs:Ne}=D;if(R=D.el=o(D.type,ce,Te&&Te.is,Te),ye&8?u(R,D.children):ye&16&&v(D.children,R,null,ae,ie,La(D,ce),ve,Ee),Ne&&Zi(D,null,ae,"created"),I(R,D,D.scopeId,ve,ae),Te){for(const _ in Te)_!=="value"&&!Ar(_)&&r(R,_,null,Te[_],ce,ae);"value"in Te&&r(R,"value",null,Te.value,ce),(ue=Te.onVnodeBeforeMount)&&qn(ue,ae,D)}Ne&&Zi(D,null,ae,"beforeMount");const E=jm(ie,se);E&&se.beforeEnter(R),i(R,F,J),((ue=Te&&Te.onVnodeMounted)||E||Ne)&&gn(()=>{try{ue&&qn(ue,ae,D),E&&se.enter(R),Ne&&Zi(D,null,ae,"mounted")}finally{}},ie)},I=(D,F,J,ae,ie)=>{if(J&&d(D,J),ae)for(let ce=0;ce<ae.length;ce++)d(D,ae[ce]);if(ie){let ce=ie.subTree;if(F===ce||md(ce.type)&&(ce.ssContent===F||ce.ssFallback===F)){const ve=ie.vnode;I(D,ve,ve.scopeId,ve.slotScopeIds,ie.parent)}}},v=(D,F,J,ae,ie,ce,ve,Ee,R=0)=>{for(let ue=R;ue<D.length;ue++){const Te=D[ue]=Ee?xi(D[ue]):Jn(D[ue]);M(null,Te,F,J,ae,ie,ce,ve,Ee)}},C=(D,F,J,ae,ie,ce,ve)=>{const Ee=F.el=D.el;let{patchFlag:R,dynamicChildren:ue,dirs:Te}=F;R|=D.patchFlag&16;const ye=D.props||Tt,se=F.props||Tt;let Ne;if(J&&Ji(J,!1),(Ne=se.onVnodeBeforeUpdate)&&qn(Ne,J,F,D),Te&&Zi(F,D,J,"beforeUpdate"),J&&Ji(J,!0),(ye.innerHTML&&se.innerHTML==null||ye.textContent&&se.textContent==null)&&u(Ee,""),ue?k(D.dynamicChildren,ue,Ee,J,ae,La(F,ie),ce):ve||V(D,F,Ee,null,J,ae,La(F,ie),ce,!1),R>0){if(R&16)N(Ee,ye,se,J,ie);else if(R&2&&ye.class!==se.class&&r(Ee,"class",null,se.class,ie),R&4&&r(Ee,"style",ye.style,se.style,ie),R&8){const E=F.dynamicProps;for(let _=0;_<E.length;_++){const b=E[_],A=ye[b],U=se[b];(U!==A||b==="value")&&r(Ee,b,A,U,ie,J)}}R&1&&D.children!==F.children&&u(Ee,F.children)}else!ve&&ue==null&&N(Ee,ye,se,J,ie);((Ne=se.onVnodeUpdated)||Te)&&gn(()=>{Ne&&qn(Ne,J,F,D),Te&&Zi(F,D,J,"updated")},ae)},k=(D,F,J,ae,ie,ce,ve)=>{for(let Ee=0;Ee<F.length;Ee++){const R=D[Ee],ue=F[Ee],Te=R.el&&(R.type===ht||!fr(R,ue)||R.shapeFlag&198)?h(R.el):J;M(R,ue,Te,null,ae,ie,ce,ve,!0)}},N=(D,F,J,ae,ie)=>{if(F!==J){if(F!==Tt)for(const ce in F)!Ar(ce)&&!(ce in J)&&r(D,ce,F[ce],null,ie,ae);for(const ce in J){if(Ar(ce))continue;const ve=J[ce],Ee=F[ce];ve!==Ee&&ce!=="value"&&r(D,ce,Ee,ve,ie,ae)}"value"in J&&r(D,"value",F.value,J.value,ie)}},G=(D,F,J,ae,ie,ce,ve,Ee,R)=>{const ue=F.el=D?D.el:a(""),Te=F.anchor=D?D.anchor:a("");let{patchFlag:ye,dynamicChildren:se,slotScopeIds:Ne}=F;Ne&&(Ee=Ee?Ee.concat(Ne):Ne),D==null?(i(ue,J,ae),i(Te,J,ae),v(F.children||[],J,Te,ie,ce,ve,Ee,R)):ye>0&&ye&64&&se&&D.dynamicChildren&&D.dynamicChildren.length===se.length?(k(D.dynamicChildren,se,J,ie,ce,ve,Ee),(F.key!=null||ie&&F===ie.subTree)&&hd(D,F,!0)):V(D,F,J,Te,ie,ce,ve,Ee,R)},te=(D,F,J,ae,ie,ce,ve,Ee,R)=>{F.slotScopeIds=Ee,D==null?F.shapeFlag&512?ie.ctx.activate(F,J,ae,ve,R):re(F,J,ae,ie,ce,ve,R):H(D,F,R)},re=(D,F,J,ae,ie,ce,ve)=>{const Ee=D.component=sg(D,ae,ie);if(jh(D)&&(Ee.ctx.renderer=Ye),og(Ee,!1,ve),Ee.asyncDep){if(ie&&ie.registerDep(Ee,Z,ve),!D.el){const R=Ee.subTree=Kt(Ri);p(null,R,F,J),D.placeholder=R.el}}else Z(Ee,D,F,J,ie,ce,ve)},H=(D,F,J)=>{const ae=F.component=D.component;if(km(D,F,J))if(ae.asyncDep&&!ae.asyncResolved){W(ae,F,J);return}else ae.next=F,ae.update();else F.el=D.el,ae.vnode=F},Z=(D,F,J,ae,ie,ce,ve)=>{const Ee=()=>{if(D.isMounted){let{next:ye,bu:se,u:Ne,parent:E,vnode:_}=D;{const Y=dd(D);if(Y){ye&&(ye.el=_.el,W(D,ye,ve)),Y.asyncDep.then(()=>{gn(()=>{D.isUnmounted||ue()},ie)});return}}let b=ye,A;Ji(D,!1),ye?(ye.el=_.el,W(D,ye,ve)):ye=_,se&&Do(se),(A=ye.props&&ye.props.onVnodeBeforeUpdate)&&qn(A,E,ye,_),Ji(D,!0);const U=Nu(D),q=D.subTree;D.subTree=U,M(q,U,h(q.el),De(q),D,ie,ce),ye.el=U.el,b===null&&zm(D,U.el),Ne&&gn(Ne,ie),(A=ye.props&&ye.props.onVnodeUpdated)&&gn(()=>qn(A,E,ye,_),ie)}else{let ye;const{el:se,props:Ne}=F,{bm:E,m:_,parent:b,root:A,type:U}=D,q=qs(F);Ji(D,!1),E&&Do(E),!q&&(ye=Ne&&Ne.onVnodeBeforeMount)&&qn(ye,b,F),Ji(D,!0);{A.ce&&A.ce._hasShadowRoot()&&A.ce._injectChildStyle(U,D.parent?D.parent.type:void 0);const Y=D.subTree=Nu(D);M(null,Y,J,ae,D,ie,ce),F.el=Y.el}if(_&&gn(_,ie),!q&&(ye=Ne&&Ne.onVnodeMounted)){const Y=F;gn(()=>qn(ye,b,Y),ie)}(F.shapeFlag&256||b&&qs(b.vnode)&&b.vnode.shapeFlag&256)&&D.a&&gn(D.a,ie),D.isMounted=!0,F=J=ae=null}};D.scope.on();const R=D.effect=new Eh(Ee);D.scope.off();const ue=D.update=R.run.bind(R),Te=D.job=R.runIfDirty.bind(R);Te.i=D,Te.id=D.uid,R.scheduler=()=>Lc(Te),Ji(D,!0),ue()},W=(D,F,J)=>{F.component=D;const ae=D.vnode.props;D.vnode=F,D.next=null,Vm(D,F.props,ae,J),$m(D,F.children,J),wi(),wu(D),Ai()},V=(D,F,J,ae,ie,ce,ve,Ee,R=!1)=>{const ue=D&&D.children,Te=D?D.shapeFlag:0,ye=F.children,{patchFlag:se,shapeFlag:Ne}=F;if(se>0){if(se&128){Me(ue,ye,J,ae,ie,ce,ve,Ee,R);return}else if(se&256){B(ue,ye,J,ae,ie,ce,ve,Ee,R);return}}Ne&8?(Te&16&&fe(ue,ie,ce),ye!==ue&&u(J,ye)):Te&16?Ne&16?Me(ue,ye,J,ae,ie,ce,ve,Ee,R):fe(ue,ie,ce,!0):(Te&8&&u(J,""),Ne&16&&v(ye,J,ae,ie,ce,ve,Ee,R))},B=(D,F,J,ae,ie,ce,ve,Ee,R)=>{D=D||Ws,F=F||Ws;const ue=D.length,Te=F.length,ye=Math.min(ue,Te);let se;for(se=0;se<ye;se++){const Ne=F[se]=R?xi(F[se]):Jn(F[se]);M(D[se],Ne,J,null,ie,ce,ve,Ee,R)}ue>Te?fe(D,ie,ce,!0,!1,ye):v(F,J,ae,ie,ce,ve,Ee,R,ye)},Me=(D,F,J,ae,ie,ce,ve,Ee,R)=>{let ue=0;const Te=F.length;let ye=D.length-1,se=Te-1;for(;ue<=ye&&ue<=se;){const Ne=D[ue],E=F[ue]=R?xi(F[ue]):Jn(F[ue]);if(fr(Ne,E))M(Ne,E,J,null,ie,ce,ve,Ee,R);else break;ue++}for(;ue<=ye&&ue<=se;){const Ne=D[ye],E=F[se]=R?xi(F[se]):Jn(F[se]);if(fr(Ne,E))M(Ne,E,J,null,ie,ce,ve,Ee,R);else break;ye--,se--}if(ue>ye){if(ue<=se){const Ne=se+1,E=Ne<Te?F[Ne].el:ae;for(;ue<=se;)M(null,F[ue]=R?xi(F[ue]):Jn(F[ue]),J,E,ie,ce,ve,Ee,R),ue++}}else if(ue>se)for(;ue<=ye;)Se(D[ue],ie,ce,!0),ue++;else{const Ne=ue,E=ue,_=new Map;for(ue=E;ue<=se;ue++){const he=F[ue]=R?xi(F[ue]):Jn(F[ue]);he.key!=null&&_.set(he.key,ue)}let b,A=0;const U=se-E+1;let q=!1,Y=0;const X=new Array(U);for(ue=0;ue<U;ue++)X[ue]=0;for(ue=Ne;ue<=ye;ue++){const he=D[ue];if(A>=U){Se(he,ie,ce,!0);continue}let _e;if(he.key!=null)_e=_.get(he.key);else for(b=E;b<=se;b++)if(X[b-E]===0&&fr(he,F[b])){_e=b;break}_e===void 0?Se(he,ie,ce,!0):(X[_e-E]=ue+1,_e>=Y?Y=_e:q=!0,M(he,F[_e],J,null,ie,ce,ve,Ee,R),A++)}const K=q?Km(X):Ws;for(b=K.length-1,ue=U-1;ue>=0;ue--){const he=E+ue,_e=F[he],pe=F[he+1],de=he+1<Te?pe.el||pd(pe):ae;X[ue]===0?M(null,_e,J,de,ie,ce,ve,Ee,R):q&&(b<0||ue!==K[b]?j(_e,J,de,2):b--)}}},j=(D,F,J,ae,ie=null)=>{const{el:ce,type:ve,transition:Ee,children:R,shapeFlag:ue}=D;if(ue&6){j(D.component.subTree,F,J,ae);return}if(ue&128){D.suspense.move(F,J,ae);return}if(ue&64){ve.move(D,F,J,Ye);return}if(ve===ht){i(ce,F,J);for(let ye=0;ye<R.length;ye++)j(R[ye],F,J,ae);i(D.anchor,F,J);return}if(ve===Io){T(D,F,J);return}if(ae!==2&&ue&1&&Ee)if(ae===0)Ee.beforeEnter(ce),i(ce,F,J),gn(()=>Ee.enter(ce),ie);else{const{leave:ye,delayLeave:se,afterLeave:Ne}=Ee,E=()=>{D.ctx.isUnmounted?s(ce):i(ce,F,J)},_=()=>{ce._isLeaving&&ce[fm](!0),ye(ce,()=>{E(),Ne&&Ne()})};se?se(ce,E,_):_()}else i(ce,F,J)},Se=(D,F,J,ae=!1,ie=!1)=>{const{type:ce,props:ve,ref:Ee,children:R,dynamicChildren:ue,shapeFlag:Te,patchFlag:ye,dirs:se,cacheIndex:Ne,memo:E}=D;if(ye===-2&&(ie=!1),Ee!=null&&(wi(),Dr(Ee,null,J,D,!0),Ai()),Ne!=null&&(F.renderCache[Ne]=void 0),Te&256){F.ctx.deactivate(D);return}const _=Te&1&&se,b=!qs(D);let A;if(b&&(A=ve&&ve.onVnodeBeforeUnmount)&&qn(A,F,D),Te&6)Qe(D.component,J,ae);else{if(Te&128){D.suspense.unmount(J,ae);return}_&&Zi(D,null,F,"beforeUnmount"),Te&64?D.type.remove(D,F,J,Ye,ae):ue&&!ue.hasOnce&&(ce!==ht||ye>0&&ye&64)?fe(ue,F,J,!1,!0):(ce===ht&&ye&384||!ie&&Te&16)&&fe(R,F,J),ae&&qe(D)}const U=E!=null&&Ne==null;(b&&(A=ve&&ve.onVnodeUnmounted)||_||U)&&gn(()=>{A&&qn(A,F,D),_&&Zi(D,null,F,"unmounted"),U&&(D.el=null)},J)},qe=D=>{const{type:F,el:J,anchor:ae,transition:ie}=D;if(F===ht){lt(J,ae);return}if(F===Io){y(D);return}const ce=()=>{s(J),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(D.shapeFlag&1&&ie&&!ie.persisted){const{leave:ve,delayLeave:Ee}=ie,R=()=>ve(J,ce);Ee?Ee(D.el,ce,R):R()}else ce()},lt=(D,F)=>{let J;for(;D!==F;)J=f(D),s(D),D=J;s(F)},Qe=(D,F,J)=>{const{bum:ae,scope:ie,job:ce,subTree:ve,um:Ee,m:R,a:ue}=D;Bu(R),Bu(ue),ae&&Do(ae),ie.stop(),ce&&(ce.flags|=8,Se(ve,D,F,J)),Ee&&gn(Ee,F),gn(()=>{D.isUnmounted=!0},F)},fe=(D,F,J,ae=!1,ie=!1,ce=0)=>{for(let ve=ce;ve<D.length;ve++)Se(D[ve],F,J,ae,ie)},De=D=>{if(D.shapeFlag&6)return De(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const F=f(D.anchor||D.el),J=F&&F[cm];return J?f(J):F};let we=!1;const $e=(D,F,J)=>{let ae;D==null?F._vnode&&(Se(F._vnode,null,null,!0),ae=F._vnode.component):M(F._vnode||null,D,F,null,null,null,J),F._vnode=D,we||(we=!0,wu(ae),Vh(),we=!1)},Ye={p:M,um:Se,m:j,r:qe,mt:re,mc:v,pc:V,pbc:k,n:De,o:n};return{render:$e,hydrate:void 0,createApp:Im($e)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function jm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hd(n,e,t=!1){const i=n.children,s=e.children;if(Je(i)&&Je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=xi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&hd(o,a)),a.type===va&&(a.patchFlag===-1&&(a=s[r]=xi(a)),a.el=o.el),a.type===Ri&&!a.el&&(a.el=o.el)}}function Km(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function dd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dd(e)}function Bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function pd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?pd(e.subTree):null}const md=n=>n.__isSuspense;function Zm(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):sm(n)}const ht=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),Ir=[];let An=null;function me(n=!1){Ir.push(An=n?null:[])}function Jm(){Ir.pop(),An=Ir[Ir.length-1]||null}let zr=1;function ku(n,e=!1){zr+=n,n<0&&An&&e&&(An.hasOnce=!0)}function gd(n){return n.dynamicChildren=zr>0?An||Ws:null,Jm(),zr>0&&An&&An.push(n),n}function xe(n,e,t,i,s,r){return gd(P(n,e,t,i,s,r,!0))}function js(n,e,t,i,s){return gd(Kt(n,e,t,i,s,!0))}function Oc(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const _d=({key:n})=>n??null,Uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?It(n)||on(n)||it(n)?{i:Yt,r:n,k:e,f:!!t}:n:null);function P(n,e=null,t=null,i=0,s=null,r=n===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_d(e),ref:e&&Uo(e),scopeId:Wh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Bc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=It(t)?8:16),zr>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const Kt=Qm;function Qm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Zh)&&(n=Ri),Oc(n)){const a=nr(n,e,!0);return t&&Bc(a,t),zr>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag=-2,a}if(fg(n)&&(n=n.__vccOpts),e){e=eg(e);let{class:a,style:l}=e;a&&!It(a)&&(e.class=xn(a)),yt(l)&&(Dc(l)&&!Je(l)&&(l=an({},l)),e.style=ar(l))}const o=It(n)?1:md(n)?128:um(n)?64:yt(n)?4:it(n)?2:0;return P(n,e,t,i,s,o,r,!0)}function eg(n){return n?Dc(n)||od(n)?an({},n):n:null}function nr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?tg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_d(c),ref:e&&e.ref?t&&r?Je(r)?r.concat(Uo(e)):[r,Uo(e)]:Uo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ic(u,l.clone(u)),u}function _n(n=" ",e=0){return Kt(va,null,n,e)}function Tn(n,e){const t=Kt(Io,null,n);return t.staticCount=e,t}function Nt(n="",e=!1){return e?(me(),js(Ri,null,n)):Kt(Ri,null,n)}function Jn(n){return n==null||typeof n=="boolean"?Kt(Ri):Je(n)?Kt(ht,null,n.slice()):Oc(n)?xi(n):Kt(va,null,String(n))}function xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function Bc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Bc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!od(e)?e._ctx=Yt:s===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[_n(e)]):t=8);n.children=e,n.shapeFlag|=t}function tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xn([e.class,i.class]));else if(s==="style")e.style=ar([e.style,i.style]);else if(oa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!aa(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function qn(n,e,t,i=null){ai(n,e,7,[t,i])}const ng=td();let ig=0;function sg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ng,r={uid:ig++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(i,s),emitsOptions:nd(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Nm.bind(null,r),n.ce&&n.ce(r),r}let nn=null;const rg=()=>nn||Yt;let qo,wl;{const n=ha(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qo=e("__VUE_INSTANCE_SETTERS__",t=>nn=t),wl=e("__VUE_SSR_SETTERS__",t=>Hr=t)}const Zr=n=>{const e=nn;return qo(n),n.scope.on(),()=>{n.scope.off(),qo(e)}},zu=()=>{nn&&nn.scope.off(),qo(null)};function vd(n){return n.vnode.shapeFlag&4}let Hr=!1;function og(n,e=!1,t=!1){e&&wl(e);const{props:i,children:s}=n.vnode,r=vd(n);Hm(n,i,r,e),Xm(n,s,t||e);const o=r?ag(n,e):void 0;return e&&wl(!1),o}function ag(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wm);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?cg(n):null,r=Zr(n),o=Kr(i,n,0,[n.props,s]),a=_h(o);if(Ai(),r(),(a||n.sp)&&!qs(n)&&Yh(n),a){if(o.then(zu,zu),e)return o.then(l=>{Hu(n,l)}).catch(l=>{pa(l,n,0)});n.asyncDep=o}else Hu(n,o)}else xd(n)}function Hu(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=Bh(e)),xd(n)}function xd(n,e,t){const i=n.type;n.render||(n.render=i.render||si);{const s=Zr(n);wi();try{Am(n)}finally{Ai(),s()}}}const lg={get(n,e){return tn(n,"get",""),n[e]}};function cg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,lg),slots:n.slots,emit:n.emit,expose:e}}function xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bh(Yp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function ug(n,e=!0){return it(n)?n.displayName||n.name:n.name||e&&n.__name}function fg(n){return it(n)&&"__vccOpts"in n}const kt=(n,e)=>Qp(n,e,Hr),hg="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Vu=typeof window<"u"&&window.trustedTypes;if(Vu)try{Al=Vu.createPolicy("vue",{createHTML:n=>n})}catch{}const Md=Al?n=>Al.createHTML(n):n=>n,dg="http://www.w3.org/2000/svg",pg="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,Gu=vi&&vi.createElement("template"),mg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?vi.createElementNS(dg,n):e==="mathml"?vi.createElementNS(pg,n):t?vi.createElement(n,{is:t}):vi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>vi.createTextNode(n),createComment:n=>vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Gu.innerHTML=Md(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gg=Symbol("_vtc");function _g(n,e,t){const i=n[gg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wu=Symbol("_vod"),vg=Symbol("_vsh"),xg=Symbol(""),Mg=/(?:^|;)\s*display\s*:/;function Sg(n,e,t){const i=n.style,s=It(t);let r=!1;if(t&&!s){if(e)if(It(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&br(i,a,"")}else for(const o in e)t[o]==null&&br(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?bg(n,o,!It(e)&&e?e[o]:void 0,a)||br(i,o,a):br(i,o,"")}}else if(s){if(e!==t){const o=i[xg];o&&(t+=";"+o),i.cssText=t,r=Mg.test(t)}}else e&&n.removeAttribute("style");Wu in n&&(n[Wu]=r?i.display:"",n[vg]&&(i.display="none"))}const Xu=/\s*!important$/;function br(n,e,t){if(Je(t))t.forEach(i=>br(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=yg(n,e);Xu.test(t)?n.setProperty(vs(i),t.replace(Xu,""),"important"):n[i]=t}}const $u=["Webkit","Moz","ms"],Ia={};function yg(n,e){const t=Ia[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return Ia[e]=i;i=ua(i);for(let s=0;s<$u.length;s++){const r=$u[s]+i;if(r in n)return Ia[e]=r}return e}function bg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&It(i)&&t===i}const qu="http://www.w3.org/1999/xlink";function Yu(n,e,t,i,s,r=Ep(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qu,e.slice(6,e.length)):n.setAttributeNS(qu,e,t):t==null||r&&!Sh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Vn(t)?String(t):t)}function ju(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Md(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Sh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function os(n,e,t,i){n.addEventListener(e,t,i)}function Eg(n,e,t,i){n.removeEventListener(e,t,i)}const Ku=Symbol("_vei");function Tg(n,e,t,i,s=null){const r=n[Ku]||(n[Ku]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=wg(e);if(i){const c=r[e]=Rg(i,s);os(n,a,c,l)}else o&&(Eg(n,a,o,l),r[e]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function wg(n){let e;if(Zu.test(n)){e={};let i;for(;i=n.match(Zu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vs(n.slice(2)),e]}let Ua=0;const Ag=Promise.resolve(),Cg=()=>Ua||(Ag.then(()=>Ua=0),Ua=Date.now());function Rg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ai(Pg(i,t.value),e,5,[i])};return t.value=n,t.attached=Cg(),t}function Pg(n,e){if(Je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?_g(n,i,o):e==="style"?Sg(n,t,i):oa(e)?aa(e)||Tg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lg(n,e,i,o))?(ju(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Ig(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!It(i)))?ju(n,pn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Yu(n,e,i,o))};function Lg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&It(t)?!1:e in n}function Ig(n,e){const t=n._def.props;if(!t)return!1;const i=pn(e);return Array.isArray(t)?t.some(s=>pn(s)===i):Object.keys(t).some(s=>pn(s)===i)}const Yo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Je(e)?t=>Do(e,t):e};function Ug(n){n.target.composing=!0}function Qu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign");function ef(n,e,t){return e&&(n=n.trim()),t&&(n=fa(n)),n}const rs={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ks]=Yo(s);const r=i||s.props&&s.props.type==="number";os(n,e?"change":"input",o=>{o.target.composing||n[Ks](ef(n.value,t,r))}),(t||r)&&os(n,"change",()=>{n.value=ef(n.value,t,r)}),e||(os(n,"compositionstart",Ug),os(n,"compositionend",Qu),os(n,"change",Qu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ks]=Yo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?fa(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},tf={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=la(e);os(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?fa(jo(o)):jo(o));n[Ks](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,zh(()=>{n._assigning=!1})}),n[Ks]=Yo(i)},mounted(n,{value:e}){nf(n,e)},beforeUpdate(n,e,t){n[Ks]=Yo(t)},updated(n,{value:e}){n._assigning||nf(n,e)}};function nf(n,e){const t=n.multiple,i=Je(e);if(!(t&&!i&&!la(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=jo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=wp(e,a)>-1}else o.selected=e.has(a);else if(jr(jo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function jo(n){return"_value"in n?n._value:n.value}const Ng=["ctrl","shift","alt","meta"],Fg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ng.some(t=>n[`${t}Key`]&&!e.includes(t))},us=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Fg[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Og=an({patchProp:Dg},mg);let sf;function Bg(){return sf||(sf=qm(Og))}const kg=(...n)=>{const e=Bg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Hg(i);if(!s)return;const r=e._component;!it(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,zg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Hg(n){return It(n)?document.querySelector(n):n}const rf=[{id:"running",name:"跑步",icon:"🏃",coinsPerMin:1,expPerMin:10,energyPerMin:5},{id:"gym",name:"健身房",icon:"🏋️",coinsPerMin:1.5,expPerMin:15,energyPerMin:8},{id:"ball",name:"球类运动",icon:"⚽",coinsPerMin:1.2,expPerMin:12,energyPerMin:6},{id:"cycling",name:"骑行",icon:"🚴",coinsPerMin:1,expPerMin:10,energyPerMin:4},{id:"other",name:"其他",icon:"💪",coinsPerMin:.8,expPerMin:8,energyPerMin:4}],sn={carrot:{name:"胡萝卜",icon:"🥕",growTime:2,price:10,sellPrice:15,unlock:null},tomato:{name:"番茄",icon:"🍅",growTime:4,price:25,sellPrice:38,unlock:null},corn:{name:"玉米",icon:"🌽",growTime:6,price:40,sellPrice:60,unlock:{level:3}},strawberry:{name:"草莓",icon:"🍓",growTime:8,price:60,sellPrice:90,unlock:{streak:7}},pumpkin:{name:"南瓜",icon:"🎃",growTime:12,price:100,sellPrice:150,unlock:{level:5}},grape:{name:"葡萄",icon:"🍇",growTime:18,price:150,sellPrice:225,unlock:{streak:14}},watermelon:{name:"西瓜",icon:"🍉",growTime:24,price:200,sellPrice:300,unlock:{level:7}},apple:{name:"苹果",icon:"🍎",growTime:48,price:400,sellPrice:600,unlock:{level:10}}},Ko={greenhouse:{name:"温室",icon:"🏠",price:500,effect:"作物生长加速2倍",unlock:{level:2}},warehouse:{name:"仓库",icon:"🏚️",price:1e3,effect:"存储上限+50",unlock:{level:3}},petHouse:{name:"宠物屋",icon:"🐕",price:2e3,effect:"饲养宠物",unlock:{streak:14}},mill:{name:"磨坊",icon:"⚙️",price:3e3,effect:"加工溢价50%",unlock:{level:5}},restaurant:{name:"餐厅",icon:"🍽️",price:5e3,effect:"烹饪增益",unlock:{streak:30}},gym:{name:"运动馆",icon:"🏟️",price:1e4,effect:"运动收益+10%",unlock:{level:10}}},Zs={chicken:{name:"小鸡",icon:"🐔",price:100,effect:"收益+5%",unlock:null},dog:{name:"小狗",icon:"🐕",price:500,effect:"防偷+10%",unlock:{level:3}},cat:{name:"小猫",icon:"🐱",price:500,effect:"产出+10%",unlock:{level:3}},rabbit:{name:"兔子",icon:"🐰",price:1e3,effect:"快速收获",unlock:{streak:14}},horse:{name:"马驹",icon:"🐴",price:3e3,effect:"运动效率+10%",unlock:{level:5}}},Vg={firstExercise:{name:"初次运动",desc:"完成首次运动",reward:{coins:100}},streak7:{name:"坚持不懈",desc:"连续运动7天",reward:{crops:["strawberry"]}},streak14:{name:"循序渐进",desc:"连续运动14天",reward:{crops:["grape"],buildings:["petHouse"]}},streak30:{name:"持之以恒",desc:"连续运动30天",reward:{crops:["grape"]}},level5:{name:"运动达人",desc:"达到5级",reward:{coins:500}},rich:{name:"农场主",desc:"金币超过10000",reward:{diamonds:100}}},No=[{level:1,exp:0,title:"青铜运动员"},{level:2,exp:1e3,title:"白银运动员"},{level:3,exp:3e3,title:"黄金运动员"},{level:5,exp:8e3,title:"铂金运动员"},{level:10,exp:2e4,title:"钻石运动员"}],Zo=[{id:"exercise_minutes",label:"运动总时长",unit:"分钟",hint:"挑战有效期内，累计完成运动分钟更多的一方获胜"},{id:"exercise_sessions",label:"运动打卡次数",unit:"次",hint:"挑战有效期内，完成「开始运动」打卡次数更多的一方获胜（每次打卡算一次）"}];function Qi(n){return Zo.find(e=>e.id===n)||Zo[0]}const Sd="fitfarm_user_state";function ms(n){const e={};for(const[t,i]of Object.entries(n||{})){const s=Math.max(0,Math.floor(Number(i)));s>0&&(e[t]=s)}return e}function Gg(n,e){const t={...ms(n)};for(const[i,s]of Object.entries(ms(e)))t[i]=(t[i]||0)+s;return t}function Cl(n,e){for(const[t,i]of Object.entries(ms(e)))if((n.crops[t]||0)<i)return!1;return!0}function Wg(n,e){const t=ms(e);if(!Cl(n,t))return!1;for(const[i,s]of Object.entries(t))n.crops[i]=(n.crops[i]||0)-s,n.crops[i]<=0&&delete n.crops[i];return!0}function Xg(n,e){for(const[t,i]of Object.entries(ms(e)))n.crops[t]=(n.crops[t]||0)+i}function Na(n){var t;let e=0;for(const i of n||[])e+=((t=Zs[i])==null?void 0:t.price)||0;return e}function $g(){return`pk_${Date.now()}_${Math.random().toString(36).slice(2,11)}`}const qg={coins:500,diamonds:10,energy:100,maxEnergy:100,level:1,experience:0,streakDays:0,lastExerciseDate:null,farmGrid:Array(9).fill(null).map((n,e)=>({id:e,crop:null,plantedAt:null,status:"empty"})),warehouse:{crops:{},items:{}},unlockedCrops:["carrot","tomato"],unlockedBuildings:[],unlockedPets:["chicken"],unlockedRecipes:[],activeBuffs:[],achievements:{},stats:{totalExerciseTime:0,totalCoinsEarned:0,totalStealCount:0,pkWins:0},dailyReset:null,stealCount:0,pkChallenges:[]};function Yg(){const n=localStorage.getItem(Sd);if(n){const e=JSON.parse(n),t=new Date().toDateString();return e.dailyReset!==t&&(e.dailyReset=t,e.stealCount=0,e.energy=Math.min(e.energy+20,e.maxEnergy)),Array.isArray(e.pkChallenges)||(e.pkChallenges=[]),Br(e)}return Br({...qg})}function jg(){localStorage.setItem(Sd,JSON.stringify(oe))}const oe=Yg();Pr(oe,jg,{deep:!0});const Ln={doExercise(n,e,t){const i=t.find(u=>u.id===n);if(!i)return{success:!1,message:"运动类型不存在"};const s=e*i.energyPerMin;if(oe.energy<s)return{success:!1,message:"体力不足"};let r=1,o=1;oe.activeBuffs.forEach(u=>{u.type==="gain"&&(r+=.15),u.type==="strength"&&(o+=.2)});const a=Math.floor(e*i.coinsPerMin*r),l=Math.floor(e*i.expPerMin*o);oe.coins+=a,oe.experience+=l,oe.energy-=s,oe.stats.totalExerciseTime+=e,oe.stats.totalCoinsEarned+=a,Ln.resolvePkChallengesIfNeeded(),Ln.recordPkExercise(e);const c=new Date().toDateString();if(oe.lastExerciseDate!==c){if(oe.lastExerciseDate){const u=new Date(oe.lastExerciseDate),h=new Date;h.setDate(h.getDate()-1),u.toDateString()===h.toDateString()?oe.streakDays++:oe.streakDays=1}else oe.streakDays=1;oe.lastExerciseDate=c,this.checkUnlocks()}return this.checkLevelUp(),{success:!0,coins:a,exp:l}},checkUnlocks(){Object.entries(sn).forEach(([n,e])=>{e.unlock&&!oe.unlockedCrops.includes(n)&&(e.unlock.level&&oe.level>=e.unlock.level&&oe.unlockedCrops.push(n),e.unlock.streak&&oe.streakDays>=e.unlock.streak&&oe.unlockedCrops.push(n))}),Object.entries(Ko).forEach(([n,e])=>{e.unlock&&!oe.unlockedBuildings.includes(n)&&(e.unlock.level&&oe.level>=e.unlock.level&&oe.unlockedBuildings.push(n),e.unlock.streak&&oe.streakDays>=e.unlock.streak&&oe.unlockedBuildings.push(n))})},checkLevelUp(){const n=No.find(e=>oe.experience>=e.exp);n&&n.level>oe.level&&(oe.level=n.level,this.checkUnlocks())},plantCrop(n,e){const t=sn[e];return t?oe.coins<t.price?{success:!1,message:"金币不足"}:oe.farmGrid[n].status!=="empty"?{success:!1,message:"地块不为空"}:(oe.coins-=t.price,oe.farmGrid[n]={id:n,crop:e,plantedAt:Date.now(),status:"growing"},{success:!0}):{success:!1,message:"作物不存在"}},harvestCrop(n){const e=oe.farmGrid[n];if(!e.crop||e.status!=="growing")return{success:!1,message:"无法收获"};const t=sn[e.crop],i=Date.now()-e.plantedAt,s=t.growTime*60*60*1e3;if(i<s)return{success:!1,message:"作物还未成熟"};const r=Math.floor(Math.random()*2)+1;return oe.warehouse.crops[e.crop]=(oe.warehouse.crops[e.crop]||0)+r,oe.farmGrid[n]={id:n,crop:null,plantedAt:null,status:"empty"},{success:!0,crop:e.crop,quantity:r}},buyItem(n,e,t){return oe.coins<t?{success:!1,message:"金币不足"}:(oe.coins-=t,n==="crop"?oe.warehouse.crops[e]=(oe.warehouse.crops[e]||0)+1:n==="building"?oe.unlockedBuildings.includes(e)||oe.unlockedBuildings.push(e):n==="pet"&&(oe.unlockedPets.includes(e)||oe.unlockedPets.push(e)),{success:!0})},resolvePkChallengesIfNeeded(){const n=Date.now();for(const e of oe.pkChallenges){if(e.status!=="active"||n<=e.endsAt)continue;let t=!1;if(e.pkType==="exercise_minutes"){const s=e.myScore||0,r=e.friendScore||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else if(e.pkType==="exercise_sessions"){const s=e.mySessions||0,r=e.friendSessions||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else t=Math.random()>=.5;e.status="settled",e.winnerSide=t?"me":"friend",e.settledAt=n;const i=e.escrow||{coins:0,crops:{}};t?(oe.coins+=i.coins||0,Xg(oe.warehouse,i.crops||{}),oe.stats.pkWins++,e.resultMessage=`你战胜了 ${e.friendName}，赢得全部赌注！`):e.resultMessage=`${e.friendName} 获胜，赌注归对方（单机演示：你的下注已扣除）`}},recordPkExercise(n){const e=Date.now();for(const t of oe.pkChallenges)if(t.status==="active"&&!(e<t.startsAt||e>t.endsAt))if(t.pkType==="exercise_minutes"){t.myScore=(t.myScore||0)+n;const i=Math.floor(10+Math.random()*32);t.friendScore=(t.friendScore||0)+i}else t.pkType==="exercise_sessions"&&(t.mySessions=(t.mySessions||0)+1,Math.random()>.38&&(t.friendSessions=(t.friendSessions||0)+1));Ln.resolvePkChallengesIfNeeded()},createPkChallenge(n){const{friendId:e,friendName:t,durationDays:i,pkType:s,ruleNote:r,stakes:o}=n,a=Math.min(30,Math.max(1,Math.floor(Number(i))||7));if(!Zo.find(g=>g.id===s))return{success:!1,message:"无效的 PK 类型"};const l=ms((o==null?void 0:o.crops)||{}),c=Math.max(0,Math.floor(Number(o==null?void 0:o.coins)||0)),u=Array.isArray(o==null?void 0:o.petIds)?o.petIds.filter(Boolean):[],h=Na(u);if(!(c>0||Object.keys(l).length>0||u.length>0))return{success:!1,message:"请至少下注金币、作物或宠物（宠物按原价折算金币押注）"};const d=c+h;return oe.coins<d?{success:!1,message:"金币不足以支付下注与宠物折算"}:Cl(oe.warehouse,l)?(oe.pkChallenges.push({id:$g(),friendId:e,friendName:t,durationDays:a,pkType:s,ruleNote:(r||"").slice(0,200),status:"pending",createdAt:Date.now(),startsAt:null,endsAt:null,myScore:0,friendScore:0,mySessions:0,friendSessions:0,stakesMe:{crops:{...l},coins:c,petIds:[...u]},stakesFriend:null,escrow:null,winnerSide:null,settledAt:null,resultMessage:""}),{success:!0}):{success:!1,message:"仓库作物不足以支付下注"}},acceptPkChallenge(n,e){const t=oe.pkChallenges.find(c=>c.id===n&&c.status==="pending");if(!t)return{success:!1,message:"挑战不存在或已处理"};const i=t.stakesMe,s=(i.coins||0)+Na(i.petIds||[]);if(oe.coins<s)return{success:!1,message:"金币不足，无法成立 PK"};if(!Cl(oe.warehouse,i.crops||{}))return{success:!1,message:"仓库作物不足，无法成立 PK（发起后请勿动用下注作物）"};const r={crops:ms((e==null?void 0:e.crops)||{}),coins:Math.max(0,Math.floor(Number(e==null?void 0:e.coins)||0)),petIds:Array.isArray(e==null?void 0:e.petIds)?e.petIds.filter(Boolean):[]};if(!(r.coins>0||Object.keys(r.crops).length>0||r.petIds.length>0))return{success:!1,message:"请为好友填写赌注后双方才算协商同意"};oe.coins-=s,Wg(oe.warehouse,i.crops||{});const a=s+r.coins+Na(r.petIds),l=Gg(i.crops||{},r.crops);return t.escrow={coins:a,crops:l},t.stakesFriend=r,t.startsAt=Date.now(),t.endsAt=t.startsAt+t.durationDays*864e5,t.status="active",t.myScore=0,t.friendScore=0,t.mySessions=0,t.friendSessions=0,t.resultMessage="",{success:!0}},cancelPkChallenge(n){const e=oe.pkChallenges.findIndex(t=>t.id===n&&t.status==="pending");return e===-1?{success:!1,message:"只能取消待确认的挑战"}:(oe.pkChallenges.splice(e,1),{success:!0})}},Wn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Kg={class:"crop-svg",viewBox:"0 0 72 88",xmlns:"http://www.w3.org/2000/svg"},Zg={key:0,class:"plant-root"},Jg={key:1,class:"plant-round"},Qg={key:2,class:"plant-corn"},e0={key:3,class:"plant-berry"},t0={key:4,class:"plant-pumpkin"},n0={key:5,class:"plant-grape"},i0={key:6,class:"plant-melon"},s0={key:7,class:"plant-apple"},r0={key:8,class:"plant-default"},o0={__name:"CropSprite",props:{cropId:{type:String,required:!0},progress:{type:Number,default:1},ready:{type:Boolean,default:!1},growing:{type:Boolean,default:!1}},setup(n){const e=n,t=kt(()=>.38+Math.min(1,Math.max(0,e.progress))*.62);return(i,s)=>(me(),xe("div",{class:xn(["crop-sprite",{ready:n.ready,sway:!n.ready&&n.growing}]),style:ar({"--growth":t.value}),"aria-hidden":"true"},[(me(),xe("svg",Kg,[n.cropId==="carrot"?(me(),xe("g",Zg,[...s[0]||(s[0]=[P("path",{fill:"#2E7D32",d:"M28 8c4-6 12-8 18-4 2 8-4 14-10 18l-4-6z M38 10c6-4 14-2 18 4-2 8-10 12-16 14l-2-8z"},null,-1),P("path",{fill:"#FF8F00",d:"M34 22 L38 78 Q36 84 30 84 Q26 82 28 76 Z"},null,-1),P("path",{fill:"#FFA726",d:"M36 28 L40 72 Q38 80 32 80 Q28 78 30 72 Z",opacity:"0.85"},null,-1),P("path",{fill:"#E65100",d:"M34 50 Q38 52 36 58 Q32 56 34 50",opacity:"0.35"},null,-1)])])):n.cropId==="tomato"?(me(),xe("g",Jg,[...s[1]||(s[1]=[Tn('<ellipse cx="36" cy="68" rx="22" ry="10" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><circle cx="36" cy="42" r="22" fill="#E53935" data-v-321ac93c></circle><circle cx="30" cy="38" r="6" fill="#FFCDD2" opacity="0.45" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 22 Q36 14 44 22 Q40 28 36 30 Q32 28 28 22" data-v-321ac93c></path><path fill="#1B5E20" d="M34 18 L36 26 L38 18 Z" data-v-321ac93c></path>',5)])])):n.cropId==="corn"?(me(),xe("g",Qg,[...s[2]||(s[2]=[Tn('<ellipse cx="36" cy="72" rx="18" ry="8" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#558B2F" d="M32 76 L34 28 L38 28 L40 76 Z" data-v-321ac93c></path><path fill="#FDD835" d="M34 32 Q36 24 38 32 L39 68 Q36 72 33 68 Z" data-v-321ac93c></path><path fill="#FFF59D" d="M35 36 h4 v4 h-4z M35 44 h4 v4 h-4z M35 52 h4 v4 h-4z" opacity="0.6" data-v-321ac93c></path><path fill="#33691E" d="M30 30 Q36 18 42 30 Q38 34 36 36 Q34 34 30 30" data-v-321ac93c></path>',5)])])):n.cropId==="strawberry"?(me(),xe("g",e0,[...s[3]||(s[3]=[Tn('<ellipse cx="36" cy="74" rx="16" ry="7" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#C62828" d="M24 48 Q36 28 48 48 Q44 68 36 76 Q28 68 24 48" data-v-321ac93c></path><circle cx="30" cy="52" r="2" fill="#FFEBEE" opacity="0.5" data-v-321ac93c></circle><circle cx="38" cy="58" r="1.8" fill="#FFEBEE" opacity="0.45" data-v-321ac93c></circle><circle cx="34" cy="64" r="1.5" fill="#FFEBEE" opacity="0.4" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 44 Q36 34 44 44 Q40 46 36 48 Q32 46 28 44" data-v-321ac93c></path>',6)])])):n.cropId==="pumpkin"?(me(),xe("g",t0,[...s[4]||(s[4]=[P("ellipse",{cx:"36",cy:"70",rx:"24",ry:"9",fill:"#3E2723",opacity:"0.08"},null,-1),P("ellipse",{cx:"36",cy:"46",rx:"26",ry:"22",fill:"#FB8C00"},null,-1),P("path",{stroke:"#EF6C00","stroke-width":"2",fill:"none",d:"M22 46 Q36 34 50 46 M26 52 Q36 42 46 52 M28 58 Q36 50 44 58",opacity:"0.5"},null,-1),P("path",{fill:"#5D4037",d:"M34 26 Q36 18 38 26 L37 34 Z"},null,-1)])])):n.cropId==="grape"?(me(),xe("g",n0,[...s[5]||(s[5]=[Tn('<ellipse cx="36" cy="76" rx="14" ry="6" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><path fill="#6A1B9A" d="M34 78 L36 32 L38 78 Z" opacity="0.35" data-v-321ac93c></path><circle cx="30" cy="44" r="8" fill="#8E24AA" data-v-321ac93c></circle><circle cx="42" cy="44" r="8" fill="#7B1FA2" data-v-321ac93c></circle><circle cx="36" cy="56" r="9" fill="#9C27B0" data-v-321ac93c></circle><circle cx="30" cy="66" r="7" fill="#AB47BC" data-v-321ac93c></circle><circle cx="42" cy="66" r="7" fill="#8E24AA" data-v-321ac93c></circle><path fill="#33691E" d="M32 28 Q36 20 40 28 L38 36 Z" data-v-321ac93c></path>',8)])])):n.cropId==="watermelon"?(me(),xe("g",i0,[...s[6]||(s[6]=[Tn('<ellipse cx="36" cy="74" rx="26" ry="10" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><ellipse cx="36" cy="48" rx="28" ry="24" fill="#2E7D32" data-v-321ac93c></ellipse><path stroke="#1B5E20" stroke-width="3" fill="none" d="M14 48 Q36 28 58 48" opacity="0.5" data-v-321ac93c></path><ellipse cx="36" cy="48" rx="22" ry="18" fill="#C62828" opacity="0.92" data-v-321ac93c></ellipse><circle cx="28" cy="46" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="40" cy="52" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="34" cy="56" r="1.5" fill="#1B1B1B" data-v-321ac93c></circle>',7)])])):n.cropId==="apple"?(me(),xe("g",s0,[...s[7]||(s[7]=[Tn('<ellipse cx="36" cy="76" rx="12" ry="5" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><path fill="#5D4037" d="M34 76 L36 44 L38 76 Z" data-v-321ac93c></path><circle cx="36" cy="38" r="18" fill="#43A047" data-v-321ac93c></circle><circle cx="28" cy="34" r="6" fill="#66BB6A" opacity="0.5" data-v-321ac93c></circle><circle cx="44" cy="36" r="5" fill="#66BB6A" opacity="0.45" data-v-321ac93c></circle><circle cx="36" cy="42" r="10" fill="#E53935" data-v-321ac93c></circle><path d="M36 28 Q38 22 42 24" stroke="#6D4C41" stroke-width="1.5" fill="none" stroke-linecap="round" data-v-321ac93c></path>',7)])])):(me(),xe("g",r0,[...s[8]||(s[8]=[P("path",{fill:"#43A047",d:"M28 72 Q36 48 44 72 Z"},null,-1),P("path",{fill:"#66BB6A",d:"M32 60 Q36 44 40 60 Z"},null,-1)])]))]))],6))}},kc=Wn(o0,[["__scopeId","data-v-321ac93c"]]),a0={},l0={class:"backdrop","aria-hidden":"true"};function c0(n,e){return me(),xe("div",l0,[...e[0]||(e[0]=[Tn('<div class="sky" data-v-8c74a6cf></div><div class="sun" data-v-8c74a6cf></div><svg class="cloud cloud-a" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="40" cy="28" rx="28" ry="18" fill="#fff" opacity="0.92" data-v-8c74a6cf></ellipse><ellipse cx="68" cy="26" rx="34" ry="22" fill="#fff" opacity="0.95" data-v-8c74a6cf></ellipse><ellipse cx="92" cy="30" rx="22" ry="14" fill="#fff" opacity="0.88" data-v-8c74a6cf></ellipse></svg><svg class="cloud cloud-b" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="30" cy="22" rx="22" ry="14" fill="#fff" opacity="0.85" data-v-8c74a6cf></ellipse><ellipse cx="52" cy="20" rx="28" ry="18" fill="#fff" opacity="0.9" data-v-8c74a6cf></ellipse><ellipse cx="74" cy="24" rx="18" ry="12" fill="#fff" opacity="0.82" data-v-8c74a6cf></ellipse></svg><svg class="hills" viewBox="0 0 400 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><path d="M0,55 Q80,35 160,50 T320,42 Q360,38 400,48 L400,80 L0,80 Z" fill="#7CB342" data-v-8c74a6cf></path><path d="M0,62 Q100,48 200,58 T400,52 L400,80 L0,80 Z" fill="#689F38" opacity="0.95" data-v-8c74a6cf></path><path d="M0,68 Q200,60 400,65 L400,80 L0,80 Z" fill="#558B2F" data-v-8c74a6cf></path></svg>',5)])])}const u0=Wn(a0,[["render",c0],["__scopeId","data-v-8c74a6cf"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="184",Js={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f0=0,of=1,h0=2,Fo=1,yd=2,Er=3,$i=0,Mn=1,On=2,bi=0,Qs=1,af=2,lf=3,cf=4,d0=5,as=100,p0=101,m0=102,g0=103,_0=104,v0=200,x0=201,M0=202,S0=203,Rl=204,Pl=205,y0=206,b0=207,E0=208,T0=209,w0=210,A0=211,C0=212,R0=213,P0=214,Dl=0,Ll=1,Il=2,ir=3,Ul=4,Nl=5,Fl=6,Ol=7,bd=0,D0=1,L0=2,ri=0,Ed=1,Td=2,wd=3,Hc=4,Ad=5,Cd=6,Rd=7,Pd=300,gs=301,sr=302,Fa=303,Oa=304,Ma=306,Jo=1e3,yi=1001,Bl=1002,jt=1003,I0=1004,so=1005,rn=1006,Ba=1007,fs=1008,wn=1009,Dd=1010,Ld=1011,Vr=1012,Vc=1013,li=1014,ni=1015,Pi=1016,Gc=1017,Wc=1018,Gr=1020,Id=35902,Ud=35899,Nd=1021,Fd=1022,kn=1023,Di=1026,hs=1027,Od=1028,Xc=1029,_s=1030,$c=1031,qc=1033,Oo=33776,Bo=33777,ko=33778,zo=33779,kl=35840,zl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,$l=37488,ql=37489,Qo=37490,Yl=37491,jl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,cc=36492,uc=36494,fc=36495,hc=36283,dc=36284,ea=36285,pc=36286,U0=3200,mc=0,N0=1,Wi="",hn="srgb",ta="srgb-linear",na="linear",gt="srgb",ys=7680,uf=519,F0=512,O0=513,B0=514,Yc=515,k0=516,z0=517,jc=518,H0=519,gc=35044,ff="300 es",ii=2e3,Wr=2001;function V0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G0(){const n=Xr("canvas");return n.style.display="block",n}const hf={};function ia(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ze(...n){n=Bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ut(...n){n=Bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function _c(...n){const e=n.join(" ");e in hf||(hf[e]=!0,Ze(...n))}function W0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const X0={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[ir]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:ir};class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let df=1234567;const Ur=Math.PI/180,$r=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function Kc(n,e){return(n%e+e)%e}function $0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function q0(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function Y0(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function j0(n,e=1){return e-Math.abs(Kc(n,e*2)-e)}function K0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Z0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function J0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Q0(n,e){return n+Math.random()*(e-n)}function e_(n){return n*(.5-Math.random())}function t_(n){n!==void 0&&(df=n);let e=df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n_(n){return n*Ur}function i_(n){return n*$r}function s_(n){return(n&n-1)===0&&n!==0}function r_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function o_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tr={DEG2RAD:Ur,RAD2DEG:$r,generateUUID:Ei,clamp:at,euclideanModulo:Kc,mapLinear:$0,inverseLerp:q0,lerp:Nr,damp:Y0,pingpong:j0,smoothstep:K0,smootherstep:Z0,randInt:J0,randFloat:Q0,randFloatSpread:e_,seededRandom:t_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:vt,denormalize:Bn},cu=class cu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;let We=cu;class qi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(h!==M||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*M;m<0&&(f=-f,d=-d,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),T=Math.sin(x);p=Math.sin(p*x)/T,a=Math.sin(a*x)/T,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+M*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+M*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uu=class uu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uu.prototype.isVector3=!0;let z=uu;const ka=new z,pf=new qi,fu=class fu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],M=s[0],m=s[3],p=s[6],x=s[1],T=s[4],y=s[7],L=s[2],w=s[5],I=s[8];return r[0]=o*M+a*x+l*L,r[3]=o*m+a*T+l*w,r[6]=o*p+a*y+l*I,r[1]=c*M+u*x+h*L,r[4]=c*m+u*T+h*w,r[7]=c*p+u*y+h*I,r[2]=f*M+d*x+g*L,r[5]=f*m+d*T+g*w,r[8]=f*p+d*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fu.prototype.isMatrix3=!0;let tt=fu;const za=new tt,mf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){const n={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _c("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _c("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ta]:{primaries:e,whitePoint:i,transfer:na,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const ft=l_();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class c_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=Xr("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u_=0;class Zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?c_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let f_=0;const Va=new z;class Zt extends ji{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=yi,s=yi,r=rn,o=fs,a=kn,l=wn,c=Zt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Ei(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Pd;Zt.DEFAULT_ANISOTROPY=1;const hu=class hu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(d+1)/2,L=(p+1)/2,w=(u+f)/4,I=(h+M)/4,v=(g+m)/4;return T>y&&T>L?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=I/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=v/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=I/r,s=v/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-M)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;let Ft=hu;class h_ extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends h_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kd extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ra=class ra{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,M,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,M=c*h;t[0]=f+M*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,M=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Fi.crossVectors(i,yn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Fi.crossVectors(i,yn)),Fi.normalize(),ro.crossVectors(yn,Fi),s[0]=Fi.x,s[4]=ro.x,s[8]=yn.x,s[1]=Fi.y,s[5]=ro.y,s[9]=yn.y,s[2]=Fi.z,s[6]=ro.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],M=i[6],m=i[10],p=i[14],x=i[3],T=i[7],y=i[11],L=i[15],w=s[0],I=s[4],v=s[8],C=s[12],k=s[1],N=s[5],G=s[9],te=s[13],re=s[2],H=s[6],Z=s[10],W=s[14],V=s[3],B=s[7],Me=s[11],j=s[15];return r[0]=o*w+a*k+l*re+c*V,r[4]=o*I+a*N+l*H+c*B,r[8]=o*v+a*G+l*Z+c*Me,r[12]=o*C+a*te+l*W+c*j,r[1]=u*w+h*k+f*re+d*V,r[5]=u*I+h*N+f*H+d*B,r[9]=u*v+h*G+f*Z+d*Me,r[13]=u*C+h*te+f*W+d*j,r[2]=g*w+M*k+m*re+p*V,r[6]=g*I+M*N+m*H+p*B,r[10]=g*v+M*G+m*Z+p*Me,r[14]=g*C+M*te+m*W+p*j,r[3]=x*w+T*k+y*re+L*V,r[7]=x*I+T*N+y*H+L*B,r[11]=x*v+T*G+y*Z+L*Me,r[15]=x*C+T*te+y*W+L*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],M=e[7],m=e[11],p=e[15],x=l*d-c*f,T=a*d-c*h,y=a*f-l*h,L=o*d-c*u,w=o*f-l*u,I=o*h-a*u;return t*(M*x-m*T+p*y)-i*(g*x-m*L+p*w)+s*(g*T-M*L+p*I)-r*(g*y-M*w+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],M=e[13],m=e[14],p=e[15],x=t*a-i*o,T=t*l-s*o,y=t*c-r*o,L=i*l-s*a,w=i*c-r*a,I=s*c-r*l,v=u*M-h*g,C=u*m-f*g,k=u*p-d*g,N=h*m-f*M,G=h*p-d*M,te=f*p-d*m,re=x*te-T*G+y*N+L*k-w*C+I*v;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/re;return e[0]=(a*te-l*G+c*N)*H,e[1]=(s*G-i*te-r*N)*H,e[2]=(M*I-m*w+p*L)*H,e[3]=(f*w-h*I-d*L)*H,e[4]=(l*k-o*te-c*C)*H,e[5]=(t*te-s*k+r*C)*H,e[6]=(m*y-g*I-p*T)*H,e[7]=(u*I-f*y+d*T)*H,e[8]=(o*G-a*k+c*v)*H,e[9]=(i*k-t*G-r*v)*H,e[10]=(g*w-M*y+p*x)*H,e[11]=(h*y-u*w-d*x)*H,e[12]=(a*C-o*N-l*v)*H,e[13]=(t*N-i*C+s*v)*H,e[14]=(M*T-g*L-m*x)*H,e[15]=(u*L-h*T+f*x)*H,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,M=o*u,m=o*h,p=a*h,x=l*c,T=l*u,y=l*h,L=i.x,w=i.y,I=i.z;return s[0]=(1-(M+p))*L,s[1]=(d+y)*L,s[2]=(g-T)*L,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+T)*I,s[9]=(m-x)*I,s[10]=(1-(f+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Es.set(s[0],s[1],s[2]).length();const a=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const c=1/o,u=1/a,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ii,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Wr)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ii,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===ii)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===Wr)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ra.prototype.isMatrix4=!0;let Pt=ra;const Es=new z,Un=new Pt,p_=new z(0,0,0),m_=new z(1,1,1),Fi=new z,ro=new z,yn=new z,_f=new Pt,vf=new qi;class Yi{constructor(e=0,t=0,i=0,s=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const xf=new z,Ts=new qi,hi=new Pt,oo=new z,hr=new z,__=new z,v_=new qi,Mf=new z(1,0,0),Sf=new z(0,1,0),yf=new z(0,0,1),bf={type:"added"},x_={type:"removed"},ws={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Gt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new Yi,i=new qi,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new tt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(hr,oo,this.up):hi.lookAt(oo,hr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(hi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),ws.child=e,this.dispatchEvent(ws),ws.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _t extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M_={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Kc(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xa(o,r,e+1/3),this.g=Xa(o,r,e),this.b=Xa(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=zd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return ft.workingToColorSpace(en.copy(this),e),Math.round(at(en.r*255,0,255))*65536+Math.round(at(en.g*255,0,255))*256+Math.round(at(en.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(en.copy(this),t);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=hn){ft.workingToColorSpace(en.copy(this),e);const t=en.r,i=en.g,s=en.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ao);const i=Nr(Oi.h,ao.h,t),s=Nr(Oi.s,ao.s,t),r=Nr(Oi.l,ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ct;ct.NAMES=zd;class Qc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=i}clone(){return new Qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class S_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new z,di=new z,$a=new z,pi=new z,As=new z,Cs=new z,Ef=new z,qa=new z,Ya=new z,ja=new z,Ka=new Ft,Za=new Ft,Ja=new Ft;class Dn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),di.subVectors(i,t),$a.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(di),l=Nn.dot($a),c=di.dot(di),u=di.dot($a),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector(Za,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),di.subVectors(e,t),Nn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),Cs.subVectors(r,i),qa.subVectors(e,i);const l=As.dot(qa),c=Cs.dot(qa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,s);const u=As.dot(Ya),h=Cs.dot(Ya);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(As,o);ja.subVectors(e,r);const d=As.dot(ja),g=Cs.dot(ja);if(g>=0&&d<=g)return t.copy(r);const M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ef.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ef,a);const p=1/(m+M+f);return o=M*p,a=f*p,t.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),co.subVectors(this.max,dr),Rs.subVectors(e.a,dr),Ps.subVectors(e.b,dr),Ds.subVectors(e.c,dr),Bi.subVectors(Ps,Rs),ki.subVectors(Ds,Ps),es.subVectors(Rs,Ds);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-es.z,es.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,es.z,0,-es.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-es.y,es.x,0];return!Qa(t,Rs,Ps,Ds,co)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Rs,Ps,Ds,co))?!1:(uo.crossVectors(Bi,ki),t=[uo.x,uo.y,uo.z],Qa(t,Rs,Ps,Ds,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new z,new z,new z,new z,new z,new z,new z,new z],Fn=new z,lo=new Jr,Rs=new z,Ps=new z,Ds=new z,Bi=new z,ki=new z,es=new z,dr=new z,co=new z,uo=new z,ts=new z;function Qa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zt=new z,fo=new We;let y_=0;class Hn extends ji{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hd extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vd extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const b_=new Jr,pr=new z,el=new z;class eu{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):b_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(el)),this.expandByPoint(pr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E_=0;const Rn=new Pt,tl=new Gt,Ls=new z,bn=new Jr,mr=new Jr,$t=new z;class ln extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V0(e)?Vd:Hd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(bn.min,mr.min),bn.expandByPoint($t),$t.addVectors(bn.max,mr.max),bn.expandByPoint($t)):(bn.expandByPoint(mr.min),bn.expandByPoint(mr.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),$t.add(Ls)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new z,l[v]=new z;const c=new z,u=new z,h=new z,f=new We,d=new We,g=new We,M=new z,m=new z;function p(v,C,k){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,k),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,k),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[v].add(M),a[C].add(M),a[k].add(M),l[v].add(m),l[C].add(m),l[k].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,C=x.length;v<C;++v){const k=x[v],N=k.start,G=k.count;for(let te=N,re=N+G;te<re;te+=3)p(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const T=new z,y=new z,L=new z,w=new z;function I(v){L.fromBufferAttribute(s,v),w.copy(L);const C=a[v];T.copy(C),T.sub(L.multiplyScalar(L.dot(C))).normalize(),y.crossVectors(w,C);const N=y.dot(l[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,N)}for(let v=0,C=x.length;v<C;++v){const k=x[v],N=k.start,G=k.count;for(let te=N,re=N+G;te<re;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Hn(f,u,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class T_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new z;class sa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let w_=0;class lr extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Qs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gd extends lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Is;const gr=new z,Us=new z,Ns=new z,Fs=new We,_r=new We,Wd=new Pt,ho=new z,vr=new z,po=new z,Tf=new We,nl=new We,wf=new We;class A_ extends Gt{constructor(e=new Gd){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new T_(t,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new sa(i,3,0,!1)),Is.setAttribute("uv",new sa(i,2,3,!1))}this.geometry=Is,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;mo(ho.set(-.5,-.5,0),Ns,o,Us,s,r),mo(vr.set(.5,-.5,0),Ns,o,Us,s,r),mo(po.set(.5,.5,0),Ns,o,Us,s,r),Tf.set(0,0),nl.set(1,0),wf.set(1,1);let a=e.ray.intersectTriangle(ho,vr,po,!1,gr);if(a===null&&(mo(vr.set(-.5,.5,0),Ns,o,Us,s,r),nl.set(0,1),a=e.ray.intersectTriangle(ho,po,vr,!1,gr),a===null))return;const l=e.ray.origin.distanceTo(gr);l<e.near||l>e.far||t.push({distance:l,point:gr.clone(),uv:Dn.getInterpolation(gr,ho,vr,po,Tf,nl,wf,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mo(n,e,t,i,s,r){Fs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Fs.x-s*Fs.y,_r.y=s*Fs.x+r*Fs.y):_r.copy(Fs),n.copy(e),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(Wd)}const gi=new z,il=new z,go=new z,zi=new z,sl=new z,_o=new z,rl=new z;class tu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){il.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(il);const r=e.distanceTo(t)*.5,o=-this.direction.dot(go),a=zi.dot(this.direction),l=-zi.dot(go),c=zi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const M=1/u;h*=M,f*=M,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(il).addScaledVector(go,f),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){sl.subVectors(t,e),_o.subVectors(i,e),rl.crossVectors(sl,_o);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(_o.crossVectors(zi,_o));if(l<0)return null;const c=a*this.direction.dot(sl.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xd extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Af=new Pt,ns=new tu,vo=new eu,Cf=new z,xo=new z,Mo=new z,So=new z,ol=new z,yo=new z,Rf=new z,bo=new z;class ke extends Gt{constructor(e=new ln,t=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ol.fromBufferAttribute(h,e),o?yo.addScaledVector(ol,u):yo.addScaledVector(ol.sub(t),u))}t.add(yo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(vo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(vo,Cf)===null||ns.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Af.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Af),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=T;y<L;y+=3){const w=a.getX(y),I=a.getX(y+1),v=a.getX(y+2);s=Eo(this,p,e,i,c,u,h,w,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const x=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);s=Eo(this,o,e,i,c,u,h,x,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=T;y<L;y+=3){const w=y,I=y+1,v=y+2;s=Eo(this,p,e,i,c,u,h,w,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const x=m,T=m+1,y=m+2;s=Eo(this,o,e,i,c,u,h,x,T,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function C_(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,So);const u=C_(n,e,t,i,xo,Mo,So,Rf);if(u){const h=new z;Dn.getBarycoord(Rf,xo,Mo,So,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,h,new We)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,h,new We)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Dn.getNormal(xo,Mo,So,f.normal),u.face=f,u.barycoord=h}return u}class R_ extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,u=jt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new z,P_=new z,D_=new tt;class Gi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=al.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D_.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new eu,L_=new We(.5,.5),To=new z;class nu{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],x=r[12],T=r[13],y=r[14],L=r[15];if(s[0].setComponents(c-o,d-u,p-g,L-x).normalize(),s[1].setComponents(c+o,d+u,p+g,L+x).normalize(),s[2].setComponents(c+a,d+h,p+M,L+T).normalize(),s[3].setComponents(c-a,d-h,p-M,L-T).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,p-m,L-y).normalize();else if(s[4].setComponents(c-l,d-f,p-m,L-y).normalize(),t===ii)s[5].setComponents(c+l,d+f,p+m,L+y).normalize();else if(t===Wr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=L_.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $d extends Zt{constructor(e=[],t=gs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I_ extends Zt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr extends Zt{constructor(e,t,i=li,s,r,o,a=jt,l=jt,c,u=Di,h=1){if(u!==Di&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U_ extends rr{constructor(e,t=li,i=gs,s,r,o=jt,a=jt,l,c=Di){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qd extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vt extends ln{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(M,m,p,x,T,y,L,w,I,v,C){const k=y/I,N=L/v,G=y/2,te=L/2,re=w/2,H=I+1,Z=v+1;let W=0,V=0;const B=new z;for(let Me=0;Me<Z;Me++){const j=Me*N-te;for(let Se=0;Se<H;Se++){const qe=Se*k-G;B[M]=qe*x,B[m]=j*T,B[p]=re,c.push(B.x,B.y,B.z),B[M]=0,B[m]=0,B[p]=w>0?1:-1,u.push(B.x,B.y,B.z),h.push(Se/I),h.push(1-Me/v),W+=1}}for(let Me=0;Me<v;Me++)for(let j=0;j<I;j++){const Se=f+j+H*Me,qe=f+j+H*(Me+1),lt=f+(j+1)+H*(Me+1),Qe=f+(j+1)+H*Me;l.push(Se,qe,Qe),l.push(qe,lt,Qe),V+=6}a.addGroup(d,V,C),d+=V,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sa extends ln{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new z,u=new We;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends ln{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const M=[],m=i/2;let p=0;x(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function x(){const y=new z,L=new z;let w=0;const I=(t-e)/i;for(let v=0;v<=r;v++){const C=[],k=v/r,N=k*(t-e)+e;for(let G=0;G<=s;G++){const te=G/s,re=te*l+a,H=Math.sin(re),Z=Math.cos(re);L.x=N*H,L.y=-k*i+m,L.z=N*Z,h.push(L.x,L.y,L.z),y.set(H,I,Z).normalize(),f.push(y.x,y.y,y.z),d.push(te,1-k),C.push(g++)}M.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){const k=M[C][v],N=M[C+1][v],G=M[C+1][v+1],te=M[C][v+1];(e>0||C!==0)&&(u.push(k,N,te),w+=3),(t>0||C!==r-1)&&(u.push(N,G,te),w+=3)}c.addGroup(p,w,0),p+=w}function T(y){const L=g,w=new We,I=new z;let v=0;const C=y===!0?e:t,k=y===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*k,0),f.push(0,k,0),d.push(.5,.5),g++;const N=g;for(let G=0;G<=s;G++){const re=G/s*l+a,H=Math.cos(re),Z=Math.sin(re);I.x=C*Z,I.y=m*k,I.z=C*H,h.push(I.x,I.y,I.z),f.push(0,k,0),w.x=H*.5+.5,w.y=Z*.5*k+.5,d.push(w.x,w.y),g++}for(let G=0;G<s;G++){const te=L+G,re=N+G;y===!0?u.push(re,re+1,te):u.push(re+1,re,te),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ls extends vn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ls(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class iu extends ln{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const T=new z,y=new z,L=new z;for(let w=0;w<t.length;w+=3)d(t[w+0],T),d(t[w+1],y),d(t[w+2],L),l(T,y,L,x)}function l(x,T,y,L){const w=L+1,I=[];for(let v=0;v<=w;v++){I[v]=[];const C=x.clone().lerp(y,v/w),k=T.clone().lerp(y,v/w),N=w-v;for(let G=0;G<=N;G++)G===0&&v===w?I[v][G]=C:I[v][G]=C.clone().lerp(k,G/N)}for(let v=0;v<w;v++)for(let C=0;C<2*(w-v)-1;C++){const k=Math.floor(C/2);C%2===0?(f(I[v][k+1]),f(I[v+1][k]),f(I[v][k])):(f(I[v][k+1]),f(I[v+1][k+1]),f(I[v+1][k]))}}function c(x){const T=new z;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(x),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function u(){const x=new z;for(let T=0;T<r.length;T+=3){x.x=r[T+0],x.y=r[T+1],x.z=r[T+2];const y=m(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;o.push(y,1-L)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const T=o[x+0],y=o[x+2],L=o[x+4],w=Math.max(T,y,L),I=Math.min(T,y,L);w>.9&&I<.1&&(T<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),L<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,T){const y=x*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){const x=new z,T=new z,y=new z,L=new z,w=new We,I=new We,v=new We;for(let C=0,k=0;C<r.length;C+=9,k+=6){x.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),y.set(r[C+6],r[C+7],r[C+8]),w.set(o[k+0],o[k+1]),I.set(o[k+2],o[k+3]),v.set(o[k+4],o[k+5]),L.copy(x).add(T).add(y).divideScalar(3);const N=m(L);M(w,k+0,x,N),M(I,k+2,T,N),M(v,k+4,y,N)}}function M(x,T,y,L){L<0&&x.x===1&&(o[T]=x.x-1),y.x===0&&y.z===0&&(o[T]=L/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.vertices,e.indices,e.radius,e.detail)}}class su extends iu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new su(e.radius,e.detail)}}class ti extends ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let T=0;T<c;T++){const y=T*h-r;g.push(y,-x,0),M.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const T=x+c*p,y=x+c*(p+1),L=x+1+c*(p+1),w=x+1+c*p;d.push(T,y,w),d.push(y,L,w)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class ru extends ln{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,d=new z,g=new We;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let M=0;M<s;M++){const m=M*(i+1);for(let p=0;p<i;p++){const x=p+m,T=x,y=x+i+1,L=x+i+2,w=x+1;a.push(T,y,w),a.push(y,L,w)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class En extends ln{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){const x=[],T=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const w=L/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(w+y,1-T),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const T=u[p][x+1],y=u[p][x],L=u[p+1][x],w=u[p+1][x+1];(p!==0||o>0)&&d.push(T,y,w),(p!==i-1||l<Math.PI)&&d.push(y,L,w)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(M,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qr extends ln{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[],f=new z,d=new z,g=new z;for(let M=0;M<=i;M++){const m=o+M/i*a;for(let p=0;p<=s;p++){const x=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,x=(s+1)*(M-1)+m-1,T=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(p,x,y),l.push(x,T,y)}this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Pf(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Pf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const s in i)e[s]=i[s]}return e}function Pf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function N_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const F_={clone:or,merge:fn};var O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class k_ extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ke extends lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z_ extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ll={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Df(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Df(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Df(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class V_{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const G_=new V_;class ou{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ou.DEFAULT_MATERIAL_NAME="__DEFAULT";const Os=new WeakMap;class W_ extends ou{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ll.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Os.get(o);h===void 0&&(h=[],Os.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Xr("img");function l(){u(),t&&t(this);const h=Os.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Os.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ll.remove(`image:${e}`);const f=Os.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ll.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class X_ extends ou{constructor(e){super(e)}load(e,t,i,s){const r=new Zt,o=new W_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class jd extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $_ extends jd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const cl=new Pt,Lf=new z,If=new z;class q_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wo=new z,Ao=new qi,Yn=new z;class Kd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,Ao,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ao,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wo,Ao,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,Ao,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new z,Uf=new We,Nf=new We;class Pn extends Kd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Uf,Nf),t.subVectors(Nf,Uf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class au extends Kd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y_ extends q_{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j_ extends jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Y_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bs=-90,ks=1;class K_ extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Bs,ks,e,t);s.layers=this.layers,this.add(s);const r=new Pn(Bs,ks,e,t);r.layers=this.layers,this.add(r);const o=new Pn(Bs,ks,e,t);o.layers=this.layers,this.add(o);const a=new Pn(Bs,ks,e,t);a.layers=this.layers,this.add(a);const l=new Pn(Bs,ks,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Bs,ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Z_ extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ff=new Pt;class J_{constructor(e,t,i=0,s=1/0){this.ray=new tu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(e,t=!0,i=[]){return vc(e,this,i,t),i.sort(Of),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vc(e[s],this,i,t);return i.sort(Of),i}}function Of(n,e){return n.distance-e.distance}function vc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)vc(r[o],e,t,!0)}}class Q_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Bf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const du=class du{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};du.prototype.isMatrix2=!0;let kf=du;class ev extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function zf(n,e,t,i){const s=tv(i);switch(t){case Nd:return n*e;case Od:return n*e/s.components*s.byteLength;case Xc:return n*e/s.components*s.byteLength;case _s:return n*e*2/s.components*s.byteLength;case $c:return n*e*2/s.components*s.byteLength;case Fd:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case qc:return n*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:case Vl:return Math.max(n,16)*Math.max(e,8)/4;case kl:case Hl:return Math.max(n,8)*Math.max(e,8)/2;case Gl:case Wl:case $l:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Qo:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cc:case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ea:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(n){switch(n){case wn:case Dd:return{byteLength:1,components:1};case Vr:case Ld:case Pi:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case li:case Vc:case ni:return{byteLength:4,components:1};case Id:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function nv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],M=h[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const M=h[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:iv,alphahash_pars_fragment:sv,alphamap_fragment:rv,alphamap_pars_fragment:ov,alphatest_fragment:av,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:hv,begin_vertex:dv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:gv,bumpmap_pars_fragment:_v,clipping_planes_fragment:vv,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Sv,color_fragment:yv,color_pars_fragment:bv,color_pars_vertex:Ev,color_vertex:Tv,common:wv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Lv,colorspace_fragment:Iv,colorspace_pars_fragment:Uv,envmap_fragment:Nv,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Ov,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:jv,envmap_vertex:kv,fog_vertex:zv,fog_pars_vertex:Hv,fog_fragment:Vv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Kv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:sx,lightprobes_pars_fragment:rx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:lx,logdepthbuf_vertex:cx,map_fragment:ux,map_pars_fragment:fx,map_particle_fragment:hx,map_particle_pars_fragment:dx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:_x,morphnormal_vertex:vx,morphtarget_pars_vertex:xx,morphtarget_vertex:Mx,normal_fragment_begin:Sx,normal_fragment_maps:yx,normal_pars_fragment:bx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Cx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Px,opaque_fragment:Dx,packing:Lx,premultiplied_alpha_fragment:Ix,project_vertex:Ux,dithering_fragment:Nx,dithering_pars_fragment:Fx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:zx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:$x,specularmap_fragment:qx,specularmap_pars_fragment:Yx,tonemapping_fragment:jx,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:Jx,uv_pars_fragment:Qx,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:sM,backgroundCube_vert:rM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distance_vert:fM,distance_frag:hM,equirect_vert:dM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:_M,meshbasic_frag:vM,meshlambert_vert:xM,meshlambert_frag:MM,meshmatcap_vert:SM,meshmatcap_frag:yM,meshnormal_vert:bM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:wM,meshphysical_vert:AM,meshphysical_frag:CM,meshtoon_vert:RM,meshtoon_frag:PM,points_vert:DM,points_frag:LM,shadow_vert:IM,shadow_frag:UM,sprite_vert:NM,sprite_frag:FM},Le={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qn={basic:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ct(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:fn([Le.common,Le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:fn([Le.lights,Le.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Qn.physical={uniforms:fn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Co={r:0,b:0,g:0},OM=new Pt,Jd=new tt;Jd.set(-1,0,0,0,1,0,0,0,1);function BM(n,e,t,i,s,r){const o=new ct(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const y=x.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(x){let T=!1;const y=d(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(x,T){const y=d(T);y&&(y.isCubeTexture||y.mapping===Ma)?(c===void 0&&(c=new ke(new Vt(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:or(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==gt,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ke(new ti(2,2),new ci({name:"BackgroundMaterial",uniforms:or(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,T){x.getRGB(Co,Yd(n)),t.buffers.color.setClear(Co.r,Co.g,Co.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,T=1){o.set(x),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:M,dispose:p}}function kM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(N,G,te,re,H){let Z=!1;const W=h(N,re,te,G);r!==W&&(r=W,c(r.object)),Z=d(N,re,te,H),Z&&g(N,re,te,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(N,G,te,re),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,G,te,re){const H=re.wireframe===!0;let Z=i[G.id];Z===void 0&&(Z={},i[G.id]=Z);const W=N.isInstancedMesh===!0?N.id:0;let V=Z[W];V===void 0&&(V={},Z[W]=V);let B=V[te.id];B===void 0&&(B={},V[te.id]=B);let Me=B[H];return Me===void 0&&(Me=f(l()),B[H]=Me),Me}function f(N){const G=[],te=[],re=[];for(let H=0;H<t;H++)G[H]=0,te[H]=0,re[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:re,object:N,attributes:{},index:null}}function d(N,G,te,re){const H=r.attributes,Z=G.attributes;let W=0;const V=te.getAttributes();for(const B in V)if(V[B].location>=0){const j=H[B];let Se=Z[B];if(Se===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;W++}return r.attributesNum!==W||r.index!==re}function g(N,G,te,re){const H={},Z=G.attributes;let W=0;const V=te.getAttributes();for(const B in V)if(V[B].location>=0){let j=Z[B];j===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));const Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),H[B]=Se,W++}r.attributes=H,r.attributesNum=W,r.index=re}function M(){const N=r.newAttributes;for(let G=0,te=N.length;G<te;G++)N[G]=0}function m(N){p(N,0)}function p(N,G){const te=r.newAttributes,re=r.enabledAttributes,H=r.attributeDivisors;te[N]=1,re[N]===0&&(n.enableVertexAttribArray(N),re[N]=1),H[N]!==G&&(n.vertexAttribDivisor(N,G),H[N]=G)}function x(){const N=r.newAttributes,G=r.enabledAttributes;for(let te=0,re=G.length;te<re;te++)G[te]!==N[te]&&(n.disableVertexAttribArray(te),G[te]=0)}function T(N,G,te,re,H,Z,W){W===!0?n.vertexAttribIPointer(N,G,te,H,Z):n.vertexAttribPointer(N,G,te,re,H,Z)}function y(N,G,te,re){M();const H=re.attributes,Z=te.getAttributes(),W=G.defaultAttributeValues;for(const V in Z){const B=Z[V];if(B.location>=0){let Me=H[V];if(Me===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),Me!==void 0){const j=Me.normalized,Se=Me.itemSize,qe=e.get(Me);if(qe===void 0)continue;const lt=qe.buffer,Qe=qe.type,fe=qe.bytesPerElement,De=Qe===n.INT||Qe===n.UNSIGNED_INT||Me.gpuType===Vc;if(Me.isInterleavedBufferAttribute){const we=Me.data,$e=we.stride,Ye=Me.offset;if(we.isInstancedInterleavedBuffer){for(let je=0;je<B.locationSize;je++)p(B.location+je,we.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let je=0;je<B.locationSize;je++)m(B.location+je);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let je=0;je<B.locationSize;je++)T(B.location+je,Se/B.locationSize,Qe,j,$e*fe,(Ye+Se/B.locationSize*je)*fe,De)}else{if(Me.isInstancedBufferAttribute){for(let we=0;we<B.locationSize;we++)p(B.location+we,Me.meshPerAttribute);N.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let we=0;we<B.locationSize;we++)m(B.location+we);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let we=0;we<B.locationSize;we++)T(B.location+we,Se/B.locationSize,Qe,j,Se*fe,Se/B.locationSize*we*fe,De)}}else if(W!==void 0){const j=W[V];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(B.location,j);break;case 3:n.vertexAttrib3fv(B.location,j);break;case 4:n.vertexAttrib4fv(B.location,j);break;default:n.vertexAttrib1fv(B.location,j)}}}}x()}function L(){C();for(const N in i){const G=i[N];for(const te in G){const re=G[te];for(const H in re){const Z=re[H];for(const W in Z)u(Z[W].object),delete Z[W];delete re[H]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const G=i[N.id];for(const te in G){const re=G[te];for(const H in re){const Z=re[H];for(const W in Z)u(Z[W].object),delete Z[W];delete re[H]}}delete i[N.id]}function I(N){for(const G in i){const te=i[G];for(const re in te){const H=te[re];if(H[N.id]===void 0)continue;const Z=H[N.id];for(const W in Z)u(Z[W].object),delete Z[W];delete H[N.id]}}}function v(N){for(const G in i){const te=i[G],re=N.isInstancedMesh===!0?N.id:0,H=te[re];if(H!==void 0){for(const Z in H){const W=H[Z];for(const V in W)u(W[V].object),delete W[V];delete H[Z]}delete te[re],Object.keys(te).length===0&&delete i[G]}}}function C(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function zM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function HM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==wn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ni&&!v)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:y,maxSamples:L,samples:w}}function VM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Gi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,T=x*4;let y=p.clippingState||null;l.value=y,y=u(g,f,T,d);for(let L=0;L!==T;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=d+M*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=d;T!==M;++T,y+=4)o.copy(h[T]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Xi=4,Hf=[.125,.215,.35,.446,.526,.582],cs=20,GM=256,xr=new au,Vf=new ct;let ul=null,fl=0,hl=0,dl=!1;const WM=new z;class Gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=WM}=r;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,hl),this._renderer.xr.enabled=dl,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Pi,format:kn,colorSpace:ta,depthBuffer:!1},s=Wf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(r)),this._blurMaterial=qM(r,e,t),this._ggxMaterial=$M(r,e,t)}return s}_compileMaterial(e){const t=new ke(new ln,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,s,r){const l=new Pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Vf),h.toneMapping=ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new Vt,new Xd({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(Vf),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const L=this._cubeSize;zs(s,y*L,T>2?L:0,L,L),h.setRenderTarget(s),p&&h.render(M,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===gs||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Xi?i-g+Xi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,zs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(a,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zs(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(a,xr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):cs;m>cs&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const p=[];let x=0;for(let I=0;I<cs;++I){const v=I/M,C=Math.exp(-v*v/2);p.push(C),I===0?x+=C:I<m&&(x+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const y=this._sizeLods[s],L=3*y*(s>T-Xi?s-T+Xi:0),w=4*(this._cubeSize-y);zs(t,L,w,3*y,2*y),l.setRenderTarget(t),l.render(h,xr)}}function XM(n){const e=[],t=[],i=[];let s=n;const r=n-Xi+1+Hf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xi?l=Hf[o-n+Xi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,M=3,m=2,p=1,x=new Float32Array(M*g*d),T=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const I=w%3*2/3-1,v=w>2?0:-1,C=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];x.set(C,M*g*w),T.set(f,m*g*w);const k=[w,w,w,w,w,w];y.set(k,p*g*w)}const L=new ln;L.setAttribute("position",new Hn(x,M)),L.setAttribute("uv",new Hn(T,m)),L.setAttribute("faceIndex",new Hn(y,p)),i.push(new ke(L,null)),s>Xi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Wf(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $M(n,e,t){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function qM(n,e,t){const i=new Float32Array(cs),s=new z(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xf(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $f(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qd extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $d(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vt(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:bi});r.uniforms.tEquirect.value=t;const o=new ke(s,r),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=rn),new K_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function YM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Fa||d===Oa)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const M=new Qd(g.height);return M.fromEquirectangularTexture(n,f),e.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,g=d===Fa||d===Oa,M=d===gs||d===sr;if(g||M){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Gf(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new Gf(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Fa?f.mapping=gs:d===Oa&&(f.mapping=sr),f}function l(f){let d=0;const g=6;for(let M=0;M<g;M++)f[M]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function jM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_c("WebGLRenderer: "+i+" extension not supported."),s}}}function KM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const x=d.array;M=d.version;for(let T=0,y=x.length;T<y;T+=3){const L=x[T+0],w=x[T+1],I=x[T+2];f.push(L,w,w,I,I,L)}}else{const x=g.array;M=g.version;for(let T=0,y=x.length/3-1;T<y;T+=3){const L=T+0,w=T+1,I=T+2;f.push(L,w,w,I,I,L)}}const m=new(g.count>=65535?Vd:Hd)(f,1);m.version=M;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ZM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function JM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function QM(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let k=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",k)};var d=k;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*w*4*h),v=new kd(I,L,w,h);v.type=ni,v.needsUpdate=!0;const C=y*4;for(let N=0;N<h;N++){const G=p[N],te=x[N],re=T[N],H=L*w*4*N;for(let Z=0;Z<G.count;Z++){const W=Z*C;g===!0&&(s.fromBufferAttribute(G,Z),I[H+W+0]=s.x,I[H+W+1]=s.y,I[H+W+2]=s.z,I[H+W+3]=0),M===!0&&(s.fromBufferAttribute(te,Z),I[H+W+4]=s.x,I[H+W+5]=s.y,I[H+W+6]=s.z,I[H+W+7]=0),m===!0&&(s.fromBufferAttribute(re,Z),I[H+W+8]=s.x,I[H+W+9]=s.y,I[H+W+10]=s.z,I[H+W+11]=re.itemSize===4?s.w:1)}}f={count:h,texture:v,size:new We(L,w)},i.set(a,f),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function eS(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const tS={[Ed]:"LINEAR_TONE_MAPPING",[Td]:"REINHARD_TONE_MAPPING",[wd]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Cd]:"AGX_TONE_MAPPING",[Rd]:"NEUTRAL_TONE_MAPPING",[Ad]:"CUSTOM_TONE_MAPPING"};function nS(n,e,t,i,s){const r=new oi(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new rr(e,t):void 0}),o=new oi(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),a=new ln;a.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new wt([0,2,0,0,2,0],2));const l=new k_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ke(a,l),u=new au(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,M=null,m=[],p=!1;this.setSize=function(x,T){r.setSize(x,T),o.setSize(x,T);for(let y=0;y<m.length;y++){const L=m[y];L.setSize&&L.setSize(x,T)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const T=r.width,y=r.height;for(let L=0;L<m.length;L++){const w=m[L];w.setSize&&w.setSize(T,y)}},this.begin=function(x,T){if(d||x.toneMapping===ri&&m.length===0)return!1;if(M=T,T!==null){const y=T.width,L=T.height;(r.width!==y||r.height!==L)&&this.setSize(y,L)}return p===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=ri,!0},this.hasRenderPass=function(){return p},this.end=function(x,T){x.toneMapping=g,d=!0;let y=r,L=o;for(let w=0;w<m.length;w++){const I=m[w];if(I.enabled!==!1&&(I.render(x,L,y,T),I.needsSwap!==!1)){const v=y;y=L,L=v}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},ft.getTransfer(h)===gt&&(l.defines.SRGB_TRANSFER="");const w=tS[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(M),x.render(c,u),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ep=new Zt,xc=new rr(1,1),tp=new kd,np=new d_,ip=new $d,qf=[],Yf=[],jf=new Float32Array(16),Kf=new Float32Array(9),Zf=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=Yf[e];t===void 0&&(t=new Int32Array(e),Yf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function aS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),Xt(t,i)}}function lS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),Xt(t,i)}}function cS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;jf.set(i),n.uniformMatrix4fv(this.addr,!1,jf),Xt(t,i)}}function uS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function pS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function vS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xc.compareFunction=t.isReversedDepthBuffer()?jc:Yc,r=xc):r=ep,t.setTexture2D(e||r,s)}function xS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||np,s)}function MS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ip,s)}function SS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tp,s)}function yS(n){switch(n){case 5126:return iS;case 35664:return sS;case 35665:return rS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return uS;case 35667:case 35671:return fS;case 35668:case 35672:return hS;case 35669:case 35673:return dS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return SS}}function bS(n,e){n.uniform1fv(this.addr,e)}function ES(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function TS(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function wS(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function AS(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CS(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RS(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function PS(n,e){n.uniform1iv(this.addr,e)}function DS(n,e){n.uniform2iv(this.addr,e)}function LS(n,e){n.uniform3iv(this.addr,e)}function IS(n,e){n.uniform4iv(this.addr,e)}function US(n,e){n.uniform1uiv(this.addr,e)}function NS(n,e){n.uniform2uiv(this.addr,e)}function FS(n,e){n.uniform3uiv(this.addr,e)}function OS(n,e){n.uniform4uiv(this.addr,e)}function BS(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=xc:o=ep;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function kS(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function zS(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ip,r[o])}function HS(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function VS(n){switch(n){case 5126:return bS;case 35664:return ES;case 35665:return TS;case 35666:return wS;case 35674:return AS;case 35675:return CS;case 35676:return RS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return HS}}class GS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yS(t.type)}}class WS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VS(t.type)}}class XS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Jf(n,e){n.seq.push(e),n.map[e.id]=e}function $S(n,e,t){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jf(t,c===void 0?new GS(a,n,e):new WS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new XS(a),Jf(t,h)),t=h}}}class Ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$S(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Qf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qS=37297;let YS=0;function jS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const eh=new tt;function KS(n){ft._getMatrix(eh,ft.workingColorSpace,n);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jS(n.getShaderSource(e),a)}else return r}function ZS(n,e){const t=KS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JS={[Ed]:"Linear",[Td]:"Reinhard",[wd]:"Cineon",[Hc]:"ACESFilmic",[Cd]:"AgX",[Rd]:"Neutral",[Ad]:"Custom"};function QS(n,e){const t=JS[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new z;function ey(){ft.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function ny(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(sy,oy)}const ry=new Map;function oy(n,e){let t=rt[e];if(t===void 0){const i=ry.get(e);if(i!==void 0)t=rt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(n){return n.replace(ay,ly)}function ly(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cy={[Fo]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function uy(n){return cy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fy={[gs]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function hy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dy={[sr]:"ENVMAP_MODE_REFRACTION"};function py(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const my={[bd]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[L0]:"ENVMAP_BLENDING_ADD"};function gy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":my[n.combine]||"ENVMAP_BLENDING_NONE"}function _y(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uy(t),c=hy(t),u=py(t),h=gy(t),f=_y(t),d=ty(t),g=ny(r),M=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?rt.tonemapping_pars_fragment:"",t.toneMapping!==ri?QS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,ZS("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Mc(o),o=nh(o,t),o=ih(o,t),a=Mc(a),a=nh(a,t),a=ih(a,t),o=sh(o),a=sh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=x+m+o,y=x+p+a,L=Qf(s,s.VERTEX_SHADER,T),w=Qf(s,s.FRAGMENT_SHADER,y);s.attachShader(M,L),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(N){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(M)||"",te=s.getShaderInfoLog(L)||"",re=s.getShaderInfoLog(w)||"",H=G.trim(),Z=te.trim(),W=re.trim();let V=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,w);else{const Me=th(s,L,"vertex"),j=th(s,w,"fragment");ut("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+Me+`
`+j)}else H!==""?Ze("WebGLProgram: Program Info Log:",H):(Z===""||W==="")&&(B=!1);B&&(N.diagnostics={runnable:V,programLog:H,vertexShader:{log:Z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(w),v=new Ho(s,M),C=iy(s,M)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(M,qS)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=w,this}let xy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sy(e),t.set(e,i)),i}}class Sy{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function yy(n){return n===_s||n===Qo||n===ea}function by(n,e,t,i,s,r){const o=new Jc,a=new My,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,C,k,N,G,te){const re=N.fog,H=G.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||Z,W),B=V&&V.mapping===Ma?V.image.height:null,Me=d[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ze("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=j!==void 0?j.length:0;let qe=0;H.morphAttributes.position!==void 0&&(qe=1),H.morphAttributes.normal!==void 0&&(qe=2),H.morphAttributes.color!==void 0&&(qe=3);let lt,Qe,fe,De;if(Me){const et=Qn[Me];lt=et.vertexShader,Qe=et.fragmentShader}else lt=v.vertexShader,Qe=v.fragmentShader,a.update(v),fe=a.getVertexShaderID(v),De=a.getFragmentShaderID(v);const we=n.getRenderTarget(),$e=n.state.buffers.depth.getReversed(),Ye=G.isInstancedMesh===!0,je=G.isBatchedMesh===!0,D=!!v.map,F=!!v.matcap,J=!!V,ae=!!v.aoMap,ie=!!v.lightMap,ce=!!v.bumpMap,ve=!!v.normalMap,Ee=!!v.displacementMap,R=!!v.emissiveMap,ue=!!v.metalnessMap,Te=!!v.roughnessMap,ye=v.anisotropy>0,se=v.clearcoat>0,Ne=v.dispersion>0,E=v.iridescence>0,_=v.sheen>0,b=v.transmission>0,A=ye&&!!v.anisotropyMap,U=se&&!!v.clearcoatMap,q=se&&!!v.clearcoatNormalMap,Y=se&&!!v.clearcoatRoughnessMap,X=E&&!!v.iridescenceMap,K=E&&!!v.iridescenceThicknessMap,he=_&&!!v.sheenColorMap,_e=_&&!!v.sheenRoughnessMap,pe=!!v.specularMap,de=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Ce=b&&!!v.transmissionMap,Ve=b&&!!v.thicknessMap,O=!!v.gradientMap,be=!!v.alphaMap,le=v.alphaTest>0,Fe=!!v.alphaHash,Ae=!!v.extensions;let ge=ri;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ge=n.toneMapping);const ze={shaderID:Me,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:Qe,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:De,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:je,batchingColor:je&&G._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&G.instanceColor!==null,instancingMorph:Ye&&G.morphTexture!==null,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:D,matcap:F,envMap:J,envMapMode:J&&V.mapping,envMapCubeUVHeight:B,aoMap:ae,lightMap:ie,bumpMap:ce,normalMap:ve,displacementMap:Ee,emissiveMap:R,normalMapObjectSpace:ve&&v.normalMapType===N0,normalMapTangentSpace:ve&&v.normalMapType===mc,packedNormalMap:ve&&v.normalMapType===mc&&yy(v.normalMap.format),metalnessMap:ue,roughnessMap:Te,anisotropy:ye,anisotropyMap:A,clearcoat:se,clearcoatMap:U,clearcoatNormalMap:q,clearcoatRoughnessMap:Y,dispersion:Ne,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:K,sheen:_,sheenColorMap:he,sheenRoughnessMap:_e,specularMap:pe,specularColorMap:de,specularIntensityMap:Pe,transmission:b,transmissionMap:Ce,thicknessMap:Ve,gradientMap:O,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:be,alphaTest:le,alphaHash:Fe,combine:v.combine,mapUv:D&&g(v.map.channel),aoMapUv:ae&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:ce&&g(v.bumpMap.channel),normalMapUv:ve&&g(v.normalMap.channel),displacementMapUv:Ee&&g(v.displacementMap.channel),emissiveMapUv:R&&g(v.emissiveMap.channel),metalnessMapUv:ue&&g(v.metalnessMap.channel),roughnessMapUv:Te&&g(v.roughnessMap.channel),anisotropyMapUv:A&&g(v.anisotropyMap.channel),clearcoatMapUv:U&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:q&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(v.sheenRoughnessMap.channel),specularMapUv:pe&&g(v.specularMap.channel),specularColorMapUv:de&&g(v.specularColorMap.channel),specularIntensityMapUv:Pe&&g(v.specularIntensityMap.channel),transmissionMapUv:Ce&&g(v.transmissionMap.channel),thicknessMapUv:Ve&&g(v.thicknessMap.channel),alphaMapUv:be&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ve||ye),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(D||be),fog:!!re,useFog:v.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:$e,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:qe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:D&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:R&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&v.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)C.push(k),C.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(p(C,v),x(C,v),C.push(n.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function p(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function x(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function T(v){const C=d[v.type];let k;if(C){const N=Qn[C];k=F_.clone(N.uniforms)}else k=v.uniforms;return k}function y(v,C){let k=u.get(C);return k!==void 0?++k.usedTimes:(k=new vy(n,C,v,s),c.push(k),u.set(C,k)),k}function L(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function I(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:T,acquireProgram:y,releaseProgram:L,releaseShaderCache:w,programs:c,dispose:I}}function Ey(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ty(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ah(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,M,m,p){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},n[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=M,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,d,g,M,m,p){const x=a(f,d,g,M,m,p);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):t.push(x)}function c(f,d,g,M,m,p){const x=a(f,d,g,M,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||Ty),i.length>1&&i.sort(d||oh),s.length>1&&s.sort(d||oh)}function h(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function wy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ah,n.set(i,[o])):s>=r.length?(o=new ah,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ct};break;case"SpotLight":t={position:new z,direction:new z,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ry=0;function Py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n){const e=new Ay,t=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new Pt,o=new Pt;function a(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,x=0,T=0,y=0,L=0,w=0,I=0;c.sort(Py);for(let C=0,k=c.length;C<k;C++){const N=c[C],G=N.color,te=N.intensity,re=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_s?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*te,h+=G.g*te,f+=G.b*te;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],te);I++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,V=t.get(N);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=N.shadow.matrix,x++}i.directional[d]=Z,d++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(G).multiplyScalar(te),Z.distance=re,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[M]=Z;const W=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,W.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[M]=W.matrix,N.castShadow){const V=t.get(N);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=H,y++}M++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(G).multiplyScalar(te),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Z,m++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const W=N.shadow,V=t.get(N);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=N.shadow.matrix,T++}i.point[g]=Z,g++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(te),Z.groundColor.copy(N.groundColor).multiplyScalar(te),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==M||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==T||v.numSpotShadows!==y||v.numSpotMaps!==L||v.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,v.directionalLength=d,v.pointLength=g,v.spotLength=M,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=T,v.numSpotShadows=y,v.numSpotMaps=L,v.numLightProbes=I,i.version=Ry++)}function l(c,u){let h=0,f=0,d=0,g=0,M=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const T=c[p];if(T.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(T.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function lh(n){const e=new Dy(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ly(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lh(n),e.set(s,[a])):r>=o.length?(a=new lh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ny=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Fy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],ch=new Pt,Mr=new z,ml=new z;function Oy(n,e,t){let i=new nu;const s=new We,r=new We,o=new Ft,a=new z_,l=new H_,c={},u=t.maxTextureSize,h={[$i]:Mn,[Mn]:$i,[On]:On},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Iy,fragmentShader:Uy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let p=this.type;this.render=function(w,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yd&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fo);const C=n.getRenderTarget(),k=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(bi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const te=p!==this.type;te&&I.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(H=>H.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,H=w.length;re<H;re++){const Z=w[re],W=Z.shadow;if(W===void 0){Ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const V=W.getFrameExtents();s.multiply(V),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,W.mapSize.y=r.y));const B=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=B,W.map===null||te===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Er){if(Z.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new oi(s.x,s.y,{format:_s,type:Pi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new rr(s.x,s.y,ni),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=Di,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt}else Z.isPointLight?(W.map=new Qd(s.x),W.map.depthTexture=new U_(s.x,li)):(W.map=new oi(s.x,s.y),W.map.depthTexture=new rr(s.x,s.y,li)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=Di,this.type===Fo?(W.map.depthTexture.compareFunction=B?jc:Yc,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt);W.camera.updateProjectionMatrix()}const Me=W.map.isWebGLCubeRenderTarget?6:1;for(let j=0;j<Me;j++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,j),n.clear();else{j===0&&(n.setRenderTarget(W.map),n.clear());const Se=W.getViewport(j);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),G.viewport(o)}if(Z.isPointLight){const Se=W.camera,qe=W.matrix,lt=Z.distance||Se.far;lt!==Se.far&&(Se.far=lt,Se.updateProjectionMatrix()),Mr.setFromMatrixPosition(Z.matrixWorld),Se.position.copy(Mr),ml.copy(Se.position),ml.add(Ny[j]),Se.up.copy(Fy[j]),Se.lookAt(ml),Se.updateMatrixWorld(),qe.makeTranslation(-Mr.x,-Mr.y,-Mr.z),ch.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ch,Se.coordinateSystem,Se.reversedDepth)}else W.updateMatrices(Z);i=W.getFrustum(),y(I,v,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Er&&x(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,k,N)};function x(w,I){const v=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(s.x,s.y,{format:_s,type:Pi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,v,f,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,v,d,M,null)}function T(w,I,v,C){let k=null;const N=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)k=N;else if(k=v.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const G=k.uuid,te=I.uuid;let re=c[G];re===void 0&&(re={},c[G]=re);let H=re[te];H===void 0&&(H=k.clone(),re[te]=H,I.addEventListener("dispose",L)),k=H}if(k.visible=I.visible,k.wireframe=I.wireframe,C===Er?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:h[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const G=n.properties.get(k);G.light=v}return k}function y(w,I,v,C,k){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Er)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const te=e.update(w),re=w.material;if(Array.isArray(re)){const H=te.groups;for(let Z=0,W=H.length;Z<W;Z++){const V=H[Z],B=re[V.materialIndex];if(B&&B.visible){const Me=T(w,B,C,k);w.onBeforeShadow(n,w,I,v,te,Me,V),n.renderBufferDirect(v,null,te,Me,w,V),w.onAfterShadow(n,w,I,v,te,Me,V)}}}else if(re.visible){const H=T(w,re,C,k);w.onBeforeShadow(n,w,I,v,te,H,null),n.renderBufferDirect(v,null,te,H,w,null),w.onAfterShadow(n,w,I,v,te,H,null)}}const G=w.children;for(let te=0,re=G.length;te<re;te++)y(G[te],I,v,C,k)}function L(w){w.target.removeEventListener("dispose",L);for(const v in c){const C=c[v],k=w.target.uuid;k in C&&(C[k].dispose(),delete C[k])}}}function By(n,e){function t(){let O=!1;const be=new Ft;let le=null;const Fe=new Ft(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,ge,ze,et,Dt){Dt===!0&&(Ae*=et,ge*=et,ze*=et),be.set(Ae,ge,ze,et),Fe.equals(be)===!1&&(n.clearColor(Ae,ge,ze,et),Fe.copy(be))},reset:function(){O=!1,le=null,Fe.set(-1,0,0,0)}}}function i(){let O=!1,be=!1,le=null,Fe=null,Ae=null;return{setReversed:function(ge){if(be!==ge){const ze=e.get("EXT_clip_control");ge?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const et=Ae;Ae=null,this.setClear(et)}},getReversed:function(){return be},setTest:function(ge){ge?we(n.DEPTH_TEST):$e(n.DEPTH_TEST)},setMask:function(ge){le!==ge&&!O&&(n.depthMask(ge),le=ge)},setFunc:function(ge){if(be&&(ge=X0[ge]),Fe!==ge){switch(ge){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=ge}},setLocked:function(ge){O=ge},setClear:function(ge){Ae!==ge&&(Ae=ge,be&&(ge=1-ge),n.clearDepth(ge))},reset:function(){O=!1,le=null,Fe=null,Ae=null,be=!1}}}function s(){let O=!1,be=null,le=null,Fe=null,Ae=null,ge=null,ze=null,et=null,Dt=null;return{setTest:function(xt){O||(xt?we(n.STENCIL_TEST):$e(n.STENCIL_TEST))},setMask:function(xt){be!==xt&&!O&&(n.stencilMask(xt),be=xt)},setFunc:function(xt,ui,Xn){(le!==xt||Fe!==ui||Ae!==Xn)&&(n.stencilFunc(xt,ui,Xn),le=xt,Fe=ui,Ae=Xn)},setOp:function(xt,ui,Xn){(ge!==xt||ze!==ui||et!==Xn)&&(n.stencilOp(xt,ui,Xn),ge=xt,ze=ui,et=Xn)},setLocked:function(xt){O=xt},setClear:function(xt){Dt!==xt&&(n.clearStencil(xt),Dt=xt)},reset:function(){O=!1,be=null,le=null,Fe=null,Ae=null,ge=null,ze=null,et=null,Dt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],M=null,m=!1,p=null,x=null,T=null,y=null,L=null,w=null,I=null,v=new ct(0,0,0),C=0,k=!1,N=null,G=null,te=null,re=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=V>=2);let Me=null,j={};const Se=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),lt=new Ft().fromArray(Se),Qe=new Ft().fromArray(qe);function fe(O,be,le,Fe){const Ae=new Uint8Array(4),ge=n.createTexture();n.bindTexture(O,ge),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<le;ze++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(be+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ge}const De={};De[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),we(n.DEPTH_TEST),o.setFunc(ir),ce(!1),ve(of),we(n.CULL_FACE),ae(bi);function we(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function $e(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ye(O,be){return f[O]!==be?(n.bindFramebuffer(O,be),f[O]=be,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function je(O,be){let le=g,Fe=!1;if(O){le=d.get(be),le===void 0&&(le=[],d.set(be,le));const Ae=O.textures;if(le.length!==Ae.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,ze=Ae.length;ge<ze;ge++)le[ge]=n.COLOR_ATTACHMENT0+ge;le.length=Ae.length,Fe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(le)}function D(O){return M!==O?(n.useProgram(O),M=O,!0):!1}const F={[as]:n.FUNC_ADD,[p0]:n.FUNC_SUBTRACT,[m0]:n.FUNC_REVERSE_SUBTRACT};F[g0]=n.MIN,F[_0]=n.MAX;const J={[v0]:n.ZERO,[x0]:n.ONE,[M0]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[w0]:n.SRC_ALPHA_SATURATE,[E0]:n.DST_COLOR,[y0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[T0]:n.ONE_MINUS_DST_COLOR,[b0]:n.ONE_MINUS_DST_ALPHA,[A0]:n.CONSTANT_COLOR,[C0]:n.ONE_MINUS_CONSTANT_COLOR,[R0]:n.CONSTANT_ALPHA,[P0]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(O,be,le,Fe,Ae,ge,ze,et,Dt,xt){if(O===bi){m===!0&&($e(n.BLEND),m=!1);return}if(m===!1&&(we(n.BLEND),m=!0),O!==d0){if(O!==p||xt!==k){if((x!==as||L!==as)&&(n.blendEquation(n.FUNC_ADD),x=as,L=as),xt)switch(O){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case af:n.blendFunc(n.ONE,n.ONE);break;case lf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ut("WebGLState: Invalid blending: ",O);break}else switch(O){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case af:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lf:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cf:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",O);break}T=null,y=null,w=null,I=null,v.set(0,0,0),C=0,p=O,k=xt}return}Ae=Ae||be,ge=ge||le,ze=ze||Fe,(be!==x||Ae!==L)&&(n.blendEquationSeparate(F[be],F[Ae]),x=be,L=Ae),(le!==T||Fe!==y||ge!==w||ze!==I)&&(n.blendFuncSeparate(J[le],J[Fe],J[ge],J[ze]),T=le,y=Fe,w=ge,I=ze),(et.equals(v)===!1||Dt!==C)&&(n.blendColor(et.r,et.g,et.b,Dt),v.copy(et),C=Dt),p=O,k=!1}function ie(O,be){O.side===On?$e(n.CULL_FACE):we(n.CULL_FACE);let le=O.side===Mn;be&&(le=!le),ce(le),O.blending===Qs&&O.transparent===!1?ae(bi):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Fe=O.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),R(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):$e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(O){N!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),N=O)}function ve(O){O!==f0?(we(n.CULL_FACE),O!==G&&(O===of?n.cullFace(n.BACK):O===h0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$e(n.CULL_FACE),G=O}function Ee(O){O!==te&&(W&&n.lineWidth(O),te=O)}function R(O,be,le){O?(we(n.POLYGON_OFFSET_FILL),(re!==be||H!==le)&&(re=be,H=le,o.getReversed()&&(be=-be),n.polygonOffset(be,le))):$e(n.POLYGON_OFFSET_FILL)}function ue(O){O?we(n.SCISSOR_TEST):$e(n.SCISSOR_TEST)}function Te(O){O===void 0&&(O=n.TEXTURE0+Z-1),Me!==O&&(n.activeTexture(O),Me=O)}function ye(O,be,le){le===void 0&&(Me===null?le=n.TEXTURE0+Z-1:le=Me);let Fe=j[le];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[le]=Fe),(Fe.type!==O||Fe.texture!==be)&&(Me!==le&&(n.activeTexture(le),Me=le),n.bindTexture(O,be||De[O]),Fe.type=O,Fe.texture=be)}function se(){const O=j[Me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ne(){try{n.compressedTexImage2D(...arguments)}catch(O){ut("WebGLState:",O)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(O){ut("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){ut("WebGLState:",O)}}function b(){try{n.texSubImage3D(...arguments)}catch(O){ut("WebGLState:",O)}}function A(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ut("WebGLState:",O)}}function U(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ut("WebGLState:",O)}}function q(){try{n.texStorage2D(...arguments)}catch(O){ut("WebGLState:",O)}}function Y(){try{n.texStorage3D(...arguments)}catch(O){ut("WebGLState:",O)}}function X(){try{n.texImage2D(...arguments)}catch(O){ut("WebGLState:",O)}}function K(){try{n.texImage3D(...arguments)}catch(O){ut("WebGLState:",O)}}function he(O){return h[O]!==void 0?h[O]:n.getParameter(O)}function _e(O,be){h[O]!==be&&(n.pixelStorei(O,be),h[O]=be)}function pe(O){lt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function de(O){Qe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Qe.copy(O))}function Pe(O,be){let le=c.get(be);le===void 0&&(le=new WeakMap,c.set(be,le));let Fe=le.get(O);Fe===void 0&&(Fe=n.getUniformBlockIndex(be,O.name),le.set(O,Fe))}function Ce(O,be){const Fe=c.get(be).get(O);l.get(be)!==Fe&&(n.uniformBlockBinding(be,Fe,O.__bindingPointIndex),l.set(be,Fe))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Me=null,j={},f={},d=new WeakMap,g=[],M=null,m=!1,p=null,x=null,T=null,y=null,L=null,w=null,I=null,v=new ct(0,0,0),C=0,k=!1,N=null,G=null,te=null,re=null,H=null,lt.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:we,disable:$e,bindFramebuffer:Ye,drawBuffers:je,useProgram:D,setBlending:ae,setMaterial:ie,setFlipSided:ce,setCullFace:ve,setLineWidth:Ee,setPolygonOffset:R,setScissorTest:ue,activeTexture:Te,bindTexture:ye,unbindTexture:se,compressedTexImage2D:Ne,compressedTexImage3D:E,texImage2D:X,texImage3D:K,pixelStorei:_e,getParameter:he,updateUBOMapping:Pe,uniformBlockBinding:Ce,texStorage2D:q,texStorage3D:Y,texSubImage2D:_,texSubImage3D:b,compressedTexSubImage2D:A,compressedTexSubImage3D:U,scissor:pe,viewport:de,reset:Ve}}function ky(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,_){return g?new OffscreenCanvas(E,_):Xr("canvas")}function m(E,_,b){let A=1;const U=Ne(E);if((U.width>b||U.height>b)&&(A=b/Math.max(U.width,U.height)),A<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(A*U.width),Y=Math.floor(A*U.height);f===void 0&&(f=M(q,Y));const X=_?M(q,Y):f;return X.width=q,X.height=Y,X.getContext("2d").drawImage(E,0,0,q,Y),Ze("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+q+"x"+Y+")."),X}else return"data"in E&&Ze("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),E;return E}function p(E){return E.generateMipmaps}function x(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,_,b,A,U,q=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y;A&&(Y=e.get("EXT_texture_norm16"),Y||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(b===n.FLOAT&&(X=n.R32F),b===n.HALF_FLOAT&&(X=n.R16F),b===n.UNSIGNED_BYTE&&(X=n.R8),b===n.UNSIGNED_SHORT&&Y&&(X=Y.R16_EXT),b===n.SHORT&&Y&&(X=Y.R16_SNORM_EXT)),_===n.RED_INTEGER&&(b===n.UNSIGNED_BYTE&&(X=n.R8UI),b===n.UNSIGNED_SHORT&&(X=n.R16UI),b===n.UNSIGNED_INT&&(X=n.R32UI),b===n.BYTE&&(X=n.R8I),b===n.SHORT&&(X=n.R16I),b===n.INT&&(X=n.R32I)),_===n.RG&&(b===n.FLOAT&&(X=n.RG32F),b===n.HALF_FLOAT&&(X=n.RG16F),b===n.UNSIGNED_BYTE&&(X=n.RG8),b===n.UNSIGNED_SHORT&&Y&&(X=Y.RG16_EXT),b===n.SHORT&&Y&&(X=Y.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(b===n.UNSIGNED_BYTE&&(X=n.RG8UI),b===n.UNSIGNED_SHORT&&(X=n.RG16UI),b===n.UNSIGNED_INT&&(X=n.RG32UI),b===n.BYTE&&(X=n.RG8I),b===n.SHORT&&(X=n.RG16I),b===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(b===n.UNSIGNED_BYTE&&(X=n.RGB8UI),b===n.UNSIGNED_SHORT&&(X=n.RGB16UI),b===n.UNSIGNED_INT&&(X=n.RGB32UI),b===n.BYTE&&(X=n.RGB8I),b===n.SHORT&&(X=n.RGB16I),b===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(b===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),b===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),b===n.UNSIGNED_INT&&(X=n.RGBA32UI),b===n.BYTE&&(X=n.RGBA8I),b===n.SHORT&&(X=n.RGBA16I),b===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(b===n.UNSIGNED_SHORT&&Y&&(X=Y.RGB16_EXT),b===n.SHORT&&Y&&(X=Y.RGB16_SNORM_EXT),b===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),b===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const K=q?na:ft.getTransfer(U);b===n.FLOAT&&(X=n.RGBA32F),b===n.HALF_FLOAT&&(X=n.RGBA16F),b===n.UNSIGNED_BYTE&&(X=K===gt?n.SRGB8_ALPHA8:n.RGBA8),b===n.UNSIGNED_SHORT&&Y&&(X=Y.RGBA16_EXT),b===n.SHORT&&Y&&(X=Y.RGBA16_SNORM_EXT),b===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),b===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function L(E,_){let b;return E?_===null||_===li||_===Gr?b=n.DEPTH24_STENCIL8:_===ni?b=n.DEPTH32F_STENCIL8:_===Vr&&(b=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Gr?b=n.DEPTH_COMPONENT24:_===ni?b=n.DEPTH_COMPONENT32F:_===Vr&&(b=n.DEPTH_COMPONENT16),b}function w(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function I(E){const _=E.target;_.removeEventListener("dispose",I),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(E){const _=E.target;_.removeEventListener("dispose",v),N(_)}function C(E){const _=i.get(E);if(_.__webglInit===void 0)return;const b=E.source,A=d.get(b);if(A){const U=A[_.__cacheKey];U.usedTimes--,U.usedTimes===0&&k(E),Object.keys(A).length===0&&d.delete(b)}i.remove(E)}function k(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const b=E.source,A=d.get(b);delete A[_.__cacheKey],o.memory.textures--}function N(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(_.__webglFramebuffer[A]))for(let U=0;U<_.__webglFramebuffer[A].length;U++)n.deleteFramebuffer(_.__webglFramebuffer[A][U]);else n.deleteFramebuffer(_.__webglFramebuffer[A]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[A])}else{if(Array.isArray(_.__webglFramebuffer))for(let A=0;A<_.__webglFramebuffer.length;A++)n.deleteFramebuffer(_.__webglFramebuffer[A]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let A=0;A<_.__webglColorRenderbuffer.length;A++)_.__webglColorRenderbuffer[A]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[A]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const b=E.textures;for(let A=0,U=b.length;A<U;A++){const q=i.get(b[A]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(b[A])}i.remove(E)}let G=0;function te(){G=0}function re(){return G}function H(E){G=E}function Z(){const E=G;return E>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function V(E,_){const b=i.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&b.__version!==E.version){const A=E.image;if(A===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(b,E,_);return}}else E.isExternalTexture&&(b.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,b.__webglTexture,n.TEXTURE0+_)}function B(E,_){const b=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&b.__version!==E.version){$e(b,E,_);return}else E.isExternalTexture&&(b.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,b.__webglTexture,n.TEXTURE0+_)}function Me(E,_){const b=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&b.__version!==E.version){$e(b,E,_);return}t.bindTexture(n.TEXTURE_3D,b.__webglTexture,n.TEXTURE0+_)}function j(E,_){const b=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&b.__version!==E.version){Ye(b,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+_)}const Se={[Jo]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},qe={[jt]:n.NEAREST,[I0]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},lt={[F0]:n.NEVER,[H0]:n.ALWAYS,[O0]:n.LESS,[Yc]:n.LEQUAL,[B0]:n.EQUAL,[jc]:n.GEQUAL,[k0]:n.GREATER,[z0]:n.NOTEQUAL};function Qe(E,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===Ba||_.magFilter===so||_.magFilter===fs||_.minFilter===rn||_.minFilter===Ba||_.minFilter===so||_.minFilter===fs)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Se[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Se[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Se[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,qe[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==so&&_.minFilter!==fs||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function fe(E,_){let b=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",I));const A=_.source;let U=d.get(A);U===void 0&&(U={},d.set(A,U));const q=W(_);if(q!==E.__cacheKey){U[q]===void 0&&(U[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,b=!0),U[q].usedTimes++;const Y=U[E.__cacheKey];Y!==void 0&&(U[E.__cacheKey].usedTimes--,Y.usedTimes===0&&k(_)),E.__cacheKey=q,E.__webglTexture=U[q].texture}return b}function De(E,_,b){return Math.floor(Math.floor(E/b)/_)}function we(E,_,b,A){const q=E.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,b,A,_.data);else{q.sort((_e,pe)=>_e.start-pe.start);let Y=0;for(let _e=1;_e<q.length;_e++){const pe=q[Y],de=q[_e],Pe=pe.start+pe.count,Ce=De(de.start,_.width,4),Ve=De(pe.start,_.width,4);de.start<=Pe+1&&Ce===Ve&&De(de.start+de.count-1,_.width,4)===Ce?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++Y,q[Y]=de)}q.length=Y+1;const X=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let _e=0,pe=q.length;_e<pe;_e++){const de=q[_e],Pe=Math.floor(de.start/4),Ce=Math.ceil(de.count/4),Ve=Pe%_.width,O=Math.floor(Pe/_.width),be=Ce,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Ve,O,be,le,b,A,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function $e(E,_,b){let A=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(A=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(A=n.TEXTURE_3D);const U=fe(E,_),q=_.source;t.bindTexture(A,E.__webglTexture,n.TEXTURE0+b);const Y=i.get(q);if(q.version!==Y.__version||U===!0){if(t.activeTexture(n.TEXTURE0+b),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const le=ft.getPrimaries(ft.workingColorSpace),Fe=_.colorSpace===Wi?null:ft.getPrimaries(_.colorSpace),Ae=_.colorSpace===Wi||le===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,s.maxTextureSize);K=se(_,K);const he=r.convert(_.format,_.colorSpace),_e=r.convert(_.type);let pe=y(_.internalFormat,he,_e,_.normalized,_.colorSpace,_.isVideoTexture);Qe(A,_);let de;const Pe=_.mipmaps,Ce=_.isVideoTexture!==!0,Ve=Y.__version===void 0||U===!0,O=q.dataReady,be=w(_,K);if(_.isDepthTexture)pe=L(_.format===hs,_.type),Ve&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,pe,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,pe,K.width,K.height,0,he,_e,null));else if(_.isDataTexture)if(Pe.length>0){Ce&&Ve&&t.texStorage2D(n.TEXTURE_2D,be,pe,Pe[0].width,Pe[0].height);for(let le=0,Fe=Pe.length;le<Fe;le++)de=Pe[le],Ce?O&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,de.width,de.height,he,_e,de.data):t.texImage2D(n.TEXTURE_2D,le,pe,de.width,de.height,0,he,_e,de.data);_.generateMipmaps=!1}else Ce?(Ve&&t.texStorage2D(n.TEXTURE_2D,be,pe,K.width,K.height),O&&we(_,K,he,_e)):t.texImage2D(n.TEXTURE_2D,0,pe,K.width,K.height,0,he,_e,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,pe,Pe[0].width,Pe[0].height,K.depth);for(let le=0,Fe=Pe.length;le<Fe;le++)if(de=Pe[le],_.format!==kn)if(he!==null)if(Ce){if(O)if(_.layerUpdates.size>0){const Ae=zf(de.width,de.height,_.format,_.type);for(const ge of _.layerUpdates){const ze=de.data.subarray(ge*Ae/de.data.BYTES_PER_ELEMENT,(ge+1)*Ae/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ge,de.width,de.height,1,he,ze)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,K.depth,he,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,pe,de.width,de.height,K.depth,0,de.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,K.depth,he,_e,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,pe,de.width,de.height,K.depth,0,he,_e,de.data)}else{Ce&&Ve&&t.texStorage2D(n.TEXTURE_2D,be,pe,Pe[0].width,Pe[0].height);for(let le=0,Fe=Pe.length;le<Fe;le++)de=Pe[le],_.format!==kn?he!==null?Ce?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(n.TEXTURE_2D,le,pe,de.width,de.height,0,de.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?O&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,de.width,de.height,he,_e,de.data):t.texImage2D(n.TEXTURE_2D,le,pe,de.width,de.height,0,he,_e,de.data)}else if(_.isDataArrayTexture)if(Ce){if(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,pe,K.width,K.height,K.depth),O)if(_.layerUpdates.size>0){const le=zf(K.width,K.height,_.format,_.type);for(const Fe of _.layerUpdates){const Ae=K.data.subarray(Fe*le/K.data.BYTES_PER_ELEMENT,(Fe+1)*le/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,K.width,K.height,1,he,_e,Ae)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,_e,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,K.width,K.height,K.depth,0,he,_e,K.data);else if(_.isData3DTexture)Ce?(Ve&&t.texStorage3D(n.TEXTURE_3D,be,pe,K.width,K.height,K.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,_e,K.data)):t.texImage3D(n.TEXTURE_3D,0,pe,K.width,K.height,K.depth,0,he,_e,K.data);else if(_.isFramebufferTexture){if(Ve)if(Ce)t.texStorage2D(n.TEXTURE_2D,be,pe,K.width,K.height);else{let le=K.width,Fe=K.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,pe,le,Fe,0,he,_e,null),le>>=1,Fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),K.parentNode!==le){le.appendChild(K),h.add(_),le.onpaint=et=>{const Dt=et.changedElements;for(const xt of h)Dt.includes(xt.image)&&(xt.needsUpdate=!0)},le.requestPaint();return}const Fe=0,Ae=n.RGBA,ge=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Fe,Ae,ge,ze,K),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ce&&Ve){const le=Ne(Pe[0]);t.texStorage2D(n.TEXTURE_2D,be,pe,le.width,le.height)}for(let le=0,Fe=Pe.length;le<Fe;le++)de=Pe[le],Ce?O&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,he,_e,de):t.texImage2D(n.TEXTURE_2D,le,pe,he,_e,de);_.generateMipmaps=!1}else if(Ce){if(Ve){const le=Ne(K);t.texStorage2D(n.TEXTURE_2D,be,pe,le.width,le.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,_e,K)}else t.texImage2D(n.TEXTURE_2D,0,pe,he,_e,K);p(_)&&x(A),Y.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ye(E,_,b){if(_.image.length!==6)return;const A=fe(E,_),U=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+b);const q=i.get(U);if(U.version!==q.__version||A===!0){t.activeTexture(n.TEXTURE0+b);const Y=ft.getPrimaries(ft.workingColorSpace),X=_.colorSpace===Wi?null:ft.getPrimaries(_.colorSpace),K=_.colorSpace===Wi||Y===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ge=0;ge<6;ge++)!he&&!_e?pe[ge]=m(_.image[ge],!0,s.maxCubemapSize):pe[ge]=_e?_.image[ge].image:_.image[ge],pe[ge]=se(_,pe[ge]);const de=pe[0],Pe=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type),Ve=y(_.internalFormat,Pe,Ce,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,be=q.__version===void 0||A===!0,le=U.dataReady;let Fe=w(_,de);Qe(n.TEXTURE_CUBE_MAP,_);let Ae;if(he){O&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ve,de.width,de.height);for(let ge=0;ge<6;ge++){Ae=pe[ge].mipmaps;for(let ze=0;ze<Ae.length;ze++){const et=Ae[ze];_.format!==kn?Pe!==null?O?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,et.width,et.height,Pe,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Ve,et.width,et.height,0,et.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,et.width,et.height,Pe,Ce,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,Ve,et.width,et.height,0,Pe,Ce,et.data)}}}else{if(Ae=_.mipmaps,O&&be){Ae.length>0&&Fe++;const ge=Ne(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(_e){O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pe[ge].width,pe[ge].height,Pe,Ce,pe[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,pe[ge].width,pe[ge].height,0,Pe,Ce,pe[ge].data);for(let ze=0;ze<Ae.length;ze++){const Dt=Ae[ze].image[ge].image;O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,Dt.width,Dt.height,Pe,Ce,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Ve,Dt.width,Dt.height,0,Pe,Ce,Dt.data)}}else{O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe,Ce,pe[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,Pe,Ce,pe[ge]);for(let ze=0;ze<Ae.length;ze++){const et=Ae[ze];O?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,Pe,Ce,et.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,Ve,Pe,Ce,et.image[ge])}}}p(_)&&x(n.TEXTURE_CUBE_MAP),q.__version=U.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function je(E,_,b,A,U,q){const Y=r.convert(b.format,b.colorSpace),X=r.convert(b.type),K=y(b.internalFormat,Y,X,b.normalized,b.colorSpace),he=i.get(_),_e=i.get(b);if(_e.__renderTarget=_,!he.__hasExternalTextures){const pe=Math.max(1,_.width>>q),de=Math.max(1,_.height>>q);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,q,K,pe,de,_.depth,0,Y,X,null):t.texImage2D(U,q,K,pe,de,0,Y,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,A,U,_e.__webglTexture,0,ue(_)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,A,U,_e.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(E,_,b){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const A=_.depthTexture,U=A&&A.isDepthTexture?A.type:null,q=L(_.stencilBuffer,U),Y=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(_),q,_.width,_.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,E)}else{const A=_.textures;for(let U=0;U<A.length;U++){const q=A[U],Y=r.convert(q.format,q.colorSpace),X=r.convert(q.type),K=y(q.internalFormat,Y,X,q.normalized,q.colorSpace);Te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(_),K,_.width,_.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(_),K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(E,_,b){const A=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=i.get(_.depthTexture);if(U.__renderTarget=_,(!U.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),A){if(U.__webglInit===void 0&&(U.__webglInit=!0,_.depthTexture.addEventListener("dispose",I)),U.__webglTexture===void 0){U.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,_.depthTexture);const he=r.convert(_.depthTexture.format),_e=r.convert(_.depthTexture.type);let pe;_.depthTexture.format===Di?pe=n.DEPTH_COMPONENT24:_.depthTexture.format===hs&&(pe=n.DEPTH24_STENCIL8);for(let de=0;de<6;de++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,_.width,_.height,0,he,_e,null)}}else V(_.depthTexture,0);const q=U.__webglTexture,Y=ue(_),X=A?n.TEXTURE_CUBE_MAP_POSITIVE_X+b:n.TEXTURE_2D,K=_.depthTexture.format===hs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,q,0);else if(_.depthTexture.format===hs)Te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,K,X,q,0);else throw new Error("Unknown depthTexture format")}function J(E){const _=i.get(E),b=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const A=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),A){const U=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,A.removeEventListener("dispose",U)};A.addEventListener("dispose",U),_.__depthDisposeCallback=U}_.__boundDepthTexture=A}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(b)for(let A=0;A<6;A++)F(_.__webglFramebuffer[A],E,A);else{const A=E.texture.mipmaps;A&&A.length>0?F(_.__webglFramebuffer[0],E,0):F(_.__webglFramebuffer,E,0)}else if(b){_.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[A]),_.__webglDepthbuffer[A]===void 0)_.__webglDepthbuffer[A]=n.createRenderbuffer(),D(_.__webglDepthbuffer[A],E,!1);else{const U=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[A];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,q)}}else{const A=E.texture.mipmaps;if(A&&A.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),D(_.__webglDepthbuffer,E,!1);else{const U=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,U,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(E,_,b){const A=i.get(E);_!==void 0&&je(A.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),b!==void 0&&J(E)}function ie(E){const _=E.texture,b=i.get(E),A=i.get(_);E.addEventListener("dispose",v);const U=E.textures,q=E.isWebGLCubeRenderTarget===!0,Y=U.length>1;if(Y||(A.__webglTexture===void 0&&(A.__webglTexture=n.createTexture()),A.__version=_.version,o.memory.textures++),q){b.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){b.__webglFramebuffer[X]=[];for(let K=0;K<_.mipmaps.length;K++)b.__webglFramebuffer[X][K]=n.createFramebuffer()}else b.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){b.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)b.__webglFramebuffer[X]=n.createFramebuffer()}else b.__webglFramebuffer=n.createFramebuffer();if(Y)for(let X=0,K=U.length;X<K;X++){const he=i.get(U[X]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Te(E)===!1){b.__webglMultisampledFramebuffer=n.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let X=0;X<U.length;X++){const K=U[X];b.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,b.__webglColorRenderbuffer[X]);const he=r.convert(K.format,K.colorSpace),_e=r.convert(K.type),pe=y(K.internalFormat,he,_e,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),de=ue(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,pe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,b.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(b.__webglDepthRenderbuffer=n.createRenderbuffer(),D(b.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)je(b.__webglFramebuffer[X][K],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else je(b.__webglFramebuffer[X],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(_)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let X=0,K=U.length;X<K;X++){const he=U[X],_e=i.get(he);let pe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,_e.__webglTexture),Qe(pe,he),je(b.__webglFramebuffer,E,he,n.COLOR_ATTACHMENT0+X,pe,0),p(he)&&x(pe)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,A.__webglTexture),Qe(X,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)je(b.__webglFramebuffer[K],E,_,n.COLOR_ATTACHMENT0,X,K);else je(b.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,X,0);p(_)&&x(X),t.unbindTexture()}E.depthBuffer&&J(E)}function ce(E){const _=E.textures;for(let b=0,A=_.length;b<A;b++){const U=_[b];if(p(U)){const q=T(E),Y=i.get(U).__webglTexture;t.bindTexture(q,Y),x(q),t.unbindTexture()}}}const ve=[],Ee=[];function R(E){if(E.samples>0){if(Te(E)===!1){const _=E.textures,b=E.width,A=E.height;let U=n.COLOR_BUFFER_BIT;const q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(E),X=_.length>1;if(X)for(let he=0;he<_.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);const K=E.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let he=0;he<_.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const _e=i.get(_[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,b,A,0,0,b,A,U,n.NEAREST),l===!0&&(ve.length=0,Ee.length=0,ve.push(n.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ve.push(q),Ee.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let he=0;he<_.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const _e=i.get(_[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function Te(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ye(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function se(E,_){const b=E.colorSpace,A=E.format,U=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||b!==ta&&b!==Wi&&(ft.getTransfer(b)===gt?(A!==kn||U!==wn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",b)),_}function Ne(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.getTextureUnits=re,this.setTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=Me,this.setTextureCube=j,this.rebindTextures=ae,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=je,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zy(n,e){function t(i,s=Wi){let r;const o=ft.getTransfer(s);if(i===wn)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dd)return n.BYTE;if(i===Ld)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Nd)return n.ALPHA;if(i===Fd)return n.RGB;if(i===kn)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===Od)return n.RED;if(i===Xc)return n.RED_INTEGER;if(i===_s)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===ko||i===zo)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===zl||i===Hl||i===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl||i===$l||i===ql||i===Qo||i===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Wl)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$l)return r.COMPRESSED_R11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qo)return r.COMPRESSED_RG11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===uc||i===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===ea||i===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ci({vertexShader:Hy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends ji{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Gy,p={},x=t.getContextAttributes();let T=null,y=null;const L=[],w=[],I=new We;let v=null;const C=new Pn;C.viewport=new Ft;const k=new Pn;k.viewport=new Ft;const N=[C,k],G=new Z_;let te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let De=L[fe];return De===void 0&&(De=new Wa,L[fe]=De),De.getTargetRaySpace()},this.getControllerGrip=function(fe){let De=L[fe];return De===void 0&&(De=new Wa,L[fe]=De),De.getGripSpace()},this.getHand=function(fe){let De=L[fe];return De===void 0&&(De=new Wa,L[fe]=De),De.getHandSpace()};function H(fe){const De=w.indexOf(fe.inputSource);if(De===-1)return;const we=L[De];we!==void 0&&(we.update(fe.inputSource,fe.frame,c||o),we.dispatchEvent({type:fe.type,data:fe.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",W);for(let fe=0;fe<L.length;fe++){const De=w[fe];De!==null&&(w[fe]=null,L[fe].disconnect(De))}te=null,re=null,m.reset();for(const fe in p)delete p[fe];e.setRenderTarget(T),d=null,f=null,h=null,s=null,y=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){a=fe,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(fe){if(s=fe,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,$e=null,Ye=null;x.depth&&(Ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=x.stencil?hs:Di,$e=x.stencil?Gr:li);const je={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new oi(f.textureWidth,f.textureHeight,{format:kn,type:wn,depthTexture:new rr(f.textureWidth,f.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new oi(d.framebufferWidth,d.framebufferHeight,{format:kn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(fe){for(let De=0;De<fe.removed.length;De++){const we=fe.removed[De],$e=w.indexOf(we);$e>=0&&(w[$e]=null,L[$e].disconnect(we))}for(let De=0;De<fe.added.length;De++){const we=fe.added[De];let $e=w.indexOf(we);if($e===-1){for(let je=0;je<L.length;je++)if(je>=w.length){w.push(we),$e=je;break}else if(w[je]===null){w[je]=we,$e=je;break}if($e===-1)break}const Ye=L[$e];Ye&&Ye.connect(we)}}const V=new z,B=new z;function Me(fe,De,we){V.setFromMatrixPosition(De.matrixWorld),B.setFromMatrixPosition(we.matrixWorld);const $e=V.distanceTo(B),Ye=De.projectionMatrix.elements,je=we.projectionMatrix.elements,D=Ye[14]/(Ye[10]-1),F=Ye[14]/(Ye[10]+1),J=(Ye[9]+1)/Ye[5],ae=(Ye[9]-1)/Ye[5],ie=(Ye[8]-1)/Ye[0],ce=(je[8]+1)/je[0],ve=D*ie,Ee=D*ce,R=$e/(-ie+ce),ue=R*-ie;if(De.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(ue),fe.translateZ(R),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),Ye[10]===-1)fe.projectionMatrix.copy(De.projectionMatrix),fe.projectionMatrixInverse.copy(De.projectionMatrixInverse);else{const Te=D+R,ye=F+R,se=ve-ue,Ne=Ee+($e-ue),E=J*F/ye*Te,_=ae*F/ye*Te;fe.projectionMatrix.makePerspective(se,Ne,E,_,Te,ye),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function j(fe,De){De===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(De.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(s===null)return;let De=fe.near,we=fe.far;m.texture!==null&&(m.depthNear>0&&(De=m.depthNear),m.depthFar>0&&(we=m.depthFar)),G.near=k.near=C.near=De,G.far=k.far=C.far=we,(te!==G.near||re!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),te=G.near,re=G.far),G.layers.mask=fe.layers.mask|6,C.layers.mask=G.layers.mask&-5,k.layers.mask=G.layers.mask&-3;const $e=fe.parent,Ye=G.cameras;j(G,$e);for(let je=0;je<Ye.length;je++)j(Ye[je],$e);Ye.length===2?Me(G,C,k):G.projectionMatrix.copy(C.projectionMatrix),Se(fe,G,$e)};function Se(fe,De,we){we===null?fe.matrix.copy(De.matrixWorld):(fe.matrix.copy(we.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(De.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(De.projectionMatrix),fe.projectionMatrixInverse.copy(De.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=$r*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=fe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(fe){return p[fe]};let qe=null;function lt(fe,De){if(u=De.getViewerPose(c||o),g=De,u!==null){const we=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let $e=!1;we.length!==G.cameras.length&&(G.cameras.length=0,$e=!0);for(let F=0;F<we.length;F++){const J=we[F];let ae=null;if(d!==null)ae=d.getViewport(J);else{const ce=h.getViewSubImage(f,J);ae=ce.viewport,F===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let ie=N[F];ie===void 0&&(ie=new Pn,ie.layers.enable(F),ie.viewport=new Ft,N[F]=ie),ie.matrix.fromArray(J.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(J.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ae.x,ae.y,ae.width,ae.height),F===0&&(G.matrix.copy(ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),$e===!0&&G.cameras.push(ie)}const Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const F=h.getDepthInformation(we[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(Ye&&Ye.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let F=0;F<we.length;F++){const J=we[F].camera;if(J){let ae=p[J];ae||(ae=new qd,p[J]=ae);const ie=h.getCameraImage(J);ae.sourceTexture=ie}}}}for(let we=0;we<L.length;we++){const $e=w[we],Ye=L[we];$e!==null&&Ye!==void 0&&Ye.update($e,De,c||o)}qe&&qe(fe,De),De.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:De}),g=null}const Qe=new Zd;Qe.setAnimationLoop(lt),this.setAnimationLoop=function(fe){qe=fe},this.dispose=function(){}}}const Xy=new Pt,sp=new tt;sp.set(-1,0,0,0,1,0,0,0,1);function $y(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),T=x.envMap,y=x.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const y=T.program;i.uniformBlockBinding(x,y)}function c(x,T){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(x,L);const w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function u(x){const T=h();x.__bindingPointIndex=T;const y=n.createBuffer(),L=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const T=s[x.id],y=x.uniforms,L=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,I=y.length;w<I;w++){const v=Array.isArray(y[w])?y[w]:[y[w]];for(let C=0,k=v.length;C<k;C++){const N=v[C];if(d(N,w,C,L)===!0){const G=N.__offset,te=Array.isArray(N.value)?N.value:[N.value];let re=0;for(let H=0;H<te.length;H++){const Z=te[H],W=M(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,G+re,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):ArrayBuffer.isView(Z)?N.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,N.__data.length)):(Z.toArray(N.__data,re),re+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,T,y,L){const w=x.value,I=T+"_"+y;if(L[I]===void 0)return typeof w=="number"||typeof w=="boolean"?L[I]=w:ArrayBuffer.isView(w)?L[I]=w.slice():L[I]=w.clone(),!0;{const v=L[I];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return L[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(v.equals(w)===!1)return v.copy(w),!0}}return!1}function g(x){const T=x.uniforms;let y=0;const L=16;for(let I=0,v=T.length;I<v;I++){const C=Array.isArray(T[I])?T[I]:[T[I]];for(let k=0,N=C.length;k<N;k++){const G=C[k],te=Array.isArray(G.value)?G.value:[G.value];for(let re=0,H=te.length;re<H;re++){const Z=te[re],W=M(Z),V=y%L,B=V%W.boundary,Me=V+B;y+=B,Me!==0&&L-Me<W.storage&&(y+=L-Me),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=W.storage}}}const w=y%L;return w>0&&(y+=L-w),x.__size=y,x.__cache={},this}function M(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",x),T}function m(x){const T=x.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function jy(){return jn===null&&(jn=new R_(Yy,16,16,_s,Pi),jn.name="DFG_LUT",jn.minFilter=rn,jn.magFilter=rn,jn.wrapS=yi,jn.wrapT=yi,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Ky{constructor(e={}){const{canvas:t=G0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=d,m=new Set([qc,$c,Xc]),p=new Set([wn,li,Vr,Gr,Gc,Wc]),x=new Uint32Array(4),T=new Int32Array(4),y=new z;let L=null,w=null;const I=[],v=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let N=!1,G=null;this._outputColorSpace=hn;let te=0,re=0,H=null,Z=-1,W=null;const V=new Ft,B=new Ft;let Me=null;const j=new ct(0);let Se=0,qe=t.width,lt=t.height,Qe=1,fe=null,De=null;const we=new Ft(0,0,qe,lt),$e=new Ft(0,0,qe,lt);let Ye=!1;const je=new nu;let D=!1,F=!1;const J=new Pt,ae=new z,ie=new Ft,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ee(){return H===null?Qe:1}let R=i;function ue(S,$){return t.getContext(S,$)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",et,!1),R===null){const $="webgl2";if(R=ue($,S),R===null)throw ue($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ut("WebGLRenderer: "+S.message),S}let Te,ye,se,Ne,E,_,b,A,U,q,Y,X,K,he,_e,pe,de,Pe,Ce,Ve,O,be,le;function Fe(){Te=new jM(R),Te.init(),O=new zy(R,Te),ye=new HM(R,Te,e,O),se=new By(R,Te),ye.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),Ne=new JM(R),E=new Ey,_=new ky(R,Te,se,E,ye,O,Ne),b=new YM(k),A=new nv(R),be=new kM(R,A),U=new KM(R,A,Ne,be),q=new eS(R,U,A,be,Ne),Pe=new QM(R,ye,_),_e=new VM(E),Y=new by(k,b,Te,ye,be,_e),X=new $y(k,E),K=new wy,he=new Ly(Te),de=new BM(k,b,se,q,g,l),pe=new Oy(k,q,ye),le=new qy(R,Ne,ye,se),Ce=new zM(R,Te,Ne),Ve=new ZM(R,Te,Ne),Ne.programs=Y.programs,k.capabilities=ye,k.extensions=Te,k.properties=E,k.renderLists=K,k.shadowMap=pe,k.state=se,k.info=Ne}Fe(),M!==wn&&(C=new nS(M,t.width,t.height,s,r));const Ae=new Wy(k,R);this.xr=Ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Qe},this.setPixelRatio=function(S){S!==void 0&&(Qe=S,this.setSize(qe,lt,!1))},this.getSize=function(S){return S.set(qe,lt)},this.setSize=function(S,$,ne=!0){if(Ae.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=S,lt=$,t.width=Math.floor(S*Qe),t.height=Math.floor($*Qe),ne===!0&&(t.style.width=S+"px",t.style.height=$+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,S,$)},this.getDrawingBufferSize=function(S){return S.set(qe*Qe,lt*Qe).floor()},this.setDrawingBufferSize=function(S,$,ne){qe=S,lt=$,Qe=ne,t.width=Math.floor(S*ne),t.height=Math.floor($*ne),this.setViewport(0,0,S,$)},this.setEffects=function(S){if(M===wn){ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let $=0;$<S.length;$++)if(S[$].isOutputPass===!0){Ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(V)},this.getViewport=function(S){return S.copy(we)},this.setViewport=function(S,$,ne,Q){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,$,ne,Q),se.viewport(V.copy(we).multiplyScalar(Qe).round())},this.getScissor=function(S){return S.copy($e)},this.setScissor=function(S,$,ne,Q){S.isVector4?$e.set(S.x,S.y,S.z,S.w):$e.set(S,$,ne,Q),se.scissor(B.copy($e).multiplyScalar(Qe).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){se.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){fe=S},this.setTransparentSort=function(S){De=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(S=!0,$=!0,ne=!0){let Q=0;if(S){let ee=!1;if(H!==null){const Ue=H.texture.format;ee=m.has(Ue)}if(ee){const Ue=H.texture.type,Be=p.has(Ue),Ie=de.getClearColor(),He=de.getClearAlpha(),Ge=Ie.r,nt=Ie.g,ot=Ie.b;Be?(x[0]=Ge,x[1]=nt,x[2]=ot,x[3]=He,R.clearBufferuiv(R.COLOR,0,x)):(T[0]=Ge,T[1]=nt,T[2]=ot,T[3]=He,R.clearBufferiv(R.COLOR,0,T))}else Q|=R.COLOR_BUFFER_BIT}$&&(Q|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&R.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),G=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",et,!1),de.dispose(),K.dispose(),he.dispose(),E.dispose(),b.dispose(),q.dispose(),be.dispose(),le.dispose(),Y.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",pu),Ae.removeEventListener("sessionend",mu),Ki.stop()};function ge(S){S.preventDefault(),ia("WebGLRenderer: Context Lost."),N=!0}function ze(){ia("WebGLRenderer: Context Restored."),N=!1;const S=Ne.autoReset,$=pe.enabled,ne=pe.autoUpdate,Q=pe.needsUpdate,ee=pe.type;Fe(),Ne.autoReset=S,pe.enabled=$,pe.autoUpdate=ne,pe.needsUpdate=Q,pe.type=ee}function et(S){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Dt(S){const $=S.target;$.removeEventListener("dispose",Dt),xt($)}function xt(S){ui(S),E.remove(S)}function ui(S){const $=E.get(S).programs;$!==void 0&&($.forEach(function(ne){Y.releaseProgram(ne)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,$,ne,Q,ee,Ue){$===null&&($=ce);const Be=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=cp(S,$,ne,Q,ee);se.setMaterial(Q,Be);let He=ne.index,Ge=1;if(Q.wireframe===!0){if(He=U.getWireframeAttribute(ne),He===void 0)return;Ge=2}const nt=ne.drawRange,ot=ne.attributes.position;let Xe=nt.start*Ge,Mt=(nt.start+nt.count)*Ge;Ue!==null&&(Xe=Math.max(Xe,Ue.start*Ge),Mt=Math.min(Mt,(Ue.start+Ue.count)*Ge)),He!==null?(Xe=Math.max(Xe,0),Mt=Math.min(Mt,He.count)):ot!=null&&(Xe=Math.max(Xe,0),Mt=Math.min(Mt,ot.count));const Ot=Mt-Xe;if(Ot<0||Ot===1/0)return;be.setup(ee,Q,Ie,ne,He);let Ut,bt=Ce;if(He!==null&&(Ut=A.get(He),bt=Ve,bt.setIndex(Ut)),ee.isMesh)Q.wireframe===!0?(se.setLineWidth(Q.wireframeLinewidth*Ee()),bt.setMode(R.LINES)):bt.setMode(R.TRIANGLES);else if(ee.isLine){let Jt=Q.linewidth;Jt===void 0&&(Jt=1),se.setLineWidth(Jt*Ee()),ee.isLineSegments?bt.setMode(R.LINES):ee.isLineLoop?bt.setMode(R.LINE_LOOP):bt.setMode(R.LINE_STRIP)}else ee.isPoints?bt.setMode(R.POINTS):ee.isSprite&&bt.setMode(R.TRIANGLES);if(ee.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Jt=ee._multiDrawStarts,Oe=ee._multiDrawCounts,Sn=ee._multiDrawCount,dt=He?A.get(He).bytesPerElement:1,Cn=E.get(Q).currentProgram.getUniforms();for(let $n=0;$n<Sn;$n++)Cn.setValue(R,"_gl_DrawID",$n),bt.render(Jt[$n]/dt,Oe[$n])}else if(ee.isInstancedMesh)bt.renderInstances(Xe,Ot,ee.count);else if(ne.isInstancedBufferGeometry){const Jt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Oe=Math.min(ne.instanceCount,Jt);bt.renderInstances(Xe,Ot,Oe)}else bt.render(Xe,Ot)};function Xn(S,$,ne){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,eo(S,$,ne),S.side=$i,S.needsUpdate=!0,eo(S,$,ne),S.side=On):eo(S,$,ne)}this.compile=function(S,$,ne=null){ne===null&&(ne=S),w=he.get(ne),w.init($),v.push(w),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),S!==ne&&S.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(w.pushLight(ee),ee.castShadow&&w.pushShadow(ee))}),w.setupLights();const Q=new Set;return S.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Ie=Ue[Be];Xn(Ie,ne,ee),Q.add(Ie)}else Xn(Ue,ne,ee),Q.add(Ue)}),w=v.pop(),Q},this.compileAsync=function(S,$,ne=null){const Q=this.compile(S,$,ne);return new Promise(ee=>{function Ue(){if(Q.forEach(function(Be){E.get(Be).currentProgram.isReady()&&Q.delete(Be)}),Q.size===0){ee(S);return}setTimeout(Ue,10)}Te.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ea=null;function ap(S){Ea&&Ea(S)}function pu(){Ki.stop()}function mu(){Ki.start()}const Ki=new Zd;Ki.setAnimationLoop(ap),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(S){Ea=S,Ae.setAnimationLoop(S),S===null?Ki.stop():Ki.start()},Ae.addEventListener("sessionstart",pu),Ae.addEventListener("sessionend",mu),this.render=function(S,$){if($!==void 0&&$.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;G!==null&&G.renderStart(S,$);const ne=Ae.enabled===!0&&Ae.isPresenting===!0,Q=C!==null&&(H===null||ne)&&C.begin(k,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera($),$=Ae.getCamera()),S.isScene===!0&&S.onBeforeRender(k,S,$,H),w=he.get(S,v.length),w.init($),w.state.textureUnits=_.getTextureUnits(),v.push(w),J.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),je.setFromProjectionMatrix(J,ii,$.reversedDepth),F=this.localClippingEnabled,D=_e.init(this.clippingPlanes,F),L=K.get(S,I.length),L.init(),I.push(L),Ae.enabled===!0&&Ae.isPresenting===!0){const Be=k.xr.getDepthSensingMesh();Be!==null&&Ta(Be,$,-1/0,k.sortObjects)}Ta(S,$,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(fe,De),ve=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ve&&de.addToRenderList(L,S),this.info.render.frame++,D===!0&&_e.beginShadows();const ee=w.state.shadowsArray;if(pe.render(ee,S,$),D===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&C.hasRenderPass())===!1){const Be=L.opaque,Ie=L.transmissive;if(w.setupLights(),$.isArrayCamera){const He=$.cameras;if(Ie.length>0)for(let Ge=0,nt=He.length;Ge<nt;Ge++){const ot=He[Ge];_u(Be,Ie,S,ot)}ve&&de.render(S);for(let Ge=0,nt=He.length;Ge<nt;Ge++){const ot=He[Ge];gu(L,S,ot,ot.viewport)}}else Ie.length>0&&_u(Be,Ie,S,$),ve&&de.render(S),gu(L,S,$)}H!==null&&re===0&&(_.updateMultisampleRenderTarget(H),_.updateRenderTargetMipmap(H)),Q&&C.end(k),S.isScene===!0&&S.onAfterRender(k,S,$),be.resetDefaultState(),Z=-1,W=null,v.pop(),v.length>0?(w=v[v.length-1],_.setTextureUnits(w.state.textureUnits),D===!0&&_e.setGlobalState(k.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,G!==null&&G.renderEnd()};function Ta(S,$,ne,Q){if(S.visible===!1)return;if(S.layers.test($.layers)){if(S.isGroup)ne=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update($);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||je.intersectsSprite(S)){Q&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);const Be=q.update(S),Ie=S.material;Ie.visible&&L.push(S,Be,Ie,ne,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||je.intersectsObject(S))){const Be=q.update(S),Ie=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ie.copy(S.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ie.copy(Be.boundingSphere.center)),ie.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(Ie)){const He=Be.groups;for(let Ge=0,nt=He.length;Ge<nt;Ge++){const ot=He[Ge],Xe=Ie[ot.materialIndex];Xe&&Xe.visible&&L.push(S,Be,Xe,ne,ie.z,ot)}}else Ie.visible&&L.push(S,Be,Ie,ne,ie.z,null)}}const Ue=S.children;for(let Be=0,Ie=Ue.length;Be<Ie;Be++)Ta(Ue[Be],$,ne,Q)}function gu(S,$,ne,Q){const{opaque:ee,transmissive:Ue,transparent:Be}=S;w.setupLightsView(ne),D===!0&&_e.setGlobalState(k.clippingPlanes,ne),Q&&se.viewport(V.copy(Q)),ee.length>0&&Qr(ee,$,ne),Ue.length>0&&Qr(Ue,$,ne),Be.length>0&&Qr(Be,$,ne),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function _u(S,$,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){const Xe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new oi(1,1,{generateMipmaps:!0,type:Xe?Pi:wn,minFilter:fs,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Ue=w.state.transmissionRenderTarget[Q.id],Be=Q.viewport||V;Ue.setSize(Be.z*k.transmissionResolutionScale,Be.w*k.transmissionResolutionScale);const Ie=k.getRenderTarget(),He=k.getActiveCubeFace(),Ge=k.getActiveMipmapLevel();k.setRenderTarget(Ue),k.getClearColor(j),Se=k.getClearAlpha(),Se<1&&k.setClearColor(16777215,.5),k.clear(),ve&&de.render(ne);const nt=k.toneMapping;k.toneMapping=ri;const ot=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),D===!0&&_e.setGlobalState(k.clippingPlanes,Q),Qr(S,ne,Q),_.updateMultisampleRenderTarget(Ue),_.updateRenderTargetMipmap(Ue),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Mt=0,Ot=$.length;Mt<Ot;Mt++){const Ut=$[Mt],{object:bt,geometry:Jt,material:Oe,group:Sn}=Ut;if(Oe.side===On&&bt.layers.test(Q.layers)){const dt=Oe.side;Oe.side=Mn,Oe.needsUpdate=!0,vu(bt,ne,Q,Jt,Oe,Sn),Oe.side=dt,Oe.needsUpdate=!0,Xe=!0}}Xe===!0&&(_.updateMultisampleRenderTarget(Ue),_.updateRenderTargetMipmap(Ue))}k.setRenderTarget(Ie,He,Ge),k.setClearColor(j,Se),ot!==void 0&&(Q.viewport=ot),k.toneMapping=nt}function Qr(S,$,ne){const Q=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ue=S.length;ee<Ue;ee++){const Be=S[ee],{object:Ie,geometry:He,group:Ge}=Be;let nt=Be.material;nt.allowOverride===!0&&Q!==null&&(nt=Q),Ie.layers.test(ne.layers)&&vu(Ie,$,ne,He,nt,Ge)}}function vu(S,$,ne,Q,ee,Ue){S.onBeforeRender(k,$,ne,Q,ee,Ue),S.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(k,$,ne,Q,S,Ue),ee.transparent===!0&&ee.side===On&&ee.forceSinglePass===!1?(ee.side=Mn,ee.needsUpdate=!0,k.renderBufferDirect(ne,$,Q,ee,S,Ue),ee.side=$i,ee.needsUpdate=!0,k.renderBufferDirect(ne,$,Q,ee,S,Ue),ee.side=On):k.renderBufferDirect(ne,$,Q,ee,S,Ue),S.onAfterRender(k,$,ne,Q,ee,Ue)}function eo(S,$,ne){$.isScene!==!0&&($=ce);const Q=E.get(S),ee=w.state.lights,Ue=w.state.shadowsArray,Be=ee.state.version,Ie=Y.getParameters(S,ee.state,Ue,$,ne,w.state.lightProbeGridArray),He=Y.getProgramCacheKey(Ie);let Ge=Q.programs;Q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?$.environment:null,Q.fog=$.fog;const nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Q.envMap=b.get(S.envMap||Q.environment,nt),Q.envMapRotation=Q.environment!==null&&S.envMap===null?$.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",Dt),Ge=new Map,Q.programs=Ge);let ot=Ge.get(He);if(ot!==void 0){if(Q.currentProgram===ot&&Q.lightsStateVersion===Be)return Mu(S,Ie),ot}else Ie.uniforms=Y.getUniforms(S),G!==null&&S.isNodeMaterial&&G.build(S,ne,Ie),S.onBeforeCompile(Ie,k),ot=Y.acquireProgram(Ie,He),Ge.set(He,ot),Q.uniforms=Ie.uniforms;const Xe=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Xe.clippingPlanes=_e.uniform),Mu(S,Ie),Q.needsLights=fp(S),Q.lightsStateVersion=Be,Q.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=ot,Q.uniformsList=null,ot}function xu(S){if(S.uniformsList===null){const $=S.currentProgram.getUniforms();S.uniformsList=Ho.seqWithValue($.seq,S.uniforms)}return S.uniformsList}function Mu(S,$){const ne=E.get(S);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function lp(S,$){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition($.matrixWorld);for(let ne=0,Q=S.length;ne<Q;ne++){const ee=S[ne];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function cp(S,$,ne,Q,ee){$.isScene!==!0&&($=ce),_.resetTextureUnits();const Ue=$.fog,Be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?$.environment:null,Ie=H===null?k.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ft.workingColorSpace,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ge=b.get(Q.envMap||Be,He),nt=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ot=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xe=!!ne.morphAttributes.position,Mt=!!ne.morphAttributes.normal,Ot=!!ne.morphAttributes.color;let Ut=ri;Q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ut=k.toneMapping);const bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Jt=bt!==void 0?bt.length:0,Oe=E.get(Q),Sn=w.state.lights;if(D===!0&&(F===!0||S!==W)){const At=S===W&&Q.id===Z;_e.setState(Q,S,At)}let dt=!1;Q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Sn.state.version||Oe.outputColorSpace!==Ie||ee.isBatchedMesh&&Oe.batching===!1||!ee.isBatchedMesh&&Oe.batching===!0||ee.isBatchedMesh&&Oe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Oe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Oe.instancing===!1||!ee.isInstancedMesh&&Oe.instancing===!0||ee.isSkinnedMesh&&Oe.skinning===!1||!ee.isSkinnedMesh&&Oe.skinning===!0||ee.isInstancedMesh&&Oe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Oe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Oe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Oe.instancingMorph===!1&&ee.morphTexture!==null||Oe.envMap!==Ge||Q.fog===!0&&Oe.fog!==Ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==_e.numPlanes||Oe.numIntersection!==_e.numIntersection)||Oe.vertexAlphas!==nt||Oe.vertexTangents!==ot||Oe.morphTargets!==Xe||Oe.morphNormals!==Mt||Oe.morphColors!==Ot||Oe.toneMapping!==Ut||Oe.morphTargetsCount!==Jt||!!Oe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Oe.__version=Q.version);let Cn=Oe.currentProgram;dt===!0&&(Cn=eo(Q,$,ee),G&&Q.isNodeMaterial&&G.onUpdateProgram(Q,Cn,Oe));let $n=!1,Ii=!1,xs=!1;const Et=Cn.getUniforms(),Bt=Oe.uniforms;if(se.useProgram(Cn.program)&&($n=!0,Ii=!0,xs=!0),Q.id!==Z&&(Z=Q.id,Ii=!0),Oe.needsLights){const At=lp(w.state.lightProbeGridArray,ee);Oe.lightProbeGrid!==At&&(Oe.lightProbeGrid=At,Ii=!0)}if($n||W!==S){se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",S.projectionMatrix),Et.setValue(R,"viewMatrix",S.matrixWorldInverse);const Ni=Et.map.cameraPosition;Ni!==void 0&&Ni.setValue(R,ae.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Et.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,Ii=!0,xs=!0)}if(Oe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Et.setValue(R,"directionalShadowMap",Sn.state.directionalShadowMap,_),Sn.state.spotShadowMap.length>0&&Et.setValue(R,"spotShadowMap",Sn.state.spotShadowMap,_),Sn.state.pointShadowMap.length>0&&Et.setValue(R,"pointShadowMap",Sn.state.pointShadowMap,_)),ee.isSkinnedMesh){Et.setOptional(R,ee,"bindMatrix"),Et.setOptional(R,ee,"bindMatrixInverse");const At=ee.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Et.setValue(R,"boneTexture",At.boneTexture,_))}ee.isBatchedMesh&&(Et.setOptional(R,ee,"batchingTexture"),Et.setValue(R,"batchingTexture",ee._matricesTexture,_),Et.setOptional(R,ee,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",ee._indirectTexture,_),Et.setOptional(R,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",ee._colorsTexture,_));const Ui=ne.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Pe.update(ee,ne,Cn),(Ii||Oe.receiveShadow!==ee.receiveShadow)&&(Oe.receiveShadow=ee.receiveShadow,Et.setValue(R,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&$.environment!==null&&(Bt.envMapIntensity.value=$.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=jy()),Ii){if(Et.setValue(R,"toneMappingExposure",k.toneMappingExposure),Oe.needsLights&&up(Bt,xs),Ue&&Q.fog===!0&&X.refreshFogUniforms(Bt,Ue),X.refreshMaterialUniforms(Bt,Q,Qe,lt,w.state.transmissionRenderTarget[S.id]),Oe.needsLights&&Oe.lightProbeGrid){const At=Oe.lightProbeGrid;Bt.probesSH.value=At.texture,Bt.probesMin.value.copy(At.boundingBox.min),Bt.probesMax.value.copy(At.boundingBox.max),Bt.probesResolution.value.copy(At.resolution)}Ho.upload(R,xu(Oe),Bt,_)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ho.upload(R,xu(Oe),Bt,_),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Et.setValue(R,"center",ee.center),Et.setValue(R,"modelViewMatrix",ee.modelViewMatrix),Et.setValue(R,"normalMatrix",ee.normalMatrix),Et.setValue(R,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){const At=Q.uniformsGroups;for(let Ni=0,Ms=At.length;Ni<Ms;Ni++){const Su=At[Ni];le.update(Su,Cn),le.bind(Su,Cn)}}return Cn}function up(S,$){S.ambientLightColor.needsUpdate=$,S.lightProbe.needsUpdate=$,S.directionalLights.needsUpdate=$,S.directionalLightShadows.needsUpdate=$,S.pointLights.needsUpdate=$,S.pointLightShadows.needsUpdate=$,S.spotLights.needsUpdate=$,S.spotLightShadows.needsUpdate=$,S.rectAreaLights.needsUpdate=$,S.hemisphereLights.needsUpdate=$}function fp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,$,ne){const Q=E.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),E.get(S.texture).__webglTexture=$,E.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,$){const ne=E.get(S);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0};const hp=R.createFramebuffer();this.setRenderTarget=function(S,$=0,ne=0){H=S,te=$,re=ne;let Q=null,ee=!1,Ue=!1;if(S){const Ie=E.get(S);if(Ie.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(R.FRAMEBUFFER,Ie.__webglFramebuffer),V.copy(S.viewport),B.copy(S.scissor),Me=S.scissorTest,se.viewport(V),se.scissor(B),se.setScissorTest(Me),Z=-1;return}else if(Ie.__webglFramebuffer===void 0)_.setupRenderTarget(S);else if(Ie.__hasExternalTextures)_.rebindTextures(S,E.get(S.texture).__webglTexture,E.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const nt=S.depthTexture;if(Ie.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(S)}}const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ue=!0);const Ge=E.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[$])?Q=Ge[$][ne]:Q=Ge[$],ee=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?Q=E.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?Q=Ge[ne]:Q=Ge,V.copy(S.viewport),B.copy(S.scissor),Me=S.scissorTest}else V.copy(we).multiplyScalar(Qe).floor(),B.copy($e).multiplyScalar(Qe).floor(),Me=Ye;if(ne!==0&&(Q=hp),se.bindFramebuffer(R.FRAMEBUFFER,Q)&&se.drawBuffers(S,Q),se.viewport(V),se.scissor(B),se.setScissorTest(Me),ee){const Ie=E.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,ne)}else if(Ue){const Ie=$;for(let He=0;He<S.textures.length;He++){const Ge=E.get(S.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,Ge.__webglTexture,ne,Ie)}}else if(S!==null&&ne!==0){const Ie=E.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ie.__webglTexture,ne)}Z=-1},this.readRenderTargetPixels=function(S,$,ne,Q,ee,Ue,Be,Ie=0){if(!(S&&S.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He){se.bindFramebuffer(R.FRAMEBUFFER,He);try{const Ge=S.textures[Ie],nt=Ge.format,ot=Ge.type;if(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ie),!ye.textureFormatReadable(nt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ot)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=S.width-Q&&ne>=0&&ne<=S.height-ee&&R.readPixels($,ne,Q,ee,O.convert(nt),O.convert(ot),Ue)}finally{const Ge=H!==null?E.get(H).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,$,ne,Q,ee,Ue,Be,Ie=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=E.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(He=He[Be]),He)if($>=0&&$<=S.width-Q&&ne>=0&&ne<=S.height-ee){se.bindFramebuffer(R.FRAMEBUFFER,He);const Ge=S.textures[Ie],nt=Ge.format,ot=Ge.type;if(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ie),!ye.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,Ue.byteLength,R.STREAM_READ),R.readPixels($,ne,Q,ee,O.convert(nt),O.convert(ot),0);const Mt=H!==null?E.get(H).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Mt);const Ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await W0(R,Ot,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ue),R.deleteBuffer(Xe),R.deleteSync(Ot),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,$=null,ne=0){const Q=Math.pow(2,-ne),ee=Math.floor(S.image.width*Q),Ue=Math.floor(S.image.height*Q),Be=$!==null?$.x:0,Ie=$!==null?$.y:0;_.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,ne,0,0,Be,Ie,ee,Ue),se.unbindTexture()};const dp=R.createFramebuffer(),pp=R.createFramebuffer();this.copyTextureToTexture=function(S,$,ne=null,Q=null,ee=0,Ue=0){let Be,Ie,He,Ge,nt,ot,Xe,Mt,Ot;const Ut=S.isCompressedTexture?S.mipmaps[Ue]:S.image;if(ne!==null)Be=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,Ge=ne.min.x,nt=ne.min.y,ot=ne.isBox3?ne.min.z:0;else{const Bt=Math.pow(2,-ee);Be=Math.floor(Ut.width*Bt),Ie=Math.floor(Ut.height*Bt),S.isDataArrayTexture?He=Ut.depth:S.isData3DTexture?He=Math.floor(Ut.depth*Bt):He=1,Ge=0,nt=0,ot=0}Q!==null?(Xe=Q.x,Mt=Q.y,Ot=Q.z):(Xe=0,Mt=0,Ot=0);const bt=O.convert($.format),Jt=O.convert($.type);let Oe;$.isData3DTexture?(_.setTexture3D($,0),Oe=R.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(_.setTexture2DArray($,0),Oe=R.TEXTURE_2D_ARRAY):(_.setTexture2D($,0),Oe=R.TEXTURE_2D),se.activeTexture(R.TEXTURE0),se.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,$.flipY),se.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),se.pixelStorei(R.UNPACK_ALIGNMENT,$.unpackAlignment);const Sn=se.getParameter(R.UNPACK_ROW_LENGTH),dt=se.getParameter(R.UNPACK_IMAGE_HEIGHT),Cn=se.getParameter(R.UNPACK_SKIP_PIXELS),$n=se.getParameter(R.UNPACK_SKIP_ROWS),Ii=se.getParameter(R.UNPACK_SKIP_IMAGES);se.pixelStorei(R.UNPACK_ROW_LENGTH,Ut.width),se.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut.height),se.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),se.pixelStorei(R.UNPACK_SKIP_ROWS,nt),se.pixelStorei(R.UNPACK_SKIP_IMAGES,ot);const xs=S.isDataArrayTexture||S.isData3DTexture,Et=$.isDataArrayTexture||$.isData3DTexture;if(S.isDepthTexture){const Bt=E.get(S),Ui=E.get($),At=E.get(Bt.__renderTarget),Ni=E.get(Ui.__renderTarget);se.bindFramebuffer(R.READ_FRAMEBUFFER,At.__webglFramebuffer),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ms=0;Ms<He;Ms++)xs&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get(S).__webglTexture,ee,ot+Ms),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get($).__webglTexture,Ue,Ot+Ms)),R.blitFramebuffer(Ge,nt,Be,Ie,Xe,Mt,Be,Ie,R.DEPTH_BUFFER_BIT,R.NEAREST);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ee!==0||S.isRenderTargetTexture||E.has(S)){const Bt=E.get(S),Ui=E.get($);se.bindFramebuffer(R.READ_FRAMEBUFFER,dp),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,pp);for(let At=0;At<He;At++)xs?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,ot+At):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Bt.__webglTexture,ee),Et?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ui.__webglTexture,Ue,Ot+At):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ui.__webglTexture,Ue),ee!==0?R.blitFramebuffer(Ge,nt,Be,Ie,Xe,Mt,Be,Ie,R.COLOR_BUFFER_BIT,R.NEAREST):Et?R.copyTexSubImage3D(Oe,Ue,Xe,Mt,Ot+At,Ge,nt,Be,Ie):R.copyTexSubImage2D(Oe,Ue,Xe,Mt,Ge,nt,Be,Ie);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Oe,Ue,Xe,Mt,Ot,Be,Ie,He,bt,Jt,Ut.data):$.isCompressedArrayTexture?R.compressedTexSubImage3D(Oe,Ue,Xe,Mt,Ot,Be,Ie,He,bt,Ut.data):R.texSubImage3D(Oe,Ue,Xe,Mt,Ot,Be,Ie,He,bt,Jt,Ut):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ue,Xe,Mt,Be,Ie,bt,Jt,Ut.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ue,Xe,Mt,Ut.width,Ut.height,bt,Ut.data):R.texSubImage2D(R.TEXTURE_2D,Ue,Xe,Mt,Be,Ie,bt,Jt,Ut);se.pixelStorei(R.UNPACK_ROW_LENGTH,Sn),se.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),se.pixelStorei(R.UNPACK_SKIP_PIXELS,Cn),se.pixelStorei(R.UNPACK_SKIP_ROWS,$n),se.pixelStorei(R.UNPACK_SKIP_IMAGES,Ii),Ue===0&&$.generateMipmaps&&R.generateMipmap(Oe),se.unbindTexture()},this.initRenderTarget=function(S){E.get(S).__webglFramebuffer===void 0&&_.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),se.unbindTexture()},this.resetState=function(){te=0,re=0,H=null,se.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const uh={type:"change"},lu={type:"start"},rp={type:"end"},Po=new tu,fh=new Gi,Zy=Math.cos(70*Tr.DEG2RAD),Ht=new z,mn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class Jy extends ev{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new qi,this._lastTargetPosition=new z,this._quat=new qi().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bf,this._sphericalDelta=new Bf,this._scale=1,this._panOffset=new z,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new z,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eb.bind(this),this._onPointerDown=Qy.bind(this),this._onPointerUp=tb.bind(this),this._onContextMenu=lb.bind(this),this._onMouseWheel=sb.bind(this),this._onKeyDown=rb.bind(this),this._onTouchStart=ob.bind(this),this._onTouchMove=ab.bind(this),this._onMouseDown=nb.bind(this),this._onMouseMove=ib.bind(this),this._interceptControlDown=cb.bind(this),this._interceptControlUp=ub.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uh),this.update(),this.state=St.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Po.origin.copy(this.object.position),Po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Po.direction))<Zy?this.object.lookAt(this.target):(fh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Po.intersectPlane(fh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Qy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rp),this.state=St.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(lu)}function ib(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sb(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rp))}function rb(n){this.enabled!==!1&&this._handleKeyDown(n)}function ob(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(lu)}function ab(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function lb(n){this.enabled!==!1&&n.preventDefault()}function cb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ub(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class fb extends Gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new We(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Hs=new z,hh=new Pt,dh=new Pt,ph=new z,mh=new z;class hb{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,M){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),hh.copy(M.matrixWorldInverse),dh.multiplyMatrices(M.projectionMatrix,hh),u(g,g,M),this.sortObjects&&d(g)},this.setSize=function(g,M){i=g,s=M,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=M+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let M=0,m=g.children.length;M<m;M++)c(g.children[M])}function u(g,M,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Hs.setFromMatrixPosition(g.matrixWorld),Hs.applyMatrix4(dh);const p=Hs.z>=-1&&Hs.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,M,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Hs.x*r+r)+"px,"+(-Hs.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(t,M,m));const T={distanceToCameraSquared:h(m,g)};a.objects.set(g,T)}for(let p=0,x=g.children.length;p<x;p++)u(g.children[p],M,m)}function h(g,M){return ph.setFromMatrixPosition(g.matrixWorld),mh.setFromMatrixPosition(M.matrixWorld),ph.distanceToSquared(mh)}function f(g){const M=[];return g.traverseVisible(function(m){m.isCSS2DObject&&M.push(m)}),M}function d(g){const M=f(g).sort(function(p,x){if(p.renderOrder!==x.renderOrder)return x.renderOrder-p.renderOrder;const T=a.objects.get(p).distanceToCameraSquared,y=a.objects.get(x).distanceToCameraSquared;return T-y}),m=M.length;for(let p=0,x=M.length;p<x;p++)M[p].element.style.zIndex=m-p}}}function Sc(n,e,t){if(Math.abs(n+4)<6.2&&Math.abs(e+2)<6.2||Math.abs(n-8.2)<5&&Math.abs(e-5.4)<5||Math.abs(n-9.2)<6&&Math.abs(e+6.2)<6)return!0;for(const i of Object.keys(t)){const s=t[i],r=.35;if(n>=s.minX-r&&n<=s.maxX+r&&e>=s.minZ-r&&e<=s.maxZ+r)return!0}return!1}function db(n){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(!t)return null;t.clearRect(0,0,256,256);const i=128,s=128,r=8;for(let l=0;l<r;l++){t.save(),t.translate(i,s),t.rotate(l/r*Math.PI*2+.08);const c=t.createLinearGradient(0,10,0,-95);c.addColorStop(0,n.light),c.addColorStop(.55,n.mid||n.light),c.addColorStop(1,n.dark),t.fillStyle=c,t.beginPath(),t.moveTo(0,5),t.bezierCurveTo(42,-35,48,-78,0,-102),t.bezierCurveTo(-48,-78,-42,-35,0,5),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,0.22)",t.lineWidth=2,t.stroke(),t.restore()}const o=t.createRadialGradient(i-6,s-6,4,i,s,34);o.addColorStop(0,n.centerLight||"#fff9c4"),o.addColorStop(.55,n.center),o.addColorStop(1,n.centerDark||n.dark),t.fillStyle=o,t.beginPath(),t.arc(i,s,30,0,Math.PI*2),t.fill();const a=new I_(e);return a.colorSpace=hn,a.needsUpdate=!0,a}function pb(n,e,t,i=.38){const s=new _t,r=new ke(new vn(.018,.026,i,8),new Ke({color:3369246,roughness:.82}));r.position.y=i/2,r.castShadow=!0,s.add(r);const o=new ke(new Sa(.07,8),new Ke({color:5606191,side:On,roughness:.75}));o.rotation.x=-Math.PI/2,o.rotation.z=.9,o.position.set(.06,i*.42,0),s.add(o);const a=new Ke({color:t,roughness:.28,metalness:.06}),l=new ke(new En(.11,14,10,0,Math.PI*2,0,Math.PI/2),a);return l.scale.set(1.15,1.35,1.15),l.position.y=i+.02,l.castShadow=!0,s.add(l),s.position.set(n,0,e),s.rotation.y=Math.random()*Math.PI*2,s}function mb(n,e){const t=new _t,i=new ke(new vn(.012,.018,.52,6),new Ke({color:5606191,roughness:.88}));i.position.y=.26,i.castShadow=!0,t.add(i);const s=new Ke({color:8280002,roughness:.45});for(let r=0;r<9;r++){const o=new ke(new En(.035,8,6),s),a=r/9;o.position.set((Math.random()-.5)*.04,.42+a*.14,(Math.random()-.5)*.04),o.scale.set(.85,1.1,.85),o.castShadow=!0,t.add(o)}return t.position.set(n,0,e),t.rotation.y=Math.random()*Math.PI*2,t}function gb(n,e){const t=new _t,i=new ke(new vn(.024,.032,.55,8),new Ke({color:5606191,roughness:.85}));i.position.y=.275,i.castShadow=!0,t.add(i);const s=new Ke({color:16766287,roughness:.38});for(let a=0;a<14;a++){const l=new ke(new Vt(.15,.025,.34),s),c=a/14*Math.PI*2;l.position.set(Math.cos(c)*.1,.56,Math.sin(c)*.1),l.rotation.order="YXZ",l.rotation.y=c+Math.PI/2,l.rotation.x=.42,l.castShadow=!0,t.add(l)}const r=new ke(new Sa(.09,18),new Ke({color:6111287,roughness:.92}));r.rotation.x=-Math.PI/2,r.position.y=.56,t.add(r);const o=new ke(new ru(.03,.088,24),new Ke({color:4073251,roughness:.95}));return o.rotation.x=-Math.PI/2,o.position.y=.561,t.add(o),t.position.set(n,0,e),t.rotation.y=Math.random()*Math.PI*2,t}function _b(n,e){const t=new _t,i=new Ke({color:5606191,roughness:.78,side:On}),s=5+Math.floor(Math.random()*4);for(let r=0;r<s;r++){const o=new ke(new ti(.07,.28+Math.random()*.12),i),a=r/s*Math.PI*2+Math.random()*.5;o.position.set(Math.cos(a)*.05,.12,Math.sin(a)*.05),o.rotation.y=a+Math.PI/2,o.rotation.x=-.35-Math.random()*.25,o.castShadow=!0,t.add(o)}return t.position.set(n,0,e),t}function vb(n,e){const t=new _t,i=new ke(new vn(.06,.09,.22,10),new Ke({color:16119285,roughness:.65}));i.position.y=.11,i.castShadow=!0,t.add(i);const s=new ke(new En(.18,14,12,0,Math.PI*2,0,Math.PI/2),new Ke({color:Math.random()>.45?13840175:16755601,roughness:.35,metalness:.05}));s.scale.set(1.15,.65,1.15),s.position.y=.26,s.castShadow=!0,t.add(s);const r=Math.random()>.5?5:0;for(let o=0;o<r;o++){const a=new ke(new En(.025,8,8),new Ke({color:16776679,roughness:.3})),l=o/r*Math.PI*2;a.position.set(Math.cos(l)*.08,.28+Math.random()*.04,Math.sin(l)*.08),t.add(a)}return t.position.set(n,0,e),t.rotation.y=Math.random()*Math.PI*2,t}function op(n,e,t=1){const i=new su(.22*t,1),s=i.attributes.position;for(let a=0;a<s.count;a++){const l=a*3;s.array[l]*=.85+Math.random()*.45,s.array[l+1]*=.55+Math.random()*.35,s.array[l+2]*=.85+Math.random()*.45}i.computeVertexNormals();const r=new Ke({color:new ct().setHSL(.08,.08,.45+Math.random()*.12),roughness:.92,metalness:.02,flatShading:!0}),o=new ke(i,r);return o.position.set(n,.12*t,e),o.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.4),o.castShadow=!0,o.receiveShadow=!0,o}function xb(n,e){const t=new _t,i=new ke(new Vt(1.05,.72,.88),new Ke({color:13219994,roughness:.94}));i.position.y=.36,i.castShadow=!0,i.receiveShadow=!0,t.add(i);const s=new Ke({color:6111287,roughness:.85}),r=new ke(new qr(.38,.035,8,20),s);r.rotation.x=Math.PI/2,r.position.set(0,.28,0),t.add(r);const o=new ke(new qr(.34,.03,8,20),s);return o.rotation.x=Math.PI/2,o.position.set(0,.52,0),t.add(o),t.position.set(n,0,e),t.rotation.y=Math.random()*Math.PI,t}function Mb(n,e){const t=new _t,i=new ke(new vn(.55,.62,.14,12),new Ke({color:10395294,roughness:.88}));i.position.y=.07,i.receiveShadow=!0,i.castShadow=!0,t.add(i);const s=4+Math.floor(Math.random()*4);for(let r=0;r<s;r++){const o=op((Math.random()-.5)*.35,(Math.random()-.5)*.28,.45+Math.random()*.35);o.position.x+=(Math.random()-.5)*.2,o.position.z+=(Math.random()-.5)*.2,o.position.y+=.06,t.add(o)}return t.position.set(n,0,e),t}function Sr(n){for(let e=0;e<90;e++){const t=-17.5+Math.random()*35,i=-17.5+Math.random()*35;if(!Sc(t,i,n))return[t,i]}return null}function Sb(n,e){const t=new _t;t.name="farmDecor",n.add(t);const s=[{light:"#f8bbd9",mid:"#ec407a",dark:"#ad1457",center:"#fff176",centerLight:"#fffde7",centerDark:"#f57f17"},{light:"#e1bee7",mid:"#ba68c8",dark:"#6a1b9a",center:"#ffd54f",centerLight:"#fff9c4",centerDark:"#f57f17"},{light:"#ffe0b2",mid:"#ffb74d",dark:"#e65100",center:"#d84315",centerLight:"#ffccbc",centerDark:"#bf360c"},{light:"#c8e6c9",mid:"#81c784",dark:"#2e7d32",center:"#ffeb3b",centerLight:"#fffde7",centerDark:"#f9a825"},{light:"#bbdefb",mid:"#64b5f6",dark:"#1565c0",center:"#eceff1",centerLight:"#ffffff",centerDark:"#546e7a"}].map(l=>db(l)).filter(Boolean);for(let l=0;l<52;l++){const c=Sr(e);if(!c)continue;const[u,h]=c,f=s[l%s.length];if(!f)continue;const d=new Gd({map:f,transparent:!0,depthWrite:!1,alphaTest:.08}),g=new A_(d),M=.42+Math.random()*.38;g.scale.set(M,M,M),g.position.set(u,.28+Math.random()*.08,h),g.rotation.y=Math.random()*Math.PI*2,t.add(g)}const r=[15277667,16740419,16763432,11225020,4367861];for(let l=0;l<38;l++){const c=Sr(e);if(!c)continue;const[u,h]=c,f=l%5,d=f<=2?pb(u,h,r[f]):f===3?mb(u,h):gb(u,h);t.add(d)}for(let l=0;l<55;l++){const c=Sr(e);if(!c)continue;const[u,h]=c;t.add(_b(u,h))}for(let l=0;l<22;l++){const c=Sr(e);if(!c)continue;const[u,h]=c;t.add(vb(u,h))}for(let l=0;l<28;l++){const c=Sr(e);if(!c)continue;const[u,h]=c;t.add(op(u,h,.75+Math.random()*1.1))}return[[-9,4],[4,11],[-14,-6],[15,-4],[6,8],[-3,-12],[11,10]].forEach(([l,c])=>{Sc(l,c,e)||t.add(xb(l,c))}),[[-6.5,-10],[2.5,13],[-16,2],[8,-12]].forEach(([l,c])=>{Sc(l,c,e)||t.add(Mb(l,c))}),t}const yb={key:0,class:"farm-scene-fallback"},bb={__name:"FarmScene3D",props:{farmGrid:{type:Array,required:!0},unlockedPets:{type:Array,default:()=>[]}},emits:["plot-click"],setup(n,{emit:e}){const t=n,i=e,s=Rt(null),r=Rt(""),o={coop:{minX:6.1,maxX:10.9,minZ:3.6,maxZ:8},barn:{minX:7.2,maxX:12.6,minZ:-9.6,maxZ:-4},yard:{minX:-12.4,maxX:-7,minZ:4,maxZ:9},well:{minX:-10.6,maxX:-6,minZ:7.4,maxZ:11}},a={carrot:16750592,tomato:15022389,corn:16771899,strawberry:15483002,pumpkin:16485376,grape:8280002,watermelon:3046706,apple:13840175};let l,c,u,h,f,d=0,g,M=[],m,p,x,T,y,L=!1,w,I,v,C,k=[],N=[];function G(b){return`./${b.replace(/^\//,"")}`}function te(b){const A=document.createElement("div");return A.className="farm-3d-label",A.textContent=b,new fb(A)}function re(b){b&&b.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&(Array.isArray(A.material)?A.material:[A.material]).forEach(q=>{var Y;q.map&&q.map.dispose(),(Y=q.dispose)==null||Y.call(q)})})}function H(){g=new _t,g.name="farmPlots",u.add(g),M=[];for(let A=0;A<9;A++){const U=Math.floor(A/3),Y=-7.1+A%3*2.38,X=-2.35+U*2.38,K=new _t;K.position.set(Y,0,X),K.userData.plotIndex=A;const he=new ke(new Vt(2.12,.08,2.12),new Ke({color:5125166,roughness:1,metalness:0}));he.position.y=.04,he.receiveShadow=!0,he.castShadow=!0,K.add(he);const _e=new ke(new ti(1.88,1.88),new Ke({color:7951688,roughness:1,metalness:0}));_e.rotation.x=-Math.PI/2,_e.position.y=.085,_e.receiveShadow=!0,K.add(_e);const pe=new _t;pe.position.y=.09,K.add(pe),g.add(K),M.push({group:K,soil:_e,cropGroup:pe,stem:null,fruit:null})}const b=te("种植区");b.position.set(-4.2,2.8,-4.4),u.add(b)}function Z(){const b=new _t;b.position.set(8.2,0,5.4);const A=new ke(new Vt(3,1.85,3),new Ke({color:13351844,roughness:.85,metalness:0}));A.position.y=.925,A.castShadow=!0,A.receiveShadow=!0,b.add(A);const U=new ke(new ls(2.35,1.35,4),new Ke({color:12000284,roughness:.55,metalness:.05}));U.position.y=2.35,U.rotation.y=Math.PI/4,U.castShadow=!0,b.add(U);const q=new ke(new ti(.9,1.1),new Ke({color:5125166,roughness:1}));q.position.set(0,.85,1.51),b.add(q);const Y=te("鸡舍");Y.position.set(0,3.15,0),b.add(Y),u.add(b)}function W(){const b=new _t;b.position.set(9.2,0,-6.2);const A=new ke(new Vt(5.2,3.4,4.6),new Ke({color:9268835,roughness:.9,metalness:0}));A.position.y=1.7,A.castShadow=!0,A.receiveShadow=!0,b.add(A);const U=new ke(new Vt(5.6,.55,4.9),new Ke({color:6111287,roughness:.75}));U.position.set(0,3.55,0),U.rotation.z=.06,U.castShadow=!0,b.add(U);const q=new ke(new ti(1.8,2.4),new Ke({color:4073251,roughness:1}));q.position.set(0,1.25,2.31),b.add(q);const Y=te("畜棚");Y.position.set(0,4.2,0),b.add(Y),u.add(b)}function V(b,A,U=1,q=3046706){const Y=U,X=new ke(new vn(.22*Y,.32*Y,1.15*Y,8),new Ke({color:6111287,roughness:1}));X.position.set(b,.575*Y,A),X.castShadow=!0;const K=new ke(new ls(1.35*Y,2.4*Y,8),new Ke({color:q,roughness:.75}));K.position.set(b,2.35*Y,A),K.castShadow=!0,u.add(X,K)}function B(b,A,U=.55){const q=new ke(new En(U,10,8),new Ke({color:3706428,roughness:.88}));q.position.set(b,U*.65,A),q.scale.y=.65,q.castShadow=!0,q.receiveShadow=!0,u.add(q)}function Me(){const b=new _t,A=new Ke({color:7162945,roughness:.95}),U=new Ke({color:9268835,roughness:.9}),q=new Vt(.2,.72,.2),Y=new Vt(1.85,.1,.1);function X(Pe,Ce){const Ve=new ke(q,A);Ve.position.set(Pe,.36,Ce),Ve.castShadow=!0,b.add(Ve)}const K=-19,he=19,_e=-19,pe=19,de=1.85;for(let Pe=K;Pe<=he;Pe+=de)X(Pe,_e),X(Pe,pe);for(let Pe=_e+de;Pe<pe;Pe+=de)X(K,Pe),X(he,Pe);for(let Pe=K;Pe<he;Pe+=de){const Ce=new ke(Y,U);Ce.position.set(Pe+de/2,.52,_e),Ce.castShadow=!0,b.add(Ce);const Ve=Ce.clone();Ve.position.set(Pe+de/2,.52,pe),b.add(Ve)}for(let Pe=_e;Pe<pe;Pe+=de){const Ce=new ke(new Vt(.1,.1,1.85),U);Ce.position.set(K,.52,Pe+de/2),Ce.castShadow=!0,b.add(Ce);const Ve=Ce.clone();Ve.position.set(he,.52,Pe+de/2),b.add(Ve)}u.add(b)}function j(b,A){const{minX:U,maxX:q,minZ:Y,maxZ:X}=b,K=new _t,he=new Ke({color:7162945,roughness:.93}),_e=new Ke({color:12364452,roughness:.88}),pe=new Vt(.13,.48,.13),de=1.15;function Pe(Ce,Ve){const O=new ke(pe,he);O.position.set(Ce,.24,Ve),O.castShadow=!0,K.add(O)}for(let Ce=U;Ce<=q+.01;Ce+=de)Pe(Math.min(Ce,q),Y),Pe(Math.min(Ce,q),X);for(let Ce=Y+de;Ce<X;Ce+=de)Pe(U,Ce),Pe(q,Ce);for(let Ce=U;Ce<q-.05;Ce+=de){const Ve=Math.min(de,q-Ce),O=new ke(new Vt(Ve,.06,.06),_e);O.position.set(Ce+Ve/2,.4,Y),O.castShadow=!0,K.add(O);const be=O.clone();be.position.set(Ce+Ve/2,.4,X),K.add(be)}for(let Ce=Y;Ce<X-.05;Ce+=de){const Ve=Math.min(de,X-Ce),O=new ke(new Vt(.06,.06,Ve),_e);O.position.set(U,.4,Ce+Ve/2),O.castShadow=!0,K.add(O);const be=O.clone();be.position.set(q,.4,Ce+Ve/2),K.add(be)}if(A){const Ce=te(A);Ce.position.set((U+q)/2,.82,(Y+X)/2),K.add(Ce)}u.add(K)}function Se(){j(o.coop,"家禽栏"),j(o.barn,"牧场圈"),j(o.yard,"小院"),j(o.well,"井边")}function qe(){const b=new Ke({color:14142664,roughness:.92}),A=(U,q,Y,X,K=0)=>{const he=new ke(new ti(Y,X),b);he.rotation.x=-Math.PI/2,he.rotation.z=K,he.position.set(U,.028,q),he.receiveShadow=!0,u.add(he)};A(2,9,4,14,.12),A(-3,2,3,18,-.08),A(5,-4,16,2.5,.05)}function lt(){const b=new _t;b.position.set(-14,0,-5);const A=new ke(new vn(1.1,1.45,5.2,10),new Ke({color:14142664,roughness:.85}));A.position.y=2.6,A.castShadow=!0,b.add(A);const U=new ke(new ls(1.25,1.2,8),new Ke({color:10586239,roughness:.7}));U.position.y=5.7,U.castShadow=!0,b.add(U),I=new _t,I.position.set(0,5.9,0);for(let Y=0;Y<4;Y++){const X=new ke(new Vt(.32,.07,3.6),new Ke({color:15723497,roughness:.55}));X.position.z=1.75;const K=new _t;K.rotation.y=Y*Math.PI/2,K.add(X),I.add(K)}b.add(I);const q=te("风车");q.position.set(0,7.2,0),b.add(q),u.add(b)}function Qe(){const b=new _t;b.position.set(12.5,0,-8);const A=new ke(new vn(1.35,1.5,5.5,14),new Ke({color:13621468,roughness:.65,metalness:.15}));A.position.y=2.75,A.castShadow=!0,b.add(A);const U=new ke(new ls(1.55,1.1,12),new Ke({color:11583173,roughness:.55}));U.position.y=6.05,U.castShadow=!0,b.add(U);const q=te("粮仓");q.position.set(0,6.8,0),b.add(q),u.add(b)}function fe(){const b=new _t;b.position.set(-7.5,0,9);const A=new ke(new qr(1.15,.22,12,24),new Ke({color:7901340,roughness:.75}));A.rotation.x=Math.PI/2,A.position.y=.35,A.castShadow=!0,A.receiveShadow=!0,b.add(A);const U=new ke(new ls(1.45,1.15,4),new Ke({color:9268835,roughness:.8}));U.position.y=1.35,U.rotation.y=Math.PI/4,U.castShadow=!0,b.add(U);const q=new ke(new vn(.08,.1,1.6,8),new Ke({color:6111287}));q.position.set(.85,1.1,0),q.castShadow=!0,b.add(q);const Y=te("水井");Y.position.set(0,2.5,0),b.add(Y),u.add(b)}function De(){const b=new _t;b.position.set(-11.5,0,7);const A=new ke(new Vt(3.2,2.2,2.8),new Ke({color:10586239,roughness:.88}));A.position.y=1.1,A.castShadow=!0,b.add(A);const U=new ke(new vn(0,1.9,2.6,3,1),new Ke({color:6111287,roughness:.75}));U.position.y=2.65,U.rotation.z=Math.PI/2,U.rotation.y=Math.PI/2,U.castShadow=!0,b.add(U);const q=te("工具房");q.position.set(0,3.2,0),b.add(q),u.add(b)}function we(){V(-15.5,5.5,.85,1793568),V(16,-8,.72,3369246),V(-8,-14,.95,3046706),V(12,12,.68,4431943),B(-5.5,11,.5),B(3.2,-11,.62),B(-15,-12,.48),B(14,6,.55),B(-3.5,-8.5,.44)}function $e(){v=new _t;const b=new Ke({color:6111287,roughness:.8});for(let A=0;A<6;A++){const U=new ke(new En(.11,8,8),b);U.userData.orbitR=10+A*.9,U.userData.orbitSpeed=.12+A*.02,U.userData.orbitPhase=A*1.1,U.userData.alt=6.5+A%4*.55,v.add(U)}u.add(v)}function Ye(){m=new _t,u.add(m),C=new _t,u.add(C),ie(),ce()}function je(b,A=.38){return new z((b.minX+b.maxX)/2,A,(b.minZ+b.maxZ)/2)}function D(b){return b==="chicken"||b==="rabbit"?o.coop:b==="horse"?o.barn:o.yard}function F(b){const A=b.maxX-b.minX,U=b.maxZ-b.minZ;return Math.min(A,U)*.42}function J(b,A){const U=D(b),q=je(U),Y=A%2*.35-.175,X=Math.floor(A/2)%2*.35-.175;return q.x+=Y,q.z+=X,q}function ae(b,A){let U=2.2;return b==="horse"&&(U=2.6),(b==="dog"||b==="cat")&&(U=2.4),b==="chicken"&&(U=1.9),b==="rabbit"&&(U=2),Math.min(U,F(A)*.92)}function ie(){if(!m)return;for(k=[];m.children.length>0;){const A=m.children[0];m.remove(A),re(A)}const b={chicken:16771899,dog:9268835,cat:16750592,rabbit:16119285,horse:7162945};t.unlockedPets.forEach((A,U)=>{const q=D(A),Y=new ke(new En(.38,18,14),new Ke({color:b[A]??13619151,roughness:.45,metalness:.05})),X=J(A,U);Y.position.copy(X),Y.castShadow=!0,Y.userData.petId=A,m.add(Y),k.push({mesh:Y,petId:A,home:X.clone(),bounds:q,phase:U*2.1+Math.random()*2.5,radius:ae(A,q),speed:A==="horse"?.38:A==="chicken"?.62:.48})})}function ce(){if(!C)return;for(N=[];C.children.length>0;){const A=C.children[0];C.remove(A),re(A)}[{kind:"chick",color:16771899,scale:.22,pen:"coop"},{kind:"chick",color:16773494,scale:.2,pen:"coop"},{kind:"duck",color:16766287,scale:.28,pen:"well"},{kind:"sheep",color:15658734,scale:.42,pen:"barn"},{kind:"frog",color:6732650,scale:.18,pen:"well"}].forEach((A,U)=>{let q;if(A.kind==="duck"){const _e=new _t,pe=new ke(new En(A.scale,10,8),new Ke({color:A.color,roughness:.5})),de=new ke(new En(A.scale*.55,8,8),new Ke({color:16758605,roughness:.45}));de.position.set(A.scale*.9,A.scale*.2,0),_e.add(pe,de),q=_e}else q=new ke(new En(A.scale,12,10),new Ke({color:A.color,roughness:.5}));const Y=A.kind==="frog"?.15:.38,X=o[A.pen],K=(X.minX+X.maxX)/2+U%3*.25-.25,he=(X.minZ+X.maxZ)/2+Math.floor(U/3)*.2-.1;q.position.set(K,Y,he),q.castShadow=!0,C.add(q),N.push({mesh:q,home:new z(K,Y,he),bounds:X,phase:U*1.4+Math.random(),radius:Math.min(A.kind==="sheep"?2.2:1.5,F(X)*.88),speed:.35+Math.random()*.15,hop:A.kind==="frog"||A.kind==="chick"})})}function ve(b,A){return{x:Tr.clamp(b,-18+1.2,18-1.2),z:Tr.clamp(A,-18+1.2,18-1.2)}}function Ee(b,A,U){return{x:Tr.clamp(b,U.minX+.32,U.maxX-.32),z:Tr.clamp(A,U.minZ+.32,U.maxZ-.32)}}function R(b,A,U){A.forEach(q=>{const{mesh:Y,home:X,phase:K,radius:he,speed:_e}=q,pe=q.hop,de=q.bounds,Pe=he*(.72+.28*Math.sin(b*.17+K)),Ce=b*_e+K;let Ve=X.x+Math.cos(Ce)*Pe+Math.sin(Ce*2.4+K*.7)*(Pe*.28),O=X.z+Math.sin(Ce*.92)*Pe*.85+Math.cos(Ce*1.9+K)*(Pe*.22);const be=de?Ee(Ve,O,de):ve(Ve,O);Ve=be.x,O=be.z;const le=X.y,Fe=pe?Math.abs(Math.sin(b*5+K))*.12:Math.sin(b*3.2+K)*.04;Y.position.set(Ve,le+Fe,O);const Ae=Ce+_e*U*12,ge=X.x+Math.cos(Ae)*Pe+Math.sin(Ae*2.4+K*.7)*(Pe*.28),ze=X.z+Math.sin(Ae*.92)*Pe*.85+Math.cos(Ae*1.9+K)*(Pe*.22),et=ge-Ve,Dt=ze-O;Y.rotation.y=Math.atan2(et,Dt)})}function ue(b){v&&v.children.forEach((A,U)=>{const q=b*A.userData.orbitSpeed+A.userData.orbitPhase,Y=A.userData.orbitR;A.position.set(Math.cos(q)*Y+1.5,A.userData.alt+Math.sin(b*2.2+U)*.35,Math.sin(q)*Y*.85-5)})}function Te(b){b.stem&&(b.cropGroup.remove(b.stem),b.stem.geometry.dispose(),b.stem.material.dispose(),b.stem=null),b.fruit&&(b.cropGroup.remove(b.fruit),b.fruit.geometry.dispose(),b.fruit.material.dispose(),b.fruit=null)}function ye(){t.farmGrid.forEach((b,A)=>{const U=M[A];if(!U)return;if(!b.crop){Te(U),U.soil.material.color.setHex(7951688);return}const q=sn[b.crop];if(!q||!b.plantedAt){Te(U);return}const Y=Date.now()-b.plantedAt,X=q.growTime*60*60*1e3,K=Math.min(1,Y/X),he=.22+.78*Math.pow(K,.55),_e=a[b.crop]??16750592;U.stem||(U.stem=new ke(new vn(.07,.09,.5,10),new Ke({color:4431943,roughness:.65})),U.stem.castShadow=!0,U.cropGroup.add(U.stem)),U.fruit||(U.fruit=new ke(new En(.24,14,12),new Ke({color:_e,roughness:.35,metalness:.05,emissive:0})),U.fruit.castShadow=!0,U.cropGroup.add(U.fruit)),U.stem.scale.set(1,he,1),U.stem.position.y=.25*he,U.fruit.material.color.setHex(_e),U.fruit.scale.setScalar(he),U.fruit.position.y=.52*he;const pe=K>=1;U.fruit.material.emissive.setHex(pe?3348992:0),U.soil.material.color.setHex(K>=1?7162945:7951688)})}function se(b){if(!l||!g)return;const A=l.domElement.getBoundingClientRect();x.x=(b.clientX-A.left)/A.width*2-1,x.y=-((b.clientY-A.top)/A.height)*2+1,p.setFromCamera(x,h);const U=p.intersectObjects(g.children,!0);for(const q of U){let Y=q.object;for(;Y;){if(typeof Y.userData.plotIndex=="number"){i("plot-click",Y.userData.plotIndex);return}Y=Y.parent}}}function Ne(){if(!s.value||!h||!l)return;const b=s.value.clientWidth,A=s.value.clientHeight||320;h.aspect=b/A,h.updateProjectionMatrix(),l.setSize(b,A),c.setSize(b,A)}function E(){d=requestAnimationFrame(E);const b=w.getDelta(),A=w.elapsedTime;ye(),I&&(I.rotation.y+=b*.95),ue(A),R(A,k,b),R(A,N,b),f.update(),l.render(u,h),c.render(u,h)}function _(){const b=s.value;if(!b)return;const A=b.clientWidth||b.offsetWidth||320,U=Math.max(280,b.clientHeight||360);p=new J_,x=new We,w=new Q_,u=new S_,u.background=new ct(11460599),u.fog=new Qc(12968357,38,88),h=new Pn(40,A/U,.12,220),h.position.set(17,12.5,17),h.lookAt(-.5,.8,0),l=new Ky({antialias:!0,alpha:!1,powerPreference:"high-performance"}),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(A,U),l.shadowMap.enabled=!0,l.shadowMap.type=yd,l.outputColorSpace=hn,l.toneMapping=Hc,l.toneMappingExposure=1.05,b.appendChild(l.domElement),c=new hb,c.setSize(A,U),c.domElement.style.position="absolute",c.domElement.style.top="0",c.domElement.style.left="0",c.domElement.style.pointerEvents="none",b.appendChild(c.domElement),f=new Jy(h,l.domElement),f.enableDamping=!0,f.dampingFactor=.07,f.target.set(-1.2,.6,.2),f.maxPolarAngle=Math.PI/2-.09,f.minDistance=11,f.maxDistance=44;const q=new $_(16777215,7179358,.62);u.add(q);const Y=new j_(16774368,1.08);Y.position.set(20,32,14),Y.castShadow=!0,Y.shadow.mapSize.set(2048,2048),Y.shadow.bias=-25e-5,Y.shadow.camera.near=4,Y.shadow.camera.far=90,Y.shadow.camera.left=-28,Y.shadow.camera.right=28,Y.shadow.camera.top=28,Y.shadow.camera.bottom=-28,u.add(Y);const X=new ti(60,60),K=new Ke({color:8172354,roughness:.95,metalness:0}),he=new ke(X,K);he.rotation.x=-Math.PI/2,he.receiveShadow=!0,u.add(he),new X_().load(G("assets/farm/grass.jpg"),pe=>{if(L){pe.dispose();return}pe.wrapS=pe.wrapT=Jo,pe.repeat.set(12,12),pe.colorSpace=hn,K.map=pe,K.needsUpdate=!0},void 0,()=>{r.value=""}),H(),Me(),qe(),Z(),W(),lt(),Qe(),fe(),De(),Se(),Sb(u,o),we(),V(-12,8,1,3046706),V(-11,-9,1,3706428),V(14,3,1,3369246),$e(),Ye(),T=se,l.domElement.addEventListener("pointerdown",T),y=Ne,window.addEventListener("resize",y),E()}return Pr(()=>t.unlockedPets,()=>ie(),{deep:!0}),ga(()=>{L=!1;try{_()}catch(b){console.error(b),r.value="3D 场景初始化失败，请刷新重试"}}),Uc(()=>{var b,A;L=!0,cancelAnimationFrame(d),window.removeEventListener("resize",y),l!=null&&l.domElement&&T&&l.domElement.removeEventListener("pointerdown",T),(b=f==null?void 0:f.dispose)==null||b.call(f),u&&u.traverse(U=>{U.geometry&&U.geometry.dispose(),U.material&&(Array.isArray(U.material)?U.material:[U.material]).forEach(Y=>{var X;Y.map&&Y.map.dispose(),(X=Y.dispose)==null||X.call(Y)})}),(A=l==null?void 0:l.dispose)==null||A.call(l)}),(b,A)=>(me(),xe("div",{ref_key:"containerRef",ref:s,class:"farm-scene-3d",role:"img","aria-label":"3D 农场场景"},[r.value?(me(),xe("div",yb,Re(r.value),1)):Nt("",!0)],512))}},Eb=Wn(bb,[["__scopeId","data-v-72709c24"]]),Tb={class:"page farm-home"},wb={class:"farm-scroll"},Ab={class:"farm-header"},Cb={class:"level-info"},Rb={class:"level-badge"},Pb={class:"exp-text"},Db={class:"progress-bar wood-progress"},Lb={class:"field-block scene-3d-section"},Ib={class:"field-mat scene-3d-mat"},Ub={key:0,class:"buildings-block"},Nb={class:"buildings-area"},Fb={class:"crop-list"},Ob=["onClick"],Bb={class:"crop-thumb-wrap","aria-hidden":"true"},kb={class:"crop-name"},zb={class:"crop-price"},Hb={__name:"HomePage",setup(n){const e=Rt(!1),t=Rt(null),i=kt(()=>{const h=No.find(f=>f.level===oe.level);return h?h.title:"青铜运动员"}),s=kt(()=>{const h=No.find(M=>M.level===oe.level),f=No.find(M=>M.level===oe.level+1);if(!f)return 100;const d=oe.experience-h.exp,g=f.exp-h.exp;return Math.min(100,d/g*100)});function r(h){var f;return((f=sn[h])==null?void 0:f.name)||h}function o(h){var f;return((f=sn[h])==null?void 0:f.price)||0}function a(h){var f;return((f=Ko[h])==null?void 0:f.icon)||"🏠"}function l(h){const f=oe.farmGrid[h];if(!(f!=null&&f.crop)){t.value=h,e.value=!0;return}const d=sn[f.crop];if(!d||!f.plantedAt)return;const g=Date.now()-f.plantedAt,M=d.growTime*60*60*1e3;g>=M&&u(h)}function c(h){const f=Ln.plantCrop(t.value,h);f.success?e.value=!1:alert(f.message)}function u(h){const f=Ln.harvestCrop(h);f.success?alert(`收获成功！获得 ${f.quantity} 个${sn[f.crop].name}`):alert(f.message)}return(h,f)=>(me(),xe("div",Tb,[Kt(u0),P("div",wb,[P("header",Ab,[P("div",Cb,[P("span",Rb,Re(i.value),1),P("span",Pb,"Lv."+Re(st(oe).level)+" · "+Re(st(oe).experience)+"EXP",1)]),P("div",Db,[P("div",{class:"progress-fill",style:ar({width:s.value+"%"})},null,4)])]),P("section",Lb,[f[4]||(f[4]=P("div",{class:"sign-board"},[P("span",{class:"sign-wood"},"🌾 我的农场 · 3D")],-1)),P("div",Ib,[f[2]||(f[2]=P("p",{class:"scene-hint"}," Three.js 实景：草地、田垄、鸡舍与畜棚在同一空间里；拖拽旋转，点击地块播种 / 成熟后收获。宠物会出现在鸡舍或畜棚旁。 ",-1)),Kt(Eb,{"farm-grid":st(oe).farmGrid,"unlocked-pets":st(oe).unlockedPets,onPlotClick:l},null,8,["farm-grid","unlocked-pets"]),f[3]||(f[3]=P("p",{class:"scene-3d-hint"},"单指拖拽旋转 · 双指缩放 · 点地块",-1))])]),st(oe).unlockedBuildings.length>0?(me(),xe("section",Ub,[f[5]||(f[5]=P("div",{class:"sign-board small"},[P("span",{class:"sign-wood"},"🏗️ 设施")],-1)),P("div",Nb,[(me(!0),xe(ht,null,Lt(st(oe).unlockedBuildings,d=>(me(),xe("div",{class:"building",key:d},[P("span",null,Re(a(d)),1)]))),128))])])):Nt("",!0)]),e.value?(me(),xe("div",{key:0,class:"modal-overlay",onClick:f[1]||(f[1]=d=>e.value=!1)},[P("div",{class:"modal-content",onClick:f[0]||(f[0]=us(()=>{},["stop"]))},[f[6]||(f[6]=P("h3",null,"选择作物",-1)),P("div",Fb,[(me(!0),xe(ht,null,Lt(st(oe).unlockedCrops,d=>(me(),xe("div",{key:d,class:"crop-item",onClick:g=>c(d)},[P("div",Bb,[Kt(kc,{"crop-id":d,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),P("span",kb,Re(r(d)),1),P("span",zb,"💰"+Re(o(d)),1)],8,Ob))),128))])])])):Nt("",!0)]))}},Vb=Wn(Hb,[["__scopeId","data-v-b11a3c51"]]),Gb={class:"page page-scene exercise-page"},Wb={class:"game-panel hero-panel"},Xb={class:"exercise-types"},$b=["onClick"],qb={class:"type-icon-ring"},Yb={class:"type-icon"},jb={class:"type-name"},Kb={class:"duration-field"},Zb={class:"field-inner"},Jb={class:"reward-strip"},Qb={class:"reward-line"},eE={class:"reward-line"},tE={class:"reward-line"},nE=["disabled"],iE={key:0,class:"game-panel"},sE={class:"stats-grid"},rE={class:"stat-tile"},oE={class:"stat-num"},aE={class:"stat-tile"},lE={class:"stat-num"},cE={class:"stat-tile"},uE={class:"stat-num"},fE={key:1,class:"coin-animation"},hE={__name:"ExercisePage",setup(n){const e=Rt("running"),t=Rt(30),i=Rt(!1),s=Rt({coins:0,exp:0}),r=rf,o=kt(()=>r.find(f=>f.id===e.value)),a=kt(()=>o.value?Math.floor(t.value*o.value.coinsPerMin):0),l=kt(()=>o.value?t.value*o.value.energyPerMin:0),c=kt(()=>o.value?Math.floor(t.value*o.value.expPerMin):0),u=kt(()=>oe.energy>=l.value&&t.value>0);function h(){const f=Ln.doExercise(e.value,t.value,rf);f.success?(s.value={coins:f.coins,exp:f.exp},i.value=!0,setTimeout(()=>{i.value=!1},1e3)):alert(f.message)}return(f,d)=>(me(),xe("div",Gb,[P("div",Wb,[d[10]||(d[10]=P("div",{class:"hero-badge"},[P("span",{class:"game-sign-inline"},"🏃 开始运动")],-1)),d[11]||(d[11]=P("p",{class:"hero-hint"},"选一种运动，积累时长兑换农场金币与经验",-1)),P("div",Xb,[(me(!0),xe(ht,null,Lt(st(r),g=>(me(),xe("button",{key:g.id,type:"button",class:xn(["type-tile",{selected:e.value===g.id}]),onClick:M=>e.value=g.id},[P("span",qb,[P("span",Yb,Re(g.icon),1)]),P("span",jb,Re(g.name),1)],10,$b))),128))]),P("div",Kb,[d[1]||(d[1]=P("label",{class:"field-label"},"运动时长（分钟）",-1)),P("div",Zb,[_i(P("input",{type:"number","onUpdate:modelValue":d[0]||(d[0]=g=>t.value=g),class:"duration-input",min:"1",max:"180"},null,512),[[rs,t.value,void 0,{number:!0}]])])]),P("div",Jb,[P("div",Qb,[d[4]||(d[4]=P("span",{class:"reward-ico"},"💰",-1)),P("span",null,[d[2]||(d[2]=_n("预计收益 ",-1)),P("strong",null,Re(a.value),1),d[3]||(d[3]=_n(" 金币",-1))])]),P("div",eE,[d[6]||(d[6]=P("span",{class:"reward-ico"},"⚡",-1)),P("span",null,[d[5]||(d[5]=_n("消耗体力 ",-1)),P("strong",null,Re(l.value),1)])]),P("div",tE,[d[9]||(d[9]=P("span",{class:"reward-ico"},"✨",-1)),P("span",null,[d[7]||(d[7]=_n("获得经验 ",-1)),P("strong",null,Re(c.value),1),d[8]||(d[8]=_n(" EXP",-1))])])]),P("button",{type:"button",class:"game-btn-primary-lg start-btn",disabled:!u.value,onClick:h},Re(u.value?"🎯 开始运动":"😮 体力不足"),9,nE)]),st(oe).stats.totalExerciseTime>0?(me(),xe("div",iE,[d[15]||(d[15]=P("div",{class:"game-panel-title"},"📊 运动统计",-1)),P("div",sE,[P("div",rE,[P("span",oE,Re(st(oe).stats.totalExerciseTime),1),d[12]||(d[12]=P("span",{class:"stat-cap"},"总分钟",-1))]),P("div",aE,[P("span",lE,Re(st(oe).stats.totalCoinsEarned),1),d[13]||(d[13]=P("span",{class:"stat-cap"},"累计金币",-1))]),P("div",cE,[P("span",uE,Re(st(oe).streakDays),1),d[14]||(d[14]=P("span",{class:"stat-cap"},"连续打卡",-1))])])])):Nt("",!0),i.value?(me(),xe("div",fE,[P("span",null,"+"+Re(s.value.coins)+" 💰",1)])):Nt("",!0)]))}},dE=Wn(hE,[["__scopeId","data-v-4ef7023b"]]),pE={viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",class:"pet-svg"},mE={key:0,class:"anim-bob"},gE={key:1,class:"anim-wiggle"},_E={key:2,class:"anim-bob"},vE={key:3,class:"anim-hop"},xE={key:4,class:"anim-trot"},ME={key:5,class:"anim-bob"},SE={__name:"PetSprite",props:{petId:{type:String,required:!0},size:{type:String,default:"default"}},setup(n){return(e,t)=>(me(),xe("div",{class:xn(["pet-sprite",[`pet-${n.petId}`,{"size-ranch":n.size==="ranch"}]]),"aria-hidden":"true"},[(me(),xe("svg",pE,[n.petId==="chicken"?(me(),xe("g",mE,[...t[0]||(t[0]=[Tn('<ellipse cx="48" cy="78" rx="22" ry="6" fill="#3E2723" opacity="0.12" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFF8E1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="54" rx="22" ry="18" fill="#FFECB3" data-v-e33ebb8c></ellipse><circle cx="62" cy="46" r="10" fill="#FFF8E1" data-v-e33ebb8c></circle><polygon points="68,42 78,46 68,50" fill="#FF9800" data-v-e33ebb8c></polygon><circle cx="65" cy="44" r="2.5" fill="#212121" data-v-e33ebb8c></circle><path fill="#F44336" d="M44 28 L48 20 L52 28 Z" data-v-e33ebb8c></path><path fill="#F44336" d="M48 22 L52 14 L54 24 Z" data-v-e33ebb8c></path><ellipse cx="38" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse>',10)])])):n.petId==="dog"?(me(),xe("g",gE,[...t[1]||(t[1]=[Tn('<ellipse cx="48" cy="80" rx="24" ry="7" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="50" rx="28" ry="24" fill="#D7A574" data-v-e33ebb8c></ellipse><ellipse cx="30" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="66" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="18" ry="16" fill="#E6C29A" data-v-e33ebb8c></ellipse><circle cx="58" cy="46" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="54" cy="54" rx="8" ry="6" fill="#212121" data-v-e33ebb8c></ellipse><path stroke="#8D6E63" stroke-width="6" stroke-linecap="round" fill="none" d="M72 56 Q84 48 88 36" data-v-e33ebb8c></path>',8)])])):n.petId==="cat"?(me(),xe("g",_E,[...t[2]||(t[2]=[Tn('<ellipse cx="48" cy="80" rx="22" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><path fill="#FFB74D" d="M28 44 L34 24 L42 40 Z M54 40 L62 24 L68 44 Z" data-v-e33ebb8c></path><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFCC80" data-v-e33ebb8c></ellipse><circle cx="40" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><circle cx="56" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><ellipse cx="48" cy="58" rx="5" ry="4" fill="#E65100" data-v-e33ebb8c></ellipse><path stroke="#FFCC80" stroke-width="8" stroke-linecap="round" fill="none" d="M22 60 Q12 52 10 40" data-v-e33ebb8c></path>',7)])])):n.petId==="rabbit"?(me(),xe("g",vE,[...t[3]||(t[3]=[Tn('<ellipse cx="48" cy="82" rx="18" ry="5" fill="#3E2723" opacity="0.08" data-v-e33ebb8c></ellipse><ellipse cx="38" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="56" rx="22" ry="20" fill="#FAFAFA" data-v-e33ebb8c></ellipse><circle cx="40" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><circle cx="56" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="48" cy="60" rx="4" ry="3" fill="#F48FB1" data-v-e33ebb8c></ellipse>',7)])])):n.petId==="horse"?(me(),xe("g",xE,[...t[4]||(t[4]=[Tn('<ellipse cx="48" cy="82" rx="26" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="22" ry="18" fill="#A1887F" data-v-e33ebb8c></ellipse><ellipse cx="72" cy="44" rx="12" ry="10" fill="#BCAAA4" data-v-e33ebb8c></ellipse><path fill="#5D4037" d="M68 36 Q76 28 84 32 L80 40 Z" data-v-e33ebb8c></path><circle cx="76" cy="42" r="2.5" fill="#212121" data-v-e33ebb8c></circle><rect x="34" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect><rect x="50" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect>',7)])])):(me(),xe("g",ME,[...t[5]||(t[5]=[P("circle",{cx:"48",cy:"48",r:"28",fill:"#E0E0E0"},null,-1),P("circle",{cx:"40",cy:"44",r:"4",fill:"#424242"},null,-1),P("circle",{cx:"56",cy:"44",r:"4",fill:"#424242"},null,-1)])]))]))],2))}},yE=Wn(SE,[["__scopeId","data-v-e33ebb8c"]]),bE={class:"page page-scene store-page"},EE={class:"game-tabs"},TE=["onClick"],wE={key:0,class:"list-block"},AE=["onClick"],CE={class:"game-thumb thumb-crop"},RE={class:"item-info"},PE={class:"item-name"},DE={class:"item-desc"},LE={class:"item-price"},IE={key:1,class:"list-block"},UE=["onClick"],NE={class:"game-thumb thumb-emoji"},FE={class:"item-info"},OE={class:"item-name"},BE={class:"item-desc"},kE={key:0,class:"item-price"},zE={key:1,class:"owned-tag"},HE={key:2,class:"list-block"},VE=["onClick"],GE={class:"game-thumb thumb-pet"},WE={class:"item-info"},XE={class:"item-name"},$E={class:"item-desc"},qE={key:0,class:"item-price"},YE={key:1,class:"owned-tag"},jE={__name:"StorePage",setup(n){const e=Rt("seeds"),t=[{id:"seeds",name:"种子"},{id:"buildings",name:"建筑"},{id:"pets",name:"宠物"}],i=kt(()=>{const a={};return Object.entries(sn).forEach(([l,c])=>{(oe.unlockedCrops.includes(l)||!c.unlock)&&(a[l]=c)}),a}),s=kt(()=>{const a={};return Object.entries(Ko).forEach(([l,c])=>{(oe.unlockedBuildings.includes(l)||!c.unlock)&&(a[l]=c)}),a}),r=kt(()=>{const a={};return Object.entries(Zs).forEach(([l,c])=>{(oe.unlockedPets.includes(l)||!c.unlock)&&(a[l]=c)}),a});function o(a,l){let c;if(a==="crop")c=sn[l];else if(a==="building")c=Ko[l];else if(a==="pet")c=Zs[l];else return;if(!(a==="building"&&oe.unlockedBuildings.includes(l))&&!(a==="pet"&&oe.unlockedPets.includes(l))){if(oe.coins<c.price){alert("金币不足");return}if(confirm(`购买 ${c.name}？`)){const u=Ln.buyItem(a,l,c.price);u.success?alert("购买成功！"):alert(u.message)}}}return(a,l)=>(me(),xe("div",bE,[l[0]||(l[0]=P("div",{class:"shop-header"},[P("span",{class:"game-sign-inline"},"🏪 村口杂货铺"),P("p",{class:"shop-sub"},"种子 · 建筑 · 小动物")],-1)),P("div",EE,[(me(),xe(ht,null,Lt(t,c=>P("button",{key:c.id,type:"button",class:xn(["game-tab",{active:e.value===c.id}]),onClick:u=>e.value=c.id},Re(c.name),11,TE)),64))]),e.value==="seeds"?(me(),xe("div",wE,[(me(!0),xe(ht,null,Lt(i.value,(c,u)=>(me(),xe("div",{key:u,class:"game-list-row",onClick:h=>o("crop",u)},[P("div",CE,[Kt(kc,{"crop-id":u,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),P("div",RE,[P("span",PE,Re(c.name),1),P("span",DE,"生长约 "+Re(c.growTime)+" 小时 · 种在田里吧",1)]),P("span",LE,"💰 "+Re(c.price),1)],8,AE))),128))])):Nt("",!0),e.value==="buildings"?(me(),xe("div",IE,[(me(!0),xe(ht,null,Lt(s.value,(c,u)=>(me(),xe("div",{key:u,class:xn(["game-list-row",{muted:st(oe).unlockedBuildings.includes(u)}]),onClick:h=>o("building",u)},[P("div",NE,Re(c.icon),1),P("div",FE,[P("span",OE,Re(c.name),1),P("span",BE,Re(c.effect),1)]),st(oe).unlockedBuildings.includes(u)?(me(),xe("span",zE,"已拥有")):(me(),xe("span",kE,"💰 "+Re(c.price),1))],10,UE))),128))])):Nt("",!0),e.value==="pets"?(me(),xe("div",HE,[(me(!0),xe(ht,null,Lt(r.value,(c,u)=>(me(),xe("div",{key:u,class:xn(["game-list-row",{muted:st(oe).unlockedPets.includes(u)}]),onClick:h=>o("pet",u)},[P("div",GE,[Kt(yE,{"pet-id":u},null,8,["pet-id"])]),P("div",WE,[P("span",XE,Re(c.name),1),P("span",$E,Re(c.effect),1)]),st(oe).unlockedPets.includes(u)?(me(),xe("span",YE,"已拥有")):(me(),xe("span",qE,"💰 "+Re(c.price),1))],10,VE))),128))])):Nt("",!0)]))}},KE=Wn(jE,[["__scopeId","data-v-c1d29d16"]]),ZE={class:"page page-scene warehouse-page"},JE={class:"game-tabs"},QE=["onClick"],e1={key:0,class:"list-block"},t1={key:0,class:"empty-barn"},n1={class:"game-thumb thumb-crop"},i1={class:"item-info"},s1={class:"item-name"},r1={class:"item-qty"},o1=["onClick"],a1={key:1,class:"list-block"},l1={key:0,class:"empty-barn mild"},c1={class:"item-info"},u1={class:"item-name"},f1={class:"item-qty"},h1={__name:"WarehousePage",setup(n){const e=Rt("crops"),t=[{id:"crops",name:"作物"},{id:"items",name:"物品"}],i=kt(()=>Object.entries(oe.warehouse.crops).filter(([,r])=>r>0).map(([r,o])=>{var a;return{id:r,name:((a=sn[r])==null?void 0:a.name)||r,quantity:o}}));function s(r){const o=sn[r],a=oe.warehouse.crops[r],l=o.sellPrice*a;confirm(`出售全部 ${o.name} ×${a}？可获得 ${l} 金币`)&&(oe.coins+=l,oe.warehouse.crops[r]=0)}return(r,o)=>(me(),xe("div",ZE,[o[3]||(o[3]=P("div",{class:"barn-header"},[P("span",{class:"game-sign-inline"},"🌾 我的谷仓"),P("p",{class:"barn-sub"},"收获的作物会堆在这里")],-1)),P("div",JE,[(me(),xe(ht,null,Lt(t,a=>P("button",{key:a.id,type:"button",class:xn(["game-tab",{active:e.value===a.id}]),onClick:l=>e.value=a.id},Re(a.name),11,QE)),64))]),e.value==="crops"?(me(),xe("div",e1,[i.value.length===0?(me(),xe("div",t1,[...o[0]||(o[0]=[Tn('<svg class="barn-illus" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-42e7d5d0><ellipse cx="100" cy="118" rx="88" ry="14" fill="#3e2723" opacity="0.12" data-v-42e7d5d0></ellipse><path d="M24 95 L100 38 L176 95 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></path><rect x="36" y="95" width="128" height="28" rx="2" fill="#a1887f" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></rect><rect x="82" y="70" width="36" height="42" fill="#5d4037" rx="2" data-v-42e7d5d0></rect><rect x="46" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><rect x="132" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><path d="M100 38 L100 18 Q118 28 100 38" fill="#d7ccc8" stroke="#8d6e63" data-v-42e7d5d0></path></svg><p class="empty-title" data-v-42e7d5d0>谷仓里还空着呢</p><p class="empty-desc" data-v-42e7d5d0>去「运动」页打卡，收获会自动装进谷仓～</p>',3)])])):(me(!0),xe(ht,{key:1},Lt(i.value,a=>(me(),xe("div",{key:a.id,class:"game-list-row shelf-row"},[P("div",n1,[Kt(kc,{"crop-id":a.id,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),P("div",i1,[P("span",s1,Re(a.name),1),P("span",r1,"库存 ×"+Re(a.quantity),1)]),P("button",{type:"button",class:"sell-btn",onClick:us(l=>s(a.id),["stop"])},"出售",8,o1)]))),128))])):Nt("",!0),e.value==="items"?(me(),xe("div",a1,[Object.keys(st(oe).warehouse.items).length===0?(me(),xe("div",l1,[...o[1]||(o[1]=[P("span",{class:"empty-emoji"},"📦",-1),P("p",{class:"empty-title"},"还没有杂物",-1),P("p",{class:"empty-desc"},"药水、道具解锁后会出现在这里",-1)])])):(me(!0),xe(ht,{key:1},Lt(st(oe).warehouse.items,(a,l)=>(me(),xe("div",{key:l,class:"game-list-row shelf-row muted-click"},[o[2]||(o[2]=P("div",{class:"game-thumb thumb-emoji"},"📦",-1)),P("div",c1,[P("span",u1,Re(l),1),P("span",f1,"×"+Re(a),1)])]))),128))])):Nt("",!0)]))}},d1=Wn(h1,[["__scopeId","data-v-42e7d5d0"]]),p1={class:"page page-scene social-page"},m1={class:"game-panel rank-panel"},g1={class:"rank-list"},_1={class:"rank-medal"},v1={class:"rank-num"},x1={class:"rank-name"},M1={class:"rank-value"},S1={class:"game-panel"},y1={class:"friend-list"},b1={class:"friend-avatar"},E1={class:"friend-meta"},T1={class:"friend-name"},w1={class:"friend-status"},A1=["disabled","onClick"],C1={class:"game-panel pk-panel"},R1={key:0,class:"pk-section"},P1={class:"pk-row-top"},D1={class:"pk-vs"},L1=["onClick"],I1={class:"pk-meta"},U1={key:0,class:"pk-rule"},N1={class:"pk-stake-sum"},F1=["onClick"],O1={key:1,class:"pk-section"},B1={class:"pk-row-top"},k1={class:"pk-deadline"},z1={class:"pk-meta"},H1={class:"pk-score"},V1={class:"score-me"},G1={class:"unit"},W1={class:"score-friend"},X1={class:"lbl"},$1={class:"unit"},q1={class:"pk-pool"},Y1={key:2,class:"pk-section"},j1={class:"pk-result-line"},K1={key:0,class:"win"},Z1={key:1,class:"lose"},J1={class:"pk-result-msg"},Q1={key:3,class:"pk-empty"},eT={class:"fld"},tT=["value"],nT={class:"fld"},iT={class:"fld"},sT=["value"],rT={class:"fld-hint"},oT={class:"fld"},aT={class:"stake-block"},lT={class:"fld"},cT={key:0,class:"crop-stakes"},uT=["onUpdate:modelValue","max"],fT={class:"mx"},hT={key:1,class:"pet-stakes"},dT=["checked","onChange"],pT={class:"modal-actions"},mT={class:"fld"},gT={class:"crop-stakes"},_T=["onUpdate:modelValue"],vT={class:"modal-actions"},xT={__name:"SocialPage",setup(n){const e=Rt([{id:1,name:"小明",icon:"👦",farmStatus:"胡萝卜快要熟了"},{id:2,name:"小红",icon:"👧",farmStatus:"番茄长势喜人"},{id:3,name:"小刚",icon:"👨",farmStatus:"玉米地里绿油油"}]),t=["carrot","tomato","corn"],i=kt(()=>[{name:"运动达人小王",value:1500,unit:"分钟"},{name:"健身狂人小李",value:1200,unit:"分钟"},{name:"晨练选手小张",value:1e3,unit:"分钟"},{name:"你",value:oe.stats.totalExerciseTime,unit:"分钟"},{name:"夜猫子小赵",value:500,unit:"分钟"}]),s=kt(()=>oe.pkChallenges.filter(V=>V.status==="pending")),r=kt(()=>oe.pkChallenges.filter(V=>V.status==="active")),o=kt(()=>[...oe.pkChallenges].filter(V=>V.status==="settled").sort((V,B)=>(B.settledAt||0)-(V.settledAt||0))),a=Rt(!1),l=Rt(1),c=Rt(7),u=Rt("exercise_minutes"),h=Rt(""),f=Rt(0),d=Rt({}),g=Rt([]),M=kt(()=>Qi(u.value).hint),m=kt(()=>Object.entries(oe.warehouse.crops||{}).filter(([,V])=>V>0).map(([V,B])=>({id:V,qty:B})));function p(){const V={};for(const[B,Me]of Object.entries(oe.warehouse.crops||{}))Me>0&&(V[B]=0);d.value=V,g.value=[],f.value=0,h.value="",c.value=7,u.value="exercise_minutes",a.value=!0}function x(V){const B=g.value.indexOf(V);B>=0?g.value.splice(B,1):g.value.push(V)}function T(){const V=e.value.find(j=>j.id===l.value),B={};for(const[j,Se]of Object.entries(d.value)){const qe=Math.min(Math.max(0,Math.floor(Number(Se)||0)),oe.warehouse.crops[j]||0);qe>0&&(B[j]=qe)}const Me=Ln.createPkChallenge({friendId:l.value,friendName:(V==null?void 0:V.name)||"好友",durationDays:c.value,pkType:u.value,ruleNote:h.value,stakes:{crops:B,coins:f.value,petIds:[...g.value]}});Me.success?(a.value=!1,alert("挑战已创建。请让对方同意下注，或在本页点击「好友同意并下注」完成单机演示。")):alert(Me.message)}const y=Rt(!1),L=Rt(""),w=Rt(50),I=Rt({carrot:1,tomato:0,corn:0});function v(V){L.value=V.id,w.value=60,I.value={carrot:1,tomato:1,corn:0},y.value=!0}function C(){w.value=100,I.value={carrot:2,tomato:1,corn:1}}function k(){const V={};for(const Me of t){const j=Math.max(0,Math.floor(Number(I.value[Me])||0));j>0&&(V[Me]=j)}const B=Ln.acceptPkChallenge(L.value,{crops:V,coins:w.value,petIds:[]});B.success?(y.value=!1,alert("PK 已成立！挑战期内去「运动」打卡即可累积成绩；截止后自动结算。")):alert(B.message)}function N(V){if(!confirm("确定撤回这条待确认的挑战？"))return;const B=Ln.cancelPkChallenge(V);B.success||alert(B.message)}function G(V){var j;if(!V)return"—";const B=[];V.coins>0&&B.push(`${V.coins} 金币`);const Me=(V.petIds||[]).reduce((Se,qe)=>{var lt;return Se+(((lt=Zs[qe])==null?void 0:lt.price)||0)},0);Me&&B.push(`宠物折算 ${Me} 金币`);for(const[Se,qe]of Object.entries(V.crops||{}))qe>0&&B.push(`${((j=sn[Se])==null?void 0:j.name)||Se}×${qe}`);return B.length?B.join("，"):"—"}function te(V){var Me;if(!V)return"—";const B=[];V.coins>0&&B.push(`${V.coins} 金币`);for(const[j,Se]of Object.entries(V.crops||{}))Se>0&&B.push(`${((Me=sn[j])==null?void 0:Me.name)||j}×${Se}`);return B.length?B.join("，"):"—"}function re(V,B){return V.pkType==="exercise_minutes"?B==="me"?V.myScore||0:V.friendScore||0:B==="me"?V.mySessions||0:V.friendSessions||0}function H(V){return V?new Date(V).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}function Z(V){return V===0?"🥇":V===1?"🥈":V===2?"🥉":"🏅"}function W(V){if(oe.stealCount>=3){alert("今日偷菜次数已用完");return}const B=Math.floor(Math.random()*50)+10;oe.coins+=B,oe.stealCount++,oe.stats.totalStealCount++,alert(`偷取了 ${V.name} 的 ${B} 金币！`)}return ga(()=>{Ln.resolvePkChallengesIfNeeded()}),(V,B)=>{var Me;return me(),xe("div",p1,[B[37]||(B[37]=P("div",{class:"town-header"},[P("span",{class:"game-sign-inline"},"👋 邻里串门"),P("p",{class:"town-sub"},"排行榜 · 好友农田 · PK 挑战")],-1)),P("div",m1,[B[12]||(B[12]=P("div",{class:"panel-strip"},[P("span",{class:"strip-icon"},"🏆"),P("span",{class:"strip-title"},"全镇运动榜")],-1)),P("div",g1,[(me(!0),xe(ht,null,Lt(i.value,(j,Se)=>(me(),xe("div",{key:Se,class:xn(["rank-row",{top1:Se===0,top2:Se===1,top3:Se===2,isMe:j.name==="你"}])},[P("span",_1,Re(Z(Se)),1),P("span",v1,Re(Se+1),1),P("span",x1,Re(j.name),1),P("span",M1,Re(j.value)+" "+Re(j.unit),1)],2))),128))])]),P("div",S1,[B[14]||(B[14]=P("div",{class:"panel-strip"},[P("span",{class:"strip-icon"},"🥕"),P("span",{class:"strip-title"},"好友农场")],-1)),P("div",y1,[(me(!0),xe(ht,null,Lt(e.value,j=>(me(),xe("div",{key:j.id,class:"friend-card"},[P("div",b1,Re(j.icon),1),P("div",E1,[P("span",T1,Re(j.name),1),P("span",w1,[B[13]||(B[13]=P("span",{class:"sprout"},"🌱",-1)),_n(" "+Re(j.farmStatus),1)])]),P("button",{type:"button",class:"steal-btn",disabled:st(oe).stealCount>=3,onClick:Se=>W(j)},Re(st(oe).stealCount>=3?"次数用尽":"偷菜"),9,A1)]))),128))])]),P("div",C1,[P("div",{class:"panel-strip pk-strip"},[B[15]||(B[15]=P("span",{class:"strip-icon"},"⚔️",-1)),B[16]||(B[16]=P("span",{class:"strip-title"},"PK 挑战",-1)),P("button",{type:"button",class:"pk-launch",onClick:p},"＋ 发起挑战")]),B[23]||(B[23]=P("p",{class:"pk-intro"},[_n(" 向指定好友发起限时挑战，设置比拼规则与赌注；双方协商下注并同意后挑战生效，截止时按规则判定胜负，胜者拿走奖池（作物 + 金币；宠物按商店原价折算进金币池）。 "),P("strong",null,"单机演示："),_n("好友下注由你在「同意成立」一步代为填写。 ")],-1)),s.value.length?(me(),xe("div",R1,[B[18]||(B[18]=P("h4",{class:"pk-subhd"},"待好友确认（下注）",-1)),(me(!0),xe(ht,null,Lt(s.value,j=>(me(),xe("div",{key:j.id,class:"pk-card pending"},[P("div",P1,[P("span",D1,[B[17]||(B[17]=_n("你对 ",-1)),P("strong",null,Re(j.friendName),1)]),P("button",{type:"button",class:"link-btn danger",onClick:Se=>N(j.id)},"撤回",8,L1)]),P("p",I1,Re(st(Qi)(j.pkType).label)+" · 时长 "+Re(j.durationDays)+" 天 ",1),j.ruleNote?(me(),xe("p",U1,"约定："+Re(j.ruleNote),1)):Nt("",!0),P("div",N1," 我方赌注："+Re(G(j.stakesMe)),1),P("button",{type:"button",class:"game-btn-primary-lg slim",onClick:Se=>v(j)}," 好友同意并下注（演示） ",8,F1)]))),128))])):Nt("",!0),r.value.length?(me(),xe("div",O1,[B[21]||(B[21]=P("h4",{class:"pk-subhd"},"进行中",-1)),(me(!0),xe(ht,null,Lt(r.value,j=>(me(),xe("div",{key:j.id,class:"pk-card active"},[P("div",B1,[P("span",null,"⚔️ vs "+Re(j.friendName),1),P("span",k1,"截止 "+Re(H(j.endsAt)),1)]),P("p",z1,Re(st(Qi)(j.pkType).label)+" · "+Re(st(Qi)(j.pkType).hint),1),P("div",H1,[P("div",V1,[B[19]||(B[19]=P("span",{class:"lbl"},"我",-1)),P("strong",null,Re(re(j,"me")),1),P("span",G1,Re(st(Qi)(j.pkType).unit),1)]),B[20]||(B[20]=P("span",{class:"vs-dot"},"VS",-1)),P("div",W1,[P("span",X1,Re(j.friendName),1),P("strong",null,Re(re(j,"friend")),1),P("span",$1,Re(st(Qi)(j.pkType).unit),1)])]),P("p",q1,"奖池："+Re(te(j.escrow)),1)]))),128))])):Nt("",!0),o.value.length?(me(),xe("div",Y1,[B[22]||(B[22]=P("h4",{class:"pk-subhd"},"最新战绩",-1)),(me(!0),xe(ht,null,Lt(o.value.slice(0,5),j=>(me(),xe("div",{key:j.id,class:"pk-card settled"},[P("p",j1,[j.winnerSide==="me"?(me(),xe("span",K1,"🏆 胜")):(me(),xe("span",Z1,"…")),_n(" vs "+Re(j.friendName)+" · "+Re(st(Qi)(j.pkType).label),1)]),P("p",J1,Re(j.resultMessage),1)]))),128))])):Nt("",!0),!s.value.length&&!r.value.length&&!o.value.length?(me(),xe("p",Q1," 暂无 PK，点击右上角发起一场。 ")):Nt("",!0)]),a.value?(me(),xe("div",{key:0,class:"modal-overlay",onClick:B[7]||(B[7]=us(j=>a.value=!1,["self"]))},[P("div",{class:"modal-sheet",onClick:B[6]||(B[6]=us(()=>{},["stop"]))},[B[32]||(B[32]=P("h3",null,"发起 PK 挑战",-1)),P("label",eT,[B[24]||(B[24]=P("span",null,"对手",-1)),_i(P("select",{"onUpdate:modelValue":B[0]||(B[0]=j=>l.value=j),class:"fld-input"},[(me(!0),xe(ht,null,Lt(e.value,j=>(me(),xe("option",{key:j.id,value:j.id},Re(j.name),9,tT))),128))],512),[[tf,l.value,void 0,{number:!0}]])]),P("label",nT,[B[25]||(B[25]=P("span",null,"持续天数",-1)),_i(P("input",{"onUpdate:modelValue":B[1]||(B[1]=j=>c.value=j),type:"number",min:"1",max:"30",class:"fld-input"},null,512),[[rs,c.value,void 0,{number:!0}]])]),P("label",iT,[B[26]||(B[26]=P("span",null,"比拼类型",-1)),_i(P("select",{"onUpdate:modelValue":B[2]||(B[2]=j=>u.value=j),class:"fld-input"},[(me(!0),xe(ht,null,Lt(st(Zo),j=>(me(),xe("option",{key:j.id,value:j.id},Re(j.label),9,sT))),128))],512),[[tf,u.value]])]),P("p",rT,Re(M.value),1),P("label",oT,[B[27]||(B[27]=P("span",null,"补充约定（可选）",-1)),_i(P("textarea",{"onUpdate:modelValue":B[3]||(B[3]=j=>h.value=j),rows:"2",class:"fld-input",placeholder:"例如：每天早晨跑步打卡算数…"},null,512),[[rs,h.value]])]),P("div",aT,[B[31]||(B[31]=P("span",{class:"stake-title"},"我的赌注",-1)),P("label",lT,[B[28]||(B[28]=P("span",null,"金币",-1)),_i(P("input",{"onUpdate:modelValue":B[4]||(B[4]=j=>f.value=j),type:"number",min:"0",class:"fld-input"},null,512),[[rs,f.value,void 0,{number:!0}]])]),m.value.length?(me(),xe("div",cT,[B[29]||(B[29]=P("span",{class:"mini-label"},"作物（从仓库扣）",-1)),(me(!0),xe(ht,null,Lt(m.value,j=>{var Se;return me(),xe("div",{key:j.id,class:"crop-row"},[P("span",null,Re((Se=st(sn)[j.id])==null?void 0:Se.name),1),_i(P("input",{"onUpdate:modelValue":qe=>d.value[j.id]=qe,type:"number",min:"0",max:j.qty,class:"fld-input tiny"},null,8,uT),[[rs,d.value[j.id],void 0,{number:!0}]]),P("span",fT,"/ "+Re(j.qty),1)])}),128))])):Nt("",!0),(Me=st(oe).unlockedPets)!=null&&Me.length?(me(),xe("div",hT,[B[30]||(B[30]=P("span",{class:"mini-label"},"宠物（按原价从金币扣押）",-1)),(me(!0),xe(ht,null,Lt(st(oe).unlockedPets,j=>{var Se,qe;return me(),xe("label",{key:j,class:"pet-line"},[P("input",{type:"checkbox",checked:g.value.includes(j),onChange:lt=>x(j)},null,40,dT),_n(" "+Re((Se=st(Zs)[j])==null?void 0:Se.name)+"（≈"+Re((qe=st(Zs)[j])==null?void 0:qe.price)+" 币） ",1)])}),128))])):Nt("",!0)]),P("div",pT,[P("button",{type:"button",class:"btn-cancel",onClick:B[5]||(B[5]=j=>a.value=!1)},"取消"),P("button",{type:"button",class:"game-btn-primary-lg slim",onClick:T},"发出挑战")])])])):Nt("",!0),y.value?(me(),xe("div",{key:1,class:"modal-overlay",onClick:B[11]||(B[11]=us(j=>y.value=!1,["self"]))},[P("div",{class:"modal-sheet",onClick:B[10]||(B[10]=us(()=>{},["stop"]))},[B[35]||(B[35]=P("h3",null,"协商成立 PK",-1)),B[36]||(B[36]=P("p",{class:"accept-lead"},[_n(" 现实中应由好友客户端确认。此处请"),P("strong",null,"代为填写好友的下注"),_n("，双方赌注齐全后奖池成立并开始计时。 ")],-1)),P("button",{type:"button",class:"demo-fill",onClick:C},"一键填入演示赌注"),P("label",mT,[B[33]||(B[33]=P("span",null,"好友下注 · 金币",-1)),_i(P("input",{"onUpdate:modelValue":B[8]||(B[8]=j=>w.value=j),type:"number",min:"0",class:"fld-input"},null,512),[[rs,w.value,void 0,{number:!0}]])]),P("div",gT,[B[34]||(B[34]=P("span",{class:"mini-label"},"好友下注 · 作物（演示数量）",-1)),(me(),xe(ht,null,Lt(t,j=>{var Se;return P("div",{key:j,class:"crop-row"},[P("span",null,Re((Se=st(sn)[j])==null?void 0:Se.name),1),_i(P("input",{"onUpdate:modelValue":qe=>I.value[j]=qe,type:"number",min:"0",class:"fld-input tiny"},null,8,_T),[[rs,I.value[j],void 0,{number:!0}]])])}),64))]),P("div",vT,[P("button",{type:"button",class:"btn-cancel",onClick:B[9]||(B[9]=j=>y.value=!1)},"取消"),P("button",{type:"button",class:"game-btn-primary-lg slim",onClick:k},"确认成立 PK")])])])):Nt("",!0)])}}},MT=Wn(xT,[["__scopeId","data-v-5e407f7c"]]),ST={class:"page page-scene achievement-page"},yT={class:"game-panel"},bT={class:"achievement-list"},ET={class:"plank-icon"},TT={class:"plank-body"},wT={class:"plank-name"},AT={class:"plank-desc"},CT={key:0,class:"plank-progress"},RT={class:"wood-progress-track"},PT={class:"plank-pct"},DT={key:0,class:"plank-reward"},LT={class:"game-panel streak-panel"},IT={class:"streak-hero"},UT={class:"streak-num"},NT={class:"streak-grid"},FT={class:"mile-day"},OT={class:"mile-reward"},BT={__name:"AchievementPage",setup(n){const e=[{days:7,reward:"解锁草莓"},{days:14,reward:"解锁葡萄+宠物屋"},{days:30,reward:"解锁餐厅"},{days:100,reward:"冠军雕像"}],t=kt(()=>Object.entries(Vg).map(([r,o])=>{let a=!1,l=0;return r==="firstExercise"?(a=oe.stats.totalExerciseTime>0,l=a?100:0):r==="streak7"?(a=oe.streakDays>=7,l=Math.min(100,oe.streakDays/7*100)):r==="streak14"?(a=oe.streakDays>=14,l=Math.min(100,oe.streakDays/14*100)):r==="streak30"?(a=oe.streakDays>=30,l=Math.min(100,oe.streakDays/30*100)):r==="level5"?(a=oe.level>=5,l=Math.min(100,oe.level/5*100)):r==="rich"&&(a=oe.coins>=1e4,l=Math.min(100,oe.coins/1e4*100)),{id:r,...o,completed:a,progress:l}}));function i(r){const o=Math.min(100,Math.max(0,Number(r)));return Math.round(o*10)/10}function s(r){if(!r)return"无";const o=[];return r.coins&&o.push(`${r.coins} 金币`),r.crops&&o.push(`作物：${r.crops.join("、")}`),r.buildings&&o.push(`建筑：${r.buildings.join("、")}`),r.diamonds&&o.push(`${r.diamonds} 钻石`),o.length?o.join("；"):JSON.stringify(r)}return(r,o)=>(me(),xe("div",ST,[o[4]||(o[4]=P("div",{class:"honor-header"},[P("span",{class:"game-sign-inline"},"🏅 荣誉墙"),P("p",{class:"honor-sub"},"完成目标，解锁农场好礼")],-1)),P("div",yT,[o[0]||(o[0]=P("div",{class:"panel-strip center"},[P("span",{class:"strip-title"},"成就进度")],-1)),P("div",bT,[(me(!0),xe(ht,null,Lt(t.value,a=>(me(),xe("div",{key:a.id,class:xn(["achievement-plank",{done:a.completed}])},[P("div",ET,Re(a.completed?"🏆":"🔒"),1),P("div",TT,[P("span",wT,Re(a.name),1),P("span",AT,Re(a.desc),1),a.completed?Nt("",!0):(me(),xe("div",CT,[P("div",RT,[P("div",{class:"wood-progress-fill",style:ar({width:i(a.progress)+"%"})},null,4)]),P("span",PT,Re(i(a.progress))+"%",1)]))]),a.completed?(me(),xe("div",DT,Re(s(a.reward)),1)):Nt("",!0)],2))),128))])]),P("div",LT,[o[3]||(o[3]=P("div",{class:"panel-strip center"},[P("span",{class:"strip-title"},"连续打卡")],-1)),P("div",IT,[o[1]||(o[1]=P("span",{class:"flame"},"🔥",-1)),P("span",UT,Re(st(oe).streakDays),1),o[2]||(o[2]=P("span",{class:"streak-unit"},"天",-1))]),P("div",NT,[(me(),xe(ht,null,Lt(e,a=>P("div",{key:a.days,class:xn(["streak-mile",{ok:st(oe).streakDays>=a.days}])},[P("span",FT,Re(a.days)+" 天",1),P("span",OT,Re(a.reward),1)],2)),64))])])]))}},kT=Wn(BT,[["__scopeId","data-v-0d73f237"]]),zT={__name:"Modal",emits:["close"],setup(n){return(e,t)=>(me(),xe("div",{class:"modal-overlay",onClick:t[2]||(t[2]=i=>e.$emit("close"))},[P("div",{class:"modal-content",onClick:t[1]||(t[1]=us(()=>{},["stop"]))},[P("button",{class:"modal-close",onClick:t[0]||(t[0]=i=>e.$emit("close"))},"×"),Tm(e.$slots,"default",{},void 0)])]))}},HT=Wn(zT,[["__scopeId","data-v-96d8b394"]]),VT={class:"container"},GT={class:"resource-bar"},WT={class:"resource-item"},XT={class:"resource-item"},$T={class:"resource-item"},qT={class:"resource-item"},YT={class:"tab-bar"},jT=["onClick"],KT={class:"icon"},ZT={__name:"App",setup(n){const e=Rt("home"),t=Rt(!1),i=Rt(null),s=[{id:"home",name:"农场",icon:"🏠"},{id:"exercise",name:"运动",icon:"🏃"},{id:"store",name:"商店",icon:"🏪"},{id:"warehouse",name:"仓库",icon:"📦"},{id:"social",name:"社交",icon:"👥"},{id:"achievement",name:"成就",icon:"🏆"}],r=kt(()=>({home:Vb,exercise:dE,store:KE,warehouse:d1,social:MT,achievement:kT})[e.value]);return ga(()=>{Ln.resolvePkChallengesIfNeeded()}),(o,a)=>(me(),xe("div",VT,[P("div",GT,[P("div",WT,[a[1]||(a[1]=P("span",null,"💰",-1)),P("span",null,Re(st(oe).coins),1)]),P("div",XT,[a[2]||(a[2]=P("span",null,"💎",-1)),P("span",null,Re(st(oe).diamonds),1)]),P("div",$T,[a[3]||(a[3]=P("span",null,"⚡",-1)),P("span",null,Re(st(oe).energy)+"/"+Re(st(oe).maxEnergy),1)]),P("div",qT,[a[4]||(a[4]=P("span",null,"🔥",-1)),P("span",null,Re(st(oe).streakDays)+"天",1)])]),(me(),js(Ru(r.value))),P("div",YT,[(me(),xe(ht,null,Lt(s,l=>P("div",{key:l.id,class:xn(["tab-item",{active:e.value===l.id}]),onClick:c=>e.value=l.id},[P("span",KT,Re(l.icon),1),P("span",null,Re(l.name),1)],10,jT)),64))]),t.value?(me(),js(HT,{key:0,onClose:a[0]||(a[0]=l=>t.value=!1)},{default:Xh(()=>[(me(),js(Ru(i.value)))]),_:1})):Nt("",!0)]))}};kg(ZT).mount("#app");
