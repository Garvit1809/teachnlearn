var sb=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var AL=sb((zL,pl)=>{function ab(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function lb(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var I1={exports:{}},oc={},D1={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),cb=Symbol.for("react.portal"),ub=Symbol.for("react.fragment"),db=Symbol.for("react.strict_mode"),fb=Symbol.for("react.profiler"),hb=Symbol.for("react.provider"),pb=Symbol.for("react.context"),mb=Symbol.for("react.forward_ref"),gb=Symbol.for("react.suspense"),xb=Symbol.for("react.memo"),yb=Symbol.for("react.lazy"),hm=Symbol.iterator;function vb(e){return e===null||typeof e!="object"?null:(e=hm&&e[hm]||e["@@iterator"],typeof e=="function"?e:null)}var N1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L1=Object.assign,$1={};function _o(e,t,n){this.props=e,this.context=t,this.refs=$1,this.updater=n||N1}_o.prototype.isReactComponent={};_o.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function M1(){}M1.prototype=_o.prototype;function ih(e,t,n){this.props=e,this.context=t,this.refs=$1,this.updater=n||N1}var oh=ih.prototype=new M1;oh.constructor=ih;L1(oh,_o.prototype);oh.isPureReactComponent=!0;var pm=Array.isArray,R1=Object.prototype.hasOwnProperty,sh={current:null},A1={key:!0,ref:!0,__self:!0,__source:!0};function F1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)R1.call(t,r)&&!A1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zs,type:e,key:o,ref:a,props:i,_owner:sh.current}}function wb(e,t){return{$$typeof:Zs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ah(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zs}function bb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mm=/\/+/g;function Ou(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bb(""+e.key):t.toString(36)}function Ha(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zs:case cb:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ou(a,0):r,pm(i)?(n="",e!=null&&(n=e.replace(mm,"$&/")+"/"),Ha(i,t,n,"",function(u){return u})):i!=null&&(ah(i)&&(i=wb(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(mm,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",pm(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Ou(o,l);a+=Ha(o,t,n,c,i)}else if(c=vb(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Ou(o,l++),a+=Ha(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ma(e,t,n){if(e==null)return e;var r=[],i=0;return Ha(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Nt={current:null},Wa={transition:null},jb={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:sh};pe.Children={map:ma,forEach:function(e,t,n){ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ma(e,function(){t++}),t},toArray:function(e){return ma(e,function(t){return t})||[]},only:function(e){if(!ah(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=_o;pe.Fragment=ub;pe.Profiler=fb;pe.PureComponent=ih;pe.StrictMode=db;pe.Suspense=gb;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jb;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=L1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=sh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)R1.call(t,c)&&!A1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zs,type:e.type,key:i,ref:o,props:r,_owner:a}};pe.createContext=function(e){return e={$$typeof:pb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hb,_context:e},e.Consumer=e};pe.createElement=F1;pe.createFactory=function(e){var t=F1.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:mb,render:e}};pe.isValidElement=ah;pe.lazy=function(e){return{$$typeof:yb,_payload:{_status:-1,_result:e},_init:Sb}};pe.memo=function(e,t){return{$$typeof:xb,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return Nt.current.useCallback(e,t)};pe.useContext=function(e){return Nt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return Nt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return Nt.current.useEffect(e,t)};pe.useId=function(){return Nt.current.useId()};pe.useImperativeHandle=function(e,t,n){return Nt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return Nt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Nt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Nt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return Nt.current.useReducer(e,t,n)};pe.useRef=function(e){return Nt.current.useRef(e)};pe.useState=function(e){return Nt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return Nt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return Nt.current.useTransition()};pe.version="18.2.0";D1.exports=pe;var g=D1.exports;const K=ic(g),Cb=ab({__proto__:null,default:K},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb=g,_b=Symbol.for("react.element"),Tb=Symbol.for("react.fragment"),Eb=Object.prototype.hasOwnProperty,Ob=kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pb={key:!0,ref:!0,__self:!0,__source:!0};function z1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Eb.call(t,r)&&!Pb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_b,type:e,key:o,ref:a,props:i,_owner:Ob.current}}oc.Fragment=Tb;oc.jsx=z1;oc.jsxs=z1;I1.exports=oc;var s=I1.exports,Ed={},U1={exports:{}},Zt={},B1={exports:{}},H1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var Y=E.length;E.push(H);e:for(;0<Y;){var re=Y-1>>>1,F=E[re];if(0<i(F,H))E[re]=H,E[Y]=F,Y=re;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var H=E[0],Y=E.pop();if(Y!==H){E[0]=Y;e:for(var re=0,F=E.length,z=F>>>1;re<z;){var B=2*(re+1)-1,X=E[B],T=B+1,oe=E[T];if(0>i(X,Y))T<F&&0>i(oe,X)?(E[re]=oe,E[T]=Y,re=T):(E[re]=X,E[B]=Y,re=B);else if(T<F&&0>i(oe,Y))E[re]=oe,E[T]=Y,re=T;else break e}}return H}function i(E,H){var Y=E.sortIndex-H.sortIndex;return Y!==0?Y:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,h=3,p=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=E)r(u),H.sortIndex=H.expirationTime,t(c,H);else break;H=n(u)}}function S(E){if(w=!1,v(E),!y)if(n(c)!==null)y=!0,J(C);else{var H=n(u);H!==null&&_(S,H.startTime-E)}}function C(E,H){y=!1,w&&(w=!1,x(P),P=-1),p=!0;var Y=h;try{for(v(H),f=n(c);f!==null&&(!(f.expirationTime>H)||E&&!q());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var F=re(f.expirationTime<=H);H=e.unstable_now(),typeof F=="function"?f.callback=F:f===n(c)&&r(c),v(H)}else r(c);f=n(c)}if(f!==null)var z=!0;else{var B=n(u);B!==null&&_(S,B.startTime-H),z=!1}return z}finally{f=null,h=Y,p=!1}}var O=!1,k=null,P=-1,R=5,L=-1;function q(){return!(e.unstable_now()-L<R)}function Q(){if(k!==null){var E=e.unstable_now();L=E;var H=!0;try{H=k(!0,E)}finally{H?se():(O=!1,k=null)}}else O=!1}var se;if(typeof m=="function")se=function(){m(Q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,A=N.port2;N.port1.onmessage=Q,se=function(){A.postMessage(null)}}else se=function(){j(Q,0)};function J(E){k=E,O||(O=!0,se())}function _(E,H){P=j(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,J(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Y=h;h=H;try{return E()}finally{h=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=h;h=E;try{return H()}finally{h=Y}},e.unstable_scheduleCallback=function(E,H,Y){var re=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?re+Y:re):Y=re,E){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,E={id:d++,callback:H,priorityLevel:E,startTime:Y,expirationTime:F,sortIndex:-1},Y>re?(E.sortIndex=Y,t(u,E),n(c)===null&&E===n(u)&&(w?(x(P),P=-1):w=!0,_(S,Y-re))):(E.sortIndex=F,t(c,E),y||p||(y=!0,J(C))),E},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(E){var H=h;return function(){var Y=h;h=H;try{return E.apply(this,arguments)}finally{h=Y}}}})(H1);B1.exports=H1;var Ib=B1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=g,Qt=Ib;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y1=new Set,js={};function Ti(e,t){ao(e,t),ao(e+"Capture",t)}function ao(e,t){for(js[e]=t,e=0;e<t.length;e++)Y1.add(t[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,Db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gm={},xm={};function Nb(e){return Od.call(xm,e)?!0:Od.call(gm,e)?!1:Db.test(e)?xm[e]=!0:(gm[e]=!0,!1)}function Lb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $b(e,t,n,r){if(t===null||typeof t>"u"||Lb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Lt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){wt[e]=new Lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];wt[t]=new Lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){wt[e]=new Lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){wt[e]=new Lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){wt[e]=new Lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){wt[e]=new Lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){wt[e]=new Lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){wt[e]=new Lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){wt[e]=new Lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function ch(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lh,ch);wt[t]=new Lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lh,ch);wt[t]=new Lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lh,ch);wt[t]=new Lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){wt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){wt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function uh(e,t,n,r){var i=wt.hasOwnProperty(t)?wt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($b(t,n,i,r)&&(n=null),r||i===null?Nb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yr=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),G1=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Dd=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),q1=Symbol.for("react.offscreen"),ym=Symbol.iterator;function zo(e){return e===null||typeof e!="object"?null:(e=ym&&e[ym]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Pu;function Jo(e){if(Pu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pu=t&&t[1]||""}return`
`+Pu+e}var Iu=!1;function Du(e,t){if(!e||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jo(e):""}function Mb(e){switch(e.tag){case 5:return Jo(e.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return e=Du(e.type,!1),e;case 11:return e=Du(e.type.render,!1),e;case 1:return e=Du(e.type,!0),e;default:return""}}function Nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mi:return"Fragment";case $i:return"Portal";case Pd:return"Profiler";case dh:return"StrictMode";case Id:return"Suspense";case Dd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case G1:return(e.displayName||"Context")+".Consumer";case V1:return(e._context.displayName||"Context")+".Provider";case fh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hh:return t=e.displayName||null,t!==null?t:Nd(e.type)||"Memo";case _r:t=e._payload,e=e._init;try{return Nd(e(t))}catch{}}return null}function Rb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(t);case 8:return t===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Q1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ab(e){var t=Q1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xa(e){e._valueTracker||(e._valueTracker=Ab(e))}function K1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Q1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ld(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Z1(e,t){t=t.checked,t!=null&&uh(e,"checked",t,!1)}function $d(e,t){Z1(e,t);var n=Kr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Md(e,t.type,n):t.hasOwnProperty("defaultValue")&&Md(e,t.type,Kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Md(e,t,n){(t!=="number"||gl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xo=Array.isArray;function Zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Xo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kr(n)}}function J1(e,t){var n=Kr(t.value),r=Kr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function X1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?X1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ya,ex=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fb=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(e){Fb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),is[t]=is[e]})});function tx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||is.hasOwnProperty(e)&&is[e]?(""+t).trim():t+"px"}function nx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zb=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(e,t){if(t){if(zb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function zd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function ph(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bd=null,Ji=null,Xi=null;function jm(e){if(e=ea(e)){if(typeof Bd!="function")throw Error($(280));var t=e.stateNode;t&&(t=uc(t),Bd(e.stateNode,e.type,t))}}function rx(e){Ji?Xi?Xi.push(e):Xi=[e]:Ji=e}function ix(){if(Ji){var e=Ji,t=Xi;if(Xi=Ji=null,jm(e),t)for(e=0;e<t.length;e++)jm(t[e])}}function ox(e,t){return e(t)}function sx(){}var Nu=!1;function ax(e,t,n){if(Nu)return e(t,n);Nu=!0;try{return ox(e,t,n)}finally{Nu=!1,(Ji!==null||Xi!==null)&&(sx(),ix())}}function ks(e,t){var n=e.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Hd=!1;if(hr)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Hd=!1}function Ub(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var os=!1,xl=null,yl=!1,Wd=null,Bb={onError:function(e){os=!0,xl=e}};function Hb(e,t,n,r,i,o,a,l,c){os=!1,xl=null,Ub.apply(Bb,arguments)}function Wb(e,t,n,r,i,o,a,l,c){if(Hb.apply(this,arguments),os){if(os){var u=xl;os=!1,xl=null}else throw Error($(198));yl||(yl=!0,Wd=u)}}function Ei(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cm(e){if(Ei(e)!==e)throw Error($(188))}function Yb(e){var t=e.alternate;if(!t){if(t=Ei(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cm(i),e;if(o===r)return Cm(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function cx(e){return e=Yb(e),e!==null?ux(e):null}function ux(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ux(e);if(t!==null)return t;e=e.sibling}return null}var dx=Qt.unstable_scheduleCallback,km=Qt.unstable_cancelCallback,Vb=Qt.unstable_shouldYield,Gb=Qt.unstable_requestPaint,Xe=Qt.unstable_now,qb=Qt.unstable_getCurrentPriorityLevel,mh=Qt.unstable_ImmediatePriority,fx=Qt.unstable_UserBlockingPriority,vl=Qt.unstable_NormalPriority,Qb=Qt.unstable_LowPriority,hx=Qt.unstable_IdlePriority,sc=null,Yn=null;function Kb(e){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(sc,e,void 0,(e.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:Xb,Zb=Math.log,Jb=Math.LN2;function Xb(e){return e>>>=0,e===0?32:31-(Zb(e)/Jb|0)|0}var va=64,wa=4194304;function es(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=es(l):(o&=a,o!==0&&(r=es(o)))}else a=n&~i,a!==0?r=es(a):o!==0&&(r=es(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_n(t),i=1<<n,r|=e[n],t&=~i;return r}function eS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_n(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=eS(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Yd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function px(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function Lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_n(t),e[t]=n}function nS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_n(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function gh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_n(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function mx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gx,xh,xx,yx,vx,Vd=!1,ba=[],Rr=null,Ar=null,Fr=null,_s=new Map,Ts=new Map,Er=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(e,t){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(t.pointerId)}}function Bo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ea(t),t!==null&&xh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iS(e,t,n,r,i){switch(t){case"focusin":return Rr=Bo(Rr,e,t,n,r,i),!0;case"dragenter":return Ar=Bo(Ar,e,t,n,r,i),!0;case"mouseover":return Fr=Bo(Fr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _s.set(o,Bo(_s.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ts.set(o,Bo(Ts.get(o)||null,e,t,n,r,i)),!0}return!1}function wx(e){var t=li(e.target);if(t!==null){var n=Ei(t);if(n!==null){if(t=n.tag,t===13){if(t=lx(n),t!==null){e.blockedOn=t,vx(e.priority,function(){xx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ud=r,n.target.dispatchEvent(r),Ud=null}else return t=ea(n),t!==null&&xh(t),e.blockedOn=n,!1;t.shift()}return!0}function Tm(e,t,n){Ya(e)&&n.delete(t)}function oS(){Vd=!1,Rr!==null&&Ya(Rr)&&(Rr=null),Ar!==null&&Ya(Ar)&&(Ar=null),Fr!==null&&Ya(Fr)&&(Fr=null),_s.forEach(Tm),Ts.forEach(Tm)}function Ho(e,t){e.blockedOn===t&&(e.blockedOn=null,Vd||(Vd=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,oS)))}function Es(e){function t(i){return Ho(i,e)}if(0<ba.length){Ho(ba[0],e);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rr!==null&&Ho(Rr,e),Ar!==null&&Ho(Ar,e),Fr!==null&&Ho(Fr,e),_s.forEach(t),Ts.forEach(t),n=0;n<Er.length;n++)r=Er[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Er.length&&(n=Er[0],n.blockedOn===null);)wx(n),n.blockedOn===null&&Er.shift()}var eo=yr.ReactCurrentBatchConfig,bl=!0;function sS(e,t,n,r){var i=Ee,o=eo.transition;eo.transition=null;try{Ee=1,yh(e,t,n,r)}finally{Ee=i,eo.transition=o}}function aS(e,t,n,r){var i=Ee,o=eo.transition;eo.transition=null;try{Ee=4,yh(e,t,n,r)}finally{Ee=i,eo.transition=o}}function yh(e,t,n,r){if(bl){var i=Gd(e,t,n,r);if(i===null)Wu(e,t,r,Sl,n),_m(e,r);else if(iS(i,e,t,n,r))r.stopPropagation();else if(_m(e,r),t&4&&-1<rS.indexOf(e)){for(;i!==null;){var o=ea(i);if(o!==null&&gx(o),o=Gd(e,t,n,r),o===null&&Wu(e,t,r,Sl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wu(e,t,r,null,n)}}var Sl=null;function Gd(e,t,n,r){if(Sl=null,e=ph(r),e=li(e),e!==null)if(t=Ei(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sl=e,null}function bx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qb()){case mh:return 1;case fx:return 4;case vl:case Qb:return 16;case hx:return 536870912;default:return 16}default:return 16}}var Pr=null,vh=null,Va=null;function Sx(){if(Va)return Va;var e,t=vh,n=t.length,r,i="value"in Pr?Pr.value:Pr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Va=i.slice(e,1<r?1-r:void 0)}function Ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function Em(){return!1}function Jt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:Em,this.isPropagationStopped=Em,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wh=Jt(To),Xs=Ge({},To,{view:0,detail:0}),lS=Jt(Xs),$u,Mu,Wo,ac=Ge({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?($u=e.screenX-Wo.screenX,Mu=e.screenY-Wo.screenY):Mu=$u=0,Wo=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Om=Jt(ac),cS=Ge({},ac,{dataTransfer:0}),uS=Jt(cS),dS=Ge({},Xs,{relatedTarget:0}),Ru=Jt(dS),fS=Ge({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=Jt(fS),pS=Ge({},To,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mS=Jt(pS),gS=Ge({},To,{data:0}),Pm=Jt(gS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vS[e])?!!t[e]:!1}function bh(){return wS}var bS=Ge({},Xs,{key:function(e){if(e.key){var t=xS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(e){return e.type==="keypress"?Ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SS=Jt(bS),jS=Ge({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=Jt(jS),CS=Ge({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),kS=Jt(CS),_S=Ge({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=Jt(_S),ES=Ge({},ac,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=Jt(ES),PS=[9,13,27,32],Sh=hr&&"CompositionEvent"in window,ss=null;hr&&"documentMode"in document&&(ss=document.documentMode);var IS=hr&&"TextEvent"in window&&!ss,jx=hr&&(!Sh||ss&&8<ss&&11>=ss),Dm=String.fromCharCode(32),Nm=!1;function Cx(e,t){switch(e){case"keyup":return PS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function DS(e,t){switch(e){case"compositionend":return kx(t);case"keypress":return t.which!==32?null:(Nm=!0,Dm);case"textInput":return e=t.data,e===Dm&&Nm?null:e;default:return null}}function NS(e,t){if(Ri)return e==="compositionend"||!Sh&&Cx(e,t)?(e=Sx(),Va=vh=Pr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jx&&t.locale!=="ko"?null:t.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!LS[e.type]:t==="textarea"}function _x(e,t,n,r){rx(r),t=jl(t,"onChange"),0<t.length&&(n=new wh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var as=null,Os=null;function $S(e){Rx(e,0)}function lc(e){var t=zi(e);if(K1(t))return e}function MS(e,t){if(e==="change")return t}var Tx=!1;if(hr){var Au;if(hr){var Fu="oninput"in document;if(!Fu){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),Fu=typeof $m.oninput=="function"}Au=Fu}else Au=!1;Tx=Au&&(!document.documentMode||9<document.documentMode)}function Mm(){as&&(as.detachEvent("onpropertychange",Ex),Os=as=null)}function Ex(e){if(e.propertyName==="value"&&lc(Os)){var t=[];_x(t,Os,e,ph(e)),ax($S,t)}}function RS(e,t,n){e==="focusin"?(Mm(),as=t,Os=n,as.attachEvent("onpropertychange",Ex)):e==="focusout"&&Mm()}function AS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lc(Os)}function FS(e,t){if(e==="click")return lc(t)}function zS(e,t){if(e==="input"||e==="change")return lc(t)}function US(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pn=typeof Object.is=="function"?Object.is:US;function Ps(e,t){if(Pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Od.call(t,i)||!Pn(e[i],t[i]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Am(e,t){var n=Rm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function Ox(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ox(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Px(){for(var e=window,t=gl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gl(e.document)}return t}function jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function BS(e){var t=Px(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ox(n.ownerDocument.documentElement,n)){if(r!==null&&jh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Am(n,o);var a=Am(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var HS=hr&&"documentMode"in document&&11>=document.documentMode,Ai=null,qd=null,ls=null,Qd=!1;function Fm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||Ai==null||Ai!==gl(r)||(r=Ai,"selectionStart"in r&&jh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ls&&Ps(ls,r)||(ls=r,r=jl(qd,"onSelect"),0<r.length&&(t=new wh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ai)))}function ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fi={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},zu={},Ix={};hr&&(Ix=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function cc(e){if(zu[e])return zu[e];if(!Fi[e])return e;var t=Fi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ix)return zu[e]=t[n];return e}var Dx=cc("animationend"),Nx=cc("animationiteration"),Lx=cc("animationstart"),$x=cc("transitionend"),Mx=new Map,zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(e,t){Mx.set(e,t),Ti(t,[e])}for(var Uu=0;Uu<zm.length;Uu++){var Bu=zm[Uu],WS=Bu.toLowerCase(),YS=Bu[0].toUpperCase()+Bu.slice(1);Jr(WS,"on"+YS)}Jr(Dx,"onAnimationEnd");Jr(Nx,"onAnimationIteration");Jr(Lx,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr($x,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function Um(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wb(r,t,void 0,e),e.currentTarget=null}function Rx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Um(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Um(i,l,u),o=c}}}if(yl)throw e=Wd,yl=!1,Wd=null,e}function Me(e,t){var n=t[ef];n===void 0&&(n=t[ef]=new Set);var r=e+"__bubble";n.has(r)||(Ax(t,e,2,!1),n.add(r))}function Hu(e,t,n){var r=0;t&&(r|=4),Ax(n,e,r,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[Ca]){e[Ca]=!0,Y1.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||Hu(n,!1,e),Hu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,Hu("selectionchange",!1,t))}}function Ax(e,t,n,r){switch(bx(t)){case 1:var i=sS;break;case 4:i=aS;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Hd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=li(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ax(function(){var u=o,d=ph(n),f=[];e:{var h=Mx.get(e);if(h!==void 0){var p=wh,y=e;switch(e){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":p=SS;break;case"focusin":y="focus",p=Ru;break;case"focusout":y="blur",p=Ru;break;case"beforeblur":case"afterblur":p=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=uS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kS;break;case Dx:case Nx:case Lx:p=hS;break;case $x:p=TS;break;case"scroll":p=lS;break;case"wheel":p=OS;break;case"copy":case"cut":case"paste":p=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Im}var w=(t&4)!==0,j=!w&&e==="scroll",x=w?h!==null?h+"Capture":null:h;w=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,x!==null&&(S=ks(m,x),S!=null&&w.push(Ds(m,S,v)))),j)break;m=m.return}0<w.length&&(h=new p(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Ud&&(y=n.relatedTarget||n.fromElement)&&(li(y)||y[pr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?li(y):null,y!==null&&(j=Ei(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(w=Om,S="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Im,S="onPointerLeave",x="onPointerEnter",m="pointer"),j=p==null?h:zi(p),v=y==null?h:zi(y),h=new w(S,m+"leave",p,n,d),h.target=j,h.relatedTarget=v,S=null,li(d)===u&&(w=new w(x,m+"enter",y,n,d),w.target=v,w.relatedTarget=j,S=w),j=S,p&&y)t:{for(w=p,x=y,m=0,v=w;v;v=Ii(v))m++;for(v=0,S=x;S;S=Ii(S))v++;for(;0<m-v;)w=Ii(w),m--;for(;0<v-m;)x=Ii(x),v--;for(;m--;){if(w===x||x!==null&&w===x.alternate)break t;w=Ii(w),x=Ii(x)}w=null}else w=null;p!==null&&Bm(f,h,p,w,!1),y!==null&&j!==null&&Bm(f,j,y,w,!0)}}e:{if(h=u?zi(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=MS;else if(Lm(h))if(Tx)C=zS;else{C=AS;var O=RS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=FS);if(C&&(C=C(e,u))){_x(f,C,n,d);break e}O&&O(e,h,u),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&Md(h,"number",h.value)}switch(O=u?zi(u):window,e){case"focusin":(Lm(O)||O.contentEditable==="true")&&(Ai=O,qd=u,ls=null);break;case"focusout":ls=qd=Ai=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,Fm(f,n,d);break;case"selectionchange":if(HS)break;case"keydown":case"keyup":Fm(f,n,d)}var k;if(Sh)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ri?Cx(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jx&&n.locale!=="ko"&&(Ri||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ri&&(k=Sx()):(Pr=d,vh="value"in Pr?Pr.value:Pr.textContent,Ri=!0)),O=jl(u,P),0<O.length&&(P=new Pm(P,e,null,n,d),f.push({event:P,listeners:O}),k?P.data=k:(k=kx(n),k!==null&&(P.data=k)))),(k=IS?DS(e,n):NS(e,n))&&(u=jl(u,"onBeforeInput"),0<u.length&&(d=new Pm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=k))}Rx(f,t)})}function Ds(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ks(e,n),o!=null&&r.unshift(Ds(e,o,i)),o=ks(e,t),o!=null&&r.push(Ds(e,o,i))),e=e.return}return r}function Ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bm(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ks(n,o),c!=null&&a.unshift(Ds(n,c,l))):i||(c=ks(n,o),c!=null&&a.push(Ds(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var GS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function Hm(e){return(typeof e=="string"?e:""+e).replace(GS,`
`).replace(qS,"")}function ka(e,t,n){if(t=Hm(t),Hm(e)!==t&&n)throw Error($(425))}function Cl(){}var Kd=null,Zd=null;function Jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(e){return Wm.resolve(null).then(e).catch(ZS)}:Xd;function ZS(e){setTimeout(function(){throw e})}function Yu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Es(t)}function zr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ym(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Eo,Ns="__reactProps$"+Eo,pr="__reactContainer$"+Eo,ef="__reactEvents$"+Eo,JS="__reactListeners$"+Eo,XS="__reactHandles$"+Eo;function li(e){var t=e[Bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pr]||n[Bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ym(e);e!==null;){if(n=e[Bn])return n;e=Ym(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[Bn]||e[pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function uc(e){return e[Ns]||null}var tf=[],Ui=-1;function Xr(e){return{current:e}}function Ae(e){0>Ui||(e.current=tf[Ui],tf[Ui]=null,Ui--)}function $e(e,t){Ui++,tf[Ui]=e.current,e.current=t}var Zr={},Tt=Xr(Zr),Bt=Xr(!1),vi=Zr;function lo(e,t){var n=e.type.contextTypes;if(!n)return Zr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(e){return e=e.childContextTypes,e!=null}function kl(){Ae(Bt),Ae(Tt)}function Vm(e,t,n){if(Tt.current!==Zr)throw Error($(168));$e(Tt,t),$e(Bt,n)}function Fx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,Rb(e)||"Unknown",i));return Ge({},n,r)}function _l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zr,vi=Tt.current,$e(Tt,e),$e(Bt,Bt.current),!0}function Gm(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Fx(e,t,vi),r.__reactInternalMemoizedMergedChildContext=e,Ae(Bt),Ae(Tt),$e(Tt,e)):Ae(Bt),$e(Bt,n)}var ir=null,dc=!1,Vu=!1;function zx(e){ir===null?ir=[e]:ir.push(e)}function e5(e){dc=!0,zx(e)}function ei(){if(!Vu&&ir!==null){Vu=!0;var e=0,t=Ee;try{var n=ir;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ir=null,dc=!1}catch(i){throw ir!==null&&(ir=ir.slice(e+1)),dx(mh,ei),i}finally{Ee=t,Vu=!1}}return null}var Bi=[],Hi=0,Tl=null,El=0,rn=[],on=0,wi=null,or=1,sr="";function ii(e,t){Bi[Hi++]=El,Bi[Hi++]=Tl,Tl=e,El=t}function Ux(e,t,n){rn[on++]=or,rn[on++]=sr,rn[on++]=wi,wi=e;var r=or;e=sr;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var o=32-_n(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,or=1<<32-_n(t)+i|n<<i|r,sr=o+e}else or=1<<o|n<<i|r,sr=e}function Ch(e){e.return!==null&&(ii(e,1),Ux(e,1,0))}function kh(e){for(;e===Tl;)Tl=Bi[--Hi],Bi[Hi]=null,El=Bi[--Hi],Bi[Hi]=null;for(;e===wi;)wi=rn[--on],rn[on]=null,sr=rn[--on],rn[on]=null,or=rn[--on],rn[on]=null}var qt=null,Gt=null,Be=!1,Cn=null;function Bx(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Gt=zr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wi!==null?{id:or,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,Gt=null,!0):!1;default:return!1}}function nf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rf(e){if(Be){var t=Gt;if(t){var n=t;if(!qm(e,t)){if(nf(e))throw Error($(418));t=zr(n.nextSibling);var r=qt;t&&qm(e,t)?Bx(r,n):(e.flags=e.flags&-4097|2,Be=!1,qt=e)}}else{if(nf(e))throw Error($(418));e.flags=e.flags&-4097|2,Be=!1,qt=e}}}function Qm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function _a(e){if(e!==qt)return!1;if(!Be)return Qm(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jd(e.type,e.memoizedProps)),t&&(t=Gt)){if(nf(e))throw Hx(),Error($(418));for(;t;)Bx(e,t),t=zr(t.nextSibling)}if(Qm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=zr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=qt?zr(e.stateNode.nextSibling):null;return!0}function Hx(){for(var e=Gt;e;)e=zr(e.nextSibling)}function co(){Gt=qt=null,Be=!1}function _h(e){Cn===null?Cn=[e]:Cn.push(e)}var t5=yr.ReactCurrentBatchConfig;function bn(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ol=Xr(null),Pl=null,Wi=null,Th=null;function Eh(){Th=Wi=Pl=null}function Oh(e){var t=Ol.current;Ae(Ol),e._currentValue=t}function of(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function to(e,t){Pl=e,Th=Wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ft=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(Th!==e)if(e={context:e,memoizedValue:t,next:null},Wi===null){if(Pl===null)throw Error($(308));Wi=e,Pl.dependencies={lanes:0,firstContext:e}}else Wi=Wi.next=e;return t}var ci=null;function Ph(e){ci===null?ci=[e]:ci.push(e)}function Wx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ph(t)):(n.next=i.next,i.next=n),t.interleaved=n,mr(e,r)}function mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Ih(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mr(e,n)}return i=r.interleaved,i===null?(t.next=t,Ph(r)):(t.next=i.next,i.next=t),r.interleaved=t,mr(e,n)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gh(e,n)}}function Km(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var i=e.updateQueue;Tr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,l=o;do{var h=l.lane,p=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=t,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=Ge({},f,h);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,c=f):d=d.next=p,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Si|=a,e.lanes=a,e.memoizedState=f}}function Zm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Vx=new W1.Component().refs;function sf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={isMounted:function(e){return(e=e._reactInternals)?Ei(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=It(),i=Hr(e),o=ur(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ur(e,o,i),t!==null&&(Tn(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=It(),i=Hr(e),o=ur(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ur(e,o,i),t!==null&&(Tn(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),r=Hr(e),i=ur(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ur(e,i,r),t!==null&&(Tn(t,e,r,n),qa(t,e,r))}};function Jm(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ps(n,r)||!Ps(i,o):!0}function Gx(e,t,n){var r=!1,i=Zr,o=t.contextType;return typeof o=="object"&&o!==null?o=un(o):(i=Ht(t)?vi:Tt.current,r=t.contextTypes,o=(r=r!=null)?lo(e,i):Zr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function af(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vx,Ih(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=un(o):(o=Ht(t)?vi:Tt.current,i.context=lo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(sf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fc.enqueueReplaceState(i,i.state,null),Il(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Vx&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Ta(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function eg(e){var t=e._init;return t(e._payload)}function qx(e){function t(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=Wr(x,m),x.index=0,x.sibling=null,x}function o(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,m,v,S){return m===null||m.tag!==6?(m=Xu(v,x.mode,S),m.return=x,m):(m=i(m,v),m.return=x,m)}function c(x,m,v,S){var C=v.type;return C===Mi?d(x,m,v.props.children,S,v.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&eg(C)===m.type)?(S=i(m,v.props),S.ref=Yo(x,m,v),S.return=x,S):(S=el(v.type,v.key,v.props,null,x.mode,S),S.ref=Yo(x,m,v),S.return=x,S)}function u(x,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ed(v,x.mode,S),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function d(x,m,v,S,C){return m===null||m.tag!==7?(m=pi(v,x.mode,S,C),m.return=x,m):(m=i(m,v),m.return=x,m)}function f(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xu(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ga:return v=el(m.type,m.key,m.props,null,x.mode,v),v.ref=Yo(x,null,m),v.return=x,v;case $i:return m=ed(m,x.mode,v),m.return=x,m;case _r:var S=m._init;return f(x,S(m._payload),v)}if(Xo(m)||zo(m))return m=pi(m,x.mode,v,null),m.return=x,m;Ta(x,m)}return null}function h(x,m,v,S){var C=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(x,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:return v.key===C?c(x,m,v,S):null;case $i:return v.key===C?u(x,m,v,S):null;case _r:return C=v._init,h(x,m,C(v._payload),S)}if(Xo(v)||zo(v))return C!==null?null:d(x,m,v,S,null);Ta(x,v)}return null}function p(x,m,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(v)||null,l(m,x,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ga:return x=x.get(S.key===null?v:S.key)||null,c(m,x,S,C);case $i:return x=x.get(S.key===null?v:S.key)||null,u(m,x,S,C);case _r:var O=S._init;return p(x,m,v,O(S._payload),C)}if(Xo(S)||zo(S))return x=x.get(v)||null,d(m,x,S,C,null);Ta(m,S)}return null}function y(x,m,v,S){for(var C=null,O=null,k=m,P=m=0,R=null;k!==null&&P<v.length;P++){k.index>P?(R=k,k=null):R=k.sibling;var L=h(x,k,v[P],S);if(L===null){k===null&&(k=R);break}e&&k&&L.alternate===null&&t(x,k),m=o(L,m,P),O===null?C=L:O.sibling=L,O=L,k=R}if(P===v.length)return n(x,k),Be&&ii(x,P),C;if(k===null){for(;P<v.length;P++)k=f(x,v[P],S),k!==null&&(m=o(k,m,P),O===null?C=k:O.sibling=k,O=k);return Be&&ii(x,P),C}for(k=r(x,k);P<v.length;P++)R=p(k,x,P,v[P],S),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?P:R.key),m=o(R,m,P),O===null?C=R:O.sibling=R,O=R);return e&&k.forEach(function(q){return t(x,q)}),Be&&ii(x,P),C}function w(x,m,v,S){var C=zo(v);if(typeof C!="function")throw Error($(150));if(v=C.call(v),v==null)throw Error($(151));for(var O=C=null,k=m,P=m=0,R=null,L=v.next();k!==null&&!L.done;P++,L=v.next()){k.index>P?(R=k,k=null):R=k.sibling;var q=h(x,k,L.value,S);if(q===null){k===null&&(k=R);break}e&&k&&q.alternate===null&&t(x,k),m=o(q,m,P),O===null?C=q:O.sibling=q,O=q,k=R}if(L.done)return n(x,k),Be&&ii(x,P),C;if(k===null){for(;!L.done;P++,L=v.next())L=f(x,L.value,S),L!==null&&(m=o(L,m,P),O===null?C=L:O.sibling=L,O=L);return Be&&ii(x,P),C}for(k=r(x,k);!L.done;P++,L=v.next())L=p(k,x,P,L.value,S),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?P:L.key),m=o(L,m,P),O===null?C=L:O.sibling=L,O=L);return e&&k.forEach(function(Q){return t(x,Q)}),Be&&ii(x,P),C}function j(x,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Mi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:e:{for(var C=v.key,O=m;O!==null;){if(O.key===C){if(C=v.type,C===Mi){if(O.tag===7){n(x,O.sibling),m=i(O,v.props.children),m.return=x,x=m;break e}}else if(O.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_r&&eg(C)===O.type){n(x,O.sibling),m=i(O,v.props),m.ref=Yo(x,O,v),m.return=x,x=m;break e}n(x,O);break}else t(x,O);O=O.sibling}v.type===Mi?(m=pi(v.props.children,x.mode,S,v.key),m.return=x,x=m):(S=el(v.type,v.key,v.props,null,x.mode,S),S.ref=Yo(x,m,v),S.return=x,x=S)}return a(x);case $i:e:{for(O=v.key;m!==null;){if(m.key===O)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=ed(v,x.mode,S),m.return=x,x=m}return a(x);case _r:return O=v._init,j(x,m,O(v._payload),S)}if(Xo(v))return y(x,m,v,S);if(zo(v))return w(x,m,v,S);Ta(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=Xu(v,x.mode,S),m.return=x,x=m),a(x)):n(x,m)}return j}var uo=qx(!0),Qx=qx(!1),ta={},Vn=Xr(ta),Ls=Xr(ta),$s=Xr(ta);function ui(e){if(e===ta)throw Error($(174));return e}function Dh(e,t){switch($e($s,t),$e(Ls,e),$e(Vn,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ad(t,e)}Ae(Vn),$e(Vn,t)}function fo(){Ae(Vn),Ae(Ls),Ae($s)}function Kx(e){ui($s.current);var t=ui(Vn.current),n=Ad(t,e.type);t!==n&&($e(Ls,e),$e(Vn,n))}function Nh(e){Ls.current===e&&(Ae(Vn),Ae(Ls))}var We=Xr(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gu=[];function Lh(){for(var e=0;e<Gu.length;e++)Gu[e]._workInProgressVersionPrimary=null;Gu.length=0}var Qa=yr.ReactCurrentDispatcher,qu=yr.ReactCurrentBatchConfig,bi=0,Ve=null,ot=null,ut=null,Nl=!1,cs=!1,Ms=0,n5=0;function St(){throw Error($(321))}function $h(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pn(e[n],t[n]))return!1;return!0}function Mh(e,t,n,r,i,o){if(bi=o,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qa.current=e===null||e.memoizedState===null?s5:a5,e=n(r,i),cs){o=0;do{if(cs=!1,Ms=0,25<=o)throw Error($(301));o+=1,ut=ot=null,t.updateQueue=null,Qa.current=l5,e=n(r,i)}while(cs)}if(Qa.current=Ll,t=ot!==null&&ot.next!==null,bi=0,ut=ot=Ve=null,Nl=!1,t)throw Error($(300));return e}function Rh(){var e=Ms!==0;return Ms=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ve.memoizedState=ut=e:ut=ut.next=e,ut}function dn(){if(ot===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=ut===null?Ve.memoizedState:ut.next;if(t!==null)ut=t,ot=e;else{if(e===null)throw Error($(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ut===null?Ve.memoizedState=ut=e:ut=ut.next=e}return ut}function Rs(e,t){return typeof t=="function"?t(e):t}function Qu(e){var t=dn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ot,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((bi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Ve.lanes|=d,Si|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Pn(r,t.memoizedState)||(Ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ve.lanes|=o,Si|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ku(e){var t=dn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Pn(o,t.memoizedState)||(Ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zx(){}function Jx(e,t){var n=Ve,r=dn(),i=t(),o=!Pn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ft=!0),r=r.queue,Ah(ty.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,As(9,ey.bind(null,n,r,i,t),void 0,null),ft===null)throw Error($(349));bi&30||Xx(n,t,i)}return i}function Xx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ey(e,t,n,r){t.value=n,t.getSnapshot=r,ny(t)&&ry(e)}function ty(e,t,n){return n(function(){ny(t)&&ry(e)})}function ny(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pn(e,n)}catch{return!0}}function ry(e){var t=mr(e,1);t!==null&&Tn(t,e,1,-1)}function tg(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=o5.bind(null,Ve,e),[t.memoizedState,e]}function As(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function iy(){return dn().memoizedState}function Ka(e,t,n,r){var i=zn();Ve.flags|=e,i.memoizedState=As(1|t,n,void 0,r===void 0?null:r)}function hc(e,t,n,r){var i=dn();r=r===void 0?null:r;var o=void 0;if(ot!==null){var a=ot.memoizedState;if(o=a.destroy,r!==null&&$h(r,a.deps)){i.memoizedState=As(t,n,o,r);return}}Ve.flags|=e,i.memoizedState=As(1|t,n,o,r)}function ng(e,t){return Ka(8390656,8,e,t)}function Ah(e,t){return hc(2048,8,e,t)}function oy(e,t){return hc(4,2,e,t)}function sy(e,t){return hc(4,4,e,t)}function ay(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ly(e,t,n){return n=n!=null?n.concat([e]):null,hc(4,4,ay.bind(null,t,e),n)}function Fh(){}function cy(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$h(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uy(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$h(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dy(e,t,n){return bi&21?(Pn(n,t)||(n=px(),Ve.lanes|=n,Si|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=n)}function r5(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=qu.transition;qu.transition={};try{e(!1),t()}finally{Ee=n,qu.transition=r}}function fy(){return dn().memoizedState}function i5(e,t,n){var r=Hr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hy(e))py(t,n);else if(n=Wx(e,t,n,r),n!==null){var i=It();Tn(n,e,r,i),my(n,t,r)}}function o5(e,t,n){var r=Hr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hy(e))py(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Pn(l,a)){var c=t.interleaved;c===null?(i.next=i,Ph(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Wx(e,t,i,r),n!==null&&(i=It(),Tn(n,e,r,i),my(n,t,r))}}function hy(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function py(e,t){cs=Nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function my(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gh(e,n)}}var Ll={readContext:un,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},s5={readContext:un,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:ng,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4194308,4,ay.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ka(4,2,e,t)},useMemo:function(e,t){var n=zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i5.bind(null,Ve,e),[r.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:tg,useDebugValue:Fh,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=tg(!1),t=e[0];return e=r5.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ve,i=zn();if(Be){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ft===null)throw Error($(349));bi&30||Xx(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ng(ty.bind(null,r,o,e),[e]),r.flags|=2048,As(9,ey.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zn(),t=ft.identifierPrefix;if(Be){var n=sr,r=or;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ms++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a5={readContext:un,useCallback:cy,useContext:un,useEffect:Ah,useImperativeHandle:ly,useInsertionEffect:oy,useLayoutEffect:sy,useMemo:uy,useReducer:Qu,useRef:iy,useState:function(){return Qu(Rs)},useDebugValue:Fh,useDeferredValue:function(e){var t=dn();return dy(t,ot.memoizedState,e)},useTransition:function(){var e=Qu(Rs)[0],t=dn().memoizedState;return[e,t]},useMutableSource:Zx,useSyncExternalStore:Jx,useId:fy,unstable_isNewReconciler:!1},l5={readContext:un,useCallback:cy,useContext:un,useEffect:Ah,useImperativeHandle:ly,useInsertionEffect:oy,useLayoutEffect:sy,useMemo:uy,useReducer:Ku,useRef:iy,useState:function(){return Ku(Rs)},useDebugValue:Fh,useDeferredValue:function(e){var t=dn();return ot===null?t.memoizedState=e:dy(t,ot.memoizedState,e)},useTransition:function(){var e=Ku(Rs)[0],t=dn().memoizedState;return[e,t]},useMutableSource:Zx,useSyncExternalStore:Jx,useId:fy,unstable_isNewReconciler:!1};function ho(e,t){try{var n="",r=t;do n+=Mb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c5=typeof WeakMap=="function"?WeakMap:Map;function gy(e,t,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ml||(Ml=!0,yf=r),lf(e,t)},n}function xy(e,t,n){n=ur(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lf(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lf(e,t),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new c5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=j5.bind(null,e,t,n),t.then(e,e))}function ig(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function og(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ur(-1,1),t.tag=2,Ur(n,t,1))),n.lanes|=1),e)}var u5=yr.ReactCurrentOwner,Ft=!1;function Pt(e,t,n,r){t.child=e===null?Qx(t,null,n,r):uo(t,e.child,n,r)}function sg(e,t,n,r,i){n=n.render;var o=t.ref;return to(t,i),r=Mh(e,t,n,r,o,i),n=Rh(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Be&&n&&Ch(t),t.flags|=1,Pt(e,t,r,i),t.child)}function ag(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Gh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yy(e,t,o,r,i)):(e=el(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ps,n(a,r)&&e.ref===t.ref)return gr(e,t,i)}return t.flags|=1,e=Wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function yy(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ps(o,r)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ft=!0);else return t.lanes=e.lanes,gr(e,t,i)}return cf(e,t,n,r,i)}function vy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Vi,Yt),Yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(Vi,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$e(Vi,Yt),Yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$e(Vi,Yt),Yt|=r;return Pt(e,t,i,n),t.child}function wy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cf(e,t,n,r,i){var o=Ht(n)?vi:Tt.current;return o=lo(t,o),to(t,i),n=Mh(e,t,n,r,o,i),r=Rh(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Be&&r&&Ch(t),t.flags|=1,Pt(e,t,n,i),t.child)}function lg(e,t,n,r,i){if(Ht(n)){var o=!0;_l(t)}else o=!1;if(to(t,i),t.stateNode===null)Za(e,t),Gx(t,n,r),af(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Ht(n)?vi:Tt.current,u=lo(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Xm(t,a,r,u),Tr=!1;var h=t.memoizedState;a.state=h,Il(t,r,a,i),c=t.memoizedState,l!==r||h!==c||Bt.current||Tr?(typeof d=="function"&&(sf(t,n,d,r),c=t.memoizedState),(l=Tr||Jm(t,n,l,r,h,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:bn(t.type,l),a.props=u,f=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=un(c):(c=Ht(n)?vi:Tt.current,c=lo(t,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==c)&&Xm(t,a,r,c),Tr=!1,h=t.memoizedState,a.state=h,Il(t,r,a,i);var y=t.memoizedState;l!==f||h!==y||Bt.current||Tr?(typeof p=="function"&&(sf(t,n,p,r),y=t.memoizedState),(u=Tr||Jm(t,n,u,r,h,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return uf(e,t,n,r,o,i)}function uf(e,t,n,r,i,o){wy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gm(t,n,!1),gr(e,t,o);r=t.stateNode,u5.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=uo(t,e.child,null,o),t.child=uo(t,null,l,o)):Pt(e,t,l,o),t.memoizedState=r.state,i&&Gm(t,n,!0),t.child}function by(e){var t=e.stateNode;t.pendingContext?Vm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vm(e,t.context,!1),Dh(e,t.containerInfo)}function cg(e,t,n,r,i){return co(),_h(i),t.flags|=256,Pt(e,t,n,r),t.child}var df={dehydrated:null,treeContext:null,retryLane:0};function ff(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sy(e,t,n){var r=t.pendingProps,i=We.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$e(We,i&1),e===null)return rf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gc(a,r,0,null),e=pi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ff(n),t.memoizedState=df,e):zh(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return d5(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wr(l,o):(o=pi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ff(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=df,r}return o=e.child,e=o.sibling,r=Wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zh(e,t){return t=gc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ea(e,t,n,r){return r!==null&&_h(r),uo(t,e.child,null,n),e=zh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d5(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Zu(Error($(422))),Ea(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gc({mode:"visible",children:r.children},i,0,null),o=pi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&uo(t,e.child,null,a),t.child.memoizedState=ff(a),t.memoizedState=df,o);if(!(t.mode&1))return Ea(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error($(419)),r=Zu(o,r,void 0),Ea(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ft||l){if(r=ft,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,mr(e,i),Tn(r,e,i,-1))}return Vh(),r=Zu(Error($(421))),Ea(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Gt=zr(i.nextSibling),qt=t,Be=!0,Cn=null,e!==null&&(rn[on++]=or,rn[on++]=sr,rn[on++]=wi,or=e.id,sr=e.overflow,wi=t),t=zh(t,r.children),t.flags|=4096,t)}function ug(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),of(e.return,t,n)}function Ju(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pt(e,t,r.children,n),r=We.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ug(e,n,t);else if(e.tag===19)ug(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(We,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ju(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ju(t,!0,n,null,o);break;case"together":Ju(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Si|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f5(e,t,n){switch(t.tag){case 3:by(t),co();break;case 5:Kx(t);break;case 1:Ht(t.type)&&_l(t);break;case 4:Dh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$e(Ol,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($e(We,We.current&1),t.flags|=128,null):n&t.child.childLanes?Sy(e,t,n):($e(We,We.current&1),e=gr(e,t,n),e!==null?e.sibling:null);$e(We,We.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(We,We.current),r)break;return null;case 22:case 23:return t.lanes=0,vy(e,t,n)}return gr(e,t,n)}var Cy,hf,ky,_y;Cy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};ky=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ui(Vn.current);var o=null;switch(n){case"input":i=Ld(e,i),r=Ld(e,r),o=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),o=[];break;case"textarea":i=Rd(e,i),r=Rd(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cl)}Fd(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(js.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(js.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};_y=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vo(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h5(e,t,n){var r=t.pendingProps;switch(kh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(t),null;case 1:return Ht(t.type)&&kl(),jt(t),null;case 3:return r=t.stateNode,fo(),Ae(Bt),Ae(Tt),Lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Cn!==null&&(bf(Cn),Cn=null))),hf(e,t),jt(t),null;case 5:Nh(t);var i=ui($s.current);if(n=t.type,e!==null&&t.stateNode!=null)ky(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return jt(t),null}if(e=ui(Vn.current),_a(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bn]=t,r[Ns]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ts.length;i++)Me(ts[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":vm(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":bm(r,o),Me("invalid",r)}Fd(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):js.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":xa(r),wm(r,o,!0);break;case"textarea":xa(r),Sm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Cl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=X1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Bn]=t,e[Ns]=r,Cy(e,t,!1,!1),t.stateNode=e;e:{switch(a=zd(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<ts.length;i++)Me(ts[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":vm(e,r),i=Ld(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Me("invalid",e);break;case"textarea":bm(e,r),i=Rd(e,r),Me("invalid",e);break;default:i=r}Fd(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nx(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ex(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Cs(e,c):typeof c=="number"&&Cs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(js.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Me("scroll",e):c!=null&&uh(e,o,c,a))}switch(n){case"input":xa(e),wm(e,r,!1);break;case"textarea":xa(e),Sm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return jt(t),null;case 6:if(e&&t.stateNode!=null)_y(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=ui($s.current),ui(Vn.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bn]=t,(o=r.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bn]=t,t.stateNode=r}return jt(t),null;case 13:if(Ae(We),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Gt!==null&&t.mode&1&&!(t.flags&128))Hx(),co(),t.flags|=98560,o=!1;else if(o=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Bn]=t}else co(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;jt(t),o=!1}else Cn!==null&&(bf(Cn),Cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||We.current&1?st===0&&(st=3):Vh())),t.updateQueue!==null&&(t.flags|=4),jt(t),null);case 4:return fo(),hf(e,t),e===null&&Is(t.stateNode.containerInfo),jt(t),null;case 10:return Oh(t.type._context),jt(t),null;case 17:return Ht(t.type)&&kl(),jt(t),null;case 19:if(Ae(We),o=t.memoizedState,o===null)return jt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Vo(o,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Dl(e),a!==null){for(t.flags|=128,Vo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(We,We.current&1|2),t.child}e=e.sibling}o.tail!==null&&Xe()>po&&(t.flags|=128,r=!0,Vo(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Be)return jt(t),null}else 2*Xe()-o.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,Vo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=We.current,$e(We,r?n&1|2:n&1),t):(jt(t),null);case 22:case 23:return Yh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Yt&1073741824&&(jt(t),t.subtreeFlags&6&&(t.flags|=8192)):jt(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function p5(e,t){switch(kh(t),t.tag){case 1:return Ht(t.type)&&kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fo(),Ae(Bt),Ae(Tt),Lh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nh(t),null;case 13:if(Ae(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(We),null;case 4:return fo(),null;case 10:return Oh(t.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var Oa=!1,kt=!1,m5=typeof WeakSet=="function"?WeakSet:Set,G=null;function Yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(e,t,r)}else n.current=null}function pf(e,t,n){try{n()}catch(r){qe(e,t,r)}}var dg=!1;function g5(e,t){if(Kd=bl,e=Px(),jh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++d===r&&(c=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zd={focusedElem:e,selectionRange:n},bl=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?w:bn(t.type,w),j);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){qe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return y=dg,dg=!1,y}function us(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pf(t,n,o)}i=i.next}while(i!==r)}}function pc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ty(e){var t=e.alternate;t!==null&&(e.alternate=null,Ty(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bn],delete t[Ns],delete t[ef],delete t[JS],delete t[XS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ey(e){return e.tag===5||e.tag===3||e.tag===4}function fg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cl));else if(r!==4&&(e=e.child,e!==null))for(gf(e,t,n),e=e.sibling;e!==null;)gf(e,t,n),e=e.sibling}function xf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xf(e,t,n),e=e.sibling;e!==null;)xf(e,t,n),e=e.sibling}var yt=null,jn=!1;function Sr(e,t,n){for(n=n.child;n!==null;)Oy(e,t,n),n=n.sibling}function Oy(e,t,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:kt||Yi(n,t);case 6:var r=yt,i=jn;yt=null,Sr(e,t,n),yt=r,jn=i,yt!==null&&(jn?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(jn?(e=yt,n=n.stateNode,e.nodeType===8?Yu(e.parentNode,n):e.nodeType===1&&Yu(e,n),Es(e)):Yu(yt,n.stateNode));break;case 4:r=yt,i=jn,yt=n.stateNode.containerInfo,jn=!0,Sr(e,t,n),yt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&pf(n,t,a),i=i.next}while(i!==r)}Sr(e,t,n);break;case 1:if(!kt&&(Yi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){qe(n,t,l)}Sr(e,t,n);break;case 21:Sr(e,t,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Sr(e,t,n),kt=r):Sr(e,t,n);break;default:Sr(e,t,n)}}function hg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m5),t.forEach(function(r){var i=k5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,jn=!1;break e;case 3:yt=l.stateNode.containerInfo,jn=!0;break e;case 4:yt=l.stateNode.containerInfo,jn=!0;break e}l=l.return}if(yt===null)throw Error($(160));Oy(o,a,i),yt=null,jn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Py(t,e),t=t.sibling}function Py(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(t,e),An(e),r&4){try{us(3,e,e.return),pc(3,e)}catch(w){qe(e,e.return,w)}try{us(5,e,e.return)}catch(w){qe(e,e.return,w)}}break;case 1:vn(t,e),An(e),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(vn(t,e),An(e),r&512&&n!==null&&Yi(n,n.return),e.flags&32){var i=e.stateNode;try{Cs(i,"")}catch(w){qe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Z1(i,o),zd(l,a);var u=zd(l,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?nx(i,f):d==="dangerouslySetInnerHTML"?ex(i,f):d==="children"?Cs(i,f):uh(i,d,f,u)}switch(l){case"input":$d(i,o);break;case"textarea":J1(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Zi(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zi(i,!!o.multiple,o.defaultValue,!0):Zi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ns]=o}catch(w){qe(e,e.return,w)}}break;case 6:if(vn(t,e),An(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){qe(e,e.return,w)}}break;case 3:if(vn(t,e),An(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Es(t.containerInfo)}catch(w){qe(e,e.return,w)}break;case 4:vn(t,e),An(e);break;case 13:vn(t,e),An(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hh=Xe())),r&4&&hg(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(u=kt)||d,vn(t,e),kt=u):vn(t,e),An(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(h=G,p=h.child,h.tag){case 0:case 11:case 14:case 15:us(4,h,h.return);break;case 1:Yi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){qe(r,n,w)}}break;case 5:Yi(h,h.return);break;case 22:if(h.memoizedState!==null){mg(f);continue}}p!==null?(p.return=h,G=p):mg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tx("display",a))}catch(w){qe(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){qe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(t,e),An(e),r&4&&hg(e);break;case 21:break;default:vn(t,e),An(e)}}function An(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ey(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cs(i,""),r.flags&=-33);var o=fg(e);xf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=fg(e);gf(e,l,a);break;default:throw Error($(161))}}catch(c){qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x5(e,t,n){G=e,Iy(e)}function Iy(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Oa;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||kt;l=Oa;var u=kt;if(Oa=a,(kt=c)&&!u)for(G=i;G!==null;)a=G,c=a.child,a.tag===22&&a.memoizedState!==null?gg(i):c!==null?(c.return=a,G=c):gg(i);for(;o!==null;)G=o,Iy(o),o=o.sibling;G=i,Oa=l,kt=u}pg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):pg(e)}}function pg(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||pc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zm(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zm(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Es(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}kt||t.flags&512&&mf(t)}catch(h){qe(t,t.return,h)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function mg(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function gg(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pc(4,t)}catch(c){qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){qe(t,i,c)}}var o=t.return;try{mf(t)}catch(c){qe(t,o,c)}break;case 5:var a=t.return;try{mf(t)}catch(c){qe(t,a,c)}}}catch(c){qe(t,t.return,c)}if(t===e){G=null;break}var l=t.sibling;if(l!==null){l.return=t.return,G=l;break}G=t.return}}var y5=Math.ceil,$l=yr.ReactCurrentDispatcher,Uh=yr.ReactCurrentOwner,ln=yr.ReactCurrentBatchConfig,ye=0,ft=null,rt=null,vt=0,Yt=0,Vi=Xr(0),st=0,Fs=null,Si=0,mc=0,Bh=0,ds=null,At=null,Hh=0,po=1/0,tr=null,Ml=!1,yf=null,Br=null,Pa=!1,Ir=null,Rl=0,fs=0,vf=null,Ja=-1,Xa=0;function It(){return ye&6?Xe():Ja!==-1?Ja:Ja=Xe()}function Hr(e){return e.mode&1?ye&2&&vt!==0?vt&-vt:t5.transition!==null?(Xa===0&&(Xa=px()),Xa):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:bx(e.type)),e):1}function Tn(e,t,n,r){if(50<fs)throw fs=0,vf=null,Error($(185));Js(e,n,r),(!(ye&2)||e!==ft)&&(e===ft&&(!(ye&2)&&(mc|=n),st===4&&Or(e,vt)),Wt(e,r),n===1&&ye===0&&!(t.mode&1)&&(po=Xe()+500,dc&&ei()))}function Wt(e,t){var n=e.callbackNode;tS(e,t);var r=wl(e,e===ft?vt:0);if(r===0)n!==null&&km(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&km(n),t===1)e.tag===0?e5(xg.bind(null,e)):zx(xg.bind(null,e)),KS(function(){!(ye&6)&&ei()}),n=null;else{switch(mx(r)){case 1:n=mh;break;case 4:n=fx;break;case 16:n=vl;break;case 536870912:n=hx;break;default:n=vl}n=Fy(n,Dy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dy(e,t){if(Ja=-1,Xa=0,ye&6)throw Error($(327));var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var r=wl(e,e===ft?vt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var i=ye;ye|=2;var o=Ly();(ft!==e||vt!==t)&&(tr=null,po=Xe()+500,hi(e,t));do try{b5();break}catch(l){Ny(e,l)}while(1);Eh(),$l.current=o,ye=i,rt!==null?t=0:(ft=null,vt=0,t=st)}if(t!==0){if(t===2&&(i=Yd(e),i!==0&&(r=i,t=wf(e,i))),t===1)throw n=Fs,hi(e,0),Or(e,r),Wt(e,Xe()),n;if(t===6)Or(e,r);else{if(i=e.current.alternate,!(r&30)&&!v5(i)&&(t=Al(e,r),t===2&&(o=Yd(e),o!==0&&(r=o,t=wf(e,o))),t===1))throw n=Fs,hi(e,0),Or(e,r),Wt(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:oi(e,At,tr);break;case 3:if(Or(e,r),(r&130023424)===r&&(t=Hh+500-Xe(),10<t)){if(wl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){It(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xd(oi.bind(null,e,At,tr),t);break}oi(e,At,tr);break;case 4:if(Or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-_n(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y5(r/1960))-r,10<r){e.timeoutHandle=Xd(oi.bind(null,e,At,tr),r);break}oi(e,At,tr);break;case 5:oi(e,At,tr);break;default:throw Error($(329))}}}return Wt(e,Xe()),e.callbackNode===n?Dy.bind(null,e):null}function wf(e,t){var n=ds;return e.current.memoizedState.isDehydrated&&(hi(e,t).flags|=256),e=Al(e,t),e!==2&&(t=At,At=n,t!==null&&bf(t)),e}function bf(e){At===null?At=e:At.push.apply(At,e)}function v5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Or(e,t){for(t&=~Bh,t&=~mc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_n(t),r=1<<n;e[n]=-1,t&=~r}}function xg(e){if(ye&6)throw Error($(327));no();var t=wl(e,0);if(!(t&1))return Wt(e,Xe()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=Yd(e);r!==0&&(t=r,n=wf(e,r))}if(n===1)throw n=Fs,hi(e,0),Or(e,t),Wt(e,Xe()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,oi(e,At,tr),Wt(e,Xe()),null}function Wh(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(po=Xe()+500,dc&&ei())}}function ji(e){Ir!==null&&Ir.tag===0&&!(ye&6)&&no();var t=ye;ye|=1;var n=ln.transition,r=Ee;try{if(ln.transition=null,Ee=1,e)return e()}finally{Ee=r,ln.transition=n,ye=t,!(ye&6)&&ei()}}function Yh(){Yt=Vi.current,Ae(Vi)}function hi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,QS(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:fo(),Ae(Bt),Ae(Tt),Lh();break;case 5:Nh(r);break;case 4:fo();break;case 13:Ae(We);break;case 19:Ae(We);break;case 10:Oh(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(ft=e,rt=e=Wr(e.current,null),vt=Yt=t,st=0,Fs=null,Bh=mc=Si=0,At=ds=null,ci!==null){for(t=0;t<ci.length;t++)if(n=ci[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}ci=null}return e}function Ny(e,t){do{var n=rt;try{if(Eh(),Qa.current=Ll,Nl){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(bi=0,ut=ot=Ve=null,cs=!1,Ms=0,Uh.current=null,n===null||n.return===null){st=1,Fs=t,rt=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=vt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ig(a);if(p!==null){p.flags&=-257,og(p,a,l,o,t),p.mode&1&&rg(o,u,t),t=p,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){rg(o,u,t),Vh();break e}c=Error($(426))}}else if(Be&&l.mode&1){var j=ig(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),og(j,a,l,o,t),_h(ho(c,l));break e}}o=c=ho(c,l),st!==4&&(st=2),ds===null?ds=[o]:ds.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=gy(o,c,t);Km(o,x);break e;case 1:l=c;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Br===null||!Br.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=xy(o,l,t);Km(o,S);break e}}o=o.return}while(o!==null)}My(n)}catch(C){t=C,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function Ly(){var e=$l.current;return $l.current=Ll,e===null?Ll:e}function Vh(){(st===0||st===3||st===2)&&(st=4),ft===null||!(Si&268435455)&&!(mc&268435455)||Or(ft,vt)}function Al(e,t){var n=ye;ye|=2;var r=Ly();(ft!==e||vt!==t)&&(tr=null,hi(e,t));do try{w5();break}catch(i){Ny(e,i)}while(1);if(Eh(),ye=n,$l.current=r,rt!==null)throw Error($(261));return ft=null,vt=0,st}function w5(){for(;rt!==null;)$y(rt)}function b5(){for(;rt!==null&&!Vb();)$y(rt)}function $y(e){var t=Ay(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?My(e):rt=t,Uh.current=null}function My(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p5(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,rt=null;return}}else if(n=h5(n,t,Yt),n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);st===0&&(st=5)}function oi(e,t,n){var r=Ee,i=ln.transition;try{ln.transition=null,Ee=1,S5(e,t,n,r)}finally{ln.transition=i,Ee=r}return null}function S5(e,t,n,r){do no();while(Ir!==null);if(ye&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nS(e,o),e===ft&&(rt=ft=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Fy(vl,function(){return no(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ln.transition,ln.transition=null;var a=Ee;Ee=1;var l=ye;ye|=4,Uh.current=null,g5(e,n),Py(n,e),BS(Zd),bl=!!Kd,Zd=Kd=null,e.current=n,x5(n),Gb(),ye=l,Ee=a,ln.transition=o}else e.current=n;if(Pa&&(Pa=!1,Ir=e,Rl=i),o=e.pendingLanes,o===0&&(Br=null),Kb(n.stateNode),Wt(e,Xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ml)throw Ml=!1,e=yf,yf=null,e;return Rl&1&&e.tag!==0&&no(),o=e.pendingLanes,o&1?e===vf?fs++:(fs=0,vf=e):fs=0,ei(),null}function no(){if(Ir!==null){var e=mx(Rl),t=ln.transition,n=Ee;try{if(ln.transition=null,Ee=16>e?16:e,Ir===null)var r=!1;else{if(e=Ir,Ir=null,Rl=0,ye&6)throw Error($(331));var i=ye;for(ye|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:us(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var h=d.sibling,p=d.return;if(Ty(d),d===u){G=null;break}if(h!==null){h.return=p,G=h;break}G=p}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:us(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,G=x;break e}G=o.return}}var m=e.current;for(G=m;G!==null;){a=G;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,G=v;else e:for(a=m;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pc(9,l)}}catch(C){qe(l,l.return,C)}if(l===a){G=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,G=S;break e}G=l.return}}if(ye=i,ei(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(sc,e)}catch{}r=!0}return r}finally{Ee=n,ln.transition=t}}return!1}function yg(e,t,n){t=ho(n,t),t=gy(e,t,1),e=Ur(e,t,1),t=It(),e!==null&&(Js(e,1,t),Wt(e,t))}function qe(e,t,n){if(e.tag===3)yg(e,e,n);else for(;t!==null;){if(t.tag===3){yg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){e=ho(n,e),e=xy(t,e,1),t=Ur(t,e,1),e=It(),t!==null&&(Js(t,1,e),Wt(t,e));break}}t=t.return}}function j5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=It(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(vt&n)===n&&(st===4||st===3&&(vt&130023424)===vt&&500>Xe()-Hh?hi(e,0):Bh|=n),Wt(e,t)}function Ry(e,t){t===0&&(e.mode&1?(t=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):t=1);var n=It();e=mr(e,t),e!==null&&(Js(e,t,n),Wt(e,n))}function C5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ry(e,n)}function k5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Ry(e,n)}var Ay;Ay=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ft=!1,f5(e,t,n);Ft=!!(e.flags&131072)}else Ft=!1,Be&&t.flags&1048576&&Ux(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Za(e,t),e=t.pendingProps;var i=lo(t,Tt.current);to(t,n),i=Mh(null,t,r,e,i,n);var o=Rh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(r)?(o=!0,_l(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ih(t),i.updater=fc,t.stateNode=i,i._reactInternals=t,af(t,r,e,n),t=uf(null,t,r,!0,o,n)):(t.tag=0,Be&&o&&Ch(t),Pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T5(r),e=bn(r,e),i){case 0:t=cf(null,t,r,e,n);break e;case 1:t=lg(null,t,r,e,n);break e;case 11:t=sg(null,t,r,e,n);break e;case 14:t=ag(null,t,r,bn(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),cf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),lg(e,t,r,i,n);case 3:e:{if(by(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yx(e,t),Il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ho(Error($(423)),t),t=cg(e,t,r,n,i);break e}else if(r!==i){i=ho(Error($(424)),t),t=cg(e,t,r,n,i);break e}else for(Gt=zr(t.stateNode.containerInfo.firstChild),qt=t,Be=!0,Cn=null,n=Qx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){t=gr(e,t,n);break e}Pt(e,t,r,n)}t=t.child}return t;case 5:return Kx(t),e===null&&rf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Jd(r,i)?a=null:o!==null&&Jd(r,o)&&(t.flags|=32),wy(e,t),Pt(e,t,a,n),t.child;case 6:return e===null&&rf(t),null;case 13:return Sy(e,t,n);case 4:return Dh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):Pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),sg(e,t,r,i,n);case 7:return Pt(e,t,t.pendingProps,n),t.child;case 8:return Pt(e,t,t.pendingProps.children,n),t.child;case 12:return Pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,$e(Ol,r._currentValue),r._currentValue=a,o!==null)if(Pn(o.value,a)){if(o.children===i.children&&!Bt.current){t=gr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=ur(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),of(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error($(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),of(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,to(t,n),i=un(i),r=r(i),t.flags|=1,Pt(e,t,r,n),t.child;case 14:return r=t.type,i=bn(r,t.pendingProps),i=bn(r.type,i),ag(e,t,r,i,n);case 15:return yy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bn(r,i),Za(e,t),t.tag=1,Ht(r)?(e=!0,_l(t)):e=!1,to(t,n),Gx(t,r,i),af(t,r,i,n),uf(null,t,r,!0,e,n);case 19:return jy(e,t,n);case 22:return vy(e,t,n)}throw Error($(156,t.tag))};function Fy(e,t){return dx(e,t)}function _5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,r){return new _5(e,t,n,r)}function Gh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T5(e){if(typeof e=="function")return Gh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fh)return 11;if(e===hh)return 14}return 2}function Wr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Gh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mi:return pi(n.children,i,o,t);case dh:a=8,i|=8;break;case Pd:return e=an(12,n,t,i|2),e.elementType=Pd,e.lanes=o,e;case Id:return e=an(13,n,t,i),e.elementType=Id,e.lanes=o,e;case Dd:return e=an(19,n,t,i),e.elementType=Dd,e.lanes=o,e;case q1:return gc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V1:a=10;break e;case G1:a=9;break e;case fh:a=11;break e;case hh:a=14;break e;case _r:a=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=an(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=an(7,e,r,t),e.lanes=n,e}function gc(e,t,n,r){return e=an(22,e,r,t),e.elementType=q1,e.lanes=n,e.stateNode={isHidden:!1},e}function Xu(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function ed(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qh(e,t,n,r,i,o,a,l,c){return e=new E5(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=an(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ih(o),e}function O5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zy(e){if(!e)return Zr;e=e._reactInternals;e:{if(Ei(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Ht(n))return Fx(e,n,t)}return t}function Uy(e,t,n,r,i,o,a,l,c){return e=qh(n,r,!0,e,i,o,a,l,c),e.context=zy(null),n=e.current,r=It(),i=Hr(n),o=ur(r,i),o.callback=t??null,Ur(n,o,i),e.current.lanes=i,Js(e,i,r),Wt(e,r),e}function xc(e,t,n,r){var i=t.current,o=It(),a=Hr(i);return n=zy(n),t.context===null?t.context=n:t.pendingContext=n,t=ur(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ur(i,t,a),e!==null&&(Tn(e,i,a,o),qa(e,i,a)),a}function Fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qh(e,t){vg(e,t),(e=e.alternate)&&vg(e,t)}function P5(){return null}var By=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kh(e){this._internalRoot=e}yc.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));xc(e,t,null,null)};yc.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ji(function(){xc(null,e,null,null)}),t[pr]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=yx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Er.length&&t!==0&&t<Er[n].priority;n++);Er.splice(n,0,e),n===0&&wx(e)}};function Zh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wg(){}function I5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fl(a);o.call(u)}}var a=Uy(t,r,e,0,null,!1,!1,"",wg);return e._reactRootContainer=a,e[pr]=a.current,Is(e.nodeType===8?e.parentNode:e),ji(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fl(c);l.call(u)}}var c=qh(e,0,!1,null,null,!1,!1,"",wg);return e._reactRootContainer=c,e[pr]=c.current,Is(e.nodeType===8?e.parentNode:e),ji(function(){xc(t,c,n,r)}),c}function wc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Fl(a);l.call(c)}}xc(t,a,e,i)}else a=I5(n,t,e,i,r);return Fl(a)}gx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=es(t.pendingLanes);n!==0&&(gh(t,n|1),Wt(t,Xe()),!(ye&6)&&(po=Xe()+500,ei()))}break;case 13:ji(function(){var r=mr(e,1);if(r!==null){var i=It();Tn(r,e,1,i)}}),Qh(e,1)}};xh=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var n=It();Tn(t,e,134217728,n)}Qh(e,134217728)}};xx=function(e){if(e.tag===13){var t=Hr(e),n=mr(e,t);if(n!==null){var r=It();Tn(n,e,t,r)}Qh(e,t)}};yx=function(){return Ee};vx=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};Bd=function(e,t,n){switch(t){case"input":if($d(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uc(r);if(!i)throw Error($(90));K1(r),$d(r,i)}}}break;case"textarea":J1(e,n);break;case"select":t=n.value,t!=null&&Zi(e,!!n.multiple,t,!1)}};ox=Wh;sx=ji;var D5={usingClientEntryPoint:!1,Events:[ea,zi,uc,rx,ix,Wh]},Go={findFiberByHostInstance:li,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N5={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cx(e),e===null?null:e.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||P5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{sc=Ia.inject(N5),Yn=Ia}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D5;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(t))throw Error($(200));return O5(e,t,null,n)};Zt.createRoot=function(e,t){if(!Zh(e))throw Error($(299));var n=!1,r="",i=By;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qh(e,1,!1,null,null,n,!1,r,i),e[pr]=t.current,Is(e.nodeType===8?e.parentNode:e),new Kh(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=cx(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return ji(e)};Zt.hydrate=function(e,t,n){if(!vc(t))throw Error($(200));return wc(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!Zh(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=By;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Uy(t,null,e,1,n??null,i,!1,o,a),e[pr]=t.current,Is(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yc(t)};Zt.render=function(e,t,n){if(!vc(t))throw Error($(200));return wc(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!vc(e))throw Error($(40));return e._reactRootContainer?(ji(function(){wc(null,null,e,!1,function(){e._reactRootContainer=null,e[pr]=null})}),!0):!1};Zt.unstable_batchedUpdates=Wh;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vc(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return wc(e,t,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";function Hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy)}catch(e){console.error(e)}}Hy(),U1.exports=Zt;var Wy=U1.exports,bg=Wy;Ed.createRoot=bg.createRoot,Ed.hydrateRoot=bg.hydrateRoot;/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zs.apply(this,arguments)}var Dr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dr||(Dr={}));const Sg="popstate";function L5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Sf("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zl(i)}return M5(t,n,null,e)}function it(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $5(){return Math.random().toString(36).substr(2,8)}function jg(e,t){return{usr:e.state,key:e.key,idx:t}}function Sf(e,t,n,r){return n===void 0&&(n=null),zs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Oo(t):t,{state:n,key:t&&t.key||r||$5()})}function zl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Oo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Dr.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(zs({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=Dr.Pop;let j=d(),x=j==null?null:j-u;u=j,c&&c({action:l,location:w.location,delta:x})}function h(j,x){l=Dr.Push;let m=Sf(w.location,j,x);n&&n(m,j),u=d()+1;let v=jg(m,u),S=w.createHref(m);try{a.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&c&&c({action:l,location:w.location,delta:1})}function p(j,x){l=Dr.Replace;let m=Sf(w.location,j,x);n&&n(m,j),u=d();let v=jg(m,u),S=w.createHref(m);a.replaceState(v,"",S),o&&c&&c({action:l,location:w.location,delta:0})}function y(j){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:zl(j);return it(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let w={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sg,f),c=j,()=>{i.removeEventListener(Sg,f),c=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let x=y(j);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:p,go(j){return a.go(j)}};return w}var Cg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cg||(Cg={}));function R5(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Oo(t):t,i=Xh(r.pathname||"/",n);if(i==null)return null;let o=Yy(e);A5(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=G5(o[l],K5(i));return a}function Yy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(it(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Yr([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(it(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yy(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Y5(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Vy(o.path))i(o,a,c)}),t}function Vy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Vy(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function A5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:V5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F5=/^:\w+$/,z5=3,U5=2,B5=1,H5=10,W5=-2,kg=e=>e==="*";function Y5(e,t){let n=e.split("/"),r=n.length;return n.some(kg)&&(r+=W5),t&&(r+=U5),n.filter(i=>!kg(i)).reduce((i,o)=>i+(F5.test(o)?z5:o===""?B5:H5),r)}function V5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G5(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],c=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=q5({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=l.route;o.push({params:r,pathname:Yr([i,d.pathname]),pathnameBase:e4(Yr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Yr([i,d.pathnameBase]))}return o}function q5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let h=l[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=Z5(l[f]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Q5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function K5(e){try{return decodeURI(e)}catch(t){return Jh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z5(e,t){try{return decodeURIComponent(e)}catch(n){return Jh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function J5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Oo(e):e;return{pathname:n?n.startsWith("/")?n:X5(n,t):t,search:t4(r),hash:n4(i)}}function X5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function td(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Oo(e):(i=zs({},e),it(!i.pathname||!i.pathname.includes("?"),td("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),td("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),td("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=J5(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Yr=e=>e.join("/").replace(/\/\/+/g,"/"),e4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function r4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qy=["post","put","patch","delete"];new Set(Qy);const i4=["get",...Qy];new Set(i4);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}const ep=g.createContext(null),o4=g.createContext(null),Po=g.createContext(null),bc=g.createContext(null),Oi=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Ky=g.createContext(null);function s4(e,t){let{relative:n}=t===void 0?{}:t;na()||it(!1);let{basename:r,navigator:i}=g.useContext(Po),{hash:o,pathname:a,search:l}=Jy(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Yr([r,a])),i.createHref({pathname:c,search:l,hash:o})}function na(){return g.useContext(bc)!=null}function $t(){return na()||it(!1),g.useContext(bc).location}function Zy(e){g.useContext(Po).static||g.useLayoutEffect(e)}function me(){let{isDataRoute:e}=g.useContext(Oi);return e?v4():a4()}function a4(){na()||it(!1);let e=g.useContext(ep),{basename:t,navigator:n}=g.useContext(Po),{matches:r}=g.useContext(Oi),{pathname:i}=$t(),o=JSON.stringify(Gy(r).map(c=>c.pathnameBase)),a=g.useRef(!1);return Zy(()=>{a.current=!0}),g.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){n.go(c);return}let d=qy(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Yr([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}function Jy(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=g.useContext(Oi),{pathname:i}=$t(),o=JSON.stringify(Gy(r).map(a=>a.pathnameBase));return g.useMemo(()=>qy(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function l4(e,t){return c4(e,t)}function c4(e,t,n){na()||it(!1);let{navigator:r}=g.useContext(Po),{matches:i}=g.useContext(Oi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=$t(),u;if(t){var d;let w=typeof t=="string"?Oo(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||it(!1),u=w}else u=c;let f=u.pathname||"/",h=l==="/"?f:f.slice(l.length)||"/",p=R5(e,{pathname:h}),y=p4(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Yr([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Yr([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?g.createElement(bc.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dr.Pop}},y):y}function u4(){let e=y4(),t=r4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,o)}const d4=g.createElement(u4,null);class f4 extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?g.createElement(Oi.Provider,{value:this.props.routeContext},g.createElement(Ky.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h4(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Oi.Provider,{value:t},r)}function p4(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));l>=0||it(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,c,u)=>{let d=c.route.id?a==null?void 0:a[c.route.id]:null,f=null;n&&(f=c.route.errorElement||d4);let h=t.concat(o.slice(0,u+1)),p=()=>{let y;return d?y=f:c.route.Component?y=g.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=l,g.createElement(h4,{match:c,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?g.createElement(f4,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var jf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(jf||(jf={}));var Us;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Us||(Us={}));function m4(e){let t=g.useContext(ep);return t||it(!1),t}function g4(e){let t=g.useContext(o4);return t||it(!1),t}function x4(e){let t=g.useContext(Oi);return t||it(!1),t}function Xy(e){let t=x4(),n=t.matches[t.matches.length-1];return n.route.id||it(!1),n.route.id}function y4(){var e;let t=g.useContext(Ky),n=g4(Us.UseRouteError),r=Xy(Us.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function v4(){let{router:e}=m4(jf.UseNavigateStable),t=Xy(Us.UseNavigateStable),n=g.useRef(!1);return Zy(()=>{n.current=!0}),g.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ul({fromRouteId:t},o)))},[e,t])}function Ne(e){it(!1)}function w4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dr.Pop,navigator:o,static:a=!1}=e;na()&&it(!1);let l=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Oo(r));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:p="default"}=r,y=g.useMemo(()=>{let w=Xh(u,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:h,key:p},navigationType:i}},[l,u,d,f,h,p,i]);return y==null?null:g.createElement(Po.Provider,{value:c},g.createElement(bc.Provider,{children:n,value:y}))}function b4(e){let{children:t,location:n}=e;return l4(Cf(t),n)}var _g;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(_g||(_g={}));new Promise(()=>{});function Cf(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,i)=>{if(!g.isValidElement(r))return;let o=[...t,i];if(r.type===g.Fragment){n.push.apply(n,Cf(r.props.children,o));return}r.type!==Ne&&it(!1),!r.props.index||!r.props.children||it(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Cf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kf(){return kf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kf.apply(this,arguments)}function S4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function j4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C4(e,t){return e.button===0&&(!t||t==="_self")&&!j4(e)}const k4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],_4="startTransition",Tg=Cb[_4];function T4(e){let{basename:t,children:n,future:r,window:i}=e,o=g.useRef();o.current==null&&(o.current=L5({window:i,v5Compat:!0}));let a=o.current,[l,c]=g.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=g.useCallback(f=>{u&&Tg?Tg(()=>c(f)):c(f)},[c,u]);return g.useLayoutEffect(()=>a.listen(d),[a,d]),g.createElement(w4,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const E4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sc=g.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:d}=t,f=S4(t,k4),{basename:h}=g.useContext(Po),p,y=!1;if(typeof u=="string"&&O4.test(u)&&(p=u,E4))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Xh(v.pathname,h);v.origin===m.origin&&S!=null?u=S+v.search+v.hash:y=!0}catch{}let w=s4(u,{relative:i}),j=P4(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i});function x(m){r&&r(m),m.defaultPrevented||j(m)}return g.createElement("a",kf({},f,{href:p||w,onClick:y||o?r:x,ref:n,target:c}))});var Eg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Eg||(Eg={}));var Og;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Og||(Og={}));function P4(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=me(),c=$t(),u=Jy(e,{relative:a});return g.useCallback(d=>{if(C4(d,n)){d.preventDefault();let f=r!==void 0?r:zl(c)===zl(u);l(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[c,l,u,r,i,n,e,o,a])}const tp="/assets/tnl-logo-7ccd046a.png";var zt=function(){return zt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},zt.apply(this,arguments)};function Bs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function I4(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var D4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pg=I4(function(e){return D4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Re="-ms-",hs="-moz-",ke="-webkit-",ev="comm",jc="rule",np="decl",N4="@import",tv="@keyframes",L4="@layer",$4=Math.abs,rp=String.fromCharCode,_f=Object.assign;function M4(e,t){return dt(e,0)^45?(((t<<2^dt(e,0))<<2^dt(e,1))<<2^dt(e,2))<<2^dt(e,3):0}function nv(e){return e.trim()}function nr(e,t){return(e=t.exec(e))?e[0]:e}function de(e,t,n){return e.replace(t,n)}function tl(e,t){return e.indexOf(t)}function dt(e,t){return e.charCodeAt(t)|0}function mo(e,t,n){return e.slice(t,n)}function Un(e){return e.length}function rv(e){return e.length}function ns(e,t){return t.push(e),e}function R4(e,t){return e.map(t).join("")}function Ig(e,t){return e.filter(function(n){return!nr(n,t)})}var Cc=1,go=1,iv=0,fn=0,nt=0,Io="";function kc(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cc,column:go,length:a,return:"",siblings:l}}function kr(e,t){return _f(kc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Di(e){for(;e.root;)e=kr(e.root,{children:[e]});ns(e,e.siblings)}function A4(){return nt}function F4(){return nt=fn>0?dt(Io,--fn):0,go--,nt===10&&(go=1,Cc--),nt}function En(){return nt=fn<iv?dt(Io,fn++):0,go++,nt===10&&(go=1,Cc++),nt}function mi(){return dt(Io,fn)}function nl(){return fn}function _c(e,t){return mo(Io,e,t)}function Tf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z4(e){return Cc=go=1,iv=Un(Io=e),fn=0,[]}function U4(e){return Io="",e}function nd(e){return nv(_c(fn-1,Ef(e===91?e+2:e===40?e+1:e)))}function B4(e){for(;(nt=mi())&&nt<33;)En();return Tf(e)>2||Tf(nt)>3?"":" "}function H4(e,t){for(;--t&&En()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return _c(e,nl()+(t<6&&mi()==32&&En()==32))}function Ef(e){for(;En();)switch(nt){case e:return fn;case 34:case 39:e!==34&&e!==39&&Ef(nt);break;case 40:e===41&&Ef(e);break;case 92:En();break}return fn}function W4(e,t){for(;En()&&e+nt!==47+10;)if(e+nt===42+42&&mi()===47)break;return"/*"+_c(t,fn-1)+"*"+rp(e===47?e:En())}function Y4(e){for(;!Tf(mi());)En();return _c(e,fn)}function V4(e){return U4(rl("",null,null,null,[""],e=z4(e),0,[0],e))}function rl(e,t,n,r,i,o,a,l,c){for(var u=0,d=0,f=a,h=0,p=0,y=0,w=1,j=1,x=1,m=0,v="",S=i,C=o,O=r,k=v;j;)switch(y=m,m=En()){case 40:if(y!=108&&dt(k,f-1)==58){tl(k+=de(nd(m),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:k+=nd(m);break;case 9:case 10:case 13:case 32:k+=B4(y);break;case 92:k+=H4(nl()-1,7);continue;case 47:switch(mi()){case 42:case 47:ns(G4(W4(En(),nl()),t,n,c),c);break;default:k+="/"}break;case 123*w:l[u++]=Un(k)*x;case 125*w:case 59:case 0:switch(m){case 0:case 125:j=0;case 59+d:x==-1&&(k=de(k,/\f/g,"")),p>0&&Un(k)-f&&ns(p>32?Ng(k+";",r,n,f-1,c):Ng(de(k," ","")+";",r,n,f-2,c),c);break;case 59:k+=";";default:if(ns(O=Dg(k,t,n,u,d,i,l,v,S=[],C=[],f,o),o),m===123)if(d===0)rl(k,t,O,O,S,o,f,l,C);else switch(h===99&&dt(k,3)===110?100:h){case 100:case 108:case 109:case 115:rl(e,O,O,r&&ns(Dg(e,O,O,0,0,i,l,v,i,S=[],f,C),C),i,C,f,l,r?S:C);break;default:rl(k,O,O,O,[""],C,0,l,C)}}u=d=p=0,w=x=1,v=k="",f=a;break;case 58:f=1+Un(k),p=y;default:if(w<1){if(m==123)--w;else if(m==125&&w++==0&&F4()==125)continue}switch(k+=rp(m),m*w){case 38:x=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(Un(k)-1)*x,x=1;break;case 64:mi()===45&&(k+=nd(En())),h=mi(),d=f=Un(v=k+=Y4(nl())),m++;break;case 45:y===45&&Un(k)==2&&(w=0)}}return o}function Dg(e,t,n,r,i,o,a,l,c,u,d,f){for(var h=i-1,p=i===0?o:[""],y=rv(p),w=0,j=0,x=0;w<r;++w)for(var m=0,v=mo(e,h+1,h=$4(j=a[w])),S=e;m<y;++m)(S=nv(j>0?p[m]+" "+v:de(v,/&\f/g,p[m])))&&(c[x++]=S);return kc(e,t,n,i===0?jc:l,c,u,d,f)}function G4(e,t,n,r){return kc(e,t,n,ev,rp(A4()),mo(e,2,-2),0,r)}function Ng(e,t,n,r,i){return kc(e,t,n,np,mo(e,0,r),mo(e,r+1,-1),r,i)}function ov(e,t,n){switch(M4(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+e+e;case 4789:return hs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+hs+e+Re+e+e;case 5936:switch(dt(e,t+11)){case 114:return ke+e+Re+de(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Re+de(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Re+de(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Re+e+e;case 6165:return ke+e+Re+"flex-"+e+e;case 5187:return ke+e+de(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Re+"flex-$1$2")+e;case 5443:return ke+e+Re+"flex-item-"+de(e,/flex-|-self/g,"")+(nr(e,/flex-|baseline/)?"":Re+"grid-row-"+de(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Re+"flex-line-pack"+de(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Re+de(e,"shrink","negative")+e;case 5292:return ke+e+Re+de(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+de(e,"-grow","")+ke+e+Re+de(e,"grow","positive")+e;case 4554:return ke+de(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return de(de(de(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return de(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return de(de(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+e+e;case 4200:if(!nr(e,/flex-|baseline/))return Re+"grid-column-align"+mo(e,t)+e;break;case 2592:case 3360:return Re+de(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nr(r.props,/grid-\w+-end/)})?~tl(e+(n=n[t].value),"span")?e:Re+de(e,"-start","")+e+Re+"grid-row-span:"+(~tl(n,"span")?nr(n,/\d+/):+nr(n,/\d+/)-+nr(e,/\d+/))+";":Re+de(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nr(r.props,/grid-\w+-start/)})?e:Re+de(de(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return de(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(e)-1-t>6)switch(dt(e,t+1)){case 109:if(dt(e,t+4)!==45)break;case 102:return de(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+hs+(dt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~tl(e,"stretch")?ov(de(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return de(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return Re+i+":"+o+u+(a?Re+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(dt(e,t+6)===121)return de(e,":",":"+ke)+e;break;case 6444:switch(dt(e,dt(e,14)===45?18:11)){case 120:return de(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(dt(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Re+"$2box$3")+e;case 100:return de(e,":",":"+Re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return de(e,"scroll-","scroll-snap-")+e}return e}function Bl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function q4(e,t,n,r){switch(e.type){case L4:if(e.children.length)break;case N4:case np:return e.return=e.return||e.value;case ev:return"";case tv:return e.return=e.value+"{"+Bl(e.children,r)+"}";case jc:if(!Un(e.value=e.props.join(",")))return""}return Un(n=Bl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q4(e){var t=rv(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function K4(e){return function(t){t.root||(t=t.return)&&e(t)}}function Z4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case np:e.return=ov(e.value,e.length,n);return;case tv:return Bl([kr(e,{value:de(e.value,"@","@"+ke)})],r);case jc:if(e.length)return R4(n=e.props,function(i){switch(nr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Di(kr(e,{props:[de(i,/:(read-\w+)/,":"+hs+"$1")]})),Di(kr(e,{props:[i]})),_f(e,{props:Ig(n,r)});break;case"::placeholder":Di(kr(e,{props:[de(i,/:(plac\w+)/,":"+ke+"input-$1")]})),Di(kr(e,{props:[de(i,/:(plac\w+)/,":"+hs+"$1")]})),Di(kr(e,{props:[de(i,/:(plac\w+)/,Re+"input-$1")]})),Di(kr(e,{props:[i]})),_f(e,{props:Ig(n,r)});break}return""})}}var J4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ip=typeof window<"u"&&"HTMLElement"in window,X4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Tc=Object.freeze([]),yo=Object.freeze({});function e3(e,t,n){return n===void 0&&(n=yo),e.theme!==n.theme&&e.theme||t||n.theme}var sv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,n3=/(^-|-$)/g;function Lg(e){return e.replace(t3,"-").replace(n3,"")}var r3=/(a)(d)/gi,$g=function(e){return String.fromCharCode(e+(e>25?39:97))};function Of(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$g(t%52)+n;return($g(t%52)+n).replace(r3,"$1-$2")}var rd,Gi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},av=function(e){return Gi(5381,e)};function lv(e){return Of(av(e)>>>0)}function i3(e){return e.displayName||e.name||"Component"}function id(e){return typeof e=="string"&&!0}var cv=typeof Symbol=="function"&&Symbol.for,uv=cv?Symbol.for("react.memo"):60115,o3=cv?Symbol.for("react.forward_ref"):60112,s3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l3=((rd={})[o3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rd[uv]=dv,rd);function Mg(e){return("type"in(t=e)&&t.type.$$typeof)===uv?dv:"$$typeof"in e?l3[e.$$typeof]:s3;var t}var c3=Object.defineProperty,u3=Object.getOwnPropertyNames,Rg=Object.getOwnPropertySymbols,d3=Object.getOwnPropertyDescriptor,f3=Object.getPrototypeOf,Ag=Object.prototype;function fv(e,t,n){if(typeof t!="string"){if(Ag){var r=f3(t);r&&r!==Ag&&fv(e,r,n)}var i=u3(t);Rg&&(i=i.concat(Rg(t)));for(var o=Mg(e),a=Mg(t),l=0;l<i.length;++l){var c=i[l];if(!(c in a3||n&&n[c]||a&&c in a||o&&c in o)){var u=d3(t,c);try{c3(e,c,u)}catch{}}}}return e}function vo(e){return typeof e=="function"}function op(e){return typeof e=="object"&&"styledComponentId"in e}function di(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function If(e,t,n){if(n===void 0&&(n=!1),!n&&!Hs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=If(e[r],t[r]);else if(Hs(t))for(var r in t)e[r]=If(e[r],t[r]);return e}function sp(e,t){Object.defineProperty(e,"toString",{value:t})}function ra(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var h3=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ra(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),il=new Map,Hl=new Map,od=1,Da=function(e){if(il.has(e))return il.get(e);for(;Hl.has(od);)od++;var t=od++;return il.set(e,t),Hl.set(t,e),t},p3=function(e,t){il.set(e,t),Hl.set(t,e)},m3="style[".concat(xo,"][").concat("data-styled-version",'="').concat("6.0.4",'"]'),g3=new RegExp("^".concat(xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),x3=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},y3=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(g3);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(p3(d,u),x3(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function v3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(xo,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xo,"active"),r.setAttribute("data-styled-version","6.0.4");var a=v3();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},w3=function(){function e(t){this.element=hv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw ra(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),b3=function(){function e(t){this.element=hv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),S3=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fg=ip,j3={isServer:!ip,useCSSOMInjection:!X4},pv=function(){function e(t,n,r){t===void 0&&(t=yo),n===void 0&&(n={});var i=this;this.options=zt(zt({},j3),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ip&&Fg&&(Fg=!1,function(o){for(var a=document.querySelectorAll(m3),l=0,c=a.length;l<c;l++){var u=a[l];u&&u.getAttribute(xo)!=="active"&&(y3(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sp(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(f){var h=function(x){return Hl.get(x)}(f);if(h===void 0)return"continue";var p=o.names.get(h),y=a.getGroup(f);if(p===void 0||y.length===0)return"continue";var w="".concat(xo,".g").concat(f,'[id="').concat(h,'"]'),j="";p!==void 0&&p.forEach(function(x){x.length>0&&(j+="".concat(x,","))}),c+="".concat(y).concat(w,'{content:"').concat(j,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Da(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(zt(zt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new S3(i):r?new w3(i):new b3(i)}(this.options),new h3(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Da(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Da(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Da(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),C3=/&/g,k3=/^\s*\/\/.*$/gm;function mv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mv(n.children,t)),n})}function _3(e){var t,n,r,i=e===void 0?yo:e,o=i.options,a=o===void 0?yo:o,l=i.plugins,c=l===void 0?Tc:l,u=function(h,p,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=c.slice();d.push(function(h){h.type===jc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(C3,n).replace(r,u))}),a.prefix&&d.push(Z4),d.push(q4);var f=function(h,p,y,w){p===void 0&&(p=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var j=h.replace(k3,""),x=V4(y||p?"".concat(y," ").concat(p," { ").concat(j," }"):j);a.namespace&&(x=mv(x,a.namespace));var m=[];return Bl(x,Q4(d.concat(K4(function(v){return m.push(v)})))),m};return f.hash=c.length?c.reduce(function(h,p){return p.name||ra(15),Gi(h,p.name)},5381).toString():"",f}var T3=new pv,Df=_3(),gv=K.createContext({shouldForwardProp:void 0,styleSheet:T3,stylis:Df});gv.Consumer;K.createContext(void 0);function zg(){return g.useContext(gv)}var xv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Df);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sp(this,function(){throw ra(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Df),this.name+t.hash},e}(),E3=function(e){return e>="A"&&e<="Z"};function Ug(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;E3(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var yv=function(e){return e==null||e===!1||e===""},vv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!yv(o)&&(Array.isArray(o)&&o.isCss||vo(o)?r.push("".concat(Ug(i),":"),o,";"):Hs(o)?r.push.apply(r,Bs(Bs(["".concat(i," {")],vv(o),!1),["}"],!1)):r.push("".concat(Ug(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in J4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gi(e,t,n,r){if(yv(e))return[];if(op(e))return[".".concat(e.styledComponentId)];if(vo(e)){if(!vo(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return gi(i,t,n,r)}var o;return e instanceof xv?n?(e.inject(n,r),[e.getName(r)]):[e]:Hs(e)?vv(e):Array.isArray(e)?Array.prototype.concat.apply(Tc,e.map(function(a){return gi(a,t,n,r)})):[e.toString()]}function O3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vo(n)&&!op(n))return!1}return!0}var P3=av("6.0.4"),I3=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&O3(t),this.componentId=n,this.baseHash=Gi(P3,n),this.baseStyle=r,pv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=di(i,this.staticRulesId);else{var o=Pf(gi(this.rules,t,n,r)),a=Of(Gi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=di(i,a),this.staticRulesId=a}else{for(var c=Gi(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=Pf(gi(f,t,n,r));c=Gi(c,h),u+=h}}if(u){var p=Of(c>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=di(i,p)}}return i},e}(),wv=K.createContext(void 0);wv.Consumer;var sd={};function D3(e,t,n){var r=op(e),i=e,o=!id(e),a=t.attrs,l=a===void 0?Tc:a,c=t.componentId,u=c===void 0?function(v,S){var C=typeof v!="string"?"sc":Lg(v);sd[C]=(sd[C]||0)+1;var O="".concat(C,"-").concat(lv("6.0.4"+C+sd[C]));return S?"".concat(S,"-").concat(O):O}(t.displayName,t.parentComponentId):c,d=t.displayName;d===void 0&&function(v){return id(v)?"styled.".concat(v):"Styled(".concat(i3(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(Lg(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,p=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;p=function(v,S){return y(v,S)&&w(v,S)}}else p=y}var j=new I3(n,f,r?i.componentStyle:void 0);function x(v,S){return function(C,O,k){var P=C.attrs,R=C.componentStyle,L=C.defaultProps,q=C.foldedComponentIds,Q=C.styledComponentId,se=C.target,N=K.useContext(wv),A=zg(),J=C.shouldForwardProp||A.shouldForwardProp,_=function(z,B,X){for(var T,oe=zt(zt({},B),{className:void 0,theme:X}),U=0;U<z.length;U+=1){var De=vo(T=z[U])?T(oe):T;for(var fe in De)oe[fe]=fe==="className"?di(oe[fe],De[fe]):fe==="style"?zt(zt({},oe[fe]),De[fe]):De[fe]}return B.className&&(oe.className=di(oe.className,B.className)),oe}(P,O,e3(O,N,L)||yo),E=_.as||se,H={};for(var Y in _)_[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"||(Y==="forwardedAs"?H.as=_.forwardedAs:J&&!J(Y,E)||(H[Y]=_[Y]));var re=function(z,B){var X=zg(),T=z.generateAndInjectStyles(B,X.styleSheet,X.stylis);return T}(R,_),F=di(q,Q);return re&&(F+=" "+re),_.className&&(F+=" "+_.className),H[id(E)&&!sv.has(E)?"class":"className"]=F,H.ref=k,g.createElement(E,H)}(m,v,S)}var m=K.forwardRef(x);return m.attrs=h,m.componentStyle=j,m.shouldForwardProp=p,m.foldedComponentIds=r?di(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(S){for(var C=[],O=1;O<arguments.length;O++)C[O-1]=arguments[O];for(var k=0,P=C;k<P.length;k++)If(S,P[k],!0);return S}({},i.defaultProps,v):v}}),sp(m,function(){return".".concat(m.styledComponentId)}),o&&fv(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Bg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hg=function(e){return Object.assign(e,{isCss:!0})};function bv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vo(e)||Hs(e)){var r=e;return Hg(gi(Bg(Tc,Bs([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?gi(i):Hg(gi(Bg(i,t)))}function Nf(e,t,n){if(n===void 0&&(n=yo),!t)throw ra(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,bv.apply(void 0,Bs([i],o,!1)))};return r.attrs=function(i){return Nf(e,t,zt(zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nf(e,t,zt(zt({},n),i))},r}var Sv=function(e){return Nf(D3,e)},b=Sv;sv.forEach(function(e){b[e]=Sv(e)});function N3(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Pf(bv.apply(void 0,Bs([e],t,!1))),i=lv(r);return new xv(i,r)}const et=({strokeColor:e})=>s.jsx("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M1 11.6661L11 1.66614M11 1.66614H1M11 1.66614V11.6661",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),jv=()=>s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),Ec=()=>s.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M1 18C3.33579 15.5226 6.50702 14 10 14C13.493 14 16.6642 15.5226 19 18M14.5 5.5C14.5 7.98528 12.4853 10 10 10C7.51472 10 5.5 7.98528 5.5 5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),L3=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 512 512",children:s.jsx("path",{d:"M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"})}),$3=()=>s.jsx("svg",{width:"22",height:"16",viewBox:"0 0 22 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),M3=()=>s.jsx("svg",{height:"22",width:"22",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),R3=()=>s.jsx("svg",{width:"56",height:"44",viewBox:"0 0 56 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M12.8947 2.25694C14.4912 0.766119 16.0877 0.0207053 17.6842 0.0207053C19.2807 -0.103528 20.5702 0.331297 21.5526 1.32518C22.5351 2.19482 23.0263 3.43718 23.0263 5.05224C23.0263 6.54306 22.2281 8.03388 20.6316 9.5247C17.9298 12.3821 15.9035 14.9911 14.5526 17.3515C13.3246 19.712 12.4035 22.3831 11.7895 25.3647L10.5 20.5195C14.1842 20.5195 17.1316 21.5755 19.3421 23.6875C21.6754 25.7995 22.8421 28.6569 22.8421 32.2598C22.8421 35.7384 21.7982 38.5958 19.7105 40.832C17.7456 42.944 14.9211 44 11.2368 44C7.67544 44 4.91228 42.8198 2.94737 40.4593C0.982456 38.0988 0 34.9308 0 30.9553C0 27.3525 0.491228 23.8739 1.47368 20.5195C2.45614 17.1652 3.86842 13.9972 5.71053 11.0155C7.67544 7.90965 10.0702 4.99012 12.8947 2.25694ZM45.8684 2.25694C47.4649 0.766119 49.0614 0.0207053 50.6579 0.0207053C52.2544 -0.103528 53.5439 0.331297 54.5263 1.32518C55.5088 2.19482 56 3.43718 56 5.05224C56 6.54306 55.2018 8.03388 53.6053 9.5247C50.9035 12.3821 48.8772 14.9911 47.5263 17.3515C46.2983 19.712 45.3772 22.3831 44.7632 25.3647L43.4737 20.5195C47.1579 20.5195 50.1053 21.5755 52.3158 23.6875C54.6491 25.7995 55.8158 28.6569 55.8158 32.2598C55.8158 35.7384 54.7719 38.5958 52.6842 40.832C50.7193 42.944 47.8947 44 44.2105 44C40.6491 44 37.886 42.8198 35.9211 40.4593C33.9561 38.0988 32.9737 34.9308 32.9737 30.9553C32.9737 27.3525 33.4649 23.8739 34.4474 20.5195C35.4298 17.1652 36.8421 13.9972 38.6842 11.0155C40.6491 7.90965 43.0439 4.99012 45.8684 2.25694Z",fill:"white"})}),A3=()=>s.jsx("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M9.74294 3.09232C10.1494 3.03223 10.5686 3 11.0004 3C16.1054 3 19.4553 7.50484 20.5807 9.28682C20.7169 9.5025 20.785 9.61034 20.8231 9.77667C20.8518 9.90159 20.8517 10.0987 20.8231 10.2236C20.7849 10.3899 20.7164 10.4985 20.5792 10.7156C20.2793 11.1901 19.8222 11.8571 19.2165 12.5805M5.72432 4.71504C3.56225 6.1817 2.09445 8.21938 1.42111 9.28528C1.28428 9.50187 1.21587 9.61016 1.17774 9.77648C1.1491 9.9014 1.14909 10.0984 1.17771 10.2234C1.21583 10.3897 1.28393 10.4975 1.42013 10.7132C2.54554 12.4952 5.89541 17 11.0004 17C13.0588 17 14.8319 16.2676 16.2888 15.2766M2.00042 1L20.0004 19M8.8791 7.87868C8.3362 8.42157 8.00042 9.17157 8.00042 10C8.00042 11.6569 9.34356 13 11.0004 13C11.8288 13 12.5788 12.6642 13.1217 12.1213",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),F3=()=>s.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M12 0.833374L14.6666 3.50004M1.33331 14.1667L2.18425 11.0466C2.23976 10.8431 2.26752 10.7413 2.31013 10.6464C2.34797 10.5621 2.39446 10.482 2.44886 10.4073C2.51012 10.3232 2.58472 10.2486 2.73392 10.0994L9.62286 3.2105C9.75486 3.07849 9.82086 3.01249 9.89697 2.98776C9.96392 2.96601 10.036 2.96601 10.103 2.98776C10.1791 3.01249 10.2451 3.07849 10.3771 3.2105L12.2895 5.12292C12.4215 5.25492 12.4875 5.32093 12.5123 5.39704C12.534 5.46398 12.534 5.5361 12.5123 5.60305C12.4875 5.67916 12.4215 5.74516 12.2895 5.87716L5.40058 12.7661C5.25139 12.9153 5.17679 12.9899 5.0927 13.0512C5.01804 13.1056 4.93793 13.1521 4.85366 13.1899C4.75874 13.2325 4.65696 13.2603 4.45341 13.3158L1.33331 14.1667Z",stroke:"#4B5565","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})}),ap=({color:e})=>s.jsx("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8 1.5V15.5M1 8.5H15",stroke:e||"#475467","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),z3=()=>s.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M10.7074 1.53647C6.38458 1.93621 2.99999 5.57285 2.99999 10C2.99999 10.95 3.15584 11.8636 3.44336 12.7166C3.55156 13.0376 3.60566 13.1981 3.61542 13.3214C3.62506 13.4432 3.61777 13.5286 3.58764 13.6469C3.55714 13.7668 3.48979 13.8915 3.35508 14.1408L1.71943 17.1684C1.48612 17.6002 1.36946 17.8161 1.39557 17.9828C1.41831 18.1279 1.50374 18.2557 1.62917 18.3322C1.77317 18.4201 2.01729 18.3948 2.50553 18.3444L7.62655 17.815C7.78157 17.799 7.85919 17.791 7.92985 17.7937C7.99936 17.7963 8.04844 17.8029 8.11622 17.8185C8.18514 17.8344 8.27181 17.8678 8.44515 17.9345C9.3932 18.2998 10.4232 18.5 11.5 18.5C15.9308 18.5 19.5698 15.1098 19.9645 10.7819M19.1213 2.37868C20.2929 3.55025 20.2929 5.44975 19.1213 6.62132C17.9497 7.79289 16.0502 7.79289 14.8787 6.62132C13.7071 5.44975 13.7071 3.55025 14.8787 2.37868C16.0502 1.20711 17.9497 1.20711 19.1213 2.37868Z",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),U3=()=>s.jsx("svg",{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M21.46 2.5C20.69 2.85 19.86 3.08 19 3.19C19.88 2.66 20.56 1.82 20.88 0.81C20.05 1.31 19.13 1.66 18.16 1.86C17.37 1 16.26 0.5 15 0.5C12.65 0.5 10.73 2.42 10.73 4.79C10.73 5.13 10.77 5.46 10.84 5.77C7.28004 5.59 4.11004 3.88 2.00004 1.29C1.63004 1.92 1.42004 2.66 1.42004 3.44C1.42004 4.93 2.17004 6.25 3.33004 7C2.62004 7 1.96004 6.8 1.38004 6.5V6.53C1.38004 8.61 2.86004 10.35 4.82004 10.74C4.19077 10.9122 3.53013 10.9362 2.89004 10.81C3.16165 11.6625 3.69358 12.4084 4.41106 12.9429C5.12854 13.4775 5.99549 13.7737 6.89004 13.79C5.37367 14.9904 3.49404 15.6393 1.56004 15.63C1.22004 15.63 0.880039 15.61 0.540039 15.57C2.44004 16.79 4.70004 17.5 7.12004 17.5C15 17.5 19.33 10.96 19.33 5.29C19.33 5.1 19.33 4.92 19.32 4.73C20.16 4.13 20.88 3.37 21.46 2.5Z",fill:"#FFFFFF"})}),B3=()=>s.jsx("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.8 0.5H14.2C17.4 0.5 20 3.1 20 6.3V14.7C20 16.2383 19.3889 17.7135 18.3012 18.8012C17.2135 19.8889 15.7383 20.5 14.2 20.5H5.8C2.6 20.5 0 17.9 0 14.7V6.3C0 4.76174 0.61107 3.28649 1.69878 2.19878C2.78649 1.11107 4.26174 0.5 5.8 0.5ZM5.6 2.5C4.64522 2.5 3.72955 2.87928 3.05442 3.55442C2.37928 4.22955 2 5.14522 2 6.1V14.9C2 16.89 3.61 18.5 5.6 18.5H14.4C15.3548 18.5 16.2705 18.1207 16.9456 17.4456C17.6207 16.7705 18 15.8548 18 14.9V6.1C18 4.11 16.39 2.5 14.4 2.5H5.6ZM15.25 4C15.5815 4 15.8995 4.1317 16.1339 4.36612C16.3683 4.60054 16.5 4.91848 16.5 5.25C16.5 5.58152 16.3683 5.89946 16.1339 6.13388C15.8995 6.3683 15.5815 6.5 15.25 6.5C14.9185 6.5 14.6005 6.3683 14.3661 6.13388C14.1317 5.89946 14 5.58152 14 5.25C14 4.91848 14.1317 4.60054 14.3661 4.36612C14.6005 4.1317 14.9185 4 15.25 4ZM10 5.5C11.3261 5.5 12.5979 6.02678 13.5355 6.96447C14.4732 7.90215 15 9.17392 15 10.5C15 11.8261 14.4732 13.0979 13.5355 14.0355C12.5979 14.9732 11.3261 15.5 10 15.5C8.67392 15.5 7.40215 14.9732 6.46447 14.0355C5.52678 13.0979 5 11.8261 5 10.5C5 9.17392 5.52678 7.90215 6.46447 6.96447C7.40215 6.02678 8.67392 5.5 10 5.5ZM10 7.5C9.20435 7.5 8.44129 7.81607 7.87868 8.37868C7.31607 8.94129 7 9.70435 7 10.5C7 11.2956 7.31607 12.0587 7.87868 12.6213C8.44129 13.1839 9.20435 13.5 10 13.5C10.7956 13.5 11.5587 13.1839 12.1213 12.6213C12.6839 12.0587 13 11.2956 13 10.5C13 9.70435 12.6839 8.94129 12.1213 8.37868C11.5587 7.81607 10.7956 7.5 10 7.5Z",fill:"#FFFFFF"})}),H3=()=>s.jsx("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M20 10.5C20 4.98 15.52 0.5 10 0.5C4.48 0.5 0 4.98 0 10.5C0 15.34 3.44 19.37 8 20.3V13.5H6V10.5H8V8C8 6.07 9.57 4.5 11.5 4.5H14V7.5H12C11.45 7.5 11 7.95 11 8.5V10.5H14V13.5H11V20.45C16.05 19.95 20 15.69 20 10.5Z",fill:"#FFFFFF"})}),W3=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.4rem",viewBox:"0 0 576 512",children:s.jsx("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",fill:"#FFFFFF"})}),Y3=({color:e})=>s.jsx("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M16.5 8.33335H1.5M12.3333 1.66669V5.00002M5.66667 1.66669V5.00002M6.5 13.3334L8.16667 15L11.9167 11.25M5.5 18.3334H12.5C13.9001 18.3334 14.6002 18.3334 15.135 18.0609C15.6054 17.8212 15.9878 17.4387 16.2275 16.9683C16.5 16.4336 16.5 15.7335 16.5 14.3334V7.33335C16.5 5.93322 16.5 5.23316 16.2275 4.69838C15.9878 4.22797 15.6054 3.84552 15.135 3.60584C14.6002 3.33335 13.9001 3.33335 12.5 3.33335H5.5C4.09987 3.33335 3.3998 3.33335 2.86502 3.60584C2.39462 3.84552 2.01217 4.22797 1.77248 4.69838C1.5 5.23316 1.5 5.93322 1.5 7.33335V14.3334C1.5 15.7335 1.5 16.4336 1.77248 16.9683C2.01217 17.4387 2.39462 17.8212 2.86502 18.0609C3.3998 18.3334 4.09987 18.3334 5.5 18.3334Z",stroke:e,"stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),Lf=({color:e})=>s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M9.29709 9.297C11.2936 9.0297 12.8334 7.31967 12.8334 5.24999C12.8334 2.99483 11.0052 1.16666 8.75008 1.16666C6.6804 1.16666 4.97037 2.70646 4.70307 4.70298M4.37508 7.58332L5.25008 6.99999V10.2083M4.37508 10.2083H6.12508M9.33341 8.74999C9.33341 11.0052 7.50524 12.8333 5.25008 12.8333C2.99492 12.8333 1.16675 11.0052 1.16675 8.74999C1.16675 6.49483 2.99492 4.66666 5.25008 4.66666C7.50524 4.66666 9.33341 6.49483 9.33341 8.74999Z",stroke:e||"white","stroke-linecap":"round","stroke-linejoin":"round"})}),Oc=()=>s.jsx("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.16224 1.23906C7.19436 0.982105 7.05324 0.734732 6.8157 0.631617C6.57815 0.528502 6.30107 0.594332 6.13529 0.793269L0.926433 7.04389C0.836415 7.15187 0.745239 7.26124 0.678856 7.35735C0.616074 7.44825 0.501444 7.62697 0.497902 7.86185C0.493848 8.13075 0.613671 8.38658 0.82284 8.55561C1.00555 8.70325 1.21623 8.7296 1.32625 8.73956C1.44258 8.7501 1.58496 8.75007 1.72554 8.75004L5.33929 8.75004L4.83792 12.761C4.8058 13.018 4.94693 13.2654 5.18447 13.3685C5.42201 13.4716 5.6991 13.4058 5.86488 13.2068L11.0737 6.9562C11.1637 6.84822 11.2549 6.73885 11.3213 6.64273C11.3841 6.55184 11.4987 6.37312 11.5023 6.13824C11.5063 5.86934 11.3865 5.61351 11.1773 5.44448C10.9946 5.29683 10.7839 5.27048 10.6739 5.26052C10.5576 5.24999 10.4152 5.25001 10.2746 5.25004L6.66087 5.25004L7.16224 1.23906Z",fill:"#FFD465"})}),lp=()=>s.jsx("svg",{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M9 0.5L1 8.5M1 0.5L9 8.5",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})}),V3=()=>s.jsx("svg",{width:"660",height:"502",viewBox:"0 0 660 502",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("circle",{cx:"198.667",cy:"-14.6091",r:"516.609",fill:"#2970A4"})}),G3=()=>s.jsx("svg",{width:"660",height:"708",viewBox:"0 0 660 708",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("circle",{cx:"198.833",cy:"19.5",r:"688.5",fill:"#165481"})}),q3=()=>s.jsx("svg",{width:"21",height:"22",viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M19.1525 9.89945L10.1369 18.9151C8.08662 20.9653 4.7625 20.9653 2.71225 18.9151C0.661997 16.8648 0.661998 13.5407 2.71225 11.4904L11.7279 2.47483C13.0947 1.108 15.3108 1.108 16.6776 2.47483C18.0444 3.84167 18.0444 6.05775 16.6776 7.42458L8.01555 16.0866C7.33213 16.7701 6.22409 16.7701 5.54068 16.0866C4.85726 15.4032 4.85726 14.2952 5.54068 13.6118L13.1421 6.01037",stroke:"#564c4d","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})}),Q3=()=>s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M12.8334 7.33602H1.16669M1.16669 7.33602L7.00002 13.1694M1.16669 7.33602L7.00002 1.50269",stroke:"#4B5565","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),K3=()=>s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M9.99999 13.3334V10M9.99999 6.66669H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),cp=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 576 512",children:s.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",stroke:"#f7f036"})}),Z3=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:s.jsx("path",{d:"M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"})}),J3=({color:e})=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L19.7071 9.29289C19.9931 9.57889 20.0787 10.009 19.9239 10.3827C19.7691 10.7564 19.4045 11 19 11H16L16 20.2231C16.0001 20.3422 16.0001 20.4845 15.9899 20.6098C15.978 20.755 15.9476 20.963 15.8365 21.181C15.6927 21.4632 15.4632 21.6927 15.181 21.8365C14.963 21.9476 14.755 21.978 14.6098 21.9899C14.4845 22.0001 14.3423 22.0001 14.2232 22C12.7411 21.9993 11.2589 21.9993 9.77685 22C9.65774 22.0001 9.51549 22.0001 9.39017 21.9899C9.24495 21.978 9.03696 21.9476 8.81902 21.8365C8.53677 21.6927 8.3073 21.4632 8.16349 21.181C8.05244 20.963 8.022 20.755 8.01013 20.6098C7.99989 20.4845 7.99995 20.3423 7.99999 20.2231L8 11H5C4.59554 11 4.2309 10.7564 4.07612 10.3827C3.92134 10.009 4.0069 9.57889 4.29289 9.29289L11.2929 2.29289Z",fill:e})}),Pc=({color:e})=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2rem",viewBox:"0 0 512 512",children:s.jsx("path",{d:"M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z",fill:e||"#094067"})}),Cv=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2rem",width:"1.5rem",viewBox:"0 0 512 512",children:s.jsx("path",{d:"M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z",fill:"black"})}),X3=b.div`
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  z-index: 10;
  form {
    display: flex;
    width: 100%;
    align-items: center;
    /* column-gap: 1rem; */

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 16px 14px;
      gap: 10px;

      width: 47px;
      height: 47px;
      margin-left: 1rem;

      background: #094067;
      border-radius: 8px;

      border: 0;
      outline: none;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 750px) {
    form {
      button {
        margin-left: 0.4rem;
      }
    }
  }
`,ej=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px 14px;
  width: 100%;
  height: 52px;
  border: 1px solid #7d89b0;
  border-radius: 8px;
  background-color: #fff;
  box-sizing: border-box;

  div {
    /* border: 1px solid red; */
    height: fit-content;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
  }
  svg {
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    &:last-child {
      /* border: 1px solid red; */
      width: 18px;
      height: 18px;
      padding: 4px;
    }
  }

  input {
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 111.4%;
    color: #98a2b3;
    border: none;
    /* min-width: 340px; */

    &::placeholder {
      color: #98a2b3;
      border: 1ox solid red;
    }

    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    align-items: center;
    gap: 6px;
    input {
      /* font-size: 18px; */
      line-height: 1;
    }

    svg {
      /* border: 1px solid red; */
      width: 20px;
      height: 20px;
    }
  }
`,Ic=e=>{const t=()=>{e.closeDropdown&&(e.closeDropdown(),e.updateSearch(""))};return s.jsxs(X3,{children:[s.jsxs("form",{onSubmit:e.onEnterFunc?e.onEnterFunc:n=>n.preventDefault(),children:[s.jsxs(ej,{children:[s.jsx(jv,{}),s.jsx("input",{type:"text",placeholder:e.placeholderText,value:e.searchQuery,onChange:n=>e.updateSearch(n.target.value)}),e.closeDropdown&&e.searchQuery!=""&&s.jsx("div",{onClick:t,children:s.jsx(lp,{})})]}),e.showButton&&s.jsx("button",{type:"button",onClick:e.onEnterFunc,children:s.jsx(et,{strokeColor:"white"})})]}),e.elem]})},Dt="teachnlearn-user",tj=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],In=10,kv=[{title:"Home",link:"/"},{title:"Teach Cards",link:"/classes"},{title:"Learn Cards",link:"/requests"},{title:"Forum",link:"/forums"},{title:"Blog",link:"/blogs"},{title:"My Groups",link:"/groups"},{title:"My AI Assistant",link:"/myai"}];function Le(){const[e,t]=g.useState(),[n,r]=g.useState(e==null?void 0:e.token);g.useEffect(()=>{r(e==null?void 0:e.token)},[e]);async function i(){const l=localStorage.getItem(Dt);let c;if(l)return c=await JSON.parse(l),t(c),c;throw new Error("User session expired!!")}async function o(){const l=localStorage.getItem(Dt);let c;return l&&(c=await JSON.parse(l)),c.token}async function a(){return(await JSON.parse(localStorage.getItem(Dt)||"{}")).coins}return{localUser:e,setLocalUser:t,userToken:n,fetchLocalUserData:i,fetchLocalUserToken:o,fetchUserCredit:a}}function _v(e,t){return function(){return e.apply(t,arguments)}}const{toString:nj}=Object.prototype,{getPrototypeOf:up}=Object,Dc=(e=>t=>{const n=nj.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qn=e=>(e=e.toLowerCase(),t=>Dc(t)===e),Nc=e=>t=>typeof t===e,{isArray:Do}=Array,Ws=Nc("undefined");function rj(e){return e!==null&&!Ws(e)&&e.constructor!==null&&!Ws(e.constructor)&&cn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Tv=Qn("ArrayBuffer");function ij(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Tv(e.buffer),t}const oj=Nc("string"),cn=Nc("function"),Ev=Nc("number"),Lc=e=>e!==null&&typeof e=="object",sj=e=>e===!0||e===!1,ol=e=>{if(Dc(e)!=="object")return!1;const t=up(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},aj=Qn("Date"),lj=Qn("File"),cj=Qn("Blob"),uj=Qn("FileList"),dj=e=>Lc(e)&&cn(e.pipe),fj=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||cn(e.append)&&((t=Dc(e))==="formdata"||t==="object"&&cn(e.toString)&&e.toString()==="[object FormData]"))},hj=Qn("URLSearchParams"),pj=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ia(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Do(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function Ov(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Pv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Iv=e=>!Ws(e)&&e!==Pv;function $f(){const{caseless:e}=Iv(this)&&this||{},t={},n=(r,i)=>{const o=e&&Ov(t,i)||i;ol(t[o])&&ol(r)?t[o]=$f(t[o],r):ol(r)?t[o]=$f({},r):Do(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ia(arguments[r],n);return t}const mj=(e,t,n,{allOwnKeys:r}={})=>(ia(t,(i,o)=>{n&&cn(i)?e[o]=_v(i,n):e[o]=i},{allOwnKeys:r}),e),gj=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xj=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yj=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&up(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vj=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wj=e=>{if(!e)return null;if(Do(e))return e;let t=e.length;if(!Ev(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bj=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&up(Uint8Array)),Sj=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},jj=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Cj=Qn("HTMLFormElement"),kj=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Wg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_j=Qn("RegExp"),Dv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ia(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},Tj=e=>{Dv(e,(t,n)=>{if(cn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(cn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ej=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Do(e)?r(e):r(String(e).split(t)),n},Oj=()=>{},Pj=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ad="abcdefghijklmnopqrstuvwxyz",Yg="0123456789",Nv={DIGIT:Yg,ALPHA:ad,ALPHA_DIGIT:ad+ad.toUpperCase()+Yg},Ij=(e=16,t=Nv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Dj(e){return!!(e&&cn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nj=e=>{const t=new Array(10),n=(r,i)=>{if(Lc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Do(r)?[]:{};return ia(r,(a,l)=>{const c=n(a,i+1);!Ws(c)&&(o[l]=c)}),t[i]=void 0,o}}return r};return n(e,0)},Lj=Qn("AsyncFunction"),$j=e=>e&&(Lc(e)||cn(e))&&cn(e.then)&&cn(e.catch),I={isArray:Do,isArrayBuffer:Tv,isBuffer:rj,isFormData:fj,isArrayBufferView:ij,isString:oj,isNumber:Ev,isBoolean:sj,isObject:Lc,isPlainObject:ol,isUndefined:Ws,isDate:aj,isFile:lj,isBlob:cj,isRegExp:_j,isFunction:cn,isStream:dj,isURLSearchParams:hj,isTypedArray:bj,isFileList:uj,forEach:ia,merge:$f,extend:mj,trim:pj,stripBOM:gj,inherits:xj,toFlatObject:yj,kindOf:Dc,kindOfTest:Qn,endsWith:vj,toArray:wj,forEachEntry:Sj,matchAll:jj,isHTMLForm:Cj,hasOwnProperty:Wg,hasOwnProp:Wg,reduceDescriptors:Dv,freezeMethods:Tj,toObjectSet:Ej,toCamelCase:kj,noop:Oj,toFiniteNumber:Pj,findKey:Ov,global:Pv,isContextDefined:Iv,ALPHABET:Nv,generateString:Ij,isSpecCompliantForm:Dj,toJSONObject:Nj,isAsyncFn:Lj,isThenable:$j};function xe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}I.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Lv=xe.prototype,$v={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$v[e]={value:e}});Object.defineProperties(xe,$v);Object.defineProperty(Lv,"isAxiosError",{value:!0});xe.from=(e,t,n,r,i,o)=>{const a=Object.create(Lv);return I.toFlatObject(e,a,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),xe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const Mj=null;function Mf(e){return I.isPlainObject(e)||I.isArray(e)}function Mv(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function Vg(e,t,n){return e?e.concat(t).map(function(i,o){return i=Mv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Rj(e){return I.isArray(e)&&!e.some(Mf)}const Aj=I.toFlatObject(I,{},null,function(t){return/^is[A-Z]/.test(t)});function $c(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,j){return!I.isUndefined(j[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(I.isDate(y))return y.toISOString();if(!c&&I.isBlob(y))throw new xe("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(y)||I.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,j){let x=y;if(y&&!j&&typeof y=="object"){if(I.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(I.isArray(y)&&Rj(y)||(I.isFileList(y)||I.endsWith(w,"[]"))&&(x=I.toArray(y)))return w=Mv(w),x.forEach(function(v,S){!(I.isUndefined(v)||v===null)&&t.append(a===!0?Vg([w],S,o):a===null?w:w+"[]",u(v))}),!1}return Mf(y)?!0:(t.append(Vg(j,w,o),u(y)),!1)}const f=[],h=Object.assign(Aj,{defaultVisitor:d,convertValue:u,isVisitable:Mf});function p(y,w){if(!I.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),I.forEach(y,function(x,m){(!(I.isUndefined(x)||x===null)&&i.call(t,x,I.isString(m)?m.trim():m,w,h))===!0&&p(x,w?w.concat(m):[m])}),f.pop()}}if(!I.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Gg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function dp(e,t){this._pairs=[],e&&$c(e,this,t)}const Rv=dp.prototype;Rv.append=function(t,n){this._pairs.push([t,n])};Rv.toString=function(t){const n=t?function(r){return t.call(this,r,Gg)}:Gg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Fj(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Av(e,t,n){if(!t)return e;const r=n&&n.encode||Fj,i=n&&n.serialize;let o;if(i?o=i(t,n):o=I.isURLSearchParams(t)?t.toString():new dp(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class zj{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){I.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qg=zj,Fv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Uj=typeof URLSearchParams<"u"?URLSearchParams:dp,Bj=typeof FormData<"u"?FormData:null,Hj=typeof Blob<"u"?Blob:null,Wj=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Yj=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Wn={isBrowser:!0,classes:{URLSearchParams:Uj,FormData:Bj,Blob:Hj},isStandardBrowserEnv:Wj,isStandardBrowserWebWorkerEnv:Yj,protocols:["http","https","file","blob","url","data"]};function Vj(e,t){return $c(e,new Wn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Wn.isNode&&I.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Gj(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qj(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function zv(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),c=o>=n.length;return a=!a&&I.isArray(i)?i.length:a,c?(I.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!I.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&I.isArray(i[a])&&(i[a]=qj(i[a])),!l)}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,(r,i)=>{t(Gj(r),i,n,0)}),n}return null}const Qj={"Content-Type":void 0};function Kj(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Mc={transitional:Fv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=I.isObject(t);if(o&&I.isHTMLForm(t)&&(t=new FormData(t)),I.isFormData(t))return i&&i?JSON.stringify(zv(t)):t;if(I.isArrayBuffer(t)||I.isBuffer(t)||I.isStream(t)||I.isFile(t)||I.isBlob(t))return t;if(I.isArrayBufferView(t))return t.buffer;if(I.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vj(t,this.formSerializer).toString();if((l=I.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return $c(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Kj(t)):t}],transformResponse:[function(t){const n=this.transitional||Mc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&I.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?xe.from(l,xe.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wn.classes.FormData,Blob:Wn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};I.forEach(["delete","get","head"],function(t){Mc.headers[t]={}});I.forEach(["post","put","patch"],function(t){Mc.headers[t]=I.merge(Qj)});const fp=Mc,Zj=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jj=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Zj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qg=Symbol("internals");function qo(e){return e&&String(e).trim().toLowerCase()}function sl(e){return e===!1||e==null?e:I.isArray(e)?e.map(sl):String(e)}function Xj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const eC=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ld(e,t,n,r,i){if(I.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function tC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nC(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Rc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,c,u){const d=qo(c);if(!d)throw new Error("header name must be a non-empty string");const f=I.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||c]=sl(l))}const a=(l,c)=>I.forEach(l,(u,d)=>o(u,d,c));return I.isPlainObject(t)||t instanceof this.constructor?a(t,n):I.isString(t)&&(t=t.trim())&&!eC(t)?a(Jj(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=qo(t),t){const r=I.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Xj(i);if(I.isFunction(n))return n.call(this,i,r);if(I.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qo(t),t){const r=I.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ld(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=qo(a),a){const l=I.findKey(r,a);l&&(!n||ld(r,r[l],l,n))&&(delete r[l],i=!0)}}return I.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||ld(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return I.forEach(this,(i,o)=>{const a=I.findKey(r,o);if(a){n[a]=sl(i),delete n[o];return}const l=t?tC(o):String(o).trim();l!==o&&delete n[o],n[l]=sl(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return I.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&I.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Qg]=this[Qg]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=qo(a);r[l]||(nC(i,a),r[l]=!0)}return I.isArray(t)?t.forEach(o):o(t),this}}Rc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);I.freezeMethods(Rc.prototype);I.freezeMethods(Rc);const dr=Rc;function cd(e,t){const n=this||fp,r=t||n,i=dr.from(r.headers);let o=r.data;return I.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Uv(e){return!!(e&&e.__CANCEL__)}function oa(e,t,n){xe.call(this,e??"canceled",xe.ERR_CANCELED,t,n),this.name="CanceledError"}I.inherits(oa,xe,{__CANCEL__:!0});function rC(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new xe("Request failed with status code "+n.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const iC=Wn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,l){const c=[];c.push(n+"="+encodeURIComponent(r)),I.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),I.isString(o)&&c.push("path="+o),I.isString(a)&&c.push("domain="+a),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function oC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sC(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Bv(e,t){return e&&!oC(t)?sC(e,t):t}const aC=Wn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=I.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function lC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function cC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];a||(a=u),n[i]=c,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const p=d&&u-d;return p?Math.round(h*1e3/p):void 0}}function Kg(e,t){let n=0;const r=cC(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,c=r(l),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const uC=typeof XMLHttpRequest<"u",dC=uC&&function(e){return new Promise(function(n,r){let i=e.data;const o=dr.from(e.headers).normalize(),a=e.responseType;let l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}I.isFormData(i)&&(Wn.isStandardBrowserEnv||Wn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(p+":"+y))}const d=Bv(e.baseURL,e.url);u.open(e.method.toUpperCase(),Av(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const p=dr.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:e,request:u};rC(function(x){n(x),c()},function(x){r(x),c()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new xe("Request aborted",xe.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new xe("Network Error",xe.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Fv;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new xe(y,w.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,e,u)),u=null},Wn.isStandardBrowserEnv){const p=(e.withCredentials||aC(d))&&e.xsrfCookieName&&iC.read(e.xsrfCookieName);p&&o.set(e.xsrfHeaderName,p)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&I.forEach(o.toJSON(),function(y,w){u.setRequestHeader(w,y)}),I.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Kg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Kg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=p=>{u&&(r(!p||p.type?new oa(null,e,u):p),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const h=lC(d);if(h&&Wn.protocols.indexOf(h)===-1){r(new xe("Unsupported protocol "+h+":",xe.ERR_BAD_REQUEST,e));return}u.send(i||null)})},al={http:Mj,xhr:dC};I.forEach(al,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fC={getAdapter:e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=I.isString(n)?al[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new xe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(I.hasOwnProp(al,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!I.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:al};function ud(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oa(null,e)}function Zg(e){return ud(e),e.headers=dr.from(e.headers),e.data=cd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),fC.getAdapter(e.adapter||fp.adapter)(e).then(function(r){return ud(e),r.data=cd.call(e,e.transformResponse,r),r.headers=dr.from(r.headers),r},function(r){return Uv(r)||(ud(e),r&&r.response&&(r.response.data=cd.call(e,e.transformResponse,r.response),r.response.headers=dr.from(r.response.headers))),Promise.reject(r)})}const Jg=e=>e instanceof dr?e.toJSON():e;function wo(e,t){t=t||{};const n={};function r(u,d,f){return I.isPlainObject(u)&&I.isPlainObject(d)?I.merge.call({caseless:f},u,d):I.isPlainObject(d)?I.merge({},d):I.isArray(d)?d.slice():d}function i(u,d,f){if(I.isUndefined(d)){if(!I.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!I.isUndefined(d))return r(void 0,d)}function a(u,d){if(I.isUndefined(d)){if(!I.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>i(Jg(u),Jg(d),!0)};return I.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=c[d]||i,h=f(e[d],t[d],d);I.isUndefined(h)&&f!==l||(n[d]=h)}),n}const Hv="1.4.0",hp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Xg={};hp.transitional=function(t,n,r){function i(o,a){return"[Axios v"+Hv+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new xe(i(a," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!Xg[a]&&(Xg[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function hC(e,t,n){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],c=l===void 0||a(l,o,e);if(c!==!0)throw new xe("option "+o+" must be "+c,xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xe("Unknown option "+o,xe.ERR_BAD_OPTION)}}const Rf={assertOptions:hC,validators:hp},jr=Rf.validators;class Wl{constructor(t){this.defaults=t,this.interceptors={request:new qg,response:new qg}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=wo(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Rf.assertOptions(r,{silentJSONParsing:jr.transitional(jr.boolean),forcedJSONParsing:jr.transitional(jr.boolean),clarifyTimeoutError:jr.transitional(jr.boolean)},!1),i!=null&&(I.isFunction(i)?n.paramsSerializer={serialize:i}:Rf.assertOptions(i,{encode:jr.function,serialize:jr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a;a=o&&I.merge(o.common,o[n.method]),a&&I.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=dr.concat(a,o);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,h;if(!c){const y=[Zg.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),h=y.length,d=Promise.resolve(n);f<h;)d=d.then(y[f++],y[f++]);return d}h=l.length;let p=n;for(f=0;f<h;){const y=l[f++],w=l[f++];try{p=y(p)}catch(j){w.call(this,j);break}}try{d=Zg.call(this,p)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=wo(this.defaults,t);const n=Bv(t.baseURL,t.url);return Av(n,t.params,t.paramsSerializer)}}I.forEach(["delete","get","head","options"],function(t){Wl.prototype[t]=function(n,r){return this.request(wo(r||{},{method:t,url:n,data:(r||{}).data}))}});I.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(wo(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Wl.prototype[t]=n(),Wl.prototype[t+"Form"]=n(!0)});const ll=Wl;class pp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new oa(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pp(function(i){t=i}),cancel:t}}}const pC=pp;function mC(e){return function(n){return e.apply(null,n)}}function gC(e){return I.isObject(e)&&e.isAxiosError===!0}const Af={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Af).forEach(([e,t])=>{Af[t]=e});const xC=Af;function Wv(e){const t=new ll(e),n=_v(ll.prototype.request,t);return I.extend(n,ll.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Wv(wo(e,i))},n}const lt=Wv(fp);lt.Axios=ll;lt.CanceledError=oa;lt.CancelToken=pC;lt.isCancel=Uv;lt.VERSION=Hv;lt.toFormData=$c;lt.AxiosError=xe;lt.Cancel=lt.CanceledError;lt.all=function(t){return Promise.all(t)};lt.spread=mC;lt.isAxiosError=gC;lt.mergeConfig=wo;lt.AxiosHeaders=dr;lt.formToJSON=e=>zv(I.isHTMLForm(e)?new FormData(e):e);lt.HttpStatusCode=xC;lt.default=lt;const ee=lt;function Yv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Yv(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Nr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Yv(e))&&(r&&(r+=" "),r+=t);return r}const ps=e=>typeof e=="number"&&!isNaN(e),Ci=e=>typeof e=="string",Ut=e=>typeof e=="function",cl=e=>Ci(e)||Ut(e)?e:null,dd=e=>g.isValidElement(e)||Ci(e)||Ut(e)||ps(e);function yC(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Ac(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(a){let{children:l,position:c,preventExitTransition:u,done:d,nodeRef:f,isIn:h}=a;const p=r?`${t}--${c}`:t,y=r?`${n}--${c}`:n,w=g.useRef(0);return g.useLayoutEffect(()=>{const j=f.current,x=p.split(" "),m=v=>{v.target===f.current&&(j.dispatchEvent(new Event("d")),j.removeEventListener("animationend",m),j.removeEventListener("animationcancel",m),w.current===0&&v.type!=="animationcancel"&&j.classList.remove(...x))};j.classList.add(...x),j.addEventListener("animationend",m),j.addEventListener("animationcancel",m)},[]),g.useEffect(()=>{const j=f.current,x=()=>{j.removeEventListener("animationend",x),i?yC(j,d,o):d()};h||(u?x():(w.current=1,j.className+=` ${y}`,j.addEventListener("animationend",x)))},[h]),K.createElement(K.Fragment,null,l)}}function e0(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const tn={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Na=e=>{let{theme:t,type:n,...r}=e;return K.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},fd={info:function(e){return K.createElement(Na,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return K.createElement(Na,{...e},K.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return K.createElement(Na,{...e},K.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return K.createElement(Na,{...e},K.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return K.createElement("div",{className:"Toastify__spinner"})}};function vC(e){const[,t]=g.useReducer(p=>p+1,0),[n,r]=g.useState([]),i=g.useRef(null),o=g.useRef(new Map).current,a=p=>n.indexOf(p)!==-1,l=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:p=>o.get(p)}).current;function c(p){let{containerId:y}=p;const{limit:w}=l.props;!w||y&&l.containerId!==y||(l.count-=l.queue.length,l.queue=[])}function u(p){r(y=>p==null?[]:y.filter(w=>w!==p))}function d(){const{toastContent:p,toastProps:y,staleId:w}=l.queue.shift();h(p,y,w)}function f(p,y){let{delay:w,staleId:j,...x}=y;if(!dd(p)||function(Q){return!i.current||l.props.enableMultiContainer&&Q.containerId!==l.props.containerId||o.has(Q.toastId)&&Q.updateId==null}(x))return;const{toastId:m,updateId:v,data:S}=x,{props:C}=l,O=()=>u(m),k=v==null;k&&l.count++;const P={...C,style:C.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(x).filter(Q=>{let[se,N]=Q;return N!=null})),toastId:m,updateId:v,data:S,closeToast:O,isIn:!1,className:cl(x.className||C.toastClassName),bodyClassName:cl(x.bodyClassName||C.bodyClassName),progressClassName:cl(x.progressClassName||C.progressClassName),autoClose:!x.isLoading&&(R=x.autoClose,L=C.autoClose,R===!1||ps(R)&&R>0?R:L),deleteToast(){const Q=e0(o.get(m),"removed");o.delete(m),tn.emit(4,Q);const se=l.queue.length;if(l.count=m==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),se>0){const N=m==null?l.props.limit:1;if(se===1||N===1)l.displayedToast++,d();else{const A=N>se?se:N;l.displayedToast=A;for(let J=0;J<A;J++)d()}}else t()}};var R,L;P.iconOut=function(Q){let{theme:se,type:N,isLoading:A,icon:J}=Q,_=null;const E={theme:se,type:N};return J===!1||(Ut(J)?_=J(E):g.isValidElement(J)?_=g.cloneElement(J,E):Ci(J)||ps(J)?_=J:A?_=fd.spinner():(H=>H in fd)(N)&&(_=fd[N](E))),_}(P),Ut(x.onOpen)&&(P.onOpen=x.onOpen),Ut(x.onClose)&&(P.onClose=x.onClose),P.closeButton=C.closeButton,x.closeButton===!1||dd(x.closeButton)?P.closeButton=x.closeButton:x.closeButton===!0&&(P.closeButton=!dd(C.closeButton)||C.closeButton);let q=p;g.isValidElement(p)&&!Ci(p.type)?q=g.cloneElement(p,{closeToast:O,toastProps:P,data:S}):Ut(p)&&(q=p({closeToast:O,toastProps:P,data:S})),C.limit&&C.limit>0&&l.count>C.limit&&k?l.queue.push({toastContent:q,toastProps:P,staleId:j}):ps(w)?setTimeout(()=>{h(q,P,j)},w):h(q,P,j)}function h(p,y,w){const{toastId:j}=y;w&&o.delete(w);const x={content:p,props:y};o.set(j,x),r(m=>[...m,j].filter(v=>v!==w)),tn.emit(4,e0(x,x.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(l.containerId=e.containerId,tn.cancelEmit(3).on(0,f).on(1,p=>i.current&&u(p)).on(5,c).emit(2,l),()=>{o.clear(),tn.emit(3,l)}),[]),g.useEffect(()=>{l.props=e,l.isToastActive=a,l.displayedToast=n.length}),{getToastToRender:function(p){const y=new Map,w=Array.from(o.values());return e.newestOnTop&&w.reverse(),w.forEach(j=>{const{position:x}=j.props;y.has(x)||y.set(x,[]),y.get(x).push(j)}),Array.from(y,j=>p(j[0],j[1]))},containerRef:i,isToastActive:a}}function t0(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function n0(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function wC(e){const[t,n]=g.useState(!1),[r,i]=g.useState(!1),o=g.useRef(null),a=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=g.useRef(e),{autoClose:c,pauseOnHover:u,closeToast:d,onClick:f,closeOnClick:h}=e;function p(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",m),document.addEventListener("touchmove",x),document.addEventListener("touchend",m);const C=o.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=C.getBoundingClientRect(),C.style.transition="",a.x=t0(S.nativeEvent),a.y=n0(S.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=C.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(S){if(a.boundingRect){const{top:C,bottom:O,left:k,right:P}=a.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=k&&a.x<=P&&a.y>=C&&a.y<=O?j():w()}}function w(){n(!0)}function j(){n(!1)}function x(S){const C=o.current;a.canDrag&&C&&(a.didMove=!0,t&&j(),a.x=t0(S),a.y=n0(S),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),C.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,C.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function m(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",m);const S=o.current;if(a.canDrag&&a.didMove&&S){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return i(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}g.useEffect(()=>{l.current=e}),g.useEffect(()=>(o.current&&o.current.addEventListener("d",w,{once:!0}),Ut(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const S=l.current;Ut(S.onClose)&&S.onClose(g.isValidElement(S.children)&&S.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||j(),window.addEventListener("focus",w),window.addEventListener("blur",j)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",j))}),[e.pauseOnFocusLoss]);const v={onMouseDown:p,onTouchStart:p,onMouseUp:y,onTouchEnd:y};return c&&u&&(v.onMouseEnter=j,v.onMouseLeave=w),h&&(v.onClick=S=>{f&&f(S),a.canCloseOnClick&&d()}),{playToast:w,pauseToast:j,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:v}}function Vv(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return K.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},K.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},K.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function bC(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:a,style:l,controlledProgress:c,progress:u,rtl:d,isIn:f,theme:h}=e;const p=o||c&&u===0,y={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};c&&(y.transform=`scaleX(${u})`);const w=Nr("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),j=Ut(a)?a({rtl:d,type:i,defaultClassName:w}):Nr(w,a);return K.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:j,style:y,[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{f&&r()}})}const SC=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=wC(e),{closeButton:o,children:a,autoClose:l,onClick:c,type:u,hideProgressBar:d,closeToast:f,transition:h,position:p,className:y,style:w,bodyClassName:j,bodyStyle:x,progressClassName:m,progressStyle:v,updateId:S,role:C,progress:O,rtl:k,toastId:P,deleteToast:R,isIn:L,isLoading:q,iconOut:Q,closeOnClick:se,theme:N}=e,A=Nr("Toastify__toast",`Toastify__toast-theme--${N}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":se}),J=Ut(y)?y({rtl:k,position:p,type:u,defaultClassName:A}):Nr(A,y),_=!!O||!l,E={closeToast:f,type:u,theme:N};let H=null;return o===!1||(H=Ut(o)?o(E):g.isValidElement(o)?g.cloneElement(o,E):Vv(E)),K.createElement(h,{isIn:L,done:R,position:p,preventExitTransition:n,nodeRef:r},K.createElement("div",{id:P,onClick:c,className:J,...i,style:w,ref:r},K.createElement("div",{...L&&{role:C},className:Ut(j)?j({type:u}):Nr("Toastify__toast-body",j),style:x},Q!=null&&K.createElement("div",{className:Nr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!q})},Q),K.createElement("div",null,a)),H,K.createElement(bC,{...S&&!_?{key:`pb-${S}`}:{},rtl:k,theme:N,delay:l,isRunning:t,isIn:L,closeToast:f,hide:d,type:u,style:v,className:m,controlledProgress:_,progress:O||0})))},Fc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},jC=Ac(Fc("bounce",!0));Ac(Fc("slide",!0));Ac(Fc("zoom"));Ac(Fc("flip"));const hn=g.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=vC(e),{className:o,style:a,rtl:l,containerId:c}=e;function u(d){const f=Nr("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":l});return Ut(o)?o({position:d,rtl:l,defaultClassName:f}):Nr(f,cl(o))}return g.useEffect(()=>{t&&(t.current=r.current)},[]),K.createElement("div",{ref:r,className:"Toastify",id:c},n((d,f)=>{const h=f.length?{...a}:{...a,pointerEvents:"none"};return K.createElement("div",{className:u(d),style:h,key:`container-${d}`},f.map((p,y)=>{let{content:w,props:j}=p;return K.createElement(SC,{...j,isIn:i(j.toastId),style:{...j.style,"--nth":y+1,"--len":f.length},key:`toast-${j.key}`},w)}))}))});hn.displayName="ToastContainer",hn.defaultProps={position:"top-right",transition:jC,autoClose:5e3,closeButton:Vv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let hd,si=new Map,rs=[],CC=1;function Gv(){return""+CC++}function kC(e){return e&&(Ci(e.toastId)||ps(e.toastId))?e.toastId:Gv()}function ms(e,t){return si.size>0?tn.emit(0,e,t):rs.push({content:e,options:t}),t.toastId}function Yl(e,t){return{...t,type:t&&t.type||e,toastId:kC(t)}}function La(e){return(t,n)=>ms(t,Yl(e,n))}function D(e,t){return ms(e,Yl("default",t))}D.loading=(e,t)=>ms(e,Yl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let r,{pending:i,error:o,success:a}=t;i&&(r=Ci(i)?D.loading(i,n):D.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,f,h)=>{if(f==null)return void D.dismiss(r);const p={type:d,...l,...n,data:h},y=Ci(f)?{render:f}:f;return r?D.update(r,{...p,...y}):D(y.render,{...p,...y}),h},u=Ut(e)?e():e;return u.then(d=>c("success",a,d)).catch(d=>c("error",o,d)),u},D.success=La("success"),D.info=La("info"),D.error=La("error"),D.warning=La("warning"),D.warn=D.warning,D.dark=(e,t)=>ms(e,Yl("default",{theme:"dark",...t})),D.dismiss=e=>{si.size>0?tn.emit(1,e):rs=rs.filter(t=>e!=null&&t.options.toastId!==e)},D.clearWaitingQueue=function(e){return e===void 0&&(e={}),tn.emit(5,e)},D.isActive=e=>{let t=!1;return si.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},D.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const a=si.get(o||hd);return a&&a.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Gv()};o.toastId!==e&&(o.staleId=e);const a=o.render||i;delete o.render,ms(a,o)}},0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(tn.on(4,e),()=>{tn.off(4,e)}),D.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},tn.on(2,e=>{hd=e.containerId||e,si.set(hd,e),rs.forEach(t=>{tn.emit(0,t.content,t.options)}),rs=[]}).on(3,e=>{si.delete(e.containerId||e),si.size===0&&tn.off(0).off(1).off(5)});const ie=e=>({Authorization:`Bearer ${e}`}),ki=e=>{const t=new Date(e),n=t.getMonth(),r=t.getDate();return t.getFullYear(),tj[n]+" "+r},Dn=e=>{const n=new Date(e).getTime(),r=new Date(n),i=r.getHours();let o=r.getMinutes(),a;return o<10?a=i+":"+o+"0":a=i+":"+o,a},ve=()=>{document.body.scrollTop=document.documentElement.scrollTop=0};function bo(e,t,n,r,i,o){g.useEffect(()=>{function a(l){!n&&!i&&e.current&&!e.current.contains(l.target)?(console.log("OUTSIDE DIV"),console.log(t),t()):!n&&i&&e.current&&!e.current.contains(l.target)?(console.log(i),console.log("OUTSIDE NAV"),console.log(o),o()):n&&!i&&e.current&&!e.current.contains(l.target)&&(console.log("OUTSIDE INPUT"),console.log(r),r())}return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[e])}function mp(e){return/\S+@\S+\.\S+/.test(e)}async function r0(e){const t=await ee.get(`https://api.unsplash.com/search/photos?page=1&query=${e}&client_id=s26KY0b_ODGcUA1jZP4aqy-NPGIYX5qa-z8ZwJg49VU`),n=Math.floor(Math.random()*10);let r=t.data.results[n].urls.full;if(!r){for(let i=0;i<t.data.results.length;i++)if(t.data.results[n].urls.full){r=t.data.results[n].urls.full;break}}return r}const _C=b.div`
  display: flex;
  align-items: center;

  img {
    width: ${e=>e.imgSize||"28px"};
    height: ${e=>e.imgSize||"28px"};
    border: ${e=>`1px solid ${e.imgBorder}`};
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  span {
    cursor: pointer;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: ${e=>e.textSize?e.textSize:"20px"};
    line-height: 27px;
    color: ${e=>e.textColor};
    text-decoration: ${e=>e.hasUnderline?"underline":"none"};
  }
`,Kn=({name:e,photo:t,imgBorder:n,textColor:r,imgSize:i,textSize:o,userId:a,shouldntNavigate:l,hasUnderline:c})=>{const[u,d]=g.useState(""),{fetchLocalUserData:f}=Le();g.useEffect(()=>{f().then(y=>{d(y._id)})},[]);const h=me(),p=()=>{ve(),u==a?h("/me"):h(`/user/${a}`,{state:{userId:a}})};return s.jsxs(_C,{onClick:l?void 0:p,imgBorder:n,textColor:r,imgSize:i,textSize:o,hasUnderline:c,children:[s.jsx("img",{src:t,alt:"user-img"}),s.jsx("span",{children:e})]})},TC=b.div`
  margin: 0 6.3vw 2.5rem;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 0.5rem;
  background: #d8eefe;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`,EC=b.div`
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
`,OC=()=>{const[e,t]=g.useState("");g.useEffect(()=>{console.log(window.location.pathname),t(window.location.pathname)},[window.location.pathname]);const n=me(),r=o=>{ve(),t(o),n(o)},i=o=>o=="/"?o==e:e.includes(o);return s.jsx(TC,{children:kv.map((o,a)=>s.jsx(EC,{isActive:i(o.link),onClick:()=>r(o.link),children:s.jsx("span",{children:o.title})},a))})},te="https://coral-app-ndhml.ondigitalocean.app",ne="/api/v1",PC=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  padding: 20px 28px;
  background: #094067;
  border-radius: 61px;
  gap: 22px;
  color: white;

  @media only screen and (max-width: 1000px) {
    /* padding: 20px 22px; */
    /* font-size: 16px; */
  }

  @media only screen and (max-width: 600px) {
    /* grid-template-columns: 1fr; */
    /* gap: 16px; */
    /* font-size: 14px; */
  }
`,IC=b.span`
  position: absolute;
  cursor: pointer;
  /* border: 1px solid red; */

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
`,DC=b.label`
  /* border: 1px solid red; */
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

  @media only screen and (max-width: 400px) {
    /* width: 54px; */
    /* height: 26px; */
  }
`,NC=b.span`
  color: ${e=>e.isChecked?"#C2B9F9":"#FFFFFF"};
  transition: 0.5s;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 400px) {
    /* font-size: 14px; */
  }
`,LC=b.span`
  transition: 0.5s;
  color: ${e=>e.isChecked?"#FFFFFF":"#C2B9F9"};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 400px) {
    /* font-size: 14px; */
  }
`,$C=e=>{const[t,n]=g.useState(),{fetchLocalUserData:r}=Le();g.useEffect(()=>{r().then(a=>{n(a.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),r().then(a=>{n(a.role)})})},[]);const i={position:D.POSITION.BOTTOM_RIGHT,autoClose:1e3,pauseOnHover:!0,draggable:!0},o=async()=>{t=="learn"?(await ee.patch(`${te}${ne}/user/myMode`,{mode:"teach"},{headers:ie(e.userToken??"")}).then(({data:a})=>{const l=a.updatedUser;l.token=e.userToken,console.log(l),localStorage.setItem(Dt,JSON.stringify(l)),window.dispatchEvent(new Event("storage"))}).catch(a=>{D.error("Mode couldn't be updated",i)}),n("teach")):(await ee.patch(`${te}${ne}/user/myMode`,{mode:"learn"},{headers:ie(e.userToken??"")}).then(({data:a})=>{const l=a.updatedUser;l.token=e.userToken,localStorage.setItem(Dt,JSON.stringify(l)),window.dispatchEvent(new Event("storage"))}).catch(a=>{D.error(a.response.data.message)}),n("learn"))};return s.jsxs(PC,{children:[s.jsx(NC,{isChecked:t=="learn",children:"Teach"}),s.jsxs(DC,{children:[s.jsx("input",{type:"checkbox",checked:t=="learn",onClick:o}),s.jsx(IC,{className:"slider",isChecked:t=="learn"})]}),s.jsx(LC,{isChecked:t=="learn",children:"Learn"}),s.jsx(hn,{theme:"dark"})]})},MC=b.div`
  /* border: 1px solid red; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  box-sizing: border-box;
  padding: 1rem 0 0;
  background-color: white;
  position: absolute;
  z-index: 201;
  max-height: ${e=>e.dropDownHeight?e.dropDownHeight:"50vh"};
  overflow-y: auto;

  h3 {
    z-index: 200;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    padding: 0 1.15rem;
  }

  ul {
    /* border: 1px solid red; */
    z-index: 200;
    list-style: none;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d5d9eb;
    margin-bottom: 1rem;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0rem;
    }
  }
`,RC=b.div`
  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 10px;
  margin-bottom: 1rem;
  padding: 0.5rem 1.15rem;
  align-items: center;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #d8eefe;
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
  }

  div.details {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* border: 1px solid red; */
    /* width: 90%; */

    p {
      /* border: 1px solid red; */
      white-space: nowrap;
    }
  }

  div.user-name {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    column-gap: 8px;

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.8rem;
      color: #4a5578;
    }
  }
`,i0=b.div`
  margin-bottom: 1rem;
  padding: 0.5rem 1.15rem;
  align-items: center;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #d8eefe;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    /* border: 1px solid red; */
    padding: 0;
    font-size: 17px;
    font-weight: 500;
    line-height: 1;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 4px;

    img {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      object-fit: cover;
      /* border: 1px solid black; */
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`,qv=e=>{const t=me(),n=l=>{ve(),console.log("USER NAVIGATOR"),e.localUserId==l?t("/me"):t(`/user/${l}`,{state:{userId:l}}),e.closeSearchBox()},r=l=>{ve(),t(`/learncard-overview/${l}`,{state:{learnCardId:l,backLink:"/"}}),e.closeSearchBox()},i=l=>(console.log(e.localUserId),console.log(l),e.localUserId==l),o=l=>e.localUserClassesEnrolled.filter(u=>u.class==l).length,a=(l,c)=>{i(c)?t(`/classes/class/${l}`,{state:{classroomId:l,backPageLink:"/"}}):o(l)?t(`/classes/class/${l}`,{state:{classroomId:l,backPageLink:"/"}}):t(`/class-overviw/${l}`,{state:{classroomId:l,backPageLink:"/"}}),e.closeSearchBox()};return s.jsxs(MC,{dropDownHeight:e.dropDownHeight,children:[e.searchedUsers.length!=0&&s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"Users"}),s.jsx("ul",{children:e.searchedUsers.map((l,c)=>s.jsxs(RC,{onClick:()=>n(l._id),children:[s.jsx("img",{src:l.photo,alt:"user-img"}),s.jsxs("div",{className:"details",children:[s.jsxs("div",{className:"user-name",children:[s.jsx("h4",{children:l.name}),s.jsxs("h5",{children:["@ ",l.userName]})]}),s.jsx("p",{children:l.tagline})]})]},c))})]}),e.searchedLearnCards.length!=0&&s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"Learn Cards"}),s.jsx("ul",{children:e.searchedLearnCards.map((l,c)=>s.jsxs(i0,{onClick:()=>r(l._id),children:[s.jsx("h3",{children:l.topic.length>80?l.topic.slice(0,80)+"...":l.topic}),s.jsxs("div",{children:[s.jsx("img",{src:l.createdBy.photo,alt:"user-img"}),s.jsx("h4",{children:l.createdBy.name})]})]},c))})]}),e.searchedTeachCards.length!=0&&s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"Teach Cards"}),s.jsx("ul",{children:e.searchedTeachCards.map((l,c)=>s.jsxs(i0,{onClick:()=>a(l._id,l.createdBy._id),children:[s.jsx("h3",{children:l.topic.length>80?l.topic.slice(0,80)+"...":l.topic}),s.jsxs("div",{children:[s.jsx("img",{src:l.createdBy.photo,alt:"user-img"}),s.jsx("h4",{children:l.createdBy.name})]})]}))})]})]})};function Ff(){return Ff=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ff.apply(this,arguments)}var AC=function(t,n){switch(t){case"left":return{top:0,left:0,transform:"translate3d(-100%, 0, 0)",width:n,height:"100vh"};case"right":return{top:0,right:0,transform:"translate3d(100%, 0, 0)",width:n,height:"100vh"};case"bottom":return{left:0,right:0,bottom:0,transform:"translate3d(0, 100%, 0)",width:"100%",height:n};case"top":return{left:0,right:0,top:0,transform:"translate3d(0, -100%, 0)",width:"100%",height:n};default:return{}}},gp=function(t){var n=t.open,r=t.onClose,i=r===void 0?function(){}:r,o=t.children,a=t.style,l=t.enableOverlay,c=l===void 0?!0:l,u=t.overlayColor,d=u===void 0?"#000":u,f=t.overlayOpacity,h=f===void 0?.4:f,p=t.zIndex,y=p===void 0?100:p,w=t.duration,j=w===void 0?500:w,x=t.direction,m=t.size,v=m===void 0?250:m,S=t.className,C=t.customIdSuffix,O=t.lockBackgroundScroll,k=O===void 0?!1:O,P=g.useRef(null);g.useEffect(function(){var Q=function(){P.current=window.document.querySelector("body"),P.current&&k&&(n?P.current.style.overflow="hidden":P.current.style.overflow="")};Q()},[n]);var R=g.useMemo(function(){return C||(Math.random()+1).toString(36).substring(7)},[C]),L={backgroundColor:""+d,opacity:""+h,zIndex:y},q=Ff({zIndex:y+1,transitionDuration:j+"ms"},AC(x,v),a);return K.createElement("div",{id:"EZDrawer"+R,className:"EZDrawer"},K.createElement("input",{type:"checkbox",id:"EZDrawer__checkbox"+R,className:"EZDrawer__checkbox",onChange:i,checked:n}),K.createElement("nav",{role:"navigation",id:"EZDrawer__container"+R,style:q,className:"EZDrawer__container "+S},o),c&&K.createElement("label",{htmlFor:"EZDrawer__checkbox"+R,id:"EZDrawer__overlay"+R,className:"EZDrawer__overlay",style:L}))};const FC=b.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    display: block;
    width: 2rem;
    height: 2rem;
  }
`,zC=b.div`
  width: 100%;
  height: 100%;
  background: #d8eefe;
  padding: 1rem 0;
`,UC=b.div`
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
`,BC=()=>{const[e,t]=K.useState(!1),n=()=>{t(c=>!c)},[r,i]=g.useState("");g.useEffect(()=>{console.log(window.location.pathname),i(window.location.pathname)},[window.location.pathname]);const o=me(),a=c=>{ve(),i(c),o(c)},l=c=>c=="/"?c==r:r.includes(c);return s.jsxs(FC,{children:[s.jsx("div",{onClick:n,children:s.jsx(HC,{})}),s.jsx(gp,{open:e,onClose:n,direction:"right",className:"drawer",lockBackgroundScroll:!0,children:s.jsx(zC,{children:kv.map((c,u)=>s.jsx(UC,{isActive:l(c.link),onClick:()=>a(c.link),children:s.jsx("span",{children:c.title})},u))})})]})},HC=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",children:s.jsx("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})}),WC=b.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    width: 2.25rem;
    height: 2.25rem;
    object-fit: cover;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid black;
  }
`,YC=b.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #d8eefe;
  list-style: none;
  padding: 1rem 0;

  li {
    padding: 0.5rem 1.125rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.15s linear;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:hover {
      background-color: #094067;
    }
  }
`,VC=e=>{const[t,n]=K.useState(!1),r=()=>{n(l=>!l)},i=me(),o=l=>{ve(),i(l)},a=()=>{localStorage.clear(),i("/teachNlearn")};return s.jsxs(WC,{children:[s.jsx("div",{onClick:r,children:s.jsx("img",{src:e.img,alt:""})}),s.jsx(gp,{open:t,onClose:r,direction:"right",className:"drawer",lockBackgroundScroll:!0,children:s.jsxs(YC,{children:[s.jsxs("li",{onClick:()=>o("/me"),children:[s.jsx("span",{children:"My Profile"}),s.jsx(Ec,{})]}),s.jsxs("li",{onClick:a,children:[s.jsx("span",{children:"Signout"}),s.jsx(Cv,{})]})]})})]})},GC=b.div`
  /* border: 1px solid red; */
  display: none;

  @media only screen and (max-width: 880px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.icon {
    svg {
      display: block;
      width: 2rem;
      height: 2rem;
    }
  }
`,qC=b.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #d8eefe;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 5;
`,QC=e=>{const[t,n]=K.useState(!1),r=()=>{n(i=>!i)};return s.jsxs(GC,{children:[s.jsx("div",{className:"icon",onClick:r,children:s.jsx(jv,{})}),s.jsx(gp,{open:t,onClose:r,direction:"right",className:"drawer",lockBackgroundScroll:!0,size:"80vw",zIndex:100,children:s.jsx(qC,{children:s.jsx(Ic,{placeholderText:"Search for a request etc.",updateSearch:e.searchHandler,showButton:!1,onEnterFunc:e.searchNavigator,closeDropdown:e.closeSearchBox,searchQuery:e.searchQuery,elem:e.searchedUsers.length==0&&e.searchedLearnCards.length==0&&e.searchedTeachCards.length==0?void 0:e.localUser&&e.showDropDown?e.dontShowSearchDropDown?void 0:s.jsx(qv,{searchedUsers:e.searchedUsers,searchedLearnCards:e.searchedLearnCards,searchedTeachCards:e.searchedTeachCards,closeSearchBox:e.closeSearchBox,localUserId:e.localUser._id,localUserClassesEnrolled:e.localUser.classesEnrolled,dropDownHeight:"85vh"}):void 0})})})]})},KC=b.div`
  /* border: 1px solid red; */
  position: relative;
  padding-top: 1.75rem;
  display: grid;
  grid-template-columns: 1.8fr 6fr 2fr;
  box-sizing: border-box;
  column-gap: 2.5rem;
  align-items: center;
  font-family: "Nunito";
  margin: 0 6.3vw 2.5rem 6.3vw;

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1.6fr 6fr 0.6fr;
    column-gap: 1.8rem;
  }

  @media only screen and (max-width: 880px) {
    display: flex;
    justify-content: space-between;
  }

  div.options {
    display: flex;
    column-gap: 1rem;
  }
`,ZC=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 100%; */

  @media only screen and (max-width: 950px) {
  }

  @media only screen and (max-width: 880px) {
    display: none;
  }
`,JC=b.div`
  /* border: 1px solid red; */
  width: 200px;
  height: 80px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 950px) {
    width: 170px;
    height: 70px;
  }

  @media only screen and (max-width: 600px) {
    width: 160px;
    height: 70px;
  }
`,XC=b.div`
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

  @media only screen and (max-width: 1050px) {
    display: none;
  }
`,ek=b.div`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  top: 100%;
  box-sizing: border-box;
  padding: 1rem 0;
  background-color: white;
  /* pointer-events: ; */

  ul {
    list-style: none;

    li {
      /* border: 1px solid red; */
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 1.125rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.15s linear;

      &:hover {
        background-color: #d8eefe;
      }
    }
  }
`,tk=b.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 0 auto 2.5rem;

  @media only screen and (max-width: 700px) {
    width: 80%;
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`,tt=e=>{const[t,n]=g.useState(),[r,i]=g.useState(!1),{fetchLocalUserData:o}=Le(),[a,l]=g.useState(!1);g.useEffect(()=>{console.log("CHECKING"),o().then(q=>{n(q),l(!0)}).catch(()=>{l(!1)}),window.addEventListener("storage",()=>{o().then(q=>{n(q),l(!0)}).catch(()=>{l(!1)})})},[]);const c=me(),u=q=>{ve(),c(q)};g.useEffect(()=>{console.log(t==null?void 0:t.role)},[t]);const d=()=>{localStorage.clear(),c("/teachNlearn")},f=()=>{i(!1)},h=g.useRef(null);bo(h,f,!1,void 0,!1,void 0);const[p,y]=g.useState([]),[w,j]=g.useState([]),[x,m]=g.useState([]),[v,S]=g.useState(""),C=async q=>{if(P(!0),S(q),q===""){y([]),j([]),m([]),e.updateSearchFeedProps&&e.updateSearchFeedProps(q,[],[],[]);return}await ee.post(`${te}${ne}/user/search`,{search:q},{headers:ie((t==null?void 0:t.token)||"")}).then(({data:Q})=>{console.log(Q);const se=Q.classes,N=Q.learnCards,A=Q.users;y(A),j(N),m(se),e.updateSearchFeedProps&&e.updateSearchFeedProps(q,A,N,se)}).catch(Q=>{console.log(Q)})},O=()=>{v!=""&&(ve(),c("/search/feed",{state:{keyword:v,searchedUsers:p,searchedLearnCards:w,searchedTeachCards:x}}))},[k,P]=g.useState(!0),R=()=>{console.log("CHECK NAV DROPDOWN"),P(!1)},L=()=>{i(!r)};return a?s.jsxs(s.Fragment,{children:[s.jsxs(KC,{children:[s.jsx(JC,{onClick:()=>u("/"),children:s.jsx("img",{src:tp,alt:"tnl_logo"})}),s.jsx(ZC,{children:s.jsx(Ic,{placeholderText:"Search for a request, class, card id, topic, subject, person, course etc.",updateSearch:C,showButton:!0,onEnterFunc:O,searchQuery:v,closeDropdown:R,elem:p.length==0&&w.length==0&&x.length==0?void 0:t&&k?e.dontShowSearchDropDown?void 0:s.jsx(qv,{searchedUsers:p,searchedLearnCards:w,searchedTeachCards:x,closeSearchBox:R,localUserId:t._id,localUserClassesEnrolled:t.classesEnrolled}):void 0})}),t&&s.jsxs(XC,{onClick:L,ref:h,children:[s.jsx(Kn,{name:t.userName,photo:t.photo,imgSize:"1.75rem",textSize:"1.25em",userId:t._id,shouldntNavigate:!0}),r&&s.jsx(ek,{children:s.jsxs("ul",{children:[s.jsxs("li",{onClick:()=>u("/me"),children:[s.jsx("span",{children:"My Profile"}),s.jsx(Ec,{})]}),s.jsxs("li",{onClick:d,children:[s.jsx("span",{children:"Signout"}),s.jsx(Cv,{})]})]})})]}),s.jsxs("div",{className:"options",children:[t&&s.jsxs(s.Fragment,{children:[s.jsx(QC,{closeSearchBox:R,localUser:t,searchHandler:C,searchNavigator:O,searchedLearnCards:w,searchedTeachCards:x,searchQuery:v,searchedUsers:p,showDropDown:k,dontShowSearchDropDown:e.dontShowSearchDropDown}),s.jsx(VC,{img:t.photo})]}),s.jsx(BC,{})]})]}),s.jsx(tk,{children:t&&s.jsx($C,{role:t.role,userToken:t.token})}),s.jsx(OC,{})]}):null},nk="/assets/home-intro-img-c5a56783.png",rk=b.div`
  /* border: 1px solid pink; */
  background: #d8eefe;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;

  font-family: "Nunito";
  font-style: normal;

  @media only screen and (max-width: 750px) {
    padding: 42px;
  }
`,ik=b.div`
  /* border: 1px solid red; */
  display: grid;
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

  @media only screen and (max-width: 850px) {
    gap: 25px;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    margin-right: 0vw;
  }
`,ok=b.div`
  /* margin-bottom: 1rem; */
`,sk=b.h2`
  font-weight: 700;
  font-size: 39px;
  line-height: 121.4%;
  color: #000000;

  @media only screen and (max-width: 850px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 28px;
  }
`,ak=b.div`
  /* border: 1px solid red; */

  img {
    width: 319.57px;
    height: 235.33px;
    object-fit: contain;
  }

  @media only screen and (max-width: 1000px) {
    img {
      width: 289.57px;
      height: 215.33px;
    }
  }
  @media only screen and (max-width: 850px) {
    img {
      width: 249.57px;
      height: 185.33px;
    }
  }
  @media only screen and (max-width: 750px) {
    display: none;
  }
`,lk=b.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

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

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;

    button:first-child {
      margin-right: 0vw;
    }
  }

  @media only screen and (max-width: 850px) {
    button {
      padding: 16px 32px;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    button:first-child {
      margin-right: 3vw;
    }
  }
  @media only screen and (max-width: 620px) {
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    row-gap: 0.8rem;

    button:first-child {
      margin-right: 0vw;
    }
  }

  @media only screen and (max-width: 400px) {
    button {
      font-size: 16px;
      gap: 8px;
      padding: 16px 32px;
    }
  }
`,xp=()=>{const e=me(),t=o=>{ve(),e(o)},[n,r]=g.useState(),{fetchLocalUserData:i}=Le();return g.useEffect(()=>{i().then(o=>{r(o.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),i().then(o=>{r(o.role)})})},[]),s.jsxs(rk,{children:[s.jsxs(ik,{children:[s.jsx(ok,{children:s.jsx(sk,{children:n=="learn"?"Learn something from your peers!!":"Teach something you know!!"})}),s.jsxs(lk,{children:[s.jsxs("button",{onClick:()=>t(n=="learn"?"/classes":"/requests"),children:[s.jsx("span",{children:n=="learn"?"See all Teach Cards":"See all Learn Cards"}),s.jsx(et,{strokeColor:"white"})]}),s.jsxs("button",{className:"request",onClick:()=>t(`/create-${n}-request`),children:[s.jsxs("span",{children:["Create a ",n=="learn"?"Learn Card":"Teach Card"]}),s.jsx(et,{strokeColor:"#ffffff"})]})]})]}),s.jsx(ak,{children:s.jsx("img",{src:nk,alt:"intro-img"})})]})},ck=b.div`
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

    @media only screen and (max-width: 1000px) {
      /* border: 1px solid red; */
      li {
        span {
          font-size: 20px;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      /* border: 1px solid red; */
      li {
        span {
          font-size: 16px;
        }
      }
    }
  }
`,o0=e=>{const t=me(),n=r=>{ve(),t(r)};return s.jsxs(ck,{children:[s.jsx("h4",{children:e.heading}),s.jsx("ul",{children:e.listData.map((r,i)=>s.jsx("li",{onClick:()=>n(r.link),children:s.jsx("span",{children:r.title})},i))})]})},uk="/assets/getAppOnPlayStore-64867203.png",dk="/assets/getOnApple-fb95950d.png",fk=b.div`
  /* border-top: 1px solid #7d89b0; */
  padding: 40px 0px 20px;
  width: 100%;
  font-family: "Nunito";
  font-style: normal;
  margin-top: 4rem;
  padding: 3.75rem 6.25rem 1.5rem;
  background-color: #094067;
  box-sizing: border-box;

  @media only screen and (max-width: 1100px) {
    padding: 3.75rem 4.25rem 1.5rem;
  }
  @media only screen and (max-width: 500px) {
    padding: 3.75rem 2.25rem 1.5rem;
  }
`,hk=b.div`
  display: grid;
  grid-template-columns: 1.6fr 2.4fr 1fr;
  border-bottom: 1px solid #d0d5dd;
  padding-bottom: 2.5rem;
  align-items: flex-start;

  div.lists {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    /* border: 1px solid red; */
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    div.lists {
      /* border: 1px solid red; */
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;

      div {
        width: 50%;
      }
    }
  }
`,pk=b.div`
  /* border: 1px solid red; */
  cursor: pointer;
  img {
    width: 200px;

    @media only screen and (max-width: 1000px) {
      width: 180px;
    }
  }
`,mk=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  img {
    /* border: 1px solid red; */
    width: 150px;
    height: 60px;
    object-fit: contain;
    display: block;
    cursor: pointer;
  }

  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #d8eefe;
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 750px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    /* justify-content: space-between; */

    h5 {
      /* border: 1px solid red; */
      line-height: 1;
      margin-bottom: 0;
      margin-right: 1rem;
    }

    div {
      display: flex;
      column-gap: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    h5 {
      margin-bottom: 0.8rem;
    }
  }

  @media only screen and (max-width: 400px) {
    img {
      width: 120px;
      height: 50px;
    }
  }
`,gk=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 10px;

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #d8eefe;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.4rem;
  }
`,xk=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.4rem;

  svg {
    cursor: pointer;
  }
`,yk=[{title:"About Us",link:"/about"},{title:"Contact",link:"/contact"}],vk=[{title:"Terms And Privacy",link:"/terms-and-privacy"}],wk=[{social:s.jsx(U3,{}),link:"https://twitter.com/Teach_n_Learn22"},{social:s.jsx(H3,{}),link:"https://www.facebook.com/people/Teach-and-Learn/100091595265820/"},{social:s.jsx(B3,{}),link:"https://www.instagram.com/teach.nlearn/"},{social:s.jsx(W3,{}),link:"https://www.youtube.com/@TeachandLearnApp"}],Qe=()=>{const e=me(),t=n=>{ve(),e(n)};return s.jsxs(fk,{children:[s.jsxs(hk,{children:[s.jsx(pk,{onClick:()=>t("/"),children:s.jsx("img",{src:tp,alt:""})}),s.jsxs("div",{className:"lists",children:[s.jsx("div",{children:s.jsx(o0,{heading:"Company",listData:yk})}),s.jsx("div",{children:s.jsx(o0,{heading:"Legal",listData:vk})})]}),s.jsxs(mk,{children:[s.jsx("h5",{children:"Get the app"}),s.jsxs("div",{children:[s.jsx("img",{src:uk,alt:"app-link",onClick:()=>t("/app-coming-soon")}),s.jsx("img",{src:dk,alt:"app-link",onClick:()=>t("/app-coming-soon")})]})]})]}),s.jsxs(gk,{children:[s.jsx("span",{children:"© Copyright 2023, All Rights Reserved"}),s.jsx(xk,{children:wk.map((n,r)=>s.jsx(Sc,{to:n.link,target:"_blank",children:n.social}))})]})]})},bk=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 18px;
  background: #094067;
  border-radius: 16px;
  font-family: "Nunito";
  font-style: normal;
  transition: all 0.15s linear;
  min-width: 200px;

  &:hover {
    transform: translateY(-10px);
  }
`,Sk=b.div`
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`,jk=b.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #d8eefe;
  overflow-wrap: break-word;
  width: 100%;
`,Qv=b.div`
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
      /* line-height: 30px; */
      color: #ffffff;
    }
  }
`,yp=b.div`
  /* border: 1px solid white; */
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
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
`,Ck=b.div`
  /* border: 1px solid white; */
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;b.div`
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
`;const Kv=e=>{const t=me(),n=()=>{ve(),t(`/learncard-overview/${e._id}`,{state:{learnCardId:e._id,backLink:"/requests"}})};return s.jsxs(bk,{onClick:n,children:[s.jsx(Sk,{children:s.jsx("h4",{children:e.subject})}),s.jsx(jk,{children:s.jsx("span",{children:e.topic.length>52?e.topic.slice(0,50)+"...":e.topic})}),s.jsx(Kn,{name:e.createdBy.userName,photo:e.createdBy.photo,imgBorder:"#FFFFFF",textColor:"#FFFFFF",userId:e.createdBy._id,hasUnderline:!1,imgSize:"26px",textSize:"18px"}),s.jsxs(Qv,{children:[s.jsxs("div",{children:[s.jsx(Oc,{}),s.jsxs("span",{children:[e.interestedStudents.length," Interested"]})]}),s.jsx("div",{children:s.jsx(Ck,{children:s.jsxs("span",{children:["Due - ",ki(e.dueDate)]})})})]}),s.jsx(yp,{children:e.tags.map((r,i)=>s.jsx("div",{children:s.jsx("span",{children:r})},i))})]})},kk=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: 24px;
  background: #094067;
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Nunito";
  transition: all 0.15s linear;

  &:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 800px) {
    gap: 18px;
  }
`,_k=b.div`
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }

  @media only screen and (max-width: 800px) {
    h4 {
      font-size: 14px;
    }
  }
`,Tk=b.div`
  font-weight: 700;
  font-size: 22px;
  color: #d8eefe;
  overflow-wrap: break-word;
  width: 100%;

  font-family: "Nunito";
  font-style: normal;
  line-height: 30px;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    line-height: 26px;
  }
`,Ek=b.div`
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
`,Zv=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 22px;

    span {
      font-size: 18px;
    }

    img {
      width: 26px;
      height: 26px;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Ok=b.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }
  }
`;b.div`
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

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;const Pk=({card:e,userId:t})=>{const n=()=>e.studentsEnrolled.filter(c=>c==t),r=()=>e.createdBy._id==t,i=me(),o=()=>{ve(),r()?i(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}}):n().length==1?i(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}}):i(`/class-overviw/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}})};return s.jsxs(kk,{onClick:o,children:[s.jsx(_k,{children:s.jsx("h4",{children:e.subject})}),s.jsx(Tk,{children:s.jsx("span",{children:e.topic.length>47?e.topic.slice(0,46)+" ...":e.topic})}),s.jsx(Zv,{children:s.jsx(Kn,{name:e.createdBy.userName,photo:e.createdBy.photo,imgBorder:"#FFFFFF",textColor:"#FFFFFF",userId:e.createdBy._id,imgSize:"26px",textSize:"18px"})}),s.jsxs(Ek,{children:[s.jsxs("div",{children:[s.jsx(Oc,{}),s.jsxs("span",{children:[e.studentsEnrolled.length," Enrolled"]})]}),s.jsx(Ok,{children:s.jsx("span",{children:ki(e.date)+" , "+Dn(e.classStartsAt)+" - "+Dn(e.classEndsAt)})})]}),s.jsx(yp,{children:e.tags.map((a,l)=>s.jsx("div",{children:s.jsx("span",{children:a})},l))})]})},Ik=b.div`
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
`,Dk=b.div`
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
`,Nk=b.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  /* color: #000000; */
  color: ${e=>e.isFirstCard?"#FFFFFF":"#000000"};
  font-size: 24px;
  line-height: 33px;
`,Lk=({card:e,isFirstCard:t})=>{const n=me(),r=()=>{ve(),n(`/classes/class/${e._id}`,{state:{classroomId:e._id,backPageLink:"/"}})};return s.jsxs(Ik,{isFirstCard:t,onClick:r,children:[s.jsxs(Dk,{isFirstCard:t,children:[s.jsx(Y3,{color:"#FFFFFF"}),s.jsx("span",{children:Dn(e.classStartsAt)+" - "+Dn(e.classEndsAt)})]}),s.jsx(Nk,{isFirstCard:t,children:s.jsx("span",{children:e.topic.length>50?e.topic.slice(0,50)+" ...":e.topic})}),s.jsx(Zv,{children:s.jsx(Kn,{name:e.createdBy.userName,photo:e.createdBy.photo,imgBorder:t?"white":"black",textColor:t?"white":"black",userId:e.createdBy._id})})]})};var $k=function(e){return{display:e?"flex":"none"}},Mk="#4fa94d",Rk={"aria-busy":!0,role:"status"},s0=globalThis&&globalThis.__assign||function(){return s0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s0.apply(this,arguments)},a0=globalThis&&globalThis.__assign||function(){return a0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a0.apply(this,arguments)},l0=globalThis&&globalThis.__assign||function(){return l0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l0.apply(this,arguments)},c0=globalThis&&globalThis.__assign||function(){return c0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},c0.apply(this,arguments)},u0=globalThis&&globalThis.__assign||function(){return u0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},u0.apply(this,arguments)},d0=globalThis&&globalThis.__assign||function(){return d0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},d0.apply(this,arguments)},f0=globalThis&&globalThis.__assign||function(){return f0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},f0.apply(this,arguments)},Jv={exports:{}},Oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=Symbol.for("react.element"),wp=Symbol.for("react.portal"),zc=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Ak=Symbol.for("react.server_context"),Yc=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Qc=Symbol.for("react.lazy"),Fk=Symbol.for("react.offscreen"),Xv;Xv=Symbol.for("react.module.reference");function pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vp:switch(e=e.type,e){case zc:case Bc:case Uc:case Vc:case Gc:return e;default:switch(e=e&&e.$$typeof,e){case Ak:case Wc:case Yc:case Qc:case qc:case Hc:return e;default:return t}}case wp:return t}}}Oe.ContextConsumer=Wc;Oe.ContextProvider=Hc;Oe.Element=vp;Oe.ForwardRef=Yc;Oe.Fragment=zc;Oe.Lazy=Qc;Oe.Memo=qc;Oe.Portal=wp;Oe.Profiler=Bc;Oe.StrictMode=Uc;Oe.Suspense=Vc;Oe.SuspenseList=Gc;Oe.isAsyncMode=function(){return!1};Oe.isConcurrentMode=function(){return!1};Oe.isContextConsumer=function(e){return pn(e)===Wc};Oe.isContextProvider=function(e){return pn(e)===Hc};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vp};Oe.isForwardRef=function(e){return pn(e)===Yc};Oe.isFragment=function(e){return pn(e)===zc};Oe.isLazy=function(e){return pn(e)===Qc};Oe.isMemo=function(e){return pn(e)===qc};Oe.isPortal=function(e){return pn(e)===wp};Oe.isProfiler=function(e){return pn(e)===Bc};Oe.isStrictMode=function(e){return pn(e)===Uc};Oe.isSuspense=function(e){return pn(e)===Vc};Oe.isSuspenseList=function(e){return pn(e)===Gc};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zc||e===Bc||e===Uc||e===Vc||e===Gc||e===Fk||typeof e=="object"&&e!==null&&(e.$$typeof===Qc||e.$$typeof===qc||e.$$typeof===Hc||e.$$typeof===Wc||e.$$typeof===Yc||e.$$typeof===Xv||e.getModuleId!==void 0)};Oe.typeOf=pn;Jv.exports=Oe;var ew=Jv.exports;function zk(e){function t(F,z,B,X,T){for(var oe=0,U=0,De=0,fe=0,Te,ce,pt=0,Mt=0,we,bt=we=Te=0,Ce=0,mt=0,Ao=0,gt=0,pa=B.length,Fo=pa-1,yn,ae="",Ke="",Tu="",Eu="",br;Ce<pa;){if(ce=B.charCodeAt(Ce),Ce===Fo&&U+fe+De+oe!==0&&(U!==0&&(ce=U===47?10:47),fe=De=oe=0,pa++,Fo++),U+fe+De+oe===0){if(Ce===Fo&&(0<mt&&(ae=ae.replace(h,"")),0<ae.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:ae+=B.charAt(Ce)}ce=59}switch(ce){case 123:for(ae=ae.trim(),Te=ae.charCodeAt(0),we=1,gt=++Ce;Ce<pa;){switch(ce=B.charCodeAt(Ce)){case 123:we++;break;case 125:we--;break;case 47:switch(ce=B.charCodeAt(Ce+1)){case 42:case 47:e:{for(bt=Ce+1;bt<Fo;++bt)switch(B.charCodeAt(bt)){case 47:if(ce===42&&B.charCodeAt(bt-1)===42&&Ce+2!==bt){Ce=bt+1;break e}break;case 10:if(ce===47){Ce=bt+1;break e}}Ce=bt}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;Ce++<Fo&&B.charCodeAt(Ce)!==ce;);}if(we===0)break;Ce++}switch(we=B.substring(gt,Ce),Te===0&&(Te=(ae=ae.replace(f,"").trim()).charCodeAt(0)),Te){case 64:switch(0<mt&&(ae=ae.replace(h,"")),ce=ae.charCodeAt(1),ce){case 100:case 109:case 115:case 45:mt=z;break;default:mt=J}if(we=t(z,mt,we,ce,T+1),gt=we.length,0<E&&(mt=n(J,ae,Ao),br=l(3,we,mt,z,se,Q,gt,ce,T,X),ae=mt.join(""),br!==void 0&&(gt=(we=br.trim()).length)===0&&(ce=0,we="")),0<gt)switch(ce){case 115:ae=ae.replace(O,a);case 100:case 109:case 45:we=ae+"{"+we+"}";break;case 107:ae=ae.replace(m,"$1 $2"),we=ae+"{"+we+"}",we=A===1||A===2&&o("@"+we,3)?"@-webkit-"+we+"@"+we:"@"+we;break;default:we=ae+we,X===112&&(we=(Ke+=we,""))}else we="";break;default:we=t(z,n(z,ae,Ao),we,X,T+1)}Tu+=we,we=Ao=mt=bt=Te=0,ae="",ce=B.charCodeAt(++Ce);break;case 125:case 59:if(ae=(0<mt?ae.replace(h,""):ae).trim(),1<(gt=ae.length))switch(bt===0&&(Te=ae.charCodeAt(0),Te===45||96<Te&&123>Te)&&(gt=(ae=ae.replace(" ",":")).length),0<E&&(br=l(1,ae,z,F,se,Q,Ke.length,X,T,X))!==void 0&&(gt=(ae=br.trim()).length)===0&&(ae="\0\0"),Te=ae.charCodeAt(0),ce=ae.charCodeAt(1),Te){case 0:break;case 64:if(ce===105||ce===99){Eu+=ae+B.charAt(Ce);break}default:ae.charCodeAt(gt-1)!==58&&(Ke+=i(ae,Te,ce,ae.charCodeAt(2)))}Ao=mt=bt=Te=0,ae="",ce=B.charCodeAt(++Ce)}}switch(ce){case 13:case 10:U===47?U=0:1+Te===0&&X!==107&&0<ae.length&&(mt=1,ae+="\0"),0<E*Y&&l(0,ae,z,F,se,Q,Ke.length,X,T,X),Q=1,se++;break;case 59:case 125:if(U+fe+De+oe===0){Q++;break}default:switch(Q++,yn=B.charAt(Ce),ce){case 9:case 32:if(fe+oe+U===0)switch(pt){case 44:case 58:case 9:case 32:yn="";break;default:ce!==32&&(yn=" ")}break;case 0:yn="\\0";break;case 12:yn="\\f";break;case 11:yn="\\v";break;case 38:fe+U+oe===0&&(mt=Ao=1,yn="\f"+yn);break;case 108:if(fe+U+oe+N===0&&0<bt)switch(Ce-bt){case 2:pt===112&&B.charCodeAt(Ce-3)===58&&(N=pt);case 8:Mt===111&&(N=Mt)}break;case 58:fe+U+oe===0&&(bt=Ce);break;case 44:U+De+fe+oe===0&&(mt=1,yn+="\r");break;case 34:case 39:U===0&&(fe=fe===ce?0:fe===0?ce:fe);break;case 91:fe+U+De===0&&oe++;break;case 93:fe+U+De===0&&oe--;break;case 41:fe+U+oe===0&&De--;break;case 40:if(fe+U+oe===0){if(Te===0)switch(2*pt+3*Mt){case 533:break;default:Te=1}De++}break;case 64:U+De+fe+oe+bt+we===0&&(we=1);break;case 42:case 47:if(!(0<fe+oe+De))switch(U){case 0:switch(2*ce+3*B.charCodeAt(Ce+1)){case 235:U=47;break;case 220:gt=Ce,U=42}break;case 42:ce===47&&pt===42&&gt+2!==Ce&&(B.charCodeAt(gt+2)===33&&(Ke+=B.substring(gt,Ce+1)),yn="",U=0)}}U===0&&(ae+=yn)}Mt=pt,pt=ce,Ce++}if(gt=Ke.length,0<gt){if(mt=z,0<E&&(br=l(2,Ke,mt,F,se,Q,gt,X,T,X),br!==void 0&&(Ke=br).length===0))return Eu+Ke+Tu;if(Ke=mt.join(",")+"{"+Ke+"}",A*N!==0){switch(A!==2||o(Ke,2)||(N=0),N){case 111:Ke=Ke.replace(S,":-moz-$1")+Ke;break;case 112:Ke=Ke.replace(v,"::-webkit-input-$1")+Ke.replace(v,"::-moz-$1")+Ke.replace(v,":-ms-input-$1")+Ke}N=0}}return Eu+Ke+Tu}function n(F,z,B){var X=z.trim().split(j);z=X;var T=X.length,oe=F.length;switch(oe){case 0:case 1:var U=0;for(F=oe===0?"":F[0]+" ";U<T;++U)z[U]=r(F,z[U],B).trim();break;default:var De=U=0;for(z=[];U<T;++U)for(var fe=0;fe<oe;++fe)z[De++]=r(F[fe]+" ",X[U],B).trim()}return z}function r(F,z,B){var X=z.charCodeAt(0);switch(33>X&&(X=(z=z.trim()).charCodeAt(0)),X){case 38:return z.replace(x,"$1"+F.trim());case 58:return F.trim()+z.replace(x,"$1"+F.trim());default:if(0<1*B&&0<z.indexOf("\f"))return z.replace(x,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+z}function i(F,z,B,X){var T=F+";",oe=2*z+3*B+4*X;if(oe===944){F=T.indexOf(":",9)+1;var U=T.substring(F,T.length-1).trim();return U=T.substring(0,F).trim()+U+";",A===1||A===2&&o(U,1)?"-webkit-"+U+U:U}if(A===0||A===2&&!o(T,1))return T;switch(oe){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(q,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return U=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+U+"-webkit-"+T+"-ms-flex-pack"+U+T;case 1005:return y.test(T)?T.replace(p,":-webkit-")+T.replace(p,":-moz-")+T:T;case 1e3:switch(U=T.substring(13).trim(),z=U.indexOf("-")+1,U.charCodeAt(0)+U.charCodeAt(z)){case 226:U=T.replace(C,"tb");break;case 232:U=T.replace(C,"tb-rl");break;case 220:U=T.replace(C,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+U+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(z=(T=F).length-10,U=(T.charCodeAt(z)===33?T.substring(0,z):T).substring(F.indexOf(":",7)+1).trim(),oe=U.charCodeAt(0)+(U.charCodeAt(7)|0)){case 203:if(111>U.charCodeAt(8))break;case 115:T=T.replace(U,"-webkit-"+U)+";"+T;break;case 207:case 102:T=T.replace(U,"-webkit-"+(102<oe?"inline-":"")+"box")+";"+T.replace(U,"-webkit-"+U)+";"+T.replace(U,"-ms-"+U+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return U=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+U+"-ms-flex-"+U+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(P,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(P,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(L.test(F)===!0)return(U=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?i(F.replace("stretch","fill-available"),z,B,X).replace(":fill-available",":stretch"):T.replace(U,"-webkit-"+U)+T.replace(U,"-moz-"+U.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,B+X===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+T}return T}function o(F,z){var B=F.indexOf(z===1?":":"{"),X=F.substring(0,z!==3?B:10);return B=F.substring(B+1,F.length-1),H(z!==2?X:X.replace(R,"$1"),B,z)}function a(F,z){var B=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return B!==z+";"?B.replace(k," or ($1)").substring(4):"("+z+")"}function l(F,z,B,X,T,oe,U,De,fe,Te){for(var ce=0,pt=z,Mt;ce<E;++ce)switch(Mt=_[ce].call(d,F,pt,B,X,T,oe,U,De,fe,Te)){case void 0:case!1:case!0:case null:break;default:pt=Mt}if(pt!==z)return pt}function c(F){switch(F){case void 0:case null:E=_.length=0;break;default:if(typeof F=="function")_[E++]=F;else if(typeof F=="object")for(var z=0,B=F.length;z<B;++z)c(F[z]);else Y=!!F|0}return c}function u(F){return F=F.prefix,F!==void 0&&(H=null,F?typeof F!="function"?A=1:(A=2,H=F):A=0),u}function d(F,z){var B=F;if(33>B.charCodeAt(0)&&(B=B.trim()),re=B,B=[re],0<E){var X=l(-1,z,B,B,se,Q,0,0,0,0);X!==void 0&&typeof X=="string"&&(z=X)}var T=t(J,B,z,0,0);return 0<E&&(X=l(-2,T,B,B,se,Q,T.length,0,0,0),X!==void 0&&(T=X)),re="",N=0,Q=se=1,T}var f=/^\0+/g,h=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,j=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,P=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,Q=1,se=1,N=0,A=1,J=[],_=[],E=0,H=null,Y=0,re="";return d.use=c,d.set=u,e!==void 0&&u(e),d}var Uk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tw={exports:{}},Pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,bp=ht?Symbol.for("react.element"):60103,Sp=ht?Symbol.for("react.portal"):60106,Kc=ht?Symbol.for("react.fragment"):60107,Zc=ht?Symbol.for("react.strict_mode"):60108,Jc=ht?Symbol.for("react.profiler"):60114,Xc=ht?Symbol.for("react.provider"):60109,eu=ht?Symbol.for("react.context"):60110,jp=ht?Symbol.for("react.async_mode"):60111,tu=ht?Symbol.for("react.concurrent_mode"):60111,nu=ht?Symbol.for("react.forward_ref"):60112,ru=ht?Symbol.for("react.suspense"):60113,Bk=ht?Symbol.for("react.suspense_list"):60120,iu=ht?Symbol.for("react.memo"):60115,ou=ht?Symbol.for("react.lazy"):60116,Hk=ht?Symbol.for("react.block"):60121,Wk=ht?Symbol.for("react.fundamental"):60117,Yk=ht?Symbol.for("react.responder"):60118,Vk=ht?Symbol.for("react.scope"):60119;function Xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bp:switch(e=e.type,e){case jp:case tu:case Kc:case Jc:case Zc:case ru:return e;default:switch(e=e&&e.$$typeof,e){case eu:case nu:case ou:case iu:case Xc:return e;default:return t}}case Sp:return t}}}function nw(e){return Xt(e)===tu}Pe.AsyncMode=jp;Pe.ConcurrentMode=tu;Pe.ContextConsumer=eu;Pe.ContextProvider=Xc;Pe.Element=bp;Pe.ForwardRef=nu;Pe.Fragment=Kc;Pe.Lazy=ou;Pe.Memo=iu;Pe.Portal=Sp;Pe.Profiler=Jc;Pe.StrictMode=Zc;Pe.Suspense=ru;Pe.isAsyncMode=function(e){return nw(e)||Xt(e)===jp};Pe.isConcurrentMode=nw;Pe.isContextConsumer=function(e){return Xt(e)===eu};Pe.isContextProvider=function(e){return Xt(e)===Xc};Pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bp};Pe.isForwardRef=function(e){return Xt(e)===nu};Pe.isFragment=function(e){return Xt(e)===Kc};Pe.isLazy=function(e){return Xt(e)===ou};Pe.isMemo=function(e){return Xt(e)===iu};Pe.isPortal=function(e){return Xt(e)===Sp};Pe.isProfiler=function(e){return Xt(e)===Jc};Pe.isStrictMode=function(e){return Xt(e)===Zc};Pe.isSuspense=function(e){return Xt(e)===ru};Pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Kc||e===tu||e===Jc||e===Zc||e===ru||e===Bk||typeof e=="object"&&e!==null&&(e.$$typeof===ou||e.$$typeof===iu||e.$$typeof===Xc||e.$$typeof===eu||e.$$typeof===nu||e.$$typeof===Wk||e.$$typeof===Yk||e.$$typeof===Vk||e.$$typeof===Hk)};Pe.typeOf=Xt;tw.exports=Pe;var Gk=tw.exports,Cp=Gk,qk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kk={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kp={};kp[Cp.ForwardRef]=Kk;kp[Cp.Memo]=rw;function h0(e){return Cp.isMemo(e)?rw:kp[e.$$typeof]||qk}var Zk=Object.defineProperty,Jk=Object.getOwnPropertyNames,p0=Object.getOwnPropertySymbols,Xk=Object.getOwnPropertyDescriptor,e6=Object.getPrototypeOf,m0=Object.prototype;function iw(e,t,n){if(typeof t!="string"){if(m0){var r=e6(t);r&&r!==m0&&iw(e,r,n)}var i=Jk(t);p0&&(i=i.concat(p0(t)));for(var o=h0(e),a=h0(t),l=0;l<i.length;++l){var c=i[l];if(!Qk[c]&&!(n&&n[c])&&!(a&&a[c])&&!(o&&o[c])){var u=Xk(t,c);try{Zk(e,c,u)}catch{}}}}return e}var t6=iw;const n6=ic(t6);function ar(){return(ar=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g0=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},zf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ew.typeOf(e)},Vl=Object.freeze([]),Vr=Object.freeze({});function Ys(e){return typeof e=="function"}function x0(e){return e.displayName||e.name||"Component"}function _p(e){return e&&typeof e.styledComponentId=="string"}var So=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tp=typeof window<"u"&&"HTMLElement"in window,r6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function sa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var i6=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&sa(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(c,r[u])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ul=new Map,Gl=new Map,gs=1,$a=function(e){if(ul.has(e))return ul.get(e);for(;Gl.has(gs);)gs++;var t=gs++;return ul.set(e,t),Gl.set(t,e),t},o6=function(e){return Gl.get(e)},s6=function(e,t){t>=gs&&(gs=t+1),ul.set(e,t),Gl.set(t,e)},a6="style["+So+'][data-styled-version="5.3.11"]',l6=new RegExp("^"+So+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),c6=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},u6=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(l6);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(s6(u,c),c6(e,u,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},d6=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ow=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var c=l.childNodes,u=c.length;u>=0;u--){var d=c[u];if(d&&d.nodeType===1&&d.hasAttribute(So))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(So,"active"),r.setAttribute("data-styled-version","5.3.11");var a=d6();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},f6=function(){function e(n){var r=this.element=ow(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var c=o[a];if(c.ownerNode===i)return c}sa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),h6=function(){function e(n){var r=this.element=ow(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),p6=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),y0=Tp,m6={isServer:!Tp,useCSSOMInjection:!r6},sw=function(){function e(n,r,i){n===void 0&&(n=Vr),r===void 0&&(r={}),this.options=ar({},m6,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Tp&&y0&&(y0=!1,function(o){for(var a=document.querySelectorAll(a6),l=0,c=a.length;l<c;l++){var u=a[l];u&&u.getAttribute(So)!=="active"&&(u6(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return $a(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ar({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new p6(a):o?new f6(a):new h6(a),new i6(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if($a(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules($a(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup($a(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=o6(a);if(l!==void 0){var c=n.names.get(l),u=r.getGroup(a);if(c&&u&&c.size){var d=So+".g"+a+'[id="'+l+'"]',f="";c!==void 0&&c.forEach(function(h){h.length>0&&(f+=h+",")}),o+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),g6=/(a)(d)/gi,v0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=v0(t%52)+n;return(v0(t%52)+n).replace(g6,"$1-$2")}var qi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},aw=function(e){return qi(5381,e)};function x6(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ys(n)&&!_p(n))return!1}return!0}var y6=aw("5.3.11"),v6=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&x6(t),this.componentId=n,this.baseHash=qi(y6,n),this.baseStyle=r,sw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=jo(this.rules,t,n,r).join(""),l=Uf(qi(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var c=r(a,"."+l,void 0,i);n.insertRules(i,l,c)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=qi(this.baseHash,r.hash),f="",h=0;h<u;h++){var p=this.rules[h];if(typeof p=="string")f+=p;else if(p){var y=jo(p,t,n,r),w=Array.isArray(y)?y.join(""):y;d=qi(d,w+h),f+=w}}if(f){var j=Uf(d>>>0);if(!n.hasNameForId(i,j)){var x=r(f,"."+j,void 0,i);n.insertRules(i,j,x)}o.push(j)}}return o.join(" ")},e}(),w6=/^\s*\/\/.*$/gm,b6=[":","[",".","#"];function S6(e){var t,n,r,i,o=e===void 0?Vr:e,a=o.options,l=a===void 0?Vr:a,c=o.plugins,u=c===void 0?Vl:c,d=new zk(l),f=[],h=function(w){function j(x){if(x)try{w(x+"}")}catch{}}return function(x,m,v,S,C,O,k,P,R,L){switch(x){case 1:if(R===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(P===0)return m+"/*|*/";break;case 3:switch(P){case 102:case 112:return w(v[0]+m),"";default:return m+(L===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(j)}}}(function(w){f.push(w)}),p=function(w,j,x){return j===0&&b6.indexOf(x[n.length])!==-1||x.match(i)?w:"."+t};function y(w,j,x,m){m===void 0&&(m="&");var v=w.replace(w6,""),S=j&&x?x+" "+j+" { "+v+" }":v;return t=m,n=j,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(x||!j?"":j,S)}return d.use([].concat(u,[function(w,j,x){w===2&&x.length&&x[0].lastIndexOf(n)>0&&(x[0]=x[0].replace(r,p))},h,function(w){if(w===-2){var j=f;return f=[],j}}])),y.hash=u.length?u.reduce(function(w,j){return j.name||sa(15),qi(w,j.name)},5381).toString():"",y}var lw=K.createContext();lw.Consumer;var cw=K.createContext(),j6=(cw.Consumer,new sw),Bf=S6();function C6(){return g.useContext(lw)||j6}function k6(){return g.useContext(cw)||Bf}var uw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Bf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return sa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Bf),this.name+t.hash},e}(),_6=/([A-Z])/,T6=/([A-Z])/g,E6=/^ms-/,O6=function(e){return"-"+e.toLowerCase()};function w0(e){return _6.test(e)?e.replace(T6,O6).replace(E6,"-ms-"):e}var b0=function(e){return e==null||e===!1||e===""};function jo(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=jo(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(b0(e))return"";if(_p(e))return"."+e.styledComponentId;if(Ys(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var c=e(t);return jo(c,t,n,r)}var u;return e instanceof uw?n?(e.inject(n,r),e.getName(r)):e:zf(e)?function d(f,h){var p,y,w=[];for(var j in f)f.hasOwnProperty(j)&&!b0(f[j])&&(Array.isArray(f[j])&&f[j].isCss||Ys(f[j])?w.push(w0(j)+":",f[j],";"):zf(f[j])?w.push.apply(w,d(f[j],j)):w.push(w0(j)+": "+(p=j,(y=f[j])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in Uk||p.startsWith("--")?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var S0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function dw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ys(e)||zf(e)?S0(jo(g0(Vl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:S0(jo(g0(e,n)))}var P6=function(e,t,n){return n===void 0&&(n=Vr),e.theme!==n.theme&&e.theme||t||n.theme},I6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D6=/(^-|-$)/g;function pd(e){return e.replace(I6,"-").replace(D6,"")}var fw=function(e){return Uf(aw(e)>>>0)};function Ma(e){return typeof e=="string"&&!0}var Hf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},N6=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function L6(e,t,n){var r=e[n];Hf(t)&&Hf(r)?hw(r,t):e[n]=t}function hw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Hf(a))for(var l in a)N6(l)&&L6(e,a[l],l)}return e}var pw=K.createContext();pw.Consumer;var md={};function mw(e,t,n){var r=_p(e),i=!Ma(e),o=t.attrs,a=o===void 0?Vl:o,l=t.componentId,c=l===void 0?function(m,v){var S=typeof m!="string"?"sc":pd(m);md[S]=(md[S]||0)+1;var C=S+"-"+fw("5.3.11"+S+md[S]);return v?v+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(m){return Ma(m)?"styled."+m:"Styled("+x0(m)+")"}(e):u,f=t.displayName&&t.componentId?pd(t.displayName)+"-"+t.componentId:t.componentId||c,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(m,v,S){return e.shouldForwardProp(m,v,S)&&t.shouldForwardProp(m,v,S)}:e.shouldForwardProp);var y,w=new v6(n,f,r?e.componentStyle:void 0),j=w.isStatic&&a.length===0,x=function(m,v){return function(S,C,O,k){var P=S.attrs,R=S.componentStyle,L=S.defaultProps,q=S.foldedComponentIds,Q=S.shouldForwardProp,se=S.styledComponentId,N=S.target,A=function(X,T,oe){X===void 0&&(X=Vr);var U=ar({},T,{theme:X}),De={};return oe.forEach(function(fe){var Te,ce,pt,Mt=fe;for(Te in Ys(Mt)&&(Mt=Mt(U)),Mt)U[Te]=De[Te]=Te==="className"?(ce=De[Te],pt=Mt[Te],ce&&pt?ce+" "+pt:ce||pt):Mt[Te]}),[U,De]}(P6(C,g.useContext(pw),L)||Vr,C,P),J=A[0],_=A[1],E=function(X,T,oe,U){var De=C6(),fe=k6(),Te=T?X.generateAndInjectStyles(Vr,De,fe):X.generateAndInjectStyles(oe,De,fe);return Te}(R,k,J),H=O,Y=_.$as||C.$as||_.as||C.as||N,re=Ma(Y),F=_!==C?ar({},C,{},_):C,z={};for(var B in F)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?z.as=F[B]:(Q?Q(B,Pg,Y):!re||Pg(B))&&(z[B]=F[B]));return C.style&&_.style!==C.style&&(z.style=ar({},C.style,{},_.style)),z.className=Array.prototype.concat(q,se,E!==se?E:null,C.className,_.className).filter(Boolean).join(" "),z.ref=H,g.createElement(Y,z)}(y,m,v,j)};return x.displayName=d,(y=K.forwardRef(x)).attrs=h,y.componentStyle=w,y.displayName=d,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Vl,y.styledComponentId=f,y.target=r?e.target:e,y.withComponent=function(m){var v=t.componentId,S=function(O,k){if(O==null)return{};var P,R,L={},q=Object.keys(O);for(R=0;R<q.length;R++)P=q[R],k.indexOf(P)>=0||(L[P]=O[P]);return L}(t,["componentId"]),C=v&&v+"-"+(Ma(m)?m:pd(x0(m)));return mw(m,ar({},S,{attrs:h,componentId:C}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?hw({},e.defaultProps,m):m}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&n6(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Wf=function(e){return function t(n,r,i){if(i===void 0&&(i=Vr),!ew.isValidElementType(r))return sa(1,String(r));var o=function(){return n(r,i,dw.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,ar({},i,{},a))},o.attrs=function(a){return t(n,r,ar({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(mw,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Wf[e]=Wf(e)});function Ep(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=dw.apply(void 0,[e].concat(n)).join(""),o=fw(i);return new uw(o,i)}const aa=Wf;var gw=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},wn=242.776657104492,$6=1.6,M6=Ep(j0||(j0=gw([`
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
`])),wn*.14,wn,wn*.11,wn*.35,wn,wn*.35,wn*.01,wn,wn*.99);aa.path(C0||(C0=gw([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),wn*.01,wn,M6,$6);var j0,C0,k0=globalThis&&globalThis.__assign||function(){return k0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},k0.apply(this,arguments)},_0=globalThis&&globalThis.__assign||function(){return _0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_0.apply(this,arguments)},T0=globalThis&&globalThis.__assign||function(){return T0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},T0.apply(this,arguments)},E0=globalThis&&globalThis.__assign||function(){return E0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},E0.apply(this,arguments)},O0=globalThis&&globalThis.__assign||function(){return O0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},O0.apply(this,arguments)},P0=globalThis&&globalThis.__assign||function(){return P0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},P0.apply(this,arguments)},I0=globalThis&&globalThis.__assign||function(){return I0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},I0.apply(this,arguments)},R6=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,a=r[i[0]],l=1;a!=null&&l<o;)a=a[i[l]],l+=1;if(typeof a<"u")return a}return n}},Op=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},D0=globalThis&&globalThis.__assign||function(){return D0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},D0.apply(this,arguments)},A6=Ep(N0||(N0=Op([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));aa.svg(L0||(L0=Op([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),A6,R6("speed","0.75"));aa.polyline($0||($0=Op([`
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
`])),function(e){return e.width});var N0,L0,$0,xs=globalThis&&globalThis.__assign||function(){return xs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xs.apply(this,arguments)},xw=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.radius,a=o===void 0?1:o,l=e.color,c=l===void 0?Mk:l,u=e.ariaLabel,d=u===void 0?"tail-spin-loading":u,f=e.wrapperStyle,h=e.wrapperClass,p=e.visible,y=p===void 0?!0:p;return K.createElement("div",xs({style:xs(xs({},$k(y)),f),className:h,"data-testid":"tail-spin-loading","aria-label":d},Rk),K.createElement("svg",{width:i,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg"},K.createElement("defs",null,K.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},K.createElement("stop",{stopColor:c,stopOpacity:"0",offset:"0%"}),K.createElement("stop",{stopColor:c,stopOpacity:".631",offset:"63.146%"}),K.createElement("stop",{stopColor:c,offset:"100%"}))),K.createElement("g",{fill:"none",fillRule:"evenodd"},K.createElement("g",{transform:"translate(1 1)"},K.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:c,strokeWidth:"2"},K.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),K.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:a},K.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}))))))},M0=globalThis&&globalThis.__assign||function(){return M0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},M0.apply(this,arguments)},R0=globalThis&&globalThis.__assign||function(){return R0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},R0.apply(this,arguments)},Pp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},A0=globalThis&&globalThis.__assign||function(){return A0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},A0.apply(this,arguments)},F6=Ep(F0||(F0=Pp([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));aa.polygon(z0||(z0=Pp([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),F6);aa.svg(U0||(U0=Pp([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var F0,z0,U0,B0=globalThis&&globalThis.__assign||function(){return B0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},B0.apply(this,arguments)},H0=globalThis&&globalThis.__assign||function(){return H0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},H0.apply(this,arguments)},W0=globalThis&&globalThis.__assign||function(){return W0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},W0.apply(this,arguments)},Y0=globalThis&&globalThis.__assign||function(){return Y0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Y0.apply(this,arguments)},V0=globalThis&&globalThis.__assign||function(){return V0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},V0.apply(this,arguments)},G0=globalThis&&globalThis.__assign||function(){return G0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},G0.apply(this,arguments)},q0=globalThis&&globalThis.__assign||function(){return q0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},q0.apply(this,arguments)},Q0=globalThis&&globalThis.__assign||function(){return Q0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Q0.apply(this,arguments)},K0=globalThis&&globalThis.__assign||function(){return K0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},K0.apply(this,arguments)},Z0=globalThis&&globalThis.__assign||function(){return Z0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Z0.apply(this,arguments)},J0=globalThis&&globalThis.__assign||function(){return J0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},J0.apply(this,arguments)},X0=globalThis&&globalThis.__assign||function(){return X0=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},X0.apply(this,arguments)},e1=globalThis&&globalThis.__assign||function(){return e1=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},e1.apply(this,arguments)};const z6=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_e=e=>s.jsx(z6,{children:s.jsx(xw,{height:e.loaderHeight?e.loaderHeight:"60",width:e.loaderWidth?e.loaderWidth:"60",color:e.color?e.color:"#094067",ariaLabel:"tail-spin-loading",radius:"1",visible:!0})}),U6=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 4rem; */
`,B6=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`,H6=b.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`,W6=b.div`
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
`,Y6=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 1rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,V6=e=>{const t=me(),n=()=>{ve(),t("/classes",{state:{elemLink:"upcoming"}})};return s.jsxs(U6,{children:[s.jsxs(B6,{children:[s.jsx(H6,{children:e.heading}),s.jsxs(W6,{onClick:n,children:[s.jsx("span",{children:"See All"}),s.jsx(et,{strokeColor:"#384250"})]})]}),e.loading?s.jsx(_e,{}):s.jsx(Y6,{children:e.cardArr.map((r,i)=>s.jsx(Lk,{card:r,isFirstCard:i==0},i))})]})},G6=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`,q6=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";
`,Q6=b.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
`,K6=b.div`
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
`,Z6=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 1rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,J6=e=>{const t=me(),n=()=>{ve(),t("/requests")};return s.jsxs(G6,{children:[s.jsxs(q6,{children:[s.jsx(Q6,{children:e.heading}),s.jsxs(K6,{onClick:n,children:[s.jsx("span",{children:"See All"}),s.jsx(et,{strokeColor:"#384250"})]})]}),e.loading?s.jsx(_e,{}):s.jsx(Z6,{children:e.requestCard.map((r,i)=>s.jsx(Kv,{...r},i))})]})},X6=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  /* margin-bottom: 4rem; */
`,e_=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito";

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }
`,t_=b.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  /* border: 1px solid red; */
  width: 70%;

  @media only screen and (max-width: 1000px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`,n_=b.div`
  /* border: 1px solid red; */
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

  @media only screen and (max-width: 600px) {
    align-self: flex-end;
    gap: 10px;
    span {
      font-size: 14px;
      font-weight: 600;
    }

    svg {
      width: 1rem;
      /* height: 1rem; */
    }
  }
`,r_=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1170px) {
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 1rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,i_=e=>{const t=me(),n=()=>{ve(),t("/classes")};return s.jsxs(X6,{children:[s.jsxs(e_,{children:[s.jsx(t_,{children:e.heading}),s.jsxs(n_,{onClick:n,children:[s.jsx("span",{children:"See All"}),s.jsx(et,{strokeColor:"#384250"})]})]}),e.loading?s.jsx(_e,{}):s.jsx(r_,{children:e.cardArr.map((r,i)=>s.jsx(Pk,{card:r,userId:e.userId},i))})]})},yw=b.div`
  position: relative;
  width: 100%;

  box-sizing: border-box;

  textarea {
    width: 100%;
    box-sizing: border-box;
    height: ${e=>e.areaHeight?e.areaHeight:"10rem"};
    padding: 15px 5px 15px 10px;
    border: 1.5px solid #d5d9eb;
    border-radius: 8px;
    color: #000000;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    resize: none;
  }
`,o_=b.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  /* text-transform: ${e=>e.isValid?"none":"uppercase"}; */
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${yw}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`,Kt=e=>{const[t,n]=g.useState(!1),[r,i]=g.useState(!0);g.useEffect(()=>{var c;((c=e.value)==null?void 0:c.trim().length)>0&&n(!0)},[e]);const o=c=>{e.updateSingleField?e.updateSingleField(c.target.value):e.updateFields({[c.target.name]:c.target.value});const u=c.target.value;(u==null?void 0:u.trim().length)>0?n(!0):n(!1)},a=()=>{if(l.current){const c=l.current.value;console.log(c),c.trim().length>0?i(!1):i(!0)}},l=g.useRef(null);return bo(l,null,!0,a,!1,null),s.jsxs(yw,{areaHeight:e.areaHeight?e.areaHeight:void 0,children:[s.jsx("textarea",{required:!0,value:e.value,name:e.name,ref:l,onFocus:()=>i(!1),onChange:c=>o(c)}),s.jsx(o_,{isValid:t,children:r?e.placeholderText:e.label})]})},s_=b.div`
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
    padding: 1.375rem 4.125rem;
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

  @media only screen and (max-width: 880px) {
    padding: 0 10vw;
    h2 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 9vw;
    gap: 1.35rem;
    h2 {
      font-size: 2.6rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    button {
      /* align-items: center; */
      align-self: center;
      padding: 1.375rem 2.125rem;
    }
  }
`,a_=e=>{const[t,n]=g.useState("");function r(c){n(c)}const i={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},o=()=>t.split(" ").length>140,a=()=>t==""?(D.error("Feedback cannot be empty",i),!1):o()?(D.error("Feedback cannot be more than 140 words",i),!1):!0,l=async()=>{console.log(t),a()&&await ee.post(`${te}${ne}/user/my-feedback`,{feedback:t},{headers:ie(e.userToken)}).then(({data:c})=>{console.log(c),D.success("Feedback successfully submitted!!",i),n("")}).catch(c=>{console.log(c),D.error("Feedback couldnt be submiited. Try again!!",i)})};return s.jsxs(s_,{children:[s.jsx("h2",{children:"Please share your feedback"}),s.jsx("h4",{children:"We are under continuous development. Please let us know how we can improve our platform and any additional features you would like to see."}),s.jsx(Kt,{label:"Your Feedback",name:"feedback",value:t,areaHeight:"15rem",updateSingleField:r,placeholderText:"Your Feedback (not more than 140 words)"}),s.jsx("button",{onClick:l,children:"Submit Feedback"})]})};var Ip={},Dp={},Ye={},su={};(function(e){function t(a,l,c){var u=l.slidesToShow,d=l.currentSlide;return c.length>2*u?a+2*u:d>=c.length?c.length+a:a}function n(a,l){if(l.length>2*a){for(var c={},u=l.length-2*a,d=l.length-u,f=u,h=0;h<d;h++)c[h]=f,f++;var p=l.length+d,y=p+l.slice(0,2*a).length,w=0;for(h=p;h<=y;h++)c[h]=w,w++;var j=p,x=0;for(h=d;h<j;h++)c[h]=x,x++;return c}c={};var m=3*l.length,v=0;for(h=0;h<m;h++)c[h]=v,++v===l.length&&(v=0);return c}function r(a,l){return l.length<a?l:l.length>2*a?l.slice(l.length-2*a,l.length).concat(l,l.slice(0,2*a)):l.concat(l,l)}function i(a,l){return l.length>2*a?2*a:l.length}function o(a,l,c){var u,d=a.currentSlide,f=a.slidesToShow,h=a.itemWidth,p=a.totalItems,y=0,w=0,j=d===0,x=l.length-(l.length-2*f);return l.length<f?(w=y=0,j=u=!1):l.length>2*f?((u=d>=x+l.length)&&(w=-h*(y=d-l.length)),j&&(w=-h*(y=x+(l.length-2*f)))):((u=d>=2*l.length)&&(w=-h*(y=d-l.length)),j&&(w=c.showDots?-h*(y=l.length):-h*(y=p/3))),{isReachingTheEnd:u,isReachingTheStart:j,nextSlide:y,nextPosition:w}}Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=t,e.getOriginalIndexLookupTableByClones=n,e.getClones=r,e.getInitialSlideInInfiniteMode=i,e.checkClonesPosition=o})(su);var ro={};Object.defineProperty(ro,"__esModule",{value:!0});function l_(e,t,n,r){var i=0,o=r||n;return t&&o&&(i=e[o].partialVisibilityGutter||e[o].paritialVisibilityGutter),i}function c_(e,t){var n;return t[e]&&(n=(100/t[e].items).toFixed(1)),n}function u_(e,t,n){return Math.round(n/(t+(e.centerMode?1:0)))}ro.getPartialVisibilityGutter=l_,ro.getWidthFromDeviceType=c_,ro.getItemClientSideWidth=u_;var ct={};Object.defineProperty(ct,"__esModule",{value:!0});var Yf=ro;function Np(e){var t=e.slidesToShow;return e.totalItems<t}function d_(e,t){var n,r=e.domLoaded,i=e.slidesToShow,o=e.containerWidth,a=e.itemWidth,l=t.deviceType,c=t.responsive,u=t.ssr,d=t.partialVisbile,f=t.partialVisible,h=!!(r&&i&&o&&a);u&&l&&!h&&(n=Yf.getWidthFromDeviceType(l,c));var p=!!(u&&l&&!h&&n);return{shouldRenderOnSSR:p,flexBisis:n,domFullyLoaded:h,partialVisibilityGutter:Yf.getPartialVisibilityGutter(c,d||f,l,e.deviceType),shouldRenderAtAll:p||h}}function f_(e,t){var n=t.currentSlide,r=t.slidesToShow;return n<=e&&e<n+r}function vw(e,t,n){var r=n||e.transform;return!t.infinite&&e.currentSlide===0||Np(e)?r:r+e.itemWidth/2}function h_(e){return!(0<e.currentSlide)}function ww(e){var t=e.currentSlide,n=e.totalItems;return!(t+e.slidesToShow<n)}function bw(e,t,n,r){t===void 0&&(t=0);var i=e.currentSlide,o=e.slidesToShow,a=ww(e),l=!n.infinite&&a,c=r||e.transform;if(Np(e))return c;var u=c+i*t;return l?u+(e.containerWidth-(e.itemWidth-t)*o):u}function Sw(e,t){return e.rtl?-1*t:t}function p_(e,t,n){var r=t.partialVisbile,i=t.partialVisible,o=t.responsive,a=t.deviceType,l=t.centerMode,c=n||e.transform,u=Yf.getPartialVisibilityGutter(o,r||i,a,e.deviceType);return Sw(t,i||r?bw(e,u,t,n):l?vw(e,t,n):c)}function m_(e,t){var n=e.domLoaded,r=e.slidesToShow,i=e.containerWidth,o=e.itemWidth,a=t.deviceType,l=t.responsive,c=t.slidesToSlide||1,u=!!(n&&r&&i&&o);return t.ssr&&t.deviceType&&!u&&Object.keys(l).forEach(function(d){var f=l[d].slidesToSlide;a===d&&f&&(c=f)}),u&&Object.keys(l).forEach(function(d){var f=l[d],h=f.breakpoint,p=f.slidesToSlide,y=h.max,w=h.min;p&&window.innerWidth>=w&&window.innerWidth<=y&&(c=p)}),c}ct.notEnoughChildren=Np,ct.getInitialState=d_,ct.getIfSlideIsVisbile=f_,ct.getTransformForCenterMode=vw,ct.isInLeftEnd=h_,ct.isInRightEnd=ww,ct.getTransformForPartialVsibile=bw,ct.parsePosition=Sw,ct.getTransform=p_,ct.getSlidesToSlide=m_;var Lp={};Object.defineProperty(Lp,"__esModule",{value:!0});var g_=function(e,t,n){var r;return function(){var i=arguments;r||(e.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},t))}};Lp.default=g_;var jw={};(function(e){function t(n,r){var i=r.partialVisbile,o=r.partialVisible,a=r.centerMode,l=r.ssr,c=r.responsive;if((i||o)&&a)throw new Error("center mode can not be used at the same time with partialVisible");if(!c)throw l?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(c&&typeof c!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t})(jw);var $p={};Object.defineProperty($p,"__esModule",{value:!0});var x_=ct;function y_(e,t,n){n===void 0&&(n=0);var r,i,o=e.slidesToShow,a=e.currentSlide,l=e.itemWidth,c=e.totalItems,u=x_.getSlidesToSlide(e,t),d=a+1+n+o+(0<n?0:u);return i=d<=c?-l*(r=a+n+(0<n?0:u)):c<d&&a!==c-o?-l*(r=c-o):r=void 0,{nextSlides:r,nextPosition:i}}$p.populateNextSlides=y_;var Mp={};Object.defineProperty(Mp,"__esModule",{value:!0});var v_=g,w_=ct,b_=ct;function S_(e,t,n){n===void 0&&(n=0);var r,i,o=e.currentSlide,a=e.itemWidth,l=e.slidesToShow,c=t.children,u=t.showDots,d=t.infinite,f=w_.getSlidesToSlide(e,t),h=o-n-(0<n?0:f),p=(v_.Children.toArray(c).length-l)%f;return i=0<=h?(r=h,u&&!d&&0<p&&b_.isInRightEnd(e)&&(r=o-p),-a*r):r=h<0&&o!==0?0:void 0,{nextSlides:r,nextPosition:i}}Mp.populatePreviousSlides=S_;var Cw={};(function(e){function t(n,r,i,o,a,l){var c,u,d=n.itemWidth,f=n.slidesToShow,h=n.totalItems,p=n.currentSlide,y=r.infinite,w=!1,j=Math.round((i-o)/d),x=Math.round((o-i)/d),m=i<a;if(a<i&&j<=f){c="right";var v=Math.abs(-d*(h-f)),S=l-(o-a),C=p===h-f;(Math.abs(S)<=v||C&&y)&&(u=S,w=!0)}return m&&x<=f&&(c="left",((S=l+(a-o))<=0||p===0&&y)&&(w=!0,u=S)),{direction:c,nextPosition:u,canContinue:w}}Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=t})(Cw);Object.defineProperty(Ye,"__esModule",{value:!0});var Ra=su;Ye.getOriginalCounterPart=Ra.getOriginalCounterPart,Ye.getClones=Ra.getClones,Ye.checkClonesPosition=Ra.checkClonesPosition,Ye.getInitialSlideInInfiniteMode=Ra.getInitialSlideInInfiniteMode;var gd=ro;Ye.getWidthFromDeviceType=gd.getWidthFromDeviceType,Ye.getPartialVisibilityGutter=gd.getPartialVisibilityGutter,Ye.getItemClientSideWidth=gd.getItemClientSideWidth;var Cr=ct;Ye.getInitialState=Cr.getInitialState,Ye.getIfSlideIsVisbile=Cr.getIfSlideIsVisbile,Ye.getTransformForCenterMode=Cr.getTransformForCenterMode,Ye.getTransformForPartialVsibile=Cr.getTransformForPartialVsibile,Ye.isInLeftEnd=Cr.isInLeftEnd,Ye.isInRightEnd=Cr.isInRightEnd,Ye.notEnoughChildren=Cr.notEnoughChildren,Ye.getSlidesToSlide=Cr.getSlidesToSlide;var j_=Lp;Ye.throttle=j_.default;var C_=jw;Ye.throwError=C_.default;var k_=$p;Ye.populateNextSlides=k_.populateNextSlides;var __=Mp;Ye.populatePreviousSlides=__.populatePreviousSlides;var T_=Cw;Ye.populateSlidesOnMouseTouchMove=T_.populateSlidesOnMouseTouchMove;var au={},E_=ml&&ml.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(au,"__esModule",{value:!0});var O_=g;function P_(e){return"clientY"in e}au.isMouseMoveEvent=P_;var I_=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return E_(t,e),t}(O_.Component);au.default=I_;var Rp={},Ap={};Object.defineProperty(Ap,"__esModule",{value:!0});var D_=su,N_=ct;function L_(e,t,n,r){var i={},o=N_.getSlidesToSlide(t,n);return Array(e).fill(0).forEach(function(a,l){var c=D_.getOriginalCounterPart(l,t,r);if(l===0)i[0]=c;else{var u=i[l-1]+o;i[l]=u}}),i}Ap.getLookupTableForNextSlides=L_;Object.defineProperty(Rp,"__esModule",{value:!0});var Qo=g,$_=su,M_=Ap,t1=ct,R_=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.getState,o=t.showDots,a=t.customDot,l=t.dotListClass,c=t.infinite,u=t.children;if(!o||t1.notEnoughChildren(n))return null;var d,f=n.currentSlide,h=n.slidesToShow,p=t1.getSlidesToSlide(n,t),y=Qo.Children.toArray(u);d=c?Math.ceil(y.length/p):Math.ceil((y.length-h)/p)+1;var w=M_.getLookupTableForNextSlides(d,n,t,y),j=$_.getOriginalIndexLookupTableByClones(h,y),x=j[f];return Qo.createElement("ul",{className:"react-multi-carousel-dot-list "+l},Array(d).fill(0).map(function(m,v){var S,C;if(c){C=w[v];var O=j[C];S=x===O||O<=x&&x<O+p}else{var k=y.length-h,P=v*p;S=(C=k<P?k:P)===f||C<f&&f<C+p&&f<y.length-h}return a?Qo.cloneElement(a,{index:v,active:S,key:v,onClick:function(){return r(C)},carouselState:i()}):Qo.createElement("li",{"data-index":v,key:v,className:"react-multi-carousel-dot "+(S?"react-multi-carousel-dot--active":"")},Qo.createElement("button",{"aria-label":"Go to slide "+(v+1),onClick:function(){return r(C)}}))}))};Rp.default=R_;var lu={};Object.defineProperty(lu,"__esModule",{value:!0});var ql=g,A_=function(e){var t=e.customLeftArrow,n=e.getState,r=e.previous,i=e.disabled,o=e.rtl;if(t)return ql.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var a=o?"rtl":"";return ql.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+a,onClick:function(){return r()},type:"button",disabled:i})};lu.LeftArrow=A_;var F_=function(e){var t=e.customRightArrow,n=e.getState,r=e.next,i=e.disabled,o=e.rtl;if(t)return ql.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:o});var a=o?"rtl":"";return ql.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+a,onClick:function(){return r()},type:"button",disabled:i})};lu.RightArrow=F_;var Fp={};Object.defineProperty(Fp,"__esModule",{value:!0});var Aa=g,xd=Ye,z_=function(e){var t=e.props,n=e.state,r=e.goToSlide,i=e.clones,o=e.notEnoughChildren,a=n.itemWidth,l=t.children,c=t.infinite,u=t.itemClass,d=t.itemAriaLabel,f=t.partialVisbile,h=t.partialVisible,p=xd.getInitialState(n,t),y=p.flexBisis,w=p.shouldRenderOnSSR,j=p.domFullyLoaded,x=p.partialVisibilityGutter;return p.shouldRenderAtAll?(f&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),Aa.createElement(Aa.Fragment,null,(c?i:Aa.Children.toArray(l)).map(function(m,v){return Aa.createElement("li",{key:v,"data-index":v,onClick:function(){t.focusOnSelect&&r(v)},"aria-hidden":xd.getIfSlideIsVisbile(v,n)?"false":"true","aria-label":d||(m.props.ariaLabel?m.props.ariaLabel:null),style:{flex:w?"1 0 "+y+"%":"auto",position:"relative",width:j?((f||h)&&x&&!o?a-x:a)+"px":"auto"},className:"react-multi-carousel-item "+(xd.getIfSlideIsVisbile(v,n)?"react-multi-carousel-item--active":"")+" "+u},m)}))):null};Fp.default=z_;var U_=ml&&ml.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)i.hasOwnProperty(o)&&(r[o]=i[o])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Dp,"__esModule",{value:!0});var xt=g,Ze=Ye,ni=au,B_=Rp,n1=lu,H_=Fp,Fa=ct,Fn=400,r1="transform 400ms ease-in-out",W_=function(e){function t(n){var r=e.call(this,n)||this;return r.containerRef=xt.createRef(),r.listRef=xt.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:xt.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=Ze.throttle(r.next.bind(r),n.transitionDuration||Fn,r.setIsInThrottle),r.previous=Ze.throttle(r.previous.bind(r),n.transitionDuration||Fn,r.setIsInThrottle),r.goToSlide=Ze.throttle(r.goToSlide.bind(r),n.transitionDuration||Fn,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return U_(t,e),t.prototype.resetTotalItems=function(){var n=this,r=xt.Children.count(this.props.children),i=Ze.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},t.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},t.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var o=Fa.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(o+i)+"px,0,0)")},t.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||r1:"none")},t.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.setClones=function(n,r,i,o){var a=this;o===void 0&&(o=!1),this.isAnimationAllowed=!1;var l=xt.Children.toArray(this.props.children),c=Ze.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,l),u=Ze.getClones(this.state.slidesToShow,l),d=l.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:u.length,currentSlide:i&&!o?d:c},function(){a.correctItemsPosition(r||a.state.itemWidth)})},t.prototype.setItemsToShow=function(n,r){var i=this,o=this.props.responsive;Object.keys(o).forEach(function(a){var l=o[a],c=l.breakpoint,u=l.items,d=c.max,f=c.min,h=[window.innerWidth];window.screen&&window.screen.width&&h.push(window.screen.width);var p=Math.min.apply(Math,h);f<=p&&p<=d&&(i.setState({slidesToShow:u,deviceType:a}),i.setContainerAndItemWidth(u,n,r))})},t.prototype.setContainerAndItemWidth=function(n,r,i){var o=this;if(this.containerRef&&this.containerRef.current){var a=this.containerRef.current.offsetWidth,l=Ze.getItemClientSideWidth(this.props,n,a);this.setState({containerWidth:a,itemWidth:l},function(){o.props.infinite&&o.setClones(n,l,r,i)}),r&&this.correctItemsPosition(l)}},t.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var o=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(o,!0),this.setState({transform:o})},t.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},t.prototype.componentDidUpdate=function(n,r){var i=this,o=n.keyBoardControl,a=n.autoPlay,l=n.children,c=r.containerWidth,u=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==c&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||Fn)),o&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!o&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),a&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),a||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),l.length!==this.props.children.length?t.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||Fn):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:u}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ze.isInRightEnd(this.state)){var f=this.props.transitionDuration||Fn;t.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},f+this.props.autoPlaySpeed)}},t.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,o=xt.Children.toArray(this.props.children),a=Ze.checkClonesPosition(this.state,o,this.props),l=a.isReachingTheEnd,c=a.isReachingTheStart,u=a.nextSlide,d=a.nextPosition;this.state.domLoaded&&i&&(l||c)&&(this.isAnimationAllowed=!1,t.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:u})},this.props.transitionDuration||Fn))},t.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,a=i.beforeChange;if(!Ze.notEnoughChildren(this.state)){var l=Ze.populateNextSlides(this.state,this.props,n),c=l.nextSlides,u=l.nextPosition,d=this.state.currentSlide;c!==void 0&&u!==void 0&&(typeof a=="function"&&a(c,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:c},function(){typeof o=="function"&&(t.afterChangeTimeout=setTimeout(function(){o(d,r.getState())},r.props.transitionDuration||Fn))}))}},t.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,o=i.afterChange,a=i.beforeChange;if(!Ze.notEnoughChildren(this.state)){var l=Ze.populatePreviousSlides(this.state,this.props,n),c=l.nextSlides,u=l.nextPosition;if(c!==void 0&&u!==void 0){var d=this.state.currentSlide;typeof a=="function"&&a(c,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:u,currentSlide:c},function(){typeof o=="function"&&(t.afterChangeTimeout2=setTimeout(function(){o(d,r.getState())},r.props.transitionDuration||Fn))})}}},t.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),t.clonesTimeout&&clearTimeout(t.clonesTimeout),t.isInThrottleTimeout&&clearTimeout(t.isInThrottleTimeout),t.transformTimeout&&clearTimeout(t.transformTimeout),t.afterChangeTimeout&&clearTimeout(t.afterChangeTimeout),t.afterChangeTimeout2&&clearTimeout(t.afterChangeTimeout2),t.afterChangeTimeout3&&clearTimeout(t.afterChangeTimeout3)},t.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},t.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:Fa.parsePosition(this.props,r),clientY:Fa.parsePosition(this.props,i)}},t.prototype.handleDown=function(n){if(!(!ni.isMouseMoveEvent(n)&&!this.props.swipeable||ni.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(ni.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=o,this.lastX=i,this.isAnimationAllowed=!1}},t.prototype.handleMove=function(n){if(!(!ni.isMouseMoveEvent(n)&&!this.props.swipeable||ni.isMouseMoveEvent(n)&&!this.props.draggable||Ze.notEnoughChildren(this.state))){var r=this.getCords(ni.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,o=r.clientY,a=this.initialX-i,l=this.initialY-o;if(this.onMove){if(!(Math.abs(a)>Math.abs(l)))return;var c=Ze.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),u=c.direction,d=c.nextPosition,f=c.canContinue;u&&(this.direction=u,f&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=i}}},t.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var o=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(o)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(o=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(o)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},t.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,o=i===void 0?0:i,a=r.left,l=a===void 0?0:a,c=r.bottom,u=c===void 0?0:c,d=r.right,f=d===void 0?0:d;return 0<=o&&0<=l&&u<=(window.innerHeight||document.documentElement.clientHeight)&&f<=(window.innerWidth||document.documentElement.clientWidth)},t.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},t.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},t.prototype.handleEnter=function(n){ni.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},t.prototype.goToSlide=function(n,r,i){var o=this;if(i===void 0&&(i=!0),!this.isInThrottle){var a=this.state.itemWidth,l=this.props,c=l.afterChange,u=l.beforeChange,d=this.state.currentSlide;typeof u!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||u(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-a*n},function(){o.props.infinite&&o.correctClonesPosition({domLoaded:!0}),typeof c!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(t.afterChangeTimeout3=setTimeout(function(){c(d,o.getState())},o.props.transitionDuration||Fn))})}},t.prototype.getState=function(){return this.state},t.prototype.renderLeftArrow=function(n){var r=this,i=this.props,o=i.customLeftArrow,a=i.rtl;return xt.createElement(n1.LeftArrow,{customLeftArrow:o,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:a})},t.prototype.renderRightArrow=function(n){var r=this,i=this.props,o=i.customRightArrow,a=i.rtl;return xt.createElement(n1.RightArrow,{customRightArrow:o,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:a})},t.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?xt.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,o){return n.goToSlide(i,o)},carouselState:this.getState()}):null},t.prototype.renderDotsList=function(){var n=this;return xt.createElement(B_.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},t.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=xt.Children.toArray(this.props.children);n=Ze.getClones(this.state.slidesToShow,r)}return xt.createElement(H_.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ze.notEnoughChildren(this.state),props:this.props})},t.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,o=n.renderArrowsWhenDisabled,a=n.removeArrowOnDeviceType,l=n.infinite,c=n.containerClass,u=n.sliderClass,d=n.customTransition,f=n.additionalTransfrom,h=n.renderDotsOutside,p=n.renderButtonGroupOutside,y=n.className,w=n.rtl,j=Ze.getInitialState(this.state,this.props),x=j.shouldRenderOnSSR,m=j.shouldRenderAtAll,v=Ze.isInLeftEnd(this.state),S=Ze.isInRightEnd(this.state),C=i&&!(a&&(r&&-1<a.indexOf(r)||this.state.deviceType&&-1<a.indexOf(this.state.deviceType)))&&!Ze.notEnoughChildren(this.state)&&m,O=!l&&v,k=!l&&S,P=Fa.getTransform(this.state,this.props);return xt.createElement(xt.Fragment,null,xt.createElement("div",{className:"react-multi-carousel-list "+c+" "+y,dir:w?"rtl":"ltr",ref:this.containerRef},xt.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+u,style:{transition:this.isAnimationAllowed?d||r1:"none",overflow:x?"hidden":"unset",transform:"translate3d("+(P+f)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),C&&(!O||o)&&this.renderLeftArrow(O),C&&(!k||o)&&this.renderRightArrow(k),m&&!p&&this.renderButtonGroups(),m&&!h&&this.renderDotsList()),m&&h&&this.renderDotsList(),m&&p&&this.renderButtonGroups())},t.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},t}(xt.Component);Dp.default=W_;Object.defineProperty(Ip,"__esModule",{value:!0});var Y_=Dp;Ip.default=Y_.default;var V_=Ip;const kw=ic(V_),G_=b.div`
  /* border: 1px solid red; */
  /* margin-bottom: 1rem; */

  h3 {
    color: #2b2c34;
    font-size: 2.625rem;
    font-family: "Nunito";
    font-weight: 600;
    letter-spacing: -0.105rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 880px) {
      font-size: 2rem;
      margin-bottom: 1.8rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.8rem;
      margin-bottom: 1.6rem;
    }
  }
`,q_=b.div`
  /* border: 1px solid red; */
  display: flex;
  max-width: 25rem;
  /* height: 18rem; */
  margin-right: 1rem;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid red; */

  iframe {
    width: 100%;
    height: 17rem;
    border: none;
    /* border-radius: 20px 20px 0px 0px; */
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    /* max-width: 30rem; */
    max-width: 50rem;
    width: 100%;
    margin-right: 0;
  }
`;b.div`
  border: 1px solid red;
  display: flex;
  padding: 1.25rem;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0px 0px 20px 20px;
  background: #094067;
  color: #fff;
  font-size: 1.5rem;
  font-family: "Nunito";
  font-weight: 600;
  letter-spacing: -0.07rem;

  @media only screen and (max-width: 880px) {
    font-size: 1.5rem;
  }
`;const Q_={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:600},items:2,slidesToSlide:2},mobile:{breakpoint:{max:600,min:0},items:1,slidesToSlide:1}},K_=[{iframe:s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/QK4rMgtSaqk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),text:"Why use Teach and Learn?"},{iframe:s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Dj49m3dC1yk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),text:"The Feynman Technique of Learning"}],Z_=K_.map((e,t)=>s.jsx(q_,{children:e.iframe})),_w=()=>s.jsxs(G_,{children:[s.jsx("h3",{children:"Watch these videos to know how and why to use Teach and Learn"}),s.jsx(kw,{responsive:Q_,children:Z_})]}),J_=b.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,X_=()=>{const e=me();g.useEffect(()=>{localStorage.getItem(Dt)||e("/teachNlearn")},[e]);const[t,n]=g.useState(""),[r,i]=g.useState(""),[o,a]=g.useState(""),[l,c]=g.useState([]),[u,d]=g.useState([]),[f,h]=g.useState([]),[p,y]=g.useState(!1),[w,j]=g.useState(!0),[x,m]=g.useState(!0),[v,S]=g.useState(!0),{fetchLocalUserData:C}=Le();g.useEffect(()=>{C().then(R=>{console.log(R),n(R.token),a(R._id),i(R.role),y(!0)}).catch(R=>{e("/teachNlearn")})},[]);async function O(){await ee.get(`${te}${ne}/teach/recommended-classes`,{headers:ie(t??"")}).then(({data:R})=>{console.log(R.stats),c(R.stats),j(!1)})}async function k(){await ee.get(`${te}${ne}/user/myclasses/upcoming`,{headers:ie(t)}).then(({data:R})=>{const L=R.upcomingClasses;d(L),m(!1)})}const P=async()=>{await ee.get(`${te}${ne}/learn/top-requests`,{headers:ie(t)}).then(({data:R})=>{const L=R.stats;h(L),S(!1)})};return g.useEffect(()=>{t&&(O(),k(),P())},[t]),p?s.jsxs(s.Fragment,{children:[s.jsx(tt,{dontShowSearchDropDown:!1}),s.jsxs(J_,{children:[s.jsx(xp,{}),l&&l.length!=0&&s.jsx(i_,{heading:"Classes recommended for you!",cardArr:l,userId:o,loading:w}),u&&u.length!=0&&s.jsx(V6,{heading:"Upcoming Enrolled Classes!",cardArr:u,loading:x}),s.jsx(J6,{heading:"Rising Requests",requestCard:f,loading:v}),s.jsx(_w,{}),s.jsx(a_,{userToken:t})]}),s.jsx(Qe,{})]}):null},eT=b.div`
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
`,zp=e=>s.jsx(eT,{onClick:e.onClickFunc,children:s.jsxs("div",{children:[s.jsx("span",{children:"Edit"}),s.jsx(F3,{})]})});var Vf={exports:{}},_i={},Tw={exports:{}},tT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nT=tT,rT=nT;function Ew(){}function Ow(){}Ow.resetWarningCache=Ew;var iT=function(){function e(r,i,o,a,l,c){if(c!==rT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ow,resetWarningCache:Ew};return n.PropTypes=n,n};Tw.exports=iT();var Pw=Tw.exports,Gf={exports:{}},$n={},qf={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(f,h){return h.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function a(f){var h=f.offsetWidth<=0&&f.offsetHeight<=0;if(h&&!f.innerHTML)return!0;try{var p=window.getComputedStyle(f),y=p.getPropertyValue("display");return h?y!==r&&o(f,p):y===n}catch{return console.warn("Failed to inspect element style"),!1}}function l(f){for(var h=f,p=f.getRootNode&&f.getRootNode();h&&h!==document.body;){if(p&&h===p&&(h=p.host.parentNode),a(h))return!1;h=h.parentNode}return!0}function c(f,h){var p=f.nodeName.toLowerCase(),y=i.test(p)&&!f.disabled||p==="a"&&f.href||h;return y&&l(f)}function u(f){var h=f.getAttribute("tabindex");h===null&&(h=void 0);var p=isNaN(h);return(p||h>=0)&&c(f,!p)}function d(f){var h=[].slice.call(f.querySelectorAll("*"),0).reduce(function(p,y){return p.concat(y.shadowRoot?d(y.shadowRoot):[y])},[]);return h.filter(u)}e.exports=t.default})(qf,qf.exports);var Iw=qf.exports;Object.defineProperty($n,"__esModule",{value:!0});$n.resetState=lT;$n.log=cT;$n.handleBlur=Vs;$n.handleFocus=Gs;$n.markForFocusLater=uT;$n.returnFocus=dT;$n.popWithoutFocus=fT;$n.setupScopedFocus=hT;$n.teardownScopedFocus=pT;var oT=Iw,sT=aT(oT);function aT(e){return e&&e.__esModule?e:{default:e}}var Co=[],Qi=null,Qf=!1;function lT(){Co=[]}function cT(){}function Vs(){Qf=!0}function Gs(){if(Qf){if(Qf=!1,!Qi)return;setTimeout(function(){if(!Qi.contains(document.activeElement)){var e=(0,sT.default)(Qi)[0]||Qi;e.focus()}},0)}}function uT(){Co.push(document.activeElement)}function dT(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Co.length!==0&&(t=Co.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function fT(){Co.length>0&&Co.pop()}function hT(e){Qi=e,window.addEventListener?(window.addEventListener("blur",Vs,!1),document.addEventListener("focus",Gs,!0)):(window.attachEvent("onBlur",Vs),document.attachEvent("onFocus",Gs))}function pT(){Qi=null,window.addEventListener?(window.removeEventListener("blur",Vs),document.removeEventListener("focus",Gs)):(window.detachEvent("onBlur",Vs),document.detachEvent("onFocus",Gs))}var Kf={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=Iw,r=i(n);function i(l){return l&&l.__esModule?l:{default:l}}function o(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return l.activeElement.shadowRoot?o(l.activeElement.shadowRoot):l.activeElement}function a(l,c){var u=(0,r.default)(l);if(!u.length){c.preventDefault();return}var d=void 0,f=c.shiftKey,h=u[0],p=u[u.length-1],y=o();if(l===y){if(!f)return;d=p}if(p===y&&!f&&(d=h),h===y&&f&&(d=p),d){c.preventDefault(),d.focus();return}var w=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),j=w!=null&&w[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(j){var x=u.indexOf(y);if(x>-1&&(x+=f?-1:1),d=u[x],typeof d>"u"){c.preventDefault(),d=f?p:h,d.focus();return}c.preventDefault(),d.focus()}}e.exports=t.default})(Kf,Kf.exports);var mT=Kf.exports,Mn={},gT=function(){},xT=gT,On={},Dw={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Dw);var yT=Dw.exports;Object.defineProperty(On,"__esModule",{value:!0});On.canUseDOM=On.SafeNodeList=On.SafeHTMLCollection=void 0;var vT=yT,wT=bT(vT);function bT(e){return e&&e.__esModule?e:{default:e}}var cu=wT.default,ST=cu.canUseDOM?window.HTMLElement:{};On.SafeHTMLCollection=cu.canUseDOM?window.HTMLCollection:{};On.SafeNodeList=cu.canUseDOM?window.NodeList:{};On.canUseDOM=cu.canUseDOM;On.default=ST;Object.defineProperty(Mn,"__esModule",{value:!0});Mn.resetState=TT;Mn.log=ET;Mn.assertNodeList=Nw;Mn.setElement=OT;Mn.validateElement=Up;Mn.hide=PT;Mn.show=IT;Mn.documentNotReadyOrSSRTesting=DT;var jT=xT,CT=_T(jT),kT=On;function _T(e){return e&&e.__esModule?e:{default:e}}var nn=null;function TT(){nn&&(nn.removeAttribute?nn.removeAttribute("aria-hidden"):nn.length!=null?nn.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(nn).forEach(function(e){return e.removeAttribute("aria-hidden")})),nn=null}function ET(){}function Nw(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function OT(e){var t=e;if(typeof t=="string"&&kT.canUseDOM){var n=document.querySelectorAll(t);Nw(n,t),t=n}return nn=t||nn,nn}function Up(e){var t=e||nn;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,CT.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function PT(e){var t=!0,n=!1,r=void 0;try{for(var i=Up(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var a=o.value;a.setAttribute("aria-hidden","true")}}catch(l){n=!0,r=l}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function IT(e){var t=!0,n=!1,r=void 0;try{for(var i=Up(e)[Symbol.iterator](),o;!(t=(o=i.next()).done);t=!0){var a=o.value;a.removeAttribute("aria-hidden")}}catch(l){n=!0,r=l}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function DT(){nn=null}var No={};Object.defineProperty(No,"__esModule",{value:!0});No.resetState=NT;No.log=LT;var ys={},vs={};function i1(e,t){e.classList.remove(t)}function NT(){var e=document.getElementsByTagName("html")[0];for(var t in ys)i1(e,ys[t]);var n=document.body;for(var r in vs)i1(n,vs[r]);ys={},vs={}}function LT(){}var $T=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},MT=function(t,n){return t[n]&&(t[n]-=1),n},RT=function(t,n,r){r.forEach(function(i){$T(n,i),t.add(i)})},AT=function(t,n,r){r.forEach(function(i){MT(n,i),n[i]===0&&t.remove(i)})};No.add=function(t,n){return RT(t.classList,t.nodeName.toLowerCase()=="html"?ys:vs,n.split(" "))};No.remove=function(t,n){return AT(t.classList,t.nodeName.toLowerCase()=="html"?ys:vs,n.split(" "))};var Lo={};Object.defineProperty(Lo,"__esModule",{value:!0});Lo.log=zT;Lo.resetState=UT;function FT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Lw=function e(){var t=this;FT(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var r=t.openInstances.indexOf(n);r!==-1&&(t.openInstances.splice(r,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(r){return r(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ql=new Lw;function zT(){console.log("portalOpenInstances ----------"),console.log(Ql.openInstances.length),Ql.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function UT(){Ql=new Lw}Lo.default=Ql;var Bp={};Object.defineProperty(Bp,"__esModule",{value:!0});Bp.resetState=YT;Bp.log=VT;var BT=Lo,HT=WT(BT);function WT(e){return e&&e.__esModule?e:{default:e}}var Ct=void 0,Sn=void 0,xi=[];function YT(){for(var e=[Ct,Sn],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}Ct=Sn=null,xi=[]}function VT(){console.log("bodyTrap ----------"),console.log(xi.length);for(var e=[Ct,Sn],t=0;t<e.length;t++){var n=e[t],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function o1(){xi.length!==0&&xi[xi.length-1].focusContent()}function GT(e,t){!Ct&&!Sn&&(Ct=document.createElement("div"),Ct.setAttribute("data-react-modal-body-trap",""),Ct.style.position="absolute",Ct.style.opacity="0",Ct.setAttribute("tabindex","0"),Ct.addEventListener("focus",o1),Sn=Ct.cloneNode(),Sn.addEventListener("focus",o1)),xi=t,xi.length>0?(document.body.firstChild!==Ct&&document.body.insertBefore(Ct,document.body.firstChild),document.body.lastChild!==Sn&&document.body.appendChild(Sn)):(Ct.parentElement&&Ct.parentElement.removeChild(Ct),Sn.parentElement&&Sn.parentElement.removeChild(Sn))}HT.default.subscribe(GT);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(N){for(var A=1;A<arguments.length;A++){var J=arguments[A];for(var _ in J)Object.prototype.hasOwnProperty.call(J,_)&&(N[_]=J[_])}return N},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},i=function(){function N(A,J){for(var _=0;_<J.length;_++){var E=J[_];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(A,E.key,E)}}return function(A,J,_){return J&&N(A.prototype,J),_&&N(A,_),A}}(),o=g,a=Pw,l=C(a),c=$n,u=S(c),d=mT,f=C(d),h=Mn,p=S(h),y=No,w=S(y),j=On,x=C(j),m=Lo,v=C(m);function S(N){if(N&&N.__esModule)return N;var A={};if(N!=null)for(var J in N)Object.prototype.hasOwnProperty.call(N,J)&&(A[J]=N[J]);return A.default=N,A}function C(N){return N&&N.__esModule?N:{default:N}}function O(N,A){if(!(N instanceof A))throw new TypeError("Cannot call a class as a function")}function k(N,A){if(!N)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:N}function P(N,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);N.prototype=Object.create(A&&A.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(N,A):N.__proto__=A)}var R={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},L=function(A){return A.code==="Tab"||A.keyCode===9},q=function(A){return A.code==="Escape"||A.keyCode===27},Q=0,se=function(N){P(A,N);function A(J){O(this,A);var _=k(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,J));return _.setOverlayRef=function(E){_.overlay=E,_.props.overlayRef&&_.props.overlayRef(E)},_.setContentRef=function(E){_.content=E,_.props.contentRef&&_.props.contentRef(E)},_.afterClose=function(){var E=_.props,H=E.appElement,Y=E.ariaHideApp,re=E.htmlOpenClassName,F=E.bodyOpenClassName,z=E.parentSelector,B=z&&z().ownerDocument||document;F&&w.remove(B.body,F),re&&w.remove(B.getElementsByTagName("html")[0],re),Y&&Q>0&&(Q-=1,Q===0&&p.show(H)),_.props.shouldFocusAfterRender&&(_.props.shouldReturnFocusAfterClose?(u.returnFocus(_.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),_.props.onAfterClose&&_.props.onAfterClose(),v.default.deregister(_)},_.open=function(){_.beforeOpen(),_.state.afterOpen&&_.state.beforeClose?(clearTimeout(_.closeTimer),_.setState({beforeClose:!1})):(_.props.shouldFocusAfterRender&&(u.setupScopedFocus(_.node),u.markForFocusLater()),_.setState({isOpen:!0},function(){_.openAnimationFrame=requestAnimationFrame(function(){_.setState({afterOpen:!0}),_.props.isOpen&&_.props.onAfterOpen&&_.props.onAfterOpen({overlayEl:_.overlay,contentEl:_.content})})}))},_.close=function(){_.props.closeTimeoutMS>0?_.closeWithTimeout():_.closeWithoutTimeout()},_.focusContent=function(){return _.content&&!_.contentHasFocus()&&_.content.focus({preventScroll:!0})},_.closeWithTimeout=function(){var E=Date.now()+_.props.closeTimeoutMS;_.setState({beforeClose:!0,closesAt:E},function(){_.closeTimer=setTimeout(_.closeWithoutTimeout,_.state.closesAt-Date.now())})},_.closeWithoutTimeout=function(){_.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},_.afterClose)},_.handleKeyDown=function(E){L(E)&&(0,f.default)(_.content,E),_.props.shouldCloseOnEsc&&q(E)&&(E.stopPropagation(),_.requestClose(E))},_.handleOverlayOnClick=function(E){_.shouldClose===null&&(_.shouldClose=!0),_.shouldClose&&_.props.shouldCloseOnOverlayClick&&(_.ownerHandlesClose()?_.requestClose(E):_.focusContent()),_.shouldClose=null},_.handleContentOnMouseUp=function(){_.shouldClose=!1},_.handleOverlayOnMouseDown=function(E){!_.props.shouldCloseOnOverlayClick&&E.target==_.overlay&&E.preventDefault()},_.handleContentOnClick=function(){_.shouldClose=!1},_.handleContentOnMouseDown=function(){_.shouldClose=!1},_.requestClose=function(E){return _.ownerHandlesClose()&&_.props.onRequestClose(E)},_.ownerHandlesClose=function(){return _.props.onRequestClose},_.shouldBeClosed=function(){return!_.state.isOpen&&!_.state.beforeClose},_.contentHasFocus=function(){return document.activeElement===_.content||_.content.contains(document.activeElement)},_.buildClassName=function(E,H){var Y=(typeof H>"u"?"undefined":r(H))==="object"?H:{base:R[E],afterOpen:R[E]+"--after-open",beforeClose:R[E]+"--before-close"},re=Y.base;return _.state.afterOpen&&(re=re+" "+Y.afterOpen),_.state.beforeClose&&(re=re+" "+Y.beforeClose),typeof H=="string"&&H?re+" "+H:re},_.attributesFromObject=function(E,H){return Object.keys(H).reduce(function(Y,re){return Y[E+"-"+re]=H[re],Y},{})},_.state={afterOpen:!1,beforeClose:!1},_.shouldClose=null,_.moveFromContentToOverlay=null,_}return i(A,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(_,E){this.props.isOpen&&!_.isOpen?this.open():!this.props.isOpen&&_.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!E.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var _=this.props,E=_.appElement,H=_.ariaHideApp,Y=_.htmlOpenClassName,re=_.bodyOpenClassName,F=_.parentSelector,z=F&&F().ownerDocument||document;re&&w.add(z.body,re),Y&&w.add(z.getElementsByTagName("html")[0],Y),H&&(Q+=1,p.hide(E)),v.default.register(this)}},{key:"render",value:function(){var _=this.props,E=_.id,H=_.className,Y=_.overlayClassName,re=_.defaultStyles,F=_.children,z=H?{}:re.content,B=Y?{}:re.overlay;if(this.shouldBeClosed())return null;var X={ref:this.setOverlayRef,className:this.buildClassName("overlay",Y),style:n({},B,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},T=n({id:E,ref:this.setContentRef,style:n({},z,this.props.style.content),className:this.buildClassName("content",H),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),oe=this.props.contentElement(T,F);return this.props.overlayElement(X,oe)}}]),A}(o.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),parentSelector:l.default.func,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(x.default),l.default.instanceOf(j.SafeHTMLCollection),l.default.instanceOf(j.SafeNodeList),l.default.arrayOf(l.default.instanceOf(x.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=se,e.exports=t.default})(Gf,Gf.exports);var qT=Gf.exports;function $w(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Mw(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Rw(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}$w.__suppressDeprecationWarning=!0;Mw.__suppressDeprecationWarning=!0;Rw.__suppressDeprecationWarning=!0;function QT(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var o=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=$w,t.componentWillReceiveProps=Mw),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Rw;var l=t.componentDidUpdate;t.componentDidUpdate=function(u,d,f){var h=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;l.call(this,u,d,h)}}return e}const KT=Object.freeze(Object.defineProperty({__proto__:null,polyfill:QT},Symbol.toStringTag,{value:"Module"})),ZT=lb(KT);Object.defineProperty(_i,"__esModule",{value:!0});_i.bodyOpenClassName=_i.portalClassName=void 0;var s1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},JT=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Aw=g,Kl=la(Aw),XT=Wy,Zl=la(XT),e8=Pw,le=la(e8),t8=qT,a1=la(t8),n8=Mn,r8=o8(n8),Lr=On,l1=la(Lr),i8=ZT;function o8(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function la(e){return e&&e.__esModule?e:{default:e}}function s8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function a8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l8=_i.portalClassName="ReactModalPortal",c8=_i.bodyOpenClassName="ReactModal__Body--open",ai=Lr.canUseDOM&&Zl.default.createPortal!==void 0,u1=function(t){return document.createElement(t)},d1=function(){return ai?Zl.default.createPortal:Zl.default.unstable_renderSubtreeIntoContainer};function za(e){return e()}var ca=function(e){a8(t,e);function t(){var n,r,i,o;s8(this,t);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return o=(r=(i=c1(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),i),i.removePortal=function(){!ai&&Zl.default.unmountComponentAtNode(i.node);var u=za(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=d1(),f=d(i,Kl.default.createElement(a1.default,s1({defaultStyles:t.defaultStyles},u)),i.node);i.portalRef(f)},r),c1(i,o)}return JT(t,[{key:"componentDidMount",value:function(){if(Lr.canUseDOM){ai||(this.node=u1("div")),this.node.className=this.props.portalClassName;var r=za(this.props.parentSelector);r.appendChild(this.node),!ai&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=za(r.parentSelector),o=za(this.props.parentSelector);return{prevParent:i,nextParent:o}}},{key:"componentDidUpdate",value:function(r,i,o){if(Lr.canUseDOM){var a=this.props,l=a.isOpen,c=a.portalClassName;r.portalClassName!==c&&(this.node.className=c);var u=o.prevParent,d=o.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!l)&&!ai&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Lr.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),o=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);o?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-i)):this.removePortal()}}},{key:"render",value:function(){if(!Lr.canUseDOM||!ai)return null;!this.node&&ai&&(this.node=u1("div"));var r=d1();return r(Kl.default.createElement(a1.default,s1({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){r8.setElement(r)}}]),t}(Aw.Component);ca.propTypes={isOpen:le.default.bool.isRequired,style:le.default.shape({content:le.default.object,overlay:le.default.object}),portalClassName:le.default.string,bodyOpenClassName:le.default.string,htmlOpenClassName:le.default.string,className:le.default.oneOfType([le.default.string,le.default.shape({base:le.default.string.isRequired,afterOpen:le.default.string.isRequired,beforeClose:le.default.string.isRequired})]),overlayClassName:le.default.oneOfType([le.default.string,le.default.shape({base:le.default.string.isRequired,afterOpen:le.default.string.isRequired,beforeClose:le.default.string.isRequired})]),appElement:le.default.oneOfType([le.default.instanceOf(l1.default),le.default.instanceOf(Lr.SafeHTMLCollection),le.default.instanceOf(Lr.SafeNodeList),le.default.arrayOf(le.default.instanceOf(l1.default))]),onAfterOpen:le.default.func,onRequestClose:le.default.func,closeTimeoutMS:le.default.number,ariaHideApp:le.default.bool,shouldFocusAfterRender:le.default.bool,shouldCloseOnOverlayClick:le.default.bool,shouldReturnFocusAfterClose:le.default.bool,preventScroll:le.default.bool,parentSelector:le.default.func,aria:le.default.object,data:le.default.object,role:le.default.string,contentLabel:le.default.string,shouldCloseOnEsc:le.default.bool,overlayRef:le.default.func,contentRef:le.default.func,id:le.default.string,overlayElement:le.default.func,contentElement:le.default.func};ca.defaultProps={isOpen:!1,portalClassName:l8,bodyOpenClassName:c8,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return Kl.default.createElement("div",t,n)},contentElement:function(t,n){return Kl.default.createElement("div",t,n)}};ca.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,i8.polyfill)(ca);_i.default=ca;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=_i,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default,e.exports=t.default})(Vf,Vf.exports);var u8=Vf.exports;const mn=ic(u8),Fw=b.div`
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
`,d8=b.input`
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
`,f8=b.span`
  position: absolute;
  top: 0;
  font-family: "Nunito";
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  /* text-transform: ${e=>e.isValid?"none":"uppercase"}; */
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${Fw}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`;b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;const h8=b.div`
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
`,p8=b.div`
  /* position: absolute; */
  /* top: 100%; */
  /* border: 1px solid red; */
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
    text-transform: capitalize;
    /* line-height: 0; */
  }
  /* margin-top: 0rem; */
  margin-left: 0.5rem;
`,He=e=>{var j,x;const[t,n]=g.useState(e.type),[r,i]=g.useState(!1),[o,a]=g.useState(!1),[l,c]=g.useState(!0);g.useEffect(()=>{var m;typeof e.value=="string"?((m=e.value)==null?void 0:m.trim().length)>0&&i(!0):typeof e.value=="number"&&e.value>=0&&i(!0)},[e]);const u=m=>{a(!0),e.updateFields({[m.target.name]:m.target.value});const v=m.target.value;(v==null?void 0:v.trim().length)>0?(i(!0),c(!1)):i(!1)},d=m=>{e.updateFields({[e.name]:m}),a(!1)},f=()=>{a(!1)},h=()=>{if(console.log("CHECK"),y.current){const m=y.current.value;console.log(m),m.trim().length>0?c(!1):c(!0)}},p=g.useRef(null);bo(p,f,!1,null,!1,null);const y=g.useRef(null);bo(y,null,!0,h,!1,null);const w=()=>{t=="password"?n("string"):t=="string"&&n("password")};return s.jsxs(Fw,{children:[s.jsx(d8,{type:t,required:!0,value:e.value,name:e.name,ref:y,onFocus:()=>c(!1),onChange:m=>u(m)}),e.type=="password"&&s.jsx("div",{className:"icon",onClick:w,children:t=="password"?s.jsx("span",{className:"show-password",children:"Show"}):s.jsx(A3,{})}),s.jsx(f8,{isValid:r,children:l?e.placeholderText:e.label}),e.isRequired&&s.jsx(p8,{children:s.jsx("span",{children:"*required"})}),e.hasDropdown?e.value==""?null:o&&(((j=e.dropdownData)==null?void 0:j.filter(m=>{if(typeof e.value=="string")return m.toLowerCase().includes(e.value.toLowerCase())}).length)==0?null:s.jsx(h8,{ref:p,children:(x=e.dropdownData)==null?void 0:x.filter(m=>{if(typeof e.value=="string")return m.toLowerCase().includes(e.value.toLowerCase())}).map((m,v)=>s.jsx("span",{onClick:()=>d(m),children:m},v))})):null]})},m8=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 2fr 4fr;
  overflow-wrap: break-word;
  /* wid */

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    /* border: 1px solid red; */
    width: 100%;
    overflow-wrap: break-word;
    margin-top: ${e=>e.marginTop?e.marginTop:"1rem"};
    display: flex;
    align-items: ${e=>e.alignCenter?"center":"flex-start"};
    justify-content: flex-start;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`,g8=b.div`
  /* border: 1px solid red; */
  /* width: 100%; */
  display: flex;
  margin-left: 32px;
  
  @media only screen and (max-width: 1100px) {
    margin-left: 0px;
    margin-top: 1rem;
  }
`,je=e=>s.jsxs(m8,{children:[s.jsx("h3",{children:e.inputDesc}),s.jsx(g8,{children:e.elem})]}),x8=b.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,y8=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,v8=b.div`
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
    background: #094067;
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
`,w8=e=>{const[t,n]=g.useState({username:e.username,email:e.email,phone:e.phone}),[r,i]=g.useState(!1),o={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0,toastId:"toast1"},a=()=>{const{email:u,phone:d,username:f}=t;return u==""||d==""||f==""?(D.error("Fill in all the details",o),!1):mp(u)?!0:(D.error("Not a valid email",o),!1)},l=async()=>{a()&&(i(!0),await ee.patch(`${te}${ne}/user/mycontactInfo`,{userName:t.username,email:t.email,phoneNumber:t.phone},{headers:ie(e.userToken)}).then(({data:u})=>{i(!1),console.log(u.updatedUser);const d=u.updatedUser;d.token=e.userToken,localStorage.setItem(Dt,JSON.stringify(d)),window.dispatchEvent(new Event("storage")),window.location.reload()}).catch(u=>{console.log(u),i(!1),u.response.data.message?D.error(u.response.data.message,o):D.error("Some error occured, couldnt update",o)}))},c=u=>{n(d=>({...d,...u}))};return s.jsxs(x8,{children:[s.jsx(y8,{children:s.jsx("h4",{children:"Contact Information"})}),s.jsxs("form",{action:"",children:[s.jsx(je,{elem:s.jsx(He,{label:"UserName",name:"username",type:"text",value:t.username,updateFields:c}),inputDesc:"Change your Username :-"}),s.jsx(je,{elem:s.jsx(He,{label:"Email",name:"email",type:"email",value:t.email,updateFields:c}),inputDesc:"Change your Email :-"}),s.jsx(je,{elem:s.jsx(He,{label:"Phone Number",name:"phone",type:"string",value:t.phone,updateFields:c}),inputDesc:"Change your Phone Number :-"})]}),s.jsx(v8,{children:s.jsx("button",{type:"submit",onClick:l,children:r?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Edit User Info"})})]})},b8=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,S8=b.div`
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
`,j8=b.div`
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
`,Zn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},C8=e=>{console.log("Checking");const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}return s.jsxs(s.Fragment,{children:[s.jsxs(b8,{children:[s.jsxs(S8,{children:[s.jsx("h4",{children:"Contact Information"}),s.jsx(zp,{onClickFunc:r})]}),s.jsxs(j8,{children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Username"}),s.jsx("span",{children:e.username})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Email"}),s.jsx("span",{children:e.email})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Phone Number"}),s.jsx("span",{children:e.phone})]})]})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Zn,contentLabel:"Example Modal",children:s.jsx(w8,{email:e.email,phone:e.phone,username:e.username,userToken:e.userToken,closeModal:i})})]})},k8=b.div`
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
`,_8=b.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,T8=b.div`
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
`,E8=b.div`
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
`,O8=()=>{const[e,t]=g.useState(!1);function n(){t(!0)}function r(){t(!1)}const[i,o]=g.useState(""),{fetchLocalUserToken:a}=Le();g.useEffect(()=>{a().then(u=>{o(u)})},[]);const l=me(),c=async()=>{i&&await ee.patch(`${te}${ne}/user/deleteMe`,{},{headers:ie(i??"")}).then(({data:u})=>{console.log(u),localStorage.clear(),l("/teachNlearn")})};return s.jsxs(s.Fragment,{children:[s.jsx(k8,{onClick:n,children:"Delete Account"}),s.jsx(mn,{isOpen:e,onRequestClose:r,style:Zn,children:s.jsxs(_8,{children:[s.jsx(T8,{children:s.jsx("h4",{children:"DeActivate Account"})}),s.jsx("h2",{children:"Are you sure you want to delete your account??"}),s.jsxs(E8,{children:[s.jsx("button",{onClick:r,children:"Go Back"}),s.jsx("button",{className:"delete",onClick:c,children:"Delete Account"})]})]})})]})},zw=b.div`
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
`,P8=b.span`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(19px);
  pointer-events: none;
  font-size: 16px;
  /* text-transform: ${e=>e.isValid?"none":"uppercase"}; */
  transition: 0.25s;
  line-height: 1;
  transform: ${e=>e.isValid?"translateX(5px) translateY(-5px)":"null"};
  font-size: ${e=>e.isValid?"11px":"16px"};
  background-color: ${e=>e.isValid?"white":"none"};
  color: ${e=>e.isValid?"#b3b8db":"#564c4d"};
  padding: ${e=>e.isValid?"0 5px":"none"};

  ${zw}:focus-within & {
    text-transform: none;
    transform: translateX(5px) translateY(-5px);
    font-size: 11px;
    background-color: white;
    color: #b3b8db;
    padding: 0 5px;
  }
`,I8=b.div`
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
`,D8=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
    text-transform: capitalize;
  }
`,Gr=e=>{var d,f;const[t,n]=g.useState(!1),[r,i]=g.useState(!1);g.useEffect(()=>{var h;((h=e.value)==null?void 0:h.trim().length)>0&&n(!0)},[]);const o=h=>{i(!0),e.updateFields({[e.elemName]:h.target.value});const p=h.target.value;(p==null?void 0:p.trim().length)>0?n(!0):n(!1)},a=h=>{var p;console.log(h.key=="Enter"),h.key=="Enter"&&((p=e.arr)==null||p.push(e.value),console.log(e.arr),e.updateFields({[e.name]:e.arr,[e.elemName]:""}))},l=h=>{e.updateFields({[e.elemName]:h}),i(!1)},c=()=>{i(!1)},u=g.useRef(null);return bo(u,c,!1,null,!1,null),s.jsxs(zw,{children:[s.jsx("input",{type:"text",required:!0,value:e.value,name:e.name,onChange:h=>o(h),onKeyDown:a,disabled:e.arr.length==e.maxLimit}),s.jsx(P8,{isValid:t,children:e.label}),e.maxLimit&&s.jsxs(D8,{children:[s.jsx("span",{children:"*Hit Enter to add"}),s.jsxs("span",{children:["Max ",e.maxLimit]})]}),e.hasDropdown?e.value==""?null:r&&(((d=e.dropdownData)==null?void 0:d.filter(h=>{if(typeof e.value=="string")return h.toLowerCase().includes(e.value.toLowerCase())}).length)==0?null:s.jsx(I8,{ref:u,children:(f=e.dropdownData)==null?void 0:f.filter(h=>{if(typeof e.value=="string")return h.toLowerCase().includes(e.value.toLowerCase())}).map((h,p)=>s.jsx("span",{onClick:()=>l(h),children:h},p))})):null]})},N8=b.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */

  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 0.4rem;
  /* margin-top: 1rem; */
  width: 100%;
`,L8=b.div`
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
`,$8=b.div``,qr=e=>{const t=n=>{let r=e.listArr.filter((i,o)=>(console.log(i==n),i!=n));e.updateFields({[e.name]:r})};return s.jsx(N8,{children:e.listArr.map((n,r)=>s.jsxs(L8,{children:[s.jsx("span",{children:n}),s.jsx($8,{onClick:()=>t(n),children:s.jsx(lp,{})})]},r))})},ko=["English","Mathematics","Physics","Chemistry","Biology","History","Geography","Economics","Political Science","Hindi","Sanskrit","French","German","Spanish","Physical Education","Computer Science","Business Studies/Commerce","Accountancy","Economics","Psychology","Sociology","Philosophy","Literature","Environmental Science","Political Science","Statistics","Mechanical","Civil","Electrical","Food Technology","Software Development","Web Development","Devops","AI","Blockchain","App Development","Biology","Anatomy","Physology","Biochemistry","Law","Media Studies","Religious Studies","Cultural Studies","Visual Arts","Music","Dance","Drama","Home Science","Agriculture","Food Technology","Hotel Management","Fashion Design","Journalism","Mass Communication","Architecture","Pharmacy","Product Design","Graphic Design","Fashion Design","Chemistry","Physics","Mathematics","Liberal Arts","Literature in English","Linguistics","Anthropology","Geology","Electronics","Biotechnology","Microbiology","Bioinformatics","Zoology","Botany","Geography","Geoinformatics","Animation and Multimedia"],uu=["Hindi","Bengali","Telugu","Marathi","Tamil","Urdu","Gujarati","Kannada","Odia (Oriya)","Punjabi","Malayalam","Assamese","Maithili","Santali","Kashmiri","Nepali","Konkani","Manipuri (Meitei)","Bodo","Sindhi","Mandarin Chinese","English","Spanish","Arabic","Portuguese","Russian","Japanese","German","French","Italian","Korean","Turkish","Indonesian","Persian (Farsi)","Swahili","Dutch","Polish"],M8=b.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,R8=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,Gn=b.div`
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
    background: #094067;
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
`,yd=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,A8=e=>{const[t,n]=g.useState({course:e.course,interstedSubjects:e.interstedSubjects,strongSubjects:e.strongSubjects,preferredLanguages:e.preferredLanguages,strongSubject:e.strongSubject,interestedSubject:e.interestedSubject,language:e.language}),[r,i]=g.useState(!1),o={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0,toastId:"toast1"},a=()=>{const{course:u,interstedSubjects:d,preferredLanguages:f,strongSubjects:h}=t;return u==""||d.length==0||h.length==0||f.length==0?(D.error("Fill in all the details",o),!1):d.length>5||h.length>5?(D.error("Cannot select more than 5 subjects ",o),!1):f.length>3?(D.error("Cannot select more than 3 languages ",o),!1):!0},l=async()=>{a()&&(i(!0),await ee.patch(`${te}${ne}/user/myacademicInfo`,{enrolledProgramme:t.course,strongSubjects:t.strongSubjects,interestedSubjects:t.interstedSubjects,preferredLanguages:t.preferredLanguages},{headers:ie(e.userToken)}).then(({data:u})=>{console.log(u.updatedUser),i(!1),window.location.reload()}).catch(u=>{console.log(u),i(!1),D.error("Some error occured",o)}))},c=u=>{n(d=>({...d,...u}))};return s.jsxs(M8,{children:[s.jsx(R8,{children:s.jsx("h4",{children:"Academic Information"})}),s.jsxs("form",{action:"",children:[s.jsx(je,{elem:s.jsx(He,{label:"Entrolled Programme",name:"course",type:"text",updateFields:c,value:t.course}),inputDesc:"Change your Course"}),s.jsx(je,{elem:s.jsxs(yd,{children:[s.jsx(Gr,{label:"Strong Subjects",value:t.strongSubject,elemName:"strongSubject",name:"strongSubjects",arr:t.strongSubjects,updateFields:c,hasDropdown:!0,dropdownData:ko,maxLimit:5}),s.jsx(qr,{listArr:t.strongSubjects,updateFields:c,name:"strongSubjects"})]}),inputDesc:"Change your Strong Subjects"}),s.jsx(je,{elem:s.jsxs(yd,{children:[s.jsx(Gr,{label:"Interested Subjects",value:t.interestedSubject,elemName:"interestedSubject",name:"interstedSubjects",arr:t.interstedSubjects,updateFields:c,hasDropdown:!0,dropdownData:ko,maxLimit:5}),s.jsx(qr,{listArr:t.interstedSubjects,updateFields:c,name:"interstedSubjects"})]}),inputDesc:"Change your Interested Subjects"}),s.jsx(je,{elem:s.jsxs(yd,{children:[s.jsx(Gr,{label:"Preferred Language",value:t.language,elemName:"language",name:"preferredLanguages",arr:t.preferredLanguages,updateFields:c,hasDropdown:!0,dropdownData:uu,maxLimit:3}),s.jsx(qr,{listArr:t.preferredLanguages,updateFields:c,name:"preferredLanguages"})]}),inputDesc:"Change your Interested Subjects"})]}),s.jsx(Gn,{children:s.jsx("button",{type:"submit",onClick:l,children:r?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Edit Academic Info"})})]})},F8=b.div`
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
`,z8=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,U8=b.div`
  /* border: 1px solid red; */

  textarea {
    margin-bottom: 2rem;
  }

  button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`,B8=({userToken:e})=>{const[t,n]=g.useState(""),r=$t();g.useEffect(()=>{const w=r.state.userId;n(w)},[r]);const[i,o]=g.useState(""),[a,l]=g.useState(!1),c={position:D.POSITION.BOTTOM_RIGHT,autoClose:2e3,pauseOnHover:!0,draggable:!0},u=async()=>{i!=""&&(l(!0),await ee.post(`${te}${ne}/user/${t}/report`,{feedback:i},{headers:ie(e)}).then(({data:w})=>{console.log(w),l(!1),o(""),D.success("We have recieved your report!!",c),p()}).catch(w=>{console.log(w),l(!1),D.error("Error in recieving report!!",c)}))},[d,f]=g.useState(!1);function h(){f(!0)}function p(){f(!1)}function y(w){o(w)}return s.jsxs(s.Fragment,{children:[s.jsx(F8,{onClick:h,children:"Report User"}),s.jsx(mn,{isOpen:d,onRequestClose:p,style:Zn,children:s.jsxs(U8,{children:[s.jsx(z8,{children:s.jsx("h4",{children:"Report User"})}),s.jsx(Kt,{label:"Report User",name:"feedback",value:i,areaHeight:"10rem",placeholderText:"Report User",updateSingleField:y}),s.jsxs(Gn,{children:[s.jsx("button",{type:"submit",onClick:p,children:"Go back"}),s.jsx("button",{type:"submit",onClick:u,children:a?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Report"})]})]})})]})},H8=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  /* background: #ef4565; */
  background: ${e=>e.isFavourite?"rgba(239, 69, 101, 0.6)":"rgb(239, 69, 101)"};
  border-radius: 41px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 1rem;
`,W8=e=>{const[t,n]=g.useState(""),r=$t();g.useEffect(()=>{const a=r.state.userId;n(a)},[r]);const i={position:D.POSITION.BOTTOM_RIGHT,autoClose:2e3,pauseOnHover:!0,draggable:!0},o=async()=>{console.log(t),await ee.patch(`${te}${ne}/user/${t}/addfavourite`,{},{headers:ie(e.userToken)}).then(({data:a})=>{console.log(a.updatedUser);const l=a.updatedUser.favouriteUsers;let c=a.updatedUser;c.token=e.userToken,localStorage.setItem(Dt,JSON.stringify(c)),window.dispatchEvent(new Event("storage")),l.includes(t)?D.success("User added to favourites",i):D.success("User removed from favourites",i)}).catch(()=>{D.error("Couldnt make changes!!",i)})};return s.jsx(H8,{isFavourite:e.favouriteUsers.includes(t),onClick:o,children:"Add to favourites"})},Y8=b.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px 15px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
  height: max-content;
  position: sticky;
  top: 1rem;
`,V8=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 4rem;
`,G8=b.div`
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
`,Uw=({setSelectedLeftScreen:e,profileOptions:t,isOtherUser:n,userToken:r,favouriteUsers:i})=>{const[o,a]=g.useState(t[0].label),l=c=>{a(c),e(c)};return s.jsxs(Y8,{children:[s.jsx(V8,{children:t.map((c,u)=>s.jsxs(G8,{isSelected:o==c.label,onClick:()=>l(c.label),children:[c.icon,s.jsx("span",{children:c.option})]},u))}),!n&&s.jsx(O8,{}),n&&r&&i&&s.jsx(W8,{userToken:r,favouriteUsers:i}),n&&r&&s.jsx(B8,{userToken:r})]})},q8=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,Q8=b.div`
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
`,K8=b.div`
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
`,vd=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  /* align-items: center; */
`,wd=b.div`
  /* border: 1px solid #697586; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
`,Z8={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",height:"80vh"}},J8=e=>{var o,a,l;const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}return s.jsxs(s.Fragment,{children:[s.jsxs(q8,{children:[s.jsxs(Q8,{children:[s.jsx("h4",{children:"Academic Information"}),s.jsx(zp,{onClickFunc:r})]}),s.jsxs(K8,{children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Course"}),s.jsx("span",{children:e.course})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Strong Subjects"}),s.jsx(vd,{children:(o=e.strongSubjects)==null?void 0:o.map((c,u)=>s.jsx(wd,{children:c},u))})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Interested Subjects"}),s.jsx(vd,{children:(a=e.interstedSubjects)==null?void 0:a.map((c,u)=>s.jsx(wd,{children:c},u))})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Preferred Languages"}),s.jsx(vd,{children:(l=e.preferredLanguages)==null?void 0:l.map((c,u)=>s.jsx(wd,{children:c},u))})]})]})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Z8,children:s.jsx(A8,{course:e.course,interestedSubject:e.interestedSubject,interstedSubjects:e.interstedSubjects,strongSubject:e.strongSubject,strongSubjects:e.strongSubjects,language:e.language,preferredLanguages:e.preferredLanguages,updateFields:e.updateFields,userToken:e.userToken,closeModal:i})})]})},X8=b.div`
  width: 50vw;
  padding: 20px 32px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    margin-bottom: 3rem;
    /* border: 1px solid red; */
  }
`,eE=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,tE=b.div`
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
    background: #094067;
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
`,nE=e=>{const[t,n]=g.useState({name:e.name,tagline:e.tagline}),[r,i]=g.useState(!1),o={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},a=()=>{const{name:u,tagline:d}=t;return u==""||d==""?(D.error("Fill in all the details",o),!1):d.length<30?(D.error("Tagline in too short",o),!1):!0},l=async()=>{a()&&(i(!0),await ee.patch(`${te}${ne}/user/myInfo`,{name:t.name,tagline:t.tagline},{headers:ie(e.userToken??"")}).then(({data:u})=>{i(!1),console.log(u.updatedUser);const d=u.updatedUser;d.token=e.userToken,localStorage.setItem(Dt,JSON.stringify(d)),window.dispatchEvent(new Event("storage")),window.location.reload()}).catch(u=>{i(!1),D.error("Some error occured, couldnt update",o)}))},c=u=>{n(d=>({...d,...u}))};return s.jsxs(X8,{children:[s.jsx(eE,{children:s.jsx("h4",{children:"Contact Information"})}),s.jsxs("form",{action:"",children:[s.jsx(je,{elem:s.jsx(He,{label:"Name",name:"name",type:"text",value:t.name,updateFields:c}),inputDesc:"Change your Name :-"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Tagline",name:"tagline",value:t.tagline,updateFields:c,areaHeight:"10rem"}),inputDesc:"Change your Tagline :-"})]}),s.jsx(tE,{children:s.jsx("button",{type:"submit",onClick:l,children:r?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Edit User Info"})})]})},Bw=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 28px;
  background: #094067;
  border-radius: 36px;
`,Hw=b.div`
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
`,Ww=b.div`
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
`,Yw=e=>{console.log(e.userId);const[t,n]=g.useState(0),[r,i]=g.useState(0);async function o(){await ee.get(`${te}${ne}/user/${e.userId}/myratings`,{headers:ie(e.userToken)}).then(({data:a})=>{console.log(a),a.stats[0]&&(i(a.stats[0].nRatings),n(a.stats[0].avgRating))})}return g.useEffect(()=>{e.userToken&&e.userId&&o()},[e.userToken,e.userId]),s.jsxs(Bw,{children:[s.jsx(Hw,{children:s.jsx("h4",{children:"Stats as a Teacher"})}),s.jsxs(Ww,{children:[s.jsxs("div",{children:[s.jsx("h5",{children:"Taught"}),s.jsx("h3",{children:e.taught})]}),s.jsxs("div",{children:[s.jsx("h5",{children:"Total Ratings"}),s.jsx("h3",{children:r})]}),s.jsxs("div",{children:[s.jsx("h5",{children:"Average Rating"}),s.jsxs("h3",{children:[Math.round(t*10)/10," / 10"]})]})]})]})},rE=b.div`
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
`;b.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  /* cursor: pointer; */
  font-size: 24px;
  height: 100%;
`;const iE=b.span`
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
`,oE=b.div`
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
`,sE=b.div`
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
`,Vw=({updateFields:e,photoOnCross:t,photoName:n})=>{const r=g.useRef(null),[i,o]=g.useState(""),a=c=>{if(!c)return;if(r.current!=null){const d=r.current.files;if(d!=null){const f=d[0].name;console.log(f),o(f)}}console.log(c[0]);const u=c[0];if(u.type==="image/jpeg"||u.type==="image/png"){const d=new FormData;d.append("file",u),d.append("upload_preset","chat-app"),d.append("cloud_name","dkgrvhkxb"),fetch("https://api.cloudinary.com/v1_1/dkgrvhkxb/image/upload",{method:"post",body:d}).then(f=>f.json()).then(f=>{e({photo:f.url.toString()}),console.log(f),console.log(f.url.toString())}).catch(f=>{console.log(f)})}else console.log("errrrrrorrrr")},l=()=>{e({photo:t||""}),o(n||"")};return s.jsxs(rE,{children:[s.jsx("input",{type:"file",accept:"image/*",ref:r,onChange:c=>a(c.target.files)}),s.jsx(sE,{onClick:l,children:s.jsx(lp,{})}),s.jsx(iE,{children:"Profile Pic"}),s.jsx(oE,{children:i?s.jsx("span",{children:i}):s.jsxs(s.Fragment,{children:[s.jsx(q3,{}),s.jsx("span",{children:"Click to Upload"})]})})]})},aE=b.div`
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
`,lE=b.div`
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
`,cE=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,uE=b.div`
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
`,dE=b.div`
  /* border: 1px solid red; */
  margin-bottom: 3rem;
`,fE={content:{width:"50vw",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},hE=e=>{const[t,n]=g.useState(e.photo),[r,i]=g.useState(!1),[o,a]=g.useState(!1);function l(){i(!0)}function c(){i(!1)}const u=async()=>{e.updateFields({photo:t}),c()},d={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},f=async()=>{a(!0),await ee.patch(`${te}${ne}/user/myPhoto`,{photo:e.photo},{headers:ie(e.userToken)}).then(({data:h})=>{console.log(h.updatedUser),a(!1);const p=h.updatedUser;p.token=e.userToken,localStorage.setItem(Dt,JSON.stringify(p)),c()}).catch(h=>{a(!1),D.error("Some error occured, couldnt update",d)})};return s.jsxs("div",{children:[s.jsx(lE,{onClick:l,modalIsOpen:r,children:s.jsx("img",{src:e.photo,alt:"user-img"})}),s.jsx(mn,{isOpen:r,onRequestClose:c,style:fE,ariaHideApp:!1,children:s.jsxs(aE,{children:[s.jsx(cE,{children:s.jsx("h4",{children:"Your Profile Image"})}),s.jsx(uE,{children:s.jsx("img",{src:e.photo,alt:""})}),s.jsx(dE,{children:s.jsx(je,{elem:s.jsx(Vw,{updateFields:e.updateFields,photoName:"",photoOnCross:t}),inputDesc:"Change profile image"})}),s.jsxs(Gn,{children:[s.jsx("button",{type:"submit",onClick:u,children:"Go back"}),s.jsx("button",{type:"submit",onClick:f,children:o?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Ok"})]})]})})]})},Gw=e=>s.jsxs(Bw,{children:[s.jsx(Hw,{children:s.jsx("h4",{children:"Stats as a Student"})}),s.jsx(Ww,{children:s.jsxs("div",{children:[s.jsx("h5",{children:"Attended"}),s.jsx("h3",{children:e.attended})]})})]}),qw=b.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 44px;
  /* width: 95%; */
`,pE=b.div`
  /* border: 1px solid red; */
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
`,mE=b.h3`
  font-size: 26px;
  line-height: 41px;
  color: #000000;
`,gE=b.div`
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
`,Qw=b.div`
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

  div.user-name {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    column-gap: 8px;

    h5 {
      color: #4b5565;
      font-size: 16px;
    }
  }
`,xE={_id:"",name:"",userName:"",photo:"",tagline:"",email:"",enrolledProgramme:"",phoneNumber:"",role:"",classesEnrolled:[],classesTaken:[],interestedSubject:"",interestedSubjects:[],strongSubject:"",strongSubjects:[],language:"",preferredLanguages:[],token:""},f1=()=>{const[e,t]=g.useState(xE),[n,r]=g.useState(""),{fetchLocalUserToken:i}=Le();g.useEffect(()=>{i().then(f=>{r(f)})},[]);async function o(){await ee.get(`${te}${ne}/user/me`,{headers:ie(n)}).then(({data:f})=>{const h=f.data.data[0];h.token=n,console.log(h),t(h)})}g.useEffect(()=>{n&&o()},[n]);function a(f){e&&t(h=>({...h,...f}))}const[l,c]=g.useState(!1);function u(){c(!0)}function d(){c(!1)}return e._id.length!=0?s.jsxs(qw,{children:[s.jsx(pE,{children:s.jsx(mE,{children:"My profile"})}),s.jsxs(gE,{children:[s.jsx(hE,{photo:e.photo,updateFields:a,userToken:e.token}),s.jsxs(Qw,{children:[s.jsx("h4",{children:e.name}),e.tagline?s.jsx("p",{children:e.tagline}):s.jsx("p",{children:"Add Tagline for your profile ..."})]}),s.jsx(zp,{onClickFunc:u}),s.jsx(mn,{isOpen:l,onRequestClose:d,style:Zn,ariaHideApp:!1,children:s.jsx(nE,{name:e.name,tagline:e.tagline,userToken:e.token,closeModal:d})})]}),s.jsx(Yw,{taught:e.classesTaken.length,userId:e._id,userToken:e.token}),s.jsx(Gw,{attended:e.classesEnrolled.length}),s.jsx(C8,{username:e.userName,email:e.email,phone:e.phoneNumber,updateFields:a,userToken:n}),s.jsx(J8,{course:e.enrolledProgramme,strongSubjects:e.strongSubjects,interestedSubject:e.interestedSubject,interstedSubjects:e.interestedSubjects,language:e.language,strongSubject:e.strongSubject,preferredLanguages:e.preferredLanguages,updateFields:a,userToken:n}),s.jsx(hn,{theme:"dark"})]}):s.jsx(_e,{})},yE=b.div`
  /* border: 1px solid red; */
  margin-left: 1rem;
  margin-top: 1rem;

  h4 {
    font-size: 1rem;
    color: #4b5565;
    text-decoration: underline;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  header {
    margin-bottom: 1.5rem;
    div {
      display: flex;
      align-items: center;
      column-gap: 6px;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  div.coin-cont {
    display: flex;
    width: 100%;
    column-gap: 2rem;
    /* display: grid; */
    /* grid-template-columns: auto auto; */
  }
`,h1=b.div`
  /* border: 1px solid red; */
  border: 1px solid #d5d9eb;
  padding: 32px 54px;
  border-radius: 8px;
  display: flex;
  width: fit-content;
  flex-direction: column;
  /* row-gap: 6px; */

  h4 {
    text-decoration: underline;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`,vE=()=>{const[e,t]=g.useState(0),[n,r]=g.useState(0),[i,o]=g.useState(0),[a,l]=g.useState(""),[c,u]=g.useState(!1),{fetchLocalUserToken:d}=Le();g.useEffect(()=>{d().then(h=>{l(h)})},[]);const f=async()=>{u(!0),await ee.get(`${te}${ne}/user/mybalance`,{headers:ie(a)}).then(({data:h})=>{const p=h.user;t(p.coins),r(p.forumCoins),o(p.reviewCoins),u(!1)})};return g.useEffect(()=>{a&&f()},[a]),c?s.jsx(_e,{}):s.jsxs(yE,{children:[s.jsxs("header",{children:[s.jsx("h4",{children:"Total Balance"}),s.jsxs("div",{children:[s.jsx(Lf,{color:"black"}),s.jsx("h2",{children:e+n+i})]})]}),s.jsxs("div",{className:"coin-cont",children:[s.jsxs(h1,{children:[s.jsx("h4",{children:"Coins from Class Reviews"}),s.jsx("h3",{children:i})]}),s.jsxs(h1,{children:[s.jsx("h4",{children:"Coins from Forum"}),s.jsx("h3",{children:n})]})]})]})},wE=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  padding: 1.2rem 0.8rem;
  box-sizing: border-box;
  border-bottom: 1px solid #d5d9eb;
  cursor: pointer;

  img {
    /* border: 1px solid red; */
    width: 51px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
  }

  div.names {
    /* border: 1px solid red; */
    display: flex;
    /* flex-direction: column; */
    column-gap: 0.6rem;
    align-items: center;
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
    font-size: 15px;
    color: #000000;
  }
`,Kw=({userArr:e,localUserId:t})=>{const n=me(),r=i=>{ve(),t==i?n("/me"):n(`/user/${i}`,{state:{userId:i}})};return s.jsx("div",{children:e.map((i,o)=>s.jsxs(wE,{onClick:()=>r(i._id),children:[s.jsx("img",{src:i.photo,alt:"user-img"}),s.jsxs("div",{className:"user",children:[s.jsxs("div",{className:"names",children:[s.jsx("h4",{children:i.name}),s.jsxs("h5",{children:["@",i.userName]})]}),s.jsx("p",{children:i.tagline})]})]},o))})},bE=b.div`
  /* border: 1px solid red; */
  padding-top: 1rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* row-gap: 1.6rem; */
  margin-left: 1rem;
`,SE=()=>{const[e,t]=g.useState(""),[n,r]=g.useState(""),[i,o]=g.useState(!1),{fetchLocalUserData:a}=Le(),[l,c]=g.useState();g.useEffect(()=>{a().then(d=>{r(d.token),t(d._id)})},[]);const u=async()=>{o(!0),await ee.get(`${te}${ne}/user/myfavourites`,{headers:ie(n)}).then(({data:d})=>{console.log(d),c(d.userFavourites.favouriteUsers),o(!1)}).catch(d=>{console.log(d),o(!1)})};return g.useEffect(()=>{n&&u()},[n]),s.jsx(bE,{children:i?s.jsx(_e,{}):l&&s.jsx(Kw,{userArr:l,localUserId:e})})},Zw=b.div`
  border: 2px solid #d5d9eb;
  border-radius: 12px;
  padding: 45px;
  margin: 50px;
  display: grid;
  grid-template-columns: 25% 70%;
  gap: 30px;
`,Jw=b.div`
  border-left: 1px solid #d5d9eb;
`,jE=()=>{const[e,t]=g.useState("MyProfile");g.useEffect(()=>{console.log(e),e=="MyProfile"?r(s.jsx(f1,{})):e=="MyWallet"?r(s.jsx(vE,{})):e=="MyFavourites"&&r(s.jsx(SE,{}))},[e]);const[n,r]=g.useState(s.jsx(f1,{})),i=[{option:"My profile",label:"MyProfile",icon:s.jsx(Ec,{})},{option:"My Wallet",label:"MyWallet",icon:s.jsx($3,{})},{option:"My Favourites",label:"MyFavourites",icon:s.jsx(M3,{})}];return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(Zw,{children:[s.jsx(Uw,{profileOptions:i,setSelectedLeftScreen:t,isOtherUser:!1}),s.jsx(Jw,{children:n})]}),s.jsx(Qe,{})]})},CE=b.div`
  background-color: #094067;
  border-radius: 24px;
  padding: 15vh 2.5rem 20vh 4rem;
  position: relative;
  overflow: hidden;
  z-index: -3;

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }

  @media only screen and (max-width: 870px) {
    width: 100%;
    padding: 8vh 2.5rem 5vh 4rem;
    /* border-radius: 8px; */
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  @media only screen and (max-width: 450px) {
    /* width: 100%; */
    padding: 8vh 2rem 5vh 2.5rem;
  }
`,kE=b.div`
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

  @media only screen and (max-width: 450px) {
    svg {
      width: 100vw;
      height: 30vh;
    }
  }
`,_E=b.div`
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

  @media only screen and (max-width: 450px) {
    svg {
      width: 140vw;
      height: 40vh;
    }
  }
`,TE=b.div`
  z-index: 100;
  h4 {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
    margin-bottom: 35vh;
  }

  svg {
    /* border: 1px solid red; */
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
  div.quote {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div.mobile-text {
    display: none;
    /* border: 1px solid red; */
    p {
      text-indent: 0px;
    }
  }

  @media only screen and (max-width: 1100px) {
    /* border: 1px solid red; */
    h4 {
      font-size: 32px;
    }

    svg {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 36px;
      line-height: 48px;
    }
  }
  @media only screen and (max-width: 950px) {
    /* border: 1px solid red; */
    h4 {
      font-size: 28px;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media only screen and (max-width: 870px) {
    h4 {
      font-size: 48px;
      margin-bottom: 8vh;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 32px;
      line-height: 56px;
    }
  }
  @media only screen and (max-width: 550px) {
    h4 {
      font-size: 38px;
      margin-bottom: 4vh;
    }

    svg {
      width: 24px;
      height: 24px;
      margin-bottom: 0rem;
    }

    span {
      font-size: 18px;
    }

    p {
      font-size: 26px;
      line-height: 36px;
      margin-bottom: 0.5rem;
      text-indent: 50px;
    }
  }
  @media only screen and (max-width: 450px) {
    h4 {
      font-size: 44px;
    }
    div.mobile-text {
      display: flex;
    }
    div.quote {
      display: none;
    }
  }
`,Xw=e=>s.jsxs(CE,{children:[s.jsx(kE,{children:s.jsx(V3,{})}),s.jsx(_E,{children:s.jsx(G3,{})}),s.jsxs(TE,{children:[s.jsx("h4",{children:e.heading}),s.jsxs("div",{className:"quote",children:[s.jsx(R3,{}),s.jsx("p",{children:"If you want to master something, teach it."}),s.jsx("div",{children:s.jsx("span",{children:"- Richard Feynman"})})]}),s.jsx("div",{className:"mobile-text",children:s.jsx("p",{children:"Login to your account"})})]})]});function EE(e){const[t,n]=g.useState(0);function r(){ve(),n(a=>a>=e.length-1?a:a+1)}function i(){ve(),n(a=>a<=0?a:a-1)}function o(a){n(a)}return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:t===0,isLastStep:t===e.length-1,next:r,back:i,goTo:o}}const OE=b.div`
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
`,PE=e=>s.jsx(OE,{children:s.jsxs("form",{children:[s.jsx(He,{type:"text",label:"Full Name",value:e.fullName,name:"fullName",updateFields:e.updateFields,isRequired:!0,placeholderText:"Full Name"}),s.jsx(He,{type:"text",label:"Username (publicly visible)",value:e.userName,name:"userName",updateFields:e.updateFields,isRequired:!0,placeholderText:"Username (publicly visible)"}),s.jsx(He,{type:"email",label:"Email",name:"email",value:e.email,updateFields:e.updateFields,isRequired:!0,placeholderText:"Email"}),s.jsx(He,{type:"password",label:"Password",name:"password",value:e.password,updateFields:e.updateFields,isRequired:!0,placeholderText:"Password"}),s.jsx(He,{type:"password",label:"Confirm Password",name:"confirmPassword",value:e.confirmPassword,updateFields:e.updateFields,isRequired:!0,placeholderText:"Confirm Password"})]})}),IE=b.div`
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
`,ws=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,DE=e=>s.jsx(IE,{children:s.jsxs("form",{action:"",children:[s.jsx(Vw,{updateFields:e.updateFields}),s.jsx(He,{type:"text",label:"Phone Number",value:e.number,name:"number",updateFields:e.updateFields,placeholderText:"Phone Number"}),s.jsx(He,{type:"text",label:"Course/Exam/Board/Degree",value:e.course,name:"course",updateFields:e.updateFields,isRequired:!0,placeholderText:"Course/Exam/Board/Degree you are currently preparing for"}),s.jsx(He,{type:"text",label:"Standard/Year",value:e.standard,name:"standard",updateFields:e.updateFields,isRequired:!1,placeholderText:"Standard/Year"}),s.jsxs(ws,{children:[s.jsx(Gr,{label:"Subjects you mostly need help in",value:e.interestedSubject,name:"interestedSubjects",elemName:"interestedSubject",updateFields:e.updateFields,arr:e.interestedSubjects,hasDropdown:!0,dropdownData:ko,maxLimit:5}),e.interestedSubjects.length!=0?s.jsx(qr,{listArr:e.interestedSubjects,updateFields:e.updateFields,name:"interestedSubjects"}):null]}),s.jsxs(ws,{children:[s.jsx(Gr,{label:"Subjects you can help others in",value:e.strongSubject,elemName:"strongSubject",name:"strongSubjects",updateFields:e.updateFields,arr:e.strongSubjects,hasDropdown:!0,dropdownData:ko,maxLimit:5}),e.strongSubjects.length!=0?s.jsx(qr,{listArr:e.strongSubjects,updateFields:e.updateFields,name:"strongSubjects"}):null]}),s.jsxs(ws,{children:[s.jsx(Gr,{label:"Preferred Languages",value:e.language,elemName:"language",name:"preferredLanguages",updateFields:e.updateFields,arr:e.preferredLanguages,hasDropdown:!0,dropdownData:uu,maxLimit:3}),e.preferredLanguages.length!=0?s.jsx(qr,{listArr:e.preferredLanguages,updateFields:e.updateFields,name:"preferredLanguages"}):null]})]})}),NE=b.div`
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
`,LE=e=>s.jsxs(NE,{index:e.index,children:[s.jsx("div",{className:"first"}),s.jsx("div",{className:"second"})]}),$E=b.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
  padding-right: 2rem;

  @media only screen and (max-width: 870px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
`,ME=b.div`
  /* border: 1px solid red; */
  width: 55vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    width: 100vw;
  }
`,RE=b.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 45vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    padding: 0;
    width: 100vw;
  }
`,AE=b.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 80%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  @media only screen and (max-width: 870px) {
    border: none;
    width: 100%;
  }

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
`,FE=b.div`
  /* border: 1px solid red; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
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
`,zE={fullName:"",userName:"",email:"",password:"",confirmPassword:"",photo:"",number:"",course:"",standard:"",interestedSubject:"",interestedSubjects:[],strongSubject:"",strongSubjects:[],preferredLanguages:[],language:""},UE=()=>{const e=me();g.useEffect(()=>{localStorage.getItem(Dt)&&e("/")},[e]);const[t,n]=g.useState(zE);function r(j){n(x=>({...x,...j}))}const{step:i,isFirstStep:o,isLastStep:a,next:l,back:c,currentStepIndex:u}=EE([s.jsx(PE,{...t,updateFields:r}),s.jsx(DE,{...t,updateFields:r})]),d={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},f=()=>{const{fullName:j,userName:x,email:m,password:v,confirmPassword:S,course:C}=t;if(j===""||x===""||m===""||v===""||S===""||C==="")return D.error("Fill in all the details",d),!1;if(mp(m)){if(x.length>25)return D.error("Username cannot be greater than 25 char!!",d),!1;if(v.length<6)return D.error("Password is short",d),!1;if(S.length<6)return D.error("Both passwords are not same",d),!1;if(v!=S)return D.error("Both passwords are not same",d),!1}else return D.error("Email is not valid!!",d),!1;return!0},[h,p]=g.useState(!1),y=async j=>{if(j.preventDefault(),a)j.preventDefault(),p(!0),f()&&await ee.post(`${te}${ne}/auth/signup`,{name:t.fullName,userName:t.userName,email:t.email,password:t.password,passwordConfirm:t.confirmPassword,photo:t.photo,phoneNumber:t.number,enrolledProgramme:t.course,standard:t.standard,interestedSubjects:t.interestedSubjects,strongSubjects:t.strongSubjects,preferredLanguages:t.preferredLanguages}).then(({data:x})=>{console.log(x),console.log(x.token),x.data.user.token=x.token,localStorage.setItem(Dt,JSON.stringify(x.data.user)),p(!1),w("/")}).catch(x=>{if(console.log(x),!x.response){D.error(x.message,d);return}const m=x.response.data.message;p(!1),D.error(m,d)});else return l()},w=j=>{ve(),e(j)};return s.jsxs($E,{children:[s.jsx(ME,{children:s.jsxs(AE,{children:[s.jsx(LE,{index:u}),i,s.jsxs(FE,{children:[s.jsx("button",{type:a?"submit":"button",onClick:y,children:a?h?s.jsx(_e,{color:"white",loaderHeight:"2rem"}):"Signup":"Next"}),a&&s.jsx("button",{type:"button",onClick:c,children:"Back"})]}),s.jsxs("span",{className:"login",children:["Already have an account?"," ",s.jsx("h5",{onClick:()=>w("/signin"),children:"Sign In!!"})]})]})}),s.jsx(RE,{children:s.jsx(Xw,{heading:o?"Get Started!":"Just a little more..."})}),s.jsx(hn,{theme:"dark"})]})};//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var e2;function W(){return e2.apply(null,arguments)}function BE(e){e2=e}function Nn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function yi(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function be(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Hp(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(be(e,t))return!1;return!0}function Rt(e){return e===void 0}function xr(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ua(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function t2(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function $r(e,t){for(var n in t)be(t,n)&&(e[n]=t[n]);return be(t,"toString")&&(e.toString=t.toString),be(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Jn(e,t,n,r){return k2(e,t,n,r,!0).utc()}function HE(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function ue(e){return e._pf==null&&(e._pf=HE()),e._pf}var Zf;Array.prototype.some?Zf=Array.prototype.some:Zf=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Wp(e){if(e._isValid==null){var t=ue(e),n=Zf.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function du(e){var t=Jn(NaN);return e!=null?$r(ue(t),e):ue(t).userInvalidated=!0,t}var p1=W.momentProperties=[],bd=!1;function Yp(e,t){var n,r,i,o=p1.length;if(Rt(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Rt(t._i)||(e._i=t._i),Rt(t._f)||(e._f=t._f),Rt(t._l)||(e._l=t._l),Rt(t._strict)||(e._strict=t._strict),Rt(t._tzm)||(e._tzm=t._tzm),Rt(t._isUTC)||(e._isUTC=t._isUTC),Rt(t._offset)||(e._offset=t._offset),Rt(t._pf)||(e._pf=ue(t)),Rt(t._locale)||(e._locale=t._locale),o>0)for(n=0;n<o;n++)r=p1[n],i=t[r],Rt(i)||(e[r]=i);return e}function da(e){Yp(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),bd===!1&&(bd=!0,W.updateOffset(this),bd=!1)}function Ln(e){return e instanceof da||e!=null&&e._isAMomentObject!=null}function n2(e){W.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function gn(e,t){var n=!0;return $r(function(){if(W.deprecationHandler!=null&&W.deprecationHandler(null,e),n){var r=[],i,o,a,l=arguments.length;for(o=0;o<l;o++){if(i="",typeof arguments[o]=="object"){i+=`
[`+o+"] ";for(a in arguments[0])be(arguments[0],a)&&(i+=a+": "+arguments[0][a]+", ");i=i.slice(0,-2)}else i=arguments[o];r.push(i)}n2(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var m1={};function r2(e,t){W.deprecationHandler!=null&&W.deprecationHandler(e,t),m1[e]||(n2(t),m1[e]=!0)}W.suppressDeprecationWarnings=!1;W.deprecationHandler=null;function Xn(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function WE(e){var t,n;for(n in e)be(e,n)&&(t=e[n],Xn(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Jf(e,t){var n=$r({},e),r;for(r in t)be(t,r)&&(yi(e[r])&&yi(t[r])?(n[r]={},$r(n[r],e[r]),$r(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)be(e,r)&&!be(t,r)&&yi(e[r])&&(n[r]=$r({},n[r]));return n}function Vp(e){e!=null&&this.set(e)}var Xf;Object.keys?Xf=Object.keys:Xf=function(e){var t,n=[];for(t in e)be(e,t)&&n.push(t);return n};var YE={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function VE(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Xn(r)?r.call(t,n):r}function qn(e,t,n){var r=""+Math.abs(e),i=t-r.length,o=e>=0;return(o?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Gp=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ua=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sd={},io={};function Z(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(io[e]=i),t&&(io[t[0]]=function(){return qn(i.apply(this,arguments),t[1],t[2])}),n&&(io[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function GE(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function qE(e){var t=e.match(Gp),n,r;for(n=0,r=t.length;n<r;n++)io[t[n]]?t[n]=io[t[n]]:t[n]=GE(t[n]);return function(i){var o="",a;for(a=0;a<r;a++)o+=Xn(t[a])?t[a].call(i,e):t[a];return o}}function dl(e,t){return e.isValid()?(t=i2(t,e.localeData()),Sd[t]=Sd[t]||qE(t),Sd[t](e)):e.localeData().invalidDate()}function i2(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(Ua.lastIndex=0;n>=0&&Ua.test(e);)e=e.replace(Ua,r),Ua.lastIndex=0,n-=1;return e}var QE={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function KE(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Gp).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var ZE="Invalid date";function JE(){return this._invalidDate}var XE="%d",eO=/\d{1,2}/;function tO(e){return this._ordinal.replace("%d",e)}var nO={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function rO(e,t,n,r){var i=this._relativeTime[n];return Xn(i)?i(e,t,n,r):i.replace(/%d/i,e)}function iO(e,t){var n=this._relativeTime[e>0?"future":"past"];return Xn(n)?n(t):n.replace(/%s/i,t)}var bs={};function Et(e,t){var n=e.toLowerCase();bs[n]=bs[n+"s"]=bs[t]=e}function xn(e){return typeof e=="string"?bs[e]||bs[e.toLowerCase()]:void 0}function qp(e){var t={},n,r;for(r in e)be(e,r)&&(n=xn(r),n&&(t[n]=e[r]));return t}var o2={};function Ot(e,t){o2[e]=t}function oO(e){var t=[],n;for(n in e)be(e,n)&&t.push({unit:n,priority:o2[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function fu(e){return e%4===0&&e%100!==0||e%400===0}function sn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function he(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=sn(t)),n}function $o(e,t){return function(n){return n!=null?(s2(this,e,n),W.updateOffset(this,t),this):Jl(this,e)}}function Jl(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function s2(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&fu(e.year())&&e.month()===1&&e.date()===29?(n=he(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),yu(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function sO(e){return e=xn(e),Xn(this[e])?this[e]():this}function aO(e,t){if(typeof e=="object"){e=qp(e);var n=oO(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=xn(e),Xn(this[e]))return this[e](t);return this}var a2=/\d/,en=/\d\d/,l2=/\d{3}/,Qp=/\d{4}/,hu=/[+-]?\d{6}/,ze=/\d\d?/,c2=/\d\d\d\d?/,u2=/\d\d\d\d\d\d?/,pu=/\d{1,3}/,Kp=/\d{1,4}/,mu=/[+-]?\d{1,6}/,Mo=/\d+/,gu=/[+-]?\d+/,lO=/Z|[+-]\d\d:?\d\d/gi,xu=/Z|[+-]\d\d(?::?\d\d)?/gi,cO=/[+-]?\d+(\.\d{1,3})?/,fa=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Xl;Xl={};function V(e,t,n){Xl[e]=Xn(t)?t:function(r,i){return r&&n?n:t}}function uO(e,t){return be(Xl,e)?Xl[e](t._strict,t._locale):new RegExp(dO(e))}function dO(e){return Vt(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,o){return n||r||i||o}))}function Vt(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var eh={};function Ie(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),xr(t)&&(r=function(o,a){a[t]=he(o)}),i=e.length,n=0;n<i;n++)eh[e[n]]=r}function ha(e,t){Ie(e,function(n,r,i,o){i._w=i._w||{},t(n,i._w,i,o)})}function fO(e,t,n){t!=null&&be(eh,e)&&eh[e](t,n._a,n,e)}var _t=0,lr=1,Hn=2,at=3,kn=4,cr=5,fi=6,hO=7,pO=8;function mO(e,t){return(e%t+t)%t}var Je;Array.prototype.indexOf?Je=Array.prototype.indexOf:Je=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function yu(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=mO(t,12);return e+=(t-n)/12,n===1?fu(e)?29:28:31-n%7%2}Z("M",["MM",2],"Mo",function(){return this.month()+1});Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});Z("MMMM",0,0,function(e){return this.localeData().months(this,e)});Et("month","M");Ot("month",8);V("M",ze);V("MM",ze,en);V("MMM",function(e,t){return t.monthsShortRegex(e)});V("MMMM",function(e,t){return t.monthsRegex(e)});Ie(["M","MM"],function(e,t){t[lr]=he(e)-1});Ie(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[lr]=i:ue(n).invalidMonth=e});var gO="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),d2="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),f2=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,xO=fa,yO=fa;function vO(e,t){return e?Nn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||f2).test(t)?"format":"standalone"][e.month()]:Nn(this._months)?this._months:this._months.standalone}function wO(e,t){return e?Nn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[f2.test(t)?"format":"standalone"][e.month()]:Nn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function bO(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=Jn([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?t==="MMM"?(i=Je.call(this._shortMonthsParse,a),i!==-1?i:null):(i=Je.call(this._longMonthsParse,a),i!==-1?i:null):t==="MMM"?(i=Je.call(this._shortMonthsParse,a),i!==-1?i:(i=Je.call(this._longMonthsParse,a),i!==-1?i:null)):(i=Je.call(this._longMonthsParse,a),i!==-1?i:(i=Je.call(this._shortMonthsParse,a),i!==-1?i:null))}function SO(e,t,n){var r,i,o;if(this._monthsParseExact)return bO.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=Jn([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function h2(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=he(t);else if(t=e.localeData().monthsParse(t),!xr(t))return e}return n=Math.min(e.date(),yu(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function p2(e){return e!=null?(h2(this,e),W.updateOffset(this,!0),this):Jl(this,"Month")}function jO(){return yu(this.year(),this.month())}function CO(e){return this._monthsParseExact?(be(this,"_monthsRegex")||m2.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(be(this,"_monthsShortRegex")||(this._monthsShortRegex=xO),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function kO(e){return this._monthsParseExact?(be(this,"_monthsRegex")||m2.call(this),e?this._monthsStrictRegex:this._monthsRegex):(be(this,"_monthsRegex")||(this._monthsRegex=yO),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function m2(){function e(a,l){return l.length-a.length}var t=[],n=[],r=[],i,o;for(i=0;i<12;i++)o=Jn([2e3,i]),t.push(this.monthsShort(o,"")),n.push(this.months(o,"")),r.push(this.months(o,"")),r.push(this.monthsShort(o,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Vt(t[i]),n[i]=Vt(n[i]);for(i=0;i<24;i++)r[i]=Vt(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}Z("Y",0,0,function(){var e=this.year();return e<=9999?qn(e,4):"+"+e});Z(0,["YY",2],0,function(){return this.year()%100});Z(0,["YYYY",4],0,"year");Z(0,["YYYYY",5],0,"year");Z(0,["YYYYYY",6,!0],0,"year");Et("year","y");Ot("year",1);V("Y",gu);V("YY",ze,en);V("YYYY",Kp,Qp);V("YYYYY",mu,hu);V("YYYYYY",mu,hu);Ie(["YYYYY","YYYYYY"],_t);Ie("YYYY",function(e,t){t[_t]=e.length===2?W.parseTwoDigitYear(e):he(e)});Ie("YY",function(e,t){t[_t]=W.parseTwoDigitYear(e)});Ie("Y",function(e,t){t[_t]=parseInt(e,10)});function Ss(e){return fu(e)?366:365}W.parseTwoDigitYear=function(e){return he(e)+(he(e)>68?1900:2e3)};var g2=$o("FullYear",!0);function _O(){return fu(this.year())}function TO(e,t,n,r,i,o,a){var l;return e<100&&e>=0?(l=new Date(e+400,t,n,r,i,o,a),isFinite(l.getFullYear())&&l.setFullYear(e)):l=new Date(e,t,n,r,i,o,a),l}function qs(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ec(e,t,n){var r=7+t-n,i=(7+qs(e,0,r).getUTCDay()-t)%7;return-i+r-1}function x2(e,t,n,r,i){var o=(7+n-r)%7,a=ec(e,r,i),l=1+7*(t-1)+o+a,c,u;return l<=0?(c=e-1,u=Ss(c)+l):l>Ss(e)?(c=e+1,u=l-Ss(e)):(c=e,u=l),{year:c,dayOfYear:u}}function Qs(e,t,n){var r=ec(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,o,a;return i<1?(a=e.year()-1,o=i+fr(a,t,n)):i>fr(e.year(),t,n)?(o=i-fr(e.year(),t,n),a=e.year()+1):(a=e.year(),o=i),{week:o,year:a}}function fr(e,t,n){var r=ec(e,t,n),i=ec(e+1,t,n);return(Ss(e)-r+i)/7}Z("w",["ww",2],"wo","week");Z("W",["WW",2],"Wo","isoWeek");Et("week","w");Et("isoWeek","W");Ot("week",5);Ot("isoWeek",5);V("w",ze);V("ww",ze,en);V("W",ze);V("WW",ze,en);ha(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=he(e)});function EO(e){return Qs(e,this._week.dow,this._week.doy).week}var OO={dow:0,doy:6};function PO(){return this._week.dow}function IO(){return this._week.doy}function DO(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function NO(e){var t=Qs(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}Z("d",0,"do","day");Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});Z("e",0,0,"weekday");Z("E",0,0,"isoWeekday");Et("day","d");Et("weekday","e");Et("isoWeekday","E");Ot("day",11);Ot("weekday",11);Ot("isoWeekday",11);V("d",ze);V("e",ze);V("E",ze);V("dd",function(e,t){return t.weekdaysMinRegex(e)});V("ddd",function(e,t){return t.weekdaysShortRegex(e)});V("dddd",function(e,t){return t.weekdaysRegex(e)});ha(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:ue(n).invalidWeekday=e});ha(["d","e","E"],function(e,t,n,r){t[r]=he(e)});function LO(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function $O(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Zp(e,t){return e.slice(t,7).concat(e.slice(0,t))}var MO="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),y2="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),RO="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),AO=fa,FO=fa,zO=fa;function UO(e,t){var n=Nn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Zp(n,this._week.dow):e?n[e.day()]:n}function BO(e){return e===!0?Zp(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function HO(e){return e===!0?Zp(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function WO(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=Jn([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?t==="dddd"?(i=Je.call(this._weekdaysParse,a),i!==-1?i:null):t==="ddd"?(i=Je.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null):t==="dddd"?(i=Je.call(this._weekdaysParse,a),i!==-1||(i=Je.call(this._shortWeekdaysParse,a),i!==-1)?i:(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null)):t==="ddd"?(i=Je.call(this._shortWeekdaysParse,a),i!==-1||(i=Je.call(this._weekdaysParse,a),i!==-1)?i:(i=Je.call(this._minWeekdaysParse,a),i!==-1?i:null)):(i=Je.call(this._minWeekdaysParse,a),i!==-1||(i=Je.call(this._weekdaysParse,a),i!==-1)?i:(i=Je.call(this._shortWeekdaysParse,a),i!==-1?i:null))}function YO(e,t,n){var r,i,o;if(this._weekdaysParseExact)return WO.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=Jn([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function VO(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=LO(e,this.localeData()),this.add(e-t,"d")):t}function GO(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function qO(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=$O(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function QO(e){return this._weekdaysParseExact?(be(this,"_weekdaysRegex")||Jp.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(be(this,"_weekdaysRegex")||(this._weekdaysRegex=AO),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function KO(e){return this._weekdaysParseExact?(be(this,"_weekdaysRegex")||Jp.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(be(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=FO),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function ZO(e){return this._weekdaysParseExact?(be(this,"_weekdaysRegex")||Jp.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(be(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=zO),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jp(){function e(d,f){return f.length-d.length}var t=[],n=[],r=[],i=[],o,a,l,c,u;for(o=0;o<7;o++)a=Jn([2e3,1]).day(o),l=Vt(this.weekdaysMin(a,"")),c=Vt(this.weekdaysShort(a,"")),u=Vt(this.weekdays(a,"")),t.push(l),n.push(c),r.push(u),i.push(l),i.push(c),i.push(u);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Xp(){return this.hours()%12||12}function JO(){return this.hours()||24}Z("H",["HH",2],0,"hour");Z("h",["hh",2],0,Xp);Z("k",["kk",2],0,JO);Z("hmm",0,0,function(){return""+Xp.apply(this)+qn(this.minutes(),2)});Z("hmmss",0,0,function(){return""+Xp.apply(this)+qn(this.minutes(),2)+qn(this.seconds(),2)});Z("Hmm",0,0,function(){return""+this.hours()+qn(this.minutes(),2)});Z("Hmmss",0,0,function(){return""+this.hours()+qn(this.minutes(),2)+qn(this.seconds(),2)});function v2(e,t){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}v2("a",!0);v2("A",!1);Et("hour","h");Ot("hour",13);function w2(e,t){return t._meridiemParse}V("a",w2);V("A",w2);V("H",ze);V("h",ze);V("k",ze);V("HH",ze,en);V("hh",ze,en);V("kk",ze,en);V("hmm",c2);V("hmmss",u2);V("Hmm",c2);V("Hmmss",u2);Ie(["H","HH"],at);Ie(["k","kk"],function(e,t,n){var r=he(e);t[at]=r===24?0:r});Ie(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});Ie(["h","hh"],function(e,t,n){t[at]=he(e),ue(n).bigHour=!0});Ie("hmm",function(e,t,n){var r=e.length-2;t[at]=he(e.substr(0,r)),t[kn]=he(e.substr(r)),ue(n).bigHour=!0});Ie("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[at]=he(e.substr(0,r)),t[kn]=he(e.substr(r,2)),t[cr]=he(e.substr(i)),ue(n).bigHour=!0});Ie("Hmm",function(e,t,n){var r=e.length-2;t[at]=he(e.substr(0,r)),t[kn]=he(e.substr(r))});Ie("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[at]=he(e.substr(0,r)),t[kn]=he(e.substr(r,2)),t[cr]=he(e.substr(i))});function XO(e){return(e+"").toLowerCase().charAt(0)==="p"}var e9=/[ap]\.?m?\.?/i,t9=$o("Hours",!0);function n9(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var b2={calendar:YE,longDateFormat:QE,invalidDate:ZE,ordinal:XE,dayOfMonthOrdinalParse:eO,relativeTime:nO,months:gO,monthsShort:d2,week:OO,weekdays:MO,weekdaysMin:RO,weekdaysShort:y2,meridiemParse:e9},Ue={},Ko={},Ks;function r9(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function g1(e){return e&&e.toLowerCase().replace("_","-")}function i9(e){for(var t=0,n,r,i,o;t<e.length;){for(o=g1(e[t]).split("-"),n=o.length,r=g1(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=vu(o.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&r9(o,r)>=n-1)break;n--}t++}return Ks}function o9(e){return e.match("^[^/\\\\]*$")!=null}function vu(e){var t=null,n;if(Ue[e]===void 0&&typeof pl<"u"&&pl&&pl.exports&&o9(e))try{t=Ks._abbr,n=require,n("./locale/"+e),Qr(t)}catch{Ue[e]=null}return Ue[e]}function Qr(e,t){var n;return e&&(Rt(t)?n=vr(e):n=em(e,t),n?Ks=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Ks._abbr}function em(e,t){if(t!==null){var n,r=b2;if(t.abbr=e,Ue[e]!=null)r2("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=Ue[e]._config;else if(t.parentLocale!=null)if(Ue[t.parentLocale]!=null)r=Ue[t.parentLocale]._config;else if(n=vu(t.parentLocale),n!=null)r=n._config;else return Ko[t.parentLocale]||(Ko[t.parentLocale]=[]),Ko[t.parentLocale].push({name:e,config:t}),null;return Ue[e]=new Vp(Jf(r,t)),Ko[e]&&Ko[e].forEach(function(i){em(i.name,i.config)}),Qr(e),Ue[e]}else return delete Ue[e],null}function s9(e,t){if(t!=null){var n,r,i=b2;Ue[e]!=null&&Ue[e].parentLocale!=null?Ue[e].set(Jf(Ue[e]._config,t)):(r=vu(e),r!=null&&(i=r._config),t=Jf(i,t),r==null&&(t.abbr=e),n=new Vp(t),n.parentLocale=Ue[e],Ue[e]=n),Qr(e)}else Ue[e]!=null&&(Ue[e].parentLocale!=null?(Ue[e]=Ue[e].parentLocale,e===Qr()&&Qr(e)):Ue[e]!=null&&delete Ue[e]);return Ue[e]}function vr(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ks;if(!Nn(e)){if(t=vu(e),t)return t;e=[e]}return i9(e)}function a9(){return Xf(Ue)}function tm(e){var t,n=e._a;return n&&ue(e).overflow===-2&&(t=n[lr]<0||n[lr]>11?lr:n[Hn]<1||n[Hn]>yu(n[_t],n[lr])?Hn:n[at]<0||n[at]>24||n[at]===24&&(n[kn]!==0||n[cr]!==0||n[fi]!==0)?at:n[kn]<0||n[kn]>59?kn:n[cr]<0||n[cr]>59?cr:n[fi]<0||n[fi]>999?fi:-1,ue(e)._overflowDayOfYear&&(t<_t||t>Hn)&&(t=Hn),ue(e)._overflowWeeks&&t===-1&&(t=hO),ue(e)._overflowWeekday&&t===-1&&(t=pO),ue(e).overflow=t),e}var l9=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,c9=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,u9=/Z|[+-]\d\d(?::?\d\d)?/,Ba=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],jd=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],d9=/^\/?Date\((-?\d+)/i,f9=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,h9={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function S2(e){var t,n,r=e._i,i=l9.exec(r)||c9.exec(r),o,a,l,c,u=Ba.length,d=jd.length;if(i){for(ue(e).iso=!0,t=0,n=u;t<n;t++)if(Ba[t][1].exec(i[1])){a=Ba[t][0],o=Ba[t][2]!==!1;break}if(a==null){e._isValid=!1;return}if(i[3]){for(t=0,n=d;t<n;t++)if(jd[t][1].exec(i[3])){l=(i[2]||" ")+jd[t][0];break}if(l==null){e._isValid=!1;return}}if(!o&&l!=null){e._isValid=!1;return}if(i[4])if(u9.exec(i[4]))c="Z";else{e._isValid=!1;return}e._f=a+(l||"")+(c||""),rm(e)}else e._isValid=!1}function p9(e,t,n,r,i,o){var a=[m9(e),d2.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function m9(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function g9(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function x9(e,t,n){if(e){var r=y2.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return ue(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function y9(e,t,n){if(e)return h9[e];if(t)return 0;var r=parseInt(n,10),i=r%100,o=(r-i)/100;return o*60+i}function j2(e){var t=f9.exec(g9(e._i)),n;if(t){if(n=p9(t[4],t[3],t[2],t[5],t[6],t[7]),!x9(t[1],n,e))return;e._a=n,e._tzm=y9(t[8],t[9],t[10]),e._d=qs.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),ue(e).rfc2822=!0}else e._isValid=!1}function v9(e){var t=d9.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(S2(e),e._isValid===!1)delete e._isValid;else return;if(j2(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:W.createFromInputFallback(e)}W.createFromInputFallback=gn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Li(e,t,n){return e??t??n}function w9(e){var t=new Date(W.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function nm(e){var t,n,r=[],i,o,a;if(!e._d){for(i=w9(e),e._w&&e._a[Hn]==null&&e._a[lr]==null&&b9(e),e._dayOfYear!=null&&(a=Li(e._a[_t],i[_t]),(e._dayOfYear>Ss(a)||e._dayOfYear===0)&&(ue(e)._overflowDayOfYear=!0),n=qs(a,0,e._dayOfYear),e._a[lr]=n.getUTCMonth(),e._a[Hn]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[at]===24&&e._a[kn]===0&&e._a[cr]===0&&e._a[fi]===0&&(e._nextDay=!0,e._a[at]=0),e._d=(e._useUTC?qs:TO).apply(null,r),o=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[at]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==o&&(ue(e).weekdayMismatch=!0)}}function b9(e){var t,n,r,i,o,a,l,c,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(o=1,a=4,n=Li(t.GG,e._a[_t],Qs(Fe(),1,4).year),r=Li(t.W,1),i=Li(t.E,1),(i<1||i>7)&&(c=!0)):(o=e._locale._week.dow,a=e._locale._week.doy,u=Qs(Fe(),o,a),n=Li(t.gg,e._a[_t],u.year),r=Li(t.w,u.week),t.d!=null?(i=t.d,(i<0||i>6)&&(c=!0)):t.e!=null?(i=t.e+o,(t.e<0||t.e>6)&&(c=!0)):i=o),r<1||r>fr(n,o,a)?ue(e)._overflowWeeks=!0:c!=null?ue(e)._overflowWeekday=!0:(l=x2(n,r,i,o,a),e._a[_t]=l.year,e._dayOfYear=l.dayOfYear)}W.ISO_8601=function(){};W.RFC_2822=function(){};function rm(e){if(e._f===W.ISO_8601){S2(e);return}if(e._f===W.RFC_2822){j2(e);return}e._a=[],ue(e).empty=!0;var t=""+e._i,n,r,i,o,a,l=t.length,c=0,u,d;for(i=i2(e._f,e._locale).match(Gp)||[],d=i.length,n=0;n<d;n++)o=i[n],r=(t.match(uO(o,e))||[])[0],r&&(a=t.substr(0,t.indexOf(r)),a.length>0&&ue(e).unusedInput.push(a),t=t.slice(t.indexOf(r)+r.length),c+=r.length),io[o]?(r?ue(e).empty=!1:ue(e).unusedTokens.push(o),fO(o,r,e)):e._strict&&!r&&ue(e).unusedTokens.push(o);ue(e).charsLeftOver=l-c,t.length>0&&ue(e).unusedInput.push(t),e._a[at]<=12&&ue(e).bigHour===!0&&e._a[at]>0&&(ue(e).bigHour=void 0),ue(e).parsedDateParts=e._a.slice(0),ue(e).meridiem=e._meridiem,e._a[at]=S9(e._locale,e._a[at],e._meridiem),u=ue(e).era,u!==null&&(e._a[_t]=e._locale.erasConvertYear(u,e._a[_t])),nm(e),tm(e)}function S9(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function j9(e){var t,n,r,i,o,a,l=!1,c=e._f.length;if(c===0){ue(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<c;i++)o=0,a=!1,t=Yp({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],rm(t),Wp(t)&&(a=!0),o+=ue(t).charsLeftOver,o+=ue(t).unusedTokens.length*10,ue(t).score=o,l?o<r&&(r=o,n=t):(r==null||o<r||a)&&(r=o,n=t,a&&(l=!0));$r(e,n||t)}function C9(e){if(!e._d){var t=qp(e._i),n=t.day===void 0?t.date:t.day;e._a=t2([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),nm(e)}}function k9(e){var t=new da(tm(C2(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function C2(e){var t=e._i,n=e._f;return e._locale=e._locale||vr(e._l),t===null||n===void 0&&t===""?du({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Ln(t)?new da(tm(t)):(ua(t)?e._d=t:Nn(n)?j9(e):n?rm(e):_9(e),Wp(e)||(e._d=null),e))}function _9(e){var t=e._i;Rt(t)?e._d=new Date(W.now()):ua(t)?e._d=new Date(t.valueOf()):typeof t=="string"?v9(e):Nn(t)?(e._a=t2(t.slice(0),function(n){return parseInt(n,10)}),nm(e)):yi(t)?C9(e):xr(t)?e._d=new Date(t):W.createFromInputFallback(e)}function k2(e,t,n,r,i){var o={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(yi(e)&&Hp(e)||Nn(e)&&e.length===0)&&(e=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=i,o._l=n,o._i=e,o._f=t,o._strict=r,k9(o)}function Fe(e,t,n,r){return k2(e,t,n,r,!1)}var T9=gn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Fe.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:du()}),E9=gn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Fe.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:du()});function _2(e,t){var n,r;if(t.length===1&&Nn(t[0])&&(t=t[0]),!t.length)return Fe();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function O9(){var e=[].slice.call(arguments,0);return _2("isBefore",e)}function P9(){var e=[].slice.call(arguments,0);return _2("isAfter",e)}var I9=function(){return Date.now?Date.now():+new Date},Zo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function D9(e){var t,n=!1,r,i=Zo.length;for(t in e)if(be(e,t)&&!(Je.call(Zo,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[Zo[r]]){if(n)return!1;parseFloat(e[Zo[r]])!==he(e[Zo[r]])&&(n=!0)}return!0}function N9(){return this._isValid}function L9(){return Rn(NaN)}function wu(e){var t=qp(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||t.isoWeek||0,a=t.day||0,l=t.hour||0,c=t.minute||0,u=t.second||0,d=t.millisecond||0;this._isValid=D9(t),this._milliseconds=+d+u*1e3+c*6e4+l*1e3*60*60,this._days=+a+o*7,this._months=+i+r*3+n*12,this._data={},this._locale=vr(),this._bubble()}function fl(e){return e instanceof wu}function th(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function $9(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0,a;for(a=0;a<r;a++)(n&&e[a]!==t[a]||!n&&he(e[a])!==he(t[a]))&&o++;return o+i}function T2(e,t){Z(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+qn(~~(n/60),2)+t+qn(~~n%60,2)})}T2("Z",":");T2("ZZ","");V("Z",xu);V("ZZ",xu);Ie(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=im(xu,e)});var M9=/([\+\-]|\d\d)/gi;function im(e,t){var n=(t||"").match(e),r,i,o;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(M9)||["-",0,0],o=+(i[1]*60)+he(i[2]),o===0?0:i[0]==="+"?o:-o)}function om(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Ln(e)||ua(e)?e.valueOf():Fe(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),W.updateOffset(n,!1),n):Fe(e).local()}function nh(e){return-Math.round(e._d.getTimezoneOffset())}W.updateOffset=function(){};function R9(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=im(xu,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=nh(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?P2(this,Rn(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,W.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:nh(this)}function A9(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function F9(e){return this.utcOffset(0,e)}function z9(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(nh(this),"m")),this}function U9(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=im(lO,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function B9(e){return this.isValid()?(e=e?Fe(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function H9(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function W9(){if(!Rt(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Yp(e,this),e=C2(e),e._a?(t=e._isUTC?Jn(e._a):Fe(e._a),this._isDSTShifted=this.isValid()&&$9(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Y9(){return this.isValid()?!this._isUTC:!1}function V9(){return this.isValid()?this._isUTC:!1}function E2(){return this.isValid()?this._isUTC&&this._offset===0:!1}var G9=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,q9=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Rn(e,t){var n=e,r=null,i,o,a;return fl(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:xr(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=G9.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:he(r[Hn])*i,h:he(r[at])*i,m:he(r[kn])*i,s:he(r[cr])*i,ms:he(th(r[fi]*1e3))*i}):(r=q9.exec(e))?(i=r[1]==="-"?-1:1,n={y:ri(r[2],i),M:ri(r[3],i),w:ri(r[4],i),d:ri(r[5],i),h:ri(r[6],i),m:ri(r[7],i),s:ri(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=Q9(Fe(n.from),Fe(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),o=new wu(n),fl(e)&&be(e,"_locale")&&(o._locale=e._locale),fl(e)&&be(e,"_isValid")&&(o._isValid=e._isValid),o}Rn.fn=wu.prototype;Rn.invalid=L9;function ri(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function x1(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Q9(e,t){var n;return e.isValid()&&t.isValid()?(t=om(t,e),e.isBefore(t)?n=x1(e,t):(n=x1(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function O2(e,t){return function(n,r){var i,o;return r!==null&&!isNaN(+r)&&(r2(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),i=Rn(n,r),P2(this,i,e),this}}function P2(e,t,n,r){var i=t._milliseconds,o=th(t._days),a=th(t._months);e.isValid()&&(r=r??!0,a&&h2(e,Jl(e,"Month")+a*n),o&&s2(e,"Date",Jl(e,"Date")+o*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&W.updateOffset(e,o||a))}var K9=O2(1,"add"),Z9=O2(-1,"subtract");function I2(e){return typeof e=="string"||e instanceof String}function J9(e){return Ln(e)||ua(e)||I2(e)||xr(e)||e7(e)||X9(e)||e===null||e===void 0}function X9(e){var t=yi(e)&&!Hp(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,o,a=r.length;for(i=0;i<a;i+=1)o=r[i],n=n||be(e,o);return t&&n}function e7(e){var t=Nn(e),n=!1;return t&&(n=e.filter(function(r){return!xr(r)&&I2(e)}).length===0),t&&n}function t7(e){var t=yi(e)&&!Hp(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,o;for(i=0;i<r.length;i+=1)o=r[i],n=n||be(e,o);return t&&n}function n7(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function r7(e,t){arguments.length===1&&(arguments[0]?J9(arguments[0])?(e=arguments[0],t=void 0):t7(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Fe(),r=om(n,this).startOf("day"),i=W.calendarFormat(this,r)||"sameElse",o=t&&(Xn(t[i])?t[i].call(this,n):t[i]);return this.format(o||this.localeData().calendar(i,this,Fe(n)))}function i7(){return new da(this)}function o7(e,t){var n=Ln(e)?e:Fe(e);return this.isValid()&&n.isValid()?(t=xn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function s7(e,t){var n=Ln(e)?e:Fe(e);return this.isValid()&&n.isValid()?(t=xn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function a7(e,t,n,r){var i=Ln(e)?e:Fe(e),o=Ln(t)?t:Fe(t);return this.isValid()&&i.isValid()&&o.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(o,n):!this.isAfter(o,n))):!1}function l7(e,t){var n=Ln(e)?e:Fe(e),r;return this.isValid()&&n.isValid()?(t=xn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function c7(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function u7(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function d7(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(r=om(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=xn(t),t){case"year":o=hl(this,r)/12;break;case"month":o=hl(this,r);break;case"quarter":o=hl(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:sn(o)}function hl(e,t){if(e.date()<t.date())return-hl(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,o;return t-r<0?(i=e.clone().add(n-1,"months"),o=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),o=(t-r)/(i-r)),-(n+o)||0}W.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";W.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function f7(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function h7(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?dl(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Xn(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",dl(n,"Z")):dl(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function p7(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,o;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",o=t+'[")]',this.format(n+r+i+o)}function m7(e){e||(e=this.isUtc()?W.defaultFormatUtc:W.defaultFormat);var t=dl(this,e);return this.localeData().postformat(t)}function g7(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Fe(e).isValid())?Rn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function x7(e){return this.from(Fe(),e)}function y7(e,t){return this.isValid()&&(Ln(e)&&e.isValid()||Fe(e).isValid())?Rn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function v7(e){return this.to(Fe(),e)}function D2(e){var t;return e===void 0?this._locale._abbr:(t=vr(e),t!=null&&(this._locale=t),this)}var N2=gn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function L2(){return this._locale}var tc=1e3,oo=60*tc,nc=60*oo,$2=(365*400+97)*24*nc;function so(e,t){return(e%t+t)%t}function M2(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-$2:new Date(e,t,n).valueOf()}function R2(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-$2:Date.UTC(e,t,n)}function w7(e){var t,n;if(e=xn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?R2:M2,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=so(t+(this._isUTC?0:this.utcOffset()*oo),nc);break;case"minute":t=this._d.valueOf(),t-=so(t,oo);break;case"second":t=this._d.valueOf(),t-=so(t,tc);break}return this._d.setTime(t),W.updateOffset(this,!0),this}function b7(e){var t,n;if(e=xn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?R2:M2,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=nc-so(t+(this._isUTC?0:this.utcOffset()*oo),nc)-1;break;case"minute":t=this._d.valueOf(),t+=oo-so(t,oo)-1;break;case"second":t=this._d.valueOf(),t+=tc-so(t,tc)-1;break}return this._d.setTime(t),W.updateOffset(this,!0),this}function S7(){return this._d.valueOf()-(this._offset||0)*6e4}function j7(){return Math.floor(this.valueOf()/1e3)}function C7(){return new Date(this.valueOf())}function k7(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function _7(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function T7(){return this.isValid()?this.toISOString():null}function E7(){return Wp(this)}function O7(){return $r({},ue(this))}function P7(){return ue(this).overflow}function I7(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Z("N",0,0,"eraAbbr");Z("NN",0,0,"eraAbbr");Z("NNN",0,0,"eraAbbr");Z("NNNN",0,0,"eraName");Z("NNNNN",0,0,"eraNarrow");Z("y",["y",1],"yo","eraYear");Z("y",["yy",2],0,"eraYear");Z("y",["yyy",3],0,"eraYear");Z("y",["yyyy",4],0,"eraYear");V("N",sm);V("NN",sm);V("NNN",sm);V("NNNN",B7);V("NNNNN",H7);Ie(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?ue(n).era=i:ue(n).invalidEra=e});V("y",Mo);V("yy",Mo);V("yyy",Mo);V("yyyy",Mo);V("yo",W7);Ie(["y","yy","yyy","yyyy"],_t);Ie(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[_t]=n._locale.eraYearOrdinalParse(e,i):t[_t]=parseInt(e,10)});function D7(e,t){var n,r,i,o=this._eras||vr("en")._eras;for(n=0,r=o.length;n<r;++n){switch(typeof o[n].since){case"string":i=W(o[n].since).startOf("day"),o[n].since=i.valueOf();break}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":i=W(o[n].until).startOf("day").valueOf(),o[n].until=i.valueOf();break}}return o}function N7(e,t,n){var r,i,o=this.eras(),a,l,c;for(e=e.toUpperCase(),r=0,i=o.length;r<i;++r)if(a=o[r].name.toUpperCase(),l=o[r].abbr.toUpperCase(),c=o[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(l===e)return o[r];break;case"NNNN":if(a===e)return o[r];break;case"NNNNN":if(c===e)return o[r];break}else if([a,l,c].indexOf(e)>=0)return o[r]}function L7(e,t){var n=e.since<=e.until?1:-1;return t===void 0?W(e.since).year():W(e.since).year()+(t-e.offset)*n}function $7(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function M7(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function R7(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function A7(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-W(i[e].since).year())*n+i[e].offset;return this.year()}function F7(e){return be(this,"_erasNameRegex")||am.call(this),e?this._erasNameRegex:this._erasRegex}function z7(e){return be(this,"_erasAbbrRegex")||am.call(this),e?this._erasAbbrRegex:this._erasRegex}function U7(e){return be(this,"_erasNarrowRegex")||am.call(this),e?this._erasNarrowRegex:this._erasRegex}function sm(e,t){return t.erasAbbrRegex(e)}function B7(e,t){return t.erasNameRegex(e)}function H7(e,t){return t.erasNarrowRegex(e)}function W7(e,t){return t._eraYearOrdinalRegex||Mo}function am(){var e=[],t=[],n=[],r=[],i,o,a=this.eras();for(i=0,o=a.length;i<o;++i)t.push(Vt(a[i].name)),e.push(Vt(a[i].abbr)),n.push(Vt(a[i].narrow)),r.push(Vt(a[i].name)),r.push(Vt(a[i].abbr)),r.push(Vt(a[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}Z(0,["gg",2],0,function(){return this.weekYear()%100});Z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function bu(e,t){Z(0,[e,e.length],0,t)}bu("gggg","weekYear");bu("ggggg","weekYear");bu("GGGG","isoWeekYear");bu("GGGGG","isoWeekYear");Et("weekYear","gg");Et("isoWeekYear","GG");Ot("weekYear",1);Ot("isoWeekYear",1);V("G",gu);V("g",gu);V("GG",ze,en);V("gg",ze,en);V("GGGG",Kp,Qp);V("gggg",Kp,Qp);V("GGGGG",mu,hu);V("ggggg",mu,hu);ha(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=he(e)});ha(["gg","GG"],function(e,t,n,r){t[r]=W.parseTwoDigitYear(e)});function Y7(e){return A2.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function V7(e){return A2.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function G7(){return fr(this.year(),1,4)}function q7(){return fr(this.isoWeekYear(),1,4)}function Q7(){var e=this.localeData()._week;return fr(this.year(),e.dow,e.doy)}function K7(){var e=this.localeData()._week;return fr(this.weekYear(),e.dow,e.doy)}function A2(e,t,n,r,i){var o;return e==null?Qs(this,r,i).year:(o=fr(e,r,i),t>o&&(t=o),Z7.call(this,e,t,n,r,i))}function Z7(e,t,n,r,i){var o=x2(e,t,n,r,i),a=qs(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}Z("Q",0,"Qo","quarter");Et("quarter","Q");Ot("quarter",7);V("Q",a2);Ie("Q",function(e,t){t[lr]=(he(e)-1)*3});function J7(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}Z("D",["DD",2],"Do","date");Et("date","D");Ot("date",9);V("D",ze);V("DD",ze,en);V("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Ie(["D","DD"],Hn);Ie("Do",function(e,t){t[Hn]=he(e.match(ze)[0])});var F2=$o("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear");Et("dayOfYear","DDD");Ot("dayOfYear",4);V("DDD",pu);V("DDDD",l2);Ie(["DDD","DDDD"],function(e,t,n){n._dayOfYear=he(e)});function X7(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}Z("m",["mm",2],0,"minute");Et("minute","m");Ot("minute",14);V("m",ze);V("mm",ze,en);Ie(["m","mm"],kn);var eP=$o("Minutes",!1);Z("s",["ss",2],0,"second");Et("second","s");Ot("second",15);V("s",ze);V("ss",ze,en);Ie(["s","ss"],cr);var tP=$o("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)});Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Z(0,["SSS",3],0,"millisecond");Z(0,["SSSS",4],0,function(){return this.millisecond()*10});Z(0,["SSSSS",5],0,function(){return this.millisecond()*100});Z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Et("millisecond","ms");Ot("millisecond",16);V("S",pu,a2);V("SS",pu,en);V("SSS",pu,l2);var Mr,z2;for(Mr="SSSS";Mr.length<=9;Mr+="S")V(Mr,Mo);function nP(e,t){t[fi]=he(("0."+e)*1e3)}for(Mr="S";Mr.length<=9;Mr+="S")Ie(Mr,nP);z2=$o("Milliseconds",!1);Z("z",0,0,"zoneAbbr");Z("zz",0,0,"zoneName");function rP(){return this._isUTC?"UTC":""}function iP(){return this._isUTC?"Coordinated Universal Time":""}var M=da.prototype;M.add=K9;M.calendar=r7;M.clone=i7;M.diff=d7;M.endOf=b7;M.format=m7;M.from=g7;M.fromNow=x7;M.to=y7;M.toNow=v7;M.get=sO;M.invalidAt=P7;M.isAfter=o7;M.isBefore=s7;M.isBetween=a7;M.isSame=l7;M.isSameOrAfter=c7;M.isSameOrBefore=u7;M.isValid=E7;M.lang=N2;M.locale=D2;M.localeData=L2;M.max=E9;M.min=T9;M.parsingFlags=O7;M.set=aO;M.startOf=w7;M.subtract=Z9;M.toArray=k7;M.toObject=_7;M.toDate=C7;M.toISOString=h7;M.inspect=p7;typeof Symbol<"u"&&Symbol.for!=null&&(M[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});M.toJSON=T7;M.toString=f7;M.unix=j7;M.valueOf=S7;M.creationData=I7;M.eraName=$7;M.eraNarrow=M7;M.eraAbbr=R7;M.eraYear=A7;M.year=g2;M.isLeapYear=_O;M.weekYear=Y7;M.isoWeekYear=V7;M.quarter=M.quarters=J7;M.month=p2;M.daysInMonth=jO;M.week=M.weeks=DO;M.isoWeek=M.isoWeeks=NO;M.weeksInYear=Q7;M.weeksInWeekYear=K7;M.isoWeeksInYear=G7;M.isoWeeksInISOWeekYear=q7;M.date=F2;M.day=M.days=VO;M.weekday=GO;M.isoWeekday=qO;M.dayOfYear=X7;M.hour=M.hours=t9;M.minute=M.minutes=eP;M.second=M.seconds=tP;M.millisecond=M.milliseconds=z2;M.utcOffset=R9;M.utc=F9;M.local=z9;M.parseZone=U9;M.hasAlignedHourOffset=B9;M.isDST=H9;M.isLocal=Y9;M.isUtcOffset=V9;M.isUtc=E2;M.isUTC=E2;M.zoneAbbr=rP;M.zoneName=iP;M.dates=gn("dates accessor is deprecated. Use date instead.",F2);M.months=gn("months accessor is deprecated. Use month instead",p2);M.years=gn("years accessor is deprecated. Use year instead",g2);M.zone=gn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",A9);M.isDSTShifted=gn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",W9);function oP(e){return Fe(e*1e3)}function sP(){return Fe.apply(null,arguments).parseZone()}function U2(e){return e}var Se=Vp.prototype;Se.calendar=VE;Se.longDateFormat=KE;Se.invalidDate=JE;Se.ordinal=tO;Se.preparse=U2;Se.postformat=U2;Se.relativeTime=rO;Se.pastFuture=iO;Se.set=WE;Se.eras=D7;Se.erasParse=N7;Se.erasConvertYear=L7;Se.erasAbbrRegex=z7;Se.erasNameRegex=F7;Se.erasNarrowRegex=U7;Se.months=vO;Se.monthsShort=wO;Se.monthsParse=SO;Se.monthsRegex=kO;Se.monthsShortRegex=CO;Se.week=EO;Se.firstDayOfYear=IO;Se.firstDayOfWeek=PO;Se.weekdays=UO;Se.weekdaysMin=HO;Se.weekdaysShort=BO;Se.weekdaysParse=YO;Se.weekdaysRegex=QO;Se.weekdaysShortRegex=KO;Se.weekdaysMinRegex=ZO;Se.isPM=XO;Se.meridiem=n9;function rc(e,t,n,r){var i=vr(),o=Jn().set(r,t);return i[n](o,e)}function B2(e,t,n){if(xr(e)&&(t=e,e=void 0),e=e||"",t!=null)return rc(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=rc(e,r,n,"month");return i}function lm(e,t,n,r){typeof e=="boolean"?(xr(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,xr(t)&&(n=t,t=void 0),t=t||"");var i=vr(),o=e?i._week.dow:0,a,l=[];if(n!=null)return rc(t,(n+o)%7,r,"day");for(a=0;a<7;a++)l[a]=rc(t,(a+o)%7,r,"day");return l}function aP(e,t){return B2(e,t,"months")}function lP(e,t){return B2(e,t,"monthsShort")}function cP(e,t,n){return lm(e,t,n,"weekdays")}function uP(e,t,n){return lm(e,t,n,"weekdaysShort")}function dP(e,t,n){return lm(e,t,n,"weekdaysMin")}Qr("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=he(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});W.lang=gn("moment.lang is deprecated. Use moment.locale instead.",Qr);W.langData=gn("moment.langData is deprecated. Use moment.localeData instead.",vr);var er=Math.abs;function fP(){var e=this._data;return this._milliseconds=er(this._milliseconds),this._days=er(this._days),this._months=er(this._months),e.milliseconds=er(e.milliseconds),e.seconds=er(e.seconds),e.minutes=er(e.minutes),e.hours=er(e.hours),e.months=er(e.months),e.years=er(e.years),this}function H2(e,t,n,r){var i=Rn(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function hP(e,t){return H2(this,e,t,1)}function pP(e,t){return H2(this,e,t,-1)}function y1(e){return e<0?Math.floor(e):Math.ceil(e)}function mP(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,o,a,l,c;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=y1(rh(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=sn(e/1e3),r.seconds=i%60,o=sn(i/60),r.minutes=o%60,a=sn(o/60),r.hours=a%24,t+=sn(a/24),c=sn(W2(t)),n+=c,t-=y1(rh(c)),l=sn(n/12),n%=12,r.days=t,r.months=n,r.years=l,this}function W2(e){return e*4800/146097}function rh(e){return e*146097/4800}function gP(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=xn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+W2(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(rh(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function xP(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+he(this._months/12)*31536e6:NaN}function wr(e){return function(){return this.as(e)}}var yP=wr("ms"),vP=wr("s"),wP=wr("m"),bP=wr("h"),SP=wr("d"),jP=wr("w"),CP=wr("M"),kP=wr("Q"),_P=wr("y");function TP(){return Rn(this)}function EP(e){return e=xn(e),this.isValid()?this[e+"s"]():NaN}function Pi(e){return function(){return this.isValid()?this._data[e]:NaN}}var OP=Pi("milliseconds"),PP=Pi("seconds"),IP=Pi("minutes"),DP=Pi("hours"),NP=Pi("days"),LP=Pi("months"),$P=Pi("years");function MP(){return sn(this.days()/7)}var rr=Math.round,Ki={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function RP(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function AP(e,t,n,r){var i=Rn(e).abs(),o=rr(i.as("s")),a=rr(i.as("m")),l=rr(i.as("h")),c=rr(i.as("d")),u=rr(i.as("M")),d=rr(i.as("w")),f=rr(i.as("y")),h=o<=n.ss&&["s",o]||o<n.s&&["ss",o]||a<=1&&["m"]||a<n.m&&["mm",a]||l<=1&&["h"]||l<n.h&&["hh",l]||c<=1&&["d"]||c<n.d&&["dd",c];return n.w!=null&&(h=h||d<=1&&["w"]||d<n.w&&["ww",d]),h=h||u<=1&&["M"]||u<n.M&&["MM",u]||f<=1&&["y"]||["yy",f],h[2]=t,h[3]=+e>0,h[4]=r,RP.apply(null,h)}function FP(e){return e===void 0?rr:typeof e=="function"?(rr=e,!0):!1}function zP(e,t){return Ki[e]===void 0?!1:t===void 0?Ki[e]:(Ki[e]=t,e==="s"&&(Ki.ss=t-1),!0)}function UP(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Ki,i,o;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Ki,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),o=AP(this,!n,r,i),n&&(o=i.pastFuture(+this,o)),i.postformat(o)}var Cd=Math.abs;function Ni(e){return(e>0)-(e<0)||+e}function Su(){if(!this.isValid())return this.localeData().invalidDate();var e=Cd(this._milliseconds)/1e3,t=Cd(this._days),n=Cd(this._months),r,i,o,a,l=this.asSeconds(),c,u,d,f;return l?(r=sn(e/60),i=sn(r/60),e%=60,r%=60,o=sn(n/12),n%=12,a=e?e.toFixed(3).replace(/\.?0+$/,""):"",c=l<0?"-":"",u=Ni(this._months)!==Ni(l)?"-":"",d=Ni(this._days)!==Ni(l)?"-":"",f=Ni(this._milliseconds)!==Ni(l)?"-":"",c+"P"+(o?u+o+"Y":"")+(n?u+n+"M":"")+(t?d+t+"D":"")+(i||r||e?"T":"")+(i?f+i+"H":"")+(r?f+r+"M":"")+(e?f+a+"S":"")):"P0D"}var ge=wu.prototype;ge.isValid=N9;ge.abs=fP;ge.add=hP;ge.subtract=pP;ge.as=gP;ge.asMilliseconds=yP;ge.asSeconds=vP;ge.asMinutes=wP;ge.asHours=bP;ge.asDays=SP;ge.asWeeks=jP;ge.asMonths=CP;ge.asQuarters=kP;ge.asYears=_P;ge.valueOf=xP;ge._bubble=mP;ge.clone=TP;ge.get=EP;ge.milliseconds=OP;ge.seconds=PP;ge.minutes=IP;ge.hours=DP;ge.days=NP;ge.weeks=MP;ge.months=LP;ge.years=$P;ge.humanize=UP;ge.toISOString=Su;ge.toString=Su;ge.toJSON=Su;ge.locale=D2;ge.localeData=L2;ge.toIsoString=gn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Su);ge.lang=N2;Z("X",0,0,"unix");Z("x",0,0,"valueOf");V("x",gu);V("X",cO);Ie("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});Ie("x",function(e,t,n){n._d=new Date(he(e))});//! moment.js
W.version="2.29.4";BE(Fe);W.fn=M;W.min=O9;W.max=P9;W.now=I9;W.utc=Jn;W.unix=oP;W.months=aP;W.isDate=ua;W.locale=Qr;W.invalid=du;W.duration=Rn;W.isMoment=Ln;W.weekdays=cP;W.parseZone=sP;W.localeData=vr;W.isDuration=fl;W.monthsShort=lP;W.weekdaysMin=dP;W.defineLocale=em;W.updateLocale=s9;W.locales=a9;W.weekdaysShort=uP;W.normalizeUnits=xn;W.relativeTimeRounding=FP;W.relativeTimeThreshold=zP;W.calendarFormat=n7;W.prototype=M;W.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const BP=b.div`
  /* border: 1px solid red; */
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

  @media only screen and (max-width: 500px) {
    gap: 12px;
  }
`,HP=b.div`
  /* border: 1px solid red; */
`,WP=b.div`
  color: #332ad5;
  color: #ef4565;
  font-size: 20px;
  line-height: 27px;
  font-weight: 600;

  @media only screen and (max-width: 950px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    /* font-size: 18px; */
  }
`,YP=b.div``,VP=b.div`
  font-weight: 600;
  font-size: 22px;
  color: #d8eefe;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;

  @media only screen and (max-width: 950px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 28px;
  }
`,GP=b.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`,qP=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  margin-bottom: 12px;

  span {
    font-weight: 500;
    font-size: 18px;
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
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
  }

  @media only screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }
  }
`,QP=b.div`
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
      color: #fff;
      letter-spacing: 0.035em;
    }
  }

  @media only screen and (max-width: 800px) {
    div {
      span {
        font-size: 16px;
      }
    }
  }
`,Y2=e=>{const t=me(),n=()=>{ve(),t(`/forum/${e._id}`,{state:{forumId:e._id,userToken:e.userToken}})};return e._id?s.jsxs(BP,{onClick:n,children:[s.jsxs(HP,{children:[s.jsx(WP,{children:e.topic}),s.jsx(YP,{})]}),s.jsx(VP,{children:e.tagline.length>85?s.jsxs(s.Fragment,{children:[e.tagline.slice(0,84)," ",s.jsx("span",{children:"..."})]}):e.tagline}),s.jsxs(GP,{children:[s.jsxs(qP,{children:[s.jsxs("span",{children:["@",e.createdBy.userName]}),s.jsxs("div",{children:[s.jsx("span",{className:"dot"}),s.jsx("span",{children:W(e.createdAt).fromNow()})]})]}),s.jsxs(QP,{children:[s.jsxs("div",{children:[s.jsx(ap,{color:"#fff"}),s.jsx("span",{children:e.upvotes.length})]}),s.jsxs("div",{children:[s.jsx(z3,{}),s.jsx("span",{children:e.answers.length})]})]})]})]}):null},KP=b.div`
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
`,ti=e=>{const t=me(),n=()=>{ve(),e.learnCardId?t(`/learncard-overview/${e.learnCardId}`,{state:{learnCardId:e.learnCardId}}):e.classElem?t("/classes",{state:{elemLink:e.classElem}}):t(e.link)};return s.jsxs(KP,{onClick:n,children:[s.jsx(Q3,{}),s.jsx("span",{children:"Back"})]})},ZP=b.div`
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
`,JP=e=>{const[t,n]=g.useState(),[r,i]=g.useState(!1),{fetchLocalUserToken:o}=Le();g.useEffect(()=>{o().then(j=>{console.log(j),n(j)})},[]);const[a,l]=g.useState(!1);function c(){l(!0)}function u(){l(!1)}const[d,f]=g.useState("");function h(j){f(j)}const p={position:D.POSITION.BOTTOM_RIGHT,autoClose:4e3,pauseOnHover:!0,draggable:!0},y=()=>d===""?(D.error("Answer cannot be empty",p),!1):!0,w=async()=>{y()&&(i(!0),await ee.post(`${te}${ne}/forum/${e.forumId}/answers`,{answer:d},{headers:ie(t??"")}).then(()=>{f(""),i(!1),D.success("Answer posted on Forum :)",p),window.location.reload()}).catch(j=>{i(!1),D.error(j.response.data.message,p)}))};return s.jsxs(s.Fragment,{children:[s.jsx(G2,{onClick:c,children:"Post Answer"}),s.jsx(mn,{isOpen:a,onRequestClose:u,style:Zn,children:s.jsxs(ZP,{children:[s.jsx("header",{children:s.jsx("h4",{children:"Post an Answer"})}),s.jsx(Kt,{label:"Forum Answer",name:"answer",value:d,areaHeight:"15rem",updateSingleField:h,placeholderText:"Answer to the query..."}),s.jsx(Gn,{children:s.jsx("button",{onClick:w,children:r?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"Submit Answer"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})})})]})})]})},XP=b.div`
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
`,eI=b.div`
  /* border: 1px solid red; */
  display: flex;
`,V2=e=>{const[t,n]=g.useState(e.upvotes),r=()=>t.includes(e.userId),i={position:D.POSITION.BOTTOM_RIGHT,autoClose:4e3,pauseOnHover:!0,draggable:!0},o=async()=>{e.isAnswer?await ee.patch(`${te}${ne}/forum/${e.forumId}/answers/${e.answerId}`,{},{headers:ie(e.userToken)}).then(({data:a})=>{console.log(a);const l=a.updatedAnswer.upvotes;n(l)}).catch(a=>{D.error(a.response.data.message,i)}):await ee.patch(`${te}${ne}/forum/${e.forumId}`,{},{headers:ie(e.userToken)}).then(({data:a})=>{console.log(a);const l=a.updatedForum.upvotes;n(l)}).catch(a=>{D.error(a.response.data.message,i)})};return s.jsxs(XP,{isAnswer:e.isAnswer,children:[s.jsx(eI,{onClick:o,children:s.jsx(J3,{color:r()?"#094067":"rgba(125, 137, 176, 0.4)"})}),s.jsx("span",{children:t.length}),s.jsx(hn,{theme:"dark"})]})},tI=b.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 0.6fr 9fr 0.5fr;
  row-gap: 1rem;
  border-bottom: ${e=>e.noAnswers?"none":"1px solid #cdd5df"};
  padding-bottom: 2.5rem;
  margin-top: 2rem;
  width: 100%;
`,nI=b.div`
  /* border: 1px solid red; */

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    cursor: pointer;
  }
`,rI=b.div`
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
`,iI=e=>{const t=me(),n=()=>{ve(),e.userId==e.createdBy._id?t("/me"):t(`/user/${e.createdBy._id}`,{state:{userId:e.createdBy._id}})};return s.jsxs(tI,{noAnswers:e.noAnswers,children:[s.jsx(V2,{upvotes:e.upvotes,userId:e.userId,isAnswer:!1,forumId:e.forumId,userToken:e.userToken}),s.jsxs(rI,{children:[s.jsx("div",{children:s.jsx("h2",{children:e.tagline})}),s.jsx("div",{children:s.jsx("p",{children:e.question})})]}),s.jsx(nI,{children:s.jsx("img",{src:e.createdBy.photo,alt:"question-user-img",onClick:n})})]})},oI=b.div`
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
`,sI=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`,G2=b.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  gap: 10px;
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

  @media only screen and (max-width: 450px) {
    font-size: 16px;
    padding: 10px 18px;
  }
`,aI=b.div`
  /* border: 1px solid red; */
`,lI=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.time {
    color: #4a5578;
    font-size: 14px;
  }
`,cI=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-top: 2.5rem;
`,uI=b.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  border: 1px solid #d5d9eb;
  border-radius: 26px;
`,dI=b.div`
  /* border: 1px solid #d5d9eb; */
  display: grid;
  grid-template-columns: 0.8fr 20fr;
`,fI=b.div`
  /* border: 1px solid #d5d9eb; */
  padding-left: 6px;
`,hI=()=>{const[e,t]=g.useState(),[n,r]=g.useState(),[i,o]=g.useState(""),[a,l]=g.useState(!0),c=$t();g.useEffect(()=>{const p=c.state.forumId,y=c.state.userToken;console.log(y),r(p),o(y)},[c]);const{fetchLocalUserData:u}=Le(),[d,f]=g.useState("");g.useEffect(()=>{u().then(p=>{f(p._id)})},[]);async function h(){await ee.get(`${te}${ne}/forum/${n}`,{headers:ie(i??"")}).then(({data:p})=>{const y=p.data.data[0];console.log(p.data.data[0]),t(y),l(!1)}).catch(p=>{console.log(p),l(!1)})}return g.useEffect(()=>{n&&i&&h()},[n,i]),s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsx(oI,{children:a?s.jsx(_e,{}):e?s.jsxs(s.Fragment,{children:[s.jsxs(sI,{children:[s.jsx(ti,{link:"/forums"}),s.jsx(JP,{forumId:e==null?void 0:e._id})]}),s.jsxs(aI,{children:[s.jsx(iI,{createdBy:e.createdBy,question:e.question,upvotes:e.upvotes,tagline:e.tagline,forumId:e._id,userId:d,userToken:i,noAnswers:e.answers.length==0}),e.answers.length!=0?s.jsx(cI,{children:e.answers.map((p,y)=>s.jsxs(uI,{children:[s.jsxs(lI,{children:[s.jsx(Kn,{name:p.answeredBy.name,photo:p.answeredBy.photo,imgBorder:"black",userId:p.answeredBy._id}),s.jsx("div",{className:"time",children:W(p.createdAt).fromNow()})]}),s.jsxs(dI,{children:[s.jsx(V2,{userToken:i,userId:d,isAnswer:!0,upvotes:p.upvotes,forumId:e._id,answerId:p._id}),s.jsx(fI,{children:s.jsx("p",{children:p.answer})})]})]}))}):null]})]}):s.jsx("div",{className:"went-wrong",children:"Something went wrong"})}),s.jsx(Qe,{})]})},pI=b.div`
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
`,Ro=e=>s.jsx(pI,{children:s.jsx("span",{onClick:e.onClick,children:e.loaderLoading?s.jsx(xw,{height:"30",width:"30",color:"#ffffff",ariaLabel:"tail-spin-loading",radius:"1"}):"Load More"})}),mI=b.div`
  /* border: 1px solid red; */
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d5d9eb;
  box-sizing: border-box;
  padding: 1rem 0;
  background-color: white;
  position: absolute;
  z-index: 100;
  max-height: 50vh;
  overflow-y: auto;
`,gI=b.div`
  /* border: 1px solid red; */
  margin-bottom: 1rem;
  padding: 0.5rem 1.15rem;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: #d8eefe;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
  }

  div {
    display: flex;
    align-items: center;
    column-gap: 4px;

    img {
      width: 26px;
      height: 26px;
      border-radius: 100%;
      object-fit: cover;
      border: 1px solid black;
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
    }
  }
`,xI=e=>{const t=g.useRef(null);bo(t,e.closeSearchBox,!1,null,!1,void 0);const n=me(),r=i=>{ve(),n(`/forum/${i}`,{state:{forumId:i,userToken:e.userToken}})};return s.jsx(mI,{ref:t,children:e.searchResults.map((i,o)=>s.jsxs(gI,{onClick:()=>r(i._id),children:[s.jsx("h3",{children:i.tagline.length>60?i.tagline.slice(0,60)+"...":i.tagline}),s.jsxs("div",{children:[s.jsx("img",{src:i.createdBy.photo,alt:""}),s.jsx("h4",{children:i.createdBy.name})]})]}))})},yI=b.div`
  /* border: 1px solid brown; */
  /* display: flex; */
  /* align-items: center; */
`,vI=b.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  width: 95%;
  @media only screen and (max-width: 1000px) {
  }
`,wI=b.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 1rem auto;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 950px) {
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`,bI=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 4rem 15vw;

  @media only screen and (max-width: 1100px) {
    margin: 4rem 10vw;
  }
  @media only screen and (max-width: 950px) {
    margin: 4rem 5vw;
    gap: 1.5rem 1rem;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    margin: 4rem 12vw;
    gap: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    margin: 4rem 10vw;
  }
  @media only screen and (max-width: 500px) {
    margin: 3rem 5vw 2rem;
    gap: 1.5rem;
  }
`,SI=b.div`
  margin-top: 4rem;
`,jI=()=>{const[e,t]=g.useState([]),[n,r]=g.useState(),[i,o]=g.useState(1),[a,l]=g.useState(!1),[c,u]=g.useState(!0),[d,f]=g.useState(!0),{fetchLocalUserToken:h}=Le();g.useEffect(()=>{h().then(L=>{r(L)})},[]);const p=L=>{if(L.length==0){l(!1);return}else if(L.length%In!=0){l(!1);return}l(!0)};async function y(){f(!0),await ee.get(`${te}${ne}/forum`,{params:{limit:In,page:i},headers:ie(n??"")}).then(({data:L})=>{const q=L.data.data;console.log(q),p(q),t(Q=>[...Q,...q]),u(!1),f(!1),o(Q=>Q+1)}).catch(L=>{console.log(L),u(!1),f(!1)})}g.useEffect(()=>{n&&y()},[n]);const w=me(),j=()=>{w("/forums/create-forum")},[x,m]=g.useState(""),[v,S]=g.useState([]),C=async L=>{if(k(!0),m(L),L===""){S([]);return}await ee.post(`${te}${ne}/forum/search`,{search:L},{headers:ie(n||"")}).then(({data:q})=>{console.log(q.forums);const Q=q.forums;S(Q)})},[O,k]=g.useState(!0),P=()=>{k(!1)},R=()=>{x!=""&&(ve(),w("/forum/search/feed",{state:{keyword:x,searchedForums:v}}))};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(yI,{children:[s.jsx(vI,{children:s.jsxs(G2,{onClick:j,children:[s.jsx(ap,{color:"#ffffff"}),s.jsx("span",{children:"Post your query"})]})}),s.jsx(wI,{children:s.jsx(Ic,{updateSearch:C,placeholderText:"Search in forum...",showButton:!0,onEnterFunc:R,closeDropdown:P,searchQuery:x,elem:v.length==0?void 0:O&&n?s.jsx(xI,{searchResults:v,closeSearchBox:P,userToken:n}):void 0})}),c?s.jsx(SI,{children:s.jsx(_e,{})}):s.jsx(bI,{children:e&&n&&e.map((L,q)=>s.jsx(Y2,{...L,userToken:n},q))}),e&&a&&s.jsx(Ro,{loaderLoading:d,onClick:y})]}),s.jsx(Qe,{})]})},CI=b.div`
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  align-items: center;
  /* justify-content: center; */
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
`,kI=b.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 0 4.5rem 0.5rem;
  padding: 0 0rem 0.5rem;
  position: relative;
  color: #979797;
  cursor: pointer;
  text-transform: capitalize;
  /* border: 1px solid red; */
  width: 100%;
`,cm=e=>s.jsx(CI,{children:e.labelArr.map((t,n)=>s.jsx(kI,{className:e.activeLink==t?"highlighted":void 0,onClick:()=>e.navigationHandler(t),children:t},n))}),_I=b.div`
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  overflow: hidden;
  background: #094067;
  transition: all 0.15s linear;

  &:hover {
    transform: ${e=>e.hasAnimation?"translateY(-10px)":null};
  }
`,TI=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  gap: ${e=>e.gapSize||"24px"};
  background: #094067;
  font-family: "Nunito";
`,EI=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid red; */

  h4 {
    font-weight: 700;
    font-size: ${e=>e.headerSize||"18px"};
    /* font-size: 18px; */
    line-height: 22px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ef4565;
  }
`,OI=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  span {
    font-weight: 500;
    font-size: ${e=>e.headerSize||"18px"};
    line-height: 22px;
    color: #000000;
    color: white;
    text-transform: capitalize;
  }
`,PI=b.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: ${e=>e.titleSize||"24px"};
  line-height: ${e=>e.titleLineHeight||"35px"};
  color: #d8eefe;
`,II=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.4rem;
`,DI=b.div`
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
`;b.div`
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
`;const NI=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
`,LI=b.span`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: white;
`,q2=e=>{var d,f,h,p,y,w,j,x,m;const t=me(),{fetchLocalUserData:n}=Le(),[r,i]=g.useState();g.useEffect(()=>{n().then(v=>{i(v)}),l()},[]);const o=()=>r?e.teachCard.studentsEnrolled.filter(S=>S==r._id).length:null,a=()=>r?e.teachCard.createdBy._id==r._id:null,l=()=>{const v=new Date,S=e.teachCard.classEndsAt,C=new Date(S);return v>C},c=()=>{const v=r==null?void 0:r._id,S=e.teachCard.reviews;let C=!1;return S.forEach(O=>{O.user._id==v&&(C=!0)}),C},u=()=>{ve(),a()?e.fromLearnCard?t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}}):o()?e.fromLearnCard?t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/classes/class/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}}):e.fromLearnCard?t(`/class-overviw/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType,learnCardId:e.learnCardId}}):t(`/class-overviw/${e.teachCard._id}`,{state:{classroomId:e.teachCard._id,elemType:e.elemType}})};return s.jsx(_I,{hasAnimation:(d=e.cssArr)==null?void 0:d.hasAnimation,children:s.jsxs(TI,{gapSize:(f=e.cssArr)==null?void 0:f.gap,children:[s.jsx(EI,{headerSize:(h=e.cssArr)==null?void 0:h.headerSize,children:s.jsx("h4",{children:e.teachCard.subject})}),s.jsx(PI,{titleSize:(p=e.cssArr)==null?void 0:p.titleSize,titleLineHeight:(y=e.cssArr)==null?void 0:y.titleLineHeight,children:e.teachCard.topic.length>52?e.teachCard.topic.slice(0,52)+"...":e.teachCard.topic}),s.jsx(NI,{children:s.jsx(Kn,{name:e.teachCard.createdBy.userName,photo:e.teachCard.createdBy.photo,imgBorder:"#ffffff",textColor:"#ffffff",imgSize:(w=e.cssArr)==null?void 0:w.userChipImgSize,textSize:(j=e.cssArr)==null?void 0:j.userChipTextSize,userId:e.teachCard.createdBy._id})}),s.jsxs(Qv,{children:[s.jsxs(OI,{headerSize:(x=e.cssArr)==null?void 0:x.headerSize,children:[s.jsx(Oc,{}),s.jsxs("span",{children:[e.teachCard.studentsEnrolled.length," enrolled"]})]}),s.jsx(LI,{children:ki(e.teachCard.date)+", "+Dn(e.teachCard.classStartsAt)+" - "+Dn(e.teachCard.classEndsAt)})]}),s.jsx(yp,{children:e.teachCard.tags.map((v,S)=>s.jsx("div",{children:s.jsx("span",{children:v})},S))}),s.jsx(II,{children:s.jsxs(DI,{onClick:u,btnSize:(m=e.cssArr)==null?void 0:m.btnSize,children:[s.jsx("span",{children:e.teachCard.hasCancelled?"Class Cancelled":a()?"Check Class":o()==1?l()?c()?"Check Class":"Give Review":"Check Class":l()?"Check Class":"Enroll Now"}),s.jsx(et,{strokeColor:"white"})]})})]})})},$I=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 3.2rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }
  /* @media only screen and (max-width: 750px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  } */
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`,Q2={hasAnimation:!0,imageHeight:"180px",gap:"18px",headerSize:"16px",titleSize:"20px",titleLineHeight:"30px",btnSize:"16px",svgSize:"18px",userChipImgSize:"26px",userChipTextSize:"18px"},ju=e=>s.jsx($I,{children:e.teachCards.map((t,n)=>s.jsx(q2,{cssArr:Q2,teachCard:t,elemType:e.elemType},n))}),MI=b.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,v1=e=>{const[t,n]=g.useState([]),[r,i]=g.useState(1),[o,a]=g.useState(!1),[l,c]=g.useState(!0),[u,d]=g.useState(!0),f=p=>{if(p.length==0){a(!1);return}else if(p.length%In!=0){a(!1);return}a(!0)};async function h(){d(!0),await ee.get(`${te}${ne}/teach`,{params:{sort:"-classStartsAt",limit:In,page:r},headers:ie(e.userToken??"")}).then(({data:p})=>{console.log(p.teachCards);const y=p.teachCards;f(y),n(w=>[...w,...y]),c(!1),d(!1),i(w=>w+1)}).catch(p=>{console.log(p),c(!1),d(!1)})}return g.useEffect(()=>{e.userToken&&h()},[e.userToken]),s.jsxs(MI,{children:[l?s.jsx(_e,{}):t.length!=0&&s.jsx(ju,{teachCards:t,elemType:"all classes"}),t&&o&&s.jsx(Ro,{loaderLoading:u,onClick:h})]})},RI=b.div`
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
    text-align: center;
  }

  button {
    display: flex;
    padding: 1.125rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: #ef4565;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 2vw;
  }
`,K2=e=>{const t=me(),n=()=>{t("/classes",{state:{elemLink:e.elemLink}})};return s.jsxs(RI,{children:[s.jsx("h2",{children:e.heading}),s.jsx("h3",{children:e.subHeading}),s.jsxs("button",{onClick:n,children:[s.jsx("span",{children:"Check Classes"}),s.jsx(et,{strokeColor:"white"})]})]})},AI=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,FI=e=>{const[t,n]=g.useState([]),[r,i]=g.useState(1),[o,a]=g.useState(!1),[l,c]=g.useState(!0),[u,d]=g.useState(!0),f=p=>{if(p.length==0){a(!1);return}else if(p.length%In!=0){a(!1);return}a(!0)};async function h(){d(!0),await ee.get(`${te}${ne}/user/myclasses/upcoming`,{params:{sort:"-classStartsAt",limit:In,page:r},headers:ie(e.userToken??"")}).then(({data:p})=>{const y=p.upcomingClasses;console.log(y),f(y),n(w=>[...w,...y]),c(!1),d(!1),i(w=>w+1)}).catch(p=>{console.log(p),c(!1),d(!1)})}return g.useEffect(()=>{e.userToken&&h()},[e.userToken]),s.jsxs(AI,{children:[l?s.jsx(_e,{}):t.length!=0?s.jsx(ju,{teachCards:t,elemType:"upcoming"}):s.jsx(K2,{elemLink:"all classes",heading:"No upcoming classes",subHeading:`You don't have any upcoming classes. Enroll in a class and start your\r
        learning`}),t&&o&&s.jsx(Ro,{loaderLoading:u,onClick:h})]})},zI=b.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`,UI=e=>{const[t,n]=g.useState([]),[r,i]=g.useState(1),[o,a]=g.useState(!1),[l,c]=g.useState(!0),[u,d]=g.useState(!0),f=p=>{if(p.length==0){a(!1);return}else if(p.length%In!=0){a(!1);return}a(!0)};async function h(){d(!0),await ee.get(`${te}${ne}/user/myclasses/completed`,{params:{sort:"-classStartsAt",limit:In,page:r},headers:ie(e.userToken??"")}).then(({data:p})=>{console.log(p);const y=p.completedClasses;f(y),n(w=>[...w,...y]),c(!1),d(!1),i(w=>w+1)}).catch(p=>{console.log(p),c(!1),d(!1)})}return g.useEffect(()=>{e.userToken&&h()},[e.userToken]),s.jsxs(zI,{children:[l?s.jsx(_e,{}):t.length!=0?s.jsx(ju,{teachCards:t,elemType:"completed"}):s.jsx(K2,{elemLink:"upcoming",heading:"No Completed Classes",subHeading:"You don't have any completed classes. Check your enrolled classes"}),t&&o&&s.jsx(Ro,{loaderLoading:u,onClick:h})]})},BI=b.div`
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  /* @media only screen and (max-width: 600px) {
    padding: 0 2vw;
  } */
`,Z2=b.div`
  margin: 2rem 0 0;
  /* border: 2px solid green; */
`,HI=()=>{const[e,t]=g.useState(""),[n,r]=g.useState("all classes"),[i,o]=g.useState(s.jsx(v1,{userToken:e})),a=$t(),{fetchLocalUserToken:l}=Le();g.useEffect(()=>{var f;const d=(f=a.state)==null?void 0:f.elemLink;d&&r(d),l().then(h=>{t(h)})},[a]),g.useEffect(()=>{e&&(n=="all classes"?o(s.jsx(v1,{userToken:e})):n=="upcoming"?o(s.jsx(FI,{userToken:e})):n=="completed"&&o(s.jsx(UI,{userToken:e})))},[n,e]);const c=d=>{r(d)},u=["all classes","upcoming","completed"];return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(BI,{children:[s.jsx(xp,{}),s.jsx(cm,{activeLink:n,labelArr:u,navigationHandler:c}),s.jsx(Z2,{children:i})]}),s.jsx(Qe,{})]})},WI=b.div`
  /* border: 1px solid red; */
  position: relative;
  z-index: 0;
`,YI=b.div`
  z-index: 0;
  img {
    width: 100%;
    height: 45vh;
    border-radius: 8px;
    object-fit: cover;
  }
`,VI=b.div`
  /* border: 1px solid white; */

  /* background-color: grey; */
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  z-index: 1;
  /* color: white; */
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  width: 50%;
  text-shadow: 3px 4px 7px rgba(0, 0, 0, 0.6);
  /* mix-blend-mode: darken; */
`,Cu=({img:e,title:t})=>s.jsxs(WI,{children:[s.jsx(YI,{children:s.jsx("img",{src:e,alt:"class-banner-img"})}),s.jsx(VI,{children:s.jsx("h3",{children:t})})]}),GI=b.div`
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
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* color: #4a5578; */
    margin-bottom: 0.5rem;
  }
`,um=e=>s.jsxs(GI,{children:[s.jsxs("h3",{children:["For :- ",e.programme," | ",e.standard]}),s.jsx("p",{children:e.desciption})]}),qI=b.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  gap: 10px;
  background: #d1fadf;
  background: #094067;
  border-radius: 30px;

  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  color: #054f31;
  color: white;
  /* margin-bottom: 1.5rem; */

  div {
    width: 4px;
    height: 4px;
    background-color: #054f31;
    background-color: white;
    border-radius: 50%;
    /* border: 1px solid red; */
  }

  span.cancelled{
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
`,dm=e=>{let t,n;return e.classStartsAt&&e.classEndsAt&&(t=Dn(e.classStartsAt),n=Dn(e.classEndsAt)),s.jsx(qI,{children:e.hasCanelled?s.jsx("span",{className:"cancelled",children:"Class cancelled"}):e.classStartsAt&&e.classEndsAt?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:ki(e.date)}),s.jsx("div",{}),s.jsx("span",{children:t+" - "+n})]}):s.jsxs("span",{children:["Due By :- ",ki(e.date)]})})},QI=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  gap: 8px;
  background: #ef4565;
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
`,J2=({callLink:e})=>s.jsx(s.Fragment,{children:e?s.jsx(QI,{children:s.jsxs(Sc,{to:e,target:"_blank",children:[s.jsx("span",{children:"Join Class"}),s.jsx(et,{strokeColor:"white"})]})}):null}),X2=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: fit-content;
  background: #ef4565;
  border-radius: 30px;

  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`,KI=b.div`
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
`,ZI=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`,JI=e=>{const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}const[o,a]=g.useState(e.callLink);function l(u){a(u)}const c=async()=>{await ee.patch(`${te}${ne}/teach/${e.teachCardId}/callLink`,{callLink:o},{headers:ie(e.userToken??"")}).then(()=>{i(),window.location.reload()})};return s.jsxs(s.Fragment,{children:[s.jsxs(X2,{onClick:r,children:[e.callLink?s.jsx("span",{children:"Show Link"}):s.jsx("span",{children:"Add Class Link"}),s.jsx(et,{strokeColor:"white"})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Zn,children:s.jsxs(KI,{children:[s.jsx("header",{children:s.jsx("h4",{children:e.callLink?"Class Link":"Add Link"})}),s.jsx(Kt,{label:"Class Link",name:"callLink",value:o,updateSingleField:l}),s.jsx(ZI,{children:e.callLink?s.jsxs(s.Fragment,{children:[s.jsx(Gn,{children:s.jsxs("button",{type:"submit",onClick:c,children:[s.jsx("span",{children:"Edit Class Link"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})}),s.jsx(Gn,{children:s.jsx(Sc,{to:e.callLink,target:"_blank",children:s.jsxs("button",{type:"submit",children:[s.jsx("span",{children:"Join"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})})})]}):s.jsx(Gn,{children:s.jsxs("button",{type:"submit",onClick:c,children:[s.jsx("span",{children:"Add Class Link"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})})})]})})]})},XI=b.div`
  display: flex;
`,eD=b.div`
  svg {
    /* border: 1px solid red; */
    padding-right: 1rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    fill: ${e=>e.colored?"#ffc557":"rgba(125, 137, 176, 0.2);"};
  }
`,tD=({rating:e,onRating:t})=>{const[n,r]=g.useState(0),i=a=>n>=a?!0:!n&&e>=a,o=g.useMemo(()=>Array(10).fill(0).map((a,l)=>l+1).map(a=>s.jsx(eD,{onClick:()=>t(a),colored:i(a),onMouseEnter:()=>r(a),onMouseLeave:()=>r(0),children:s.jsx(cp,{})},a)),[e,n]);return s.jsx(XI,{children:o})},nD=N3`
    0%{
        transform: rotate(45deg);
    /* } 50% { */
        /* transform: rotate(0); */
    } 100% {
        transform: rotate(0deg);
    }
`,rD=b.div`
  width: 50vw;
  padding: 2rem 0;
  svg {
    width: 80px;
    height: 80px;
    fill: #094067;
    margin-bottom: 1rem;
    animation: ${nD} 0.25s linear 1;
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
`,iD=()=>s.jsxs(rD,{children:[s.jsx(Z3,{}),s.jsx("h2",{children:"Thanks for reviewing!!"}),s.jsx("h4",{children:"Your feedback has been submitted"})]}),oD=b.div`
  /* border: 1px solid red; */
  width: 50vw;
  textarea {
    margin-bottom: 2rem;
    width: 90%;
  }
`,sD=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,aD=b.div`
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
`,lD=e=>{const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}const[o,a]=g.useState(1),[l,c]=g.useState(""),[u,d]=g.useState(!1),f=y=>{c(y)};function h(){setInterval(()=>{i()},2500)}const p=async()=>{await ee.post(`${te}${ne}/teach/${e.teachCardId}/reviews`,{review:l,rating:o,teacherID:e.teacherID},{headers:ie(e.userToken)}).then(({data:y})=>{console.log(y),d(!0),h()})};return s.jsxs(s.Fragment,{children:[s.jsxs(X2,{onClick:r,children:[s.jsx("span",{children:"Give Review"}),s.jsx(et,{strokeColor:"white"})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Zn,children:u?s.jsx(iD,{}):s.jsxs(oD,{children:[s.jsx(sD,{children:s.jsx("h4",{children:"Class Feedback"})}),s.jsxs(aD,{children:[s.jsx("span",{children:"Rate your experience"}),s.jsx("h4",{children:"Are you satisfied with the teacher"}),s.jsx(tD,{onRating:y=>a(y),rating:o})]}),s.jsx(Kt,{label:"Brief Review",name:"review",value:l,areaHeight:"10rem",updateSingleField:f}),s.jsx(Gn,{children:s.jsx("button",{type:"submit",onClick:p,children:s.jsx("span",{children:"Submit Review"})})})]})})]})},cD=b.div`
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
  width: fit-content;
`,uD=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,dD=b.div`
  width: 50vw;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  button {
    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      background-color: #ef4565;
    }
  }
`,fD=e=>{const[t,n]=g.useState(!1),[r,i]=g.useState(!1);function o(){i(!0)}function a(){i(!1)}const l=async()=>{await ee.patch(`${te}${ne}/teach/${e.teachCardId}/cancel`,{},{headers:ie(e.userToken)}).then(({data:c})=>{console.log(c)}).catch(c=>{console.log(c)})};return s.jsxs(s.Fragment,{children:[s.jsx(cD,{onClick:o,children:"Cancel Class"}),s.jsx(mn,{isOpen:r,onRequestClose:a,style:Zn,children:s.jsxs(dD,{children:[s.jsx(uD,{children:s.jsx("h4",{children:"Cancel Class"})}),s.jsx("p",{children:"Are you sure you want to cancel this class? On cancelling this class, the students would be refunded their coins and deducted from your side."}),s.jsxs(Gn,{children:[s.jsx("button",{type:"button",onClick:a,children:"Go back"}),s.jsx("button",{type:"button",onClick:l,children:t?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Cancel Class"})]})]})})]})},hD=b.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,pD=b.div`
  /* border: 1px solid red;
  border: 1px solid #d5d9eb; */
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`,mD=b.div``,gD=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  cursor: pointer;
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
  span.id {
    font-size: 16px;
  }
`,fm=b.div`
  background-color: #094067;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  width: fit-content;
  gap: 10px;
  cursor: pointer;
  border-radius: 30px;

  span {
    color: white;
  }

  svg {
    /* border: 1px solid red; */
    width: 1.5rem;
    height: 1.3rem;
  }
`,xD=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div.lang {
    color: #ef4565;
    padding: 6px 12px;
    font-weight: 700;
  }

  div {
    border: 1px solid grey;
    padding: 6px 12px;
    border-radius: 6px;
  }
`,eb=b.div`
  /* border: 1px solid red; */

  h2 {
    color: #000;
    font-family: "Nunito";
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2rem;
    text-decoration: underline;
  }
`,tb=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
`,nb=b.div`
  border: 1px solid #d5d9eb;
  /* background-color: #094067; */
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 32px 24px;
  box-sizing: border-box;
  border-radius: 12px;

  div.head {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: max-content auto max-content;

    div.user {
      display: flex;
      flex-direction: column;
      h4 {
        margin-left: 4px;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 2px;
      }
    }

    div.rating {
      /* border: 1px solid red; */
      display: flex;
    }

    div.time {
      color: #98a2b3;
      font-size: 0.9rem;
    }
  }

  img {
    /* border: 1px solid red; */
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 6px;
    border: 1px solid black;
  }
`,rb=b.div`
  /* border: 1px solid red; */
  padding: 0;
  margin-right: 0.4rem;
  svg {
    cursor: pointer;
    width: 24px;
    height: 20px;
    fill: ${e=>e.colored?"#ffc557":"rgba(125, 137, 176, 0.2);"};
  }
`,w1=e=>{const t=()=>{const c=new Date,u=e.classEndsAt,d=new Date(u);return c>d},n=()=>{const c=e.userId;return e.reviews.filter(f=>f.user._id==c).length==1},r={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},i=()=>{navigator.clipboard.writeText(e._id),D.success("ID copied to clipboard",r)},[o,a]=g.useState(),l=async()=>{await ee.get(`${te}${ne}/teach/${e._id}/reviews`,{headers:ie(e.userToken)}).then(({data:c})=>{console.log(c),a(c.reviews)})};return g.useEffect(()=>{e.userToken&&t()&&l()},[e.userToken]),e&&s.jsxs(s.Fragment,{children:[s.jsx(Cu,{img:e.cardBanner,title:e.topic}),s.jsxs(hD,{children:[s.jsxs(pD,{children:[s.jsx(dm,{date:e.date,classStartsAt:e.classStartsAt,classEndsAt:e.classEndsAt,hasCanelled:e.hasCancelled}),!e.hasCancelled&&!t()?e.userId==e.createdBy._id?s.jsx(JI,{callLink:e.callLink,teachCardId:e._id,userId:e.userId,userToken:e.userToken}):s.jsx(J2,{callLink:e.callLink}):e.userId==e.createdBy._id||n()?null:s.jsx(lD,{teachCardId:e._id,userToken:e.userToken,teacherID:e.createdBy._id}),s.jsxs(xD,{children:[s.jsx("div",{className:"lang",children:s.jsx("span",{children:e.preferredLanguage})}),e==null?void 0:e.tags.map((c,u)=>s.jsx("div",{children:s.jsx("span",{children:c})},u))]}),!e.hasCancelled&&e.userId===e.createdBy._id?t()?null:s.jsx(fD,{teachCardId:e._id,userToken:e.userToken}):null]}),s.jsxs(mD,{children:[s.jsxs(gD,{children:[s.jsx(Kn,{name:e.createdBy.userName,photo:e.createdBy.photo,imgBorder:"white",textColor:"black",userId:e.createdBy._id,imgSize:"42px",textSize:"20px",hasUnderline:!0}),s.jsxs(fm,{onClick:i,children:[s.jsxs("span",{className:"id",children:["Card ID :- ",e._id]}),s.jsx(Pc,{color:"white"})]})]}),s.jsx(um,{programme:e.programme,standard:e.standard,desciption:e.description})]})]}),o&&(o==null?void 0:o.length)!=0&&s.jsxs(eb,{children:[s.jsx("h2",{children:"Reviews :-"}),s.jsx(tb,{children:o.map((c,u)=>s.jsxs(nb,{children:[s.jsxs("div",{className:"head",children:[s.jsx("img",{src:c.user.photo,alt:"reviewer-img"}),s.jsxs("div",{className:"user",children:[s.jsx("h4",{children:c.user.name}),s.jsx("div",{className:"rating",children:Array(10).fill(0).map((d,f)=>f+1).map(d=>s.jsx(rb,{colored:d<=c.rating,children:s.jsx(cp,{})},d))})]}),s.jsx("div",{className:"time",children:W(c.createdAt).fromNow()})]}),s.jsx("div",{className:"review",children:s.jsx("p",{children:c.review})})]}))})]}),s.jsx(hn,{theme:"dark"})]})},yD=b.div`
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
`,b1=b.div`
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
`,S1=e=>{var r,i,o;console.log(Array.isArray(e.listArr));const t=me(),n=a=>{ve(),e.localUserId==a?t("/me"):t(`/user/${a}`,{state:{userId:a}})};return s.jsxs(yD,{children:[s.jsx("h3",{children:e.heading}),s.jsx("ul",{children:Array.isArray(e.listArr)?e.listArr.map((a,l)=>s.jsxs(b1,{onClick:()=>n(a._id),children:[s.jsx("img",{src:a.photo,alt:"user-img"}),s.jsxs("div",{children:[s.jsx("h4",{children:a.name}),s.jsxs("h5",{children:["@",a.userName]})]})]},l)):s.jsxs(b1,{onClick:()=>{var a;return n((a=e.teacherObj)==null?void 0:a._id)},children:[s.jsx("img",{src:(r=e.teacherObj)==null?void 0:r.photo,alt:""}),s.jsxs("div",{children:[s.jsx("h4",{children:(i=e.teacherObj)==null?void 0:i.name}),s.jsxs("h5",{children:["@",(o=e.teacherObj)==null?void 0:o.userName]})]})]})})]})},vD=b.div`
  /* border: 1px solid red; */
  margin-bottom: 2rem;
`,wD=b.div`
  width: 60%;
  margin: 3rem auto 0;
`,bD=b.div`
  /* border: 5px solid yellow; */
  margin-bottom: 3rem;
`,SD=b.div``,jD=e=>s.jsxs(vD,{children:[s.jsx(Cu,{img:e.cardBanner,title:e.topic}),s.jsxs(wD,{children:[s.jsx(bD,{children:s.jsx(S1,{heading:"Teachers",teacherObj:e.createdBy,localUserId:e.localUserId})}),s.jsx(SD,{children:e.studentsEnrolled.length!=0?s.jsx(S1,{heading:"Students",listArr:e.studentsEnrolled,localUserId:e.localUserId}):null})]})]}),CD=b.div`
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
`,kD=b.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h4 {
    font-size: 16px;
    border-bottom: 1px solid black;
  }
`,_D=e=>{console.log(e.classElemType);const[t,n]=g.useState(),{fetchLocalUserToken:r}=Le();g.useEffect(()=>{r().then(c=>{n(c)})},[]);const[i,o]=g.useState("");function a(c){o(c)}me();const l=async()=>{console.log(i),await ee.post(`${te}${ne}/teach/${e.teachCardId}/announcements`,{content:i},{headers:ie(t??"")}).then(({data:c})=>{console.log(c),window.dispatchEvent(new Event("announcement")),e.closeModal()})};return s.jsxs(CD,{children:[s.jsx(kD,{children:s.jsx("h4",{children:"Post Announcement"})}),s.jsx(Kt,{label:"Announcement",name:"content",value:i,updateSingleField:a,areaHeight:"8rem"}),s.jsx(Gn,{children:s.jsxs("button",{type:"submit",onClick:l,children:[s.jsx("span",{children:"Make Announcement"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})})]})},TD=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;
  width: fit-content;
  background: #000000;
  background: #094067;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 56px;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  /* margin-bottom:; */
`,ED=e=>{const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}return s.jsxs(s.Fragment,{children:[s.jsxs(TD,{onClick:r,children:[s.jsx("span",{children:"Make an Announcement"}),s.jsx(ap,{color:"white"})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Zn,children:s.jsx(_D,{teachCardId:e.teachCardId,closeModal:i})})]})},OD=b.div`
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
`,PD=e=>s.jsxs(OD,{children:[s.jsxs("header",{children:[s.jsx(Kn,{name:e.sender.userName,photo:e.sender.photo,textSize:"20px",imgSize:"32px",userId:e.sender._id}),s.jsx("h4",{children:ki(e.createdAt)+", "+Dn(e.createdAt)})]}),s.jsx("p",{children:e.content})]}),ID=b.div`
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,DD=b.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,ND=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`,LD=b.h2`
  /* border: 1px solid red; */
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
  padding-left: 1rem;
`,$D=e=>{const[t,n]=g.useState([]),[r,i]=g.useState(1),[o,a]=g.useState(2),[l,c]=g.useState(!1),[u,d]=g.useState(!0),[f,h]=g.useState(!0),p=w=>{if(w.length==0){c(!1);return}else if(w.length%o!=0){c(!1);return}c(!0)};async function y(){h(!0),await ee.get(`${te}${ne}/teach/${e.teachCardId}/announcements`,{params:{limit:In,page:r},headers:ie(e.userToken??"")}).then(({data:w})=>{console.log(w.announcements),p(w.announcements),n(j=>[...j,...w.announcements]),d(!1),h(!1),i(j=>j+1)}).catch(w=>{console.log(w),d(!1),h(!1),h(!1)})}return g.useEffect(()=>{e.userToken&&y(),window.addEventListener("announcement",()=>{console.log("Announcement added!"),y()})},[e.userToken]),s.jsxs(s.Fragment,{children:[s.jsx(Cu,{img:e.cardBanner,title:e.topic}),s.jsxs(ID,{children:[s.jsxs(DD,{children:[e.isTeacher&&s.jsx(ED,{teachCardId:e.teachCardId}),s.jsx(J2,{callLink:e.callLink})]}),u?s.jsx(_e,{}):(t==null?void 0:t.length)!=0?s.jsx(ND,{children:t&&t.map((w,j)=>g.createElement(PD,{...w,key:j}))}):s.jsx(LD,{children:"No announcements yet!!"})]}),t&&l&&s.jsx(Ro,{loaderLoading:f,onClick:y})]})},MD=b.div`
  /* margin: 2rem 0 3rem; */
  padding: 0rem 15vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* gap: 2.5rem; */

  font-family: "Nunito";
  font-style: normal;
`,j1=b.div`
  margin: 3rem 0 0;
`,RD=()=>{const[e,t]=g.useState(),[n,r]=g.useState(""),[i,o]=g.useState(""),[a,l]=g.useState(),[c,u]=g.useState("overview"),[d,f]=g.useState("all classes"),[h,p]=g.useState("/classes"),[y,w]=g.useState(""),[j,x]=g.useState(!0),m=$t(),{fetchLocalUserData:v}=Le();g.useEffect(()=>{var A,J,_;console.log("CHECKING"),console.log(m.state);const L=m.state.classroomId;t(L);const q=(A=m.state)==null?void 0:A.backPageLink;q&&p(q);const Q=(J=m.state)==null?void 0:J.navLink;Q&&u(Q);const se=(_=m.state)==null?void 0:_.elemType;se&&f(se);const N=m.state.learnCardId;N&&w(N),v().then(E=>{r(E.token),o(E._id)})},[m.state]);async function S(){await ee.get(`${te}${ne}/teach/${e}`,{headers:ie(n??"")}).then(({data:L})=>{const q=L.teachCard;console.log(L),l(q),x(!1)}).catch(L=>{console.log(L),x(!1)})}g.useEffect(()=>{e&&n&&S()},[e,n]);const[C,O]=g.useState();g.useEffect(()=>{a&&O(s.jsx(w1,{...a,userId:i,userToken:n}))},[a]);const k=(L,q)=>L==q;g.useEffect(()=>{a&&(c=="overview"?O(s.jsx(w1,{...a,userId:i,userToken:n})):c=="classroom"?O(s.jsx($D,{callLink:a.callLink,cardBanner:a.cardBanner,topic:a.topic,isTeacher:k(i,a.createdBy._id),teachCardId:a._id,userToken:n,classElemType:d})):c=="people"&&O(s.jsx(jD,{cardBanner:a.cardBanner,createdBy:a.createdBy,studentsEnrolled:a.studentsEnrolled,topic:a.topic,localUserId:i})))},[c]);const P=L=>{u(L)},R=["overview","classroom","people"];return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(MD,{children:[s.jsx(ti,{link:h,classElem:d,learnCardId:y}),s.jsx(cm,{activeLink:c,labelArr:R,navigationHandler:P}),j?s.jsx(j1,{children:s.jsx(_e,{})}):s.jsx(j1,{children:C})]}),s.jsx(Qe,{})]})},AD=b.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-bottom: 2rem;

  form {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`,FD=e=>s.jsx(AD,{children:s.jsxs("form",{action:"",children:[s.jsx(He,{type:"email",label:"Email",value:e.email,name:"email",updateFields:e.updateFields,placeholderText:"Email"}),s.jsx(He,{type:"password",label:"Password",value:e.password,name:"password",updateFields:e.updateFields,placeholderText:"Password"})]})}),zD=b.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-family: "Nunito";
  padding-right: 2rem;

  @media only screen and (max-width: 870px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
  }
`,UD=b.div`
  /* border: 1px solid red; */
  width: 55vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    width: 100vw;
  }
`,BD=b.div`
  /* border: 1px solid red; */
  padding: 5vw 0;
  width: 45vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 870px) {
    min-height: 0;
    padding: 0;
    width: 100vw;
  }
`,HD=b.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0;
  width: 80%;

  border: 2px solid #d5d9eb;
  border-radius: 28px;
  margin: auto;

  @media only screen and (max-width: 870px) {
    border: none;
    width: 100%;
  }

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
`,WD=b.div`
  /* border: 1px solid red; */
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
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
  }
`,YD=()=>{const e=me();g.useEffect(()=>{localStorage.getItem(Dt)&&e("/")},[e]);const[t,n]=g.useState({email:"",password:""});function r(d){n(f=>({...f,...d}))}const i=d=>{ve(),e(d)},o={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},a=()=>{const{email:d,password:f}=t;if(d===""||f==="")return D.error("Fill in all the details",o),!1;if(mp(d)){if(f.length<6)return D.error("Password is short",o),!1}else return D.error("Email is not valid!!",o),!1;return!0},[l,c]=g.useState(!1),u=async d=>{d.preventDefault(),c(!0),a()&&await ee.post(`${te}${ne}/auth/login`,{email:t.email,password:t.password}).then(({data:f})=>{const h=f.data.user;h.token=f.token,localStorage.setItem(Dt,JSON.stringify(h)),c(!1),i("/")}).catch(f=>{const h=f.response.data.message;console.log(h),c(!1),D.error(h,o)})};return s.jsxs(zD,{children:[s.jsx(UD,{children:s.jsxs(HD,{children:[s.jsx(FD,{...t,updateFields:r}),s.jsx(WD,{children:s.jsx("button",{type:"submit",onClick:u,children:l?s.jsx(_e,{color:"white",loaderHeight:"2rem"}):"Login"})}),s.jsxs("span",{className:"login",children:["Don't have an account?"," ",s.jsx("span",{className:"link",onClick:()=>i("/signup"),children:"Sign Up!!"})," "]})]})}),s.jsx(BD,{children:s.jsx(Xw,{heading:"Welcome Back!!"})}),s.jsx(hn,{theme:"dark"})]})},ib=["6th Class","7th Class","8th Class","9th Class","10th Class","11th Class","12th Class","Diploma","1st Year","2nd Year","3rd Year","4th Year","5th Year"],VD=b.div`
  /* border: 1px solid red; */

  border: 1px solid #d5d9eb;
  border-radius: 26px;
  box-sizing: border-box;
  padding: 48px 64px;
  width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    width: 90%;
    padding: 48px 48px;
  }
  @media only screen and (max-width: 500px) {
    width: 95%;
    padding: 48px 26px;
  }

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-decoration: underline;
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
`,GD=b.div`
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
    background: #094067;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;

    button {
      padding: 16px 26px;
      font-size: 16px;
    }
  }
`,C1={subject:"",topic:"",programme:"",standard:"",preferredLanguage:"",description:"",expectation:"",tag:"",tags:[],dueDate:""},qD=()=>{const[e,t]=g.useState(C1),[n,r]=g.useState(""),[i,o]=g.useState(!1),{fetchLocalUserToken:a}=Le(),l=me();g.useEffect(()=>{a().then(p=>{r(p)})},[]);function c(p){t(y=>({...y,...p}))}const u=p=>{c({dueDate:p})},d={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},f=()=>{const{subject:p,topic:y,programme:w,preferredLanguage:j,dueDate:x,description:m}=e,v=new Date,S=new Date(x);return p===""||y===""||w===""||j===""||x===""||m===""?(D.error("Fill in all the details",d),!1):y.length<35?(D.error("Topic must be greater than 35 characters",d),!1):S<v?(D.error("Pick another due date",d),!1):m.length>400?(D.error("Description caannot exceed 400 characters!!",d),!1):!0},h=async p=>{p.preventDefault(),console.log(e),f()&&(o(!0),await ee.post(`${te}${ne}/learn`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,preferredLanguage:e.preferredLanguage,description:e.description,tags:e.tags,dueDate:e.dueDate},{headers:ie(n??"")}).then(({data:y})=>{console.log(y),t(C1),o(!1),l("/requests")}).catch(y=>{o(!1);const w=y.response.data.error.errors;Object.keys(w).forEach(function(j,x){D.error(w[j].message,d)})}))};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(VD,{children:[s.jsx(ti,{link:"/"}),s.jsx("h2",{children:"Create Learn Card"}),s.jsxs("form",{children:[s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Subject",value:e.subject,name:"subject",updateFields:c,hasDropdown:!0,dropdownData:ko,placeholderText:"Physics, English, Botany, Accounts. etc."}),inputDesc:"Subject"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Topic",name:"topic",value:e.topic,updateFields:c,areaHeight:"6rem",placeholderText:"Pythagoras’ Theorem, World War 2, Balance Sheet, Leibniz Rule, etc."}),inputDesc:"Topic"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Course/Exam/Board/Programme",value:e.programme,name:"programme",updateFields:c,hasDropdown:!1,placeholderText:"I.C.S.E, B.Tech, NEET, UPSC, etc."}),inputDesc:"Course/Exam/Board/Programme"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Standard",value:e.standard,name:"standard",updateFields:c,hasDropdown:!0,dropdownData:ib,placeholderText:"10th class/2nd year etc (optional)"}),inputDesc:"Standard/Year"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Preferred Language",value:e.preferredLanguage,name:"preferredLanguage",updateFields:c,hasDropdown:!0,dropdownData:uu,placeholderText:"Hindi, English, Tamil, Marathi, French etc"}),inputDesc:"Preferred Language"}),s.jsx(je,{elem:s.jsx("input",{type:"date",id:"date",value:e.dueDate,onChange:p=>u(p.target.value)}),inputDesc:"Due date"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Description",name:"description",updateFields:c,value:e.description,placeholderText:"Can not exceed 400 characters"}),inputDesc:"Description of the query"}),s.jsx(je,{elem:s.jsxs(ws,{children:[s.jsx(Gr,{label:"#Physics, #BusinessManagement (optional)",elemName:"tag",value:e.tag,name:"tags",arr:e.tags,updateFields:c,maxLimit:5}),e.tags.length!=0?s.jsx(qr,{listArr:e.tags,updateFields:c,name:"tags"}):null]}),inputDesc:"Tags"})]}),s.jsx(GD,{children:s.jsx("button",{type:"submit",onClick:h,children:i?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Create Learn Card"})})]}),s.jsx(Qe,{}),s.jsx(hn,{theme:"dark"})]})},QD=b.div`
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

  @media only screen and (max-width: 800px) {
    width: 90%;
    padding: 48px 48px;
  }
  @media only screen and (max-width: 500px) {
    width: 95%;
    padding: 48px 26px;
  }

  h2 {
    font-family: "Nunito";
    font-style: normal;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    text-decoration: underline;
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
`,KD=b.div`
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
    background: #094067;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  @media only screen and (max-width: 500px) {
    justify-content: center;

    button {
      padding: 16px 26px;
      font-size: 16px;
    }
  }
`,kd={subject:"",topic:"",programme:"",standard:"",preferredLanguage:"",photo:"",date:"",description:"",tag:"",tags:[],startingTime:"",endingTime:""},ZD=()=>{const[e,t]=g.useState(kd),[n,r]=g.useState(),[i,o]=g.useState(!1),[a,l]=g.useState(!1),c=$t();g.useEffect(()=>{const v=c.state;c.state&&(t(S=>({...S,subject:v.subject,topic:v.topic,programme:v.programme,standard:v.standard,description:v.description,tags:v.tags})),r(v.learnCardId),o(!0))},[c]);const[u,d]=g.useState(""),{fetchLocalUserToken:f}=Le();g.useEffect(()=>{f().then(v=>{d(v)})},[]);function h(v){t(S=>({...S,...v}))}const p=v=>{const S=v.target.value;h({[v.target.name]:S})},y=v=>{console.log(v.target.value),h({[v.target.name]:v.target.value})},w={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},j=()=>{const{subject:v,topic:S,programme:C,preferredLanguage:O,date:k,startingTime:P,endingTime:R,description:L}=e,q=new Date,Q=new Date(k),se=new Date(P),N=new Date(R);return v===""||S===""||C===""||O===""||k===""||P===""||R===""||L===""?(D.error("Fill in all the details",w),!1):S.length<30?(D.error("Topic must be greater than 30 characters",w),!1):Q<q?(D.error("Pick another date for class",w),!1):N<se?(D.error("Class End time cannot be less than Start time",w),!1):L.length>400?(D.error("Description caannot exceed 400 characters!!",w),!1):!0},x=async v=>{v.preventDefault(),console.log(e);const S=await r0(e.subject);if(console.log(S),j()){if(!S){D.error("A card banner couldnt be generated!! Try again.",w);return}l(!0),await ee.post(`${te}${ne}/teach`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,date:e.date,preferredLanguage:e.preferredLanguage,cardBanner:S,classStartsAt:e.startingTime,classEndsAt:e.endingTime,description:e.description,tags:e.tags},{headers:ie(u??"")}).then(({data:C})=>{console.log(C),t(kd),l(!1),D.error("Teach Card Successfully created!!",w)}).catch(C=>{if(l(!1),console.log(C),C.response.data.error.errors){const O=C.response.data.error.errors;Object.keys(O).forEach(function(k,P){D.error(O[k].message,w)})}else D.error("Something went wrong",w)})}},m=async v=>{const S=r0(e.subject);j()&&(l(!0),await ee.post(`${te}${ne}/learn/${n}/teach`,{subject:e.subject,topic:e.topic,programme:e.programme,standard:e.standard,date:e.date,preferredLanguage:e.preferredLanguage,cardBanner:S,classStartsAt:e.startingTime,classEndsAt:e.endingTime,description:e.description,tags:e.tags},{headers:ie(u??"")}).then(({data:C})=>{console.log(C),t(kd),l(!1)}).catch(C=>{l(!1);const O=C.response.data.error.errors;Object.keys(O).forEach(function(k,P){D.error(O[k].message,w)})}))};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(QD,{children:[s.jsx(ti,{link:n?`/learncard-overview/${n}`:"/",learnCardId:n||void 0}),s.jsx("h2",{children:"Create Teach Card"}),s.jsxs("form",{children:[s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Subject",value:e.subject,name:"subject",updateFields:h,hasDropdown:!0,dropdownData:ko,placeholderText:"Physics, English, Botany, Accounts. etc."}),inputDesc:"Subject"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Topic",value:e.topic,name:"topic",updateFields:h,areaHeight:"6rem",placeholderText:"Pythagoras’ Theorem, World War 2, Balance Sheet, Leibniz Rule, etc."}),inputDesc:"Topic"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Course/Exam/Board/Programme",value:e.programme,name:"programme",updateFields:h,placeholderText:"I.C.S.E, B.Tech, NEET, UPSC, etc."}),inputDesc:"Course/Exam/Board/Programme"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Standard",value:e.standard,name:"standard",updateFields:h,hasDropdown:!0,dropdownData:ib,placeholderText:"10th class/2nd year etc (optional)"}),inputDesc:"Standard/Year"}),s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Preferred Language",value:e.preferredLanguage,name:"preferredLanguage",updateFields:h,hasDropdown:!0,dropdownData:uu,placeholderText:"Hindi, English, Tamil, Marathi, French etc"}),inputDesc:"Preferred Language"}),s.jsx(je,{elem:s.jsx("input",{type:"date",name:"date",id:"date",value:e.date,onChange:v=>p(v)}),inputDesc:"Date of the class"}),s.jsx(je,{elem:s.jsx("input",{type:"datetime-local",name:"startingTime",id:"date",value:e.startingTime,onChange:v=>y(v)}),inputDesc:"Starting time"}),s.jsx(je,{elem:s.jsx("input",{type:"datetime-local",name:"endingTime",id:"date",value:e.endingTime,onChange:v=>y(v)}),inputDesc:"Ending Time"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Description",name:"description",updateFields:h,value:e.description,placeholderText:"Can not exceed 400 characters"}),inputDesc:"Description of the topic covered"}),s.jsx(je,{elem:s.jsxs(ws,{children:[s.jsx(Gr,{label:"#Physics, #BusinessManagement (optional)",elemName:"tag",value:e.tag,name:"tags",arr:e.tags,updateFields:h}),e.tags.length!=0?s.jsx(qr,{listArr:e.tags,name:"tags",updateFields:h}):null]}),inputDesc:"Tags"})]}),s.jsx(KD,{children:s.jsx("button",{type:"submit",onClick:i?m:x,children:a?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Create Teach Card"})})]}),s.jsx(Qe,{}),s.jsx(hn,{theme:"dark"})]})},JD=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media only screen and (max-width: 1100px) {
    column-gap: 1rem;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }
  @media only screen and (max-width: 750px) {
    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`,ob=({learnCards:e})=>s.jsx(JD,{children:e.map((t,n)=>s.jsx(Kv,{...t},n))}),XD=b.div`
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* margin-top: 4rem; */
`;b.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;const eN=()=>{const[e,t]=g.useState([]),[n,r]=g.useState(1),[i,o]=g.useState(!1),[a,l]=g.useState(),[c,u]=g.useState(!0),[d,f]=g.useState(!0),{fetchLocalUserToken:h}=Le();g.useEffect(()=>{h().then(w=>{l(w)})},[]);const p=w=>{if(w.length==0){o(!1);return}else if(w.length%In!=0){o(!1);return}o(!0)},y=async()=>{f(!0),await ee.get(`${te}${ne}/learn`,{params:{limit:In,page:n},headers:ie(a??"")}).then(({data:w})=>{console.log(w);const j=w.data.data;p(j),t(x=>[...x,...j]),u(!1),f(!1),r(x=>x+1)}).catch(w=>{console.log(w),u(!1),f(!1)})};return g.useEffect(()=>{a&&(y(),console.log("CHECKIN"))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(XD,{children:[s.jsx(xp,{}),c?s.jsx(_e,{}):e.length!=0?s.jsx(ob,{learnCards:e}):null,e&&i&&s.jsx(Ro,{loaderLoading:d,onClick:y})]}),s.jsx(Qe,{})]})},tN=b.div`
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
`,nN=b.div`
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
`,rN=b.div`
  /* border: 1px solid red; */
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
  column-gap: 4rem;
`,iN=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`,oN=b.div`
  /* border: 1px solid red; */
  span.text {
    color: #ef4565;
  }
`,sN=b.div`
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
    /* background: ${e=>e.isDisabled?"rgba(239, 69, 101, 0.6)":"rgba(239, 69, 101, 1)"}; */
    background-color: rgba(239, 69, 101, 1);
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
`,aN=b.div`
  width: fit-content;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border-radius: 12px;
  height: fit-content;
  border: 1px solid #d5d9eb;
  row-gap: 1.5rem;
`,lN=b.div`
  /* border: 1px solid red; */
`,cN=b.div`
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
`,uN=b.div`
  display: flex;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-right: 4rem;
`,dN=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-bottom: 0.5rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    cursor: pointer;

    background: rgba(239, 69, 101, 1);
    /* background-color: ${e=>e.isDisabled||e.isInterested?"rgba(239, 69, 101, 0.6)":"rgba(239, 69, 101, 1)"}; */
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
`,fN=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div.lang {
    color: #ef4565;
    padding: 6px 12px;
    font-weight: 700;
  }

  div {
    border: 1px solid grey;
    padding: 6px 12px;
    border-radius: 6px;
  }
`,hN=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  h2 {
    border-bottom: 1px solid black;
    width: fit-content;
  }
`,pN=b.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  /* border: 1px solid red; */
`,mN=b.div`
  /* border: 1px solid red; */
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
`,gN=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span.text {
    color: #ef4565;
  }
`,xN=()=>{const[e,t]=g.useState(),[n,r]=g.useState(),[i,o]=g.useState(),[a,l]=g.useState("/requests"),[c,u]=g.useState(!0),[d,f]=g.useState(!0),[h,p]=g.useState(),y=$t();g.useEffect(()=>{const N=y.state.learnCardId;console.log(N);const A=y.state.backLink;t(N),A&&l(A)},[]);async function w(){await ee.get(`${te}${ne}/learn/${e}`).then(({data:N})=>{const A=N.data.data[0];console.log(A),r(A),u(!1),p(A.interestedStudents.length)})}async function j(){await ee.get(`${te}${ne}/learn/${e}/teach`).then(({data:N})=>{o(N.data.data),f(!1)})}g.useEffect(()=>{e&&(console.log(e),w(),j())},[e]);const x=me(),m=()=>{ve(),n&&x("/create-teach-request",{state:{learnCardId:n._id,subject:n.subject,topic:n.topic,programme:n.programme,standard:n.standard,description:n.description,tags:n.tags}})},{fetchLocalUserData:v}=Le(),[S,C]=g.useState(),[O,k]=g.useState(""),[P,R]=g.useState("");g.useEffect(()=>{v().then(N=>{C(N._id),k(N.token),R(N.role),console.log(N.role)}),window.addEventListener("storage",()=>{console.log("Change to local storage!"),v().then(N=>{C(N._id),k(N.token),R(N.role),console.log(N.role)})})},[]);const L=async()=>{await ee.patch(`${te}${ne}/learn/${n==null?void 0:n._id}/interested`,{},{headers:ie(O)}).then(({data:N})=>{console.log(N.updatedLearnCard.interestedStudents);const A=N.updatedLearnCard.interestedStudents;if(n){const J=n;J.interestedStudents=A,r(J),p(A.length)}})},q=()=>S==(n==null?void 0:n.createdBy._id),Q={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},se=()=>{n&&(navigator.clipboard.writeText(n._id),D.success("ID copied to clipboard",Q))};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(tN,{children:[s.jsx(ti,{link:a}),c?s.jsx(_e,{}):n&&S?s.jsxs(s.Fragment,{children:[s.jsx(nN,{children:s.jsx("h2",{children:n.topic})}),s.jsxs(rN,{children:[s.jsxs(iN,{children:[s.jsxs(aN,{children:[s.jsx(dm,{date:n.dueDate}),s.jsxs(fN,{children:[s.jsx("div",{className:"lang",children:s.jsx("span",{children:n.preferredLanguage})}),n==null?void 0:n.tags.map((N,A)=>s.jsx("div",{children:s.jsx("span",{children:N})},A))]})]}),s.jsx(oN,{children:q()||P=="learn"?null:s.jsx(sN,{isDisabled:P=="learn",children:s.jsxs("button",{type:"button",onClick:m,children:[s.jsx("span",{children:"Create teach Card"}),s.jsx(et,{strokeColor:"#FFFFFF"})]})})})]}),s.jsxs(lN,{children:[s.jsxs(cN,{children:[s.jsx(Kn,{name:n.createdBy.userName,photo:n.createdBy.photo,imgBorder:"white",textColor:"black",userId:n.createdBy._id,imgSize:"42px",textSize:"20px",hasUnderline:!0}),s.jsxs(uN,{children:[s.jsx(Oc,{}),s.jsxs("h3",{children:[h," Interested"]})]})]}),s.jsx(um,{programme:n.programme,standard:n.standard,desciption:n.description}),s.jsx(gN,{children:S&&(S===n.createdBy._id||P=="teach"?null:s.jsx(dN,{isInterested:n.interestedStudents.includes(S),isDisabled:P=="teach",children:s.jsx("button",{onClick:L,children:"Interested"})}))}),s.jsx(mN,{children:s.jsxs(fm,{onClick:se,children:[s.jsxs("span",{className:"id",children:["Card Id :- ",n._id]}),s.jsx(Pc,{color:"white"})]})})]})]}),(i==null?void 0:i.length)!=0?s.jsxs(hN,{children:[s.jsx("h2",{children:"Teach Cards on this Learn Card"}),d?s.jsx(_e,{}):s.jsx(pN,{children:i==null?void 0:i.map((N,A)=>s.jsx(q2,{teachCard:N,cssArr:Q2,fromLearnCard:!0,learnCardId:n._id},A))})]}):null]}):s.jsx("div",{className:"went-wrong",children:"Something went wrong"})]}),s.jsx(Qe,{})]})},yN="/assets/landingPageImg1-4f9cc89e.png",vN="/assets/landingPageImg2-abe1b21c.png",wN="/assets/landingPageImg3-14c652be.png",bN="/assets/landingPageImg4-71e3d66a.png",SN="/assets/landingPageImg5-75f74410.png",jN="/assets/landingPageImg6-56d046f8.png",CN=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`,kN=b.div`
  /* border: 1px solid red; */
  width: 160px;
  height: 60px;
  margin-left: 4vw;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 450px) {
    width: 140px;
    height: 52px;
    margin-left: 3vw;
  }
`,_N=b.div`
  /* border: 1px solid red; */
  display: flex;
  margin-right: 4vw;
  align-items: center;
  justify-content: center;
  /* margin-right: 4rem; */
  gap: 26px;

  div.signup {
    background: #3da9fc;
    color: #fffffe;
  }

  div.signin {
    background: #ef4565;
    color: #fffffe;
  }

  @media only screen and (max-width: 450px) {
    gap: 10px;
    margin-right: 3vw;
  }
`,k1=b.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 26px;
  gap: 10px;
  background: #ffffff;
  border-radius: 2px;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #2b2c34;
  cursor: pointer;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    padding: 8px 18px;
  }
`,ku=()=>{const{fetchLocalUserData:e}=Le(),[t,n]=g.useState(!1),r=me();g.useEffect(()=>{e().then(()=>{n(!1)}).catch(()=>{n(!0)})},[]);const i=o=>{ve(),r(o)};return t?s.jsxs(CN,{children:[s.jsx(kN,{onClick:()=>i("/teachNlearn"),children:s.jsx("img",{src:tp,alt:"tnl-logo"})}),s.jsxs(_N,{children:[s.jsx(k1,{className:"signin",onClick:()=>i("/signin"),children:"Login"}),s.jsx(k1,{className:"signup",onClick:()=>i("/signup"),children:"Signup"})]})]}):null},TN="/assets/feynman-30c512f4.png",EN=b.div`
  display: flex;
  /* width: 77.5rem; */
  width: 90%;
  margin: 4rem auto 8rem;
  padding: 3.75rem 0rem 3rem;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  border-radius: 10px;
  background: #d8eefe;

  @media only screen and (max-width: 1050px) {
    display: none;
  }

  h2 {
    color: #2b2c34;
    font-size: 3.625rem;
    font-family: "Nunito";
    font-weight: 500;

    span {
      color: #3da9fc;
      font-weight: 700;
    }
  }

  p {
    width: 100%;
    color: #2b2c34;
    text-align: center;
    font-size: 1.25rem;
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
    margin-top: 2rem;
  }

  div.main-container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 2rem;

    div.content {
      /* border: 1px solid red; */
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 2rem 0 0;
    }

    img {
      /* border: 1px solid red; */
      /* padding-bottom: 5rem; */
      /* margin-bottom: 1rem; */
      width: 400px;
      height: 100%;
      object-fit: cover;
      transform: translateY(-10%);
    }
  }
`,ON=()=>{const e=me(),t=n=>{ve(),e(n)};return s.jsxs(EN,{children:[s.jsx("h2",{children:"Richard Feynman"}),s.jsxs("div",{className:"main-container",children:[s.jsxs("div",{className:"content",children:[s.jsxs("p",{children:["Richard Feynman was a Nobel-prize winning US theoretical physicist. Famed for his brilliant mind and mercurial personality, his main work was in quantum physics and particle physics, where he is particularly known for the Feynman diagram, a way of depicting particle processes graphically. But he was a prolific writer and thinker who also pioneered ideas in quantum computing and nanotechnology.",s.jsx("br",{}),s.jsx("br",{}),"We, in Teach and Learn, have made a platform where students from all across the globe and all sections of society can come together, collaborate and elevate each other’s level of knowledge by using the Feynman Technique of learning to teach each other and learn from each other."]}),s.jsx("button",{type:"button",onClick:()=>t("/signup"),children:"Create an account"})]}),s.jsx("img",{src:TN,alt:"feynman-img"})]})]})},PN=b.div`
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
    /* box-sizing: border-box; */
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
      border-radius: 2.6875rem;
      background: #094067;
    }

    .react-multiple-carousel__arrow--right {
      right: calc(-4% + 1px);
      border-radius: 2.6875rem;
      background: #094067;
    }
  }

  @media only screen and (max-width: 750px) {
    div.carousel-wrapper {
      width: 92vw;
    }
  }
`,IN=b.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 20px;
  width: 85%;
  background: #094067;
  border-radius: 4px;
  box-sizing: border-box;

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

  @media only screen and (max-width: 750px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`,DN=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  box-sizing: border-box;
`,NN=b.div`
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
`,LN=b.div`
  /* border: 1px solid green; */
  /* width: 20.1875rem; */
  /* height: 18.75rem; */

  img {
    width: 20.1875rem;
    height: 18.75rem;
    object-fit: contain;
  }

  @media only screen and (max-width: 900px) {
    img {
      width: 18rem;
      /* height: 18.75rem; */
    }
  }
  @media only screen and (max-width: 750px) {
    img {
      width: 15rem;
      height: 15.75rem;
    }
  }
  @media only screen and (max-width: 550px) {
    img {
      width: 12rem;
      height: 14.75rem;
    }
  }
`,$N=b.div`
  /* border: 1px solid green; */

  h2 {
    color: #000;
    font-size: 3.75rem;
    font-family: "Nunito";
    font-weight: 700;
    line-height: 124.9%;
  }

  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 120%;
    }
  }
  @media only screen and (max-width: 750px) {
    h2 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 110%;
    }
  }
  @media only screen and (max-width: 550px) {
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 110%;
    }
  }
`,MN=b.div`
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
`,RN=b.div`
  /* border: 1px solid red; */
  width: 90%;
  margin: 2rem auto 0;
`,AN=[{heading:"Connect with students from all across the globe.",description:"Leverage our interactive platform to foster cross cultural connections and collaborative learning with students from all around the world.",img:yN},{heading:"Share your problems. Share their solutions.",description:"Participate in open discussions to share your problems, while gaining insights and solutions from others in a collaborative environment.",img:vN},{heading:"Organize bite-sized classes. Schedule as you want.",description:"Flexible scheduling allows you to organize and attend bite-sized classes according to your preferences.",img:wN},{heading:"Free but reliable classes from students just like you.",description:"Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",img:SN},{heading:"Based on the tried and tested Feynman Technique of learning!",description:"Experience the best of both worlds with free, reliable classes that you can attend at your own pace and convenience.",img:jN},{heading:"Teach and Learn!",description:"Unlock the power of teaching and learning to achieve mastery in any concept, fostering a dynamic exchange of knowledge and growth.",img:bN}],FN={desktop:{breakpoint:{max:3e3,min:1024},items:1,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},zN=({onMove:e,index:t,onClick:n,active:r})=>s.jsx(MN,{onClick:()=>n(),children:s.jsx("div",{className:r?"rect":void 0})}),UN=AN.map((e,t)=>s.jsxs(DN,{children:[s.jsx(NN,{children:s.jsx($N,{children:s.jsx("h2",{children:e.heading})})}),s.jsx(LN,{children:s.jsx("img",{src:e.img,alt:""})})]},t)),BN=()=>{const e=me();g.useEffect(()=>{localStorage.getItem(Dt)&&e("/")},[e]);const t=n=>{ve(),e(n)};return s.jsxs(s.Fragment,{children:[s.jsxs(PN,{children:[s.jsx(ku,{}),s.jsxs(IN,{onClick:()=>t("/teachNlearn-blogs"),children:[s.jsxs("span",{children:["Check out our ",s.jsx("span",{className:"bold",children:"blog"})," for free guidance on how to improve in your studies."]}),s.jsx(et,{strokeColor:"#FFFFFF"})]}),s.jsx("div",{className:"carousel-wrapper",children:s.jsx(kw,{containerClass:"carousel-container",responsive:FN,infinite:!0,showDots:!0,autoPlay:!0,autoPlaySpeed:3500,customTransition:"all 1s",transitionDuration:1e3,customDot:s.jsx(zN,{}),children:UN})})]}),s.jsx(RN,{children:s.jsx(_w,{})}),s.jsx(ON,{}),s.jsx(Qe,{})]})},HN=b.div`
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
`,_1=e=>s.jsxs(HN,{children:[s.jsx("h3",{children:e.title}),e.value]}),WN=b.div`
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
`,YN=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  h2 {
    margin-bottom: 0.5rem;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
`,T1=b.div`
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
`,VN=b.div`
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
`,GN=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    cursor: ${e=>e.isDisabled?"auto":"pointer"};
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;
    background: #332ad5;
    background: ${e=>e.isDisabled?"rgba(51, 42, 213, 0.6)":"#332ad5"};
    border-radius: 8px;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }
`,qN=b.div`
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
  /* border: 1px solid red; */

  div.info-cont {
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
`,QN=e=>{const t=me(),n={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},[r,i]=g.useState(0),[o,a]=g.useState(!1),l=async()=>{a(!0),await ee.get(`${te}${ne}/user/mybalance`,{headers:ie(e.userToken)}).then(({data:u})=>{const d=u.user;i(d.coins+d.forumCoins+d.reviewCoins),a(!1)}).catch(()=>{a(!0)})};g.useEffect(()=>{e.userToken&&l()},[e.userToken]);const c=async()=>{await ee.patch(`${te}${ne}/teach/${e.teachCardId}/enroll`,{},{headers:ie(e.userToken??"")}).then(({data:u})=>{console.log(u),t(`/classes/class/${e.teachCardId}`,{state:{classroomId:e.teachCardId}})}).catch(u=>{const d=u.response.data.message;D.error(d,n)})};return s.jsxs(WN,{children:[s.jsx("header",{children:s.jsx("h4",{children:"Enroll Now"})}),s.jsxs(YN,{children:[s.jsx("h2",{children:e.title}),s.jsx(_1,{title:"Time :",value:s.jsxs(T1,{children:[s.jsx("span",{children:ki(e.date)}),s.jsx(VN,{}),s.jsx("span",{children:Dn(e.classStartsAt)+" - "+Dn(e.classEndsAt)})]})}),s.jsx(_1,{title:"Coins :",value:s.jsxs(T1,{children:[s.jsx(Lf,{color:"#000000"}),s.jsx("span",{children:"10"})]})})]}),o?s.jsx(_e,{loaderHeight:"2rem"}):s.jsxs(qN,{children:[s.jsx("div",{className:"info-cont",children:s.jsx(K3,{})}),s.jsx("span",{children:"You have"}),s.jsx(Lf,{color:"#000000"}),s.jsxs("span",{children:[s.jsx("h3",{children:r})," coins right now"]})]}),s.jsx(GN,{isDisabled:o?!0:e.price>r,children:s.jsxs("button",{type:"submit",onClick:c,children:[s.jsx("span",{children:"Buy Class"}),s.jsx(et,{strokeColor:"white"})]})})]})},KN=b.div`
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
`,ZN=e=>{const[t,n]=g.useState(!1);function r(){n(!0)}function i(){n(!1)}return s.jsxs(s.Fragment,{children:[s.jsxs(KN,{onClick:r,children:[s.jsx("span",{children:"Enroll Now"}),s.jsx(et,{strokeColor:"white"})]}),s.jsx(mn,{isOpen:t,onRequestClose:i,style:Zn,children:s.jsx(QN,{...e})})]})},JN=b.div`
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
`,XN=b.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1.3fr 3fr;
`,eL=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`,tL=b.div``,nL=b.div`
  /* border: 1px solid red; */
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* img {
    width: 40px;
    height: 40px;
    margin-right: 0.6rem;
  } */

  /* span {
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
  }
  span.id {
    font-size: 16px;
  } */
`,rL=b.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px 12px;
  flex-wrap: wrap;

  div.lang {
    color: #ef4565;
    padding: 6px 12px;
    font-weight: 700;
  }

  div {
    border: 1px solid grey;
    padding: 6px 12px;
    border-radius: 6px;
  }
`,iL=()=>{const[e,t]=g.useState(),[n,r]=g.useState(),[i,o]=g.useState(),[a,l]=g.useState(""),[c,u]=g.useState("/classes"),[d,f]=g.useState(""),h=$t(),{fetchLocalUserData:p,fetchUserCredit:y}=Le();g.useEffect(()=>{console.log(h.state);const k=h.state.classroomId;console.log(k),r(k);const P=h.state.backPageLink;P&&u(P);const R=h.state.learnCardId;R&&f(R)},[h]),g.useEffect(()=>{p().then(k=>{o(k.token),l(k._id)})},[]);async function w(){await ee.get(`${te}${ne}/teach/${n}/overview`,{headers:ie(i??"")}).then(({data:k})=>{t(k.teachCard)})}g.useEffect(()=>{n&&i&&w()},[n,i]);const j=()=>{const k=new Date,P=e==null?void 0:e.classStartsAt;if(P)return new Date(P)>k},x={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},m=()=>{e&&(navigator.clipboard.writeText(e._id),D.success("ID copied to clipboard",x))},v=()=>{const k=new Date;if(e){const P=e==null?void 0:e.classEndsAt,R=new Date(P);return k>R}},[S,C]=g.useState(),O=async()=>{await ee.get(`${te}${ne}/teach/${e==null?void 0:e._id}/reviews`,{headers:ie(i??"")}).then(({data:k})=>{console.log(k),C(k.reviews)})};return g.useEffect(()=>{i&&v()&&(e!=null&&e._id)&&O()},[i,e]),s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),e&&s.jsxs(JN,{children:[s.jsx(ti,{link:c,learnCardId:d}),s.jsx(Cu,{img:e==null?void 0:e.cardBanner,title:e.topic}),s.jsxs(XN,{children:[s.jsxs(eL,{children:[s.jsx(dm,{date:e.date,classEndsAt:e.classEndsAt,classStartsAt:e.classStartsAt}),i&&j()&&s.jsx(ZN,{title:e.topic,price:e.price,date:e.date,classStartsAt:e.classStartsAt,classEndsAt:e.classEndsAt,teachCardId:e._id,userToken:i}),s.jsxs(rL,{children:[s.jsx("div",{className:"lang",children:s.jsx("span",{children:e.preferredLanguage})}),e==null?void 0:e.tags.map((k,P)=>s.jsx("div",{children:s.jsx("span",{children:k})},P))]})]}),s.jsxs(tL,{children:[s.jsxs(nL,{children:[s.jsx(Kn,{name:e.createdBy.name,photo:e.createdBy.photo,imgBorder:"white",textColor:"black",userId:a,imgSize:"42px",textSize:"20px",hasUnderline:!0}),s.jsxs(fm,{onClick:m,children:[s.jsx(Pc,{color:"white"}),s.jsx("span",{className:"id",children:e._id})]})]}),s.jsx(um,{programme:e.programme,standard:e.standard,desciption:e.description})]})]}),S&&(S==null?void 0:S.length)!=0&&s.jsxs(eb,{children:[s.jsx("h2",{children:"Reviews :-"}),s.jsx(tb,{children:S.map((k,P)=>s.jsxs(nb,{children:[s.jsxs("div",{className:"head",children:[s.jsx("img",{src:k.user.photo,alt:"reviewer-img"}),s.jsxs("div",{className:"user",children:[s.jsx("h4",{children:k.user.name}),s.jsx("div",{className:"rating",children:Array(10).fill(0).map((R,L)=>L+1).map(R=>s.jsx(rb,{colored:R<=k.rating,children:s.jsx(cp,{})},R))})]}),s.jsx("div",{className:"time",children:W(k.createdAt).fromNow()})]}),s.jsx("div",{className:"review",children:s.jsx("p",{children:k.review})})]}))})]})]}),s.jsx(Qe,{})]})},oL=b.div`
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
`,sL=b.div`
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
    background: #094067;
    border-radius: 8px;
    cursor: pointer;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }
`,E1={tagline:"",question:"",topic:""},aL=()=>{const[e,t]=g.useState(E1),[n,r]=g.useState(!1);function i(f){t(h=>({...h,...f}))}const[o,a]=g.useState(""),{fetchLocalUserToken:l}=Le();g.useEffect(()=>{l().then(f=>{a(f)})},[location]);const c={position:D.POSITION.BOTTOM_RIGHT,autoClose:6e3,pauseOnHover:!0,draggable:!0},u=()=>{const{topic:f,tagline:h,question:p}=e;return f===""||h===""||p===""?(D.error("Fill in all the details",c),!1):h.length>250?(D.error("Tagline cannot be longer than 250 characters",c),!1):!0},d=async()=>{console.log(e);const{topic:f,tagline:h,question:p}=e;u()&&(r(!0),await ee.post(`${te}${ne}/forum`,{topic:f,tagline:h,question:p},{headers:ie(o??"")}).then(()=>{r(!1),t(E1),D.success("Forum successfully created",c)}).catch(y=>{if(r(!1),y.response.data.error.errors){const w=y.response.data.error.errors;Object.keys(w).forEach(function(j,x){D.error(w[j].message,c)})}else D.error("Something went wrong!! Try again.",c)}))};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(oL,{children:[s.jsx(ti,{link:"/forums"}),s.jsx("h2",{children:"Let's get started with your Forum"}),s.jsxs("form",{children:[s.jsx(je,{elem:s.jsx(He,{type:"text",label:"Topic",name:"topic",value:e.topic,updateFields:i}),inputDesc:"Pick a topic for your forum"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Tagline",name:"tagline",value:e.tagline,updateFields:i}),inputDesc:"Pick a tagline for your forum"}),s.jsx(je,{elem:s.jsx(Kt,{label:"Question",name:"question",value:e.question,areaHeight:"15rem",updateFields:i}),inputDesc:"Question for the forum"})]}),s.jsx(sL,{children:s.jsx("button",{type:"submit",onClick:d,children:n?s.jsx(_e,{loaderHeight:"1.6rem",color:"white"}):"Create Forum"})})]}),s.jsx(Qe,{}),s.jsx(hn,{theme:"dark"})]})},lL=b.div`
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

  
  @media only screen and (max-width: 600px) {
    h3{
      font-size: 1.7rem;
      text-align: center;
    }
  }
`,_u=e=>s.jsx(lL,{children:s.jsx("h3",{children:e.text})}),cL=()=>s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsx(_u,{text:"Under development... Coming Soon."}),s.jsx(Qe,{})]}),uL=()=>s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsx(_u,{text:"Under development... Coming Soon."}),s.jsx(Qe,{})]}),dL=()=>s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsx(_u,{text:"Under development... Coming Soon."}),s.jsx(Qe,{})]}),fL=b.div`
  padding: 4rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    width: fit-content;
    line-height: 1;
  }

  span {
    width: 90%;
    font-size: 1.2rem;
  }
`,hL=()=>s.jsxs(s.Fragment,{children:[s.jsx(ku,{}),s.jsx(tt,{}),s.jsxs(fL,{children:[s.jsx("h2",{children:"About us"}),s.jsx("span",{children:"We are group of enthusiastic youngsters from various backgrounds and we are here to bring you some of the best ways in which you can apply the Feynman Technique to master any topic you want to learn and turn you into a SUPER STUDENT!"})]}),s.jsx(Qe,{})]}),pL=b.div`
  /* border: 1px solid red; */
  padding: 4rem 6.3vw 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 70%;

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    border-bottom: 2px solid black;
    width: fit-content;
    line-height: 1;
  }
`,mL=b.div`
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
`,gL=[{title:"Email",link:"admin@teachandlearn.app"},{title:"Twitter",link:"https://twitter.com/Teach_n_Learn22"},{title:"Facebook",link:"https://www.facebook.com/people/Teach-and-Learn/100091595265820/"},{title:"Instagram",link:"https://www.instagram.com/teach.nlearn/"},{title:"Youtube",link:"https://www.youtube.com/@TeachandLearnApp"}],xL=()=>{const e={position:D.POSITION.BOTTOM_RIGHT,autoClose:2e3,pauseOnHover:!0,draggable:!0},t=n=>{navigator.clipboard.writeText(n),D.success("Email copied to clipboard",e)};return s.jsxs(s.Fragment,{children:[s.jsx(ku,{}),s.jsx(tt,{}),s.jsxs(pL,{children:[s.jsx("h2",{children:"Contact us through"}),gL.map((n,r)=>s.jsxs(mL,{children:[s.jsx("span",{className:"title",children:n.title}),s.jsx("div",{children:n.title.toLowerCase()!="email"?s.jsxs(Sc,{to:n.link,target:"_blank",children:[s.jsx("span",{className:"link",children:n.link}),s.jsx(et,{strokeColor:"#094067"})]}):s.jsxs("div",{className:"copy",onClick:()=>t(n.link),children:[s.jsx("span",{className:"link",children:n.link}),s.jsx(Pc,{})]})})]}))]}),s.jsx(Qe,{}),s.jsx(hn,{theme:"dark"})]})},yL=b.div`
  padding: 4rem 6.3vw 3rem;
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
`,vL=b.div`
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
`,wL=[{heading:"User Conduct",points:["You agree to use the Platform in compliance with applicable laws and regulations.","You will not post, transmit, or share any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.","You will not engage in any activity that interferes with or disrupts the functioning of the Platform or its users."]},{heading:"Intellectual Property",points:["All intellectual property rights in the Platform and its content belong to us or our licensors.","You may not reproduce, modify, distribute, or create derivative works of any content on the Platform without our prior written consent."]},{heading:"Privacy",points:["We respect your privacy and handle your personal information in accordance with our Privacy Policy","By using the Platform, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy."]},{heading:"Third-Party Links",points:["The Platform may contain links to third-party websites or services that are not owned or controlled by us.","We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You access them at your own risk."]},{heading:"Termination",points:["We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause, and without prior notice."]},{heading:"Disclaimer of Warranties",points:['The Platform is provided on an "as is" and "as available" basis without any warranties or representations, express or implied.'," We do not guarantee the accuracy, reliability, or completeness of any content on the Platform"]},{heading:"Limitation of Liability",points:["To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Platform."]},{heading:"Governing Law",points:["This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles."]},{heading:"Modification of Terms",points:["We reserve the right to modify or update this Agreement at any time. Your continued use of the Platform after any changes constitutes your acceptance of the modified terms."]},{heading:"Entire Agreement",points:["This Agreement constitutes the entire agreement between you and us regarding the use of the Platform, superseding any prior agreements or understandings."]}],bL=()=>s.jsxs(s.Fragment,{children:[s.jsx(ku,{}),s.jsx(tt,{}),s.jsxs(yL,{children:[s.jsxs("header",{children:[s.jsx("h2",{children:"Terms and Privacy Policy"}),s.jsx("p",{children:'These Terms and Privacy Policy ("Agreement") govern your use of our site ("Platform"). Please read this Agreement carefully before accessing or using the Platform. By accessing or using the Platform, you agree to be bound by this Agreement. If you do not agree to the terms of this Agreement, you may not access or use the Platform'})]}),wL.map((e,t)=>s.jsxs(vL,{children:[s.jsx("h3",{children:e.heading}),s.jsx("ol",{type:"a",children:e.points.map((n,r)=>s.jsx("li",{children:n}))})]})),s.jsxs("footer",{children:["If you have any questions or concerns regarding this Agreement, please contact us at ",s.jsx("span",{children:"admin@teachandlearn.app."})]})]}),s.jsx(Qe,{})]}),SL=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 28px;
  gap: 18px;
  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,jL=b.div`
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
`,CL=b.div`
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
`,_d=b.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  /* align-items: center; */
`,Td=b.div`
  /* border: 1px solid #697586; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
`,kL=e=>{var t,n,r;return s.jsxs(SL,{children:[s.jsx(jL,{children:s.jsx("h4",{children:"Academic Information"})}),s.jsxs(CL,{children:[s.jsxs("div",{children:[s.jsx("h4",{children:"Course"}),s.jsx("span",{children:e.course})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Strong Subjects"}),s.jsx(_d,{children:(t=e.strongSubjects)==null?void 0:t.map((i,o)=>s.jsx(Td,{children:i},o))})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Interested Subjects"}),s.jsx(_d,{children:(n=e.interstedSubjects)==null?void 0:n.map((i,o)=>s.jsx(Td,{children:i},o))})]}),s.jsxs("div",{children:[s.jsx("h4",{children:"Preferred Languages"}),s.jsx(_d,{children:(r=e.preferredLanguages)==null?void 0:r.map((i,o)=>s.jsx(Td,{children:i},o))})]})]})]})},_L=b.div`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: max-content auto;
  padding: 30px 28px;
  padding-right: 24px;
  gap: 1.2rem;
  /* margin-top: 1rem; */

  border: 1px solid #d5d9eb;
  border-radius: 32px;
`,TL=b.div`
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
`,O1=()=>{const[e,t]=g.useState(),[n,r]=g.useState(""),{fetchLocalUserData:i}=Le();g.useEffect(()=>{i().then(u=>{r(u.token),console.log("TOKEN :- "+u.token)})},[]);const o=$t();g.useEffect(()=>{const u=o.state.userId;console.log(u),t(u)},[o]);const[a,l]=g.useState(),c=async()=>{await ee.get(`${te}${ne}/user/${e}`,{headers:ie(n)}).then(({data:u})=>{console.log(u),l(u.user)})};return g.useEffect(()=>{console.log("Render"),e&&n&&c()},[n,e]),s.jsx(qw,{children:a?s.jsxs(s.Fragment,{children:[s.jsxs(_L,{children:[s.jsx(TL,{children:s.jsx("img",{src:a.photo,alt:"user-img"})}),s.jsxs(Qw,{children:[s.jsxs("div",{className:"user-name",children:[s.jsx("h4",{children:a.name}),s.jsxs("h5",{children:["@",a.userName]})]}),s.jsx("p",{children:a.tagline})]})]}),s.jsx(Yw,{taught:a.classesTaken.length,userId:a._id,userToken:n}),s.jsx(Gw,{attended:a.classesEnrolled.length}),s.jsx(kL,{course:a.enrolledProgramme,interstedSubjects:a.interestedSubjects,preferredLanguages:a.preferredLanguages,strongSubjects:a.strongSubjects})]}):s.jsx(_e,{})})},EL=b.div`
  /* border: 1px solid red; */
  font-size: 2rem;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,OL=()=>s.jsx(EL,{children:"Coming Soon..."}),PL=()=>{const[e,t]=g.useState(),{fetchLocalUserData:n}=Le();g.useEffect(()=>{n().then(c=>{t(c)}),window.addEventListener("storage",()=>{n().then(c=>{t(c)})})},[]);const[r,i]=g.useState("Profile"),[o,a]=g.useState(s.jsx(O1,{}));g.useEffect(()=>{console.log(r),r=="Profile"?a(s.jsx(O1,{})):r=="Message"&&a(s.jsx(OL,{}))},[r]);const l=[{option:"Profile",label:"Profile",icon:s.jsx(Ec,{})},{option:"Message",label:"Message",icon:s.jsx(L3,{})}];return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(Zw,{children:[e&&s.jsx(Uw,{profileOptions:l,setSelectedLeftScreen:i,isOtherUser:!0,userToken:e.token,favouriteUsers:e.favouriteUsers}),s.jsx(Jw,{children:o})]}),s.jsx(Qe,{})]})},P1=()=>s.jsx("div",{children:s.jsx(_u,{text:"Under development... Coming Soon."})}),IL=b.div`
  margin: 0 6.3vw 0 6.3vw;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`,DL=()=>{const[e,t]=g.useState(),[n,r]=g.useState(),{fetchLocalUserData:i}=Le(),o=$t(),[a,l]=g.useState([]),[c,u]=g.useState([]),[d,f]=g.useState([]);g.useEffect(()=>{const v=o.state.keyword,S=o.state.searchedUsers,C=o.state.searchedLearnCards,O=o.state.searchedTeachCards;r(v),l(S),u(C),f(O),i().then(k=>{t(k)})},[]);const[h,p]=g.useState("users"),y=["users","learn cards","teach cards"],w=v=>{p(v)},[j,x]=g.useState();g.useEffect(()=>{h=="users"?e&&x(s.jsx(Kw,{localUserId:e._id,userArr:a})):h=="learn cards"?x(s.jsx(ob,{learnCards:c})):h=="teach cards"&&x(s.jsx(ju,{teachCards:d}))},[h,n]);const m=(v,S,C,O)=>{r(v),l(S),u(C),f(O)};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{updateSearchFeedProps:m,dontShowSearchDropDown:!0}),s.jsxs(IL,{children:[s.jsx(cm,{activeLink:h,labelArr:y,navigationHandler:w}),s.jsx(Z2,{children:j})]}),s.jsx(Qe,{})]})},NL=b.div`
  /* border: 1px solid brown; */
  padding: 0 6.3vw;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 2rem;
`,LL=b.div`
  /* border: 1px solid red; */
  width: 60%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
`,$L=b.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  margin: 2rem 8vw 4rem;
`,ML=()=>{const[e,t]=g.useState(),[n,r]=g.useState(""),[i,o]=g.useState([]),{fetchLocalUserData:a}=Le(),l=$t();g.useEffect(()=>{const u=l.state.keyword,d=l.state.searchedForums;r(u),o(d),a().then(f=>{t(f)})},[]);const c=async u=>{if(r(u),u===""){o([]);return}await ee.post(`${te}${ne}/forum/search`,{search:u},{headers:ie((e==null?void 0:e.token)||"")}).then(({data:d})=>{console.log(d.forums);const f=d.forums;o(f)})};return s.jsxs(s.Fragment,{children:[s.jsx(tt,{}),s.jsxs(NL,{children:[s.jsx(ti,{link:"/forums"}),s.jsx(LL,{children:s.jsx(Ic,{updateSearch:c,placeholderText:"Search in forum...",searchQuery:n,showButton:!0})}),s.jsx($L,{children:i&&e&&i.map((u,d)=>g.createElement(Y2,{...u,key:d,userToken:e==null?void 0:e.token}))})]}),s.jsx(Qe,{})]})};function RL(){return s.jsx("div",{className:"App",children:s.jsxs(b4,{children:[s.jsx(Ne,{path:"/",element:s.jsx(X_,{})}),s.jsx(Ne,{path:"/teachNlearn",element:s.jsx(BN,{})}),s.jsx(Ne,{path:"/signup",element:s.jsx(UE,{})}),s.jsx(Ne,{path:"/signin",element:s.jsx(YD,{})}),s.jsx(Ne,{path:"/forums",element:s.jsx(jI,{})}),s.jsx(Ne,{path:"/forum/:id",element:s.jsx(hI,{})}),s.jsx(Ne,{path:"/forums/create-forum",element:s.jsx(aL,{})}),s.jsx(Ne,{path:"/classes",element:s.jsx(HI,{})}),s.jsx(Ne,{path:"/class-overviw/:id",element:s.jsx(iL,{})}),s.jsx(Ne,{path:"/classes/class/:id",element:s.jsx(RD,{})}),s.jsx(Ne,{path:"/requests",element:s.jsx(eN,{})}),s.jsx(Ne,{path:"/learncard-overview/:learncardId",element:s.jsx(xN,{})}),s.jsx(Ne,{path:"/create-learn-request",element:s.jsx(qD,{})}),s.jsx(Ne,{path:"/create-teach-request",element:s.jsx(ZD,{})}),s.jsx(Ne,{path:"/blogs",element:s.jsx(cL,{})}),s.jsx(Ne,{path:"/teachNlearn-blogs",element:s.jsx(P1,{})}),s.jsx(Ne,{path:"/groups",element:s.jsx(uL,{})}),s.jsx(Ne,{path:"/myai",element:s.jsx(dL,{})}),s.jsx(Ne,{path:"/me",element:s.jsx(jE,{})}),s.jsx(Ne,{path:"/user/:userId",element:s.jsx(PL,{})}),s.jsx(Ne,{path:"/about",element:s.jsx(hL,{})}),s.jsx(Ne,{path:"/contact",element:s.jsx(xL,{})}),s.jsx(Ne,{path:"/terms-and-privacy",element:s.jsx(bL,{})}),s.jsx(Ne,{path:"/app-coming-soon",element:s.jsx(P1,{})}),s.jsx(Ne,{path:"/search/feed",element:s.jsx(DL,{})}),s.jsx(Ne,{path:"/forum/search/feed",element:s.jsx(ML,{})})]})})}Ed.createRoot(document.getElementById("root")).render(s.jsx(T4,{children:s.jsx(RL,{})}))});export default AL();
