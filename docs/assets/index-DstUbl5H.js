(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ic(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Et={},Bs=[],Qn=()=>{},jf=()=>!1,Wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Xo=n=>n.startsWith("onUpdate:"),rn=Object.assign,sc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xh=Object.prototype.hasOwnProperty,mt=(n,e)=>Xh.call(n,e),qe=Array.isArray,ks=n=>Fr(n)==="[object Map]",$o=n=>Fr(n)==="[object Set]",tu=n=>Fr(n)==="[object Date]",tt=n=>typeof n=="function",Rt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Kf=n=>(Mt(n)||tt(n))&&tt(n.then)&&tt(n.catch),Zf=Object.prototype.toString,Fr=n=>Zf.call(n),$h=n=>Fr(n).slice(8,-1),Jf=n=>Fr(n)==="[object Object]",rc=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gr=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qh=/-\w/g,fn=qo(n=>n.replace(qh,e=>e.slice(1).toUpperCase())),Yh=/\B([A-Z])/g,ms=qo(n=>n.replace(Yh,"-$1").toLowerCase()),Yo=qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ca=qo(n=>n?`on${Yo(n)}`:""),Kn=(n,e)=>!Object.is(n,e),_o=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Qf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},jo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nu;const Ko=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tr(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Jh(i):tr(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||Mt(n))return n}const jh=/;(?![^(]*\))/g,Kh=/:([^]+)/,Zh=/\/\*[^]*?\*\//g;function Jh(n){const e={};return n.replace(Zh,"").split(jh).forEach(t=>{if(t){const i=t.split(Kh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function gn(n){let e="";if(Rt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=gn(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ep=ic(Qh);function ed(n){return!!n||n===""}function tp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Or(n[i],e[i]);return t}function Or(n,e){if(n===e)return!0;let t=tu(n),i=tu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?tp(n,e):!1;if(t=Mt(n),i=Mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Or(n[o],e[o]))return!1}}return String(n)===String(e)}function np(n,e){return n.findIndex(t=>Or(t,e))}const td=n=>!!(n&&n.__v_isRef===!0),we=n=>Rt(n)?n:n==null?"":qe(n)||Mt(n)&&(n.toString===Zf||!tt(n.toString))?td(n)?we(n.value):JSON.stringify(n,nd,2):String(n),nd=(n,e)=>td(e)?nd(n,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ua(i,r)+" =>"]=s,t),{})}:$o(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ua(t))}:Fn(e)?ua(e):Mt(e)&&!qe(e)&&!Jf(e)?String(e):e,ua=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class ip{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Xt&&(Xt.active?(this.parent=Xt,this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){++this._on===1&&(this.prevScope=Xt,Xt=this)}off(){if(this._on>0&&--this._on===0){if(Xt===this)Xt=this.prevScope;else{let e=Xt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sp(){return Xt}let Tt;const fa=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&(Xt.active?Xt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,iu(this),od(this);const e=Tt,t=Nn;Tt=this,Nn=!0;try{return this.fn()}finally{ad(this),Tt=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lc(e);this.deps=this.depsTail=void 0,iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qa(this)&&this.run()}get dirty(){return Qa(this)}}let sd=0,_r,vr;function rd(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=_r,_r=n}function oc(){sd++}function ac(){if(--sd>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_r;){let e=_r;for(_r=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ad(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),lc(i),rp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Qa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr)||(n.globalVersion=Tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Qa(n))))return;n.flags|=2;const e=n.dep,t=Tt,i=Nn;Tt=n,Nn=!0;try{od(n);const s=n.fn(n._value);(e.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Tt=t,Nn=i,ad(n),n.flags&=-3}}function lc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)lc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function rp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const cd=[];function Ei(){cd.push(Nn),Nn=!1}function bi(){const n=cd.pop();Nn=n===void 0?!0:n}function iu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Tt;Tt=void 0;try{e()}finally{Tt=t}}}let Tr=0;class op{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Tt||!Nn||Tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Tt)t=this.activeLink=new op(Tt,this),Tt.deps?(t.prevDep=Tt.depsTail,Tt.depsTail.nextDep=t,Tt.depsTail=t):Tt.deps=Tt.depsTail=t,ud(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Tt.depsTail,t.nextDep=void 0,Tt.depsTail.nextDep=t,Tt.depsTail=t,Tt.deps===t&&(Tt.deps=i)}return t}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){oc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ac()}}}function ud(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ud(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,us=Symbol(""),tl=Symbol(""),Ar=Symbol("");function Jt(n,e,t){if(Nn&&Tt){let i=el.get(n);i||el.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new cc),s.map=i,s.key=t),s.track()}}function gi(n,e,t,i,s,r){const o=el.get(n);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(oc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&rc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Ar||!Fn(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ar)),e){case"add":l?c&&a(o.get("length")):(a(o.get(us)),ks(n)&&a(o.get(tl)));break;case"delete":l||(a(o.get(us)),ks(n)&&a(o.get(tl)));break;case"set":ks(n)&&a(o.get(us));break}}ac()}function vs(n){const e=pt(n);return e===n?e:(Jt(e,"iterate",Ar),Cn(n)?e:e.map(On))}function Zo(n){return Jt(n=pt(n),"iterate",Ar),n}function qn(n,e){return Ti(n)?js(fs(n)?On(e):e):On(e)}const ap={__proto__:null,[Symbol.iterator](){return da(this,Symbol.iterator,n=>qn(this,n))},concat(...n){return vs(this).concat(...n.map(e=>qe(e)?vs(e):e))},entries(){return da(this,"entries",n=>(n[1]=qn(this,n[1]),n))},every(n,e){return ai(this,"every",n,e,void 0,arguments)},filter(n,e){return ai(this,"filter",n,e,t=>t.map(i=>qn(this,i)),arguments)},find(n,e){return ai(this,"find",n,e,t=>qn(this,t),arguments)},findIndex(n,e){return ai(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ai(this,"findLast",n,e,t=>qn(this,t),arguments)},findLastIndex(n,e){return ai(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ai(this,"forEach",n,e,void 0,arguments)},includes(...n){return ha(this,"includes",n)},indexOf(...n){return ha(this,"indexOf",n)},join(n){return vs(this).join(n)},lastIndexOf(...n){return ha(this,"lastIndexOf",n)},map(n,e){return ai(this,"map",n,e,void 0,arguments)},pop(){return sr(this,"pop")},push(...n){return sr(this,"push",n)},reduce(n,...e){return su(this,"reduce",n,e)},reduceRight(n,...e){return su(this,"reduceRight",n,e)},shift(){return sr(this,"shift")},some(n,e){return ai(this,"some",n,e,void 0,arguments)},splice(...n){return sr(this,"splice",n)},toReversed(){return vs(this).toReversed()},toSorted(n){return vs(this).toSorted(n)},toSpliced(...n){return vs(this).toSpliced(...n)},unshift(...n){return sr(this,"unshift",n)},values(){return da(this,"values",n=>qn(this,n))}};function da(n,e,t){const i=Zo(n),s=i[e]();return i!==n&&!Cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const lp=Array.prototype;function ai(n,e,t,i,s,r){const o=Zo(n),a=o!==n&&!Cn(n),l=o[e];if(l!==lp[e]){const d=l.apply(n,r);return a?On(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,qn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function su(n,e,t,i){const s=Zo(n),r=s!==n&&!Cn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=qn(n,c)),t.call(this,c,qn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?qn(n,l):l}function ha(n,e,t){const i=pt(n);Jt(i,"iterate",Ar);const s=i[e](...t);return(s===-1||s===!1)&&dc(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function sr(n,e,t=[]){Ei(),oc();const i=pt(n)[e].apply(n,t);return ac(),bi(),i}const cp=ic("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function up(n){Fn(n)||(n=String(n));const e=pt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class dd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Mp:gd:r?md:pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=ap[t]))return l;if(t==="hasOwnProperty")return up}const a=Reflect.get(e,t,nn(e)?e:i);if((Fn(t)?fd.has(t):cp(t))||(s||Jt(e,"get",t),r))return a;if(nn(a)){const l=o&&rc(t)?a:a.value;return s&&Mt(l)?il(l):l}return Mt(a)?s?il(a):wr(a):a}}class hd extends dd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=qe(e)&&rc(t);if(!this._isShallow){const c=Ti(r);if(!Cn(i)&&!Ti(i)&&(r=pt(r),i=pt(i)),!o&&nn(r)&&!nn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,nn(e)?e:s);return e===pt(s)&&(a?Kn(i,r)&&gi(e,"set",t,i):gi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&gi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!fd.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",qe(e)?"length":us),Reflect.ownKeys(e)}}class fp extends dd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dp=new hd,hp=new fp,pp=new hd(!0);const nl=n=>n,Wr=n=>Reflect.getPrototypeOf(n);function mp(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),o=ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?nl:e?js:On;return!e&&Jt(r,"iterate",l?tl:us),rn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Xr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function gp(n,e){const t={get(s){const r=this.__v_raw,o=pt(r),a=pt(s);n||(Kn(s,a)&&Jt(o,"get",s),Jt(o,"get",a));const{has:l}=Wr(o),c=e?nl:n?js:On;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Jt(pt(s),"iterate",us),s.size},has(s){const r=this.__v_raw,o=pt(r),a=pt(s);return n||(Kn(s,a)&&Jt(o,"has",s),Jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=pt(a),c=e?nl:n?js:On;return!n&&Jt(l,"iterate",us),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return rn(t,n?{add:Xr("add"),set:Xr("set"),delete:Xr("delete"),clear:Xr("clear")}:{add(s){const r=pt(this),o=Wr(r),a=pt(s),l=!e&&!Cn(s)&&!Ti(s)?a:s;return o.has.call(r,l)||Kn(s,l)&&o.has.call(r,s)||Kn(a,l)&&o.has.call(r,a)||(r.add(l),gi(r,"add",l,l)),this},set(s,r){!e&&!Cn(r)&&!Ti(r)&&(r=pt(r));const o=pt(this),{has:a,get:l}=Wr(o);let c=a.call(o,s);c||(s=pt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&gi(o,"set",s,r):gi(o,"add",s,r),this},delete(s){const r=pt(this),{has:o,get:a}=Wr(r);let l=o.call(r,s);l||(s=pt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&gi(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,o=s.clear();return r&&gi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=mp(s,n,e)}),t}function uc(n,e){const t=gp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const _p={get:uc(!1,!1)},vp={get:uc(!1,!0)},xp={get:uc(!0,!1)};const pd=new WeakMap,md=new WeakMap,gd=new WeakMap,Mp=new WeakMap;function Sp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yp(n){return n.__v_skip||!Object.isExtensible(n)?0:Sp($h(n))}function wr(n){return Ti(n)?n:fc(n,!1,dp,_p,pd)}function Ep(n){return fc(n,!1,pp,vp,md)}function il(n){return fc(n,!0,hp,xp,gd)}function fc(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=yp(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function fs(n){return Ti(n)?fs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ti(n){return!!(n&&n.__v_isReadonly)}function Cn(n){return!!(n&&n.__v_isShallow)}function dc(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function bp(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&Qf(n,"__v_skip",!0),n}const On=n=>Mt(n)?wr(n):n,js=n=>Mt(n)?il(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function At(n){return Tp(n,!1)}function Tp(n,e){return nn(n)?n:new Ap(n,e)}class Ap{constructor(e,t){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:On(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Cn(e)||Ti(e);e=i?e:pt(e),Kn(e,t)&&(this._rawValue=e,this._value=i?e:On(e),this.dep.trigger())}}function nt(n){return nn(n)?n.value:n}const wp={get:(n,e,t)=>e==="__v_raw"?n:nt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function _d(n){return fs(n)?n:new Proxy(n,wp)}class Cp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return rd(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rp(n,e,t=!1){let i,s;return tt(n)?i=n:(i=n.get,s=n.set),new Cp(i,s,t)}const $r={},Co=new WeakMap;let ts;function Pp(n,e=!1,t=ts){if(t){let i=Co.get(t);i||Co.set(t,i=[]),i.push(n)}}function Dp(n,e,t=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:Cn(E)||s===!1||s===0?_i(E,1):_i(E);let u,d,f,h,_=!1,M=!1;if(nn(n)?(d=()=>n.value,_=Cn(n)):fs(n)?(d=()=>c(n),_=!0):qe(n)?(M=!0,_=n.some(E=>fs(E)||Cn(E)),d=()=>n.map(E=>{if(nn(E))return E.value;if(fs(E))return c(E);if(tt(E))return l?l(E,2):E()})):tt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Ei();try{f()}finally{bi()}}const E=ts;ts=u;try{return l?l(n,3,[h]):n(h)}finally{ts=E}}:d=Qn,e&&s){const E=d,U=s===!0?1/0:s;d=()=>_i(E(),U)}const g=sp(),p=()=>{u.stop(),g&&g.active&&sc(g.effects,u)};if(r&&e){const E=e;e=(...U)=>{E(...U),p()}}let y=M?new Array(n.length).fill($r):$r;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const U=u.run();if(s||_||(M?U.some((A,N)=>Kn(A,y[N])):Kn(U,y))){f&&f();const A=ts;ts=u;try{const N=[U,y===$r?void 0:M&&y[0]===$r?[]:y,h];y=U,l?l(e,3,N):e(...N)}finally{ts=A}}}else u.run()};return a&&a(b),u=new id(d),u.scheduler=o?()=>o(b,!1):b,h=E=>Pp(E,!1,u),f=u.onStop=()=>{const E=Co.get(u);if(E){if(l)l(E,4);else for(const U of E)U();Co.delete(u)}},e?i?b(!0):y=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function _i(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))_i(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)_i(n[i],e,t);else if($o(n)||ks(n))n.forEach(i=>{_i(i,e,t)});else if(Jf(n)){for(const i in n)_i(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_i(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Br(n,e,t,i){try{return i?n(...i):n()}catch(s){Jo(s,e,t)}}function ii(n,e,t,i){if(tt(n)){const s=Br(n,e,t,i);return s&&Kf(s)&&s.catch(r=>{Jo(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ii(n[r],e,t,i));return s}}function Jo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Ei(),Br(r,null,10,[n,l,c]),bi();return}}Lp(n,t,s,i,o)}function Lp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const un=[];let Wn=-1;const zs=[];let ki=null,Ns=0;const vd=Promise.resolve();let Ro=null;function xd(n){const e=Ro||vd;return n?e.then(this?n.bind(this):n):e}function Ip(n){let e=Wn+1,t=un.length;for(;e<t;){const i=e+t>>>1,s=un[i],r=Cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function hc(n){if(!(n.flags&1)){const e=Cr(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=Cr(t)?un.push(n):un.splice(Ip(e),0,n),n.flags|=1,Md()}}function Md(){Ro||(Ro=vd.then(yd))}function Up(n){qe(n)?zs.push(...n):ki&&n.id===-1?ki.splice(Ns+1,0,n):n.flags&1||(zs.push(n),n.flags|=1),Md()}function ru(n,e,t=Wn+1){for(;t<un.length;t++){const i=un[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;un.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sd(n){if(zs.length){const e=[...new Set(zs)].sort((t,i)=>Cr(t)-Cr(i));if(zs.length=0,ki){ki.push(...e);return}for(ki=e,Ns=0;Ns<ki.length;Ns++){const t=ki[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ki=null,Ns=0}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yd(n){try{for(Wn=0;Wn<un.length;Wn++){const e=un[Wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Br(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wn<un.length;Wn++){const e=un[Wn];e&&(e.flags&=-2)}Wn=-1,un.length=0,Sd(),Ro=null,(un.length||zs.length)&&yd()}}let $t=null,Ed=null;function Po(n){const e=$t;return $t=n,Ed=n&&n.type.__scopeId||null,e}function bd(n,e=$t,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&vu(-1);const r=Po(e);let o;try{o=n(...s)}finally{Po(r),i._d&&vu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hi(n,e){if($t===null)return n;const t=ia($t),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(tt(r)&&(r={mounted:r,updated:r}),r.deep&&_i(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Yi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ei(),ii(l,t,8,[n.el,a,n,e]),bi())}}function Np(n,e){if(Qt){let t=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===t&&(t=Qt.provides=Object.create(i)),t[n]=e}}function vo(n,e,t=!1){const i=Nm();if(i||Vs){let s=Vs?Vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const Fp=Symbol.for("v-scx"),Op=()=>vo(Fp);function xr(n,e,t){return Td(n,e,t)}function Td(n,e,t=Et){const{immediate:i,deep:s,flush:r,once:o}=t,a=rn({},t),l=e&&i||!e&&r!=="post";let c;if(Pr){if(r==="sync"){const h=Op();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Qn,h.resume=Qn,h.pause=Qn,h}}const u=Qt;a.call=(h,_,M)=>ii(h,u,_,M);let d=!1;r==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():hc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Dp(n,e,a);return Pr&&(c?c.push(f):l&&f()),f}function Bp(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Ad(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const o=kr(this),a=Td(s,r.bind(i),t);return o(),a}function Ad(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const kp=Symbol("_vte"),zp=n=>n.__isTeleport,Hp=Symbol("_leaveCb");function pc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,pc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function wd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Do=new WeakMap;function Mr(n,e,t,i,s=!1){if(qe(n)){n.forEach((M,g)=>Mr(M,e&&(qe(e)?e[g]:e),t,i,s));return}if(Hs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ia(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,d=a.setupState,f=pt(d),h=d===Et?jf:M=>ou(u,M)?!1:mt(f,M),_=(M,g)=>!(g&&ou(u,g));if(c!=null&&c!==l){if(au(e),Rt(c))u[c]=null,h(c)&&(d[c]=null);else if(nn(c)){const M=e;_(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(tt(l))Br(l,a,12,[o,u]);else{const M=Rt(l),g=nn(l);if(M||g){const p=()=>{if(n.f){const y=M?h(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)qe(y)&&sc(y,r);else if(qe(y))y.includes(r)||y.push(r);else if(M)u[l]=[r],h(l)&&(d[l]=u[l]);else{const b=[r];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else M?(u[l]=o,h(l)&&(d[l]=o)):g&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{p(),Do.delete(n)};y.id=-1,Do.set(n,y),hn(y,t)}else au(n),p()}}}function au(n){const e=Do.get(n);e&&(e.flags|=8,Do.delete(n))}Ko().requestIdleCallback;Ko().cancelIdleCallback;const Hs=n=>!!n.type.__asyncLoader,Cd=n=>n.type.__isKeepAlive;function Vp(n,e){Rd(n,"a",e)}function Gp(n,e){Rd(n,"da",e)}function Rd(n,e,t=Qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Qo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Cd(s.parent.vnode)&&Wp(i,e,t,s),s=s.parent}}function Wp(n,e,t,i){const s=Qo(e,n,i,!0);mc(()=>{sc(i[e],s)},t)}function Qo(n,e,t=Qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ei();const a=kr(t),l=ii(e,t,n,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const Ri=n=>(e,t=Qt)=>{(!Pr||n==="sp")&&Qo(n,(...i)=>e(...i),t)},Xp=Ri("bm"),ea=Ri("m"),$p=Ri("bu"),qp=Ri("u"),Yp=Ri("bum"),mc=Ri("um"),jp=Ri("sp"),Kp=Ri("rtg"),Zp=Ri("rtc");function Jp(n,e=Qt){Qo("ec",n,e)}const Qp="components",Pd=Symbol.for("v-ndc");function lu(n){return Rt(n)?em(Qp,n,!1)||n:n||Pd}function em(n,e,t=!0,i=!1){const s=$t||Qt;if(s){const r=s.type;{const a=zm(r,!1);if(a&&(a===e||a===fn(e)||a===Yo(fn(e))))return r}const o=cu(s[n]||r[n],e)||cu(s.appContext[n],e);return!o&&i?r:o}}function cu(n,e){return n&&(n[e]||n[fn(e)]||n[Yo(fn(e))])}function Ct(n,e,t,i){let s;const r=t,o=qe(n);if(o||Rt(n)){const a=o&&fs(n);let l=!1,c=!1;a&&(l=!Cn(n),c=Ti(n),n=Zo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?js(On(n[u])):On(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function tm(n,e,t={},i,s){if($t.ce||$t.parent&&Hs($t.parent)&&$t.parent.ce){const c=Object.keys(t).length>0;return me(),Gs(ct,null,[Yt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),me();const o=r&&Dd(r(t)),a=t.key||o&&o.key,l=Gs(ct,{key:(a&&!Fn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Dd(n){return n.some(e=>vc(e)?!(e.type===Ai||e.type===ct&&!Dd(e.children)):!0)?n:null}const sl=n=>n?Zd(n)?ia(n):sl(n.parent):null,Sr=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sl(n.parent),$root:n=>sl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Id(n),$forceUpdate:n=>n.f||(n.f=()=>{hc(n.update)}),$nextTick:n=>n.n||(n.n=xd.bind(n.proxy)),$watch:n=>Bp.bind(n)}),pa=(n,e)=>n!==Et&&!n.__isScriptSetup&&mt(n,e),nm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(pa(i,e))return o[e]=1,i[e];if(s!==Et&&mt(s,e))return o[e]=2,s[e];if(mt(r,e))return o[e]=3,r[e];if(t!==Et&&mt(t,e))return o[e]=4,t[e];rl&&(o[e]=0)}}const c=Sr[e];let u,d;if(c)return e==="$attrs"&&Jt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Et&&mt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,mt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return pa(s,e)?(s[e]=t,!0):i!==Et&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Et&&a[0]!=="$"&&mt(n,a)||pa(e,a)||mt(r,a)||mt(i,a)||mt(Sr,a)||mt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rl=!0;function im(n){const e=Id(n),t=n.proxy,i=n.ctx;rl=!1,e.beforeCreate&&fu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:M,deactivated:g,beforeDestroy:p,beforeUnmount:y,destroyed:b,unmounted:E,render:U,renderTracked:A,renderTriggered:N,errorCaptured:x,serverPrefetch:R,expose:H,inheritAttrs:F,components:W,directives:ie,filters:oe}=e;if(c&&sm(c,i,null),o)for(const V in o){const G=o[V];tt(G)&&(i[V]=G.bind(t))}if(s){const V=s.call(t,t);Mt(V)&&(n.data=wr(V))}if(rl=!0,r)for(const V in r){const G=r[V],B=tt(G)?G.bind(t,t):tt(G.get)?G.get.bind(t,t):Qn,Me=!tt(G)&&tt(G.set)?G.set.bind(t):Qn,Y=Ft({get:B,set:Me});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Y.value,set:Se=>Y.value=Se})}if(a)for(const V in a)Ld(a[V],i,t,V);if(l){const V=tt(l)?l.call(t):l;Reflect.ownKeys(V).forEach(G=>{Np(G,V[G])})}u&&fu(u,n,"c");function j(V,G){qe(G)?G.forEach(B=>V(B.bind(t))):G&&V(G.bind(t))}if(j(Xp,d),j(ea,f),j($p,h),j(qp,_),j(Vp,M),j(Gp,g),j(Jp,x),j(Zp,A),j(Kp,N),j(Yp,y),j(mc,E),j(jp,R),qe(H))if(H.length){const V=n.exposed||(n.exposed={});H.forEach(G=>{Object.defineProperty(V,G,{get:()=>t[G],set:B=>t[G]=B,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Qn&&(n.render=U),F!=null&&(n.inheritAttrs=F),W&&(n.components=W),ie&&(n.directives=ie),R&&wd(n)}function sm(n,e,t=Qn){qe(n)&&(n=ol(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=vo(s.from||i,s.default,!0):r=vo(s.from||i):r=vo(s),nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function fu(n,e,t){ii(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ld(n,e,t,i){let s=i.includes(".")?Ad(t,i):()=>t[i];if(Rt(n)){const r=e[n];tt(r)&&xr(s,r)}else if(tt(n))xr(s,n.bind(t));else if(Mt(n))if(qe(n))n.forEach(r=>Ld(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&xr(s,r,n)}}function Id(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Lo(l,c,o,!0)),Lo(l,e,o)),Mt(e)&&r.set(e,l),l}function Lo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Lo(n,r,t,!0),s&&s.forEach(o=>Lo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=rm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const rm={data:du,props:hu,emits:hu,methods:dr,computed:dr,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:dr,directives:dr,watch:am,provide:du,inject:om};function du(n,e){return e?n?function(){return rn(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function om(n,e){return dr(ol(n),ol(e))}function ol(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function on(n,e){return n?[...new Set([].concat(n,e))]:e}function dr(n,e){return n?rn(Object.create(null),n,e):e}function hu(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:rn(Object.create(null),uu(n),uu(e??{})):e}function am(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=on(n[i],e[i]);return t}function Ud(){return{app:null,config:{isNativeTag:jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lm=0;function cm(n,e){return function(i,s=null){tt(i)||(i=rn({},i)),s!=null&&!Mt(s)&&(s=null);const r=Ud(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:lm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Vm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...d)):tt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Yt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ia(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ii(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Vs;Vs=c;try{return u()}finally{Vs=d}}};return c}}let Vs=null;const um=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fn(e)}Modifiers`]||n[`${ms(e)}Modifiers`];function fm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Et;let s=t;const r=e.startsWith("update:"),o=r&&um(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(jo)));let a,l=i[a=ca(e)]||i[a=ca(fn(e))];!l&&r&&(l=i[a=ca(ms(e))]),l&&ii(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ii(c,n,6,s)}}const dm=new WeakMap;function Nd(n,e,t=!1){const i=t?dm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!tt(n)){const l=c=>{const u=Nd(c,e,!0);u&&(a=!0,rn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Mt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>o[l]=null):rn(o,r),Mt(n)&&i.set(n,o),o)}function ta(n,e){return!n||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,ms(e))||mt(n,e))}function pu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:M}=n,g=Po(n);let p,y;try{if(t.shapeFlag&4){const E=s||i,U=E;p=Yn(c.call(U,E,u,d,h,f,_)),y=a}else{const E=e;p=Yn(E.length>1?E(d,{attrs:a,slots:o,emit:l}):E(d,null)),y=e.props?a:hm(a)}}catch(E){yr.length=0,Jo(E,n,1),p=Yt(Ai)}let b=p;if(y&&M!==!1){const E=Object.keys(y),{shapeFlag:U}=b;E.length&&U&7&&(r&&E.some(Xo)&&(y=pm(y,r)),b=Ks(b,y,!1,!0))}return t.dirs&&(b=Ks(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&pc(b,t.transition),p=b,Po(g),p}const hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Wo(t))&&((e||(e={}))[t]=n[t]);return e},pm=(n,e)=>{const t={};for(const i in n)(!Xo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Fd(o,i,f)&&!ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?mu(i,o,c):!0:!!o;return!1}function mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Fd(e,n,r)&&!ta(t,r))return!0}return!1}function Fd(n,e,t){const i=n[t],s=e[t];return t==="style"&&Mt(i)&&Mt(s)?!Or(i,s):i!==s}function gm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Od={},Bd=()=>Object.create(Od),kd=n=>Object.getPrototypeOf(n)===Od;function _m(n,e,t,i=!1){const s={},r=Bd();n.propsDefaults=Object.create(null),zd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Ep(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function vm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=pt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ta(n.emitsOptions,f))continue;const h=e[f];if(l)if(mt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const _=fn(f);s[_]=al(l,a,_,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{zd(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!mt(e,d)&&((u=ms(d))===d||!mt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=al(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!mt(e,d))&&(delete r[d],c=!0)}c&&gi(n.attrs,"set","")}function zd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;s&&mt(s,u=fn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=pt(t),c=a||Et;for(let u=0;u<r.length;u++){const d=r[u];t[d]=al(s,l,d,c[d],n,!mt(c,d))}}return o}function al(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=kr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ms(t))&&(i=!0))}return i}const xm=new WeakMap;function Hd(n,e,t=!1){const i=t?xm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!tt(n)){const u=d=>{l=!0;const[f,h]=Hd(d,e,!0);rn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,Bs),Bs;if(qe(r))for(let u=0;u<r.length;u++){const d=fn(r[u]);gu(d)&&(o[d]=Et)}else if(r)for(const u in r){const d=fn(u);if(gu(d)){const f=r[u],h=o[d]=qe(f)||tt(f)?{type:f}:rn({},f),_=h.type;let M=!1,g=!0;if(qe(_))for(let p=0;p<_.length;++p){const y=_[p],b=tt(y)&&y.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(g=!1)}else M=tt(_)&&_.name==="Boolean";h[0]=M,h[1]=g,(M||mt(h,"default"))&&a.push(d)}}const c=[o,a];return Mt(n)&&i.set(n,c),c}function gu(n){return n[0]!=="$"&&!gr(n)}const gc=n=>n==="_"||n==="_ctx"||n==="$stable",_c=n=>qe(n)?n.map(Yn):[Yn(n)],Mm=(n,e,t)=>{if(e._n)return e;const i=bd((...s)=>_c(e(...s)),t);return i._c=!1,i},Vd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(gc(s))continue;const r=n[s];if(tt(r))e[s]=Mm(s,r,i);else if(r!=null){const o=_c(r);e[s]=()=>o}}},Gd=(n,e)=>{const t=_c(e);n.slots.default=()=>t},Wd=(n,e,t)=>{for(const i in e)(t||!gc(i))&&(n[i]=e[i])},Sm=(n,e,t)=>{const i=n.slots=Bd();if(n.vnode.shapeFlag&32){const s=e._;s?(Wd(i,e,t),t&&Qf(i,"_",s,!0)):Vd(e,i)}else e&&Gd(n,e)},ym=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Wd(s,e,t):(r=!e.$stable,Vd(e,s)),o=e}else e&&(Gd(n,e),o={default:1});if(r)for(const a in s)!gc(a)&&o[a]==null&&delete s[a]},hn=wm;function Em(n){return bm(n)}function bm(n,e){const t=Ko();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Qn,insertStaticContent:_}=n,M=(C,I,Z,le=null,te=null,ce=null,ve=void 0,ye=null,T=!!I.dynamicChildren)=>{if(C===I)return;C&&!rr(C,I)&&(le=Pe(C),Se(C,te,ce,!0),C=null),I.patchFlag===-2&&(T=!1,I.dynamicChildren=null);const{type:ue,ref:O,shapeFlag:D}=I;switch(ue){case na:g(C,I,Z,le);break;case Ai:p(C,I,Z,le);break;case xo:C==null&&y(I,Z,le,ve);break;case ct:W(C,I,Z,le,te,ce,ve,ye,T);break;default:D&1?U(C,I,Z,le,te,ce,ve,ye,T):D&6?ie(C,I,Z,le,te,ce,ve,ye,T):(D&64||D&128)&&ue.process(C,I,Z,le,te,ce,ve,ye,T,We)}O!=null&&te?Mr(O,C&&C.ref,ce,I||C,!I):O==null&&C&&C.ref!=null&&Mr(C.ref,null,ce,C,!0)},g=(C,I,Z,le)=>{if(C==null)i(I.el=a(I.children),Z,le);else{const te=I.el=C.el;I.children!==C.children&&c(te,I.children)}},p=(C,I,Z,le)=>{C==null?i(I.el=l(I.children||""),Z,le):I.el=C.el},y=(C,I,Z,le)=>{[C.el,C.anchor]=_(C.children,I,Z,le,C.el,C.anchor)},b=({el:C,anchor:I},Z,le)=>{let te;for(;C&&C!==I;)te=f(C),i(C,Z,le),C=te;i(I,Z,le)},E=({el:C,anchor:I})=>{let Z;for(;C&&C!==I;)Z=f(C),s(C),C=Z;s(I)},U=(C,I,Z,le,te,ce,ve,ye,T)=>{if(I.type==="svg"?ve="svg":I.type==="math"&&(ve="mathml"),C==null)A(I,Z,le,te,ce,ve,ye,T);else{const ue=C.el&&C.el._isVueCE?C.el:null;try{ue&&ue._beginPatch(),R(C,I,te,ce,ve,ye,T)}finally{ue&&ue._endPatch()}}},A=(C,I,Z,le,te,ce,ve,ye)=>{let T,ue;const{props:O,shapeFlag:D,transition:L,dirs:ne}=C;if(T=C.el=o(C.type,ce,O&&O.is,O),D&8?u(T,C.children):D&16&&x(C.children,T,null,le,te,ma(C,ce),ve,ye),ne&&Yi(C,null,le,"created"),N(T,C,C.scopeId,ve,le),O){for(const m in O)m!=="value"&&!gr(m)&&r(T,m,null,O[m],ce,le);"value"in O&&r(T,"value",null,O.value,ce),(ue=O.onVnodeBeforeMount)&&Hn(ue,le,C)}ne&&Yi(C,null,le,"beforeMount");const v=Tm(te,L);v&&L.beforeEnter(T),i(T,I,Z),((ue=O&&O.onVnodeMounted)||v||ne)&&hn(()=>{try{ue&&Hn(ue,le,C),v&&L.enter(T),ne&&Yi(C,null,le,"mounted")}finally{}},te)},N=(C,I,Z,le,te)=>{if(Z&&h(C,Z),le)for(let ce=0;ce<le.length;ce++)h(C,le[ce]);if(te){let ce=te.subTree;if(I===ce||Yd(ce.type)&&(ce.ssContent===I||ce.ssFallback===I)){const ve=te.vnode;N(C,ve,ve.scopeId,ve.slotScopeIds,te.parent)}}},x=(C,I,Z,le,te,ce,ve,ye,T=0)=>{for(let ue=T;ue<C.length;ue++){const O=C[ue]=ye?mi(C[ue]):Yn(C[ue]);M(null,O,I,Z,le,te,ce,ve,ye)}},R=(C,I,Z,le,te,ce,ve)=>{const ye=I.el=C.el;let{patchFlag:T,dynamicChildren:ue,dirs:O}=I;T|=C.patchFlag&16;const D=C.props||Et,L=I.props||Et;let ne;if(Z&&ji(Z,!1),(ne=L.onVnodeBeforeUpdate)&&Hn(ne,Z,I,C),O&&Yi(I,C,Z,"beforeUpdate"),Z&&ji(Z,!0),(D.innerHTML&&L.innerHTML==null||D.textContent&&L.textContent==null)&&u(ye,""),ue?H(C.dynamicChildren,ue,ye,Z,le,ma(I,te),ce):ve||G(C,I,ye,null,Z,le,ma(I,te),ce,!1),T>0){if(T&16)F(ye,D,L,Z,te);else if(T&2&&D.class!==L.class&&r(ye,"class",null,L.class,te),T&4&&r(ye,"style",D.style,L.style,te),T&8){const v=I.dynamicProps;for(let m=0;m<v.length;m++){const P=v[m],q=D[P],se=L[P];(se!==q||P==="value")&&r(ye,P,q,se,te,Z)}}T&1&&C.children!==I.children&&u(ye,I.children)}else!ve&&ue==null&&F(ye,D,L,Z,te);((ne=L.onVnodeUpdated)||O)&&hn(()=>{ne&&Hn(ne,Z,I,C),O&&Yi(I,C,Z,"updated")},le)},H=(C,I,Z,le,te,ce,ve)=>{for(let ye=0;ye<I.length;ye++){const T=C[ye],ue=I[ye],O=T.el&&(T.type===ct||!rr(T,ue)||T.shapeFlag&198)?d(T.el):Z;M(T,ue,O,null,le,te,ce,ve,!0)}},F=(C,I,Z,le,te)=>{if(I!==Z){if(I!==Et)for(const ce in I)!gr(ce)&&!(ce in Z)&&r(C,ce,I[ce],null,te,le);for(const ce in Z){if(gr(ce))continue;const ve=Z[ce],ye=I[ce];ve!==ye&&ce!=="value"&&r(C,ce,ye,ve,te,le)}"value"in Z&&r(C,"value",I.value,Z.value,te)}},W=(C,I,Z,le,te,ce,ve,ye,T)=>{const ue=I.el=C?C.el:a(""),O=I.anchor=C?C.anchor:a("");let{patchFlag:D,dynamicChildren:L,slotScopeIds:ne}=I;ne&&(ye=ye?ye.concat(ne):ne),C==null?(i(ue,Z,le),i(O,Z,le),x(I.children||[],Z,O,te,ce,ve,ye,T)):D>0&&D&64&&L&&C.dynamicChildren&&C.dynamicChildren.length===L.length?(H(C.dynamicChildren,L,Z,te,ce,ve,ye),(I.key!=null||te&&I===te.subTree)&&Xd(C,I,!0)):G(C,I,Z,O,te,ce,ve,ye,T)},ie=(C,I,Z,le,te,ce,ve,ye,T)=>{I.slotScopeIds=ye,C==null?I.shapeFlag&512?te.ctx.activate(I,Z,le,ve,T):oe(I,Z,le,te,ce,ve,T):z(C,I,T)},oe=(C,I,Z,le,te,ce,ve)=>{const ye=C.component=Um(C,le,te);if(Cd(C)&&(ye.ctx.renderer=We),Fm(ye,!1,ve),ye.asyncDep){if(te&&te.registerDep(ye,j,ve),!C.el){const T=ye.subTree=Yt(Ai);p(null,T,I,Z),C.placeholder=T.el}}else j(ye,C,I,Z,te,ce,ve)},z=(C,I,Z)=>{const le=I.component=C.component;if(mm(C,I,Z))if(le.asyncDep&&!le.asyncResolved){V(le,I,Z);return}else le.next=I,le.update();else I.el=C.el,le.vnode=I},j=(C,I,Z,le,te,ce,ve)=>{const ye=()=>{if(C.isMounted){let{next:D,bu:L,u:ne,parent:v,vnode:m}=C;{const pe=$d(C);if(pe){D&&(D.el=m.el,V(C,D,ve)),pe.asyncDep.then(()=>{hn(()=>{C.isUnmounted||ue()},te)});return}}let P=D,q;ji(C,!1),D?(D.el=m.el,V(C,D,ve)):D=m,L&&_o(L),(q=D.props&&D.props.onVnodeBeforeUpdate)&&Hn(q,v,D,m),ji(C,!0);const se=pu(C),he=C.subTree;C.subTree=se,M(he,se,d(he.el),Pe(he),C,te,ce),D.el=se.el,P===null&&gm(C,se.el),ne&&hn(ne,te),(q=D.props&&D.props.onVnodeUpdated)&&hn(()=>Hn(q,v,D,m),te)}else{let D;const{el:L,props:ne}=I,{bm:v,m,parent:P,root:q,type:se}=C,he=Hs(I);ji(C,!1),v&&_o(v),!he&&(D=ne&&ne.onVnodeBeforeMount)&&Hn(D,P,I),ji(C,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(se,C.parent?C.parent.type:void 0);const pe=C.subTree=pu(C);M(null,pe,Z,le,C,te,ce),I.el=pe.el}if(m&&hn(m,te),!he&&(D=ne&&ne.onVnodeMounted)){const pe=I;hn(()=>Hn(D,P,pe),te)}(I.shapeFlag&256||P&&Hs(P.vnode)&&P.vnode.shapeFlag&256)&&C.a&&hn(C.a,te),C.isMounted=!0,I=Z=le=null}};C.scope.on();const T=C.effect=new id(ye);C.scope.off();const ue=C.update=T.run.bind(T),O=C.job=T.runIfDirty.bind(T);O.i=C,O.id=C.uid,T.scheduler=()=>hc(O),ji(C,!0),ue()},V=(C,I,Z)=>{I.component=C;const le=C.vnode.props;C.vnode=I,C.next=null,vm(C,I.props,le,Z),ym(C,I.children,Z),Ei(),ru(C),bi()},G=(C,I,Z,le,te,ce,ve,ye,T=!1)=>{const ue=C&&C.children,O=C?C.shapeFlag:0,D=I.children,{patchFlag:L,shapeFlag:ne}=I;if(L>0){if(L&128){Me(ue,D,Z,le,te,ce,ve,ye,T);return}else if(L&256){B(ue,D,Z,le,te,ce,ve,ye,T);return}}ne&8?(O&16&&de(ue,te,ce),D!==ue&&u(Z,D)):O&16?ne&16?Me(ue,D,Z,le,te,ce,ve,ye,T):de(ue,te,ce,!0):(O&8&&u(Z,""),ne&16&&x(D,Z,le,te,ce,ve,ye,T))},B=(C,I,Z,le,te,ce,ve,ye,T)=>{C=C||Bs,I=I||Bs;const ue=C.length,O=I.length,D=Math.min(ue,O);let L;for(L=0;L<D;L++){const ne=I[L]=T?mi(I[L]):Yn(I[L]);M(C[L],ne,Z,null,te,ce,ve,ye,T)}ue>O?de(C,te,ce,!0,!1,D):x(I,Z,le,te,ce,ve,ye,T,D)},Me=(C,I,Z,le,te,ce,ve,ye,T)=>{let ue=0;const O=I.length;let D=C.length-1,L=O-1;for(;ue<=D&&ue<=L;){const ne=C[ue],v=I[ue]=T?mi(I[ue]):Yn(I[ue]);if(rr(ne,v))M(ne,v,Z,null,te,ce,ve,ye,T);else break;ue++}for(;ue<=D&&ue<=L;){const ne=C[D],v=I[L]=T?mi(I[L]):Yn(I[L]);if(rr(ne,v))M(ne,v,Z,null,te,ce,ve,ye,T);else break;D--,L--}if(ue>D){if(ue<=L){const ne=L+1,v=ne<O?I[ne].el:le;for(;ue<=L;)M(null,I[ue]=T?mi(I[ue]):Yn(I[ue]),Z,v,te,ce,ve,ye,T),ue++}}else if(ue>L)for(;ue<=D;)Se(C[ue],te,ce,!0),ue++;else{const ne=ue,v=ue,m=new Map;for(ue=v;ue<=L;ue++){const ge=I[ue]=T?mi(I[ue]):Yn(I[ue]);ge.key!=null&&m.set(ge.key,ue)}let P,q=0;const se=L-v+1;let he=!1,pe=0;const K=new Array(se);for(ue=0;ue<se;ue++)K[ue]=0;for(ue=ne;ue<=D;ue++){const ge=C[ue];if(q>=se){Se(ge,te,ce,!0);continue}let Re;if(ge.key!=null)Re=m.get(ge.key);else for(P=v;P<=L;P++)if(K[P-v]===0&&rr(ge,I[P])){Re=P;break}Re===void 0?Se(ge,te,ce,!0):(K[Re-v]=ue+1,Re>=pe?pe=Re:he=!0,M(ge,I[Re],Z,null,te,ce,ve,ye,T),q++)}const re=he?Am(K):Bs;for(P=re.length-1,ue=se-1;ue>=0;ue--){const ge=v+ue,Re=I[ge],Te=I[ge+1],Ee=ge+1<O?Te.el||qd(Te):le;K[ue]===0?M(null,Re,Z,Ee,te,ce,ve,ye,T):he&&(P<0||ue!==re[P]?Y(Re,Z,Ee,2):P--)}}},Y=(C,I,Z,le,te=null)=>{const{el:ce,type:ve,transition:ye,children:T,shapeFlag:ue}=C;if(ue&6){Y(C.component.subTree,I,Z,le);return}if(ue&128){C.suspense.move(I,Z,le);return}if(ue&64){ve.move(C,I,Z,We);return}if(ve===ct){i(ce,I,Z);for(let D=0;D<T.length;D++)Y(T[D],I,Z,le);i(C.anchor,I,Z);return}if(ve===xo){b(C,I,Z);return}if(le!==2&&ue&1&&ye)if(le===0)ye.beforeEnter(ce),i(ce,I,Z),hn(()=>ye.enter(ce),te);else{const{leave:D,delayLeave:L,afterLeave:ne}=ye,v=()=>{C.ctx.isUnmounted?s(ce):i(ce,I,Z)},m=()=>{ce._isLeaving&&ce[Hp](!0),D(ce,()=>{v(),ne&&ne()})};L?L(ce,v,m):m()}else i(ce,I,Z)},Se=(C,I,Z,le=!1,te=!1)=>{const{type:ce,props:ve,ref:ye,children:T,dynamicChildren:ue,shapeFlag:O,patchFlag:D,dirs:L,cacheIndex:ne,memo:v}=C;if(D===-2&&(te=!1),ye!=null&&(Ei(),Mr(ye,null,Z,C,!0),bi()),ne!=null&&(I.renderCache[ne]=void 0),O&256){I.ctx.deactivate(C);return}const m=O&1&&L,P=!Hs(C);let q;if(P&&(q=ve&&ve.onVnodeBeforeUnmount)&&Hn(q,I,C),O&6)Ye(C.component,Z,le);else{if(O&128){C.suspense.unmount(Z,le);return}m&&Yi(C,null,I,"beforeUnmount"),O&64?C.type.remove(C,I,Z,We,le):ue&&!ue.hasOnce&&(ce!==ct||D>0&&D&64)?de(ue,I,Z,!1,!0):(ce===ct&&D&384||!te&&O&16)&&de(T,I,Z),le&&Ve(C)}const se=v!=null&&ne==null;(P&&(q=ve&&ve.onVnodeUnmounted)||m||se)&&hn(()=>{q&&Hn(q,I,C),m&&Yi(C,null,I,"unmounted"),se&&(C.el=null)},Z)},Ve=C=>{const{type:I,el:Z,anchor:le,transition:te}=C;if(I===ct){ot(Z,le);return}if(I===xo){E(C);return}const ce=()=>{s(Z),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(C.shapeFlag&1&&te&&!te.persisted){const{leave:ve,delayLeave:ye}=te,T=()=>ve(Z,ce);ye?ye(C.el,ce,T):T()}else ce()},ot=(C,I)=>{let Z;for(;C!==I;)Z=f(C),s(C),C=Z;s(I)},Ye=(C,I,Z)=>{const{bum:le,scope:te,job:ce,subTree:ve,um:ye,m:T,a:ue}=C;_u(T),_u(ue),le&&_o(le),te.stop(),ce&&(ce.flags|=8,Se(ve,C,I,Z)),ye&&hn(ye,I),hn(()=>{C.isUnmounted=!0},I)},de=(C,I,Z,le=!1,te=!1,ce=0)=>{for(let ve=ce;ve<C.length;ve++)Se(C[ve],I,Z,le,te)},Pe=C=>{if(C.shapeFlag&6)return Pe(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const I=f(C.anchor||C.el),Z=I&&I[kp];return Z?f(Z):I};let be=!1;const He=(C,I,Z)=>{let le;C==null?I._vnode&&(Se(I._vnode,null,null,!0),le=I._vnode.component):M(I._vnode||null,C,I,null,null,null,Z),I._vnode=C,be||(be=!0,ru(le),Sd(),be=!1)},We={p:M,um:Se,m:Y,r:Ve,mt:oe,mc:x,pc:G,pbc:H,n:Pe,o:n};return{render:He,hydrate:void 0,createApp:cm(He)}}function ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Tm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xd(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=mi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Xd(o,a)),a.type===na&&(a.patchFlag===-1&&(a=s[r]=mi(a)),a.el=o.el),a.type===Ai&&!a.el&&(a.el=o.el)}}function Am(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function $d(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$d(e)}function _u(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function qd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?qd(e.subTree):null}const Yd=n=>n.__isSuspense;function wm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Up(n)}const ct=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),Ai=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),yr=[];let En=null;function me(n=!1){yr.push(En=n?null:[])}function Cm(){yr.pop(),En=yr[yr.length-1]||null}let Rr=1;function vu(n,e=!1){Rr+=n,n<0&&En&&e&&(En.hasOnce=!0)}function jd(n){return n.dynamicChildren=Rr>0?En||Bs:null,Cm(),Rr>0&&En&&En.push(n),n}function xe(n,e,t,i,s,r){return jd(w(n,e,t,i,s,r,!0))}function Gs(n,e,t,i,s){return jd(Yt(n,e,t,i,s,!0))}function vc(n){return n?n.__v_isVNode===!0:!1}function rr(n,e){return n.type===e.type&&n.key===e.key}const Kd=({key:n})=>n??null,Mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||nn(n)||tt(n)?{i:$t,r:n,k:e,f:!!t}:n:null);function w(n,e=null,t=null,i=0,s=null,r=n===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kd(e),ref:e&&Mo(e),scopeId:Ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return a?(xc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Rr>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Yt=Rm;function Rm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Pd)&&(n=Ai),vc(n)){const a=Ks(n,e,!0);return t&&xc(a,t),Rr>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(n)]=a:En.push(a)),a.patchFlag=-2,a}if(Hm(n)&&(n=n.__vccOpts),e){e=Pm(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=gn(a)),Mt(l)&&(dc(l)&&!qe(l)&&(l=rn({},l)),e.style=tr(l))}const o=Rt(n)?1:Yd(n)?128:zp(n)?64:Mt(n)?4:tt(n)?2:0;return w(n,e,t,i,s,o,r,!0)}function Pm(n){return n?dc(n)||kd(n)?rn({},n):n:null}function Ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Dm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kd(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Mo(e)):[r,Mo(e)]:Mo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ct?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ks(n.ssContent),ssFallback:n.ssFallback&&Ks(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&pc(u,l.clone(u)),u}function pn(n=" ",e=0){return Yt(na,null,n,e)}function Sn(n,e){const t=Yt(xo,null,n);return t.staticCount=e,t}function Dt(n="",e=!1){return e?(me(),Gs(Ai,null,n)):Yt(Ai,null,n)}function Yn(n){return n==null||typeof n=="boolean"?Yt(Ai):qe(n)?Yt(ct,null,n.slice()):vc(n)?mi(n):Yt(na,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ks(n)}function xc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),xc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!kd(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:$t},t=32):(e=String(e),i&64?(t=16,e=[pn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=gn([e.class,i.class]));else if(s==="style")e.style=tr([e.style,i.style]);else if(Wo(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Xo(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Hn(n,e,t,i=null){ii(n,e,7,[t,i])}const Lm=Ud();let Im=0;function Um(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Lm,r={uid:Im++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(i,s),emitsOptions:Nd(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fm.bind(null,r),n.ce&&n.ce(r),r}let Qt=null;const Nm=()=>Qt||$t;let Io,ll;{const n=Ko(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Io=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),ll=e("__VUE_SSR_SETTERS__",t=>Pr=t)}const kr=n=>{const e=Qt;return Io(n),n.scope.on(),()=>{n.scope.off(),Io(e)}},xu=()=>{Qt&&Qt.scope.off(),Io(null)};function Zd(n){return n.vnode.shapeFlag&4}let Pr=!1;function Fm(n,e=!1,t=!1){e&&ll(e);const{props:i,children:s}=n.vnode,r=Zd(n);_m(n,i,r,e),Sm(n,s,t||e);const o=r?Om(n,e):void 0;return e&&ll(!1),o}function Om(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,nm);const{setup:i}=t;if(i){Ei();const s=n.setupContext=i.length>1?km(n):null,r=kr(n),o=Br(i,n,0,[n.props,s]),a=Kf(o);if(bi(),r(),(a||n.sp)&&!Hs(n)&&wd(n),a){if(o.then(xu,xu),e)return o.then(l=>{Mu(n,l)}).catch(l=>{Jo(l,n,0)});n.asyncDep=o}else Mu(n,o)}else Jd(n)}function Mu(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=_d(e)),Jd(n)}function Jd(n,e,t){const i=n.type;n.render||(n.render=i.render||Qn);{const s=kr(n);Ei();try{im(n)}finally{bi(),s()}}}const Bm={get(n,e){return Jt(n,"get",""),n[e]}};function km(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Bm),slots:n.slots,emit:n.emit,expose:e}}function ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_d(bp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Sr)return Sr[t](n)},has(e,t){return t in e||t in Sr}})):n.proxy}function zm(n,e=!0){return tt(n)?n.displayName||n.name:n.name||e&&n.__name}function Hm(n){return tt(n)&&"__vccOpts"in n}const Ft=(n,e)=>Rp(n,e,Pr),Vm="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cl;const Su=typeof window<"u"&&window.trustedTypes;if(Su)try{cl=Su.createPolicy("vue",{createHTML:n=>n})}catch{}const Qd=cl?n=>cl.createHTML(n):n=>n,Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,yu=pi&&pi.createElement("template"),Xm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?pi.createElementNS(Gm,n):e==="mathml"?pi.createElementNS(Wm,n):t?pi.createElement(n,{is:t}):pi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{yu.innerHTML=Qd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=yu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},$m=Symbol("_vtc");function qm(n,e,t){const i=n[$m];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eu=Symbol("_vod"),Ym=Symbol("_vsh"),jm=Symbol(""),Km=/(?:^|;)\s*display\s*:/;function Zm(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&hr(i,a,"")}else for(const o in e)t[o]==null&&hr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?Qm(n,o,!Rt(e)&&e?e[o]:void 0,a)||hr(i,o,a):hr(i,o,"")}}else if(s){if(e!==t){const o=i[jm];o&&(t+=";"+o),i.cssText=t,r=Km.test(t)}}else e&&n.removeAttribute("style");Eu in n&&(n[Eu]=r?i.display:"",n[Ym]&&(i.display="none"))}const bu=/\s*!important$/;function hr(n,e,t){if(qe(t))t.forEach(i=>hr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Jm(n,e);bu.test(t)?n.setProperty(ms(i),t.replace(bu,""),"important"):n[i]=t}}const Tu=["Webkit","Moz","ms"],ga={};function Jm(n,e){const t=ga[e];if(t)return t;let i=fn(e);if(i!=="filter"&&i in n)return ga[e]=i;i=Yo(i);for(let s=0;s<Tu.length;s++){const r=Tu[s]+i;if(r in n)return ga[e]=r}return e}function Qm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Rt(i)&&t===i}const Au="http://www.w3.org/1999/xlink";function wu(n,e,t,i,s,r=ep(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Au,e.slice(6,e.length)):n.setAttributeNS(Au,e,t):t==null||r&&!ed(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Fn(t)?String(t):t)}function Cu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=ed(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function is(n,e,t,i){n.addEventListener(e,t,i)}function eg(n,e,t,i){n.removeEventListener(e,t,i)}const Ru=Symbol("_vei");function tg(n,e,t,i,s=null){const r=n[Ru]||(n[Ru]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ng(e);if(i){const c=r[e]=rg(i,s);is(n,a,c,l)}else o&&(eg(n,a,o,l),r[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function ng(n){let e;if(Pu.test(n)){e={};let i;for(;i=n.match(Pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ms(n.slice(2)),e]}let _a=0;const ig=Promise.resolve(),sg=()=>_a||(ig.then(()=>_a=0),_a=Date.now());function rg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ii(og(i,t.value),e,5,[i])};return t.value=n,t.attached=sg(),t}function og(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ag=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?qm(n,i,o):e==="style"?Zm(n,t,i):Wo(e)?Xo(e)||tg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lg(n,e,i,o))?(Cu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wu(n,e,i,o,r,e!=="value")):n._isVueCE&&(cg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?Cu(n,fn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),wu(n,e,i,o))};function lg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Du(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Du(e)&&Rt(t)?!1:e in n}function cg(n,e){const t=n._def.props;if(!t)return!1;const i=fn(e);return Array.isArray(t)?t.some(s=>fn(s)===i):Object.keys(t).some(s=>fn(s)===i)}const Uo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>_o(e,t):e};function ug(n){n.target.composing=!0}function Lu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ws=Symbol("_assign");function Iu(n,e,t){return e&&(n=n.trim()),t&&(n=jo(n)),n}const ns={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ws]=Uo(s);const r=i||s.props&&s.props.type==="number";is(n,e?"change":"input",o=>{o.target.composing||n[Ws](Iu(n.value,t,r))}),(t||r)&&is(n,"change",()=>{n.value=Iu(n.value,t,r)}),e||(is(n,"compositionstart",ug),is(n,"compositionend",Lu),is(n,"change",Lu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ws]=Uo(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?jo(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Uu={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=$o(e);is(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?jo(No(o)):No(o));n[Ws](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,xd(()=>{n._assigning=!1})}),n[Ws]=Uo(i)},mounted(n,{value:e}){Nu(n,e)},beforeUpdate(n,e,t){n[Ws]=Uo(t)},updated(n,{value:e}){n._assigning||Nu(n,e)}};function Nu(n,e){const t=n.multiple,i=qe(e);if(!(t&&!i&&!$o(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=No(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=np(e,a)>-1}else o.selected=e.has(a);else if(Or(No(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function No(n){return"_value"in n?n._value:n.value}const fg=["ctrl","shift","alt","meta"],dg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>fg.some(t=>n[`${t}Key`]&&!e.includes(t))},as=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=dg[e[o]];if(a&&a(s,e))return}return n(s,...r)})},hg=rn({patchProp:ag},Xm);let Fu;function pg(){return Fu||(Fu=Em(hg))}const mg=(...n)=>{const e=pg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_g(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,gg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _g(n){return Rt(n)?document.querySelector(n):n}const Ou=[{id:"running",name:"跑步",icon:"🏃",coinsPerMin:1,expPerMin:10,energyPerMin:5},{id:"gym",name:"健身房",icon:"🏋️",coinsPerMin:1.5,expPerMin:15,energyPerMin:8},{id:"ball",name:"球类运动",icon:"⚽",coinsPerMin:1.2,expPerMin:12,energyPerMin:6},{id:"cycling",name:"骑行",icon:"🚴",coinsPerMin:1,expPerMin:10,energyPerMin:4},{id:"other",name:"其他",icon:"💪",coinsPerMin:.8,expPerMin:8,energyPerMin:4}],en={carrot:{name:"胡萝卜",icon:"🥕",growTime:2,price:10,sellPrice:15,unlock:null},tomato:{name:"番茄",icon:"🍅",growTime:4,price:25,sellPrice:38,unlock:null},corn:{name:"玉米",icon:"🌽",growTime:6,price:40,sellPrice:60,unlock:{level:3}},strawberry:{name:"草莓",icon:"🍓",growTime:8,price:60,sellPrice:90,unlock:{streak:7}},pumpkin:{name:"南瓜",icon:"🎃",growTime:12,price:100,sellPrice:150,unlock:{level:5}},grape:{name:"葡萄",icon:"🍇",growTime:18,price:150,sellPrice:225,unlock:{streak:14}},watermelon:{name:"西瓜",icon:"🍉",growTime:24,price:200,sellPrice:300,unlock:{level:7}},apple:{name:"苹果",icon:"🍎",growTime:48,price:400,sellPrice:600,unlock:{level:10}}},Fo={greenhouse:{name:"温室",icon:"🏠",price:500,effect:"作物生长加速2倍",unlock:{level:2}},warehouse:{name:"仓库",icon:"🏚️",price:1e3,effect:"存储上限+50",unlock:{level:3}},petHouse:{name:"宠物屋",icon:"🐕",price:2e3,effect:"饲养宠物",unlock:{streak:14}},mill:{name:"磨坊",icon:"⚙️",price:3e3,effect:"加工溢价50%",unlock:{level:5}},restaurant:{name:"餐厅",icon:"🍽️",price:5e3,effect:"烹饪增益",unlock:{streak:30}},gym:{name:"运动馆",icon:"🏟️",price:1e4,effect:"运动收益+10%",unlock:{level:10}}},Xs={chicken:{name:"小鸡",icon:"🐔",price:100,effect:"收益+5%",unlock:null},dog:{name:"小狗",icon:"🐕",price:500,effect:"防偷+10%",unlock:{level:3}},cat:{name:"小猫",icon:"🐱",price:500,effect:"产出+10%",unlock:{level:3}},rabbit:{name:"兔子",icon:"🐰",price:1e3,effect:"快速收获",unlock:{streak:14}},horse:{name:"马驹",icon:"🐴",price:3e3,effect:"运动效率+10%",unlock:{level:5}}},vg={firstExercise:{name:"初次运动",desc:"完成首次运动",reward:{coins:100}},streak7:{name:"坚持不懈",desc:"连续运动7天",reward:{crops:["strawberry"]}},streak14:{name:"循序渐进",desc:"连续运动14天",reward:{crops:["grape"],buildings:["petHouse"]}},streak30:{name:"持之以恒",desc:"连续运动30天",reward:{crops:["grape"]}},level5:{name:"运动达人",desc:"达到5级",reward:{coins:500}},rich:{name:"农场主",desc:"金币超过10000",reward:{diamonds:100}}},So=[{level:1,exp:0,title:"青铜运动员"},{level:2,exp:1e3,title:"白银运动员"},{level:3,exp:3e3,title:"黄金运动员"},{level:5,exp:8e3,title:"铂金运动员"},{level:10,exp:2e4,title:"钻石运动员"}],Oo=[{id:"exercise_minutes",label:"运动总时长",unit:"分钟",hint:"挑战有效期内，累计完成运动分钟更多的一方获胜"},{id:"exercise_sessions",label:"运动打卡次数",unit:"次",hint:"挑战有效期内，完成「开始运动」打卡次数更多的一方获胜（每次打卡算一次）"}];function Ki(n){return Oo.find(e=>e.id===n)||Oo[0]}const eh="fitfarm_user_state";function ds(n){const e={};for(const[t,i]of Object.entries(n||{})){const s=Math.max(0,Math.floor(Number(i)));s>0&&(e[t]=s)}return e}function xg(n,e){const t={...ds(n)};for(const[i,s]of Object.entries(ds(e)))t[i]=(t[i]||0)+s;return t}function ul(n,e){for(const[t,i]of Object.entries(ds(e)))if((n.crops[t]||0)<i)return!1;return!0}function Mg(n,e){const t=ds(e);if(!ul(n,t))return!1;for(const[i,s]of Object.entries(t))n.crops[i]=(n.crops[i]||0)-s,n.crops[i]<=0&&delete n.crops[i];return!0}function Sg(n,e){for(const[t,i]of Object.entries(ds(e)))n.crops[t]=(n.crops[t]||0)+i}function va(n){var t;let e=0;for(const i of n||[])e+=((t=Xs[i])==null?void 0:t.price)||0;return e}function yg(){return`pk_${Date.now()}_${Math.random().toString(36).slice(2,11)}`}const Eg={coins:500,diamonds:10,energy:100,maxEnergy:100,level:1,experience:0,streakDays:0,lastExerciseDate:null,farmGrid:Array(9).fill(null).map((n,e)=>({id:e,crop:null,plantedAt:null,status:"empty"})),warehouse:{crops:{},items:{}},unlockedCrops:["carrot","tomato"],unlockedBuildings:[],unlockedPets:["chicken"],unlockedRecipes:[],activeBuffs:[],achievements:{},stats:{totalExerciseTime:0,totalCoinsEarned:0,totalStealCount:0,pkWins:0},dailyReset:null,stealCount:0,pkChallenges:[]};function bg(){const n=localStorage.getItem(eh);if(n){const e=JSON.parse(n),t=new Date().toDateString();return e.dailyReset!==t&&(e.dailyReset=t,e.stealCount=0,e.energy=Math.min(e.energy+20,e.maxEnergy)),Array.isArray(e.pkChallenges)||(e.pkChallenges=[]),wr(e)}return wr({...Eg})}function Tg(){localStorage.setItem(eh,JSON.stringify(ae))}const ae=bg();xr(ae,Tg,{deep:!0});const wn={doExercise(n,e,t){const i=t.find(u=>u.id===n);if(!i)return{success:!1,message:"运动类型不存在"};const s=e*i.energyPerMin;if(ae.energy<s)return{success:!1,message:"体力不足"};let r=1,o=1;ae.activeBuffs.forEach(u=>{u.type==="gain"&&(r+=.15),u.type==="strength"&&(o+=.2)});const a=Math.floor(e*i.coinsPerMin*r),l=Math.floor(e*i.expPerMin*o);ae.coins+=a,ae.experience+=l,ae.energy-=s,ae.stats.totalExerciseTime+=e,ae.stats.totalCoinsEarned+=a,wn.resolvePkChallengesIfNeeded(),wn.recordPkExercise(e);const c=new Date().toDateString();if(ae.lastExerciseDate!==c){if(ae.lastExerciseDate){const u=new Date(ae.lastExerciseDate),d=new Date;d.setDate(d.getDate()-1),u.toDateString()===d.toDateString()?ae.streakDays++:ae.streakDays=1}else ae.streakDays=1;ae.lastExerciseDate=c,this.checkUnlocks()}return this.checkLevelUp(),{success:!0,coins:a,exp:l}},checkUnlocks(){Object.entries(en).forEach(([n,e])=>{e.unlock&&!ae.unlockedCrops.includes(n)&&(e.unlock.level&&ae.level>=e.unlock.level&&ae.unlockedCrops.push(n),e.unlock.streak&&ae.streakDays>=e.unlock.streak&&ae.unlockedCrops.push(n))}),Object.entries(Fo).forEach(([n,e])=>{e.unlock&&!ae.unlockedBuildings.includes(n)&&(e.unlock.level&&ae.level>=e.unlock.level&&ae.unlockedBuildings.push(n),e.unlock.streak&&ae.streakDays>=e.unlock.streak&&ae.unlockedBuildings.push(n))})},checkLevelUp(){const n=So.find(e=>ae.experience>=e.exp);n&&n.level>ae.level&&(ae.level=n.level,this.checkUnlocks())},plantCrop(n,e){const t=en[e];return t?ae.coins<t.price?{success:!1,message:"金币不足"}:ae.farmGrid[n].status!=="empty"?{success:!1,message:"地块不为空"}:(ae.coins-=t.price,ae.farmGrid[n]={id:n,crop:e,plantedAt:Date.now(),status:"growing"},{success:!0}):{success:!1,message:"作物不存在"}},harvestCrop(n){const e=ae.farmGrid[n];if(!e.crop||e.status!=="growing")return{success:!1,message:"无法收获"};const t=en[e.crop],i=Date.now()-e.plantedAt,s=t.growTime*60*60*1e3;if(i<s)return{success:!1,message:"作物还未成熟"};const r=Math.floor(Math.random()*2)+1;return ae.warehouse.crops[e.crop]=(ae.warehouse.crops[e.crop]||0)+r,ae.farmGrid[n]={id:n,crop:null,plantedAt:null,status:"empty"},{success:!0,crop:e.crop,quantity:r}},buyItem(n,e,t){return ae.coins<t?{success:!1,message:"金币不足"}:(ae.coins-=t,n==="crop"?ae.warehouse.crops[e]=(ae.warehouse.crops[e]||0)+1:n==="building"?ae.unlockedBuildings.includes(e)||ae.unlockedBuildings.push(e):n==="pet"&&(ae.unlockedPets.includes(e)||ae.unlockedPets.push(e)),{success:!0})},resolvePkChallengesIfNeeded(){const n=Date.now();for(const e of ae.pkChallenges){if(e.status!=="active"||n<=e.endsAt)continue;let t=!1;if(e.pkType==="exercise_minutes"){const s=e.myScore||0,r=e.friendScore||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else if(e.pkType==="exercise_sessions"){const s=e.mySessions||0,r=e.friendSessions||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else t=Math.random()>=.5;e.status="settled",e.winnerSide=t?"me":"friend",e.settledAt=n;const i=e.escrow||{coins:0,crops:{}};t?(ae.coins+=i.coins||0,Sg(ae.warehouse,i.crops||{}),ae.stats.pkWins++,e.resultMessage=`你战胜了 ${e.friendName}，赢得全部赌注！`):e.resultMessage=`${e.friendName} 获胜，赌注归对方（单机演示：你的下注已扣除）`}},recordPkExercise(n){const e=Date.now();for(const t of ae.pkChallenges)if(t.status==="active"&&!(e<t.startsAt||e>t.endsAt))if(t.pkType==="exercise_minutes"){t.myScore=(t.myScore||0)+n;const i=Math.floor(10+Math.random()*32);t.friendScore=(t.friendScore||0)+i}else t.pkType==="exercise_sessions"&&(t.mySessions=(t.mySessions||0)+1,Math.random()>.38&&(t.friendSessions=(t.friendSessions||0)+1));wn.resolvePkChallengesIfNeeded()},createPkChallenge(n){const{friendId:e,friendName:t,durationDays:i,pkType:s,ruleNote:r,stakes:o}=n,a=Math.min(30,Math.max(1,Math.floor(Number(i))||7));if(!Oo.find(_=>_.id===s))return{success:!1,message:"无效的 PK 类型"};const l=ds((o==null?void 0:o.crops)||{}),c=Math.max(0,Math.floor(Number(o==null?void 0:o.coins)||0)),u=Array.isArray(o==null?void 0:o.petIds)?o.petIds.filter(Boolean):[],d=va(u);if(!(c>0||Object.keys(l).length>0||u.length>0))return{success:!1,message:"请至少下注金币、作物或宠物（宠物按原价折算金币押注）"};const h=c+d;return ae.coins<h?{success:!1,message:"金币不足以支付下注与宠物折算"}:ul(ae.warehouse,l)?(ae.pkChallenges.push({id:yg(),friendId:e,friendName:t,durationDays:a,pkType:s,ruleNote:(r||"").slice(0,200),status:"pending",createdAt:Date.now(),startsAt:null,endsAt:null,myScore:0,friendScore:0,mySessions:0,friendSessions:0,stakesMe:{crops:{...l},coins:c,petIds:[...u]},stakesFriend:null,escrow:null,winnerSide:null,settledAt:null,resultMessage:""}),{success:!0}):{success:!1,message:"仓库作物不足以支付下注"}},acceptPkChallenge(n,e){const t=ae.pkChallenges.find(c=>c.id===n&&c.status==="pending");if(!t)return{success:!1,message:"挑战不存在或已处理"};const i=t.stakesMe,s=(i.coins||0)+va(i.petIds||[]);if(ae.coins<s)return{success:!1,message:"金币不足，无法成立 PK"};if(!ul(ae.warehouse,i.crops||{}))return{success:!1,message:"仓库作物不足，无法成立 PK（发起后请勿动用下注作物）"};const r={crops:ds((e==null?void 0:e.crops)||{}),coins:Math.max(0,Math.floor(Number(e==null?void 0:e.coins)||0)),petIds:Array.isArray(e==null?void 0:e.petIds)?e.petIds.filter(Boolean):[]};if(!(r.coins>0||Object.keys(r.crops).length>0||r.petIds.length>0))return{success:!1,message:"请为好友填写赌注后双方才算协商同意"};ae.coins-=s,Mg(ae.warehouse,i.crops||{});const a=s+r.coins+va(r.petIds),l=xg(i.crops||{},r.crops);return t.escrow={coins:a,crops:l},t.stakesFriend=r,t.startsAt=Date.now(),t.endsAt=t.startsAt+t.durationDays*864e5,t.status="active",t.myScore=0,t.friendScore=0,t.mySessions=0,t.friendSessions=0,t.resultMessage="",{success:!0}},cancelPkChallenge(n){const e=ae.pkChallenges.findIndex(t=>t.id===n&&t.status==="pending");return e===-1?{success:!1,message:"只能取消待确认的挑战"}:(ae.pkChallenges.splice(e,1),{success:!0})}},Bn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Ag={class:"crop-svg",viewBox:"0 0 72 88",xmlns:"http://www.w3.org/2000/svg"},wg={key:0,class:"plant-root"},Cg={key:1,class:"plant-round"},Rg={key:2,class:"plant-corn"},Pg={key:3,class:"plant-berry"},Dg={key:4,class:"plant-pumpkin"},Lg={key:5,class:"plant-grape"},Ig={key:6,class:"plant-melon"},Ug={key:7,class:"plant-apple"},Ng={key:8,class:"plant-default"},Fg={__name:"CropSprite",props:{cropId:{type:String,required:!0},progress:{type:Number,default:1},ready:{type:Boolean,default:!1},growing:{type:Boolean,default:!1}},setup(n){const e=n,t=Ft(()=>.38+Math.min(1,Math.max(0,e.progress))*.62);return(i,s)=>(me(),xe("div",{class:gn(["crop-sprite",{ready:n.ready,sway:!n.ready&&n.growing}]),style:tr({"--growth":t.value}),"aria-hidden":"true"},[(me(),xe("svg",Ag,[n.cropId==="carrot"?(me(),xe("g",wg,[...s[0]||(s[0]=[w("path",{fill:"#2E7D32",d:"M28 8c4-6 12-8 18-4 2 8-4 14-10 18l-4-6z M38 10c6-4 14-2 18 4-2 8-10 12-16 14l-2-8z"},null,-1),w("path",{fill:"#FF8F00",d:"M34 22 L38 78 Q36 84 30 84 Q26 82 28 76 Z"},null,-1),w("path",{fill:"#FFA726",d:"M36 28 L40 72 Q38 80 32 80 Q28 78 30 72 Z",opacity:"0.85"},null,-1),w("path",{fill:"#E65100",d:"M34 50 Q38 52 36 58 Q32 56 34 50",opacity:"0.35"},null,-1)])])):n.cropId==="tomato"?(me(),xe("g",Cg,[...s[1]||(s[1]=[Sn('<ellipse cx="36" cy="68" rx="22" ry="10" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><circle cx="36" cy="42" r="22" fill="#E53935" data-v-321ac93c></circle><circle cx="30" cy="38" r="6" fill="#FFCDD2" opacity="0.45" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 22 Q36 14 44 22 Q40 28 36 30 Q32 28 28 22" data-v-321ac93c></path><path fill="#1B5E20" d="M34 18 L36 26 L38 18 Z" data-v-321ac93c></path>',5)])])):n.cropId==="corn"?(me(),xe("g",Rg,[...s[2]||(s[2]=[Sn('<ellipse cx="36" cy="72" rx="18" ry="8" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#558B2F" d="M32 76 L34 28 L38 28 L40 76 Z" data-v-321ac93c></path><path fill="#FDD835" d="M34 32 Q36 24 38 32 L39 68 Q36 72 33 68 Z" data-v-321ac93c></path><path fill="#FFF59D" d="M35 36 h4 v4 h-4z M35 44 h4 v4 h-4z M35 52 h4 v4 h-4z" opacity="0.6" data-v-321ac93c></path><path fill="#33691E" d="M30 30 Q36 18 42 30 Q38 34 36 36 Q34 34 30 30" data-v-321ac93c></path>',5)])])):n.cropId==="strawberry"?(me(),xe("g",Pg,[...s[3]||(s[3]=[Sn('<ellipse cx="36" cy="74" rx="16" ry="7" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#C62828" d="M24 48 Q36 28 48 48 Q44 68 36 76 Q28 68 24 48" data-v-321ac93c></path><circle cx="30" cy="52" r="2" fill="#FFEBEE" opacity="0.5" data-v-321ac93c></circle><circle cx="38" cy="58" r="1.8" fill="#FFEBEE" opacity="0.45" data-v-321ac93c></circle><circle cx="34" cy="64" r="1.5" fill="#FFEBEE" opacity="0.4" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 44 Q36 34 44 44 Q40 46 36 48 Q32 46 28 44" data-v-321ac93c></path>',6)])])):n.cropId==="pumpkin"?(me(),xe("g",Dg,[...s[4]||(s[4]=[w("ellipse",{cx:"36",cy:"70",rx:"24",ry:"9",fill:"#3E2723",opacity:"0.08"},null,-1),w("ellipse",{cx:"36",cy:"46",rx:"26",ry:"22",fill:"#FB8C00"},null,-1),w("path",{stroke:"#EF6C00","stroke-width":"2",fill:"none",d:"M22 46 Q36 34 50 46 M26 52 Q36 42 46 52 M28 58 Q36 50 44 58",opacity:"0.5"},null,-1),w("path",{fill:"#5D4037",d:"M34 26 Q36 18 38 26 L37 34 Z"},null,-1)])])):n.cropId==="grape"?(me(),xe("g",Lg,[...s[5]||(s[5]=[Sn('<ellipse cx="36" cy="76" rx="14" ry="6" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><path fill="#6A1B9A" d="M34 78 L36 32 L38 78 Z" opacity="0.35" data-v-321ac93c></path><circle cx="30" cy="44" r="8" fill="#8E24AA" data-v-321ac93c></circle><circle cx="42" cy="44" r="8" fill="#7B1FA2" data-v-321ac93c></circle><circle cx="36" cy="56" r="9" fill="#9C27B0" data-v-321ac93c></circle><circle cx="30" cy="66" r="7" fill="#AB47BC" data-v-321ac93c></circle><circle cx="42" cy="66" r="7" fill="#8E24AA" data-v-321ac93c></circle><path fill="#33691E" d="M32 28 Q36 20 40 28 L38 36 Z" data-v-321ac93c></path>',8)])])):n.cropId==="watermelon"?(me(),xe("g",Ig,[...s[6]||(s[6]=[Sn('<ellipse cx="36" cy="74" rx="26" ry="10" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><ellipse cx="36" cy="48" rx="28" ry="24" fill="#2E7D32" data-v-321ac93c></ellipse><path stroke="#1B5E20" stroke-width="3" fill="none" d="M14 48 Q36 28 58 48" opacity="0.5" data-v-321ac93c></path><ellipse cx="36" cy="48" rx="22" ry="18" fill="#C62828" opacity="0.92" data-v-321ac93c></ellipse><circle cx="28" cy="46" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="40" cy="52" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="34" cy="56" r="1.5" fill="#1B1B1B" data-v-321ac93c></circle>',7)])])):n.cropId==="apple"?(me(),xe("g",Ug,[...s[7]||(s[7]=[Sn('<ellipse cx="36" cy="76" rx="12" ry="5" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><path fill="#5D4037" d="M34 76 L36 44 L38 76 Z" data-v-321ac93c></path><circle cx="36" cy="38" r="18" fill="#43A047" data-v-321ac93c></circle><circle cx="28" cy="34" r="6" fill="#66BB6A" opacity="0.5" data-v-321ac93c></circle><circle cx="44" cy="36" r="5" fill="#66BB6A" opacity="0.45" data-v-321ac93c></circle><circle cx="36" cy="42" r="10" fill="#E53935" data-v-321ac93c></circle><path d="M36 28 Q38 22 42 24" stroke="#6D4C41" stroke-width="1.5" fill="none" stroke-linecap="round" data-v-321ac93c></path>',7)])])):(me(),xe("g",Ng,[...s[8]||(s[8]=[w("path",{fill:"#43A047",d:"M28 72 Q36 48 44 72 Z"},null,-1),w("path",{fill:"#66BB6A",d:"M32 60 Q36 44 40 60 Z"},null,-1)])]))]))],6))}},Mc=Bn(Fg,[["__scopeId","data-v-321ac93c"]]),Og={},Bg={class:"backdrop","aria-hidden":"true"};function kg(n,e){return me(),xe("div",Bg,[...e[0]||(e[0]=[Sn('<div class="sky" data-v-8c74a6cf></div><div class="sun" data-v-8c74a6cf></div><svg class="cloud cloud-a" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="40" cy="28" rx="28" ry="18" fill="#fff" opacity="0.92" data-v-8c74a6cf></ellipse><ellipse cx="68" cy="26" rx="34" ry="22" fill="#fff" opacity="0.95" data-v-8c74a6cf></ellipse><ellipse cx="92" cy="30" rx="22" ry="14" fill="#fff" opacity="0.88" data-v-8c74a6cf></ellipse></svg><svg class="cloud cloud-b" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="30" cy="22" rx="22" ry="14" fill="#fff" opacity="0.85" data-v-8c74a6cf></ellipse><ellipse cx="52" cy="20" rx="28" ry="18" fill="#fff" opacity="0.9" data-v-8c74a6cf></ellipse><ellipse cx="74" cy="24" rx="18" ry="12" fill="#fff" opacity="0.82" data-v-8c74a6cf></ellipse></svg><svg class="hills" viewBox="0 0 400 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><path d="M0,55 Q80,35 160,50 T320,42 Q360,38 400,48 L400,80 L0,80 Z" fill="#7CB342" data-v-8c74a6cf></path><path d="M0,62 Q100,48 200,58 T400,52 L400,80 L0,80 Z" fill="#689F38" opacity="0.95" data-v-8c74a6cf></path><path d="M0,68 Q200,60 400,65 L400,80 L0,80 Z" fill="#558B2F" data-v-8c74a6cf></path></svg>',5)])])}const zg=Bn(Og,[["render",kg],["__scopeId","data-v-8c74a6cf"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="184",$s={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hg=0,Bu=1,Vg=2,yo=1,th=2,pr=3,Gi=0,_n=1,vi=2,Si=0,qs=1,ku=2,zu=3,Hu=4,Gg=5,ss=100,Wg=101,Xg=102,$g=103,qg=104,Yg=200,jg=201,Kg=202,Zg=203,fl=204,dl=205,Jg=206,Qg=207,e_=208,t_=209,n_=210,i_=211,s_=212,r_=213,o_=214,hl=0,pl=1,ml=2,Zs=3,gl=4,_l=5,vl=6,xl=7,nh=0,a_=1,l_=2,ei=0,ih=1,sh=2,rh=3,yc=4,oh=5,ah=6,lh=7,ch=300,hs=301,Js=302,xa=303,Ma=304,sa=306,Bo=1e3,Mi=1001,Ml=1002,qt=1003,c_=1004,qr=1005,tn=1006,Sa=1007,ls=1008,yn=1009,uh=1010,fh=1011,Dr=1012,Ec=1013,si=1014,Zn=1015,wi=1016,bc=1017,Tc=1018,Lr=1020,dh=35902,hh=35899,ph=1021,mh=1022,Un=1023,Ci=1026,cs=1027,gh=1028,Ac=1029,ps=1030,wc=1031,Cc=1033,Eo=33776,bo=33777,To=33778,Ao=33779,Sl=35840,yl=35841,El=35842,bl=35843,Tl=36196,Al=37492,wl=37496,Cl=37488,Rl=37489,ko=37490,Pl=37491,Dl=37808,Ll=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,zl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Xl=36492,$l=36494,ql=36495,Yl=36283,jl=36284,zo=36285,Kl=36286,u_=3200,Zl=0,f_=1,Hi="",mn="srgb",Ho="srgb-linear",Vo="linear",gt="srgb",xs=7680,Vu=519,d_=512,h_=513,p_=514,Rc=515,m_=516,g_=517,Pc=518,__=519,Gu=35044,Wu="300 es",Jn=2e3,Ir=2001;function v_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x_(){const n=Ur("canvas");return n.style.display="block",n}const Xu={};function $u(...n){const e="THREE."+n.shift();console.log(e,...n)}function _h(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jl(...n){const e=n.join(" ");e in Xu||(Xu[e]=!0,Xe(...n))}function M_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const S_={[hl]:pl,[ml]:vl,[gl]:xl,[Zs]:_l,[pl]:hl,[vl]:ml,[xl]:gl,[_l]:Zs};class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Er=Math.PI/180,Nr=180/Math.PI;function nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Dc(n,e){return(n%e+e)%e}function y_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function E_(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function b_(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function T_(n,e=1){return e-Math.abs(Dc(n,e*2)-e)}function A_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function C_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R_(n,e){return n+Math.random()*(e-n)}function P_(n){return n*(.5-Math.random())}function D_(n){n!==void 0&&(qu=n);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(n){return n*Er}function I_(n){return n*Nr}function U_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function F_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function O_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*h,a*u,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ql={DEG2RAD:Er,RAD2DEG:Nr,generateUUID:nr,clamp:rt,euclideanModulo:Dc,mapLinear:y_,inverseLerp:E_,lerp:br,damp:b_,pingpong:T_,smoothstep:A_,smootherstep:w_,randInt:C_,randFloat:R_,randFloatSpread:P_,seededRandom:D_,degToRad:L_,radToDeg:I_,isPowerOfTwo:U_,ceilPowerOfTwo:N_,floorPowerOfTwo:F_,setQuaternionFromProperEuler:O_,normalize:an,denormalize:Fs},Vc=class Vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let Ke=Vc;class Wi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],_=r[o+2],M=r[o+3];if(d!==M||l!==f||c!==h||u!==_){let g=l*f+c*h+u*_+d*M;g<0&&(f=-f,h=-h,_=-_,M=-M,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+f*a,c=c*p+h*a,u=u*p+_*a,d=d*p+M*a}else{l=l*p+f*a,c=c*p+h*a,u=u*p+_*a,d=d*p+M*a;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-a*h,e[t+2]=c*_+u*h+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gc=class Gc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;let $=Gc;const ya=new $,Yu=new Wi,Wc=class Wc{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],M=s[0],g=s[3],p=s[6],y=s[1],b=s[4],E=s[7],U=s[2],A=s[5],N=s[8];return r[0]=o*M+a*y+l*U,r[3]=o*g+a*b+l*A,r[6]=o*p+a*E+l*N,r[1]=c*M+u*y+d*U,r[4]=c*g+u*b+d*A,r[7]=c*p+u*E+d*N,r[2]=f*M+h*y+_*U,r[5]=f*g+h*b+_*A,r[8]=f*p+h*E+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=t*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=h*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;let Je=Wc;const Ea=new Je,ju=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B_(){const n={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?Vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ho]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:ju,fromXYZ:Ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const lt=B_();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class k_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Ur("canvas")),Ms.width=e.width,Ms.height=e.height;const s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ba(s[o].image)):r.push(ba(s[o]))}else r=ba(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let H_=0;const Ta=new $;class sn extends $i{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=Mi,s=Mi,r=tn,o=ls,a=Un,l=yn,c=sn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=nr(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ch;sn.DEFAULT_ANISOTROPY=1;const Xc=class Xc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(h+1)/2,U=(p+1)/2,A=(u+f)/4,N=(d+M)/4,x=(_+g)/4;return b>E&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=N/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=x/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=N/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(d-M)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;let Lt=Xc;class V_ extends $i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends V_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vh extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G_ extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Go=class Go{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,_,M,g)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,_,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Go().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,_=a*u,M=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,M=c*d;t[0]=f+M*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,M=c*d;t[0]=f-M*a,t[4]=-o*d,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,_=a*u,M=a*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*d,t[8]=_*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,h=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+M,t[5]=o*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=a*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(i,xn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(i,xn)),Ii.normalize(),Yr.crossVectors(xn,Ii),s[0]=Ii.x,s[4]=Yr.x,s[8]=xn.x,s[1]=Ii.y,s[5]=Yr.y,s[9]=xn.y,s[2]=Ii.z,s[6]=Yr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],M=i[6],g=i[10],p=i[14],y=i[3],b=i[7],E=i[11],U=i[15],A=s[0],N=s[4],x=s[8],R=s[12],H=s[1],F=s[5],W=s[9],ie=s[13],oe=s[2],z=s[6],j=s[10],V=s[14],G=s[3],B=s[7],Me=s[11],Y=s[15];return r[0]=o*A+a*H+l*oe+c*G,r[4]=o*N+a*F+l*z+c*B,r[8]=o*x+a*W+l*j+c*Me,r[12]=o*R+a*ie+l*V+c*Y,r[1]=u*A+d*H+f*oe+h*G,r[5]=u*N+d*F+f*z+h*B,r[9]=u*x+d*W+f*j+h*Me,r[13]=u*R+d*ie+f*V+h*Y,r[2]=_*A+M*H+g*oe+p*G,r[6]=_*N+M*F+g*z+p*B,r[10]=_*x+M*W+g*j+p*Me,r[14]=_*R+M*ie+g*V+p*Y,r[3]=y*A+b*H+E*oe+U*G,r[7]=y*N+b*F+E*z+U*B,r[11]=y*x+b*W+E*j+U*Me,r[15]=y*R+b*ie+E*V+U*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],M=e[7],g=e[11],p=e[15],y=l*h-c*f,b=a*h-c*d,E=a*f-l*d,U=o*h-c*u,A=o*f-l*u,N=o*d-a*u;return t*(M*y-g*b+p*E)-i*(_*y-g*U+p*A)+s*(_*b-M*U+p*N)-r*(_*E-M*A+g*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],M=e[13],g=e[14],p=e[15],y=t*a-i*o,b=t*l-s*o,E=t*c-r*o,U=i*l-s*a,A=i*c-r*a,N=s*c-r*l,x=u*M-d*_,R=u*g-f*_,H=u*p-h*_,F=d*g-f*M,W=d*p-h*M,ie=f*p-h*g,oe=y*ie-b*W+E*F+U*H-A*R+N*x;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/oe;return e[0]=(a*ie-l*W+c*F)*z,e[1]=(s*W-i*ie-r*F)*z,e[2]=(M*N-g*A+p*U)*z,e[3]=(f*A-d*N-h*U)*z,e[4]=(l*H-o*ie-c*R)*z,e[5]=(t*ie-s*H+r*R)*z,e[6]=(g*E-_*N-p*b)*z,e[7]=(u*N-f*E+h*b)*z,e[8]=(o*W-a*H+c*x)*z,e[9]=(i*H-t*W-r*x)*z,e[10]=(_*A-M*E+p*y)*z,e[11]=(d*E-u*A-h*y)*z,e[12]=(a*R-o*F-l*x)*z,e[13]=(t*F-i*R+s*x)*z,e[14]=(M*b-_*U-g*y)*z,e[15]=(u*U-d*b+f*y)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,M=o*u,g=o*d,p=a*d,y=l*c,b=l*u,E=l*d,U=i.x,A=i.y,N=i.z;return s[0]=(1-(M+p))*U,s[1]=(h+E)*U,s[2]=(_-b)*U,s[3]=0,s[4]=(h-E)*A,s[5]=(1-(f+p))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(_+b)*N,s[9]=(g-y)*N,s[10]=(1-(f+M))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);const c=1/o,u=1/a,d=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,t.setFromRotationMatrix(Pn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let _,M;if(l)_=r/(o-r),M=o*r/(o-r);else if(a===Jn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Ir)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s);let _,M;if(l)_=1/(o-r),M=o/(o-r);else if(a===Jn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===Ir)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Go.prototype.isMatrix4=!0;let wt=Go;const Ss=new $,Pn=new wt,W_=new $(0,0,0),X_=new $(1,1,1),Ii=new $,Yr=new $,xn=new $,Zu=new wt,Ju=new Wi;class Xi{constructor(e=0,t=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $_=0;const Qu=new $,ys=new Wi,li=new wt,jr=new $,or=new $,q_=new $,Y_=new Wi,ef=new $(1,0,0),tf=new $(0,1,0),nf=new $(0,0,1),sf={type:"added"},j_={type:"removed"},Es={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Gt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new $,t=new Xi,i=new Wi,s=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(or,jr,this.up):li.lookAt(jr,or,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),Es.child=e,this.dispatchEvent(Es),Es.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new $(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bt extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Dc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ca(o,r,e+1/3),this.g=Ca(o,r,e),this.b=Ca(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(rt(Zt.r*255,0,255))*65536+Math.round(rt(Zt.g*255,0,255))*256+Math.round(rt(Zt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=mn){lt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Kr);const i=br(Ui.h,Kr.h,t),s=br(Ui.s,Kr.s,t),r=br(Ui.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new dt;dt.NAMES=xh;class Uc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=i}clone(){return new Uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Z_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new $,ci=new $,Ra=new $,ui=new $,bs=new $,Ts=new $,rf=new $,Pa=new $,Da=new $,La=new $,Ia=new Lt,Ua=new Lt,Na=new Lt;class In{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ci.subVectors(i,t),Ra.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ci),l=Dn.dot(Ra),c=ci.dot(ci),u=ci.dot(Ra),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ci.subVectors(e,t),Dn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Dn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Ts.subVectors(r,i),Pa.subVectors(e,i);const l=bs.dot(Pa),c=Ts.dot(Pa);if(l<=0&&c<=0)return t.copy(i);Da.subVectors(e,s);const u=bs.dot(Da),d=Ts.dot(Da);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(bs,o);La.subVectors(e,r);const h=bs.dot(La),_=Ts.dot(La);if(_>=0&&h<=_)return t.copy(r);const M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ts,a);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return rf.subVectors(r,s),a=(d-u)/(d-u+(h-_)),t.copy(s).addScaledVector(rf,a);const p=1/(g+M+f);return o=M*p,a=f*p,t.copy(i).addScaledVector(bs,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Jr.subVectors(this.max,ar),As.subVectors(e.a,ar),ws.subVectors(e.b,ar),Cs.subVectors(e.c,ar),Ni.subVectors(ws,As),Fi.subVectors(Cs,ws),Zi.subVectors(As,Cs);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-Zi.z,Zi.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,Zi.z,0,-Zi.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-Zi.y,Zi.x,0];return!Fa(t,As,ws,Cs,Jr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,As,ws,Cs,Jr))?!1:(Qr.crossVectors(Ni,Fi),t=[Qr.x,Qr.y,Qr.z],Fa(t,As,ws,Cs,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new $,new $,new $,new $,new $,new $,new $,new $],Ln=new $,Zr=new zr,As=new $,ws=new $,Cs=new $,Ni=new $,Fi=new $,Zi=new $,ar=new $,Jr=new $,Qr=new $,Ji=new $;function Fa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ot=new $,eo=new Ke;let J_=0;class ni extends $i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sh extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Q_=new zr,lr=new $,Oa=new $;class Nc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Oa)),this.expandByPoint(lr.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e0=0;const Tn=new wt,Ba=new Gt,Rs=new $,Mn=new zr,cr=new zr,Vt=new $;class Rn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?Sh:Mh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Mn.min,cr.min),Mn.expandByPoint(Vt),Vt.addVectors(Mn.max,cr.max),Mn.expandByPoint(Vt)):(Mn.expandByPoint(cr.min),Mn.expandByPoint(cr.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Vt.add(Rs)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new $,l[x]=new $;const c=new $,u=new $,d=new $,f=new Ke,h=new Ke,_=new Ke,M=new $,g=new $;function p(x,R,H){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,H),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,R),_.fromBufferAttribute(r,H),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const F=1/(h.x*_.y-_.x*h.y);isFinite(F)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(F),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(F),a[x].add(M),a[R].add(M),a[H].add(M),l[x].add(g),l[R].add(g),l[H].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,R=y.length;x<R;++x){const H=y[x],F=H.start,W=H.count;for(let ie=F,oe=F+W;ie<oe;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const b=new $,E=new $,U=new $,A=new $;function N(x){U.fromBufferAttribute(s,x),A.copy(U);const R=a[x];b.copy(R),b.sub(U.multiplyScalar(U.dot(R))).normalize(),E.crossVectors(A,R);const F=E.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,F)}for(let x=0,R=y.length;x<R;++x){const H=y[x],F=H.start,W=H.count;for(let ie=F,oe=F+W;ie<oe;ie+=3)N(e.getX(ie+0)),N(e.getX(ie+1)),N(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,d=new $;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new ni(f,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let t0=0;class Hr extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=qs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const di=new $,ka=new $,to=new $,Oi=new $,za=new $,no=new $,Ha=new $;class Fc{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ka.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=Oi.dot(this.direction),l=-Oi.dot(to),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(to,f),h}intersectSphere(e,t){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){za.subVectors(t,e),no.subVectors(i,e),Ha.crossVectors(za,no);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(Oi,no));if(l<0)return null;const c=a*this.direction.dot(za.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(Ha);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yh extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const of=new wt,Qi=new Fc,io=new Nc,af=new $,so=new $,ro=new $,oo=new $,Va=new $,ao=new $,lf=new $,lo=new $;class je extends Gt{constructor(e=new Rn,t=new yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Va.fromBufferAttribute(d,e),o?ao.addScaledVector(Va,u):ao.addScaledVector(Va.sub(t),u))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(io.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(io,af)===null||Qi.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(of.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(of),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],p=o[g.materialIndex],y=Math.max(g.start,h.start),b=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let E=y,U=b;E<U;E+=3){const A=a.getX(E),N=a.getX(E+1),x=a.getX(E+2);s=co(this,p,e,i,c,u,d,A,N,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let g=_,p=M;g<p;g+=3){const y=a.getX(g),b=a.getX(g+1),E=a.getX(g+2);s=co(this,o,e,i,c,u,d,y,b,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],p=o[g.materialIndex],y=Math.max(g.start,h.start),b=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let E=y,U=b;E<U;E+=3){const A=E,N=E+1,x=E+2;s=co(this,p,e,i,c,u,d,A,N,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let g=_,p=M;g<p;g+=3){const y=g,b=g+1,E=g+2;s=co(this,o,e,i,c,u,d,y,b,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function n0(n,e,t,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,so),n.getVertexPosition(l,ro),n.getVertexPosition(c,oo);const u=n0(n,e,t,i,so,ro,oo,lf);if(u){const d=new $;In.getBarycoord(lf,so,ro,oo,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,d,new Ke)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,d,new Ke)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};In.getNormal(so,ro,oo,f.normal),u.face=f,u.barycoord=d}return u}class i0 extends sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=qt,u=qt,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ga=new $,s0=new $,r0=new Je;class zi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ga.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Ga),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||r0.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Nc,o0=new Ke(.5,.5),uo=new $;class Oc{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],M=r[9],g=r[10],p=r[11],y=r[12],b=r[13],E=r[14],U=r[15];if(s[0].setComponents(c-o,h-u,p-_,U-y).normalize(),s[1].setComponents(c+o,h+u,p+_,U+y).normalize(),s[2].setComponents(c+a,h+d,p+M,U+b).normalize(),s[3].setComponents(c-a,h-d,p-M,U-b).normalize(),i)s[4].setComponents(l,f,g,E).normalize(),s[5].setComponents(c-l,h-f,p-g,U-E).normalize();else if(s[4].setComponents(c-l,h-f,p-g,U-E).normalize(),t===Jn)s[5].setComponents(c+l,h+f,p+g,U+E).normalize();else if(t===Ir)s[5].setComponents(l,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=o0.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends sn{constructor(e=[],t=hs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qs extends sn{constructor(e,t,i=si,s,r,o,a=qt,l=qt,c,u=Ci,d=1){if(u!==Ci&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class a0 extends Qs{constructor(e,t=si,i=hs,s,r,o=qt,a=qt,l,c=Ci){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cn extends Rn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function _(M,g,p,y,b,E,U,A,N,x,R){const H=E/N,F=U/x,W=E/2,ie=U/2,oe=A/2,z=N+1,j=x+1;let V=0,G=0;const B=new $;for(let Me=0;Me<j;Me++){const Y=Me*F-ie;for(let Se=0;Se<z;Se++){const Ve=Se*H-W;B[M]=Ve*y,B[g]=Y*b,B[p]=oe,c.push(B.x,B.y,B.z),B[M]=0,B[g]=0,B[p]=A>0?1:-1,u.push(B.x,B.y,B.z),d.push(Se/N),d.push(1-Me/x),V+=1}}for(let Me=0;Me<x;Me++)for(let Y=0;Y<N;Y++){const Se=f+Y+z*Me,Ve=f+Y+z*(Me+1),ot=f+(Y+1)+z*(Me+1),Ye=f+(Y+1)+z*Me;l.push(Se,Ve,Ye),l.push(Ve,ot,Ye),G+=6}a.addGroup(h,G,R),h+=G,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $n extends Rn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let _=0;const M=[],g=i/2;let p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(h,2));function y(){const E=new $,U=new $;let A=0;const N=(t-e)/i;for(let x=0;x<=r;x++){const R=[],H=x/r,F=H*(t-e)+e;for(let W=0;W<=s;W++){const ie=W/s,oe=ie*l+a,z=Math.sin(oe),j=Math.cos(oe);U.x=F*z,U.y=-H*i+g,U.z=F*j,d.push(U.x,U.y,U.z),E.set(z,N,j).normalize(),f.push(E.x,E.y,E.z),h.push(ie,1-H),R.push(_++)}M.push(R)}for(let x=0;x<s;x++)for(let R=0;R<r;R++){const H=M[R][x],F=M[R+1][x],W=M[R+1][x+1],ie=M[R][x+1];(e>0||R!==0)&&(u.push(H,F,ie),A+=3),(t>0||R!==r-1)&&(u.push(F,W,ie),A+=3)}c.addGroup(p,A,0),p+=A}function b(E){const U=_,A=new Ke,N=new $;let x=0;const R=E===!0?e:t,H=E===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,g*H,0),f.push(0,H,0),h.push(.5,.5),_++;const F=_;for(let W=0;W<=s;W++){const oe=W/s*l+a,z=Math.cos(oe),j=Math.sin(oe);N.x=R*j,N.y=g*H,N.z=R*z,d.push(N.x,N.y,N.z),f.push(0,H,0),A.x=z*.5+.5,A.y=j*.5*H+.5,h.push(A.x,A.y),_++}for(let W=0;W<s;W++){const ie=U+W,oe=F+W;E===!0?u.push(oe,oe+1,ie):u.push(oe+1,oe,ie),x+=3}c.addGroup(p,x,E===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rs extends $n{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new rs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xi extends Rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],_=[],M=[],g=[];for(let p=0;p<u;p++){const y=p*f-o;for(let b=0;b<c;b++){const E=b*d-r;_.push(E,-y,0),M.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const b=y+c*p,E=y+c*(p+1),U=y+1+c*(p+1),A=y+1+c*p;h.push(b,E,A),h.push(E,U,A)}this.setIndex(h),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xn extends Rn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new $,f=new $,h=[],_=[],M=[],g=[];for(let p=0;p<=i;p++){const y=[],b=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){const A=U/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(A+E,1-b),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const b=u[p][y+1],E=u[p][y],U=u[p+1][y],A=u[p+1][y+1];(p!==0||o>0)&&h.push(b,E,A),(p!==i-1||l<Math.PI)&&h.push(E,U,A)}this.setIndex(h),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bc extends Rn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[],f=new $,h=new $,_=new $;for(let M=0;M<=i;M++){const g=o+M/i*a;for(let p=0;p<=s;p++){const y=p/s*r;h.x=(e+t*Math.cos(g))*Math.cos(y),h.y=(e+t*Math.cos(g))*Math.sin(y),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),_.subVectors(h,f).normalize(),u.push(_.x,_.y,_.z),d.push(p/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){const p=(s+1)*M+g-1,y=(s+1)*(M-1)+g-1,b=(s+1)*(M-1)+g,E=(s+1)*M+g;l.push(p,y,E),l.push(y,b,E)}this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(cf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(cf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const s in i)e[s]=i[s]}return e}function cf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function l0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const c0={clone:er,merge:ln};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class d0 extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class at extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h0 extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p0 extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(uf(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!uf(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function uf(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class m0{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const g0=new m0;class kc{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ps=new WeakMap;class _0 extends kc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wa.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ps.get(o);d===void 0&&(d=[],Ps.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Ur("img");function l(){u(),t&&t(this);const d=Ps.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Ps.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Wa.remove(`image:${e}`);const f=Ps.get(this)||[];for(let h=0;h<f.length;h++){const _=f[h];_.onError&&_.onError(d)}Ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wa.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class v0 extends kc{constructor(e){super(e)}load(e,t,i,s){const r=new sn,o=new _0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ah extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class x0 extends Ah{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xa=new wt,ff=new $,df=new $;class M0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ir||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fo=new $,ho=new Wi,Vn=new $;class wh extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fo,ho,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,ho,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(fo,ho,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,ho,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new $,hf=new Ke,pf=new Ke;class An extends wh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,hf,pf),t.subVectors(pf,hf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zc extends wh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S0 extends M0{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y0 extends Ah{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new S0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ds=-90,Ls=1;class E0 extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Ds,Ls,e,t);s.layers=this.layers,this.add(s);const r=new An(Ds,Ls,e,t);r.layers=this.layers,this.add(r);const o=new An(Ds,Ls,e,t);o.layers=this.layers,this.add(o);const a=new An(Ds,Ls,e,t);a.layers=this.layers,this.add(a);const l=new An(Ds,Ls,e,t);l.layers=this.layers,this.add(l);const c=new An(Ds,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class b0 extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mf=new wt;class T0{constructor(e,t,i=0,s=1/0){this.ray=new Fc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,i=[]){return ec(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ec(e[s],this,i,t);return i.sort(gf),i}}function gf(n,e){return n.distance-e.distance}function ec(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ec(r[o],e,t,!0)}}class A0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class _f{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $c=class $c{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};$c.prototype.isMatrix2=!0;let vf=$c;class w0 extends $i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Xe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xf(n,e,t,i){const s=C0(i);switch(t){case ph:return n*e;case gh:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case ps:return n*e*2/s.components*s.byteLength;case wc:return n*e*2/s.components*s.byteLength;case mh:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Cc:return n*e*4/s.components*s.byteLength;case Eo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:case bl:return Math.max(n,16)*Math.max(e,8)/4;case Sl:case El:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:case Cl:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:case ko:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xl:case $l:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zo:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(n){switch(n){case yn:case uh:return{byteLength:1,components:1};case Dr:case fh:case wi:return{byteLength:2,components:1};case bc:case Tc:return{byteLength:2,components:4};case si:case Ec:case Zn:return{byteLength:4,components:1};case dh:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ch(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function R0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],M=d[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const M=d[h];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
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
}`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
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
#endif`,Cv=`uniform sampler2D dfgLUT;
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
}`,Rv=`
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zv=`#if defined( USE_POINTS_UV )
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
#endif`,Hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qv=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define MATCAP
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
}`,jx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,rM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:P0,alphahash_pars_fragment:D0,alphamap_fragment:L0,alphamap_pars_fragment:I0,alphatest_fragment:U0,alphatest_pars_fragment:N0,aomap_fragment:F0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:H0,bsdfs:V0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:j0,color_pars_fragment:K0,color_pars_vertex:Z0,color_vertex:J0,common:Q0,cube_uv_reflection_fragment:ev,defaultnormal_vertex:tv,displacementmap_pars_vertex:nv,displacementmap_vertex:iv,emissivemap_fragment:sv,emissivemap_pars_fragment:rv,colorspace_fragment:ov,colorspace_pars_fragment:av,envmap_fragment:lv,envmap_common_pars_fragment:cv,envmap_pars_fragment:uv,envmap_pars_vertex:fv,envmap_physical_pars_fragment:yv,envmap_vertex:dv,fog_vertex:hv,fog_pars_vertex:pv,fog_fragment:mv,fog_pars_fragment:gv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:vv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:Mv,lights_pars_begin:Sv,lights_toon_fragment:Ev,lights_toon_pars_fragment:bv,lights_phong_fragment:Tv,lights_phong_pars_fragment:Av,lights_physical_fragment:wv,lights_physical_pars_fragment:Cv,lights_fragment_begin:Rv,lights_fragment_maps:Pv,lights_fragment_end:Dv,lightprobes_pars_fragment:Lv,logdepthbuf_fragment:Iv,logdepthbuf_pars_fragment:Uv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Fv,map_fragment:Ov,map_pars_fragment:Bv,map_particle_fragment:kv,map_particle_pars_fragment:zv,metalnessmap_fragment:Hv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Wv,morphnormal_vertex:Xv,morphtarget_pars_vertex:$v,morphtarget_vertex:qv,normal_fragment_begin:Yv,normal_fragment_maps:jv,normal_pars_fragment:Kv,normal_pars_vertex:Zv,normal_vertex:Jv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:hx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:xx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:yx,tonemapping_pars_fragment:Ex,transmission_fragment:bx,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:wx,uv_vertex:Cx,worldpos_vertex:Rx,background_vert:Px,background_frag:Dx,backgroundCube_vert:Lx,backgroundCube_frag:Ix,cube_vert:Ux,cube_frag:Nx,depth_vert:Fx,depth_frag:Ox,distance_vert:Bx,distance_frag:kx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:$x,meshlambert_frag:qx,meshmatcap_vert:Yx,meshmatcap_frag:jx,meshnormal_vert:Kx,meshnormal_frag:Zx,meshphong_vert:Jx,meshphong_frag:Qx,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:sM,points_frag:rM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},De={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jn={basic:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new dt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ln([De.common,De.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ln([De.lights,De.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};jn.physical={uniforms:ln([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const po={r:0,b:0,g:0},uM=new wt,Rh=new Je;Rh.set(-1,0,0,0,1,0,0,0,1);function fM(n,e,t,i,s,r){const o=new dt(0);let a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){const E=y.backgroundBlurriness>0;b=e.get(b,E)}return b}function _(y){let b=!1;const E=h(y);E===null?g(o,a):E&&E.isColor&&(g(E,1),b=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,b){const E=h(b);E&&(E.isCubeTexture||E.mapping===sa)?(c===void 0&&(c=new je(new cn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:er(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rh),c.material.toneMapped=lt.getTransfer(E.colorSpace)!==gt,(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new je(new xi(2,2),new ri({name:"BackgroundMaterial",uniforms:er(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=lt.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(po,Th(n)),t.buffers.color.setClear(po.r,po.g,po.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:_,addToRenderList:M,dispose:p}}function dM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(F,W,ie,oe,z){let j=!1;const V=d(F,oe,ie,W);r!==V&&(r=V,c(r.object)),j=h(F,oe,ie,z),j&&_(F,oe,ie,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,E(F,W,ie,oe),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,W,ie,oe){const z=oe.wireframe===!0;let j=i[W.id];j===void 0&&(j={},i[W.id]=j);const V=F.isInstancedMesh===!0?F.id:0;let G=j[V];G===void 0&&(G={},j[V]=G);let B=G[ie.id];B===void 0&&(B={},G[ie.id]=B);let Me=B[z];return Me===void 0&&(Me=f(l()),B[z]=Me),Me}function f(F){const W=[],ie=[],oe=[];for(let z=0;z<t;z++)W[z]=0,ie[z]=0,oe[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ie,attributeDivisors:oe,object:F,attributes:{},index:null}}function h(F,W,ie,oe){const z=r.attributes,j=W.attributes;let V=0;const G=ie.getAttributes();for(const B in G)if(G[B].location>=0){const Y=z[B];let Se=j[B];if(Se===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),Y===void 0||Y.attribute!==Se||Se&&Y.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==oe}function _(F,W,ie,oe){const z={},j=W.attributes;let V=0;const G=ie.getAttributes();for(const B in G)if(G[B].location>=0){let Y=j[B];Y===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor));const Se={};Se.attribute=Y,Y&&Y.data&&(Se.data=Y.data),z[B]=Se,V++}r.attributes=z,r.attributesNum=V,r.index=oe}function M(){const F=r.newAttributes;for(let W=0,ie=F.length;W<ie;W++)F[W]=0}function g(F){p(F,0)}function p(F,W){const ie=r.newAttributes,oe=r.enabledAttributes,z=r.attributeDivisors;ie[F]=1,oe[F]===0&&(n.enableVertexAttribArray(F),oe[F]=1),z[F]!==W&&(n.vertexAttribDivisor(F,W),z[F]=W)}function y(){const F=r.newAttributes,W=r.enabledAttributes;for(let ie=0,oe=W.length;ie<oe;ie++)W[ie]!==F[ie]&&(n.disableVertexAttribArray(ie),W[ie]=0)}function b(F,W,ie,oe,z,j,V){V===!0?n.vertexAttribIPointer(F,W,ie,z,j):n.vertexAttribPointer(F,W,ie,oe,z,j)}function E(F,W,ie,oe){M();const z=oe.attributes,j=ie.getAttributes(),V=W.defaultAttributeValues;for(const G in j){const B=j[G];if(B.location>=0){let Me=z[G];if(Me===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(Me=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(Me=F.instanceColor)),Me!==void 0){const Y=Me.normalized,Se=Me.itemSize,Ve=e.get(Me);if(Ve===void 0)continue;const ot=Ve.buffer,Ye=Ve.type,de=Ve.bytesPerElement,Pe=Ye===n.INT||Ye===n.UNSIGNED_INT||Me.gpuType===Ec;if(Me.isInterleavedBufferAttribute){const be=Me.data,He=be.stride,We=Me.offset;if(be.isInstancedInterleavedBuffer){for(let Ge=0;Ge<B.locationSize;Ge++)p(B.location+Ge,be.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ge=0;Ge<B.locationSize;Ge++)g(B.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let Ge=0;Ge<B.locationSize;Ge++)b(B.location+Ge,Se/B.locationSize,Ye,Y,He*de,(We+Se/B.locationSize*Ge)*de,Pe)}else{if(Me.isInstancedBufferAttribute){for(let be=0;be<B.locationSize;be++)p(B.location+be,Me.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let be=0;be<B.locationSize;be++)g(B.location+be);n.bindBuffer(n.ARRAY_BUFFER,ot);for(let be=0;be<B.locationSize;be++)b(B.location+be,Se/B.locationSize,Ye,Y,Se*de,Se/B.locationSize*be*de,Pe)}}else if(V!==void 0){const Y=V[G];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(B.location,Y);break;case 3:n.vertexAttrib3fv(B.location,Y);break;case 4:n.vertexAttrib4fv(B.location,Y);break;default:n.vertexAttrib1fv(B.location,Y)}}}}y()}function U(){R();for(const F in i){const W=i[F];for(const ie in W){const oe=W[ie];for(const z in oe){const j=oe[z];for(const V in j)u(j[V].object),delete j[V];delete oe[z]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const W=i[F.id];for(const ie in W){const oe=W[ie];for(const z in oe){const j=oe[z];for(const V in j)u(j[V].object),delete j[V];delete oe[z]}}delete i[F.id]}function N(F){for(const W in i){const ie=i[W];for(const oe in ie){const z=ie[oe];if(z[F.id]===void 0)continue;const j=z[F.id];for(const V in j)u(j[V].object),delete j[V];delete z[F.id]}}}function x(F){for(const W in i){const ie=i[W],oe=F.isInstancedMesh===!0?F.id:0,z=ie[oe];if(z!==void 0){for(const j in z){const V=z[j];for(const G in V)u(V[G].object),delete V[G];delete z[j]}delete ie[oe],Object.keys(ie).length===0&&delete i[W]}}}function R(){H(),o=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:H,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function hM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function pM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Un&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const x=N===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==yn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zn&&!x)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:U,samples:A}}function mM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const y=r?0:i,b=y*4;let E=p.clippingState||null;l.value=E,E=u(_,f,b,h);for(let U=0;U!==b;++U)E[U]=t[U];p.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const p=h+M*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,E=h;b!==M;++b,E+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Vi=4,Mf=[.125,.215,.35,.446,.526,.582],os=20,gM=256,ur=new zc,Sf=new dt;let $a=null,qa=0,Ya=0,ja=!1;const _M=new $;class yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=_M}=r;$a=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($a,qa,Ya),this._renderer.xr.enabled=ja,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:wi,format:Un,colorSpace:Ho,depthBuffer:!1},s=Ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vM(r)),this._blurMaterial=MM(r,e,t),this._ggxMaterial=xM(r,e,t)}return s}_compileMaterial(e){const t=new je(new Rn,e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,i,s,r){const l=new An(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Sf),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new cn,new yh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Sf),p=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const U=this._cubeSize;Is(s,E*U,b>2?U:0,U,U),d.setRenderTarget(s),p&&d.render(M,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===hs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ur)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Vi?i-_+Vi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Is(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(a,ur),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Is(e,g,p,3*M,2*M),s.setRenderTarget(e),s.render(a,ur)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*os-1),M=r/_,g=isFinite(r)?1+Math.floor(u*M):os;g>os&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const p=[];let y=0;for(let N=0;N<os;++N){const x=N/M,R=Math.exp(-x*x/2);p.push(R),N===0?y+=R:N<g&&(y+=2*R)}for(let N=0;N<p.length;N++)p[N]=p[N]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const E=this._sizeLods[s],U=3*E*(s>b-Vi?s-b+Vi:0),A=4*(this._cubeSize-E);Is(t,U,A,3*E,2*E),l.setRenderTarget(t),l.render(d,ur)}}function vM(n){const e=[],t=[],i=[];let s=n;const r=n-Vi+1+Mf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Vi?l=Mf[o-n+Vi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,M=3,g=2,p=1,y=new Float32Array(M*_*h),b=new Float32Array(g*_*h),E=new Float32Array(p*_*h);for(let A=0;A<h;A++){const N=A%3*2/3-1,x=A>2?0:-1,R=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];y.set(R,M*_*A),b.set(f,g*_*A);const H=[A,A,A,A,A,A];E.set(H,p*_*A)}const U=new Rn;U.setAttribute("position",new ni(y,M)),U.setAttribute("uv",new ni(b,g)),U.setAttribute("faceIndex",new ni(E,p)),i.push(new je(U,null)),s>Vi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ef(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xM(n,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function MM(n,e,t){const i=new Float32Array(os),s=new $(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ra(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function bf(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Tf(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}class Ph extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Si});r.uniforms.tEquirect.value=t;const o=new je(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=tn),new E0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function SM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===xa||h===Ma)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new Ph(_.height);return M.fromEquirectangularTexture(n,f),e.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,_=h===xa||h===Ma,M=h===hs||h===Js;if(_||M){let g=t.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new yf(n)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return _&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new yf(n)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,h){return h===xa?f.mapping=hs:h===Ma&&(f.mapping=Js),f}function l(f){let h=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function yM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Jl("WebGLRenderer: "+i+" extension not supported."),s}}}function EM(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(h!==null){const y=h.array;M=h.version;for(let b=0,E=y.length;b<E;b+=3){const U=y[b+0],A=y[b+1],N=y[b+2];f.push(U,A,A,N,N,U)}}else{const y=_.array;M=_.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const U=b+0,A=b+1,N=b+2;f.push(U,A,A,N,N,U)}}const g=new(_.count>=65535?Sh:Mh)(f,1);g.version=M;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function bM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let M=0;for(let g=0;g<h;g++)M+=f[g];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function TM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function AM(n,e,t){const i=new WeakMap,s=new Lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let H=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",H)};var h=H;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),g===!0&&(E=3);let U=a.attributes.position.count*E,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*A*4*d),x=new vh(N,U,A,d);x.type=Zn,x.needsUpdate=!0;const R=E*4;for(let F=0;F<d;F++){const W=p[F],ie=y[F],oe=b[F],z=U*A*4*F;for(let j=0;j<W.count;j++){const V=j*R;_===!0&&(s.fromBufferAttribute(W,j),N[z+V+0]=s.x,N[z+V+1]=s.y,N[z+V+2]=s.z,N[z+V+3]=0),M===!0&&(s.fromBufferAttribute(ie,j),N[z+V+4]=s.x,N[z+V+5]=s.y,N[z+V+6]=s.z,N[z+V+7]=0),g===!0&&(s.fromBufferAttribute(oe,j),N[z+V+8]=s.x,N[z+V+9]=s.y,N[z+V+10]=s.z,N[z+V+11]=oe.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new Ke(U,A)},i.set(a,f),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function wM(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const CM={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function RM(n,e,t,i,s){const r=new ti(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Qs(e,t):void 0}),o=new ti(e,t,{type:wi,depthBuffer:!1,stencilBuffer:!1}),a=new Rn;a.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const l=new d0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new je(a,l),u=new zc(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,M=null,g=[],p=!1;this.setSize=function(y,b){r.setSize(y,b),o.setSize(y,b);for(let E=0;E<g.length;E++){const U=g[E];U.setSize&&U.setSize(y,b)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const b=r.width,E=r.height;for(let U=0;U<g.length;U++){const A=g[U];A.setSize&&A.setSize(b,E)}},this.begin=function(y,b){if(h||y.toneMapping===ei&&g.length===0)return!1;if(M=b,b!==null){const E=b.width,U=b.height;(r.width!==E||r.height!==U)&&this.setSize(E,U)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=ei,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=_,h=!0;let E=r,U=o;for(let A=0;A<g.length;A++){const N=g[A];if(N.enabled!==!1&&(N.render(y,U,E,b),N.needsSwap!==!1)){const x=E;E=U,U=x}}if(d!==y.outputColorSpace||f!==y.toneMapping){d=y.outputColorSpace,f=y.toneMapping,l.defines={},lt.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");const A=CM[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(M),y.render(c,u),M=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Dh=new sn,tc=new Qs(1,1),Lh=new vh,Ih=new G_,Uh=new Eh,Af=[],wf=[],Cf=new Float32Array(16),Rf=new Float32Array(9),Pf=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Af[s];if(r===void 0&&(r=new Float32Array(s),Af[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oa(n,e){let t=wf[e];t===void 0&&(t=new Int32Array(e),wf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),Ht(t,i)}}function NM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Rf.set(i),n.uniformMatrix3fv(this.addr,!1,Rf),Ht(t,i)}}function FM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),Ht(t,i)}}function OM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?Pc:Rc,r=tc):r=Dh,t.setTexture2D(e||r,s)}function $M(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ih,s)}function qM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uh,s)}function YM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lh,s)}function jM(n){switch(n){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function KM(n,e){n.uniform1fv(this.addr,e)}function ZM(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function JM(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function QM(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function eS(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tS(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nS(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iS(n,e){n.uniform1iv(this.addr,e)}function sS(n,e){n.uniform2iv(this.addr,e)}function rS(n,e){n.uniform3iv(this.addr,e)}function oS(n,e){n.uniform4iv(this.addr,e)}function aS(n,e){n.uniform1uiv(this.addr,e)}function lS(n,e){n.uniform2uiv(this.addr,e)}function cS(n,e){n.uniform3uiv(this.addr,e)}function uS(n,e){n.uniform4uiv(this.addr,e)}function fS(n,e,t){const i=this.cache,s=e.length,r=oa(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=tc:o=Dh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function dS(n,e,t){const i=this.cache,s=e.length,r=oa(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ih,r[o])}function hS(n,e,t){const i=this.cache,s=e.length,r=oa(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uh,r[o])}function pS(n,e,t){const i=this.cache,s=e.length,r=oa(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lh,r[o])}function mS(n){switch(n){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jM(t.type)}}class _S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}}class vS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Df(n,e){n.seq.push(e),n.map[e.id]=e}function xS(n,e,t){const i=n.name,s=i.length;for(Ka.lastIndex=0;;){const r=Ka.exec(i),o=Ka.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Df(t,c===void 0?new gS(a,n,e):new _S(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new vS(a),Df(t,d)),t=d}}}class wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);xS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Lf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MS=37297;let SS=0;function yS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const If=new Je;function ES(n){lt._getMatrix(If,lt.workingColorSpace,n);const e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yS(n.getShaderSource(e),a)}else return r}function bS(n,e){const t=ES(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TS={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[yc]:"ACESFilmic",[ah]:"AgX",[lh]:"Neutral",[oh]:"Custom"};function AS(n,e){const t=TS[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new $;function wS(){lt.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function RS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function Nf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(DS,IS)}const LS=new Map;function IS(n,e){let t=it[e];if(t===void 0){const i=LS.get(e);if(i!==void 0)t=it[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(n){return n.replace(US,NS)}function NS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const FS={[yo]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function OS(n){return FS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BS={[hs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function kS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":BS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const zS={[Js]:"ENVMAP_MODE_REFRACTION"};function HS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":zS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VS={[nh]:"ENVMAP_BLENDING_MULTIPLY",[a_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function GS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":VS[n.combine]||"ENVMAP_BLENDING_NONE"}function WS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function XS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OS(t),c=kS(t),u=HS(t),d=GS(t),f=WS(t),h=CS(t),_=RS(r),M=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?it.tonemapping_pars_fragment:"",t.toneMapping!==ei?AS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,bS("linearToOutputTexel",t.outputColorSpace),wS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=nc(o),o=Nf(o,t),o=Ff(o,t),a=nc(a),a=Nf(a,t),a=Ff(a,t),o=Of(o),a=Of(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=y+g+o,E=y+p+a,U=Lf(s,s.VERTEX_SHADER,b),A=Lf(s,s.FRAGMENT_SHADER,E);s.attachShader(M,U),s.attachShader(M,A),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function N(F){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(M)||"",ie=s.getShaderInfoLog(U)||"",oe=s.getShaderInfoLog(A)||"",z=W.trim(),j=ie.trim(),V=oe.trim();let G=!0,B=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,U,A);else{const Me=Uf(s,U,"vertex"),Y=Uf(s,A,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+Me+`
`+Y)}else z!==""?Xe("WebGLProgram: Program Info Log:",z):(j===""||V==="")&&(B=!1);B&&(F.diagnostics={runnable:G,programLog:z,vertexShader:{log:j,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(U),s.deleteShader(A),x=new wo(s,M),R=PS(s,M)}let x;this.getUniforms=function(){return x===void 0&&N(this),x};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(M,MS)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=A,this}let $S=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YS(e),t.set(e,i)),i}}class YS{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}}function jS(n){return n===ps||n===ko||n===zo}function KS(n,e,t,i,s,r){const o=new Ic,a=new qS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,R,H,F,W,ie){const oe=F.fog,z=W.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||j,V),B=G&&G.mapping===sa?G.image.height:null,Me=h[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=Y!==void 0?Y.length:0;let Ve=0;z.morphAttributes.position!==void 0&&(Ve=1),z.morphAttributes.normal!==void 0&&(Ve=2),z.morphAttributes.color!==void 0&&(Ve=3);let ot,Ye,de,Pe;if(Me){const Qe=jn[Me];ot=Qe.vertexShader,Ye=Qe.fragmentShader}else ot=x.vertexShader,Ye=x.fragmentShader,a.update(x),de=a.getVertexShaderID(x),Pe=a.getFragmentShaderID(x);const be=n.getRenderTarget(),He=n.state.buffers.depth.getReversed(),We=W.isInstancedMesh===!0,Ge=W.isBatchedMesh===!0,C=!!x.map,I=!!x.matcap,Z=!!G,le=!!x.aoMap,te=!!x.lightMap,ce=!!x.bumpMap,ve=!!x.normalMap,ye=!!x.displacementMap,T=!!x.emissiveMap,ue=!!x.metalnessMap,O=!!x.roughnessMap,D=x.anisotropy>0,L=x.clearcoat>0,ne=x.dispersion>0,v=x.iridescence>0,m=x.sheen>0,P=x.transmission>0,q=D&&!!x.anisotropyMap,se=L&&!!x.clearcoatMap,he=L&&!!x.clearcoatNormalMap,pe=L&&!!x.clearcoatRoughnessMap,K=v&&!!x.iridescenceMap,re=v&&!!x.iridescenceThicknessMap,ge=m&&!!x.sheenColorMap,Re=m&&!!x.sheenRoughnessMap,Te=!!x.specularMap,Ee=!!x.specularColorMap,$e=!!x.specularIntensityMap,Ze=P&&!!x.transmissionMap,ut=P&&!!x.thicknessMap,k=!!x.gradientMap,Ae=!!x.alphaMap,fe=x.alphaTest>0,Ue=!!x.alphaHash,Ce=!!x.extensions;let _e=ei;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Be={shaderID:Me,shaderType:x.type,shaderName:x.name,vertexShader:ot,fragmentShader:Ye,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&W._colorsTexture!==null,instancing:We,instancingColor:We&&W.instanceColor!==null,instancingMorph:We&&W.morphTexture!==null,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:C,matcap:I,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:B,aoMap:le,lightMap:te,bumpMap:ce,normalMap:ve,displacementMap:ye,emissiveMap:T,normalMapObjectSpace:ve&&x.normalMapType===f_,normalMapTangentSpace:ve&&x.normalMapType===Zl,packedNormalMap:ve&&x.normalMapType===Zl&&jS(x.normalMap.format),metalnessMap:ue,roughnessMap:O,anisotropy:D,anisotropyMap:q,clearcoat:L,clearcoatMap:se,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,dispersion:ne,iridescence:v,iridescenceMap:K,iridescenceThicknessMap:re,sheen:m,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:Te,specularColorMap:Ee,specularIntensityMap:$e,transmission:P,transmissionMap:Ze,thicknessMap:ut,gradientMap:k,opaque:x.transparent===!1&&x.blending===qs&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:fe,alphaHash:Ue,combine:x.combine,mapUv:C&&_(x.map.channel),aoMapUv:le&&_(x.aoMap.channel),lightMapUv:te&&_(x.lightMap.channel),bumpMapUv:ce&&_(x.bumpMap.channel),normalMapUv:ve&&_(x.normalMap.channel),displacementMapUv:ye&&_(x.displacementMap.channel),emissiveMapUv:T&&_(x.emissiveMap.channel),metalnessMapUv:ue&&_(x.metalnessMap.channel),roughnessMapUv:O&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(x.sheenRoughnessMap.channel),specularMapUv:Te&&_(x.specularMap.channel),specularColorMapUv:Ee&&_(x.specularColorMap.channel),specularIntensityMapUv:$e&&_(x.specularIntensityMap.channel),transmissionMapUv:Ze&&_(x.transmissionMap.channel),thicknessMapUv:ut&&_(x.thicknessMap.channel),alphaMapUv:Ae&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||D),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(C||Ae),fog:!!oe,useFog:x.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:C&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:T&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&x.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)R.push(H),R.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(p(R,x),y(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function p(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function y(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function b(x){const R=h[x.type];let H;if(R){const F=jn[R];H=c0.clone(F.uniforms)}else H=x.uniforms;return H}function E(x,R){let H=u.get(R);return H!==void 0?++H.usedTimes:(H=new XS(n,R,x,s),c.push(H),u.set(R,H)),H}function U(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function N(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:E,releaseProgram:U,releaseShaderCache:A,programs:c,dispose:N}}function ZS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function JS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,_,M,g,p){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:h,material:_,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:p},n[e]=y):(y.id=f.id,y.object=f,y.geometry=h,y.material=_,y.materialVariant=o(f),y.groupOrder=M,y.renderOrder=f.renderOrder,y.z=g,y.group=p),e++,y}function l(f,h,_,M,g,p){const y=a(f,h,_,M,g,p);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):t.push(y)}function c(f,h,_,M,g,p){const y=a(f,h,_,M,g,p);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,h){t.length>1&&t.sort(f||JS),i.length>1&&i.sort(h||kf),s.length>1&&s.sort(h||kf)}function d(){for(let f=e,h=n.length;f<h;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function QS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new zf,n.set(i,[o])):s>=r.length?(o=new zf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new dt};break;case"SpotLight":t={position:new $,direction:new $,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ny=0;function iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sy(n){const e=new ey,t=ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const s=new $,r=new wt,o=new wt;function a(c){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,_=0,M=0,g=0,p=0,y=0,b=0,E=0,U=0,A=0,N=0;c.sort(iy);for(let R=0,H=c.length;R<H;R++){const F=c[R],W=F.color,ie=F.intensity,oe=F.distance;let z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ps?z=F.shadow.map.texture:z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=W.r*ie,d+=W.g*ie,f+=W.b*ie;else if(F.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(F.sh.coefficients[j],ie);N++}else if(F.isDirectionalLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const V=F.shadow,G=t.get(F);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=z,i.directionalShadowMatrix[h]=F.shadow.matrix,y++}i.directional[h]=j,h++}else if(F.isSpotLight){const j=e.get(F);j.position.setFromMatrixPosition(F.matrixWorld),j.color.copy(W).multiplyScalar(ie),j.distance=oe,j.coneCos=Math.cos(F.angle),j.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),j.decay=F.decay,i.spot[M]=j;const V=F.shadow;if(F.map&&(i.spotLightMap[U]=F.map,U++,V.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[M]=V.matrix,F.castShadow){const G=t.get(F);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=z,E++}M++}else if(F.isRectAreaLight){const j=e.get(F);j.color.copy(W).multiplyScalar(ie),j.halfWidth.set(F.width*.5,0,0),j.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=j,g++}else if(F.isPointLight){const j=e.get(F);if(j.color.copy(F.color).multiplyScalar(F.intensity),j.distance=F.distance,j.decay=F.decay,F.castShadow){const V=F.shadow,G=t.get(F);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=F.shadow.matrix,b++}i.point[_]=j,_++}else if(F.isHemisphereLight){const j=e.get(F);j.skyColor.copy(F.color).multiplyScalar(ie),j.groundColor.copy(F.groundColor).multiplyScalar(ie),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==b||x.numSpotShadows!==E||x.numSpotMaps!==U||x.numLightProbes!==N)&&(i.directional.length=h,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,x.directionalLength=h,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=b,x.numSpotShadows=E,x.numSpotMaps=U,x.numLightProbes=N,i.version=ny++)}function l(c,u){let d=0,f=0,h=0,_=0,M=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const b=c[p];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(b.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),h++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function Hf(n){const e=new sy(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ry(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hf(n),e.set(s,[a])):r>=o.length?(a=new Hf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`,ly=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],cy=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Vf=new wt,fr=new $,Za=new $;function uy(n,e,t){let i=new Oc;const s=new Ke,r=new Ke,o=new Lt,a=new h0,l=new p0,c={},u=t.maxTextureSize,d={[Gi]:_n,[_n]:Gi,[vi]:vi},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new je(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let p=this.type;this.render=function(A,N,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===th&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);const R=n.getRenderTarget(),H=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Si),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ie=p!==this.type;ie&&N.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(z=>z.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,z=A.length;oe<z;oe++){const j=A[oe],V=j.shadow;if(V===void 0){Xe("WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const G=V.getFrameExtents();s.multiply(G),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,V.mapSize.y=r.y));const B=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=B,V.map===null||ie===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pr){if(j.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ti(s.x,s.y,{format:ps,type:wi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),V.map.texture.name=j.name+".shadowMap",V.map.depthTexture=new Qs(s.x,s.y,Zn),V.map.depthTexture.name=j.name+".shadowMapDepth",V.map.depthTexture.format=Ci,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt}else j.isPointLight?(V.map=new Ph(s.x),V.map.depthTexture=new a0(s.x,si)):(V.map=new ti(s.x,s.y),V.map.depthTexture=new Qs(s.x,s.y,si)),V.map.depthTexture.name=j.name+".shadowMap",V.map.depthTexture.format=Ci,this.type===yo?(V.map.depthTexture.compareFunction=B?Pc:Rc,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt);V.camera.updateProjectionMatrix()}const Me=V.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<Me;Y++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(V.map),n.clear());const Se=V.getViewport(Y);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),W.viewport(o)}if(j.isPointLight){const Se=V.camera,Ve=V.matrix,ot=j.distance||Se.far;ot!==Se.far&&(Se.far=ot,Se.updateProjectionMatrix()),fr.setFromMatrixPosition(j.matrixWorld),Se.position.copy(fr),Za.copy(Se.position),Za.add(ly[Y]),Se.up.copy(cy[Y]),Se.lookAt(Za),Se.updateMatrixWorld(),Ve.makeTranslation(-fr.x,-fr.y,-fr.z),Vf.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vf,Se.coordinateSystem,Se.reversedDepth)}else V.updateMatrices(j);i=V.getFrustum(),E(N,x,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===pr&&y(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(R,H,F)};function y(A,N){const x=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(s.x,s.y,{format:ps,type:wi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(N,null,x,f,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(N,null,x,h,M,null)}function b(A,N,x,R){let H=null;const F=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)H=F;else if(H=x.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const W=H.uuid,ie=N.uuid;let oe=c[W];oe===void 0&&(oe={},c[W]=oe);let z=oe[ie];z===void 0&&(z=H.clone(),oe[ie]=z,N.addEventListener("dispose",U)),H=z}if(H.visible=N.visible,H.wireframe=N.wireframe,R===pr?H.side=N.shadowSide!==null?N.shadowSide:N.side:H.side=N.shadowSide!==null?N.shadowSide:d[N.side],H.alphaMap=N.alphaMap,H.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,H.map=N.map,H.clipShadows=N.clipShadows,H.clippingPlanes=N.clippingPlanes,H.clipIntersection=N.clipIntersection,H.displacementMap=N.displacementMap,H.displacementScale=N.displacementScale,H.displacementBias=N.displacementBias,H.wireframeLinewidth=N.wireframeLinewidth,H.linewidth=N.linewidth,x.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const W=n.properties.get(H);W.light=x}return H}function E(A,N,x,R,H){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&H===pr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),oe=A.material;if(Array.isArray(oe)){const z=ie.groups;for(let j=0,V=z.length;j<V;j++){const G=z[j],B=oe[G.materialIndex];if(B&&B.visible){const Me=b(A,B,R,H);A.onBeforeShadow(n,A,N,x,ie,Me,G),n.renderBufferDirect(x,null,ie,Me,A,G),A.onAfterShadow(n,A,N,x,ie,Me,G)}}}else if(oe.visible){const z=b(A,oe,R,H);A.onBeforeShadow(n,A,N,x,ie,z,null),n.renderBufferDirect(x,null,ie,z,A,null),A.onAfterShadow(n,A,N,x,ie,z,null)}}const W=A.children;for(let ie=0,oe=W.length;ie<oe;ie++)E(W[ie],N,x,R,H)}function U(A){A.target.removeEventListener("dispose",U);for(const x in c){const R=c[x],H=A.target.uuid;H in R&&(R[H].dispose(),delete R[H])}}}function fy(n,e){function t(){let k=!1;const Ae=new Lt;let fe=null;const Ue=new Lt(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!k&&(n.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,_e,Be,Qe,It){It===!0&&(Ce*=Qe,_e*=Qe,Be*=Qe),Ae.set(Ce,_e,Be,Qe),Ue.equals(Ae)===!1&&(n.clearColor(Ce,_e,Be,Qe),Ue.copy(Ae))},reset:function(){k=!1,fe=null,Ue.set(-1,0,0,0)}}}function i(){let k=!1,Ae=!1,fe=null,Ue=null,Ce=null;return{setReversed:function(_e){if(Ae!==_e){const Be=e.get("EXT_clip_control");_e?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const Qe=Ce;Ce=null,this.setClear(Qe)}},getReversed:function(){return Ae},setTest:function(_e){_e?be(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(_e){fe!==_e&&!k&&(n.depthMask(_e),fe=_e)},setFunc:function(_e){if(Ae&&(_e=S_[_e]),Ue!==_e){switch(_e){case hl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=_e}},setLocked:function(_e){k=_e},setClear:function(_e){Ce!==_e&&(Ce=_e,Ae&&(_e=1-_e),n.clearDepth(_e))},reset:function(){k=!1,fe=null,Ue=null,Ce=null,Ae=!1}}}function s(){let k=!1,Ae=null,fe=null,Ue=null,Ce=null,_e=null,Be=null,Qe=null,It=null;return{setTest:function(_t){k||(_t?be(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(_t){Ae!==_t&&!k&&(n.stencilMask(_t),Ae=_t)},setFunc:function(_t,oi,kn){(fe!==_t||Ue!==oi||Ce!==kn)&&(n.stencilFunc(_t,oi,kn),fe=_t,Ue=oi,Ce=kn)},setOp:function(_t,oi,kn){(_e!==_t||Be!==oi||Qe!==kn)&&(n.stencilOp(_t,oi,kn),_e=_t,Be=oi,Qe=kn)},setLocked:function(_t){k=_t},setClear:function(_t){It!==_t&&(n.clearStencil(_t),It=_t)},reset:function(){k=!1,Ae=null,fe=null,Ue=null,Ce=null,_e=null,Be=null,Qe=null,It=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],M=null,g=!1,p=null,y=null,b=null,E=null,U=null,A=null,N=null,x=new dt(0,0,0),R=0,H=!1,F=null,W=null,ie=null,oe=null,z=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=G>=2);let Me=null,Y={};const Se=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),ot=new Lt().fromArray(Se),Ye=new Lt().fromArray(Ve);function de(k,Ae,fe,Ue){const Ce=new Uint8Array(4),_e=n.createTexture();n.bindTexture(k,_e),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<fe;Be++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Ae+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return _e}const Pe={};Pe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(n.DEPTH_TEST),o.setFunc(Zs),ce(!1),ve(Bu),be(n.CULL_FACE),le(Si);function be(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function He(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function We(k,Ae){return f[k]!==Ae?(n.bindFramebuffer(k,Ae),f[k]=Ae,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ae),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ge(k,Ae){let fe=_,Ue=!1;if(k){fe=h.get(Ae),fe===void 0&&(fe=[],h.set(Ae,fe));const Ce=k.textures;if(fe.length!==Ce.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Be=Ce.length;_e<Be;_e++)fe[_e]=n.COLOR_ATTACHMENT0+_e;fe.length=Ce.length,Ue=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(fe)}function C(k){return M!==k?(n.useProgram(k),M=k,!0):!1}const I={[ss]:n.FUNC_ADD,[Wg]:n.FUNC_SUBTRACT,[Xg]:n.FUNC_REVERSE_SUBTRACT};I[$g]=n.MIN,I[qg]=n.MAX;const Z={[Yg]:n.ZERO,[jg]:n.ONE,[Kg]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[n_]:n.SRC_ALPHA_SATURATE,[e_]:n.DST_COLOR,[Jg]:n.DST_ALPHA,[Zg]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[t_]:n.ONE_MINUS_DST_COLOR,[Qg]:n.ONE_MINUS_DST_ALPHA,[i_]:n.CONSTANT_COLOR,[s_]:n.ONE_MINUS_CONSTANT_COLOR,[r_]:n.CONSTANT_ALPHA,[o_]:n.ONE_MINUS_CONSTANT_ALPHA};function le(k,Ae,fe,Ue,Ce,_e,Be,Qe,It,_t){if(k===Si){g===!0&&(He(n.BLEND),g=!1);return}if(g===!1&&(be(n.BLEND),g=!0),k!==Gg){if(k!==p||_t!==H){if((y!==ss||U!==ss)&&(n.blendEquation(n.FUNC_ADD),y=ss,U=ss),_t)switch(k){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ku:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",k);break}else switch(k){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ku:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zu:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",k);break}b=null,E=null,A=null,N=null,x.set(0,0,0),R=0,p=k,H=_t}return}Ce=Ce||Ae,_e=_e||fe,Be=Be||Ue,(Ae!==y||Ce!==U)&&(n.blendEquationSeparate(I[Ae],I[Ce]),y=Ae,U=Ce),(fe!==b||Ue!==E||_e!==A||Be!==N)&&(n.blendFuncSeparate(Z[fe],Z[Ue],Z[_e],Z[Be]),b=fe,E=Ue,A=_e,N=Be),(Qe.equals(x)===!1||It!==R)&&(n.blendColor(Qe.r,Qe.g,Qe.b,It),x.copy(Qe),R=It),p=k,H=!1}function te(k,Ae){k.side===vi?He(n.CULL_FACE):be(n.CULL_FACE);let fe=k.side===_n;Ae&&(fe=!fe),ce(fe),k.blending===qs&&k.transparent===!1?le(Si):le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ue=k.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),T(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){F!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),F=k)}function ve(k){k!==Hg?(be(n.CULL_FACE),k!==W&&(k===Bu?n.cullFace(n.BACK):k===Vg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),W=k}function ye(k){k!==ie&&(V&&n.lineWidth(k),ie=k)}function T(k,Ae,fe){k?(be(n.POLYGON_OFFSET_FILL),(oe!==Ae||z!==fe)&&(oe=Ae,z=fe,o.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,fe))):He(n.POLYGON_OFFSET_FILL)}function ue(k){k?be(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function O(k){k===void 0&&(k=n.TEXTURE0+j-1),Me!==k&&(n.activeTexture(k),Me=k)}function D(k,Ae,fe){fe===void 0&&(Me===null?fe=n.TEXTURE0+j-1:fe=Me);let Ue=Y[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},Y[fe]=Ue),(Ue.type!==k||Ue.texture!==Ae)&&(Me!==fe&&(n.activeTexture(fe),Me=fe),n.bindTexture(k,Ae||Pe[k]),Ue.type=k,Ue.texture=Ae)}function L(){const k=Y[Me];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(k){ft("WebGLState:",k)}}function v(){try{n.compressedTexImage3D(...arguments)}catch(k){ft("WebGLState:",k)}}function m(){try{n.texSubImage2D(...arguments)}catch(k){ft("WebGLState:",k)}}function P(){try{n.texSubImage3D(...arguments)}catch(k){ft("WebGLState:",k)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ft("WebGLState:",k)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ft("WebGLState:",k)}}function he(){try{n.texStorage2D(...arguments)}catch(k){ft("WebGLState:",k)}}function pe(){try{n.texStorage3D(...arguments)}catch(k){ft("WebGLState:",k)}}function K(){try{n.texImage2D(...arguments)}catch(k){ft("WebGLState:",k)}}function re(){try{n.texImage3D(...arguments)}catch(k){ft("WebGLState:",k)}}function ge(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Re(k,Ae){d[k]!==Ae&&(n.pixelStorei(k,Ae),d[k]=Ae)}function Te(k){ot.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ot.copy(k))}function Ee(k){Ye.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ye.copy(k))}function $e(k,Ae){let fe=c.get(Ae);fe===void 0&&(fe=new WeakMap,c.set(Ae,fe));let Ue=fe.get(k);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ae,k.name),fe.set(k,Ue))}function Ze(k,Ae){const Ue=c.get(Ae).get(k);l.get(Ae)!==Ue&&(n.uniformBlockBinding(Ae,Ue,k.__bindingPointIndex),l.set(Ae,Ue))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Me=null,Y={},f={},h=new WeakMap,_=[],M=null,g=!1,p=null,y=null,b=null,E=null,U=null,A=null,N=null,x=new dt(0,0,0),R=0,H=!1,F=null,W=null,ie=null,oe=null,z=null,ot.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:be,disable:He,bindFramebuffer:We,drawBuffers:Ge,useProgram:C,setBlending:le,setMaterial:te,setFlipSided:ce,setCullFace:ve,setLineWidth:ye,setPolygonOffset:T,setScissorTest:ue,activeTexture:O,bindTexture:D,unbindTexture:L,compressedTexImage2D:ne,compressedTexImage3D:v,texImage2D:K,texImage3D:re,pixelStorei:Re,getParameter:ge,updateUBOMapping:$e,uniformBlockBinding:Ze,texStorage2D:he,texStorage3D:pe,texSubImage2D:m,texSubImage3D:P,compressedTexSubImage2D:q,compressedTexSubImage3D:se,scissor:Te,viewport:Ee,reset:ut}}function dy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(v,m){return _?new OffscreenCanvas(v,m):Ur("canvas")}function g(v,m,P){let q=1;const se=ne(v);if((se.width>P||se.height>P)&&(q=P/Math.max(se.width,se.height)),q<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const he=Math.floor(q*se.width),pe=Math.floor(q*se.height);f===void 0&&(f=M(he,pe));const K=m?M(he,pe):f;return K.width=he,K.height=pe,K.getContext("2d").drawImage(v,0,0,he,pe),Xe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+he+"x"+pe+")."),K}else return"data"in v&&Xe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),v;return v}function p(v){return v.generateMipmaps}function y(v){n.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,m,P,q,se,he=!1){if(v!==null){if(n[v]!==void 0)return n[v];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===n.RED&&(P===n.FLOAT&&(K=n.R32F),P===n.HALF_FLOAT&&(K=n.R16F),P===n.UNSIGNED_BYTE&&(K=n.R8),P===n.UNSIGNED_SHORT&&pe&&(K=pe.R16_EXT),P===n.SHORT&&pe&&(K=pe.R16_SNORM_EXT)),m===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.R8UI),P===n.UNSIGNED_SHORT&&(K=n.R16UI),P===n.UNSIGNED_INT&&(K=n.R32UI),P===n.BYTE&&(K=n.R8I),P===n.SHORT&&(K=n.R16I),P===n.INT&&(K=n.R32I)),m===n.RG&&(P===n.FLOAT&&(K=n.RG32F),P===n.HALF_FLOAT&&(K=n.RG16F),P===n.UNSIGNED_BYTE&&(K=n.RG8),P===n.UNSIGNED_SHORT&&pe&&(K=pe.RG16_EXT),P===n.SHORT&&pe&&(K=pe.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RG8UI),P===n.UNSIGNED_SHORT&&(K=n.RG16UI),P===n.UNSIGNED_INT&&(K=n.RG32UI),P===n.BYTE&&(K=n.RG8I),P===n.SHORT&&(K=n.RG16I),P===n.INT&&(K=n.RG32I)),m===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RGB8UI),P===n.UNSIGNED_SHORT&&(K=n.RGB16UI),P===n.UNSIGNED_INT&&(K=n.RGB32UI),P===n.BYTE&&(K=n.RGB8I),P===n.SHORT&&(K=n.RGB16I),P===n.INT&&(K=n.RGB32I)),m===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),P===n.UNSIGNED_INT&&(K=n.RGBA32UI),P===n.BYTE&&(K=n.RGBA8I),P===n.SHORT&&(K=n.RGBA16I),P===n.INT&&(K=n.RGBA32I)),m===n.RGB&&(P===n.UNSIGNED_SHORT&&pe&&(K=pe.RGB16_EXT),P===n.SHORT&&pe&&(K=pe.RGB16_SNORM_EXT),P===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),m===n.RGBA){const re=he?Vo:lt.getTransfer(se);P===n.FLOAT&&(K=n.RGBA32F),P===n.HALF_FLOAT&&(K=n.RGBA16F),P===n.UNSIGNED_BYTE&&(K=re===gt?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT&&pe&&(K=pe.RGBA16_EXT),P===n.SHORT&&pe&&(K=pe.RGBA16_SNORM_EXT),P===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function U(v,m){let P;return v?m===null||m===si||m===Lr?P=n.DEPTH24_STENCIL8:m===Zn?P=n.DEPTH32F_STENCIL8:m===Dr&&(P=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===si||m===Lr?P=n.DEPTH_COMPONENT24:m===Zn?P=n.DEPTH_COMPONENT32F:m===Dr&&(P=n.DEPTH_COMPONENT16),P}function A(v,m){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==qt&&v.minFilter!==tn?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function N(v){const m=v.target;m.removeEventListener("dispose",N),R(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&d.delete(m)}function x(v){const m=v.target;m.removeEventListener("dispose",x),F(m)}function R(v){const m=i.get(v);if(m.__webglInit===void 0)return;const P=v.source,q=h.get(P);if(q){const se=q[m.__cacheKey];se.usedTimes--,se.usedTimes===0&&H(v),Object.keys(q).length===0&&h.delete(P)}i.remove(v)}function H(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const P=v.source,q=h.get(P);delete q[m.__cacheKey],o.memory.textures--}function F(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(m.__webglFramebuffer[q]))for(let se=0;se<m.__webglFramebuffer[q].length;se++)n.deleteFramebuffer(m.__webglFramebuffer[q][se]);else n.deleteFramebuffer(m.__webglFramebuffer[q]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[q])}else{if(Array.isArray(m.__webglFramebuffer))for(let q=0;q<m.__webglFramebuffer.length;q++)n.deleteFramebuffer(m.__webglFramebuffer[q]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let q=0;q<m.__webglColorRenderbuffer.length;q++)m.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[q]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const P=v.textures;for(let q=0,se=P.length;q<se;q++){const he=i.get(P[q]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(P[q])}i.remove(v)}let W=0;function ie(){W=0}function oe(){return W}function z(v){W=v}function j(){const v=W;return v>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),W+=1,v}function V(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function G(v,m){const P=i.get(v);if(v.isVideoTexture&&D(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){const q=v.image;if(q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{He(P,v,m);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+m)}function B(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){He(P,v,m);return}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+m)}function Me(v,m){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){He(P,v,m);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+m)}function Y(v,m){const P=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&P.__version!==v.version){We(P,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+m)}const Se={[Bo]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},Ve={[qt]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Sa]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},ot={[d_]:n.NEVER,[__]:n.ALWAYS,[h_]:n.LESS,[Rc]:n.LEQUAL,[p_]:n.EQUAL,[Pc]:n.GEQUAL,[m_]:n.GREATER,[g_]:n.NOTEQUAL};function Ye(v,m){if(m.type===Zn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===tn||m.magFilter===Sa||m.magFilter===qr||m.magFilter===ls||m.minFilter===tn||m.minFilter===Sa||m.minFilter===qr||m.minFilter===ls)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,Se[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,Se[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,Se[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Ve[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Ve[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,ot[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===qt||m.minFilter!==qr&&m.minFilter!==ls||m.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function de(v,m){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",N));const q=m.source;let se=h.get(q);se===void 0&&(se={},h.set(q,se));const he=V(m);if(he!==v.__cacheKey){se[he]===void 0&&(se[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),se[he].usedTimes++;const pe=se[v.__cacheKey];pe!==void 0&&(se[v.__cacheKey].usedTimes--,pe.usedTimes===0&&H(m)),v.__cacheKey=he,v.__webglTexture=se[he].texture}return P}function Pe(v,m,P){return Math.floor(Math.floor(v/P)/m)}function be(v,m,P,q){const he=v.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,P,q,m.data);else{he.sort((Re,Te)=>Re.start-Te.start);let pe=0;for(let Re=1;Re<he.length;Re++){const Te=he[pe],Ee=he[Re],$e=Te.start+Te.count,Ze=Pe(Ee.start,m.width,4),ut=Pe(Te.start,m.width,4);Ee.start<=$e+1&&Ze===ut&&Pe(Ee.start+Ee.count-1,m.width,4)===Ze?Te.count=Math.max(Te.count,Ee.start+Ee.count-Te.start):(++pe,he[pe]=Ee)}he.length=pe+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let Re=0,Te=he.length;Re<Te;Re++){const Ee=he[Re],$e=Math.floor(Ee.start/4),Ze=Math.ceil(Ee.count/4),ut=$e%m.width,k=Math.floor($e/m.width),Ae=Ze,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,ut,k,Ae,fe,P,q,m.data)}v.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function He(v,m,P){let q=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(q=n.TEXTURE_3D);const se=de(v,m),he=m.source;t.bindTexture(q,v.__webglTexture,n.TEXTURE0+P);const pe=i.get(he);if(he.version!==pe.__version||se===!0){if(t.activeTexture(n.TEXTURE0+P),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const fe=lt.getPrimaries(lt.workingColorSpace),Ue=m.colorSpace===Hi?null:lt.getPrimaries(m.colorSpace),Ce=m.colorSpace===Hi||fe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let re=g(m.image,!1,s.maxTextureSize);re=L(m,re);const ge=r.convert(m.format,m.colorSpace),Re=r.convert(m.type);let Te=E(m.internalFormat,ge,Re,m.normalized,m.colorSpace,m.isVideoTexture);Ye(q,m);let Ee;const $e=m.mipmaps,Ze=m.isVideoTexture!==!0,ut=pe.__version===void 0||se===!0,k=he.dataReady,Ae=A(m,re);if(m.isDepthTexture)Te=U(m.format===cs,m.type),ut&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Te,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,ge,Re,null));else if(m.isDataTexture)if($e.length>0){Ze&&ut&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,$e[0].width,$e[0].height);for(let fe=0,Ue=$e.length;fe<Ue;fe++)Ee=$e[fe],Ze?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ge,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,ge,Re,Ee.data);m.generateMipmaps=!1}else Ze?(ut&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,re.width,re.height),k&&be(m,re,ge,Re)):t.texImage2D(n.TEXTURE_2D,0,Te,re.width,re.height,0,ge,Re,re.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ze&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,$e[0].width,$e[0].height,re.depth);for(let fe=0,Ue=$e.length;fe<Ue;fe++)if(Ee=$e[fe],m.format!==Un)if(ge!==null)if(Ze){if(k)if(m.layerUpdates.size>0){const Ce=xf(Ee.width,Ee.height,m.format,m.type);for(const _e of m.layerUpdates){const Be=Ee.data.subarray(_e*Ce/Ee.data.BYTES_PER_ELEMENT,(_e+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,_e,Ee.width,Ee.height,1,ge,Be)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,re.depth,ge,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Te,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,re.depth,ge,Re,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Te,Ee.width,Ee.height,re.depth,0,ge,Re,Ee.data)}else{Ze&&ut&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,$e[0].width,$e[0].height);for(let fe=0,Ue=$e.length;fe<Ue;fe++)Ee=$e[fe],m.format!==Un?ge!==null?Ze?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ge,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,Ee.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,ge,Re,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,Te,Ee.width,Ee.height,0,ge,Re,Ee.data)}else if(m.isDataArrayTexture)if(Ze){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,re.width,re.height,re.depth),k)if(m.layerUpdates.size>0){const fe=xf(re.width,re.height,m.format,m.type);for(const Ue of m.layerUpdates){const Ce=re.data.subarray(Ue*fe/re.data.BYTES_PER_ELEMENT,(Ue+1)*fe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,re.width,re.height,1,ge,Re,Ce)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Re,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,ge,Re,re.data);else if(m.isData3DTexture)Ze?(ut&&t.texStorage3D(n.TEXTURE_3D,Ae,Te,re.width,re.height,re.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Re,re.data)):t.texImage3D(n.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,ge,Re,re.data);else if(m.isFramebufferTexture){if(ut)if(Ze)t.texStorage2D(n.TEXTURE_2D,Ae,Te,re.width,re.height);else{let fe=re.width,Ue=re.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Te,fe,Ue,0,ge,Re,null),fe>>=1,Ue>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),re.parentNode!==fe){fe.appendChild(re),d.add(m),fe.onpaint=Qe=>{const It=Qe.changedElements;for(const _t of d)It.includes(_t.image)&&(_t.needsUpdate=!0)},fe.requestPaint();return}const Ue=0,Ce=n.RGBA,_e=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ue,Ce,_e,Be,re),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ze&&ut){const fe=ne($e[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Te,fe.width,fe.height)}for(let fe=0,Ue=$e.length;fe<Ue;fe++)Ee=$e[fe],Ze?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,ge,Re,Ee):t.texImage2D(n.TEXTURE_2D,fe,Te,ge,Re,Ee);m.generateMipmaps=!1}else if(Ze){if(ut){const fe=ne(re);t.texStorage2D(n.TEXTURE_2D,Ae,Te,fe.width,fe.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Re,re)}else t.texImage2D(n.TEXTURE_2D,0,Te,ge,Re,re);p(m)&&y(q),pe.__version=he.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function We(v,m,P){if(m.image.length!==6)return;const q=de(v,m),se=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+P);const he=i.get(se);if(se.version!==he.__version||q===!0){t.activeTexture(n.TEXTURE0+P);const pe=lt.getPrimaries(lt.workingColorSpace),K=m.colorSpace===Hi?null:lt.getPrimaries(m.colorSpace),re=m.colorSpace===Hi||pe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=m.isCompressedTexture||m.image[0].isCompressedTexture,Re=m.image[0]&&m.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!ge&&!Re?Te[_e]=g(m.image[_e],!0,s.maxCubemapSize):Te[_e]=Re?m.image[_e].image:m.image[_e],Te[_e]=L(m,Te[_e]);const Ee=Te[0],$e=r.convert(m.format,m.colorSpace),Ze=r.convert(m.type),ut=E(m.internalFormat,$e,Ze,m.normalized,m.colorSpace),k=m.isVideoTexture!==!0,Ae=he.__version===void 0||q===!0,fe=se.dataReady;let Ue=A(m,Ee);Ye(n.TEXTURE_CUBE_MAP,m);let Ce;if(ge){k&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ut,Ee.width,Ee.height);for(let _e=0;_e<6;_e++){Ce=Te[_e].mipmaps;for(let Be=0;Be<Ce.length;Be++){const Qe=Ce[Be];m.format!==Un?$e!==null?k?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,0,0,Qe.width,Qe.height,$e,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,ut,Qe.width,Qe.height,0,Qe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,0,0,Qe.width,Qe.height,$e,Ze,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,ut,Qe.width,Qe.height,0,$e,Ze,Qe.data)}}}else{if(Ce=m.mipmaps,k&&Ae){Ce.length>0&&Ue++;const _e=ne(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ut,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Re){k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,$e,Ze,Te[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,Te[_e].width,Te[_e].height,0,$e,Ze,Te[_e].data);for(let Be=0;Be<Ce.length;Be++){const It=Ce[Be].image[_e].image;k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,0,0,It.width,It.height,$e,Ze,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,ut,It.width,It.height,0,$e,Ze,It.data)}}else{k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,$e,Ze,Te[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,$e,Ze,Te[_e]);for(let Be=0;Be<Ce.length;Be++){const Qe=Ce[Be];k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,0,0,$e,Ze,Qe.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,ut,$e,Ze,Qe.image[_e])}}}p(m)&&y(n.TEXTURE_CUBE_MAP),he.__version=se.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function Ge(v,m,P,q,se,he){const pe=r.convert(P.format,P.colorSpace),K=r.convert(P.type),re=E(P.internalFormat,pe,K,P.normalized,P.colorSpace),ge=i.get(m),Re=i.get(P);if(Re.__renderTarget=m,!ge.__hasExternalTextures){const Te=Math.max(1,m.width>>he),Ee=Math.max(1,m.height>>he);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,he,re,Te,Ee,m.depth,0,pe,K,null):t.texImage2D(se,he,re,Te,Ee,0,pe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),O(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,se,Re.__webglTexture,0,ue(m)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,se,Re.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(v,m,P){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const q=m.depthTexture,se=q&&q.isDepthTexture?q.type:null,he=U(m.stencilBuffer,se),pe=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;O(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(m),he,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(m),he,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,he,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,v)}else{const q=m.textures;for(let se=0;se<q.length;se++){const he=q[se],pe=r.convert(he.format,he.colorSpace),K=r.convert(he.type),re=E(he.internalFormat,pe,K,he.normalized,he.colorSpace);O(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(m),re,m.width,m.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(m),re,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,re,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(v,m,P){const q=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(m.depthTexture);if(se.__renderTarget=m,(!se.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q){if(se.__webglInit===void 0&&(se.__webglInit=!0,m.depthTexture.addEventListener("dispose",N)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,m.depthTexture);const ge=r.convert(m.depthTexture.format),Re=r.convert(m.depthTexture.type);let Te;m.depthTexture.format===Ci?Te=n.DEPTH_COMPONENT24:m.depthTexture.format===cs&&(Te=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,m.width,m.height,0,ge,Re,null)}}else G(m.depthTexture,0);const he=se.__webglTexture,pe=ue(m),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,re=m.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Ci)O(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,K,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,K,he,0);else if(m.depthTexture.format===cs)O(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,K,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,K,he,0);else throw new Error("Unknown depthTexture format")}function Z(v){const m=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const q=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),q){const se=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,q.removeEventListener("dispose",se)};q.addEventListener("dispose",se),m.__depthDisposeCallback=se}m.__boundDepthTexture=q}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(P)for(let q=0;q<6;q++)I(m.__webglFramebuffer[q],v,q);else{const q=v.texture.mipmaps;q&&q.length>0?I(m.__webglFramebuffer[0],v,0):I(m.__webglFramebuffer,v,0)}else if(P){m.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[q]),m.__webglDepthbuffer[q]===void 0)m.__webglDepthbuffer[q]=n.createRenderbuffer(),C(m.__webglDepthbuffer[q],v,!1);else{const se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=m.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,he)}}else{const q=v.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),C(m.__webglDepthbuffer,v,!1);else{const se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(v,m,P){const q=i.get(v);m!==void 0&&Ge(q.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Z(v)}function te(v){const m=v.texture,P=i.get(v),q=i.get(m);v.addEventListener("dispose",x);const se=v.textures,he=v.isWebGLCubeRenderTarget===!0,pe=se.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=m.version,o.memory.textures++),he){P.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[K]=[];for(let re=0;re<m.mipmaps.length;re++)P.__webglFramebuffer[K][re]=n.createFramebuffer()}else P.__webglFramebuffer[K]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)P.__webglFramebuffer[K]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(pe)for(let K=0,re=se.length;K<re;K++){const ge=i.get(se[K]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&O(v)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let K=0;K<se.length;K++){const re=se[K];P.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[K]);const ge=r.convert(re.format,re.colorSpace),Re=r.convert(re.type),Te=E(re.internalFormat,ge,Re,re.normalized,re.colorSpace,v.isXRRenderTarget===!0),Ee=ue(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Te,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,P.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),C(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let re=0;re<m.mipmaps.length;re++)Ge(P.__webglFramebuffer[K][re],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re);else Ge(P.__webglFramebuffer[K],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(m)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let K=0,re=se.length;K<re;K++){const ge=se[K],Re=i.get(ge);let Te=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Te=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Re.__webglTexture),Ye(Te,ge),Ge(P.__webglFramebuffer,v,ge,n.COLOR_ATTACHMENT0+K,Te,0),p(ge)&&y(Te)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(K=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),Ye(K,m),m.mipmaps&&m.mipmaps.length>0)for(let re=0;re<m.mipmaps.length;re++)Ge(P.__webglFramebuffer[re],v,m,n.COLOR_ATTACHMENT0,K,re);else Ge(P.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,K,0);p(m)&&y(K),t.unbindTexture()}v.depthBuffer&&Z(v)}function ce(v){const m=v.textures;for(let P=0,q=m.length;P<q;P++){const se=m[P];if(p(se)){const he=b(v),pe=i.get(se).__webglTexture;t.bindTexture(he,pe),y(he),t.unbindTexture()}}}const ve=[],ye=[];function T(v){if(v.samples>0){if(O(v)===!1){const m=v.textures,P=v.width,q=v.height;let se=n.COLOR_BUFFER_BIT;const he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(v),K=m.length>1;if(K)for(let ge=0;ge<m.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=v.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<m.length;ge++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Re=i.get(m[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,P,q,0,0,P,q,se,n.NEAREST),l===!0&&(ve.length=0,ye.length=0,ve.push(n.COLOR_ATTACHMENT0+ge),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ve.push(he),ye.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ge=0;ge<m.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Re=i.get(m[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function ue(v){return Math.min(s.maxSamples,v.samples)}function O(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function D(v){const m=o.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function L(v,m){const P=v.colorSpace,q=v.format,se=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==Ho&&P!==Hi&&(lt.getTransfer(P)===gt?(q!==Un||se!==yn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",P)),m}function ne(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=ie,this.getTextureUnits=oe,this.setTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Me,this.setTextureCube=Y,this.rebindTextures=le,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hy(n,e){function t(i,s=Hi){let r;const o=lt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uh)return n.BYTE;if(i===fh)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===si)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===wi)return n.HALF_FLOAT;if(i===ph)return n.ALPHA;if(i===mh)return n.RGB;if(i===Un)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===gh)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===ps)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Eo||i===bo||i===To||i===Ao)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===yl||i===El||i===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===ko||i===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return r.COMPRESSED_R11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ko)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===$l||i===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===jl||i===zo||i===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`;class gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _y extends $i{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",g=new gy,p={},y=t.getContextAttributes();let b=null,E=null;const U=[],A=[],N=new Ke;let x=null;const R=new An;R.viewport=new Lt;const H=new An;H.viewport=new Lt;const F=[R,H],W=new b0;let ie=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let Pe=U[de];return Pe===void 0&&(Pe=new wa,U[de]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(de){let Pe=U[de];return Pe===void 0&&(Pe=new wa,U[de]=Pe),Pe.getGripSpace()},this.getHand=function(de){let Pe=U[de];return Pe===void 0&&(Pe=new wa,U[de]=Pe),Pe.getHandSpace()};function z(de){const Pe=A.indexOf(de.inputSource);if(Pe===-1)return;const be=U[Pe];be!==void 0&&(be.update(de.inputSource,de.frame,c||o),be.dispatchEvent({type:de.type,data:de.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",V);for(let de=0;de<U.length;de++){const Pe=A[de];Pe!==null&&(A[de]=null,U[de].disconnect(Pe))}ie=null,oe=null,g.reset();for(const de in p)delete p[de];e.setRenderTarget(b),h=null,f=null,d=null,s=null,E=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){r=de,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){a=de,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(de){c=de},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(de){if(s=de,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,We=null;y.depth&&(We=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?cs:Ci,He=y.stencil?Lr:si);const Ge={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ti(f.textureWidth,f.textureHeight,{format:Un,type:yn,depthTexture:new Qs(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new ti(h.framebufferWidth,h.framebufferHeight,{format:Un,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(de){for(let Pe=0;Pe<de.removed.length;Pe++){const be=de.removed[Pe],He=A.indexOf(be);He>=0&&(A[He]=null,U[He].disconnect(be))}for(let Pe=0;Pe<de.added.length;Pe++){const be=de.added[Pe];let He=A.indexOf(be);if(He===-1){for(let Ge=0;Ge<U.length;Ge++)if(Ge>=A.length){A.push(be),He=Ge;break}else if(A[Ge]===null){A[Ge]=be,He=Ge;break}if(He===-1)break}const We=U[He];We&&We.connect(be)}}const G=new $,B=new $;function Me(de,Pe,be){G.setFromMatrixPosition(Pe.matrixWorld),B.setFromMatrixPosition(be.matrixWorld);const He=G.distanceTo(B),We=Pe.projectionMatrix.elements,Ge=be.projectionMatrix.elements,C=We[14]/(We[10]-1),I=We[14]/(We[10]+1),Z=(We[9]+1)/We[5],le=(We[9]-1)/We[5],te=(We[8]-1)/We[0],ce=(Ge[8]+1)/Ge[0],ve=C*te,ye=C*ce,T=He/(-te+ce),ue=T*-te;if(Pe.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(ue),de.translateZ(T),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),We[10]===-1)de.projectionMatrix.copy(Pe.projectionMatrix),de.projectionMatrixInverse.copy(Pe.projectionMatrixInverse);else{const O=C+T,D=I+T,L=ve-ue,ne=ye+(He-ue),v=Z*I/D*O,m=le*I/D*O;de.projectionMatrix.makePerspective(L,ne,v,m,O,D),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function Y(de,Pe){Pe===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(Pe.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(s===null)return;let Pe=de.near,be=de.far;g.texture!==null&&(g.depthNear>0&&(Pe=g.depthNear),g.depthFar>0&&(be=g.depthFar)),W.near=H.near=R.near=Pe,W.far=H.far=R.far=be,(ie!==W.near||oe!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),ie=W.near,oe=W.far),W.layers.mask=de.layers.mask|6,R.layers.mask=W.layers.mask&-5,H.layers.mask=W.layers.mask&-3;const He=de.parent,We=W.cameras;Y(W,He);for(let Ge=0;Ge<We.length;Ge++)Y(We[Ge],He);We.length===2?Me(W,R,H):W.projectionMatrix.copy(R.projectionMatrix),Se(de,W,He)};function Se(de,Pe,be){be===null?de.matrix.copy(Pe.matrixWorld):(de.matrix.copy(be.matrixWorld),de.matrix.invert(),de.matrix.multiply(Pe.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Pe.projectionMatrix),de.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=Nr*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(de){l=de,f!==null&&(f.fixedFoveation=de),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=de)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(de){return p[de]};let Ve=null;function ot(de,Pe){if(u=Pe.getViewerPose(c||o),_=Pe,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let He=!1;be.length!==W.cameras.length&&(W.cameras.length=0,He=!0);for(let I=0;I<be.length;I++){const Z=be[I];let le=null;if(h!==null)le=h.getViewport(Z);else{const ce=d.getViewSubImage(f,Z);le=ce.viewport,I===0&&(e.setRenderTargetTextures(E,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(E))}let te=F[I];te===void 0&&(te=new An,te.layers.enable(I),te.viewport=new Lt,F[I]=te),te.matrix.fromArray(Z.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Z.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(le.x,le.y,le.width,le.height),I===0&&(W.matrix.copy(te.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),He===!0&&W.cameras.push(te)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const I=d.getDepthInformation(be[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(We&&We.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<be.length;I++){const Z=be[I].camera;if(Z){let le=p[Z];le||(le=new bh,p[Z]=le);const te=d.getCameraImage(Z);le.sourceTexture=te}}}}for(let be=0;be<U.length;be++){const He=A[be],We=U[be];He!==null&&We!==void 0&&We.update(He,Pe,c||o)}Ve&&Ve(de,Pe),Pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Pe}),_=null}const Ye=new Ch;Ye.setAnimationLoop(ot),this.setAnimationLoop=function(de){Ve=de},this.dispose=function(){}}}const vy=new wt,Nh=new Je;Nh.set(-1,0,0,0,1,0,0,0,1);function xy(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Th(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,b,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),b=y.envMap,E=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function My(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(_(y),E=u(y),s[y.id]=E,y.addEventListener("dispose",g));const U=b.program;i.updateUBOMapping(y,U);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const b=d();y.__bindingPointIndex=b;const E=n.createBuffer(),U=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=s[y.id],E=y.uniforms,U=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,N=E.length;A<N;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let R=0,H=x.length;R<H;R++){const F=x[R];if(h(F,A,R,U)===!0){const W=F.__offset,ie=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let z=0;z<ie.length;z++){const j=ie[z],V=M(j);typeof j=="number"||typeof j=="boolean"?(F.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+oe,F.__data)):j.isMatrix3?(F.__data[0]=j.elements[0],F.__data[1]=j.elements[1],F.__data[2]=j.elements[2],F.__data[3]=0,F.__data[4]=j.elements[3],F.__data[5]=j.elements[4],F.__data[6]=j.elements[5],F.__data[7]=0,F.__data[8]=j.elements[6],F.__data[9]=j.elements[7],F.__data[10]=j.elements[8],F.__data[11]=0):ArrayBuffer.isView(j)?F.__data.set(new j.constructor(j.buffer,j.byteOffset,F.__data.length)):(j.toArray(F.__data,oe),oe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,b,E,U){const A=y.value,N=b+"_"+E;if(U[N]===void 0)return typeof A=="number"||typeof A=="boolean"?U[N]=A:ArrayBuffer.isView(A)?U[N]=A.slice():U[N]=A.clone(),!0;{const x=U[N];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return U[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(x.equals(A)===!1)return x.copy(A),!0}}return!1}function _(y){const b=y.uniforms;let E=0;const U=16;for(let N=0,x=b.length;N<x;N++){const R=Array.isArray(b[N])?b[N]:[b[N]];for(let H=0,F=R.length;H<F;H++){const W=R[H],ie=Array.isArray(W.value)?W.value:[W.value];for(let oe=0,z=ie.length;oe<z;oe++){const j=ie[oe],V=M(j),G=E%U,B=G%V.boundary,Me=G+B;E+=B,Me!==0&&U-Me<V.storage&&(E+=U-Me),W.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=V.storage}}}const A=E%U;return A>0&&(E+=U-A),y.__size=E,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){const b=y.target;b.removeEventListener("dispose",g);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Sy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function yy(){return Gn===null&&(Gn=new i0(Sy,16,16,ps,wi),Gn.name="DFG_LUT",Gn.minFilter=tn,Gn.magFilter=tn,Gn.wrapS=Mi,Gn.wrapT=Mi,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Ey{constructor(e={}){const{canvas:t=x_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=yn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const M=h,g=new Set([Cc,wc,Ac]),p=new Set([yn,si,Dr,Lr,bc,Tc]),y=new Uint32Array(4),b=new Int32Array(4),E=new $;let U=null,A=null;const N=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let F=!1,W=null;this._outputColorSpace=mn;let ie=0,oe=0,z=null,j=-1,V=null;const G=new Lt,B=new Lt;let Me=null;const Y=new dt(0);let Se=0,Ve=t.width,ot=t.height,Ye=1,de=null,Pe=null;const be=new Lt(0,0,Ve,ot),He=new Lt(0,0,Ve,ot);let We=!1;const Ge=new Oc;let C=!1,I=!1;const Z=new wt,le=new $,te=new Lt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function ye(){return z===null?Ye:1}let T=i;function ue(S,X){return t.getContext(S,X)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),T===null){const X="webgl2";if(T=ue(X,S),T===null)throw ue(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ft("WebGLRenderer: "+S.message),S}let O,D,L,ne,v,m,P,q,se,he,pe,K,re,ge,Re,Te,Ee,$e,Ze,ut,k,Ae,fe;function Ue(){O=new yM(T),O.init(),k=new hy(T,O),D=new pM(T,O,e,k),L=new fy(T,O),D.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),ne=new TM(T),v=new ZS,m=new dy(T,O,L,v,D,k,ne),P=new SM(H),q=new R0(T),Ae=new dM(T,q),se=new EM(T,q,ne,Ae),he=new wM(T,se,q,Ae,ne),$e=new AM(T,D,m),Re=new mM(v),pe=new KS(H,P,O,D,Ae,Re),K=new xy(H,v),re=new QS,ge=new ry(O),Ee=new fM(H,P,L,he,_,l),Te=new uy(H,he,D),fe=new My(T,ne,D,L),Ze=new hM(T,O,ne),ut=new bM(T,O,ne),ne.programs=pe.programs,H.capabilities=D,H.extensions=O,H.properties=v,H.renderLists=re,H.shadowMap=Te,H.state=L,H.info=ne}Ue(),M!==yn&&(R=new RM(M,t.width,t.height,s,r));const Ce=new _y(H,T);this.xr=Ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const S=O.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=O.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(S){S!==void 0&&(Ye=S,this.setSize(Ve,ot,!1))},this.getSize=function(S){return S.set(Ve,ot)},this.setSize=function(S,X,ee=!0){if(Ce.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=S,ot=X,t.width=Math.floor(S*Ye),t.height=Math.floor(X*Ye),ee===!0&&(t.style.width=S+"px",t.style.height=X+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,S,X)},this.getDrawingBufferSize=function(S){return S.set(Ve*Ye,ot*Ye).floor()},this.setDrawingBufferSize=function(S,X,ee){Ve=S,ot=X,Ye=ee,t.width=Math.floor(S*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,S,X)},this.setEffects=function(S){if(M===yn){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let X=0;X<S.length;X++)if(S[X].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,X,ee,J){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,X,ee,J),L.viewport(G.copy(be).multiplyScalar(Ye).round())},this.getScissor=function(S){return S.copy(He)},this.setScissor=function(S,X,ee,J){S.isVector4?He.set(S.x,S.y,S.z,S.w):He.set(S,X,ee,J),L.scissor(B.copy(He).multiplyScalar(Ye).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){L.setScissorTest(We=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){Pe=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(S=!0,X=!0,ee=!0){let J=0;if(S){let Q=!1;if(z!==null){const Ie=z.texture.format;Q=g.has(Ie)}if(Q){const Ie=z.texture.type,Fe=p.has(Ie),Le=Ee.getClearColor(),Oe=Ee.getClearAlpha(),ke=Le.r,et=Le.g,st=Le.b;Fe?(y[0]=ke,y[1]=et,y[2]=st,y[3]=Oe,T.clearBufferuiv(T.COLOR,0,y)):(b[0]=ke,b[1]=et,b[2]=st,b[3]=Oe,T.clearBufferiv(T.COLOR,0,b))}else J|=T.COLOR_BUFFER_BIT}X&&(J|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&T.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),W=S},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),Ee.dispose(),re.dispose(),ge.dispose(),v.dispose(),P.dispose(),he.dispose(),Ae.dispose(),fe.dispose(),pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",qc),Ce.removeEventListener("sessionend",Yc),qi.stop()};function _e(S){S.preventDefault(),$u("WebGLRenderer: Context Lost."),F=!0}function Be(){$u("WebGLRenderer: Context Restored."),F=!1;const S=ne.autoReset,X=Te.enabled,ee=Te.autoUpdate,J=Te.needsUpdate,Q=Te.type;Ue(),ne.autoReset=S,Te.enabled=X,Te.autoUpdate=ee,Te.needsUpdate=J,Te.type=Q}function Qe(S){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const X=S.target;X.removeEventListener("dispose",It),_t(X)}function _t(S){oi(S),v.remove(S)}function oi(S){const X=v.get(S).programs;X!==void 0&&(X.forEach(function(ee){pe.releaseProgram(ee)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,X,ee,J,Q,Ie){X===null&&(X=ce);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=kh(S,X,ee,J,Q);L.setMaterial(J,Fe);let Oe=ee.index,ke=1;if(J.wireframe===!0){if(Oe=se.getWireframeAttribute(ee),Oe===void 0)return;ke=2}const et=ee.drawRange,st=ee.attributes.position;let ze=et.start*ke,vt=(et.start+et.count)*ke;Ie!==null&&(ze=Math.max(ze,Ie.start*ke),vt=Math.min(vt,(Ie.start+Ie.count)*ke)),Oe!==null?(ze=Math.max(ze,0),vt=Math.min(vt,Oe.count)):st!=null&&(ze=Math.max(ze,0),vt=Math.min(vt,st.count));const Ut=vt-ze;if(Ut<0||Ut===1/0)return;Ae.setup(Q,J,Le,ee,Oe);let Pt,St=Ze;if(Oe!==null&&(Pt=q.get(Oe),St=ut,St.setIndex(Pt)),Q.isMesh)J.wireframe===!0?(L.setLineWidth(J.wireframeLinewidth*ye()),St.setMode(T.LINES)):St.setMode(T.TRIANGLES);else if(Q.isLine){let jt=J.linewidth;jt===void 0&&(jt=1),L.setLineWidth(jt*ye()),Q.isLineSegments?St.setMode(T.LINES):Q.isLineLoop?St.setMode(T.LINE_LOOP):St.setMode(T.LINE_STRIP)}else Q.isPoints?St.setMode(T.POINTS):Q.isSprite&&St.setMode(T.TRIANGLES);if(Q.isBatchedMesh)if(O.get("WEBGL_multi_draw"))St.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const jt=Q._multiDrawStarts,Ne=Q._multiDrawCounts,vn=Q._multiDrawCount,ht=Oe?q.get(Oe).bytesPerElement:1,bn=v.get(J).currentProgram.getUniforms();for(let zn=0;zn<vn;zn++)bn.setValue(T,"_gl_DrawID",zn),St.render(jt[zn]/ht,Ne[zn])}else if(Q.isInstancedMesh)St.renderInstances(ze,Ut,Q.count);else if(ee.isInstancedBufferGeometry){const jt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ne=Math.min(ee.instanceCount,jt);St.renderInstances(ze,Ut,Ne)}else St.render(ze,Ut)};function kn(S,X,ee){S.transparent===!0&&S.side===vi&&S.forceSinglePass===!1?(S.side=_n,S.needsUpdate=!0,Gr(S,X,ee),S.side=Gi,S.needsUpdate=!0,Gr(S,X,ee),S.side=vi):Gr(S,X,ee)}this.compile=function(S,X,ee=null){ee===null&&(ee=S),A=ge.get(ee),A.init(X),x.push(A),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),S!==ee&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights();const J=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){const Le=Ie[Fe];kn(Le,ee,Q),J.add(Le)}else kn(Ie,ee,Q),J.add(Ie)}),A=x.pop(),J},this.compileAsync=function(S,X,ee=null){const J=this.compile(S,X,ee);return new Promise(Q=>{function Ie(){if(J.forEach(function(Fe){v.get(Fe).currentProgram.isReady()&&J.delete(Fe)}),J.size===0){Q(S);return}setTimeout(Ie,10)}O.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let aa=null;function Oh(S){aa&&aa(S)}function qc(){qi.stop()}function Yc(){qi.start()}const qi=new Ch;qi.setAnimationLoop(Oh),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){aa=S,Ce.setAnimationLoop(S),S===null?qi.stop():qi.start()},Ce.addEventListener("sessionstart",qc),Ce.addEventListener("sessionend",Yc),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(S,X);const ee=Ce.enabled===!0&&Ce.isPresenting===!0,J=R!==null&&(z===null||ee)&&R.begin(H,z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(H,S,X,z),A=ge.get(S,x.length),A.init(X),A.state.textureUnits=m.getTextureUnits(),x.push(A),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(Z,Jn,X.reversedDepth),I=this.localClippingEnabled,C=Re.init(this.clippingPlanes,I),U=re.get(S,N.length),U.init(),N.push(U),Ce.enabled===!0&&Ce.isPresenting===!0){const Fe=H.xr.getDepthSensingMesh();Fe!==null&&la(Fe,X,-1/0,H.sortObjects)}la(S,X,0,H.sortObjects),U.finish(),H.sortObjects===!0&&U.sort(de,Pe),ve=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ve&&Ee.addToRenderList(U,S),this.info.render.frame++,C===!0&&Re.beginShadows();const Q=A.state.shadowsArray;if(Te.render(Q,S,X),C===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&R.hasRenderPass())===!1){const Fe=U.opaque,Le=U.transmissive;if(A.setupLights(),X.isArrayCamera){const Oe=X.cameras;if(Le.length>0)for(let ke=0,et=Oe.length;ke<et;ke++){const st=Oe[ke];Kc(Fe,Le,S,st)}ve&&Ee.render(S);for(let ke=0,et=Oe.length;ke<et;ke++){const st=Oe[ke];jc(U,S,st,st.viewport)}}else Le.length>0&&Kc(Fe,Le,S,X),ve&&Ee.render(S),jc(U,S,X)}z!==null&&oe===0&&(m.updateMultisampleRenderTarget(z),m.updateRenderTargetMipmap(z)),J&&R.end(H),S.isScene===!0&&S.onAfterRender(H,S,X),Ae.resetDefaultState(),j=-1,V=null,x.pop(),x.length>0?(A=x[x.length-1],m.setTextureUnits(A.state.textureUnits),C===!0&&Re.setGlobalState(H.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?U=N[N.length-1]:U=null,W!==null&&W.renderEnd()};function la(S,X,ee,J){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)ee=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ge.intersectsSprite(S)){J&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const Fe=he.update(S),Le=S.material;Le.visible&&U.push(S,Fe,Le,ee,te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ge.intersectsObject(S))){const Fe=he.update(S),Le=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),te.copy(Fe.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(Le)){const Oe=Fe.groups;for(let ke=0,et=Oe.length;ke<et;ke++){const st=Oe[ke],ze=Le[st.materialIndex];ze&&ze.visible&&U.push(S,Fe,ze,ee,te.z,st)}}else Le.visible&&U.push(S,Fe,Le,ee,te.z,null)}}const Ie=S.children;for(let Fe=0,Le=Ie.length;Fe<Le;Fe++)la(Ie[Fe],X,ee,J)}function jc(S,X,ee,J){const{opaque:Q,transmissive:Ie,transparent:Fe}=S;A.setupLightsView(ee),C===!0&&Re.setGlobalState(H.clippingPlanes,ee),J&&L.viewport(G.copy(J)),Q.length>0&&Vr(Q,X,ee),Ie.length>0&&Vr(Ie,X,ee),Fe.length>0&&Vr(Fe,X,ee),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Kc(S,X,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[J.id]===void 0){const ze=O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[J.id]=new ti(1,1,{generateMipmaps:!0,type:ze?wi:yn,minFilter:ls,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ie=A.state.transmissionRenderTarget[J.id],Fe=J.viewport||G;Ie.setSize(Fe.z*H.transmissionResolutionScale,Fe.w*H.transmissionResolutionScale);const Le=H.getRenderTarget(),Oe=H.getActiveCubeFace(),ke=H.getActiveMipmapLevel();H.setRenderTarget(Ie),H.getClearColor(Y),Se=H.getClearAlpha(),Se<1&&H.setClearColor(16777215,.5),H.clear(),ve&&Ee.render(ee);const et=H.toneMapping;H.toneMapping=ei;const st=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),A.setupLightsView(J),C===!0&&Re.setGlobalState(H.clippingPlanes,J),Vr(S,ee,J),m.updateMultisampleRenderTarget(Ie),m.updateRenderTargetMipmap(Ie),O.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let vt=0,Ut=X.length;vt<Ut;vt++){const Pt=X[vt],{object:St,geometry:jt,material:Ne,group:vn}=Pt;if(Ne.side===vi&&St.layers.test(J.layers)){const ht=Ne.side;Ne.side=_n,Ne.needsUpdate=!0,Zc(St,ee,J,jt,Ne,vn),Ne.side=ht,Ne.needsUpdate=!0,ze=!0}}ze===!0&&(m.updateMultisampleRenderTarget(Ie),m.updateRenderTargetMipmap(Ie))}H.setRenderTarget(Le,Oe,ke),H.setClearColor(Y,Se),st!==void 0&&(J.viewport=st),H.toneMapping=et}function Vr(S,X,ee){const J=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ie=S.length;Q<Ie;Q++){const Fe=S[Q],{object:Le,geometry:Oe,group:ke}=Fe;let et=Fe.material;et.allowOverride===!0&&J!==null&&(et=J),Le.layers.test(ee.layers)&&Zc(Le,X,ee,Oe,et,ke)}}function Zc(S,X,ee,J,Q,Ie){S.onBeforeRender(H,X,ee,J,Q,Ie),S.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(H,X,ee,J,S,Ie),Q.transparent===!0&&Q.side===vi&&Q.forceSinglePass===!1?(Q.side=_n,Q.needsUpdate=!0,H.renderBufferDirect(ee,X,J,Q,S,Ie),Q.side=Gi,Q.needsUpdate=!0,H.renderBufferDirect(ee,X,J,Q,S,Ie),Q.side=vi):H.renderBufferDirect(ee,X,J,Q,S,Ie),S.onAfterRender(H,X,ee,J,Q,Ie)}function Gr(S,X,ee){X.isScene!==!0&&(X=ce);const J=v.get(S),Q=A.state.lights,Ie=A.state.shadowsArray,Fe=Q.state.version,Le=pe.getParameters(S,Q.state,Ie,X,ee,A.state.lightProbeGridArray),Oe=pe.getProgramCacheKey(Le);let ke=J.programs;J.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;const et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;J.envMap=P.get(S.envMap||J.environment,et),J.envMapRotation=J.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",It),ke=new Map,J.programs=ke);let st=ke.get(Oe);if(st!==void 0){if(J.currentProgram===st&&J.lightsStateVersion===Fe)return Qc(S,Le),st}else Le.uniforms=pe.getUniforms(S),W!==null&&S.isNodeMaterial&&W.build(S,ee,Le),S.onBeforeCompile(Le,H),st=pe.acquireProgram(Le,Oe),ke.set(Oe,st),J.uniforms=Le.uniforms;const ze=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=Re.uniform),Qc(S,Le),J.needsLights=Hh(S),J.lightsStateVersion=Fe,J.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=A.state.lightProbeGridArray.length>0,J.currentProgram=st,J.uniformsList=null,st}function Jc(S){if(S.uniformsList===null){const X=S.currentProgram.getUniforms();S.uniformsList=wo.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function Qc(S,X){const ee=v.get(S);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Bh(S,X){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(X.matrixWorld);for(let ee=0,J=S.length;ee<J;ee++){const Q=S[ee];if(Q.texture!==null&&Q.boundingBox.containsPoint(E))return Q}return null}function kh(S,X,ee,J,Q){X.isScene!==!0&&(X=ce),m.resetTextureUnits();const Ie=X.fog,Fe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,Le=z===null?H.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:lt.workingColorSpace,Oe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ke=P.get(J.envMap||Fe,Oe),et=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,Ut=!!ee.morphAttributes.color;let Pt=ei;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=H.toneMapping);const St=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,jt=St!==void 0?St.length:0,Ne=v.get(J),vn=A.state.lights;if(C===!0&&(I===!0||S!==V)){const bt=S===V&&J.id===j;Re.setState(J,S,bt)}let ht=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==vn.state.version||Ne.outputColorSpace!==Le||Q.isBatchedMesh&&Ne.batching===!1||!Q.isBatchedMesh&&Ne.batching===!0||Q.isBatchedMesh&&Ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ne.instancing===!1||!Q.isInstancedMesh&&Ne.instancing===!0||Q.isSkinnedMesh&&Ne.skinning===!1||!Q.isSkinnedMesh&&Ne.skinning===!0||Q.isInstancedMesh&&Ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ne.instancingMorph===!1&&Q.morphTexture!==null||Ne.envMap!==ke||J.fog===!0&&Ne.fog!==Ie||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Re.numPlanes||Ne.numIntersection!==Re.numIntersection)||Ne.vertexAlphas!==et||Ne.vertexTangents!==st||Ne.morphTargets!==ze||Ne.morphNormals!==vt||Ne.morphColors!==Ut||Ne.toneMapping!==Pt||Ne.morphTargetsCount!==jt||!!Ne.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ne.__version=J.version);let bn=Ne.currentProgram;ht===!0&&(bn=Gr(J,X,Q),W&&J.isNodeMaterial&&W.onUpdateProgram(J,bn,Ne));let zn=!1,Pi=!1,gs=!1;const yt=bn.getUniforms(),Nt=Ne.uniforms;if(L.useProgram(bn.program)&&(zn=!0,Pi=!0,gs=!0),J.id!==j&&(j=J.id,Pi=!0),Ne.needsLights){const bt=Bh(A.state.lightProbeGridArray,Q);Ne.lightProbeGrid!==bt&&(Ne.lightProbeGrid=bt,Pi=!0)}if(zn||V!==S){L.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),yt.setValue(T,"projectionMatrix",S.projectionMatrix),yt.setValue(T,"viewMatrix",S.matrixWorldInverse);const Li=yt.map.cameraPosition;Li!==void 0&&Li.setValue(T,le.setFromMatrixPosition(S.matrixWorld)),D.logarithmicDepthBuffer&&yt.setValue(T,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(T,"isOrthographic",S.isOrthographicCamera===!0),V!==S&&(V=S,Pi=!0,gs=!0)}if(Ne.needsLights&&(vn.state.directionalShadowMap.length>0&&yt.setValue(T,"directionalShadowMap",vn.state.directionalShadowMap,m),vn.state.spotShadowMap.length>0&&yt.setValue(T,"spotShadowMap",vn.state.spotShadowMap,m),vn.state.pointShadowMap.length>0&&yt.setValue(T,"pointShadowMap",vn.state.pointShadowMap,m)),Q.isSkinnedMesh){yt.setOptional(T,Q,"bindMatrix"),yt.setOptional(T,Q,"bindMatrixInverse");const bt=Q.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(T,"boneTexture",bt.boneTexture,m))}Q.isBatchedMesh&&(yt.setOptional(T,Q,"batchingTexture"),yt.setValue(T,"batchingTexture",Q._matricesTexture,m),yt.setOptional(T,Q,"batchingIdTexture"),yt.setValue(T,"batchingIdTexture",Q._indirectTexture,m),yt.setOptional(T,Q,"batchingColorTexture"),Q._colorsTexture!==null&&yt.setValue(T,"batchingColorTexture",Q._colorsTexture,m));const Di=ee.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&$e.update(Q,ee,bn),(Pi||Ne.receiveShadow!==Q.receiveShadow)&&(Ne.receiveShadow=Q.receiveShadow,yt.setValue(T,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(Nt.envMapIntensity.value=X.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=yy()),Pi){if(yt.setValue(T,"toneMappingExposure",H.toneMappingExposure),Ne.needsLights&&zh(Nt,gs),Ie&&J.fog===!0&&K.refreshFogUniforms(Nt,Ie),K.refreshMaterialUniforms(Nt,J,Ye,ot,A.state.transmissionRenderTarget[S.id]),Ne.needsLights&&Ne.lightProbeGrid){const bt=Ne.lightProbeGrid;Nt.probesSH.value=bt.texture,Nt.probesMin.value.copy(bt.boundingBox.min),Nt.probesMax.value.copy(bt.boundingBox.max),Nt.probesResolution.value.copy(bt.resolution)}wo.upload(T,Jc(Ne),Nt,m)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wo.upload(T,Jc(Ne),Nt,m),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(T,"center",Q.center),yt.setValue(T,"modelViewMatrix",Q.modelViewMatrix),yt.setValue(T,"normalMatrix",Q.normalMatrix),yt.setValue(T,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){const bt=J.uniformsGroups;for(let Li=0,_s=bt.length;Li<_s;Li++){const eu=bt[Li];fe.update(eu,bn),fe.bind(eu,bn)}}return bn}function zh(S,X){S.ambientLightColor.needsUpdate=X,S.lightProbe.needsUpdate=X,S.directionalLights.needsUpdate=X,S.directionalLightShadows.needsUpdate=X,S.pointLights.needsUpdate=X,S.pointLightShadows.needsUpdate=X,S.spotLights.needsUpdate=X,S.spotLightShadows.needsUpdate=X,S.rectAreaLights.needsUpdate=X,S.hemisphereLights.needsUpdate=X}function Hh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,X,ee){const J=v.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),v.get(S.texture).__webglTexture=X,v.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,X){const ee=v.get(S);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const Vh=T.createFramebuffer();this.setRenderTarget=function(S,X=0,ee=0){z=S,ie=X,oe=ee;let J=null,Q=!1,Ie=!1;if(S){const Le=v.get(S);if(Le.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(T.FRAMEBUFFER,Le.__webglFramebuffer),G.copy(S.viewport),B.copy(S.scissor),Me=S.scissorTest,L.viewport(G),L.scissor(B),L.setScissorTest(Me),j=-1;return}else if(Le.__webglFramebuffer===void 0)m.setupRenderTarget(S);else if(Le.__hasExternalTextures)m.rebindTextures(S,v.get(S.texture).__webglTexture,v.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const et=S.depthTexture;if(Le.__boundDepthTexture!==et){if(et!==null&&v.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ie=!0);const ke=v.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?J=ke[X][ee]:J=ke[X],Q=!0):S.samples>0&&m.useMultisampledRTT(S)===!1?J=v.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?J=ke[ee]:J=ke,G.copy(S.viewport),B.copy(S.scissor),Me=S.scissorTest}else G.copy(be).multiplyScalar(Ye).floor(),B.copy(He).multiplyScalar(Ye).floor(),Me=We;if(ee!==0&&(J=Vh),L.bindFramebuffer(T.FRAMEBUFFER,J)&&L.drawBuffers(S,J),L.viewport(G),L.scissor(B),L.setScissorTest(Me),Q){const Le=v.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ee)}else if(Ie){const Le=X;for(let Oe=0;Oe<S.textures.length;Oe++){const ke=v.get(S.textures[Oe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Oe,ke.__webglTexture,ee,Le)}}else if(S!==null&&ee!==0){const Le=v.get(S.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Le.__webglTexture,ee)}j=-1},this.readRenderTargetPixels=function(S,X,ee,J,Q,Ie,Fe,Le=0){if(!(S&&S.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(Oe=Oe[Fe]),Oe){L.bindFramebuffer(T.FRAMEBUFFER,Oe);try{const ke=S.textures[Le],et=ke.format,st=ke.type;if(S.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(et)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(st)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=S.width-J&&ee>=0&&ee<=S.height-Q&&T.readPixels(X,ee,J,Q,k.convert(et),k.convert(st),Ie)}finally{const ke=z!==null?v.get(z).__webglFramebuffer:null;L.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,X,ee,J,Q,Ie,Fe,Le=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=v.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(Oe=Oe[Fe]),Oe)if(X>=0&&X<=S.width-J&&ee>=0&&ee<=S.height-Q){L.bindFramebuffer(T.FRAMEBUFFER,Oe);const ke=S.textures[Le],et=ke.format,st=ke.type;if(S.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,Ie.byteLength,T.STREAM_READ),T.readPixels(X,ee,J,Q,k.convert(et),k.convert(st),0);const vt=z!==null?v.get(z).__webglFramebuffer:null;L.bindFramebuffer(T.FRAMEBUFFER,vt);const Ut=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await M_(T,Ut,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ie),T.deleteBuffer(ze),T.deleteSync(Ut),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,X=null,ee=0){const J=Math.pow(2,-ee),Q=Math.floor(S.image.width*J),Ie=Math.floor(S.image.height*J),Fe=X!==null?X.x:0,Le=X!==null?X.y:0;m.setTexture2D(S,0),T.copyTexSubImage2D(T.TEXTURE_2D,ee,0,0,Fe,Le,Q,Ie),L.unbindTexture()};const Gh=T.createFramebuffer(),Wh=T.createFramebuffer();this.copyTextureToTexture=function(S,X,ee=null,J=null,Q=0,Ie=0){let Fe,Le,Oe,ke,et,st,ze,vt,Ut;const Pt=S.isCompressedTexture?S.mipmaps[Ie]:S.image;if(ee!==null)Fe=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,ke=ee.min.x,et=ee.min.y,st=ee.isBox3?ee.min.z:0;else{const Nt=Math.pow(2,-Q);Fe=Math.floor(Pt.width*Nt),Le=Math.floor(Pt.height*Nt),S.isDataArrayTexture?Oe=Pt.depth:S.isData3DTexture?Oe=Math.floor(Pt.depth*Nt):Oe=1,ke=0,et=0,st=0}J!==null?(ze=J.x,vt=J.y,Ut=J.z):(ze=0,vt=0,Ut=0);const St=k.convert(X.format),jt=k.convert(X.type);let Ne;X.isData3DTexture?(m.setTexture3D(X,0),Ne=T.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(m.setTexture2DArray(X,0),Ne=T.TEXTURE_2D_ARRAY):(m.setTexture2D(X,0),Ne=T.TEXTURE_2D),L.activeTexture(T.TEXTURE0),L.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(T.UNPACK_ALIGNMENT,X.unpackAlignment);const vn=L.getParameter(T.UNPACK_ROW_LENGTH),ht=L.getParameter(T.UNPACK_IMAGE_HEIGHT),bn=L.getParameter(T.UNPACK_SKIP_PIXELS),zn=L.getParameter(T.UNPACK_SKIP_ROWS),Pi=L.getParameter(T.UNPACK_SKIP_IMAGES);L.pixelStorei(T.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(T.UNPACK_SKIP_ROWS,et),L.pixelStorei(T.UNPACK_SKIP_IMAGES,st);const gs=S.isDataArrayTexture||S.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(S.isDepthTexture){const Nt=v.get(S),Di=v.get(X),bt=v.get(Nt.__renderTarget),Li=v.get(Di.__renderTarget);L.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let _s=0;_s<Oe;_s++)gs&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,v.get(S).__webglTexture,Q,st+_s),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,v.get(X).__webglTexture,Ie,Ut+_s)),T.blitFramebuffer(ke,et,Fe,Le,ze,vt,Fe,Le,T.DEPTH_BUFFER_BIT,T.NEAREST);L.bindFramebuffer(T.READ_FRAMEBUFFER,null),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||v.has(S)){const Nt=v.get(S),Di=v.get(X);L.bindFramebuffer(T.READ_FRAMEBUFFER,Gh),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,Wh);for(let bt=0;bt<Oe;bt++)gs?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,Q,st+bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Nt.__webglTexture,Q),yt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Di.__webglTexture,Ie,Ut+bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Di.__webglTexture,Ie),Q!==0?T.blitFramebuffer(ke,et,Fe,Le,ze,vt,Fe,Le,T.COLOR_BUFFER_BIT,T.NEAREST):yt?T.copyTexSubImage3D(Ne,Ie,ze,vt,Ut+bt,ke,et,Fe,Le):T.copyTexSubImage2D(Ne,Ie,ze,vt,ke,et,Fe,Le);L.bindFramebuffer(T.READ_FRAMEBUFFER,null),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else yt?S.isDataTexture||S.isData3DTexture?T.texSubImage3D(Ne,Ie,ze,vt,Ut,Fe,Le,Oe,St,jt,Pt.data):X.isCompressedArrayTexture?T.compressedTexSubImage3D(Ne,Ie,ze,vt,Ut,Fe,Le,Oe,St,Pt.data):T.texSubImage3D(Ne,Ie,ze,vt,Ut,Fe,Le,Oe,St,jt,Pt):S.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ie,ze,vt,Fe,Le,St,jt,Pt.data):S.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ie,ze,vt,Pt.width,Pt.height,St,Pt.data):T.texSubImage2D(T.TEXTURE_2D,Ie,ze,vt,Fe,Le,St,jt,Pt);L.pixelStorei(T.UNPACK_ROW_LENGTH,vn),L.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(T.UNPACK_SKIP_PIXELS,bn),L.pixelStorei(T.UNPACK_SKIP_ROWS,zn),L.pixelStorei(T.UNPACK_SKIP_IMAGES,Pi),Ie===0&&X.generateMipmaps&&T.generateMipmap(Ne),L.unbindTexture()},this.initRenderTarget=function(S){v.get(S).__webglFramebuffer===void 0&&m.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?m.setTextureCube(S,0):S.isData3DTexture?m.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?m.setTexture2DArray(S,0):m.setTexture2D(S,0),L.unbindTexture()},this.resetState=function(){ie=0,oe=0,z=null,L.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Gf={type:"change"},Hc={type:"start"},Fh={type:"end"},go=new Fc,Wf=new zi,by=Math.cos(70*Ql.DEG2RAD),kt=new $,dn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ja=1e-6;class Ty extends w0{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Wi,this._lastTargetPosition=new $,this._quat=new Wi().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _f,this._sphericalDelta=new _f,this._scale=1,this._panOffset=new $,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new $,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wy.bind(this),this._onPointerDown=Ay.bind(this),this._onPointerUp=Cy.bind(this),this._onContextMenu=Ny.bind(this),this._onMouseWheel=Dy.bind(this),this._onKeyDown=Ly.bind(this),this._onTouchStart=Iy.bind(this),this._onTouchMove=Uy.bind(this),this._onMouseDown=Ry.bind(this),this._onMouseMove=Py.bind(this),this._interceptControlDown=Fy.bind(this),this._interceptControlUp=Oy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gf),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(go.origin.copy(this.object.position),go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(go.direction))<by?this.object.lookAt(this.target):(Wf.setFromNormalAndCoplanarPoint(this.object.up,this.target),go.intersectPlane(Wf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ja||this._lastTargetPosition.distanceToSquared(this.target)>Ja?(this.dispatchEvent(Gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ay(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ry(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case $s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case $s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Hc)}function Py(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Dy(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Hc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fh))}function Ly(n){this.enabled!==!1&&this._handleKeyDown(n)}function Iy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Hc)}function Uy(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function Ny(n){this.enabled!==!1&&n.preventDefault()}function Fy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Oy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class By extends Gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ke(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Us=new $,Xf=new wt,$f=new wt,qf=new $,Yf=new $;class ky{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(_,M){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),Xf.copy(M.matrixWorldInverse),$f.multiplyMatrices(M.projectionMatrix,Xf),u(_,_,M),this.sortObjects&&h(_)},this.setSize=function(_,M){i=_,s=M,r=i/2,o=s/2,l.style.width=_+"px",l.style.height=M+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let M=0,g=_.children.length;M<g;M++)c(_.children[M])}function u(_,M,g){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){Us.setFromMatrixPosition(_.matrixWorld),Us.applyMatrix4($f);const p=Us.z>=-1&&Us.z<=1&&_.layers.test(g.layers)===!0,y=_.element;y.style.display=p===!0?"":"none",p===!0&&(_.onBeforeRender(t,M,g),y.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(Us.x*r+r)+"px,"+(-Us.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),_.onAfterRender(t,M,g));const b={distanceToCameraSquared:d(g,_)};a.objects.set(_,b)}for(let p=0,y=_.children.length;p<y;p++)u(_.children[p],M,g)}function d(_,M){return qf.setFromMatrixPosition(_.matrixWorld),Yf.setFromMatrixPosition(M.matrixWorld),qf.distanceToSquared(Yf)}function f(_){const M=[];return _.traverseVisible(function(g){g.isCSS2DObject&&M.push(g)}),M}function h(_){const M=f(_).sort(function(p,y){if(p.renderOrder!==y.renderOrder)return y.renderOrder-p.renderOrder;const b=a.objects.get(p).distanceToCameraSquared,E=a.objects.get(y).distanceToCameraSquared;return b-E}),g=M.length;for(let p=0,y=M.length;p<y;p++)M[p].element.style.zIndex=g-p}}}const zy={key:0,class:"farm-scene-fallback"},Hy={__name:"FarmScene3D",props:{farmGrid:{type:Array,required:!0},unlockedPets:{type:Array,default:()=>[]}},emits:["plot-click"],setup(n,{emit:e}){const t=n,i=e,s=At(null),r=At(""),o={carrot:16750592,tomato:15022389,corn:16771899,strawberry:15483002,pumpkin:16485376,grape:8280002,watermelon:3046706,apple:13840175};let a,l,c,u,d,f=0,h,_=[],M,g,p,y,b,E=!1,U,A,N,x,R=[],H=[];function F(O){return`./${O.replace(/^\//,"")}`}function W(O){const D=document.createElement("div");return D.className="farm-3d-label",D.textContent=O,new By(D)}function ie(O){O&&O.traverse(D=>{D.geometry&&D.geometry.dispose(),D.material&&(Array.isArray(D.material)?D.material:[D.material]).forEach(ne=>{var v;ne.map&&ne.map.dispose(),(v=ne.dispose)==null||v.call(ne)})})}function oe(){h=new Bt,h.name="farmPlots",c.add(h),_=[];for(let D=0;D<9;D++){const L=Math.floor(D/3),v=-7.1+D%3*2.38,m=-2.35+L*2.38,P=new Bt;P.position.set(v,0,m),P.userData.plotIndex=D;const q=new je(new cn(2.12,.08,2.12),new at({color:5125166,roughness:1,metalness:0}));q.position.y=.04,q.receiveShadow=!0,q.castShadow=!0,P.add(q);const se=new je(new xi(1.88,1.88),new at({color:7951688,roughness:1,metalness:0}));se.rotation.x=-Math.PI/2,se.position.y=.085,se.receiveShadow=!0,P.add(se);const he=new Bt;he.position.y=.09,P.add(he),h.add(P),_.push({group:P,soil:se,cropGroup:he,stem:null,fruit:null})}const O=W("种植区");O.position.set(-4.2,2.8,-4.4),c.add(O)}function z(){const O=new Bt;O.position.set(8.2,0,5.4);const D=new je(new cn(3,1.85,3),new at({color:13351844,roughness:.85,metalness:0}));D.position.y=.925,D.castShadow=!0,D.receiveShadow=!0,O.add(D);const L=new je(new rs(2.35,1.35,4),new at({color:12000284,roughness:.55,metalness:.05}));L.position.y=2.35,L.rotation.y=Math.PI/4,L.castShadow=!0,O.add(L);const ne=new je(new xi(.9,1.1),new at({color:5125166,roughness:1}));ne.position.set(0,.85,1.51),O.add(ne);const v=W("鸡舍");v.position.set(0,3.15,0),O.add(v),c.add(O)}function j(){const O=new Bt;O.position.set(9.2,0,-6.2);const D=new je(new cn(5.2,3.4,4.6),new at({color:9268835,roughness:.9,metalness:0}));D.position.y=1.7,D.castShadow=!0,D.receiveShadow=!0,O.add(D);const L=new je(new cn(5.6,.55,4.9),new at({color:6111287,roughness:.75}));L.position.set(0,3.55,0),L.rotation.z=.06,L.castShadow=!0,O.add(L);const ne=new je(new xi(1.8,2.4),new at({color:4073251,roughness:1}));ne.position.set(0,1.25,2.31),O.add(ne);const v=W("畜棚");v.position.set(0,4.2,0),O.add(v),c.add(O)}function V(O,D,L=1,ne=3046706){const v=L,m=new je(new $n(.22*v,.32*v,1.15*v,8),new at({color:6111287,roughness:1}));m.position.set(O,.575*v,D),m.castShadow=!0;const P=new je(new rs(1.35*v,2.4*v,8),new at({color:ne,roughness:.75}));P.position.set(O,2.35*v,D),P.castShadow=!0,c.add(m,P)}function G(O,D,L=.55){const ne=new je(new Xn(L,10,8),new at({color:3706428,roughness:.88}));ne.position.set(O,L*.65,D),ne.scale.y=.65,ne.castShadow=!0,ne.receiveShadow=!0,c.add(ne)}function B(){const O=new Bt,D=new at({color:7162945,roughness:.95}),L=new at({color:9268835,roughness:.9}),ne=new cn(.2,.72,.2),v=new cn(1.85,.1,.1);function m(K,re){const ge=new je(ne,D);ge.position.set(K,.36,re),ge.castShadow=!0,O.add(ge)}const P=-19,q=19,se=-19,he=19,pe=1.85;for(let K=P;K<=q;K+=pe)m(K,se),m(K,he);for(let K=se+pe;K<he;K+=pe)m(P,K),m(q,K);for(let K=P;K<q;K+=pe){const re=new je(v,L);re.position.set(K+pe/2,.52,se),re.castShadow=!0,O.add(re);const ge=re.clone();ge.position.set(K+pe/2,.52,he),O.add(ge)}for(let K=se;K<he;K+=pe){const re=new je(new cn(.1,.1,1.85),L);re.position.set(P,.52,K+pe/2),re.castShadow=!0,O.add(re);const ge=re.clone();ge.position.set(q,.52,K+pe/2),O.add(ge)}c.add(O)}function Me(){const O=new at({color:14142664,roughness:.92}),D=(L,ne,v,m,P=0)=>{const q=new je(new xi(v,m),O);q.rotation.x=-Math.PI/2,q.rotation.z=P,q.position.set(L,.028,ne),q.receiveShadow=!0,c.add(q)};D(2,9,4,14,.12),D(-3,2,3,18,-.08),D(5,-4,16,2.5,.05)}function Y(){const O=new Bt;O.position.set(-14,0,-5);const D=new je(new $n(1.1,1.45,5.2,10),new at({color:14142664,roughness:.85}));D.position.y=2.6,D.castShadow=!0,O.add(D);const L=new je(new rs(1.25,1.2,8),new at({color:10586239,roughness:.7}));L.position.y=5.7,L.castShadow=!0,O.add(L),A=new Bt,A.position.set(0,5.9,0);for(let v=0;v<4;v++){const m=new je(new cn(.35,.08,3.8),new at({color:15723497,roughness:.55}));m.position.z=1.85,m.rotation.y=v*Math.PI/2;const P=new Bt;P.rotation.y=v*Math.PI/2,P.add(m),A.add(P)}O.add(A);const ne=W("风车");ne.position.set(0,7.2,0),O.add(ne),c.add(O)}function Se(){const O=new Bt;O.position.set(12.5,0,-8);const D=new je(new $n(1.35,1.5,5.5,14),new at({color:13621468,roughness:.65,metalness:.15}));D.position.y=2.75,D.castShadow=!0,O.add(D);const L=new je(new rs(1.55,1.1,12),new at({color:11583173,roughness:.55}));L.position.y=6.05,L.castShadow=!0,O.add(L);const ne=W("粮仓");ne.position.set(0,6.8,0),O.add(ne),c.add(O)}function Ve(){const O=new Bt;O.position.set(-7.5,0,9);const D=new je(new Bc(1.15,.22,12,24),new at({color:7901340,roughness:.75}));D.rotation.x=Math.PI/2,D.position.y=.35,D.castShadow=!0,D.receiveShadow=!0,O.add(D);const L=new je(new rs(1.45,1.15,4),new at({color:9268835,roughness:.8}));L.position.y=1.35,L.rotation.y=Math.PI/4,L.castShadow=!0,O.add(L);const ne=new je(new $n(.08,.1,1.6,8),new at({color:6111287}));ne.position.set(.85,1.1,0),ne.castShadow=!0,O.add(ne);const v=W("水井");v.position.set(0,2.5,0),O.add(v),c.add(O)}function ot(){const O=new Bt;O.position.set(-11.5,0,7);const D=new je(new cn(3.2,2.2,2.8),new at({color:10586239,roughness:.88}));D.position.y=1.1,D.castShadow=!0,O.add(D);const L=new je(new $n(0,1.9,2.6,3,1),new at({color:6111287,roughness:.75}));L.position.y=2.65,L.rotation.z=Math.PI/2,L.rotation.y=Math.PI/2,L.castShadow=!0,O.add(L);const ne=W("工具房");ne.position.set(0,3.2,0),O.add(ne),c.add(O)}function Ye(){const O=[15277667,16771899,10233776,16777215,16750592];for(let ne=0;ne<42;ne++){const v=-16+Math.random()*32,m=-16+Math.random()*32;if(Math.abs(v+4)<6&&Math.abs(m+2)<6||Math.abs(v-8)<4&&Math.abs(m-5)<4)continue;const P=new je(new $n(.03,.04,.22,6),new at({color:5606191}));P.position.set(v,.14,m);const q=new je(new Xn(.12,8,6),new at({color:O[ne%O.length],roughness:.4}));q.position.set(v,.28,m),P.castShadow=!0,q.castShadow=!0,c.add(P,q)}const D=new at({color:13943976,roughness:.95});[[-9,4],[4,11],[-14,-6],[15,-4],[6,8]].forEach(([ne,v])=>{const m=new je(new cn(1.1,.75,.85),D);m.position.set(ne,.38,v),m.rotation.y=Math.random()*Math.PI,m.castShadow=!0,m.receiveShadow=!0,c.add(m)})}function de(){V(-15.5,5.5,.85,1793568),V(16,-8,.72,3369246),V(-8,-14,.95,3046706),V(12,12,.68,4431943),G(-5.5,11,.5),G(3.2,-11,.62),G(-15,-12,.48),G(14,6,.55),G(-3.5,-8.5,.44)}function Pe(){N=new Bt;const O=new at({color:6111287,roughness:.8});for(let D=0;D<6;D++){const L=new je(new Xn(.11,8,8),O);L.userData.orbitR=10+D*.9,L.userData.orbitSpeed=.12+D*.02,L.userData.orbitPhase=D*1.1,L.userData.alt=6.5+D%4*.55,N.add(L)}c.add(N)}function be(){M=new Bt,c.add(M),x=new Bt,c.add(x),Ge(),C()}function He(O,D){var m;return((m={chicken:new $(-4+D*.4,.38,5),rabbit:new $(3.5,.38,6),dog:new $(-8,.38,-1),cat:new $(-1,.38,-5),horse:new $(6,.38,-4)}[O])==null?void 0:m.clone())??new $(-2+D*1.2,.38,3+D*.5)}function We(O){return O==="horse"?7.2:O==="dog"||O==="cat"?8:5.8}function Ge(){if(!M)return;for(R=[];M.children.length>0;){const D=M.children[0];M.remove(D),ie(D)}const O={chicken:16771899,dog:9268835,cat:16750592,rabbit:16119285,horse:7162945};t.unlockedPets.forEach((D,L)=>{const ne=new je(new Xn(.38,18,14),new at({color:O[D]??13619151,roughness:.45,metalness:.05})),v=He(D,L);ne.position.copy(v),ne.castShadow=!0,ne.userData.petId=D,M.add(ne),R.push({mesh:ne,petId:D,home:v.clone(),phase:L*2.1+Math.random()*2.5,radius:We(D),speed:D==="horse"?.38:D==="chicken"?.62:.48})})}function C(){if(!x)return;for(H=[];x.children.length>0;){const D=x.children[0];x.remove(D),ie(D)}[{kind:"chick",color:16771899,scale:.22,x:-5,z:7},{kind:"chick",color:16773494,scale:.2,x:-4.2,z:7.8},{kind:"duck",color:16766287,scale:.28,x:-8,z:10},{kind:"sheep",color:15658734,scale:.42,x:4,z:9},{kind:"frog",color:6732650,scale:.18,x:-9.5,z:8.5}].forEach((D,L)=>{let ne;if(D.kind==="duck"){const m=new Bt,P=new je(new Xn(D.scale,10,8),new at({color:D.color,roughness:.5})),q=new je(new Xn(D.scale*.55,8,8),new at({color:16758605,roughness:.45}));q.position.set(D.scale*.9,D.scale*.2,0),m.add(P,q),ne=m}else ne=new je(new Xn(D.scale,12,10),new at({color:D.color,roughness:.5}));const v=D.kind==="frog"?.15:.38;ne.position.set(D.x,v,D.z),ne.castShadow=!0,x.add(ne),H.push({mesh:ne,home:new $(D.x,v,D.z),phase:L*1.4+Math.random(),radius:D.kind==="sheep"?4:3,speed:.35+Math.random()*.15,hop:D.kind==="frog"||D.kind==="chick"})})}function I(O,D){return{x:Ql.clamp(O,-18+1.2,18-1.2),z:Ql.clamp(D,-18+1.2,18-1.2)}}function Z(O,D,L){D.forEach(ne=>{const{mesh:v,home:m,phase:P,radius:q,speed:se}=ne,he=ne.hop,pe=q*(.72+.28*Math.sin(O*.17+P)),K=O*se+P;let re=m.x+Math.cos(K)*pe+Math.sin(K*2.4+P*.7)*(pe*.28),ge=m.z+Math.sin(K*.92)*pe*.85+Math.cos(K*1.9+P)*(pe*.22);const Re=I(re,ge);re=Re.x,ge=Re.z;const Te=m.y,Ee=he?Math.abs(Math.sin(O*5+P))*.12:Math.sin(O*3.2+P)*.04;v.position.set(re,Te+Ee,ge);const $e=K+se*L*12,Ze=m.x+Math.cos($e)*pe+Math.sin($e*2.4+P*.7)*(pe*.28),ut=m.z+Math.sin($e*.92)*pe*.85+Math.cos($e*1.9+P)*(pe*.22),k=Ze-re,Ae=ut-ge;v.rotation.y=Math.atan2(k,Ae)})}function le(O){N&&N.children.forEach((D,L)=>{const ne=O*D.userData.orbitSpeed+D.userData.orbitPhase,v=D.userData.orbitR;D.position.set(Math.cos(ne)*v+1.5,D.userData.alt+Math.sin(O*2.2+L)*.35,Math.sin(ne)*v*.85-5)})}function te(O){O.stem&&(O.cropGroup.remove(O.stem),O.stem.geometry.dispose(),O.stem.material.dispose(),O.stem=null),O.fruit&&(O.cropGroup.remove(O.fruit),O.fruit.geometry.dispose(),O.fruit.material.dispose(),O.fruit=null)}function ce(){t.farmGrid.forEach((O,D)=>{const L=_[D];if(!L)return;if(!O.crop){te(L),L.soil.material.color.setHex(7951688);return}const ne=en[O.crop];if(!ne||!O.plantedAt){te(L);return}const v=Date.now()-O.plantedAt,m=ne.growTime*60*60*1e3,P=Math.min(1,v/m),q=.22+.78*Math.pow(P,.55),se=o[O.crop]??16750592;L.stem||(L.stem=new je(new $n(.07,.09,.5,10),new at({color:4431943,roughness:.65})),L.stem.castShadow=!0,L.cropGroup.add(L.stem)),L.fruit||(L.fruit=new je(new Xn(.24,14,12),new at({color:se,roughness:.35,metalness:.05,emissive:0})),L.fruit.castShadow=!0,L.cropGroup.add(L.fruit)),L.stem.scale.set(1,q,1),L.stem.position.y=.25*q,L.fruit.material.color.setHex(se),L.fruit.scale.setScalar(q),L.fruit.position.y=.52*q;const he=P>=1;L.fruit.material.emissive.setHex(he?3348992:0),L.soil.material.color.setHex(P>=1?7162945:7951688)})}function ve(O){if(!a||!h)return;const D=a.domElement.getBoundingClientRect();p.x=(O.clientX-D.left)/D.width*2-1,p.y=-((O.clientY-D.top)/D.height)*2+1,g.setFromCamera(p,u);const L=g.intersectObjects(h.children,!0);for(const ne of L){let v=ne.object;for(;v;){if(typeof v.userData.plotIndex=="number"){i("plot-click",v.userData.plotIndex);return}v=v.parent}}}function ye(){if(!s.value||!u||!a)return;const O=s.value.clientWidth,D=s.value.clientHeight||320;u.aspect=O/D,u.updateProjectionMatrix(),a.setSize(O,D),l.setSize(O,D)}function T(){f=requestAnimationFrame(T);const O=U.getDelta(),D=U.elapsedTime;ce(),A&&(A.rotation.z+=O*.85),le(D),Z(D,R,O),Z(D,H,O),d.update(),a.render(c,u),l.render(c,u)}function ue(){const O=s.value;if(!O)return;const D=O.clientWidth||O.offsetWidth||320,L=Math.max(280,O.clientHeight||360);g=new T0,p=new Ke,U=new A0,c=new Z_,c.background=new dt(11460599),c.fog=new Uc(12968357,38,88),u=new An(40,D/L,.12,220),u.position.set(17,12.5,17),u.lookAt(-.5,.8,0),a=new Ey({antialias:!0,alpha:!1,powerPreference:"high-performance"}),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(D,L),a.shadowMap.enabled=!0,a.shadowMap.type=th,a.outputColorSpace=mn,a.toneMapping=yc,a.toneMappingExposure=1.05,O.appendChild(a.domElement),l=new ky,l.setSize(D,L),l.domElement.style.position="absolute",l.domElement.style.top="0",l.domElement.style.left="0",l.domElement.style.pointerEvents="none",O.appendChild(l.domElement),d=new Ty(u,a.domElement),d.enableDamping=!0,d.dampingFactor=.07,d.target.set(-1.2,.6,.2),d.maxPolarAngle=Math.PI/2-.09,d.minDistance=11,d.maxDistance=44;const ne=new x0(16777215,7179358,.62);c.add(ne);const v=new y0(16774368,1.08);v.position.set(20,32,14),v.castShadow=!0,v.shadow.mapSize.set(2048,2048),v.shadow.bias=-25e-5,v.shadow.camera.near=4,v.shadow.camera.far=90,v.shadow.camera.left=-28,v.shadow.camera.right=28,v.shadow.camera.top=28,v.shadow.camera.bottom=-28,c.add(v);const m=new xi(60,60),P=new at({color:8172354,roughness:.95,metalness:0}),q=new je(m,P);q.rotation.x=-Math.PI/2,q.receiveShadow=!0,c.add(q),new v0().load(F("assets/farm/grass.jpg"),he=>{if(E){he.dispose();return}he.wrapS=he.wrapT=Bo,he.repeat.set(12,12),he.colorSpace=mn,P.map=he,P.needsUpdate=!0},void 0,()=>{r.value=""}),oe(),B(),Me(),z(),j(),Y(),Se(),Ve(),ot(),Ye(),de(),V(-12,8,1,3046706),V(-11,-9,1,3706428),V(14,3,1,3369246),Pe(),be(),y=ve,a.domElement.addEventListener("pointerdown",y),b=ye,window.addEventListener("resize",b),T()}return xr(()=>t.unlockedPets,()=>Ge(),{deep:!0}),ea(()=>{E=!1;try{ue()}catch(O){console.error(O),r.value="3D 场景初始化失败，请刷新重试"}}),mc(()=>{var O,D;E=!0,cancelAnimationFrame(f),window.removeEventListener("resize",b),a!=null&&a.domElement&&y&&a.domElement.removeEventListener("pointerdown",y),(O=d==null?void 0:d.dispose)==null||O.call(d),c&&c.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material:[L.material]).forEach(v=>{var m;v.map&&v.map.dispose(),(m=v.dispose)==null||m.call(v)})}),(D=a==null?void 0:a.dispose)==null||D.call(a)}),(O,D)=>(me(),xe("div",{ref_key:"containerRef",ref:s,class:"farm-scene-3d",role:"img","aria-label":"3D 农场场景"},[r.value?(me(),xe("div",zy,we(r.value),1)):Dt("",!0)],512))}},Vy=Bn(Hy,[["__scopeId","data-v-0c96800b"]]),Gy={class:"page farm-home"},Wy={class:"farm-scroll"},Xy={class:"farm-header"},$y={class:"level-info"},qy={class:"level-badge"},Yy={class:"exp-text"},jy={class:"progress-bar wood-progress"},Ky={class:"field-block scene-3d-section"},Zy={class:"field-mat scene-3d-mat"},Jy={key:0,class:"buildings-block"},Qy={class:"buildings-area"},eE={class:"crop-list"},tE=["onClick"],nE={class:"crop-thumb-wrap","aria-hidden":"true"},iE={class:"crop-name"},sE={class:"crop-price"},rE={__name:"HomePage",setup(n){const e=At(!1),t=At(null),i=Ft(()=>{const d=So.find(f=>f.level===ae.level);return d?d.title:"青铜运动员"}),s=Ft(()=>{const d=So.find(M=>M.level===ae.level),f=So.find(M=>M.level===ae.level+1);if(!f)return 100;const h=ae.experience-d.exp,_=f.exp-d.exp;return Math.min(100,h/_*100)});function r(d){var f;return((f=en[d])==null?void 0:f.name)||d}function o(d){var f;return((f=en[d])==null?void 0:f.price)||0}function a(d){var f;return((f=Fo[d])==null?void 0:f.icon)||"🏠"}function l(d){const f=ae.farmGrid[d];if(!(f!=null&&f.crop)){t.value=d,e.value=!0;return}const h=en[f.crop];if(!h||!f.plantedAt)return;const _=Date.now()-f.plantedAt,M=h.growTime*60*60*1e3;_>=M&&u(d)}function c(d){const f=wn.plantCrop(t.value,d);f.success?e.value=!1:alert(f.message)}function u(d){const f=wn.harvestCrop(d);f.success?alert(`收获成功！获得 ${f.quantity} 个${en[f.crop].name}`):alert(f.message)}return(d,f)=>(me(),xe("div",Gy,[Yt(zg),w("div",Wy,[w("header",Xy,[w("div",$y,[w("span",qy,we(i.value),1),w("span",Yy,"Lv."+we(nt(ae).level)+" · "+we(nt(ae).experience)+"EXP",1)]),w("div",jy,[w("div",{class:"progress-fill",style:tr({width:s.value+"%"})},null,4)])]),w("section",Ky,[f[4]||(f[4]=w("div",{class:"sign-board"},[w("span",{class:"sign-wood"},"🌾 我的农场 · 3D")],-1)),w("div",Zy,[f[2]||(f[2]=w("p",{class:"scene-hint"}," Three.js 实景：草地、田垄、鸡舍与畜棚在同一空间里；拖拽旋转，点击地块播种 / 成熟后收获。宠物会出现在鸡舍或畜棚旁。 ",-1)),Yt(Vy,{"farm-grid":nt(ae).farmGrid,"unlocked-pets":nt(ae).unlockedPets,onPlotClick:l},null,8,["farm-grid","unlocked-pets"]),f[3]||(f[3]=w("p",{class:"scene-3d-hint"},"单指拖拽旋转 · 双指缩放 · 点地块",-1))])]),nt(ae).unlockedBuildings.length>0?(me(),xe("section",Jy,[f[5]||(f[5]=w("div",{class:"sign-board small"},[w("span",{class:"sign-wood"},"🏗️ 设施")],-1)),w("div",Qy,[(me(!0),xe(ct,null,Ct(nt(ae).unlockedBuildings,h=>(me(),xe("div",{class:"building",key:h},[w("span",null,we(a(h)),1)]))),128))])])):Dt("",!0)]),e.value?(me(),xe("div",{key:0,class:"modal-overlay",onClick:f[1]||(f[1]=h=>e.value=!1)},[w("div",{class:"modal-content",onClick:f[0]||(f[0]=as(()=>{},["stop"]))},[f[6]||(f[6]=w("h3",null,"选择作物",-1)),w("div",eE,[(me(!0),xe(ct,null,Ct(nt(ae).unlockedCrops,h=>(me(),xe("div",{key:h,class:"crop-item",onClick:_=>c(h)},[w("div",nE,[Yt(Mc,{"crop-id":h,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("span",iE,we(r(h)),1),w("span",sE,"💰"+we(o(h)),1)],8,tE))),128))])])])):Dt("",!0)]))}},oE=Bn(rE,[["__scopeId","data-v-b11a3c51"]]),aE={class:"page page-scene exercise-page"},lE={class:"game-panel hero-panel"},cE={class:"exercise-types"},uE=["onClick"],fE={class:"type-icon-ring"},dE={class:"type-icon"},hE={class:"type-name"},pE={class:"duration-field"},mE={class:"field-inner"},gE={class:"reward-strip"},_E={class:"reward-line"},vE={class:"reward-line"},xE={class:"reward-line"},ME=["disabled"],SE={key:0,class:"game-panel"},yE={class:"stats-grid"},EE={class:"stat-tile"},bE={class:"stat-num"},TE={class:"stat-tile"},AE={class:"stat-num"},wE={class:"stat-tile"},CE={class:"stat-num"},RE={key:1,class:"coin-animation"},PE={__name:"ExercisePage",setup(n){const e=At("running"),t=At(30),i=At(!1),s=At({coins:0,exp:0}),r=Ou,o=Ft(()=>r.find(f=>f.id===e.value)),a=Ft(()=>o.value?Math.floor(t.value*o.value.coinsPerMin):0),l=Ft(()=>o.value?t.value*o.value.energyPerMin:0),c=Ft(()=>o.value?Math.floor(t.value*o.value.expPerMin):0),u=Ft(()=>ae.energy>=l.value&&t.value>0);function d(){const f=wn.doExercise(e.value,t.value,Ou);f.success?(s.value={coins:f.coins,exp:f.exp},i.value=!0,setTimeout(()=>{i.value=!1},1e3)):alert(f.message)}return(f,h)=>(me(),xe("div",aE,[w("div",lE,[h[10]||(h[10]=w("div",{class:"hero-badge"},[w("span",{class:"game-sign-inline"},"🏃 开始运动")],-1)),h[11]||(h[11]=w("p",{class:"hero-hint"},"选一种运动，积累时长兑换农场金币与经验",-1)),w("div",cE,[(me(!0),xe(ct,null,Ct(nt(r),_=>(me(),xe("button",{key:_.id,type:"button",class:gn(["type-tile",{selected:e.value===_.id}]),onClick:M=>e.value=_.id},[w("span",fE,[w("span",dE,we(_.icon),1)]),w("span",hE,we(_.name),1)],10,uE))),128))]),w("div",pE,[h[1]||(h[1]=w("label",{class:"field-label"},"运动时长（分钟）",-1)),w("div",mE,[hi(w("input",{type:"number","onUpdate:modelValue":h[0]||(h[0]=_=>t.value=_),class:"duration-input",min:"1",max:"180"},null,512),[[ns,t.value,void 0,{number:!0}]])])]),w("div",gE,[w("div",_E,[h[4]||(h[4]=w("span",{class:"reward-ico"},"💰",-1)),w("span",null,[h[2]||(h[2]=pn("预计收益 ",-1)),w("strong",null,we(a.value),1),h[3]||(h[3]=pn(" 金币",-1))])]),w("div",vE,[h[6]||(h[6]=w("span",{class:"reward-ico"},"⚡",-1)),w("span",null,[h[5]||(h[5]=pn("消耗体力 ",-1)),w("strong",null,we(l.value),1)])]),w("div",xE,[h[9]||(h[9]=w("span",{class:"reward-ico"},"✨",-1)),w("span",null,[h[7]||(h[7]=pn("获得经验 ",-1)),w("strong",null,we(c.value),1),h[8]||(h[8]=pn(" EXP",-1))])])]),w("button",{type:"button",class:"game-btn-primary-lg start-btn",disabled:!u.value,onClick:d},we(u.value?"🎯 开始运动":"😮 体力不足"),9,ME)]),nt(ae).stats.totalExerciseTime>0?(me(),xe("div",SE,[h[15]||(h[15]=w("div",{class:"game-panel-title"},"📊 运动统计",-1)),w("div",yE,[w("div",EE,[w("span",bE,we(nt(ae).stats.totalExerciseTime),1),h[12]||(h[12]=w("span",{class:"stat-cap"},"总分钟",-1))]),w("div",TE,[w("span",AE,we(nt(ae).stats.totalCoinsEarned),1),h[13]||(h[13]=w("span",{class:"stat-cap"},"累计金币",-1))]),w("div",wE,[w("span",CE,we(nt(ae).streakDays),1),h[14]||(h[14]=w("span",{class:"stat-cap"},"连续打卡",-1))])])])):Dt("",!0),i.value?(me(),xe("div",RE,[w("span",null,"+"+we(s.value.coins)+" 💰",1)])):Dt("",!0)]))}},DE=Bn(PE,[["__scopeId","data-v-4ef7023b"]]),LE={viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",class:"pet-svg"},IE={key:0,class:"anim-bob"},UE={key:1,class:"anim-wiggle"},NE={key:2,class:"anim-bob"},FE={key:3,class:"anim-hop"},OE={key:4,class:"anim-trot"},BE={key:5,class:"anim-bob"},kE={__name:"PetSprite",props:{petId:{type:String,required:!0},size:{type:String,default:"default"}},setup(n){return(e,t)=>(me(),xe("div",{class:gn(["pet-sprite",[`pet-${n.petId}`,{"size-ranch":n.size==="ranch"}]]),"aria-hidden":"true"},[(me(),xe("svg",LE,[n.petId==="chicken"?(me(),xe("g",IE,[...t[0]||(t[0]=[Sn('<ellipse cx="48" cy="78" rx="22" ry="6" fill="#3E2723" opacity="0.12" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFF8E1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="54" rx="22" ry="18" fill="#FFECB3" data-v-e33ebb8c></ellipse><circle cx="62" cy="46" r="10" fill="#FFF8E1" data-v-e33ebb8c></circle><polygon points="68,42 78,46 68,50" fill="#FF9800" data-v-e33ebb8c></polygon><circle cx="65" cy="44" r="2.5" fill="#212121" data-v-e33ebb8c></circle><path fill="#F44336" d="M44 28 L48 20 L52 28 Z" data-v-e33ebb8c></path><path fill="#F44336" d="M48 22 L52 14 L54 24 Z" data-v-e33ebb8c></path><ellipse cx="38" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse>',10)])])):n.petId==="dog"?(me(),xe("g",UE,[...t[1]||(t[1]=[Sn('<ellipse cx="48" cy="80" rx="24" ry="7" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="50" rx="28" ry="24" fill="#D7A574" data-v-e33ebb8c></ellipse><ellipse cx="30" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="66" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="18" ry="16" fill="#E6C29A" data-v-e33ebb8c></ellipse><circle cx="58" cy="46" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="54" cy="54" rx="8" ry="6" fill="#212121" data-v-e33ebb8c></ellipse><path stroke="#8D6E63" stroke-width="6" stroke-linecap="round" fill="none" d="M72 56 Q84 48 88 36" data-v-e33ebb8c></path>',8)])])):n.petId==="cat"?(me(),xe("g",NE,[...t[2]||(t[2]=[Sn('<ellipse cx="48" cy="80" rx="22" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><path fill="#FFB74D" d="M28 44 L34 24 L42 40 Z M54 40 L62 24 L68 44 Z" data-v-e33ebb8c></path><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFCC80" data-v-e33ebb8c></ellipse><circle cx="40" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><circle cx="56" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><ellipse cx="48" cy="58" rx="5" ry="4" fill="#E65100" data-v-e33ebb8c></ellipse><path stroke="#FFCC80" stroke-width="8" stroke-linecap="round" fill="none" d="M22 60 Q12 52 10 40" data-v-e33ebb8c></path>',7)])])):n.petId==="rabbit"?(me(),xe("g",FE,[...t[3]||(t[3]=[Sn('<ellipse cx="48" cy="82" rx="18" ry="5" fill="#3E2723" opacity="0.08" data-v-e33ebb8c></ellipse><ellipse cx="38" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="56" rx="22" ry="20" fill="#FAFAFA" data-v-e33ebb8c></ellipse><circle cx="40" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><circle cx="56" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="48" cy="60" rx="4" ry="3" fill="#F48FB1" data-v-e33ebb8c></ellipse>',7)])])):n.petId==="horse"?(me(),xe("g",OE,[...t[4]||(t[4]=[Sn('<ellipse cx="48" cy="82" rx="26" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="22" ry="18" fill="#A1887F" data-v-e33ebb8c></ellipse><ellipse cx="72" cy="44" rx="12" ry="10" fill="#BCAAA4" data-v-e33ebb8c></ellipse><path fill="#5D4037" d="M68 36 Q76 28 84 32 L80 40 Z" data-v-e33ebb8c></path><circle cx="76" cy="42" r="2.5" fill="#212121" data-v-e33ebb8c></circle><rect x="34" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect><rect x="50" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect>',7)])])):(me(),xe("g",BE,[...t[5]||(t[5]=[w("circle",{cx:"48",cy:"48",r:"28",fill:"#E0E0E0"},null,-1),w("circle",{cx:"40",cy:"44",r:"4",fill:"#424242"},null,-1),w("circle",{cx:"56",cy:"44",r:"4",fill:"#424242"},null,-1)])]))]))],2))}},zE=Bn(kE,[["__scopeId","data-v-e33ebb8c"]]),HE={class:"page page-scene store-page"},VE={class:"game-tabs"},GE=["onClick"],WE={key:0,class:"list-block"},XE=["onClick"],$E={class:"game-thumb thumb-crop"},qE={class:"item-info"},YE={class:"item-name"},jE={class:"item-desc"},KE={class:"item-price"},ZE={key:1,class:"list-block"},JE=["onClick"],QE={class:"game-thumb thumb-emoji"},eb={class:"item-info"},tb={class:"item-name"},nb={class:"item-desc"},ib={key:0,class:"item-price"},sb={key:1,class:"owned-tag"},rb={key:2,class:"list-block"},ob=["onClick"],ab={class:"game-thumb thumb-pet"},lb={class:"item-info"},cb={class:"item-name"},ub={class:"item-desc"},fb={key:0,class:"item-price"},db={key:1,class:"owned-tag"},hb={__name:"StorePage",setup(n){const e=At("seeds"),t=[{id:"seeds",name:"种子"},{id:"buildings",name:"建筑"},{id:"pets",name:"宠物"}],i=Ft(()=>{const a={};return Object.entries(en).forEach(([l,c])=>{(ae.unlockedCrops.includes(l)||!c.unlock)&&(a[l]=c)}),a}),s=Ft(()=>{const a={};return Object.entries(Fo).forEach(([l,c])=>{(ae.unlockedBuildings.includes(l)||!c.unlock)&&(a[l]=c)}),a}),r=Ft(()=>{const a={};return Object.entries(Xs).forEach(([l,c])=>{(ae.unlockedPets.includes(l)||!c.unlock)&&(a[l]=c)}),a});function o(a,l){let c;if(a==="crop")c=en[l];else if(a==="building")c=Fo[l];else if(a==="pet")c=Xs[l];else return;if(!(a==="building"&&ae.unlockedBuildings.includes(l))&&!(a==="pet"&&ae.unlockedPets.includes(l))){if(ae.coins<c.price){alert("金币不足");return}if(confirm(`购买 ${c.name}？`)){const u=wn.buyItem(a,l,c.price);u.success?alert("购买成功！"):alert(u.message)}}}return(a,l)=>(me(),xe("div",HE,[l[0]||(l[0]=w("div",{class:"shop-header"},[w("span",{class:"game-sign-inline"},"🏪 村口杂货铺"),w("p",{class:"shop-sub"},"种子 · 建筑 · 小动物")],-1)),w("div",VE,[(me(),xe(ct,null,Ct(t,c=>w("button",{key:c.id,type:"button",class:gn(["game-tab",{active:e.value===c.id}]),onClick:u=>e.value=c.id},we(c.name),11,GE)),64))]),e.value==="seeds"?(me(),xe("div",WE,[(me(!0),xe(ct,null,Ct(i.value,(c,u)=>(me(),xe("div",{key:u,class:"game-list-row",onClick:d=>o("crop",u)},[w("div",$E,[Yt(Mc,{"crop-id":u,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("div",qE,[w("span",YE,we(c.name),1),w("span",jE,"生长约 "+we(c.growTime)+" 小时 · 种在田里吧",1)]),w("span",KE,"💰 "+we(c.price),1)],8,XE))),128))])):Dt("",!0),e.value==="buildings"?(me(),xe("div",ZE,[(me(!0),xe(ct,null,Ct(s.value,(c,u)=>(me(),xe("div",{key:u,class:gn(["game-list-row",{muted:nt(ae).unlockedBuildings.includes(u)}]),onClick:d=>o("building",u)},[w("div",QE,we(c.icon),1),w("div",eb,[w("span",tb,we(c.name),1),w("span",nb,we(c.effect),1)]),nt(ae).unlockedBuildings.includes(u)?(me(),xe("span",sb,"已拥有")):(me(),xe("span",ib,"💰 "+we(c.price),1))],10,JE))),128))])):Dt("",!0),e.value==="pets"?(me(),xe("div",rb,[(me(!0),xe(ct,null,Ct(r.value,(c,u)=>(me(),xe("div",{key:u,class:gn(["game-list-row",{muted:nt(ae).unlockedPets.includes(u)}]),onClick:d=>o("pet",u)},[w("div",ab,[Yt(zE,{"pet-id":u},null,8,["pet-id"])]),w("div",lb,[w("span",cb,we(c.name),1),w("span",ub,we(c.effect),1)]),nt(ae).unlockedPets.includes(u)?(me(),xe("span",db,"已拥有")):(me(),xe("span",fb,"💰 "+we(c.price),1))],10,ob))),128))])):Dt("",!0)]))}},pb=Bn(hb,[["__scopeId","data-v-c1d29d16"]]),mb={class:"page page-scene warehouse-page"},gb={class:"game-tabs"},_b=["onClick"],vb={key:0,class:"list-block"},xb={key:0,class:"empty-barn"},Mb={class:"game-thumb thumb-crop"},Sb={class:"item-info"},yb={class:"item-name"},Eb={class:"item-qty"},bb=["onClick"],Tb={key:1,class:"list-block"},Ab={key:0,class:"empty-barn mild"},wb={class:"item-info"},Cb={class:"item-name"},Rb={class:"item-qty"},Pb={__name:"WarehousePage",setup(n){const e=At("crops"),t=[{id:"crops",name:"作物"},{id:"items",name:"物品"}],i=Ft(()=>Object.entries(ae.warehouse.crops).filter(([,r])=>r>0).map(([r,o])=>{var a;return{id:r,name:((a=en[r])==null?void 0:a.name)||r,quantity:o}}));function s(r){const o=en[r],a=ae.warehouse.crops[r],l=o.sellPrice*a;confirm(`出售全部 ${o.name} ×${a}？可获得 ${l} 金币`)&&(ae.coins+=l,ae.warehouse.crops[r]=0)}return(r,o)=>(me(),xe("div",mb,[o[3]||(o[3]=w("div",{class:"barn-header"},[w("span",{class:"game-sign-inline"},"🌾 我的谷仓"),w("p",{class:"barn-sub"},"收获的作物会堆在这里")],-1)),w("div",gb,[(me(),xe(ct,null,Ct(t,a=>w("button",{key:a.id,type:"button",class:gn(["game-tab",{active:e.value===a.id}]),onClick:l=>e.value=a.id},we(a.name),11,_b)),64))]),e.value==="crops"?(me(),xe("div",vb,[i.value.length===0?(me(),xe("div",xb,[...o[0]||(o[0]=[Sn('<svg class="barn-illus" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-42e7d5d0><ellipse cx="100" cy="118" rx="88" ry="14" fill="#3e2723" opacity="0.12" data-v-42e7d5d0></ellipse><path d="M24 95 L100 38 L176 95 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></path><rect x="36" y="95" width="128" height="28" rx="2" fill="#a1887f" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></rect><rect x="82" y="70" width="36" height="42" fill="#5d4037" rx="2" data-v-42e7d5d0></rect><rect x="46" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><rect x="132" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><path d="M100 38 L100 18 Q118 28 100 38" fill="#d7ccc8" stroke="#8d6e63" data-v-42e7d5d0></path></svg><p class="empty-title" data-v-42e7d5d0>谷仓里还空着呢</p><p class="empty-desc" data-v-42e7d5d0>去「运动」页打卡，收获会自动装进谷仓～</p>',3)])])):(me(!0),xe(ct,{key:1},Ct(i.value,a=>(me(),xe("div",{key:a.id,class:"game-list-row shelf-row"},[w("div",Mb,[Yt(Mc,{"crop-id":a.id,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("div",Sb,[w("span",yb,we(a.name),1),w("span",Eb,"库存 ×"+we(a.quantity),1)]),w("button",{type:"button",class:"sell-btn",onClick:as(l=>s(a.id),["stop"])},"出售",8,bb)]))),128))])):Dt("",!0),e.value==="items"?(me(),xe("div",Tb,[Object.keys(nt(ae).warehouse.items).length===0?(me(),xe("div",Ab,[...o[1]||(o[1]=[w("span",{class:"empty-emoji"},"📦",-1),w("p",{class:"empty-title"},"还没有杂物",-1),w("p",{class:"empty-desc"},"药水、道具解锁后会出现在这里",-1)])])):(me(!0),xe(ct,{key:1},Ct(nt(ae).warehouse.items,(a,l)=>(me(),xe("div",{key:l,class:"game-list-row shelf-row muted-click"},[o[2]||(o[2]=w("div",{class:"game-thumb thumb-emoji"},"📦",-1)),w("div",wb,[w("span",Cb,we(l),1),w("span",Rb,"×"+we(a),1)])]))),128))])):Dt("",!0)]))}},Db=Bn(Pb,[["__scopeId","data-v-42e7d5d0"]]),Lb={class:"page page-scene social-page"},Ib={class:"game-panel rank-panel"},Ub={class:"rank-list"},Nb={class:"rank-medal"},Fb={class:"rank-num"},Ob={class:"rank-name"},Bb={class:"rank-value"},kb={class:"game-panel"},zb={class:"friend-list"},Hb={class:"friend-avatar"},Vb={class:"friend-meta"},Gb={class:"friend-name"},Wb={class:"friend-status"},Xb=["disabled","onClick"],$b={class:"game-panel pk-panel"},qb={key:0,class:"pk-section"},Yb={class:"pk-row-top"},jb={class:"pk-vs"},Kb=["onClick"],Zb={class:"pk-meta"},Jb={key:0,class:"pk-rule"},Qb={class:"pk-stake-sum"},e1=["onClick"],t1={key:1,class:"pk-section"},n1={class:"pk-row-top"},i1={class:"pk-deadline"},s1={class:"pk-meta"},r1={class:"pk-score"},o1={class:"score-me"},a1={class:"unit"},l1={class:"score-friend"},c1={class:"lbl"},u1={class:"unit"},f1={class:"pk-pool"},d1={key:2,class:"pk-section"},h1={class:"pk-result-line"},p1={key:0,class:"win"},m1={key:1,class:"lose"},g1={class:"pk-result-msg"},_1={key:3,class:"pk-empty"},v1={class:"fld"},x1=["value"],M1={class:"fld"},S1={class:"fld"},y1=["value"],E1={class:"fld-hint"},b1={class:"fld"},T1={class:"stake-block"},A1={class:"fld"},w1={key:0,class:"crop-stakes"},C1=["onUpdate:modelValue","max"],R1={class:"mx"},P1={key:1,class:"pet-stakes"},D1=["checked","onChange"],L1={class:"modal-actions"},I1={class:"fld"},U1={class:"crop-stakes"},N1=["onUpdate:modelValue"],F1={class:"modal-actions"},O1={__name:"SocialPage",setup(n){const e=At([{id:1,name:"小明",icon:"👦",farmStatus:"胡萝卜快要熟了"},{id:2,name:"小红",icon:"👧",farmStatus:"番茄长势喜人"},{id:3,name:"小刚",icon:"👨",farmStatus:"玉米地里绿油油"}]),t=["carrot","tomato","corn"],i=Ft(()=>[{name:"运动达人小王",value:1500,unit:"分钟"},{name:"健身狂人小李",value:1200,unit:"分钟"},{name:"晨练选手小张",value:1e3,unit:"分钟"},{name:"你",value:ae.stats.totalExerciseTime,unit:"分钟"},{name:"夜猫子小赵",value:500,unit:"分钟"}]),s=Ft(()=>ae.pkChallenges.filter(G=>G.status==="pending")),r=Ft(()=>ae.pkChallenges.filter(G=>G.status==="active")),o=Ft(()=>[...ae.pkChallenges].filter(G=>G.status==="settled").sort((G,B)=>(B.settledAt||0)-(G.settledAt||0))),a=At(!1),l=At(1),c=At(7),u=At("exercise_minutes"),d=At(""),f=At(0),h=At({}),_=At([]),M=Ft(()=>Ki(u.value).hint),g=Ft(()=>Object.entries(ae.warehouse.crops||{}).filter(([,G])=>G>0).map(([G,B])=>({id:G,qty:B})));function p(){const G={};for(const[B,Me]of Object.entries(ae.warehouse.crops||{}))Me>0&&(G[B]=0);h.value=G,_.value=[],f.value=0,d.value="",c.value=7,u.value="exercise_minutes",a.value=!0}function y(G){const B=_.value.indexOf(G);B>=0?_.value.splice(B,1):_.value.push(G)}function b(){const G=e.value.find(Y=>Y.id===l.value),B={};for(const[Y,Se]of Object.entries(h.value)){const Ve=Math.min(Math.max(0,Math.floor(Number(Se)||0)),ae.warehouse.crops[Y]||0);Ve>0&&(B[Y]=Ve)}const Me=wn.createPkChallenge({friendId:l.value,friendName:(G==null?void 0:G.name)||"好友",durationDays:c.value,pkType:u.value,ruleNote:d.value,stakes:{crops:B,coins:f.value,petIds:[..._.value]}});Me.success?(a.value=!1,alert("挑战已创建。请让对方同意下注，或在本页点击「好友同意并下注」完成单机演示。")):alert(Me.message)}const E=At(!1),U=At(""),A=At(50),N=At({carrot:1,tomato:0,corn:0});function x(G){U.value=G.id,A.value=60,N.value={carrot:1,tomato:1,corn:0},E.value=!0}function R(){A.value=100,N.value={carrot:2,tomato:1,corn:1}}function H(){const G={};for(const Me of t){const Y=Math.max(0,Math.floor(Number(N.value[Me])||0));Y>0&&(G[Me]=Y)}const B=wn.acceptPkChallenge(U.value,{crops:G,coins:A.value,petIds:[]});B.success?(E.value=!1,alert("PK 已成立！挑战期内去「运动」打卡即可累积成绩；截止后自动结算。")):alert(B.message)}function F(G){if(!confirm("确定撤回这条待确认的挑战？"))return;const B=wn.cancelPkChallenge(G);B.success||alert(B.message)}function W(G){var Y;if(!G)return"—";const B=[];G.coins>0&&B.push(`${G.coins} 金币`);const Me=(G.petIds||[]).reduce((Se,Ve)=>{var ot;return Se+(((ot=Xs[Ve])==null?void 0:ot.price)||0)},0);Me&&B.push(`宠物折算 ${Me} 金币`);for(const[Se,Ve]of Object.entries(G.crops||{}))Ve>0&&B.push(`${((Y=en[Se])==null?void 0:Y.name)||Se}×${Ve}`);return B.length?B.join("，"):"—"}function ie(G){var Me;if(!G)return"—";const B=[];G.coins>0&&B.push(`${G.coins} 金币`);for(const[Y,Se]of Object.entries(G.crops||{}))Se>0&&B.push(`${((Me=en[Y])==null?void 0:Me.name)||Y}×${Se}`);return B.length?B.join("，"):"—"}function oe(G,B){return G.pkType==="exercise_minutes"?B==="me"?G.myScore||0:G.friendScore||0:B==="me"?G.mySessions||0:G.friendSessions||0}function z(G){return G?new Date(G).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}function j(G){return G===0?"🥇":G===1?"🥈":G===2?"🥉":"🏅"}function V(G){if(ae.stealCount>=3){alert("今日偷菜次数已用完");return}const B=Math.floor(Math.random()*50)+10;ae.coins+=B,ae.stealCount++,ae.stats.totalStealCount++,alert(`偷取了 ${G.name} 的 ${B} 金币！`)}return ea(()=>{wn.resolvePkChallengesIfNeeded()}),(G,B)=>{var Me;return me(),xe("div",Lb,[B[37]||(B[37]=w("div",{class:"town-header"},[w("span",{class:"game-sign-inline"},"👋 邻里串门"),w("p",{class:"town-sub"},"排行榜 · 好友农田 · PK 挑战")],-1)),w("div",Ib,[B[12]||(B[12]=w("div",{class:"panel-strip"},[w("span",{class:"strip-icon"},"🏆"),w("span",{class:"strip-title"},"全镇运动榜")],-1)),w("div",Ub,[(me(!0),xe(ct,null,Ct(i.value,(Y,Se)=>(me(),xe("div",{key:Se,class:gn(["rank-row",{top1:Se===0,top2:Se===1,top3:Se===2,isMe:Y.name==="你"}])},[w("span",Nb,we(j(Se)),1),w("span",Fb,we(Se+1),1),w("span",Ob,we(Y.name),1),w("span",Bb,we(Y.value)+" "+we(Y.unit),1)],2))),128))])]),w("div",kb,[B[14]||(B[14]=w("div",{class:"panel-strip"},[w("span",{class:"strip-icon"},"🥕"),w("span",{class:"strip-title"},"好友农场")],-1)),w("div",zb,[(me(!0),xe(ct,null,Ct(e.value,Y=>(me(),xe("div",{key:Y.id,class:"friend-card"},[w("div",Hb,we(Y.icon),1),w("div",Vb,[w("span",Gb,we(Y.name),1),w("span",Wb,[B[13]||(B[13]=w("span",{class:"sprout"},"🌱",-1)),pn(" "+we(Y.farmStatus),1)])]),w("button",{type:"button",class:"steal-btn",disabled:nt(ae).stealCount>=3,onClick:Se=>V(Y)},we(nt(ae).stealCount>=3?"次数用尽":"偷菜"),9,Xb)]))),128))])]),w("div",$b,[w("div",{class:"panel-strip pk-strip"},[B[15]||(B[15]=w("span",{class:"strip-icon"},"⚔️",-1)),B[16]||(B[16]=w("span",{class:"strip-title"},"PK 挑战",-1)),w("button",{type:"button",class:"pk-launch",onClick:p},"＋ 发起挑战")]),B[23]||(B[23]=w("p",{class:"pk-intro"},[pn(" 向指定好友发起限时挑战，设置比拼规则与赌注；双方协商下注并同意后挑战生效，截止时按规则判定胜负，胜者拿走奖池（作物 + 金币；宠物按商店原价折算进金币池）。 "),w("strong",null,"单机演示："),pn("好友下注由你在「同意成立」一步代为填写。 ")],-1)),s.value.length?(me(),xe("div",qb,[B[18]||(B[18]=w("h4",{class:"pk-subhd"},"待好友确认（下注）",-1)),(me(!0),xe(ct,null,Ct(s.value,Y=>(me(),xe("div",{key:Y.id,class:"pk-card pending"},[w("div",Yb,[w("span",jb,[B[17]||(B[17]=pn("你对 ",-1)),w("strong",null,we(Y.friendName),1)]),w("button",{type:"button",class:"link-btn danger",onClick:Se=>F(Y.id)},"撤回",8,Kb)]),w("p",Zb,we(nt(Ki)(Y.pkType).label)+" · 时长 "+we(Y.durationDays)+" 天 ",1),Y.ruleNote?(me(),xe("p",Jb,"约定："+we(Y.ruleNote),1)):Dt("",!0),w("div",Qb," 我方赌注："+we(W(Y.stakesMe)),1),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:Se=>x(Y)}," 好友同意并下注（演示） ",8,e1)]))),128))])):Dt("",!0),r.value.length?(me(),xe("div",t1,[B[21]||(B[21]=w("h4",{class:"pk-subhd"},"进行中",-1)),(me(!0),xe(ct,null,Ct(r.value,Y=>(me(),xe("div",{key:Y.id,class:"pk-card active"},[w("div",n1,[w("span",null,"⚔️ vs "+we(Y.friendName),1),w("span",i1,"截止 "+we(z(Y.endsAt)),1)]),w("p",s1,we(nt(Ki)(Y.pkType).label)+" · "+we(nt(Ki)(Y.pkType).hint),1),w("div",r1,[w("div",o1,[B[19]||(B[19]=w("span",{class:"lbl"},"我",-1)),w("strong",null,we(oe(Y,"me")),1),w("span",a1,we(nt(Ki)(Y.pkType).unit),1)]),B[20]||(B[20]=w("span",{class:"vs-dot"},"VS",-1)),w("div",l1,[w("span",c1,we(Y.friendName),1),w("strong",null,we(oe(Y,"friend")),1),w("span",u1,we(nt(Ki)(Y.pkType).unit),1)])]),w("p",f1,"奖池："+we(ie(Y.escrow)),1)]))),128))])):Dt("",!0),o.value.length?(me(),xe("div",d1,[B[22]||(B[22]=w("h4",{class:"pk-subhd"},"最新战绩",-1)),(me(!0),xe(ct,null,Ct(o.value.slice(0,5),Y=>(me(),xe("div",{key:Y.id,class:"pk-card settled"},[w("p",h1,[Y.winnerSide==="me"?(me(),xe("span",p1,"🏆 胜")):(me(),xe("span",m1,"…")),pn(" vs "+we(Y.friendName)+" · "+we(nt(Ki)(Y.pkType).label),1)]),w("p",g1,we(Y.resultMessage),1)]))),128))])):Dt("",!0),!s.value.length&&!r.value.length&&!o.value.length?(me(),xe("p",_1," 暂无 PK，点击右上角发起一场。 ")):Dt("",!0)]),a.value?(me(),xe("div",{key:0,class:"modal-overlay",onClick:B[7]||(B[7]=as(Y=>a.value=!1,["self"]))},[w("div",{class:"modal-sheet",onClick:B[6]||(B[6]=as(()=>{},["stop"]))},[B[32]||(B[32]=w("h3",null,"发起 PK 挑战",-1)),w("label",v1,[B[24]||(B[24]=w("span",null,"对手",-1)),hi(w("select",{"onUpdate:modelValue":B[0]||(B[0]=Y=>l.value=Y),class:"fld-input"},[(me(!0),xe(ct,null,Ct(e.value,Y=>(me(),xe("option",{key:Y.id,value:Y.id},we(Y.name),9,x1))),128))],512),[[Uu,l.value,void 0,{number:!0}]])]),w("label",M1,[B[25]||(B[25]=w("span",null,"持续天数",-1)),hi(w("input",{"onUpdate:modelValue":B[1]||(B[1]=Y=>c.value=Y),type:"number",min:"1",max:"30",class:"fld-input"},null,512),[[ns,c.value,void 0,{number:!0}]])]),w("label",S1,[B[26]||(B[26]=w("span",null,"比拼类型",-1)),hi(w("select",{"onUpdate:modelValue":B[2]||(B[2]=Y=>u.value=Y),class:"fld-input"},[(me(!0),xe(ct,null,Ct(nt(Oo),Y=>(me(),xe("option",{key:Y.id,value:Y.id},we(Y.label),9,y1))),128))],512),[[Uu,u.value]])]),w("p",E1,we(M.value),1),w("label",b1,[B[27]||(B[27]=w("span",null,"补充约定（可选）",-1)),hi(w("textarea",{"onUpdate:modelValue":B[3]||(B[3]=Y=>d.value=Y),rows:"2",class:"fld-input",placeholder:"例如：每天早晨跑步打卡算数…"},null,512),[[ns,d.value]])]),w("div",T1,[B[31]||(B[31]=w("span",{class:"stake-title"},"我的赌注",-1)),w("label",A1,[B[28]||(B[28]=w("span",null,"金币",-1)),hi(w("input",{"onUpdate:modelValue":B[4]||(B[4]=Y=>f.value=Y),type:"number",min:"0",class:"fld-input"},null,512),[[ns,f.value,void 0,{number:!0}]])]),g.value.length?(me(),xe("div",w1,[B[29]||(B[29]=w("span",{class:"mini-label"},"作物（从仓库扣）",-1)),(me(!0),xe(ct,null,Ct(g.value,Y=>{var Se;return me(),xe("div",{key:Y.id,class:"crop-row"},[w("span",null,we((Se=nt(en)[Y.id])==null?void 0:Se.name),1),hi(w("input",{"onUpdate:modelValue":Ve=>h.value[Y.id]=Ve,type:"number",min:"0",max:Y.qty,class:"fld-input tiny"},null,8,C1),[[ns,h.value[Y.id],void 0,{number:!0}]]),w("span",R1,"/ "+we(Y.qty),1)])}),128))])):Dt("",!0),(Me=nt(ae).unlockedPets)!=null&&Me.length?(me(),xe("div",P1,[B[30]||(B[30]=w("span",{class:"mini-label"},"宠物（按原价从金币扣押）",-1)),(me(!0),xe(ct,null,Ct(nt(ae).unlockedPets,Y=>{var Se,Ve;return me(),xe("label",{key:Y,class:"pet-line"},[w("input",{type:"checkbox",checked:_.value.includes(Y),onChange:ot=>y(Y)},null,40,D1),pn(" "+we((Se=nt(Xs)[Y])==null?void 0:Se.name)+"（≈"+we((Ve=nt(Xs)[Y])==null?void 0:Ve.price)+" 币） ",1)])}),128))])):Dt("",!0)]),w("div",L1,[w("button",{type:"button",class:"btn-cancel",onClick:B[5]||(B[5]=Y=>a.value=!1)},"取消"),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:b},"发出挑战")])])])):Dt("",!0),E.value?(me(),xe("div",{key:1,class:"modal-overlay",onClick:B[11]||(B[11]=as(Y=>E.value=!1,["self"]))},[w("div",{class:"modal-sheet",onClick:B[10]||(B[10]=as(()=>{},["stop"]))},[B[35]||(B[35]=w("h3",null,"协商成立 PK",-1)),B[36]||(B[36]=w("p",{class:"accept-lead"},[pn(" 现实中应由好友客户端确认。此处请"),w("strong",null,"代为填写好友的下注"),pn("，双方赌注齐全后奖池成立并开始计时。 ")],-1)),w("button",{type:"button",class:"demo-fill",onClick:R},"一键填入演示赌注"),w("label",I1,[B[33]||(B[33]=w("span",null,"好友下注 · 金币",-1)),hi(w("input",{"onUpdate:modelValue":B[8]||(B[8]=Y=>A.value=Y),type:"number",min:"0",class:"fld-input"},null,512),[[ns,A.value,void 0,{number:!0}]])]),w("div",U1,[B[34]||(B[34]=w("span",{class:"mini-label"},"好友下注 · 作物（演示数量）",-1)),(me(),xe(ct,null,Ct(t,Y=>{var Se;return w("div",{key:Y,class:"crop-row"},[w("span",null,we((Se=nt(en)[Y])==null?void 0:Se.name),1),hi(w("input",{"onUpdate:modelValue":Ve=>N.value[Y]=Ve,type:"number",min:"0",class:"fld-input tiny"},null,8,N1),[[ns,N.value[Y],void 0,{number:!0}]])])}),64))]),w("div",F1,[w("button",{type:"button",class:"btn-cancel",onClick:B[9]||(B[9]=Y=>E.value=!1)},"取消"),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:H},"确认成立 PK")])])])):Dt("",!0)])}}},B1=Bn(O1,[["__scopeId","data-v-5e407f7c"]]),k1={class:"page page-scene achievement-page"},z1={class:"game-panel"},H1={class:"achievement-list"},V1={class:"plank-icon"},G1={class:"plank-body"},W1={class:"plank-name"},X1={class:"plank-desc"},$1={key:0,class:"plank-progress"},q1={class:"wood-progress-track"},Y1={class:"plank-pct"},j1={key:0,class:"plank-reward"},K1={class:"game-panel streak-panel"},Z1={class:"streak-hero"},J1={class:"streak-num"},Q1={class:"streak-grid"},eT={class:"mile-day"},tT={class:"mile-reward"},nT={__name:"AchievementPage",setup(n){const e=[{days:7,reward:"解锁草莓"},{days:14,reward:"解锁葡萄+宠物屋"},{days:30,reward:"解锁餐厅"},{days:100,reward:"冠军雕像"}],t=Ft(()=>Object.entries(vg).map(([r,o])=>{let a=!1,l=0;return r==="firstExercise"?(a=ae.stats.totalExerciseTime>0,l=a?100:0):r==="streak7"?(a=ae.streakDays>=7,l=Math.min(100,ae.streakDays/7*100)):r==="streak14"?(a=ae.streakDays>=14,l=Math.min(100,ae.streakDays/14*100)):r==="streak30"?(a=ae.streakDays>=30,l=Math.min(100,ae.streakDays/30*100)):r==="level5"?(a=ae.level>=5,l=Math.min(100,ae.level/5*100)):r==="rich"&&(a=ae.coins>=1e4,l=Math.min(100,ae.coins/1e4*100)),{id:r,...o,completed:a,progress:l}}));function i(r){const o=Math.min(100,Math.max(0,Number(r)));return Math.round(o*10)/10}function s(r){if(!r)return"无";const o=[];return r.coins&&o.push(`${r.coins} 金币`),r.crops&&o.push(`作物：${r.crops.join("、")}`),r.buildings&&o.push(`建筑：${r.buildings.join("、")}`),r.diamonds&&o.push(`${r.diamonds} 钻石`),o.length?o.join("；"):JSON.stringify(r)}return(r,o)=>(me(),xe("div",k1,[o[4]||(o[4]=w("div",{class:"honor-header"},[w("span",{class:"game-sign-inline"},"🏅 荣誉墙"),w("p",{class:"honor-sub"},"完成目标，解锁农场好礼")],-1)),w("div",z1,[o[0]||(o[0]=w("div",{class:"panel-strip center"},[w("span",{class:"strip-title"},"成就进度")],-1)),w("div",H1,[(me(!0),xe(ct,null,Ct(t.value,a=>(me(),xe("div",{key:a.id,class:gn(["achievement-plank",{done:a.completed}])},[w("div",V1,we(a.completed?"🏆":"🔒"),1),w("div",G1,[w("span",W1,we(a.name),1),w("span",X1,we(a.desc),1),a.completed?Dt("",!0):(me(),xe("div",$1,[w("div",q1,[w("div",{class:"wood-progress-fill",style:tr({width:i(a.progress)+"%"})},null,4)]),w("span",Y1,we(i(a.progress))+"%",1)]))]),a.completed?(me(),xe("div",j1,we(s(a.reward)),1)):Dt("",!0)],2))),128))])]),w("div",K1,[o[3]||(o[3]=w("div",{class:"panel-strip center"},[w("span",{class:"strip-title"},"连续打卡")],-1)),w("div",Z1,[o[1]||(o[1]=w("span",{class:"flame"},"🔥",-1)),w("span",J1,we(nt(ae).streakDays),1),o[2]||(o[2]=w("span",{class:"streak-unit"},"天",-1))]),w("div",Q1,[(me(),xe(ct,null,Ct(e,a=>w("div",{key:a.days,class:gn(["streak-mile",{ok:nt(ae).streakDays>=a.days}])},[w("span",eT,we(a.days)+" 天",1),w("span",tT,we(a.reward),1)],2)),64))])])]))}},iT=Bn(nT,[["__scopeId","data-v-0d73f237"]]),sT={__name:"Modal",emits:["close"],setup(n){return(e,t)=>(me(),xe("div",{class:"modal-overlay",onClick:t[2]||(t[2]=i=>e.$emit("close"))},[w("div",{class:"modal-content",onClick:t[1]||(t[1]=as(()=>{},["stop"]))},[w("button",{class:"modal-close",onClick:t[0]||(t[0]=i=>e.$emit("close"))},"×"),tm(e.$slots,"default",{},void 0)])]))}},rT=Bn(sT,[["__scopeId","data-v-96d8b394"]]),oT={class:"container"},aT={class:"resource-bar"},lT={class:"resource-item"},cT={class:"resource-item"},uT={class:"resource-item"},fT={class:"resource-item"},dT={class:"tab-bar"},hT=["onClick"],pT={class:"icon"},mT={__name:"App",setup(n){const e=At("home"),t=At(!1),i=At(null),s=[{id:"home",name:"农场",icon:"🏠"},{id:"exercise",name:"运动",icon:"🏃"},{id:"store",name:"商店",icon:"🏪"},{id:"warehouse",name:"仓库",icon:"📦"},{id:"social",name:"社交",icon:"👥"},{id:"achievement",name:"成就",icon:"🏆"}],r=Ft(()=>({home:oE,exercise:DE,store:pb,warehouse:Db,social:B1,achievement:iT})[e.value]);return ea(()=>{wn.resolvePkChallengesIfNeeded()}),(o,a)=>(me(),xe("div",oT,[w("div",aT,[w("div",lT,[a[1]||(a[1]=w("span",null,"💰",-1)),w("span",null,we(nt(ae).coins),1)]),w("div",cT,[a[2]||(a[2]=w("span",null,"💎",-1)),w("span",null,we(nt(ae).diamonds),1)]),w("div",uT,[a[3]||(a[3]=w("span",null,"⚡",-1)),w("span",null,we(nt(ae).energy)+"/"+we(nt(ae).maxEnergy),1)]),w("div",fT,[a[4]||(a[4]=w("span",null,"🔥",-1)),w("span",null,we(nt(ae).streakDays)+"天",1)])]),(me(),Gs(lu(r.value))),w("div",dT,[(me(),xe(ct,null,Ct(s,l=>w("div",{key:l.id,class:gn(["tab-item",{active:e.value===l.id}]),onClick:c=>e.value=l.id},[w("span",pT,we(l.icon),1),w("span",null,we(l.name),1)],10,hT)),64))]),t.value?(me(),Gs(rT,{key:0,onClose:a[0]||(a[0]=l=>t.value=!1)},{default:bd(()=>[(me(),Gs(lu(i.value)))]),_:1})):Dt("",!0)]))}};mg(mT).mount("#app");
