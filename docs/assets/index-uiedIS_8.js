(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},Us=[],Kn=()=>{},Xf=()=>!1,Vo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Go=n=>n.startsWith("onUpdate:"),tn=Object.assign,ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hh=Object.prototype.hasOwnProperty,ht=(n,e)=>Hh.call(n,e),Ye=Array.isArray,Ns=n=>Pr(n)==="[object Map]",Wo=n=>Pr(n)==="[object Set]",Jc=n=>Pr(n)==="[object Date]",et=n=>typeof n=="function",Ct=n=>typeof n=="string",In=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",$f=n=>(vt(n)||et(n))&&et(n.then)&&et(n.catch),qf=Object.prototype.toString,Pr=n=>qf.call(n),Vh=n=>Pr(n).slice(8,-1),Yf=n=>Pr(n)==="[object Object]",sc=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,dr=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Gh=/-\w/g,on=Xo(n=>n.replace(Gh,e=>e.slice(1).toUpperCase())),Wh=/\B([A-Z])/g,ds=Xo(n=>n.replace(Wh,"-$1").toLowerCase()),$o=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),aa=Xo(n=>n?`on${$o(n)}`:""),qn=(n,e)=>!Object.is(n,e),fo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},jf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},qo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qc;const Yo=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ct(i)?Yh(i):Zs(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(n)||vt(n))return n}const Xh=/;(?![^(]*\))/g,$h=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Yh(n){const e={};return n.replace(qh,"").split(Xh).forEach(t=>{if(t){const i=t.split($h);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pn(n){let e="";if(Ct(n))e=n;else if(Ye(n))for(let t=0;t<n.length;t++){const i=pn(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kh=nc(jh);function Kf(n){return!!n||n===""}function Zh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Dr(n[i],e[i]);return t}function Dr(n,e){if(n===e)return!0;let t=Jc(n),i=Jc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=In(n),i=In(e),t||i)return n===e;if(t=Ye(n),i=Ye(e),t||i)return t&&i?Zh(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Dr(n[o],e[o]))return!1}}return String(n)===String(e)}function Jh(n,e){return n.findIndex(t=>Dr(t,e))}const Zf=n=>!!(n&&n.__v_isRef===!0),Re=n=>Ct(n)?n:n==null?"":Ye(n)||vt(n)&&(n.toString===qf||!et(n.toString))?Zf(n)?Re(n.value):JSON.stringify(n,Jf,2):String(n),Jf=(n,e)=>Zf(e)?Jf(n,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[la(i,r)+" =>"]=s,t),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>la(t))}:In(e)?la(e):vt(e)&&!Ye(e)&&!Yf(e)?String(e):e,la=(n,e="")=>{var t;return In(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Qh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Vt&&(Vt.active?(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){if(this._on>0&&--this._on===0){if(Vt===this)Vt=this.prevScope;else{let e=Vt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ep(){return Vt}let Et;const ca=new WeakSet;class Qf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&(Vt.active?Vt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||td(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eu(this),nd(this);const e=Et,t=Ln;Et=this,Ln=!0;try{return this.fn()}finally{id(this),Et=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ac(e);this.deps=this.depsTail=void 0,eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let ed=0,hr,pr;function td(n,e=!1){if(n.flags|=8,e){n.next=pr,pr=n;return}n.next=hr,hr=n}function rc(){ed++}function oc(){if(--ed>0)return;if(pr){let e=pr;for(pr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;hr;){let e=hr;for(hr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function id(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ac(i),tp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===xr)||(n.globalVersion=xr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ja(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Ln;Et=n,Ln=!0;try{nd(n);const s=n.fn(n._value);(e.version===0||qn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Ln=i,id(n),n.flags&=-3}}function ac(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ac(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const rd=[];function Mi(){rd.push(Ln),Ln=!1}function Si(){const n=rd.pop();Ln=n===void 0?!0:n}function eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let xr=0;class np{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Ln||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new np(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,od(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,xr++,this.notify(e)}notify(e){rc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{oc()}}}function od(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)od(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Qa=new WeakMap,as=Symbol(""),el=Symbol(""),Mr=Symbol("");function jt(n,e,t){if(Ln&&Et){let i=Qa.get(n);i||Qa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new lc),s.map=i,s.key=t),s.track()}}function hi(n,e,t,i,s,r){const o=Qa.get(n);if(!o){xr++;return}const a=l=>{l&&l.trigger()};if(rc(),e==="clear")o.forEach(a);else{const l=Ye(n),c=l&&sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Mr||!In(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Mr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(as)),Ns(n)&&a(o.get(el)));break;case"delete":l||(a(o.get(as)),Ns(n)&&a(o.get(el)));break;case"set":Ns(n)&&a(o.get(as));break}}oc()}function ms(n){const e=dt(n);return e===n?e:(jt(e,"iterate",Mr),An(n)?e:e.map(Un))}function jo(n){return jt(n=dt(n),"iterate",Mr),n}function Gn(n,e){return yi(n)?Xs(ls(n)?Un(e):e):Un(e)}const ip={__proto__:null,[Symbol.iterator](){return ua(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return ms(this).concat(...n.map(e=>Ye(e)?ms(e):e))},entries(){return ua(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,e){return si(this,"every",n,e,void 0,arguments)},filter(n,e){return si(this,"filter",n,e,t=>t.map(i=>Gn(this,i)),arguments)},find(n,e){return si(this,"find",n,e,t=>Gn(this,t),arguments)},findIndex(n,e){return si(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return si(this,"findLast",n,e,t=>Gn(this,t),arguments)},findLastIndex(n,e){return si(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return si(this,"forEach",n,e,void 0,arguments)},includes(...n){return fa(this,"includes",n)},indexOf(...n){return fa(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return fa(this,"lastIndexOf",n)},map(n,e){return si(this,"map",n,e,void 0,arguments)},pop(){return Qs(this,"pop")},push(...n){return Qs(this,"push",n)},reduce(n,...e){return tu(this,"reduce",n,e)},reduceRight(n,...e){return tu(this,"reduceRight",n,e)},shift(){return Qs(this,"shift")},some(n,e){return si(this,"some",n,e,void 0,arguments)},splice(...n){return Qs(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return Qs(this,"unshift",n)},values(){return ua(this,"values",n=>Gn(this,n))}};function ua(n,e,t){const i=jo(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const sp=Array.prototype;function si(n,e,t,i,s,r){const o=jo(n),a=o!==n&&!An(n),l=o[e];if(l!==sp[e]){const d=l.apply(n,r);return a?Un(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,Gn(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function tu(n,e,t,i){const s=jo(n),r=s!==n&&!An(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Gn(n,c)),t.call(this,c,Gn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Gn(n,l):l}function fa(n,e,t){const i=dt(n);jt(i,"iterate",Mr);const s=i[e](...t);return(s===-1||s===!1)&&fc(t[0])?(t[0]=dt(t[0]),i[e](...t)):s}function Qs(n,e,t=[]){Mi(),rc();const i=dt(n)[e].apply(n,t);return oc(),Si(),i}const rp=nc("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function op(n){In(n)||(n=String(n));const e=dt(this);return jt(e,"has",n),e.hasOwnProperty(n)}class ld{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?_p:dd:r?fd:ud).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=ip[t]))return l;if(t==="hasOwnProperty")return op}const a=Reflect.get(e,t,Qt(e)?e:i);if((In(t)?ad.has(t):rp(t))||(s||jt(e,"get",t),r))return a;if(Qt(a)){const l=o&&sc(t)?a:a.value;return s&&vt(l)?nl(l):l}return vt(a)?s?nl(a):Sr(a):a}}class cd extends ld{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ye(e)&&sc(t);if(!this._isShallow){const c=yi(r);if(!An(i)&&!yi(i)&&(r=dt(r),i=dt(i)),!o&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,Qt(e)?e:s);return e===dt(s)&&(a?qn(i,r)&&hi(e,"set",t,i):hi(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&hi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!In(t)||!ad.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",Ye(e)?"length":as),Reflect.ownKeys(e)}}class ap extends ld{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lp=new cd,cp=new ap,up=new cd(!0);const tl=n=>n,kr=n=>Reflect.getPrototypeOf(n);function fp(n,e,t){return function(...i){const s=this.__v_raw,r=dt(s),o=Ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?tl:e?Xs:Un;return!e&&jt(r,"iterate",l?el:as),tn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dp(n,e){const t={get(s){const r=this.__v_raw,o=dt(r),a=dt(s);n||(qn(s,a)&&jt(o,"get",s),jt(o,"get",a));const{has:l}=kr(o),c=e?tl:n?Xs:Un;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&jt(dt(s),"iterate",as),s.size},has(s){const r=this.__v_raw,o=dt(r),a=dt(s);return n||(qn(s,a)&&jt(o,"has",s),jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=dt(a),c=e?tl:n?Xs:Un;return!n&&jt(l,"iterate",as),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return tn(t,n?{add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear")}:{add(s){const r=dt(this),o=kr(r),a=dt(s),l=!e&&!An(s)&&!yi(s)?a:s;return o.has.call(r,l)||qn(s,l)&&o.has.call(r,s)||qn(a,l)&&o.has.call(r,a)||(r.add(l),hi(r,"add",l,l)),this},set(s,r){!e&&!An(r)&&!yi(r)&&(r=dt(r));const o=dt(this),{has:a,get:l}=kr(o);let c=a.call(o,s);c||(s=dt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?qn(r,u)&&hi(o,"set",s,r):hi(o,"add",s,r),this},delete(s){const r=dt(this),{has:o,get:a}=kr(r);let l=o.call(r,s);l||(s=dt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&hi(r,"delete",s,void 0),c},clear(){const s=dt(this),r=s.size!==0,o=s.clear();return r&&hi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fp(s,n,e)}),t}function cc(n,e){const t=dp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}const hp={get:cc(!1,!1)},pp={get:cc(!1,!0)},mp={get:cc(!0,!1)};const ud=new WeakMap,fd=new WeakMap,dd=new WeakMap,_p=new WeakMap;function gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vp(n){return n.__v_skip||!Object.isExtensible(n)?0:gp(Vh(n))}function Sr(n){return yi(n)?n:uc(n,!1,lp,hp,ud)}function xp(n){return uc(n,!1,up,pp,fd)}function nl(n){return uc(n,!0,cp,mp,dd)}function uc(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=vp(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ls(n){return yi(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function yi(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function fc(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function Mp(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&jf(n,"__v_skip",!0),n}const Un=n=>vt(n)?Sr(n):n,Xs=n=>vt(n)?nl(n):n;function Qt(n){return n?n.__v_isRef===!0:!1}function bt(n){return Sp(n,!1)}function Sp(n,e){return Qt(n)?n:new yp(n,e)}class yp{constructor(e,t){this.dep=new lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:Un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||yi(e);e=i?e:dt(e),qn(e,t)&&(this._rawValue=e,this._value=i?e:Un(e),this.dep.trigger())}}function nt(n){return Qt(n)?n.value:n}const Ep={get:(n,e,t)=>e==="__v_raw"?n:nt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Qt(s)&&!Qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hd(n){return ls(n)?n:new Proxy(n,Ep)}class bp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return td(this,!0),!0}get value(){const e=this.dep.track();return sd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tp(n,e,t=!1){let i,s;return et(n)?i=n:(i=n.get,s=n.set),new bp(i,s,t)}const Hr={},bo=new WeakMap;let Qi;function Ap(n,e=!1,t=Qi){if(t){let i=bo.get(t);i||bo.set(t,i=[]),i.push(n)}}function wp(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:An(E)||s===!1||s===0?pi(E,1):pi(E);let u,d,f,h,g=!1,M=!1;if(Qt(n)?(d=()=>n.value,g=An(n)):ls(n)?(d=()=>c(n),g=!0):Ye(n)?(M=!0,g=n.some(E=>ls(E)||An(E)),d=()=>n.map(E=>{if(Qt(E))return E.value;if(ls(E))return c(E);if(et(E))return l?l(E,2):E()})):et(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Mi();try{f()}finally{Si()}}const E=Qi;Qi=u;try{return l?l(n,3,[h]):n(h)}finally{Qi=E}}:d=Kn,e&&s){const E=d,I=s===!0?1/0:s;d=()=>pi(E(),I)}const m=ep(),p=()=>{u.stop(),m&&m.active&&ic(m.effects,u)};if(r&&e){const E=e;e=(...I)=>{E(...I),p()}}let S=M?new Array(n.length).fill(Hr):Hr;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(s||g||(M?I.some((A,U)=>qn(A,S[U])):qn(I,S))){f&&f();const A=Qi;Qi=u;try{const U=[I,S===Hr?void 0:M&&S[0]===Hr?[]:S,h];S=I,l?l(e,3,U):e(...U)}finally{Qi=A}}}else u.run()};return a&&a(b),u=new Qf(d),u.scheduler=o?()=>o(b,!1):b,h=E=>Ap(E,!1,u),f=u.onStop=()=>{const E=bo.get(u);if(E){if(l)l(E,4);else for(const I of E)I();bo.delete(u)}},e?i?b(!0):S=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function pi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Qt(n))pi(n.value,e,t);else if(Ye(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(Wo(n)||Ns(n))n.forEach(i=>{pi(i,e,t)});else if(Yf(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(n,e,t,i){try{return i?n(...i):n()}catch(s){Ko(s,e,t)}}function ei(n,e,t,i){if(et(n)){const s=Lr(n,e,t,i);return s&&$f(s)&&s.catch(r=>{Ko(r,e,t)}),s}if(Ye(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ei(n[r],e,t,i));return s}}function Ko(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Mi(),Lr(r,null,10,[n,l,c]),Si();return}}Cp(n,t,s,i,o)}function Cp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const rn=[];let Vn=-1;const Fs=[];let Fi=null,Ls=0;const pd=Promise.resolve();let To=null;function md(n){const e=To||pd;return n?e.then(this?n.bind(this):n):e}function Rp(n){let e=Vn+1,t=rn.length;for(;e<t;){const i=e+t>>>1,s=rn[i],r=yr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function dc(n){if(!(n.flags&1)){const e=yr(n),t=rn[rn.length-1];!t||!(n.flags&2)&&e>=yr(t)?rn.push(n):rn.splice(Rp(e),0,n),n.flags|=1,_d()}}function _d(){To||(To=pd.then(vd))}function Pp(n){Ye(n)?Fs.push(...n):Fi&&n.id===-1?Fi.splice(Ls+1,0,n):n.flags&1||(Fs.push(n),n.flags|=1),_d()}function nu(n,e,t=Vn+1){for(;t<rn.length;t++){const i=rn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;rn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gd(n){if(Fs.length){const e=[...new Set(Fs)].sort((t,i)=>yr(t)-yr(i));if(Fs.length=0,Fi){Fi.push(...e);return}for(Fi=e,Ls=0;Ls<Fi.length;Ls++){const t=Fi[Ls];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Fi=null,Ls=0}}const yr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vd(n){try{for(Vn=0;Vn<rn.length;Vn++){const e=rn[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Lr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<rn.length;Vn++){const e=rn[Vn];e&&(e.flags&=-2)}Vn=-1,rn.length=0,gd(),To=null,(rn.length||Fs.length)&&vd()}}let Gt=null,xd=null;function Ao(n){const e=Gt;return Gt=n,xd=n&&n.type.__scopeId||null,e}function Md(n,e=Gt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&mu(-1);const r=Ao(e);let o;try{o=n(...s)}finally{Ao(r),i._d&&mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ui(n,e){if(Gt===null)return n;const t=ta(Gt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=St]=e[s];r&&(et(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function $i(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),ei(l,t,8,[n.el,a,n,e]),Si())}}function Dp(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function ho(n,e,t=!1){const i=Dm();if(i||Bs){let s=Bs?Bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}const Lp=Symbol.for("v-scx"),Ip=()=>ho(Lp);function mr(n,e,t){return Sd(n,e,t)}function Sd(n,e,t=St){const{immediate:i,deep:s,flush:r,once:o}=t,a=tn({},t),l=e&&i||!e&&r!=="post";let c;if(br){if(r==="sync"){const h=Ip();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Kn,h.resume=Kn,h.pause=Kn,h}}const u=Kt;a.call=(h,g,M)=>ei(h,u,g,M);let d=!1;r==="post"?a.scheduler=h=>{fn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():dc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=wp(n,e,a);return br&&(c?c.push(f):l&&f()),f}function Up(n,e,t){const i=this.proxy,s=Ct(n)?n.includes(".")?yd(i,n):()=>i[n]:n.bind(i,i);let r;et(e)?r=e:(r=e.handler,t=e);const o=Ir(this),a=Sd(s,r.bind(i),t);return o(),a}function yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Np=Symbol("_vte"),Fp=n=>n.__isTeleport,Op=Symbol("_leaveCb");function hc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,hc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ed(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function iu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const wo=new WeakMap;function _r(n,e,t,i,s=!1){if(Ye(n)){n.forEach((M,m)=>_r(M,e&&(Ye(e)?e[m]:e),t,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ta(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,d=a.setupState,f=dt(d),h=d===St?Xf:M=>iu(u,M)?!1:ht(f,M),g=(M,m)=>!(m&&iu(u,m));if(c!=null&&c!==l){if(su(e),Ct(c))u[c]=null,h(c)&&(d[c]=null);else if(Qt(c)){const M=e;g(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(et(l))Lr(l,a,12,[o,u]);else{const M=Ct(l),m=Qt(l);if(M||m){const p=()=>{if(n.f){const S=M?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ye(S)&&ic(S,r);else if(Ye(S))S.includes(r)||S.push(r);else if(M)u[l]=[r],h(l)&&(d[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else M?(u[l]=o,h(l)&&(d[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{p(),wo.delete(n)};S.id=-1,wo.set(n,S),fn(S,t)}else su(n),p()}}}function su(n){const e=wo.get(n);e&&(e.flags|=8,wo.delete(n))}Yo().requestIdleCallback;Yo().cancelIdleCallback;const Os=n=>!!n.type.__asyncLoader,bd=n=>n.type.__isKeepAlive;function Bp(n,e){Td(n,"a",e)}function kp(n,e){Td(n,"da",e)}function Td(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Zo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)bd(s.parent.vnode)&&zp(i,e,t,s),s=s.parent}}function zp(n,e,t,i){const s=Zo(e,n,i,!0);pc(()=>{ic(i[e],s)},t)}function Zo(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Mi();const a=Ir(t),l=ei(e,t,n,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const Ai=n=>(e,t=Kt)=>{(!br||n==="sp")&&Zo(n,(...i)=>e(...i),t)},Hp=Ai("bm"),Jo=Ai("m"),Vp=Ai("bu"),Gp=Ai("u"),Wp=Ai("bum"),pc=Ai("um"),Xp=Ai("sp"),$p=Ai("rtg"),qp=Ai("rtc");function Yp(n,e=Kt){Zo("ec",n,e)}const jp="components",Ad=Symbol.for("v-ndc");function ru(n){return Ct(n)?Kp(jp,n,!1)||n:n||Ad}function Kp(n,e,t=!0,i=!1){const s=Gt||Kt;if(s){const r=s.type;{const a=Fm(r,!1);if(a&&(a===e||a===on(e)||a===$o(on(e))))return r}const o=ou(s[n]||r[n],e)||ou(s.appContext[n],e);return!o&&i?r:o}}function ou(n,e){return n&&(n[e]||n[on(e)]||n[$o(on(e))])}function wt(n,e,t,i){let s;const r=t,o=Ye(n);if(o||Ct(n)){const a=o&&ls(n);let l=!1,c=!1;a&&(l=!An(n),c=yi(n),n=jo(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?Xs(Un(n[u])):Un(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Zp(n,e,t={},i,s){if(Gt.ce||Gt.parent&&Os(Gt.parent)&&Gt.parent.ce){const c=Object.keys(t).length>0;return de(),ks(at,null,[Xt("slot",t,i)],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),de();const o=r&&wd(r(t)),a=t.key||o&&o.key,l=ks(at,{key:(a&&!In(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function wd(n){return n.some(e=>gc(e)?!(e.type===Ei||e.type===at&&!wd(e.children)):!0)?n:null}const il=n=>n?qd(n)?ta(n):il(n.parent):null,gr=tn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Rd(n),$forceUpdate:n=>n.f||(n.f=()=>{dc(n.update)}),$nextTick:n=>n.n||(n.n=md.bind(n.proxy)),$watch:n=>Up.bind(n)}),da=(n,e)=>n!==St&&!n.__isScriptSetup&&ht(n,e),Jp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(da(i,e))return o[e]=1,i[e];if(s!==St&&ht(s,e))return o[e]=2,s[e];if(ht(r,e))return o[e]=3,r[e];if(t!==St&&ht(t,e))return o[e]=4,t[e];sl&&(o[e]=0)}}const c=gr[e];let u,d;if(c)return e==="$attrs"&&jt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==St&&ht(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return da(s,e)?(s[e]=t,!0):i!==St&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==St&&a[0]!=="$"&&ht(n,a)||da(e,a)||ht(r,a)||ht(i,a)||ht(gr,a)||ht(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function au(n){return Ye(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function Qp(n){const e=Rd(n),t=n.proxy,i=n.ctx;sl=!1,e.beforeCreate&&lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:b,unmounted:E,render:I,renderTracked:A,renderTriggered:U,errorCaptured:v,serverPrefetch:R,expose:k,inheritAttrs:D,components:G,directives:Z,filters:te}=e;if(c&&em(c,i,null),o)for(const z in o){const H=o[z];et(H)&&(i[z]=H.bind(t))}if(s){const z=s.call(t,t);vt(z)&&(n.data=Sr(z))}if(sl=!0,r)for(const z in r){const H=r[z],N=et(H)?H.bind(t,t):et(H.get)?H.get.bind(t,t):Kn,_e=!et(H)&&et(H.set)?H.set.bind(t):Kn,P=Nt({get:N,set:_e});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>P.value,set:j=>P.value=j})}if(a)for(const z in a)Cd(a[z],i,t,z);if(l){const z=et(l)?l.call(t):l;Reflect.ownKeys(z).forEach(H=>{Dp(H,z[H])})}u&&lu(u,n,"c");function X(z,H){Ye(H)?H.forEach(N=>z(N.bind(t))):H&&z(H.bind(t))}if(X(Hp,d),X(Jo,f),X(Vp,h),X(Gp,g),X(Bp,M),X(kp,m),X(Yp,v),X(qp,A),X($p,U),X(Wp,S),X(pc,E),X(Xp,R),Ye(k))if(k.length){const z=n.exposed||(n.exposed={});k.forEach(H=>{Object.defineProperty(z,H,{get:()=>t[H],set:N=>t[H]=N,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Kn&&(n.render=I),D!=null&&(n.inheritAttrs=D),G&&(n.components=G),Z&&(n.directives=Z),R&&Ed(n)}function em(n,e,t=Kn){Ye(n)&&(n=rl(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=ho(s.from||i,s.default,!0):r=ho(s.from||i):r=ho(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function lu(n,e,t){ei(Ye(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cd(n,e,t,i){let s=i.includes(".")?yd(t,i):()=>t[i];if(Ct(n)){const r=e[n];et(r)&&mr(s,r)}else if(et(n))mr(s,n.bind(t));else if(vt(n))if(Ye(n))n.forEach(r=>Cd(r,e,t,i));else{const r=et(n.handler)?n.handler.bind(t):e[n.handler];et(r)&&mr(s,r,n)}}function Rd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Co(l,c,o,!0)),Co(l,e,o)),vt(e)&&r.set(e,l),l}function Co(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Co(n,r,t,!0),s&&s.forEach(o=>Co(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tm={data:cu,props:uu,emits:uu,methods:lr,computed:lr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:lr,directives:lr,watch:im,provide:cu,inject:nm};function cu(n,e){return e?n?function(){return tn(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function nm(n,e){return lr(rl(n),rl(e))}function rl(n){if(Ye(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function nn(n,e){return n?[...new Set([].concat(n,e))]:e}function lr(n,e){return n?tn(Object.create(null),n,e):e}function uu(n,e){return n?Ye(n)&&Ye(e)?[...new Set([...n,...e])]:tn(Object.create(null),au(n),au(e??{})):e}function im(n,e){if(!n)return e;if(!e)return n;const t=tn(Object.create(null),n);for(const i in e)t[i]=nn(n[i],e[i]);return t}function Pd(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sm=0;function rm(n,e){return function(i,s=null){et(i)||(i=tn({},i)),s!=null&&!vt(s)&&(s=null);const r=Pd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:sm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&et(u.install)?(o.add(u),u.install(c,...d)):et(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Xt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ta(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ei(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Bs;Bs=c;try{return u()}finally{Bs=d}}};return c}}let Bs=null;const om=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${ds(e)}Modifiers`];function am(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),o=r&&om(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ct(u)?u.trim():u)),o.number&&(s=t.map(qo)));let a,l=i[a=aa(e)]||i[a=aa(on(e))];!l&&r&&(l=i[a=aa(ds(e))]),l&&ei(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ei(c,n,6,s)}}const lm=new WeakMap;function Dd(n,e,t=!1){const i=t?lm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!et(n)){const l=c=>{const u=Dd(c,e,!0);u&&(a=!0,tn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Ye(r)?r.forEach(l=>o[l]=null):tn(o,r),vt(n)&&i.set(n,o),o)}function Qo(n,e){return!n||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,ds(e))||ht(n,e))}function fu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:M}=n,m=Ao(n);let p,S;try{if(t.shapeFlag&4){const E=s||i,I=E;p=Wn(c.call(I,E,u,d,h,f,g)),S=a}else{const E=e;p=Wn(E.length>1?E(d,{attrs:a,slots:o,emit:l}):E(d,null)),S=e.props?a:cm(a)}}catch(E){vr.length=0,Ko(E,n,1),p=Xt(Ei)}let b=p;if(S&&M!==!1){const E=Object.keys(S),{shapeFlag:I}=b;E.length&&I&7&&(r&&E.some(Go)&&(S=um(S,r)),b=$s(b,S,!1,!0))}return t.dirs&&(b=$s(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&hc(b,t.transition),p=b,Ao(m),p}const cm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Vo(t))&&((e||(e={}))[t]=n[t]);return e},um=(n,e)=>{const t={};for(const i in n)(!Go(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?du(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ld(o,i,f)&&!Qo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?du(i,o,c):!0:!!o;return!1}function du(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ld(e,n,r)&&!Qo(t,r))return!0}return!1}function Ld(n,e,t){const i=n[t],s=e[t];return t==="style"&&vt(i)&&vt(s)?!Dr(i,s):i!==s}function dm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Id={},Ud=()=>Object.create(Id),Nd=n=>Object.getPrototypeOf(n)===Id;function hm(n,e,t,i=!1){const s={},r=Ud();n.propsDefaults=Object.create(null),Fd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:xp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function pm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=dt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Qo(n.emitsOptions,f))continue;const h=e[f];if(l)if(ht(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=on(f);s[g]=ol(l,a,g,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Fd(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ht(e,d)&&((u=ds(d))===d||!ht(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=ol(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],c=!0)}c&&hi(n.attrs,"set","")}function Fd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(dr(l))continue;const c=e[l];let u;s&&ht(s,u=on(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=dt(t),c=a||St;for(let u=0;u<r.length;u++){const d=r[u];t[d]=ol(s,l,d,c[d],n,!ht(c,d))}}return o}function ol(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&et(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ir(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ds(t))&&(i=!0))}return i}const mm=new WeakMap;function Od(n,e,t=!1){const i=t?mm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!et(n)){const u=d=>{l=!0;const[f,h]=Od(d,e,!0);tn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Us),Us;if(Ye(r))for(let u=0;u<r.length;u++){const d=on(r[u]);hu(d)&&(o[d]=St)}else if(r)for(const u in r){const d=on(u);if(hu(d)){const f=r[u],h=o[d]=Ye(f)||et(f)?{type:f}:tn({},f),g=h.type;let M=!1,m=!0;if(Ye(g))for(let p=0;p<g.length;++p){const S=g[p],b=et(S)&&S.name;if(b==="Boolean"){M=!0;break}else b==="String"&&(m=!1)}else M=et(g)&&g.name==="Boolean";h[0]=M,h[1]=m,(M||ht(h,"default"))&&a.push(d)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function hu(n){return n[0]!=="$"&&!dr(n)}const mc=n=>n==="_"||n==="_ctx"||n==="$stable",_c=n=>Ye(n)?n.map(Wn):[Wn(n)],_m=(n,e,t)=>{if(e._n)return e;const i=Md((...s)=>_c(e(...s)),t);return i._c=!1,i},Bd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(mc(s))continue;const r=n[s];if(et(r))e[s]=_m(s,r,i);else if(r!=null){const o=_c(r);e[s]=()=>o}}},kd=(n,e)=>{const t=_c(e);n.slots.default=()=>t},zd=(n,e,t)=>{for(const i in e)(t||!mc(i))&&(n[i]=e[i])},gm=(n,e,t)=>{const i=n.slots=Ud();if(n.vnode.shapeFlag&32){const s=e._;s?(zd(i,e,t),t&&jf(i,"_",s,!0)):Bd(e,i)}else e&&kd(n,e)},vm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:zd(s,e,t):(r=!e.$stable,Bd(e,s)),o=e}else e&&(kd(n,e),o={default:1});if(r)for(const a in s)!mc(a)&&o[a]==null&&delete s[a]},fn=Em;function xm(n){return Mm(n)}function Mm(n,e){const t=Yo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Kn,insertStaticContent:g}=n,M=(C,L,q,re=null,J=null,ae=null,ge=void 0,ye=null,T=!!L.dynamicChildren)=>{if(C===L)return;C&&!er(C,L)&&(re=Me(C),j(C,J,ae,!0),C=null),L.patchFlag===-2&&(T=!1,L.dynamicChildren=null);const{type:le,ref:be,shapeFlag:ve}=L;switch(le){case ea:m(C,L,q,re);break;case Ei:p(C,L,q,re);break;case po:C==null&&S(L,q,re,ge);break;case at:G(C,L,q,re,J,ae,ge,ye,T);break;default:ve&1?I(C,L,q,re,J,ae,ge,ye,T):ve&6?Z(C,L,q,re,J,ae,ge,ye,T):(ve&64||ve&128)&&le.process(C,L,q,re,J,ae,ge,ye,T,He)}be!=null&&J?_r(be,C&&C.ref,ae,L||C,!L):be==null&&C&&C.ref!=null&&_r(C.ref,null,ae,C,!0)},m=(C,L,q,re)=>{if(C==null)i(L.el=a(L.children),q,re);else{const J=L.el=C.el;L.children!==C.children&&c(J,L.children)}},p=(C,L,q,re)=>{C==null?i(L.el=l(L.children||""),q,re):L.el=C.el},S=(C,L,q,re)=>{[C.el,C.anchor]=g(C.children,L,q,re,C.el,C.anchor)},b=({el:C,anchor:L},q,re)=>{let J;for(;C&&C!==L;)J=f(C),i(C,q,re),C=J;i(L,q,re)},E=({el:C,anchor:L})=>{let q;for(;C&&C!==L;)q=f(C),s(C),C=q;s(L)},I=(C,L,q,re,J,ae,ge,ye,T)=>{if(L.type==="svg"?ge="svg":L.type==="math"&&(ge="mathml"),C==null)A(L,q,re,J,ae,ge,ye,T);else{const le=C.el&&C.el._isVueCE?C.el:null;try{le&&le._beginPatch(),R(C,L,J,ae,ge,ye,T)}finally{le&&le._endPatch()}}},A=(C,L,q,re,J,ae,ge,ye)=>{let T,le;const{props:be,shapeFlag:ve,transition:ne,dirs:Ne}=C;if(T=C.el=o(C.type,ae,be&&be.is,be),ve&8?u(T,C.children):ve&16&&v(C.children,T,null,re,J,ha(C,ae),ge,ye),Ne&&$i(C,null,re,"created"),U(T,C,C.scopeId,ge,re),be){for(const _ in be)_!=="value"&&!dr(_)&&r(T,_,null,be[_],ae,re);"value"in be&&r(T,"value",null,be.value,ae),(le=be.onVnodeBeforeMount)&&kn(le,re,C)}Ne&&$i(C,null,re,"beforeMount");const y=Sm(J,ne);y&&ne.beforeEnter(T),i(T,L,q),((le=be&&be.onVnodeMounted)||y||Ne)&&fn(()=>{try{le&&kn(le,re,C),y&&ne.enter(T),Ne&&$i(C,null,re,"mounted")}finally{}},J)},U=(C,L,q,re,J)=>{if(q&&h(C,q),re)for(let ae=0;ae<re.length;ae++)h(C,re[ae]);if(J){let ae=J.subTree;if(L===ae||Wd(ae.type)&&(ae.ssContent===L||ae.ssFallback===L)){const ge=J.vnode;U(C,ge,ge.scopeId,ge.slotScopeIds,J.parent)}}},v=(C,L,q,re,J,ae,ge,ye,T=0)=>{for(let le=T;le<C.length;le++){const be=C[le]=ye?di(C[le]):Wn(C[le]);M(null,be,L,q,re,J,ae,ge,ye)}},R=(C,L,q,re,J,ae,ge)=>{const ye=L.el=C.el;let{patchFlag:T,dynamicChildren:le,dirs:be}=L;T|=C.patchFlag&16;const ve=C.props||St,ne=L.props||St;let Ne;if(q&&qi(q,!1),(Ne=ne.onVnodeBeforeUpdate)&&kn(Ne,q,L,C),be&&$i(L,C,q,"beforeUpdate"),q&&qi(q,!0),(ve.innerHTML&&ne.innerHTML==null||ve.textContent&&ne.textContent==null)&&u(ye,""),le?k(C.dynamicChildren,le,ye,q,re,ha(L,J),ae):ge||H(C,L,ye,null,q,re,ha(L,J),ae,!1),T>0){if(T&16)D(ye,ve,ne,q,J);else if(T&2&&ve.class!==ne.class&&r(ye,"class",null,ne.class,J),T&4&&r(ye,"style",ve.style,ne.style,J),T&8){const y=L.dynamicProps;for(let _=0;_<y.length;_++){const O=y[_],Q=ve[O],ce=ne[O];(ce!==Q||O==="value")&&r(ye,O,Q,ce,J,q)}}T&1&&C.children!==L.children&&u(ye,L.children)}else!ge&&le==null&&D(ye,ve,ne,q,J);((Ne=ne.onVnodeUpdated)||be)&&fn(()=>{Ne&&kn(Ne,q,L,C),be&&$i(L,C,q,"updated")},re)},k=(C,L,q,re,J,ae,ge)=>{for(let ye=0;ye<L.length;ye++){const T=C[ye],le=L[ye],be=T.el&&(T.type===at||!er(T,le)||T.shapeFlag&198)?d(T.el):q;M(T,le,be,null,re,J,ae,ge,!0)}},D=(C,L,q,re,J)=>{if(L!==q){if(L!==St)for(const ae in L)!dr(ae)&&!(ae in q)&&r(C,ae,L[ae],null,J,re);for(const ae in q){if(dr(ae))continue;const ge=q[ae],ye=L[ae];ge!==ye&&ae!=="value"&&r(C,ae,ye,ge,J,re)}"value"in q&&r(C,"value",L.value,q.value,J)}},G=(C,L,q,re,J,ae,ge,ye,T)=>{const le=L.el=C?C.el:a(""),be=L.anchor=C?C.anchor:a("");let{patchFlag:ve,dynamicChildren:ne,slotScopeIds:Ne}=L;Ne&&(ye=ye?ye.concat(Ne):Ne),C==null?(i(le,q,re),i(be,q,re),v(L.children||[],q,be,J,ae,ge,ye,T)):ve>0&&ve&64&&ne&&C.dynamicChildren&&C.dynamicChildren.length===ne.length?(k(C.dynamicChildren,ne,q,J,ae,ge,ye),(L.key!=null||J&&L===J.subTree)&&Hd(C,L,!0)):H(C,L,q,be,J,ae,ge,ye,T)},Z=(C,L,q,re,J,ae,ge,ye,T)=>{L.slotScopeIds=ye,C==null?L.shapeFlag&512?J.ctx.activate(L,q,re,ge,T):te(L,q,re,J,ae,ge,T):B(C,L,T)},te=(C,L,q,re,J,ae,ge)=>{const ye=C.component=Pm(C,re,J);if(bd(C)&&(ye.ctx.renderer=He),Lm(ye,!1,ge),ye.asyncDep){if(J&&J.registerDep(ye,X,ge),!C.el){const T=ye.subTree=Xt(Ei);p(null,T,L,q),C.placeholder=T.el}}else X(ye,C,L,q,J,ae,ge)},B=(C,L,q)=>{const re=L.component=C.component;if(fm(C,L,q))if(re.asyncDep&&!re.asyncResolved){z(re,L,q);return}else re.next=L,re.update();else L.el=C.el,re.vnode=L},X=(C,L,q,re,J,ae,ge)=>{const ye=()=>{if(C.isMounted){let{next:ve,bu:ne,u:Ne,parent:y,vnode:_}=C;{const Se=Vd(C);if(Se){ve&&(ve.el=_.el,z(C,ve,ge)),Se.asyncDep.then(()=>{fn(()=>{C.isUnmounted||le()},J)});return}}let O=ve,Q;qi(C,!1),ve?(ve.el=_.el,z(C,ve,ge)):ve=_,ne&&fo(ne),(Q=ve.props&&ve.props.onVnodeBeforeUpdate)&&kn(Q,y,ve,_),qi(C,!0);const ce=fu(C),xe=C.subTree;C.subTree=ce,M(xe,ce,d(xe.el),Me(xe),C,J,ae),ve.el=ce.el,O===null&&dm(C,ce.el),Ne&&fn(Ne,J),(Q=ve.props&&ve.props.onVnodeUpdated)&&fn(()=>kn(Q,y,ve,_),J)}else{let ve;const{el:ne,props:Ne}=L,{bm:y,m:_,parent:O,root:Q,type:ce}=C,xe=Os(L);qi(C,!1),y&&fo(y),!xe&&(ve=Ne&&Ne.onVnodeBeforeMount)&&kn(ve,O,L),qi(C,!0);{Q.ce&&Q.ce._hasShadowRoot()&&Q.ce._injectChildStyle(ce,C.parent?C.parent.type:void 0);const Se=C.subTree=fu(C);M(null,Se,q,re,C,J,ae),L.el=Se.el}if(_&&fn(_,J),!xe&&(ve=Ne&&Ne.onVnodeMounted)){const Se=L;fn(()=>kn(ve,O,Se),J)}(L.shapeFlag&256||O&&Os(O.vnode)&&O.vnode.shapeFlag&256)&&C.a&&fn(C.a,J),C.isMounted=!0,L=q=re=null}};C.scope.on();const T=C.effect=new Qf(ye);C.scope.off();const le=C.update=T.run.bind(T),be=C.job=T.runIfDirty.bind(T);be.i=C,be.id=C.uid,T.scheduler=()=>dc(be),qi(C,!0),le()},z=(C,L,q)=>{L.component=C;const re=C.vnode.props;C.vnode=L,C.next=null,pm(C,L.props,re,q),vm(C,L.children,q),Mi(),nu(C),Si()},H=(C,L,q,re,J,ae,ge,ye,T=!1)=>{const le=C&&C.children,be=C?C.shapeFlag:0,ve=L.children,{patchFlag:ne,shapeFlag:Ne}=L;if(ne>0){if(ne&128){_e(le,ve,q,re,J,ae,ge,ye,T);return}else if(ne&256){N(le,ve,q,re,J,ae,ge,ye,T);return}}Ne&8?(be&16&&ie(le,J,ae),ve!==le&&u(q,ve)):be&16?Ne&16?_e(le,ve,q,re,J,ae,ge,ye,T):ie(le,J,ae,!0):(be&8&&u(q,""),Ne&16&&v(ve,q,re,J,ae,ge,ye,T))},N=(C,L,q,re,J,ae,ge,ye,T)=>{C=C||Us,L=L||Us;const le=C.length,be=L.length,ve=Math.min(le,be);let ne;for(ne=0;ne<ve;ne++){const Ne=L[ne]=T?di(L[ne]):Wn(L[ne]);M(C[ne],Ne,q,null,J,ae,ge,ye,T)}le>be?ie(C,J,ae,!0,!1,ve):v(L,q,re,J,ae,ge,ye,T,ve)},_e=(C,L,q,re,J,ae,ge,ye,T)=>{let le=0;const be=L.length;let ve=C.length-1,ne=be-1;for(;le<=ve&&le<=ne;){const Ne=C[le],y=L[le]=T?di(L[le]):Wn(L[le]);if(er(Ne,y))M(Ne,y,q,null,J,ae,ge,ye,T);else break;le++}for(;le<=ve&&le<=ne;){const Ne=C[ve],y=L[ne]=T?di(L[ne]):Wn(L[ne]);if(er(Ne,y))M(Ne,y,q,null,J,ae,ge,ye,T);else break;ve--,ne--}if(le>ve){if(le<=ne){const Ne=ne+1,y=Ne<be?L[Ne].el:re;for(;le<=ne;)M(null,L[le]=T?di(L[le]):Wn(L[le]),q,y,J,ae,ge,ye,T),le++}}else if(le>ne)for(;le<=ve;)j(C[le],J,ae,!0),le++;else{const Ne=le,y=le,_=new Map;for(le=y;le<=ne;le++){const Te=L[le]=T?di(L[le]):Wn(L[le]);Te.key!=null&&_.set(Te.key,le)}let O,Q=0;const ce=ne-y+1;let xe=!1,Se=0;const ee=new Array(ce);for(le=0;le<ce;le++)ee[le]=0;for(le=Ne;le<=ve;le++){const Te=C[le];if(Q>=ce){j(Te,J,ae,!0);continue}let De;if(Te.key!=null)De=_.get(Te.key);else for(O=y;O<=ne;O++)if(ee[O-y]===0&&er(Te,L[O])){De=O;break}De===void 0?j(Te,J,ae,!0):(ee[De-y]=le+1,De>=Se?Se=De:xe=!0,M(Te,L[De],q,null,J,ae,ge,ye,T),Q++)}const ue=xe?ym(ee):Us;for(O=ue.length-1,le=ce-1;le>=0;le--){const Te=y+le,De=L[Te],Ae=L[Te+1],Ee=Te+1<be?Ae.el||Gd(Ae):re;ee[le]===0?M(null,De,q,Ee,J,ae,ge,ye,T):xe&&(O<0||le!==ue[O]?P(De,q,Ee,2):O--)}}},P=(C,L,q,re,J=null)=>{const{el:ae,type:ge,transition:ye,children:T,shapeFlag:le}=C;if(le&6){P(C.component.subTree,L,q,re);return}if(le&128){C.suspense.move(L,q,re);return}if(le&64){ge.move(C,L,q,He);return}if(ge===at){i(ae,L,q);for(let ve=0;ve<T.length;ve++)P(T[ve],L,q,re);i(C.anchor,L,q);return}if(ge===po){b(C,L,q);return}if(re!==2&&le&1&&ye)if(re===0)ye.beforeEnter(ae),i(ae,L,q),fn(()=>ye.enter(ae),J);else{const{leave:ve,delayLeave:ne,afterLeave:Ne}=ye,y=()=>{C.ctx.isUnmounted?s(ae):i(ae,L,q)},_=()=>{ae._isLeaving&&ae[Op](!0),ve(ae,()=>{y(),Ne&&Ne()})};ne?ne(ae,y,_):_()}else i(ae,L,q)},j=(C,L,q,re=!1,J=!1)=>{const{type:ae,props:ge,ref:ye,children:T,dynamicChildren:le,shapeFlag:be,patchFlag:ve,dirs:ne,cacheIndex:Ne,memo:y}=C;if(ve===-2&&(J=!1),ye!=null&&(Mi(),_r(ye,null,q,C,!0),Si()),Ne!=null&&(L.renderCache[Ne]=void 0),be&256){L.ctx.deactivate(C);return}const _=be&1&&ne,O=!Os(C);let Q;if(O&&(Q=ge&&ge.onVnodeBeforeUnmount)&&kn(Q,L,C),be&6)Ce(C.component,q,re);else{if(be&128){C.suspense.unmount(q,re);return}_&&$i(C,null,L,"beforeUnmount"),be&64?C.type.remove(C,L,q,He,re):le&&!le.hasOnce&&(ae!==at||ve>0&&ve&64)?ie(le,L,q,!1,!0):(ae===at&&ve&384||!J&&be&16)&&ie(T,L,q),re&&fe(C)}const ce=y!=null&&Ne==null;(O&&(Q=ge&&ge.onVnodeUnmounted)||_||ce)&&fn(()=>{Q&&kn(Q,L,C),_&&$i(C,null,L,"unmounted"),ce&&(C.el=null)},q)},fe=C=>{const{type:L,el:q,anchor:re,transition:J}=C;if(L===at){ke(q,re);return}if(L===po){E(C);return}const ae=()=>{s(q),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:ge,delayLeave:ye}=J,T=()=>ge(q,ae);ye?ye(C.el,ae,T):T()}else ae()},ke=(C,L)=>{let q;for(;C!==L;)q=f(C),s(C),C=q;s(L)},Ce=(C,L,q)=>{const{bum:re,scope:J,job:ae,subTree:ge,um:ye,m:T,a:le}=C;pu(T),pu(le),re&&fo(re),J.stop(),ae&&(ae.flags|=8,j(ge,C,L,q)),ye&&fn(ye,L),fn(()=>{C.isUnmounted=!0},L)},ie=(C,L,q,re=!1,J=!1,ae=0)=>{for(let ge=ae;ge<C.length;ge++)j(C[ge],L,q,re,J)},Me=C=>{if(C.shapeFlag&6)return Me(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const L=f(C.anchor||C.el),q=L&&L[Np];return q?f(q):L};let he=!1;const ze=(C,L,q)=>{let re;C==null?L._vnode&&(j(L._vnode,null,null,!0),re=L._vnode.component):M(L._vnode||null,C,L,null,null,null,q),L._vnode=C,he||(he=!0,nu(re),gd(),he=!1)},He={p:M,um:j,m:P,r:fe,mt:te,mc:v,pc:H,pbc:k,n:Me,o:n};return{render:ze,hydrate:void 0,createApp:rm(ze)}}function ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Sm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hd(n,e,t=!1){const i=n.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Hd(o,a)),a.type===ea&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===Ei&&!a.el&&(a.el=o.el)}}function ym(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Vd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vd(e)}function pu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Gd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Gd(e.subTree):null}const Wd=n=>n.__isSuspense;function Em(n,e){e&&e.pendingBranch?Ye(n)?e.effects.push(...n):e.effects.push(n):Pp(n)}const at=Symbol.for("v-fgt"),ea=Symbol.for("v-txt"),Ei=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),vr=[];let Sn=null;function de(n=!1){vr.push(Sn=n?null:[])}function bm(){vr.pop(),Sn=vr[vr.length-1]||null}let Er=1;function mu(n,e=!1){Er+=n,n<0&&Sn&&e&&(Sn.hasOnce=!0)}function Xd(n){return n.dynamicChildren=Er>0?Sn||Us:null,bm(),Er>0&&Sn&&Sn.push(n),n}function me(n,e,t,i,s,r){return Xd(w(n,e,t,i,s,r,!0))}function ks(n,e,t,i,s){return Xd(Xt(n,e,t,i,s,!0))}function gc(n){return n?n.__v_isVNode===!0:!1}function er(n,e){return n.type===e.type&&n.key===e.key}const $d=({key:n})=>n??null,mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||Qt(n)||et(n)?{i:Gt,r:n,k:e,f:!!t}:n:null);function w(n,e=null,t=null,i=0,s=null,r=n===at?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$d(e),ref:e&&mo(e),scopeId:xd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return a?(vc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),Er>0&&!o&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const Xt=Tm;function Tm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ad)&&(n=Ei),gc(n)){const a=$s(n,e,!0);return t&&vc(a,t),Er>0&&!r&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if(Om(n)&&(n=n.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=pn(a)),vt(l)&&(fc(l)&&!Ye(l)&&(l=tn({},l)),e.style=Zs(l))}const o=Ct(n)?1:Wd(n)?128:Fp(n)?64:vt(n)?4:et(n)?2:0;return w(n,e,t,i,s,o,r,!0)}function Am(n){return n?fc(n)||Nd(n)?tn({},n):n:null}function $s(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?wm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$d(c),ref:e&&e.ref?t&&r?Ye(r)?r.concat(mo(e)):[r,mo(e)]:mo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==at?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$s(n.ssContent),ssFallback:n.ssFallback&&$s(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hc(u,l.clone(u)),u}function dn(n=" ",e=0){return Xt(ea,null,n,e)}function xn(n,e){const t=Xt(po,null,n);return t.staticCount=e,t}function Pt(n="",e=!1){return e?(de(),ks(Ei,null,n)):Xt(Ei,null,n)}function Wn(n){return n==null||typeof n=="boolean"?Xt(Ei):Ye(n)?Xt(at,null,n.slice()):gc(n)?di(n):Xt(ea,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$s(n)}function vc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ye(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),vc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Nd(e)?e._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[dn(e)]):t=8);n.children=e,n.shapeFlag|=t}function wm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pn([e.class,i.class]));else if(s==="style")e.style=Zs([e.style,i.style]);else if(Vo(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Go(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){ei(n,e,7,[t,i])}const Cm=Pd();let Rm=0;function Pm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cm,r={uid:Rm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Od(i,s),emitsOptions:Dd(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=am.bind(null,r),n.ce&&n.ce(r),r}let Kt=null;const Dm=()=>Kt||Gt;let Ro,al;{const n=Yo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ro=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),al=e("__VUE_SSR_SETTERS__",t=>br=t)}const Ir=n=>{const e=Kt;return Ro(n),n.scope.on(),()=>{n.scope.off(),Ro(e)}},_u=()=>{Kt&&Kt.scope.off(),Ro(null)};function qd(n){return n.vnode.shapeFlag&4}let br=!1;function Lm(n,e=!1,t=!1){e&&al(e);const{props:i,children:s}=n.vnode,r=qd(n);hm(n,i,r,e),gm(n,s,t||e);const o=r?Im(n,e):void 0;return e&&al(!1),o}function Im(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jp);const{setup:i}=t;if(i){Mi();const s=n.setupContext=i.length>1?Nm(n):null,r=Ir(n),o=Lr(i,n,0,[n.props,s]),a=$f(o);if(Si(),r(),(a||n.sp)&&!Os(n)&&Ed(n),a){if(o.then(_u,_u),e)return o.then(l=>{gu(n,l)}).catch(l=>{Ko(l,n,0)});n.asyncDep=o}else gu(n,o)}else Yd(n)}function gu(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=hd(e)),Yd(n)}function Yd(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const s=Ir(n);Mi();try{Qp(n)}finally{Si(),s()}}}const Um={get(n,e){return jt(n,"get",""),n[e]}};function Nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Um),slots:n.slots,emit:n.emit,expose:e}}function ta(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hd(Mp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gr)return gr[t](n)},has(e,t){return t in e||t in gr}})):n.proxy}function Fm(n,e=!0){return et(n)?n.displayName||n.name:n.name||e&&n.__name}function Om(n){return et(n)&&"__vccOpts"in n}const Nt=(n,e)=>Tp(n,e,br),Bm="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const vu=typeof window<"u"&&window.trustedTypes;if(vu)try{ll=vu.createPolicy("vue",{createHTML:n=>n})}catch{}const jd=ll?n=>ll.createHTML(n):n=>n,km="http://www.w3.org/2000/svg",zm="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,xu=fi&&fi.createElement("template"),Hm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?fi.createElementNS(km,n):e==="mathml"?fi.createElementNS(zm,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{xu.innerHTML=jd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vm=Symbol("_vtc");function Gm(n,e,t){const i=n[Vm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Mu=Symbol("_vod"),Wm=Symbol("_vsh"),Xm=Symbol(""),$m=/(?:^|;)\s*display\s*:/;function qm(n,e,t){const i=n.style,s=Ct(t);let r=!1;if(t&&!s){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&cr(i,a,"")}else for(const o in e)t[o]==null&&cr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?jm(n,o,!Ct(e)&&e?e[o]:void 0,a)||cr(i,o,a):cr(i,o,"")}}else if(s){if(e!==t){const o=i[Xm];o&&(t+=";"+o),i.cssText=t,r=$m.test(t)}}else e&&n.removeAttribute("style");Mu in n&&(n[Mu]=r?i.display:"",n[Wm]&&(i.display="none"))}const Su=/\s*!important$/;function cr(n,e,t){if(Ye(t))t.forEach(i=>cr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ym(n,e);Su.test(t)?n.setProperty(ds(i),t.replace(Su,""),"important"):n[i]=t}}const yu=["Webkit","Moz","ms"],pa={};function Ym(n,e){const t=pa[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return pa[e]=i;i=$o(i);for(let s=0;s<yu.length;s++){const r=yu[s]+i;if(r in n)return pa[e]=r}return e}function jm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ct(i)&&t===i}const Eu="http://www.w3.org/1999/xlink";function bu(n,e,t,i,s,r=Kh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Eu,e.slice(6,e.length)):n.setAttributeNS(Eu,e,t):t==null||r&&!Kf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":In(t)?String(t):t)}function Tu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Kf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ts(n,e,t,i){n.addEventListener(e,t,i)}function Km(n,e,t,i){n.removeEventListener(e,t,i)}const Au=Symbol("_vei");function Zm(n,e,t,i,s=null){const r=n[Au]||(n[Au]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Jm(e);if(i){const c=r[e]=t_(i,s);ts(n,a,c,l)}else o&&(Km(n,a,o,l),r[e]=void 0)}}const wu=/(?:Once|Passive|Capture)$/;function Jm(n){let e;if(wu.test(n)){e={};let i;for(;i=n.match(wu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ds(n.slice(2)),e]}let ma=0;const Qm=Promise.resolve(),e_=()=>ma||(Qm.then(()=>ma=0),ma=Date.now());function t_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ei(n_(i,t.value),e,5,[i])};return t.value=n,t.attached=e_(),t}function n_(n,e){if(Ye(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,i_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Gm(n,i,o):e==="style"?qm(n,t,i):Vo(e)?Go(e)||Zm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):s_(n,e,i,o))?(Tu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bu(n,e,i,o,r,e!=="value")):n._isVueCE&&(r_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ct(i)))?Tu(n,on(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bu(n,e,i,o))};function s_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Cu(e)&&et(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cu(e)&&Ct(t)?!1:e in n}function r_(n,e){const t=n._def.props;if(!t)return!1;const i=on(e);return Array.isArray(t)?t.some(s=>on(s)===i):Object.keys(t).some(s=>on(s)===i)}const Po=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ye(e)?t=>fo(e,t):e};function o_(n){n.target.composing=!0}function Ru(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zs=Symbol("_assign");function Pu(n,e,t){return e&&(n=n.trim()),t&&(n=qo(n)),n}const es={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[zs]=Po(s);const r=i||s.props&&s.props.type==="number";ts(n,e?"change":"input",o=>{o.target.composing||n[zs](Pu(n.value,t,r))}),(t||r)&&ts(n,"change",()=>{n.value=Pu(n.value,t,r)}),e||(ts(n,"compositionstart",o_),ts(n,"compositionend",Ru),ts(n,"change",Ru))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[zs]=Po(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?qo(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Du={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Wo(e);ts(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?qo(Do(o)):Do(o));n[zs](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,md(()=>{n._assigning=!1})}),n[zs]=Po(i)},mounted(n,{value:e}){Lu(n,e)},beforeUpdate(n,e,t){n[zs]=Po(t)},updated(n,{value:e}){n._assigning||Lu(n,e)}};function Lu(n,e){const t=n.multiple,i=Ye(e);if(!(t&&!i&&!Wo(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Do(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Jh(e,a)>-1}else o.selected=e.has(a);else if(Dr(Do(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Do(n){return"_value"in n?n._value:n.value}const a_=["ctrl","shift","alt","meta"],l_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>a_.some(t=>n[`${t}Key`]&&!e.includes(t))},ss=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=l_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},c_=tn({patchProp:i_},Hm);let Iu;function u_(){return Iu||(Iu=xm(c_))}const f_=(...n)=>{const e=u_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=h_(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,d_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function d_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function h_(n){return Ct(n)?document.querySelector(n):n}const Uu=[{id:"running",name:"跑步",icon:"🏃",coinsPerMin:1,expPerMin:10,energyPerMin:5},{id:"gym",name:"健身房",icon:"🏋️",coinsPerMin:1.5,expPerMin:15,energyPerMin:8},{id:"ball",name:"球类运动",icon:"⚽",coinsPerMin:1.2,expPerMin:12,energyPerMin:6},{id:"cycling",name:"骑行",icon:"🚴",coinsPerMin:1,expPerMin:10,energyPerMin:4},{id:"other",name:"其他",icon:"💪",coinsPerMin:.8,expPerMin:8,energyPerMin:4}],Zt={carrot:{name:"胡萝卜",icon:"🥕",growTime:2,price:10,sellPrice:15,unlock:null},tomato:{name:"番茄",icon:"🍅",growTime:4,price:25,sellPrice:38,unlock:null},corn:{name:"玉米",icon:"🌽",growTime:6,price:40,sellPrice:60,unlock:{level:3}},strawberry:{name:"草莓",icon:"🍓",growTime:8,price:60,sellPrice:90,unlock:{streak:7}},pumpkin:{name:"南瓜",icon:"🎃",growTime:12,price:100,sellPrice:150,unlock:{level:5}},grape:{name:"葡萄",icon:"🍇",growTime:18,price:150,sellPrice:225,unlock:{streak:14}},watermelon:{name:"西瓜",icon:"🍉",growTime:24,price:200,sellPrice:300,unlock:{level:7}},apple:{name:"苹果",icon:"🍎",growTime:48,price:400,sellPrice:600,unlock:{level:10}}},Lo={greenhouse:{name:"温室",icon:"🏠",price:500,effect:"作物生长加速2倍",unlock:{level:2}},warehouse:{name:"仓库",icon:"🏚️",price:1e3,effect:"存储上限+50",unlock:{level:3}},petHouse:{name:"宠物屋",icon:"🐕",price:2e3,effect:"饲养宠物",unlock:{streak:14}},mill:{name:"磨坊",icon:"⚙️",price:3e3,effect:"加工溢价50%",unlock:{level:5}},restaurant:{name:"餐厅",icon:"🍽️",price:5e3,effect:"烹饪增益",unlock:{streak:30}},gym:{name:"运动馆",icon:"🏟️",price:1e4,effect:"运动收益+10%",unlock:{level:10}}},Hs={chicken:{name:"小鸡",icon:"🐔",price:100,effect:"收益+5%",unlock:null},dog:{name:"小狗",icon:"🐕",price:500,effect:"防偷+10%",unlock:{level:3}},cat:{name:"小猫",icon:"🐱",price:500,effect:"产出+10%",unlock:{level:3}},rabbit:{name:"兔子",icon:"🐰",price:1e3,effect:"快速收获",unlock:{streak:14}},horse:{name:"马驹",icon:"🐴",price:3e3,effect:"运动效率+10%",unlock:{level:5}}},p_={firstExercise:{name:"初次运动",desc:"完成首次运动",reward:{coins:100}},streak7:{name:"坚持不懈",desc:"连续运动7天",reward:{crops:["strawberry"]}},streak14:{name:"循序渐进",desc:"连续运动14天",reward:{crops:["grape"],buildings:["petHouse"]}},streak30:{name:"持之以恒",desc:"连续运动30天",reward:{crops:["grape"]}},level5:{name:"运动达人",desc:"达到5级",reward:{coins:500}},rich:{name:"农场主",desc:"金币超过10000",reward:{diamonds:100}}},_o=[{level:1,exp:0,title:"青铜运动员"},{level:2,exp:1e3,title:"白银运动员"},{level:3,exp:3e3,title:"黄金运动员"},{level:5,exp:8e3,title:"铂金运动员"},{level:10,exp:2e4,title:"钻石运动员"}],Io=[{id:"exercise_minutes",label:"运动总时长",unit:"分钟",hint:"挑战有效期内，累计完成运动分钟更多的一方获胜"},{id:"exercise_sessions",label:"运动打卡次数",unit:"次",hint:"挑战有效期内，完成「开始运动」打卡次数更多的一方获胜（每次打卡算一次）"}];function Yi(n){return Io.find(e=>e.id===n)||Io[0]}const Kd="fitfarm_user_state";function cs(n){const e={};for(const[t,i]of Object.entries(n||{})){const s=Math.max(0,Math.floor(Number(i)));s>0&&(e[t]=s)}return e}function m_(n,e){const t={...cs(n)};for(const[i,s]of Object.entries(cs(e)))t[i]=(t[i]||0)+s;return t}function cl(n,e){for(const[t,i]of Object.entries(cs(e)))if((n.crops[t]||0)<i)return!1;return!0}function __(n,e){const t=cs(e);if(!cl(n,t))return!1;for(const[i,s]of Object.entries(t))n.crops[i]=(n.crops[i]||0)-s,n.crops[i]<=0&&delete n.crops[i];return!0}function g_(n,e){for(const[t,i]of Object.entries(cs(e)))n.crops[t]=(n.crops[t]||0)+i}function _a(n){var t;let e=0;for(const i of n||[])e+=((t=Hs[i])==null?void 0:t.price)||0;return e}function v_(){return`pk_${Date.now()}_${Math.random().toString(36).slice(2,11)}`}const x_={coins:500,diamonds:10,energy:100,maxEnergy:100,level:1,experience:0,streakDays:0,lastExerciseDate:null,farmGrid:Array(9).fill(null).map((n,e)=>({id:e,crop:null,plantedAt:null,status:"empty"})),warehouse:{crops:{},items:{}},unlockedCrops:["carrot","tomato"],unlockedBuildings:[],unlockedPets:["chicken"],unlockedRecipes:[],activeBuffs:[],achievements:{},stats:{totalExerciseTime:0,totalCoinsEarned:0,totalStealCount:0,pkWins:0},dailyReset:null,stealCount:0,pkChallenges:[]};function M_(){const n=localStorage.getItem(Kd);if(n){const e=JSON.parse(n),t=new Date().toDateString();return e.dailyReset!==t&&(e.dailyReset=t,e.stealCount=0,e.energy=Math.min(e.energy+20,e.maxEnergy)),Array.isArray(e.pkChallenges)||(e.pkChallenges=[]),Sr(e)}return Sr({...x_})}function S_(){localStorage.setItem(Kd,JSON.stringify(se))}const se=M_();mr(se,S_,{deep:!0});const Tn={doExercise(n,e,t){const i=t.find(u=>u.id===n);if(!i)return{success:!1,message:"运动类型不存在"};const s=e*i.energyPerMin;if(se.energy<s)return{success:!1,message:"体力不足"};let r=1,o=1;se.activeBuffs.forEach(u=>{u.type==="gain"&&(r+=.15),u.type==="strength"&&(o+=.2)});const a=Math.floor(e*i.coinsPerMin*r),l=Math.floor(e*i.expPerMin*o);se.coins+=a,se.experience+=l,se.energy-=s,se.stats.totalExerciseTime+=e,se.stats.totalCoinsEarned+=a,Tn.resolvePkChallengesIfNeeded(),Tn.recordPkExercise(e);const c=new Date().toDateString();if(se.lastExerciseDate!==c){if(se.lastExerciseDate){const u=new Date(se.lastExerciseDate),d=new Date;d.setDate(d.getDate()-1),u.toDateString()===d.toDateString()?se.streakDays++:se.streakDays=1}else se.streakDays=1;se.lastExerciseDate=c,this.checkUnlocks()}return this.checkLevelUp(),{success:!0,coins:a,exp:l}},checkUnlocks(){Object.entries(Zt).forEach(([n,e])=>{e.unlock&&!se.unlockedCrops.includes(n)&&(e.unlock.level&&se.level>=e.unlock.level&&se.unlockedCrops.push(n),e.unlock.streak&&se.streakDays>=e.unlock.streak&&se.unlockedCrops.push(n))}),Object.entries(Lo).forEach(([n,e])=>{e.unlock&&!se.unlockedBuildings.includes(n)&&(e.unlock.level&&se.level>=e.unlock.level&&se.unlockedBuildings.push(n),e.unlock.streak&&se.streakDays>=e.unlock.streak&&se.unlockedBuildings.push(n))})},checkLevelUp(){const n=_o.find(e=>se.experience>=e.exp);n&&n.level>se.level&&(se.level=n.level,this.checkUnlocks())},plantCrop(n,e){const t=Zt[e];return t?se.coins<t.price?{success:!1,message:"金币不足"}:se.farmGrid[n].status!=="empty"?{success:!1,message:"地块不为空"}:(se.coins-=t.price,se.farmGrid[n]={id:n,crop:e,plantedAt:Date.now(),status:"growing"},{success:!0}):{success:!1,message:"作物不存在"}},harvestCrop(n){const e=se.farmGrid[n];if(!e.crop||e.status!=="growing")return{success:!1,message:"无法收获"};const t=Zt[e.crop],i=Date.now()-e.plantedAt,s=t.growTime*60*60*1e3;if(i<s)return{success:!1,message:"作物还未成熟"};const r=Math.floor(Math.random()*2)+1;return se.warehouse.crops[e.crop]=(se.warehouse.crops[e.crop]||0)+r,se.farmGrid[n]={id:n,crop:null,plantedAt:null,status:"empty"},{success:!0,crop:e.crop,quantity:r}},buyItem(n,e,t){return se.coins<t?{success:!1,message:"金币不足"}:(se.coins-=t,n==="crop"?se.warehouse.crops[e]=(se.warehouse.crops[e]||0)+1:n==="building"?se.unlockedBuildings.includes(e)||se.unlockedBuildings.push(e):n==="pet"&&(se.unlockedPets.includes(e)||se.unlockedPets.push(e)),{success:!0})},resolvePkChallengesIfNeeded(){const n=Date.now();for(const e of se.pkChallenges){if(e.status!=="active"||n<=e.endsAt)continue;let t=!1;if(e.pkType==="exercise_minutes"){const s=e.myScore||0,r=e.friendScore||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else if(e.pkType==="exercise_sessions"){const s=e.mySessions||0,r=e.friendSessions||0;s>r?t=!0:s<r?t=!1:t=Math.random()>=.5}else t=Math.random()>=.5;e.status="settled",e.winnerSide=t?"me":"friend",e.settledAt=n;const i=e.escrow||{coins:0,crops:{}};t?(se.coins+=i.coins||0,g_(se.warehouse,i.crops||{}),se.stats.pkWins++,e.resultMessage=`你战胜了 ${e.friendName}，赢得全部赌注！`):e.resultMessage=`${e.friendName} 获胜，赌注归对方（单机演示：你的下注已扣除）`}},recordPkExercise(n){const e=Date.now();for(const t of se.pkChallenges)if(t.status==="active"&&!(e<t.startsAt||e>t.endsAt))if(t.pkType==="exercise_minutes"){t.myScore=(t.myScore||0)+n;const i=Math.floor(10+Math.random()*32);t.friendScore=(t.friendScore||0)+i}else t.pkType==="exercise_sessions"&&(t.mySessions=(t.mySessions||0)+1,Math.random()>.38&&(t.friendSessions=(t.friendSessions||0)+1));Tn.resolvePkChallengesIfNeeded()},createPkChallenge(n){const{friendId:e,friendName:t,durationDays:i,pkType:s,ruleNote:r,stakes:o}=n,a=Math.min(30,Math.max(1,Math.floor(Number(i))||7));if(!Io.find(g=>g.id===s))return{success:!1,message:"无效的 PK 类型"};const l=cs((o==null?void 0:o.crops)||{}),c=Math.max(0,Math.floor(Number(o==null?void 0:o.coins)||0)),u=Array.isArray(o==null?void 0:o.petIds)?o.petIds.filter(Boolean):[],d=_a(u);if(!(c>0||Object.keys(l).length>0||u.length>0))return{success:!1,message:"请至少下注金币、作物或宠物（宠物按原价折算金币押注）"};const h=c+d;return se.coins<h?{success:!1,message:"金币不足以支付下注与宠物折算"}:cl(se.warehouse,l)?(se.pkChallenges.push({id:v_(),friendId:e,friendName:t,durationDays:a,pkType:s,ruleNote:(r||"").slice(0,200),status:"pending",createdAt:Date.now(),startsAt:null,endsAt:null,myScore:0,friendScore:0,mySessions:0,friendSessions:0,stakesMe:{crops:{...l},coins:c,petIds:[...u]},stakesFriend:null,escrow:null,winnerSide:null,settledAt:null,resultMessage:""}),{success:!0}):{success:!1,message:"仓库作物不足以支付下注"}},acceptPkChallenge(n,e){const t=se.pkChallenges.find(c=>c.id===n&&c.status==="pending");if(!t)return{success:!1,message:"挑战不存在或已处理"};const i=t.stakesMe,s=(i.coins||0)+_a(i.petIds||[]);if(se.coins<s)return{success:!1,message:"金币不足，无法成立 PK"};if(!cl(se.warehouse,i.crops||{}))return{success:!1,message:"仓库作物不足，无法成立 PK（发起后请勿动用下注作物）"};const r={crops:cs((e==null?void 0:e.crops)||{}),coins:Math.max(0,Math.floor(Number(e==null?void 0:e.coins)||0)),petIds:Array.isArray(e==null?void 0:e.petIds)?e.petIds.filter(Boolean):[]};if(!(r.coins>0||Object.keys(r.crops).length>0||r.petIds.length>0))return{success:!1,message:"请为好友填写赌注后双方才算协商同意"};se.coins-=s,__(se.warehouse,i.crops||{});const a=s+r.coins+_a(r.petIds),l=m_(i.crops||{},r.crops);return t.escrow={coins:a,crops:l},t.stakesFriend=r,t.startsAt=Date.now(),t.endsAt=t.startsAt+t.durationDays*864e5,t.status="active",t.myScore=0,t.friendScore=0,t.mySessions=0,t.friendSessions=0,t.resultMessage="",{success:!0}},cancelPkChallenge(n){const e=se.pkChallenges.findIndex(t=>t.id===n&&t.status==="pending");return e===-1?{success:!1,message:"只能取消待确认的挑战"}:(se.pkChallenges.splice(e,1),{success:!0})}},Nn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},y_={class:"crop-svg",viewBox:"0 0 72 88",xmlns:"http://www.w3.org/2000/svg"},E_={key:0,class:"plant-root"},b_={key:1,class:"plant-round"},T_={key:2,class:"plant-corn"},A_={key:3,class:"plant-berry"},w_={key:4,class:"plant-pumpkin"},C_={key:5,class:"plant-grape"},R_={key:6,class:"plant-melon"},P_={key:7,class:"plant-apple"},D_={key:8,class:"plant-default"},L_={__name:"CropSprite",props:{cropId:{type:String,required:!0},progress:{type:Number,default:1},ready:{type:Boolean,default:!1},growing:{type:Boolean,default:!1}},setup(n){const e=n,t=Nt(()=>.38+Math.min(1,Math.max(0,e.progress))*.62);return(i,s)=>(de(),me("div",{class:pn(["crop-sprite",{ready:n.ready,sway:!n.ready&&n.growing}]),style:Zs({"--growth":t.value}),"aria-hidden":"true"},[(de(),me("svg",y_,[n.cropId==="carrot"?(de(),me("g",E_,[...s[0]||(s[0]=[w("path",{fill:"#2E7D32",d:"M28 8c4-6 12-8 18-4 2 8-4 14-10 18l-4-6z M38 10c6-4 14-2 18 4-2 8-10 12-16 14l-2-8z"},null,-1),w("path",{fill:"#FF8F00",d:"M34 22 L38 78 Q36 84 30 84 Q26 82 28 76 Z"},null,-1),w("path",{fill:"#FFA726",d:"M36 28 L40 72 Q38 80 32 80 Q28 78 30 72 Z",opacity:"0.85"},null,-1),w("path",{fill:"#E65100",d:"M34 50 Q38 52 36 58 Q32 56 34 50",opacity:"0.35"},null,-1)])])):n.cropId==="tomato"?(de(),me("g",b_,[...s[1]||(s[1]=[xn('<ellipse cx="36" cy="68" rx="22" ry="10" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><circle cx="36" cy="42" r="22" fill="#E53935" data-v-321ac93c></circle><circle cx="30" cy="38" r="6" fill="#FFCDD2" opacity="0.45" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 22 Q36 14 44 22 Q40 28 36 30 Q32 28 28 22" data-v-321ac93c></path><path fill="#1B5E20" d="M34 18 L36 26 L38 18 Z" data-v-321ac93c></path>',5)])])):n.cropId==="corn"?(de(),me("g",T_,[...s[2]||(s[2]=[xn('<ellipse cx="36" cy="72" rx="18" ry="8" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#558B2F" d="M32 76 L34 28 L38 28 L40 76 Z" data-v-321ac93c></path><path fill="#FDD835" d="M34 32 Q36 24 38 32 L39 68 Q36 72 33 68 Z" data-v-321ac93c></path><path fill="#FFF59D" d="M35 36 h4 v4 h-4z M35 44 h4 v4 h-4z M35 52 h4 v4 h-4z" opacity="0.6" data-v-321ac93c></path><path fill="#33691E" d="M30 30 Q36 18 42 30 Q38 34 36 36 Q34 34 30 30" data-v-321ac93c></path>',5)])])):n.cropId==="strawberry"?(de(),me("g",A_,[...s[3]||(s[3]=[xn('<ellipse cx="36" cy="74" rx="16" ry="7" fill="#3E2723" opacity="0.1" data-v-321ac93c></ellipse><path fill="#C62828" d="M24 48 Q36 28 48 48 Q44 68 36 76 Q28 68 24 48" data-v-321ac93c></path><circle cx="30" cy="52" r="2" fill="#FFEBEE" opacity="0.5" data-v-321ac93c></circle><circle cx="38" cy="58" r="1.8" fill="#FFEBEE" opacity="0.45" data-v-321ac93c></circle><circle cx="34" cy="64" r="1.5" fill="#FFEBEE" opacity="0.4" data-v-321ac93c></circle><path fill="#2E7D32" d="M28 44 Q36 34 44 44 Q40 46 36 48 Q32 46 28 44" data-v-321ac93c></path>',6)])])):n.cropId==="pumpkin"?(de(),me("g",w_,[...s[4]||(s[4]=[w("ellipse",{cx:"36",cy:"70",rx:"24",ry:"9",fill:"#3E2723",opacity:"0.08"},null,-1),w("ellipse",{cx:"36",cy:"46",rx:"26",ry:"22",fill:"#FB8C00"},null,-1),w("path",{stroke:"#EF6C00","stroke-width":"2",fill:"none",d:"M22 46 Q36 34 50 46 M26 52 Q36 42 46 52 M28 58 Q36 50 44 58",opacity:"0.5"},null,-1),w("path",{fill:"#5D4037",d:"M34 26 Q36 18 38 26 L37 34 Z"},null,-1)])])):n.cropId==="grape"?(de(),me("g",C_,[...s[5]||(s[5]=[xn('<ellipse cx="36" cy="76" rx="14" ry="6" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><path fill="#6A1B9A" d="M34 78 L36 32 L38 78 Z" opacity="0.35" data-v-321ac93c></path><circle cx="30" cy="44" r="8" fill="#8E24AA" data-v-321ac93c></circle><circle cx="42" cy="44" r="8" fill="#7B1FA2" data-v-321ac93c></circle><circle cx="36" cy="56" r="9" fill="#9C27B0" data-v-321ac93c></circle><circle cx="30" cy="66" r="7" fill="#AB47BC" data-v-321ac93c></circle><circle cx="42" cy="66" r="7" fill="#8E24AA" data-v-321ac93c></circle><path fill="#33691E" d="M32 28 Q36 20 40 28 L38 36 Z" data-v-321ac93c></path>',8)])])):n.cropId==="watermelon"?(de(),me("g",R_,[...s[6]||(s[6]=[xn('<ellipse cx="36" cy="74" rx="26" ry="10" fill="#3E2723" opacity="0.08" data-v-321ac93c></ellipse><ellipse cx="36" cy="48" rx="28" ry="24" fill="#2E7D32" data-v-321ac93c></ellipse><path stroke="#1B5E20" stroke-width="3" fill="none" d="M14 48 Q36 28 58 48" opacity="0.5" data-v-321ac93c></path><ellipse cx="36" cy="48" rx="22" ry="18" fill="#C62828" opacity="0.92" data-v-321ac93c></ellipse><circle cx="28" cy="46" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="40" cy="52" r="2" fill="#1B1B1B" data-v-321ac93c></circle><circle cx="34" cy="56" r="1.5" fill="#1B1B1B" data-v-321ac93c></circle>',7)])])):n.cropId==="apple"?(de(),me("g",P_,[...s[7]||(s[7]=[xn('<ellipse cx="36" cy="76" rx="12" ry="5" fill="#3E2723" opacity="0.12" data-v-321ac93c></ellipse><path fill="#5D4037" d="M34 76 L36 44 L38 76 Z" data-v-321ac93c></path><circle cx="36" cy="38" r="18" fill="#43A047" data-v-321ac93c></circle><circle cx="28" cy="34" r="6" fill="#66BB6A" opacity="0.5" data-v-321ac93c></circle><circle cx="44" cy="36" r="5" fill="#66BB6A" opacity="0.45" data-v-321ac93c></circle><circle cx="36" cy="42" r="10" fill="#E53935" data-v-321ac93c></circle><path d="M36 28 Q38 22 42 24" stroke="#6D4C41" stroke-width="1.5" fill="none" stroke-linecap="round" data-v-321ac93c></path>',7)])])):(de(),me("g",D_,[...s[8]||(s[8]=[w("path",{fill:"#43A047",d:"M28 72 Q36 48 44 72 Z"},null,-1),w("path",{fill:"#66BB6A",d:"M32 60 Q36 44 40 60 Z"},null,-1)])]))]))],6))}},xc=Nn(L_,[["__scopeId","data-v-321ac93c"]]),I_={},U_={class:"backdrop","aria-hidden":"true"};function N_(n,e){return de(),me("div",U_,[...e[0]||(e[0]=[xn('<div class="sky" data-v-8c74a6cf></div><div class="sun" data-v-8c74a6cf></div><svg class="cloud cloud-a" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="40" cy="28" rx="28" ry="18" fill="#fff" opacity="0.92" data-v-8c74a6cf></ellipse><ellipse cx="68" cy="26" rx="34" ry="22" fill="#fff" opacity="0.95" data-v-8c74a6cf></ellipse><ellipse cx="92" cy="30" rx="22" ry="14" fill="#fff" opacity="0.88" data-v-8c74a6cf></ellipse></svg><svg class="cloud cloud-b" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><ellipse cx="30" cy="22" rx="22" ry="14" fill="#fff" opacity="0.85" data-v-8c74a6cf></ellipse><ellipse cx="52" cy="20" rx="28" ry="18" fill="#fff" opacity="0.9" data-v-8c74a6cf></ellipse><ellipse cx="74" cy="24" rx="18" ry="12" fill="#fff" opacity="0.82" data-v-8c74a6cf></ellipse></svg><svg class="hills" viewBox="0 0 400 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-8c74a6cf><path d="M0,55 Q80,35 160,50 T320,42 Q360,38 400,48 L400,80 L0,80 Z" fill="#7CB342" data-v-8c74a6cf></path><path d="M0,62 Q100,48 200,58 T400,52 L400,80 L0,80 Z" fill="#689F38" opacity="0.95" data-v-8c74a6cf></path><path d="M0,68 Q200,60 400,65 L400,80 L0,80 Z" fill="#558B2F" data-v-8c74a6cf></path></svg>',5)])])}const F_=Nn(I_,[["render",N_],["__scopeId","data-v-8c74a6cf"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="184",Vs={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},O_=0,Nu=1,B_=2,go=1,Zd=2,ur=3,Hi=0,mn=1,mi=2,vi=0,Gs=1,Fu=2,Ou=3,Bu=4,k_=5,ns=100,z_=101,H_=102,V_=103,G_=104,W_=200,X_=201,$_=202,q_=203,ul=204,fl=205,Y_=206,j_=207,K_=208,Z_=209,J_=210,Q_=211,eg=212,tg=213,ng=214,dl=0,hl=1,pl=2,qs=3,ml=4,_l=5,gl=6,vl=7,Jd=0,ig=1,sg=2,Zn=0,Qd=1,eh=2,th=3,Sc=4,nh=5,ih=6,sh=7,rh=300,us=301,Ys=302,ga=303,va=304,na=306,Uo=1e3,_i=1001,xl=1002,Wt=1003,rg=1004,Vr=1005,Jt=1006,xa=1007,rs=1008,Mn=1009,oh=1010,ah=1011,Tr=1012,yc=1013,ti=1014,Yn=1015,bi=1016,Ec=1017,bc=1018,Ar=1020,lh=35902,ch=35899,uh=1021,fh=1022,Dn=1023,Ti=1026,os=1027,dh=1028,Tc=1029,fs=1030,Ac=1031,wc=1033,vo=33776,xo=33777,Mo=33778,So=33779,Ml=35840,Sl=35841,yl=35842,El=35843,bl=36196,Tl=37492,Al=37496,wl=37488,Cl=37489,No=37490,Rl=37491,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,kl=37817,zl=37818,Hl=37819,Vl=37820,Gl=37821,Wl=36492,Xl=36494,$l=36495,ql=36283,Yl=36284,Fo=36285,jl=36286,og=3200,Kl=0,ag=1,Bi="",hn="srgb",Oo="srgb-linear",Bo="linear",pt="srgb",_s=7680,ku=519,lg=512,cg=513,ug=514,Cc=515,fg=516,dg=517,Rc=518,hg=519,zu=35044,Hu="300 es",jn=2e3,wr=2001;function pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mg(){const n=Cr("canvas");return n.style.display="block",n}const Vu={};function Gu(...n){const e="THREE."+n.shift();console.log(e,...n)}function hh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=hh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=hh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zl(...n){const e=n.join(" ");e in Vu||(Vu[e]=!0,qe(...n))}function _g(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const gg={[dl]:hl,[pl]:gl,[ml]:vl,[qs]:_l,[hl]:dl,[gl]:pl,[vl]:ml,[_l]:qs};class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Jl=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function vg(n,e){return(n%e+e)%e}function Ma(n,e,t){return(1-t)*n+t*e}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const xg={DEG2RAD:yo},kc=class kc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kc.prototype.isVector2=!0;let je=kc;class Vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],h=r[o+1],g=r[o+2],M=r[o+3];if(d!==M||l!==f||c!==h||u!==g){let m=l*f+c*h+u*g+d*M;m<0&&(f=-f,h=-h,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b,l=l*p+f*a,c=c*p+h*a,u=u*p+g*a,d=d*p+M*a}else{l=l*p+f*a,c=c*p+h*a,u=u*p+g*a,d=d*p+M*a;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zc=class zc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zc.prototype.isVector3=!0;let W=zc;const Sa=new W,Wu=new Vi,Hc=class Hc{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],M=s[0],m=s[3],p=s[6],S=s[1],b=s[4],E=s[7],I=s[2],A=s[5],U=s[8];return r[0]=o*M+a*S+l*I,r[3]=o*m+a*b+l*A,r[6]=o*p+a*E+l*U,r[1]=c*M+u*S+d*I,r[4]=c*m+u*b+d*A,r[7]=c*p+u*E+d*U,r[2]=f*M+h*S+g*I,r[5]=f*m+h*b+g*A,r[8]=f*p+h*E+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=t*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=h*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;let Ze=Hc;const ya=new Ze,Xu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const n={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Oo]:{primaries:e,whitePoint:i,transfer:Bo,toXYZ:Xu,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Xu,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const ot=Mg();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class Sg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Cr("canvas")),gs.width=e.width,gs.height=e.height;const s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Eg=0;const ba=new W;class en extends Wi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=_i,s=_i,r=Jt,o=rs,a=Dn,l=Mn,c=en.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ur(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ba).x}get height(){return this.source.getSize(ba).y}get depth(){return this.source.getSize(ba).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=rh;en.DEFAULT_ANISOTROPY=1;const Vc=class Vc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(h+1)/2,I=(p+1)/2,A=(u+f)/4,U=(d+M)/4,v=(g+m)/4;return b>E&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=U/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=v/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=U/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-M)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;let Dt=Vc;class bg extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ph extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ho=class Ho{constructor(e,t,i,s,r,o,a,l,c,u,d,f,h,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,h,g,M,m)}set(e,t,i,s,r,o,a,l,c,u,d,f,h,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,M=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,M=c*d;t[0]=f+M*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,M=c*d;t[0]=f-M*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,M=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=M-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,M=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+M,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ag,e,wg)}lookAt(e,t,i){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(i,gn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(i,gn)),Pi.normalize(),Gr.crossVectors(gn,Pi),s[0]=Pi.x,s[4]=Gr.x,s[8]=gn.x,s[1]=Pi.y,s[5]=Gr.y,s[9]=gn.y,s[2]=Pi.z,s[6]=Gr.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],M=i[6],m=i[10],p=i[14],S=i[3],b=i[7],E=i[11],I=i[15],A=s[0],U=s[4],v=s[8],R=s[12],k=s[1],D=s[5],G=s[9],Z=s[13],te=s[2],B=s[6],X=s[10],z=s[14],H=s[3],N=s[7],_e=s[11],P=s[15];return r[0]=o*A+a*k+l*te+c*H,r[4]=o*U+a*D+l*B+c*N,r[8]=o*v+a*G+l*X+c*_e,r[12]=o*R+a*Z+l*z+c*P,r[1]=u*A+d*k+f*te+h*H,r[5]=u*U+d*D+f*B+h*N,r[9]=u*v+d*G+f*X+h*_e,r[13]=u*R+d*Z+f*z+h*P,r[2]=g*A+M*k+m*te+p*H,r[6]=g*U+M*D+m*B+p*N,r[10]=g*v+M*G+m*X+p*_e,r[14]=g*R+M*Z+m*z+p*P,r[3]=S*A+b*k+E*te+I*H,r[7]=S*U+b*D+E*B+I*N,r[11]=S*v+b*G+E*X+I*_e,r[15]=S*R+b*Z+E*z+I*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],M=e[7],m=e[11],p=e[15],S=l*h-c*f,b=a*h-c*d,E=a*f-l*d,I=o*h-c*u,A=o*f-l*u,U=o*d-a*u;return t*(M*S-m*b+p*E)-i*(g*S-m*I+p*A)+s*(g*b-M*I+p*U)-r*(g*E-M*A+m*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],M=e[13],m=e[14],p=e[15],S=t*a-i*o,b=t*l-s*o,E=t*c-r*o,I=i*l-s*a,A=i*c-r*a,U=s*c-r*l,v=u*M-d*g,R=u*m-f*g,k=u*p-h*g,D=d*m-f*M,G=d*p-h*M,Z=f*p-h*m,te=S*Z-b*G+E*D+I*k-A*R+U*v;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/te;return e[0]=(a*Z-l*G+c*D)*B,e[1]=(s*G-i*Z-r*D)*B,e[2]=(M*U-m*A+p*I)*B,e[3]=(f*A-d*U-h*I)*B,e[4]=(l*k-o*Z-c*R)*B,e[5]=(t*Z-s*k+r*R)*B,e[6]=(m*E-g*U-p*b)*B,e[7]=(u*U-f*E+h*b)*B,e[8]=(o*G-a*k+c*v)*B,e[9]=(i*k-t*G-r*v)*B,e[10]=(g*A-M*E+p*S)*B,e[11]=(d*E-u*A-h*S)*B,e[12]=(a*R-o*D-l*v)*B,e[13]=(t*D-i*R+s*v)*B,e[14]=(M*b-g*I-m*S)*B,e[15]=(u*I-d*b+f*S)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,M=o*u,m=o*d,p=a*d,S=l*c,b=l*u,E=l*d,I=i.x,A=i.y,U=i.z;return s[0]=(1-(M+p))*I,s[1]=(h+E)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(h-E)*A,s[5]=(1-(f+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+b)*U,s[9]=(m-S)*U,s[10]=(1-(f+M))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);const c=1/o,u=1/a,d=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===jn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===wr)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),h=-(i+s)/(i-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===jn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===wr)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ho.prototype.isMatrix4=!0;let Tt=Ho;const vs=new W,wn=new Tt,Ag=new W(0,0,0),wg=new W(1,1,1),Pi=new W,Gr=new W,gn=new W,qu=new Tt,Yu=new Vi;class Gi{constructor(e=0,t=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cg=0;const ju=new W,xs=new Vi,ri=new Tt,Wr=new W,nr=new W,Rg=new W,Pg=new Vi,Ku=new W(1,0,0),Zu=new W(0,1,0),Ju=new W(0,0,1),Qu={type:"added"},Dg={type:"removed"},Ms={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Ht extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new W,t=new Gi,i=new Vi,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ze}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(nr,Wr,this.up):ri.lookAt(Wr,nr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new W(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lg={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=vg(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wa(o,r,e+1/3),this.g=wa(o,r,e),this.b=wa(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(rt(Yt.r*255,0,255))*65536+Math.round(rt(Yt.g*255,0,255))*256+Math.round(rt(Yt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=hn){ot.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Xr);const i=Ma(Di.h,Xr.h,t),s=Ma(Di.s,Xr.s,t),r=Ma(Di.l,Xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ct;ct.NAMES=mh;class Lc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=i}clone(){return new Lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ig extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new W,oi=new W,Ca=new W,ai=new W,Ss=new W,ys=new W,ef=new W,Ra=new W,Pa=new W,Da=new W,La=new Dt,Ia=new Dt,Ua=new Dt;class Pn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),oi.subVectors(i,t),Ca.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(oi),l=Cn.dot(Ca),c=oi.dot(oi),u=oi.dot(Ca),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return La.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,i),Ua.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(La,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),oi.subVectors(e,t),Cn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,i),ys.subVectors(r,i),Ra.subVectors(e,i);const l=Ss.dot(Ra),c=ys.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Pa.subVectors(e,s);const u=Ss.dot(Pa),d=ys.dot(Pa);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ss,o);Da.subVectors(e,r);const h=Ss.dot(Da),g=ys.dot(Da);if(g>=0&&h<=g)return t.copy(r);const M=h*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ys,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return ef.subVectors(r,s),a=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(ef,a);const p=1/(m+M+f);return o=M*p,a=f*p,t.copy(i).addScaledVector(Ss,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),qr.subVectors(this.max,ir),Es.subVectors(e.a,ir),bs.subVectors(e.b,ir),Ts.subVectors(e.c,ir),Li.subVectors(bs,Es),Ii.subVectors(Ts,bs),ji.subVectors(Es,Ts);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!Na(t,Es,bs,Ts,qr)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Es,bs,Ts,qr))?!1:(Yr.crossVectors(Li,Ii),t=[Yr.x,Yr.y,Yr.z],Na(t,Es,bs,Ts,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new W,new W,new W,new W,new W,new W,new W,new W],Rn=new W,$r=new Nr,Es=new W,bs=new W,Ts=new W,Li=new W,Ii=new W,ji=new W,ir=new W,qr=new W,Yr=new W,Ki=new W;function Na(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new W,jr=new je;let Ug=0;class Qn extends Wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _h extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gh extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class an extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ng=new Nr,sr=new W,Fa=new W;class Ic{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ng.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Fa)),this.expandByPoint(sr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fg=0;const En=new Tt,Oa=new Ht,As=new W,vn=new Nr,rr=new Nr,zt=new W;class Fn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?gh:_h)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(vn.min,rr.min),vn.expandByPoint(zt),zt.addVectors(vn.max,rr.max),vn.expandByPoint(zt)):(vn.expandByPoint(rr.min),vn.expandByPoint(rr.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),zt.add(As)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new W,l[v]=new W;const c=new W,u=new W,d=new W,f=new je,h=new je,g=new je,M=new W,m=new W;function p(v,R,k){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,k),f.fromBufferAttribute(r,v),h.fromBufferAttribute(r,R),g.fromBufferAttribute(r,k),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[v].add(M),a[R].add(M),a[k].add(M),l[v].add(m),l[R].add(m),l[k].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,R=S.length;v<R;++v){const k=S[v],D=k.start,G=k.count;for(let Z=D,te=D+G;Z<te;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new W,E=new W,I=new W,A=new W;function U(v){I.fromBufferAttribute(s,v),A.copy(I);const R=a[v];b.copy(R),b.sub(I.multiplyScalar(I.dot(R))).normalize(),E.crossVectors(A,R);const D=E.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,D)}for(let v=0,R=S.length;v<R;++v){const k=S[v],D=k.start,G=k.count;for(let Z=D,te=D+G;Z<te;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?h=l[M]*a.data.stride+a.offset:h=l[M]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Qn(f,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Og=0;class Fr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Gs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new W,Ba=new W,Kr=new W,Ui=new W,ka=new W,Zr=new W,za=new W;class Uc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ba.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=Ui.dot(this.direction),l=-Ui.dot(Kr),c=Ui.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const M=1/u;d*=M,f*=M,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ba).addScaledVector(Kr,f),h}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){ka.subVectors(t,e),Zr.subVectors(i,e),za.crossVectors(ka,Zr);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Zr.crossVectors(Ui,Zr));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vh extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tf=new Tt,Zi=new Uc,Jr=new Ic,nf=new W,Qr=new W,eo=new W,to=new W,Ha=new W,no=new W,sf=new W,io=new W;class At extends Ht{constructor(e=new Fn,t=new vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ha.fromBufferAttribute(d,e),o?no.addScaledVector(Ha,u):no.addScaledVector(Ha.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Jr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Jr,nf)===null||Zi.origin.distanceToSquared(nf)>(e.far-e.near)**2))&&(tf.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(tf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,I=b;E<I;E+=3){const A=a.getX(E),U=a.getX(E+1),v=a.getX(E+2);s=so(this,p,e,i,c,u,d,A,U,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(a.count,h.start+h.count);for(let m=g,p=M;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=so(this,o,e,i,c,u,d,S,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,I=b;E<I;E+=3){const A=E,U=E+1,v=E+2;s=so(this,p,e,i,c,u,d,A,U,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=g,p=M;m<p;m+=3){const S=m,b=m+1,E=m+2;s=so(this,o,e,i,c,u,d,S,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Bg(n,e,t,i,s,r,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function so(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Qr),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=Bg(n,e,t,i,Qr,eo,to,sf);if(u){const d=new W;Pn.getBarycoord(sf,Qr,eo,to,d),s&&(u.uv=Pn.getInterpolatedAttribute(s,a,l,c,d,new je)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,a,l,c,d,new je)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Pn.getNormal(Qr,eo,to,f.normal),u.face=f,u.barycoord=d}return u}class kg extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Wt,u=Wt,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new W,zg=new W,Hg=new Ze;class Oi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Va.subVectors(i,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Va),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hg.getNormalMatrix(e),s=this.coplanarPoint(Va).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Ic,Vg=new je(.5,.5),ro=new W;class Nc{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],b=r[13],E=r[14],I=r[15];if(s[0].setComponents(c-o,h-u,p-g,I-S).normalize(),s[1].setComponents(c+o,h+u,p+g,I+S).normalize(),s[2].setComponents(c+a,h+d,p+M,I+b).normalize(),s[3].setComponents(c-a,h-d,p-M,I-b).normalize(),i)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,h-f,p-m,I-E).normalize();else if(s[4].setComponents(c-l,h-f,p-m,I-E).normalize(),t===jn)s[5].setComponents(c+l,h+f,p+m,I+E).normalize();else if(t===wr)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=Vg.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xh extends en{constructor(e=[],t=us,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends en{constructor(e,t,i=ti,s,r,o,a=Wt,l=Wt,c,u=Ti,d=1){if(u!==Ti&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gg extends js{constructor(e,t=ti,i=us,s,r,o=Wt,a=Wt,l,c=Ti){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mh extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi extends Fn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(d,2));function g(M,m,p,S,b,E,I,A,U,v,R){const k=E/U,D=I/v,G=E/2,Z=I/2,te=A/2,B=U+1,X=v+1;let z=0,H=0;const N=new W;for(let _e=0;_e<X;_e++){const P=_e*D-Z;for(let j=0;j<B;j++){const fe=j*k-G;N[M]=fe*S,N[m]=P*b,N[p]=te,c.push(N.x,N.y,N.z),N[M]=0,N[m]=0,N[p]=A>0?1:-1,u.push(N.x,N.y,N.z),d.push(j/U),d.push(1-_e/v),z+=1}}for(let _e=0;_e<v;_e++)for(let P=0;P<U;P++){const j=f+P+B*_e,fe=f+P+B*(_e+1),ke=f+(P+1)+B*(_e+1),Ce=f+(P+1)+B*_e;l.push(j,fe,Ce),l.push(fe,ke,Ce),H+=6}a.addGroup(h,H,R),h+=H,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rr extends Fn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const M=[],m=i/2;let p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function S(){const E=new W,I=new W;let A=0;const U=(t-e)/i;for(let v=0;v<=r;v++){const R=[],k=v/r,D=k*(t-e)+e;for(let G=0;G<=s;G++){const Z=G/s,te=Z*l+a,B=Math.sin(te),X=Math.cos(te);I.x=D*B,I.y=-k*i+m,I.z=D*X,d.push(I.x,I.y,I.z),E.set(B,U,X).normalize(),f.push(E.x,E.y,E.z),h.push(Z,1-k),R.push(g++)}M.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){const k=M[R][v],D=M[R+1][v],G=M[R+1][v+1],Z=M[R][v+1];(e>0||R!==0)&&(u.push(k,D,Z),A+=3),(t>0||R!==r-1)&&(u.push(D,G,Z),A+=3)}c.addGroup(p,A,0),p+=A}function b(E){const I=g,A=new je,U=new W;let v=0;const R=E===!0?e:t,k=E===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*k,0),f.push(0,k,0),h.push(.5,.5),g++;const D=g;for(let G=0;G<=s;G++){const te=G/s*l+a,B=Math.cos(te),X=Math.sin(te);U.x=R*X,U.y=m*k,U.z=R*B,d.push(U.x,U.y,U.z),f.push(0,k,0),A.x=B*.5+.5,A.y=X*.5*k+.5,h.push(A.x,A.y),g++}for(let G=0;G<s;G++){const Z=I+G,te=D+G;E===!0?u.push(te,te+1,Z):u.push(te+1,te,Z),v+=3}c.addGroup(p,v,E===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ko extends Rr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ko(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let b=0;b<c;b++){const E=b*d-r;g.push(E,-S,0),M.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const b=S+c*p,E=S+c*(p+1),I=S+1+c*(p+1),A=S+1+c*p;h.push(b,E,A),h.push(E,I,A)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class zo extends Fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new W,f=new W,h=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){const S=[],b=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){const A=I/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(A+E,1-b),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const b=u[p][S+1],E=u[p][S],I=u[p+1][S],A=u[p+1][S+1];(p!==0||o>0)&&h.push(b,E,A),(p!==i-1||l<Math.PI)&&h.push(E,I,A)}this.setIndex(h),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(rf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function sn(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function rf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Xg={clone:Ks,merge:sn};var $g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yg extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cn extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jg extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ga={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(of(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!of(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function of(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Zg{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jg=new Zg;class Fc{constructor(e){this.manager=e!==void 0?e:Jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class Qg extends Fc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ga.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ws.get(o);d===void 0&&(d=[],ws.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Cr("img");function l(){u(),t&&t(this);const d=ws.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}ws.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Ga.remove(`image:${e}`);const f=ws.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ga.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class e0 extends Fc{constructor(e){super(e)}load(e,t,i,s){const r=new en,o=new Qg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class yh extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class t0 extends yh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wa=new Tt,af=new W,lf=new W;class n0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new W,ao=new Vi,zn=new W;class Eh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,ao,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(oo,ao,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new W,cf=new je,uf=new je;class bn extends Eh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,cf,uf),t.subVectors(uf,cf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Oc extends Eh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i0 extends n0{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new i0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Cs=-90,Rs=1;class r0 extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const r=new bn(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const o=new bn(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const a=new bn(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const l=new bn(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new bn(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class o0 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ff=new Tt;class a0{constructor(e,t,i=0,s=1/0){this.ray=new Uc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(e,t=!0,i=[]){return Ql(e,this,i,t),i.sort(df),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,i,t);return i.sort(df),i}}function df(n,e){return n.distance-e.distance}function Ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ql(r[o],e,t,!0)}}class hf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gc=class Gc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Gc.prototype.isMatrix2=!0;let pf=Gc;class l0 extends Wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mf(n,e,t,i){const s=c0(i);switch(t){case uh:return n*e;case dh:return n*e/s.components*s.byteLength;case Tc:return n*e/s.components*s.byteLength;case fs:return n*e*2/s.components*s.byteLength;case Ac:return n*e*2/s.components*s.byteLength;case fh:return n*e*3/s.components*s.byteLength;case Dn:return n*e*4/s.components*s.byteLength;case wc:return n*e*4/s.components*s.byteLength;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case El:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case yl:return Math.max(n,8)*Math.max(e,8)/2;case bl:case Tl:case wl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:case No:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fo:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(n){switch(n){case Mn:case oh:return{byteLength:1,components:1};case Tr:case ah:case bi:return{byteLength:2,components:1};case Ec:case bc:return{byteLength:2,components:4};case ti:case yc:case Yn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],M=d[h];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const M=d[h];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lv=`PhysicalMaterial material;
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
#endif`,cv=`uniform sampler2D dfgLUT;
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
}`,uv=`
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Bx=`#define TOON
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
}`,kx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,Gx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:f0,alphahash_pars_fragment:d0,alphamap_fragment:h0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:_0,aomap_fragment:g0,aomap_pars_fragment:v0,batching_pars_vertex:x0,batching_vertex:M0,begin_vertex:S0,beginnormal_vertex:y0,bsdfs:E0,iridescence_fragment:b0,bumpmap_pars_fragment:T0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:R0,color_fragment:P0,color_pars_fragment:D0,color_pars_vertex:L0,color_vertex:I0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:k0,emissivemap_pars_fragment:z0,colorspace_fragment:H0,colorspace_pars_fragment:V0,envmap_fragment:G0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:iv,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:j0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:ev,lights_lambert_pars_fragment:tv,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:lv,lights_physical_pars_fragment:cv,lights_fragment_begin:uv,lights_fragment_maps:fv,lights_fragment_end:dv,lightprobes_pars_fragment:hv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Mv,map_particle_pars_fragment:Sv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:bv,morphcolor_vertex:Tv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:kv,packing:zv,premultiplied_alpha_fragment:Hv,project_vertex:Vv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:Yv,shadowmap_vertex:jv,shadowmask_pars_fragment:Kv,skinbase_vertex:Zv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:fx,background_frag:dx,backgroundCube_vert:hx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:vx,distance_vert:xx,distance_frag:Mx,equirect_vert:Sx,equirect_frag:yx,linedashed_vert:Ex,linedashed_frag:bx,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Cx,meshmatcap_vert:Rx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:kx,points_frag:zx,shadow_vert:Hx,shadow_frag:Vx,sprite_vert:Gx,sprite_frag:Wx},Le={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},$n={basic:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ct(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([Le.points,Le.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([Le.common,Le.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([Le.sprite,Le.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:sn([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:sn([Le.lights,Le.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};$n.physical={uniforms:sn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const lo={r:0,b:0,g:0},Xx=new Tt,Th=new Ze;Th.set(-1,0,0,0,1,0,0,0,1);function $x(n,e,t,i,s,r){const o=new ct(0);let a=s===!0?0:1,l,c,u=null,d=0,f=null;function h(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const E=S.backgroundBlurriness>0;b=e.get(b,E)}return b}function g(S){let b=!1;const E=h(S);E===null?m(o,a):E&&E.isColor&&(m(E,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,b){const E=h(b);E&&(E.isCubeTexture||E.mapping===na)?(c===void 0&&(c=new At(new gi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ks($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Th),c.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new At(new ki(2,2),new ni({name:"BackgroundMaterial",uniforms:Ks($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(lo,Sh(n)),t.buffers.color.setClear(lo.r,lo.g,lo.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:M,dispose:p}}function qx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(D,G,Z,te,B){let X=!1;const z=d(D,te,Z,G);r!==z&&(r=z,c(r.object)),X=h(D,te,Z,B),X&&g(D,te,Z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(D,G,Z,te),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,G,Z,te){const B=te.wireframe===!0;let X=i[G.id];X===void 0&&(X={},i[G.id]=X);const z=D.isInstancedMesh===!0?D.id:0;let H=X[z];H===void 0&&(H={},X[z]=H);let N=H[Z.id];N===void 0&&(N={},H[Z.id]=N);let _e=N[B];return _e===void 0&&(_e=f(l()),N[B]=_e),_e}function f(D){const G=[],Z=[],te=[];for(let B=0;B<t;B++)G[B]=0,Z[B]=0,te[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:te,object:D,attributes:{},index:null}}function h(D,G,Z,te){const B=r.attributes,X=G.attributes;let z=0;const H=Z.getAttributes();for(const N in H)if(H[N].location>=0){const P=B[N];let j=X[N];if(j===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;z++}return r.attributesNum!==z||r.index!==te}function g(D,G,Z,te){const B={},X=G.attributes;let z=0;const H=Z.getAttributes();for(const N in H)if(H[N].location>=0){let P=X[N];P===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(P=D.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),B[N]=j,z++}r.attributes=B,r.attributesNum=z,r.index=te}function M(){const D=r.newAttributes;for(let G=0,Z=D.length;G<Z;G++)D[G]=0}function m(D){p(D,0)}function p(D,G){const Z=r.newAttributes,te=r.enabledAttributes,B=r.attributeDivisors;Z[D]=1,te[D]===0&&(n.enableVertexAttribArray(D),te[D]=1),B[D]!==G&&(n.vertexAttribDivisor(D,G),B[D]=G)}function S(){const D=r.newAttributes,G=r.enabledAttributes;for(let Z=0,te=G.length;Z<te;Z++)G[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),G[Z]=0)}function b(D,G,Z,te,B,X,z){z===!0?n.vertexAttribIPointer(D,G,Z,B,X):n.vertexAttribPointer(D,G,Z,te,B,X)}function E(D,G,Z,te){M();const B=te.attributes,X=Z.getAttributes(),z=G.defaultAttributeValues;for(const H in X){const N=X[H];if(N.location>=0){let _e=B[H];if(_e===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),_e!==void 0){const P=_e.normalized,j=_e.itemSize,fe=e.get(_e);if(fe===void 0)continue;const ke=fe.buffer,Ce=fe.type,ie=fe.bytesPerElement,Me=Ce===n.INT||Ce===n.UNSIGNED_INT||_e.gpuType===yc;if(_e.isInterleavedBufferAttribute){const he=_e.data,ze=he.stride,He=_e.offset;if(he.isInstancedInterleavedBuffer){for(let $e=0;$e<N.locationSize;$e++)p(N.location+$e,he.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let $e=0;$e<N.locationSize;$e++)m(N.location+$e);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let $e=0;$e<N.locationSize;$e++)b(N.location+$e,j/N.locationSize,Ce,P,ze*ie,(He+j/N.locationSize*$e)*ie,Me)}else{if(_e.isInstancedBufferAttribute){for(let he=0;he<N.locationSize;he++)p(N.location+he,_e.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let he=0;he<N.locationSize;he++)m(N.location+he);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let he=0;he<N.locationSize;he++)b(N.location+he,j/N.locationSize,Ce,P,j*ie,j/N.locationSize*he*ie,Me)}}else if(z!==void 0){const P=z[H];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(N.location,P);break;case 3:n.vertexAttrib3fv(N.location,P);break;case 4:n.vertexAttrib4fv(N.location,P);break;default:n.vertexAttrib1fv(N.location,P)}}}}S()}function I(){R();for(const D in i){const G=i[D];for(const Z in G){const te=G[Z];for(const B in te){const X=te[B];for(const z in X)u(X[z].object),delete X[z];delete te[B]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const Z in G){const te=G[Z];for(const B in te){const X=te[B];for(const z in X)u(X[z].object),delete X[z];delete te[B]}}delete i[D.id]}function U(D){for(const G in i){const Z=i[G];for(const te in Z){const B=Z[te];if(B[D.id]===void 0)continue;const X=B[D.id];for(const z in X)u(X[z].object),delete X[z];delete B[D.id]}}}function v(D){for(const G in i){const Z=i[G],te=D.isInstancedMesh===!0?D.id:0,B=Z[te];if(B!==void 0){for(const X in B){const z=B[X];for(const H in z)u(z[H].object),delete z[H];delete B[X]}delete Z[te],Object.keys(Z).length===0&&delete i[G]}}}function R(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Yx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Dn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const v=U===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Mn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Yn&&!v)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:E,maxSamples:I,samples:A}}function Kx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,b=S*4;let E=p.clippingState||null;l.value=E,E=u(g,f,b,h);for(let I=0;I!==b;++I)E[I]=t[I];p.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=h+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=h;b!==M;++b,E+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const zi=4,_f=[.125,.215,.35,.446,.526,.582],is=20,Zx=256,or=new Oc,gf=new ct;let Xa=null,$a=0,qa=0,Ya=!1;const Jx=new W;class vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Jx}=r;Xa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,$a,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:bi,format:Dn,colorSpace:Oo,depthBuffer:!1},s=xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=tM(r,e,t),this._ggxMaterial=eM(r,e,t)}return s}_compileMaterial(e){const t=new At(new Fn,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,i,s,r){const l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(gf),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new gi,new vh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(gf),p=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const I=this._cubeSize;Ps(s,E*I,b>2?I:0,I,I),d.setRenderTarget(s),p&&d.render(M,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===us||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-zi?i-g+zi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Ps(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(a,or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ps(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(a,or)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*is-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):is;m>is&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const p=[];let S=0;for(let U=0;U<is;++U){const v=U/M,R=Math.exp(-v*v/2);p.push(R),U===0?S+=R:U<m&&(S+=2*R)}for(let U=0;U<p.length;U++)p[U]=p[U]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const E=this._sizeLods[s],I=3*E*(s>b-zi?s-b+zi:0),A=4*(this._cubeSize-E);Ps(t,I,A,3*E,2*E),l.setRenderTarget(t),l.render(d,or)}}function Qx(n){const e=[],t=[],i=[];let s=n;const r=n-zi+1+_f.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zi?l=_f[o-n+zi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,M=3,m=2,p=1,S=new Float32Array(M*g*h),b=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let A=0;A<h;A++){const U=A%3*2/3-1,v=A>2?0:-1,R=[U,v,0,U+2/3,v,0,U+2/3,v+1,0,U,v,0,U+2/3,v+1,0,U,v+1,0];S.set(R,M*g*A),b.set(f,m*g*A);const k=[A,A,A,A,A,A];E.set(k,p*g*A)}const I=new Fn;I.setAttribute("position",new Qn(S,M)),I.setAttribute("uv",new Qn(b,m)),I.setAttribute("faceIndex",new Qn(E,p)),i.push(new At(I,null)),s>zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function xf(n,e,t){const i=new Jn(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function eM(n,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ia(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function tM(n,e,t){const i=new Float32Array(is),s=new W(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ia(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Mf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Sf(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}class Ah extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:vi});r.uniforms.tEquirect.value=t;const o=new At(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Jt),new r0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function nM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===ga||h===va)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const M=new Ah(g.height);return M.fromEquirectangularTexture(n,f),e.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===ga||h===va,M=h===us||h===Ys;if(g||M){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new vf(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return g&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new vf(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,h){return h===ga?f.mapping=us:h===va&&(f.mapping=Ys),f}function l(f){let h=0;const g=6;for(let M=0;M<g;M++)f[M]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function iM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zl("WebGLRenderer: "+i+" extension not supported."),s}}}function sM(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(h!==null){const S=h.array;M=h.version;for(let b=0,E=S.length;b<E;b+=3){const I=S[b+0],A=S[b+1],U=S[b+2];f.push(I,A,A,U,U,I)}}else{const S=g.array;M=g.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const I=b+0,A=b+1,U=b+2;f.push(I,A,A,U,U,I)}}const m=new(g.count>=65535?gh:_h)(f,1);m.version=M;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,r,d*o,h),t.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,h);let M=0;for(let m=0;m<h;m++)M+=f[m];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function oM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e,t){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let k=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",k)};var h=k;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*A*4*d),v=new ph(U,I,A,d);v.type=Yn,v.needsUpdate=!0;const R=E*4;for(let D=0;D<d;D++){const G=p[D],Z=S[D],te=b[D],B=I*A*4*D;for(let X=0;X<G.count;X++){const z=X*R;g===!0&&(s.fromBufferAttribute(G,X),U[B+z+0]=s.x,U[B+z+1]=s.y,U[B+z+2]=s.z,U[B+z+3]=0),M===!0&&(s.fromBufferAttribute(Z,X),U[B+z+4]=s.x,U[B+z+5]=s.y,U[B+z+6]=s.z,U[B+z+7]=0),m===!0&&(s.fromBufferAttribute(te,X),U[B+z+8]=s.x,U[B+z+9]=s.y,U[B+z+10]=s.z,U[B+z+11]=te.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new je(I,A)},i.set(a,f),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lM(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const cM={[Qd]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[Sc]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function uM(n,e,t,i,s){const r=new Jn(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new js(e,t):void 0}),o=new Jn(e,t,{type:bi,depthBuffer:!1,stencilBuffer:!1}),a=new Fn;a.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new an([0,2,0,0,2,0],2));const l=new Yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new At(a,l),u=new Oc(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,M=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),o.setSize(S,b);for(let E=0;E<m.length;E++){const I=m[E];I.setSize&&I.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,E=r.height;for(let I=0;I<m.length;I++){const A=m[I];A.setSize&&A.setSize(b,E)}},this.begin=function(S,b){if(h||S.toneMapping===Zn&&m.length===0)return!1;if(M=b,b!==null){const E=b.width,I=b.height;(r.width!==E||r.height!==I)&&this.setSize(E,I)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Zn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,h=!0;let E=r,I=o;for(let A=0;A<m.length;A++){const U=m[A];if(U.enabled!==!1&&(U.render(S,I,E,b),U.needsSwap!==!1)){const v=E;E=I,I=v}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,l.defines={},ot.getTransfer(d)===pt&&(l.defines.SRGB_TRANSFER="");const A=cM[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(M),S.render(c,u),M=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const wh=new en,ec=new js(1,1),Ch=new ph,Rh=new Tg,Ph=new xh,yf=[],Ef=[],bf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sa(n,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),kt(t,i)}}function _M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),kt(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;bf.set(i),n.uniformMatrix4fv(this.addr,!1,bf),kt(t,i)}}function vM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ec.compareFunction=t.isReversedDepthBuffer()?Rc:Cc,r=ec):r=wh,t.setTexture2D(e||r,s)}function wM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rh,s)}function CM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ph,s)}function RM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ch,s)}function PM(n){switch(n){case 5126:return fM;case 35664:return dM;case 35665:return hM;case 35666:return pM;case 35674:return mM;case 35675:return _M;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return MM;case 35669:case 35673:return SM;case 5125:return yM;case 36294:return EM;case 36295:return bM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return RM}}function DM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){const t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function IM(n,e){const t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){const t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){const t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function FM(n,e){const t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){const t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function BM(n,e){n.uniform1iv(this.addr,e)}function kM(n,e){n.uniform2iv(this.addr,e)}function zM(n,e){n.uniform3iv(this.addr,e)}function HM(n,e){n.uniform4iv(this.addr,e)}function VM(n,e){n.uniform1uiv(this.addr,e)}function GM(n,e){n.uniform2uiv(this.addr,e)}function WM(n,e){n.uniform3uiv(this.addr,e)}function XM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,s=e.length,r=sa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ec:o=wh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function qM(n,e,t){const i=this.cache,s=e.length,r=sa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rh,r[o])}function YM(n,e,t){const i=this.cache,s=e.length,r=sa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ph,r[o])}function jM(n,e,t){const i=this.cache,s=e.length,r=sa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ch,r[o])}function KM(n){switch(n){case 5126:return DM;case 35664:return LM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return BM;case 35667:case 35671:return kM;case 35668:case 35672:return zM;case 35669:case 35673:return HM;case 5125:return VM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return jM}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}}class JM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function wf(n,e){n.seq.push(e),n.map[e.id]=e}function eS(n,e,t){const i=n.name,s=i.length;for(ja.lastIndex=0;;){const r=ja.exec(i),o=ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wf(t,c===void 0?new ZM(a,n,e):new JM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new QM(a),wf(t,d)),t=d}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);eS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Cf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tS=37297;let nS=0;function iS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Rf=new Ze;function sS(n){ot._getMatrix(Rf,ot.workingColorSpace,n);const e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Bo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+iS(n.getShaderSource(e),a)}else return r}function rS(n,e){const t=sS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oS={[Qd]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[Sc]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function aS(n,e){const t=oS[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new W;function lS(){ot.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function uS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fr(n){return n!==""}function Df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(n){return n.replace(dS,pS)}const hS=new Map;function pS(n,e){let t=it[e];if(t===void 0){const i=hS.get(e);if(i!==void 0)t=it[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tc(t)}const mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(n){return n.replace(mS,_S)}function _S(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const gS={[go]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function vS(n){return gS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xS={[us]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function MS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const SS={[Ys]:"ENVMAP_MODE_REFRACTION"};function yS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":SS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ES={[Jd]:"ENVMAP_BLENDING_MULTIPLY",[ig]:"ENVMAP_BLENDING_MIX",[sg]:"ENVMAP_BLENDING_ADD"};function bS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ES[n.combine]||"ENVMAP_BLENDING_NONE"}function TS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vS(t),c=MS(t),u=yS(t),d=bS(t),f=TS(t),h=cS(t),g=uS(r),M=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?it.tonemapping_pars_fragment:"",t.toneMapping!==Zn?aS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,rS("linearToOutputTexel",t.outputColorSpace),lS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=tc(o),o=Df(o,t),o=Lf(o,t),a=tc(a),a=Df(a,t),a=Lf(a,t),o=If(o),a=If(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,E=S+p+a,I=Cf(s,s.VERTEX_SHADER,b),A=Cf(s,s.FRAGMENT_SHADER,E);s.attachShader(M,I),s.attachShader(M,A),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(M)||"",Z=s.getShaderInfoLog(I)||"",te=s.getShaderInfoLog(A)||"",B=G.trim(),X=Z.trim(),z=te.trim();let H=!0,N=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,I,A);else{const _e=Pf(s,I,"vertex"),P=Pf(s,A,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+_e+`
`+P)}else B!==""?qe("WebGLProgram: Program Info Log:",B):(X===""||z==="")&&(N=!1);N&&(D.diagnostics={runnable:H,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(A),v=new Eo(s,M),R=fS(s,M)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(M,tS)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=A,this}let wS=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RS(e),t.set(e,i)),i}}class RS{constructor(e){this.id=wS++,this.code=e,this.usedTimes=0}}function PS(n){return n===fs||n===No||n===Fo}function DS(n,e,t,i,s,r){const o=new Dc,a=new CS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,R,k,D,G,Z){const te=D.fog,B=G.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=e.get(v.envMap||X,z),N=H&&H.mapping===na?H.image.height:null,_e=h[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const P=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=P!==void 0?P.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let ke,Ce,ie,Me;if(_e){const Je=$n[_e];ke=Je.vertexShader,Ce=Je.fragmentShader}else ke=v.vertexShader,Ce=v.fragmentShader,a.update(v),ie=a.getVertexShaderID(v),Me=a.getFragmentShaderID(v);const he=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),He=G.isInstancedMesh===!0,$e=G.isBatchedMesh===!0,C=!!v.map,L=!!v.matcap,q=!!H,re=!!v.aoMap,J=!!v.lightMap,ae=!!v.bumpMap,ge=!!v.normalMap,ye=!!v.displacementMap,T=!!v.emissiveMap,le=!!v.metalnessMap,be=!!v.roughnessMap,ve=v.anisotropy>0,ne=v.clearcoat>0,Ne=v.dispersion>0,y=v.iridescence>0,_=v.sheen>0,O=v.transmission>0,Q=ve&&!!v.anisotropyMap,ce=ne&&!!v.clearcoatMap,xe=ne&&!!v.clearcoatNormalMap,Se=ne&&!!v.clearcoatRoughnessMap,ee=y&&!!v.iridescenceMap,ue=y&&!!v.iridescenceThicknessMap,Te=_&&!!v.sheenColorMap,De=_&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,Ee=!!v.specularColorMap,Ke=!!v.specularIntensityMap,tt=O&&!!v.transmissionMap,ft=O&&!!v.thicknessMap,F=!!v.gradientMap,we=!!v.alphaMap,oe=v.alphaTest>0,Fe=!!v.alphaHash,Pe=!!v.extensions;let pe=Zn;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pe=n.toneMapping);const Ge={shaderID:_e,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:Ce,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:$e,batchingColor:$e&&G._colorsTexture!==null,instancing:He,instancingColor:He&&G.instanceColor!==null,instancingMorph:He&&G.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:C,matcap:L,envMap:q,envMapMode:q&&H.mapping,envMapCubeUVHeight:N,aoMap:re,lightMap:J,bumpMap:ae,normalMap:ge,displacementMap:ye,emissiveMap:T,normalMapObjectSpace:ge&&v.normalMapType===ag,normalMapTangentSpace:ge&&v.normalMapType===Kl,packedNormalMap:ge&&v.normalMapType===Kl&&PS(v.normalMap.format),metalnessMap:le,roughnessMap:be,anisotropy:ve,anisotropyMap:Q,clearcoat:ne,clearcoatMap:ce,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:Ne,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:_,sheenColorMap:Te,sheenRoughnessMap:De,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:Ke,transmission:O,transmissionMap:tt,thicknessMap:ft,gradientMap:F,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:Fe,combine:v.combine,mapUv:C&&g(v.map.channel),aoMapUv:re&&g(v.aoMap.channel),lightMapUv:J&&g(v.lightMap.channel),bumpMapUv:ae&&g(v.bumpMap.channel),normalMapUv:ge&&g(v.normalMap.channel),displacementMapUv:ye&&g(v.displacementMap.channel),emissiveMapUv:T&&g(v.emissiveMap.channel),metalnessMapUv:le&&g(v.metalnessMap.channel),roughnessMapUv:be&&g(v.roughnessMap.channel),anisotropyMapUv:Q&&g(v.anisotropyMap.channel),clearcoatMapUv:ce&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(v.sheenRoughnessMap.channel),specularMapUv:Ae&&g(v.specularMap.channel),specularColorMapUv:Ee&&g(v.specularColorMap.channel),specularIntensityMapUv:Ke&&g(v.specularIntensityMap.channel),transmissionMapUv:tt&&g(v.transmissionMap.channel),thicknessMapUv:ft&&g(v.thicknessMap.channel),alphaMapUv:we&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||ve),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(C||we),fog:!!te,useFog:v.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:C&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:T&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)R.push(k),R.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(p(R,v),S(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function p(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function S(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function b(v){const R=h[v.type];let k;if(R){const D=$n[R];k=Xg.clone(D.uniforms)}else k=v.uniforms;return k}function E(v,R){let k=u.get(R);return k!==void 0?++k.usedTimes:(k=new AS(n,R,v,s),c.push(k),u.set(R,k)),k}function I(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function U(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:E,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:U}}function LS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ff(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,M,m,p){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},n[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=g,S.materialVariant=o(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function l(f,h,g,M,m,p){const S=a(f,h,g,M,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(f,h,g,M,m,p){const S=a(f,h,g,M,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||IS),i.length>1&&i.sort(h||Nf),s.length>1&&s.sort(h||Nf)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function US(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ff,n.set(i,[o])):s>=r.length?(o=new Ff,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ct};break;case"SpotLight":t={position:new W,direction:new W,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function BS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kS(n){const e=new NS,t=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new Tt,o=new Tt;function a(c){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,g=0,M=0,m=0,p=0,S=0,b=0,E=0,I=0,A=0,U=0;c.sort(BS);for(let R=0,k=c.length;R<k;R++){const D=c[R],G=D.color,Z=D.intensity,te=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===fs?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*Z,d+=G.g*Z,f+=G.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],Z);U++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,H=t.get(D);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=D.shadow.matrix,S++}i.directional[h]=X,h++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(G).multiplyScalar(Z),X.distance=te,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[M]=X;const z=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=z.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=B,E++}M++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(G).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const z=D.shadow,H=t.get(D);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==M||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==E||v.numSpotMaps!==I||v.numLightProbes!==U)&&(i.directional.length=h,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,v.directionalLength=h,v.pointLength=g,v.spotLength=M,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=E,v.numSpotMaps=I,v.numLightProbes=U,i.version=OS++)}function l(c,u){let d=0,f=0,h=0,g=0,M=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(b.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Of(n){const e=new kS(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function zS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Of(n),e.set(s,[a])):r>=o.length?(a=new Of(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
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
}`,GS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],WS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Bf=new Tt,ar=new W,Ka=new W;function XS(n,e,t){let i=new Nc;const s=new je,r=new je,o=new Dt,a=new jg,l=new Kg,c={},u=t.maxTextureSize,d={[Hi]:mn,[mn]:Hi,[mi]:mi},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:HS,fragmentShader:VS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let p=this.type;this.render=function(A,U,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Zd&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=go);const R=n.getRenderTarget(),k=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(vi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=p!==this.type;Z&&U.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(B=>B.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,B=A.length;te<B;te++){const X=A[te],z=X.shadow;if(z===void 0){qe("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const H=z.getFrameExtents();s.multiply(H),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,z.mapSize.y=r.y));const N=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||Z===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ur){if(X.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Jn(s.x,s.y,{format:fs,type:bi,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new js(s.x,s.y,Yn),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=Ti,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt}else X.isPointLight?(z.map=new Ah(s.x),z.map.depthTexture=new Gg(s.x,ti)):(z.map=new Jn(s.x,s.y),z.map.depthTexture=new js(s.x,s.y,ti)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=Ti,this.type===go?(z.map.depthTexture.compareFunction=N?Rc:Cc,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt);z.camera.updateProjectionMatrix()}const _e=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<_e;P++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,P),n.clear();else{P===0&&(n.setRenderTarget(z.map),n.clear());const j=z.getViewport(P);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),G.viewport(o)}if(X.isPointLight){const j=z.camera,fe=z.matrix,ke=X.distance||j.far;ke!==j.far&&(j.far=ke,j.updateProjectionMatrix()),ar.setFromMatrixPosition(X.matrixWorld),j.position.copy(ar),Ka.copy(j.position),Ka.add(GS[P]),j.up.copy(WS[P]),j.lookAt(Ka),j.updateMatrixWorld(),fe.makeTranslation(-ar.x,-ar.y,-ar.z),Bf.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bf,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(X);i=z.getFrustum(),E(U,v,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===ur&&S(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,k,D)};function S(A,U){const v=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(s.x,s.y,{format:fs,type:bi})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(U,null,v,f,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(U,null,v,h,M,null)}function b(A,U,v,R){let k=null;const D=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)k=D;else if(k=v.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const G=k.uuid,Z=U.uuid;let te=c[G];te===void 0&&(te={},c[G]=te);let B=te[Z];B===void 0&&(B=k.clone(),te[Z]=B,U.addEventListener("dispose",I)),k=B}if(k.visible=U.visible,k.wireframe=U.wireframe,R===ur?k.side=U.shadowSide!==null?U.shadowSide:U.side:k.side=U.shadowSide!==null?U.shadowSide:d[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const G=n.properties.get(k);G.light=v}return k}function E(A,U,v,R,k){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&k===ur)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),te=A.material;if(Array.isArray(te)){const B=Z.groups;for(let X=0,z=B.length;X<z;X++){const H=B[X],N=te[H.materialIndex];if(N&&N.visible){const _e=b(A,N,R,k);A.onBeforeShadow(n,A,U,v,Z,_e,H),n.renderBufferDirect(v,null,Z,_e,A,H),A.onAfterShadow(n,A,U,v,Z,_e,H)}}}else if(te.visible){const B=b(A,te,R,k);A.onBeforeShadow(n,A,U,v,Z,B,null),n.renderBufferDirect(v,null,Z,B,A,null),A.onAfterShadow(n,A,U,v,Z,B,null)}}const G=A.children;for(let Z=0,te=G.length;Z<te;Z++)E(G[Z],U,v,R,k)}function I(A){A.target.removeEventListener("dispose",I);for(const v in c){const R=c[v],k=A.target.uuid;k in R&&(R[k].dispose(),delete R[k])}}}function $S(n,e){function t(){let F=!1;const we=new Dt;let oe=null;const Fe=new Dt(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!F&&(n.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,pe,Ge,Je,Lt){Lt===!0&&(Pe*=Je,pe*=Je,Ge*=Je),we.set(Pe,pe,Ge,Je),Fe.equals(we)===!1&&(n.clearColor(Pe,pe,Ge,Je),Fe.copy(we))},reset:function(){F=!1,oe=null,Fe.set(-1,0,0,0)}}}function i(){let F=!1,we=!1,oe=null,Fe=null,Pe=null;return{setReversed:function(pe){if(we!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=pe;const Je=Pe;Pe=null,this.setClear(Je)}},getReversed:function(){return we},setTest:function(pe){pe?he(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(pe){oe!==pe&&!F&&(n.depthMask(pe),oe=pe)},setFunc:function(pe){if(we&&(pe=gg[pe]),Fe!==pe){switch(pe){case dl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case gl:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=pe}},setLocked:function(pe){F=pe},setClear:function(pe){Pe!==pe&&(Pe=pe,we&&(pe=1-pe),n.clearDepth(pe))},reset:function(){F=!1,oe=null,Fe=null,Pe=null,we=!1}}}function s(){let F=!1,we=null,oe=null,Fe=null,Pe=null,pe=null,Ge=null,Je=null,Lt=null;return{setTest:function(mt){F||(mt?he(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(mt){we!==mt&&!F&&(n.stencilMask(mt),we=mt)},setFunc:function(mt,ii,On){(oe!==mt||Fe!==ii||Pe!==On)&&(n.stencilFunc(mt,ii,On),oe=mt,Fe=ii,Pe=On)},setOp:function(mt,ii,On){(pe!==mt||Ge!==ii||Je!==On)&&(n.stencilOp(mt,ii,On),pe=mt,Ge=ii,Je=On)},setLocked:function(mt){F=mt},setClear:function(mt){Lt!==mt&&(n.clearStencil(mt),Lt=mt)},reset:function(){F=!1,we=null,oe=null,Fe=null,Pe=null,pe=null,Ge=null,Je=null,Lt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],M=null,m=!1,p=null,S=null,b=null,E=null,I=null,A=null,U=null,v=new ct(0,0,0),R=0,k=!1,D=null,G=null,Z=null,te=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=H>=2);let _e=null,P={};const j=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),ke=new Dt().fromArray(j),Ce=new Dt().fromArray(fe);function ie(F,we,oe,Fe){const Pe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(F,pe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<oe;Ge++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(we+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return pe}const Me={};Me[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(qs),ae(!1),ge(Nu),he(n.CULL_FACE),re(vi);function he(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ze(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function He(F,we){return f[F]!==we?(n.bindFramebuffer(F,we),f[F]=we,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function $e(F,we){let oe=g,Fe=!1;if(F){oe=h.get(we),oe===void 0&&(oe=[],h.set(we,oe));const Pe=F.textures;if(oe.length!==Pe.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,Ge=Pe.length;pe<Ge;pe++)oe[pe]=n.COLOR_ATTACHMENT0+pe;oe.length=Pe.length,Fe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(oe)}function C(F){return M!==F?(n.useProgram(F),M=F,!0):!1}const L={[ns]:n.FUNC_ADD,[z_]:n.FUNC_SUBTRACT,[H_]:n.FUNC_REVERSE_SUBTRACT};L[V_]=n.MIN,L[G_]=n.MAX;const q={[W_]:n.ZERO,[X_]:n.ONE,[$_]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[J_]:n.SRC_ALPHA_SATURATE,[K_]:n.DST_COLOR,[Y_]:n.DST_ALPHA,[q_]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[Z_]:n.ONE_MINUS_DST_COLOR,[j_]:n.ONE_MINUS_DST_ALPHA,[Q_]:n.CONSTANT_COLOR,[eg]:n.ONE_MINUS_CONSTANT_COLOR,[tg]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function re(F,we,oe,Fe,Pe,pe,Ge,Je,Lt,mt){if(F===vi){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),F!==k_){if(F!==p||mt!==k){if((S!==ns||I!==ns)&&(n.blendEquation(n.FUNC_ADD),S=ns,I=ns),mt)switch(F){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFunc(n.ONE,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",F);break}else switch(F){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ou:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",F);break}b=null,E=null,A=null,U=null,v.set(0,0,0),R=0,p=F,k=mt}return}Pe=Pe||we,pe=pe||oe,Ge=Ge||Fe,(we!==S||Pe!==I)&&(n.blendEquationSeparate(L[we],L[Pe]),S=we,I=Pe),(oe!==b||Fe!==E||pe!==A||Ge!==U)&&(n.blendFuncSeparate(q[oe],q[Fe],q[pe],q[Ge]),b=oe,E=Fe,A=pe,U=Ge),(Je.equals(v)===!1||Lt!==R)&&(n.blendColor(Je.r,Je.g,Je.b,Lt),v.copy(Je),R=Lt),p=F,k=!1}function J(F,we){F.side===mi?ze(n.CULL_FACE):he(n.CULL_FACE);let oe=F.side===mn;we&&(oe=!oe),ae(oe),F.blending===Gs&&F.transparent===!1?re(vi):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Fe=F.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),T(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){D!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),D=F)}function ge(F){F!==O_?(he(n.CULL_FACE),F!==G&&(F===Nu?n.cullFace(n.BACK):F===B_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),G=F}function ye(F){F!==Z&&(z&&n.lineWidth(F),Z=F)}function T(F,we,oe){F?(he(n.POLYGON_OFFSET_FILL),(te!==we||B!==oe)&&(te=we,B=oe,o.getReversed()&&(we=-we),n.polygonOffset(we,oe))):ze(n.POLYGON_OFFSET_FILL)}function le(F){F?he(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function be(F){F===void 0&&(F=n.TEXTURE0+X-1),_e!==F&&(n.activeTexture(F),_e=F)}function ve(F,we,oe){oe===void 0&&(_e===null?oe=n.TEXTURE0+X-1:oe=_e);let Fe=P[oe];Fe===void 0&&(Fe={type:void 0,texture:void 0},P[oe]=Fe),(Fe.type!==F||Fe.texture!==we)&&(_e!==oe&&(n.activeTexture(oe),_e=oe),n.bindTexture(F,we||Me[F]),Fe.type=F,Fe.texture=we)}function ne(){const F=P[_e];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ne(){try{n.compressedTexImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function O(){try{n.texSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function xe(){try{n.texStorage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function Se(){try{n.texStorage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function ee(){try{n.texImage2D(...arguments)}catch(F){lt("WebGLState:",F)}}function ue(){try{n.texImage3D(...arguments)}catch(F){lt("WebGLState:",F)}}function Te(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function De(F,we){d[F]!==we&&(n.pixelStorei(F,we),d[F]=we)}function Ae(F){ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Ee(F){Ce.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ce.copy(F))}function Ke(F,we){let oe=c.get(we);oe===void 0&&(oe=new WeakMap,c.set(we,oe));let Fe=oe.get(F);Fe===void 0&&(Fe=n.getUniformBlockIndex(we,F.name),oe.set(F,Fe))}function tt(F,we){const Fe=c.get(we).get(F);l.get(we)!==Fe&&(n.uniformBlockBinding(we,Fe,F.__bindingPointIndex),l.set(we,Fe))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},_e=null,P={},f={},h=new WeakMap,g=[],M=null,m=!1,p=null,S=null,b=null,E=null,I=null,A=null,U=null,v=new ct(0,0,0),R=0,k=!1,D=null,G=null,Z=null,te=null,B=null,ke.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:ze,bindFramebuffer:He,drawBuffers:$e,useProgram:C,setBlending:re,setMaterial:J,setFlipSided:ae,setCullFace:ge,setLineWidth:ye,setPolygonOffset:T,setScissorTest:le,activeTexture:be,bindTexture:ve,unbindTexture:ne,compressedTexImage2D:Ne,compressedTexImage3D:y,texImage2D:ee,texImage3D:ue,pixelStorei:De,getParameter:Te,updateUBOMapping:Ke,uniformBlockBinding:tt,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:Q,compressedTexSubImage3D:ce,scissor:Ae,viewport:Ee,reset:ft}}function qS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return g?new OffscreenCanvas(y,_):Cr("canvas")}function m(y,_,O){let Q=1;const ce=Ne(y);if((ce.width>O||ce.height>O)&&(Q=O/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const xe=Math.floor(Q*ce.width),Se=Math.floor(Q*ce.height);f===void 0&&(f=M(xe,Se));const ee=_?M(xe,Se):f;return ee.width=xe,ee.height=Se,ee.getContext("2d").drawImage(y,0,0,xe,Se),qe("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+xe+"x"+Se+")."),ee}else return"data"in y&&qe("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),y;return y}function p(y){return y.generateMipmaps}function S(y){n.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,_,O,Q,ce,xe=!1){if(y!==null){if(n[y]!==void 0)return n[y];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Se;Q&&(Se=e.get("EXT_texture_norm16"),Se||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===n.RED&&(O===n.FLOAT&&(ee=n.R32F),O===n.HALF_FLOAT&&(ee=n.R16F),O===n.UNSIGNED_BYTE&&(ee=n.R8),O===n.UNSIGNED_SHORT&&Se&&(ee=Se.R16_EXT),O===n.SHORT&&Se&&(ee=Se.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ee=n.R8UI),O===n.UNSIGNED_SHORT&&(ee=n.R16UI),O===n.UNSIGNED_INT&&(ee=n.R32UI),O===n.BYTE&&(ee=n.R8I),O===n.SHORT&&(ee=n.R16I),O===n.INT&&(ee=n.R32I)),_===n.RG&&(O===n.FLOAT&&(ee=n.RG32F),O===n.HALF_FLOAT&&(ee=n.RG16F),O===n.UNSIGNED_BYTE&&(ee=n.RG8),O===n.UNSIGNED_SHORT&&Se&&(ee=Se.RG16_EXT),O===n.SHORT&&Se&&(ee=Se.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(ee=n.RG8UI),O===n.UNSIGNED_SHORT&&(ee=n.RG16UI),O===n.UNSIGNED_INT&&(ee=n.RG32UI),O===n.BYTE&&(ee=n.RG8I),O===n.SHORT&&(ee=n.RG16I),O===n.INT&&(ee=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),O===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),O===n.UNSIGNED_INT&&(ee=n.RGB32UI),O===n.BYTE&&(ee=n.RGB8I),O===n.SHORT&&(ee=n.RGB16I),O===n.INT&&(ee=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),O===n.UNSIGNED_INT&&(ee=n.RGBA32UI),O===n.BYTE&&(ee=n.RGBA8I),O===n.SHORT&&(ee=n.RGBA16I),O===n.INT&&(ee=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&Se&&(ee=Se.RGB16_EXT),O===n.SHORT&&Se&&(ee=Se.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),_===n.RGBA){const ue=xe?Bo:ot.getTransfer(ce);O===n.FLOAT&&(ee=n.RGBA32F),O===n.HALF_FLOAT&&(ee=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ee=ue===pt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&Se&&(ee=Se.RGBA16_EXT),O===n.SHORT&&Se&&(ee=Se.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(y,_){let O;return y?_===null||_===ti||_===Ar?O=n.DEPTH24_STENCIL8:_===Yn?O=n.DEPTH32F_STENCIL8:_===Tr&&(O=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Ar?O=n.DEPTH_COMPONENT24:_===Yn?O=n.DEPTH_COMPONENT32F:_===Tr&&(O=n.DEPTH_COMPONENT16),O}function A(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Wt&&y.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function U(y){const _=y.target;_.removeEventListener("dispose",U),R(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function v(y){const _=y.target;_.removeEventListener("dispose",v),D(_)}function R(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,Q=h.get(O);if(Q){const ce=Q[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&k(y),Object.keys(Q).length===0&&h.delete(O)}i.remove(y)}function k(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const O=y.source,Q=h.get(O);delete Q[_.__cacheKey],o.memory.textures--}function D(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ce=0;ce<_.__webglFramebuffer[Q].length;ce++)n.deleteFramebuffer(_.__webglFramebuffer[Q][ce]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=y.textures;for(let Q=0,ce=O.length;Q<ce;Q++){const xe=i.get(O[Q]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(O[Q])}i.remove(y)}let G=0;function Z(){G=0}function te(){return G}function B(y){G=y}function X(){const y=G;return y>=s.maxTextures&&qe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),G+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function H(y,_){const O=i.get(y);if(y.isVideoTexture&&ve(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const Q=y.image;if(Q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(O,y,_);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function N(y,_){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){ze(O,y,_);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function _e(y,_){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){ze(O,y,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function P(y,_){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){He(O,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const j={[Uo]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[xl]:n.MIRRORED_REPEAT},fe={[Wt]:n.NEAREST,[rg]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[xa]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},ke={[lg]:n.NEVER,[hg]:n.ALWAYS,[cg]:n.LESS,[Cc]:n.LEQUAL,[ug]:n.EQUAL,[Rc]:n.GEQUAL,[fg]:n.GREATER,[dg]:n.NOTEQUAL};function Ce(y,_){if(_.type===Yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===xa||_.magFilter===Vr||_.magFilter===rs||_.minFilter===Jt||_.minFilter===xa||_.minFilter===Vr||_.minFilter===rs)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,j[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,j[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,j[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==Vr&&_.minFilter!==rs||_.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ie(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",U));const Q=_.source;let ce=h.get(Q);ce===void 0&&(ce={},h.set(Q,ce));const xe=z(_);if(xe!==y.__cacheKey){ce[xe]===void 0&&(ce[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ce[xe].usedTimes++;const Se=ce[y.__cacheKey];Se!==void 0&&(ce[y.__cacheKey].usedTimes--,Se.usedTimes===0&&k(_)),y.__cacheKey=xe,y.__webglTexture=ce[xe].texture}return O}function Me(y,_,O){return Math.floor(Math.floor(y/O)/_)}function he(y,_,O,Q){const xe=y.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,Q,_.data);else{xe.sort((De,Ae)=>De.start-Ae.start);let Se=0;for(let De=1;De<xe.length;De++){const Ae=xe[Se],Ee=xe[De],Ke=Ae.start+Ae.count,tt=Me(Ee.start,_.width,4),ft=Me(Ae.start,_.width,4);Ee.start<=Ke+1&&tt===ft&&Me(Ee.start+Ee.count-1,_.width,4)===tt?Ae.count=Math.max(Ae.count,Ee.start+Ee.count-Ae.start):(++Se,xe[Se]=Ee)}xe.length=Se+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let De=0,Ae=xe.length;De<Ae;De++){const Ee=xe[De],Ke=Math.floor(Ee.start/4),tt=Math.ceil(Ee.count/4),ft=Ke%_.width,F=Math.floor(Ke/_.width),we=tt,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,ft,F,we,oe,O,Q,_.data)}y.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function ze(y,_,O){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);const ce=ie(y,_),xe=_.source;t.bindTexture(Q,y.__webglTexture,n.TEXTURE0+O);const Se=i.get(xe);if(xe.version!==Se.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const oe=ot.getPrimaries(ot.workingColorSpace),Fe=_.colorSpace===Bi?null:ot.getPrimaries(_.colorSpace),Pe=_.colorSpace===Bi||oe===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ue=m(_.image,!1,s.maxTextureSize);ue=ne(_,ue);const Te=r.convert(_.format,_.colorSpace),De=r.convert(_.type);let Ae=E(_.internalFormat,Te,De,_.normalized,_.colorSpace,_.isVideoTexture);Ce(Q,_);let Ee;const Ke=_.mipmaps,tt=_.isVideoTexture!==!0,ft=Se.__version===void 0||ce===!0,F=xe.dataReady,we=A(_,ue);if(_.isDepthTexture)Ae=I(_.format===os,_.type),ft&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Ae,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Te,De,null));else if(_.isDataTexture)if(Ke.length>0){tt&&ft&&t.texStorage2D(n.TEXTURE_2D,we,Ae,Ke[0].width,Ke[0].height);for(let oe=0,Fe=Ke.length;oe<Fe;oe++)Ee=Ke[oe],tt?F&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Te,De,Ee.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,Ee.width,Ee.height,0,Te,De,Ee.data);_.generateMipmaps=!1}else tt?(ft&&t.texStorage2D(n.TEXTURE_2D,we,Ae,ue.width,ue.height),F&&he(_,ue,Te,De)):t.texImage2D(n.TEXTURE_2D,0,Ae,ue.width,ue.height,0,Te,De,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){tt&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ae,Ke[0].width,Ke[0].height,ue.depth);for(let oe=0,Fe=Ke.length;oe<Fe;oe++)if(Ee=Ke[oe],_.format!==Dn)if(Te!==null)if(tt){if(F)if(_.layerUpdates.size>0){const Pe=mf(Ee.width,Ee.height,_.format,_.type);for(const pe of _.layerUpdates){const Ge=Ee.data.subarray(pe*Pe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,pe,Ee.width,Ee.height,1,Te,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ue.depth,Te,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,Ee.width,Ee.height,ue.depth,0,Ee.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,ue.depth,Te,De,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ae,Ee.width,Ee.height,ue.depth,0,Te,De,Ee.data)}else{tt&&ft&&t.texStorage2D(n.TEXTURE_2D,we,Ae,Ke[0].width,Ke[0].height);for(let oe=0,Fe=Ke.length;oe<Fe;oe++)Ee=Ke[oe],_.format!==Dn?Te!==null?tt?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ae,Ee.width,Ee.height,0,Ee.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?F&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Te,De,Ee.data):t.texImage2D(n.TEXTURE_2D,oe,Ae,Ee.width,Ee.height,0,Te,De,Ee.data)}else if(_.isDataArrayTexture)if(tt){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ae,ue.width,ue.height,ue.depth),F)if(_.layerUpdates.size>0){const oe=mf(ue.width,ue.height,_.format,_.type);for(const Fe of _.layerUpdates){const Pe=ue.data.subarray(Fe*oe/ue.data.BYTES_PER_ELEMENT,(Fe+1)*oe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,ue.width,ue.height,1,Te,De,Pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ue.width,ue.height,ue.depth,0,Te,De,ue.data);else if(_.isData3DTexture)tt?(ft&&t.texStorage3D(n.TEXTURE_3D,we,Ae,ue.width,ue.height,ue.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ue.width,ue.height,ue.depth,0,Te,De,ue.data);else if(_.isFramebufferTexture){if(ft)if(tt)t.texStorage2D(n.TEXTURE_2D,we,Ae,ue.width,ue.height);else{let oe=ue.width,Fe=ue.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ae,oe,Fe,0,Te,De,null),oe>>=1,Fe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ue.parentNode!==oe){oe.appendChild(ue),d.add(_),oe.onpaint=Je=>{const Lt=Je.changedElements;for(const mt of d)Lt.includes(mt.image)&&(mt.needsUpdate=!0)},oe.requestPaint();return}const Fe=0,Pe=n.RGBA,pe=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Fe,Pe,pe,Ge,ue),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(tt&&ft){const oe=Ne(Ke[0]);t.texStorage2D(n.TEXTURE_2D,we,Ae,oe.width,oe.height)}for(let oe=0,Fe=Ke.length;oe<Fe;oe++)Ee=Ke[oe],tt?F&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Te,De,Ee):t.texImage2D(n.TEXTURE_2D,oe,Ae,Te,De,Ee);_.generateMipmaps=!1}else if(tt){if(ft){const oe=Ne(ue);t.texStorage2D(n.TEXTURE_2D,we,Ae,oe.width,oe.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Te,De,ue);p(_)&&S(Q),Se.__version=xe.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function He(y,_,O){if(_.image.length!==6)return;const Q=ie(y,_),ce=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const xe=i.get(ce);if(ce.version!==xe.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const Se=ot.getPrimaries(ot.workingColorSpace),ee=_.colorSpace===Bi?null:ot.getPrimaries(_.colorSpace),ue=_.colorSpace===Bi||Se===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!Te&&!De?Ae[pe]=m(_.image[pe],!0,s.maxCubemapSize):Ae[pe]=De?_.image[pe].image:_.image[pe],Ae[pe]=ne(_,Ae[pe]);const Ee=Ae[0],Ke=r.convert(_.format,_.colorSpace),tt=r.convert(_.type),ft=E(_.internalFormat,Ke,tt,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,we=xe.__version===void 0||Q===!0,oe=ce.dataReady;let Fe=A(_,Ee);Ce(n.TEXTURE_CUBE_MAP,_);let Pe;if(Te){F&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,ft,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){Pe=Ae[pe].mipmaps;for(let Ge=0;Ge<Pe.length;Ge++){const Je=Pe[Ge];_.format!==Dn?Ke!==null?F?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,Je.width,Je.height,Ke,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ft,Je.width,Je.height,0,Je.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,Je.width,Je.height,Ke,tt,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ft,Je.width,Je.height,0,Ke,tt,Je.data)}}}else{if(Pe=_.mipmaps,F&&we){Pe.length>0&&Fe++;const pe=Ne(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(De){F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,Ke,tt,Ae[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ae[pe].width,Ae[pe].height,0,Ke,tt,Ae[pe].data);for(let Ge=0;Ge<Pe.length;Ge++){const Lt=Pe[Ge].image[pe].image;F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Lt.width,Lt.height,Ke,tt,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ft,Lt.width,Lt.height,0,Ke,tt,Lt.data)}}else{F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ke,tt,Ae[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ke,tt,Ae[pe]);for(let Ge=0;Ge<Pe.length;Ge++){const Je=Pe[Ge];F?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Ke,tt,Je.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ft,Ke,tt,Je.image[pe])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),xe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function $e(y,_,O,Q,ce,xe){const Se=r.convert(O.format,O.colorSpace),ee=r.convert(O.type),ue=E(O.internalFormat,Se,ee,O.normalized,O.colorSpace),Te=i.get(_),De=i.get(O);if(De.__renderTarget=_,!Te.__hasExternalTextures){const Ae=Math.max(1,_.width>>xe),Ee=Math.max(1,_.height>>xe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,xe,ue,Ae,Ee,_.depth,0,Se,ee,null):t.texImage2D(ce,xe,ue,Ae,Ee,0,Se,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ce,De.__webglTexture,0,le(_)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ce,De.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(y,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const Q=_.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,xe=I(_.stencilBuffer,ce),Se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(_),xe,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(_),xe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,xe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,y)}else{const Q=_.textures;for(let ce=0;ce<Q.length;ce++){const xe=Q[ce],Se=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ue=E(xe.internalFormat,Se,ee,xe.normalized,xe.colorSpace);be(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(_),ue,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(_),ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(y,_,O){const Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(_.depthTexture);if(ce.__renderTarget=_,(!ce.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,_.depthTexture.addEventListener("dispose",U)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_.depthTexture);const Te=r.convert(_.depthTexture.format),De=r.convert(_.depthTexture.type);let Ae;_.depthTexture.format===Ti?Ae=n.DEPTH_COMPONENT24:_.depthTexture.format===os&&(Ae=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,_.width,_.height,0,Te,De,null)}}else H(_.depthTexture,0);const xe=ce.__webglTexture,Se=le(_),ee=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ue=_.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ti)be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ee,xe,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ue,ee,xe,0);else if(_.depthTexture.format===os)be(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,ee,xe,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ue,ee,xe,0);else throw new Error("Unknown depthTexture format")}function q(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ce=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),_.__depthDisposeCallback=ce}_.__boundDepthTexture=Q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)L(_.__webglFramebuffer[Q],y,Q);else{const Q=y.texture.mipmaps;Q&&Q.length>0?L(_.__webglFramebuffer[0],y,0):L(_.__webglFramebuffer,y,0)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=n.createRenderbuffer(),C(_.__webglDepthbuffer[Q],y,!1);else{const ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,xe)}}else{const Q=y.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),C(_.__webglDepthbuffer,y,!1);else{const ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(y,_,O){const Q=i.get(y);_!==void 0&&$e(Q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&q(y)}function J(y){const _=y.texture,O=i.get(y),Q=i.get(_);y.addEventListener("dispose",v);const ce=y.textures,xe=y.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,o.memory.textures++),xe){O.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ee]=[];for(let ue=0;ue<_.mipmaps.length;ue++)O.__webglFramebuffer[ee][ue]=n.createFramebuffer()}else O.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)O.__webglFramebuffer[ee]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ee=0,ue=ce.length;ee<ue;ee++){const Te=i.get(ce[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&be(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ee=0;ee<ce.length;ee++){const ue=ce[ee];O.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ee]);const Te=r.convert(ue.format,ue.colorSpace),De=r.convert(ue.type),Ae=E(ue.internalFormat,Te,De,ue.normalized,ue.colorSpace,y.isXRRenderTarget===!0),Ee=le(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Ae,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,O.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),C(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)$e(O.__webglFramebuffer[ee][ue],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue);else $e(O.__webglFramebuffer[ee],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ee=0,ue=ce.length;ee<ue;ee++){const Te=ce[ee],De=i.get(Te);let Ae=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Ae=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,De.__webglTexture),Ce(Ae,Te),$e(O.__webglFramebuffer,y,Te,n.COLOR_ATTACHMENT0+ee,Ae,0),p(Te)&&S(Ae)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ee=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,Q.__webglTexture),Ce(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)$e(O.__webglFramebuffer[ue],y,_,n.COLOR_ATTACHMENT0,ee,ue);else $e(O.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,ee,0);p(_)&&S(ee),t.unbindTexture()}y.depthBuffer&&q(y)}function ae(y){const _=y.textures;for(let O=0,Q=_.length;O<Q;O++){const ce=_[O];if(p(ce)){const xe=b(y),Se=i.get(ce).__webglTexture;t.bindTexture(xe,Se),S(xe),t.unbindTexture()}}}const ge=[],ye=[];function T(y){if(y.samples>0){if(be(y)===!1){const _=y.textures,O=y.width,Q=y.height;let ce=n.COLOR_BUFFER_BIT;const xe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(y),ee=_.length>1;if(ee)for(let Te=0;Te<_.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ue=y.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<_.length;Te++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);const De=i.get(_[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,ce,n.NEAREST),l===!0&&(ge.length=0,ye.length=0,ge.push(n.COLOR_ATTACHMENT0+Te),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ge.push(xe),ye.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<_.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);const De=i.get(_[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function le(y){return Math.min(s.maxSamples,y.samples)}function be(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ve(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ne(y,_){const O=y.colorSpace,Q=y.format,ce=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==Oo&&O!==Bi&&(ot.getTransfer(O)===pt?(Q!==Dn||ce!==Mn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),_}function Ne(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.getTextureUnits=te,this.setTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=_e,this.setTextureCube=P,this.rebindTextures=re,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YS(n,e){function t(i,s=Bi){let r;const o=ot.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===yc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===fh)return n.RGB;if(i===Dn)return n.RGBA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===dh)return n.RED;if(i===Tc)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===Ac)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===vo||i===xo||i===Mo||i===So)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===yl||i===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Tl||i===Al||i===wl||i===Cl||i===No||i===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===Tl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Al)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wl)return r.COMPRESSED_R11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Xl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wl)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ql||i===Yl||i===Fo||i===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
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

}`;class ZS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:jS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JS extends Wi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const M=typeof XRWebGLBinding<"u",m=new ZS,p={},S=t.getContextAttributes();let b=null,E=null;const I=[],A=[],U=new je;let v=null;const R=new bn;R.viewport=new Dt;const k=new bn;k.viewport=new Dt;const D=[R,k],G=new o0;let Z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Me=I[ie];return Me===void 0&&(Me=new Aa,I[ie]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ie){let Me=I[ie];return Me===void 0&&(Me=new Aa,I[ie]=Me),Me.getGripSpace()},this.getHand=function(ie){let Me=I[ie];return Me===void 0&&(Me=new Aa,I[ie]=Me),Me.getHandSpace()};function B(ie){const Me=A.indexOf(ie.inputSource);if(Me===-1)return;const he=I[Me];he!==void 0&&(he.update(ie.inputSource,ie.frame,c||o),he.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",z);for(let ie=0;ie<I.length;ie++){const Me=A[ie];Me!==null&&(A[ie]=null,I[ie].disconnect(Me))}Z=null,te=null,m.reset();for(const ie in p)delete p[ie];e.setRenderTarget(b),h=null,f=null,d=null,s=null,E=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ze=null,He=null;S.depth&&(He=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?os:Ti,ze=S.stencil?Ar:ti);const $e={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Jn(f.textureWidth,f.textureHeight,{format:Dn,type:Mn,depthTexture:new js(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Jn(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(ie){for(let Me=0;Me<ie.removed.length;Me++){const he=ie.removed[Me],ze=A.indexOf(he);ze>=0&&(A[ze]=null,I[ze].disconnect(he))}for(let Me=0;Me<ie.added.length;Me++){const he=ie.added[Me];let ze=A.indexOf(he);if(ze===-1){for(let $e=0;$e<I.length;$e++)if($e>=A.length){A.push(he),ze=$e;break}else if(A[$e]===null){A[$e]=he,ze=$e;break}if(ze===-1)break}const He=I[ze];He&&He.connect(he)}}const H=new W,N=new W;function _e(ie,Me,he){H.setFromMatrixPosition(Me.matrixWorld),N.setFromMatrixPosition(he.matrixWorld);const ze=H.distanceTo(N),He=Me.projectionMatrix.elements,$e=he.projectionMatrix.elements,C=He[14]/(He[10]-1),L=He[14]/(He[10]+1),q=(He[9]+1)/He[5],re=(He[9]-1)/He[5],J=(He[8]-1)/He[0],ae=($e[8]+1)/$e[0],ge=C*J,ye=C*ae,T=ze/(-J+ae),le=T*-J;if(Me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(T),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),He[10]===-1)ie.projectionMatrix.copy(Me.projectionMatrix),ie.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const be=C+T,ve=L+T,ne=ge-le,Ne=ye+(ze-le),y=q*L/ve*be,_=re*L/ve*be;ie.projectionMatrix.makePerspective(ne,Ne,y,_,be,ve),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,Me){Me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Me=ie.near,he=ie.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(he=m.depthFar)),G.near=k.near=R.near=Me,G.far=k.far=R.far=he,(Z!==G.near||te!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),Z=G.near,te=G.far),G.layers.mask=ie.layers.mask|6,R.layers.mask=G.layers.mask&-5,k.layers.mask=G.layers.mask&-3;const ze=ie.parent,He=G.cameras;P(G,ze);for(let $e=0;$e<He.length;$e++)P(He[$e],ze);He.length===2?_e(G,R,k):G.projectionMatrix.copy(R.projectionMatrix),j(ie,G,ze)};function j(ie,Me,he){he===null?ie.matrix.copy(Me.matrixWorld):(ie.matrix.copy(he.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Me.projectionMatrix),ie.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Jl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(ie){return p[ie]};let fe=null;function ke(ie,Me){if(u=Me.getViewerPose(c||o),g=Me,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ze=!1;he.length!==G.cameras.length&&(G.cameras.length=0,ze=!0);for(let L=0;L<he.length;L++){const q=he[L];let re=null;if(h!==null)re=h.getViewport(q);else{const ae=d.getViewSubImage(f,q);re=ae.viewport,L===0&&(e.setRenderTargetTextures(E,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(E))}let J=D[L];J===void 0&&(J=new bn,J.layers.enable(L),J.viewport=new Dt,D[L]=J),J.matrix.fromArray(q.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(q.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(re.x,re.y,re.width,re.height),L===0&&(G.matrix.copy(J.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ze===!0&&G.cameras.push(J)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const L=d.getDepthInformation(he[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(He&&He.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<he.length;L++){const q=he[L].camera;if(q){let re=p[q];re||(re=new Mh,p[q]=re);const J=d.getCameraImage(q);re.sourceTexture=J}}}}for(let he=0;he<I.length;he++){const ze=A[he],He=I[he];ze!==null&&He!==void 0&&He.update(ze,Me,c||o)}fe&&fe(ie,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),g=null}const Ce=new bh;Ce.setAnimationLoop(ke),this.setAnimationLoop=function(ie){fe=ie},this.dispose=function(){}}}const QS=new Tt,Dh=new Ze;Dh.set(-1,0,0,0,1,0,0,0,1);function ey(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,E=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ty(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const E=b.program;i.uniformBlockBinding(S,E)}function c(S,b){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(S,I);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const b=d();S.__bindingPointIndex=b;const E=n.createBuffer(),I=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=s[S.id],E=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,U=E.length;A<U;A++){const v=Array.isArray(E[A])?E[A]:[E[A]];for(let R=0,k=v.length;R<k;R++){const D=v[R];if(h(D,A,R,I)===!0){const G=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let te=0;for(let B=0;B<Z.length;B++){const X=Z[B],z=M(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+te,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):ArrayBuffer.isView(X)?D.__data.set(new X.constructor(X.buffer,X.byteOffset,D.__data.length)):(X.toArray(D.__data,te),te+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,b,E,I){const A=S.value,U=b+"_"+E;if(I[U]===void 0)return typeof A=="number"||typeof A=="boolean"?I[U]=A:ArrayBuffer.isView(A)?I[U]=A.slice():I[U]=A.clone(),!0;{const v=I[U];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return I[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function g(S){const b=S.uniforms;let E=0;const I=16;for(let U=0,v=b.length;U<v;U++){const R=Array.isArray(b[U])?b[U]:[b[U]];for(let k=0,D=R.length;k<D;k++){const G=R[k],Z=Array.isArray(G.value)?G.value:[G.value];for(let te=0,B=Z.length;te<B;te++){const X=Z[te],z=M(X),H=E%I,N=H%z.boundary,_e=H+N;E+=N,_e!==0&&I-_e<z.storage&&(E+=I-_e),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=z.storage}}}const A=E%I;return A>0&&(E+=I-A),S.__size=E,S.__cache={},this}function M(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function iy(){return Hn===null&&(Hn=new kg(ny,16,16,fs,bi),Hn.name="DFG_LUT",Hn.minFilter=Jt,Hn.magFilter=Jt,Hn.wrapS=_i,Hn.wrapT=_i,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class sy{constructor(e={}){const{canvas:t=mg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=h,m=new Set([wc,Ac,Tc]),p=new Set([Mn,ti,Tr,Ar,Ec,bc]),S=new Uint32Array(4),b=new Int32Array(4),E=new W;let I=null,A=null;const U=[],v=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let D=!1,G=null;this._outputColorSpace=hn;let Z=0,te=0,B=null,X=-1,z=null;const H=new Dt,N=new Dt;let _e=null;const P=new ct(0);let j=0,fe=t.width,ke=t.height,Ce=1,ie=null,Me=null;const he=new Dt(0,0,fe,ke),ze=new Dt(0,0,fe,ke);let He=!1;const $e=new Nc;let C=!1,L=!1;const q=new Tt,re=new W,J=new Dt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function ye(){return B===null?Ce:1}let T=i;function le(x,V){return t.getContext(x,V)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Je,!1),T===null){const V="webgl2";if(T=le(V,x),T===null)throw le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw lt("WebGLRenderer: "+x.message),x}let be,ve,ne,Ne,y,_,O,Q,ce,xe,Se,ee,ue,Te,De,Ae,Ee,Ke,tt,ft,F,we,oe;function Fe(){be=new iM(T),be.init(),F=new YS(T,be),ve=new jx(T,be,e,F),ne=new $S(T,be),ve.reversedDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),Ne=new oM(T),y=new LS,_=new qS(T,be,ne,y,ve,F,Ne),O=new nM(k),Q=new u0(T),we=new qx(T,Q),ce=new sM(T,Q,Ne,we),xe=new lM(T,ce,Q,we,Ne),Ke=new aM(T,ve,_),De=new Kx(y),Se=new DS(k,O,be,ve,we,De),ee=new ey(k,y),ue=new US,Te=new zS(be),Ee=new $x(k,O,ne,xe,g,l),Ae=new XS(k,xe,ve),oe=new ty(T,Ne,ve,ne),tt=new Yx(T,be,Ne),ft=new rM(T,be,Ne),Ne.programs=Se.programs,k.capabilities=ve,k.extensions=be,k.properties=y,k.renderLists=ue,k.shadowMap=Ae,k.state=ne,k.info=Ne}Fe(),M!==Mn&&(R=new uM(M,t.width,t.height,s,r));const Pe=new JS(k,T);this.xr=Pe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(x){x!==void 0&&(Ce=x,this.setSize(fe,ke,!1))},this.getSize=function(x){return x.set(fe,ke)},this.setSize=function(x,V,K=!0){if(Pe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=x,ke=V,t.width=Math.floor(x*Ce),t.height=Math.floor(V*Ce),K===!0&&(t.style.width=x+"px",t.style.height=V+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,x,V)},this.getDrawingBufferSize=function(x){return x.set(fe*Ce,ke*Ce).floor()},this.setDrawingBufferSize=function(x,V,K){fe=x,ke=V,Ce=K,t.width=Math.floor(x*K),t.height=Math.floor(V*K),this.setViewport(0,0,x,V)},this.setEffects=function(x){if(M===Mn){lt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let V=0;V<x.length;V++)if(x[V].isOutputPass===!0){qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(he)},this.setViewport=function(x,V,K,$){x.isVector4?he.set(x.x,x.y,x.z,x.w):he.set(x,V,K,$),ne.viewport(H.copy(he).multiplyScalar(Ce).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,V,K,$){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,V,K,$),ne.scissor(N.copy(ze).multiplyScalar(Ce).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(x){ne.setScissorTest(He=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){Me=x},this.getClearColor=function(x){return x.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(x=!0,V=!0,K=!0){let $=0;if(x){let Y=!1;if(B!==null){const Ue=B.texture.format;Y=m.has(Ue)}if(Y){const Ue=B.texture.type,Be=p.has(Ue),Ie=Ee.getClearColor(),Ve=Ee.getClearAlpha(),We=Ie.r,Qe=Ie.g,st=Ie.b;Be?(S[0]=We,S[1]=Qe,S[2]=st,S[3]=Ve,T.clearBufferuiv(T.COLOR,0,S)):(b[0]=We,b[1]=Qe,b[2]=st,b[3]=Ve,T.clearBufferiv(T.COLOR,0,b))}else $|=T.COLOR_BUFFER_BIT}V&&($|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),G=x},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Ee.dispose(),ue.dispose(),Te.dispose(),y.dispose(),O.dispose(),xe.dispose(),we.dispose(),oe.dispose(),Se.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Wc),Pe.removeEventListener("sessionend",Xc),Xi.stop()};function pe(x){x.preventDefault(),Gu("WebGLRenderer: Context Lost."),D=!0}function Ge(){Gu("WebGLRenderer: Context Restored."),D=!1;const x=Ne.autoReset,V=Ae.enabled,K=Ae.autoUpdate,$=Ae.needsUpdate,Y=Ae.type;Fe(),Ne.autoReset=x,Ae.enabled=V,Ae.autoUpdate=K,Ae.needsUpdate=$,Ae.type=Y}function Je(x){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Lt(x){const V=x.target;V.removeEventListener("dispose",Lt),mt(V)}function mt(x){ii(x),y.remove(x)}function ii(x){const V=y.get(x).programs;V!==void 0&&(V.forEach(function(K){Se.releaseProgram(K)}),x.isShaderMaterial&&Se.releaseShaderCache(x))}this.renderBufferDirect=function(x,V,K,$,Y,Ue){V===null&&(V=ae);const Be=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=Nh(x,V,K,$,Y);ne.setMaterial($,Be);let Ve=K.index,We=1;if($.wireframe===!0){if(Ve=ce.getWireframeAttribute(K),Ve===void 0)return;We=2}const Qe=K.drawRange,st=K.attributes.position;let Xe=Qe.start*We,_t=(Qe.start+Qe.count)*We;Ue!==null&&(Xe=Math.max(Xe,Ue.start*We),_t=Math.min(_t,(Ue.start+Ue.count)*We)),Ve!==null?(Xe=Math.max(Xe,0),_t=Math.min(_t,Ve.count)):st!=null&&(Xe=Math.max(Xe,0),_t=Math.min(_t,st.count));const It=_t-Xe;if(It<0||It===1/0)return;we.setup(Y,$,Ie,K,Ve);let Rt,xt=tt;if(Ve!==null&&(Rt=Q.get(Ve),xt=ft,xt.setIndex(Rt)),Y.isMesh)$.wireframe===!0?(ne.setLineWidth($.wireframeLinewidth*ye()),xt.setMode(T.LINES)):xt.setMode(T.TRIANGLES);else if(Y.isLine){let $t=$.linewidth;$t===void 0&&($t=1),ne.setLineWidth($t*ye()),Y.isLineSegments?xt.setMode(T.LINES):Y.isLineLoop?xt.setMode(T.LINE_LOOP):xt.setMode(T.LINE_STRIP)}else Y.isPoints?xt.setMode(T.POINTS):Y.isSprite&&xt.setMode(T.TRIANGLES);if(Y.isBatchedMesh)if(be.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $t=Y._multiDrawStarts,Oe=Y._multiDrawCounts,_n=Y._multiDrawCount,ut=Ve?Q.get(Ve).bytesPerElement:1,yn=y.get($).currentProgram.getUniforms();for(let Bn=0;Bn<_n;Bn++)yn.setValue(T,"_gl_DrawID",Bn),xt.render($t[Bn]/ut,Oe[Bn])}else if(Y.isInstancedMesh)xt.renderInstances(Xe,It,Y.count);else if(K.isInstancedBufferGeometry){const $t=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Oe=Math.min(K.instanceCount,$t);xt.renderInstances(Xe,It,Oe)}else xt.render(Xe,It)};function On(x,V,K){x.transparent===!0&&x.side===mi&&x.forceSinglePass===!1?(x.side=mn,x.needsUpdate=!0,Br(x,V,K),x.side=Hi,x.needsUpdate=!0,Br(x,V,K),x.side=mi):Br(x,V,K)}this.compile=function(x,V,K=null){K===null&&(K=x),A=Te.get(K),A.init(V),v.push(A),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),x!==K&&x.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights();const $=new Set;return x.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ue=Y.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Ie=Ue[Be];On(Ie,K,Y),$.add(Ie)}else On(Ue,K,Y),$.add(Ue)}),A=v.pop(),$},this.compileAsync=function(x,V,K=null){const $=this.compile(x,V,K);return new Promise(Y=>{function Ue(){if($.forEach(function(Be){y.get(Be).currentProgram.isReady()&&$.delete(Be)}),$.size===0){Y(x);return}setTimeout(Ue,10)}be.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ra=null;function Ih(x){ra&&ra(x)}function Wc(){Xi.stop()}function Xc(){Xi.start()}const Xi=new bh;Xi.setAnimationLoop(Ih),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(x){ra=x,Pe.setAnimationLoop(x),x===null?Xi.stop():Xi.start()},Pe.addEventListener("sessionstart",Wc),Pe.addEventListener("sessionend",Xc),this.render=function(x,V){if(V!==void 0&&V.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(x,V);const K=Pe.enabled===!0&&Pe.isPresenting===!0,$=R!==null&&(B===null||K)&&R.begin(k,B);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(V),V=Pe.getCamera()),x.isScene===!0&&x.onBeforeRender(k,x,V,B),A=Te.get(x,v.length),A.init(V),A.state.textureUnits=_.getTextureUnits(),v.push(A),q.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$e.setFromProjectionMatrix(q,jn,V.reversedDepth),L=this.localClippingEnabled,C=De.init(this.clippingPlanes,L),I=ue.get(x,U.length),I.init(),U.push(I),Pe.enabled===!0&&Pe.isPresenting===!0){const Be=k.xr.getDepthSensingMesh();Be!==null&&oa(Be,V,-1/0,k.sortObjects)}oa(x,V,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(ie,Me),ge=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ge&&Ee.addToRenderList(I,x),this.info.render.frame++,C===!0&&De.beginShadows();const Y=A.state.shadowsArray;if(Ae.render(Y,x,V),C===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&R.hasRenderPass())===!1){const Be=I.opaque,Ie=I.transmissive;if(A.setupLights(),V.isArrayCamera){const Ve=V.cameras;if(Ie.length>0)for(let We=0,Qe=Ve.length;We<Qe;We++){const st=Ve[We];qc(Be,Ie,x,st)}ge&&Ee.render(x);for(let We=0,Qe=Ve.length;We<Qe;We++){const st=Ve[We];$c(I,x,st,st.viewport)}}else Ie.length>0&&qc(Be,Ie,x,V),ge&&Ee.render(x),$c(I,x,V)}B!==null&&te===0&&(_.updateMultisampleRenderTarget(B),_.updateRenderTargetMipmap(B)),$&&R.end(k),x.isScene===!0&&x.onAfterRender(k,x,V),we.resetDefaultState(),X=-1,z=null,v.pop(),v.length>0?(A=v[v.length-1],_.setTextureUnits(A.state.textureUnits),C===!0&&De.setGlobalState(k.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?I=U[U.length-1]:I=null,G!==null&&G.renderEnd()};function oa(x,V,K,$){if(x.visible===!1)return;if(x.layers.test(V.layers)){if(x.isGroup)K=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(V);else if(x.isLightProbeGrid)A.pushLightProbeGrid(x);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$e.intersectsSprite(x)){$&&J.setFromMatrixPosition(x.matrixWorld).applyMatrix4(q);const Be=xe.update(x),Ie=x.material;Ie.visible&&I.push(x,Be,Ie,K,J.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$e.intersectsObject(x))){const Be=xe.update(x),Ie=x.material;if($&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),J.copy(x.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),J.copy(Be.boundingSphere.center)),J.applyMatrix4(x.matrixWorld).applyMatrix4(q)),Array.isArray(Ie)){const Ve=Be.groups;for(let We=0,Qe=Ve.length;We<Qe;We++){const st=Ve[We],Xe=Ie[st.materialIndex];Xe&&Xe.visible&&I.push(x,Be,Xe,K,J.z,st)}}else Ie.visible&&I.push(x,Be,Ie,K,J.z,null)}}const Ue=x.children;for(let Be=0,Ie=Ue.length;Be<Ie;Be++)oa(Ue[Be],V,K,$)}function $c(x,V,K,$){const{opaque:Y,transmissive:Ue,transparent:Be}=x;A.setupLightsView(K),C===!0&&De.setGlobalState(k.clippingPlanes,K),$&&ne.viewport(H.copy($)),Y.length>0&&Or(Y,V,K),Ue.length>0&&Or(Ue,V,K),Be.length>0&&Or(Be,V,K),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function qc(x,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Xe=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Jn(1,1,{generateMipmaps:!0,type:Xe?bi:Mn,minFilter:rs,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ue=A.state.transmissionRenderTarget[$.id],Be=$.viewport||H;Ue.setSize(Be.z*k.transmissionResolutionScale,Be.w*k.transmissionResolutionScale);const Ie=k.getRenderTarget(),Ve=k.getActiveCubeFace(),We=k.getActiveMipmapLevel();k.setRenderTarget(Ue),k.getClearColor(P),j=k.getClearAlpha(),j<1&&k.setClearColor(16777215,.5),k.clear(),ge&&Ee.render(K);const Qe=k.toneMapping;k.toneMapping=Zn;const st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),C===!0&&De.setGlobalState(k.clippingPlanes,$),Or(x,K,$),_.updateMultisampleRenderTarget(Ue),_.updateRenderTargetMipmap(Ue),be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let _t=0,It=V.length;_t<It;_t++){const Rt=V[_t],{object:xt,geometry:$t,material:Oe,group:_n}=Rt;if(Oe.side===mi&&xt.layers.test($.layers)){const ut=Oe.side;Oe.side=mn,Oe.needsUpdate=!0,Yc(xt,K,$,$t,Oe,_n),Oe.side=ut,Oe.needsUpdate=!0,Xe=!0}}Xe===!0&&(_.updateMultisampleRenderTarget(Ue),_.updateRenderTargetMipmap(Ue))}k.setRenderTarget(Ie,Ve,We),k.setClearColor(P,j),st!==void 0&&($.viewport=st),k.toneMapping=Qe}function Or(x,V,K){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Ue=x.length;Y<Ue;Y++){const Be=x[Y],{object:Ie,geometry:Ve,group:We}=Be;let Qe=Be.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),Ie.layers.test(K.layers)&&Yc(Ie,V,K,Ve,Qe,We)}}function Yc(x,V,K,$,Y,Ue){x.onBeforeRender(k,V,K,$,Y,Ue),x.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),Y.onBeforeRender(k,V,K,$,x,Ue),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,k.renderBufferDirect(K,V,$,Y,x,Ue),Y.side=Hi,Y.needsUpdate=!0,k.renderBufferDirect(K,V,$,Y,x,Ue),Y.side=mi):k.renderBufferDirect(K,V,$,Y,x,Ue),x.onAfterRender(k,V,K,$,Y,Ue)}function Br(x,V,K){V.isScene!==!0&&(V=ae);const $=y.get(x),Y=A.state.lights,Ue=A.state.shadowsArray,Be=Y.state.version,Ie=Se.getParameters(x,Y.state,Ue,V,K,A.state.lightProbeGridArray),Ve=Se.getProgramCacheKey(Ie);let We=$.programs;$.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;const Qe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;$.envMap=O.get(x.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&x.envMap===null?V.environmentRotation:x.envMapRotation,We===void 0&&(x.addEventListener("dispose",Lt),We=new Map,$.programs=We);let st=We.get(Ve);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===Be)return Kc(x,Ie),st}else Ie.uniforms=Se.getUniforms(x),G!==null&&x.isNodeMaterial&&G.build(x,K,Ie),x.onBeforeCompile(Ie,k),st=Se.acquireProgram(Ie,Ve),We.set(Ve,st),$.uniforms=Ie.uniforms;const Xe=$.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Xe.clippingPlanes=De.uniform),Kc(x,Ie),$.needsLights=Oh(x),$.lightsStateVersion=Be,$.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=A.state.lightProbeGridArray.length>0,$.currentProgram=st,$.uniformsList=null,st}function jc(x){if(x.uniformsList===null){const V=x.currentProgram.getUniforms();x.uniformsList=Eo.seqWithValue(V.seq,x.uniforms)}return x.uniformsList}function Kc(x,V){const K=y.get(x);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Uh(x,V){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;E.setFromMatrixPosition(V.matrixWorld);for(let K=0,$=x.length;K<$;K++){const Y=x[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(E))return Y}return null}function Nh(x,V,K,$,Y){V.isScene!==!0&&(V=ae),_.resetTextureUnits();const Ue=V.fog,Be=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,Ie=B===null?k.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ot.workingColorSpace,Ve=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,We=O.get($.envMap||Be,Ve),Qe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,st=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!K.morphAttributes.position,_t=!!K.morphAttributes.normal,It=!!K.morphAttributes.color;let Rt=Zn;$.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=k.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=xt!==void 0?xt.length:0,Oe=y.get($),_n=A.state.lights;if(C===!0&&(L===!0||x!==z)){const yt=x===z&&$.id===X;De.setState($,x,yt)}let ut=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==_n.state.version||Oe.outputColorSpace!==Ie||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==We||$.fog===!0&&Oe.fog!==Ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==De.numPlanes||Oe.numIntersection!==De.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==st||Oe.morphTargets!==Xe||Oe.morphNormals!==_t||Oe.morphColors!==It||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==$t||!!Oe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Oe.__version=$.version);let yn=Oe.currentProgram;ut===!0&&(yn=Br($,V,Y),G&&$.isNodeMaterial&&G.onUpdateProgram($,yn,Oe));let Bn=!1,wi=!1,hs=!1;const Mt=yn.getUniforms(),Ut=Oe.uniforms;if(ne.useProgram(yn.program)&&(Bn=!0,wi=!0,hs=!0),$.id!==X&&(X=$.id,wi=!0),Oe.needsLights){const yt=Uh(A.state.lightProbeGridArray,Y);Oe.lightProbeGrid!==yt&&(Oe.lightProbeGrid=yt,wi=!0)}if(Bn||z!==x){ne.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Mt.setValue(T,"projectionMatrix",x.projectionMatrix),Mt.setValue(T,"viewMatrix",x.matrixWorldInverse);const Ri=Mt.map.cameraPosition;Ri!==void 0&&Ri.setValue(T,re.setFromMatrixPosition(x.matrixWorld)),ve.logarithmicDepthBuffer&&Mt.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),z!==x&&(z=x,wi=!0,hs=!0)}if(Oe.needsLights&&(_n.state.directionalShadowMap.length>0&&Mt.setValue(T,"directionalShadowMap",_n.state.directionalShadowMap,_),_n.state.spotShadowMap.length>0&&Mt.setValue(T,"spotShadowMap",_n.state.spotShadowMap,_),_n.state.pointShadowMap.length>0&&Mt.setValue(T,"pointShadowMap",_n.state.pointShadowMap,_)),Y.isSkinnedMesh){Mt.setOptional(T,Y,"bindMatrix"),Mt.setOptional(T,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Mt.setValue(T,"boneTexture",yt.boneTexture,_))}Y.isBatchedMesh&&(Mt.setOptional(T,Y,"batchingTexture"),Mt.setValue(T,"batchingTexture",Y._matricesTexture,_),Mt.setOptional(T,Y,"batchingIdTexture"),Mt.setValue(T,"batchingIdTexture",Y._indirectTexture,_),Mt.setOptional(T,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Mt.setValue(T,"batchingColorTexture",Y._colorsTexture,_));const Ci=K.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Ke.update(Y,K,yn),(wi||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,Mt.setValue(T,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Ut.envMapIntensity.value=V.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=iy()),wi){if(Mt.setValue(T,"toneMappingExposure",k.toneMappingExposure),Oe.needsLights&&Fh(Ut,hs),Ue&&$.fog===!0&&ee.refreshFogUniforms(Ut,Ue),ee.refreshMaterialUniforms(Ut,$,Ce,ke,A.state.transmissionRenderTarget[x.id]),Oe.needsLights&&Oe.lightProbeGrid){const yt=Oe.lightProbeGrid;Ut.probesSH.value=yt.texture,Ut.probesMin.value.copy(yt.boundingBox.min),Ut.probesMax.value.copy(yt.boundingBox.max),Ut.probesResolution.value.copy(yt.resolution)}Eo.upload(T,jc(Oe),Ut,_)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Eo.upload(T,jc(Oe),Ut,_),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(T,"center",Y.center),Mt.setValue(T,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(T,"normalMatrix",Y.normalMatrix),Mt.setValue(T,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const yt=$.uniformsGroups;for(let Ri=0,ps=yt.length;Ri<ps;Ri++){const Zc=yt[Ri];oe.update(Zc,yn),oe.bind(Zc,yn)}}return yn}function Fh(x,V){x.ambientLightColor.needsUpdate=V,x.lightProbe.needsUpdate=V,x.directionalLights.needsUpdate=V,x.directionalLightShadows.needsUpdate=V,x.pointLights.needsUpdate=V,x.pointLightShadows.needsUpdate=V,x.spotLights.needsUpdate=V,x.spotLightShadows.needsUpdate=V,x.rectAreaLights.needsUpdate=V,x.hemisphereLights.needsUpdate=V}function Oh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(x,V,K){const $=y.get(x);$.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),y.get(x.texture).__webglTexture=V,y.get(x.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,V){const K=y.get(x);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const Bh=T.createFramebuffer();this.setRenderTarget=function(x,V=0,K=0){B=x,Z=V,te=K;let $=null,Y=!1,Ue=!1;if(x){const Ie=y.get(x);if(Ie.__useDefaultFramebuffer!==void 0){ne.bindFramebuffer(T.FRAMEBUFFER,Ie.__webglFramebuffer),H.copy(x.viewport),N.copy(x.scissor),_e=x.scissorTest,ne.viewport(H),ne.scissor(N),ne.setScissorTest(_e),X=-1;return}else if(Ie.__webglFramebuffer===void 0)_.setupRenderTarget(x);else if(Ie.__hasExternalTextures)_.rebindTextures(x,y.get(x.texture).__webglTexture,y.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Qe=x.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&y.has(Qe)&&(x.width!==Qe.image.width||x.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(x)}}const Ve=x.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const We=y.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(We[V])?$=We[V][K]:$=We[V],Y=!0):x.samples>0&&_.useMultisampledRTT(x)===!1?$=y.get(x).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[K]:$=We,H.copy(x.viewport),N.copy(x.scissor),_e=x.scissorTest}else H.copy(he).multiplyScalar(Ce).floor(),N.copy(ze).multiplyScalar(Ce).floor(),_e=He;if(K!==0&&($=Bh),ne.bindFramebuffer(T.FRAMEBUFFER,$)&&ne.drawBuffers(x,$),ne.viewport(H),ne.scissor(N),ne.setScissorTest(_e),Y){const Ie=y.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,K)}else if(Ue){const Ie=V;for(let Ve=0;Ve<x.textures.length;Ve++){const We=y.get(x.textures[Ve]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ve,We.__webglTexture,K,Ie)}}else if(x!==null&&K!==0){const Ie=y.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ie.__webglTexture,K)}X=-1},this.readRenderTargetPixels=function(x,V,K,$,Y,Ue,Be,Ie=0){if(!(x&&x.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){ne.bindFramebuffer(T.FRAMEBUFFER,Ve);try{const We=x.textures[Ie],Qe=We.format,st=We.type;if(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ie),!ve.textureFormatReadable(Qe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(st)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=x.width-$&&K>=0&&K<=x.height-Y&&T.readPixels(V,K,$,Y,F.convert(Qe),F.convert(st),Ue)}finally{const We=B!==null?y.get(B).__webglFramebuffer:null;ne.bindFramebuffer(T.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(x,V,K,$,Y,Ue,Be,Ie=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(V>=0&&V<=x.width-$&&K>=0&&K<=x.height-Y){ne.bindFramebuffer(T.FRAMEBUFFER,Ve);const We=x.textures[Ie],Qe=We.format,st=We.type;if(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ie),!ve.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Xe),T.bufferData(T.PIXEL_PACK_BUFFER,Ue.byteLength,T.STREAM_READ),T.readPixels(V,K,$,Y,F.convert(Qe),F.convert(st),0);const _t=B!==null?y.get(B).__webglFramebuffer:null;ne.bindFramebuffer(T.FRAMEBUFFER,_t);const It=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await _g(T,It,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Xe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ue),T.deleteBuffer(Xe),T.deleteSync(It),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,V=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(x.image.width*$),Ue=Math.floor(x.image.height*$),Be=V!==null?V.x:0,Ie=V!==null?V.y:0;_.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,Be,Ie,Y,Ue),ne.unbindTexture()};const kh=T.createFramebuffer(),zh=T.createFramebuffer();this.copyTextureToTexture=function(x,V,K=null,$=null,Y=0,Ue=0){let Be,Ie,Ve,We,Qe,st,Xe,_t,It;const Rt=x.isCompressedTexture?x.mipmaps[Ue]:x.image;if(K!==null)Be=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Ve=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,Qe=K.min.y,st=K.isBox3?K.min.z:0;else{const Ut=Math.pow(2,-Y);Be=Math.floor(Rt.width*Ut),Ie=Math.floor(Rt.height*Ut),x.isDataArrayTexture?Ve=Rt.depth:x.isData3DTexture?Ve=Math.floor(Rt.depth*Ut):Ve=1,We=0,Qe=0,st=0}$!==null?(Xe=$.x,_t=$.y,It=$.z):(Xe=0,_t=0,It=0);const xt=F.convert(V.format),$t=F.convert(V.type);let Oe;V.isData3DTexture?(_.setTexture3D(V,0),Oe=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(_.setTexture2DArray(V,0),Oe=T.TEXTURE_2D_ARRAY):(_.setTexture2D(V,0),Oe=T.TEXTURE_2D),ne.activeTexture(T.TEXTURE0),ne.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),ne.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ne.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const _n=ne.getParameter(T.UNPACK_ROW_LENGTH),ut=ne.getParameter(T.UNPACK_IMAGE_HEIGHT),yn=ne.getParameter(T.UNPACK_SKIP_PIXELS),Bn=ne.getParameter(T.UNPACK_SKIP_ROWS),wi=ne.getParameter(T.UNPACK_SKIP_IMAGES);ne.pixelStorei(T.UNPACK_ROW_LENGTH,Rt.width),ne.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Rt.height),ne.pixelStorei(T.UNPACK_SKIP_PIXELS,We),ne.pixelStorei(T.UNPACK_SKIP_ROWS,Qe),ne.pixelStorei(T.UNPACK_SKIP_IMAGES,st);const hs=x.isDataArrayTexture||x.isData3DTexture,Mt=V.isDataArrayTexture||V.isData3DTexture;if(x.isDepthTexture){const Ut=y.get(x),Ci=y.get(V),yt=y.get(Ut.__renderTarget),Ri=y.get(Ci.__renderTarget);ne.bindFramebuffer(T.READ_FRAMEBUFFER,yt.__webglFramebuffer),ne.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let ps=0;ps<Ve;ps++)hs&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,y.get(x).__webglTexture,Y,st+ps),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,y.get(V).__webglTexture,Ue,It+ps)),T.blitFramebuffer(We,Qe,Be,Ie,Xe,_t,Be,Ie,T.DEPTH_BUFFER_BIT,T.NEAREST);ne.bindFramebuffer(T.READ_FRAMEBUFFER,null),ne.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Y!==0||x.isRenderTargetTexture||y.has(x)){const Ut=y.get(x),Ci=y.get(V);ne.bindFramebuffer(T.READ_FRAMEBUFFER,kh),ne.bindFramebuffer(T.DRAW_FRAMEBUFFER,zh);for(let yt=0;yt<Ve;yt++)hs?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ut.__webglTexture,Y,st+yt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ut.__webglTexture,Y),Mt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ci.__webglTexture,Ue,It+yt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ci.__webglTexture,Ue),Y!==0?T.blitFramebuffer(We,Qe,Be,Ie,Xe,_t,Be,Ie,T.COLOR_BUFFER_BIT,T.NEAREST):Mt?T.copyTexSubImage3D(Oe,Ue,Xe,_t,It+yt,We,Qe,Be,Ie):T.copyTexSubImage2D(Oe,Ue,Xe,_t,We,Qe,Be,Ie);ne.bindFramebuffer(T.READ_FRAMEBUFFER,null),ne.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Mt?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(Oe,Ue,Xe,_t,It,Be,Ie,Ve,xt,$t,Rt.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Oe,Ue,Xe,_t,It,Be,Ie,Ve,xt,Rt.data):T.texSubImage3D(Oe,Ue,Xe,_t,It,Be,Ie,Ve,xt,$t,Rt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ue,Xe,_t,Be,Ie,xt,$t,Rt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ue,Xe,_t,Rt.width,Rt.height,xt,Rt.data):T.texSubImage2D(T.TEXTURE_2D,Ue,Xe,_t,Be,Ie,xt,$t,Rt);ne.pixelStorei(T.UNPACK_ROW_LENGTH,_n),ne.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut),ne.pixelStorei(T.UNPACK_SKIP_PIXELS,yn),ne.pixelStorei(T.UNPACK_SKIP_ROWS,Bn),ne.pixelStorei(T.UNPACK_SKIP_IMAGES,wi),Ue===0&&V.generateMipmaps&&T.generateMipmap(Oe),ne.unbindTexture()},this.initRenderTarget=function(x){y.get(x).__webglFramebuffer===void 0&&_.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?_.setTextureCube(x,0):x.isData3DTexture?_.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?_.setTexture2DArray(x,0):_.setTexture2D(x,0),ne.unbindTexture()},this.resetState=function(){Z=0,te=0,B=null,ne.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const kf={type:"change"},Bc={type:"start"},Lh={type:"end"},uo=new Uc,zf=new Oi,ry=Math.cos(70*xg.DEG2RAD),Ot=new W,un=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Za=1e-6;class oy extends l0{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Vi,this._lastTargetPosition=new W,this._quat=new Vi().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hf,this._sphericalDelta=new hf,this._scale=1,this._panOffset=new W,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new W,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ly.bind(this),this._onPointerDown=ay.bind(this),this._onPointerUp=cy.bind(this),this._onContextMenu=_y.bind(this),this._onMouseWheel=dy.bind(this),this._onKeyDown=hy.bind(this),this._onTouchStart=py.bind(this),this._onTouchMove=my.bind(this),this._onMouseDown=uy.bind(this),this._onMouseMove=fy.bind(this),this._interceptControlDown=gy.bind(this),this._interceptControlUp=vy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kf),this.update(),this.state=gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<ry?this.object.lookAt(this.target):(zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(zf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Za||this._lastTargetPosition.distanceToSquared(this.target)>Za?(this.dispatchEvent(kf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ay(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ly(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lh),this.state=gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case Vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case Vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Bc)}function fy(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dy(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(Bc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lh))}function hy(n){this.enabled!==!1&&this._handleKeyDown(n)}function py(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Bc)}function my(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function _y(n){this.enabled!==!1&&n.preventDefault()}function gy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xy extends Ht{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ds=new W,Hf=new Tt,Vf=new Tt,Gf=new W,Wf=new W;class My{constructor(e={}){const t=this;let i,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,M){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),Hf.copy(M.matrixWorldInverse),Vf.multiplyMatrices(M.projectionMatrix,Hf),u(g,g,M),this.sortObjects&&h(g)},this.setSize=function(g,M){i=g,s=M,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=M+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let M=0,m=g.children.length;M<m;M++)c(g.children[M])}function u(g,M,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Ds.setFromMatrixPosition(g.matrixWorld),Ds.applyMatrix4(Vf);const p=Ds.z>=-1&&Ds.z<=1&&g.layers.test(m.layers)===!0,S=g.element;S.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,M,m),S.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Ds.x*r+r)+"px,"+(-Ds.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),g.onAfterRender(t,M,m));const b={distanceToCameraSquared:d(m,g)};a.objects.set(g,b)}for(let p=0,S=g.children.length;p<S;p++)u(g.children[p],M,m)}function d(g,M){return Gf.setFromMatrixPosition(g.matrixWorld),Wf.setFromMatrixPosition(M.matrixWorld),Gf.distanceToSquared(Wf)}function f(g){const M=[];return g.traverseVisible(function(m){m.isCSS2DObject&&M.push(m)}),M}function h(g){const M=f(g).sort(function(p,S){if(p.renderOrder!==S.renderOrder)return S.renderOrder-p.renderOrder;const b=a.objects.get(p).distanceToCameraSquared,E=a.objects.get(S).distanceToCameraSquared;return b-E}),m=M.length;for(let p=0,S=M.length;p<S;p++)M[p].element.style.zIndex=m-p}}}const Sy={key:0,class:"farm-scene-fallback"},yy={__name:"FarmScene3D",props:{farmGrid:{type:Array,required:!0},unlockedPets:{type:Array,default:()=>[]}},emits:["plot-click"],setup(n,{emit:e}){const t=n,i=e,s=bt(null),r=bt(""),o={carrot:16750592,tomato:15022389,corn:16771899,strawberry:15483002,pumpkin:16485376,grape:8280002,watermelon:3046706,apple:13840175};let a,l,c,u,d,f=0,h,g=[],M,m,p,S,b,E=!1;function I(P){return`./${P.replace(/^\//,"")}`}function A(P){const j=document.createElement("div");return j.className="farm-3d-label",j.textContent=P,new xy(j)}function U(P){P&&P.traverse(j=>{j.geometry&&j.geometry.dispose(),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(ke=>{var Ce;ke.map&&ke.map.dispose(),(Ce=ke.dispose)==null||Ce.call(ke)})})}function v(){h=new Xn,h.name="farmPlots",c.add(h),g=[];for(let j=0;j<9;j++){const fe=Math.floor(j/3),Ce=-7.1+j%3*2.38,ie=-2.35+fe*2.38,Me=new Xn;Me.position.set(Ce,0,ie),Me.userData.plotIndex=j;const he=new At(new gi(2.12,.08,2.12),new cn({color:5125166,roughness:1,metalness:0}));he.position.y=.04,he.receiveShadow=!0,he.castShadow=!0,Me.add(he);const ze=new At(new ki(1.88,1.88),new cn({color:7951688,roughness:1,metalness:0}));ze.rotation.x=-Math.PI/2,ze.position.y=.085,ze.receiveShadow=!0,Me.add(ze);const He=new Xn;He.position.y=.09,Me.add(He),h.add(Me),g.push({group:Me,soil:ze,cropGroup:He,stem:null,fruit:null})}const P=A("种植区");P.position.set(-4.2,2.8,-4.4),c.add(P)}function R(){const P=new Xn;P.position.set(8.2,0,5.4);const j=new At(new gi(3,1.85,3),new cn({color:13351844,roughness:.85,metalness:0}));j.position.y=.925,j.castShadow=!0,j.receiveShadow=!0,P.add(j);const fe=new At(new ko(2.35,1.35,4),new cn({color:12000284,roughness:.55,metalness:.05}));fe.position.y=2.35,fe.rotation.y=Math.PI/4,fe.castShadow=!0,P.add(fe);const ke=new At(new ki(.9,1.1),new cn({color:5125166,roughness:1}));ke.position.set(0,.85,1.51),P.add(ke);const Ce=A("鸡舍");Ce.position.set(0,3.15,0),P.add(Ce),c.add(P)}function k(){const P=new Xn;P.position.set(9.2,0,-6.2);const j=new At(new gi(5.2,3.4,4.6),new cn({color:9268835,roughness:.9,metalness:0}));j.position.y=1.7,j.castShadow=!0,j.receiveShadow=!0,P.add(j);const fe=new At(new gi(5.6,.55,4.9),new cn({color:6111287,roughness:.75}));fe.position.set(0,3.55,0),fe.rotation.z=.06,fe.castShadow=!0,P.add(fe);const ke=new At(new ki(1.8,2.4),new cn({color:4073251,roughness:1}));ke.position.set(0,1.25,2.31),P.add(ke);const Ce=A("畜棚");Ce.position.set(0,4.2,0),P.add(Ce),c.add(P)}function D(P,j){const fe=new At(new Rr(.22,.32,1.15,8),new cn({color:6111287,roughness:1}));fe.position.set(P,.575,j),fe.castShadow=!0;const ke=new At(new ko(1.35,2.4,8),new cn({color:3046706,roughness:.75}));ke.position.set(P,2.35,j),ke.castShadow=!0,c.add(fe,ke)}function G(){M=new Xn,c.add(M),te()}function Z(P){return P==="chicken"||P==="rabbit"?new W(8.5,.42,6.3):P==="horse"?new W(9.4,.42,-4.6):new W(1.2,.42,2.4)}function te(){if(!M)return;for(;M.children.length;){const j=M.children.pop();U(j)}const P={chicken:16771899,dog:9268835,cat:16750592,rabbit:16119285,horse:7162945};t.unlockedPets.forEach((j,fe)=>{const ke=new At(new zo(.36,18,14),new cn({color:P[j]??13619151,roughness:.45,metalness:.05})),Ce=Z(j),ie=fe%3*.75-.75,Me=Math.floor(fe/3)*.65;ke.position.set(Ce.x+ie,Ce.y,Ce.z+Me),ke.castShadow=!0,ke.userData.petId=j,M.add(ke)})}function B(P){P.stem&&(P.cropGroup.remove(P.stem),P.stem.geometry.dispose(),P.stem.material.dispose(),P.stem=null),P.fruit&&(P.cropGroup.remove(P.fruit),P.fruit.geometry.dispose(),P.fruit.material.dispose(),P.fruit=null)}function X(){t.farmGrid.forEach((P,j)=>{const fe=g[j];if(!fe)return;if(!P.crop){B(fe),fe.soil.material.color.setHex(7951688);return}const ke=Zt[P.crop];if(!ke||!P.plantedAt){B(fe);return}const Ce=Date.now()-P.plantedAt,ie=ke.growTime*60*60*1e3,Me=Math.min(1,Ce/ie),he=.22+.78*Math.pow(Me,.55),ze=o[P.crop]??16750592;fe.stem||(fe.stem=new At(new Rr(.07,.09,.5,10),new cn({color:4431943,roughness:.65})),fe.stem.castShadow=!0,fe.cropGroup.add(fe.stem)),fe.fruit||(fe.fruit=new At(new zo(.24,14,12),new cn({color:ze,roughness:.35,metalness:.05,emissive:0})),fe.fruit.castShadow=!0,fe.cropGroup.add(fe.fruit)),fe.stem.scale.set(1,he,1),fe.stem.position.y=.25*he,fe.fruit.material.color.setHex(ze),fe.fruit.scale.setScalar(he),fe.fruit.position.y=.52*he;const He=Me>=1;fe.fruit.material.emissive.setHex(He?3348992:0),fe.soil.material.color.setHex(Me>=1?7162945:7951688)})}function z(P){if(!a||!h)return;const j=a.domElement.getBoundingClientRect();p.x=(P.clientX-j.left)/j.width*2-1,p.y=-((P.clientY-j.top)/j.height)*2+1,m.setFromCamera(p,u);const fe=m.intersectObjects(h.children,!0);for(const ke of fe){let Ce=ke.object;for(;Ce;){if(typeof Ce.userData.plotIndex=="number"){i("plot-click",Ce.userData.plotIndex);return}Ce=Ce.parent}}}function H(){if(!s.value||!u||!a)return;const P=s.value.clientWidth,j=s.value.clientHeight||320;u.aspect=P/j,u.updateProjectionMatrix(),a.setSize(P,j),l.setSize(P,j)}function N(){f=requestAnimationFrame(N),X(),d.update(),a.render(c,u),l.render(c,u)}function _e(){const P=s.value;if(!P)return;const j=P.clientWidth||P.offsetWidth||320,fe=Math.max(280,P.clientHeight||360);m=new a0,p=new je,c=new Ig,c.background=new ct(11460599),c.fog=new Lc(12968357,32,72),u=new bn(40,j/fe,.12,220),u.position.set(17,12.5,17),u.lookAt(-.5,.8,0),a=new sy({antialias:!0,alpha:!1,powerPreference:"high-performance"}),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(j,fe),a.shadowMap.enabled=!0,a.shadowMap.type=Zd,a.outputColorSpace=hn,a.toneMapping=Sc,a.toneMappingExposure=1.05,P.appendChild(a.domElement),l=new My,l.setSize(j,fe),l.domElement.style.position="absolute",l.domElement.style.top="0",l.domElement.style.left="0",l.domElement.style.pointerEvents="none",P.appendChild(l.domElement),d=new oy(u,a.domElement),d.enableDamping=!0,d.dampingFactor=.07,d.target.set(-1.2,.6,.2),d.maxPolarAngle=Math.PI/2-.09,d.minDistance=11,d.maxDistance=44;const ke=new t0(16777215,7179358,.62);c.add(ke);const Ce=new s0(16774368,1.08);Ce.position.set(20,32,14),Ce.castShadow=!0,Ce.shadow.mapSize.set(2048,2048),Ce.shadow.bias=-25e-5,Ce.shadow.camera.near=4,Ce.shadow.camera.far=90,Ce.shadow.camera.left=-28,Ce.shadow.camera.right=28,Ce.shadow.camera.top=28,Ce.shadow.camera.bottom=-28,c.add(Ce);const ie=new ki(60,60),Me=new cn({color:8172354,roughness:.95,metalness:0}),he=new At(ie,Me);he.rotation.x=-Math.PI/2,he.receiveShadow=!0,c.add(he),new e0().load(I("assets/farm/grass.jpg"),He=>{if(E){He.dispose();return}He.wrapS=He.wrapT=Uo,He.repeat.set(12,12),He.colorSpace=hn,Me.map=He,Me.needsUpdate=!0},void 0,()=>{r.value=""}),v(),R(),k(),D(-12,8),D(-11,-9),D(14,3),G(),S=z,a.domElement.addEventListener("pointerdown",S),b=H,window.addEventListener("resize",b),N()}return mr(()=>t.unlockedPets,()=>te(),{deep:!0}),Jo(()=>{E=!1;try{_e()}catch(P){console.error(P),r.value="3D 场景初始化失败，请刷新重试"}}),pc(()=>{var P,j;E=!0,cancelAnimationFrame(f),window.removeEventListener("resize",b),a!=null&&a.domElement&&S&&a.domElement.removeEventListener("pointerdown",S),(P=d==null?void 0:d.dispose)==null||P.call(d),c&&c.traverse(fe=>{fe.geometry&&fe.geometry.dispose(),fe.material&&(Array.isArray(fe.material)?fe.material:[fe.material]).forEach(Ce=>{var ie;Ce.map&&Ce.map.dispose(),(ie=Ce.dispose)==null||ie.call(Ce)})}),(j=a==null?void 0:a.dispose)==null||j.call(a)}),(P,j)=>(de(),me("div",{ref_key:"containerRef",ref:s,class:"farm-scene-3d",role:"img","aria-label":"3D 农场场景"},[r.value?(de(),me("div",Sy,Re(r.value),1)):Pt("",!0)],512))}},Ey=Nn(yy,[["__scopeId","data-v-681e2777"]]),by={class:"page farm-home"},Ty={class:"farm-scroll"},Ay={class:"farm-header"},wy={class:"level-info"},Cy={class:"level-badge"},Ry={class:"exp-text"},Py={class:"progress-bar wood-progress"},Dy={class:"field-block scene-3d-section"},Ly={class:"field-mat scene-3d-mat"},Iy={key:0,class:"buildings-block"},Uy={class:"buildings-area"},Ny={class:"crop-list"},Fy=["onClick"],Oy={class:"crop-thumb-wrap","aria-hidden":"true"},By={class:"crop-name"},ky={class:"crop-price"},zy={__name:"HomePage",setup(n){const e=bt(!1),t=bt(null),i=Nt(()=>{const d=_o.find(f=>f.level===se.level);return d?d.title:"青铜运动员"}),s=Nt(()=>{const d=_o.find(M=>M.level===se.level),f=_o.find(M=>M.level===se.level+1);if(!f)return 100;const h=se.experience-d.exp,g=f.exp-d.exp;return Math.min(100,h/g*100)});function r(d){var f;return((f=Zt[d])==null?void 0:f.name)||d}function o(d){var f;return((f=Zt[d])==null?void 0:f.price)||0}function a(d){var f;return((f=Lo[d])==null?void 0:f.icon)||"🏠"}function l(d){const f=se.farmGrid[d];if(!(f!=null&&f.crop)){t.value=d,e.value=!0;return}const h=Zt[f.crop];if(!h||!f.plantedAt)return;const g=Date.now()-f.plantedAt,M=h.growTime*60*60*1e3;g>=M&&u(d)}function c(d){const f=Tn.plantCrop(t.value,d);f.success?e.value=!1:alert(f.message)}function u(d){const f=Tn.harvestCrop(d);f.success?alert(`收获成功！获得 ${f.quantity} 个${Zt[f.crop].name}`):alert(f.message)}return(d,f)=>(de(),me("div",by,[Xt(F_),w("div",Ty,[w("header",Ay,[w("div",wy,[w("span",Cy,Re(i.value),1),w("span",Ry,"Lv."+Re(nt(se).level)+" · "+Re(nt(se).experience)+"EXP",1)]),w("div",Py,[w("div",{class:"progress-fill",style:Zs({width:s.value+"%"})},null,4)])]),w("section",Dy,[f[4]||(f[4]=w("div",{class:"sign-board"},[w("span",{class:"sign-wood"},"🌾 我的农场 · 3D")],-1)),w("div",Ly,[f[2]||(f[2]=w("p",{class:"scene-hint"}," Three.js 实景：草地、田垄、鸡舍与畜棚在同一空间里；拖拽旋转，点击地块播种 / 成熟后收获。宠物会出现在鸡舍或畜棚旁。 ",-1)),Xt(Ey,{"farm-grid":nt(se).farmGrid,"unlocked-pets":nt(se).unlockedPets,onPlotClick:l},null,8,["farm-grid","unlocked-pets"]),f[3]||(f[3]=w("p",{class:"scene-3d-hint"},"单指拖拽旋转 · 双指缩放 · 点地块",-1))])]),nt(se).unlockedBuildings.length>0?(de(),me("section",Iy,[f[5]||(f[5]=w("div",{class:"sign-board small"},[w("span",{class:"sign-wood"},"🏗️ 设施")],-1)),w("div",Uy,[(de(!0),me(at,null,wt(nt(se).unlockedBuildings,h=>(de(),me("div",{class:"building",key:h},[w("span",null,Re(a(h)),1)]))),128))])])):Pt("",!0)]),e.value?(de(),me("div",{key:0,class:"modal-overlay",onClick:f[1]||(f[1]=h=>e.value=!1)},[w("div",{class:"modal-content",onClick:f[0]||(f[0]=ss(()=>{},["stop"]))},[f[6]||(f[6]=w("h3",null,"选择作物",-1)),w("div",Ny,[(de(!0),me(at,null,wt(nt(se).unlockedCrops,h=>(de(),me("div",{key:h,class:"crop-item",onClick:g=>c(h)},[w("div",Oy,[Xt(xc,{"crop-id":h,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("span",By,Re(r(h)),1),w("span",ky,"💰"+Re(o(h)),1)],8,Fy))),128))])])])):Pt("",!0)]))}},Hy=Nn(zy,[["__scopeId","data-v-b11a3c51"]]),Vy={class:"page page-scene exercise-page"},Gy={class:"game-panel hero-panel"},Wy={class:"exercise-types"},Xy=["onClick"],$y={class:"type-icon-ring"},qy={class:"type-icon"},Yy={class:"type-name"},jy={class:"duration-field"},Ky={class:"field-inner"},Zy={class:"reward-strip"},Jy={class:"reward-line"},Qy={class:"reward-line"},eE={class:"reward-line"},tE=["disabled"],nE={key:0,class:"game-panel"},iE={class:"stats-grid"},sE={class:"stat-tile"},rE={class:"stat-num"},oE={class:"stat-tile"},aE={class:"stat-num"},lE={class:"stat-tile"},cE={class:"stat-num"},uE={key:1,class:"coin-animation"},fE={__name:"ExercisePage",setup(n){const e=bt("running"),t=bt(30),i=bt(!1),s=bt({coins:0,exp:0}),r=Uu,o=Nt(()=>r.find(f=>f.id===e.value)),a=Nt(()=>o.value?Math.floor(t.value*o.value.coinsPerMin):0),l=Nt(()=>o.value?t.value*o.value.energyPerMin:0),c=Nt(()=>o.value?Math.floor(t.value*o.value.expPerMin):0),u=Nt(()=>se.energy>=l.value&&t.value>0);function d(){const f=Tn.doExercise(e.value,t.value,Uu);f.success?(s.value={coins:f.coins,exp:f.exp},i.value=!0,setTimeout(()=>{i.value=!1},1e3)):alert(f.message)}return(f,h)=>(de(),me("div",Vy,[w("div",Gy,[h[10]||(h[10]=w("div",{class:"hero-badge"},[w("span",{class:"game-sign-inline"},"🏃 开始运动")],-1)),h[11]||(h[11]=w("p",{class:"hero-hint"},"选一种运动，积累时长兑换农场金币与经验",-1)),w("div",Wy,[(de(!0),me(at,null,wt(nt(r),g=>(de(),me("button",{key:g.id,type:"button",class:pn(["type-tile",{selected:e.value===g.id}]),onClick:M=>e.value=g.id},[w("span",$y,[w("span",qy,Re(g.icon),1)]),w("span",Yy,Re(g.name),1)],10,Xy))),128))]),w("div",jy,[h[1]||(h[1]=w("label",{class:"field-label"},"运动时长（分钟）",-1)),w("div",Ky,[ui(w("input",{type:"number","onUpdate:modelValue":h[0]||(h[0]=g=>t.value=g),class:"duration-input",min:"1",max:"180"},null,512),[[es,t.value,void 0,{number:!0}]])])]),w("div",Zy,[w("div",Jy,[h[4]||(h[4]=w("span",{class:"reward-ico"},"💰",-1)),w("span",null,[h[2]||(h[2]=dn("预计收益 ",-1)),w("strong",null,Re(a.value),1),h[3]||(h[3]=dn(" 金币",-1))])]),w("div",Qy,[h[6]||(h[6]=w("span",{class:"reward-ico"},"⚡",-1)),w("span",null,[h[5]||(h[5]=dn("消耗体力 ",-1)),w("strong",null,Re(l.value),1)])]),w("div",eE,[h[9]||(h[9]=w("span",{class:"reward-ico"},"✨",-1)),w("span",null,[h[7]||(h[7]=dn("获得经验 ",-1)),w("strong",null,Re(c.value),1),h[8]||(h[8]=dn(" EXP",-1))])])]),w("button",{type:"button",class:"game-btn-primary-lg start-btn",disabled:!u.value,onClick:d},Re(u.value?"🎯 开始运动":"😮 体力不足"),9,tE)]),nt(se).stats.totalExerciseTime>0?(de(),me("div",nE,[h[15]||(h[15]=w("div",{class:"game-panel-title"},"📊 运动统计",-1)),w("div",iE,[w("div",sE,[w("span",rE,Re(nt(se).stats.totalExerciseTime),1),h[12]||(h[12]=w("span",{class:"stat-cap"},"总分钟",-1))]),w("div",oE,[w("span",aE,Re(nt(se).stats.totalCoinsEarned),1),h[13]||(h[13]=w("span",{class:"stat-cap"},"累计金币",-1))]),w("div",lE,[w("span",cE,Re(nt(se).streakDays),1),h[14]||(h[14]=w("span",{class:"stat-cap"},"连续打卡",-1))])])])):Pt("",!0),i.value?(de(),me("div",uE,[w("span",null,"+"+Re(s.value.coins)+" 💰",1)])):Pt("",!0)]))}},dE=Nn(fE,[["__scopeId","data-v-4ef7023b"]]),hE={viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg",class:"pet-svg"},pE={key:0,class:"anim-bob"},mE={key:1,class:"anim-wiggle"},_E={key:2,class:"anim-bob"},gE={key:3,class:"anim-hop"},vE={key:4,class:"anim-trot"},xE={key:5,class:"anim-bob"},ME={__name:"PetSprite",props:{petId:{type:String,required:!0},size:{type:String,default:"default"}},setup(n){return(e,t)=>(de(),me("div",{class:pn(["pet-sprite",[`pet-${n.petId}`,{"size-ranch":n.size==="ranch"}]]),"aria-hidden":"true"},[(de(),me("svg",hE,[n.petId==="chicken"?(de(),me("g",pE,[...t[0]||(t[0]=[xn('<ellipse cx="48" cy="78" rx="22" ry="6" fill="#3E2723" opacity="0.12" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFF8E1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="54" rx="22" ry="18" fill="#FFECB3" data-v-e33ebb8c></ellipse><circle cx="62" cy="46" r="10" fill="#FFF8E1" data-v-e33ebb8c></circle><polygon points="68,42 78,46 68,50" fill="#FF9800" data-v-e33ebb8c></polygon><circle cx="65" cy="44" r="2.5" fill="#212121" data-v-e33ebb8c></circle><path fill="#F44336" d="M44 28 L48 20 L52 28 Z" data-v-e33ebb8c></path><path fill="#F44336" d="M48 22 L52 14 L54 24 Z" data-v-e33ebb8c></path><ellipse cx="38" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="72" rx="5" ry="8" fill="#FF9800" data-v-e33ebb8c></ellipse>',10)])])):n.petId==="dog"?(de(),me("g",mE,[...t[1]||(t[1]=[xn('<ellipse cx="48" cy="80" rx="24" ry="7" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="50" rx="28" ry="24" fill="#D7A574" data-v-e33ebb8c></ellipse><ellipse cx="30" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="66" cy="42" rx="10" ry="18" fill="#C4956A" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="18" ry="16" fill="#E6C29A" data-v-e33ebb8c></ellipse><circle cx="58" cy="46" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="54" cy="54" rx="8" ry="6" fill="#212121" data-v-e33ebb8c></ellipse><path stroke="#8D6E63" stroke-width="6" stroke-linecap="round" fill="none" d="M72 56 Q84 48 88 36" data-v-e33ebb8c></path>',8)])])):n.petId==="cat"?(de(),me("g",_E,[...t[2]||(t[2]=[xn('<ellipse cx="48" cy="80" rx="22" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><path fill="#FFB74D" d="M28 44 L34 24 L42 40 Z M54 40 L62 24 L68 44 Z" data-v-e33ebb8c></path><ellipse cx="48" cy="52" rx="26" ry="22" fill="#FFCC80" data-v-e33ebb8c></ellipse><circle cx="40" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><circle cx="56" cy="50" r="4" fill="#42A5F5" data-v-e33ebb8c></circle><ellipse cx="48" cy="58" rx="5" ry="4" fill="#E65100" data-v-e33ebb8c></ellipse><path stroke="#FFCC80" stroke-width="8" stroke-linecap="round" fill="none" d="M22 60 Q12 52 10 40" data-v-e33ebb8c></path>',7)])])):n.petId==="rabbit"?(de(),me("g",gE,[...t[3]||(t[3]=[xn('<ellipse cx="48" cy="82" rx="18" ry="5" fill="#3E2723" opacity="0.08" data-v-e33ebb8c></ellipse><ellipse cx="38" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="58" cy="28" rx="6" ry="22" fill="#EEEEEE" data-v-e33ebb8c></ellipse><ellipse cx="48" cy="56" rx="22" ry="20" fill="#FAFAFA" data-v-e33ebb8c></ellipse><circle cx="40" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><circle cx="56" cy="52" r="3" fill="#212121" data-v-e33ebb8c></circle><ellipse cx="48" cy="60" rx="4" ry="3" fill="#F48FB1" data-v-e33ebb8c></ellipse>',7)])])):n.petId==="horse"?(de(),me("g",vE,[...t[4]||(t[4]=[xn('<ellipse cx="48" cy="82" rx="26" ry="6" fill="#3E2723" opacity="0.1" data-v-e33ebb8c></ellipse><ellipse cx="52" cy="48" rx="22" ry="18" fill="#A1887F" data-v-e33ebb8c></ellipse><ellipse cx="72" cy="44" rx="12" ry="10" fill="#BCAAA4" data-v-e33ebb8c></ellipse><path fill="#5D4037" d="M68 36 Q76 28 84 32 L80 40 Z" data-v-e33ebb8c></path><circle cx="76" cy="42" r="2.5" fill="#212121" data-v-e33ebb8c></circle><rect x="34" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect><rect x="50" y="62" width="8" height="18" rx="3" fill="#8D6E63" data-v-e33ebb8c></rect>',7)])])):(de(),me("g",xE,[...t[5]||(t[5]=[w("circle",{cx:"48",cy:"48",r:"28",fill:"#E0E0E0"},null,-1),w("circle",{cx:"40",cy:"44",r:"4",fill:"#424242"},null,-1),w("circle",{cx:"56",cy:"44",r:"4",fill:"#424242"},null,-1)])]))]))],2))}},SE=Nn(ME,[["__scopeId","data-v-e33ebb8c"]]),yE={class:"page page-scene store-page"},EE={class:"game-tabs"},bE=["onClick"],TE={key:0,class:"list-block"},AE=["onClick"],wE={class:"game-thumb thumb-crop"},CE={class:"item-info"},RE={class:"item-name"},PE={class:"item-desc"},DE={class:"item-price"},LE={key:1,class:"list-block"},IE=["onClick"],UE={class:"game-thumb thumb-emoji"},NE={class:"item-info"},FE={class:"item-name"},OE={class:"item-desc"},BE={key:0,class:"item-price"},kE={key:1,class:"owned-tag"},zE={key:2,class:"list-block"},HE=["onClick"],VE={class:"game-thumb thumb-pet"},GE={class:"item-info"},WE={class:"item-name"},XE={class:"item-desc"},$E={key:0,class:"item-price"},qE={key:1,class:"owned-tag"},YE={__name:"StorePage",setup(n){const e=bt("seeds"),t=[{id:"seeds",name:"种子"},{id:"buildings",name:"建筑"},{id:"pets",name:"宠物"}],i=Nt(()=>{const a={};return Object.entries(Zt).forEach(([l,c])=>{(se.unlockedCrops.includes(l)||!c.unlock)&&(a[l]=c)}),a}),s=Nt(()=>{const a={};return Object.entries(Lo).forEach(([l,c])=>{(se.unlockedBuildings.includes(l)||!c.unlock)&&(a[l]=c)}),a}),r=Nt(()=>{const a={};return Object.entries(Hs).forEach(([l,c])=>{(se.unlockedPets.includes(l)||!c.unlock)&&(a[l]=c)}),a});function o(a,l){let c;if(a==="crop")c=Zt[l];else if(a==="building")c=Lo[l];else if(a==="pet")c=Hs[l];else return;if(!(a==="building"&&se.unlockedBuildings.includes(l))&&!(a==="pet"&&se.unlockedPets.includes(l))){if(se.coins<c.price){alert("金币不足");return}if(confirm(`购买 ${c.name}？`)){const u=Tn.buyItem(a,l,c.price);u.success?alert("购买成功！"):alert(u.message)}}}return(a,l)=>(de(),me("div",yE,[l[0]||(l[0]=w("div",{class:"shop-header"},[w("span",{class:"game-sign-inline"},"🏪 村口杂货铺"),w("p",{class:"shop-sub"},"种子 · 建筑 · 小动物")],-1)),w("div",EE,[(de(),me(at,null,wt(t,c=>w("button",{key:c.id,type:"button",class:pn(["game-tab",{active:e.value===c.id}]),onClick:u=>e.value=c.id},Re(c.name),11,bE)),64))]),e.value==="seeds"?(de(),me("div",TE,[(de(!0),me(at,null,wt(i.value,(c,u)=>(de(),me("div",{key:u,class:"game-list-row",onClick:d=>o("crop",u)},[w("div",wE,[Xt(xc,{"crop-id":u,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("div",CE,[w("span",RE,Re(c.name),1),w("span",PE,"生长约 "+Re(c.growTime)+" 小时 · 种在田里吧",1)]),w("span",DE,"💰 "+Re(c.price),1)],8,AE))),128))])):Pt("",!0),e.value==="buildings"?(de(),me("div",LE,[(de(!0),me(at,null,wt(s.value,(c,u)=>(de(),me("div",{key:u,class:pn(["game-list-row",{muted:nt(se).unlockedBuildings.includes(u)}]),onClick:d=>o("building",u)},[w("div",UE,Re(c.icon),1),w("div",NE,[w("span",FE,Re(c.name),1),w("span",OE,Re(c.effect),1)]),nt(se).unlockedBuildings.includes(u)?(de(),me("span",kE,"已拥有")):(de(),me("span",BE,"💰 "+Re(c.price),1))],10,IE))),128))])):Pt("",!0),e.value==="pets"?(de(),me("div",zE,[(de(!0),me(at,null,wt(r.value,(c,u)=>(de(),me("div",{key:u,class:pn(["game-list-row",{muted:nt(se).unlockedPets.includes(u)}]),onClick:d=>o("pet",u)},[w("div",VE,[Xt(SE,{"pet-id":u},null,8,["pet-id"])]),w("div",GE,[w("span",WE,Re(c.name),1),w("span",XE,Re(c.effect),1)]),nt(se).unlockedPets.includes(u)?(de(),me("span",qE,"已拥有")):(de(),me("span",$E,"💰 "+Re(c.price),1))],10,HE))),128))])):Pt("",!0)]))}},jE=Nn(YE,[["__scopeId","data-v-c1d29d16"]]),KE={class:"page page-scene warehouse-page"},ZE={class:"game-tabs"},JE=["onClick"],QE={key:0,class:"list-block"},eb={key:0,class:"empty-barn"},tb={class:"game-thumb thumb-crop"},nb={class:"item-info"},ib={class:"item-name"},sb={class:"item-qty"},rb=["onClick"],ob={key:1,class:"list-block"},ab={key:0,class:"empty-barn mild"},lb={class:"item-info"},cb={class:"item-name"},ub={class:"item-qty"},fb={__name:"WarehousePage",setup(n){const e=bt("crops"),t=[{id:"crops",name:"作物"},{id:"items",name:"物品"}],i=Nt(()=>Object.entries(se.warehouse.crops).filter(([,r])=>r>0).map(([r,o])=>{var a;return{id:r,name:((a=Zt[r])==null?void 0:a.name)||r,quantity:o}}));function s(r){const o=Zt[r],a=se.warehouse.crops[r],l=o.sellPrice*a;confirm(`出售全部 ${o.name} ×${a}？可获得 ${l} 金币`)&&(se.coins+=l,se.warehouse.crops[r]=0)}return(r,o)=>(de(),me("div",KE,[o[3]||(o[3]=w("div",{class:"barn-header"},[w("span",{class:"game-sign-inline"},"🌾 我的谷仓"),w("p",{class:"barn-sub"},"收获的作物会堆在这里")],-1)),w("div",ZE,[(de(),me(at,null,wt(t,a=>w("button",{key:a.id,type:"button",class:pn(["game-tab",{active:e.value===a.id}]),onClick:l=>e.value=a.id},Re(a.name),11,JE)),64))]),e.value==="crops"?(de(),me("div",QE,[i.value.length===0?(de(),me("div",eb,[...o[0]||(o[0]=[xn('<svg class="barn-illus" viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-42e7d5d0><ellipse cx="100" cy="118" rx="88" ry="14" fill="#3e2723" opacity="0.12" data-v-42e7d5d0></ellipse><path d="M24 95 L100 38 L176 95 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></path><rect x="36" y="95" width="128" height="28" rx="2" fill="#a1887f" stroke="#5d4037" stroke-width="2" data-v-42e7d5d0></rect><rect x="82" y="70" width="36" height="42" fill="#5d4037" rx="2" data-v-42e7d5d0></rect><rect x="46" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><rect x="132" y="102" width="22" height="16" fill="#5d4037" opacity="0.35" rx="1" data-v-42e7d5d0></rect><path d="M100 38 L100 18 Q118 28 100 38" fill="#d7ccc8" stroke="#8d6e63" data-v-42e7d5d0></path></svg><p class="empty-title" data-v-42e7d5d0>谷仓里还空着呢</p><p class="empty-desc" data-v-42e7d5d0>去「运动」页打卡，收获会自动装进谷仓～</p>',3)])])):(de(!0),me(at,{key:1},wt(i.value,a=>(de(),me("div",{key:a.id,class:"game-list-row shelf-row"},[w("div",tb,[Xt(xc,{"crop-id":a.id,progress:1,ready:!1,growing:!1},null,8,["crop-id"])]),w("div",nb,[w("span",ib,Re(a.name),1),w("span",sb,"库存 ×"+Re(a.quantity),1)]),w("button",{type:"button",class:"sell-btn",onClick:ss(l=>s(a.id),["stop"])},"出售",8,rb)]))),128))])):Pt("",!0),e.value==="items"?(de(),me("div",ob,[Object.keys(nt(se).warehouse.items).length===0?(de(),me("div",ab,[...o[1]||(o[1]=[w("span",{class:"empty-emoji"},"📦",-1),w("p",{class:"empty-title"},"还没有杂物",-1),w("p",{class:"empty-desc"},"药水、道具解锁后会出现在这里",-1)])])):(de(!0),me(at,{key:1},wt(nt(se).warehouse.items,(a,l)=>(de(),me("div",{key:l,class:"game-list-row shelf-row muted-click"},[o[2]||(o[2]=w("div",{class:"game-thumb thumb-emoji"},"📦",-1)),w("div",lb,[w("span",cb,Re(l),1),w("span",ub,"×"+Re(a),1)])]))),128))])):Pt("",!0)]))}},db=Nn(fb,[["__scopeId","data-v-42e7d5d0"]]),hb={class:"page page-scene social-page"},pb={class:"game-panel rank-panel"},mb={class:"rank-list"},_b={class:"rank-medal"},gb={class:"rank-num"},vb={class:"rank-name"},xb={class:"rank-value"},Mb={class:"game-panel"},Sb={class:"friend-list"},yb={class:"friend-avatar"},Eb={class:"friend-meta"},bb={class:"friend-name"},Tb={class:"friend-status"},Ab=["disabled","onClick"],wb={class:"game-panel pk-panel"},Cb={key:0,class:"pk-section"},Rb={class:"pk-row-top"},Pb={class:"pk-vs"},Db=["onClick"],Lb={class:"pk-meta"},Ib={key:0,class:"pk-rule"},Ub={class:"pk-stake-sum"},Nb=["onClick"],Fb={key:1,class:"pk-section"},Ob={class:"pk-row-top"},Bb={class:"pk-deadline"},kb={class:"pk-meta"},zb={class:"pk-score"},Hb={class:"score-me"},Vb={class:"unit"},Gb={class:"score-friend"},Wb={class:"lbl"},Xb={class:"unit"},$b={class:"pk-pool"},qb={key:2,class:"pk-section"},Yb={class:"pk-result-line"},jb={key:0,class:"win"},Kb={key:1,class:"lose"},Zb={class:"pk-result-msg"},Jb={key:3,class:"pk-empty"},Qb={class:"fld"},eT=["value"],tT={class:"fld"},nT={class:"fld"},iT=["value"],sT={class:"fld-hint"},rT={class:"fld"},oT={class:"stake-block"},aT={class:"fld"},lT={key:0,class:"crop-stakes"},cT=["onUpdate:modelValue","max"],uT={class:"mx"},fT={key:1,class:"pet-stakes"},dT=["checked","onChange"],hT={class:"modal-actions"},pT={class:"fld"},mT={class:"crop-stakes"},_T=["onUpdate:modelValue"],gT={class:"modal-actions"},vT={__name:"SocialPage",setup(n){const e=bt([{id:1,name:"小明",icon:"👦",farmStatus:"胡萝卜快要熟了"},{id:2,name:"小红",icon:"👧",farmStatus:"番茄长势喜人"},{id:3,name:"小刚",icon:"👨",farmStatus:"玉米地里绿油油"}]),t=["carrot","tomato","corn"],i=Nt(()=>[{name:"运动达人小王",value:1500,unit:"分钟"},{name:"健身狂人小李",value:1200,unit:"分钟"},{name:"晨练选手小张",value:1e3,unit:"分钟"},{name:"你",value:se.stats.totalExerciseTime,unit:"分钟"},{name:"夜猫子小赵",value:500,unit:"分钟"}]),s=Nt(()=>se.pkChallenges.filter(H=>H.status==="pending")),r=Nt(()=>se.pkChallenges.filter(H=>H.status==="active")),o=Nt(()=>[...se.pkChallenges].filter(H=>H.status==="settled").sort((H,N)=>(N.settledAt||0)-(H.settledAt||0))),a=bt(!1),l=bt(1),c=bt(7),u=bt("exercise_minutes"),d=bt(""),f=bt(0),h=bt({}),g=bt([]),M=Nt(()=>Yi(u.value).hint),m=Nt(()=>Object.entries(se.warehouse.crops||{}).filter(([,H])=>H>0).map(([H,N])=>({id:H,qty:N})));function p(){const H={};for(const[N,_e]of Object.entries(se.warehouse.crops||{}))_e>0&&(H[N]=0);h.value=H,g.value=[],f.value=0,d.value="",c.value=7,u.value="exercise_minutes",a.value=!0}function S(H){const N=g.value.indexOf(H);N>=0?g.value.splice(N,1):g.value.push(H)}function b(){const H=e.value.find(P=>P.id===l.value),N={};for(const[P,j]of Object.entries(h.value)){const fe=Math.min(Math.max(0,Math.floor(Number(j)||0)),se.warehouse.crops[P]||0);fe>0&&(N[P]=fe)}const _e=Tn.createPkChallenge({friendId:l.value,friendName:(H==null?void 0:H.name)||"好友",durationDays:c.value,pkType:u.value,ruleNote:d.value,stakes:{crops:N,coins:f.value,petIds:[...g.value]}});_e.success?(a.value=!1,alert("挑战已创建。请让对方同意下注，或在本页点击「好友同意并下注」完成单机演示。")):alert(_e.message)}const E=bt(!1),I=bt(""),A=bt(50),U=bt({carrot:1,tomato:0,corn:0});function v(H){I.value=H.id,A.value=60,U.value={carrot:1,tomato:1,corn:0},E.value=!0}function R(){A.value=100,U.value={carrot:2,tomato:1,corn:1}}function k(){const H={};for(const _e of t){const P=Math.max(0,Math.floor(Number(U.value[_e])||0));P>0&&(H[_e]=P)}const N=Tn.acceptPkChallenge(I.value,{crops:H,coins:A.value,petIds:[]});N.success?(E.value=!1,alert("PK 已成立！挑战期内去「运动」打卡即可累积成绩；截止后自动结算。")):alert(N.message)}function D(H){if(!confirm("确定撤回这条待确认的挑战？"))return;const N=Tn.cancelPkChallenge(H);N.success||alert(N.message)}function G(H){var P;if(!H)return"—";const N=[];H.coins>0&&N.push(`${H.coins} 金币`);const _e=(H.petIds||[]).reduce((j,fe)=>{var ke;return j+(((ke=Hs[fe])==null?void 0:ke.price)||0)},0);_e&&N.push(`宠物折算 ${_e} 金币`);for(const[j,fe]of Object.entries(H.crops||{}))fe>0&&N.push(`${((P=Zt[j])==null?void 0:P.name)||j}×${fe}`);return N.length?N.join("，"):"—"}function Z(H){var _e;if(!H)return"—";const N=[];H.coins>0&&N.push(`${H.coins} 金币`);for(const[P,j]of Object.entries(H.crops||{}))j>0&&N.push(`${((_e=Zt[P])==null?void 0:_e.name)||P}×${j}`);return N.length?N.join("，"):"—"}function te(H,N){return H.pkType==="exercise_minutes"?N==="me"?H.myScore||0:H.friendScore||0:N==="me"?H.mySessions||0:H.friendSessions||0}function B(H){return H?new Date(H).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}function X(H){return H===0?"🥇":H===1?"🥈":H===2?"🥉":"🏅"}function z(H){if(se.stealCount>=3){alert("今日偷菜次数已用完");return}const N=Math.floor(Math.random()*50)+10;se.coins+=N,se.stealCount++,se.stats.totalStealCount++,alert(`偷取了 ${H.name} 的 ${N} 金币！`)}return Jo(()=>{Tn.resolvePkChallengesIfNeeded()}),(H,N)=>{var _e;return de(),me("div",hb,[N[37]||(N[37]=w("div",{class:"town-header"},[w("span",{class:"game-sign-inline"},"👋 邻里串门"),w("p",{class:"town-sub"},"排行榜 · 好友农田 · PK 挑战")],-1)),w("div",pb,[N[12]||(N[12]=w("div",{class:"panel-strip"},[w("span",{class:"strip-icon"},"🏆"),w("span",{class:"strip-title"},"全镇运动榜")],-1)),w("div",mb,[(de(!0),me(at,null,wt(i.value,(P,j)=>(de(),me("div",{key:j,class:pn(["rank-row",{top1:j===0,top2:j===1,top3:j===2,isMe:P.name==="你"}])},[w("span",_b,Re(X(j)),1),w("span",gb,Re(j+1),1),w("span",vb,Re(P.name),1),w("span",xb,Re(P.value)+" "+Re(P.unit),1)],2))),128))])]),w("div",Mb,[N[14]||(N[14]=w("div",{class:"panel-strip"},[w("span",{class:"strip-icon"},"🥕"),w("span",{class:"strip-title"},"好友农场")],-1)),w("div",Sb,[(de(!0),me(at,null,wt(e.value,P=>(de(),me("div",{key:P.id,class:"friend-card"},[w("div",yb,Re(P.icon),1),w("div",Eb,[w("span",bb,Re(P.name),1),w("span",Tb,[N[13]||(N[13]=w("span",{class:"sprout"},"🌱",-1)),dn(" "+Re(P.farmStatus),1)])]),w("button",{type:"button",class:"steal-btn",disabled:nt(se).stealCount>=3,onClick:j=>z(P)},Re(nt(se).stealCount>=3?"次数用尽":"偷菜"),9,Ab)]))),128))])]),w("div",wb,[w("div",{class:"panel-strip pk-strip"},[N[15]||(N[15]=w("span",{class:"strip-icon"},"⚔️",-1)),N[16]||(N[16]=w("span",{class:"strip-title"},"PK 挑战",-1)),w("button",{type:"button",class:"pk-launch",onClick:p},"＋ 发起挑战")]),N[23]||(N[23]=w("p",{class:"pk-intro"},[dn(" 向指定好友发起限时挑战，设置比拼规则与赌注；双方协商下注并同意后挑战生效，截止时按规则判定胜负，胜者拿走奖池（作物 + 金币；宠物按商店原价折算进金币池）。 "),w("strong",null,"单机演示："),dn("好友下注由你在「同意成立」一步代为填写。 ")],-1)),s.value.length?(de(),me("div",Cb,[N[18]||(N[18]=w("h4",{class:"pk-subhd"},"待好友确认（下注）",-1)),(de(!0),me(at,null,wt(s.value,P=>(de(),me("div",{key:P.id,class:"pk-card pending"},[w("div",Rb,[w("span",Pb,[N[17]||(N[17]=dn("你对 ",-1)),w("strong",null,Re(P.friendName),1)]),w("button",{type:"button",class:"link-btn danger",onClick:j=>D(P.id)},"撤回",8,Db)]),w("p",Lb,Re(nt(Yi)(P.pkType).label)+" · 时长 "+Re(P.durationDays)+" 天 ",1),P.ruleNote?(de(),me("p",Ib,"约定："+Re(P.ruleNote),1)):Pt("",!0),w("div",Ub," 我方赌注："+Re(G(P.stakesMe)),1),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:j=>v(P)}," 好友同意并下注（演示） ",8,Nb)]))),128))])):Pt("",!0),r.value.length?(de(),me("div",Fb,[N[21]||(N[21]=w("h4",{class:"pk-subhd"},"进行中",-1)),(de(!0),me(at,null,wt(r.value,P=>(de(),me("div",{key:P.id,class:"pk-card active"},[w("div",Ob,[w("span",null,"⚔️ vs "+Re(P.friendName),1),w("span",Bb,"截止 "+Re(B(P.endsAt)),1)]),w("p",kb,Re(nt(Yi)(P.pkType).label)+" · "+Re(nt(Yi)(P.pkType).hint),1),w("div",zb,[w("div",Hb,[N[19]||(N[19]=w("span",{class:"lbl"},"我",-1)),w("strong",null,Re(te(P,"me")),1),w("span",Vb,Re(nt(Yi)(P.pkType).unit),1)]),N[20]||(N[20]=w("span",{class:"vs-dot"},"VS",-1)),w("div",Gb,[w("span",Wb,Re(P.friendName),1),w("strong",null,Re(te(P,"friend")),1),w("span",Xb,Re(nt(Yi)(P.pkType).unit),1)])]),w("p",$b,"奖池："+Re(Z(P.escrow)),1)]))),128))])):Pt("",!0),o.value.length?(de(),me("div",qb,[N[22]||(N[22]=w("h4",{class:"pk-subhd"},"最新战绩",-1)),(de(!0),me(at,null,wt(o.value.slice(0,5),P=>(de(),me("div",{key:P.id,class:"pk-card settled"},[w("p",Yb,[P.winnerSide==="me"?(de(),me("span",jb,"🏆 胜")):(de(),me("span",Kb,"…")),dn(" vs "+Re(P.friendName)+" · "+Re(nt(Yi)(P.pkType).label),1)]),w("p",Zb,Re(P.resultMessage),1)]))),128))])):Pt("",!0),!s.value.length&&!r.value.length&&!o.value.length?(de(),me("p",Jb," 暂无 PK，点击右上角发起一场。 ")):Pt("",!0)]),a.value?(de(),me("div",{key:0,class:"modal-overlay",onClick:N[7]||(N[7]=ss(P=>a.value=!1,["self"]))},[w("div",{class:"modal-sheet",onClick:N[6]||(N[6]=ss(()=>{},["stop"]))},[N[32]||(N[32]=w("h3",null,"发起 PK 挑战",-1)),w("label",Qb,[N[24]||(N[24]=w("span",null,"对手",-1)),ui(w("select",{"onUpdate:modelValue":N[0]||(N[0]=P=>l.value=P),class:"fld-input"},[(de(!0),me(at,null,wt(e.value,P=>(de(),me("option",{key:P.id,value:P.id},Re(P.name),9,eT))),128))],512),[[Du,l.value,void 0,{number:!0}]])]),w("label",tT,[N[25]||(N[25]=w("span",null,"持续天数",-1)),ui(w("input",{"onUpdate:modelValue":N[1]||(N[1]=P=>c.value=P),type:"number",min:"1",max:"30",class:"fld-input"},null,512),[[es,c.value,void 0,{number:!0}]])]),w("label",nT,[N[26]||(N[26]=w("span",null,"比拼类型",-1)),ui(w("select",{"onUpdate:modelValue":N[2]||(N[2]=P=>u.value=P),class:"fld-input"},[(de(!0),me(at,null,wt(nt(Io),P=>(de(),me("option",{key:P.id,value:P.id},Re(P.label),9,iT))),128))],512),[[Du,u.value]])]),w("p",sT,Re(M.value),1),w("label",rT,[N[27]||(N[27]=w("span",null,"补充约定（可选）",-1)),ui(w("textarea",{"onUpdate:modelValue":N[3]||(N[3]=P=>d.value=P),rows:"2",class:"fld-input",placeholder:"例如：每天早晨跑步打卡算数…"},null,512),[[es,d.value]])]),w("div",oT,[N[31]||(N[31]=w("span",{class:"stake-title"},"我的赌注",-1)),w("label",aT,[N[28]||(N[28]=w("span",null,"金币",-1)),ui(w("input",{"onUpdate:modelValue":N[4]||(N[4]=P=>f.value=P),type:"number",min:"0",class:"fld-input"},null,512),[[es,f.value,void 0,{number:!0}]])]),m.value.length?(de(),me("div",lT,[N[29]||(N[29]=w("span",{class:"mini-label"},"作物（从仓库扣）",-1)),(de(!0),me(at,null,wt(m.value,P=>{var j;return de(),me("div",{key:P.id,class:"crop-row"},[w("span",null,Re((j=nt(Zt)[P.id])==null?void 0:j.name),1),ui(w("input",{"onUpdate:modelValue":fe=>h.value[P.id]=fe,type:"number",min:"0",max:P.qty,class:"fld-input tiny"},null,8,cT),[[es,h.value[P.id],void 0,{number:!0}]]),w("span",uT,"/ "+Re(P.qty),1)])}),128))])):Pt("",!0),(_e=nt(se).unlockedPets)!=null&&_e.length?(de(),me("div",fT,[N[30]||(N[30]=w("span",{class:"mini-label"},"宠物（按原价从金币扣押）",-1)),(de(!0),me(at,null,wt(nt(se).unlockedPets,P=>{var j,fe;return de(),me("label",{key:P,class:"pet-line"},[w("input",{type:"checkbox",checked:g.value.includes(P),onChange:ke=>S(P)},null,40,dT),dn(" "+Re((j=nt(Hs)[P])==null?void 0:j.name)+"（≈"+Re((fe=nt(Hs)[P])==null?void 0:fe.price)+" 币） ",1)])}),128))])):Pt("",!0)]),w("div",hT,[w("button",{type:"button",class:"btn-cancel",onClick:N[5]||(N[5]=P=>a.value=!1)},"取消"),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:b},"发出挑战")])])])):Pt("",!0),E.value?(de(),me("div",{key:1,class:"modal-overlay",onClick:N[11]||(N[11]=ss(P=>E.value=!1,["self"]))},[w("div",{class:"modal-sheet",onClick:N[10]||(N[10]=ss(()=>{},["stop"]))},[N[35]||(N[35]=w("h3",null,"协商成立 PK",-1)),N[36]||(N[36]=w("p",{class:"accept-lead"},[dn(" 现实中应由好友客户端确认。此处请"),w("strong",null,"代为填写好友的下注"),dn("，双方赌注齐全后奖池成立并开始计时。 ")],-1)),w("button",{type:"button",class:"demo-fill",onClick:R},"一键填入演示赌注"),w("label",pT,[N[33]||(N[33]=w("span",null,"好友下注 · 金币",-1)),ui(w("input",{"onUpdate:modelValue":N[8]||(N[8]=P=>A.value=P),type:"number",min:"0",class:"fld-input"},null,512),[[es,A.value,void 0,{number:!0}]])]),w("div",mT,[N[34]||(N[34]=w("span",{class:"mini-label"},"好友下注 · 作物（演示数量）",-1)),(de(),me(at,null,wt(t,P=>{var j;return w("div",{key:P,class:"crop-row"},[w("span",null,Re((j=nt(Zt)[P])==null?void 0:j.name),1),ui(w("input",{"onUpdate:modelValue":fe=>U.value[P]=fe,type:"number",min:"0",class:"fld-input tiny"},null,8,_T),[[es,U.value[P],void 0,{number:!0}]])])}),64))]),w("div",gT,[w("button",{type:"button",class:"btn-cancel",onClick:N[9]||(N[9]=P=>E.value=!1)},"取消"),w("button",{type:"button",class:"game-btn-primary-lg slim",onClick:k},"确认成立 PK")])])])):Pt("",!0)])}}},xT=Nn(vT,[["__scopeId","data-v-5e407f7c"]]),MT={class:"page page-scene achievement-page"},ST={class:"game-panel"},yT={class:"achievement-list"},ET={class:"plank-icon"},bT={class:"plank-body"},TT={class:"plank-name"},AT={class:"plank-desc"},wT={key:0,class:"plank-progress"},CT={class:"wood-progress-track"},RT={class:"plank-pct"},PT={key:0,class:"plank-reward"},DT={class:"game-panel streak-panel"},LT={class:"streak-hero"},IT={class:"streak-num"},UT={class:"streak-grid"},NT={class:"mile-day"},FT={class:"mile-reward"},OT={__name:"AchievementPage",setup(n){const e=[{days:7,reward:"解锁草莓"},{days:14,reward:"解锁葡萄+宠物屋"},{days:30,reward:"解锁餐厅"},{days:100,reward:"冠军雕像"}],t=Nt(()=>Object.entries(p_).map(([r,o])=>{let a=!1,l=0;return r==="firstExercise"?(a=se.stats.totalExerciseTime>0,l=a?100:0):r==="streak7"?(a=se.streakDays>=7,l=Math.min(100,se.streakDays/7*100)):r==="streak14"?(a=se.streakDays>=14,l=Math.min(100,se.streakDays/14*100)):r==="streak30"?(a=se.streakDays>=30,l=Math.min(100,se.streakDays/30*100)):r==="level5"?(a=se.level>=5,l=Math.min(100,se.level/5*100)):r==="rich"&&(a=se.coins>=1e4,l=Math.min(100,se.coins/1e4*100)),{id:r,...o,completed:a,progress:l}}));function i(r){const o=Math.min(100,Math.max(0,Number(r)));return Math.round(o*10)/10}function s(r){if(!r)return"无";const o=[];return r.coins&&o.push(`${r.coins} 金币`),r.crops&&o.push(`作物：${r.crops.join("、")}`),r.buildings&&o.push(`建筑：${r.buildings.join("、")}`),r.diamonds&&o.push(`${r.diamonds} 钻石`),o.length?o.join("；"):JSON.stringify(r)}return(r,o)=>(de(),me("div",MT,[o[4]||(o[4]=w("div",{class:"honor-header"},[w("span",{class:"game-sign-inline"},"🏅 荣誉墙"),w("p",{class:"honor-sub"},"完成目标，解锁农场好礼")],-1)),w("div",ST,[o[0]||(o[0]=w("div",{class:"panel-strip center"},[w("span",{class:"strip-title"},"成就进度")],-1)),w("div",yT,[(de(!0),me(at,null,wt(t.value,a=>(de(),me("div",{key:a.id,class:pn(["achievement-plank",{done:a.completed}])},[w("div",ET,Re(a.completed?"🏆":"🔒"),1),w("div",bT,[w("span",TT,Re(a.name),1),w("span",AT,Re(a.desc),1),a.completed?Pt("",!0):(de(),me("div",wT,[w("div",CT,[w("div",{class:"wood-progress-fill",style:Zs({width:i(a.progress)+"%"})},null,4)]),w("span",RT,Re(i(a.progress))+"%",1)]))]),a.completed?(de(),me("div",PT,Re(s(a.reward)),1)):Pt("",!0)],2))),128))])]),w("div",DT,[o[3]||(o[3]=w("div",{class:"panel-strip center"},[w("span",{class:"strip-title"},"连续打卡")],-1)),w("div",LT,[o[1]||(o[1]=w("span",{class:"flame"},"🔥",-1)),w("span",IT,Re(nt(se).streakDays),1),o[2]||(o[2]=w("span",{class:"streak-unit"},"天",-1))]),w("div",UT,[(de(),me(at,null,wt(e,a=>w("div",{key:a.days,class:pn(["streak-mile",{ok:nt(se).streakDays>=a.days}])},[w("span",NT,Re(a.days)+" 天",1),w("span",FT,Re(a.reward),1)],2)),64))])])]))}},BT=Nn(OT,[["__scopeId","data-v-0d73f237"]]),kT={__name:"Modal",emits:["close"],setup(n){return(e,t)=>(de(),me("div",{class:"modal-overlay",onClick:t[2]||(t[2]=i=>e.$emit("close"))},[w("div",{class:"modal-content",onClick:t[1]||(t[1]=ss(()=>{},["stop"]))},[w("button",{class:"modal-close",onClick:t[0]||(t[0]=i=>e.$emit("close"))},"×"),Zp(e.$slots,"default",{},void 0)])]))}},zT=Nn(kT,[["__scopeId","data-v-96d8b394"]]),HT={class:"container"},VT={class:"resource-bar"},GT={class:"resource-item"},WT={class:"resource-item"},XT={class:"resource-item"},$T={class:"resource-item"},qT={class:"tab-bar"},YT=["onClick"],jT={class:"icon"},KT={__name:"App",setup(n){const e=bt("home"),t=bt(!1),i=bt(null),s=[{id:"home",name:"农场",icon:"🏠"},{id:"exercise",name:"运动",icon:"🏃"},{id:"store",name:"商店",icon:"🏪"},{id:"warehouse",name:"仓库",icon:"📦"},{id:"social",name:"社交",icon:"👥"},{id:"achievement",name:"成就",icon:"🏆"}],r=Nt(()=>({home:Hy,exercise:dE,store:jE,warehouse:db,social:xT,achievement:BT})[e.value]);return Jo(()=>{Tn.resolvePkChallengesIfNeeded()}),(o,a)=>(de(),me("div",HT,[w("div",VT,[w("div",GT,[a[1]||(a[1]=w("span",null,"💰",-1)),w("span",null,Re(nt(se).coins),1)]),w("div",WT,[a[2]||(a[2]=w("span",null,"💎",-1)),w("span",null,Re(nt(se).diamonds),1)]),w("div",XT,[a[3]||(a[3]=w("span",null,"⚡",-1)),w("span",null,Re(nt(se).energy)+"/"+Re(nt(se).maxEnergy),1)]),w("div",$T,[a[4]||(a[4]=w("span",null,"🔥",-1)),w("span",null,Re(nt(se).streakDays)+"天",1)])]),(de(),ks(ru(r.value))),w("div",qT,[(de(),me(at,null,wt(s,l=>w("div",{key:l.id,class:pn(["tab-item",{active:e.value===l.id}]),onClick:c=>e.value=l.id},[w("span",jT,Re(l.icon),1),w("span",null,Re(l.name),1)],10,YT)),64))]),t.value?(de(),ks(zT,{key:0,onClose:a[0]||(a[0]=l=>t.value=!1)},{default:Md(()=>[(de(),ks(ru(i.value)))]),_:1})):Pt("",!0)]))}};f_(KT).mount("#app");
