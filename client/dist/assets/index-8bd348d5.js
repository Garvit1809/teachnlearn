var Lw=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var GM=Lw((QM,za)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Nw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var es={},Rw={get exports(){return es},set exports(e){es=e}},Rl={},x={},Iw={get exports(){return x},set exports(e){x=e}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),$w=Symbol.for("react.fragment"),Fw=Symbol.for("react.strict_mode"),jw=Symbol.for("react.profiler"),zw=Symbol.for("react.provider"),Uw=Symbol.for("react.context"),Bw=Symbol.for("react.forward_ref"),Hw=Symbol.for("react.suspense"),Ww=Symbol.for("react.memo"),Yw=Symbol.for("react.lazy"),op=Symbol.iterator;function Vw(e){return e===null||typeof e!="object"?null:(e=op&&e[op]||e["@@iterator"],typeof e=="function"?e:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,s0={};function oo(e,t,n){this.props=e,this.context=t,this.refs=s0,this.updater=n||i0}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function a0(){}a0.prototype=oo.prototype;function sf(e,t,n){this.props=e,this.context=t,this.refs=s0,this.updater=n||i0}var af=sf.prototype=new a0;af.constructor=sf;o0(af,oo.prototype);af.isPureReactComponent=!0;var sp=Array.isArray,l0=Object.prototype.hasOwnProperty,lf={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)l0.call(t,r)&&!u0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ps,type:e,key:o,ref:s,props:i,_owner:lf.current}}function Gw(e,t){return{$$typeof:Ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps}function qw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ap=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qw(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ps:case Aw:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gu(s,0):r,sp(i)?(n="",e!=null&&(n=e.replace(ap,"$&/")+"/"),wa(i,t,n,"",function(c){return c})):i!=null&&(uf(i)&&(i=Gw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ap,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",sp(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Gu(o,a);s+=wa(o,t,n,u,i)}else if(u=Vw(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Gu(o,a++),s+=wa(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vs(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ot={current:null},xa={transition:null},Kw={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:xa,ReactCurrentOwner:lf};he.Children={map:Vs,forEach:function(e,t,n){Vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vs(e,function(){t++}),t},toArray:function(e){return Vs(e,function(t){return t})||[]},only:function(e){if(!uf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=oo;he.Fragment=$w;he.Profiler=jw;he.PureComponent=sf;he.StrictMode=Fw;he.Suspense=Hw;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=o0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=lf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)l0.call(t,u)&&!u0.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ps,type:e.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(e){return e={$$typeof:Uw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zw,_context:e},e.Consumer=e};he.createElement=c0;he.createFactory=function(e){var t=c0.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:Bw,render:e}};he.isValidElement=uf;he.lazy=function(e){return{$$typeof:Yw,_payload:{_status:-1,_result:e},_init:Qw}};he.memo=function(e,t){return{$$typeof:Ww,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=xa.transition;xa.transition={};try{e()}finally{xa.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return Ot.current.useCallback(e,t)};he.useContext=function(e){return Ot.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return Ot.current.useDeferredValue(e)};he.useEffect=function(e,t){return Ot.current.useEffect(e,t)};he.useId=function(){return Ot.current.useId()};he.useImperativeHandle=function(e,t,n){return Ot.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return Ot.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Ot.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return Ot.current.useMemo(e,t)};he.useReducer=function(e,t,n){return Ot.current.useReducer(e,t,n)};he.useRef=function(e){return Ot.current.useRef(e)};he.useState=function(e){return Ot.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return Ot.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return Ot.current.useTransition()};he.version="18.2.0";(function(e){e.exports=he})(Iw);const re=of(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw=x,Jw=Symbol.for("react.element"),Xw=Symbol.for("react.fragment"),ex=Object.prototype.hasOwnProperty,tx=Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nx={key:!0,ref:!0,__self:!0,__source:!0};function d0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ex.call(t,r)&&!nx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jw,type:e,key:o,ref:s,props:i,_owner:tx.current}}Rl.Fragment=Xw;Rl.jsx=d0;Rl.jsxs=d0;(function(e){e.exports=Rl})(Rw);const fe=es.Fragment,l=es.jsx,S=es.jsxs;var jc={},Ba={},rx={get exports(){return Ba},set exports(e){Ba=e}},Yt={},zc={},ix={get exports(){return zc},set exports(e){zc=e}},f0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,W){var Q=O.length;O.push(W);e:for(;0<Q;){var ee=Q-1>>>1,A=O[ee];if(0<i(A,W))O[ee]=W,O[Q]=A,Q=ee;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var W=O[0],Q=O.pop();if(Q!==W){O[0]=Q;e:for(var ee=0,A=O.length,F=A>>>1;ee<F;){var H=2*(ee+1)-1,X=O[H],E=H+1,de=O[E];if(0>i(X,Q))E<A&&0>i(de,X)?(O[ee]=de,O[E]=Q,ee=E):(O[ee]=X,O[H]=Q,ee=H);else if(E<A&&0>i(de,Q))O[ee]=de,O[E]=Q,ee=E;else break e}}return W}function i(O,W){var Q=O.sortIndex-W.sortIndex;return Q!==0?Q:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,f=null,h=3,y=!1,p=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=O)r(c),W.sortIndex=W.expirationTime,t(u,W);else break;W=n(c)}}function k(O){if(v=!1,b(O),!p)if(n(u)!==null)p=!0,J(_);else{var W=n(c);W!==null&&T(k,W.startTime-O)}}function _(O,W){p=!1,v&&(v=!1,m(D),D=-1),y=!0;var Q=h;try{for(b(W),f=n(u);f!==null&&(!(f.expirationTime>W)||O&&!se());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,h=f.priorityLevel;var A=ee(f.expirationTime<=W);W=e.unstable_now(),typeof A=="function"?f.callback=A:f===n(u)&&r(u),b(W)}else r(u);f=n(u)}if(f!==null)var F=!0;else{var H=n(c);H!==null&&T(k,H.startTime-W),F=!1}return F}finally{f=null,h=Q,y=!1}}var M=!1,L=null,D=-1,q=5,z=-1;function se(){return!(e.unstable_now()-z<q)}function G(){if(L!==null){var O=e.unstable_now();z=O;var W=!0;try{W=L(!0,O)}finally{W?Z():(M=!1,L=null)}}else M=!1}var Z;if(typeof g=="function")Z=function(){g(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,B=$.port2;$.port1.onmessage=G,Z=function(){B.postMessage(null)}}else Z=function(){C(G,0)};function J(O){L=O,M||(M=!0,Z())}function T(O,W){D=C(function(){O(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){p||y||(p=!0,J(_))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var Q=h;h=W;try{return O()}finally{h=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=h;h=O;try{return W()}finally{h=Q}},e.unstable_scheduleCallback=function(O,W,Q){var ee=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ee+Q:ee):Q=ee,O){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=Q+A,O={id:d++,callback:W,priorityLevel:O,startTime:Q,expirationTime:A,sortIndex:-1},Q>ee?(O.sortIndex=Q,t(c,O),n(u)===null&&O===n(c)&&(v?(m(D),D=-1):v=!0,T(k,Q-ee))):(O.sortIndex=A,t(u,O),p||y||(p=!0,J(_))),O},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(O){var W=h;return function(){var Q=h;h=W;try{return O.apply(this,arguments)}finally{h=Q}}}})(f0);(function(e){e.exports=f0})(ix);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=x,Bt=zc;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p0=new Set,ts={};function pi(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(ts[e]=t,e=0;e<t.length;e++)p0.add(t[e])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},up={};function sx(e){return Uc.call(up,e)?!0:Uc.call(lp,e)?!1:ox.test(e)?up[e]=!0:(lp[e]=!0,!1)}function ax(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lx(e,t,n,r){if(t===null||typeof t>"u"||ax(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gt[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gt[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gt[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gt[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gt[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gt[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gt[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gt[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gt[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function df(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cf,df);gt[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cf,df);gt[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cf,df);gt[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ff(e,t,n,r){var i=gt.hasOwnProperty(t)?gt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lx(t,n,i,r)&&(n=null),r||i===null?sx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lr=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),m0=Symbol.for("react.provider"),g0=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),y0=Symbol.for("react.offscreen"),cp=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=cp&&e[cp]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,qu;function Do(e){if(qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qu=t&&t[1]||""}return`
`+qu+e}var Qu=!1;function Ku(e,t){if(!e||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Do(e):""}function ux(e){switch(e.tag){case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return e=Ku(e.type,!1),e;case 11:return e=Ku(e.type.render,!1),e;case 1:return e=Ku(e.type,!0),e;default:return""}}function Yc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ci:return"Fragment";case bi:return"Portal";case Bc:return"Profiler";case hf:return"StrictMode";case Hc:return"Suspense";case Wc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case g0:return(e.displayName||"Context")+".Consumer";case m0:return(e._context.displayName||"Context")+".Provider";case pf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mf:return t=e.displayName||null,t!==null?t:Yc(e.type)||"Memo";case mr:t=e._payload,e=e._init;try{return Yc(e(t))}catch{}}return null}function cx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(t);case 8:return t===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function v0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dx(e){var t=v0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qs(e){e._valueTracker||(e._valueTracker=dx(e))}function w0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=v0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vc(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function x0(e,t){t=t.checked,t!=null&&ff(e,"checked",t,!1)}function Gc(e,t){x0(e,t);var n=zr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qc(e,t.type,n):t.hasOwnProperty("defaultValue")&&qc(e,t.type,zr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qc(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lo=Array.isArray;function $i(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Lo(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zr(n)}}function S0(e,t){var n=zr(t.value),r=zr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function b0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?b0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,C0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ns(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fx=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){fx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function k0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function _0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=k0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hx=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(e,t){if(t){if(hx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ed=null,Fi=null,ji=null;function mp(e){if(e=Ls(e)){if(typeof ed!="function")throw Error(N(280));var t=e.stateNode;t&&(t=jl(t),ed(e.stateNode,e.type,t))}}function T0(e){Fi?ji?ji.push(e):ji=[e]:Fi=e}function E0(){if(Fi){var e=Fi,t=ji;if(ji=Fi=null,mp(e),t)for(e=0;e<t.length;e++)mp(t[e])}}function O0(e,t){return e(t)}function P0(){}var Zu=!1;function M0(e,t,n){if(Zu)return e(t,n);Zu=!0;try{return O0(e,t,n)}finally{Zu=!1,(Fi!==null||ji!==null)&&(P0(),E0())}}function rs(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var td=!1;if(nr)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){td=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{td=!1}function px(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var $o=!1,Wa=null,Ya=!1,nd=null,mx={onError:function(e){$o=!0,Wa=e}};function gx(e,t,n,r,i,o,s,a,u){$o=!1,Wa=null,px.apply(mx,arguments)}function yx(e,t,n,r,i,o,s,a,u){if(gx.apply(this,arguments),$o){if($o){var c=Wa;$o=!1,Wa=null}else throw Error(N(198));Ya||(Ya=!0,nd=c)}}function mi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function D0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gp(e){if(mi(e)!==e)throw Error(N(188))}function vx(e){var t=e.alternate;if(!t){if(t=mi(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gp(i),e;if(o===r)return gp(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function L0(e){return e=vx(e),e!==null?N0(e):null}function N0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=N0(e);if(t!==null)return t;e=e.sibling}return null}var R0=Bt.unstable_scheduleCallback,yp=Bt.unstable_cancelCallback,wx=Bt.unstable_shouldYield,xx=Bt.unstable_requestPaint,qe=Bt.unstable_now,Sx=Bt.unstable_getCurrentPriorityLevel,yf=Bt.unstable_ImmediatePriority,I0=Bt.unstable_UserBlockingPriority,Va=Bt.unstable_NormalPriority,bx=Bt.unstable_LowPriority,A0=Bt.unstable_IdlePriority,Il=null,Rn=null;function Cx(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Il,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Tx,kx=Math.log,_x=Math.LN2;function Tx(e){return e>>>=0,e===0?32:31-(kx(e)/_x|0)|0}var Ks=64,Zs=4194304;function No(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=No(a):(o&=s,o!==0&&(r=No(o)))}else s=n&~i,s!==0?r=No(s):o!==0&&(r=No(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yn(t),i=1<<n,r|=e[n],t&=~i;return r}function Ex(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-yn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Ex(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function rd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $0(){var e=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),e}function Ju(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ms(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=n}function Px(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _e=0;function F0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var j0,wf,z0,U0,B0,id=!1,Js=[],Tr=null,Er=null,Or=null,is=new Map,os=new Map,yr=[],Mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(e,t){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(t.pointerId)}}function So(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ls(t),t!==null&&wf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dx(e,t,n,r,i){switch(t){case"focusin":return Tr=So(Tr,e,t,n,r,i),!0;case"dragenter":return Er=So(Er,e,t,n,r,i),!0;case"mouseover":return Or=So(Or,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return is.set(o,So(is.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,os.set(o,So(os.get(o)||null,e,t,n,r,i)),!0}return!1}function H0(e){var t=Xr(e.target);if(t!==null){var n=mi(t);if(n!==null){if(t=n.tag,t===13){if(t=D0(n),t!==null){e.blockedOn=t,B0(e.priority,function(){z0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=od(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return t=Ls(n),t!==null&&wf(t),e.blockedOn=n,!1;t.shift()}return!0}function wp(e,t,n){Sa(e)&&n.delete(t)}function Lx(){id=!1,Tr!==null&&Sa(Tr)&&(Tr=null),Er!==null&&Sa(Er)&&(Er=null),Or!==null&&Sa(Or)&&(Or=null),is.forEach(wp),os.forEach(wp)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,id||(id=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Lx)))}function ss(e){function t(i){return bo(i,e)}if(0<Js.length){bo(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tr!==null&&bo(Tr,e),Er!==null&&bo(Er,e),Or!==null&&bo(Or,e),is.forEach(t),os.forEach(t),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)H0(n),n.blockedOn===null&&yr.shift()}var zi=lr.ReactCurrentBatchConfig,qa=!0;function Nx(e,t,n,r){var i=_e,o=zi.transition;zi.transition=null;try{_e=1,xf(e,t,n,r)}finally{_e=i,zi.transition=o}}function Rx(e,t,n,r){var i=_e,o=zi.transition;zi.transition=null;try{_e=4,xf(e,t,n,r)}finally{_e=i,zi.transition=o}}function xf(e,t,n,r){if(qa){var i=od(e,t,n,r);if(i===null)lc(e,t,r,Qa,n),vp(e,r);else if(Dx(i,e,t,n,r))r.stopPropagation();else if(vp(e,r),t&4&&-1<Mx.indexOf(e)){for(;i!==null;){var o=Ls(i);if(o!==null&&j0(o),o=od(e,t,n,r),o===null&&lc(e,t,r,Qa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else lc(e,t,r,null,n)}}var Qa=null;function od(e,t,n,r){if(Qa=null,e=gf(r),e=Xr(e),e!==null)if(t=mi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=D0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function W0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case yf:return 1;case I0:return 4;case Va:case bx:return 16;case A0:return 536870912;default:return 16}default:return 16}}var wr=null,Sf=null,ba=null;function Y0(){if(ba)return ba;var e,t=Sf,n=t.length,r,i="value"in wr?wr.value:wr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ba=i.slice(e,1<r?1-r:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function xp(){return!1}function Vt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xs:xp,this.isPropagationStopped=xp,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),t}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Vt(so),Ds=Ue({},so,{view:0,detail:0}),Ix=Vt(Ds),Xu,ec,Co,Al=Ue({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(Xu=e.screenX-Co.screenX,ec=e.screenY-Co.screenY):ec=Xu=0,Co=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:ec}}),Sp=Vt(Al),Ax=Ue({},Al,{dataTransfer:0}),$x=Vt(Ax),Fx=Ue({},Ds,{relatedTarget:0}),tc=Vt(Fx),jx=Ue({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=Vt(jx),Ux=Ue({},so,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=Vt(Ux),Hx=Ue({},so,{data:0}),bp=Vt(Hx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vx[e])?!!t[e]:!1}function Cf(){return Gx}var qx=Ue({},Ds,{key:function(e){if(e.key){var t=Wx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qx=Vt(qx),Kx=Ue({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Vt(Kx),Zx=Ue({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),Jx=Vt(Zx),Xx=Ue({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),e2=Vt(Xx),t2=Ue({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n2=Vt(t2),r2=[9,13,27,32],kf=nr&&"CompositionEvent"in window,Fo=null;nr&&"documentMode"in document&&(Fo=document.documentMode);var i2=nr&&"TextEvent"in window&&!Fo,V0=nr&&(!kf||Fo&&8<Fo&&11>=Fo),kp=String.fromCharCode(32),_p=!1;function G0(e,t){switch(e){case"keyup":return r2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ki=!1;function o2(e,t){switch(e){case"compositionend":return q0(t);case"keypress":return t.which!==32?null:(_p=!0,kp);case"textInput":return e=t.data,e===kp&&_p?null:e;default:return null}}function s2(e,t){if(ki)return e==="compositionend"||!kf&&G0(e,t)?(e=Y0(),ba=Sf=wr=null,ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return V0&&t.locale!=="ko"?null:t.data;default:return null}}var a2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a2[e.type]:t==="textarea"}function Q0(e,t,n,r){T0(r),t=Ka(t,"onChange"),0<t.length&&(n=new bf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jo=null,as=null;function l2(e){s1(e,0)}function $l(e){var t=Ei(e);if(w0(t))return e}function u2(e,t){if(e==="change")return t}var K0=!1;if(nr){var nc;if(nr){var rc="oninput"in document;if(!rc){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),rc=typeof Ep.oninput=="function"}nc=rc}else nc=!1;K0=nc&&(!document.documentMode||9<document.documentMode)}function Op(){jo&&(jo.detachEvent("onpropertychange",Z0),as=jo=null)}function Z0(e){if(e.propertyName==="value"&&$l(as)){var t=[];Q0(t,as,e,gf(e)),M0(l2,t)}}function c2(e,t,n){e==="focusin"?(Op(),jo=t,as=n,jo.attachEvent("onpropertychange",Z0)):e==="focusout"&&Op()}function d2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(as)}function f2(e,t){if(e==="click")return $l(t)}function h2(e,t){if(e==="input"||e==="change")return $l(t)}function p2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:p2;function ls(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,t){var n=Pp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function J0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function X0(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m2(e){var t=X0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&J0(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Mp(n,o);var s=Mp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g2=nr&&"documentMode"in document&&11>=document.documentMode,_i=null,sd=null,zo=null,ad=!1;function Dp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ad||_i==null||_i!==Ha(r)||(r=_i,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ls(zo,r)||(zo=r,r=Ka(sd,"onSelect"),0<r.length&&(t=new bf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_i)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ti={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ic={},e1={};nr&&(e1=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Fl(e){if(ic[e])return ic[e];if(!Ti[e])return e;var t=Ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in e1)return ic[e]=t[n];return e}var t1=Fl("animationend"),n1=Fl("animationiteration"),r1=Fl("animationstart"),i1=Fl("transitionend"),o1=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(e,t){o1.set(e,t),pi(t,[e])}for(var oc=0;oc<Lp.length;oc++){var sc=Lp[oc],y2=sc.toLowerCase(),v2=sc[0].toUpperCase()+sc.slice(1);Hr(y2,"on"+v2)}Hr(t1,"onAnimationEnd");Hr(n1,"onAnimationIteration");Hr(r1,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(i1,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Np(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yx(r,t,void 0,e),e.currentTarget=null}function s1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Np(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Np(i,a,c),o=u}}}if(Ya)throw e=nd,Ya=!1,nd=null,e}function Me(e,t){var n=t[fd];n===void 0&&(n=t[fd]=new Set);var r=e+"__bubble";n.has(r)||(a1(t,e,2,!1),n.add(r))}function ac(e,t,n){var r=0;t&&(r|=4),a1(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function us(e){if(!e[ta]){e[ta]=!0,p0.forEach(function(n){n!=="selectionchange"&&(w2.has(n)||ac(n,!1,e),ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,ac("selectionchange",!1,t))}}function a1(e,t,n,r){switch(W0(t)){case 1:var i=Nx;break;case 4:i=Rx;break;default:i=xf}n=i.bind(null,t,n,e),i=void 0,!td||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function lc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xr(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}M0(function(){var c=o,d=gf(n),f=[];e:{var h=o1.get(e);if(h!==void 0){var y=bf,p=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":y=Qx;break;case"focusin":p="focus",y=tc;break;case"focusout":p="blur",y=tc;break;case"beforeblur":case"afterblur":y=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Jx;break;case t1:case n1:case r1:y=zx;break;case i1:y=e2;break;case"scroll":y=Ix;break;case"wheel":y=n2;break;case"copy":case"cut":case"paste":y=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Cp}var v=(t&4)!==0,C=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,b;g!==null;){b=g;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,m!==null&&(k=rs(g,m),k!=null&&v.push(cs(g,k,b)))),C)break;g=g.return}0<v.length&&(h=new y(h,p,null,n,d),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Xc&&(p=n.relatedTarget||n.fromElement)&&(Xr(p)||p[rr]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(p=n.relatedTarget||n.toElement,y=c,p=p?Xr(p):null,p!==null&&(C=mi(p),p!==C||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=c),y!==p)){if(v=Sp,k="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Cp,k="onPointerLeave",m="onPointerEnter",g="pointer"),C=y==null?h:Ei(y),b=p==null?h:Ei(p),h=new v(k,g+"leave",y,n,d),h.target=C,h.relatedTarget=b,k=null,Xr(d)===c&&(v=new v(m,g+"enter",p,n,d),v.target=b,v.relatedTarget=C,k=v),C=k,y&&p)t:{for(v=y,m=p,g=0,b=v;b;b=wi(b))g++;for(b=0,k=m;k;k=wi(k))b++;for(;0<g-b;)v=wi(v),g--;for(;0<b-g;)m=wi(m),b--;for(;g--;){if(v===m||m!==null&&v===m.alternate)break t;v=wi(v),m=wi(m)}v=null}else v=null;y!==null&&Rp(f,h,y,v,!1),p!==null&&C!==null&&Rp(f,C,p,v,!0)}}e:{if(h=c?Ei(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var _=u2;else if(Tp(h))if(K0)_=h2;else{_=d2;var M=c2}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=f2);if(_&&(_=_(e,c))){Q0(f,_,n,d);break e}M&&M(e,h,c),e==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&qc(h,"number",h.value)}switch(M=c?Ei(c):window,e){case"focusin":(Tp(M)||M.contentEditable==="true")&&(_i=M,sd=c,zo=null);break;case"focusout":zo=sd=_i=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Dp(f,n,d);break;case"selectionchange":if(g2)break;case"keydown":case"keyup":Dp(f,n,d)}var L;if(kf)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ki?G0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(V0&&n.locale!=="ko"&&(ki||D!=="onCompositionStart"?D==="onCompositionEnd"&&ki&&(L=Y0()):(wr=d,Sf="value"in wr?wr.value:wr.textContent,ki=!0)),M=Ka(c,D),0<M.length&&(D=new bp(D,e,null,n,d),f.push({event:D,listeners:M}),L?D.data=L:(L=q0(n),L!==null&&(D.data=L)))),(L=i2?o2(e,n):s2(e,n))&&(c=Ka(c,"onBeforeInput"),0<c.length&&(d=new bp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=L))}s1(f,t)})}function cs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=rs(e,n),o!=null&&r.unshift(cs(e,o,i)),o=rs(e,t),o!=null&&r.push(cs(e,o,i))),e=e.return}return r}function wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=rs(n,o),u!=null&&s.unshift(cs(n,u,a))):i||(u=rs(n,o),u!=null&&s.push(cs(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var x2=/\r\n?/g,S2=/\u0000|\uFFFD/g;function Ip(e){return(typeof e=="string"?e:""+e).replace(x2,`
`).replace(S2,"")}function na(e,t,n){if(t=Ip(t),Ip(e)!==t&&n)throw Error(N(425))}function Za(){}var ld=null,ud=null;function cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,b2=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,C2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(k2)}:dd;function k2(e){setTimeout(function(){throw e})}function uc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ss(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ss(t)}function Pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Dn="__reactFiber$"+ao,ds="__reactProps$"+ao,rr="__reactContainer$"+ao,fd="__reactEvents$"+ao,_2="__reactListeners$"+ao,T2="__reactHandles$"+ao;function Xr(e){var t=e[Dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rr]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$p(e);e!==null;){if(n=e[Dn])return n;e=$p(e)}return t}e=n,n=e.parentNode}return null}function Ls(e){return e=e[Dn]||e[rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function jl(e){return e[ds]||null}var hd=[],Oi=-1;function Wr(e){return{current:e}}function Le(e){0>Oi||(e.current=hd[Oi],hd[Oi]=null,Oi--)}function Pe(e,t){Oi++,hd[Oi]=e.current,e.current=t}var Ur={},Ct=Wr(Ur),It=Wr(!1),ai=Ur;function qi(e,t){var n=e.type.contextTypes;if(!n)return Ur;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function At(e){return e=e.childContextTypes,e!=null}function Ja(){Le(It),Le(Ct)}function Fp(e,t,n){if(Ct.current!==Ur)throw Error(N(168));Pe(Ct,t),Pe(It,n)}function l1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,cx(e)||"Unknown",i));return Ue({},n,r)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ur,ai=Ct.current,Pe(Ct,e),Pe(It,It.current),!0}function jp(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=l1(e,t,ai),r.__reactInternalMemoizedMergedChildContext=e,Le(It),Le(Ct),Pe(Ct,e)):Le(It),Pe(It,n)}var Gn=null,zl=!1,cc=!1;function u1(e){Gn===null?Gn=[e]:Gn.push(e)}function E2(e){zl=!0,u1(e)}function Yr(){if(!cc&&Gn!==null){cc=!0;var e=0,t=_e;try{var n=Gn;for(_e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gn=null,zl=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(e+1)),R0(yf,Yr),i}finally{_e=t,cc=!1}}return null}var Pi=[],Mi=0,el=null,tl=0,Zt=[],Jt=0,li=null,qn=1,Qn="";function Qr(e,t){Pi[Mi++]=tl,Pi[Mi++]=el,el=e,tl=t}function c1(e,t,n){Zt[Jt++]=qn,Zt[Jt++]=Qn,Zt[Jt++]=li,li=e;var r=qn;e=Qn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var o=32-yn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qn=1<<32-yn(t)+i|n<<i|r,Qn=o+e}else qn=1<<o|n<<i|r,Qn=e}function Tf(e){e.return!==null&&(Qr(e,1),c1(e,1,0))}function Ef(e){for(;e===el;)el=Pi[--Mi],Pi[Mi]=null,tl=Pi[--Mi],Pi[Mi]=null;for(;e===li;)li=Zt[--Jt],Zt[Jt]=null,Qn=Zt[--Jt],Zt[Jt]=null,qn=Zt[--Jt],Zt[Jt]=null}var Ut=null,zt=null,$e=!1,mn=null;function d1(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,zt=Pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=li!==null?{id:qn,overflow:Qn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,zt=null,!0):!1;default:return!1}}function pd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function md(e){if($e){var t=zt;if(t){var n=t;if(!zp(e,t)){if(pd(e))throw Error(N(418));t=Pr(n.nextSibling);var r=Ut;t&&zp(e,t)?d1(r,n):(e.flags=e.flags&-4097|2,$e=!1,Ut=e)}}else{if(pd(e))throw Error(N(418));e.flags=e.flags&-4097|2,$e=!1,Ut=e}}}function Up(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function ra(e){if(e!==Ut)return!1;if(!$e)return Up(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cd(e.type,e.memoizedProps)),t&&(t=zt)){if(pd(e))throw f1(),Error(N(418));for(;t;)d1(e,t),t=Pr(t.nextSibling)}if(Up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){zt=Pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}zt=null}}else zt=Ut?Pr(e.stateNode.nextSibling):null;return!0}function f1(){for(var e=zt;e;)e=Pr(e.nextSibling)}function Qi(){zt=Ut=null,$e=!1}function Of(e){mn===null?mn=[e]:mn.push(e)}var O2=lr.ReactCurrentBatchConfig;function fn(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var nl=Wr(null),rl=null,Di=null,Pf=null;function Mf(){Pf=Di=rl=null}function Df(e){var t=nl.current;Le(nl),e._currentValue=t}function gd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ui(e,t){rl=e,Pf=Di=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function rn(e){var t=e._currentValue;if(Pf!==e)if(e={context:e,memoizedValue:t,next:null},Di===null){if(rl===null)throw Error(N(308));Di=e,rl.dependencies={lanes:0,firstContext:e}}else Di=Di.next=e;return t}var ei=null;function Lf(e){ei===null?ei=[e]:ei.push(e)}function h1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lf(t)):(n.next=i.next,i.next=n),t.interleaved=n,ir(e,r)}function ir(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gr=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ir(e,n)}return i=r.interleaved,i===null?(t.next=t,Lf(r)):(t.next=i.next,i.next=t),r.interleaved=t,ir(e,n)}function ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}function Bp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var i=e.updateQueue;gr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,d=c=u=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,v=a;switch(h=t,y=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){f=p.call(y,f,h);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,h=typeof p=="function"?p.call(y,f,h):p,h==null)break e;f=Ue({},f,h);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ci|=s,e.lanes=s,e.memoizedState=f}}function Hp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var m1=new h0.Component().refs;function yd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?mi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Et(),i=Lr(e),o=Xn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Mr(e,o,i),t!==null&&(vn(t,e,i,r),ka(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Et(),i=Lr(e),o=Xn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mr(e,o,i),t!==null&&(vn(t,e,i,r),ka(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Et(),r=Lr(e),i=Xn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Mr(e,i,r),t!==null&&(vn(t,e,r,n),ka(t,e,r))}};function Wp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ls(n,r)||!ls(i,o):!0}function g1(e,t,n){var r=!1,i=Ur,o=t.contextType;return typeof o=="object"&&o!==null?o=rn(o):(i=At(t)?ai:Ct.current,r=t.contextTypes,o=(r=r!=null)?qi(e,i):Ur),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ul.enqueueReplaceState(t,t.state,null)}function vd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=m1,Nf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rn(o):(o=At(t)?ai:Ct.current,i.context=qi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yd(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ul.enqueueReplaceState(i,i.state,null),il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===m1&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vp(e){var t=e._init;return t(e._payload)}function y1(e){function t(m,g){if(e){var b=m.deletions;b===null?(m.deletions=[g],m.flags|=16):b.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=Nr(m,g),m.index=0,m.sibling=null,m}function o(m,g,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<g?(m.flags|=2,g):b):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,b,k){return g===null||g.tag!==6?(g=yc(b,m.mode,k),g.return=m,g):(g=i(g,b),g.return=m,g)}function u(m,g,b,k){var _=b.type;return _===Ci?d(m,g,b.props.children,k,b.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mr&&Vp(_)===g.type)?(k=i(g,b.props),k.ref=ko(m,g,b),k.return=m,k):(k=Ma(b.type,b.key,b.props,null,m.mode,k),k.ref=ko(m,g,b),k.return=m,k)}function c(m,g,b,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=vc(b,m.mode,k),g.return=m,g):(g=i(g,b.children||[]),g.return=m,g)}function d(m,g,b,k,_){return g===null||g.tag!==7?(g=ii(b,m.mode,k,_),g.return=m,g):(g=i(g,b),g.return=m,g)}function f(m,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=yc(""+g,m.mode,b),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:return b=Ma(g.type,g.key,g.props,null,m.mode,b),b.ref=ko(m,null,g),b.return=m,b;case bi:return g=vc(g,m.mode,b),g.return=m,g;case mr:var k=g._init;return f(m,k(g._payload),b)}if(Lo(g)||wo(g))return g=ii(g,m.mode,b,null),g.return=m,g;ia(m,g)}return null}function h(m,g,b,k){var _=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return _!==null?null:a(m,g,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gs:return b.key===_?u(m,g,b,k):null;case bi:return b.key===_?c(m,g,b,k):null;case mr:return _=b._init,h(m,g,_(b._payload),k)}if(Lo(b)||wo(b))return _!==null?null:d(m,g,b,k,null);ia(m,b)}return null}function y(m,g,b,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(b)||null,a(g,m,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gs:return m=m.get(k.key===null?b:k.key)||null,u(g,m,k,_);case bi:return m=m.get(k.key===null?b:k.key)||null,c(g,m,k,_);case mr:var M=k._init;return y(m,g,b,M(k._payload),_)}if(Lo(k)||wo(k))return m=m.get(b)||null,d(g,m,k,_,null);ia(g,k)}return null}function p(m,g,b,k){for(var _=null,M=null,L=g,D=g=0,q=null;L!==null&&D<b.length;D++){L.index>D?(q=L,L=null):q=L.sibling;var z=h(m,L,b[D],k);if(z===null){L===null&&(L=q);break}e&&L&&z.alternate===null&&t(m,L),g=o(z,g,D),M===null?_=z:M.sibling=z,M=z,L=q}if(D===b.length)return n(m,L),$e&&Qr(m,D),_;if(L===null){for(;D<b.length;D++)L=f(m,b[D],k),L!==null&&(g=o(L,g,D),M===null?_=L:M.sibling=L,M=L);return $e&&Qr(m,D),_}for(L=r(m,L);D<b.length;D++)q=y(L,m,D,b[D],k),q!==null&&(e&&q.alternate!==null&&L.delete(q.key===null?D:q.key),g=o(q,g,D),M===null?_=q:M.sibling=q,M=q);return e&&L.forEach(function(se){return t(m,se)}),$e&&Qr(m,D),_}function v(m,g,b,k){var _=wo(b);if(typeof _!="function")throw Error(N(150));if(b=_.call(b),b==null)throw Error(N(151));for(var M=_=null,L=g,D=g=0,q=null,z=b.next();L!==null&&!z.done;D++,z=b.next()){L.index>D?(q=L,L=null):q=L.sibling;var se=h(m,L,z.value,k);if(se===null){L===null&&(L=q);break}e&&L&&se.alternate===null&&t(m,L),g=o(se,g,D),M===null?_=se:M.sibling=se,M=se,L=q}if(z.done)return n(m,L),$e&&Qr(m,D),_;if(L===null){for(;!z.done;D++,z=b.next())z=f(m,z.value,k),z!==null&&(g=o(z,g,D),M===null?_=z:M.sibling=z,M=z);return $e&&Qr(m,D),_}for(L=r(m,L);!z.done;D++,z=b.next())z=y(L,m,D,z.value,k),z!==null&&(e&&z.alternate!==null&&L.delete(z.key===null?D:z.key),g=o(z,g,D),M===null?_=z:M.sibling=z,M=z);return e&&L.forEach(function(G){return t(m,G)}),$e&&Qr(m,D),_}function C(m,g,b,k){if(typeof b=="object"&&b!==null&&b.type===Ci&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Gs:e:{for(var _=b.key,M=g;M!==null;){if(M.key===_){if(_=b.type,_===Ci){if(M.tag===7){n(m,M.sibling),g=i(M,b.props.children),g.return=m,m=g;break e}}else if(M.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mr&&Vp(_)===M.type){n(m,M.sibling),g=i(M,b.props),g.ref=ko(m,M,b),g.return=m,m=g;break e}n(m,M);break}else t(m,M);M=M.sibling}b.type===Ci?(g=ii(b.props.children,m.mode,k,b.key),g.return=m,m=g):(k=Ma(b.type,b.key,b.props,null,m.mode,k),k.ref=ko(m,g,b),k.return=m,m=k)}return s(m);case bi:e:{for(M=b.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(m,g.sibling),g=i(g,b.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=vc(b,m.mode,k),g.return=m,m=g}return s(m);case mr:return M=b._init,C(m,g,M(b._payload),k)}if(Lo(b))return p(m,g,b,k);if(wo(b))return v(m,g,b,k);ia(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,b),g.return=m,m=g):(n(m,g),g=yc(b,m.mode,k),g.return=m,m=g),s(m)):n(m,g)}return C}var Ki=y1(!0),v1=y1(!1),Ns={},In=Wr(Ns),fs=Wr(Ns),hs=Wr(Ns);function ti(e){if(e===Ns)throw Error(N(174));return e}function Rf(e,t){switch(Pe(hs,t),Pe(fs,e),Pe(In,Ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kc(t,e)}Le(In),Pe(In,t)}function Zi(){Le(In),Le(fs),Le(hs)}function w1(e){ti(hs.current);var t=ti(In.current),n=Kc(t,e.type);t!==n&&(Pe(fs,e),Pe(In,n))}function If(e){fs.current===e&&(Le(In),Le(fs))}var Fe=Wr(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dc=[];function Af(){for(var e=0;e<dc.length;e++)dc[e]._workInProgressVersionPrimary=null;dc.length=0}var _a=lr.ReactCurrentDispatcher,fc=lr.ReactCurrentBatchConfig,ui=0,ze=null,Xe=null,st=null,sl=!1,Uo=!1,ps=0,P2=0;function vt(){throw Error(N(321))}function $f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function Ff(e,t,n,r,i,o){if(ui=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_a.current=e===null||e.memoizedState===null?N2:R2,e=n(r,i),Uo){o=0;do{if(Uo=!1,ps=0,25<=o)throw Error(N(301));o+=1,st=Xe=null,t.updateQueue=null,_a.current=I2,e=n(r,i)}while(Uo)}if(_a.current=al,t=Xe!==null&&Xe.next!==null,ui=0,st=Xe=ze=null,sl=!1,t)throw Error(N(300));return e}function jf(){var e=ps!==0;return ps=0,e}function Mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?ze.memoizedState=st=e:st=st.next=e,st}function on(){if(Xe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=st===null?ze.memoizedState:st.next;if(t!==null)st=t,Xe=e;else{if(e===null)throw Error(N(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},st===null?ze.memoizedState=st=e:st=st.next=e}return st}function ms(e,t){return typeof t=="function"?t(e):t}function hc(e){var t=on(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((ui&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,ze.lanes|=d,ci|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,xn(r,t.memoizedState)||(Nt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,ci|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pc(e){var t=on(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);xn(o,t.memoizedState)||(Nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function x1(){}function S1(e,t){var n=ze,r=on(),i=t(),o=!xn(r.memoizedState,i);if(o&&(r.memoizedState=i,Nt=!0),r=r.queue,zf(k1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,gs(9,C1.bind(null,n,r,i,t),void 0,null),at===null)throw Error(N(349));ui&30||b1(n,t,i)}return i}function b1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function C1(e,t,n,r){t.value=n,t.getSnapshot=r,_1(t)&&T1(e)}function k1(e,t,n){return n(function(){_1(t)&&T1(e)})}function _1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function T1(e){var t=ir(e,1);t!==null&&vn(t,e,1,-1)}function Gp(e){var t=Mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t.queue=e,e=e.dispatch=L2.bind(null,ze,e),[t.memoizedState,e]}function gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function E1(){return on().memoizedState}function Ta(e,t,n,r){var i=Mn();ze.flags|=e,i.memoizedState=gs(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var i=on();r=r===void 0?null:r;var o=void 0;if(Xe!==null){var s=Xe.memoizedState;if(o=s.destroy,r!==null&&$f(r,s.deps)){i.memoizedState=gs(t,n,o,r);return}}ze.flags|=e,i.memoizedState=gs(1|t,n,o,r)}function qp(e,t){return Ta(8390656,8,e,t)}function zf(e,t){return Bl(2048,8,e,t)}function O1(e,t){return Bl(4,2,e,t)}function P1(e,t){return Bl(4,4,e,t)}function M1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function D1(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,M1.bind(null,t,e),n)}function Uf(){}function L1(e,t){var n=on();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function N1(e,t){var n=on();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function R1(e,t,n){return ui&21?(xn(n,t)||(n=$0(),ze.lanes|=n,ci|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=n)}function M2(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var r=fc.transition;fc.transition={};try{e(!1),t()}finally{_e=n,fc.transition=r}}function I1(){return on().memoizedState}function D2(e,t,n){var r=Lr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A1(e))$1(t,n);else if(n=h1(e,t,n,r),n!==null){var i=Et();vn(n,e,r,i),F1(n,t,r)}}function L2(e,t,n){var r=Lr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A1(e))$1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,s)){var u=t.interleaved;u===null?(i.next=i,Lf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=h1(e,t,i,r),n!==null&&(i=Et(),vn(n,e,r,i),F1(n,t,r))}}function A1(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function $1(e,t){Uo=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function F1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vf(e,n)}}var al={readContext:rn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},N2={readContext:rn,useCallback:function(e,t){return Mn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:qp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,M1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=Mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=D2.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Mn();return e={current:e},t.memoizedState=e},useState:Gp,useDebugValue:Uf,useDeferredValue:function(e){return Mn().memoizedState=e},useTransition:function(){var e=Gp(!1),t=e[0];return e=M2.bind(null,e[1]),Mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,i=Mn();if($e){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),at===null)throw Error(N(349));ui&30||b1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qp(k1.bind(null,r,o,e),[e]),r.flags|=2048,gs(9,C1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Mn(),t=at.identifierPrefix;if($e){var n=Qn,r=qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ps++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R2={readContext:rn,useCallback:L1,useContext:rn,useEffect:zf,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:P1,useMemo:N1,useReducer:hc,useRef:E1,useState:function(){return hc(ms)},useDebugValue:Uf,useDeferredValue:function(e){var t=on();return R1(t,Xe.memoizedState,e)},useTransition:function(){var e=hc(ms)[0],t=on().memoizedState;return[e,t]},useMutableSource:x1,useSyncExternalStore:S1,useId:I1,unstable_isNewReconciler:!1},I2={readContext:rn,useCallback:L1,useContext:rn,useEffect:zf,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:P1,useMemo:N1,useReducer:pc,useRef:E1,useState:function(){return pc(ms)},useDebugValue:Uf,useDeferredValue:function(e){var t=on();return Xe===null?t.memoizedState=e:R1(t,Xe.memoizedState,e)},useTransition:function(){var e=pc(ms)[0],t=on().memoizedState;return[e,t]},useMutableSource:x1,useSyncExternalStore:S1,useId:I1,unstable_isNewReconciler:!1};function Ji(e,t){try{var n="",r=t;do n+=ux(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function mc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var A2=typeof WeakMap=="function"?WeakMap:Map;function j1(e,t,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Pd=r),wd(e,t)},n}function z1(e,t,n){n=Xn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wd(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wd(e,t),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new A2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=K2.bind(null,e,t,n),t.then(e,e))}function Kp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xn(-1,1),t.tag=2,Mr(n,t,1))),n.lanes|=1),e)}var $2=lr.ReactCurrentOwner,Nt=!1;function Tt(e,t,n,r){t.child=e===null?v1(t,null,n,r):Ki(t,e.child,n,r)}function Jp(e,t,n,r,i){n=n.render;var o=t.ref;return Ui(t,i),r=Ff(e,t,n,r,o,i),n=jf(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,or(e,t,i)):($e&&n&&Tf(t),t.flags|=1,Tt(e,t,r,i),t.child)}function Xp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,U1(e,t,o,r,i)):(e=Ma(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(s,r)&&e.ref===t.ref)return or(e,t,i)}return t.flags|=1,e=Nr(o,r),e.ref=t.ref,e.return=t,t.child=e}function U1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ls(o,r)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,or(e,t,i)}return xd(e,t,n,r,i)}function B1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Ni,Ft),Ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(Ni,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(Ni,Ft),Ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pe(Ni,Ft),Ft|=r;return Tt(e,t,i,n),t.child}function H1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xd(e,t,n,r,i){var o=At(n)?ai:Ct.current;return o=qi(t,o),Ui(t,i),n=Ff(e,t,n,r,o,i),r=jf(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,or(e,t,i)):($e&&r&&Tf(t),t.flags|=1,Tt(e,t,n,i),t.child)}function em(e,t,n,r,i){if(At(n)){var o=!0;Xa(t)}else o=!1;if(Ui(t,i),t.stateNode===null)Ea(e,t),g1(t,n,r),vd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=At(n)?ai:Ct.current,c=qi(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Yp(t,s,r,c),gr=!1;var h=t.memoizedState;s.state=h,il(t,r,s,i),u=t.memoizedState,a!==r||h!==u||It.current||gr?(typeof d=="function"&&(yd(t,n,d,r),u=t.memoizedState),(a=gr||Wp(t,n,a,r,h,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,p1(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:fn(t.type,a),s.props=c,f=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=At(n)?ai:Ct.current,u=qi(t,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==u)&&Yp(t,s,r,u),gr=!1,h=t.memoizedState,s.state=h,il(t,r,s,i);var p=t.memoizedState;a!==f||h!==p||It.current||gr?(typeof y=="function"&&(yd(t,n,y,r),p=t.memoizedState),(c=gr||Wp(t,n,c,r,h,p,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,p,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,p,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Sd(e,t,n,r,o,i)}function Sd(e,t,n,r,i,o){H1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&jp(t,n,!1),or(e,t,o);r=t.stateNode,$2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ki(t,e.child,null,o),t.child=Ki(t,null,a,o)):Tt(e,t,a,o),t.memoizedState=r.state,i&&jp(t,n,!0),t.child}function W1(e){var t=e.stateNode;t.pendingContext?Fp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fp(e,t.context,!1),Rf(e,t.containerInfo)}function tm(e,t,n,r,i){return Qi(),Of(i),t.flags|=256,Tt(e,t,n,r),t.child}var bd={dehydrated:null,treeContext:null,retryLane:0};function Cd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Y1(e,t,n){var r=t.pendingProps,i=Fe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Pe(Fe,i&1),e===null)return md(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yl(s,r,0,null),e=ii(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cd(n),t.memoizedState=bd,e):Bf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return F2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nr(a,o):(o=ii(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Cd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=bd,r}return o=e.child,e=o.sibling,r=Nr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bf(e,t){return t=Yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,n,r){return r!==null&&Of(r),Ki(t,e.child,null,n),e=Bf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=mc(Error(N(422))),oa(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Yl({mode:"visible",children:r.children},i,0,null),o=ii(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ki(t,e.child,null,s),t.child.memoizedState=Cd(s),t.memoizedState=bd,o);if(!(t.mode&1))return oa(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=mc(o,r,void 0),oa(e,t,s,r)}if(a=(s&e.childLanes)!==0,Nt||a){if(r=at,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ir(e,i),vn(r,e,i,-1))}return qf(),r=mc(Error(N(421))),oa(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Z2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,zt=Pr(i.nextSibling),Ut=t,$e=!0,mn=null,e!==null&&(Zt[Jt++]=qn,Zt[Jt++]=Qn,Zt[Jt++]=li,qn=e.id,Qn=e.overflow,li=t),t=Bf(t,r.children),t.flags|=4096,t)}function nm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gd(e.return,t,n)}function gc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function V1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Tt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nm(e,n,t);else if(e.tag===19)nm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pe(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gc(t,!0,n,null,o);break;case"together":gc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ci|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Nr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j2(e,t,n){switch(t.tag){case 3:W1(t),Qi();break;case 5:w1(t);break;case 1:At(t.type)&&Xa(t);break;case 4:Rf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pe(nl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Y1(e,t,n):(Pe(Fe,Fe.current&1),e=or(e,t,n),e!==null?e.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return V1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,B1(e,t,n)}return or(e,t,n)}var G1,kd,q1,Q1;G1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};q1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ti(In.current);var o=null;switch(n){case"input":i=Vc(e,i),r=Vc(e,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Qc(e,i),r=Qc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Za)}Zc(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ts.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ts.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Me("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Q1=function(e,t,n,r){n!==r&&(t.flags|=4)};function _o(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z2(e,t,n){var r=t.pendingProps;switch(Ef(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return At(t.type)&&Ja(),wt(t),null;case 3:return r=t.stateNode,Zi(),Le(It),Le(Ct),Af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mn!==null&&(Ld(mn),mn=null))),kd(e,t),wt(t),null;case 5:If(t);var i=ti(hs.current);if(n=t.type,e!==null&&t.stateNode!=null)q1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return wt(t),null}if(e=ti(In.current),ra(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dn]=t,r[ds]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)Me(Ro[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":dp(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":hp(r,o),Me("invalid",r)}Zc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&na(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&na(r.textContent,a,e),i=["children",""+a]):ts.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Me("scroll",r)}switch(n){case"input":qs(r),fp(r,o,!0);break;case"textarea":qs(r),pp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Za)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=b0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dn]=t,e[ds]=r,G1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Jc(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)Me(Ro[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":dp(e,r),i=Vc(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Me("invalid",e);break;case"textarea":hp(e,r),i=Qc(e,r),Me("invalid",e);break;default:i=r}Zc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?_0(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&C0(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ns(e,u):typeof u=="number"&&ns(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ts.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Me("scroll",e):u!=null&&ff(e,o,u,s))}switch(n){case"input":qs(e),fp(e,r,!1);break;case"textarea":qs(e),pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?$i(e,!!r.multiple,o,!1):r.defaultValue!=null&&$i(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)Q1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=ti(hs.current),ti(In.current),ra(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dn]=t,(o=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=t,t.stateNode=r}return wt(t),null;case 13:if(Le(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&zt!==null&&t.mode&1&&!(t.flags&128))f1(),Qi(),t.flags|=98560,o=!1;else if(o=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Dn]=t}else Qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),o=!1}else mn!==null&&(Ld(mn),mn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?et===0&&(et=3):qf())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Zi(),kd(e,t),e===null&&us(t.stateNode.containerInfo),wt(t),null;case 10:return Df(t.type._context),wt(t),null;case 17:return At(t.type)&&Ja(),wt(t),null;case 19:if(Le(Fe),o=t.memoizedState,o===null)return wt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)_o(o,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ol(e),s!==null){for(t.flags|=128,_o(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pe(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&qe()>Xi&&(t.flags|=128,r=!0,_o(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$e)return wt(t),null}else 2*qe()-o.renderingStartTime>Xi&&n!==1073741824&&(t.flags|=128,r=!0,_o(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=qe(),t.sibling=null,n=Fe.current,Pe(Fe,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return Gf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function U2(e,t){switch(Ef(t),t.tag){case 1:return At(t.type)&&Ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(),Le(It),Le(Ct),Af(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return If(t),null;case 13:if(Le(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(Fe),null;case 4:return Zi(),null;case 10:return Df(t.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var sa=!1,St=!1,B2=typeof WeakSet=="function"?WeakSet:Set,V=null;function Li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function _d(e,t,n){try{n()}catch(r){We(e,t,r)}}var rm=!1;function H2(e,t){if(ld=qa,e=X0(),_f(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++d===r&&(u=s),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:e,selectionRange:n},qa=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,C=p.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:fn(t.type,v),C);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){We(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return p=rm,rm=!1,p}function Bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_d(t,n,o)}i=i.next}while(i!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Td(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function K1(e){var t=e.alternate;t!==null&&(e.alternate=null,K1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dn],delete t[ds],delete t[fd],delete t[_2],delete t[T2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z1(e){return e.tag===5||e.tag===3||e.tag===4}function im(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Za));else if(r!==4&&(e=e.child,e!==null))for(Ed(e,t,n),e=e.sibling;e!==null;)Ed(e,t,n),e=e.sibling}function Od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}var pt=null,pn=!1;function fr(e,t,n){for(n=n.child;n!==null;)J1(e,t,n),n=n.sibling}function J1(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:St||Li(n,t);case 6:var r=pt,i=pn;pt=null,fr(e,t,n),pt=r,pn=i,pt!==null&&(pn?(e=pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(pn?(e=pt,n=n.stateNode,e.nodeType===8?uc(e.parentNode,n):e.nodeType===1&&uc(e,n),ss(e)):uc(pt,n.stateNode));break;case 4:r=pt,i=pn,pt=n.stateNode.containerInfo,pn=!0,fr(e,t,n),pt=r,pn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_d(n,t,s),i=i.next}while(i!==r)}fr(e,t,n);break;case 1:if(!St&&(Li(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,t,a)}fr(e,t,n);break;case 21:fr(e,t,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,fr(e,t,n),St=r):fr(e,t,n);break;default:fr(e,t,n)}}function om(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B2),t.forEach(function(r){var i=J2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,pn=!1;break e;case 3:pt=a.stateNode.containerInfo,pn=!0;break e;case 4:pt=a.stateNode.containerInfo,pn=!0;break e}a=a.return}if(pt===null)throw Error(N(160));J1(o,s,i),pt=null,pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){We(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)X1(t,e),t=t.sibling}function X1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),On(e),r&4){try{Bo(3,e,e.return),Hl(3,e)}catch(v){We(e,e.return,v)}try{Bo(5,e,e.return)}catch(v){We(e,e.return,v)}}break;case 1:cn(t,e),On(e),r&512&&n!==null&&Li(n,n.return);break;case 5:if(cn(t,e),On(e),r&512&&n!==null&&Li(n,n.return),e.flags&32){var i=e.stateNode;try{ns(i,"")}catch(v){We(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&x0(i,o),Jc(a,s);var c=Jc(a,o);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?_0(i,f):d==="dangerouslySetInnerHTML"?C0(i,f):d==="children"?ns(i,f):ff(i,d,f,c)}switch(a){case"input":Gc(i,o);break;case"textarea":S0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?$i(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?$i(i,!!o.multiple,o.defaultValue,!0):$i(i,!!o.multiple,o.multiple?[]:"",!1))}i[ds]=o}catch(v){We(e,e.return,v)}}break;case 6:if(cn(t,e),On(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){We(e,e.return,v)}}break;case 3:if(cn(t,e),On(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ss(t.containerInfo)}catch(v){We(e,e.return,v)}break;case 4:cn(t,e),On(e);break;case 13:cn(t,e),On(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yf=qe())),r&4&&om(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(St=(c=St)||d,cn(t,e),St=c):cn(t,e),On(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(f=V=d;V!==null;){switch(h=V,y=h.child,h.tag){case 0:case 11:case 14:case 15:Bo(4,h,h.return);break;case 1:Li(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(v){We(r,n,v)}}break;case 5:Li(h,h.return);break;case 22:if(h.memoizedState!==null){am(f);continue}}y!==null?(y.return=h,V=y):am(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=k0("display",s))}catch(v){We(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){We(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),On(e),r&4&&om(e);break;case 21:break;default:cn(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Z1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var o=im(e);Od(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=im(e);Ed(e,a,s);break;default:throw Error(N(161))}}catch(u){We(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W2(e,t,n){V=e,ey(e)}function ey(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||sa;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=sa;var c=St;if(sa=s,(St=u)&&!c)for(V=i;V!==null;)s=V,u=s.child,s.tag===22&&s.memoizedState!==null?lm(i):u!==null?(u.return=s,V=u):lm(i);for(;o!==null;)V=o,ey(o),o=o.sibling;V=i,sa=a,St=c}sm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):sm(e)}}function sm(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:fn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Hp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ss(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}St||t.flags&512&&Td(t)}catch(h){We(t,t.return,h)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function am(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function lm(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(u){We(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){We(t,i,u)}}var o=t.return;try{Td(t)}catch(u){We(t,o,u)}break;case 5:var s=t.return;try{Td(t)}catch(u){We(t,s,u)}}}catch(u){We(t,t.return,u)}if(t===e){V=null;break}var a=t.sibling;if(a!==null){a.return=t.return,V=a;break}V=t.return}}var Y2=Math.ceil,ll=lr.ReactCurrentDispatcher,Hf=lr.ReactCurrentOwner,tn=lr.ReactCurrentBatchConfig,ve=0,at=null,Ke=null,mt=0,Ft=0,Ni=Wr(0),et=0,ys=null,ci=0,Wl=0,Wf=0,Ho=null,Lt=null,Yf=0,Xi=1/0,Yn=null,ul=!1,Pd=null,Dr=null,aa=!1,xr=null,cl=0,Wo=0,Md=null,Oa=-1,Pa=0;function Et(){return ve&6?qe():Oa!==-1?Oa:Oa=qe()}function Lr(e){return e.mode&1?ve&2&&mt!==0?mt&-mt:O2.transition!==null?(Pa===0&&(Pa=$0()),Pa):(e=_e,e!==0||(e=window.event,e=e===void 0?16:W0(e.type)),e):1}function vn(e,t,n,r){if(50<Wo)throw Wo=0,Md=null,Error(N(185));Ms(e,n,r),(!(ve&2)||e!==at)&&(e===at&&(!(ve&2)&&(Wl|=n),et===4&&vr(e,mt)),$t(e,r),n===1&&ve===0&&!(t.mode&1)&&(Xi=qe()+500,zl&&Yr()))}function $t(e,t){var n=e.callbackNode;Ox(e,t);var r=Ga(e,e===at?mt:0);if(r===0)n!==null&&yp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yp(n),t===1)e.tag===0?E2(um.bind(null,e)):u1(um.bind(null,e)),C2(function(){!(ve&6)&&Yr()}),n=null;else{switch(F0(r)){case 1:n=yf;break;case 4:n=I0;break;case 16:n=Va;break;case 536870912:n=A0;break;default:n=Va}n=ly(n,ty.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ty(e,t){if(Oa=-1,Pa=0,ve&6)throw Error(N(327));var n=e.callbackNode;if(Bi()&&e.callbackNode!==n)return null;var r=Ga(e,e===at?mt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var i=ve;ve|=2;var o=ry();(at!==e||mt!==t)&&(Yn=null,Xi=qe()+500,ri(e,t));do try{q2();break}catch(a){ny(e,a)}while(1);Mf(),ll.current=o,ve=i,Ke!==null?t=0:(at=null,mt=0,t=et)}if(t!==0){if(t===2&&(i=rd(e),i!==0&&(r=i,t=Dd(e,i))),t===1)throw n=ys,ri(e,0),vr(e,r),$t(e,qe()),n;if(t===6)vr(e,r);else{if(i=e.current.alternate,!(r&30)&&!V2(i)&&(t=dl(e,r),t===2&&(o=rd(e),o!==0&&(r=o,t=Dd(e,o))),t===1))throw n=ys,ri(e,0),vr(e,r),$t(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Kr(e,Lt,Yn);break;case 3:if(vr(e,r),(r&130023424)===r&&(t=Yf+500-qe(),10<t)){if(Ga(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=dd(Kr.bind(null,e,Lt,Yn),t);break}Kr(e,Lt,Yn);break;case 4:if(vr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-yn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y2(r/1960))-r,10<r){e.timeoutHandle=dd(Kr.bind(null,e,Lt,Yn),r);break}Kr(e,Lt,Yn);break;case 5:Kr(e,Lt,Yn);break;default:throw Error(N(329))}}}return $t(e,qe()),e.callbackNode===n?ty.bind(null,e):null}function Dd(e,t){var n=Ho;return e.current.memoizedState.isDehydrated&&(ri(e,t).flags|=256),e=dl(e,t),e!==2&&(t=Lt,Lt=n,t!==null&&Ld(t)),e}function Ld(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function V2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~Wf,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yn(t),r=1<<n;e[n]=-1,t&=~r}}function um(e){if(ve&6)throw Error(N(327));Bi();var t=Ga(e,0);if(!(t&1))return $t(e,qe()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=rd(e);r!==0&&(t=r,n=Dd(e,r))}if(n===1)throw n=ys,ri(e,0),vr(e,t),$t(e,qe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,Lt,Yn),$t(e,qe()),null}function Vf(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(Xi=qe()+500,zl&&Yr())}}function di(e){xr!==null&&xr.tag===0&&!(ve&6)&&Bi();var t=ve;ve|=1;var n=tn.transition,r=_e;try{if(tn.transition=null,_e=1,e)return e()}finally{_e=r,tn.transition=n,ve=t,!(ve&6)&&Yr()}}function Gf(){Ft=Ni.current,Le(Ni)}function ri(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b2(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:Zi(),Le(It),Le(Ct),Af();break;case 5:If(r);break;case 4:Zi();break;case 13:Le(Fe);break;case 19:Le(Fe);break;case 10:Df(r.type._context);break;case 22:case 23:Gf()}n=n.return}if(at=e,Ke=e=Nr(e.current,null),mt=Ft=t,et=0,ys=null,Wf=Wl=ci=0,Lt=Ho=null,ei!==null){for(t=0;t<ei.length;t++)if(n=ei[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ei=null}return e}function ny(e,t){do{var n=Ke;try{if(Mf(),_a.current=al,sl){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(ui=0,st=Xe=ze=null,Uo=!1,ps=0,Hf.current=null,n===null||n.return===null){et=1,ys=t,Ke=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=mt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Kp(s);if(y!==null){y.flags&=-257,Zp(y,s,a,o,t),y.mode&1&&Qp(o,c,t),t=y,u=c;var p=t.updateQueue;if(p===null){var v=new Set;v.add(u),t.updateQueue=v}else p.add(u);break e}else{if(!(t&1)){Qp(o,c,t),qf();break e}u=Error(N(426))}}else if($e&&a.mode&1){var C=Kp(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Zp(C,s,a,o,t),Of(Ji(u,a));break e}}o=u=Ji(u,a),et!==4&&(et=2),Ho===null?Ho=[o]:Ho.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=j1(o,u,t);Bp(o,m);break e;case 1:a=u;var g=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Dr===null||!Dr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=z1(o,a,t);Bp(o,k);break e}}o=o.return}while(o!==null)}oy(n)}catch(_){t=_,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(1)}function ry(){var e=ll.current;return ll.current=al,e===null?al:e}function qf(){(et===0||et===3||et===2)&&(et=4),at===null||!(ci&268435455)&&!(Wl&268435455)||vr(at,mt)}function dl(e,t){var n=ve;ve|=2;var r=ry();(at!==e||mt!==t)&&(Yn=null,ri(e,t));do try{G2();break}catch(i){ny(e,i)}while(1);if(Mf(),ve=n,ll.current=r,Ke!==null)throw Error(N(261));return at=null,mt=0,et}function G2(){for(;Ke!==null;)iy(Ke)}function q2(){for(;Ke!==null&&!wx();)iy(Ke)}function iy(e){var t=ay(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?oy(e):Ke=t,Hf.current=null}function oy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=U2(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Ke=null;return}}else if(n=z2(n,t,Ft),n!==null){Ke=n;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);et===0&&(et=5)}function Kr(e,t,n){var r=_e,i=tn.transition;try{tn.transition=null,_e=1,Q2(e,t,n,r)}finally{tn.transition=i,_e=r}return null}function Q2(e,t,n,r){do Bi();while(xr!==null);if(ve&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Px(e,o),e===at&&(Ke=at=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,ly(Va,function(){return Bi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tn.transition,tn.transition=null;var s=_e;_e=1;var a=ve;ve|=4,Hf.current=null,H2(e,n),X1(n,e),m2(ud),qa=!!ld,ud=ld=null,e.current=n,W2(n),xx(),ve=a,_e=s,tn.transition=o}else e.current=n;if(aa&&(aa=!1,xr=e,cl=i),o=e.pendingLanes,o===0&&(Dr=null),Cx(n.stateNode),$t(e,qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ul)throw ul=!1,e=Pd,Pd=null,e;return cl&1&&e.tag!==0&&Bi(),o=e.pendingLanes,o&1?e===Md?Wo++:(Wo=0,Md=e):Wo=0,Yr(),null}function Bi(){if(xr!==null){var e=F0(cl),t=tn.transition,n=_e;try{if(tn.transition=null,_e=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,cl=0,ve&6)throw Error(N(331));var i=ve;for(ve|=4,V=e.current;V!==null;){var o=V,s=o.child;if(V.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(V=c;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Bo(8,d,o)}var f=d.child;if(f!==null)f.return=d,V=f;else for(;V!==null;){d=V;var h=d.sibling,y=d.return;if(K1(d),d===c){V=null;break}if(h!==null){h.return=y,V=h;break}V=y}}}var p=o.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}V=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,V=s;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,V=m;break e}V=o.return}}var g=e.current;for(V=g;V!==null;){s=V;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,V=b;else e:for(s=g;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(_){We(a,a.return,_)}if(a===s){V=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,V=k;break e}V=a.return}}if(ve=i,Yr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Il,e)}catch{}r=!0}return r}finally{_e=n,tn.transition=t}}return!1}function cm(e,t,n){t=Ji(n,t),t=j1(e,t,1),e=Mr(e,t,1),t=Et(),e!==null&&(Ms(e,1,t),$t(e,t))}function We(e,t,n){if(e.tag===3)cm(e,e,n);else for(;t!==null;){if(t.tag===3){cm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){e=Ji(n,e),e=z1(t,e,1),t=Mr(t,e,1),e=Et(),t!==null&&(Ms(t,1,e),$t(t,e));break}}t=t.return}}function K2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Et(),e.pingedLanes|=e.suspendedLanes&n,at===e&&(mt&n)===n&&(et===4||et===3&&(mt&130023424)===mt&&500>qe()-Yf?ri(e,0):Wf|=n),$t(e,t)}function sy(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=Et();e=ir(e,t),e!==null&&(Ms(e,t,n),$t(e,n))}function Z2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sy(e,n)}function J2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),sy(e,n)}var ay;ay=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)Nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Nt=!1,j2(e,t,n);Nt=!!(e.flags&131072)}else Nt=!1,$e&&t.flags&1048576&&c1(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ea(e,t),e=t.pendingProps;var i=qi(t,Ct.current);Ui(t,n),i=Ff(null,t,r,e,i,n);var o=jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(r)?(o=!0,Xa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Ul,t.stateNode=i,i._reactInternals=t,vd(t,r,e,n),t=Sd(null,t,r,!0,o,n)):(t.tag=0,$e&&o&&Tf(t),Tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=eS(r),e=fn(r,e),i){case 0:t=xd(null,t,r,e,n);break e;case 1:t=em(null,t,r,e,n);break e;case 11:t=Jp(null,t,r,e,n);break e;case 14:t=Xp(null,t,r,fn(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),xd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),em(e,t,r,i,n);case 3:e:{if(W1(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,p1(e,t),il(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ji(Error(N(423)),t),t=tm(e,t,r,n,i);break e}else if(r!==i){i=Ji(Error(N(424)),t),t=tm(e,t,r,n,i);break e}else for(zt=Pr(t.stateNode.containerInfo.firstChild),Ut=t,$e=!0,mn=null,n=v1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){t=or(e,t,n);break e}Tt(e,t,r,n)}t=t.child}return t;case 5:return w1(t),e===null&&md(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,cd(r,i)?s=null:o!==null&&cd(r,o)&&(t.flags|=32),H1(e,t),Tt(e,t,s,n),t.child;case 6:return e===null&&md(t),null;case 13:return Y1(e,t,n);case 4:return Rf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ki(t,null,r,n):Tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),Jp(e,t,r,i,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Pe(nl,r._currentValue),r._currentValue=s,o!==null)if(xn(o.value,s)){if(o.children===i.children&&!It.current){t=or(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),gd(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gd(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ui(t,n),i=rn(i),r=r(i),t.flags|=1,Tt(e,t,r,n),t.child;case 14:return r=t.type,i=fn(r,t.pendingProps),i=fn(r.type,i),Xp(e,t,r,i,n);case 15:return U1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:fn(r,i),Ea(e,t),t.tag=1,At(r)?(e=!0,Xa(t)):e=!1,Ui(t,n),g1(t,r,i),vd(t,r,i,n),Sd(null,t,r,!0,e,n);case 19:return V1(e,t,n);case 22:return B1(e,t,n)}throw Error(N(156,t.tag))};function ly(e,t){return R0(e,t)}function X2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,r){return new X2(e,t,n,r)}function Qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eS(e){if(typeof e=="function")return Qf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pf)return 11;if(e===mf)return 14}return 2}function Nr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ma(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Qf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ci:return ii(n.children,i,o,t);case hf:s=8,i|=8;break;case Bc:return e=en(12,n,t,i|2),e.elementType=Bc,e.lanes=o,e;case Hc:return e=en(13,n,t,i),e.elementType=Hc,e.lanes=o,e;case Wc:return e=en(19,n,t,i),e.elementType=Wc,e.lanes=o,e;case y0:return Yl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m0:s=10;break e;case g0:s=9;break e;case pf:s=11;break e;case mf:s=14;break e;case mr:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=en(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ii(e,t,n,r){return e=en(7,e,r,t),e.lanes=n,e}function Yl(e,t,n,r){return e=en(22,e,r,t),e.elementType=y0,e.lanes=n,e.stateNode={isHidden:!1},e}function yc(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function vc(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kf(e,t,n,r,i,o,s,a,u){return e=new tS(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=en(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(o),e}function nS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uy(e){if(!e)return Ur;e=e._reactInternals;e:{if(mi(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(At(n))return l1(e,n,t)}return t}function cy(e,t,n,r,i,o,s,a,u){return e=Kf(n,r,!0,e,i,o,s,a,u),e.context=uy(null),n=e.current,r=Et(),i=Lr(n),o=Xn(r,i),o.callback=t??null,Mr(n,o,i),e.current.lanes=i,Ms(e,i,r),$t(e,r),e}function Vl(e,t,n,r){var i=t.current,o=Et(),s=Lr(i);return n=uy(n),t.context===null?t.context=n:t.pendingContext=n,t=Xn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mr(i,t,s),e!==null&&(vn(e,i,s,o),ka(e,i,s)),s}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zf(e,t){dm(e,t),(e=e.alternate)&&dm(e,t)}function rS(){return null}var dy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jf(e){this._internalRoot=e}Gl.prototype.render=Jf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Vl(e,t,null,null)};Gl.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;di(function(){Vl(null,e,null,null)}),t[rr]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=U0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yr.length&&t!==0&&t<yr[n].priority;n++);yr.splice(n,0,e),n===0&&H0(e)}};function Xf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fm(){}function iS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fl(s);o.call(c)}}var s=cy(t,r,e,0,null,!1,!1,"",fm);return e._reactRootContainer=s,e[rr]=s.current,us(e.nodeType===8?e.parentNode:e),di(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fl(u);a.call(c)}}var u=Kf(e,0,!1,null,null,!1,!1,"",fm);return e._reactRootContainer=u,e[rr]=u.current,us(e.nodeType===8?e.parentNode:e),di(function(){Vl(t,u,n,r)}),u}function Ql(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=fl(s);a.call(u)}}Vl(t,s,e,i)}else s=iS(n,t,e,i,r);return fl(s)}j0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=No(t.pendingLanes);n!==0&&(vf(t,n|1),$t(t,qe()),!(ve&6)&&(Xi=qe()+500,Yr()))}break;case 13:di(function(){var r=ir(e,1);if(r!==null){var i=Et();vn(r,e,1,i)}}),Zf(e,1)}};wf=function(e){if(e.tag===13){var t=ir(e,134217728);if(t!==null){var n=Et();vn(t,e,134217728,n)}Zf(e,134217728)}};z0=function(e){if(e.tag===13){var t=Lr(e),n=ir(e,t);if(n!==null){var r=Et();vn(n,e,t,r)}Zf(e,t)}};U0=function(){return _e};B0=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};ed=function(e,t,n){switch(t){case"input":if(Gc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jl(r);if(!i)throw Error(N(90));w0(r),Gc(r,i)}}}break;case"textarea":S0(e,n);break;case"select":t=n.value,t!=null&&$i(e,!!n.multiple,t,!1)}};O0=Vf;P0=di;var oS={usingClientEntryPoint:!1,Events:[Ls,Ei,jl,T0,E0,Vf]},To={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sS={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=L0(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Il=la.inject(sS),Rn=la}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(t))throw Error(N(200));return nS(e,t,null,n)};Yt.createRoot=function(e,t){if(!Xf(e))throw Error(N(299));var n=!1,r="",i=dy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kf(e,1,!1,null,null,n,!1,r,i),e[rr]=t.current,us(e.nodeType===8?e.parentNode:e),new Jf(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=L0(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return di(e)};Yt.hydrate=function(e,t,n){if(!ql(t))throw Error(N(200));return Ql(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!Xf(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=dy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=cy(t,null,e,1,n??null,i,!1,o,s),e[rr]=t.current,us(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gl(t)};Yt.render=function(e,t,n){if(!ql(t))throw Error(N(200));return Ql(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!ql(e))throw Error(N(40));return e._reactRootContainer?(di(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[rr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Vf;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ql(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Yt})(rx);var hm=Ba;jc.createRoot=hm.createRoot,jc.hydrateRoot=hm.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}var Sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sr||(Sr={}));const pm="popstate";function aS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Nd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hl(i)}return uS(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lS(){return Math.random().toString(36).substr(2,8)}function mm(e,t){return{usr:e.state,key:e.key,idx:t}}function Nd(e,t,n,r){return n===void 0&&(n=null),vs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?lo(t):t,{state:n,key:t&&t.key||r||lS()})}function hl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function lo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Sr.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(vs({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Sr.Pop;let C=d(),m=C==null?null:C-c;c=C,u&&u({action:a,location:v.location,delta:m})}function h(C,m){a=Sr.Push;let g=Nd(v.location,C,m);n&&n(g,C),c=d()+1;let b=mm(g,c),k=v.createHref(g);try{s.pushState(b,"",k)}catch{i.location.assign(k)}o&&u&&u({action:a,location:v.location,delta:1})}function y(C,m){a=Sr.Replace;let g=Nd(v.location,C,m);n&&n(g,C),c=d();let b=mm(g,c),k=v.createHref(g);s.replaceState(b,"",k),o&&u&&u({action:a,location:v.location,delta:0})}function p(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof C=="string"?C:hl(C);return Ze(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let v={get action(){return a},get location(){return e(i,s)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(pm,f),u=C,()=>{i.removeEventListener(pm,f),u=null}},createHref(C){return t(i,C)},createURL:p,encodeLocation(C){let m=p(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(C){return s.go(C)}};return v}var gm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gm||(gm={}));function cS(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?lo(t):t,i=th(r.pathname||"/",n);if(i==null)return null;let o=fy(e);dS(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=xS(o[a],CS(i));return s}function fy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Rr([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fy(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:vS(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of hy(o.path))i(o,s,u)}),t}function hy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=hy(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function dS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:wS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fS=/^:\w+$/,hS=3,pS=2,mS=1,gS=10,yS=-2,ym=e=>e==="*";function vS(e,t){let n=e.split("/"),r=n.length;return n.some(ym)&&(r+=yS),t&&(r+=pS),n.filter(i=>!ym(i)).reduce((i,o)=>i+(fS.test(o)?hS:o===""?mS:gS),r)}function wS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],u=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=SS({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:Rr([i,d.pathname]),pathnameBase:ES(Rr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Rr([i,d.pathnameBase]))}return o}function SS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let h=a[f]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return c[d]=kS(a[f]||"",d),c},{}),pathname:o,pathnameBase:s,pattern:e}}function bS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),eh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function CS(e){try{return decodeURI(e)}catch(t){return eh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kS(e,t){try{return decodeURIComponent(e)}catch(n){return eh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function th(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function _S(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?lo(e):e;return{pathname:n?n.startsWith("/")?n:TS(n,t):t,search:OS(r),hash:PS(i)}}function TS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function py(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function my(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=lo(e):(i=vs({},e),Ze(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let u=_S(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Rr=e=>e.join("/").replace(/\/\/+/g,"/"),ES=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),OS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,PS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function MS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}const gy=x.createContext(null),DS=x.createContext(null),uo=x.createContext(null),Kl=x.createContext(null),gi=x.createContext({outlet:null,matches:[],isDataRoute:!1}),yy=x.createContext(null);function LS(e,t){let{relative:n}=t===void 0?{}:t;Rs()||Ze(!1);let{basename:r,navigator:i}=x.useContext(uo),{hash:o,pathname:s,search:a}=wy(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Rr([r,s])),i.createHref({pathname:u,search:a,hash:o})}function Rs(){return x.useContext(Kl)!=null}function jn(){return Rs()||Ze(!1),x.useContext(Kl).location}function vy(e){x.useContext(uo).static||x.useLayoutEffect(e)}function Re(){let{isDataRoute:e}=x.useContext(gi);return e?YS():NS()}function NS(){Rs()||Ze(!1);let{basename:e,navigator:t}=x.useContext(uo),{matches:n}=x.useContext(gi),{pathname:r}=jn(),i=JSON.stringify(py(n).map(a=>a.pathnameBase)),o=x.useRef(!1);return vy(()=>{o.current=!0}),x.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let c=my(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Rr([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,i,r])}function wy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(gi),{pathname:i}=jn(),o=JSON.stringify(py(r).map(s=>s.pathnameBase));return x.useMemo(()=>my(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function RS(e,t){return IS(e,t)}function IS(e,t,n){Rs()||Ze(!1);let{navigator:r}=x.useContext(uo),{matches:i}=x.useContext(gi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=jn(),c;if(t){var d;let v=typeof t=="string"?lo(t):t;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||Ze(!1),c=v}else c=u;let f=c.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",y=cS(e,{pathname:h}),p=zS(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Rr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Rr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&p?x.createElement(Kl.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Sr.Pop}},p):p}function AS(){let e=WS(),t=MS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}const $S=x.createElement(AS,null);class FS extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(gi.Provider,{value:this.props.routeContext},x.createElement(yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jS(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(gy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(gi.Provider,{value:t},r)}function zS(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id]));a>=0||Ze(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,u,c)=>{let d=u.route.id?s==null?void 0:s[u.route.id]:null,f=null;n&&(f=u.route.errorElement||$S);let h=t.concat(o.slice(0,c+1)),y=()=>{let p;return d?p=f:u.route.Component?p=x.createElement(u.route.Component,null):u.route.element?p=u.route.element:p=a,x.createElement(jS,{match:u,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:p})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?x.createElement(FS,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var Rd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Rd||(Rd={}));var ws;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ws||(ws={}));function US(e){let t=x.useContext(gy);return t||Ze(!1),t}function BS(e){let t=x.useContext(DS);return t||Ze(!1),t}function HS(e){let t=x.useContext(gi);return t||Ze(!1),t}function xy(e){let t=HS(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function WS(){var e;let t=x.useContext(yy),n=BS(ws.UseRouteError),r=xy(ws.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function YS(){let{router:e}=US(Rd.UseNavigateStable),t=xy(ws.UseNavigateStable),n=x.useRef(!1);return vy(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,pl({fromRouteId:t},o)))},[e,t])}function He(e){Ze(!1)}function VS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:o,static:s=!1}=e;Rs()&&Ze(!1);let a=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=lo(r));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:y="default"}=r,p=x.useMemo(()=>{let v=th(c,a);return v==null?null:{location:{pathname:v,search:d,hash:f,state:h,key:y},navigationType:i}},[a,c,d,f,h,y,i]);return p==null?null:x.createElement(uo.Provider,{value:u},x.createElement(Kl.Provider,{children:n,value:p}))}function GS(e){let{children:t,location:n}=e;return RS(Id(t),n)}var vm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(vm||(vm={}));new Promise(()=>{});function Id(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Id(r.props.children,o));return}r.type!==He&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Id(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ad(){return Ad=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ad.apply(this,arguments)}function qS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function QS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function KS(e,t){return e.button===0&&(!t||t==="_self")&&!QS(e)}const ZS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JS(e){let{basename:t,children:n,window:r}=e,i=x.useRef();i.current==null&&(i.current=aS({window:r,v5Compat:!0}));let o=i.current,[s,a]=x.useState({action:o.action,location:o.location});return x.useLayoutEffect(()=>o.listen(a),[o]),x.createElement(VS,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const XS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zl=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:d}=t,f=qS(t,ZS),{basename:h}=x.useContext(uo),y,p=!1;if(typeof c=="string"&&eb.test(c)&&(y=c,XS))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),k=th(b.pathname,h);b.origin===g.origin&&k!=null?c=k+b.search+b.hash:p=!0}catch{}let v=LS(c,{relative:i}),C=tb(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:i});function m(g){r&&r(g),g.defaultPrevented||C(g)}return x.createElement("a",Ad({},f,{href:y||v,onClick:p||o?r:m,ref:n,target:u}))});var wm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(wm||(wm={}));var xm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xm||(xm={}));function tb(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Re(),u=jn(),c=wy(e,{relative:s});return x.useCallback(d=>{if(KS(d,n)){d.preventDefault();let f=r!==void 0?r:hl(u)===hl(c);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[u,a,c,r,i,n,e,o,s])}const Sy="/assets/TNL-logo-7ccd046a.png";var ml={},nb={get exports(){return ml},set exports(e){ml=e}},Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=Symbol.for("react.element"),rh=Symbol.for("react.portal"),Jl=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),eu=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),rb=Symbol.for("react.server_context"),ru=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),au=Symbol.for("react.lazy"),ib=Symbol.for("react.offscreen"),by;by=Symbol.for("react.module.reference");function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nh:switch(e=e.type,e){case Jl:case eu:case Xl:case iu:case ou:return e;default:switch(e=e&&e.$$typeof,e){case rb:case nu:case ru:case au:case su:case tu:return e;default:return t}}case rh:return t}}}Te.ContextConsumer=nu;Te.ContextProvider=tu;Te.Element=nh;Te.ForwardRef=ru;Te.Fragment=Jl;Te.Lazy=au;Te.Memo=su;Te.Portal=rh;Te.Profiler=eu;Te.StrictMode=Xl;Te.Suspense=iu;Te.SuspenseList=ou;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(e){return sn(e)===nu};Te.isContextProvider=function(e){return sn(e)===tu};Te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nh};Te.isForwardRef=function(e){return sn(e)===ru};Te.isFragment=function(e){return sn(e)===Jl};Te.isLazy=function(e){return sn(e)===au};Te.isMemo=function(e){return sn(e)===su};Te.isPortal=function(e){return sn(e)===rh};Te.isProfiler=function(e){return sn(e)===eu};Te.isStrictMode=function(e){return sn(e)===Xl};Te.isSuspense=function(e){return sn(e)===iu};Te.isSuspenseList=function(e){return sn(e)===ou};Te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jl||e===eu||e===Xl||e===iu||e===ou||e===ib||typeof e=="object"&&e!==null&&(e.$$typeof===au||e.$$typeof===su||e.$$typeof===tu||e.$$typeof===nu||e.$$typeof===ru||e.$$typeof===by||e.getModuleId!==void 0)};Te.typeOf=sn;(function(e){e.exports=Te})(nb);function ob(e){function t(A,F,H,X,E){for(var de=0,j=0,Be=0,be=0,ke,ie,ct=0,Mt=0,we,yt=we=ke=0,Ce=0,dt=0,yo=0,ft=0,Ys=H.length,vo=Ys-1,un,te="",Ye="",Yu="",Vu="",dr;Ce<Ys;){if(ie=H.charCodeAt(Ce),Ce===vo&&j+be+Be+de!==0&&(j!==0&&(ie=j===47?10:47),be=Be=de=0,Ys++,vo++),j+be+Be+de===0){if(Ce===vo&&(0<dt&&(te=te.replace(h,"")),0<te.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:te+=H.charAt(Ce)}ie=59}switch(ie){case 123:for(te=te.trim(),ke=te.charCodeAt(0),we=1,ft=++Ce;Ce<Ys;){switch(ie=H.charCodeAt(Ce)){case 123:we++;break;case 125:we--;break;case 47:switch(ie=H.charCodeAt(Ce+1)){case 42:case 47:e:{for(yt=Ce+1;yt<vo;++yt)switch(H.charCodeAt(yt)){case 47:if(ie===42&&H.charCodeAt(yt-1)===42&&Ce+2!==yt){Ce=yt+1;break e}break;case 10:if(ie===47){Ce=yt+1;break e}}Ce=yt}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;Ce++<vo&&H.charCodeAt(Ce)!==ie;);}if(we===0)break;Ce++}switch(we=H.substring(ft,Ce),ke===0&&(ke=(te=te.replace(f,"").trim()).charCodeAt(0)),ke){case 64:switch(0<dt&&(te=te.replace(h,"")),ie=te.charCodeAt(1),ie){case 100:case 109:case 115:case 45:dt=F;break;default:dt=J}if(we=t(F,dt,we,ie,E+1),ft=we.length,0<O&&(dt=n(J,te,yo),dr=a(3,we,dt,F,Z,G,ft,ie,E,X),te=dt.join(""),dr!==void 0&&(ft=(we=dr.trim()).length)===0&&(ie=0,we="")),0<ft)switch(ie){case 115:te=te.replace(M,s);case 100:case 109:case 45:we=te+"{"+we+"}";break;case 107:te=te.replace(g,"$1 $2"),we=te+"{"+we+"}",we=B===1||B===2&&o("@"+we,3)?"@-webkit-"+we+"@"+we:"@"+we;break;default:we=te+we,X===112&&(we=(Ye+=we,""))}else we="";break;default:we=t(F,n(F,te,yo),we,X,E+1)}Yu+=we,we=yo=dt=yt=ke=0,te="",ie=H.charCodeAt(++Ce);break;case 125:case 59:if(te=(0<dt?te.replace(h,""):te).trim(),1<(ft=te.length))switch(yt===0&&(ke=te.charCodeAt(0),ke===45||96<ke&&123>ke)&&(ft=(te=te.replace(" ",":")).length),0<O&&(dr=a(1,te,F,A,Z,G,Ye.length,X,E,X))!==void 0&&(ft=(te=dr.trim()).length)===0&&(te="\0\0"),ke=te.charCodeAt(0),ie=te.charCodeAt(1),ke){case 0:break;case 64:if(ie===105||ie===99){Vu+=te+H.charAt(Ce);break}default:te.charCodeAt(ft-1)!==58&&(Ye+=i(te,ke,ie,te.charCodeAt(2)))}yo=dt=yt=ke=0,te="",ie=H.charCodeAt(++Ce)}}switch(ie){case 13:case 10:j===47?j=0:1+ke===0&&X!==107&&0<te.length&&(dt=1,te+="\0"),0<O*Q&&a(0,te,F,A,Z,G,Ye.length,X,E,X),G=1,Z++;break;case 59:case 125:if(j+be+Be+de===0){G++;break}default:switch(G++,un=H.charAt(Ce),ie){case 9:case 32:if(be+de+j===0)switch(ct){case 44:case 58:case 9:case 32:un="";break;default:ie!==32&&(un=" ")}break;case 0:un="\\0";break;case 12:un="\\f";break;case 11:un="\\v";break;case 38:be+j+de===0&&(dt=yo=1,un="\f"+un);break;case 108:if(be+j+de+$===0&&0<yt)switch(Ce-yt){case 2:ct===112&&H.charCodeAt(Ce-3)===58&&($=ct);case 8:Mt===111&&($=Mt)}break;case 58:be+j+de===0&&(yt=Ce);break;case 44:j+Be+be+de===0&&(dt=1,un+="\r");break;case 34:case 39:j===0&&(be=be===ie?0:be===0?ie:be);break;case 91:be+j+Be===0&&de++;break;case 93:be+j+Be===0&&de--;break;case 41:be+j+de===0&&Be--;break;case 40:if(be+j+de===0){if(ke===0)switch(2*ct+3*Mt){case 533:break;default:ke=1}Be++}break;case 64:j+Be+be+de+yt+we===0&&(we=1);break;case 42:case 47:if(!(0<be+de+Be))switch(j){case 0:switch(2*ie+3*H.charCodeAt(Ce+1)){case 235:j=47;break;case 220:ft=Ce,j=42}break;case 42:ie===47&&ct===42&&ft+2!==Ce&&(H.charCodeAt(ft+2)===33&&(Ye+=H.substring(ft,Ce+1)),un="",j=0)}}j===0&&(te+=un)}Mt=ct,ct=ie,Ce++}if(ft=Ye.length,0<ft){if(dt=F,0<O&&(dr=a(2,Ye,dt,A,Z,G,ft,X,E,X),dr!==void 0&&(Ye=dr).length===0))return Vu+Ye+Yu;if(Ye=dt.join(",")+"{"+Ye+"}",B*$!==0){switch(B!==2||o(Ye,2)||($=0),$){case 111:Ye=Ye.replace(k,":-moz-$1")+Ye;break;case 112:Ye=Ye.replace(b,"::-webkit-input-$1")+Ye.replace(b,"::-moz-$1")+Ye.replace(b,":-ms-input-$1")+Ye}$=0}}return Vu+Ye+Yu}function n(A,F,H){var X=F.trim().split(C);F=X;var E=X.length,de=A.length;switch(de){case 0:case 1:var j=0;for(A=de===0?"":A[0]+" ";j<E;++j)F[j]=r(A,F[j],H).trim();break;default:var Be=j=0;for(F=[];j<E;++j)for(var be=0;be<de;++be)F[Be++]=r(A[be]+" ",X[j],H).trim()}return F}function r(A,F,H){var X=F.charCodeAt(0);switch(33>X&&(X=(F=F.trim()).charCodeAt(0)),X){case 38:return F.replace(m,"$1"+A.trim());case 58:return A.trim()+F.replace(m,"$1"+A.trim());default:if(0<1*H&&0<F.indexOf("\f"))return F.replace(m,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+F}function i(A,F,H,X){var E=A+";",de=2*F+3*H+4*X;if(de===944){A=E.indexOf(":",9)+1;var j=E.substring(A,E.length-1).trim();return j=E.substring(0,A).trim()+j+";",B===1||B===2&&o(j,1)?"-webkit-"+j+j:j}if(B===0||B===2&&!o(E,1))return E;switch(de){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(se,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return j=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+E+"-ms-flex-pack"+j+E;case 1005:return p.test(E)?E.replace(y,":-webkit-")+E.replace(y,":-moz-")+E:E;case 1e3:switch(j=E.substring(13).trim(),F=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(F)){case 226:j=E.replace(_,"tb");break;case 232:j=E.replace(_,"tb-rl");break;case 220:j=E.replace(_,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+j+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(F=(E=A).length-10,j=(E.charCodeAt(F)===33?E.substring(0,F):E).substring(A.indexOf(":",7)+1).trim(),de=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:E=E.replace(j,"-webkit-"+j)+";"+E;break;case 207:case 102:E=E.replace(j,"-webkit-"+(102<de?"inline-":"")+"box")+";"+E.replace(j,"-webkit-"+j)+";"+E.replace(j,"-ms-"+j+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return j=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+j+"-ms-flex-"+j+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(D,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(D,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(z.test(A)===!0)return(j=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),F,H,X).replace(":fill-available",":stretch"):E.replace(j,"-webkit-"+j)+E.replace(j,"-moz-"+j.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,H+X===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+E}return E}function o(A,F){var H=A.indexOf(F===1?":":"{"),X=A.substring(0,F!==3?H:10);return H=A.substring(H+1,A.length-1),W(F!==2?X:X.replace(q,"$1"),H,F)}function s(A,F){var H=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return H!==F+";"?H.replace(L," or ($1)").substring(4):"("+F+")"}function a(A,F,H,X,E,de,j,Be,be,ke){for(var ie=0,ct=F,Mt;ie<O;++ie)switch(Mt=T[ie].call(d,A,ct,H,X,E,de,j,Be,be,ke)){case void 0:case!1:case!0:case null:break;default:ct=Mt}if(ct!==F)return ct}function u(A){switch(A){case void 0:case null:O=T.length=0;break;default:if(typeof A=="function")T[O++]=A;else if(typeof A=="object")for(var F=0,H=A.length;F<H;++F)u(A[F]);else Q=!!A|0}return u}function c(A){return A=A.prefix,A!==void 0&&(W=null,A?typeof A!="function"?B=1:(B=2,W=A):B=0),c}function d(A,F){var H=A;if(33>H.charCodeAt(0)&&(H=H.trim()),ee=H,H=[ee],0<O){var X=a(-1,F,H,H,Z,G,0,0,0,0);X!==void 0&&typeof X=="string"&&(F=X)}var E=t(J,H,F,0,0);return 0<O&&(X=a(-2,E,H,H,Z,G,E.length,0,0,0),X!==void 0&&(E=X)),ee="",$=0,G=Z=1,E}var f=/^\0+/g,h=/[\0\r\f]/g,y=/: */g,p=/zoo|gra/,v=/([,: ])(transform)/g,C=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,k=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,D=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,G=1,Z=1,$=0,B=1,J=[],T=[],O=0,W=null,Q=0,ee="";return d.use=u,d.set=c,e!==void 0&&c(e),d}var sb={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ab(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var lb=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sm=ab(function(e){return lb.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$d={},ub={get exports(){return $d},set exports(e){$d=e}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,ih=lt?Symbol.for("react.element"):60103,oh=lt?Symbol.for("react.portal"):60106,lu=lt?Symbol.for("react.fragment"):60107,uu=lt?Symbol.for("react.strict_mode"):60108,cu=lt?Symbol.for("react.profiler"):60114,du=lt?Symbol.for("react.provider"):60109,fu=lt?Symbol.for("react.context"):60110,sh=lt?Symbol.for("react.async_mode"):60111,hu=lt?Symbol.for("react.concurrent_mode"):60111,pu=lt?Symbol.for("react.forward_ref"):60112,mu=lt?Symbol.for("react.suspense"):60113,cb=lt?Symbol.for("react.suspense_list"):60120,gu=lt?Symbol.for("react.memo"):60115,yu=lt?Symbol.for("react.lazy"):60116,db=lt?Symbol.for("react.block"):60121,fb=lt?Symbol.for("react.fundamental"):60117,hb=lt?Symbol.for("react.responder"):60118,pb=lt?Symbol.for("react.scope"):60119;function Gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ih:switch(e=e.type,e){case sh:case hu:case lu:case cu:case uu:case mu:return e;default:switch(e=e&&e.$$typeof,e){case fu:case pu:case yu:case gu:case du:return e;default:return t}}case oh:return t}}}function Cy(e){return Gt(e)===hu}Ee.AsyncMode=sh;Ee.ConcurrentMode=hu;Ee.ContextConsumer=fu;Ee.ContextProvider=du;Ee.Element=ih;Ee.ForwardRef=pu;Ee.Fragment=lu;Ee.Lazy=yu;Ee.Memo=gu;Ee.Portal=oh;Ee.Profiler=cu;Ee.StrictMode=uu;Ee.Suspense=mu;Ee.isAsyncMode=function(e){return Cy(e)||Gt(e)===sh};Ee.isConcurrentMode=Cy;Ee.isContextConsumer=function(e){return Gt(e)===fu};Ee.isContextProvider=function(e){return Gt(e)===du};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ih};Ee.isForwardRef=function(e){return Gt(e)===pu};Ee.isFragment=function(e){return Gt(e)===lu};Ee.isLazy=function(e){return Gt(e)===yu};Ee.isMemo=function(e){return Gt(e)===gu};Ee.isPortal=function(e){return Gt(e)===oh};Ee.isProfiler=function(e){return Gt(e)===cu};Ee.isStrictMode=function(e){return Gt(e)===uu};Ee.isSuspense=function(e){return Gt(e)===mu};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lu||e===hu||e===cu||e===uu||e===mu||e===cb||typeof e=="object"&&e!==null&&(e.$$typeof===yu||e.$$typeof===gu||e.$$typeof===du||e.$$typeof===fu||e.$$typeof===pu||e.$$typeof===fb||e.$$typeof===hb||e.$$typeof===pb||e.$$typeof===db)};Ee.typeOf=Gt;(function(e){e.exports=Ee})(ub);var ah=$d,mb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ky={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lh={};lh[ah.ForwardRef]=yb;lh[ah.Memo]=ky;function bm(e){return ah.isMemo(e)?ky:lh[e.$$typeof]||mb}var vb=Object.defineProperty,wb=Object.getOwnPropertyNames,Cm=Object.getOwnPropertySymbols,xb=Object.getOwnPropertyDescriptor,Sb=Object.getPrototypeOf,km=Object.prototype;function _y(e,t,n){if(typeof t!="string"){if(km){var r=Sb(t);r&&r!==km&&_y(e,r,n)}var i=wb(t);Cm&&(i=i.concat(Cm(t)));for(var o=bm(e),s=bm(t),a=0;a<i.length;++a){var u=i[a];if(!gb[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])){var c=xb(t,u);try{vb(e,u,c)}catch{}}}}return e}var bb=_y;function Kn(){return(Kn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _m=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Fd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ml.typeOf(e)},gl=Object.freeze([]),Ir=Object.freeze({});function xs(e){return typeof e=="function"}function Tm(e){return e.displayName||e.name||"Component"}function uh(e){return e&&typeof e.styledComponentId=="string"}var eo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ch=typeof window<"u"&&"HTMLElement"in window,Cb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Is(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var kb=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Is(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Da=new Map,yl=new Map,Yo=1,ua=function(e){if(Da.has(e))return Da.get(e);for(;yl.has(Yo);)Yo++;var t=Yo++;return Da.set(e,t),yl.set(t,e),t},_b=function(e){return yl.get(e)},Tb=function(e,t){t>=Yo&&(Yo=t+1),Da.set(e,t),yl.set(t,e)},Eb="style["+eo+'][data-styled-version="5.3.10"]',Ob=new RegExp("^"+eo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Pb=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Mb=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(Ob);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Tb(c,u),Pb(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(s)}}},Db=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ty=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(eo))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(eo,"active"),r.setAttribute("data-styled-version","5.3.10");var s=Db();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Lb=function(){function e(n){var r=this.element=Ty(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var u=o[s];if(u.ownerNode===i)return u}Is(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Nb=function(){function e(n){var r=this.element=Ty(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Rb=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Em=ch,Ib={isServer:!ch,useCSSOMInjection:!Cb},Ey=function(){function e(n,r,i){n===void 0&&(n=Ir),r===void 0&&(r={}),this.options=Kn({},Ib,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ch&&Em&&(Em=!1,function(o){for(var s=document.querySelectorAll(Eb),a=0,u=s.length;a<u;a++){var c=s[a];c&&c.getAttribute(eo)!=="active"&&(Mb(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return ua(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Kn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new Rb(s):o?new Lb(s):new Nb(s),new kb(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ua(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ua(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ua(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=_b(s);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(s);if(u&&c&&u.size){var d=eo+".g"+s+'[id="'+a+'"]',f="";u!==void 0&&u.forEach(function(h){h.length>0&&(f+=h+",")}),o+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),Ab=/(a)(d)/gi,Om=function(e){return String.fromCharCode(e+(e>25?39:97))};function jd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Om(t%52)+n;return(Om(t%52)+n).replace(Ab,"$1-$2")}var Ri=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Oy=function(e){return Ri(5381,e)};function $b(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xs(n)&&!uh(n))return!1}return!0}var Fb=Oy("5.3.10"),jb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$b(t),this.componentId=n,this.baseHash=Ri(Fb,n),this.baseStyle=r,Ey.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=to(this.rules,t,n,r).join(""),a=jd(Ri(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var u=r(s,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=Ri(this.baseHash,r.hash),f="",h=0;h<c;h++){var y=this.rules[h];if(typeof y=="string")f+=y;else if(y){var p=to(y,t,n,r),v=Array.isArray(p)?p.join(""):p;d=Ri(d,v+h),f+=v}}if(f){var C=jd(d>>>0);if(!n.hasNameForId(i,C)){var m=r(f,"."+C,void 0,i);n.insertRules(i,C,m)}o.push(C)}}return o.join(" ")},e}(),zb=/^\s*\/\/.*$/gm,Ub=[":","[",".","#"];function Bb(e){var t,n,r,i,o=e===void 0?Ir:e,s=o.options,a=s===void 0?Ir:s,u=o.plugins,c=u===void 0?gl:u,d=new ob(a),f=[],h=function(v){function C(m){if(m)try{v(m+"}")}catch{}}return function(m,g,b,k,_,M,L,D,q,z){switch(m){case 1:if(q===0&&g.charCodeAt(0)===64)return v(g+";"),"";break;case 2:if(D===0)return g+"/*|*/";break;case 3:switch(D){case 102:case 112:return v(b[0]+g),"";default:return g+(z===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(C)}}}(function(v){f.push(v)}),y=function(v,C,m){return C===0&&Ub.indexOf(m[n.length])!==-1||m.match(i)?v:"."+t};function p(v,C,m,g){g===void 0&&(g="&");var b=v.replace(zb,""),k=C&&m?m+" "+C+" { "+b+" }":b;return t=g,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!C?"":C,k)}return d.use([].concat(c,[function(v,C,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,y))},h,function(v){if(v===-2){var C=f;return f=[],C}}])),p.hash=c.length?c.reduce(function(v,C){return C.name||Is(15),Ri(v,C.name)},5381).toString():"",p}var Py=re.createContext();Py.Consumer;var My=re.createContext(),Hb=(My.Consumer,new Ey),zd=Bb();function Wb(){return x.useContext(Py)||Hb}function Yb(){return x.useContext(My)||zd}var Dy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=zd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Is(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=zd),this.name+t.hash},e}(),Vb=/([A-Z])/,Gb=/([A-Z])/g,qb=/^ms-/,Qb=function(e){return"-"+e.toLowerCase()};function Pm(e){return Vb.test(e)?e.replace(Gb,Qb).replace(qb,"-ms-"):e}var Mm=function(e){return e==null||e===!1||e===""};function to(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=to(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Mm(e))return"";if(uh(e))return"."+e.styledComponentId;if(xs(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return to(u,t,n,r)}var c;return e instanceof Dy?n?(e.inject(n,r),e.getName(r)):e:Fd(e)?function d(f,h){var y,p,v=[];for(var C in f)f.hasOwnProperty(C)&&!Mm(f[C])&&(Array.isArray(f[C])&&f[C].isCss||xs(f[C])?v.push(Pm(C)+":",f[C],";"):Fd(f[C])?v.push.apply(v,d(f[C],C)):v.push(Pm(C)+": "+(y=C,(p=f[C])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||y in sb||y.startsWith("--")?String(p).trim():p+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var Dm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ly(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return xs(e)||Fd(e)?Dm(to(_m(gl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Dm(to(_m(e,n)))}var Kb=function(e,t,n){return n===void 0&&(n=Ir),e.theme!==n.theme&&e.theme||t||n.theme},Zb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jb=/(^-|-$)/g;function xc(e){return e.replace(Zb,"-").replace(Jb,"")}var Ny=function(e){return jd(Oy(e)>>>0)};function ca(e){return typeof e=="string"&&!0}var Ud=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Xb=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function e5(e,t,n){var r=e[n];Ud(t)&&Ud(r)?Ry(r,t):e[n]=t}function Ry(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(Ud(s))for(var a in s)Xb(a)&&e5(e,s[a],a)}return e}var Iy=re.createContext();Iy.Consumer;var Sc={};function Ay(e,t,n){var r=uh(e),i=!ca(e),o=t.attrs,s=o===void 0?gl:o,a=t.componentId,u=a===void 0?function(g,b){var k=typeof g!="string"?"sc":xc(g);Sc[k]=(Sc[k]||0)+1;var _=k+"-"+Ny("5.3.10"+k+Sc[k]);return b?b+"-"+_:_}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(g){return ca(g)?"styled."+g:"Styled("+Tm(g)+")"}(e):c,f=t.displayName&&t.componentId?xc(t.displayName)+"-"+t.componentId:t.componentId||u,h=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(g,b,k){return e.shouldForwardProp(g,b,k)&&t.shouldForwardProp(g,b,k)}:e.shouldForwardProp);var p,v=new jb(n,f,r?e.componentStyle:void 0),C=v.isStatic&&s.length===0,m=function(g,b){return function(k,_,M,L){var D=k.attrs,q=k.componentStyle,z=k.defaultProps,se=k.foldedComponentIds,G=k.shouldForwardProp,Z=k.styledComponentId,$=k.target,B=function(X,E,de){X===void 0&&(X=Ir);var j=Kn({},E,{theme:X}),Be={};return de.forEach(function(be){var ke,ie,ct,Mt=be;for(ke in xs(Mt)&&(Mt=Mt(j)),Mt)j[ke]=Be[ke]=ke==="className"?(ie=Be[ke],ct=Mt[ke],ie&&ct?ie+" "+ct:ie||ct):Mt[ke]}),[j,Be]}(Kb(_,x.useContext(Iy),z)||Ir,_,D),J=B[0],T=B[1],O=function(X,E,de,j){var Be=Wb(),be=Yb(),ke=E?X.generateAndInjectStyles(Ir,Be,be):X.generateAndInjectStyles(de,Be,be);return ke}(q,L,J),W=M,Q=T.$as||_.$as||T.as||_.as||$,ee=ca(Q),A=T!==_?Kn({},_,{},T):_,F={};for(var H in A)H[0]!=="$"&&H!=="as"&&(H==="forwardedAs"?F.as=A[H]:(G?G(H,Sm,Q):!ee||Sm(H))&&(F[H]=A[H]));return _.style&&T.style!==_.style&&(F.style=Kn({},_.style,{},T.style)),F.className=Array.prototype.concat(se,Z,O!==Z?O:null,_.className,T.className).filter(Boolean).join(" "),F.ref=W,x.createElement(Q,F)}(p,g,b,C)};return m.displayName=d,(p=re.forwardRef(m)).attrs=h,p.componentStyle=v,p.displayName=d,p.shouldForwardProp=y,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):gl,p.styledComponentId=f,p.target=r?e.target:e,p.withComponent=function(g){var b=t.componentId,k=function(M,L){if(M==null)return{};var D,q,z={},se=Object.keys(M);for(q=0;q<se.length;q++)D=se[q],L.indexOf(D)>=0||(z[D]=M[D]);return z}(t,["componentId"]),_=b&&b+"-"+(ca(g)?g:xc(Tm(g)));return Ay(g,Kn({},k,{attrs:h,componentId:_}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?Ry({},e.defaultProps,g):g}}),Object.defineProperty(p,"toString",{value:function(){return"."+p.styledComponentId}}),i&&bb(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var Bd=function(e){return function t(n,r,i){if(i===void 0&&(i=Ir),!ml.isValidElementType(r))return Is(1,String(r));var o=function(){return n(r,i,Ly.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Kn({},i,{},s))},o.attrs=function(s){return t(n,r,Kn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(Ay,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bd[e]=Bd(e)});function vu(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ly.apply(void 0,[e].concat(n)).join(""),o=Ny(i);return new Dy(o,i)}const w=Bd,Qe=({strokeColor:e})=>l("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 11.6661L11 1.66614M11 1.66614H1M11 1.66614V11.6661",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),t5=()=>l("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),$y=()=>l("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 18C3.33579 15.5226 6.50702 14 10 14C13.493 14 16.6642 15.5226 19 18M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),n5=()=>l("svg",{width:"56",height:"44",viewBox:"0 0 56 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M12.8947 2.25694C14.4912 0.766119 16.0877 0.0207053 17.6842 0.0207053C19.2807 -0.103528 20.5702 0.331297 21.5526 1.32518C22.5351 2.19482 23.0263 3.43718 23.0263 5.05224C23.0263 6.54306 22.2281 8.03388 20.6316 9.5247C17.9298 12.3821 15.9035 14.9911 14.5526 17.3515C13.3246 19.712 12.4035 22.3831 11.7895 25.3647L10.5 20.5195C14.1842 20.5195 17.1316 21.5755 19.3421 23.6875C21.6754 25.7995 22.8421 28.6569 22.8421 32.2598C22.8421 35.7384 21.7982 38.5958 19.7105 40.832C17.7456 42.944 14.9211 44 11.2368 44C7.67544 44 4.91228 42.8198 2.94737 40.4593C0.982456 38.0988 0 34.9308 0 30.9553C0 27.3525 0.491228 23.8739 1.47368 20.5195C2.45614 17.1652 3.86842 13.9972 5.71053 11.0155C7.67544 7.90965 10.0702 4.99012 12.8947 2.25694ZM45.8684 2.25694C47.4649 0.766119 49.0614 0.0207053 50.6579 0.0207053C52.2544 -0.103528 53.5439 0.331297 54.5263 1.32518C55.5088 2.19482 56 3.43718 56 5.05224C56 6.54306 55.2018 8.03388 53.6053 9.5247C50.9035 12.3821 48.8772 14.9911 47.5263 17.3515C46.2983 19.712 45.3772 22.3831 44.7632 25.3647L43.4737 20.5195C47.1579 20.5195 50.1053 21.5755 52.3158 23.6875C54.6491 25.7995 55.8158 28.6569 55.8158 32.2598C55.8158 35.7384 54.7719 38.5958 52.6842 40.832C50.7193 42.944 47.8947 44 44.2105 44C40.6491 44 37.886 42.8198 35.9211 40.4593C33.9561 38.0988 32.9737 34.9308 32.9737 30.9553C32.9737 27.3525 33.4649 23.8739 34.4474 20.5195C35.4298 17.1652 36.8421 13.9972 38.6842 11.0155C40.6491 7.90965 43.0439 4.99012 45.8684 2.25694Z",fill:"white"})}),r5=()=>l("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M9.74294 3.09232C10.1494 3.03223 10.5686 3 11.0004 3C16.1054 3 19.4553 7.50484 20.5807 9.28682C20.7169 9.5025 20.785 9.61034 20.8231 9.77667C20.8518 9.90159 20.8517 10.0987 20.8231 10.2236C20.7849 10.3899 20.7164 10.4985 20.5792 10.7156C20.2793 11.1901 19.8222 11.8571 19.2165 12.5805M5.72432 4.71504C3.56225 6.1817 2.09445 8.21938 1.42111 9.28528C1.28428 9.50187 1.21587 9.61016 1.17774 9.77648C1.1491 9.9014 1.14909 10.0984 1.17771 10.2234C1.21583 10.3897 1.28393 10.4975 1.42013 10.7132C2.54554 12.4952 5.89541 17 11.0004 17C13.0588 17 14.8319 16.2676 16.2888 15.2766M2.00042 1L20.0004 19M8.8791 7.87868C8.3362 8.42157 8.00042 9.17157 8.00042 10C8.00042 11.6569 9.34356 13 11.0004 13C11.8288 13 12.5788 12.6642 13.1217 12.1213",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),i5=()=>l("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M12 0.833374L14.6666 3.50004M1.33331 14.1667L2.18425 11.0466C2.23976 10.8431 2.26752 10.7413 2.31013 10.6464C2.34797 10.5621 2.39446 10.482 2.44886 10.4073C2.51012 10.3232 2.58472 10.2486 2.73392 10.0994L9.62286 3.2105C9.75486 3.07849 9.82086 3.01249 9.89697 2.98776C9.96392 2.96601 10.036 2.96601 10.103 2.98776C10.1791 3.01249 10.2451 3.07849 10.3771 3.2105L12.2895 5.12292C12.4215 5.25492 12.4875 5.32093 12.5123 5.39704C12.534 5.46398 12.534 5.5361 12.5123 5.60305C12.4875 5.67916 12.4215 5.74516 12.2895 5.87716L5.40058 12.7661C5.25139 12.9153 5.17679 12.9899 5.0927 13.0512C5.01804 13.1056 4.93793 13.1521 4.85366 13.1899C4.75874 13.2325 4.65696 13.2603 4.45341 13.3158L1.33331 14.1667Z",stroke:"#4B5565","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})}),dh=({color:e})=>l("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M8 1.5V15.5M1 8.5H15",stroke:e||"#475467","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),o5=()=>l("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M10.7074 1.53647C6.38458 1.93621 2.99999 5.57285 2.99999 10C2.99999 10.95 3.15584 11.8636 3.44336 12.7166C3.55156 13.0376 3.60566 13.1981 3.61542 13.3214C3.62506 13.4432 3.61777 13.5286 3.58764 13.6469C3.55714 13.7668 3.48979 13.8915 3.35508 14.1408L1.71943 17.1684C1.48612 17.6002 1.36946 17.8161 1.39557 17.9828C1.41831 18.1279 1.50374 18.2557 1.62917 18.3322C1.77317 18.4201 2.01729 18.3948 2.50553 18.3444L7.62655 17.815C7.78157 17.799 7.85919 17.791 7.92985 17.7937C7.99936 17.7963 8.04844 17.8029 8.11622 17.8185C8.18514 17.8344 8.27181 17.8678 8.44515 17.9345C9.3932 18.2998 10.4232 18.5 11.5 18.5C15.9308 18.5 19.5698 15.1098 19.9645 10.7819M19.1213 2.37868C20.2929 3.55025 20.2929 5.44975 19.1213 6.62132C17.9497 7.79289 16.0502 7.79289 14.8787 6.62132C13.7071 5.44975 13.7071 3.55025 14.8787 2.37868C16.0502 1.20711 17.9497 1.20711 19.1213 2.37868Z",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),s5=()=>l("svg",{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M21.46 2.5C20.69 2.85 19.86 3.08 19 3.19C19.88 2.66 20.56 1.82 20.88 0.81C20.05 1.31 19.13 1.66 18.16 1.86C17.37 1 16.26 0.5 15 0.5C12.65 0.5 10.73 2.42 10.73 4.79C10.73 5.13 10.77 5.46 10.84 5.77C7.28004 5.59 4.11004 3.88 2.00004 1.29C1.63004 1.92 1.42004 2.66 1.42004 3.44C1.42004 4.93 2.17004 6.25 3.33004 7C2.62004 7 1.96004 6.8 1.38004 6.5V6.53C1.38004 8.61 2.86004 10.35 4.82004 10.74C4.19077 10.9122 3.53013 10.9362 2.89004 10.81C3.16165 11.6625 3.69358 12.4084 4.41106 12.9429C5.12854 13.4775 5.99549 13.7737 6.89004 13.79C5.37367 14.9904 3.49404 15.6393 1.56004 15.63C1.22004 15.63 0.880039 15.61 0.540039 15.57C2.44004 16.79 4.70004 17.5 7.12004 17.5C15 17.5 19.33 10.96 19.33 5.29C19.33 5.1 19.33 4.92 19.32 4.73C20.16 4.13 20.88 3.37 21.46 2.5Z",fill:"#FFFFFF"})}),a5=()=>l("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M5.8 0.5H14.2C17.4 0.5 20 3.1 20 6.3V14.7C20 16.2383 19.3889 17.7135 18.3012 18.8012C17.2135 19.8889 15.7383 20.5 14.2 20.5H5.8C2.6 20.5 0 17.9 0 14.7V6.3C0 4.76174 0.61107 3.28649 1.69878 2.19878C2.78649 1.11107 4.26174 0.5 5.8 0.5ZM5.6 2.5C4.64522 2.5 3.72955 2.87928 3.05442 3.55442C2.37928 4.22955 2 5.14522 2 6.1V14.9C2 16.89 3.61 18.5 5.6 18.5H14.4C15.3548 18.5 16.2705 18.1207 16.9456 17.4456C17.6207 16.7705 18 15.8548 18 14.9V6.1C18 4.11 16.39 2.5 14.4 2.5H5.6ZM15.25 4C15.5815 4 15.8995 4.1317 16.1339 4.36612C16.3683 4.60054 16.5 4.91848 16.5 5.25C16.5 5.58152 16.3683 5.89946 16.1339 6.13388C15.8995 6.3683 15.5815 6.5 15.25 6.5C14.9185 6.5 14.6005 6.3683 14.3661 6.13388C14.1317 5.89946 14 5.58152 14 5.25C14 4.91848 14.1317 4.60054 14.3661 4.36612C14.6005 4.1317 14.9185 4 15.25 4ZM10 5.5C11.3261 5.5 12.5979 6.02678 13.5355 6.96447C14.4732 7.90215 15 9.17392 15 10.5C15 11.8261 14.4732 13.0979 13.5355 14.0355C12.5979 14.9732 11.3261 15.5 10 15.5C8.67392 15.5 7.40215 14.9732 6.46447 14.0355C5.52678 13.0979 5 11.8261 5 10.5C5 9.17392 5.52678 7.90215 6.46447 6.96447C7.40215 6.02678 8.67392 5.5 10 5.5ZM10 7.5C9.20435 7.5 8.44129 7.81607 7.87868 8.37868C7.31607 8.94129 7 9.70435 7 10.5C7 11.2956 7.31607 12.0587 7.87868 12.6213C8.44129 13.1839 9.20435 13.5 10 13.5C10.7956 13.5 11.5587 13.1839 12.1213 12.6213C12.6839 12.0587 13 11.2956 13 10.5C13 9.70435 12.6839 8.94129 12.1213 8.37868C11.5587 7.81607 10.7956 7.5 10 7.5Z",fill:"#FFFFFF"})}),l5=()=>l("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M20 10.5C20 4.98 15.52 0.5 10 0.5C4.48 0.5 0 4.98 0 10.5C0 15.34 3.44 19.37 8 20.3V13.5H6V10.5H8V8C8 6.07 9.57 4.5 11.5 4.5H14V7.5H12C11.45 7.5 11 7.95 11 8.5V10.5H14V13.5H11V20.45C16.05 19.95 20 15.69 20 10.5Z",fill:"#FFFFFF"})}),u5=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.4rem",viewBox:"0 0 576 512",children:l("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",fill:"#FFFFFF"})}),c5=({color:e})=>l("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M16.5 8.33335H1.5M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M6.5 13.3334L8.16667 15L11.9167 11.25M5.5 18.3334H12.5C13.9001 18.3334 14.6002 18.3334 15.135 18.0609C15.6054 17.8212 15.9878 17.4387 16.2275 16.9683C16.5 16.4336 16.5 15.7335 16.5 14.3334V7.33335C16.5 5.93322 16.5 5.23316 16.2275 4.69838C15.9878 4.22797 15.6054 3.84552 15.135 3.60584C14.6002 3.33335 13.9001 3.33335 12.5 3.33335H5.5C4.09987 3.33335 3.3998 3.33335 2.86502 3.60584C2.39462 3.84552 2.01217 4.22797 1.77248 4.69838C1.5 5.23316 1.5 5.93322 1.5 7.33335V14.3334C1.5 15.7335 1.5 16.4336 1.77248 16.9683C2.01217 17.4387 2.39462 17.8212 2.86502 18.0609C3.3998 18.3334 4.09987 18.3334 5.5 18.3334Z",stroke:e,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),Ss=({color:e})=>l("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M9.29709 9.297C11.2936 9.0297 12.8334 7.31967 12.8334 5.24999C12.8334 2.99483 11.0052 1.16666 8.75008 1.16666C6.6804 1.16666 4.97037 2.70646 4.70307 4.70298M4.37508 7.58332L5.25008 6.99999V10.2083M4.37508 10.2083H6.12508M9.33341 8.74999C9.33341 11.0052 7.50524 12.8333 5.25008 12.8333C2.99492 12.8333 1.16675 11.0052 1.16675 8.74999C1.16675 6.49483 2.99492 4.66666 5.25008 4.66666C7.50524 4.66666 9.33341 6.49483 9.33341 8.74999Z",stroke:e||"white","stroke-linecap":"round","stroke-linejoin":"round"})}),As=()=>l("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M7.16224 1.23906C7.19436 0.982105 7.05324 0.734732 6.8157 0.631617C6.57815 0.528502 6.30107 0.594332 6.13529 0.793269L0.926433 7.04389C0.836415 7.15187 0.745239 7.26124 0.678856 7.35735C0.616074 7.44825 0.501444 7.62697 0.497902 7.86185C0.493848 8.13075 0.613671 8.38658 0.82284 8.55561C1.00555 8.70325 1.21623 8.7296 1.32625 8.73956C1.44258 8.7501 1.58496 8.75007 1.72554 8.75004L5.33929 8.75004L4.83792 12.761C4.8058 13.018 4.94693 13.2654 5.18447 13.3685C5.42201 13.4716 5.6991 13.4058 5.86488 13.2068L11.0737 6.9562C11.1637 6.84822 11.2549 6.73885 11.3213 6.64273C11.3841 6.55184 11.4987 6.37312 11.5023 6.13824C11.5063 5.86934 11.3865 5.61351 11.1773 5.44448C10.9946 5.29683 10.7839 5.27048 10.6739 5.26052C10.5576 5.24999 10.4152 5.25001 10.2746 5.25004L6.66087 5.25004L7.16224 1.23906Z",fill:"#FFD465"})}),Fy=()=>l("svg",{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M9 0.5L1 8.5M1 0.5L9 8.5",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})}),d5=()=>l("svg",{width:"660",height:"502",viewBox:"0 0 660 502",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("circle",{cx:"198.667",cy:"-14.6091",r:"516.609",fill:"#2970A4"})}),f5=()=>l("svg",{width:"660",height:"708",viewBox:"0 0 660 708",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("circle",{cx:"198.833",cy:"19.5",r:"688.5",fill:"#165481"})}),h5=()=>l("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M19.1525 9.89945L10.1369 18.9151C8.08662 20.9653 4.7625 20.9653 2.71225 18.9151C0.661997 16.8648 0.661998 13.5407 2.71225 11.4904L11.7279 2.47483C13.0947 1.108 15.3108 1.108 16.6776 2.47483C18.0444 3.84167 18.0444 6.05775 16.6776 7.42458L8.01555 16.0866C7.33213 16.7701 6.22409 16.7701 5.54068 16.0866C4.85726 15.4032 4.85726 14.2952 5.54068 13.6118L13.1421 6.01037",stroke:"#564c4d","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),p5=()=>l("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M12.8334 7.33602H1.16669M1.16669 7.33602L7.00002 13.1694M1.16669 7.33602L7.00002 1.50269",stroke:"#4B5565","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),m5=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M9.99999 13.3334V10M9.99999 6.66669H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),g5=()=>l("svg",{width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M1 7.50189H17M17 7.50189L11 1.50189M17 7.50189L11 13.5019",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),y5=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 576 512",children:l("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",stroke:"#f7f036"})}),v5=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:l("path",{d:"M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"})}),w5=({color:e})=>l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L19.7071 9.29289C19.9931 9.57889 20.0787 10.009 19.9239 10.3827C19.7691 10.7564 19.4045 11 19 11H16L16 20.2231C16.0001 20.3422 16.0001 20.4845 15.9899 20.6098C15.978 20.755 15.9476 20.963 15.8365 21.181C15.6927 21.4632 15.4632 21.6927 15.181 21.8365C14.963 21.9476 14.755 21.978 14.6098 21.9899C14.4845 22.0001 14.3423 22.0001 14.2232 22C12.7411 21.9993 11.2589 21.9993 9.77685 22C9.65774 22.0001 9.51549 22.0001 9.39017 21.9899C9.24495 21.978 9.03696 21.9476 8.81902 21.8365C8.53677 21.6927 8.3073 21.4632 8.16349 21.181C8.05244 20.963 8.022 20.755 8.01013 20.6098C7.99989 20.4845 7.99995 20.3423 7.99999 20.2231L8 11H5C4.59554 11 4.2309 10.7564 4.07612 10.3827C3.92134 10.009 4.0069 9.57889 4.29289 9.29289L11.2929 2.29289Z",fill:e})}),x5=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2rem",viewBox:"0 0 512 512",children:l("path",{d:"M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z",fill:"#094067"})}),S5=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2rem",width:"1.5rem",viewBox:"0 0 512 512",children:l("path",{d:"M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z",fill:"black"})}),b5=w.div`
  /* border: 1px solid red; */
  width: 100%;
  form {
    display: flex;
    width: 100%;
    align-items: center;
    /* justify-content: ; */

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 14px;
      gap: 10px;

      width: 47px;
      height: 47px;

      background: #000000;
      background: #094067;
      border-radius: 8px;

      border: 0;
      outline: none;
      cursor: pointer;
    }
  }
`,C5=w.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 14px;
  gap: 12px;
  width: 100%;
  height: 52px;
  border: 1px solid #7d89b0;
  border-radius: 8px;
  margin-right: 1vw;

  input {
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 111.4%;
    color: #98a2b3;
    border: none;
    min-width: 340px;

    &::placeholder {
      color: #98a2b3;
    }

    &:focus {
      outline: none;
    }
  }
`,jy=e=>l(b5,{children:S("form",{children:[S(C5,{children:[l(t5,{}),l("input",{type:"text",placeholder:e.placeholderText||"Search for anything",onChange:t=>e.updateSearch(t.target.value)})]}),l("button",{type:"button",children:l(Qe,{strokeColor:"white"})})]})}),k5=w.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  img {
    display: block;
    width: ${e=>e.imgSize||"28px"};
    height: ${e=>e.imgSize||"28px"};
    border: ${e=>`1px solid ${e.imgBorder}`};
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: ${e=>e.textSize||"20px"};
    line-height: 27px;
    color: ${e=>e.textColor};
  }
`,kn=({name:e,photo:t,imgBorder:n,textColor:r,imgSize:i,textSize:o})=>S(k5,{imgBorder:n,textColor:r,imgSize:i,textSize:o,children:[l("img",{src:t,alt:"user-img"}),l("span",{children:e})]}),An="teachnlearn-user",_5=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],sr=10;function rt(){const[e,t]=x.useState(),[n,r]=x.useState(e==null?void 0:e.token);x.useEffect(()=>{r(e==null?void 0:e.token)},[e]);async function i(){const a=localStorage.getItem(An);let u;return a&&(u=await JSON.parse(a)),t(u),u}async function o(){const a=localStorage.getItem(An);let u;return a&&(u=await JSON.parse(a)),u.token}async function s(){return(await JSON.parse(localStorage.getItem(An)||"{}")).coins}return{localUser:e,setLocalUser:t,userToken:n,fetchLocalUserData:i,fetchLocalUserToken:o,fetchUserCredit:s}}const me=e=>({Authorization:`Bearer ${e}`}),Br=e=>{const t=new Date(e),n=t.getMonth(),r=t.getDate();return t.getFullYear(),_5[n]+" "+r},Sn=e=>{const n=new Date(e).getTime(),r=new Date(n),i=r.getHours();let o=r.getMinutes(),s;return o<10?s=i+":"+o+"0":s=i+":"+o,s},Je=()=>{document.body.scrollTop=document.documentElement.scrollTop=0};function fh(e,t){x.useEffect(()=>{function n(r){e.current&&!e.current.contains(r.target)&&t()}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[e])}function hh(e){return/\S+@\S+\.\S+/.test(e)}const T5=w.div`
  margin: 0 6.3vw;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.5rem;
  background: #d8eefe;
`,E5=w.div`
  display: flex;
  padding: 1rem 1.25rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: ${e=>e.isActive?"#094067":"none"};
  color: ${e=>e.isActive?"white":"black"};
  font-size: 1.125rem;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.15s linear;
`,O5=[{title:"Home",link:"/"},{title:"Classes",link:"/classes"},{title:"Requests",link:"/requests"},{title:"Forum",link:"/forums"},{title:"Blog",link:"/blogs"},{title:"My Groups",link:"/groups"},{title:"My AI Assistant",link:"/myai"}],P5=()=>{const[e,t]=x.useState("");x.useEffect(()=>{console.log(window.location.pathname),t(window.location.pathname)},[window.location.pathname]);const n=Re(),r=o=>{Je(),t(o),n(o)},i=o=>o=="/"?o==e:e.includes(o);return l(T5,{children:O5.map((o,s)=>l(E5,{isActive:i(o.link),onClick:()=>r(o.link),children:l("span",{children:o.title})},s))})};function zy(e,t){return function(){return e.apply(t,arguments)}}const{toString:M5}=Object.prototype,{getPrototypeOf:ph}=Object,wu=(e=>t=>{const n=M5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),zn=e=>(e=e.toLowerCase(),t=>wu(t)===e),xu=e=>t=>typeof t===e,{isArray:co}=Array,bs=xu("undefined");function D5(e){return e!==null&&!bs(e)&&e.constructor!==null&&!bs(e.constructor)&&nn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Uy=zn("ArrayBuffer");function L5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Uy(e.buffer),t}const N5=xu("string"),nn=xu("function"),By=xu("number"),Su=e=>e!==null&&typeof e=="object",R5=e=>e===!0||e===!1,La=e=>{if(wu(e)!=="object")return!1;const t=ph(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},I5=zn("Date"),A5=zn("File"),$5=zn("Blob"),F5=zn("FileList"),j5=e=>Su(e)&&nn(e.pipe),z5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nn(e.append)&&((t=wu(e))==="formdata"||t==="object"&&nn(e.toString)&&e.toString()==="[object FormData]"))},U5=zn("URLSearchParams"),B5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $s(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),co(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function Hy(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Wy=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Yy=e=>!bs(e)&&e!==Wy;function Hd(){const{caseless:e}=Yy(this)&&this||{},t={},n=(r,i)=>{const o=e&&Hy(t,i)||i;La(t[o])&&La(r)?t[o]=Hd(t[o],r):La(r)?t[o]=Hd({},r):co(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$s(arguments[r],n);return t}const H5=(e,t,n,{allOwnKeys:r}={})=>($s(t,(i,o)=>{n&&nn(i)?e[o]=zy(i,n):e[o]=i},{allOwnKeys:r}),e),W5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Y5=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},V5=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&ph(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},G5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},q5=e=>{if(!e)return null;if(co(e))return e;let t=e.length;if(!By(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Q5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ph(Uint8Array)),K5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Z5=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},J5=zn("HTMLFormElement"),X5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Lm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),e3=zn("RegExp"),Vy=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$s(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},t3=e=>{Vy(e,(t,n)=>{if(nn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},n3=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return co(e)?r(e):r(String(e).split(t)),n},r3=()=>{},i3=(e,t)=>(e=+e,Number.isFinite(e)?e:t),bc="abcdefghijklmnopqrstuvwxyz",Nm="0123456789",Gy={DIGIT:Nm,ALPHA:bc,ALPHA_DIGIT:bc+bc.toUpperCase()+Nm},o3=(e=16,t=Gy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function s3(e){return!!(e&&nn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const a3=e=>{const t=new Array(10),n=(r,i)=>{if(Su(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=co(r)?[]:{};return $s(r,(s,a)=>{const u=n(s,i+1);!bs(u)&&(o[a]=u)}),t[i]=void 0,o}}return r};return n(e,0)},l3=zn("AsyncFunction"),u3=e=>e&&(Su(e)||nn(e))&&nn(e.then)&&nn(e.catch),P={isArray:co,isArrayBuffer:Uy,isBuffer:D5,isFormData:z5,isArrayBufferView:L5,isString:N5,isNumber:By,isBoolean:R5,isObject:Su,isPlainObject:La,isUndefined:bs,isDate:I5,isFile:A5,isBlob:$5,isRegExp:e3,isFunction:nn,isStream:j5,isURLSearchParams:U5,isTypedArray:Q5,isFileList:F5,forEach:$s,merge:Hd,extend:H5,trim:B5,stripBOM:W5,inherits:Y5,toFlatObject:V5,kindOf:wu,kindOfTest:zn,endsWith:G5,toArray:q5,forEachEntry:K5,matchAll:Z5,isHTMLForm:J5,hasOwnProperty:Lm,hasOwnProp:Lm,reduceDescriptors:Vy,freezeMethods:t3,toObjectSet:n3,toCamelCase:X5,noop:r3,toFiniteNumber:i3,findKey:Hy,global:Wy,isContextDefined:Yy,ALPHABET:Gy,generateString:o3,isSpecCompliantForm:s3,toJSONObject:a3,isAsyncFn:l3,isThenable:u3};function ye(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qy=ye.prototype,Qy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qy[e]={value:e}});Object.defineProperties(ye,Qy);Object.defineProperty(qy,"isAxiosError",{value:!0});ye.from=(e,t,n,r,i,o)=>{const s=Object.create(qy);return P.toFlatObject(e,s,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),ye.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const c3=null;function Wd(e){return P.isPlainObject(e)||P.isArray(e)}function Ky(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Rm(e,t,n){return e?e.concat(t).map(function(i,o){return i=Ky(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function d3(e){return P.isArray(e)&&!e.some(Wd)}const f3=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function bu(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,C){return!P.isUndefined(C[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(P.isDate(p))return p.toISOString();if(!u&&P.isBlob(p))throw new ye("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(p)||P.isTypedArray(p)?u&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,v,C){let m=p;if(p&&!C&&typeof p=="object"){if(P.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(P.isArray(p)&&d3(p)||(P.isFileList(p)||P.endsWith(v,"[]"))&&(m=P.toArray(p)))return v=Ky(v),m.forEach(function(b,k){!(P.isUndefined(b)||b===null)&&t.append(s===!0?Rm([v],k,o):s===null?v:v+"[]",c(b))}),!1}return Wd(p)?!0:(t.append(Rm(C,v,o),c(p)),!1)}const f=[],h=Object.assign(f3,{defaultVisitor:d,convertValue:c,isVisitable:Wd});function y(p,v){if(!P.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(p),P.forEach(p,function(m,g){(!(P.isUndefined(m)||m===null)&&i.call(t,m,P.isString(g)?g.trim():g,v,h))===!0&&y(m,v?v.concat(g):[g])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Im(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function mh(e,t){this._pairs=[],e&&bu(e,this,t)}const Zy=mh.prototype;Zy.append=function(t,n){this._pairs.push([t,n])};Zy.toString=function(t){const n=t?function(r){return t.call(this,r,Im)}:Im;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function h3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jy(e,t,n){if(!t)return e;const r=n&&n.encode||h3,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new mh(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class p3{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Am=p3,Xy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},m3=typeof URLSearchParams<"u"?URLSearchParams:mh,g3=typeof FormData<"u"?FormData:null,y3=typeof Blob<"u"?Blob:null,v3=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),w3=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Nn={isBrowser:!0,classes:{URLSearchParams:m3,FormData:g3,Blob:y3},isStandardBrowserEnv:v3,isStandardBrowserWebWorkerEnv:w3,protocols:["http","https","file","blob","url","data"]};function x3(e,t){return bu(e,new Nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Nn.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function S3(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function b3(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function ev(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),u=o>=n.length;return s=!s&&P.isArray(i)?i.length:s,u?(P.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&P.isArray(i[s])&&(i[s]=b3(i[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(S3(r),i,n,0)}),n}return null}const C3={"Content-Type":void 0};function k3(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Cu={transitional:Xy,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(ev(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return x3(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return bu(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),k3(t)):t}],transformResponse:[function(t){const n=this.transitional||Cu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?ye.from(a,ye.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nn.classes.FormData,Blob:Nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],function(t){Cu.headers[t]={}});P.forEach(["post","put","patch"],function(t){Cu.headers[t]=P.merge(C3)});const gh=Cu,_3=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),T3=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&_3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},$m=Symbol("internals");function Eo(e){return e&&String(e).trim().toLowerCase()}function Na(e){return e===!1||e==null?e:P.isArray(e)?e.map(Na):String(e)}function E3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const O3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cc(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function P3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function M3(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class ku{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,u,c){const d=Eo(u);if(!d)throw new Error("header name must be a non-empty string");const f=P.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=Na(a))}const s=(a,u)=>P.forEach(a,(c,d)=>o(c,d,u));return P.isPlainObject(t)||t instanceof this.constructor?s(t,n):P.isString(t)&&(t=t.trim())&&!O3(t)?s(T3(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Eo(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return E3(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Eo(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Eo(s),s){const a=P.findKey(r,s);a&&(!n||Cc(r,r[a],a,n))&&(delete r[a],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Cc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const s=P.findKey(r,o);if(s){n[s]=Na(i),delete n[o];return}const a=t?P3(o):String(o).trim();a!==o&&delete n[o],n[a]=Na(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[$m]=this[$m]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Eo(s);r[a]||(M3(i,s),r[a]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}ku.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.freezeMethods(ku.prototype);P.freezeMethods(ku);const er=ku;function kc(e,t){const n=this||gh,r=t||n,i=er.from(r.headers);let o=r.data;return P.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function tv(e){return!!(e&&e.__CANCEL__)}function Fs(e,t,n){ye.call(this,e??"canceled",ye.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Fs,ye,{__CANCEL__:!0});function D3(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ye("Request failed with status code "+n.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const L3=Nn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const u=[];u.push(n+"="+encodeURIComponent(r)),P.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),P.isString(o)&&u.push("path="+o),P.isString(s)&&u.push("domain="+s),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function N3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function R3(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function nv(e,t){return e&&!N3(t)?R3(e,t):t}const I3=Nn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=P.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function A3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[o];s||(s=c),n[i]=u,r[i]=c;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const y=d&&c-d;return y?Math.round(h*1e3/y):void 0}}function Fm(e,t){let n=0;const r=$3(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,u=r(a),c=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const F3=typeof XMLHttpRequest<"u",j3=F3&&function(e){return new Promise(function(n,r){let i=e.data;const o=er.from(e.headers).normalize(),s=e.responseType;let a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}P.isFormData(i)&&(Nn.isStandardBrowserEnv||Nn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+p))}const d=nv(e.baseURL,e.url);c.open(e.method.toUpperCase(),Jy(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const y=er.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};D3(function(m){n(m),u()},function(m){r(m),u()},v),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new ye("Request aborted",ye.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ye("Network Error",ye.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||Xy;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new ye(p,v.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,e,c)),c=null},Nn.isStandardBrowserEnv){const y=(e.withCredentials||I3(d))&&e.xsrfCookieName&&L3.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&P.forEach(o.toJSON(),function(p,v){c.setRequestHeader(v,p)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Fm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Fm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=y=>{c&&(r(!y||y.type?new Fs(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const h=A3(d);if(h&&Nn.protocols.indexOf(h)===-1){r(new ye("Unsupported protocol "+h+":",ye.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Ra={http:c3,xhr:j3};P.forEach(Ra,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const z3={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=P.isString(n)?Ra[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new ye(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(P.hasOwnProp(Ra,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ra};function _c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fs(null,e)}function jm(e){return _c(e),e.headers=er.from(e.headers),e.data=kc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z3.getAdapter(e.adapter||gh.adapter)(e).then(function(r){return _c(e),r.data=kc.call(e,e.transformResponse,r),r.headers=er.from(r.headers),r},function(r){return tv(r)||(_c(e),r&&r.response&&(r.response.data=kc.call(e,e.transformResponse,r.response),r.response.headers=er.from(r.response.headers))),Promise.reject(r)})}const zm=e=>e instanceof er?e.toJSON():e;function no(e,t){t=t||{};const n={};function r(c,d,f){return P.isPlainObject(c)&&P.isPlainObject(d)?P.merge.call({caseless:f},c,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function i(c,d,f){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function o(c,d){if(!P.isUndefined(d))return r(void 0,d)}function s(c,d){if(P.isUndefined(d)){if(!P.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d)=>i(zm(c),zm(d),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=u[d]||i,h=f(e[d],t[d],d);P.isUndefined(h)&&f!==a||(n[d]=h)}),n}const rv="1.4.0",yh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Um={};yh.transitional=function(t,n,r){function i(o,s){return"[Axios v"+rv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new ye(i(s," has been removed"+(n?" in "+n:"")),ye.ERR_DEPRECATED);return n&&!Um[s]&&(Um[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function U3(e,t,n){if(typeof e!="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],u=a===void 0||s(a,o,e);if(u!==!0)throw new ye("option "+o+" must be "+u,ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ye("Unknown option "+o,ye.ERR_BAD_OPTION)}}const Yd={assertOptions:U3,validators:yh},hr=Yd.validators;class vl{constructor(t){this.defaults=t,this.interceptors={request:new Am,response:new Am}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=no(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Yd.assertOptions(r,{silentJSONParsing:hr.transitional(hr.boolean),forcedJSONParsing:hr.transitional(hr.boolean),clarifyTimeoutError:hr.transitional(hr.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:Yd.assertOptions(i,{encode:hr.function,serialize:hr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&P.merge(o.common,o[n.method]),s&&P.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=er.concat(s,o);const a=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,f=0,h;if(!u){const p=[jm.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),h=p.length,d=Promise.resolve(n);f<h;)d=d.then(p[f++],p[f++]);return d}h=a.length;let y=n;for(f=0;f<h;){const p=a[f++],v=a[f++];try{y=p(y)}catch(C){v.call(this,C);break}}try{d=jm.call(this,y)}catch(p){return Promise.reject(p)}for(f=0,h=c.length;f<h;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=no(this.defaults,t);const n=nv(t.baseURL,t.url);return Jy(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){vl.prototype[t]=function(n,r){return this.request(no(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(no(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}vl.prototype[t]=n(),vl.prototype[t+"Form"]=n(!0)});const Ia=vl;class vh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Fs(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new vh(function(i){t=i}),cancel:t}}}const B3=vh;function H3(e){return function(n){return e.apply(null,n)}}function W3(e){return P.isObject(e)&&e.isAxiosError===!0}const Vd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vd).forEach(([e,t])=>{Vd[t]=e});const Y3=Vd;function iv(e){const t=new Ia(e),n=zy(Ia.prototype.request,t);return P.extend(n,Ia.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return iv(no(e,i))},n}const nt=iv(gh);nt.Axios=Ia;nt.CanceledError=Fs;nt.CancelToken=B3;nt.isCancel=tv;nt.VERSION=rv;nt.toFormData=bu;nt.AxiosError=ye;nt.Cancel=nt.CanceledError;nt.all=function(t){return Promise.all(t)};nt.spread=H3;nt.isAxiosError=W3;nt.mergeConfig=no;nt.AxiosHeaders=er;nt.formToJSON=e=>ev(P.isHTMLForm(e)?new FormData(e):e);nt.HttpStatusCode=Y3;nt.default=nt;const le=nt,ue="https://teachnlearn-server-test-deploy.vercel.app",ce="/api/v1";function ov(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ov(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function br(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ov(e))&&(r&&(r+=" "),r+=t);return r}const Vo=e=>typeof e=="number"&&!isNaN(e),fi=e=>typeof e=="string",Rt=e=>typeof e=="function",Aa=e=>fi(e)||Rt(e)?e:null,Tc=e=>x.isValidElement(e)||fi(e)||Rt(e)||Vo(e);function V3(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function _u(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:h}=s;const y=r?`${t}--${u}`:t,p=r?`${n}--${u}`:n,v=x.useRef(0);return x.useLayoutEffect(()=>{const C=f.current,m=y.split(" "),g=b=>{b.target===f.current&&(C.dispatchEvent(new Event("d")),C.removeEventListener("animationend",g),C.removeEventListener("animationcancel",g),v.current===0&&b.type!=="animationcancel"&&C.classList.remove(...m))};C.classList.add(...m),C.addEventListener("animationend",g),C.addEventListener("animationcancel",g)},[]),x.useEffect(()=>{const C=f.current,m=()=>{C.removeEventListener("animationend",m),i?V3(C,d,o):d()};h||(c?m():(v.current=1,C.className+=` ${p}`,C.addEventListener("animationend",m)))},[h]),re.createElement(re.Fragment,null,a)}}function Bm(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Qt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},da=e=>{let{theme:t,type:n,...r}=e;return re.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Ec={info:function(e){return re.createElement(da,{...e},re.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return re.createElement(da,{...e},re.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return re.createElement(da,{...e},re.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return re.createElement(da,{...e},re.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return re.createElement("div",{className:"Toastify__spinner"})}};function G3(e){const[,t]=x.useReducer(y=>y+1,0),[n,r]=x.useState([]),i=x.useRef(null),o=x.useRef(new Map).current,s=y=>n.indexOf(y)!==-1,a=x.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:y=>o.get(y)}).current;function u(y){let{containerId:p}=y;const{limit:v}=a.props;!v||p&&a.containerId!==p||(a.count-=a.queue.length,a.queue=[])}function c(y){r(p=>y==null?[]:p.filter(v=>v!==y))}function d(){const{toastContent:y,toastProps:p,staleId:v}=a.queue.shift();h(y,p,v)}function f(y,p){let{delay:v,staleId:C,...m}=p;if(!Tc(y)||function(G){return!i.current||a.props.enableMultiContainer&&G.containerId!==a.props.containerId||o.has(G.toastId)&&G.updateId==null}(m))return;const{toastId:g,updateId:b,data:k}=m,{props:_}=a,M=()=>c(g),L=b==null;L&&a.count++;const D={..._,style:_.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(G=>{let[Z,$]=G;return $!=null})),toastId:g,updateId:b,data:k,closeToast:M,isIn:!1,className:Aa(m.className||_.toastClassName),bodyClassName:Aa(m.bodyClassName||_.bodyClassName),progressClassName:Aa(m.progressClassName||_.progressClassName),autoClose:!m.isLoading&&(q=m.autoClose,z=_.autoClose,q===!1||Vo(q)&&q>0?q:z),deleteToast(){const G=Bm(o.get(g),"removed");o.delete(g),Qt.emit(4,G);const Z=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),Z>0){const $=g==null?a.props.limit:1;if(Z===1||$===1)a.displayedToast++,d();else{const B=$>Z?Z:$;a.displayedToast=B;for(let J=0;J<B;J++)d()}}else t()}};var q,z;D.iconOut=function(G){let{theme:Z,type:$,isLoading:B,icon:J}=G,T=null;const O={theme:Z,type:$};return J===!1||(Rt(J)?T=J(O):x.isValidElement(J)?T=x.cloneElement(J,O):fi(J)||Vo(J)?T=J:B?T=Ec.spinner():(W=>W in Ec)($)&&(T=Ec[$](O))),T}(D),Rt(m.onOpen)&&(D.onOpen=m.onOpen),Rt(m.onClose)&&(D.onClose=m.onClose),D.closeButton=_.closeButton,m.closeButton===!1||Tc(m.closeButton)?D.closeButton=m.closeButton:m.closeButton===!0&&(D.closeButton=!Tc(_.closeButton)||_.closeButton);let se=y;x.isValidElement(y)&&!fi(y.type)?se=x.cloneElement(y,{closeToast:M,toastProps:D,data:k}):Rt(y)&&(se=y({closeToast:M,toastProps:D,data:k})),_.limit&&_.limit>0&&a.count>_.limit&&L?a.queue.push({toastContent:se,toastProps:D,staleId:C}):Vo(v)?setTimeout(()=>{h(se,D,C)},v):h(se,D,C)}function h(y,p,v){const{toastId:C}=p;v&&o.delete(v);const m={content:y,props:p};o.set(C,m),r(g=>[...g,C].filter(b=>b!==v)),Qt.emit(4,Bm(m,m.props.updateId==null?"added":"updated"))}return x.useEffect(()=>(a.containerId=e.containerId,Qt.cancelEmit(3).on(0,f).on(1,y=>i.current&&c(y)).on(5,u).emit(2,a),()=>{o.clear(),Qt.emit(3,a)}),[]),x.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(y){const p=new Map,v=Array.from(o.values());return e.newestOnTop&&v.reverse(),v.forEach(C=>{const{position:m}=C.props;p.has(m)||p.set(m,[]),p.get(m).push(C)}),Array.from(p,C=>y(C[0],C[1]))},containerRef:i,isToastActive:s}}function Hm(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Wm(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function q3(e){const[t,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),s=x.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=x.useRef(e),{autoClose:u,pauseOnHover:c,closeToast:d,onClick:f,closeOnClick:h}=e;function y(k){if(e.draggable){k.nativeEvent.type==="touchstart"&&k.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",g),document.addEventListener("touchmove",m),document.addEventListener("touchend",g);const _=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=_.getBoundingClientRect(),_.style.transition="",s.x=Hm(k.nativeEvent),s.y=Wm(k.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=_.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(k){if(s.boundingRect){const{top:_,bottom:M,left:L,right:D}=s.boundingRect;k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=L&&s.x<=D&&s.y>=_&&s.y<=M?C():v()}}function v(){n(!0)}function C(){n(!1)}function m(k){const _=o.current;s.canDrag&&_&&(s.didMove=!0,t&&C(),s.x=Hm(k),s.y=Wm(k),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),_.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,_.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",g);const k=o.current;if(s.canDrag&&s.didMove&&k){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();k.style.transition="transform 0.2s, opacity 0.2s",k.style.transform=`translate${e.draggableDirection}(0)`,k.style.opacity="1"}}x.useEffect(()=>{a.current=e}),x.useEffect(()=>(o.current&&o.current.addEventListener("d",v,{once:!0}),Rt(e.onOpen)&&e.onOpen(x.isValidElement(e.children)&&e.children.props),()=>{const k=a.current;Rt(k.onClose)&&k.onClose(x.isValidElement(k.children)&&k.children.props)}),[]),x.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",v),window.addEventListener("blur",C)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",C))}),[e.pauseOnFocusLoss]);const b={onMouseDown:y,onTouchStart:y,onMouseUp:p,onTouchEnd:p};return u&&c&&(b.onMouseEnter=C,b.onMouseLeave=v),h&&(b.onClick=k=>{f&&f(k),s.canCloseOnClick&&d()}),{playToast:v,pauseToast:C,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:b}}function sv(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return re.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},re.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},re.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Q3(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:h}=e;const y=o||u&&c===0,p={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:y?0:1};u&&(p.transform=`scaleX(${c})`);const v=br("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),C=Rt(s)?s({rtl:d,type:i,defaultClassName:v}):br(v,s);return re.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:C,style:p,[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}})}const K3=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=q3(e),{closeButton:o,children:s,autoClose:a,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:h,position:y,className:p,style:v,bodyClassName:C,bodyStyle:m,progressClassName:g,progressStyle:b,updateId:k,role:_,progress:M,rtl:L,toastId:D,deleteToast:q,isIn:z,isLoading:se,iconOut:G,closeOnClick:Z,theme:$}=e,B=br("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":Z}),J=Rt(p)?p({rtl:L,position:y,type:c,defaultClassName:B}):br(B,p),T=!!M||!a,O={closeToast:f,type:c,theme:$};let W=null;return o===!1||(W=Rt(o)?o(O):x.isValidElement(o)?x.cloneElement(o,O):sv(O)),re.createElement(h,{isIn:z,done:q,position:y,preventExitTransition:n,nodeRef:r},re.createElement("div",{id:D,onClick:u,className:J,...i,style:v,ref:r},re.createElement("div",{...z&&{role:_},className:Rt(C)?C({type:c}):br("Toastify__toast-body",C),style:m},G!=null&&re.createElement("div",{className:br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!se})},G),re.createElement("div",null,s)),W,re.createElement(Q3,{...k&&!T?{key:`pb-${k}`}:{},rtl:L,theme:$,delay:a,isRunning:t,isIn:z,closeToast:f,hide:d,type:c,style:b,className:g,controlledProgress:T,progress:M||0})))},Tu=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Z3=_u(Tu("bounce",!0));_u(Tu("slide",!0));_u(Tu("zoom"));_u(Tu("flip"));const $n=x.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=G3(e),{className:o,style:s,rtl:a,containerId:u}=e;function c(d){const f=br("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":a});return Rt(o)?o({position:d,rtl:a,defaultClassName:f}):br(f,Aa(o))}return x.useEffect(()=>{t&&(t.current=r.current)},[]),re.createElement("div",{ref:r,className:"Toastify",id:u},n((d,f)=>{const h=f.length?{...s}:{...s,pointerEvents:"none"};return re.createElement("div",{className:c(d),style:h,key:`container-${d}`},f.map((y,p)=>{let{content:v,props:C}=y;return re.createElement(K3,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":p+1,"--len":f.length},key:`toast-${C.key}`},v)}))}))});$n.displayName="ToastContainer",$n.defaultProps={position:"top-right",transition:Z3,autoClose:5e3,closeButton:sv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Oc,Zr=new Map,Io=[],J3=1;function av(){return""+J3++}function X3(e){return e&&(fi(e.toastId)||Vo(e.toastId))?e.toastId:av()}function Go(e,t){return Zr.size>0?Qt.emit(0,e,t):Io.push({content:e,options:t}),t.toastId}function wl(e,t){return{...t,type:t&&t.type||e,toastId:X3(t)}}function fa(e){return(t,n)=>Go(t,wl(e,n))}function I(e,t){return Go(e,wl("default",t))}I.loading=(e,t)=>Go(e,wl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),I.promise=function(e,t,n){let r,{pending:i,error:o,success:s}=t;i&&(r=fi(i)?I.loading(i,n):I.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,h)=>{if(f==null)return void I.dismiss(r);const y={type:d,...a,...n,data:h},p=fi(f)?{render:f}:f;return r?I.update(r,{...y,...p}):I(p.render,{...y,...p}),h},c=Rt(e)?e():e;return c.then(d=>u("success",s,d)).catch(d=>u("error",o,d)),c},I.success=fa("success"),I.info=fa("info"),I.error=fa("error"),I.warning=fa("warning"),I.warn=I.warning,I.dark=(e,t)=>Go(e,wl("default",{theme:"dark",...t})),I.dismiss=e=>{Zr.size>0?Qt.emit(1,e):Io=Io.filter(t=>e!=null&&t.options.toastId!==e)},I.clearWaitingQueue=function(e){return e===void 0&&(e={}),Qt.emit(5,e)},I.isActive=e=>{let t=!1;return Zr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},I.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Zr.get(o||Oc);return s&&s.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:av()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,Go(s,o)}},0)},I.done=e=>{I.update(e,{progress:1})},I.onChange=e=>(Qt.on(4,e),()=>{Qt.off(4,e)}),I.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Qt.on(2,e=>{Oc=e.containerId||e,Zr.set(Oc,e),Io.forEach(t=>{Qt.emit(0,t.content,t.options)}),Io=[]}).on(3,e=>{Zr.delete(e.containerId||e),Zr.size===0&&Qt.off(0).off(1).off(5)});const e4=w.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  padding: 20px 28px;
  gap: 22px;
  background: #094067;
  border-radius: 61px;
  color: white;
`,t4=w.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  background-color: #ccc;
  background-color: #ffffff;
  border-radius: 25px;

  &::before {
    border-radius: 20px;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: #674ff1;
    background-color: #3da9fc;
    transition: 0.4s;
    transform: ${e=>e.isChecked?"translateX(26px)":"none"};
  }
`,n4=w.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: white;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`,r4=w.span`
  color: ${e=>e.isChecked?"#C2B9F9":"#FFFFFF"};
  transition: 0.5s;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`,i4=w.span`
  transition: 0.5s;
  color: ${e=>e.isChecked?"#FFFFFF":"#C2B9F9"};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`,lv=e=>{const[t,n]=x.useState(),{fetchLocalUserData:r}=rt();x.useEffect(()=>{r().then(s=>{n(s.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),r().then(s=>{n(s.role)})})},[]);const i={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},o=async()=>{t=="learn"?(await le.patch(`${ue}${ce}/user/myMode`,{mode:"teach"},{headers:me(e.userToken??"")}).then(({data:s})=>{const a=s.updatedUser;a.token=e.userToken,console.log(a),localStorage.setItem(An,JSON.stringify(a)),window.dispatchEvent(new Event("storage")),I.success("Mode updated",i)}).catch(s=>{I.error(s.response.data.message,i)}),n("teach")):(await le.patch(`${ue}${ce}/user/myMode`,{mode:"learn"},{headers:me(e.userToken??"")}).then(({data:s})=>{const a=s.updatedUser;a.token=e.userToken,console.log(a),localStorage.setItem(An,JSON.stringify(a)),window.dispatchEvent(new Event("storage")),I.success("Mode updated",i)}).catch(s=>{I.error(s.response.data.message)}),n("learn"))};return S(e4,{children:[l(r4,{isChecked:t=="learn",children:"Teach Mode"}),S(n4,{children:[l("input",{type:"checkbox",checked:t=="learn",onClick:o}),l(t4,{className:"slider",isChecked:t=="learn"})]}),l(i4,{isChecked:t=="learn",children:"Learn Mode"}),l($n,{theme:"dark"})]})},o4=w.div`
  /* border: 1px solid red; */
  /* padding: 1.75rem 3.5vw 0rem 3.5vw; */
  padding-top: 1.75rem;
  display: grid;
  grid-template-columns: 1.8fr 6fr 2fr;
  /* display: flex; */
  box-sizing: border-box;
  column-gap: 2.5rem;
  align-items: center;
  font-family: "Nunito";
  margin: 0 6.3vw 2.5rem 6.3vw;
`,s4=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 100%; */
`,a4=w.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 80px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,l4=w.div`
  /* border: 1px solid red; */
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  /* width: fit-content; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1rem 1.25rem;
  cursor: pointer;
  position: relative;
`,u4=w.div`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  top: 100%;
  box-sizing: border-box;
  padding: 1rem 0;
  background-color: white;

  ul {
    list-style: none;

    li {
      /* border: 1px solid red; */
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 1.125rem;
      /* margin: 0 1.125rem; */
      border-radius: 8px;
      display: flex;
      /* flex-direction: ; */
      align-items: center;
      justify-content: space-between;
      transition: all 0.15s linear;

      &:hover {
        background-color: #d8eefe;
      }
    }
  }
`,c4=w.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 0 auto 2.5rem;
`,ut=()=>{const[e,t]=x.useState(),[n,r]=x.useState(!1),{fetchLocalUserData:i}=rt();x.useEffect(()=>{i().then(d=>{t(d)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),i().then(d=>{t(d)})})},[]);const o=Re(),s=d=>{Je(),o(d)};x.useEffect(()=>{console.log(e==null?void 0:e.role)},[e]);const a=()=>{localStorage.clear(),o("/signin")},u=()=>{r(!1)},c=x.useRef(null);return fh(c,u),S(fe,{children:[S(o4,{children:[l(a4,{onClick:()=>s("/"),children:l("img",{src:Sy,alt:"tnl_logo"})}),l(s4,{children:l(jy,{placeholderText:"Search for a request, class, topic, subject, person, course, etc."})}),e&&S(l4,{onClick:()=>r(!n),ref:c,children:[l(kn,{name:e.userName,photo:e.photo,imgSize:"1.75rem",textSize:"1.25em"}),n&&l(u4,{children:S("ul",{children:[S("li",{onClick:()=>s("/me"),children:[l("span",{children:"View Profile"}),l($y,{})]}),S("li",{onClick:a,children:[l("span",{children:"Signout"}),l(S5,{})]})]})})]})]}),l(c4,{children:e&&l(lv,{role:e.role,userToken:e.token})}),l(P5,{})]})},d4="/assets/home-intro-img-c5a56783.png",f4=w.div`
  /* border: 1px solid pink; */
  background: #d8eefe;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  margin-top: 50px;
  margin-bottom: 1rem;
  box-sizing: border-box;

  font-family: "Nunito";
  font-style: normal;
`,h4=w.div`
  display: grid;
  /* grid-template-rows: auto auto auto; */
  gap: 35px;
  width: 65%;
  margin-right: 5vw;

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    color: #ffffff;
  }
`,p4=w.div`
  /* margin-bottom: 1rem; */
`,m4=w.h2`
  font-weight: 700;
  font-size: 39px;
  line-height: 121.4%;
  color: #000000;
  /* color: #ffffff; */
`,g4=w.div`
  width: 319.57px;
  height: 235.33px;
  /* border: 1px solid red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,y4=w.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;

    height: 61px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    background: #332ad5;
    background: #ef4565;
    color: #ffffff;
    border-radius: 8px;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  button.request {
    color: #364152;
    color: #ffffff;
    background: rgba(51, 42, 213, 0.05);
    background: #094067;
  }

  button:first-child {
    margin-right: 3vw;
  }
`,wh=()=>{const e=Re(),t=o=>{Je(),e(o)},[n,r]=x.useState(),{fetchLocalUserData:i}=rt();return x.useEffect(()=>{i().then(o=>{r(o.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),i().then(o=>{r(o.role)})})},[]),S(f4,{children:[S(h4,{children:[l(p4,{children:l(m4,{children:n=="learn"?"Learn something from your peers!!":"Teach something you know!!"})}),S(y4,{children:[S("button",{onClick:()=>t(n=="learn"?"/classes":"/requests"),children:[l("span",{children:n=="learn"?"See all classes":"See all requests"}),l(Qe,{strokeColor:"white"})]}),S("button",{className:"request",onClick:()=>t(`/create-${n}-request`),children:[S("span",{children:["Create a ",n=="learn"?"request":"class"]}),l(Qe,{strokeColor:"#ffffff"})]})]})]}),l(g4,{children:l("img",{src:d4,alt:"intro-img"})})]})},v4=w.div`
  h4 {
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    color: #344054;
    color: #d8eefe;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #000000;
      color: #ffffff;
      margin-bottom: 0.7rem;
      cursor: pointer;
    }
  }
`,Ym=e=>{const t=Re(),n=r=>{Je(),t(r)};return S(v4,{children:[l("h4",{children:e.heading}),l("ul",{children:e.listData.map((r,i)=>l("li",{onClick:()=>n(r.link),children:l("span",{children:r.title})},i))})]})},w4=w.div`
  /* border-top: 1px solid #7d89b0; */
  padding: 40px 0px 20px;
  font-family: "Nunito";
  font-style: normal;
  margin-top: 4rem;
  padding: 3.75rem 6.25rem 1.5rem;
  background-color: #094067;
`,x4=w.div`
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.2fr 1fr;
  border-bottom: 1px solid #d0d5dd;
  padding-bottom: 2.5rem;
`,S4=w.div`
  img {
    width: 200px;
  }
`,b4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 10px;

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #344054;
    color: #d8eefe;
  }
`,C4=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.4rem;

  svg {
    cursor: pointer;
  }
`,k4=w.div`
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    color: #d8eefe;
  }
`,_4=[{title:"About Us",link:"/about"},{title:"Contact",link:"/contact"}],T4=[{title:"Terms And Privacy",link:"/terms-and-privacy"}],E4=[{social:l(s5,{}),link:"https://twitter.com/Teach_n_Learn22"},{social:l(l5,{}),link:"https://www.facebook.com/people/Teach-and-Learn/100091595265820/"},{social:l(a5,{}),link:"https://www.instagram.com/teach.nlearn/"},{social:l(u5,{}),link:"https://www.youtube.com/@TeachandLearnApp"}],it=()=>S(w4,{children:[S(x4,{children:[l(S4,{children:l("img",{src:Sy,alt:""})}),l("div",{children:l(Ym,{heading:"Company",listData:_4})}),l("div",{children:l(Ym,{heading:"Legal",listData:T4})}),l(k4,{children:l("h5",{children:"Get the app"})})]}),S(b4,{children:[l("span",{children:"© Copyright 2023, All Rights Reserved"}),l(C4,{children:E4.map((e,t)=>l(Zl,{to:e.link,target:"_blank",children:e.social}))})]})]}),O4=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 22px;
  background: #674ff1;
  background: #094067;
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Nunito";
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`,P4=w.div`
  h4 {
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`,M4=w.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`,D4=w.div`
  /* border: 1px solid white; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`,uv=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,L4=w.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`,N4=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    width: 18px;
    height: 18px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    color: #000000;
  }
`,R4=({card:e,userId:t})=>{const n=()=>e.studentsEnrolled.filter(u=>u==t),r=()=>e.createdBy._id==t,i=Re();return S(O4,{onClick:()=>{Je(),r()?i(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}}):n().length==1?i(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}}):i(`/class-overviw/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}})},children:[l(P4,{children:l("h4",{children:e.subject})}),l(M4,{children:l("span",{children:e.topic.length>50?e.topic.slice(0,50)+" ...":e.topic})}),S(uv,{children:[l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"#FFFFFF",textColor:"#FFFFFF"}),l(L4,{children:l("span",{children:Br(e.date)+" , "+Sn(e.classStartsAt)+" - "+Sn(e.classEndsAt)})})]}),S(D4,{children:[S("div",{children:[l(As,{}),S("span",{children:[e.studentsEnrolled.length," Enrolled"]})]}),S(N4,{children:[l(Ss,{color:"white"}),S("span",{children:[e.price," Coins"]})]})]})]})},I4=w.div`
  background: ${e=>e.isFirstCard?"#094067":"#D8EEFE"};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 14px;
  cursor: pointer;
  font-family: "Nunito";
  font-style: normal;

  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`,A4=w.div`
  background: rgba(0, 0, 0, 0.1);
  background: #094067;
  background-color: ${e=>e.isFirstCard?"rgba(255, 255, 255, 0.15)":"#094067"};
  border-radius: 46px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
  }
`,$4=w.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  /* color: #000000; */
  color: ${e=>e.isFirstCard?"#FFFFFF":"#000000"};
  font-size: 24px;
  line-height: 33px;
`,F4=({card:e,isFirstCard:t})=>{const n=Re();return S(I4,{isFirstCard:t,onClick:()=>{Je(),n(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}})},children:[S(A4,{isFirstCard:t,children:[l(c5,{color:"#FFFFFF"}),l("span",{children:Sn(e.classStartsAt)+" - "+Sn(e.classEndsAt)})]}),l($4,{isFirstCard:t,children:l("span",{children:e.topic.length>50?e.topic.slice(0,50)+" ...":e.topic})}),l(uv,{children:l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:t?"white":"black",textColor:t?"white":"black"})})]})};var j4=function(e){return{display:e?"flex":"none"}},z4="#4fa94d",U4={"aria-busy":!0,role:"status"},Vm=globalThis&&globalThis.__assign||function(){return Vm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vm.apply(this,arguments)},Gm=globalThis&&globalThis.__assign||function(){return Gm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gm.apply(this,arguments)},qm=globalThis&&globalThis.__assign||function(){return qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qm.apply(this,arguments)},Qm=globalThis&&globalThis.__assign||function(){return Qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qm.apply(this,arguments)},Km=globalThis&&globalThis.__assign||function(){return Km=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Km.apply(this,arguments)},Zm=globalThis&&globalThis.__assign||function(){return Zm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zm.apply(this,arguments)},Jm=globalThis&&globalThis.__assign||function(){return Jm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jm.apply(this,arguments)},cv=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},dn=242.776657104492,B4=1.6,H4=vu(Xm||(Xm=cv([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),dn*.14,dn,dn*.11,dn*.35,dn,dn*.35,dn*.01,dn,dn*.99);w.path(eg||(eg=cv([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),dn*.01,dn,H4,B4);var Xm,eg,tg=globalThis&&globalThis.__assign||function(){return tg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tg.apply(this,arguments)},ng=globalThis&&globalThis.__assign||function(){return ng=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ng.apply(this,arguments)},rg=globalThis&&globalThis.__assign||function(){return rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rg.apply(this,arguments)},ig=globalThis&&globalThis.__assign||function(){return ig=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ig.apply(this,arguments)},og=globalThis&&globalThis.__assign||function(){return og=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},og.apply(this,arguments)},sg=globalThis&&globalThis.__assign||function(){return sg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sg.apply(this,arguments)},ag=globalThis&&globalThis.__assign||function(){return ag=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ag.apply(this,arguments)},W4=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,s=r[i[0]],a=1;s!=null&&a<o;)s=s[i[a]],a+=1;if(typeof s<"u")return s}return n}},xh=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},lg=globalThis&&globalThis.__assign||function(){return lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lg.apply(this,arguments)},Y4=vu(ug||(ug=xh([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));w.svg(cg||(cg=xh([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),Y4,W4("speed","0.75"));w.polyline(dg||(dg=xh([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var ug,cg,dg,qo=globalThis&&globalThis.__assign||function(){return qo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qo.apply(this,arguments)},dv=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.radius,s=o===void 0?1:o,a=e.color,u=a===void 0?z4:a,c=e.ariaLabel,d=c===void 0?"tail-spin-loading":c,f=e.wrapperStyle,h=e.wrapperClass,y=e.visible,p=y===void 0?!0:y;return re.createElement("div",qo({style:qo(qo({},j4(p)),f),className:h,"data-testid":"tail-spin-loading","aria-label":d},U4),re.createElement("svg",{width:i,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg"},re.createElement("defs",null,re.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},re.createElement("stop",{stopColor:u,stopOpacity:"0",offset:"0%"}),re.createElement("stop",{stopColor:u,stopOpacity:".631",offset:"63.146%"}),re.createElement("stop",{stopColor:u,offset:"100%"}))),re.createElement("g",{fill:"none",fillRule:"evenodd"},re.createElement("g",{transform:"translate(1 1)"},re.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:u,strokeWidth:"2"},re.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),re.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:s},re.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}))))))},fg=globalThis&&globalThis.__assign||function(){return fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fg.apply(this,arguments)},hg=globalThis&&globalThis.__assign||function(){return hg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hg.apply(this,arguments)},Sh=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},pg=globalThis&&globalThis.__assign||function(){return pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pg.apply(this,arguments)},V4=vu(mg||(mg=Sh([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));w.polygon(gg||(gg=Sh([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),V4);w.svg(yg||(yg=Sh([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var mg,gg,yg,vg=globalThis&&globalThis.__assign||function(){return vg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},vg.apply(this,arguments)},wg=globalThis&&globalThis.__assign||function(){return wg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wg.apply(this,arguments)},xg=globalThis&&globalThis.__assign||function(){return xg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xg.apply(this,arguments)},Sg=globalThis&&globalThis.__assign||function(){return Sg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sg.apply(this,arguments)},bg=globalThis&&globalThis.__assign||function(){return bg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bg.apply(this,arguments)},Cg=globalThis&&globalThis.__assign||function(){return Cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cg.apply(this,arguments)},kg=globalThis&&globalThis.__assign||function(){return kg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kg.apply(this,arguments)},_g=globalThis&&globalThis.__assign||function(){return _g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_g.apply(this,arguments)},Tg=globalThis&&globalThis.__assign||function(){return Tg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tg.apply(this,arguments)},Eg=globalThis&&globalThis.__assign||function(){return Eg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Eg.apply(this,arguments)},Og=globalThis&&globalThis.__assign||function(){return Og=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Og.apply(this,arguments)},Pg=globalThis&&globalThis.__assign||function(){return Pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pg.apply(this,arguments)},Mg=globalThis&&globalThis.__assign||function(){return Mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mg.apply(this,arguments)};const G4=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ht=e=>l(G4,{children:l(dv,{height:e.loaderHeight?e.loaderHeight:"60",width:e.loaderWidth?e.loaderWidth:"60",color:"#094067",ariaLabel:"tail-spin-loading",radius:"1",visible:!0})}),q4=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 4rem; */
`,Q4=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`,K4=w.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`,Z4=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;
  cursor: pointer;
  height: 41px;
  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
  }
`,J4=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`,X4=e=>{const t=Re(),n=()=>{Je(),t("/classes",{state:{elemLink:"upcoming"}})};return S(q4,{children:[S(Q4,{children:[l(K4,{children:e.heading}),S(Z4,{onClick:n,children:[l("span",{children:"See All"}),l(Qe,{strokeColor:"#384250"})]})]}),e.loading?l(Ht,{}):l(J4,{children:e.cardArr.map((r,i)=>l(F4,{card:r,isFirstCard:i==0},i))})]})},eC=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 22px;
  background: #094067;
  border-radius: 16px;
  cursor: pointer;
  font-family: "Nunito";
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`,tC=w.div`
  h4 {
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`,nC=w.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`,rC=w.div`
  /* border: 1px solid white; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`,iC=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oC=w.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`,sC=e=>{const t=Re();return S(eC,{onClick:()=>{Je(),t(`/learncard-overview/${e._id}`,{state:{learnCardId:e._id,backLink:"/"}})},children:[l(tC,{children:l("h4",{children:e.subject})}),l(nC,{children:l("span",{children:e.topic.length>50?e.topic.slice(0,50)+" ...":e.topic})}),l(iC,{children:l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"#FFFFFF",textColor:"#FFFFFF"})}),S(rC,{children:[S("div",{children:[l(As,{}),S("span",{children:[e.interestedStudents.length," Interested"]})]}),l(oC,{children:S("span",{children:["Due - ",Br(e.dueDate)]})})]})]})},aC=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`,lC=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`,uC=w.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`,cC=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;
  cursor: pointer;
  height: 41px;
  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
  }
`,dC=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`,fC=e=>{const t=Re(),n=()=>{Je(),t("/requests")};return S(aC,{children:[S(lC,{children:[l(uC,{children:e.heading}),S(cC,{onClick:n,children:[l("span",{children:"See All"}),l(Qe,{strokeColor:"#384250"})]})]}),e.loading?l(Ht,{}):l(dC,{children:e.requestCard.map((r,i)=>l(sC,{...r},i))})]})},hC=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 4rem; */
`,pC=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`,mC=w.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`,gC=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 12px;
  cursor: pointer;
  height: 41px;
  background: #eeeeee;
  border-radius: 46px;

  span {
    margin: 0;
    padding: 0;
  }
`,yC=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`,vC=e=>{const t=Re(),n=()=>{Je(),t("/classes")};return S(hC,{children:[S(pC,{children:[l(mC,{children:e.heading}),S(gC,{onClick:n,children:[l("span",{children:"See All"}),l(Qe,{strokeColor:"#384250"})]})]}),e.loading?l(Ht,{}):l(yC,{children:e.cardArr.map((r,i)=>l(R4,{card:r,userId:e.userId},i))})]})},fv=w.div`
  position: relative;
  width: 100%;

  box-sizing: border-box;

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: ${e=>e.areaHeight?e.areaHeight:"10rem"};
    padding: 15px 0px 15px 10px;
    border: 1.5px solid #d5d9eb;
    border-radius: 8px;
    color: #000000;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    resize: none;
  }
`,wC=w.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  text-transform: ${e=>e.isValid?"none":"uppercase"};
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${fv}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`,Wt=e=>{const[t,n]=x.useState(!1);x.useEffect(()=>{var i;((i=e.value)==null?void 0:i.trim().length)>0&&n(!0)},[e]);const r=i=>{e.updateSingleField?e.updateSingleField(i.target.value):e.updateFields({[i.target.name]:i.target.value});const o=i.target.value;(o==null?void 0:o.trim().length)>0?n(!0):n(!1)};return S(fv,{areaHeight:e.areaHeight?e.areaHeight:void 0,children:[l("textarea",{required:!0,value:e.value,name:e.name,onChange:i=>r(i)}),l(wC,{isValid:t,children:e.label})]})},xC=w.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 16vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  h2 {
    color: #000;
    /* text-align: center; */
    font-size: 4rem;
    line-height: 1;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.18rem;
  }

  h4 {
    color: #000;
    font-size: 1.26563rem;
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: -0.05063rem;
  }

  textarea {
    border-radius: 8px;
    border: 1px solid #5d6b98;
  }

  button {
    display: flex;
    width: 22.75rem;
    padding: 1.375rem 2.125rem;
    justify-content: center;
    align-items: flex-end;
    gap: 0.625rem;
    border-radius: 2px;
    background: #094067;
    background: #ef4565;
    color: #fff;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`,SC=e=>{const[t,n]=x.useState("");function r(a){n(a)}const i={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},o=()=>t==""?(I.error("Feedback cannot be empty",i),!1):!0;return S(xC,{children:[l("h2",{children:"Please share your feedback"}),l("h4",{children:"Let us know how we can improve our platform and any additional features you would like to see"}),l(Wt,{label:"Your Feedback",name:"feedback",value:t,areaHeight:"15rem",updateSingleField:r}),l("button",{onClick:async()=>{console.log(t),o()&&await le.post(`${ue}${ce}/user/my-feedback`,{feedback:t},{headers:me(e.userToken)}).then(({data:a})=>{console.log(a),I.success("Feedback successfully submitted!!",i),n("")}).catch(a=>{console.log(a),I.error("Feedback couldnt be submiited. Try again!!",i)})},children:"Submit Feedback"})]})};var Gd={},bC={get exports(){return Gd},set exports(e){Gd=e}},bh={},Ch={},je={},Eu={};(function(e){function t(s,a,u){var c=a.slidesToShow,d=a.currentSlide;return u.length>2*c?s+2*c:d>=u.length?u.length+s:s}function n(s,a){if(a.length>2*s){for(var u={},c=a.length-2*s,d=a.length-c,f=c,h=0;h<d;h++)u[h]=f,f++;var y=a.length+d,p=y+a.slice(0,2*s).length,v=0;for(h=y;h<=p;h++)u[h]=v,v++;var C=y,m=0;for(h=d;h<C;h++)u[h]=m,m++;return u}u={};var g=3*a.length,b=0;for(h=0;h<g;h++)u[h]=b,++b===a.length&&(b=0);return u}function r(s,a){return a.length<s?a:a.length>2*s?a.slice(a.length-2*s,a.length).concat(a,a.slice(0,2*s)):a.concat(a,a)}function i(s,a){return a.length>2*s?2*s:a.length}function o(s,a,u){var c,d=s.currentSlide,f=s.slidesToShow,h=s.itemWidth,y=s.totalItems,p=0,v=0,C=d===0,m=a.length-(a.length-2*f);return a.length<f?(v=p=0,C=c=!1):a.length>2*f?((c=d>=m+a.length)&&(v=-h*(p=d-a.length)),C&&(v=-h*(p=m+(a.length-2*f)))):((c=d>=2*a.length)&&(v=-h*(p=d-a.length)),C&&(v=u.showDots?-h*(p=a.length):-h*(p=y/3))),{isReachingTheEnd:c,isReachingTheStart:C,nextSlide:p,nextPosition:v}}Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=t,e.getOriginalIndexLookupTableByClones=n,e.getClones=r,e.getInitialSlideInInfiniteMode=i,e.checkClonesPosition=o})(Eu);var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});function CC(e,t,n,r){var i=0,o=r||n;return t&&o&&(i=e[o].partialVisibilityGutter||e[o].paritialVisibilityGutter),i}function kC(e,t){var n;return t[e]&&(n=(100/t[e].items).toFixed(1)),n}function _C(e,t,n){return Math.round(n/(t+(e.centerMode?1:0)))}Hi.getPartialVisibilityGutter=CC,Hi.getWidthFromDeviceType=kC,Hi.getItemClientSideWidth=_C;var ot={};Object.defineProperty(ot,"__esModule",{value:!0});var qd=Hi;function kh(e){var t=e.slidesToShow;return e.totalItems<t}function TC(e,t){var n,r=e.domLoaded,i=e.slidesToShow,o=e.containerWidth,s=e.itemWidth,a=t.deviceType,u=t.responsive,c=t.ssr,d=t.partialVisbile,f=t.partialVisible,h=!!(r&&i&&o&&s);c&&a&&!h&&(n=qd.getWidthFromDeviceType(a,u));var y=!!(c&&a&&!h&&n);return{shouldRenderOnSSR:y,flexBisis:n,domFullyLoaded:h,partialVisibilityGutter:qd.getPartialVisibilityGutter(u,d||f,a,e.deviceType),shouldRenderAtAll:y||h}}function EC(e,t){var n=t.currentSlide,r=t.slidesToShow;return n<=e&&e<n+r}function hv(e,t,n){var r=n||e.transform;return!t.infinite&&e.currentSlide===0||kh(e)?r:r+e.itemWidth/2}function OC(e){return!(0<e.currentSlide)}function pv(e){var t=e.currentSlide,n=e.totalItems;return!(t+e.slidesToShow<n)}function mv(e,t,n,r){t===void 0&&(t=0);var i=e.currentSlide,o=e.slidesToShow,s=pv(e),a=!n.infinite&&s,u=r||e.transform;if(kh(e))return u;var c=u+i*t;return a?c+(e.containerWidth-(e.itemWidth-t)*o):c}function gv(e,t){return e.rtl?-1*t:t}function PC(e,t,n){var r=t.partialVisbile,i=t.partialVisible,o=t.responsive,s=t.deviceType,a=t.centerMode,u=n||e.transform,c=qd.getPartialVisibilityGutter(o,r||i,s,e.deviceType);return gv(t,i||r?mv(e,c,t,n):a?hv(e,t,n):u)}function MC(e,t){var n=e.domLoaded,r=e.slidesToShow,i=e.containerWidth,o=e.itemWidth,s=t.deviceType,a=t.responsive,u=t.slidesToSlide||1,c=!!(n&&r&&i&&o);return t.ssr&&t.deviceType&&!c&&Object.keys(a).forEach(function(d){var f=a[d].slidesToSlide;s===d&&f&&(u=f)}),c&&Object.keys(a).forEach(function(d){var f=a[d],h=f.breakpoint,y=f.slidesToSlide,p=h.max,v=h.min;y&&window.innerWidth>=v&&window.innerWidth<=p&&(u=y)}),u}ot.notEnoughChildren=kh,ot.getInitialState=TC,ot.getIfSlideIsVisbile=EC,ot.getTransformForCenterMode=hv,ot.isInLeftEnd=OC,ot.isInRightEnd=pv,ot.getTransformForPartialVsibile=mv,ot.parsePosition=gv,ot.getTransform=PC,ot.getSlidesToSlide=MC;var _h={};Object.defineProperty(_h,"__esModule",{value:!0});var DC=function(e,t,n){var r;return function(){var i=arguments;r||(e.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},t))}};_h.default=DC;var yv={};(function(e){function t(n,r){var i=r.partialVisbile,o=r.partialVisible,s=r.centerMode,a=r.ssr,u=r.responsive;if((i||o)&&s)throw new Error("center mode can not be used at the same time with partialVisible");if(!u)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(u&&typeof u!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t})(yv);var Th={};Object.defineProperty(Th,"__esModule",{value:!0});var LC=ot;function NC(e,t,n){n===void 0&&(n=0);var r,i,o=e.slidesToShow,s=e.currentSlide,a=e.itemWidth,u=e.totalItems,c=LC.getSlidesToSlide(e,t),d=s+1+n+o+(0<n?0:c);return i=d<=u?-a*(r=s+n+(0<n?0:c)):u<d&&s!==u-o?-a*(r=u-o):r=void 0,{nextSlides:r,nextPosition:i}}Th.populateNextSlides=NC;var Eh={};Object.defineProperty(Eh,"__esModule",{value:!0});var RC=x,IC=ot,AC=ot;function $C(e,t,n){n===void 0&&(n=0);var r,i,o=e.currentSlide,s=e.itemWidth,a=e.slidesToShow,u=t.children,c=t.showDots,d=t.infinite,f=IC.getSlidesToSlide(e,t),h=o-n-(0<n?0:f),y=(RC.Children.toArray(u).length-a)%f;return i=0<=h?(r=h,c&&!d&&0<y&&AC.isInRightEnd(e)&&(r=o-y),-s*r):r=h<0&&o!==0?0:void 0,{nextSlides:r,nextPosition:i}}Eh.populatePreviousSlides=$C;var vv={};(function(e){function t(n,r,i,o,s,a){var u,c,d=n.itemWidth,f=n.slidesToShow,h=n.totalItems,y=n.currentSlide,p=r.infinite,v=!1,C=Math.round((i-o)/d),m=Math.round((o-i)/d),g=i<s;if(s<i&&C<=f){u="right";var b=Math.abs(-d*(h-f)),k=a-(o-s),_=y===h-f;(Math.abs(k)<=b||_&&p)&&(c=k,v=!0)}return g&&m<=f&&(u="left",((k=a+(s-o))<=0||y===0&&p)&&(v=!0,c=k)),{direction:u,nextPosition:c,canContinue:v}}Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=t})(vv);Object.defineProperty(je,"__esModule",{value:!0});var ha=Eu;je.getOriginalCounterPart=ha.getOriginalCounterPart,je.getClones=ha.getClones,je.checkClonesPosition=ha.checkClonesPosition,je.getInitialSlideInInfiniteMode=ha.getInitialSlideInInfiniteMode;var Pc=Hi;je.getWidthFromDeviceType=Pc.getWidthFromDeviceType,je.getPartialVisibilityGutter=Pc.getPartialVisibilityGutter,je.getItemClientSideWidth=Pc.getItemClientSideWidth;var pr=ot;je.getInitialState=pr.getInitialState,je.getIfSlideIsVisbile=pr.getIfSlideIsVisbile,je.getTransformForCenterMode=pr.getTransformForCenterMode,je.getTransformForPartialVsibile=pr.getTransformForPartialVsibile,je.isInLeftEnd=pr.isInLeftEnd,je.isInRightEnd=pr.isInRightEnd,je.notEnoughChildren=pr.notEnoughChildren,je.getSlidesToSlide=pr.getSlidesToSlide;var FC=_h;je.throttle=FC.default;var jC=yv;je.throwError=jC.default;var zC=Th;je.populateNextSlides=zC.populateNextSlides;var UC=Eh;je.populatePreviousSlides=UC.populatePreviousSlides;var BC=vv;je.populateSlidesOnMouseTouchMove=BC.populateSlidesOnMouseTouchMove;var Ou={},HC=Ua&&Ua.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Ou,"__esModule",{value:!0});var WC=x;function YC(e){return"clientY"in e}Ou.isMouseMoveEvent=YC;var VC=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return HC(t,e),t}(WC.Component);Ou.default=VC;var Oh={},Ph={};Object.defineProperty(Ph,"__esModule",{value:!0});var GC=Eu,qC=ot;function QC(e,t,n,r){var i={},o=qC.getSlidesToSlide(t,n);return Array(e).fill(0).forEach(function(s,a){var u=GC.getOriginalCounterPart(a,t,r);if(a===0)i[0]=u;else{var c=i[a-1]+o;i[a]=c}}),i}Ph.getLookupTableForNextSlides=QC;Object.defineProperty(Oh,"__esModule",{value:!0});var Oo=x,KC=Eu,ZC=Ph,Dg=ot,JC=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.getState,o=t.showDots,s=t.customDot,a=t.dotListClass,u=t.infinite,c=t.children;if(!o||Dg.notEnoughChildren(n))return null;var d,f=n.currentSlide,h=n.slidesToShow,y=Dg.getSlidesToSlide(n,t),p=Oo.Children.toArray(c);d=u?Math.ceil(p.length/y):Math.ceil((p.length-h)/y)+1;var v=ZC.getLookupTableForNextSlides(d,n,t,p),C=KC.getOriginalIndexLookupTableByClones(h,p),m=C[f];return Oo.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(d).fill(0).map(function(g,b){var k,_;if(u){_=v[b];var M=C[_];k=m===M||M<=m&&m<M+y}else{var L=p.length-h,D=b*y;k=(_=L<D?L:D)===f||_<f&&f<_+y&&f<p.length-h}return s?Oo.cloneElement(s,{index:b,active:k,key:b,onClick:function(){return r(_)},carouselState:i()}):Oo.createElement("li",{"data-index":b,key:b,className:"react-multi-carousel-dot "+(k?"react-multi-carousel-dot--active":"")},Oo.createElement("button",{"aria-label":"Go to slide "+(b+1),onClick:function(){return r(_)}}))}))};Oh.default=JC;var Pu={};Object.defineProperty(Pu,"__esModule",{value:!0});var xl=x,XC=function(e){var t=e.customLeftArrow,n=e.getState,r=e.previous,i=e.disabled,o=e.rtl;if(t)return xl.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var s=o?"rtl":"";return xl.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+s,onClick:function(){return r()},type:"button",disabled:i})};Pu.LeftArrow=XC;var ek=function(e){var t=e.customRightArrow,n=e.getState,r=e.next,i=e.disabled,o=e.rtl;if(t)return xl.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var s=o?"rtl":"";return xl.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+s,onClick:function(){return r()},type:"button",disabled:i})};Pu.RightArrow=ek;var Mh={};Object.defineProperty(Mh,"__esModule",{value:!0});var pa=x,Mc=je,tk=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.clones,o=e.notEnoughChildren,s=n.itemWidth,a=t.children,u=t.infinite,c=t.itemClass,d=t.itemAriaLabel,f=t.partialVisbile,h=t.partialVisible,y=Mc.getInitialState(n,t),p=y.flexBisis,v=y.shouldRenderOnSSR,C=y.domFullyLoaded,m=y.partialVisibilityGutter;return y.shouldRenderAtAll?(f&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),pa.createElement(pa.Fragment,null,(u?i:pa.Children.toArray(a)).map(function(g,b){return pa.createElement("li",{key:b,"data-index":b,onClick:function(){t.focusOnSelect&&r(b)},"aria-hidden":Mc.getIfSlideIsVisbile(b,n)?"false":"true","aria-label":d||(g.props.ariaLabel?g.props.ariaLabel:null),style:{flex:v?"1 0 "+p+"%":"auto",position:"relative",width:C?((f||h)&&m&&!o?s-m:s)+"px":"auto"},className:"react-multi-carousel-item "+(Mc.getIfSlideIsVisbile(b,n)?"react-multi-carousel-item--active":"")+" "+c},g)}))):null};Mh.default=tk;var nk=Ua&&Ua.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Ch,"__esModule",{value:!0});var ht=x,Ve=je,Gr=Ou,rk=Oh,Lg=Pu,ik=Mh,ma=ot,Pn=400,Ng="transform 400ms ease-in-out",ok=function(e){function t(n){var r=e.call(this,n)||this;return r.containerRef=ht.createRef(),r.listRef=ht.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:ht.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=Ve.throttle(r.next.bind(r),n.transitionDuration||Pn,r.setIsInThrottle),r.previous=Ve.throttle(r.previous.bind(r),n.transitionDuration||Pn,r.setIsInThrottle),r.goToSlide=Ve.throttle(r.goToSlide.bind(r),n.transitionDuration||Pn,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return nk(t,e),t.prototype.resetTotalItems=function(){var n=this,r=ht.Children.count(this.props.children),i=Ve.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},t.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},t.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var o=ma.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(o+i)+"px,0,0)")},t.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||Ng:"none")},t.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.setClones=function(n,r,i,o){var s=this;o===void 0&&(o=!1),this.isAnimationAllowed=!1;var a=ht.Children.toArray(this.props.children),u=Ve.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),c=Ve.getClones(this.state.slidesToShow,a),d=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:i&&!o?d:u},function(){s.correctItemsPosition(r||s.state.itemWidth)})},t.prototype.setItemsToShow=function(n,r){var i=this,o=this.props.responsive;Object.keys(o).forEach(function(s){var a=o[s],u=a.breakpoint,c=a.items,d=u.max,f=u.min,h=[window.innerWidth];window.screen&&window.screen.width&&h.push(window.screen.width);var y=Math.min.apply(Math,h);f<=y&&y<=d&&(i.setState({slidesToShow:c,deviceType:s}),i.setContainerAndItemWidth(c,n,r))})},t.prototype.setContainerAndItemWidth=function(n,r,i){var o=this;if(this.containerRef&&this.containerRef.current){var s=this.containerRef.current.offsetWidth,a=Ve.getItemClientSideWidth(this.props,n,s);this.setState({containerWidth:s,itemWidth:a},function(){o.props.infinite&&o.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},t.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var o=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(o,!0),this.setState({transform:o})},t.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},t.prototype.componentDidUpdate=function(n,r){var i=this,o=n.keyBoardControl,s=n.autoPlay,a=n.children,u=r.containerWidth,c=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==u&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||Pn)),o&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!o&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),s&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),s||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?t.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||Pn):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ve.isInRightEnd(this.state)){var f=this.props.transitionDuration||Pn;t.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},f+this.props.autoPlaySpeed)}},t.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,o=ht.Children.toArray(this.props.children),s=Ve.checkClonesPosition(this.state,o,this.props),a=s.isReachingTheEnd,u=s.isReachingTheStart,c=s.nextSlide,d=s.nextPosition;this.state.domLoaded&&i&&(a||u)&&(this.isAnimationAllowed=!1,t.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:c})},this.props.transitionDuration||Pn))},t.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,s=i.beforeChange;if(!Ve.notEnoughChildren(this.state)){var a=Ve.populateNextSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition,d=this.state.currentSlide;u!==void 0&&c!==void 0&&(typeof s=="function"&&s(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof o=="function"&&(t.afterChangeTimeout=setTimeout(function(){o(d,r.getState())},r.props.transitionDuration||Pn))}))}},t.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,s=i.beforeChange;if(!Ve.notEnoughChildren(this.state)){var a=Ve.populatePreviousSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition;if(u!==void 0&&c!==void 0){var d=this.state.currentSlide;typeof s=="function"&&s(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof o=="function"&&(t.afterChangeTimeout2=setTimeout(function(){o(d,r.getState())},r.props.transitionDuration||Pn))})}}},t.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),t.clonesTimeout&&clearTimeout(t.clonesTimeout),t.isInThrottleTimeout&&clearTimeout(t.isInThrottleTimeout),t.transformTimeout&&clearTimeout(t.transformTimeout),t.afterChangeTimeout&&clearTimeout(t.afterChangeTimeout),t.afterChangeTimeout2&&clearTimeout(t.afterChangeTimeout2),t.afterChangeTimeout3&&clearTimeout(t.afterChangeTimeout3)},t.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},t.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:ma.parsePosition(this.props,r),clientY:ma.parsePosition(this.props,i)}},t.prototype.handleDown=function(n){if(!(!Gr.isMouseMoveEvent(n)&&!this.props.swipeable||Gr.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(Gr.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=o,this.lastX=i,this.isAnimationAllowed=!1}},t.prototype.handleMove=function(n){if(!(!Gr.isMouseMoveEvent(n)&&!this.props.swipeable||Gr.isMouseMoveEvent(n)&&!this.props.draggable||Ve.notEnoughChildren(this.state))){var r=this.getCords(Gr.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY,s=this.initialX-i,a=this.initialY-o;if(this.onMove){if(!(Math.abs(s)>Math.abs(a)))return;var u=Ve.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),c=u.direction,d=u.nextPosition,f=u.canContinue;c&&(this.direction=c,f&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=i}}},t.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var o=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(o)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(o=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(o)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},t.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,o=i===void 0?0:i,s=r.left,a=s===void 0?0:s,u=r.bottom,c=u===void 0?0:u,d=r.right,f=d===void 0?0:d;return 0<=o&&0<=a&&c<=(window.innerHeight||document.documentElement.clientHeight)&&f<=(window.innerWidth||document.documentElement.clientWidth)},t.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},t.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},t.prototype.handleEnter=function(n){Gr.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},t.prototype.goToSlide=function(n,r,i){var o=this;if(i===void 0&&(i=!0),!this.isInThrottle){var s=this.state.itemWidth,a=this.props,u=a.afterChange,c=a.beforeChange,d=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-s*n},function(){o.props.infinite&&o.correctClonesPosition({domLoaded:!0}),typeof u!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(t.afterChangeTimeout3=setTimeout(function(){u(d,o.getState())},o.props.transitionDuration||Pn))})}},t.prototype.getState=function(){return this.state},t.prototype.renderLeftArrow=function(n){var r=this,i=this.props,o=i.customLeftArrow,s=i.rtl;return ht.createElement(Lg.LeftArrow,{customLeftArrow:o,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:s})},t.prototype.renderRightArrow=function(n){var r=this,i=this.props,o=i.customRightArrow,s=i.rtl;return ht.createElement(Lg.RightArrow,{customRightArrow:o,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:s})},t.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?ht.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,o){return n.goToSlide(i,o)},carouselState:this.getState()}):null},t.prototype.renderDotsList=function(){var n=this;return ht.createElement(rk.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},t.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=ht.Children.toArray(this.props.children);n=Ve.getClones(this.state.slidesToShow,r)}return ht.createElement(ik.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ve.notEnoughChildren(this.state),props:this.props})},t.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,o=n.renderArrowsWhenDisabled,s=n.removeArrowOnDeviceType,a=n.infinite,u=n.containerClass,c=n.sliderClass,d=n.customTransition,f=n.additionalTransfrom,h=n.renderDotsOutside,y=n.renderButtonGroupOutside,p=n.className,v=n.rtl,C=Ve.getInitialState(this.state,this.props),m=C.shouldRenderOnSSR,g=C.shouldRenderAtAll,b=Ve.isInLeftEnd(this.state),k=Ve.isInRightEnd(this.state),_=i&&!(s&&(r&&-1<s.indexOf(r)||this.state.deviceType&&-1<s.indexOf(this.state.deviceType)))&&!Ve.notEnoughChildren(this.state)&&g,M=!a&&b,L=!a&&k,D=ma.getTransform(this.state,this.props);return ht.createElement(ht.Fragment,null,ht.createElement("div",{className:"react-multi-carousel-list "+u+" "+p,dir:v?"rtl":"ltr",ref:this.containerRef},ht.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?d||Ng:"none",overflow:m?"hidden":"unset",transform:"translate3d("+(D+f)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),_&&(!M||o)&&this.renderLeftArrow(M),_&&(!L||o)&&this.renderRightArrow(L),g&&!y&&this.renderButtonGroups(),g&&!h&&this.renderDotsList()),g&&h&&this.renderDotsList(),g&&y&&this.renderButtonGroups())},t.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},t}(ht.Component);Ch.default=ok;Object.defineProperty(bh,"__esModule",{value:!0});var sk=Ch;bh.default=sk.default;(function(e){e.exports=bh})(bC);const wv=of(Gd),ak=w.div`
  /* border: 1px solid red; */
  margin-bottom: 1rem;
  h3 {
    color: #2b2c34;
    font-size: 2.625rem;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.105rem;
    margin-bottom: 2rem;
  }
`,lk=w.div`
  /* border: 1px solid red; */
  display: flex;
  max-width: 25rem;
  height: 20em;
  margin-right: 1rem;
  flex-direction: column;
  align-items: flex-start;

  iframe {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px 20px 0px 0px;
  }
`,uk=w.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0px 0px 20px 20px;
  background: #094067;
  color: #fff;
  font-size: 1.75rem;
  font-family: Nunito;
  font-weight: 600;
  letter-spacing: -0.07rem;
`,ck={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},dk=[{iframe:l("iframe",{src:"https://www.youtube.com/embed/9Rg4NKwCsZw",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),text:"The Feynman Technique of Learning Anything"}],fk=dk.map((e,t)=>S(lk,{children:[e.iframe,l(uk,{children:e.text})]})),xv=()=>S(ak,{children:[l("h3",{children:"Watch these videos to know how and why to use Teach and Learn"}),l(wv,{responsive:ck,children:fk}),";"]}),hk=w.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,pk=()=>{const[e,t]=x.useState(""),[n,r]=x.useState(""),[i,o]=x.useState(""),[s,a]=x.useState(),[u,c]=x.useState(),[d,f]=x.useState(),{fetchLocalUserData:h}=rt(),y=Re(),[p,v]=x.useState(!1),[C,m]=x.useState(!0),[g,b]=x.useState(!0),[k,_]=x.useState(!0);x.useEffect(()=>{h().then(q=>{t(q.token),o(q._id),r(q.role),v(!0)}).catch(()=>{y("/teachNlearn")})},[]);async function M(){await le.get(`${ue}${ce}/teach/recommended-classes`,{headers:me(e??"")}).then(({data:q})=>{console.log(q.stats),a(q.stats),m(!1)})}async function L(){await le.get(`${ue}${ce}/user/myclasses/upcoming`,{headers:me(e)}).then(({data:q})=>{const z=q.upcomingClasses;console.log(z),c(z),b(!1)})}const D=async()=>{await le.get(`${ue}${ce}/learn/top-requests`,{headers:me(e)}).then(({data:q})=>{console.log(q.stats);const z=q.stats;f(z),_(!1)})};return x.useEffect(()=>{e&&(M(),L(),D())},[e]),p?S(fe,{children:[l(ut,{}),S(hk,{children:[l(wh,{}),s&&s.length!=0&&l(vC,{heading:"Classes recommended for you!",cardArr:s,userId:i,loading:C}),u&&u.length!=0&&l(X4,{heading:"Upcoming Enrolled Classes!",cardArr:u,loading:g}),d&&d.length!=0&&l(fC,{heading:"Rising Requests",requestCard:d,loading:k}),l(xv,{}),l(SC,{userToken:e})]}),l(it,{})]}):null},mk=w.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    border: 1px solid #cdd5df;
    border-radius: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 6px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: #4b5565;
    }
  }
`,Dh=e=>l(mk,{onClick:e.onClickFunc,children:S("div",{children:[l("span",{children:"Edit"}),l(i5,{})]})});var Sl={},gk={get exports(){return Sl},set exports(e){Sl=e}},hi={},bl={},yk={get exports(){return bl},set exports(e){bl=e}},vk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wk=vk,xk=wk;function Sv(){}function bv(){}bv.resetWarningCache=Sv;var Sk=function(){function e(r,i,o,s,a,u){if(u!==xk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:bv,resetWarningCache:Sv};return n.PropTypes=n,n};yk.exports=Sk();var Cl={},bk={get exports(){return Cl},set exports(e){Cl=e}},_n={},Cs={},Ck={get exports(){return Cs},set exports(e){Cs=e}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(f,h){return h.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function s(f){var h=f.offsetWidth<=0&&f.offsetHeight<=0;if(h&&!f.innerHTML)return!0;try{var y=window.getComputedStyle(f),p=y.getPropertyValue("display");return h?p!==r&&o(f,y):p===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var h=f,y=f.getRootNode&&f.getRootNode();h&&h!==document.body;){if(y&&h===y&&(h=y.host.parentNode),s(h))return!1;h=h.parentNode}return!0}function u(f,h){var y=f.nodeName.toLowerCase(),p=i.test(y)&&!f.disabled||y==="a"&&f.href||h;return p&&a(f)}function c(f){var h=f.getAttribute("tabindex");h===null&&(h=void 0);var y=isNaN(h);return(y||h>=0)&&u(f,!y)}function d(f){var h=[].slice.call(f.querySelectorAll("*"),0).reduce(function(y,p){return y.concat(p.shadowRoot?d(p.shadowRoot):[p])},[]);return h.filter(c)}e.exports=t.default})(Ck,Cs);Object.defineProperty(_n,"__esModule",{value:!0});_n.resetState=Ek;_n.log=Ok;_n.handleBlur=ks;_n.handleFocus=_s;_n.markForFocusLater=Pk;_n.returnFocus=Mk;_n.popWithoutFocus=Dk;_n.setupScopedFocus=Lk;_n.teardownScopedFocus=Nk;var kk=Cs,_k=Tk(kk);function Tk(e){return e&&e.__esModule?e:{default:e}}var ro=[],Ii=null,Qd=!1;function Ek(){ro=[]}function Ok(){}function ks(){Qd=!0}function _s(){if(Qd){if(Qd=!1,!Ii)return;setTimeout(function(){if(!Ii.contains(document.activeElement)){var e=(0,_k.default)(Ii)[0]||Ii;e.focus()}},0)}}function Pk(){ro.push(document.activeElement)}function Mk(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{ro.length!==0&&(t=ro.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Dk(){ro.length>0&&ro.pop()}function Lk(e){Ii=e,window.addEventListener?(window.addEventListener("blur",ks,!1),document.addEventListener("focus",_s,!0)):(window.attachEvent("onBlur",ks),document.attachEvent("onFocus",_s))}function Nk(){Ii=null,window.addEventListener?(window.removeEventListener("blur",ks),document.removeEventListener("focus",_s)):(window.detachEvent("onBlur",ks),document.detachEvent("onFocus",_s))}var kl={},Rk={get exports(){return kl},set exports(e){kl=e}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=Cs,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function o(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?o(a.activeElement.shadowRoot):a.activeElement}function s(a,u){var c=(0,r.default)(a);if(!c.length){u.preventDefault();return}var d=void 0,f=u.shiftKey,h=c[0],y=c[c.length-1],p=o();if(a===p){if(!f)return;d=y}if(y===p&&!f&&(d=h),h===p&&f&&(d=y),d){u.preventDefault(),d.focus();return}var v=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),C=v!=null&&v[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(C){var m=c.indexOf(p);if(m>-1&&(m+=f?-1:1),d=c[m],typeof d>"u"){u.preventDefault(),d=f?y:h,d.focus();return}u.preventDefault(),d.focus()}}e.exports=t.default})(Rk,kl);var Tn={},Ik=function(){},Ak=Ik,wn={},Kd={},$k={get exports(){return Kd},set exports(e){Kd=e}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})($k);Object.defineProperty(wn,"__esModule",{value:!0});wn.canUseDOM=wn.SafeNodeList=wn.SafeHTMLCollection=void 0;var Fk=Kd,jk=zk(Fk);function zk(e){return e&&e.__esModule?e:{default:e}}var Mu=jk.default,Uk=Mu.canUseDOM?window.HTMLElement:{};wn.SafeHTMLCollection=Mu.canUseDOM?window.HTMLCollection:{};wn.SafeNodeList=Mu.canUseDOM?window.NodeList:{};wn.canUseDOM=Mu.canUseDOM;wn.default=Uk;Object.defineProperty(Tn,"__esModule",{value:!0});Tn.resetState=Vk;Tn.log=Gk;Tn.assertNodeList=Cv;Tn.setElement=qk;Tn.validateElement=Lh;Tn.hide=Qk;Tn.show=Kk;Tn.documentNotReadyOrSSRTesting=Zk;var Bk=Ak,Hk=Yk(Bk),Wk=wn;function Yk(e){return e&&e.__esModule?e:{default:e}}var Kt=null;function Vk(){Kt&&(Kt.removeAttribute?Kt.removeAttribute("aria-hidden"):Kt.length!=null?Kt.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(Kt).forEach(function(e){return e.removeAttribute("aria-hidden")})),Kt=null}function Gk(){}function Cv(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function qk(e){var t=e;if(typeof t=="string"&&Wk.canUseDOM){var n=document.querySelectorAll(t);Cv(n,t),t=n}return Kt=t||Kt,Kt}function Lh(e){var t=e||Kt;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Hk.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Qk(e){var t=!0,n=!1,r=void 0;try{for(var i=Lh(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var s=o.value;s.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Kk(e){var t=!0,n=!1,r=void 0;try{for(var i=Lh(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var s=o.value;s.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function Zk(){Kt=null}var fo={};Object.defineProperty(fo,"__esModule",{value:!0});fo.resetState=Jk;fo.log=Xk;var Qo={},Ko={};function Rg(e,t){e.classList.remove(t)}function Jk(){var e=document.getElementsByTagName("html")[0];for(var t in Qo)Rg(e,Qo[t]);var n=document.body;for(var r in Ko)Rg(n,Ko[r]);Qo={},Ko={}}function Xk(){}var e_=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},t_=function(t,n){return t[n]&&(t[n]-=1),n},n_=function(t,n,r){r.forEach(function(i){e_(n,i),t.add(i)})},r_=function(t,n,r){r.forEach(function(i){t_(n,i),n[i]===0&&t.remove(i)})};fo.add=function(t,n){return n_(t.classList,t.nodeName.toLowerCase()=="html"?Qo:Ko,n.split(" "))};fo.remove=function(t,n){return r_(t.classList,t.nodeName.toLowerCase()=="html"?Qo:Ko,n.split(" "))};var ho={};Object.defineProperty(ho,"__esModule",{value:!0});ho.log=o_;ho.resetState=s_;function i_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var kv=function e(){var t=this;i_(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},_l=new kv;function o_(){console.log("portalOpenInstances ----------"),console.log(_l.openInstances.length),_l.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function s_(){_l=new kv}ho.default=_l;var Nh={};Object.defineProperty(Nh,"__esModule",{value:!0});Nh.resetState=c_;Nh.log=d_;var a_=ho,l_=u_(a_);function u_(e){return e&&e.__esModule?e:{default:e}}var xt=void 0,hn=void 0,oi=[];function c_(){for(var e=[xt,hn],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}xt=hn=null,oi=[]}function d_(){console.log("bodyTrap ----------"),console.log(oi.length);for(var e=[xt,hn],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ig(){oi.length!==0&&oi[oi.length-1].focusContent()}function f_(e,t){!xt&&!hn&&(xt=document.createElement("div"),xt.setAttribute("data-react-modal-body-trap",""),xt.style.position="absolute",xt.style.opacity="0",xt.setAttribute("tabindex","0"),xt.addEventListener("focus",Ig),hn=xt.cloneNode(),hn.addEventListener("focus",Ig)),oi=t,oi.length>0?(document.body.firstChild!==xt&&document.body.insertBefore(xt,document.body.firstChild),document.body.lastChild!==hn&&document.body.appendChild(hn)):(xt.parentElement&&xt.parentElement.removeChild(xt),hn.parentElement&&hn.parentElement.removeChild(hn))}l_.default.subscribe(f_);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function($){for(var B=1;B<arguments.length;B++){var J=arguments[B];for(var T in J)Object.prototype.hasOwnProperty.call(J,T)&&($[T]=J[T])}return $},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function($){return typeof $}:function($){return $&&typeof Symbol=="function"&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $},i=function(){function $(B,J){for(var T=0;T<J.length;T++){var O=J[T];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(B,O.key,O)}}return function(B,J,T){return J&&$(B.prototype,J),T&&$(B,T),B}}(),o=x,s=bl,a=_(s),u=_n,c=k(u),d=kl,f=_(d),h=Tn,y=k(h),p=fo,v=k(p),C=wn,m=_(C),g=ho,b=_(g);function k($){if($&&$.__esModule)return $;var B={};if($!=null)for(var J in $)Object.prototype.hasOwnProperty.call($,J)&&(B[J]=$[J]);return B.default=$,B}function _($){return $&&$.__esModule?$:{default:$}}function M($,B){if(!($ instanceof B))throw new TypeError("Cannot call a class as a function")}function L($,B){if(!$)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B&&(typeof B=="object"||typeof B=="function")?B:$}function D($,B){if(typeof B!="function"&&B!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof B);$.prototype=Object.create(B&&B.prototype,{constructor:{value:$,enumerable:!1,writable:!0,configurable:!0}}),B&&(Object.setPrototypeOf?Object.setPrototypeOf($,B):$.__proto__=B)}var q={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},z=function(B){return B.code==="Tab"||B.keyCode===9},se=function(B){return B.code==="Escape"||B.keyCode===27},G=0,Z=function($){D(B,$);function B(J){M(this,B);var T=L(this,(B.__proto__||Object.getPrototypeOf(B)).call(this,J));return T.setOverlayRef=function(O){T.overlay=O,T.props.overlayRef&&T.props.overlayRef(O)},T.setContentRef=function(O){T.content=O,T.props.contentRef&&T.props.contentRef(O)},T.afterClose=function(){var O=T.props,W=O.appElement,Q=O.ariaHideApp,ee=O.htmlOpenClassName,A=O.bodyOpenClassName,F=O.parentSelector,H=F&&F().ownerDocument||document;A&&v.remove(H.body,A),ee&&v.remove(H.getElementsByTagName("html")[0],ee),Q&&G>0&&(G-=1,G===0&&y.show(W)),T.props.shouldFocusAfterRender&&(T.props.shouldReturnFocusAfterClose?(c.returnFocus(T.props.preventScroll),c.teardownScopedFocus()):c.popWithoutFocus()),T.props.onAfterClose&&T.props.onAfterClose(),b.default.deregister(T)},T.open=function(){T.beforeOpen(),T.state.afterOpen&&T.state.beforeClose?(clearTimeout(T.closeTimer),T.setState({beforeClose:!1})):(T.props.shouldFocusAfterRender&&(c.setupScopedFocus(T.node),c.markForFocusLater()),T.setState({isOpen:!0},function(){T.openAnimationFrame=requestAnimationFrame(function(){T.setState({afterOpen:!0}),T.props.isOpen&&T.props.onAfterOpen&&T.props.onAfterOpen({overlayEl:T.overlay,contentEl:T.content})})}))},T.close=function(){T.props.closeTimeoutMS>0?T.closeWithTimeout():T.closeWithoutTimeout()},T.focusContent=function(){return T.content&&!T.contentHasFocus()&&T.content.focus({preventScroll:!0})},T.closeWithTimeout=function(){var O=Date.now()+T.props.closeTimeoutMS;T.setState({beforeClose:!0,closesAt:O},function(){T.closeTimer=setTimeout(T.closeWithoutTimeout,T.state.closesAt-Date.now())})},T.closeWithoutTimeout=function(){T.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},T.afterClose)},T.handleKeyDown=function(O){z(O)&&(0,f.default)(T.content,O),T.props.shouldCloseOnEsc&&se(O)&&(O.stopPropagation(),T.requestClose(O))},T.handleOverlayOnClick=function(O){T.shouldClose===null&&(T.shouldClose=!0),T.shouldClose&&T.props.shouldCloseOnOverlayClick&&(T.ownerHandlesClose()?T.requestClose(O):T.focusContent()),T.shouldClose=null},T.handleContentOnMouseUp=function(){T.shouldClose=!1},T.handleOverlayOnMouseDown=function(O){!T.props.shouldCloseOnOverlayClick&&O.target==T.overlay&&O.preventDefault()},T.handleContentOnClick=function(){T.shouldClose=!1},T.handleContentOnMouseDown=function(){T.shouldClose=!1},T.requestClose=function(O){return T.ownerHandlesClose()&&T.props.onRequestClose(O)},T.ownerHandlesClose=function(){return T.props.onRequestClose},T.shouldBeClosed=function(){return!T.state.isOpen&&!T.state.beforeClose},T.contentHasFocus=function(){return document.activeElement===T.content||T.content.contains(document.activeElement)},T.buildClassName=function(O,W){var Q=(typeof W>"u"?"undefined":r(W))==="object"?W:{base:q[O],afterOpen:q[O]+"--after-open",beforeClose:q[O]+"--before-close"},ee=Q.base;return T.state.afterOpen&&(ee=ee+" "+Q.afterOpen),T.state.beforeClose&&(ee=ee+" "+Q.beforeClose),typeof W=="string"&&W?ee+" "+W:ee},T.attributesFromObject=function(O,W){return Object.keys(W).reduce(function(Q,ee){return Q[O+"-"+ee]=W[ee],Q},{})},T.state={afterOpen:!1,beforeClose:!1},T.shouldClose=null,T.moveFromContentToOverlay=null,T}return i(B,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(T,O){this.props.isOpen&&!T.isOpen?this.open():!this.props.isOpen&&T.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!O.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var T=this.props,O=T.appElement,W=T.ariaHideApp,Q=T.htmlOpenClassName,ee=T.bodyOpenClassName,A=T.parentSelector,F=A&&A().ownerDocument||document;ee&&v.add(F.body,ee),Q&&v.add(F.getElementsByTagName("html")[0],Q),W&&(G+=1,y.hide(O)),b.default.register(this)}},{key:"render",value:function(){var T=this.props,O=T.id,W=T.className,Q=T.overlayClassName,ee=T.defaultStyles,A=T.children,F=W?{}:ee.content,H=Q?{}:ee.overlay;if(this.shouldBeClosed())return null;var X={ref:this.setOverlayRef,className:this.buildClassName("overlay",Q),style:n({},H,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},E=n({id:O,ref:this.setContentRef,style:n({},F,this.props.style.content),className:this.buildClassName("content",W),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),de=this.props.contentElement(E,A);return this.props.overlayElement(X,de)}}]),B}(o.Component);Z.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Z.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(m.default),a.default.instanceOf(C.SafeHTMLCollection),a.default.instanceOf(C.SafeNodeList),a.default.arrayOf(a.default.instanceOf(m.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=Z,e.exports=t.default})(bk,Cl);function _v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Tv(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ev(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}_v.__suppressDeprecationWarning=!0;Tv.__suppressDeprecationWarning=!0;Ev.__suppressDeprecationWarning=!0;function h_(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,s=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+s+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=_v,t.componentWillReceiveProps=Tv),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ev;var a=t.componentDidUpdate;t.componentDidUpdate=function(c,d,f){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;a.call(this,c,d,h)}}return e}const p_=Object.freeze(Object.defineProperty({__proto__:null,polyfill:h_},Symbol.toStringTag,{value:"Module"})),m_=Nw(p_);Object.defineProperty(hi,"__esModule",{value:!0});hi.bodyOpenClassName=hi.portalClassName=void 0;var Ag=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g_=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ov=x,Tl=js(Ov),y_=Ba,El=js(y_),v_=bl,ne=js(v_),w_=Cl,$g=js(w_),x_=Tn,S_=C_(x_),Cr=wn,Fg=js(Cr),b_=m_;function C_(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function js(e){return e&&e.__esModule?e:{default:e}}function k_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jg(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function __(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T_=hi.portalClassName="ReactModalPortal",E_=hi.bodyOpenClassName="ReactModal__Body--open",Jr=Cr.canUseDOM&&El.default.createPortal!==void 0,zg=function(t){return document.createElement(t)},Ug=function(){return Jr?El.default.createPortal:El.default.unstable_renderSubtreeIntoContainer};function ga(e){return e()}var zs=function(e){__(t,e);function t(){var n,r,i,o;k_(this,t);for(var s=arguments.length,a=Array(s),u=0;u<s;u++)a[u]=arguments[u];return o=(r=(i=jg(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!Jr&&El.default.unmountComponentAtNode(i.node);var c=ga(i.props.parentSelector);c&&c.contains(i.node)?c.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(c){i.portal=c},i.renderPortal=function(c){var d=Ug(),f=d(i,Tl.default.createElement($g.default,Ag({defaultStyles:t.defaultStyles},c)),i.node);i.portalRef(f)},r),jg(i,o)}return g_(t,[{key:"componentDidMount",value:function(){if(Cr.canUseDOM){Jr||(this.node=zg("div")),this.node.className=this.props.portalClassName;var r=ga(this.props.parentSelector);r.appendChild(this.node),!Jr&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=ga(r.parentSelector),o=ga(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(Cr.canUseDOM){var s=this.props,a=s.isOpen,u=s.portalClassName;r.portalClassName!==u&&(this.node.className=u);var c=o.prevParent,d=o.nextParent;d!==c&&(c.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!Jr&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Cr.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!Cr.canUseDOM||!Jr)return null;!this.node&&Jr&&(this.node=zg("div"));var r=Ug();return r(Tl.default.createElement($g.default,Ag({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){S_.setElement(r)}}]),t}(Ov.Component);zs.propTypes={isOpen:ne.default.bool.isRequired,style:ne.default.shape({content:ne.default.object,overlay:ne.default.object}),portalClassName:ne.default.string,bodyOpenClassName:ne.default.string,htmlOpenClassName:ne.default.string,className:ne.default.oneOfType([ne.default.string,ne.default.shape({base:ne.default.string.isRequired,afterOpen:ne.default.string.isRequired,beforeClose:ne.default.string.isRequired})]),overlayClassName:ne.default.oneOfType([ne.default.string,ne.default.shape({base:ne.default.string.isRequired,afterOpen:ne.default.string.isRequired,beforeClose:ne.default.string.isRequired})]),appElement:ne.default.oneOfType([ne.default.instanceOf(Fg.default),ne.default.instanceOf(Cr.SafeHTMLCollection),ne.default.instanceOf(Cr.SafeNodeList),ne.default.arrayOf(ne.default.instanceOf(Fg.default))]),onAfterOpen:ne.default.func,onRequestClose:ne.default.func,closeTimeoutMS:ne.default.number,ariaHideApp:ne.default.bool,shouldFocusAfterRender:ne.default.bool,shouldCloseOnOverlayClick:ne.default.bool,shouldReturnFocusAfterClose:ne.default.bool,preventScroll:ne.default.bool,parentSelector:ne.default.func,aria:ne.default.object,data:ne.default.object,role:ne.default.string,contentLabel:ne.default.string,shouldCloseOnEsc:ne.default.bool,overlayRef:ne.default.func,contentRef:ne.default.func,id:ne.default.string,overlayElement:ne.default.func,contentElement:ne.default.func};zs.defaultProps={isOpen:!1,portalClassName:T_,bodyOpenClassName:E_,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Tl.default.createElement("div",t,n)},contentElement:function(t,n){return Tl.default.createElement("div",t,n)}};zs.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,b_.polyfill)(zs);hi.default=zs;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=hi,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(gk,Sl);const Un=of(Sl),Pv=w.div`
  /* border: 1px solid red; */
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: "Nunito";
  height: fit-content;
  display: flex;
  flex-direction: column;

  div.icon {
    /* border: 1px solid red; */
    position: absolute;
    right: 10px;
    top: 30px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span.show-password {
    font-size: 0.8rem;
    font-weight: 600;
  }
`,O_=w.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px 0px 15px 10px;

  border: 1.5px solid #d5d9eb;
  border-radius: 8px;
  color: #000000;
  outline: none;
  font-size: 16px;
  font-weight: 400;
`,P_=w.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  text-transform: ${e=>e.isValid?"none":"uppercase"};
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${Pv}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;const M_=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  z-index: 100;
  background-color: white;
  box-sizing: border-box;
  padding: 0.4rem 1rem;
  width: 100%;
  border: 1.5px solid #d5d9eb;
  /* border: 1.5px solid red; */
  border-radius: 8px;

  span {
    /* border: 1px solid red; */
    padding: 4px 0;
    cursor: pointer;
  }
`,D_=w.div`
/* position: absolute; */
/* top: 100%; */
  /* border: 1px solid red; */
  span{
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
    text-transform: capitalize;
    /* line-height: 0; */
  }
  /* margin-top: 0rem; */
  margin-left: 0.5rem;
`,De=e=>{var h,y;const[t,n]=x.useState(e.type),[r,i]=x.useState(!1),[o,s]=x.useState(!1);x.useEffect(()=>{var p;typeof e.value=="string"?((p=e.value)==null?void 0:p.trim().length)>0&&i(!0):typeof e.value=="number"&&e.value>=0&&i(!0)},[e]);const a=p=>{s(!0),e.updateFields({[p.target.name]:p.target.value});const v=p.target.value;(v==null?void 0:v.trim().length)>0?i(!0):i(!1)},u=p=>{e.updateFields({[e.name]:p}),s(!1)},c=()=>{s(!1)},d=x.useRef(null);fh(d,c);const f=()=>{t=="password"?n("string"):t=="string"&&n("password")};return S(Pv,{children:[l(O_,{type:t,required:!0,value:e.value,name:e.name,onChange:p=>a(p)}),e.type=="password"&&l("div",{className:"icon",onClick:f,children:t=="password"?l("span",{className:"show-password",children:"Show"}):l(r5,{})}),l(P_,{isValid:r,children:e.label}),e.isRequired&&l(D_,{children:l("span",{children:"*required"})}),e.hasDropdown?e.value==""?null:o&&(((h=e.dropdownData)==null?void 0:h.filter(p=>{if(typeof e.value=="string")return p.toLowerCase().includes(e.value.toLowerCase())}).length)==0?null:l(M_,{ref:d,children:(y=e.dropdownData)==null?void 0:y.filter(p=>{if(typeof e.value=="string")return p.toLowerCase().includes(e.value.toLowerCase())}).map((p,v)=>l("span",{onClick:()=>u(p),children:p},v))})):null]})},L_=w.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  /* border: 1px solid red; */

  h3 {
    /* border: 1px solid red; */
    margin-top: ${e=>e.marginTop?e.marginTop:"1rem"};
    display: flex;
    align-items: ${e=>e.alignCenter?"center":"flex-start"};
    justify-content: flex-start;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`,N_=w.div`
  /* border: 1px solid red; */
  /* width: 100%; */
  display: flex;
  margin-left: 32px;
`,pe=e=>S(L_,{children:[l("h3",{children:e.inputDesc}),l(N_,{children:e.elem})]}),R_=w.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,I_=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,A_=w.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,$_=e=>{const[t,n]=x.useState({username:e.username,email:e.email,phone:e.phone}),r={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0,toastId:"toast1"},i=()=>{const{email:a,phone:u,username:c}=t;return a==""||u==""||c==""?(I.error("Fill in all the details",r),!1):hh(a)?!0:(I.error("Not a valid email",r),!1)},o=async()=>{i()&&await le.patch(`${ue}${ce}/user/mycontactInfo`,{userName:t.username,email:t.email,phoneNumber:t.phone},{headers:me(e.userToken)}).then(({data:a})=>{console.log(a.updatedUser);const u=a.updatedUser;u.token=e.userToken,localStorage.setItem(An,JSON.stringify(u)),window.dispatchEvent(new Event("storage")),window.location.reload()}).catch(a=>{console.log(a),a.response.data.message?I.error(a.response.data.message,r):I.error("Some error occured, couldnt update",r)})},s=a=>{n(u=>({...u,...a}))};return S(R_,{children:[l(I_,{children:l("h4",{children:"Contact Information"})}),S("form",{action:"",children:[l(pe,{elem:l(De,{label:"UserName",name:"username",type:"text",value:t.username,updateFields:s}),inputDesc:"Change your Username :-"}),l(pe,{elem:l(De,{label:"Email",name:"email",type:"email",value:t.email,updateFields:s}),inputDesc:"Change your Email :-"}),l(pe,{elem:l(De,{label:"Phone Number",name:"phone",type:"string",value:t.phone,updateFields:s}),inputDesc:"Change your Phone Number :-"})]}),l(A_,{children:l("button",{type:"submit",onClick:o,children:"Edit User Info"})})]})},F_=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,j_=w.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`,z_=w.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.02em;
    color: #000000;
  }
`,Vr={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},U_=e=>{const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}return S(fe,{children:[S(F_,{children:[S(j_,{children:[l("h4",{children:"Contact Information"}),l(Dh,{onClickFunc:r})]}),S(z_,{children:[S("div",{children:[l("h4",{children:"Username"}),l("span",{children:e.username})]}),S("div",{children:[l("h4",{children:"Email"}),l("span",{children:e.email})]}),S("div",{children:[l("h4",{children:"Phone Number"}),l("span",{children:e.phone})]})]})]}),l(Un,{isOpen:t,onRequestClose:i,style:Vr,contentLabel:"Example Modal",children:l($_,{email:e.email,phone:e.phone,username:e.username,userToken:e.userToken,closeModal:i})})]})},B_=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  background: #fecdca;
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #b42318;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`,H_=w.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,W_=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }

  h2 {
    /* margin-bottom: 2rem; */
  }
`,Y_=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: 3rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  button.delete {
    background-color: #fecdca;
    color: #b42318;
    font-weight: 700;
  }
`,V_=()=>{const[e,t]=x.useState(!1);function n(){t(!0)}function r(){t(!1)}const[i,o]=x.useState(""),{fetchLocalUserToken:s}=rt();x.useEffect(()=>{s().then(c=>{o(c)})},[]);const a=Re();return S(fe,{children:[l(B_,{onClick:n,children:"Delete Account"}),l(Un,{isOpen:e,onRequestClose:r,style:Vr,children:S(H_,{children:[l(W_,{children:l("h4",{children:"DeActivate Account"})}),l("h2",{children:"Are you sure you want to delete your account??"}),S(Y_,{children:[l("button",{onClick:r,children:"Go Back"}),l("button",{className:"delete",onClick:async()=>{i&&await le.patch(`${ue}${ce}/user/deleteMe`,{},{headers:me(i??"")}).then(({data:c})=>{console.log(c),localStorage.clear(),a("/teachNlearn")})},children:"Delete Account"})]})]})})]})},G_=w.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px 15px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
  height: max-content;
`,q_=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 2rem;
`,Q_=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-radius: 41px;
  gap: 16px;
  cursor: pointer;
  font-size: 16px;
  background: ${e=>e.isSelected?"#D8EEFE":"none"};
  transition: all 0.5s ease;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`,K_=[{option:"My profile",label:"MyProfile",icon:l($y,{})}],Z_=({setSelectedLeftScreen:e})=>{const[t,n]=x.useState("MyProfile"),r=i=>{n(i),e(i)};return S(G_,{children:[l(q_,{children:K_.map((i,o)=>S(Q_,{isSelected:t==i.label,onClick:()=>r(i.label),children:[i.icon,l("span",{children:i.option})]},o))}),l(V_,{})]})},Mv=w.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: "Nunito";
  height: fit-content;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 100%;
    padding: 15px 0px 15px 10px;
    border: 1.5px solid #d5d9eb;
    box-sizing: border-box;
    border-radius: 8px;
    color: #000000;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }
`,J_=w.span`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  text-transform: ${e=>e.isValid?"none":"uppercase"};
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${Mv}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`,X_=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  z-index: 100;
  background-color: white;
  box-sizing: border-box;
  padding: 0.4rem 1rem;
  width: 100%;
  border: 1.5px solid #d5d9eb;
  /* border: 1.5px solid red; */
  border-radius: 8px;

  span {
    /* border: 1px solid red; */
    padding: 4px 0;
    cursor: pointer;
  }
`,e6=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
    text-transform: capitalize;
  }
`,Ar=e=>{var d,f;const[t,n]=x.useState(!1),[r,i]=x.useState(!1);x.useEffect(()=>{var h;((h=e.value)==null?void 0:h.trim().length)>0&&n(!0)},[]);const o=h=>{i(!0),e.updateFields({[e.elemName]:h.target.value});const y=h.target.value;(y==null?void 0:y.trim().length)>0?n(!0):n(!1)},s=h=>{var y;console.log(h.key=="Enter"),h.key=="Enter"&&((y=e.arr)==null||y.push(e.value),console.log(e.arr),e.updateFields({[e.name]:e.arr,[e.elemName]:""}))},a=h=>{e.updateFields({[e.elemName]:h}),i(!1)},u=()=>{i(!1)},c=x.useRef(null);return fh(c,u),S(Mv,{children:[l("input",{type:"text",required:!0,value:e.value,name:e.name,onChange:h=>o(h),onKeyDown:s,disabled:e.arr.length==e.maxLimit}),l(J_,{isValid:t,children:e.label}),e.maxLimit&&S(e6,{children:[l("span",{children:"*Hit Enter to add"}),S("span",{children:["Max ",e.maxLimit]})]}),e.hasDropdown?e.value==""?null:r&&(((d=e.dropdownData)==null?void 0:d.filter(h=>{if(typeof e.value=="string")return h.toLowerCase().includes(e.value.toLowerCase())}).length)==0?null:l(X_,{ref:c,children:(f=e.dropdownData)==null?void 0:f.filter(h=>{if(typeof e.value=="string")return h.toLowerCase().includes(e.value.toLowerCase())}).map((h,y)=>l("span",{onClick:()=>a(h),children:h},y))})):null]})},t6=w.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */

  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 0.4rem;
  /* margin-top: 1rem; */
  width: 100%;
`,n6=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  /* background: #000000; */
  background: #d8eefe;
  border-radius: 22px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #ffffff;
  color: #000;

  svg {
    cursor: pointer;
  }
`,r6=w.div``,$r=e=>{const t=n=>{let r=e.listArr.filter((i,o)=>(console.log(i==n),i!=n));e.updateFields({[e.name]:r})};return l(t6,{children:e.listArr.map((n,r)=>S(n6,{children:[l("span",{children:n}),l(r6,{onClick:()=>t(n),children:l(Fy,{})})]},r))})},io=["English","Mathematics","Physics","Chemistry","Biology","History","Geography","Economics","Political Science","Hindi","Sanskrit","French","German","Spanish","Physical Education","Computer Science","Business Studies/Commerce","Accountancy","Economics","Psychology","Sociology","Philosophy","Literature","Environmental Science","Political Science","Statistics","Mechanical","Civil","Electrical","Food Technology","Software Development","Web Development","Devops","AI","Blockchain","App Development","Biology","Anatomy","Physology","Biochemistry","Law","Media Studies","Religious Studies","Cultural Studies","Visual Arts","Music","Dance","Drama","Home Science","Agriculture","Food Technology","Hotel Management","Fashion Design","Journalism","Mass Communication","Architecture","Pharmacy","Product Design","Graphic Design","Fashion Design","Chemistry","Physics","Mathematics","Liberal Arts","Literature in English","Linguistics","Anthropology","Geology","Electronics","Biotechnology","Microbiology","Bioinformatics","Zoology","Botany","Geography","Geoinformatics","Animation and Multimedia"],Du=["Hindi","Bengali","Telugu","Marathi","Tamil","Urdu","Gujarati","Kannada","Odia (Oriya)","Punjabi","Malayalam","Assamese","Maithili","Santali","Kashmiri","Nepali","Konkani","Manipuri (Meitei)","Bodo","Sindhi","Mandarin Chinese","English","Spanish","Arabic","Portuguese","Russian","Japanese","German","French","Italian","Korean","Turkish","Indonesian","Persian (Farsi)","Swahili","Dutch","Polish"],i6=w.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,o6=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,Fr=w.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    /* background: #094067; */
    /* background: #ef4565; */
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,Dc=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,s6=e=>{const[t,n]=x.useState({course:e.course,interstedSubjects:e.interstedSubjects,strongSubjects:e.strongSubjects,preferredLanguages:e.preferredLanguages,strongSubject:e.strongSubject,interestedSubject:e.interestedSubject,language:e.language}),r={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0,toastId:"toast1"},i=()=>{const{course:a,interstedSubjects:u,preferredLanguages:c,strongSubjects:d}=t;return a==""||u.length==0||d.length==0||c.length==0?(I.error("Fill in all the details",r),!1):u.length>5||d.length>5?(I.error("Cannot select more than 5 subjects ",r),!1):c.length>3?(I.error("Cannot select more than 3 languages ",r),!1):!0},o=async()=>{i()&&(console.log(t),await le.patch(`${ue}${ce}/user/myacademicInfo`,{enrolledProgramme:t.course,strongSubjects:t.strongSubjects,interestedSubjects:t.interstedSubjects,preferredLanguages:t.preferredLanguages},{headers:me(e.userToken)}).then(({data:a})=>{console.log(a.updatedUser),window.location.reload()}).catch(a=>{console.log(a),I.error("Some error occured",r)}))},s=a=>{n(u=>({...u,...a}))};return S(i6,{children:[l(o6,{children:l("h4",{children:"Academic Information"})}),S("form",{action:"",children:[l(pe,{elem:l(De,{label:"Entrolled Programme",name:"course",type:"text",updateFields:s,value:t.course}),inputDesc:"Change your Course"}),l(pe,{elem:S(Dc,{children:[l(Ar,{label:"Strong Subjects",value:t.strongSubject,elemName:"strongSubject",name:"strongSubjects",arr:t.strongSubjects,updateFields:s,hasDropdown:!0,dropdownData:io,maxLimit:5}),l($r,{listArr:t.strongSubjects,updateFields:s,name:"strongSubjects"})]}),inputDesc:"Change your Strong Subjects"}),l(pe,{elem:S(Dc,{children:[l(Ar,{label:"Interested Subjects",value:t.interestedSubject,elemName:"interestedSubject",name:"interstedSubjects",arr:t.interstedSubjects,updateFields:s,hasDropdown:!0,dropdownData:io,maxLimit:5}),l($r,{listArr:t.interstedSubjects,updateFields:s,name:"interstedSubjects"})]}),inputDesc:"Change your Interested Subjects"}),l(pe,{elem:S(Dc,{children:[l(Ar,{label:"Preferred Language",value:t.language,elemName:"language",name:"preferredLanguages",arr:t.preferredLanguages,updateFields:s,hasDropdown:!0,dropdownData:Du,maxLimit:3}),l($r,{listArr:t.preferredLanguages,updateFields:s,name:"preferredLanguages"})]}),inputDesc:"Change your Interested Subjects"})]}),l(Fr,{children:l("button",{type:"submit",onClick:o,children:"Edit Academic Info"})})]})},a6=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,l6=w.div`
  display: flex;
  align-items: flex-start;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`,u6=w.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  row-gap: 1rem;
  column-gap: 1.5rem;
  width: 100%;

  div {
    /* border: 1px solid red; */
    h4 {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.02em;
      color: #4b5565;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
    }
  }
  span {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #000000;
  }
`,Lc=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  /* align-items: center; */
`,Nc=w.div`
  /* border: 1px solid #697586; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
`,c6={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",height:"80vh"}},d6=e=>{var o,s,a;const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}return S(fe,{children:[S(a6,{children:[S(l6,{children:[l("h4",{children:"Academic Information"}),l(Dh,{onClickFunc:r})]}),S(u6,{children:[S("div",{children:[l("h4",{children:"Course"}),l("span",{children:e.course})]}),S("div",{children:[l("h4",{children:"Strong Subjects"}),l(Lc,{children:(o=e.strongSubjects)==null?void 0:o.map((u,c)=>l(Nc,{children:u},c))})]}),S("div",{children:[l("h4",{children:"Interested Subjects"}),l(Lc,{children:(s=e.interstedSubjects)==null?void 0:s.map((u,c)=>l(Nc,{children:u},c))})]}),S("div",{children:[l("h4",{children:"Preferred Languages"}),l(Lc,{children:(a=e.preferredLanguages)==null?void 0:a.map((u,c)=>l(Nc,{children:u},c))})]})]})]}),l(Un,{isOpen:t,onRequestClose:i,style:c6,children:l(s6,{course:e.course,interestedSubject:e.interestedSubject,interstedSubjects:e.interstedSubjects,strongSubject:e.strongSubject,strongSubjects:e.strongSubjects,language:e.language,preferredLanguages:e.preferredLanguages,updateFields:e.updateFields,userToken:e.userToken,closeModal:i})})]})},f6=w.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,h6=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,p6=w.div`
  /* border: 1px solid green; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,m6=e=>{const[t,n]=x.useState({name:e.name,tagline:e.tagline}),r={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},i=()=>{const{name:a,tagline:u}=t;return a==""||u==""?(I.error("Fill in all the details",r),!1):u.length<30?(I.error("Tagline in too short",r),!1):!0},o=async()=>{i()&&await le.patch(`${ue}${ce}/user/myInfo`,{name:t.name,tagline:t.tagline},{headers:me(e.userToken??"")}).then(({data:a})=>{console.log(a.updatedUser);const u=a.updatedUser;u.token=e.userToken,localStorage.setItem(An,JSON.stringify(u)),window.dispatchEvent(new Event("storage")),window.location.reload()}).catch(a=>{I.error("Some error occured, couldnt update",r)})},s=a=>{n(u=>({...u,...a}))};return S(f6,{children:[l(h6,{children:l("h4",{children:"Contact Information"})}),S("form",{action:"",children:[l(pe,{elem:l(De,{label:"Name",name:"name",type:"text",value:t.name,updateFields:s}),inputDesc:"Change your Name :-"}),l(pe,{elem:l(Wt,{label:"Tagline",name:"tagline",value:t.tagline,updateFields:s,areaHeight:"10rem"}),inputDesc:"Change your Tagline :-"})]}),l(p6,{children:l("button",{type:"submit",onClick:o,children:"Edit User Info"})})]})},g6=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 28px;
  background: #094067;
  border-radius: 36px;
`,y6=w.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`,v6=w.div`
  /* border: 1px solid white; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0px;
  gap: 60px;

  div {
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    h5 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.9);
    }

    h3 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }
`,w6=e=>{const[t,n]=x.useState(0),[r,i]=x.useState(0);async function o(){await le.get(`${ue}${ce}/user/${e.userId}/myratings`,{headers:me(e.userToken)}).then(({data:s})=>{console.log(s.stats[0]),s.stats[0]&&(i(s.stats[0].nRatings),n(s.stats[0].avgRating))})}return x.useEffect(()=>{e.userToken&&o()},[e.userToken]),S(g6,{children:[l(y6,{children:l("h4",{children:"Profile Stats"})}),S(v6,{children:[S("div",{children:[l("h5",{children:"Taught"}),l("h3",{children:e.taught})]}),S("div",{children:[l("h5",{children:"Attended"}),l("h3",{children:e.attended})]}),S("div",{children:[l("h5",{children:"Total Rating"}),l("h3",{children:r})]}),S("div",{children:[l("h5",{children:"Average Rating"}),l("h3",{children:Math.round(t*10)/10})]})]})]})},x6=w.div`
  position: relative;
  width: 100%;
  height: 20px;
  box-sizing: border-box;

  padding: 15px 0px;
  border: 1.5px solid #d5d9eb;
  box-sizing: content-box;
  border-radius: 8px;
  color: #000000;
  outline: none;
  z-index: 1;

  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    /* cursor: pointer; */
    font-size: 24px;
    height: 100%;
  }
`;w.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  /* cursor: pointer; */
  font-size: 24px;
  height: 100%;
`;const S6=w.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  pointer-events: none;
  transition: 0.25s;
  line-height: 1;
  transform: translateX(5px) translateY(-5px);
  font-size: 11px;
  background-color: white;
  color: #b3b8db;
  padding: 0 5px;
`,b6=w.div`
  position: absolute;
  font-family: "Nunito";
  font-style: normal;
  left: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #564c4d;
  transition: all 0.25s linear;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,C6=w.div`
  /* border: 1px solid red; */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  z-index: 3;
  cursor: pointer;
  svg {
    width: 20px;
    height: 16px;
  }
`,Rh=({updateFields:e,photoOnCross:t,photoName:n})=>{const r=x.useRef(null),[i,o]=x.useState(""),s=u=>{if(!u)return;if(r.current!=null){const d=r.current.files;if(d!=null){const f=d[0].name;console.log(f),o(f)}}console.log(u[0]);const c=u[0];if(c.type==="image/jpeg"||c.type==="image/png"){const d=new FormData;d.append("file",c),d.append("upload_preset","chat-app"),d.append("cloud_name","dkgrvhkxb"),fetch("https://api.cloudinary.com/v1_1/dkgrvhkxb/image/upload",{method:"post",body:d}).then(f=>f.json()).then(f=>{e({photo:f.url.toString()}),console.log(f),console.log(f.url.toString())}).catch(f=>{console.log(f)})}else console.log("errrrrrorrrr")};return S(x6,{children:[l("input",{type:"file",accept:"image/*",ref:r,onChange:u=>s(u.target.files)}),l(C6,{onClick:()=>{e({photo:t||""}),o(n||"")},children:l(Fy,{})}),l(S6,{children:"Profile Pic"}),l(b6,{children:i?l("span",{children:i}):S(fe,{children:[l(h5,{}),l("span",{children:"Click to Upload"})]})})]})},k6=w.div`
  /* border: 1px solid red; */
  width: 50vw;
  padding: 20px 32px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 3;

  button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`,_6=w.div`
  box-sizing: border-box;
  width: 84.54px;
  height: 84.54px;
  padding: 2px;
  border: 0.87156px solid #d5d9eb;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    z-index: 1;
  }

  &:hover {
    img {
      filter: blur(0.5px);
      -webkit-filter: blur(0.5px);
    }

    &:before {
      content: "Edit";
      position: absolute;
      z-index: 2;
      top: 50%;
      display: block;
      display: ${e=>e.modalIsOpen?"none":"block"};
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 22px;
      font-weight: 700;
      mix-blend-mode: hard-light;
    }
  }
`,T6=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,E6=w.div`
  border: 1px solid #7d89b0;
  border-radius: 6px;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 40vh;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 6px;
  }
`,O6=w.div`
  /* border: 1px solid red; */
  margin-bottom: 3rem;
`,P6={content:{width:"50vw",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},M6=e=>{const[t,n]=x.useState(e.photo),[r,i]=x.useState(!1);function o(){i(!0)}function s(){i(!1)}const a=async()=>{e.updateFields({photo:t}),s()},u=async()=>{await le.patch(`${ue}${ce}/user/myPhoto`,{photo:e.photo},{headers:me(e.userToken)}).then(({data:c})=>{console.log(c.updatedUser);const d=c.updatedUser;d.token=e.userToken,localStorage.setItem(An,JSON.stringify(d)),s()})};return S("div",{children:[l(_6,{onClick:o,modalIsOpen:r,children:l("img",{src:e.photo,alt:"user-img"})}),l(Un,{isOpen:r,onRequestClose:s,style:P6,ariaHideApp:!1,children:S(k6,{children:[l(T6,{children:l("h4",{children:"Your Profile Image"})}),l(E6,{children:l("img",{src:e.photo,alt:""})}),l(O6,{children:l(pe,{elem:l(Rh,{updateFields:e.updateFields,photoName:"",photoOnCross:t}),inputDesc:"Change profile image"})}),S(Fr,{children:[l("button",{type:"submit",onClick:a,children:"Go back"}),l("button",{type:"submit",onClick:u,children:"Edit Academic Info"})]})]})})]})},D6=w.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 44px;
  /* width: 95%; */
`,L6=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`,N6=w.h3`
  font-size: 26px;
  line-height: 41px;
  color: #000000;
`,R6=w.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: max-content auto 10%;
  padding: 30px 28px;
  padding-right: 24px;
  gap: 1.2rem;
  /* margin-top: 1rem; */

  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,I6=w.div`
  /* border: 2px solid red; */
  width: 100%;

  h4 {
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: 0.2rem;
  }

  p {
    /* border: 2px solid red; */
    width: 90%;
    line-height: 1.2;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #697586;
  }
`,A6={_id:"",name:"",userName:"",photo:"",tagline:"",email:"",enrolledProgramme:"",phoneNumber:"",role:"",classesEnrolled:[],classesTaken:[],interestedSubject:"",interestedSubjects:[],strongSubject:"",strongSubjects:[],language:"",preferredLanguages:[],token:""},Bg=()=>{const[e,t]=x.useState(A6),[n,r]=x.useState(""),{fetchLocalUserToken:i}=rt();x.useEffect(()=>{i().then(f=>{r(f)})},[]);async function o(){await le.get(`${ue}${ce}/user/me`,{headers:me(n)}).then(({data:f})=>{const h=f.data.data[0];h.token=n,console.log(h),t(h)})}x.useEffect(()=>{n&&o()},[n]);function s(f){e&&t(h=>({...h,...f}))}const[a,u]=x.useState(!1);function c(){u(!0)}function d(){u(!1)}return e._id.length!=0?S(D6,{children:[S(L6,{children:[l(N6,{children:"My profile"}),l(lv,{userToken:e.token,role:e.role})]}),S(R6,{children:[l(M6,{photo:e.photo,updateFields:s,userToken:e.token}),S(I6,{children:[l("h4",{children:e.name}),e.tagline?l("p",{children:e.tagline}):l("p",{children:"Add Tagline for your profile ..."})]}),l(Dh,{onClickFunc:c}),l(Un,{isOpen:a,onRequestClose:d,style:Vr,ariaHideApp:!1,children:l(m6,{name:e.name,tagline:e.tagline,userToken:e.token,closeModal:d})})]}),l(w6,{attended:e.classesEnrolled.length,taught:e.classesTaken.length,userId:e._id,userToken:e.token}),l(U_,{username:e.userName,email:e.email,phone:e.phoneNumber,updateFields:s,userToken:n}),l(d6,{course:e.enrolledProgramme,strongSubjects:e.strongSubjects,interestedSubject:e.interestedSubject,interstedSubjects:e.interestedSubjects,language:e.language,strongSubject:e.strongSubject,preferredLanguages:e.preferredLanguages,updateFields:s,userToken:n}),l($n,{theme:"dark"})]}):l("h3",{children:"Loading"})},$6=w.div`
  border: 2px solid #d5d9eb;
  border-radius: 12px;
  padding: 45px;
  margin: 50px;
  display: grid;
  grid-template-columns: 25% 70%;
  gap: 30px;
`,F6=w.div`
  border-left: 1px solid #d5d9eb;
`,j6=()=>{const[e,t]=x.useState("MyProfile");x.useEffect(()=>{console.log(e),e=="MyProfile"&&r(l(Bg,{}))},[e]);const[n,r]=x.useState(l(Bg,{}));return S(fe,{children:[l(ut,{}),S($6,{children:[l(Z_,{setSelectedLeftScreen:t}),l(F6,{children:n})]}),l(it,{})]})},z6=w.div`
  background-color: #0d1c2e;
  background-color: #094067;
  border-radius: 24px;
  padding: 15vh 2.5rem 20vh 4rem;
  width: 80%;
  position: relative;
  overflow: hidden;
  z-index: -3;
`,U6=w.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-33%);
  z-index: -1;
  width: fit-content;

  svg {
    width: 150vw;
    height: 65vh;
  }
`,B6=w.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  transform: translateX(-33%);
  width: fit-content;

  svg {
    width: 150vw;
    height: 85vh;
  }
`,H6=w.div`
  z-index: 100;
  h4 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
    margin-bottom: 35vh;
  }

  svg {
    width: 40px;
    height: 44px;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 500;
    font-size: 44px;
    line-height: 56px;
    color: #ffffff;
    width: 100%;
    text-indent: 70px;
    margin-bottom: 1.5rem;
  }

  div {
    width: 100%;
    /* border: 1px solid white; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  span {
    /* border: 1px solid white; */
    color: #ffffff;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
  }
`,Dv=e=>S(z6,{children:[l(U6,{children:l(d5,{})}),l(B6,{children:l(f5,{})}),S(H6,{children:[l("h4",{children:e.heading}),l(n5,{}),l("p",{children:"If you want to master something, teach it."}),l("div",{children:l("span",{children:"- Richard Feynman"})})]})]});function W6(e){const[t,n]=x.useState(0);function r(){Je(),n(s=>s>=e.length-1?s:s+1)}function i(){Je(),n(s=>s<=0?s:s-1)}function o(s){n(s)}return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:t===0,isLastStep:t===e.length-1,next:r,back:i,goTo:o}}const Y6=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;
  /* border: 1px solid red; */

  form {
    width: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 25px;
  }
`,V6=e=>l(Y6,{children:S("form",{children:[l(De,{type:"text",label:"Full Name",value:e.fullName,name:"fullName",updateFields:e.updateFields,isRequired:!0}),l(De,{type:"text",label:"Username (publicly visible)",value:e.userName,name:"userName",updateFields:e.updateFields,isRequired:!0}),l(De,{type:"email",label:"Email",name:"email",value:e.email,updateFields:e.updateFields,isRequired:!0}),l(De,{type:"password",label:"Password",name:"password",value:e.password,updateFields:e.updateFields,isRequired:!0}),l(De,{type:"password",label:"Confirm Password",name:"confirmPassword",value:e.confirmPassword,updateFields:e.updateFields,isRequired:!0})]})}),G6=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;

  form {
    /* border: 1px solid red; */
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
`,Zo=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q6=e=>l(G6,{children:S("form",{action:"",children:[l(Rh,{updateFields:e.updateFields}),l(De,{type:"text",label:"Phone Number",value:e.number,name:"number",updateFields:e.updateFields}),l(De,{type:"text",label:"Exam | Standard | Board | Degree",value:e.course,name:"course",updateFields:e.updateFields,isRequired:!0}),S(Zo,{children:[l(Ar,{label:"Subjects you mostly need help in",value:e.interestedSubject,name:"interestedSubjects",elemName:"interestedSubject",updateFields:e.updateFields,arr:e.interestedSubjects,hasDropdown:!0,dropdownData:io,maxLimit:5}),e.interestedSubjects.length!=0?l($r,{listArr:e.interestedSubjects,updateFields:e.updateFields,name:"interestedSubjects"}):null]}),S(Zo,{children:[l(Ar,{label:"Subjects you can help others in",value:e.strongSubject,elemName:"strongSubject",name:"strongSubjects",updateFields:e.updateFields,arr:e.strongSubjects,hasDropdown:!0,dropdownData:io,maxLimit:5}),e.strongSubjects.length!=0?l($r,{listArr:e.strongSubjects,updateFields:e.updateFields,name:"strongSubjects"}):null]}),S(Zo,{children:[l(Ar,{label:"Preferred Languages",value:e.language,elemName:"language",name:"preferredLanguages",updateFields:e.updateFields,arr:e.preferredLanguages,hasDropdown:!0,dropdownData:Du,maxLimit:3}),e.preferredLanguages.length!=0?l($r,{listArr:e.preferredLanguages,updateFields:e.updateFields,name:"preferredLanguages"}):null]})]})}),Q6=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 70%;
  margin-bottom: 2.5rem;

  div {
    transition: all 0.15s linear;
    height: 10px;
    border-radius: 38px;
    width: 100%;
  }

  div.first {
    background: ${e=>e.index==0?"#094067":"#D5D9EB"};
  }

  div.second {
    background: ${e=>e.index==1?"#094067":"#D5D9EB"};
  }
`,K6=e=>S(Q6,{index:e.index,children:[l("div",{className:"first"}),l("div",{className:"second"})]}),Z6=w.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
`,J6=w.div`
  /* border: 1px solid red; */
  width: 50vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
`,X6=w.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 50vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,eT=w.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 70%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  span.login {
    color: #666666;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;

    display: flex;
    gap: 6px;

    h5 {
      color: #332ad5;
      color: #094067;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`,tT=w.div`
  /* border: 1px solid red; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background: #332ad5;
    background: #094067;
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 18px;
    line-height: 27px;
    cursor: pointer;
    width: 100%;
    margin: 0rem auto;
    box-sizing: border-box;

    &:nth-child(2) {
      margin-top: 0.8rem;
    }
  }
`,nT={fullName:"",userName:"",email:"",password:"",confirmPassword:"",photo:"",number:"",course:"",interestedSubject:"",interestedSubjects:[],strongSubject:"",strongSubjects:[],preferredLanguages:[],language:""},rT=()=>{const e=Re(),[t,n]=x.useState(nT);function r(p){n(v=>({...v,...p}))}const{step:i,isFirstStep:o,isLastStep:s,next:a,back:u,currentStepIndex:c}=W6([l(V6,{...t,updateFields:r}),l(q6,{...t,updateFields:r})]),d={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},f=()=>{const{fullName:p,userName:v,email:C,password:m,confirmPassword:g,course:b}=t;if(p===""||v===""||C===""||m===""||g===""||b==="")return I.error("Fill in all the details",d),!1;if(hh(C)){if(v.length>25)return I.error("Username cannot be greater than 25 char!!",d),!1;if(m.length<6)return I.error("Password is short",d),!1;if(g.length<6)return I.error("Both passwords are not same",d),!1;if(m!=g)return I.error("Both passwords are not same",d),!1}else return I.error("Email is not valid!!",d),!1;return!0},h=async p=>{if(p.preventDefault(),s)p.preventDefault(),f()&&await le.post(`${ue}${ce}/auth/signup`,{name:t.fullName,userName:t.userName,email:t.email,password:t.password,passwordConfirm:t.confirmPassword,photo:t.photo,phoneNumber:t.number,enrolledProgramme:t.course,interestedSubjects:t.interestedSubjects,strongSubjects:t.strongSubjects,preferredLanguages:t.preferredLanguages}).then(({data:v})=>{console.log(v),console.log(v.token),v.data.user.token=v.token,localStorage.setItem(An,JSON.stringify(v.data.user)),y("/")}).catch(v=>{if(console.log(v),!v.response){I.error(v.message,d);return}const C=v.response.data.message;I.error(C,d)});else return a()},y=p=>{Je(),e(p)};return S(Z6,{children:[l(J6,{children:S(eT,{children:[l(K6,{index:c}),i,S(tT,{children:[l("button",{type:s?"submit":"button",onClick:h,children:s?"Signup":"Next"}),s&&l("button",{type:"button",onClick:u,children:"Back"})]}),S("span",{className:"login",children:["Already have an account?"," ",l("h5",{onClick:()=>y("/signin"),children:"Sign In!!"})]})]})}),l(X6,{children:l(Dv,{heading:o?"Get Started!":"Just a little more..."})}),l($n,{theme:"dark"})]})};//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Lv;function U(){return Lv.apply(null,arguments)}function iT(e){Lv=e}function bn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function si(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function xe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ih(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(xe(e,t))return!1;return!0}function Dt(e){return e===void 0}function ar(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Us(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Nv(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function kr(e,t){for(var n in t)xe(t,n)&&(e[n]=t[n]);return xe(t,"toString")&&(e.toString=t.toString),xe(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Bn(e,t,n,r){return rw(e,t,n,r,!0).utc()}function oT(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function oe(e){return e._pf==null&&(e._pf=oT()),e._pf}var Zd;Array.prototype.some?Zd=Array.prototype.some:Zd=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Ah(e){if(e._isValid==null){var t=oe(e),n=Zd.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function Lu(e){var t=Bn(NaN);return e!=null?kr(oe(t),e):oe(t).userInvalidated=!0,t}var Hg=U.momentProperties=[],Rc=!1;function $h(e,t){var n,r,i,o=Hg.length;if(Dt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Dt(t._i)||(e._i=t._i),Dt(t._f)||(e._f=t._f),Dt(t._l)||(e._l=t._l),Dt(t._strict)||(e._strict=t._strict),Dt(t._tzm)||(e._tzm=t._tzm),Dt(t._isUTC)||(e._isUTC=t._isUTC),Dt(t._offset)||(e._offset=t._offset),Dt(t._pf)||(e._pf=oe(t)),Dt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=Hg[n],i=t[r],Dt(i)||(e[r]=i);return e}function Bs(e){$h(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Rc===!1&&(Rc=!0,U.updateOffset(this),Rc=!1)}function Cn(e){return e instanceof Bs||e!=null&&e._isAMomentObject!=null}function Rv(e){U.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function an(e,t){var n=!0;return kr(function(){if(U.deprecationHandler!=null&&U.deprecationHandler(null,e),n){var r=[],i,o,s,a=arguments.length;for(o=0;o<a;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(s in arguments[0])xe(arguments[0],s)&&(i+=s+": "+arguments[0][s]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}Rv(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Wg={};function Iv(e,t){U.deprecationHandler!=null&&U.deprecationHandler(e,t),Wg[e]||(Rv(t),Wg[e]=!0)}U.suppressDeprecationWarnings=!1;U.deprecationHandler=null;function Hn(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function sT(e){var t,n;for(n in e)xe(e,n)&&(t=e[n],Hn(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Jd(e,t){var n=kr({},e),r;for(r in t)xe(t,r)&&(si(e[r])&&si(t[r])?(n[r]={},kr(n[r],e[r]),kr(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)xe(e,r)&&!xe(t,r)&&si(e[r])&&(n[r]=kr({},n[r]));return n}function Fh(e){e!=null&&this.set(e)}var Xd;Object.keys?Xd=Object.keys:Xd=function(e){var t,n=[];for(t in e)xe(e,t)&&n.push(t);return n};var aT={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function lT(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Hn(r)?r.call(t,n):r}function Fn(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var jh=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ya=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ic={},Wi={};function K(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(Wi[e]=i),t&&(Wi[t[0]]=function(){return Fn(i.apply(this,arguments),t[1],t[2])}),n&&(Wi[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function uT(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function cT(e){var t=e.match(jh),n,r;for(n=0,r=t.length;n<r;n++)Wi[t[n]]?t[n]=Wi[t[n]]:t[n]=uT(t[n]);return function(i){var o="",s;for(s=0;s<r;s++)o+=Hn(t[s])?t[s].call(i,e):t[s];return o}}function $a(e,t){return e.isValid()?(t=Av(t,e.localeData()),Ic[t]=Ic[t]||cT(t),Ic[t](e)):e.localeData().invalidDate()}function Av(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(ya.lastIndex=0;n>=0&&ya.test(e);)e=e.replace(ya,r),ya.lastIndex=0,n-=1;return e}var dT={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function fT(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(jh).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var hT="Invalid date";function pT(){return this._invalidDate}var mT="%d",gT=/\d{1,2}/;function yT(e){return this._ordinal.replace("%d",e)}var vT={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function wT(e,t,n,r){var i=this._relativeTime[n];return Hn(i)?i(e,t,n,r):i.replace(/%d/i,e)}function xT(e,t){var n=this._relativeTime[e>0?"future":"past"];return Hn(n)?n(t):n.replace(/%s/i,t)}var Jo={};function kt(e,t){var n=e.toLowerCase();Jo[n]=Jo[n+"s"]=Jo[t]=e}function ln(e){return typeof e=="string"?Jo[e]||Jo[e.toLowerCase()]:void 0}function zh(e){var t={},n,r;for(r in e)xe(e,r)&&(n=ln(r),n&&(t[n]=e[r]));return t}var $v={};function _t(e,t){$v[e]=t}function ST(e){var t=[],n;for(n in e)xe(e,n)&&t.push({unit:n,priority:$v[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Nu(e){return e%4===0&&e%100!==0||e%400===0}function Xt(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function ae(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=Xt(t)),n}function po(e,t){return function(n){return n!=null?(Fv(this,e,n),U.updateOffset(this,t),this):Ol(this,e)}}function Ol(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Fv(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Nu(e.year())&&e.month()===1&&e.date()===29?(n=ae(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),ju(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function bT(e){return e=ln(e),Hn(this[e])?this[e]():this}function CT(e,t){if(typeof e=="object"){e=zh(e);var n=ST(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=ln(e),Hn(this[e]))return this[e](t);return this}var jv=/\d/,qt=/\d\d/,zv=/\d{3}/,Uh=/\d{4}/,Ru=/[+-]?\d{6}/,Ie=/\d\d?/,Uv=/\d\d\d\d?/,Bv=/\d\d\d\d\d\d?/,Iu=/\d{1,3}/,Bh=/\d{1,4}/,Au=/[+-]?\d{1,6}/,mo=/\d+/,$u=/[+-]?\d+/,kT=/Z|[+-]\d\d:?\d\d/gi,Fu=/Z|[+-]\d\d(?::?\d\d)?/gi,_T=/[+-]?\d+(\.\d{1,3})?/,Hs=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Pl;Pl={};function Y(e,t,n){Pl[e]=Hn(t)?t:function(r,i){return r&&n?n:t}}function TT(e,t){return xe(Pl,e)?Pl[e](t._strict,t._locale):new RegExp(ET(e))}function ET(e){return jt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function jt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ef={};function Oe(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),ar(t)&&(r=function(o,s){s[t]=ae(o)}),i=e.length,n=0;n<i;n++)ef[e[n]]=r}function Ws(e,t){Oe(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function OT(e,t,n){t!=null&&xe(ef,e)&&ef[e](t,n._a,n,e)}var bt=0,Zn=1,Ln=2,tt=3,gn=4,Jn=5,ni=6,PT=7,MT=8;function DT(e,t){return(e%t+t)%t}var Ge;Array.prototype.indexOf?Ge=Array.prototype.indexOf:Ge=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function ju(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=DT(t,12);return e+=(t-n)/12,n===1?Nu(e)?29:28:31-n%7%2}K("M",["MM",2],"Mo",function(){return this.month()+1});K("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});K("MMMM",0,0,function(e){return this.localeData().months(this,e)});kt("month","M");_t("month",8);Y("M",Ie);Y("MM",Ie,qt);Y("MMM",function(e,t){return t.monthsShortRegex(e)});Y("MMMM",function(e,t){return t.monthsRegex(e)});Oe(["M","MM"],function(e,t){t[Zn]=ae(e)-1});Oe(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Zn]=i:oe(n).invalidMonth=e});var LT="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Hv="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Wv=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,NT=Hs,RT=Hs;function IT(e,t){return e?bn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Wv).test(t)?"format":"standalone"][e.month()]:bn(this._months)?this._months:this._months.standalone}function AT(e,t){return e?bn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Wv.test(t)?"format":"standalone"][e.month()]:bn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $T(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=Bn([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=Ge.call(this._shortMonthsParse,s),i!==-1?i:null):(i=Ge.call(this._longMonthsParse,s),i!==-1?i:null):t==="MMM"?(i=Ge.call(this._shortMonthsParse,s),i!==-1?i:(i=Ge.call(this._longMonthsParse,s),i!==-1?i:null)):(i=Ge.call(this._longMonthsParse,s),i!==-1?i:(i=Ge.call(this._shortMonthsParse,s),i!==-1?i:null))}function FT(e,t,n){var r,i,o;if(this._monthsParseExact)return $T.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=Bn([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function Yv(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=ae(t);else if(t=e.localeData().monthsParse(t),!ar(t))return e}return n=Math.min(e.date(),ju(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Vv(e){return e!=null?(Yv(this,e),U.updateOffset(this,!0),this):Ol(this,"Month")}function jT(){return ju(this.year(),this.month())}function zT(e){return this._monthsParseExact?(xe(this,"_monthsRegex")||Gv.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(xe(this,"_monthsShortRegex")||(this._monthsShortRegex=NT),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function UT(e){return this._monthsParseExact?(xe(this,"_monthsRegex")||Gv.call(this),e?this._monthsStrictRegex:this._monthsRegex):(xe(this,"_monthsRegex")||(this._monthsRegex=RT),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Gv(){function e(s,a){return a.length-s.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=Bn([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=jt(t[i]),n[i]=jt(n[i]);for(i=0;i<24;i++)r[i]=jt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}K("Y",0,0,function(){var e=this.year();return e<=9999?Fn(e,4):"+"+e});K(0,["YY",2],0,function(){return this.year()%100});K(0,["YYYY",4],0,"year");K(0,["YYYYY",5],0,"year");K(0,["YYYYYY",6,!0],0,"year");kt("year","y");_t("year",1);Y("Y",$u);Y("YY",Ie,qt);Y("YYYY",Bh,Uh);Y("YYYYY",Au,Ru);Y("YYYYYY",Au,Ru);Oe(["YYYYY","YYYYYY"],bt);Oe("YYYY",function(e,t){t[bt]=e.length===2?U.parseTwoDigitYear(e):ae(e)});Oe("YY",function(e,t){t[bt]=U.parseTwoDigitYear(e)});Oe("Y",function(e,t){t[bt]=parseInt(e,10)});function Xo(e){return Nu(e)?366:365}U.parseTwoDigitYear=function(e){return ae(e)+(ae(e)>68?1900:2e3)};var qv=po("FullYear",!0);function BT(){return Nu(this.year())}function HT(e,t,n,r,i,o,s){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,o,s),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,o,s),a}function Ts(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ml(e,t,n){var r=7+t-n,i=(7+Ts(e,0,r).getUTCDay()-t)%7;return-i+r-1}function Qv(e,t,n,r,i){var o=(7+n-r)%7,s=Ml(e,r,i),a=1+7*(t-1)+o+s,u,c;return a<=0?(u=e-1,c=Xo(u)+a):a>Xo(e)?(u=e+1,c=a-Xo(e)):(u=e,c=a),{year:u,dayOfYear:c}}function Es(e,t,n){var r=Ml(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,s;return i<1?(s=e.year()-1,o=i+tr(s,t,n)):i>tr(e.year(),t,n)?(o=i-tr(e.year(),t,n),s=e.year()+1):(s=e.year(),o=i),{week:o,year:s}}function tr(e,t,n){var r=Ml(e,t,n),i=Ml(e+1,t,n);return(Xo(e)-r+i)/7}K("w",["ww",2],"wo","week");K("W",["WW",2],"Wo","isoWeek");kt("week","w");kt("isoWeek","W");_t("week",5);_t("isoWeek",5);Y("w",Ie);Y("ww",Ie,qt);Y("W",Ie);Y("WW",Ie,qt);Ws(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=ae(e)});function WT(e){return Es(e,this._week.dow,this._week.doy).week}var YT={dow:0,doy:6};function VT(){return this._week.dow}function GT(){return this._week.doy}function qT(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function QT(e){var t=Es(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}K("d",0,"do","day");K("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});K("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});K("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});K("e",0,0,"weekday");K("E",0,0,"isoWeekday");kt("day","d");kt("weekday","e");kt("isoWeekday","E");_t("day",11);_t("weekday",11);_t("isoWeekday",11);Y("d",Ie);Y("e",Ie);Y("E",Ie);Y("dd",function(e,t){return t.weekdaysMinRegex(e)});Y("ddd",function(e,t){return t.weekdaysShortRegex(e)});Y("dddd",function(e,t){return t.weekdaysRegex(e)});Ws(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:oe(n).invalidWeekday=e});Ws(["d","e","E"],function(e,t,n,r){t[r]=ae(e)});function KT(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ZT(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Hh(e,t){return e.slice(t,7).concat(e.slice(0,t))}var JT="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Kv="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),XT="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),eE=Hs,tE=Hs,nE=Hs;function rE(e,t){var n=bn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Hh(n,this._week.dow):e?n[e.day()]:n}function iE(e){return e===!0?Hh(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function oE(e){return e===!0?Hh(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function sE(e,t,n){var r,i,o,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=Bn([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=Ge.call(this._weekdaysParse,s),i!==-1?i:null):t==="ddd"?(i=Ge.call(this._shortWeekdaysParse,s),i!==-1?i:null):(i=Ge.call(this._minWeekdaysParse,s),i!==-1?i:null):t==="dddd"?(i=Ge.call(this._weekdaysParse,s),i!==-1||(i=Ge.call(this._shortWeekdaysParse,s),i!==-1)?i:(i=Ge.call(this._minWeekdaysParse,s),i!==-1?i:null)):t==="ddd"?(i=Ge.call(this._shortWeekdaysParse,s),i!==-1||(i=Ge.call(this._weekdaysParse,s),i!==-1)?i:(i=Ge.call(this._minWeekdaysParse,s),i!==-1?i:null)):(i=Ge.call(this._minWeekdaysParse,s),i!==-1||(i=Ge.call(this._weekdaysParse,s),i!==-1)?i:(i=Ge.call(this._shortWeekdaysParse,s),i!==-1?i:null))}function aE(e,t,n){var r,i,o;if(this._weekdaysParseExact)return sE.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=Bn([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function lE(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=KT(e,this.localeData()),this.add(e-t,"d")):t}function uE(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function cE(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ZT(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function dE(e){return this._weekdaysParseExact?(xe(this,"_weekdaysRegex")||Wh.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(xe(this,"_weekdaysRegex")||(this._weekdaysRegex=eE),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function fE(e){return this._weekdaysParseExact?(xe(this,"_weekdaysRegex")||Wh.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(xe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=tE),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function hE(e){return this._weekdaysParseExact?(xe(this,"_weekdaysRegex")||Wh.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(xe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=nE),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Wh(){function e(d,f){return f.length-d.length}var t=[],n=[],r=[],i=[],o,s,a,u,c;for(o=0;o<7;o++)s=Bn([2e3,1]).day(o),a=jt(this.weekdaysMin(s,"")),u=jt(this.weekdaysShort(s,"")),c=jt(this.weekdays(s,"")),t.push(a),n.push(u),r.push(c),i.push(a),i.push(u),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Yh(){return this.hours()%12||12}function pE(){return this.hours()||24}K("H",["HH",2],0,"hour");K("h",["hh",2],0,Yh);K("k",["kk",2],0,pE);K("hmm",0,0,function(){return""+Yh.apply(this)+Fn(this.minutes(),2)});K("hmmss",0,0,function(){return""+Yh.apply(this)+Fn(this.minutes(),2)+Fn(this.seconds(),2)});K("Hmm",0,0,function(){return""+this.hours()+Fn(this.minutes(),2)});K("Hmmss",0,0,function(){return""+this.hours()+Fn(this.minutes(),2)+Fn(this.seconds(),2)});function Zv(e,t){K(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Zv("a",!0);Zv("A",!1);kt("hour","h");_t("hour",13);function Jv(e,t){return t._meridiemParse}Y("a",Jv);Y("A",Jv);Y("H",Ie);Y("h",Ie);Y("k",Ie);Y("HH",Ie,qt);Y("hh",Ie,qt);Y("kk",Ie,qt);Y("hmm",Uv);Y("hmmss",Bv);Y("Hmm",Uv);Y("Hmmss",Bv);Oe(["H","HH"],tt);Oe(["k","kk"],function(e,t,n){var r=ae(e);t[tt]=r===24?0:r});Oe(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Oe(["h","hh"],function(e,t,n){t[tt]=ae(e),oe(n).bigHour=!0});Oe("hmm",function(e,t,n){var r=e.length-2;t[tt]=ae(e.substr(0,r)),t[gn]=ae(e.substr(r)),oe(n).bigHour=!0});Oe("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[tt]=ae(e.substr(0,r)),t[gn]=ae(e.substr(r,2)),t[Jn]=ae(e.substr(i)),oe(n).bigHour=!0});Oe("Hmm",function(e,t,n){var r=e.length-2;t[tt]=ae(e.substr(0,r)),t[gn]=ae(e.substr(r))});Oe("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[tt]=ae(e.substr(0,r)),t[gn]=ae(e.substr(r,2)),t[Jn]=ae(e.substr(i))});function mE(e){return(e+"").toLowerCase().charAt(0)==="p"}var gE=/[ap]\.?m?\.?/i,yE=po("Hours",!0);function vE(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Xv={calendar:aT,longDateFormat:dT,invalidDate:hT,ordinal:mT,dayOfMonthOrdinalParse:gT,relativeTime:vT,months:LT,monthsShort:Hv,week:YT,weekdays:JT,weekdaysMin:XT,weekdaysShort:Kv,meridiemParse:gE},Ae={},Po={},Os;function wE(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Yg(e){return e&&e.toLowerCase().replace("_","-")}function xE(e){for(var t=0,n,r,i,o;t<e.length;){for(o=Yg(e[t]).split("-"),n=o.length,r=Yg(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=zu(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&wE(o,r)>=n-1)break;n--}t++}return Os}function SE(e){return e.match("^[^/\\\\]*$")!=null}function zu(e){var t=null,n;if(Ae[e]===void 0&&typeof za<"u"&&za&&za.exports&&SE(e))try{t=Os._abbr,n=require,n("./locale/"+e),jr(t)}catch{Ae[e]=null}return Ae[e]}function jr(e,t){var n;return e&&(Dt(t)?n=ur(e):n=Vh(e,t),n?Os=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Os._abbr}function Vh(e,t){if(t!==null){var n,r=Xv;if(t.abbr=e,Ae[e]!=null)Iv("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Ae[e]._config;else if(t.parentLocale!=null)if(Ae[t.parentLocale]!=null)r=Ae[t.parentLocale]._config;else if(n=zu(t.parentLocale),n!=null)r=n._config;else return Po[t.parentLocale]||(Po[t.parentLocale]=[]),Po[t.parentLocale].push({name:e,config:t}),null;return Ae[e]=new Fh(Jd(r,t)),Po[e]&&Po[e].forEach(function(i){Vh(i.name,i.config)}),jr(e),Ae[e]}else return delete Ae[e],null}function bE(e,t){if(t!=null){var n,r,i=Xv;Ae[e]!=null&&Ae[e].parentLocale!=null?Ae[e].set(Jd(Ae[e]._config,t)):(r=zu(e),r!=null&&(i=r._config),t=Jd(i,t),r==null&&(t.abbr=e),n=new Fh(t),n.parentLocale=Ae[e],Ae[e]=n),jr(e)}else Ae[e]!=null&&(Ae[e].parentLocale!=null?(Ae[e]=Ae[e].parentLocale,e===jr()&&jr(e)):Ae[e]!=null&&delete Ae[e]);return Ae[e]}function ur(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Os;if(!bn(e)){if(t=zu(e),t)return t;e=[e]}return xE(e)}function CE(){return Xd(Ae)}function Gh(e){var t,n=e._a;return n&&oe(e).overflow===-2&&(t=n[Zn]<0||n[Zn]>11?Zn:n[Ln]<1||n[Ln]>ju(n[bt],n[Zn])?Ln:n[tt]<0||n[tt]>24||n[tt]===24&&(n[gn]!==0||n[Jn]!==0||n[ni]!==0)?tt:n[gn]<0||n[gn]>59?gn:n[Jn]<0||n[Jn]>59?Jn:n[ni]<0||n[ni]>999?ni:-1,oe(e)._overflowDayOfYear&&(t<bt||t>Ln)&&(t=Ln),oe(e)._overflowWeeks&&t===-1&&(t=PT),oe(e)._overflowWeekday&&t===-1&&(t=MT),oe(e).overflow=t),e}var kE=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_E=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,TE=/Z|[+-]\d\d(?::?\d\d)?/,va=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Ac=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],EE=/^\/?Date\((-?\d+)/i,OE=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,PE={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ew(e){var t,n,r=e._i,i=kE.exec(r)||_E.exec(r),o,s,a,u,c=va.length,d=Ac.length;if(i){for(oe(e).iso=!0,t=0,n=c;t<n;t++)if(va[t][1].exec(i[1])){s=va[t][0],o=va[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(i[3]){for(t=0,n=d;t<n;t++)if(Ac[t][1].exec(i[3])){a=(i[2]||" ")+Ac[t][0];break}if(a==null){e._isValid=!1;return}}if(!o&&a!=null){e._isValid=!1;return}if(i[4])if(TE.exec(i[4]))u="Z";else{e._isValid=!1;return}e._f=s+(a||"")+(u||""),Qh(e)}else e._isValid=!1}function ME(e,t,n,r,i,o){var s=[DE(e),Hv.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&s.push(parseInt(o,10)),s}function DE(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function LE(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function NE(e,t,n){if(e){var r=Kv.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return oe(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function RE(e,t,n){if(e)return PE[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function tw(e){var t=OE.exec(LE(e._i)),n;if(t){if(n=ME(t[4],t[3],t[2],t[5],t[6],t[7]),!NE(t[1],n,e))return;e._a=n,e._tzm=RE(t[8],t[9],t[10]),e._d=Ts.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),oe(e).rfc2822=!0}else e._isValid=!1}function IE(e){var t=EE.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(ew(e),e._isValid===!1)delete e._isValid;else return;if(tw(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:U.createFromInputFallback(e)}U.createFromInputFallback=an("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Si(e,t,n){return e??t??n}function AE(e){var t=new Date(U.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function qh(e){var t,n,r=[],i,o,s;if(!e._d){for(i=AE(e),e._w&&e._a[Ln]==null&&e._a[Zn]==null&&$E(e),e._dayOfYear!=null&&(s=Si(e._a[bt],i[bt]),(e._dayOfYear>Xo(s)||e._dayOfYear===0)&&(oe(e)._overflowDayOfYear=!0),n=Ts(s,0,e._dayOfYear),e._a[Zn]=n.getUTCMonth(),e._a[Ln]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[tt]===24&&e._a[gn]===0&&e._a[Jn]===0&&e._a[ni]===0&&(e._nextDay=!0,e._a[tt]=0),e._d=(e._useUTC?Ts:HT).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[tt]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(oe(e).weekdayMismatch=!0)}}function $E(e){var t,n,r,i,o,s,a,u,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,s=4,n=Si(t.GG,e._a[bt],Es(Ne(),1,4).year),r=Si(t.W,1),i=Si(t.E,1),(i<1||i>7)&&(u=!0)):(o=e._locale._week.dow,s=e._locale._week.doy,c=Es(Ne(),o,s),n=Si(t.gg,e._a[bt],c.year),r=Si(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(u=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o),r<1||r>tr(n,o,s)?oe(e)._overflowWeeks=!0:u!=null?oe(e)._overflowWeekday=!0:(a=Qv(n,r,i,o,s),e._a[bt]=a.year,e._dayOfYear=a.dayOfYear)}U.ISO_8601=function(){};U.RFC_2822=function(){};function Qh(e){if(e._f===U.ISO_8601){ew(e);return}if(e._f===U.RFC_2822){tw(e);return}e._a=[],oe(e).empty=!0;var t=""+e._i,n,r,i,o,s,a=t.length,u=0,c,d;for(i=Av(e._f,e._locale).match(jh)||[],d=i.length,n=0;n<d;n++)o=i[n],r=(t.match(TT(o,e))||[])[0],r&&(s=t.substr(0,t.indexOf(r)),s.length>0&&oe(e).unusedInput.push(s),t=t.slice(t.indexOf(r)+r.length),u+=r.length),Wi[o]?(r?oe(e).empty=!1:oe(e).unusedTokens.push(o),OT(o,r,e)):e._strict&&!r&&oe(e).unusedTokens.push(o);oe(e).charsLeftOver=a-u,t.length>0&&oe(e).unusedInput.push(t),e._a[tt]<=12&&oe(e).bigHour===!0&&e._a[tt]>0&&(oe(e).bigHour=void 0),oe(e).parsedDateParts=e._a.slice(0),oe(e).meridiem=e._meridiem,e._a[tt]=FE(e._locale,e._a[tt],e._meridiem),c=oe(e).era,c!==null&&(e._a[bt]=e._locale.erasConvertYear(c,e._a[bt])),qh(e),Gh(e)}function FE(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function jE(e){var t,n,r,i,o,s,a=!1,u=e._f.length;if(u===0){oe(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<u;i++)o=0,s=!1,t=$h({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Qh(t),Ah(t)&&(s=!0),o+=oe(t).charsLeftOver,o+=oe(t).unusedTokens.length*10,oe(t).score=o,a?o<r&&(r=o,n=t):(r==null||o<r||s)&&(r=o,n=t,s&&(a=!0));kr(e,n||t)}function zE(e){if(!e._d){var t=zh(e._i),n=t.day===void 0?t.date:t.day;e._a=Nv([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),qh(e)}}function UE(e){var t=new Bs(Gh(nw(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function nw(e){var t=e._i,n=e._f;return e._locale=e._locale||ur(e._l),t===null||n===void 0&&t===""?Lu({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Cn(t)?new Bs(Gh(t)):(Us(t)?e._d=t:bn(n)?jE(e):n?Qh(e):BE(e),Ah(e)||(e._d=null),e))}function BE(e){var t=e._i;Dt(t)?e._d=new Date(U.now()):Us(t)?e._d=new Date(t.valueOf()):typeof t=="string"?IE(e):bn(t)?(e._a=Nv(t.slice(0),function(n){return parseInt(n,10)}),qh(e)):si(t)?zE(e):ar(t)?e._d=new Date(t):U.createFromInputFallback(e)}function rw(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(si(e)&&Ih(e)||bn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,UE(o)}function Ne(e,t,n,r){return rw(e,t,n,r,!1)}var HE=an("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ne.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Lu()}),WE=an("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ne.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Lu()});function iw(e,t){var n,r;if(t.length===1&&bn(t[0])&&(t=t[0]),!t.length)return Ne();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function YE(){var e=[].slice.call(arguments,0);return iw("isBefore",e)}function VE(){var e=[].slice.call(arguments,0);return iw("isAfter",e)}var GE=function(){return Date.now?Date.now():+new Date},Mo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function qE(e){var t,n=!1,r,i=Mo.length;for(t in e)if(xe(e,t)&&!(Ge.call(Mo,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[Mo[r]]){if(n)return!1;parseFloat(e[Mo[r]])!==ae(e[Mo[r]])&&(n=!0)}return!0}function QE(){return this._isValid}function KE(){return En(NaN)}function Uu(e){var t=zh(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,s=t.day||0,a=t.hour||0,u=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=qE(t),this._milliseconds=+d+c*1e3+u*6e4+a*1e3*60*60,this._days=+s+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=ur(),this._bubble()}function Fa(e){return e instanceof Uu}function tf(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function ZE(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,s;for(s=0;s<r;s++)(n&&e[s]!==t[s]||!n&&ae(e[s])!==ae(t[s]))&&o++;return o+i}function ow(e,t){K(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+Fn(~~(n/60),2)+t+Fn(~~n%60,2)})}ow("Z",":");ow("ZZ","");Y("Z",Fu);Y("ZZ",Fu);Oe(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Kh(Fu,e)});var JE=/([\+\-]|\d\d)/gi;function Kh(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(JE)||["-",0,0],o=+(i[1]*60)+ae(i[2]),o===0?0:i[0]==="+"?o:-o)}function Zh(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Cn(e)||Us(e)?e.valueOf():Ne(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),U.updateOffset(n,!1),n):Ne(e).local()}function nf(e){return-Math.round(e._d.getTimezoneOffset())}U.updateOffset=function(){};function XE(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Kh(Fu,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=nf(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?lw(this,En(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,U.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:nf(this)}function e8(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function t8(e){return this.utcOffset(0,e)}function n8(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(nf(this),"m")),this}function r8(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Kh(kT,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function i8(e){return this.isValid()?(e=e?Ne(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function o8(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function s8(){if(!Dt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return $h(e,this),e=nw(e),e._a?(t=e._isUTC?Bn(e._a):Ne(e._a),this._isDSTShifted=this.isValid()&&ZE(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function a8(){return this.isValid()?!this._isUTC:!1}function l8(){return this.isValid()?this._isUTC:!1}function sw(){return this.isValid()?this._isUTC&&this._offset===0:!1}var u8=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,c8=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function En(e,t){var n=e,r=null,i,o,s;return Fa(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:ar(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=u8.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:ae(r[Ln])*i,h:ae(r[tt])*i,m:ae(r[gn])*i,s:ae(r[Jn])*i,ms:ae(tf(r[ni]*1e3))*i}):(r=c8.exec(e))?(i=r[1]==="-"?-1:1,n={y:qr(r[2],i),M:qr(r[3],i),w:qr(r[4],i),d:qr(r[5],i),h:qr(r[6],i),m:qr(r[7],i),s:qr(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(s=d8(Ne(n.from),Ne(n.to)),n={},n.ms=s.milliseconds,n.M=s.months),o=new Uu(n),Fa(e)&&xe(e,"_locale")&&(o._locale=e._locale),Fa(e)&&xe(e,"_isValid")&&(o._isValid=e._isValid),o}En.fn=Uu.prototype;En.invalid=KE;function qr(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Vg(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function d8(e,t){var n;return e.isValid()&&t.isValid()?(t=Zh(t,e),e.isBefore(t)?n=Vg(e,t):(n=Vg(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function aw(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(Iv(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=En(n,r),lw(this,i,e),this}}function lw(e,t,n,r){var i=t._milliseconds,o=tf(t._days),s=tf(t._months);e.isValid()&&(r=r??!0,s&&Yv(e,Ol(e,"Month")+s*n),o&&Fv(e,"Date",Ol(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&U.updateOffset(e,o||s))}var f8=aw(1,"add"),h8=aw(-1,"subtract");function uw(e){return typeof e=="string"||e instanceof String}function p8(e){return Cn(e)||Us(e)||uw(e)||ar(e)||g8(e)||m8(e)||e===null||e===void 0}function m8(e){var t=si(e)&&!Ih(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,s=r.length;for(i=0;i<s;i+=1)o=r[i],n=n||xe(e,o);return t&&n}function g8(e){var t=bn(e),n=!1;return t&&(n=e.filter(function(r){return!ar(r)&&uw(e)}).length===0),t&&n}function y8(e){var t=si(e)&&!Ih(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||xe(e,o);return t&&n}function v8(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function w8(e,t){arguments.length===1&&(arguments[0]?p8(arguments[0])?(e=arguments[0],t=void 0):y8(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Ne(),r=Zh(n,this).startOf("day"),i=U.calendarFormat(this,r)||"sameElse",o=t&&(Hn(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Ne(n)))}function x8(){return new Bs(this)}function S8(e,t){var n=Cn(e)?e:Ne(e);return this.isValid()&&n.isValid()?(t=ln(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function b8(e,t){var n=Cn(e)?e:Ne(e);return this.isValid()&&n.isValid()?(t=ln(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function C8(e,t,n,r){var i=Cn(e)?e:Ne(e),o=Cn(t)?t:Ne(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function k8(e,t){var n=Cn(e)?e:Ne(e),r;return this.isValid()&&n.isValid()?(t=ln(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function _8(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function T8(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function E8(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=Zh(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=ln(t),t){case"year":o=ja(this,r)/12;break;case"month":o=ja(this,r);break;case"quarter":o=ja(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:Xt(o)}function ja(e,t){if(e.date()<t.date())return-ja(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}U.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";U.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function O8(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function P8(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?$a(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Hn(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",$a(n,"Z")):$a(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function M8(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function D8(e){e||(e=this.isUtc()?U.defaultFormatUtc:U.defaultFormat);var t=$a(this,e);return this.localeData().postformat(t)}function L8(e,t){return this.isValid()&&(Cn(e)&&e.isValid()||Ne(e).isValid())?En({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function N8(e){return this.from(Ne(),e)}function R8(e,t){return this.isValid()&&(Cn(e)&&e.isValid()||Ne(e).isValid())?En({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function I8(e){return this.to(Ne(),e)}function cw(e){var t;return e===void 0?this._locale._abbr:(t=ur(e),t!=null&&(this._locale=t),this)}var dw=an("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function fw(){return this._locale}var Dl=1e3,Yi=60*Dl,Ll=60*Yi,hw=(365*400+97)*24*Ll;function Vi(e,t){return(e%t+t)%t}function pw(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-hw:new Date(e,t,n).valueOf()}function mw(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-hw:Date.UTC(e,t,n)}function A8(e){var t,n;if(e=ln(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?mw:pw,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Vi(t+(this._isUTC?0:this.utcOffset()*Yi),Ll);break;case"minute":t=this._d.valueOf(),t-=Vi(t,Yi);break;case"second":t=this._d.valueOf(),t-=Vi(t,Dl);break}return this._d.setTime(t),U.updateOffset(this,!0),this}function $8(e){var t,n;if(e=ln(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?mw:pw,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ll-Vi(t+(this._isUTC?0:this.utcOffset()*Yi),Ll)-1;break;case"minute":t=this._d.valueOf(),t+=Yi-Vi(t,Yi)-1;break;case"second":t=this._d.valueOf(),t+=Dl-Vi(t,Dl)-1;break}return this._d.setTime(t),U.updateOffset(this,!0),this}function F8(){return this._d.valueOf()-(this._offset||0)*6e4}function j8(){return Math.floor(this.valueOf()/1e3)}function z8(){return new Date(this.valueOf())}function U8(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function B8(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function H8(){return this.isValid()?this.toISOString():null}function W8(){return Ah(this)}function Y8(){return kr({},oe(this))}function V8(){return oe(this).overflow}function G8(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}K("N",0,0,"eraAbbr");K("NN",0,0,"eraAbbr");K("NNN",0,0,"eraAbbr");K("NNNN",0,0,"eraName");K("NNNNN",0,0,"eraNarrow");K("y",["y",1],"yo","eraYear");K("y",["yy",2],0,"eraYear");K("y",["yyy",3],0,"eraYear");K("y",["yyyy",4],0,"eraYear");Y("N",Jh);Y("NN",Jh);Y("NNN",Jh);Y("NNNN",iO);Y("NNNNN",oO);Oe(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?oe(n).era=i:oe(n).invalidEra=e});Y("y",mo);Y("yy",mo);Y("yyy",mo);Y("yyyy",mo);Y("yo",sO);Oe(["y","yy","yyy","yyyy"],bt);Oe(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[bt]=n._locale.eraYearOrdinalParse(e,i):t[bt]=parseInt(e,10)});function q8(e,t){var n,r,i,o=this._eras||ur("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=U(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=U(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function Q8(e,t,n){var r,i,o=this.eras(),s,a,u;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(s=o[r].name.toUpperCase(),a=o[r].abbr.toUpperCase(),u=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return o[r];break;case"NNNN":if(s===e)return o[r];break;case"NNNNN":if(u===e)return o[r];break}else if([s,a,u].indexOf(e)>=0)return o[r]}function K8(e,t){var n=e.since<=e.until?1:-1;return t===void 0?U(e.since).year():U(e.since).year()+(t-e.offset)*n}function Z8(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function J8(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function X8(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function eO(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-U(i[e].since).year())*n+i[e].offset;return this.year()}function tO(e){return xe(this,"_erasNameRegex")||Xh.call(this),e?this._erasNameRegex:this._erasRegex}function nO(e){return xe(this,"_erasAbbrRegex")||Xh.call(this),e?this._erasAbbrRegex:this._erasRegex}function rO(e){return xe(this,"_erasNarrowRegex")||Xh.call(this),e?this._erasNarrowRegex:this._erasRegex}function Jh(e,t){return t.erasAbbrRegex(e)}function iO(e,t){return t.erasNameRegex(e)}function oO(e,t){return t.erasNarrowRegex(e)}function sO(e,t){return t._eraYearOrdinalRegex||mo}function Xh(){var e=[],t=[],n=[],r=[],i,o,s=this.eras();for(i=0,o=s.length;i<o;++i)t.push(jt(s[i].name)),e.push(jt(s[i].abbr)),n.push(jt(s[i].narrow)),r.push(jt(s[i].name)),r.push(jt(s[i].abbr)),r.push(jt(s[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}K(0,["gg",2],0,function(){return this.weekYear()%100});K(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Bu(e,t){K(0,[e,e.length],0,t)}Bu("gggg","weekYear");Bu("ggggg","weekYear");Bu("GGGG","isoWeekYear");Bu("GGGGG","isoWeekYear");kt("weekYear","gg");kt("isoWeekYear","GG");_t("weekYear",1);_t("isoWeekYear",1);Y("G",$u);Y("g",$u);Y("GG",Ie,qt);Y("gg",Ie,qt);Y("GGGG",Bh,Uh);Y("gggg",Bh,Uh);Y("GGGGG",Au,Ru);Y("ggggg",Au,Ru);Ws(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=ae(e)});Ws(["gg","GG"],function(e,t,n,r){t[r]=U.parseTwoDigitYear(e)});function aO(e){return gw.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function lO(e){return gw.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function uO(){return tr(this.year(),1,4)}function cO(){return tr(this.isoWeekYear(),1,4)}function dO(){var e=this.localeData()._week;return tr(this.year(),e.dow,e.doy)}function fO(){var e=this.localeData()._week;return tr(this.weekYear(),e.dow,e.doy)}function gw(e,t,n,r,i){var o;return e==null?Es(this,r,i).year:(o=tr(e,r,i),t>o&&(t=o),hO.call(this,e,t,n,r,i))}function hO(e,t,n,r,i){var o=Qv(e,t,n,r,i),s=Ts(o.year,0,o.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}K("Q",0,"Qo","quarter");kt("quarter","Q");_t("quarter",7);Y("Q",jv);Oe("Q",function(e,t){t[Zn]=(ae(e)-1)*3});function pO(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}K("D",["DD",2],"Do","date");kt("date","D");_t("date",9);Y("D",Ie);Y("DD",Ie,qt);Y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Oe(["D","DD"],Ln);Oe("Do",function(e,t){t[Ln]=ae(e.match(Ie)[0])});var yw=po("Date",!0);K("DDD",["DDDD",3],"DDDo","dayOfYear");kt("dayOfYear","DDD");_t("dayOfYear",4);Y("DDD",Iu);Y("DDDD",zv);Oe(["DDD","DDDD"],function(e,t,n){n._dayOfYear=ae(e)});function mO(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}K("m",["mm",2],0,"minute");kt("minute","m");_t("minute",14);Y("m",Ie);Y("mm",Ie,qt);Oe(["m","mm"],gn);var gO=po("Minutes",!1);K("s",["ss",2],0,"second");kt("second","s");_t("second",15);Y("s",Ie);Y("ss",Ie,qt);Oe(["s","ss"],Jn);var yO=po("Seconds",!1);K("S",0,0,function(){return~~(this.millisecond()/100)});K(0,["SS",2],0,function(){return~~(this.millisecond()/10)});K(0,["SSS",3],0,"millisecond");K(0,["SSSS",4],0,function(){return this.millisecond()*10});K(0,["SSSSS",5],0,function(){return this.millisecond()*100});K(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});K(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});K(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});K(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});kt("millisecond","ms");_t("millisecond",16);Y("S",Iu,jv);Y("SS",Iu,qt);Y("SSS",Iu,zv);var _r,vw;for(_r="SSSS";_r.length<=9;_r+="S")Y(_r,mo);function vO(e,t){t[ni]=ae(("0."+e)*1e3)}for(_r="S";_r.length<=9;_r+="S")Oe(_r,vO);vw=po("Milliseconds",!1);K("z",0,0,"zoneAbbr");K("zz",0,0,"zoneName");function wO(){return this._isUTC?"UTC":""}function xO(){return this._isUTC?"Coordinated Universal Time":""}var R=Bs.prototype;R.add=f8;R.calendar=w8;R.clone=x8;R.diff=E8;R.endOf=$8;R.format=D8;R.from=L8;R.fromNow=N8;R.to=R8;R.toNow=I8;R.get=bT;R.invalidAt=V8;R.isAfter=S8;R.isBefore=b8;R.isBetween=C8;R.isSame=k8;R.isSameOrAfter=_8;R.isSameOrBefore=T8;R.isValid=W8;R.lang=dw;R.locale=cw;R.localeData=fw;R.max=WE;R.min=HE;R.parsingFlags=Y8;R.set=CT;R.startOf=A8;R.subtract=h8;R.toArray=U8;R.toObject=B8;R.toDate=z8;R.toISOString=P8;R.inspect=M8;typeof Symbol<"u"&&Symbol.for!=null&&(R[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});R.toJSON=H8;R.toString=O8;R.unix=j8;R.valueOf=F8;R.creationData=G8;R.eraName=Z8;R.eraNarrow=J8;R.eraAbbr=X8;R.eraYear=eO;R.year=qv;R.isLeapYear=BT;R.weekYear=aO;R.isoWeekYear=lO;R.quarter=R.quarters=pO;R.month=Vv;R.daysInMonth=jT;R.week=R.weeks=qT;R.isoWeek=R.isoWeeks=QT;R.weeksInYear=dO;R.weeksInWeekYear=fO;R.isoWeeksInYear=uO;R.isoWeeksInISOWeekYear=cO;R.date=yw;R.day=R.days=lE;R.weekday=uE;R.isoWeekday=cE;R.dayOfYear=mO;R.hour=R.hours=yE;R.minute=R.minutes=gO;R.second=R.seconds=yO;R.millisecond=R.milliseconds=vw;R.utcOffset=XE;R.utc=t8;R.local=n8;R.parseZone=r8;R.hasAlignedHourOffset=i8;R.isDST=o8;R.isLocal=a8;R.isUtcOffset=l8;R.isUtc=sw;R.isUTC=sw;R.zoneAbbr=wO;R.zoneName=xO;R.dates=an("dates accessor is deprecated. Use date instead.",yw);R.months=an("months accessor is deprecated. Use month instead",Vv);R.years=an("years accessor is deprecated. Use year instead",qv);R.zone=an("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",e8);R.isDSTShifted=an("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",s8);function SO(e){return Ne(e*1e3)}function bO(){return Ne.apply(null,arguments).parseZone()}function ww(e){return e}var Se=Fh.prototype;Se.calendar=lT;Se.longDateFormat=fT;Se.invalidDate=pT;Se.ordinal=yT;Se.preparse=ww;Se.postformat=ww;Se.relativeTime=wT;Se.pastFuture=xT;Se.set=sT;Se.eras=q8;Se.erasParse=Q8;Se.erasConvertYear=K8;Se.erasAbbrRegex=nO;Se.erasNameRegex=tO;Se.erasNarrowRegex=rO;Se.months=IT;Se.monthsShort=AT;Se.monthsParse=FT;Se.monthsRegex=UT;Se.monthsShortRegex=zT;Se.week=WT;Se.firstDayOfYear=GT;Se.firstDayOfWeek=VT;Se.weekdays=rE;Se.weekdaysMin=oE;Se.weekdaysShort=iE;Se.weekdaysParse=aE;Se.weekdaysRegex=dE;Se.weekdaysShortRegex=fE;Se.weekdaysMinRegex=hE;Se.isPM=mE;Se.meridiem=vE;function Nl(e,t,n,r){var i=ur(),o=Bn().set(r,t);return i[n](o,e)}function xw(e,t,n){if(ar(e)&&(t=e,e=void 0),e=e||"",t!=null)return Nl(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Nl(e,r,n,"month");return i}function ep(e,t,n,r){typeof e=="boolean"?(ar(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,ar(t)&&(n=t,t=void 0),t=t||"");var i=ur(),o=e?i._week.dow:0,s,a=[];if(n!=null)return Nl(t,(n+o)%7,r,"day");for(s=0;s<7;s++)a[s]=Nl(t,(s+o)%7,r,"day");return a}function CO(e,t){return xw(e,t,"months")}function kO(e,t){return xw(e,t,"monthsShort")}function _O(e,t,n){return ep(e,t,n,"weekdays")}function TO(e,t,n){return ep(e,t,n,"weekdaysShort")}function EO(e,t,n){return ep(e,t,n,"weekdaysMin")}jr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=ae(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});U.lang=an("moment.lang is deprecated. Use moment.locale instead.",jr);U.langData=an("moment.langData is deprecated. Use moment.localeData instead.",ur);var Wn=Math.abs;function OO(){var e=this._data;return this._milliseconds=Wn(this._milliseconds),this._days=Wn(this._days),this._months=Wn(this._months),e.milliseconds=Wn(e.milliseconds),e.seconds=Wn(e.seconds),e.minutes=Wn(e.minutes),e.hours=Wn(e.hours),e.months=Wn(e.months),e.years=Wn(e.years),this}function Sw(e,t,n,r){var i=En(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function PO(e,t){return Sw(this,e,t,1)}function MO(e,t){return Sw(this,e,t,-1)}function Gg(e){return e<0?Math.floor(e):Math.ceil(e)}function DO(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,s,a,u;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Gg(rf(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=Xt(e/1e3),r.seconds=i%60,o=Xt(i/60),r.minutes=o%60,s=Xt(o/60),r.hours=s%24,t+=Xt(s/24),u=Xt(bw(t)),n+=u,t-=Gg(rf(u)),a=Xt(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function bw(e){return e*4800/146097}function rf(e){return e*146097/4800}function LO(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=ln(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+bw(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(rf(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function NO(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+ae(this._months/12)*31536e6:NaN}function cr(e){return function(){return this.as(e)}}var RO=cr("ms"),IO=cr("s"),AO=cr("m"),$O=cr("h"),FO=cr("d"),jO=cr("w"),zO=cr("M"),UO=cr("Q"),BO=cr("y");function HO(){return En(this)}function WO(e){return e=ln(e),this.isValid()?this[e+"s"]():NaN}function yi(e){return function(){return this.isValid()?this._data[e]:NaN}}var YO=yi("milliseconds"),VO=yi("seconds"),GO=yi("minutes"),qO=yi("hours"),QO=yi("days"),KO=yi("months"),ZO=yi("years");function JO(){return Xt(this.days()/7)}var Vn=Math.round,Ai={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function XO(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function e9(e,t,n,r){var i=En(e).abs(),o=Vn(i.as("s")),s=Vn(i.as("m")),a=Vn(i.as("h")),u=Vn(i.as("d")),c=Vn(i.as("M")),d=Vn(i.as("w")),f=Vn(i.as("y")),h=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||s<=1&&["m"]||s<n.m&&["mm",s]||a<=1&&["h"]||a<n.h&&["hh",a]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(h=h||d<=1&&["w"]||d<n.w&&["ww",d]),h=h||c<=1&&["M"]||c<n.M&&["MM",c]||f<=1&&["y"]||["yy",f],h[2]=t,h[3]=+e>0,h[4]=r,XO.apply(null,h)}function t9(e){return e===void 0?Vn:typeof e=="function"?(Vn=e,!0):!1}function n9(e,t){return Ai[e]===void 0?!1:t===void 0?Ai[e]:(Ai[e]=t,e==="s"&&(Ai.ss=t-1),!0)}function r9(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Ai,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Ai,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=e9(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var $c=Math.abs;function xi(e){return(e>0)-(e<0)||+e}function Hu(){if(!this.isValid())return this.localeData().invalidDate();var e=$c(this._milliseconds)/1e3,t=$c(this._days),n=$c(this._months),r,i,o,s,a=this.asSeconds(),u,c,d,f;return a?(r=Xt(e/60),i=Xt(r/60),e%=60,r%=60,o=Xt(n/12),n%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=a<0?"-":"",c=xi(this._months)!==xi(a)?"-":"",d=xi(this._days)!==xi(a)?"-":"",f=xi(this._milliseconds)!==xi(a)?"-":"",u+"P"+(o?c+o+"Y":"")+(n?c+n+"M":"")+(t?d+t+"D":"")+(i||r||e?"T":"")+(i?f+i+"H":"")+(r?f+r+"M":"")+(e?f+s+"S":"")):"P0D"}var ge=Uu.prototype;ge.isValid=QE;ge.abs=OO;ge.add=PO;ge.subtract=MO;ge.as=LO;ge.asMilliseconds=RO;ge.asSeconds=IO;ge.asMinutes=AO;ge.asHours=$O;ge.asDays=FO;ge.asWeeks=jO;ge.asMonths=zO;ge.asQuarters=UO;ge.asYears=BO;ge.valueOf=NO;ge._bubble=DO;ge.clone=HO;ge.get=WO;ge.milliseconds=YO;ge.seconds=VO;ge.minutes=GO;ge.hours=qO;ge.days=QO;ge.weeks=JO;ge.months=KO;ge.years=ZO;ge.humanize=r9;ge.toISOString=Hu;ge.toString=Hu;ge.toJSON=Hu;ge.locale=cw;ge.localeData=fw;ge.toIsoString=an("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Hu);ge.lang=dw;K("X",0,0,"unix");K("x",0,0,"valueOf");Y("x",$u);Y("X",_T);Oe("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Oe("x",function(e,t,n){n._d=new Date(ae(e))});//! moment.js
U.version="2.29.4";iT(Ne);U.fn=R;U.min=YE;U.max=VE;U.now=GE;U.utc=Bn;U.unix=SO;U.months=CO;U.isDate=Us;U.locale=jr;U.invalid=Lu;U.duration=En;U.isMoment=Cn;U.weekdays=_O;U.parseZone=bO;U.localeData=ur;U.isDuration=Fa;U.monthsShort=kO;U.weekdaysMin=EO;U.defineLocale=Vh;U.updateLocale=bE;U.locales=CE;U.weekdaysShort=TO;U.normalizeUnits=ln;U.relativeTimeRounding=t9;U.relativeTimeThreshold=n9;U.calendarFormat=v8;U.prototype=R;U.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const i9=w.div`
  /* border: 1px solid red; */
  background: #ffffff;
  background: #094067;
  box-shadow: -4px 12px 16px -4px rgba(16, 24, 40, 0.08),
    -2px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px;
  gap: 16px;
  cursor: pointer;
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }
`,o9=w.div`
  /* border: 1px solid red; */
`,s9=w.div`
  color: #332ad5;
  color: #ef4565;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;
`,a9=w.div``,l9=w.div`
  font-weight: 600;
  font-size: 22px;
  /* line-height: 35px; */

  color: #000000;
  color: #d8eefe;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
`,u9=w.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`,c9=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  margin-bottom: 12px;

  span {
    font-weight: 500;
    font-size: 18px;
    color: #98a2b3;
    color: #ffffff;
    letter-spacing: 0.035em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
  }

  span.dot {
    height: 5px;
    width: 5px;
    background-color: #bbb;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
  }
`,d9=w.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  div {
    /* border: 1px solid red; */
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.2rem;

    span {
      font-weight: 500;
      font-size: 18px;
      color: #475467;
      color: #fff;
      letter-spacing: 0.035em;
    }
  }
`,f9=e=>{const t=Re(),n=()=>{Je(),t(`/forum/${e._id}`,{state:{forumId:e._id,userToken:e.userToken}})};return e._id?S(i9,{onClick:n,children:[S(o9,{children:[l(s9,{children:e.topic}),l(a9,{})]}),l(l9,{children:e.tagline.length>85?S(fe,{children:[e.tagline.slice(0,84)," ",l("span",{children:"..."})]}):e.tagline}),S(u9,{children:[S(c9,{children:[S("span",{children:["@",e.createdBy.userName]}),S("div",{children:[l("span",{className:"dot"}),l("span",{children:U(e.createdAt).fromNow()})]})]}),S(d9,{children:[S("div",{children:[l(dh,{color:"#fff"}),l("span",{children:e.upvotes.length})]}),S("div",{children:[l(o5,{}),l("span",{children:e.answers.length})]})]})]})]}):null},h9=w.div`
  border: 1px solid #d5d9eb;
  width: fit-content;

  padding: 10px 14px;
  border-radius: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4b5565;
  }
`,vi=e=>{const t=Re();return S(h9,{onClick:()=>{Je(),e.learnCardId?t(`/learncard-overview/${e.learnCardId}`,{state:{learnCardId:e.learnCardId}}):e.classElem?t("/classes",{state:{elemLink:e.classElem}}):t(e.link)},children:[l(p5,{}),l("span",{children:"Back"})]})},p9=w.div`
  width: 50vw;
  padding: 20px 32px;

  h4 {
    font-size: 16px;
    width: fit-content;
    margin-bottom: 3rem;
    border-bottom: 1px solid black;
  }

  textarea {
    margin-bottom: 3rem;
  }
`,m9=e=>{const[t,n]=x.useState(),{fetchLocalUserToken:r}=rt();x.useEffect(()=>{r().then(p=>{console.log(p),n(p)})},[]);const[i,o]=x.useState(!1);function s(){o(!0)}function a(){o(!1)}const[u,c]=x.useState("");function d(p){c(p)}const f={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},h=()=>u===""?(I.error("Answer cannot be empty",f),!1):!0;return S(fe,{children:[l(kw,{onClick:s,children:"Post Answer"}),l(Un,{isOpen:i,onRequestClose:a,style:Vr,children:S(p9,{children:[l("header",{children:l("h4",{children:"Post an Answer"})}),l(Wt,{label:"Forum Answer",name:"answer",value:u,areaHeight:"10rem",updateSingleField:d}),l(Fr,{children:S("button",{onClick:async()=>{h()&&await le.post(`${ue}${ce}/forum/${e.forumId}/answers`,{answer:u},{headers:me(t??"")}).then(()=>{c(""),I.success("Answer posted on Forum :)",f),window.location.reload()}).catch(p=>{I.error(p.response.data.message,f)})},children:[l("span",{children:"Submit Answer"}),l(Qe,{strokeColor:"#FFFFFF"})]})})]})})]})},g9=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  svg {
    /* border: 1px solid red; */
    width: 2rem;
    width: ${e=>e.isAnswer?"1.6rem":"2rem"};
    height: 1.8rem;
    cursor: pointer;
  }

  span {
    color: #000;
    font-size: 1.175rem;
    font-size: ${e=>e.isAnswer?"1.175rem":"1.375"};
    font-family: "Nunito";
    font-weight: 500;
    letter-spacing: 0.0275rem;
  }
`,y9=w.div`
  /* border: 1px solid red; */
  display: flex;
`,Cw=e=>{const[t,n]=x.useState(e.upvotes),r=()=>t.includes(e.userId),i={position:I.POSITION.BOTTOM_RIGHT,autoClose:4e3,pauseOnHover:!0,draggable:!0},o=async()=>{e.isAnswer?await le.patch(`${ue}${ce}/forum/${e.forumId}/answers/${e.answerId}`,{},{headers:me(e.userToken)}).then(({data:s})=>{console.log(s);const a=s.updatedAnswer.upvotes;n(a)}).catch(s=>{I.error(s.response.data.message,i)}):await le.patch(`${ue}${ce}/forum/${e.forumId}`,{},{headers:me(e.userToken)}).then(({data:s})=>{console.log(s);const a=s.updatedForum.upvotes;n(a)}).catch(s=>{I.error(s.response.data.message,i)})};return S(g9,{isAnswer:e.isAnswer,children:[l(y9,{onClick:o,children:l(w5,{color:r()?"#094067":"rgba(125, 137, 176, 0.4)"})}),l("span",{children:t.length}),l($n,{theme:"dark"})]})},v9=w.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 0.6fr 9fr 0.5fr;
  row-gap: 1rem;
  border-bottom: 1px solid #cdd5df;
  padding-bottom: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
`,w9=w.div`
  /* border: 1px solid red; */

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    cursor: pointer;
  }
`,x9=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 35px;

    color: #000000;
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #4a5578;
  }
`,S9=e=>S(v9,{children:[l(Cw,{upvotes:e.upvotes,userId:e.userId,isAnswer:!1,forumId:e.forumId,userToken:e.userToken}),S(x9,{children:[l("div",{children:l("h2",{children:e.tagline})}),l("div",{children:l("p",{children:e.question})})]}),l(w9,{children:l("img",{src:e.createdBy.photo,alt:""})})]}),b9=w.div`
  /* border: 1px solid red; */

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;

  div.went-wrong {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    padding: 1rem 0;
    line-height: 25px;
  }
`,C9=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`,kw=w.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  gap: 10px;
  background: rgb(51, 42, 213);
  background: #ef4565;
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  cursor: pointer;
`,k9=w.div`
  /* border: 1px solid red; */
`,_9=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.time {
    color: #4a5578;
    font-size: 14px;
  }
`,T9=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`,E9=w.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  border: 1px solid #d5d9eb;
  border-radius: 26px;
`,O9=w.div`
  /* border: 1px solid #d5d9eb; */
  display: grid;
  grid-template-columns: 0.8fr 20fr;
`,P9=w.div`
  /* border: 1px solid #d5d9eb; */
  padding-left: 6px;
`,M9=()=>{const[e,t]=x.useState(),[n,r]=x.useState(),[i,o]=x.useState(""),[s,a]=x.useState(!0),u=jn();x.useEffect(()=>{const y=u.state.forumId,p=u.state.userToken;console.log(p),r(y),o(p)},[u]);const{fetchLocalUserData:c}=rt(),[d,f]=x.useState("");x.useEffect(()=>{c().then(y=>{f(y._id)})},[]);async function h(){await le.get(`${ue}${ce}/forum/${n}`,{headers:me(i??"")}).then(({data:y})=>{const p=y.data.data[0];console.log(y.data.data[0]),t(p),a(!1)}).catch(y=>{console.log(y),a(!1)})}return x.useEffect(()=>{n&&i&&h()},[n,i]),S(fe,{children:[l(ut,{}),l(b9,{children:s?l(Ht,{}):e?S(fe,{children:[S(C9,{children:[l(vi,{link:"/forums"}),l(m9,{forumId:e==null?void 0:e._id})]}),S(k9,{children:[l(S9,{createdBy:e.createdBy,question:e.question,upvotes:e.upvotes,tagline:e.tagline,forumId:e._id,userId:d,userToken:i}),l(T9,{children:e.answers.map((y,p)=>S(E9,{children:[S(_9,{children:[l(kn,{name:y.answeredBy.name,photo:y.answeredBy.photo,imgBorder:"black"}),l("div",{className:"time",children:U(y.createdAt).fromNow()})]}),S(O9,{children:[l(Cw,{userToken:i,userId:d,isAnswer:!0,upvotes:y.upvotes,forumId:e._id,answerId:y._id}),l(P9,{children:l("p",{children:y.answer})})]})]}))})]})]}):l("div",{className:"went-wrong",children:"Something went wrong"})}),l(it,{})]})},D9=w.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    background-color: #3da9fc;
    padding: 12px 18px;
    border-radius: 4px;

    color: #fff;
    font-size: 1rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.02rem;
    cursor: pointer;
    /* text-transform: uppercase; */
  }
`,go=e=>l(D9,{children:l("span",{onClick:e.onClick,children:e.loaderLoading?l(dv,{height:"30",width:"30",color:"#ffffff",ariaLabel:"tail-spin-loading",radius:"1"}):"Load More"})}),L9=w.div`
  /* border: 1px solid brown; */
  /* display: flex; */
  /* align-items: center; */
`,N9=w.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  width: 90%;
`,R9=w.div`
  /* border: 1px solid red; */
  width: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`,I9=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 2rem 15vw 4rem;
`,A9=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(),[i,o]=x.useState(1),[s,a]=x.useState(!1),[u,c]=x.useState(!0),[d,f]=x.useState(!0),{fetchLocalUserToken:h}=rt();x.useEffect(()=>{h().then(_=>{r(_)})},[]);const y=_=>{if(_.length==0){a(!1);return}else if(_.length%sr!=0){a(!1);return}a(!0)};async function p(){f(!0),await le.get(`${ue}${ce}/forum`,{params:{limit:sr,page:i},headers:me(n??"")}).then(({data:_})=>{const M=_.data.data;console.log(M),y(M),t(L=>[...L,...M]),c(!1),f(!1),o(L=>L+1)}).catch(_=>{console.log(_),c(!1),f(!1)})}x.useEffect(()=>{n&&p()},[n]);const v=Re(),C=()=>{v("/forums/create-forum")},[m,g]=x.useState([]);x.useState("");const b=_=>{console.log(_),k(_)},k=async _=>{if(_===""){g([]);return}};return S(fe,{children:[l(ut,{}),S(L9,{children:[l(N9,{children:S(kw,{onClick:C,children:[l(dh,{color:"#ffffff"}),l("span",{children:"Post your query"})]})}),l(R9,{children:l(jy,{updateSearch:b,placeholderText:"Search n forums..."})}),u?l(Ht,{}):l(I9,{children:e&&n&&e.map((_,M)=>l(f9,{..._,userToken:n},M))}),e&&s&&l(go,{loaderLoading:d,onClick:p})]}),l(it,{})]})},$9=w.div`
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;
  width: 100%;
  margin: 2rem auto 0;
  font-family: "Nunito";
  font-style: normal;
  text-align: center;
  color: #000000;

  .highlighted {
    color: #000000;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 4px solid #674ff1;
    }
  }
`,F9=w.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 0 4.5rem 0.5rem;
  position: relative;
  color: #979797;
  cursor: pointer;
  text-transform: capitalize;
`,_w=e=>l($9,{children:e.labelArr.map((t,n)=>l(F9,{className:e.activeLink==t?"highlighted":void 0,onClick:()=>e.navigationHandler(t),children:t},n))}),j9=w.div`
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  overflow: hidden;
  background: #f6f6f6;
  background: #d8eefe;
  background: #094067;
  transition: all 0.15s linear;

  &:hover {
    transform: ${e=>e.hasAnimation?"translateY(-10px)":null};
  }
`,z9=w.div`
  height: ${e=>e.imgHeight||"232px"};

  img {
    margin: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border: 1px solid red; */
  }
`,U9=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 32px;
  gap: 24px;
  gap: ${e=>e.gapSize||"24px"};
  background: #f6f6f6;
  background: #d8eefe;
  background: #094067;
  font-family: "Nunito";
`,B9=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */

  h4 {
    font-weight: 700;
    font-size: ${e=>e.headerSize||"18px"};
    line-height: 1;
    line-height: 25px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    color: #ef4565;
  }
`,H9=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: ${e=>e.headerSize||"18px"};
    line-height: 25px;
    color: #000000;
    color: white;
    text-transform: capitalize;
  }
`,W9=w.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: ${e=>e.titleSize||"24px"};
  line-height: ${e=>e.titleLineHeight||"35px"};
  color: #000000;
  color: white;
  color: #d8eefe;
`,Y9=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,V9=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  gap: 8px;
  background: #332ad5;
  background: #ef4565;
  border-radius: 4px;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 16px;
    font-size: ${e=>e.btnSize||"16px"};
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,G9=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  svg {
    /* fill: white; */
    width: ${e=>e.svgSize||"18px"};
    height: ${e=>e.svgSize||"18px"};
  }

  span {
    font-weight: 600;
    font-size: ${e=>e.btnSize||"18px"};
    color: #000000;
    color: white;
  }
`,q9=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Q9=w.span`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: white;
`,Tw=e=>{var d,f,h,y,p,v,C,m,g,b,k,_;const t=Re(),{fetchLocalUserData:n}=rt(),[r,i]=x.useState();x.useEffect(()=>{n().then(M=>{i(M)}),a()},[]);const o=()=>r?e.teachCard.studentsEnrolled.filter(L=>L==r._id).length:null,s=()=>r?e.teachCard.createdBy._id==r._id:null,a=()=>{const M=new Date,L=e.teachCard.classEndsAt,D=new Date(L);return M>D},u=()=>{const M=r==null?void 0:r._id,L=e.teachCard.reviews;let D=!1;return L.forEach(q=>{q.user._id==M&&(D=!0)}),D},c=()=>{Je(),s()?e.fromLearnCard?t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}}):o()?e.fromLearnCard?t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}}):e.fromLearnCard?t(`/class-overviw/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/class-overviw/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}})};return S(j9,{hasAnimation:(d=e.cssArr)==null?void 0:d.hasAnimation,children:[l(z9,{imgHeight:(f=e.cssArr)==null?void 0:f.imageHeight,children:l("img",{src:e.teachCard.cardBanner,alt:"card-banner"})}),S(U9,{gapSize:(h=e.cssArr)==null?void 0:h.gap,children:[S(B9,{headerSize:(y=e.cssArr)==null?void 0:y.headerSize,children:[l("h4",{children:e.teachCard.subject}),S(H9,{headerSize:(p=e.cssArr)==null?void 0:p.headerSize,children:[l(As,{}),S("span",{children:[e.teachCard.studentsEnrolled.length," enrolled"]})]})]}),l(W9,{titleSize:(v=e.cssArr)==null?void 0:v.titleSize,titleLineHeight:(C=e.cssArr)==null?void 0:C.titleLineHeight,children:e.teachCard.topic.length>52?e.teachCard.topic.slice(0,52)+"...":e.teachCard.topic}),S(q9,{children:[l(kn,{name:e.teachCard.createdBy.name,photo:e.teachCard.createdBy.photo,imgBorder:"#ffffff",textColor:"#ffffff",imgSize:(m=e.cssArr)==null?void 0:m.userChipImgSize,textSize:(g=e.cssArr)==null?void 0:g.userChipTextSize}),l(Q9,{children:Br(e.teachCard.date)+", "+Sn(e.teachCard.classStartsAt)+" - "+Sn(e.teachCard.classEndsAt)})]}),S(Y9,{children:[S(V9,{onClick:c,btnSize:(b=e.cssArr)==null?void 0:b.btnSize,children:[l("span",{children:s()?"Check Class":o()==1?a()?u()?"Check Class":"Give Review":"Check Class":a()?"Check Class":"Enroll Now"}),l(Qe,{strokeColor:"white"})]}),s()?null:o()==0?S(G9,{svgSize:(k=e.cssArr)==null?void 0:k.svgSize,btnSize:(_=e.cssArr)==null?void 0:_.btnSize,children:[l(Ss,{color:"white"}),S("span",{children:[e.teachCard.price," Coins"]})]}):null]})]})]})},K9=w.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
`,Ew={hasAnimation:!0,imageHeight:"180px",gap:"18px",headerSize:"16px",titleSize:"20px",titleLineHeight:"30px",btnSize:"16px",svgSize:"18px",userChipImgSize:"26px",userChipTextSize:"16px"},tp=e=>l(K9,{children:e.teachCards.map((t,n)=>l(Tw,{cssArr:Ew,teachCard:t,elemType:e.elemType},n))}),Z9=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,qg=e=>{const[t,n]=x.useState([]),[r,i]=x.useState(1),[o,s]=x.useState(2),[a,u]=x.useState(!1),[c,d]=x.useState(!0),[f,h]=x.useState(!0),y=v=>{if(v.length==0){u(!1);return}else if(v.length%o!=0){u(!1);return}u(!0)};async function p(){h(!0),await le.get(`${ue}${ce}/teach`,{params:{sort:"-classStartsAt",limit:sr,page:r},headers:me(e.userToken??"")}).then(({data:v})=>{console.log(v.teachCards);const C=v.teachCards;y(C),n(m=>[...m,...C]),d(!1),h(!1),i(m=>m+1)}).catch(v=>{console.log(v),d(!1),h(!1)})}return x.useEffect(()=>{e.userToken&&p()},[e.userToken]),S(Z9,{children:[c?l(Ht,{}):t.length!=0&&l(tp,{teachCards:t,elemType:"all classes"}),t&&a&&l(go,{loaderLoading:f,onClick:p})]})},J9=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #98a2b3;
  }

  button {
    display: flex;
    padding: 1.125rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: #332ad5;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`,Ow=e=>{const t=Re(),n=()=>{t("/classes",{state:{elemLink:e.elemLink}})};return S(J9,{children:[l("h2",{children:e.heading}),l("h3",{children:e.subHeading}),S("button",{onClick:n,children:[l("span",{children:"Check Classes"}),l(Qe,{strokeColor:"white"})]})]})},X9=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,e7=e=>{const[t,n]=x.useState([]),[r,i]=x.useState(1),[o,s]=x.useState(2),[a,u]=x.useState(!1),[c,d]=x.useState(!0),[f,h]=x.useState(!0),y=v=>{if(v.length==0){u(!1);return}else if(v.length%o!=0){u(!1);return}u(!0)};async function p(){h(!0),await le.get(`${ue}${ce}/user/myclasses/upcoming`,{params:{sort:"-classStartsAt",limit:sr,page:r},headers:me(e.userToken??"")}).then(({data:v})=>{const C=v.upcomingClasses;console.log(C),y(C),n(m=>[...m,...C]),d(!1),h(!1),i(m=>m+1)}).catch(v=>{console.log(v),d(!1),h(!1)})}return x.useEffect(()=>{e.userToken&&p()},[e.userToken]),S(X9,{children:[c?l(Ht,{}):t.length!=0?l(tp,{teachCards:t,elemType:"upcoming"}):l(Ow,{elemLink:"all classes",heading:"No upcoming classes",subHeading:`You don't have any upcoming classes. Enroll in a class and start your\r
        learning`}),t&&a&&l(go,{loaderLoading:f,onClick:p})]})},t7=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,n7=e=>{const[t,n]=x.useState([]),[r,i]=x.useState(1),[o,s]=x.useState(!1),[a,u]=x.useState(!0),[c,d]=x.useState(!0),f=y=>{if(y.length==0){s(!1);return}else if(y.length%sr!=0){s(!1);return}s(!0)};async function h(){d(!0),await le.get(`${ue}${ce}/user/myclasses/completed`,{params:{sort:"-classStartsAt",limit:sr,page:r},headers:me(e.userToken??"")}).then(({data:y})=>{console.log(y);const p=y.completedClasses;f(p),n(v=>[...v,...p]),u(!1),d(!1),i(v=>v+1)}).catch(y=>{console.log(y),u(!1),d(!1)})}return x.useEffect(()=>{e.userToken&&h()},[e.userToken]),S(t7,{children:[a?l(Ht,{}):t.length!=0?l(tp,{teachCards:t,elemType:"completed"}):l(Ow,{elemLink:"upcoming",heading:"No Completed Classes",subHeading:"You don't have any completed classes. Check your enrolled classes"}),t&&o&&l(go,{loaderLoading:c,onClick:h})]})},r7=w.div`
  /* display: grid; */
  /* grid-template-columns: auto auto auto; */
  /* gap: 20px; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,i7=w.div`
  margin: 2rem 0 0;
  /* border: 2px solid green; */
`,o7=()=>{const[e,t]=x.useState(""),[n,r]=x.useState("all classes"),[i,o]=x.useState(l(qg,{userToken:e})),s=jn(),{fetchLocalUserToken:a}=rt();return x.useEffect(()=>{var f;const d=(f=s.state)==null?void 0:f.elemLink;d&&r(d),a().then(h=>{t(h)})},[s]),x.useEffect(()=>{e&&(n=="all classes"?o(l(qg,{userToken:e})):n=="upcoming"?o(l(e7,{userToken:e})):n=="completed"&&o(l(n7,{userToken:e})))},[n,e]),S(fe,{children:[l(ut,{}),S(r7,{children:[l(wh,{}),l(_w,{activeLink:n,labelArr:["all classes","upcoming","completed"],navigationHandler:d=>{r(d)}}),l(i7,{children:i})]}),l(it,{})]})},s7=w.div`
  /* border: 1px solid red; */
  position: relative;
  z-index: 0;
`,a7=w.div`
  z-index: 0;
  img {
    width: 100%;
    height: 45vh;
    border-radius: 8px;
    object-fit: cover;
  }
`,l7=w.div`
  /* border: 1px solid white; */

  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  z-index: 1;
  color: white;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  width: 50%;
`,Wu=({img:e,title:t})=>S(s7,{children:[l(a7,{children:l("img",{src:e,alt:"class-banner-img"})}),l(l7,{children:l("h3",{children:t})})]}),u7=w.div`
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #4a5578;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 22px;
    opacity: 0.8;
    margin-bottom: 0.8rem;
  }

  ul {
    padding-left: 1rem;
    li {
      font-weight: 500;
      color: #4a5578;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
  }
`,np=e=>S(u7,{children:[l("p",{children:e.desciption}),l("h3",{children:"After this Class, students would be able to :-"}),l("ul",{children:e.expectations.map((t,n)=>l("li",{children:t},n))})]}),c7=w.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  background: #d1fadf;
  border-radius: 30px;

  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #054f31;
  margin-bottom: 1.5rem;

  div {
    width: 4px;
    height: 4px;
    background-color: #054f31;
    border-radius: 50%;
    /* border: 1px solid red; */
  }
`,rp=e=>{let t,n;return e.classStartsAt&&e.classEndsAt&&(t=Sn(e.classStartsAt),n=Sn(e.classEndsAt)),l(c7,{children:e.classStartsAt&&e.classEndsAt?S(fe,{children:[l("span",{children:Br(e.date)}),l("div",{}),l("span",{children:t+" - "+n})]}):S("span",{children:["Due By:- ",Br(e.date)]})})},d7=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  gap: 8px;
  background: #332ad5;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  background: #054f31;
  border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,Pw=({callLink:e})=>l(fe,{children:e?l(d7,{children:S(Zl,{to:e,target:"_blank",children:[l("span",{children:"Join Class"}),l(Qe,{strokeColor:"white"})]})}):null}),Mw=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: fit-content;
  background: #054f31;
  border-radius: 30px;

  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`,f7=w.div`
  width: 50vw;
  padding: 20px 32px;

  h4 {
    font-size: 16px;
    width: fit-content;
    margin-bottom: 3rem;
    border-bottom: 1px solid black;
  }

  textarea {
    margin-bottom: 2rem;
  }
`,h7=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`,p7=e=>{const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}const[o,s]=x.useState(e.callLink);function a(c){s(c)}const u=async()=>{await le.patch(`${ue}${ce}/teach/${e.teachCardId}/callLink`,{callLink:o},{headers:me(e.userToken??"")}).then(()=>{i(),window.location.reload()})};return S(fe,{children:[S(Mw,{onClick:r,children:[e.callLink?l("span",{children:"Show Link"}):l("span",{children:"Add Class Link"}),l(Qe,{strokeColor:"white"})]}),l(Un,{isOpen:t,onRequestClose:i,style:Vr,children:S(f7,{children:[l("header",{children:l("h4",{children:e.callLink?"Class Link":"Add Link"})}),l(Wt,{label:"Class Link",name:"callLink",value:o,updateSingleField:a}),l(h7,{children:e.callLink?S(fe,{children:[l(Fr,{children:S("button",{type:"submit",onClick:u,children:[l("span",{children:"Edit Class Link"}),l(Qe,{strokeColor:"#FFFFFF"})]})}),l(Fr,{children:l(Zl,{to:e.callLink,target:"_blank",children:S("button",{type:"submit",children:[l("span",{children:"Join"}),l(Qe,{strokeColor:"#FFFFFF"})]})})})]}):l(Fr,{children:S("button",{type:"submit",onClick:u,children:[l("span",{children:"Add Class Link"}),l(Qe,{strokeColor:"#FFFFFF"})]})})})]})})]})},m7=w.div`
  display: flex;
`,g7=w.div`
  svg {
    /* border: 1px solid red; */
    padding-right: 1rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    fill: ${e=>e.colored?"#f7f036":"rgba(125, 137, 176, 0.2);"};
  }
`,y7=({rating:e,onRating:t})=>{const[n,r]=x.useState(0),i=s=>n>=s?!0:!n&&e>=s,o=x.useMemo(()=>Array(5).fill(0).map((s,a)=>a+1).map(s=>l(g7,{onClick:()=>t(s),colored:i(s),onMouseEnter:()=>r(s),onMouseLeave:()=>r(0),children:l(y5,{})},s)),[e,n]);return l(m7,{children:o})},v7=vu`
    0%{
        transform: rotate(45deg);
    /* } 50% { */
        /* transform: rotate(0); */
    } 100% {
        transform: rotate(0deg);
    }
`,w7=w.div`
  width: 50vw;
  padding: 2rem 0;
  svg {
    width: 80px;
    height: 80px;
    fill: #094067;
    margin-bottom: 1rem;
    animation: ${v7} 0.25s linear 1;
  }

  h2 {
    font-size: 2.5rem;
    font-family: "Nunito";
    font-weight: 600;
  }

  h4 {
    color: #4a5578;
    font-size: 1.2rem;
    padding-left: 2px;
    font-weight: 500;
  }
`,x7=()=>S(w7,{children:[l(v5,{}),l("h2",{children:"Thanks for reviewing!!"}),l("h4",{children:"Your feedback has been submitted"})]}),S7=w.div`
  /* border: 1px solid red; */
  width: 50vw;
  textarea {
    margin-bottom: 2rem;
    width: 90%;
  }
`,b7=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,C7=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.5rem;

  span {
    /* border: 1px solid red; */
    color: #000;
    font-family: "Nunito";
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
  }

  h4 {
    /* border: 1px solid red; */
    margin-bottom: 1rem;
    color: #697586;
    padding-left: 2px;
    font-size: 1.125rem;
    font-weight: 500;
    font-family: "Nunito";
    letter-spacing: 0.0225rem;
  }
`,k7=e=>{const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}const[o,s]=x.useState(1),[a,u]=x.useState(""),[c,d]=x.useState(!1),f=p=>{u(p)};function h(){setInterval(()=>{i()},2500)}return S(fe,{children:[S(Mw,{onClick:r,children:[l("span",{children:"Give Review"}),l(Qe,{strokeColor:"white"})]}),l(Un,{isOpen:t,onRequestClose:i,style:Vr,children:c?l(x7,{}):S(S7,{children:[l(b7,{children:l("h4",{children:"Class Feedback"})}),S(C7,{children:[l("span",{children:"Rate your experience"}),l("h4",{children:"Are you satisfied with the teacher"}),l(y7,{onRating:p=>s(p),rating:o})]}),l(Wt,{label:"Brief Review",name:"review",value:a,areaHeight:"10rem",updateSingleField:f}),l(Fr,{children:l("button",{type:"submit",onClick:async()=>{await le.post(`${ue}${ce}/teach/${e.teachCardId}/reviews`,{review:a,rating:o,teacherID:e.teacherID},{headers:me(e.userToken)}).then(({data:p})=>{console.log(p),d(!0),h()})},children:l("span",{children:"Submit Review"})})})]})})]})},_7=w.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,T7=w.div`
  /* border: 1px solid red; */
`,E7=w.div``,O7=w.div`
  margin-bottom: 1.2rem;
  img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }

  span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
`,Qg=e=>{const t=()=>{const r=new Date,i=e.classEndsAt,o=new Date(i);return r>o},n=()=>{const r=e.userId;return e.reviews.filter(s=>s.user._id==r).length==1};return e&&S(fe,{children:[l(Wu,{img:e.cardBanner,title:e.topic}),S(_7,{children:[S(T7,{children:[l(rp,{date:e.date,classStartsAt:e.classStartsAt,classEndsAt:e.classEndsAt}),t()?e.userId==e.createdBy._id||n()?null:l(k7,{teachCardId:e._id,userToken:e.userToken,teacherID:e.createdBy._id}):e.userId==e.createdBy._id?l(p7,{callLink:e.callLink,teachCardId:e._id,userId:e.userId,userToken:e.userToken}):l(Pw,{callLink:e.callLink})]}),S(E7,{children:[l(O7,{children:l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"white",textColor:"black"})}),l(np,{desciption:e.description,expectations:e.expectations})]})]})]})},P7=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  h3 {
    font-weight: 600;
    font-size: 26px;
    width: 100%;
    padding-bottom: 0.3rem;
    color: #3622a5;
    border-bottom: 1px solid #3622a5;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }
`,Kg=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  /* margin-bottom: 1rem; */
  cursor: pointer;

  img {
    /* border: 1px solid red; */
    width: 51px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
  }

  h5 {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
  }
`,Zg=e=>{var t,n,r;return console.log(Array.isArray(e.listArr)),S(P7,{children:[l("h3",{children:e.heading}),l("ul",{children:Array.isArray(e.listArr)?e.listArr.map((i,o)=>S(Kg,{children:[l("img",{src:i.photo,alt:"user-img"}),S("div",{children:[l("h4",{children:i.name}),S("h5",{children:["@",i.userName]})]})]},o)):S(Kg,{children:[l("img",{src:(t=e.teacherObj)==null?void 0:t.photo,alt:""}),S("div",{children:[l("h4",{children:(n=e.teacherObj)==null?void 0:n.name}),S("h5",{children:["@",(r=e.teacherObj)==null?void 0:r.userName]})]})]})})]})},M7=w.div`
  width: 60%;
  margin: 3rem auto 0;
`,D7=w.div`
  /* border: 5px solid yellow; */
  margin-bottom: 3rem;
`,L7=w.div``,N7=e=>S("div",{children:[l(Wu,{img:e.cardBanner,title:e.topic}),S(M7,{children:[l(D7,{children:l(Zg,{heading:"Teachers",teacherObj:e.createdBy})}),l(L7,{children:e.studentsEnrolled.length!=0?l(Zg,{heading:"Students",listArr:e.studentsEnrolled}):null})]})]}),R7=w.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }

  textarea {
    margin-bottom: 2rem;
  }
`,I7=w.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,A7=e=>{console.log(e.classElemType);const[t,n]=x.useState(),{fetchLocalUserToken:r}=rt();x.useEffect(()=>{r().then(u=>{n(u)})},[]);const[i,o]=x.useState("");function s(u){o(u)}return Re(),S(R7,{children:[l(I7,{children:l("h4",{children:"Post Announcement"})}),l(Wt,{label:"Announcement",name:"content",value:i,updateSingleField:s,areaHeight:"8rem"}),l(Fr,{children:S("button",{type:"submit",onClick:async()=>{console.log(i),await le.post(`${ue}${ce}/teach/${e.teachCardId}/announcements`,{content:i},{headers:me(t??"")}).then(({data:u})=>{console.log(u),window.dispatchEvent(new Event("announcement")),e.closeModal()})},children:[l("span",{children:"Make Announcement"}),l(Qe,{strokeColor:"#FFFFFF"})]})})]})},$7=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: fit-content;
  background: #000000;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 56px;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  /* margin-bottom:; */
`,F7=e=>{const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}return S(fe,{children:[S($7,{onClick:r,children:[l("span",{children:"Make an Announcement"}),l(dh,{color:"white"})]}),l(Un,{isOpen:t,onRequestClose:i,style:Vr,children:l(A7,{teachCardId:e.teachCardId,closeModal:i})})]})},j7=w.div`
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px -4px 6px -2px rgba(16, 24, 40, 0.03);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  gap: 20px;

  header {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
  }
`,z7=e=>S(j7,{children:[S("header",{children:[l(kn,{name:e.sender.name,photo:e.sender.photo,textSize:"20px",imgSize:"32px"}),l("h4",{children:Br(e.createdAt)+", "+Sn(e.createdAt)})]}),l("p",{children:e.content})]}),U7=w.div`
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,B7=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,H7=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`,W7=w.h2`
  /* border: 1px solid red; */
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
`,Y7=e=>{const[t,n]=x.useState([]),[r,i]=x.useState(1),[o,s]=x.useState(2),[a,u]=x.useState(!1),[c,d]=x.useState(!0),[f,h]=x.useState(!0),y=v=>{if(v.length==0){u(!1);return}else if(v.length%o!=0){u(!1);return}u(!0)};async function p(){h(!0),await le.get(`${ue}${ce}/teach/${e.teachCardId}/announcements`,{params:{limit:sr,page:r},headers:me(e.userToken??"")}).then(({data:v})=>{console.log(v.announcements),y(v.announcements),n(C=>[...C,...v.announcements]),d(!1),h(!1),i(C=>C+1)}).catch(v=>{console.log(v),d(!1),h(!1),h(!1)})}return x.useEffect(()=>{e.userToken&&p(),window.addEventListener("announcement",()=>{console.log("Announcement added!"),p()})},[e.userToken]),S(fe,{children:[l(Wu,{img:e.cardBanner,title:e.topic}),S(U7,{children:[S(B7,{children:[e.isTeacher&&l(F7,{teachCardId:e.teachCardId}),l(Pw,{callLink:e.callLink})]}),c?l(Ht,{}):(t==null?void 0:t.length)!=0?l(H7,{children:t&&t.map((v,C)=>x.createElement(z7,{...v,key:C}))}):l(W7,{children:"No announcements yet!!"})]}),t&&a&&l(go,{loaderLoading:f,onClick:p})]})},V7=w.div`
  /* margin: 2rem 0 3rem; */
  padding: 0rem 15vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* gap: 2.5rem; */

  font-family: "Nunito";
  font-style: normal;
`,Jg=w.div`
  margin: 3rem 0 0;
`,G7=()=>{const[e,t]=x.useState(),[n,r]=x.useState(""),[i,o]=x.useState(""),[s,a]=x.useState(),[u,c]=x.useState("overview"),[d,f]=x.useState("all classes"),[h,y]=x.useState("/classes"),[p,v]=x.useState(""),[C,m]=x.useState(!0),g=jn(),{fetchLocalUserData:b}=rt();x.useEffect(()=>{var B,J,T;console.log("CHECKING"),console.log(g.state);const z=g.state.classroomId;t(z);const se=(B=g.state)==null?void 0:B.backPageLink;se&&y(se);const G=(J=g.state)==null?void 0:J.navLink;G&&c(G);const Z=(T=g.state)==null?void 0:T.elemType;Z&&f(Z);const $=g.state.learnCardId;$&&v($),b().then(O=>{r(O.token),o(O._id)})},[g.state]);async function k(){await le.get(`${ue}${ce}/teach/${e}`,{headers:me(n??"")}).then(({data:z})=>{const se=z.teachCard;console.log(z),a(se),m(!1)}).catch(z=>{console.log(z),m(!1)})}x.useEffect(()=>{e&&n&&k()},[e,n]);const[_,M]=x.useState();x.useEffect(()=>{s&&M(l(Qg,{...s,userId:i,userToken:n}))},[s]);const L=(z,se)=>z==se;return x.useEffect(()=>{s&&(u=="overview"?M(l(Qg,{...s,userId:i,userToken:n})):u=="classroom"?M(l(Y7,{callLink:s.callLink,cardBanner:s.cardBanner,topic:s.topic,isTeacher:L(i,s.createdBy._id),teachCardId:s._id,userToken:n,classElemType:d})):u=="people"&&M(l(N7,{cardBanner:s.cardBanner,createdBy:s.createdBy,studentsEnrolled:s.studentsEnrolled,topic:s.topic})))},[u]),S(fe,{children:[l(ut,{}),S(V7,{children:[l(vi,{link:h,classElem:d,learnCardId:p}),l(_w,{activeLink:u,labelArr:["overview","classroom","people"],navigationHandler:z=>{c(z)}}),C?l(Jg,{children:l(Ht,{})}):l(Jg,{children:_})]}),l(it,{})]})},q7=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;
  /* border: 1px solid red; */

  form {
    width: 90%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0px; */
    padding-right: 10px;
    gap: 20px;
  }
`,Q7=e=>l(q7,{children:S("form",{action:"",children:[l(De,{type:"email",label:"Email",value:e.email,name:"email",updateFields:e.updateFields}),l(De,{type:"password",label:"Password",value:e.password,name:"password",updateFields:e.updateFields})]})}),K7=w.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
`,Z7=w.div`
  /* border: 1px solid red; */
  width: 50vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
`,J7=w.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 50vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,X7=w.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 70%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  span.login {
    color: #666666;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;

    span.link {
      cursor: pointer;
      color: #332ad5;
      color: #094067;
      font-weight: 600;
    }
  }
`,eP=w.div`
  /* border: 1px solid red; */
  width: 70%;

  button {
    background: #332ad5;
    background: #094067;
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 18px;
    line-height: 27px;
    cursor: pointer;
    width: 100%;
  }
`,tP=()=>{const e=Re(),[t,n]=x.useState({email:"",password:""});function r(u){n(c=>({...c,...u}))}const i=u=>{Je(),e(u)},o={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},s=()=>{const{email:u,password:c}=t;if(u===""||c==="")return I.error("Fill in all the details",o),!1;if(hh(u)){if(c.length<6)return I.error("Password is short",o),!1}else return I.error("Email is not valid!!",o),!1;return!0},a=async u=>{u.preventDefault(),s()&&await le.post(`${ue}${ce}/auth/login`,{email:t.email,password:t.password}).then(({data:c})=>{const d=c.data.user;d.token=c.token,localStorage.setItem(An,JSON.stringify(d)),i("/")}).catch(c=>{const d=c.response.data.message;console.log(d),I.error(d,o)})};return S(K7,{children:[l(Z7,{children:S(X7,{children:[l(Q7,{...t,updateFields:r}),l(eP,{children:l("button",{type:"submit",onClick:a,children:"Login"})}),S("span",{className:"login",children:["Don't have an account?"," ",l("span",{className:"link",onClick:()=>i("/signup"),children:"Sign Up!!"})," "]})]})}),l(J7,{children:l(Dv,{heading:"Welcome Back!!"})}),l($n,{theme:"dark"})]})},Dw=["6th Class","7th Class","8th Class","9th Class","10th Class","11th Class","12th Class","Diploma","1st Year","2nd Year","3rd Year","4th Year","5th Year"],nP=w.div`
  border: 1px solid red;

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1.5rem;
    /* margin-top: 2rem; */
  }

  form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-bottom: 3.5rem;

    input#date {
      border: 1px solid #d5d9eb;
      padding: 15px 10px;
      box-sizing: content-box;
      font-family: "Nunito";
      font-size: 16px;
      font-weight: 400;
      outline: none;
      color: #564c4d;
      border-radius: 8px;
    }
  }
`,rP=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    outline: none;
    border: none;
    background: #332ad5;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,iP=w.div`
  /* border: 1px solid red; */
  width: 100%;
`,oP=w.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    border: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* line-height: px; */
    color: #ffffff;
  }
`,sP=w.ul`
  /* border: 1px solid red; */
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`,aP=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    /* border: 1px solid red; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`,Xg={subject:"",topic:"",programme:"",standard:"",preferredLanguage:"",description:"",expectation:"",expectations:[],tag:"",tags:[],dueDate:""},lP=()=>{const[e,t]=x.useState(Xg),[n,r]=x.useState(""),{fetchLocalUserToken:i}=rt();x.useEffect(()=>{i().then(h=>{r(h)})},[]);function o(h){t(y=>({...y,...h}))}const s=h=>{o({dueDate:h})},a=()=>{const h=e.expectation,y=e.expectations;y.push(h),o({expectations:y,expectation:""})},u=h=>{const p=e.expectations.filter((v,C)=>v!=h);o({expectations:p})},c={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},d=()=>{const{subject:h,topic:y,programme:p,standard:v,preferredLanguage:C,dueDate:m,description:g,expectations:b,tags:k}=e,_=new Date,M=new Date(m);return h===""||y===""||p===""||v===""||C===""||m===""||g===""||b.length==0?(I.error("Fill in all the details",c),!1):y.length<35?(I.error("Topic must be greater than 35 characters",c),!1):M<_?(I.error("Pick another due date",c),!1):!0},f=async h=>{h.preventDefault(),console.log(e),d()&&await le.post(`${ue}${ce}/learn`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,preferredLanguage:e.preferredLanguage,description:e.description,expectations:e.expectations,tags:e.tags,dueDate:e.dueDate},{headers:me(n??"")}).then(({data:y})=>{console.log(y),t(Xg)}).catch(y=>{const p=y.response.data.error.errors;Object.keys(p).forEach(function(v,C){I.error(p[v].message,c)})})};return S(fe,{children:[l(ut,{}),S(nP,{children:[l(vi,{link:"/"}),l("h2",{children:"Let's get started with your Learn Card"}),S("form",{children:[l(pe,{elem:l(De,{type:"text",label:"Subject",value:e.subject,name:"subject",updateFields:o,hasDropdown:!0,dropdownData:io}),inputDesc:"Pick a Subject"}),l(pe,{elem:l(De,{type:"text",label:"Topic",value:e.topic,name:"topic",updateFields:o,hasDropdown:!1}),inputDesc:"Specify the topic for the card"}),l(pe,{elem:l(De,{type:"text",label:"Programme",value:e.programme,name:"programme",updateFields:o,hasDropdown:!1}),inputDesc:"Specify Education Level for the lesson"}),l(pe,{elem:l(De,{type:"text",label:"Standard",value:e.standard,name:"standard",updateFields:o,hasDropdown:!0,dropdownData:Dw}),inputDesc:"Specify the Standard for the lesson"}),l(pe,{elem:l(De,{type:"text",label:"Preferred Language",value:e.preferredLanguage,name:"preferredLanguage",updateFields:o,hasDropdown:!0,dropdownData:Du}),inputDesc:"Language that you prefer"}),l(pe,{elem:l("input",{type:"date",id:"date",value:e.dueDate,onChange:h=>s(h.target.value)}),inputDesc:"Specify due date for the lesson"}),l(pe,{elem:l(Wt,{label:"Description",name:"description",updateFields:o,value:e.description}),inputDesc:"Describe briefly what you expect from the teacher"}),l(pe,{elem:S(iP,{children:[l(Wt,{label:"Expectations",name:"expectation",updateFields:o,value:e.expectation}),l(oP,{children:l("button",{type:"button",onClick:a,children:"Add Expectation"})}),l(sP,{children:e.expectations.map((h,y)=>S(aP,{children:[l("li",{children:h},y),l("span",{onClick:()=>u(h),children:"Remove"})]}))})]}),inputDesc:"Your expectations after completing the class"}),l(pe,{elem:S(Zo,{children:[l(Ar,{label:"Tags",elemName:"tag",value:e.tag,name:"tags",arr:e.tags,updateFields:o}),e.tags.length!=0?l($r,{listArr:e.tags,updateFields:o,name:"tags"}):null]}),inputDesc:"You can add tags in your learn card"})]}),l(rP,{children:l("button",{type:"submit",onClick:f,children:"Create Learn Card"})})]}),l(it,{}),l($n,{theme:"dark"})]})},uP=w.div`
  /* border: 1px solid red; */
  width: 100%;
`,cP=w.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;
    border: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    /* line-height: px; */
    color: #ffffff;
  }
`,dP=w.ul`
  /* border: 1px solid red; */
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`,fP=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    /* border: 1px solid red; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`,hP=e=>{const t=()=>{const r=e.expectation,i=e.expectations;i.push(r),e.updateFields({expectations:i,expectation:""})},n=r=>{const o=e.expectations.filter((s,a)=>s!=r);e.updateFields({expectations:o})};return S(uP,{children:[l(Wt,{label:"Expectations",name:"expectation",updateFields:e.updateFields,value:e.expectation}),l(cP,{children:l("button",{type:"button",onClick:t,children:"Add Expectation"})}),l(dP,{children:e.expectations.map((r,i)=>S(fP,{children:[l("li",{children:r},i),l("span",{onClick:()=>n(r),children:"Remove"})]}))})]})},pP=w.div`
  border: 1px solid red;

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1.5rem;
  }

  form {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-bottom: 3.5rem;

    input#date {
      border: 1px solid #d5d9eb;
      padding: 15px 10px;
      box-sizing: content-box;
      font-family: "Nunito";
      font-size: 16px;
      font-weight: 400;
      outline: none;
      color: #564c4d;
      border-radius: 8px;
    }
  }
`,mP=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    outline: none;
    border: none;
    background: #332ad5;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,Fc={subject:"",topic:"",programme:"",standard:"",preferredLanguage:"",photo:"",date:"",description:"",expectation:"",expectations:[],tag:"",tags:[],price:0,startingTime:"",endingTime:""},gP=()=>{const[e,t]=x.useState(Fc),[n,r]=x.useState(),[i,o]=x.useState(!1),s=jn();x.useEffect(()=>{console.log(s.state);const C=s.state;s.state&&(t(m=>({...m,subject:C.subject,topic:C.topic,programme:C.programme,standard:C.standard,description:C.description,expectations:C.expectations,tags:C.tags})),r(C.learnCardId),o(!0))},[s]);const[a,u]=x.useState(""),{fetchLocalUserToken:c}=rt();x.useEffect(()=>{c().then(C=>{u(C)})},[]);function d(C){t(m=>({...m,...C}))}const f=C=>{d({[C.target.name]:C.target.value})},h={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},y=()=>{const{subject:C,topic:m,programme:g,standard:b,preferredLanguage:k,date:_,startingTime:M,endingTime:L,description:D,expectations:q,photo:z,price:se,tags:G}=e,Z=new Date,$=new Date(_),B=new Date(M),J=new Date(L);return C===""||m===""||g===""||b===""||k===""||_===""||M===""||L===""||D===""||z===""||q.length==0?(I.error("Fill in all the details",h),!1):m.length<30?(I.error("Topic must be greater than 30 characters",h),!1):$<Z?(I.error("Pick another date for class",h),!1):J<B?(I.error("Class End time cannot be less than Start time",h),!1):!0},p=async C=>{C.preventDefault(),console.log(e),y()&&await le.post(`${ue}${ce}/teach`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,preferredLanguage:e.preferredLanguage,description:e.description,expectations:e.expectations,tags:e.tags,date:e.date,cardBanner:e.photo,price:e.price,classStartsAt:e.startingTime,classEndsAt:e.endingTime},{headers:me(a??"")}).then(({data:m})=>{console.log(m),t(Fc),window.location.reload()}).catch(m=>{const g=m.response.data.error.errors;Object.keys(g).forEach(function(b,k){I.error(g[b].message,h)})})},v=async C=>{y()&&await le.post(`${ue}${ce}/learn/${n}/teach`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,preferredLanguage:e.preferredLanguage,description:e.description,expectations:e.expectations,tags:e.tags,date:e.date,cardBanner:e.photo,price:e.price,classStartsAt:e.startingTime,classEndsAt:e.endingTime},{headers:me(a??"")}).then(({data:m})=>{console.log(m),t(Fc)}).catch(m=>{const g=m.response.data.error.errors;Object.keys(g).forEach(function(b,k){I.error(g[b].message,h)})})};return S(fe,{children:[l(ut,{}),S(pP,{children:[l(vi,{link:n?`/learncard-overview/${n}`:"/",learnCardId:n||void 0}),l("h2",{children:"Let's get started with your Teach Card"}),S("form",{children:[l(pe,{elem:l(De,{type:"text",label:"Subject",value:e.subject,name:"subject",updateFields:d,hasDropdown:!0,dropdownData:io}),inputDesc:"Pick a Subject"}),l(pe,{elem:l(Wt,{label:"Topic",value:e.topic,name:"topic",updateFields:d}),inputDesc:"Specify the topic for the card"}),l(pe,{elem:l(De,{type:"text",label:"Education Level",value:e.programme,name:"programme",updateFields:d}),inputDesc:"Specify Education Level for the lesson"}),l(pe,{elem:l(De,{type:"text",label:"Standard",value:e.standard,name:"standard",updateFields:d,hasDropdown:!0,dropdownData:Dw}),inputDesc:"Specify the Standard for the lesson"}),l(pe,{elem:l(De,{type:"text",label:"Preferred Language",value:e.preferredLanguage,name:"preferredLanguage",updateFields:d,hasDropdown:!0,dropdownData:Du}),inputDesc:"Language that you prefer"}),l(pe,{elem:l(De,{type:"number",label:"Price",value:e.price,name:"price",updateFields:d}),inputDesc:"Language that you prefer"}),l(pe,{elem:l("input",{type:"date",name:"date",id:"date",value:e.date,onChange:C=>f(C)}),inputDesc:"Specify due date for the lesson"}),l(pe,{elem:l("input",{type:"datetime-local",name:"startingTime",id:"date",value:e.startingTime,onChange:C=>f(C)}),inputDesc:"Specify starting time for the lesson"}),l(pe,{elem:l("input",{type:"datetime-local",name:"endingTime",id:"date",value:e.endingTime,onChange:C=>f(C)}),inputDesc:"Specify end timing for the lesson"}),l(pe,{elem:l(Rh,{updateFields:d}),inputDesc:"Upload a cover image for your class"}),l(pe,{elem:l(Wt,{label:"Description",name:"description",updateFields:d,value:e.description}),inputDesc:"Describe briefly what you expect from the teacher"}),l(pe,{elem:l(hP,{expectation:e.expectation,expectations:e.expectations,updateFields:d}),inputDesc:"Your expectations after completing the class"}),l(pe,{elem:S(Zo,{children:[l(Ar,{label:"Add Tag",elemName:"tag",value:e.tag,name:"tags",arr:e.tags,updateFields:d}),e.tags.length!=0?l($r,{listArr:e.tags,name:"tags",updateFields:d}):null]}),inputDesc:"You can add tags in your learn card"})]}),l(mP,{children:l("button",{type:"submit",onClick:i?v:p,children:"Create Teach Card"})})]}),l(it,{}),l($n,{theme:"dark"})]})},yP=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 18px;
  background: #674ff1;
  background: #094067;
  border-radius: 16px;
  /* cursor: pointer; */
  font-family: "Nunito";
  transition: all 0.15s linear;
  font-family: "Nunito";
  font-style: normal;

  &:hover {
    transform: translateY(-10px);
  }
`,vP=w.div`
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
    color: #ef4565;
  }
`,wP=w.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  /* max-height: 65px; */
  /*  */
  /* border: 1px solid white; */
  white-space: wrap;
`,xP=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`,SP=w.div`
  /* border: 1px solid white; */
  width: 100%;
  margin-top: 0.6rem;

  display: flex;
  /* align-items: center; */
  column-gap: 12px;
  row-gap: 16px;
  flex-wrap: wrap;

  div {
    /* border: 1px solid white; */
    padding: 6px 10px;
    border-radius: 4px;
    background-color: white;
    background-color: #3da9fc;
    color: white;
    font-weight: 600;
  }
`,bP=w.div`
  /* border: 1px solid white; */
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`,CP=w.div`
  /* border: 1px solid red; */
  margin-top: 1rem;
  width: 100%;
  display: flex;
  /* justify-content: flex-end; */
  button {
    /* margin-right: rem; */
    outline: none;
    cursor: pointer;
    border: none;
    padding: 14px 24px;
    border-radius: 4px;
    background-color: #ef4565;
    color: white;

    display: flex;
    align-items: center;
    gap: 6px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    /* line-height: 22px; */
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`,kP=e=>{const t=Re(),n=()=>{Je(),t(`/learncard-overview/${e._id}`,{state:{learnCardId:e._id,backLink:"/requests"}})};return S(yP,{children:[l(vP,{children:l("h4",{children:e.subject})}),l(wP,{children:l("span",{children:e.topic.length>52?e.topic.slice(0,50)+"...":e.topic})}),l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"#FFFFFF",textColor:"#FFFFFF"}),S(xP,{children:[S("div",{children:[l(As,{}),S("span",{children:[e.interestedStudents.length," Interested"]})]}),l("div",{children:l(bP,{children:S("span",{children:["Due - ",Br(e.dueDate)]})})})]}),l(SP,{children:e.tags.map((r,i)=>l("div",{children:l("span",{children:r})},i))}),l(CP,{children:S("button",{type:"button",onClick:n,children:[l("span",{children:"Expand"}),l(g5,{})]})})]})},_P=w.div`
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* margin-top: 4rem; */
`,TP=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`,EP=()=>{const[e,t]=x.useState([]),[n,r]=x.useState(1),[i,o]=x.useState(!1),[s,a]=x.useState(),[u,c]=x.useState(!0),[d,f]=x.useState(!0),{fetchLocalUserToken:h}=rt();x.useEffect(()=>{h().then(v=>{a(v)})},[]);const y=v=>{if(v.length==0){o(!1);return}else if(v.length%sr!=0){o(!1);return}o(!0)},p=async()=>{f(!0),await le.get(`${ue}${ce}/learn`,{params:{limit:sr,page:n},headers:me(s??"")}).then(({data:v})=>{console.log(v);const C=v.data.data;y(C),t(m=>[...m,...C]),c(!1),f(!1),r(m=>m+1)}).catch(v=>{console.log(v),c(!1),f(!1)})};return x.useEffect(()=>{s&&(p(),console.log("CHECKIN"))},[s]),S(fe,{children:[l(ut,{}),S(_P,{children:[l(wh,{}),u?l(Ht,{}):e.length!=0?l(TP,{children:e.map((v,C)=>l(kP,{...v},C))}):null,e&&i&&l(go,{loaderLoading:d,onClick:p})]}),l(it,{})]})},OP=w.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 2rem;

  div.went-wrong {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    padding: 1rem 0;
    line-height: 25px;
  }
`,PP=w.div`
  /* border: 1px solid red; */
  margin: 0 auto;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;
  }
`,MP=w.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
  column-gap: 4rem;
`,DP=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`,LP=w.div`
  /* border: 1px solid red; */
  span.text {
    color: #ef4565;
  }
`,NP=w.div`
  /* border: 1px solid red; */
  display: flex;
  /* padding-left: 1.5rem; */

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    width: fit-content;
    background: #332ad5;
    background: ${e=>e.isDisabled?"rgba(51, 42, 213, 0.6)":"#332ad5"};
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 0.5rem;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,RP=w.div`
  width: fit-content;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border-radius: 12px;
  height: fit-content;
  border: 1px solid #d5d9eb;
`,IP=w.div`
  /* border: 1px solid red; */
`,AP=w.div`
  /* border: 1px solid red; */
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }

  span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
`,$P=w.div`
  display: flex;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-right: 4rem;
`,FP=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    cursor: pointer;

    /* background: rgba(51, 42, 213, 0.6); */
    background-color: ${e=>e.isInterested?"rgba(51, 42, 213, 0.6)":"rgba(51, 42, 213, 1)"};
    /* background-color: white; */
    border-radius: 8px;
    outline: none;
    border: none;

    /* border: 1px solid #332ad5; */
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    color: #ffffff;
  }
`,jP=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div {
    border: 1px solid grey;
    padding: 4px;
    border-radius: 6px;
  }
`,zP=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`,UP=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  /* border: 1px solid red; */
`,BP=()=>{const[e,t]=x.useState(),[n,r]=x.useState(),[i,o]=x.useState(),[s,a]=x.useState("/requests"),[u,c]=x.useState(!0),[d,f]=x.useState(!0),[h,y]=x.useState(),p=jn();x.useEffect(()=>{const G=p.state.learnCardId;console.log(G);const Z=p.state.backLink;t(G),Z&&a(Z)},[]);async function v(){await le.get(`${ue}${ce}/learn/${e}`).then(({data:G})=>{const Z=G.data.data[0];console.log(Z),r(Z),c(!1),y(Z.interestedStudents.length)})}async function C(){await le.get(`${ue}${ce}/learn/${e}/teach`).then(({data:G})=>{o(G.data.data),f(!1)})}x.useEffect(()=>{e&&(console.log(e),v(),C())},[e]);const m=Re(),g=()=>{Je(),n&&m("/create-teach-request",{state:{learnCardId:n._id,subject:n.subject,topic:n.topic,programme:n.programme,standard:n.standard,description:n.description,expectations:n.expectations,tags:n.tags}})},{fetchLocalUserData:b}=rt(),[k,_]=x.useState(),[M,L]=x.useState(""),[D,q]=x.useState("");x.useEffect(()=>{b().then(G=>{_(G._id),L(G.token),q(G.role),console.log(G.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),b().then(G=>{_(G._id),L(G.token),q(G.role),console.log(G.role)})})},[]);const z=async()=>{await le.patch(`${ue}${ce}/learn/${n==null?void 0:n._id}/interested`,{},{headers:me(M)}).then(({data:G})=>{console.log(G.updatedLearnCard.interestedStudents);const Z=G.updatedLearnCard.interestedStudents;if(n){const $=n;$.interestedStudents=Z,r($),y(Z.length)}})},se=()=>k==(n==null?void 0:n.createdBy._id);return S(fe,{children:[l(ut,{}),S(OP,{children:[l(vi,{link:s}),u?l(Ht,{}):n&&k?S(fe,{children:[l(PP,{children:l("h2",{children:n.topic})}),S(MP,{children:[S(DP,{children:[S(RP,{children:[l(rp,{date:n.dueDate}),l(jP,{children:n.tags.map((G,Z)=>l("div",{children:l("span",{children:G})},Z))})]}),S(LP,{children:[se()?null:l(NP,{isDisabled:D=="learn",children:S("button",{type:"button",onClick:g,disabled:D=="learn",children:[l("span",{children:"Create teach Card"}),l(Qe,{strokeColor:"#FFFFFF"})]})}),D=="learn"&&l("span",{className:"text",children:"Cannot create Teach Card in Learn Mode"})]})]}),S(IP,{children:[S(AP,{children:[l(kn,{name:n.createdBy.name,photo:n.createdBy.photo,imgBorder:"white",textColor:"black"}),S($P,{children:[l(As,{}),S("h3",{children:[h," Interested"]})]})]}),l(np,{desciption:n.description,expectations:n.expectations}),k&&(k===n.createdBy._id?null:l(FP,{isInterested:n.interestedStudents.includes(k),children:l("button",{onClick:z,children:"Interested"})}))]})]}),(i==null?void 0:i.length)!=0?S(zP,{children:[l("h2",{children:"Teach Cards on this Learn Card"}),d?l(Ht,{}):l(UP,{children:i==null?void 0:i.map((G,Z)=>l(Tw,{teachCard:G,cssArr:Ew,fromLearnCard:!0,learnCardId:n._id},Z))})]}):null]}):l("div",{className:"went-wrong",children:"Something went wrong"})]}),l(it,{})]})},HP="/assets/TNL-logo-7ccd046a.png",WP="/assets/landingPageImg1-4f9cc89e.png",YP="/assets/landingPageImg2-abe1b21c.png",VP="/assets/landingPageImg3-14c652be.png",GP="/assets/landingPageImg4-71e3d66a.png",qP="/assets/landingPageImg5-75f74410.png",QP="/assets/landingPageImg6-56d046f8.png",KP=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 40px;
  gap: 18px;
  background: #d8eefe;
  /* min-height: 100vh; */

  div.carousel-wrapper {
    /* border: 1px solid red; */
    width: 90vw;
    position: relative;
  }

  .carousel-container {
    width: 90vw;
    position: unset;

    .react-multiple-carousel__arrow {
      position: absolute;
      width: 2rem;
      height: 2rem;
    }

    .react-multiple-carousel__arrow--left {
      left: calc(-4% + 2px);
      /* width: 2rem; */
      /* height: 2rem; */
      border-radius: 2.6875rem;
      background: #094067;
    }

    .react-multiple-carousel__arrow--right {
      right: calc(-4% + 1px);
      /* width: 2rem; */
      /* height: 2rem; */
      border-radius: 2.6875rem;
      background: #094067;
    }
  }
`,ZP=w.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  /* padding: 20px 4vw 0; */
  padding-top: 20px;
`,JP=w.div`
  /* border: 1px solid red; */
  width: 160px;
  height: 60px;
  margin-left: 4vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,XP=w.div`
  /* border: 1px solid red; */
  display: flex;
  margin-right: 4vw;
  align-items: center;
  justify-content: center;
  /* margin-right: 4rem; */
  gap: 20px;

  div.signup {
    background: #3da9fc;
    color: #fffffe;
  }
`,e0=w.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 26px;
  gap: 10px;
  background: #ffffff;
  border-radius: 2px;
  margin-right: 10px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #2b2c34;
  cursor: pointer;
`,eM=w.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 20px;
  width: 85%;
  background: #094067;
  border-radius: 4px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.15s ease;

  span.bold {
    color: #ef4565;
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover {
    background: #ef4565;
    /* background: #90b4ce; */
    color: #094067;
    font-weight: 500;
    span.bold {
      color: #ffffff;
    }
  }
`,tM=w.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  box-sizing: border-box;
`,nM=w.div`
  /* border: 1px solid red; */
  /* width: 60%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  justify-content: center;
  box-sizing: border-box;
  gap: 32px;
  padding: 0px;
  padding-left: 20px;
  /* padding-top: 60px; */
`,rM=w.div`
  /* border: 1px solid green; */
  width: 20.1875rem;
  height: 18.75rem;

  img {
    width: 20.1875rem;
    height: 18.75rem;
    object-fit: contain;
  }
`,iM=w.div`
  /* border: 1px solid green; */

  h2 {
    color: #000;
    font-size: 3.75rem;
    font-family: "Nunito";
    font-weight: 700;
    line-height: 124.9%;
  }
`,oM=w.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  padding: 0px;
  margin-right: 1rem;
  cursor: pointer;

  div {
    transition: all 0.15s linear;
    width: 12px;
    height: 12px;
    background: #094067;
    border-radius: 25px;
  }

  div.rect {
    transition: all 0.15s linear;
    width: 32px;
    height: 10px;
  }
`,sM=w.div`
  display: flex;
  /* width: 77.5rem; */
  width: 90%;
  margin: 4rem auto 8rem;
  padding: 3.75rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  border-radius: 10px;
  background: #d8eefe;
  h2 {
    color: #2b2c34;
    font-size: 3.625rem;
    font-family: Nunito;
    font-weight: 500;

    span {
      color: #3da9fc;
      font-weight: 700;
    }
  }

  p {
    width: 55%;
    color: #2b2c34;
    text-align: center;
    font-size: 1.35rem;
    font-family: "Nunito";
    line-height: 141.9%;
    font-weight: 500;
  }

  button {
    display: flex;
    padding: 1.375rem 2.125rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 2px;
    background: #3da9fc;
    color: #fffffe;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`,aM=w.div`
  /* border: 1px solid red; */
  width: 90%;
  margin: 2rem auto 0;
`,lM=[{heading:"Connect with students from all across the globe",description:"Leverage our interactive platform to foster cross cultural connections and collaborative learning with students from all around the world.",img:WP},{heading:"Share your problems. Share their solutions.",description:"Participate in open discussions to share your problems, while gaining insights and solutions from others in a collaborative environment.",img:YP},{heading:"Organize bite sizes classes. Schedule as you want.",description:"Flexible scheduling allows you to organize and attend bite-sized classes according to your preferences.",img:VP},{heading:"Free but reliable classes from students just like you.",description:"Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",img:qP},{heading:"Based on tried and tested Feynman Technique of learning!",description:"Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",img:QP},{heading:"Teach and Learn",description:"Unlock the power of teaching and learning to achieve mastery in any concept, fostering a dynamic exchange of knowledge and growth.",img:GP}],uM={desktop:{breakpoint:{max:3e3,min:1024},items:1,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},cM=({onMove:e,index:t,onClick:n,active:r})=>l(oM,{onClick:()=>n(),children:l("div",{className:r?"rect":void 0})}),dM=lM.map((e,t)=>S(tM,{children:[l(nM,{children:l(iM,{children:l("h2",{children:e.heading})})}),l(rM,{children:l("img",{src:e.img,alt:""})})]},t)),fM=()=>{const e=Re(),t=n=>{Je(),e(n)};return S(fe,{children:[S(KP,{children:[S(ZP,{children:[l(JP,{children:l("img",{src:HP,alt:"tnl-logo"})}),S(XP,{children:[l(e0,{onClick:()=>t("/signin"),children:"Login"}),l(e0,{className:"signup",onClick:()=>t("/signup"),children:"Signup"})]})]}),S(eM,{children:[S("span",{children:["Check out our ",l("span",{className:"bold",children:"blog"})," for free guidance on how to improve in your studies."]}),l(Qe,{strokeColor:"#FFFFFF"})]}),l("div",{className:"carousel-wrapper",children:l(wv,{containerClass:"carousel-container",responsive:uM,infinite:!0,showDots:!0,autoPlay:!0,autoPlaySpeed:3500,customTransition:"all 1s",transitionDuration:1e3,customDot:l(cM,{}),children:dM})})]}),l(aM,{children:l(xv,{})}),S(sM,{children:[l("h2",{children:"Richard Feynman"}),S("p",{children:["Richard Feynman was a Nobel-prize winning US theoretical physicist. Famed for his brilliant mind and mercurial personality, his main work was in quantum physics and particle physics, where he is particularly known for the Feynman diagram, a way of depicting particle processes graphically. But he was a prolific writer and thinker who also pioneered ideas in quantum computing and nanotechnology.",l("br",{}),l("br",{}),"We, in Teach and Learn, have made a platform where students from all across the globe and all sections of society can come together, collaborate and elevate each other’s level of knowledge by using the Feynman Technique of learning to teach each other and learn from each other."]}),l("button",{type:"button",onClick:()=>t("/signup"),children:"Create an account"})]}),l(it,{})]})},hM=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    color: #4a5578;
  }
`,t0=e=>S(hM,{children:[l("h3",{children:e.title}),e.value]}),pM=w.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 40vw;
  padding: 20px 32px;

  header {
    margin-bottom: 0.8rem;
    border-bottom: 1px solid black;
  }
`,mM=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin-bottom: 0.5rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
`,n0=w.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }

  svg {
    width: 20px;
    height: 18px;
  }
`,gM=w.div`
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
`,yM=w.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    background: #332ad5;
    border-radius: 8px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }
`,vM=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f8fa;
  border-radius: 8px;
  margin: auto;
  margin-bottom: 1rem;

  div.info-cont {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-right: 2px;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #4a5578;
    display: flex;
    gap: 5px;
  }
`,wM=e=>{console.log(e.userToken);const t=Re(),n=async()=>{await le.patch(`${ue}${ce}/teach/${e.teachCardId}/enroll`,{},{headers:me(e.userToken??"")}).then(({data:r})=>{console.log(r),t(`/classes/class/${e.teachCardId}`,{state:{classroomId:e.teachCardId}})})};return S(pM,{children:[l("header",{children:l("h4",{children:"Enroll Now"})}),S(mM,{children:[l("h2",{children:e.title}),l(t0,{title:"Time :",value:S(n0,{children:[l("span",{children:Br(e.date)}),l(gM,{}),l("span",{children:Sn(e.classStartsAt)+" - "+Sn(e.classEndsAt)})]})}),l(t0,{title:"Coins :",value:S(n0,{children:[l(Ss,{color:"#000000"}),l("span",{children:e.price})]})})]}),S(vM,{children:[l("div",{className:"info-cont",children:l(m5,{})}),l("span",{children:"You have"}),l(Ss,{color:"#000000"}),S("span",{children:[l("h3",{children:e.userCredit})," coins right now"]})]}),l(yM,{children:S("button",{type:"submit",onClick:n,children:[l("span",{children:"Buy Class"}),l(Qe,{strokeColor:"white"})]})})]})},xM=w.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 26px;
  gap: 12px;
  /* background: #332ad5; */
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  background: #054f31;
  border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`,SM=e=>{const[t,n]=x.useState(!1);function r(){n(!0)}function i(){n(!1)}return S(fe,{children:[S(xM,{onClick:r,children:[l("span",{children:"Enroll Now"}),l(Qe,{strokeColor:"white"})]}),l(Un,{isOpen:t,onRequestClose:i,style:Vr,children:l(wM,{...e})})]})},bM=w.div`
  /* border: 1px solid red; */
  margin: 1rem 0 0;
  padding: 2rem 15vw 0;
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  font-style: normal;
  gap: 2.5rem;

  &:first-child {
    border: 1px solid red;
  }
`,CM=w.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,kM=w.div`
  /* border: 1px solid red; */
`,_M=w.div``,TM=w.div`
  /* border: 1px solid red; */
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  }

  span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
`,EM=w.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    width: 20px;
    height: 26px;
  }
`,OM=()=>{const[e,t]=x.useState(),[n,r]=x.useState(),[i,o]=x.useState(),[s,a]=x.useState(),[u,c]=x.useState("/classes"),[d,f]=x.useState(""),h=jn(),{fetchLocalUserToken:y,fetchUserCredit:p}=rt();x.useEffect(()=>{console.log(h.state);const m=h.state.classroomId;console.log(m),r(m);const g=h.state.backPageLink;g&&c(g);const b=h.state.learnCardId;b&&f(b)},[h]),x.useEffect(()=>{y().then(m=>{o(m)}),p().then(m=>{console.log(m),a(m)})},[]);async function v(){await le.get(`${ue}${ce}/teach/${n}/overview`,{headers:me(i??"")}).then(({data:m})=>{t(m.teachCard)})}x.useEffect(()=>{n&&(console.log(h.state),v())},[n]);const C=()=>{const m=new Date,g=e==null?void 0:e.classStartsAt;if(g)return new Date(g)>m};return S(fe,{children:[l(ut,{}),e&&S(bM,{children:[l(vi,{link:u,learnCardId:d}),l(Wu,{img:e==null?void 0:e.cardBanner,title:e.topic}),S(CM,{children:[S(kM,{children:[l(rp,{date:e.date,classEndsAt:e.classEndsAt,classStartsAt:e.classStartsAt}),s&&i&&C()&&l(SM,{title:e.topic,price:e.price,date:e.date,classStartsAt:e.classStartsAt,classEndsAt:e.classEndsAt,userCredit:s,teachCardId:e._id,userToken:i})]}),S(_M,{children:[S(TM,{children:[l(kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"white",textColor:"black"}),S(EM,{children:[l(Ss,{color:"black"}),l("h3",{children:e.price})]})]}),l(np,{desciption:e.description,expectations:e.expectations})]})]})]}),l(it,{})]})},PM=w.div`
  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-bottom: 3.5rem;
  }
`,MM=w.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    outline: none;
    border: none;
    background: #332ad5;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,r0={tagline:"",question:"",topic:""},DM=()=>{const[e,t]=x.useState(r0);function n(c){t(d=>({...d,...c}))}const[r,i]=x.useState(""),{fetchLocalUserToken:o}=rt();x.useEffect(()=>{o().then(c=>{i(c)})},[location]);const s={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},a=()=>{const{topic:c,tagline:d,question:f}=e;return c===""||d===""||f===""?(I.error("Fill in all the details",s),!1):d.length>250?(I.error("Tagline cannot be longer than 250 characters",s),!1):!0},u=async()=>{console.log(e);const{topic:c,tagline:d,question:f}=e;a()&&await le.post(`${ue}${ce}/forum`,{topic:c,tagline:d,question:f},{headers:me(r??"")}).then(()=>{t(r0),I.success("Forum successfully created",s)}).catch(h=>{const y=h.response.data.error.errors;Object.keys(y).forEach(function(p,v){I.error(y[p].message,s)})})};return S(fe,{children:[l(ut,{}),S(PM,{children:[l(vi,{link:"/forums"}),l("h2",{children:"Let's get started with your Forum"}),S("form",{children:[l(pe,{elem:l(De,{type:"text",label:"Topic",name:"topic",value:e.topic,updateFields:n}),inputDesc:"Pick a topic for your forum"}),l(pe,{elem:l(Wt,{label:"Tagline",name:"tagline",value:e.tagline,updateFields:n}),inputDesc:"Pick a tagline for your forum"}),l(pe,{elem:l(Wt,{label:"Question",name:"question",value:e.question,areaHeight:"10rem",updateFields:n}),inputDesc:"Pick a tagline for your forum"})]}),l(MM,{children:l("button",{type:"submit",onClick:u,children:"Create Forum"})})]}),l(it,{}),l($n,{theme:"dark"})]})},LM=w.div`
  /* border: 1px solid red; */
  margin: 4rem 6.3vw 0;
  /* padding: 10rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    /* border: 1px solid red; */
    font-size: 2rem;
    font-weight: 500;
    padding: 4rem 0;
  }
`,ip=()=>l(LM,{children:l("h3",{children:"Coming Soon"})}),NM=()=>S(fe,{children:[l(ut,{}),l(ip,{}),l(it,{})]}),RM=()=>S(fe,{children:[l(ut,{}),l(ip,{}),l(it,{})]}),IM=()=>S(fe,{children:[l(ut,{}),l(ip,{}),l(it,{})]}),AM=w.div`
  padding: 6rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2{
    font-size: 2.8rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    width: fit-content;
    line-height: 1;
  }

  span{
    width: 90%;
    font-size: 1.2rem;
  }
`,$M=()=>S(fe,{children:[l(ut,{}),S(AM,{children:[l("h2",{children:"About us"}),l("span",{children:"We are group of enthusiastic youngsters from various backgrounds and we are here to bring you some of the best ways in which you can apply the Feynman Technique to master any topic you want to learn and turn you into a SUPER STUDENT!"})]}),l(it,{})]}),FM=w.div`
  padding: 6rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* border: 1px solid red; */
  width: 70%;
`,jM=w.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  width: 100%;
  display: grid;
  /* display: flex; */
  /* align-items: center; */
  grid-template-columns: 1fr 4fr;

  span.title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #094067;
  }

  span.link {
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: underline;
    /* cursor: pointer; */
  }

  div {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
    }

    div.copy {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
    }
  }
`,zM=[{title:"Email",link:"admin@teachandlearn.app"},{title:"Twitter",link:"https://twitter.com/Teach_n_Learn22"},{title:"Facebook",link:"https://www.facebook.com/people/Teach-and-Learn/100091595265820/"},{title:"Instagram",link:"https://www.instagram.com/teach.nlearn/"},{title:"Youtube",link:"https://www.youtube.com/@TeachandLearnApp"}],UM=()=>{const e={position:I.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},t=n=>{navigator.clipboard.writeText(n),I.success("Email copied to clipboard",e)};return S(fe,{children:[l(ut,{}),l(FM,{children:zM.map((n,r)=>S(jM,{children:[l("span",{className:"title",children:n.title}),l("div",{children:n.title.toLowerCase()!="email"?S(Zl,{to:n.link,target:"_blank",children:[l("span",{className:"link",children:n.link}),l(Qe,{strokeColor:"#094067"})]}):S("div",{className:"copy",onClick:()=>t(n.link),children:[l("span",{className:"link",children:n.link}),l(x5,{})]})})]}))}),l(it,{})]})},BM=w.div`
  padding: 6rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.2rem;

  header {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      text-decoration: underline;
    }
  }

  footer {
    span {
      color: #094067;
      font-weight: 700;
      text-decoration: underline;
    }
  }
`,HM=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    text-decoration: underline;
  }

  ol {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
  }
`,WM=[{heading:"User Conduct",points:["You agree to use the Platform in compliance with applicable laws and regulations.","You will not post, transmit, or share any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.","You will not engage in any activity that interferes with or disrupts the functioning of the Platform or its users."]},{heading:"Intellectual Property",points:["All intellectual property rights in the Platform and its content belong to us or our licensors.","You may not reproduce, modify, distribute, or create derivative works of any content on the Platform without our prior written consent."]},{heading:"Privacy",points:["We respect your privacy and handle your personal information in accordance with our Privacy Policy","By using the Platform, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy."]},{heading:"Third-Party Links",points:["The Platform may contain links to third-party websites or services that are not owned or controlled by us.","We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You access them at your own risk."]},{heading:"Termination",points:["We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause, and without prior notice."]},{heading:"Disclaimer of Warranties",points:['The Platform is provided on an "as is" and "as available" basis without any warranties or representations, express or implied.'," We do not guarantee the accuracy, reliability, or completeness of any content on the Platform"]},{heading:"Limitation of Liability",points:["To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Platform."]},{heading:"Governing Law",points:["This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles."]},{heading:"Modification of Terms",points:["We reserve the right to modify or update this Agreement at any time. Your continued use of the Platform after any changes constitutes your acceptance of the modified terms."]},{heading:"Entire Agreement",points:["This Agreement constitutes the entire agreement between you and us regarding the use of the Platform, superseding any prior agreements or understandings."]}],YM=()=>S(fe,{children:[l(ut,{}),S(BM,{children:[S("header",{children:[l("h2",{children:"Terms and Privacy Policy"}),l("p",{children:'These Terms and Privacy Policy ("Agreement") govern your use of our site ("Platform"). Please read this Agreement carefully before accessing or using the Platform. By accessing or using the Platform, you agree to be bound by this Agreement. If you do not agree to the terms of this Agreement, you may not access or use the Platform'})]}),WM.map((e,t)=>S(HM,{children:[l("h3",{children:e.heading}),l("ol",{type:"a",children:e.points.map((n,r)=>l("li",{children:n}))})]})),S("footer",{children:["If you have any questions or concerns regarding this Agreement, please contact us at ",l("span",{children:"admin@teachandlearn.app."})]})]}),l(it,{})]});function VM(){return l("div",{className:"App",children:S(GS,{children:[l(He,{path:"/",element:l(pk,{})}),l(He,{path:"/teachNlearn",element:l(fM,{})}),l(He,{path:"/signup",element:l(rT,{})}),l(He,{path:"/signin",element:l(tP,{})}),l(He,{path:"/forums",element:l(A9,{})}),l(He,{path:"/forum/:id",element:l(M9,{})}),l(He,{path:"/forums/create-forum",element:l(DM,{})}),l(He,{path:"/classes",element:l(o7,{})}),l(He,{path:"/class-overviw/:id",element:l(OM,{})}),l(He,{path:"/classes/class/:id",element:l(G7,{})}),l(He,{path:"/requests",element:l(EP,{})}),l(He,{path:"/learncard-overview/:learncardId",element:l(BP,{})}),l(He,{path:"/create-learn-request",element:l(lP,{})}),l(He,{path:"/create-teach-request",element:l(gP,{})}),l(He,{path:"/blogs",element:l(NM,{})}),l(He,{path:"/groups",element:l(RM,{})}),l(He,{path:"/myai",element:l(IM,{})}),l(He,{path:"/me",element:l(j6,{})}),l(He,{path:"/about",element:l($M,{})}),l(He,{path:"/contact",element:l(UM,{})}),l(He,{path:"/terms-and-privacy",element:l(YM,{})})]})})}jc.createRoot(document.getElementById("root")).render(l(JS,{children:l(VM,{})}))});export default GM();
