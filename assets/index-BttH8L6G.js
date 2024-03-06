function dA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B0={exports:{}},Ac={},z0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),hA=Symbol.for("react.portal"),pA=Symbol.for("react.fragment"),mA=Symbol.for("react.strict_mode"),gA=Symbol.for("react.profiler"),vA=Symbol.for("react.provider"),yA=Symbol.for("react.context"),wA=Symbol.for("react.forward_ref"),_A=Symbol.for("react.suspense"),EA=Symbol.for("react.memo"),IA=Symbol.for("react.lazy"),Vv=Symbol.iterator;function TA(t){return t===null||typeof t!="object"?null:(t=Vv&&t[Vv]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,K0={};function $o(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||H0}$o.prototype.isReactComponent={};$o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=$o.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||H0}var Pp=Cp.prototype=new q0;Pp.constructor=Cp;W0(Pp,$o.prototype);Pp.isPureReactComponent=!0;var Fv=Array.isArray,G0=Object.prototype.hasOwnProperty,xp={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)G0.call(e,r)&&!Q0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ja,type:t,key:o,ref:s,props:i,_owner:xp.current}}function SA(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function kA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jv=/\/+/g;function Kf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kA(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ja:case hA:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Kf(s,0):r,Fv(i)?(n="",t!=null&&(n=t.replace(jv,"$&/")+"/"),ou(i,e,n,"",function(f){return f})):i!=null&&(Rp(i)&&(i=SA(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(jv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Fv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Kf(o,a);s+=ou(o,e,n,l,i)}else if(l=TA(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Kf(o,a++),s+=ou(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Tl(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(o){return e.call(n,o,i++)}),r}function AA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},su={transition:null},bA={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:su,ReactCurrentOwner:xp};te.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=$o;te.Fragment=pA;te.Profiler=gA;te.PureComponent=Cp;te.StrictMode=mA;te.Suspense=_A;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bA;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=xp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G0.call(e,l)&&!Q0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];r.children=a}return{$$typeof:ja,type:t.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(t){return t={$$typeof:yA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vA,_context:t},t.Consumer=t};te.createElement=Y0;te.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:wA,render:t}};te.isValidElement=Rp;te.lazy=function(t){return{$$typeof:IA,_payload:{_status:-1,_result:t},_init:AA}};te.memo=function(t,e){return{$$typeof:EA,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return _t.current.useCallback(t,e)};te.useContext=function(t){return _t.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};te.useEffect=function(t,e){return _t.current.useEffect(t,e)};te.useId=function(){return _t.current.useId()};te.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return _t.current.useMemo(t,e)};te.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};te.useRef=function(t){return _t.current.useRef(t)};te.useState=function(t){return _t.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return _t.current.useTransition()};te.version="18.2.0";z0.exports=te;var V=z0.exports;const bc=bp(V),CA=dA({__proto__:null,default:bc},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PA=V,xA=Symbol.for("react.element"),RA=Symbol.for("react.fragment"),NA=Object.prototype.hasOwnProperty,OA=PA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DA={key:!0,ref:!0,__self:!0,__source:!0};function X0(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)NA.call(e,r)&&!DA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xA,type:t,key:o,ref:s,props:i,_owner:OA.current}}Ac.Fragment=RA;Ac.jsx=X0;Ac.jsxs=X0;B0.exports=Ac;var b=B0.exports,Wd={},J0={exports:{}},jt={},Z0={exports:{}},e_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var O=$.length;$.push(Q);e:for(;0<O;){var _e=O-1>>>1,De=$[_e];if(0<i(De,Q))$[_e]=Q,$[O]=De,O=_e;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],O=$.pop();if(O!==Q){$[0]=O;e:for(var _e=0,De=$.length,Xr=De>>>1;_e<Xr;){var kn=2*(_e+1)-1,S=$[kn],An=kn+1,bn=$[An];if(0>i(S,O))An<De&&0>i(bn,S)?($[_e]=bn,$[An]=O,_e=An):($[_e]=S,$[kn]=O,_e=kn);else if(An<De&&0>i(bn,O))$[_e]=bn,$[An]=O,_e=An;else break e}}return Q}function i($,Q){var O=$.sortIndex-Q.sortIndex;return O!==0?O:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],f=[],p=1,m=null,g=3,E=!1,I=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _($){for(var Q=n(f);Q!==null;){if(Q.callback===null)r(f);else if(Q.startTime<=$)r(f),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(f)}}function k($){if(T=!1,_($),!I)if(n(l)!==null)I=!0,es(x);else{var Q=n(f);Q!==null&&ts(k,Q.startTime-$)}}function x($,Q){I=!1,T&&(T=!1,w(z),z=-1),E=!0;var O=g;try{for(_(Q),m=n(l);m!==null&&(!(m.expirationTime>Q)||$&&!xt());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var De=_e(m.expirationTime<=Q);Q=t.unstable_now(),typeof De=="function"?m.callback=De:m===n(l)&&r(l),_(Q)}else r(l);m=n(l)}if(m!==null)var Xr=!0;else{var kn=n(f);kn!==null&&ts(k,kn.startTime-Q),Xr=!1}return Xr}finally{m=null,g=O,E=!1}}var D=!1,M=null,z=-1,Y=5,G=-1;function xt(){return!(t.unstable_now()-G<Y)}function nr(){if(M!==null){var $=t.unstable_now();G=$;var Q=!0;try{Q=M(!0,$)}finally{Q?Yr():(D=!1,M=null)}}else D=!1}var Yr;if(typeof v=="function")Yr=function(){v(nr)};else if(typeof MessageChannel<"u"){var Zo=new MessageChannel,bf=Zo.port2;Zo.port1.onmessage=nr,Yr=function(){bf.postMessage(null)}}else Yr=function(){C(nr,0)};function es($){M=$,D||(D=!0,Yr())}function ts($,Q){z=C(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){I||E||(I=!0,es(x))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var O=g;g=Q;try{return $()}finally{g=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=g;g=$;try{return Q()}finally{g=O}},t.unstable_scheduleCallback=function($,Q,O){var _e=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?_e+O:_e):O=_e,$){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=O+De,$={id:p++,callback:Q,priorityLevel:$,startTime:O,expirationTime:De,sortIndex:-1},O>_e?($.sortIndex=O,e(f,$),n(l)===null&&$===n(f)&&(T?(w(z),z=-1):T=!0,ts(k,O-_e))):($.sortIndex=De,e(l,$),I||E||(I=!0,es(x))),$},t.unstable_shouldYield=xt,t.unstable_wrapCallback=function($){var Q=g;return function(){var O=g;g=Q;try{return $.apply(this,arguments)}finally{g=O}}}})(e_);Z0.exports=e_;var LA=Z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_=V,Vt=LA;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n_=new Set,Xs={};function Mi(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(Xs[t]=e,t=0;t<e.length;t++)n_.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,MA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uv={},$v={};function VA(t){return Kd.call($v,t)?!0:Kd.call(Uv,t)?!1:MA.test(t)?$v[t]=!0:(Uv[t]=!0,!1)}function FA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jA(t,e,n,r){if(e===null||typeof e>"u"||FA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Op(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Op);rt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Op);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Op);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jA(e,n,i,r)&&(n=null),r||i===null?VA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),qd=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Qd=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),o_=Symbol.for("react.offscreen"),Bv=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=Bv&&t[Bv]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,qf;function Is(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Gf=!1;function Qf(t,e){if(!t||Gf)return"";Gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Gf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function UA(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=Qf(t.type,!1),t;case 11:return t=Qf(t.type.render,!1),t;case 1:return t=Qf(t.type,!0),t;default:return""}}function Yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ji:return"Fragment";case Xi:return"Portal";case qd:return"Profiler";case Lp:return"StrictMode";case Gd:return"Suspense";case Qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case r_:return(t._context.displayName||"Context")+".Provider";case Mp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:Yd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Yd(t(e))}catch{}}return null}function $A(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(e);case 8:return e===Lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BA(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kl(t){t._valueTracker||(t._valueTracker=BA(t))}function a_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function l_(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function Jd(t,e){l_(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(Ts(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function u_(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,f_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zA=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){zA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function d_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HA=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nh(t,e){if(e){if(HA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function Fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,mo=null,go=null;function qv(t){if(t=Ba(t)){if(typeof oh!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Nc(e),oh(t.stateNode,t.type,e))}}function p_(t){mo?go?go.push(t):go=[t]:mo=t}function m_(){if(mo){var t=mo,e=go;if(go=mo=null,qv(t),e)for(t=0;t<e.length;t++)qv(e[t])}}function g_(t,e){return t(e)}function v_(){}var Yf=!1;function y_(t,e,n){if(Yf)return t(e,n);Yf=!0;try{return g_(t,e,n)}finally{Yf=!1,(mo!==null||go!==null)&&(v_(),m_())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var sh=!1;if(Un)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){sh=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{sh=!1}function WA(t,e,n,r,i,o,s,a,l){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(p){this.onError(p)}}var Os=!1,Au=null,bu=!1,ah=null,KA={onError:function(t){Os=!0,Au=t}};function qA(t,e,n,r,i,o,s,a,l){Os=!1,Au=null,WA.apply(KA,arguments)}function GA(t,e,n,r,i,o,s,a,l){if(qA.apply(this,arguments),Os){if(Os){var f=Au;Os=!1,Au=null}else throw Error(N(198));bu||(bu=!0,ah=f)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gv(t){if(Vi(t)!==t)throw Error(N(188))}function QA(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Gv(i),t;if(o===r)return Gv(i),e;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function __(t){return t=QA(t),t!==null?E_(t):null}function E_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E_(t);if(e!==null)return e;t=t.sibling}return null}var I_=Vt.unstable_scheduleCallback,Qv=Vt.unstable_cancelCallback,YA=Vt.unstable_shouldYield,XA=Vt.unstable_requestPaint,Ne=Vt.unstable_now,JA=Vt.unstable_getCurrentPriorityLevel,jp=Vt.unstable_ImmediatePriority,T_=Vt.unstable_UserBlockingPriority,Cu=Vt.unstable_NormalPriority,ZA=Vt.unstable_LowPriority,S_=Vt.unstable_IdlePriority,Cc=null,wn=null;function eb(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:rb,tb=Math.log,nb=Math.LN2;function rb(t){return t>>>=0,t===0?32:31-(tb(t)/nb|0)|0}var bl=64,Cl=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ss(a):(o&=s,o!==0&&(r=Ss(o)))}else s=n&~i,s!==0?r=Ss(s):o!==0&&(r=Ss(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function ib(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ob(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-sn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ib(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k_(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function Xf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function sb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function A_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,$p,C_,P_,x_,uh=!1,Pl=[],_r=null,Er=null,Ir=null,ea=new Map,ta=new Map,fr=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yv(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function ds(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&$p(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lb(t,e,n,r,i){switch(e){case"focusin":return _r=ds(_r,t,e,n,r,i),!0;case"dragenter":return Er=ds(Er,t,e,n,r,i),!0;case"mouseover":return Ir=ds(Ir,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ea.set(o,ds(ea.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ta.set(o,ds(ta.get(o)||null,t,e,n,r,i)),!0}return!1}function R_(t){var e=li(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=w_(n),e!==null){t.blockedOn=e,x_(t.priority,function(){C_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ih=r,n.target.dispatchEvent(r),ih=null}else return e=Ba(n),e!==null&&$p(e),t.blockedOn=n,!1;e.shift()}return!0}function Xv(t,e,n){au(t)&&n.delete(e)}function ub(){uh=!1,_r!==null&&au(_r)&&(_r=null),Er!==null&&au(Er)&&(Er=null),Ir!==null&&au(Ir)&&(Ir=null),ea.forEach(Xv),ta.forEach(Xv)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,uh||(uh=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,ub)))}function na(t){function e(i){return hs(i,t)}if(0<Pl.length){hs(Pl[0],t);for(var n=1;n<Pl.length;n++){var r=Pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&hs(_r,t),Er!==null&&hs(Er,t),Ir!==null&&hs(Ir,t),ea.forEach(e),ta.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)R_(n),n.blockedOn===null&&fr.shift()}var vo=Yn.ReactCurrentBatchConfig,xu=!0;function cb(t,e,n,r){var i=le,o=vo.transition;vo.transition=null;try{le=1,Bp(t,e,n,r)}finally{le=i,vo.transition=o}}function fb(t,e,n,r){var i=le,o=vo.transition;vo.transition=null;try{le=4,Bp(t,e,n,r)}finally{le=i,vo.transition=o}}function Bp(t,e,n,r){if(xu){var i=ch(t,e,n,r);if(i===null)ad(t,e,r,Ru,n),Yv(t,r);else if(lb(i,t,e,n,r))r.stopPropagation();else if(Yv(t,r),e&4&&-1<ab.indexOf(t)){for(;i!==null;){var o=Ba(i);if(o!==null&&b_(o),o=ch(t,e,n,r),o===null&&ad(t,e,r,Ru,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var Ru=null;function ch(t,e,n,r){if(Ru=null,t=Fp(r),t=li(t),t!==null)if(e=Vi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ru=t,null}function N_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JA()){case jp:return 1;case T_:return 4;case Cu:case ZA:return 16;case S_:return 536870912;default:return 16}default:return 16}}var gr=null,zp=null,lu=null;function O_(){if(lu)return lu;var t,e=zp,n=e.length,r,i="value"in gr?gr.value:gr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Jv(){return!1}function Ut(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xl:Jv,this.isPropagationStopped=Jv,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hp=Ut(Bo),$a=Se({},Bo,{view:0,detail:0}),db=Ut($a),Jf,Zf,ps,Pc=Se({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Jf=t.screenX-ps.screenX,Zf=t.screenY-ps.screenY):Zf=Jf=0,ps=t),Jf)},movementY:function(t){return"movementY"in t?t.movementY:Zf}}),Zv=Ut(Pc),hb=Se({},Pc,{dataTransfer:0}),pb=Ut(hb),mb=Se({},$a,{relatedTarget:0}),ed=Ut(mb),gb=Se({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),vb=Ut(gb),yb=Se({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wb=Ut(yb),_b=Se({},Bo,{data:0}),ey=Ut(_b),Eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tb[t])?!!e[t]:!1}function Wp(){return Sb}var kb=Se({},$a,{key:function(t){if(t.key){var e=Eb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wp,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ab=Ut(kb),bb=Se({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ty=Ut(bb),Cb=Se({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wp}),Pb=Ut(Cb),xb=Se({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rb=Ut(xb),Nb=Se({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=Ut(Nb),Db=[9,13,27,32],Kp=Un&&"CompositionEvent"in window,Ds=null;Un&&"documentMode"in document&&(Ds=document.documentMode);var Lb=Un&&"TextEvent"in window&&!Ds,D_=Un&&(!Kp||Ds&&8<Ds&&11>=Ds),ny=" ",ry=!1;function L_(t,e){switch(t){case"keyup":return Db.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function Mb(t,e){switch(t){case"compositionend":return M_(e);case"keypress":return e.which!==32?null:(ry=!0,ny);case"textInput":return t=e.data,t===ny&&ry?null:t;default:return null}}function Vb(t,e){if(Zi)return t==="compositionend"||!Kp&&L_(t,e)?(t=O_(),lu=zp=gr=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var Fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Fb[t.type]:e==="textarea"}function V_(t,e,n,r){p_(r),e=Nu(e,"onChange"),0<e.length&&(n=new Hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,ra=null;function jb(t){G_(t,0)}function xc(t){var e=no(t);if(a_(e))return t}function Ub(t,e){if(t==="change")return e}var F_=!1;if(Un){var td;if(Un){var nd="oninput"in document;if(!nd){var oy=document.createElement("div");oy.setAttribute("oninput","return;"),nd=typeof oy.oninput=="function"}td=nd}else td=!1;F_=td&&(!document.documentMode||9<document.documentMode)}function sy(){Ls&&(Ls.detachEvent("onpropertychange",j_),ra=Ls=null)}function j_(t){if(t.propertyName==="value"&&xc(ra)){var e=[];V_(e,ra,t,Fp(t)),y_(jb,e)}}function $b(t,e,n){t==="focusin"?(sy(),Ls=e,ra=n,Ls.attachEvent("onpropertychange",j_)):t==="focusout"&&sy()}function Bb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ra)}function zb(t,e){if(t==="click")return xc(e)}function Hb(t,e){if(t==="input"||t==="change")return xc(e)}function Wb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:Wb;function ia(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ly(t,e){var n=ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ay(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ku(t.document)}return e}function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kb(t){var e=$_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(r!==null&&qp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ly(n,o);var s=ly(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qb=Un&&"documentMode"in document&&11>=document.documentMode,eo=null,fh=null,Ms=null,dh=!1;function uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dh||eo==null||eo!==ku(r)||(r=eo,"selectionStart"in r&&qp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&ia(Ms,r)||(Ms=r,r=Nu(fh,"onSelect"),0<r.length&&(e=new Hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=eo)))}function Rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},rd={},B_={};Un&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Rc(t){if(rd[t])return rd[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B_)return rd[t]=e[n];return t}var z_=Rc("animationend"),H_=Rc("animationiteration"),W_=Rc("animationstart"),K_=Rc("transitionend"),q_=new Map,cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){q_.set(t,e),Mi(e,[t])}for(var id=0;id<cy.length;id++){var od=cy[id],Gb=od.toLowerCase(),Qb=od[0].toUpperCase()+od.slice(1);zr(Gb,"on"+Qb)}zr(z_,"onAnimationEnd");zr(H_,"onAnimationIteration");zr(W_,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(K_,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function fy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GA(r,e,void 0,t),t.currentTarget=null}function G_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,f=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;fy(i,a,f),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,f=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;fy(i,a,f),o=l}}}if(bu)throw t=ah,bu=!1,ah=null,t}function he(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(Q_(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),Q_(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Nl]){t[Nl]=!0,n_.forEach(function(n){n!=="selectionchange"&&(Yb.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,sd("selectionchange",!1,e))}}function Q_(t,e,n,r){switch(N_(e)){case 1:var i=cb;break;case 4:i=fb;break;default:i=Bp}n=i.bind(null,e,n,t),i=void 0,!sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=li(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}y_(function(){var f=o,p=Fp(n),m=[];e:{var g=q_.get(t);if(g!==void 0){var E=Hp,I=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":E=Ab;break;case"focusin":I="focus",E=ed;break;case"focusout":I="blur",E=ed;break;case"beforeblur":case"afterblur":E=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Pb;break;case z_:case H_:case W_:E=vb;break;case K_:E=Rb;break;case"scroll":E=db;break;case"wheel":E=Ob;break;case"copy":case"cut":case"paste":E=wb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ty}var T=(e&4)!==0,C=!T&&t==="scroll",w=T?g!==null?g+"Capture":null:g;T=[];for(var v=f,_;v!==null;){_=v;var k=_.stateNode;if(_.tag===5&&k!==null&&(_=k,w!==null&&(k=Zs(v,w),k!=null&&T.push(sa(v,k,_)))),C)break;v=v.return}0<T.length&&(g=new E(g,I,null,n,p),m.push({event:g,listeners:T}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==ih&&(I=n.relatedTarget||n.fromElement)&&(li(I)||I[$n]))break e;if((E||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,E?(I=n.relatedTarget||n.toElement,E=f,I=I?li(I):null,I!==null&&(C=Vi(I),I!==C||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=f),E!==I)){if(T=Zv,k="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(T=ty,k="onPointerLeave",w="onPointerEnter",v="pointer"),C=E==null?g:no(E),_=I==null?g:no(I),g=new T(k,v+"leave",E,n,p),g.target=C,g.relatedTarget=_,k=null,li(p)===f&&(T=new T(w,v+"enter",I,n,p),T.target=_,T.relatedTarget=C,k=T),C=k,E&&I)t:{for(T=E,w=I,v=0,_=T;_;_=Gi(_))v++;for(_=0,k=w;k;k=Gi(k))_++;for(;0<v-_;)T=Gi(T),v--;for(;0<_-v;)w=Gi(w),_--;for(;v--;){if(T===w||w!==null&&T===w.alternate)break t;T=Gi(T),w=Gi(w)}T=null}else T=null;E!==null&&dy(m,g,E,T,!1),I!==null&&C!==null&&dy(m,C,I,T,!0)}}e:{if(g=f?no(f):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var x=Ub;else if(iy(g))if(F_)x=Hb;else{x=Bb;var D=$b}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=zb);if(x&&(x=x(t,f))){V_(m,x,n,p);break e}D&&D(t,g,f),t==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&Zd(g,"number",g.value)}switch(D=f?no(f):window,t){case"focusin":(iy(D)||D.contentEditable==="true")&&(eo=D,fh=f,Ms=null);break;case"focusout":Ms=fh=eo=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,uy(m,n,p);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":uy(m,n,p)}var M;if(Kp)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Zi?L_(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(D_&&n.locale!=="ko"&&(Zi||z!=="onCompositionStart"?z==="onCompositionEnd"&&Zi&&(M=O_()):(gr=p,zp="value"in gr?gr.value:gr.textContent,Zi=!0)),D=Nu(f,z),0<D.length&&(z=new ey(z,t,null,n,p),m.push({event:z,listeners:D}),M?z.data=M:(M=M_(n),M!==null&&(z.data=M)))),(M=Lb?Mb(t,n):Vb(t,n))&&(f=Nu(f,"onBeforeInput"),0<f.length&&(p=new ey("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:f}),p.data=M))}G_(m,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zs(t,n),o!=null&&r.unshift(sa(t,o,i)),o=Zs(t,e),o!=null&&r.push(sa(t,o,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dy(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,f=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&f!==null&&(a=f,i?(l=Zs(n,o),l!=null&&s.unshift(sa(n,l,a))):i||(l=Zs(n,o),l!=null&&s.push(sa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Xb=/\r\n?/g,Jb=/\u0000|\uFFFD/g;function hy(t){return(typeof t=="string"?t:""+t).replace(Xb,`
`).replace(Jb,"")}function Ol(t,e,n){if(e=hy(e),hy(t)!==e&&n)throw Error(N(425))}function Ou(){}var hh=null,ph=null;function mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,py=typeof Promise=="function"?Promise:void 0,eC=typeof queueMicrotask=="function"?queueMicrotask:typeof py<"u"?function(t){return py.resolve(null).then(t).catch(tC)}:gh;function tC(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);na(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function my(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),pn="__reactFiber$"+zo,aa="__reactProps$"+zo,$n="__reactContainer$"+zo,vh="__reactEvents$"+zo,nC="__reactListeners$"+zo,rC="__reactHandles$"+zo;function li(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=my(t);t!==null;){if(n=t[pn])return n;t=my(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[pn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Nc(t){return t[aa]||null}var yh=[],ro=-1;function Hr(t){return{current:t}}function ge(t){0>ro||(t.current=yh[ro],yh[ro]=null,ro--)}function de(t,e){ro++,yh[ro]=t.current,t.current=e}var Lr={},mt=Hr(Lr),kt=Hr(!1),Ti=Lr;function Ao(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function At(t){return t=t.childContextTypes,t!=null}function Du(){ge(kt),ge(mt)}function gy(t,e,n){if(mt.current!==Lr)throw Error(N(168));de(mt,e),de(kt,n)}function Y_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,$A(t)||"Unknown",i));return Se({},n,r)}function Lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,Ti=mt.current,de(mt,t),de(kt,kt.current),!0}function vy(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Y_(t,e,Ti),r.__reactInternalMemoizedMergedChildContext=t,ge(kt),ge(mt),de(mt,t)):ge(kt),de(kt,n)}var xn=null,Oc=!1,ud=!1;function X_(t){xn===null?xn=[t]:xn.push(t)}function iC(t){Oc=!0,X_(t)}function Wr(){if(!ud&&xn!==null){ud=!0;var t=0,e=le;try{var n=xn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Oc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),I_(jp,Wr),i}finally{le=e,ud=!1}}return null}var io=[],oo=0,Mu=null,Vu=0,zt=[],Ht=0,Si=null,Nn=1,On="";function ii(t,e){io[oo++]=Vu,io[oo++]=Mu,Mu=t,Vu=e}function J_(t,e,n){zt[Ht++]=Nn,zt[Ht++]=On,zt[Ht++]=Si,Si=t;var r=Nn;t=On;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nn=1<<32-sn(e)+i|n<<i|r,On=o+t}else Nn=1<<o|n<<i|r,On=t}function Gp(t){t.return!==null&&(ii(t,1),J_(t,1,0))}function Qp(t){for(;t===Mu;)Mu=io[--oo],io[oo]=null,Vu=io[--oo],io[oo]=null;for(;t===Si;)Si=zt[--Ht],zt[Ht]=null,On=zt[--Ht],zt[Ht]=null,Nn=zt[--Ht],zt[Ht]=null}var Mt=null,Lt=null,we=!1,en=null;function Z_(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:Nn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Lt=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(we){var e=Lt;if(e){var n=e;if(!yy(t,e)){if(wh(t))throw Error(N(418));e=Tr(n.nextSibling);var r=Mt;e&&yy(t,e)?Z_(r,n):(t.flags=t.flags&-4097|2,we=!1,Mt=t)}}else{if(wh(t))throw Error(N(418));t.flags=t.flags&-4097|2,we=!1,Mt=t}}}function wy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Dl(t){if(t!==Mt)return!1;if(!we)return wy(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mh(t.type,t.memoizedProps)),e&&(e=Lt)){if(wh(t))throw e1(),Error(N(418));for(;e;)Z_(t,e),e=Tr(e.nextSibling)}if(wy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?Tr(t.stateNode.nextSibling):null;return!0}function e1(){for(var t=Lt;t;)t=Tr(t.nextSibling)}function bo(){Lt=Mt=null,we=!1}function Yp(t){en===null?en=[t]:en.push(t)}var oC=Yn.ReactCurrentBatchConfig;function Jt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fu=Hr(null),ju=null,so=null,Xp=null;function Jp(){Xp=so=ju=null}function Zp(t){var e=Fu.current;ge(Fu),t._currentValue=e}function Eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yo(t,e){ju=t,Xp=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Xp!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(ju===null)throw Error(N(308));so=t,ju.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var ui=null;function em(t){ui===null?ui=[t]:ui.push(t)}function t1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,em(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,em(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}function _y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uu(t,e,n,r){var i=t.updateQueue;cr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,f=l.next;l.next=null,s===null?o=f:s.next=f,s=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=f:a.next=f,p.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,p=f=l=null,a=o;do{var g=a.lane,E=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,T=a;switch(g=e,E=n,T.tag){case 1:if(I=T.payload,typeof I=="function"){m=I.call(E,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=T.payload,g=typeof I=="function"?I.call(E,m,g):I,g==null)break e;m=Se({},m,g);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else E={eventTime:E,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(f=p=E,l=m):p=p.next=E,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(l=m),i.baseState=l,i.firstBaseUpdate=f,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ai|=s,t.lanes=s,t.memoizedState=m}}function Ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var r1=new t_.Component().refs;function Ih(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Ar(t),o=Vn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Sr(t,o,i),e!==null&&(an(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Ar(t),o=Vn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Sr(t,o,i),e!==null&&(an(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Ar(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(an(e,t,r,n),cu(e,t,r))}};function Iy(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ia(n,r)||!ia(i,o):!0}function i1(t,e,n){var r=!1,i=Lr,o=e.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=At(e)?Ti:mt.current,r=e.contextTypes,o=(r=r!=null)?Ao(t,i):Lr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Th(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=r1,tm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=At(e)?Ti:mt.current,i.context=Ao(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ih(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dc.enqueueReplaceState(i,i.state,null),Uu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===r1&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Ll(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sy(t){var e=t._init;return e(t._payload)}function o1(t){function e(w,v){if(t){var _=w.deletions;_===null?(w.deletions=[v],w.flags|=16):_.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=br(w,v),w.index=0,w.sibling=null,w}function o(w,v,_){return w.index=_,t?(_=w.alternate,_!==null?(_=_.index,_<v?(w.flags|=2,v):_):(w.flags|=2,v)):(w.flags|=1048576,v)}function s(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,_,k){return v===null||v.tag!==6?(v=gd(_,w.mode,k),v.return=w,v):(v=i(v,_),v.return=w,v)}function l(w,v,_,k){var x=_.type;return x===Ji?p(w,v,_.props.children,k,_.key):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ur&&Sy(x)===v.type)?(k=i(v,_.props),k.ref=ms(w,v,_),k.return=w,k):(k=gu(_.type,_.key,_.props,null,w.mode,k),k.ref=ms(w,v,_),k.return=w,k)}function f(w,v,_,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=vd(_,w.mode,k),v.return=w,v):(v=i(v,_.children||[]),v.return=w,v)}function p(w,v,_,k,x){return v===null||v.tag!==7?(v=wi(_,w.mode,k,x),v.return=w,v):(v=i(v,_),v.return=w,v)}function m(w,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gd(""+v,w.mode,_),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return _=gu(v.type,v.key,v.props,null,w.mode,_),_.ref=ms(w,null,v),_.return=w,_;case Xi:return v=vd(v,w.mode,_),v.return=w,v;case ur:var k=v._init;return m(w,k(v._payload),_)}if(Ts(v)||cs(v))return v=wi(v,w.mode,_,null),v.return=w,v;Ll(w,v)}return null}function g(w,v,_,k){var x=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(w,v,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sl:return _.key===x?l(w,v,_,k):null;case Xi:return _.key===x?f(w,v,_,k):null;case ur:return x=_._init,g(w,v,x(_._payload),k)}if(Ts(_)||cs(_))return x!==null?null:p(w,v,_,k,null);Ll(w,_)}return null}function E(w,v,_,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return w=w.get(_)||null,a(v,w,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Sl:return w=w.get(k.key===null?_:k.key)||null,l(v,w,k,x);case Xi:return w=w.get(k.key===null?_:k.key)||null,f(v,w,k,x);case ur:var D=k._init;return E(w,v,_,D(k._payload),x)}if(Ts(k)||cs(k))return w=w.get(_)||null,p(v,w,k,x,null);Ll(v,k)}return null}function I(w,v,_,k){for(var x=null,D=null,M=v,z=v=0,Y=null;M!==null&&z<_.length;z++){M.index>z?(Y=M,M=null):Y=M.sibling;var G=g(w,M,_[z],k);if(G===null){M===null&&(M=Y);break}t&&M&&G.alternate===null&&e(w,M),v=o(G,v,z),D===null?x=G:D.sibling=G,D=G,M=Y}if(z===_.length)return n(w,M),we&&ii(w,z),x;if(M===null){for(;z<_.length;z++)M=m(w,_[z],k),M!==null&&(v=o(M,v,z),D===null?x=M:D.sibling=M,D=M);return we&&ii(w,z),x}for(M=r(w,M);z<_.length;z++)Y=E(M,w,z,_[z],k),Y!==null&&(t&&Y.alternate!==null&&M.delete(Y.key===null?z:Y.key),v=o(Y,v,z),D===null?x=Y:D.sibling=Y,D=Y);return t&&M.forEach(function(xt){return e(w,xt)}),we&&ii(w,z),x}function T(w,v,_,k){var x=cs(_);if(typeof x!="function")throw Error(N(150));if(_=x.call(_),_==null)throw Error(N(151));for(var D=x=null,M=v,z=v=0,Y=null,G=_.next();M!==null&&!G.done;z++,G=_.next()){M.index>z?(Y=M,M=null):Y=M.sibling;var xt=g(w,M,G.value,k);if(xt===null){M===null&&(M=Y);break}t&&M&&xt.alternate===null&&e(w,M),v=o(xt,v,z),D===null?x=xt:D.sibling=xt,D=xt,M=Y}if(G.done)return n(w,M),we&&ii(w,z),x;if(M===null){for(;!G.done;z++,G=_.next())G=m(w,G.value,k),G!==null&&(v=o(G,v,z),D===null?x=G:D.sibling=G,D=G);return we&&ii(w,z),x}for(M=r(w,M);!G.done;z++,G=_.next())G=E(M,w,z,G.value,k),G!==null&&(t&&G.alternate!==null&&M.delete(G.key===null?z:G.key),v=o(G,v,z),D===null?x=G:D.sibling=G,D=G);return t&&M.forEach(function(nr){return e(w,nr)}),we&&ii(w,z),x}function C(w,v,_,k){if(typeof _=="object"&&_!==null&&_.type===Ji&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Sl:e:{for(var x=_.key,D=v;D!==null;){if(D.key===x){if(x=_.type,x===Ji){if(D.tag===7){n(w,D.sibling),v=i(D,_.props.children),v.return=w,w=v;break e}}else if(D.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ur&&Sy(x)===D.type){n(w,D.sibling),v=i(D,_.props),v.ref=ms(w,D,_),v.return=w,w=v;break e}n(w,D);break}else e(w,D);D=D.sibling}_.type===Ji?(v=wi(_.props.children,w.mode,k,_.key),v.return=w,w=v):(k=gu(_.type,_.key,_.props,null,w.mode,k),k.ref=ms(w,v,_),k.return=w,w=k)}return s(w);case Xi:e:{for(D=_.key;v!==null;){if(v.key===D)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(w,v.sibling),v=i(v,_.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=vd(_,w.mode,k),v.return=w,w=v}return s(w);case ur:return D=_._init,C(w,v,D(_._payload),k)}if(Ts(_))return I(w,v,_,k);if(cs(_))return T(w,v,_,k);Ll(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,_),v.return=w,w=v):(n(w,v),v=gd(_,w.mode,k),v.return=w,w=v),s(w)):n(w,v)}return C}var Co=o1(!0),s1=o1(!1),za={},_n=Hr(za),la=Hr(za),ua=Hr(za);function ci(t){if(t===za)throw Error(N(174));return t}function nm(t,e){switch(de(ua,e),de(la,t),de(_n,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=th(e,t)}ge(_n),de(_n,e)}function Po(){ge(_n),ge(la),ge(ua)}function a1(t){ci(ua.current);var e=ci(_n.current),n=th(e,t.type);e!==n&&(de(la,t),de(_n,n))}function rm(t){la.current===t&&(ge(_n),ge(la))}var Ie=Hr(0);function $u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function im(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var fu=Yn.ReactCurrentDispatcher,fd=Yn.ReactCurrentBatchConfig,ki=0,Te=null,Fe=null,ze=null,Bu=!1,Vs=!1,ca=0,sC=0;function ot(){throw Error(N(321))}function om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function sm(t,e,n,r,i,o){if(ki=o,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?cC:fC,t=n(r,i),Vs){o=0;do{if(Vs=!1,ca=0,25<=o)throw Error(N(301));o+=1,ze=Fe=null,e.updateQueue=null,fu.current=dC,t=n(r,i)}while(Vs)}if(fu.current=zu,e=Fe!==null&&Fe.next!==null,ki=0,ze=Fe=Te=null,Bu=!1,e)throw Error(N(300));return t}function am(){var t=ca!==0;return ca=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=t:ze=ze.next=t,ze}function Qt(){if(Fe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=ze===null?Te.memoizedState:ze.next;if(e!==null)ze=e,Fe=t;else{if(t===null)throw Error(N(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ze===null?Te.memoizedState=ze=t:ze=ze.next=t}return ze}function fa(t,e){return typeof e=="function"?e(t):e}function dd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,f=o;do{var p=f.lane;if((ki&p)===p)l!==null&&(l=l.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var m={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,Te.lanes|=p,Ai|=p}f=f.next}while(f!==null&&f!==o);l===null?s=r:l.next=a,ln(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Te.lanes|=o,Ai|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ln(o,e.memoizedState)||(St=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function l1(){}function u1(t,e){var n=Te,r=Qt(),i=e(),o=!ln(r.memoizedState,i);if(o&&(r.memoizedState=i,St=!0),r=r.queue,lm(d1.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,da(9,f1.bind(null,n,r,i,e),void 0,null),We===null)throw Error(N(349));ki&30||c1(n,e,i)}return i}function c1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f1(t,e,n,r){e.value=n,e.getSnapshot=r,h1(e)&&p1(t)}function d1(t,e,n){return n(function(){h1(e)&&p1(t)})}function h1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function p1(t){var e=Bn(t,1);e!==null&&an(e,t,1,-1)}function ky(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=uC.bind(null,Te,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m1(){return Qt().memoizedState}function du(t,e,n,r){var i=hn();Te.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var s=Fe.memoizedState;if(o=s.destroy,r!==null&&om(r,s.deps)){i.memoizedState=da(e,n,o,r);return}}Te.flags|=t,i.memoizedState=da(1|e,n,o,r)}function Ay(t,e){return du(8390656,8,t,e)}function lm(t,e){return Lc(2048,8,t,e)}function g1(t,e){return Lc(4,2,t,e)}function v1(t,e){return Lc(4,4,t,e)}function y1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w1(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,y1.bind(null,e,t),n)}function um(){}function _1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E1(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&om(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I1(t,e,n){return ki&21?(ln(n,e)||(n=k_(),Te.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function aC(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=fd.transition;fd.transition={};try{t(!1),e()}finally{le=n,fd.transition=r}}function T1(){return Qt().memoizedState}function lC(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},S1(t))k1(e,n);else if(n=t1(t,e,n,r),n!==null){var i=wt();an(n,t,r,i),A1(n,e,r)}}function uC(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(S1(t))k1(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,s)){var l=e.interleaved;l===null?(i.next=i,em(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=t1(t,e,i,r),n!==null&&(i=wt(),an(n,t,r,i),A1(n,e,r))}}function S1(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function k1(t,e){Vs=Bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function A1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}var zu={readContext:Gt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},cC={readContext:Gt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Ay,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,du(4194308,4,y1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){return du(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lC.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:ky,useDebugValue:um,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=ky(!1),e=t[0];return t=aC.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=hn();if(we){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),We===null)throw Error(N(349));ki&30||c1(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Ay(d1.bind(null,r,o,t),[t]),r.flags|=2048,da(9,f1.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=hn(),e=We.identifierPrefix;if(we){var n=On,r=Nn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fC={readContext:Gt,useCallback:_1,useContext:Gt,useEffect:lm,useImperativeHandle:w1,useInsertionEffect:g1,useLayoutEffect:v1,useMemo:E1,useReducer:dd,useRef:m1,useState:function(){return dd(fa)},useDebugValue:um,useDeferredValue:function(t){var e=Qt();return I1(e,Fe.memoizedState,t)},useTransition:function(){var t=dd(fa)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:l1,useSyncExternalStore:u1,useId:T1,unstable_isNewReconciler:!1},dC={readContext:Gt,useCallback:_1,useContext:Gt,useEffect:lm,useImperativeHandle:w1,useInsertionEffect:g1,useLayoutEffect:v1,useMemo:E1,useReducer:hd,useRef:m1,useState:function(){return hd(fa)},useDebugValue:um,useDeferredValue:function(t){var e=Qt();return Fe===null?e.memoizedState=t:I1(e,Fe.memoizedState,t)},useTransition:function(){var t=hd(fa)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:l1,useSyncExternalStore:u1,useId:T1,unstable_isNewReconciler:!1};function xo(t,e){try{var n="",r=e;do n+=UA(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hC=typeof WeakMap=="function"?WeakMap:Map;function b1(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wu||(Wu=!0,Dh=r),Sh(t,e)},n}function C1(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function by(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bC.bind(null,t,e,n),e.then(t,t))}function Cy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var pC=Yn.ReactCurrentOwner,St=!1;function vt(t,e,n,r){e.child=t===null?s1(e,null,n,r):Co(e,t.child,n,r)}function xy(t,e,n,r,i){n=n.render;var o=e.ref;return yo(e,i),r=sm(t,e,n,r,o,i),n=am(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(we&&n&&Gp(e),e.flags|=1,vt(t,e,r,i),e.child)}function Ry(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!vm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,P1(t,e,o,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(s,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=br(o,r),t.ref=e.ref,t.return=e,e.child=t}function P1(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ia(o,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,zn(t,e,i)}return kh(t,e,n,r,i)}function x1(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(lo,Dt),Dt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(lo,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,de(lo,Dt),Dt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,de(lo,Dt),Dt|=r;return vt(t,e,i,n),e.child}function R1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,r,i){var o=At(n)?Ti:mt.current;return o=Ao(e,o),yo(e,i),n=sm(t,e,n,r,o,i),r=am(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(we&&r&&Gp(e),e.flags|=1,vt(t,e,n,i),e.child)}function Ny(t,e,n,r,i){if(At(n)){var o=!0;Lu(e)}else o=!1;if(yo(e,i),e.stateNode===null)hu(t,e),i1(e,n,r),Th(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=Gt(f):(f=At(n)?Ti:mt.current,f=Ao(e,f));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==f)&&Ty(e,s,r,f),cr=!1;var g=e.memoizedState;s.state=g,Uu(e,r,s,i),l=e.memoizedState,a!==r||g!==l||kt.current||cr?(typeof p=="function"&&(Ih(e,n,p,r),l=e.memoizedState),(a=cr||Iy(e,n,a,r,g,l,f))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=f,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,n1(t,e),a=e.memoizedProps,f=e.type===e.elementType?a:Jt(e.type,a),s.props=f,m=e.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=At(n)?Ti:mt.current,l=Ao(e,l));var E=n.getDerivedStateFromProps;(p=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==l)&&Ty(e,s,r,l),cr=!1,g=e.memoizedState,s.state=g,Uu(e,r,s,i);var I=e.memoizedState;a!==m||g!==I||kt.current||cr?(typeof E=="function"&&(Ih(e,n,E,r),I=e.memoizedState),(f=cr||Iy(e,n,f,r,g,I,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=l,r=f):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Ah(t,e,n,r,o,i)}function Ah(t,e,n,r,i,o){R1(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&vy(e,n,!1),zn(t,e,o);r=e.stateNode,pC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Co(e,t.child,null,o),e.child=Co(e,null,a,o)):vt(t,e,a,o),e.memoizedState=r.state,i&&vy(e,n,!0),e.child}function N1(t){var e=t.stateNode;e.pendingContext?gy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gy(t,e.context,!1),nm(t,e.containerInfo)}function Oy(t,e,n,r,i){return bo(),Yp(i),e.flags|=256,vt(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function O1(t,e,n){var r=e.pendingProps,i=Ie.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ie,i&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fc(s,r,0,null),t=wi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ch(n),e.memoizedState=bh,t):cm(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=br(a,o):(o=wi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ch(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return o=t.child,t=o.sibling,r=br(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cm(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,r){return r!==null&&Yp(r),Co(e,t.child,null,n),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(N(422))),Ml(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),o=wi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Co(e,t.child,null,s),e.child.memoizedState=Ch(s),e.memoizedState=bh,o);if(!(e.mode&1))return Ml(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=pd(o,r,void 0),Ml(t,e,s,r)}if(a=(s&t.childLanes)!==0,St||a){if(r=We,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bn(t,i),an(r,t,i,-1))}return gm(),r=pd(Error(N(421))),Ml(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Lt=Tr(i.nextSibling),Mt=e,we=!0,en=null,t!==null&&(zt[Ht++]=Nn,zt[Ht++]=On,zt[Ht++]=Si,Nn=t.id,On=t.overflow,Si=e),e=cm(e,r.children),e.flags|=4096,e)}function Dy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eh(t.return,e,n)}function md(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function D1(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(vt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dy(t,n,e);else if(t.tag===19)Dy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,o);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gC(t,e,n){switch(e.tag){case 3:N1(e),bo();break;case 5:a1(e);break;case 1:At(e.type)&&Lu(e);break;case 4:nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?O1(t,e,n):(de(Ie,Ie.current&1),t=zn(t,e,n),t!==null?t.sibling:null);de(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return D1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,x1(t,e,n)}return zn(t,e,n)}var L1,Ph,M1,V1;L1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};M1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ci(_n.current);var o=null;switch(n){case"input":i=Xd(t,i),r=Xd(t,r),o=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),o=[];break;case"textarea":i=eh(t,i),r=eh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ou)}nh(n,r);var s;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var a=i[f];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Xs.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var l=r[f];if(a=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&l!==a&&(l!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(f,n)),n=l;else f==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(f,l)):f==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(f,""+l):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(f)?(l!=null&&f==="onScroll"&&he("scroll",t),o||a===l||(o=[])):(o=o||[]).push(f,l))}n&&(o=o||[]).push("style",n);var f=o;(e.updateQueue=f)&&(e.flags|=4)}};V1=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vC(t,e,n){var r=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return At(e.type)&&Du(),st(e),null;case 3:return r=e.stateNode,Po(),ge(kt),ge(mt),im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Vh(en),en=null))),Ph(t,e),st(e),null;case 5:rm(e);var i=ci(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)M1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return st(e),null}if(t=ci(_n.current),Dl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[pn]=e,r[aa]=o,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)he(ks[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":zv(r,o),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},he("invalid",r);break;case"textarea":Wv(r,o),he("invalid",r)}nh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",""+a]):Xs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&he("scroll",r)}switch(n){case"input":kl(r),Hv(r,o,!0);break;case"textarea":kl(r),Kv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ou)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[pn]=e,t[aa]=r,L1(t,e,!1,!1),e.stateNode=t;e:{switch(s=rh(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)he(ks[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":zv(t,r),i=Xd(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),he("invalid",t);break;case"textarea":Wv(t,r),i=eh(t,r),he("invalid",t);break;default:i=r}nh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&he("scroll",t):l!=null&&Dp(t,o,l,s))}switch(n){case"input":kl(t),Hv(t,r,!1);break;case"textarea":kl(t),Kv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?po(t,!!r.multiple,o,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)V1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=ci(ua.current),ci(_n.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(o=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return st(e),null;case 13:if(ge(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Lt!==null&&e.mode&1&&!(e.flags&128))e1(),bo(),e.flags|=98560,o=!1;else if(o=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(N(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[pn]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),o=!1}else en!==null&&(Vh(en),en=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):gm())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Po(),Ph(t,e),t===null&&oa(e.stateNode.containerInfo),st(e),null;case 10:return Zp(e.type._context),st(e),null;case 17:return At(e.type)&&Du(),st(e),null;case 19:if(ge(Ie),o=e.memoizedState,o===null)return st(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)gs(o,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=$u(t),s!==null){for(e.flags|=128,gs(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ie,Ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ne()>Ro&&(e.flags|=128,r=!0,gs(o,!1),e.lanes=4194304)}else{if(!r)if(t=$u(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!we)return st(e),null}else 2*Ne()-o.renderingStartTime>Ro&&n!==1073741824&&(e.flags|=128,r=!0,gs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,de(Ie,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function yC(t,e){switch(Qp(e),e.tag){case 1:return At(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Po(),ge(kt),ge(mt),im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(ge(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ie),null;case 4:return Po(),null;case 10:return Zp(e.type._context),null;case 22:case 23:return mm(),null;case 24:return null;default:return null}}var Vl=!1,ct=!1,wC=typeof WeakSet=="function"?WeakSet:Set,B=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function xh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Ly=!1;function _C(t,e){if(hh=xu,t=$_(),qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,f=0,p=0,m=t,g=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++f===i&&(a=s),g===o&&++p===r&&(l=s),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ph={focusedElem:t,selectionRange:n},xu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var T=I.memoizedProps,C=I.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?T:Jt(e.type,T),C);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){Ae(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return I=Ly,Ly=!1,I}function Fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&xh(e,n,o)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F1(t){var e=t.alternate;e!==null&&(t.alternate=null,F1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[aa],delete e[vh],delete e[nC],delete e[rC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j1(t){return t.tag===5||t.tag===3||t.tag===4}function My(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ou));else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Ye=null,Zt=!1;function sr(t,e,n){for(n=n.child;n!==null;)U1(t,e,n),n=n.sibling}function U1(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:ct||ao(n,e);case 6:var r=Ye,i=Zt;Ye=null,sr(t,e,n),Ye=r,Zt=i,Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Zt?(t=Ye,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),na(t)):ld(Ye,n.stateNode));break;case 4:r=Ye,i=Zt,Ye=n.stateNode.containerInfo,Zt=!0,sr(t,e,n),Ye=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xh(n,e,s),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!ct&&(ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,sr(t,e,n),ct=r):sr(t,e,n);break;default:sr(t,e,n)}}function Vy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wC),e.forEach(function(r){var i=PC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Zt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Zt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Ye===null)throw Error(N(160));U1(o,s,i),Ye=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(f){Ae(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$1(e,t),e=e.sibling}function $1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),dn(t),r&4){try{Fs(3,t,t.return),Mc(3,t)}catch(T){Ae(t,t.return,T)}try{Fs(5,t,t.return)}catch(T){Ae(t,t.return,T)}}break;case 1:Xt(e,t),dn(t),r&512&&n!==null&&ao(n,n.return);break;case 5:if(Xt(e,t),dn(t),r&512&&n!==null&&ao(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(T){Ae(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&l_(i,o),rh(a,s);var f=rh(a,o);for(s=0;s<l.length;s+=2){var p=l[s],m=l[s+1];p==="style"?h_(i,m):p==="dangerouslySetInnerHTML"?f_(i,m):p==="children"?Js(i,m):Dp(i,p,m,f)}switch(a){case"input":Jd(i,o);break;case"textarea":u_(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?po(i,!!o.multiple,E,!1):g!==!!o.multiple&&(o.defaultValue!=null?po(i,!!o.multiple,o.defaultValue,!0):po(i,!!o.multiple,o.multiple?[]:"",!1))}i[aa]=o}catch(T){Ae(t,t.return,T)}}break;case 6:if(Xt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(T){Ae(t,t.return,T)}}break;case 3:if(Xt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(T){Ae(t,t.return,T)}break;case 4:Xt(e,t),dn(t);break;case 13:Xt(e,t),dn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hm=Ne())),r&4&&Vy(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(f=ct)||p,Xt(e,t),ct=f):Xt(e,t),dn(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(m=B=p;B!==null;){switch(g=B,E=g.child,g.tag){case 0:case 11:case 14:case 15:Fs(4,g,g.return);break;case 1:ao(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(T){Ae(r,n,T)}}break;case 5:ao(g,g.return);break;case 22:if(g.memoizedState!==null){jy(m);continue}}E!==null?(E.return=g,B=E):jy(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d_("display",s))}catch(T){Ae(t,t.return,T)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(T){Ae(t,t.return,T)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xt(e,t),dn(t),r&4&&Vy(t);break;case 21:break;default:Xt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var o=My(t);Oh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=My(t);Nh(t,a,s);break;default:throw Error(N(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EC(t,e,n){B=t,B1(t)}function B1(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=Vl;var f=ct;if(Vl=s,(ct=l)&&!f)for(B=i;B!==null;)s=B,l=s.child,s.tag===22&&s.memoizedState!==null?Uy(i):l!==null?(l.return=s,B=l):Uy(i);for(;o!==null;)B=o,B1(o),o=o.sibling;B=i,Vl=a,ct=f}Fy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):Fy(t)}}function Fy(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ey(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ey(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ct||e.flags&512&&Rh(e)}catch(g){Ae(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function jy(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Uy(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var o=e.return;try{Rh(e)}catch(l){Ae(e,o,l)}break;case 5:var s=e.return;try{Rh(e)}catch(l){Ae(e,s,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var IC=Math.ceil,Hu=Yn.ReactCurrentDispatcher,fm=Yn.ReactCurrentOwner,qt=Yn.ReactCurrentBatchConfig,se=0,We=null,Me=null,tt=0,Dt=0,lo=Hr(0),je=0,ha=null,Ai=0,Vc=0,dm=0,js=null,Tt=null,hm=0,Ro=1/0,Pn=null,Wu=!1,Dh=null,kr=null,Fl=!1,vr=null,Ku=0,Us=0,Lh=null,pu=-1,mu=0;function wt(){return se&6?Ne():pu!==-1?pu:pu=Ne()}function Ar(t){return t.mode&1?se&2&&tt!==0?tt&-tt:oC.transition!==null?(mu===0&&(mu=k_()),mu):(t=le,t!==0||(t=window.event,t=t===void 0?16:N_(t.type)),t):1}function an(t,e,n,r){if(50<Us)throw Us=0,Lh=null,Error(N(185));Ua(t,n,r),(!(se&2)||t!==We)&&(t===We&&(!(se&2)&&(Vc|=n),je===4&&dr(t,tt)),bt(t,r),n===1&&se===0&&!(e.mode&1)&&(Ro=Ne()+500,Oc&&Wr()))}function bt(t,e){var n=t.callbackNode;ob(t,e);var r=Pu(t,t===We?tt:0);if(r===0)n!==null&&Qv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qv(n),e===1)t.tag===0?iC($y.bind(null,t)):X_($y.bind(null,t)),eC(function(){!(se&6)&&Wr()}),n=null;else{switch(A_(r)){case 1:n=jp;break;case 4:n=T_;break;case 16:n=Cu;break;case 536870912:n=S_;break;default:n=Cu}n=Y1(n,z1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z1(t,e){if(pu=-1,mu=0,se&6)throw Error(N(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var r=Pu(t,t===We?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qu(t,r);else{e=r;var i=se;se|=2;var o=W1();(We!==t||tt!==e)&&(Pn=null,Ro=Ne()+500,yi(t,e));do try{kC();break}catch(a){H1(t,a)}while(!0);Jp(),Hu.current=o,se=i,Me!==null?e=0:(We=null,tt=0,e=je)}if(e!==0){if(e===2&&(i=lh(t),i!==0&&(r=i,e=Mh(t,i))),e===1)throw n=ha,yi(t,0),dr(t,r),bt(t,Ne()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!TC(i)&&(e=qu(t,r),e===2&&(o=lh(t),o!==0&&(r=o,e=Mh(t,o))),e===1))throw n=ha,yi(t,0),dr(t,r),bt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:oi(t,Tt,Pn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=hm+500-Ne(),10<e)){if(Pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gh(oi.bind(null,t,Tt,Pn),e);break}oi(t,Tt,Pn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-sn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IC(r/1960))-r,10<r){t.timeoutHandle=gh(oi.bind(null,t,Tt,Pn),r);break}oi(t,Tt,Pn);break;case 5:oi(t,Tt,Pn);break;default:throw Error(N(329))}}}return bt(t,Ne()),t.callbackNode===n?z1.bind(null,t):null}function Mh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=qu(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Vh(e)),t}function Vh(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function TC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~dm,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function $y(t){if(se&6)throw Error(N(327));wo();var e=Pu(t,0);if(!(e&1))return bt(t,Ne()),null;var n=qu(t,e);if(t.tag!==0&&n===2){var r=lh(t);r!==0&&(e=r,n=Mh(t,r))}if(n===1)throw n=ha,yi(t,0),dr(t,e),bt(t,Ne()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,Tt,Pn),bt(t,Ne()),null}function pm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ro=Ne()+500,Oc&&Wr())}}function bi(t){vr!==null&&vr.tag===0&&!(se&6)&&wo();var e=se;se|=1;var n=qt.transition,r=le;try{if(qt.transition=null,le=1,t)return t()}finally{le=r,qt.transition=n,se=e,!(se&6)&&Wr()}}function mm(){Dt=lo.current,ge(lo)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zb(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Qp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Du();break;case 3:Po(),ge(kt),ge(mt),im();break;case 5:rm(r);break;case 4:Po();break;case 13:ge(Ie);break;case 19:ge(Ie);break;case 10:Zp(r.type._context);break;case 22:case 23:mm()}n=n.return}if(We=t,Me=t=br(t.current,null),tt=Dt=e,je=0,ha=null,dm=Vc=Ai=0,Tt=js=null,ui!==null){for(e=0;e<ui.length;e++)if(n=ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}ui=null}return t}function H1(t,e){do{var n=Me;try{if(Jp(),fu.current=zu,Bu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bu=!1}if(ki=0,ze=Fe=Te=null,Vs=!1,ca=0,fm.current=null,n===null||n.return===null){je=1,ha=e,Me=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=l,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var E=Cy(s);if(E!==null){E.flags&=-257,Py(E,s,a,o,e),E.mode&1&&by(o,f,e),e=E,l=f;var I=e.updateQueue;if(I===null){var T=new Set;T.add(l),e.updateQueue=T}else I.add(l);break e}else{if(!(e&1)){by(o,f,e),gm();break e}l=Error(N(426))}}else if(we&&a.mode&1){var C=Cy(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Py(C,s,a,o,e),Yp(xo(l,a));break e}}o=l=xo(l,a),je!==4&&(je=2),js===null?js=[o]:js.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var w=b1(o,l,e);_y(o,w);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(kr===null||!kr.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var k=C1(o,a,e);_y(o,k);break e}}o=o.return}while(o!==null)}q1(n)}catch(x){e=x,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function W1(){var t=Hu.current;return Hu.current=zu,t===null?zu:t}function gm(){(je===0||je===3||je===2)&&(je=4),We===null||!(Ai&268435455)&&!(Vc&268435455)||dr(We,tt)}function qu(t,e){var n=se;se|=2;var r=W1();(We!==t||tt!==e)&&(Pn=null,yi(t,e));do try{SC();break}catch(i){H1(t,i)}while(!0);if(Jp(),se=n,Hu.current=r,Me!==null)throw Error(N(261));return We=null,tt=0,je}function SC(){for(;Me!==null;)K1(Me)}function kC(){for(;Me!==null&&!YA();)K1(Me)}function K1(t){var e=Q1(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?q1(t):Me=e,fm.current=null}function q1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yC(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Me=null;return}}else if(n=vC(n,e,Dt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);je===0&&(je=5)}function oi(t,e,n){var r=le,i=qt.transition;try{qt.transition=null,le=1,AC(t,e,n,r)}finally{qt.transition=i,le=r}return null}function AC(t,e,n,r){do wo();while(vr!==null);if(se&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(sb(t,o),t===We&&(Me=We=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,Y1(Cu,function(){return wo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qt.transition,qt.transition=null;var s=le;le=1;var a=se;se|=4,fm.current=null,_C(t,n),$1(n,t),Kb(ph),xu=!!hh,ph=hh=null,t.current=n,EC(n),XA(),se=a,le=s,qt.transition=o}else t.current=n;if(Fl&&(Fl=!1,vr=t,Ku=i),o=t.pendingLanes,o===0&&(kr=null),eb(n.stateNode),bt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wu)throw Wu=!1,t=Dh,Dh=null,t;return Ku&1&&t.tag!==0&&wo(),o=t.pendingLanes,o&1?t===Lh?Us++:(Us=0,Lh=t):Us=0,Wr(),null}function wo(){if(vr!==null){var t=A_(Ku),e=qt.transition,n=le;try{if(qt.transition=null,le=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Ku=0,se&6)throw Error(N(331));var i=se;for(se|=4,B=t.current;B!==null;){var o=B,s=o.child;if(B.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var f=a[l];for(B=f;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Fs(8,p,o)}var m=p.child;if(m!==null)m.return=p,B=m;else for(;B!==null;){p=B;var g=p.sibling,E=p.return;if(F1(p),p===f){B=null;break}if(g!==null){g.return=E,B=g;break}B=E}}}var I=o.alternate;if(I!==null){var T=I.child;if(T!==null){I.child=null;do{var C=T.sibling;T.sibling=null,T=C}while(T!==null)}}B=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,B=s;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fs(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,B=w;break e}B=o.return}}var v=t.current;for(B=v;B!==null;){s=B;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,B=_;else e:for(s=v;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(x){Ae(a,a.return,x)}if(a===s){B=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,B=k;break e}B=a.return}}if(se=i,Wr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{le=n,qt.transition=e}}return!1}function By(t,e,n){e=xo(n,e),e=b1(t,e,1),t=Sr(t,e,1),e=wt(),t!==null&&(Ua(t,1,e),bt(t,e))}function Ae(t,e,n){if(t.tag===3)By(t,t,n);else for(;e!==null;){if(e.tag===3){By(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=xo(n,t),t=C1(e,t,1),e=Sr(e,t,1),t=wt(),e!==null&&(Ua(e,1,t),bt(e,t));break}}e=e.return}}function bC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(tt&n)===n&&(je===4||je===3&&(tt&130023424)===tt&&500>Ne()-hm?yi(t,0):dm|=n),bt(t,e)}function G1(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=wt();t=Bn(t,e),t!==null&&(Ua(t,e,n),bt(t,n))}function CC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G1(t,n)}function PC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),G1(t,n)}var Q1;Q1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,gC(t,e,n);St=!!(t.flags&131072)}else St=!1,we&&e.flags&1048576&&J_(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hu(t,e),t=e.pendingProps;var i=Ao(e,mt.current);yo(e,n),i=sm(null,e,r,t,i,n);var o=am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(o=!0,Lu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tm(e),i.updater=Dc,e.stateNode=i,i._reactInternals=e,Th(e,r,t,n),e=Ah(null,e,r,!0,o,n)):(e.tag=0,we&&o&&Gp(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RC(r),t=Jt(r,t),i){case 0:e=kh(null,e,r,t,n);break e;case 1:e=Ny(null,e,r,t,n);break e;case 11:e=xy(null,e,r,t,n);break e;case 14:e=Ry(null,e,r,Jt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Ny(t,e,r,i,n);case 3:e:{if(N1(e),t===null)throw Error(N(387));r=e.pendingProps,o=e.memoizedState,i=o.element,n1(t,e),Uu(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=xo(Error(N(423)),e),e=Oy(t,e,r,n,i);break e}else if(r!==i){i=xo(Error(N(424)),e),e=Oy(t,e,r,n,i);break e}else for(Lt=Tr(e.stateNode.containerInfo.firstChild),Mt=e,we=!0,en=null,n=s1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=zn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return a1(e),t===null&&_h(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,mh(r,i)?s=null:o!==null&&mh(r,o)&&(e.flags|=32),R1(t,e),vt(t,e,s,n),e.child;case 6:return t===null&&_h(e),null;case 13:return O1(t,e,n);case 4:return nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Co(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),xy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,de(Fu,r._currentValue),r._currentValue=s,o!==null)if(ln(o.value,s)){if(o.children===i.children&&!kt.current){e=zn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Vn(-1,n&-n),l.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?l.next=l:(l.next=p.next,p.next=l),f.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eh(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Eh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yo(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),Ry(t,e,r,i,n);case 15:return P1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),hu(t,e),e.tag=1,At(r)?(t=!0,Lu(e)):t=!1,yo(e,n),i1(e,r,i),Th(e,r,i,n),Ah(null,e,r,!0,t,n);case 19:return D1(t,e,n);case 22:return x1(t,e,n)}throw Error(N(156,e.tag))};function Y1(t,e){return I_(t,e)}function xC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new xC(t,e,n,r)}function vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RC(t){if(typeof t=="function")return vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mp)return 11;if(t===Vp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")vm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ji:return wi(n.children,i,o,e);case Lp:s=8,i|=8;break;case qd:return t=Kt(12,n,e,i|2),t.elementType=qd,t.lanes=o,t;case Gd:return t=Kt(13,n,e,i),t.elementType=Gd,t.lanes=o,t;case Qd:return t=Kt(19,n,e,i),t.elementType=Qd,t.lanes=o,t;case o_:return Fc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r_:s=10;break e;case i_:s=9;break e;case Mp:s=11;break e;case Vp:s=14;break e;case ur:s=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Kt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function wi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=o_,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xf(0),this.expirationTimes=Xf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ym(t,e,n,r,i,o,s,a,l){return t=new NC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Kt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tm(o),t}function OC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X1(t){if(!t)return Lr;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(At(n))return Y_(t,n,e)}return e}function J1(t,e,n,r,i,o,s,a,l){return t=ym(n,r,!0,t,i,o,s,a,l),t.context=X1(null),n=t.current,r=wt(),i=Ar(n),o=Vn(r,i),o.callback=e??null,Sr(n,o,i),t.current.lanes=i,Ua(t,i,r),bt(t,r),t}function jc(t,e,n,r){var i=e.current,o=wt(),s=Ar(i);return n=X1(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,s),t!==null&&(an(t,i,s,o),cu(t,i,s)),s}function Gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wm(t,e){zy(t,e),(t=t.alternate)&&zy(t,e)}function DC(){return null}var Z1=typeof reportError=="function"?reportError:function(t){console.error(t)};function _m(t){this._internalRoot=t}Uc.prototype.render=_m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));jc(t,e,null,null)};Uc.prototype.unmount=_m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){jc(null,t,null,null)}),e[$n]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=P_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&R_(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hy(){}function LC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Gu(s);o.call(f)}}var s=J1(e,r,t,0,null,!1,!1,"",Hy);return t._reactRootContainer=s,t[$n]=s.current,oa(t.nodeType===8?t.parentNode:t),bi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var f=Gu(l);a.call(f)}}var l=ym(t,0,!1,null,null,!1,!1,"",Hy);return t._reactRootContainer=l,t[$n]=l.current,oa(t.nodeType===8?t.parentNode:t),bi(function(){jc(e,l,n,r)}),l}function Bc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Gu(s);a.call(l)}}jc(e,s,t,i)}else s=LC(n,e,t,i,r);return Gu(s)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(Up(e,n|1),bt(e,Ne()),!(se&6)&&(Ro=Ne()+500,Wr()))}break;case 13:bi(function(){var r=Bn(t,1);if(r!==null){var i=wt();an(r,t,1,i)}}),wm(t,1)}};$p=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=wt();an(e,t,134217728,n)}wm(t,134217728)}};C_=function(t){if(t.tag===13){var e=Ar(t),n=Bn(t,e);if(n!==null){var r=wt();an(n,t,e,r)}wm(t,e)}};P_=function(){return le};x_=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};oh=function(t,e,n){switch(e){case"input":if(Jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(N(90));a_(r),Jd(r,i)}}}break;case"textarea":u_(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};g_=pm;v_=bi;var MC={usingClientEntryPoint:!1,Events:[Ba,no,Nc,p_,m_,pm]},vs={findFiberByHostInstance:li,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},VC={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||DC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Cc=jl.inject(VC),wn=jl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MC;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(N(200));return OC(t,e,null,n)};jt.createRoot=function(t,e){if(!Em(t))throw Error(N(299));var n=!1,r="",i=Z1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ym(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,oa(t.nodeType===8?t.parentNode:t),new _m(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return bi(t)};jt.hydrate=function(t,e,n){if(!$c(e))throw Error(N(200));return Bc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Z1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=J1(e,null,t,1,n??null,i,!1,o,s),t[$n]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uc(e)};jt.render=function(t,e,n){if(!$c(e))throw Error(N(200));return Bc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(N(40));return t._reactRootContainer?(bi(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};jt.unstable_batchedUpdates=pm;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Bc(t,e,n,!1,r)};jt.version="18.2.0-next-9e3b772b8-20220608";function eE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eE)}catch(t){console.error(t)}}eE(),J0.exports=jt;var FC=J0.exports,Wy=FC;Wd.createRoot=Wy.createRoot,Wd.hydrateRoot=Wy.hydrateRoot;var Ky={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},nE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,f=l?t[i+2]:0,p=o>>2,m=(o&3)<<4|a>>4;let g=(a&15)<<2|f>>6,E=f&63;l||(E=64,s||(g=64)),r.push(n[p],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||f==null||m==null)throw new UC;const g=o<<2|a>>4;if(r.push(g),f!==64){const E=a<<4&240|f>>2;if(r.push(E),m!==64){const I=f<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $C=function(t){const e=tE(t);return nE.encodeByteArray(e,!0)},Qu=function(t){return $C(t).replace(/\./g,"")},rE=function(t){try{return nE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=()=>BC().__FIREBASE_DEFAULTS__,HC=()=>{if(typeof process>"u"||typeof Ky>"u")return;const t=Ky.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rE(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return zC()||HC()||WC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iE=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KC=t=>{const e=iE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oE=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},sE=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qu(JSON.stringify(n)),Qu(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function YC(){var t;const e=(t=zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZC(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eP(){return!YC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aE(){try{return typeof indexedDB=="object"}catch{return!1}}function tP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nP,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?rP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Xn(i,a,r)}}function rP(t,e){return t.replace(iP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iP=/\{\$([^}]+)}/g;function oP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(qy(o)&&qy(s)){if(!Yu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sP(t,e){const n=new aP(t,e);return n.subscribe.bind(n)}class aP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yd),i.error===void 0&&(i.error=yd),i.complete===void 0&&(i.complete=yd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class Ci{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fP(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cP(t){return t===si?void 0:t}function fP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const hP={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pP=ne.INFO,mP={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},gP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Im{constructor(e){this.name=e,this._logLevel=pP,this._logHandler=gP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const vP=(t,e)=>e.some(n=>t instanceof n);let Gy,Qy;function yP(){return Gy||(Gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wP(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,Fh=new WeakMap,uE=new WeakMap,wd=new WeakMap,Tm=new WeakMap;function _P(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Cr(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&lE.set(n,t)}).catch(()=>{}),Tm.set(e,t),e}function EP(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Fh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IP(t){jh=t(jh)}function TP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),Cr(r)}:wP().includes(t)?function(...e){return t.apply(_d(this),e),Cr(lE.get(this))}:function(...e){return Cr(t.apply(_d(this),e))}}function SP(t){return typeof t=="function"?TP(t):(t instanceof IDBTransaction&&EP(t),vP(t,yP())?new Proxy(t,jh):t)}function Cr(t){if(t instanceof IDBRequest)return _P(t);if(wd.has(t))return wd.get(t);const e=SP(t);return e!==t&&(wd.set(t,e),Tm.set(e,t)),e}const _d=t=>Tm.get(t);function kP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Cr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Cr(s.result),l.oldVersion,l.newVersion,Cr(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const AP=["get","getKey","getAll","getAllKeys","count"],bP=["put","add","delete","clear"],Ed=new Map;function Yy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AP.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),i&&l.done]))[0]};return Ed.set(e,o),o}IP(t=>({...t,get:(e,n,r)=>Yy(e,n)||t.get(e,n,r),has:(e,n)=>!!Yy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",Xy="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Im("@firebase/app"),xP="@firebase/app-compat",RP="@firebase/analytics-compat",NP="@firebase/analytics",OP="@firebase/app-check-compat",DP="@firebase/app-check",LP="@firebase/auth",MP="@firebase/auth-compat",VP="@firebase/database",FP="@firebase/database-compat",jP="@firebase/functions",UP="@firebase/functions-compat",$P="@firebase/installations",BP="@firebase/installations-compat",zP="@firebase/messaging",HP="@firebase/messaging-compat",WP="@firebase/performance",KP="@firebase/performance-compat",qP="@firebase/remote-config",GP="@firebase/remote-config-compat",QP="@firebase/storage",YP="@firebase/storage-compat",XP="@firebase/firestore",JP="@firebase/firestore-compat",ZP="firebase",ex="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="[DEFAULT]",tx={[Uh]:"fire-core",[xP]:"fire-core-compat",[NP]:"fire-analytics",[RP]:"fire-analytics-compat",[DP]:"fire-app-check",[OP]:"fire-app-check-compat",[LP]:"fire-auth",[MP]:"fire-auth-compat",[VP]:"fire-rtdb",[FP]:"fire-rtdb-compat",[jP]:"fire-fn",[UP]:"fire-fn-compat",[$P]:"fire-iid",[BP]:"fire-iid-compat",[zP]:"fire-fcm",[HP]:"fire-fcm-compat",[WP]:"fire-perf",[KP]:"fire-perf-compat",[qP]:"fire-rc",[GP]:"fire-rc-compat",[QP]:"fire-gcs",[YP]:"fire-gcs-compat",[XP]:"fire-fst",[JP]:"fire-fst-compat","fire-js":"fire-js",[ZP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map,Bh=new Map;function nx(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function No(t){const e=t.name;if(Bh.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;Bh.set(e,t);for(const n of Xu.values())nx(n,t);return!0}function Sm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new Ha("app","Firebase",rx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=ex;function cE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$h,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=oE()),!n)throw Pr.create("no-options");const o=Xu.get(i);if(o){if(Yu(n,o.options)&&Yu(r,o.config))return o;throw Pr.create("duplicate-app",{appName:i})}const s=new dP(i);for(const l of Bh.values())s.addComponent(l);const a=new ix(n,r,s);return Xu.set(i,a),a}function fE(t=$h){const e=Xu.get(t);if(!e&&t===$h&&oE())return cE();if(!e)throw Pr.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=tx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}No(new Ci(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="firebase-heartbeat-database",sx=1,pa="firebase-heartbeat-store";let Id=null;function dE(){return Id||(Id=kP(ox,sx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Id}async function ax(t){try{const n=(await dE()).transaction(pa),r=await n.objectStore(pa).get(hE(t));return await n.done,r}catch(e){if(e instanceof Xn)Pi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function Jy(t,e){try{const r=(await dE()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,hE(t)),await r.done}catch(n){if(n instanceof Xn)Pi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=1024,ux=30*24*60*60*1e3;class cx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=ux}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:r,unsentEntries:i}=fx(this._heartbeatsCache.heartbeats),o=Qu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Zy(){return new Date().toISOString().substring(0,10)}function fx(t,e=lx){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ew(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ew(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aE()?tP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ax(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ew(t){return Qu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){No(new Ci("platform-logger",e=>new CP(e),"PRIVATE")),No(new Ci("heartbeat",e=>new cx(e),"PRIVATE")),xr(Uh,Xy,t),xr(Uh,Xy,"esm2017"),xr("fire-js","")}hx("");var px="firebase",mx="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr(px,mx,"app");var gx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,km=km||{},q=gx||self;function Hc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vx(t){return Object.prototype.hasOwnProperty.call(t,Td)&&t[Td]||(t[Td]=++yx)}var Td="closure_uid_"+(1e9*Math.random()>>>0),yx=0;function wx(t,e,n){return t.call.apply(t.bind,arguments)}function _x(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=wx:dt=_x,dt.apply(null,arguments)}function Ul(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function Kr(){this.s=this.s,this.o=this.o}var Ex=0;Kr.prototype.s=!1;Kr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ex!=0)&&vx(this)};Kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Am(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function tw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Hc(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ix=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};q.addEventListener("test",n,e),q.removeEventListener("test",n,e)}catch{}return t}();function ma(t){return/^[\s\xa0]*$/.test(t)}function Wc(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Wc().indexOf(t)!=-1}function bm(t){return bm[" "](t),t}bm[" "]=function(){};function Tx(t,e){var n=mR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Sx=mn("Opera"),Oo=mn("Trident")||mn("MSIE"),mE=mn("Edge"),zh=mE||Oo,gE=mn("Gecko")&&!(Wc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),kx=Wc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function vE(){var t=q.document;return t?t.documentMode:void 0}var Hh;e:{var Sd="",kd=function(){var t=Wc();if(gE)return/rv:([^\);]+)(\)|;)/.exec(t);if(mE)return/Edge\/([\d\.]+)/.exec(t);if(Oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kx)return/WebKit\/(\S+)/.exec(t);if(Sx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kd&&(Sd=kd?kd[1]:""),Oo){var Ad=vE();if(Ad!=null&&Ad>parseFloat(Sd)){Hh=String(Ad);break e}}Hh=Sd}var Wh;if(q.document&&Oo){var nw=vE();Wh=nw||parseInt(Hh,10)||void 0}else Wh=void 0;var Ax=Wh;function ga(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gE){e:{try{bm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ga.$.h.call(this)}}Qe(ga,ht);var bx={2:"touch",3:"pen",4:"mouse"};ga.prototype.h=function(){ga.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qa="closure_listenable_"+(1e6*Math.random()|0),Cx=0;function Px(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Cx,this.fa=this.ia=!1}function Kc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function xx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function yE(t){const e={};for(const n in t)e[n]=t[n];return e}const rw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<rw.length;o++)n=rw[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qc(t){this.src=t,this.g={},this.h=0}qc.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=qh(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new Px(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function Kh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pE(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qh(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var Pm="closure_lm_"+(1e6*Math.random()|0),bd={};function _E(t,e,n,r,i){if(r&&r.once)return IE(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)_E(t,e[o],n,r,i);return null}return n=Nm(n),t&&t[qa]?t.O(e,n,Ka(r)?!!r.capture:!!r,i):EE(t,e,n,!1,r,i)}function EE(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=Ka(i)?!!i.capture:!!i,a=Rm(t);if(a||(t[Pm]=a=new qc(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=Rx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Ix||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(SE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rx(){function t(n){return e.call(t.src,t.listener,n)}const e=Nx;return t}function IE(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)IE(t,e[o],n,r,i);return null}return n=Nm(n),t&&t[qa]?t.P(e,n,Ka(r)?!!r.capture:!!r,i):EE(t,e,n,!0,r,i)}function TE(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)TE(t,e[o],n,r,i);else r=Ka(r)?!!r.capture:!!r,n=Nm(n),t&&t[qa]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=qh(o,n,r,i),-1<n&&(Kc(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qh(e,n,r,i)),(n=-1<t?e[t]:null)&&xm(n))}function xm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qa])Kh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(SE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rm(e))?(Kh(n,t),n.h==0&&(n.src=null,e[Pm]=null)):Kc(t)}}}function SE(t){return t in bd?bd[t]:bd[t]="on"+t}function Nx(t,e){if(t.fa)t=!0;else{e=new ga(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xm(t),t=n.call(r,e)}return t}function Rm(t){return t=t[Pm],t instanceof qc?t:null}var Cd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nm(t){return typeof t=="function"?t:(t[Cd]||(t[Cd]=function(e){return t.handleEvent(e)}),t[Cd])}function qe(){Kr.call(this),this.i=new qc(this),this.S=this,this.J=null}Qe(qe,Kr);qe.prototype[qa]=!0;qe.prototype.removeEventListener=function(t,e,n,r){TE(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),wE(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=$l(s,r,!0,e)&&i}if(s=e.g=t,i=$l(s,r,!0,e)&&i,i=$l(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=$l(s,r,!1,e)&&i}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kc(n[r]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function $l(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&Kh(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Om=q.JSON.stringify;class Ox{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Dx(){var t=Dm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lx{constructor(){this.h=this.g=null}add(e,n){const r=kE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kE=new Ox(()=>new Mx,t=>t.reset());class Mx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Fx(t){q.setTimeout(()=>{throw t},0)}let va,ya=!1,Dm=new Lx,AE=()=>{const t=q.Promise.resolve(void 0);va=()=>{t.then(jx)}};var jx=()=>{for(var t;t=Dx();){try{t.h.call(t.g)}catch(n){Fx(n)}var e=kE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ya=!1};function Gc(t,e){qe.call(this),this.h=t||1,this.g=e||q,this.j=dt(this.qb,this),this.l=Date.now()}Qe(Gc,qe);L=Gc.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Lm(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Gc.$.N.call(this),Lm(this),delete this.g};function Mm(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function bE(t){t.g=Mm(()=>{t.g=null,t.i&&(t.i=!1,bE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ux extends Kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bE(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wa(t){Kr.call(this),this.h=t,this.g={}}Qe(wa,Kr);var iw=[];function CE(t,e,n,r){Array.isArray(n)||(n&&(iw[0]=n.toString()),n=iw);for(var i=0;i<n.length;i++){var o=_E(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function PE(t){Cm(t.g,function(e,n){this.g.hasOwnProperty(n)&&xm(e)},t),t.g={}}wa.prototype.N=function(){wa.$.N.call(this),PE(this)};wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qc(){this.g=!0}Qc.prototype.Ea=function(){this.g=!1};function $x(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var f=a[l].split("=");if(1<f.length){var p=f[0];f=f[1];var m=p.split("_");s=2<=m.length&&m[1]=="type"?s+(p+"="+f+"&"):s+(p+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function Bx(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function uo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hx(t,n)+(r?" "+r:"")})}function zx(t,e){t.info(function(){return"TIMEOUT: "+e})}Qc.prototype.info=function(){};function Hx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Om(n)}catch{return e}}var Fi={},ow=null;function Yc(){return ow=ow||new qe}Fi.Ta="serverreachability";function xE(t){ht.call(this,Fi.Ta,t)}Qe(xE,ht);function _a(t){const e=Yc();nt(e,new xE(e))}Fi.STAT_EVENT="statevent";function RE(t,e){ht.call(this,Fi.STAT_EVENT,t),this.stat=e}Qe(RE,ht);function yt(t){const e=Yc();nt(e,new RE(e,t))}Fi.Ua="timingevent";function NE(t,e){ht.call(this,Fi.Ua,t),this.size=e}Qe(NE,ht);function Ga(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Xc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},OE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vm(){}Vm.prototype.h=null;function sw(t){return t.h||(t.h=t.i())}function DE(){}var Qa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fm(){ht.call(this,"d")}Qe(Fm,ht);function jm(){ht.call(this,"c")}Qe(jm,ht);var Gh;function Jc(){}Qe(Jc,Vm);Jc.prototype.g=function(){return new XMLHttpRequest};Jc.prototype.i=function(){return{}};Gh=new Jc;function Ya(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wa(this),this.P=Wx,t=zh?125:void 0,this.V=new Gc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new LE}function LE(){this.i=null,this.g="",this.h=!1}var Wx=45e3,ME={},Qh={};L=Ya.prototype;L.setTimeout=function(t){this.P=t};function Yh(t,e,n){t.L=1,t.A=ef(Hn(e)),t.u=n,t.S=!0,VE(t,null)}function VE(t,e){t.G=Date.now(),Xa(t),t.B=Hn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),WE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new LE,t.g=d2(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ux(dt(t.Pa,t,t.g),t.O)),CE(t.U,t.g,"readystatechange",t.nb),e=t.I?yE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),_a(),$x(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const p=gn(this.g);var e=this.g.Ia();const m=this.g.da();if(!(3>p)&&(p!=3||zh||this.g&&(this.h.h||this.g.ja()||cw(this.g)))){this.J||p!=4||e==7||(e==8||0>=m?_a(3):_a(2)),Zc(this);var n=this.g.da();this.ca=n;t:if(FE(this)){var r=cw(this.g);t="";var i=r.length,o=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),$s(this);var s="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,Bx(this.j,this.v,this.B,this.m,this.W,p,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ma(a)){var f=a;break t}}f=null}if(n=f)uo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xh(this,n);else{this.i=!1,this.s=3,yt(12),fi(this),$s(this);break e}}this.S?(jE(this,p,s),zh&&this.i&&p==3&&(CE(this.U,this.V,"tick",this.mb),this.V.start())):(uo(this.j,this.m,s,null),Xh(this,s)),p==4&&fi(this),this.i&&!this.J&&(p==4?l2(this.l,this):(this.i=!1,Xa(this)))}else dR(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),fi(this),$s(this)}}}catch{}finally{}};function FE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function jE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=Kx(t,n),i==Qh){e==4&&(t.s=4,yt(14),r=!1),uo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ME){t.s=4,yt(15),uo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else uo(t.j,t.m,i,null),Xh(t,i);FE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wm(e),e.M=!0,yt(11))):(uo(t.j,t.m,n,"[Invalid Chunked Response]"),fi(t),$s(t))}L.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.o<e.length&&(Zc(this),jE(this,t,e),this.i&&t!=4&&Xa(this))}};function Kx(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Qh:(n=Number(e.substring(n,r)),isNaN(n)?ME:(r+=1,r+n>e.length?Qh:(e=e.slice(r,r+n),t.o=r+n,e)))}L.cancel=function(){this.J=!0,fi(this)};function Xa(t){t.Y=Date.now()+t.P,UE(t,t.P)}function UE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ga(dt(t.lb,t),e)}function Zc(t){t.C&&(q.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(zx(this.j,this.B),this.L!=2&&(_a(),yt(17)),fi(this),this.s=2,$s(this)):UE(this,this.Y-t)};function $s(t){t.l.H==0||t.J||l2(t.l,t)}function fi(t){Zc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lm(t.V),PE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Xh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Jh(n.i,t))){if(!t.K&&Jh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ec(n),of(n);else break e;Hm(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ga(dt(n.ib,n),6e3));if(1>=GE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((t.K||n.g==t)&&ec(n),!ma(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let f=i[e];if(n.V=f[0],f=f[1],n.H==2)if(f[0]=="c"){n.K=f[1],n.pa=f[2];const p=f[3];p!=null&&(n.ra=p,n.l.info("VER="+n.ra));const m=f[4];m!=null&&(n.Ga=m,n.l.info("SVER="+n.Ga));const g=f[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const E=t.g;if(E){const I=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var o=r.i;o.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(Um(o,o.h),o.h=null))}if(r.F){const T=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,me(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=f2(r,r.J?r.pa:null,r.Y),s.K){QE(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(Zc(a),Xa(a)),r.g=s}else s2(r);0<n.j.length&&sf(n)}else f[0]!="stop"&&f[0]!="close"||di(n,7);else n.H==3&&(f[0]=="stop"||f[0]=="close"?f[0]=="stop"?di(n,7):zm(n):f[0]!="noop"&&n.h&&n.h.Aa(f),n.A=0)}}_a(4)}catch{}}function qx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Hc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Gx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Hc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $E(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Gx(t),r=qx(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var BE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _i(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _i){this.h=t.h,Ju(this,t.j),this.s=t.s,this.g=t.g,Zu(this,t.m),this.l=t.l;var e=t.i,n=new Ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),aw(this,n),this.o=t.o}else t&&(e=String(t).match(BE))?(this.h=!1,Ju(this,e[1]||"",!0),this.s=Cs(e[2]||""),this.g=Cs(e[3]||"",!0),Zu(this,e[4]),this.l=Cs(e[5]||"",!0),aw(this,e[6]||"",!0),this.o=Cs(e[7]||"")):(this.h=!1,this.i=new Ea(null,this.h))}_i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,lw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,lw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?Jx:Xx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,eR)),t.join("")};function Hn(t){return new _i(t)}function Ju(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function aw(t,e,n){e instanceof Ea?(t.i=e,tR(t.i,t.h)):(n||(e=Ps(e,Zx)),t.i=new Ea(e,t.h))}function me(t,e,n){t.i.set(e,n)}function ef(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Yx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Yx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lw=/[#\/\?@]/g,Xx=/[#\?:]/g,Jx=/[#\?]/g,Zx=/[#\?@]/g,eR=/#/g;function Ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qr(t){t.g||(t.g=new Map,t.h=0,t.i&&Qx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Ea.prototype;L.add=function(t,e){qr(this),this.i=null,t=Wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zE(t,e){qr(t),e=Wo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function HE(t,e){return qr(t),e=Wo(t,e),t.g.has(e)}L.forEach=function(t,e){qr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};L.Z=function(t){qr(this);let e=[];if(typeof t=="string")HE(this,t)&&(e=e.concat(this.g.get(Wo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return qr(this),this.i=null,t=Wo(this,t),HE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function WE(t,e,n){zE(t,e),0<n.length&&(t.i=null,t.g.set(Wo(t,e),Am(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tR(t,e){e&&!t.j&&(qr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zE(this,r),WE(this,i,n))},t)),t.j=e}var nR=class{constructor(t,e){this.g=t,this.map=e}};function KE(t){this.l=t||rR,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rR=10;function qE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function GE(t){return t.h?1:t.g?t.g.size:0}function Jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Um(t,e){t.g?t.g.add(e):t.h=e}function QE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}KE.prototype.cancel=function(){if(this.i=YE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function YE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Am(t.i)}var iR=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function oR(){this.g=new iR}function sR(t,e,n){const r=n||"";try{$E(t,function(i,o){let s=i;Ka(i)&&(s=Om(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function aR(t,e){const n=new Qc;if(q.Image){const r=new Image;r.onload=Ul(Bl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ul(Bl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ul(Bl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ul(Bl,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function tf(t){this.l=t.ec||null,this.j=t.ob||!1}Qe(tf,Vm);tf.prototype.g=function(){return new nf(this.l,this.j)};tf.prototype.i=function(t){return function(){return t}}({});function nf(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$m,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(nf,qe);var $m=0;L=nf.prototype;L.open=function(t,e){if(this.readyState!=$m)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ia(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ja(this)),this.readyState=$m};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;XE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function XE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ja(this):Ia(this),this.readyState==3&&XE(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Ja(this))};L.Ya=function(t){this.g&&(this.response=t,Ja(this))};L.ka=function(){this.g&&Ja(this)};function Ja(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ia(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(nf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lR=q.JSON.parse;function Pe(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=JE,this.L=this.M=!1}Qe(Pe,qe);var JE="",uR=/^https?$/i,cR=["POST","PUT"];L=Pe.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gh.g(),this.C=this.u?sw(this.u):sw(Gh),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){uw(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=pE(cR,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{t2(this),0<this.B&&((this.L=fR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Mm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){uw(this,o)}};function fR(t){return Oo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof km<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function uw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ZE(t),rf(t)}function ZE(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),rf(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rf(this,!0)),Pe.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?e2(this):this.kb())};L.kb=function(){e2(this)};function e2(t){if(t.h&&typeof km<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)Mm(t.La,0,t);else if(nt(t,"readystatechange"),gn(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(BE)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!uR.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",ZE(t)}}finally{rf(t)}}}}function rf(t,e){if(t.g){t2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function t2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lR(e)}};function cw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case JE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function dR(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ma(t[r]))continue;var n=Vx(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}xx(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function n2(t){let e="";return Cm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=n2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function r2(t){this.Ga=0,this.j=[],this.l=new Qc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ys("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ys("baseRetryDelayMs",5e3,t),this.hb=ys("retryDelaySeedMs",1e4,t),this.eb=ys("forwardChannelMaxRetries",2,t),this.xa=ys("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new KE(t&&t.concurrentRequestLimit),this.Ja=new oR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=r2.prototype;L.ra=8;L.H=1;function zm(t){if(i2(t),t.H==3){var e=t.W++,n=Hn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),Za(t,n),e=new Ya(t,t.l,e),e.L=2,e.A=ef(Hn(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.A,n=!0),n||(e.g=d2(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Xa(e)}c2(t)}function of(t){t.g&&(Wm(t),t.g.cancel(),t.g=null)}function i2(t){of(t),t.u&&(q.clearTimeout(t.u),t.u=null),ec(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function sf(t){if(!qE(t.i)&&!t.m){t.m=!0;var e=t.Na;va||AE(),ya||(va(),ya=!0),Dm.add(e,t),t.C=0}}function hR(t,e){return GE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ga(dt(t.Na,t,e),u2(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ya(this,this.l,t);let o=this.s;if(this.U&&(o?(o=yE(o),wE(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=o2(this,i,e),n=Hn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),Za(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(n2(o)))+"&"+e:this.o&&Bm(n,this.o,o)),Um(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,Yh(i,n,null)):Yh(i,n,e),this.H=2}}else this.H==3&&(t?fw(this,t):this.j.length==0||qE(this.i)||fw(this))};function fw(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),Za(t,r),t.o&&t.s&&Bm(r,t.o,t.s),n=new Ya(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=o2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Um(t.i,n),Yh(n,r,e)}function Za(t,e){t.na&&Cm(t.na,function(n,r){me(e,r,n)}),t.h&&$E({},function(n,r){me(e,r,n)})}function o2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let f=i[l].g;const p=i[l].map;if(f-=o,0>f)o=Math.max(0,i[l].g-100),a=!1;else try{sR(p,s,"req"+f+"_")}catch{r&&r(p)}}if(a){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function s2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;va||AE(),ya||(va(),ya=!0),Dm.add(e,t),t.A=0}}function Hm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ga(dt(t.Ma,t),u2(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,a2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ga(dt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),of(this),a2(this))};function Wm(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function a2(t){t.g=new Ya(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),Za(t,e),t.o&&t.s&&Bm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ef(Hn(e)),n.u=null,n.S=!0,VE(n,t)}L.ib=function(){this.v!=null&&(this.v=null,of(this),Hm(this),yt(19))};function ec(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function l2(t,e){var n=null;if(t.g==e){ec(t),Wm(t),t.g=null;var r=2}else if(Jh(t.i,e))n=e.F,QE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Yc(),nt(r,new NE(r,n)),sf(t)}else s2(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&hR(t,e)||r==2&&Hm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:di(t,5);break;case 4:di(t,10);break;case 3:di(t,6);break;default:di(t,2)}}}function u2(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function di(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new _i("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ju(n,"https"),ef(n)),aR(n.toString(),r)}else yt(2);t.H=0,t.h&&t.h.za(e),c2(t),i2(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function c2(t){if(t.H=0,t.ma=[],t.h){const e=YE(t.i);(e.length!=0||t.j.length!=0)&&(tw(t.ma,e),tw(t.ma,t.j),t.i.i.length=0,Am(t.j),t.j.length=0),t.h.ya()}}function f2(t,e,n){var r=n instanceof _i?Hn(n):new _i(n);if(r.g!="")e&&(r.g=e+"."+r.g),Zu(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new _i(null);r&&Ju(o,r),e&&(o.g=e),i&&Zu(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),Za(t,r),r}function d2(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Pe(new tf({ob:n})):new Pe(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function h2(){}L=h2.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function tc(){if(Oo&&!(10<=Number(Ax)))throw Error("Environmental error: no available transport.")}tc.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){qe.call(this),this.g=new r2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ma(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ma(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ko(this)}Qe(Ft,qe);Ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=f2(t,null,t.Y),sf(t)};Ft.prototype.close=function(){zm(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Om(t),t=n);e.j.push(new nR(e.fb++,t)),e.H==3&&sf(e)};Ft.prototype.N=function(){this.g.h=null,delete this.j,zm(this.g),delete this.g,Ft.$.N.call(this)};function p2(t){Fm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(p2,Fm);function m2(){jm.call(this),this.status=1}Qe(m2,jm);function Ko(t){this.g=t}Qe(Ko,h2);Ko.prototype.Ba=function(){nt(this.g,"a")};Ko.prototype.Aa=function(t){nt(this.g,new p2(t))};Ko.prototype.za=function(t){nt(this.g,new m2)};Ko.prototype.ya=function(){nt(this.g,"b")};function pR(){this.blockSize=-1}function Tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(Tn,pR);Tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}Tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)Pd(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){Pd(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){Pd(this,r),i=0;break}}this.h=i,this.i+=e};Tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ue(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var mR={};function Km(t){return-128<=t&&128>t?Tx(t,function(e){return new ue([e|0],0>e?-1:0)}):new ue([t|0],0>t?-1:0)}function vn(t){if(isNaN(t)||!isFinite(t))return _o;if(0>t)return Ze(vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zh;return new ue(e,0)}function g2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(g2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vn(Math.pow(e,8)),r=_o,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=vn(Math.pow(e,o)),r=r.R(o).add(vn(s))):(r=r.R(n),r=r.add(vn(s)))}return r}var Zh=4294967296,_o=Km(0),ep=Km(1),dw=Km(16777216);L=ue.prototype;L.ea=function(){if(Wt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zh+r)*e,e*=Zh}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(Wt(this))return"-"+Ze(this).toString(t);for(var e=vn(Math.pow(t,6)),n=this,r="";;){var i=rc(n,e).g;n=nc(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dn(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}L.X=function(t){return t=nc(this,t),Wt(t)?-1:Dn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ue(n,~t.h).add(ep)}L.abs=function(){return Wt(this)?Ze(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new ue(n,n[n.length-1]&-2147483648?-1:0)};function nc(t,e){return t.add(Ze(e))}L.R=function(t){if(Dn(this)||Dn(t))return _o;if(Wt(this))return Wt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Wt(t))return Ze(this.R(Ze(t)));if(0>this.X(dw)&&0>t.X(dw))return vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=s*l,zl(n,2*r+2*i),n[2*r+2*i+1]+=o*l,zl(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,zl(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ue(n,0)};function zl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ws(t,e){this.g=t,this.h=e}function rc(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new ws(_o,_o);if(Wt(t))return e=rc(Ze(t),e),new ws(Ze(e.g),Ze(e.h));if(Wt(e))return e=rc(t,Ze(e)),new ws(Ze(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ep,r=e;0>=r.X(t);)n=hw(n),r=hw(r);var i=Qi(n,1),o=Qi(r,1);for(r=Qi(r,2),n=Qi(n,2);!Dn(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=Qi(r,1),n=Qi(n,1)}return e=nc(t,i.R(e)),new ws(i,e)}for(i=_o;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=vn(n),s=o.R(e);Wt(s)||0<s.X(t);)n-=r,o=vn(n),s=o.R(e);Dn(o)&&(o=ep),i=i.add(o),t=nc(t,s)}return new ws(i,t)}L.gb=function(t){return rc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ue(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ue(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ue(n,this.h^t.h)};function hw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ue(n,t.h)}function Qi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new ue(i,t.h)}tc.prototype.createWebChannel=tc.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;Xc.NO_ERROR=0;Xc.TIMEOUT=8;Xc.HTTP_ERROR=6;OE.COMPLETE="complete";DE.EventType=Qa;Qa.OPEN="a";Qa.CLOSE="b";Qa.ERROR="c";Qa.MESSAGE="d";qe.prototype.listen=qe.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Tn.prototype.digest=Tn.prototype.l;Tn.prototype.reset=Tn.prototype.reset;Tn.prototype.update=Tn.prototype.j;ue.prototype.add=ue.prototype.add;ue.prototype.multiply=ue.prototype.R;ue.prototype.modulo=ue.prototype.gb;ue.prototype.compare=ue.prototype.X;ue.prototype.toNumber=ue.prototype.ea;ue.prototype.toString=ue.prototype.toString;ue.prototype.getBits=ue.prototype.D;ue.fromNumber=vn;ue.fromString=g2;var gR=function(){return new tc},vR=function(){return Yc()},xd=Xc,yR=OE,wR=Fi,pw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hl=DE,_R=Pe,ER=ue;const mw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Im("@firebase/firestore");function _s(){return xi.logLevel}function j(t,...e){if(xi.logLevel<=ne.DEBUG){const n=e.map(qm);xi.debug(`Firestore (${qo}): ${t}`,...n)}}function Mr(t,...e){if(xi.logLevel<=ne.ERROR){const n=e.map(qm);xi.error(`Firestore (${qo}): ${t}`,...n)}}function ic(t,...e){if(xi.logLevel<=ne.WARN){const n=e.map(qm);xi.warn(`Firestore (${qo}): ${t}`,...n)}}function qm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw Mr(e),new Error(e)}function Ge(t,e){t||re()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class TR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SR{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Rr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ge(typeof r.accessToken=="string"),new v2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new ut(e)}}class kR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new bR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PR(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ke(0,0))}static max(){return new Ee(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Ta{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const xR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ta{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return xR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}function RR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ee.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Vr(i,X.empty(),e)}function NR(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(Ee.min(),X.empty(),-1)}static max(){return new Vr(Ee.max(),X.empty(),-1)}}function OR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==DR)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const f=l;n(e[f]).next(p=>{s[f]=p,++a,a===o&&r(s)},p=>i(p))}})}static doWhile(e,n){return new P((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Rr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Bs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Qm(r.target.error);this.V.reject(new Bs(e,i))}}static open(e,n,r,i){try{return new Gm(n,e.transaction(i,r))}catch(o){throw new Bs(n,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new VR(n)}}class hi{constructor(e,n,r){this.name=e,this.version=n,this.p=r,hi.S(Ve())===12.2&&Mr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!aE())return!1;if(hi.C())return!0;const e=Ve(),n=hi.S(e),r=0<n&&n<10,i=hi.v(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const s=o.target.result;n(s)},i.onblocked=()=>{r(new Bs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const s=o.target.error;s.name==="VersionError"?r(new W(R.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new W(R.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new Bs(e,s))},i.onupgradeneeded=o=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const s=o.target.result;this.p.N(s,i.transaction,o.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const o=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.O(e);const a=Gm.open(this.db,e,o?"readonly":"readwrite",r),l=i(a).next(f=>(a.g(),f)).catch(f=>(a.abort(f),P.reject(f))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,f=l.name!=="FirebaseError"&&s<3;if(j("SimpleDb","Transaction failed with error:",l.message,"Retrying:",f),this.close(),!f)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class MR{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ai(this.k.delete())}}class Bs extends W{constructor(e,n){super(R.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function af(t){return t.name==="IndexedDbTransactionError"}class VR{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ai(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),ai(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new P((s,a)=>{o.onerror=l=>{a(l.target.error)},o.onsuccess=l=>{s(l.target.result)}})}{const o=this.cursor(r),s=[];return this.G(o,(a,l)=>{s.push(l)}).next(()=>s)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((i,o)=>{r.onerror=s=>{o(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}H(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(o,s,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new P((r,i)=>{n.onerror=o=>{const s=Qm(o.target.error);i(s)},n.onsuccess=o=>{const s=o.target.result;s?e(s.primaryKey,s.value).next(a=>{a?s.continue():r()}):r()}})}G(e,n){const r=[];return new P((i,o)=>{e.onerror=s=>{o(s.target.error)},e.onsuccess=s=>{const a=s.target.result;if(!a)return void i();const l=new MR(a),f=n(a.primaryKey,a.value,l);if(f instanceof P){const p=f.catch(m=>(l.done(),P.reject(m)));r.push(p)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ai(t){return new P((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Qm(r.target.error);n(i)}})}let gw=!1;function Qm(t){const e=hi.S(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new W("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gw||(gw=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}_2._e=-1;function Ym(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function el(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wl(this.root,e,this.comparator,!0)}}class Wl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=o??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yw(this.data.getIterator())}getIteratorFrom(e){return new yw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class yw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new rn([])}unionWith(e){let n=new pt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new jR("Invalid base64 string: "+o):o}}(e);return new Wn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Wn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wn.EMPTY_BYTE_STRING=new Wn("");const UR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(Ge(!!t),typeof t=="string"){let e=0;const n=UR.exec(t);if(Ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sa(t){return typeof t=="string"?Wn.fromBase64String(t):Wn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function I2(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?I2(e):e}function sc(t){const e=Ri(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i,o,s,a,l,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=f}}class ac{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ac("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ac&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:BR(t)?9007199254740991:10:re()}function Sn(t,e){if(t===e)return!0;const n=Lo(t);if(n!==Lo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sc(t).isEqual(sc(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Ri(i.timestampValue),a=Ri(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Sa(i.bytesValue).isEqual(Sa(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Je(i.geoPointValue.latitude)===Je(o.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Je(i.integerValue)===Je(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Je(i.doubleValue),a=Je(o.doubleValue);return s===a?oc(s)===oc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(vw(s)!==vw(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Sn(s[l],a[l])))return!1;return!0}(t,e);default:return re()}}function ka(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=Lo(t),r=Lo(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Je(o.integerValue||o.doubleValue),l=Je(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ww(t.timestampValue,e.timestampValue);case 4:return ww(sc(t),sc(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Sa(o),l=Sa(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let f=0;f<a.length&&f<l.length;f++){const p=fe(a[f],l[f]);if(p!==0)return p}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=fe(Je(o.latitude),Je(s.latitude));return a!==0?a:fe(Je(o.longitude),Je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const a=o.values||[],l=s.values||[];for(let f=0;f<a.length&&f<l.length;++f){const p=Mo(a[f],l[f]);if(p)return p}return fe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Kl.mapValue&&s===Kl.mapValue)return 0;if(o===Kl.mapValue)return 1;if(s===Kl.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),f=s.fields||{},p=Object.keys(f);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const g=fe(l[m],p[m]);if(g!==0)return g;const E=Mo(a[l[m]],f[p[m]]);if(E!==0)return E}return fe(l.length,p.length)}(t.mapValue,e.mapValue);default:throw re()}}function ww(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Ri(t),r=Ri(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Vo(t){return tp(t)}function tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=tp(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${tp(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function np(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function vu(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return el(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=zs(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){el(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new nn(zs(this.value))}}function T2(t){const e=[];return el(t.fields,(n,r)=>{const i=new et([n]);if(vu(r)){const o=T2(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new tn(e,0,Ee.min(),Ee.min(),Ee.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new tn(e,1,n,Ee.min(),r,i,0)}static newNoDocument(e,n){return new tn(e,2,n,Ee.min(),Ee.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ee.min(),Ee.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.position=e,this.inclusive=n}}function _w(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=X.comparator(X.fromName(s.referenceValue),n.key):r=Mo(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ew(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n="asc"){this.field=e,this.dir=n}}function zR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{}class He extends S2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WR(e,n,r):n==="array-contains"?new GR(e,r):n==="in"?new QR(e,r):n==="not-in"?new YR(e,r):n==="array-contains-any"?new XR(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KR(e,r):new qR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&Lo(this.value)===Lo(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fr extends S2{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Fr(e,n)}matches(e){return k2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function k2(t){return t.op==="and"}function A2(t){return HR(t)&&k2(t)}function HR(t){for(const e of t.filters)if(e instanceof Fr)return!1;return!0}function rp(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Vo(t.value);if(A2(t))return t.filters.map(e=>rp(e)).join(",");{const e=t.filters.map(n=>rp(n)).join(",");return`${t.op}(${e})`}}function b2(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Sn(r.value,i.value)}(t,e):t instanceof Fr?function(r,i){return i instanceof Fr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&b2(s,i.filters[a]),!0):!1}(t,e):void re()}function C2(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Vo(n.value)}`}(t):t instanceof Fr?function(n){return n.op.toString()+" {"+n.getFilters().map(C2).join(" ,")+"}"}(t):"Filter"}class WR extends He{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class KR extends He{constructor(e,n){super(e,"in",n),this.keys=P2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qR extends He{constructor(e,n){super(e,"not-in",n),this.keys=P2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class GR extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&ka(n.arrayValue,this.value)}}class QR extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class YR extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class XR extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ce=null}}function Iw(t,e=null,n=[],r=[],i=null,o=null,s=null){return new JR(t,e,n,r,i,o,s)}function Zm(t){const e=ye(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ym(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vo(r)).join(",")),e.ce=n}return e.ce}function eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!b2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ew(t.startAt,e.startAt)&&Ew(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ZR(t,e,n,r,i,o,s,a){return new lf(t,e,n,r,i,o,s,a)}function eN(t){return new lf(t)}function Tw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tN(t){return t.collectionGroup!==null}function Hs(t){const e=ye(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new pt(et.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(a=a.add(f.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new uc(o,r))}),n.has(et.keyField().canonicalString())||e.le.push(new uc(et.keyField(),r))}return e.le}function Ei(t){const e=ye(t);return e.he||(e.he=nN(e,Hs(t))),e.he}function nN(t,e){if(t.limitType==="F")return Iw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new uc(i.field,o)});const n=t.endAt?new lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lc(t.startAt.position,t.startAt.inclusive):null;return Iw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ip(t,e,n){return new lf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function x2(t,e){return eg(Ei(t),Ei(e))&&t.limitType===e.limitType}function R2(t){return`${Zm(Ei(t))}|lt:${t.limitType}`}function Es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>C2(i)).join(", ")}]`),Ym(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vo(i)).join(",")),`Target(${r})`}(Ei(t))}; limitType=${t.limitType})`}function tg(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):X.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Hs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const f=_w(s,a,l);return s.inclusive?f<=0:f<0}(r.startAt,Hs(r),i)||r.endAt&&!function(s,a,l){const f=_w(s,a,l);return s.inclusive?f>=0:f>0}(r.endAt,Hs(r),i))}(t,e)}function rN(t){return(e,n)=>{let r=!1;for(const i of Hs(t)){const o=iN(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function iN(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),f=a.data.field(o);return l!==null&&f!==null?Mo(l,f):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){el(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return E2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new Pt(X.comparator);function cc(){return oN}const N2=new Pt(X.comparator);function ql(...t){let e=N2;for(const n of t)e=e.insert(n.key,n);return e}function O2(t){let e=N2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pi(){return Ws()}function D2(){return Ws()}function Ws(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new Pt(X.comparator),aN=new pt(X.comparator);function ft(...t){let e=aN;for(const n of t)e=e.add(n);return e}const lN=new pt(fe);function uN(){return lN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function M2(t){return{integerValue:""+t}}function cN(t,e){return FR(e)?M2(e):L2(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this._=void 0}}function fN(t,e,n){return t instanceof fc?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Xm(o)&&(o=I2(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Aa?F2(t,e):t instanceof ba?j2(t,e):function(i,o){const s=V2(i,o),a=Sw(s)+Sw(i.Ie);return np(s)&&np(i.Ie)?M2(a):L2(i.serializer,a)}(t,e)}function dN(t,e,n){return t instanceof Aa?F2(t,e):t instanceof ba?j2(t,e):n}function V2(t,e){return t instanceof dc?function(r){return np(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class fc extends uf{}class Aa extends uf{constructor(e){super(),this.elements=e}}function F2(t,e){const n=U2(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ba extends uf{constructor(e){super(),this.elements=e}}function j2(t,e){let n=U2(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class dc extends uf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Sw(t){return Je(t.integerValue||t.doubleValue)}function U2(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Aa&&i instanceof Aa||r instanceof ba&&i instanceof ba?Do(r.elements,i.elements,Sn):r instanceof dc&&i instanceof dc?Sn(r.Ie,i.Ie):r instanceof fc&&i instanceof fc}(t.transform,e.transform)}class pN{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cf{}function $2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new z2(t.key,Fn.none()):new tl(t.key,t.data,Fn.none());{const n=t.data,r=nn.empty();let i=new pt(et.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ji(t.key,r,new rn(i.toArray()),Fn.none())}}function mN(t,e,n){t instanceof tl?function(i,o,s){const a=i.value.clone(),l=Aw(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,o,s){if(!yu(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=Aw(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(B2(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof tl?function(o,s,a,l){if(!yu(o.precondition,s))return a;const f=o.value.clone(),p=bw(o.fieldTransforms,l,s);return f.setAll(p),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(o,s,a,l){if(!yu(o.precondition,s))return a;const f=bw(o.fieldTransforms,l,s),p=s.data;return p.setAll(B2(o)),p.setAll(f),s.convertToFoundDocument(s.version,p).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return yu(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function gN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=V2(r.transform,i||null);o!=null&&(n===null&&(n=nn.empty()),n.set(r.field,o))}return n||null}function kw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Do(r,i,(o,s)=>hN(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tl extends cf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends cf{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function B2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Aw(t,e,n){const r=new Map;Ge(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,dN(s,a,n[i]))}return r}function bw(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,fN(o,s,e))}return r}class z2 extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vN extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&mN(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D2();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=$2(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ft())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,r)=>kw(n,r))&&Do(this.baseMutations,e.baseMutations,(n,r)=>kw(n,r))}}class ng{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ge(e.mutations.length===r.length);let i=function(){return sN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new ng(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ie;function _N(t){switch(t){default:return re();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function EN(t){if(t===void 0)return Mr("GRPC error has no .code"),R.UNKNOWN;switch(t){case Le.OK:return R.OK;case Le.CANCELLED:return R.CANCELLED;case Le.UNKNOWN:return R.UNKNOWN;case Le.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Le.INTERNAL:return R.INTERNAL;case Le.UNAVAILABLE:return R.UNAVAILABLE;case Le.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Le.NOT_FOUND:return R.NOT_FOUND;case Le.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Le.ABORTED:return R.ABORTED;case Le.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Le.DATA_LOSS:return R.DATA_LOSS;default:return re()}}(ie=Le||(Le={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ER([4294967295,4294967295],0);class IN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function op(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SN(t,e){return op(t,e.toTimestamp())}function Eo(t){return Ge(!!t),Ee.fromTimestamp(function(n){const r=Ri(n);return new Ke(r.seconds,r.nanos)}(t))}function H2(t,e){return sp(t,e).canonicalString()}function sp(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kN(t){const e=Ce.fromString(t);return Ge(ON(e)),e}function ap(t,e){return H2(t.databaseId,e.path)}function AN(t){const e=kN(t);return e.length===4?Ce.emptyPath():CN(e)}function bN(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CN(t){return Ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cw(t,e,n){return{name:ap(t,e),fields:n.value.mapValue.fields}}function PN(t,e){let n;if(e instanceof tl)n={update:Cw(t,e.key,e.value)};else if(e instanceof z2)n={delete:ap(t,e.key)};else if(e instanceof ji)n={update:Cw(t,e.key,e.data),updateMask:NN(e.fieldMask)};else{if(!(e instanceof vN))return re();n={verify:ap(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof fc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Aa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ba)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof dc)return{fieldPath:s.field.canonicalString(),increment:a.Ie};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:SN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(Ge(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Eo(i.updateTime):Eo(o);return s.isEqual(Ee.min())&&(s=Eo(o)),new pN(s,i.transformResults||[])}(n,e))):[]}function RN(t){let e=AN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ge(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=function(m){const g=W2(m);return g instanceof Fr&&A2(g)?g.getFilters():[g]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(g=>function(I){return new uc(Yi(I.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Ym(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,E=m.values||[];return new lc(E,g)}(n.startAt));let f=null;return n.endAt&&(f=function(m){const g=!m.before,E=m.values||[];return new lc(E,g)}(n.endAt)),ZR(e,i,s,o,a,"F",l,f)}function W2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yi(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yi(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Yi(n.unaryFilter.field);return He.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Yi(n.unaryFilter.field);return He.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fr.create(n.compositeFilter.filters.map(r=>W2(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function Yi(t){return et.fromServerFormat(t.fieldPath)}function NN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ON(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.ct=e}}function LN(t){const e=RN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ip(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this._n=new VN}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Vr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class VN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(Ce.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Fo(0)}static Bn(){return new Fo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.changes=new Go(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ks(r.mutation,i,rn.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ft()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ft()){const i=pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ql();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ft()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=cc();const s=Ws(),a=function(){return Ws()}();return n.forEach((l,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof ji)?o=o.insert(f.key,f):p!==void 0?(s.set(f.key,p.mutation.getFieldMask()),Ks(p.mutation,f,p.mutation.getFieldMask(),Ke.now())):s.set(f.key,rn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((f,p)=>s.set(f,p)),n.forEach((f,p)=>{var m;return a.set(f,new jN(p,(m=s.get(f))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ws();let i=new Pt((s,a)=>s-a),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const f=n.get(l);if(f===null)return;let p=r.get(l)||rn.empty();p=a.applyToLocalView(f,p),r.set(l,p);const m=(i.get(a.batchId)||ft()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),f=l.key,p=l.value,m=D2();p.forEach(g=>{if(!o.has(g)){const E=$2(n.get(g),r.get(g));E!==null&&m.set(g,E),o=o.add(g)}}),s.push(this.documentOverlayCache.saveOverlays(e,f,m))}return P.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):P.resolve(pi());let a=-1,l=o;return s.next(f=>P.forEach(f,(p,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{l=l.insert(p,g)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,l,f,ft())).next(p=>({batchId:a,changes:O2(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ql();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ql();return this.indexManager.getCollectionParents(e,o).next(a=>P.forEach(a,l=>{const f=function(m,g){return new lf(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((m,g)=>{s=s.insert(m,g)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,f)=>{const p=f.getKey();s.get(p)===null&&(s=s.insert(p,tn.newInvalidDocument(p)))});let a=ql();return s.forEach((l,f)=>{const p=o.get(l);p!==void 0&&Ks(p.mutation,f,rn.empty(),Ke.now()),tg(n,f)&&(a=a.insert(l,f))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Eo(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:LN(i.bundledQuery),readTime:Eo(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.overlays=new Pt(X.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pi();return P.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=pi(),o=n.length+1,s=new X(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,f=l.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Pt((f,p)=>f-p);const s=this.overlays.getIterator();for(;s.hasNext();){const f=s.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=pi(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const a=pi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,p)=>a.set(f,p)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new wN(n,r));let o=this.hr.get(n);o===void 0&&(o=ft(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.Pr=new pt(Be.Ir),this.Tr=new pt(Be.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Be(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new Ce([])),r=new Be(n,e),i=new Be(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new Ce([])),r=new Be(n,e),i=new Be(n,e+1);let o=ft();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Be(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||fe(e.pr,n.pr)}static Er(e,n){return fe(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new pt(Be.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yN(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.wr=this.wr.add(new Be(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(s)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const a=this.Sr(s.pr);o.push(a)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(fe);return n.forEach(i=>{const o=new Be(i,0),s=new Be(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const s=new Be(new X(o),0);let a=new pt(fe);return this.wr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(a=a.add(l.pr)),!0)},s),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ge(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,i=>{const o=new Be(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Be(n,0),i=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.vr=e,this.docs=function(){return new Pt(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let r=cc();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():tn.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=cc();const s=n.path,a=new X(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:f,value:{document:p}}=l.getNext();if(!s.isPrefixOf(f.path))break;f.path.length>s.length+1||OR(NR(p),r)<=0||(i.has(p.key)||tg(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WN(this)}getSize(e){return P.resolve(this.size)}}class WN extends FN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.persistence=e,this.Mr=new Go(n=>Zm(n),eg),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new rg,this.targetCount=0,this.Br=Fo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Fo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.Lr={},this.overlays={},this.kr=new _2(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new KN(this),this.indexManager=new MN,this.remoteDocumentCache=function(i){return new HN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new DN(n),this.$r=new $N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new zN(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new GN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return P.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class GN extends LR{constructor(e){super(),this.currentSequenceNumber=e}}class ig{constructor(e){this.persistence=e,this.zr=new rg,this.jr=null}static Hr(e){return new ig(e)}get Jr(){if(this.jr)return this.jr;throw re()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,Ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ft(),i=ft();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new og(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eP()?8:hi.v(Ve())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new QN;return this.Ji(e,n,s).next(a=>{if(o.result=a,this.Ui)return this.Yi(e,n,s,a.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(_s()<=ne.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(_s()<=ne.DEBUG&&j("QueryEngine","Query:",Es(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(_s()<=ne.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ei(n))):P.resolve())}ji(e,n){if(Tw(n))return P.resolve(null);let r=Ei(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ip(n,null,"F"),r=Ei(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ft(...o);return this.zi.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.Zi(n,a);return this.Xi(n,f,s,l.readTime)?this.ji(e,ip(n,null,"F")):this.es(e,f,n,l)}))})))}Hi(e,n,r,i){return Tw(n)||i.isEqual(Ee.min())?P.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?P.resolve(null):(_s()<=ne.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Es(n)),this.es(e,s,n,RR(i,-1)).next(a=>a))})}Zi(e,n){let r=new pt(rN(e));return n.forEach((i,o)=>{tg(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return _s()<=ne.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Es(n)),this.zi.getDocumentsMatchingQuery(e,n,Vr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Pt(fe),this.rs=new Go(o=>Zm(o),eg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function JN(t,e,n,r){return new XN(t,e,n,r)}async function K2(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ft();for(const f of i){s.push(f.batchId);for(const p of f.mutations)l=l.add(p.key)}for(const f of o){a.push(f.batchId);for(const p of f.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(r,l).next(f=>({us:f,removedBatchIds:s,addedBatchIds:a}))})})}function ZN(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,f,p){const m=f.batch,g=m.keys();let E=P.resolve();return g.forEach(I=>{E=E.next(()=>p.getEntry(l,I)).next(T=>{const C=f.docVersions.get(I);Ge(C!==null),T.version.compareTo(C)<0&&(m.applyToRemoteDocument(T,f),T.isValidDocument()&&(T.setReadTime(f.commitVersion),p.addEntry(T)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ft();for(let f=0;f<a.mutationResults.length;++f)a.mutationResults[f].transformResults.length>0&&(l=l.add(a.batch.mutations[f].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eO(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function tO(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Pw{constructor(){this.activeTargetIds=uN()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nO{constructor(){this.no=new Pw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Pw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl=null;function Rd(){return Gl===null?Gl=function(){return 268435456+Math.round(2147483648*Math.random())}():Gl++,"0x"+Gl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class sO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${o}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get wo(){return!1}So(n,r,i,o,s){const a=Rd(),l=this.bo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const f={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(f,o,s),this.Co(n,l,f,i).then(p=>(j("RestConnection",`Received RPC '${n}' ${a}: `,p),p),p=>{throw ic("RestConnection",`RPC '${n}' ${a} failed with error: `,p,"url: ",l,"request:",i),p})}vo(n,r,i,o,s,a){return this.So(n,r,i,o,s)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}bo(n,r){const i=iO[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const o=Rd();return new Promise((s,a)=>{const l=new _R;l.setWithCredentials(!0),l.listenOnce(yR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xd.NO_ERROR:const p=l.getResponseJson();j(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),s(p);break;case xd.TIMEOUT:j(at,`RPC '${e}' ${o} timed out`),a(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case xd.HTTP_ERROR:const m=l.getStatus();if(j(at,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const I=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(w)>=0?w:R.UNKNOWN}(E.status);a(new W(I,E.message))}else a(new W(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(R.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{j(at,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);j(at,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",f,r,15)})}Fo(e,n,r){const i=Rd(),o=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=gR(),a=vR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const p=o.join("");j(at,`Creating RPC '${e}' stream ${i}: ${p}`,l);const m=s.createWebChannel(p,l);let g=!1,E=!1;const I=new oO({lo:C=>{E?j(at,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(g||(j(at,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),j(at,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},ho:()=>m.close()}),T=(C,w,v)=>{C.listen(w,_=>{try{v(_)}catch(k){setTimeout(()=>{throw k},0)}})};return T(m,Hl.EventType.OPEN,()=>{E||j(at,`RPC '${e}' stream ${i} transport opened.`)}),T(m,Hl.EventType.CLOSE,()=>{E||(E=!0,j(at,`RPC '${e}' stream ${i} transport closed`),I.Vo())}),T(m,Hl.EventType.ERROR,C=>{E||(E=!0,ic(at,`RPC '${e}' stream ${i} transport errored:`,C),I.Vo(new W(R.UNAVAILABLE,"The operation could not be completed")))}),T(m,Hl.EventType.MESSAGE,C=>{var w;if(!E){const v=C.data[0];Ge(!!v);const _=v,k=_.error||((w=_[0])===null||w===void 0?void 0:w.error);if(k){j(at,`RPC '${e}' stream ${i} received error:`,k);const x=k.status;let D=function(Y){const G=Le[Y];if(G!==void 0)return EN(G)}(x),M=k.message;D===void 0&&(D=R.INTERNAL,M="Unknown error status: "+x+" with message "+k.message),E=!0,I.Vo(new W(D,M)),m.close()}else j(at,`RPC '${e}' stream ${i} received:`,v),I.mo(v)}}),T(a,wR.STAT_EVENT,C=>{C.stat===pw.PROXY?j(at,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===pw.NOPROXY&&j(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function Nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){return new IN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i,o,s,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new q2(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Mr(n.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new W(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lO extends aO{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=xN(e.writeResults,e.commitTime),r=Eo(e.commitTime);return this.listener.T_(r,n)}return Ge(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=bN(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PN(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.So(e,sp(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(R.UNKNOWN,o.toString())})}vo(e,n,r,i,o){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,sp(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(R.UNKNOWN,s.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class cO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Mr(n),this.g_=!1):j("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=o,this.M_.io(s=>{r.enqueueAndForget(async()=>{rl(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=ye(l);f.v_.add(4),await nl(f),f.x_.set("Unknown"),f.v_.delete(4),await df(f)}(this))})}),this.x_=new cO(r,i)}}async function df(t){if(rl(t))for(const e of t.F_)await e(!0)}async function nl(t){for(const e of t.F_)await e(!1)}function rl(t){return ye(t).v_.size===0}async function G2(t,e,n){if(!af(e))throw e;t.v_.add(1),await nl(t),t.x_.set("Offline"),n||(n=()=>eO(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await df(t)})}function Q2(t,e){return e().catch(n=>G2(t,n,e))}async function hf(t){const e=ye(t),n=jr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;dO(e);)try{const i=await tO(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,hO(e,i)}catch(i){await G2(e,i)}Y2(e)&&X2(e)}function dO(t){return rl(t)&&t.D_.length<10}function hO(t,e){t.D_.push(e);const n=jr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Y2(t){return rl(t)&&!jr(t).Ho()&&t.D_.length>0}function X2(t){jr(t).start()}async function pO(t){jr(t).d_()}async function mO(t){const e=jr(t);for(const n of t.D_)e.I_(n.mutations)}async function gO(t,e,n){const r=t.D_.shift(),i=ng.from(r,e,n);await Q2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hf(t)}async function vO(t,e){e&&jr(t).P_&&await async function(r,i){if(function(s){return _N(s)&&s!==R.ABORTED}(i.code)){const o=r.D_.shift();jr(r).Zo(),await Q2(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await hf(r)}}(t,e),Y2(t)&&X2(t)}async function Rw(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=rl(n);n.v_.add(3),await nl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await df(n)}async function yO(t,e){const n=ye(t);e?(n.v_.delete(2),await df(n)):e||(n.v_.add(2),await nl(n),n.x_.set("Unknown"))}function jr(t){return t.B_||(t.B_=function(n,r,i){const o=ye(n);return o.R_(),new lO(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:pO.bind(null,t),To:vO.bind(null,t),E_:mO.bind(null,t),T_:gO.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await hf(t)):(await t.B_.stop(),t.D_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new sg(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J2(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),af(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}class wO{constructor(){this.queries=new Go(e=>R2(e),x2),this.onlineState="Unknown",this.K_=new Set}}function _O(t){t.K_.forEach(e=>{e.next()})}class EO{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Go(a=>R2(a),x2),this.pa=new Map,this.ya=new Set,this.wa=new Pt(X.comparator),this.Sa=new Map,this.ba=new rg,this.Da={},this.Ca=new Map,this.va=Fo.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function IO(t,e,n){const r=AO(t);try{const i=await function(s,a){const l=ye(s),f=Ke.now(),p=a.reduce((E,I)=>E.add(I.key),ft());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let I=cc(),T=ft();return l.os.getEntries(E,p).next(C=>{I=C,I.forEach((w,v)=>{v.isValidDocument()||(T=T.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,I)).next(C=>{m=C;const w=[];for(const v of a){const _=gN(v,m.get(v.key).overlayedDocument);_!=null&&w.push(new ji(v.key,_,T2(_.value.mapValue),Fn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,f,w,a)}).next(C=>{g=C;const w=C.applyToLocalDocumentSet(m,T);return l.documentOverlayCache.saveOverlays(E,C.batchId,w)})}).then(()=>({batchId:g.batchId,changes:O2(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let f=s.Da[s.currentUser.toKey()];f||(f=new Pt(fe)),f=f.insert(a,l),s.Da[s.currentUser.toKey()]=f}(r,i.batchId,n),await pf(r,i.changes),await hf(r.remoteStore)}catch(i){const o=J2(i,"Failed to persist write");n.reject(o)}}function Nw(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((o,s)=>{const a=s.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ye(s);l.onlineState=a;let f=!1;l.queries.forEach((p,m)=>{for(const g of m.Q_)g.U_(a)&&(f=!0)}),f&&_O(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TO(t,e){const n=ye(t),r=e.batch.batchId;try{const i=await ZN(n.localStore,e);eI(n,r,null),Z2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pf(n,i)}catch(i){await w2(i)}}async function SO(t,e,n){const r=ye(t);try{const i=await function(s,a){const l=ye(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return l.mutationQueue.lookupMutationBatch(f,a).next(m=>(Ge(m!==null),p=m.keys(),l.mutationQueue.removeMutationBatch(f,m))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,p,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>l.localDocuments.getDocuments(f,p))})}(r.localStore,e);eI(r,e,n),Z2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pf(r,i)}catch(i){await w2(i)}}function Z2(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function eI(t,e,n){const r=ye(t);let i=r.Da[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function pf(t,e,n){const r=ye(t),i=[],o=[],s=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{s.push(r.Ma(l,e,n).then(f=>{if((f||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,f!=null&&f.fromCache?"not-current":"current"),f){i.push(f);const p=og.Ki(l.targetId,f);o.push(p)}}))}),await Promise.all(s),r.fa.u_(i),await async function(l,f){const p=ye(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(f,g=>P.forEach(g.qi,E=>p.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>P.forEach(g.Qi,E=>p.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!af(m))throw m;j("LocalStore","Failed to update sequence numbers: "+m)}for(const m of f){const g=m.targetId;if(!m.fromCache){const E=p.ns.get(g),I=E.snapshotVersion,T=E.withLastLimboFreeSnapshotVersion(I);p.ns=p.ns.insert(g,T)}}}(r.localStore,o))}async function kO(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await K2(n.localStore,e);n.currentUser=e,function(o,s){o.Ca.forEach(a=>{a.forEach(l=>{l.reject(new W(R.CANCELLED,s))})}),o.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pf(n,r.us)}}function AO(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SO.bind(null,e),e}class Ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ff(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return JN(this.persistence,new YN,e.initialUser,this.serializer)}createPersistence(e){return new qN(ig.Hr,this.serializer)}createSharedClientState(e){return new nO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kO.bind(null,this.syncEngine),await yO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wO}()}createDatastore(e){const n=ff(e.databaseInfo.databaseId),r=function(o){return new sO(o)}(e.databaseInfo);return function(o,s,a,l){return new uO(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new fO(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Nw(this.syncEngine,n,0),function(){return xw.D()?new xw:new rO}())}createSyncEngine(e,n){return function(i,o,s,a,l,f,p){const m=new EO(i,o,s,a,l,f);return p&&(m.Fa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ye(r);j("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await nl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=y2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=J2(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Od(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await K2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xO(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Rw(e.remoteStore,i)),t._onlineComponents=e}function PO(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PO(n))throw n;ic("Error using user provided cache. Falling back to memory cache: "+n),await Od(t,new Ow)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Od(t,new Ow);return t._offlineComponents}async function RO(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Dw(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Dw(t,new bO))),t._onlineComponents}function NO(t){return RO(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OO(t,e,n,r){if(e===!0&&r===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mw(t){if(!X.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vw(t){if(X.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ag(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function rI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ag(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new IR;switch(r.type){case"firstParty":return new AR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lw.get(n);r&&(j("ComponentProvider","Removing Datastore"),Lw.delete(n),r.terminate())}(this),Promise.resolve()}}function DO(t,e,n,r={}){var i;const o=(t=rI(t,mf))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&ic("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ut.MOCK_USER;else{a=GC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new W(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(f)}t._authCredentials=new TR(new v2(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lg(this.firestore,e,this._query)}}class jn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jn(this.firestore,e,this._key)}}class Nr extends lg{constructor(e,n,r){super(e,n,eN(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jn(this.firestore,null,new X(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function LO(t,e,...n){if(t=Ct(t),nI("collection","path",e),t instanceof mf){const r=Ce.fromString(e,...n);return Vw(r),new Nr(t,null,r)}{if(!(t instanceof jn||t instanceof Nr))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Vw(r),new Nr(t.firestore,null,r)}}function MO(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=y2.newId()),nI("doc","path",e),t instanceof mf){const r=Ce.fromString(e,...n);return Mw(r),new jn(t,null,new X(r))}{if(!(t instanceof jn||t instanceof Nr))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Mw(r),new jn(t.firestore,t instanceof Nr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new q2(this,"async_queue_retry"),this._u=()=>{const n=Nd();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Nd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Rr;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!af(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=sg.createAndSchedule(this,e,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&re()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class iI extends mf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new VO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sI(this),this._firestoreClient.terminate()}}function oI(t,e){const n=typeof t=="object"?t:fE(),r=typeof t=="string"?t:e||"(default)",i=Sm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=KC("firestore");o&&DO(i,...o)}return i}function FO(t){return t._firestoreClient||sI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sI(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,f,p){return new $R(a,l,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,tI(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new CO(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ca(Wn.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ca(Wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=/^__.*__$/;class UO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new tl(e,this.data,n,this.fieldTransforms)}}function cI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class ug{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Eu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new ug(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return hc(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(cI(this.du)&&jO.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class $O{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ff(e)}Su(e,n,r,i=!1){return new ug({du:e,methodName:n,wu:r,path:et.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BO(t){const e=t._freezeSettings(),n=ff(t._databaseId);return new $O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zO(t,e,n,r,i,o={}){const s=t.Su(o.merge||o.mergeFields?2:0,e,n,i);pI("Data must be an object, but it was:",s,r);const a=dI(r,s);let l,f;if(o.merge)l=new rn(s.fieldMask),f=s.fieldTransforms;else if(o.mergeFields){const p=[];for(const m of o.mergeFields){const g=HO(e,m,n);if(!s.contains(g))throw new W(R.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qO(p,g)||p.push(g)}l=new rn(p),f=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,f=s.fieldTransforms;return new UO(new nn(a),l,f)}function fI(t,e){if(hI(t=Ct(t)))return pI("Unsupported field value:",e,t),dI(t,e);if(t instanceof lI)return function(r,i){if(!cI(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=fI(a,i.gu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ke.fromDate(r);return{timestampValue:op(i.serializer,o)}}if(r instanceof Ke){const o=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:op(i.serializer,o)}}if(r instanceof uI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ca)return{bytesValue:TN(i.serializer,r._byteString)};if(r instanceof jn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.pu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:H2(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${ag(r)}`)}(t,e)}function dI(t,e){const n={};return E2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):el(t,(r,i)=>{const o=fI(i,e.Ru(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function hI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof uI||t instanceof Ca||t instanceof jn||t instanceof lI)}function pI(t,e,n){if(!hI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ag(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function HO(t,e,n){if((e=Ct(e))instanceof aI)return e._internalPath;if(typeof e=="string")return KO(t,e);throw hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const WO=new RegExp("[~\\*/\\[\\]]");function KO(t,e,n){if(e.search(WO)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new aI(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hc(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new W(R.INVALID_ARGUMENT,a+t+l)}function qO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function QO(t,e){const n=rI(t.firestore,iI),r=MO(t),i=GO(t.converter,e);return YO(n,[zO(BO(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fn.exists(!1))]).then(()=>r)}function YO(t,e){return function(r,i){const o=new Rr;return r.asyncQueue.enqueueAndForget(async()=>IO(await NO(r),i,o)),o.promise}(FO(t),e)}(function(e,n=!0){(function(i){qo=i})(Ho),No(new Ci("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new iI(new SR(r.getProvider("auth-internal")),new CR(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ac(f.options.projectId,p)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),xr(mw,"4.4.3",e),xr(mw,"4.4.3","esm2017")})();const XO={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},Qo=cE(XO);oI(Qo);function cg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JO=mI,gI=new Ha("auth","Firebase",mI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Im("@firebase/auth");function ZO(t,...e){pc.logLevel<=ne.WARN&&pc.warn(`Auth (${Ho}): ${t}`,...e)}function wu(t,...e){pc.logLevel<=ne.ERROR&&pc.error(`Auth (${Ho}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw fg(t,...e)}function En(t,...e){return fg(t,...e)}function vI(t,e,n){const r=Object.assign(Object.assign({},JO()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function eD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),vI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gI.create(t,...e)}function K(t,e,...n){if(!t)throw fg(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wu(e),new Error(e)}function Kn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tD(){return jw()==="http:"||jw()==="https:"}function jw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tD()||XC()||"connection"in navigator)?navigator.onLine:!0}function rD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=QC()||JC()}get(){return nD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new il(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return wI(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Wa(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yI.fetch()(_I(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function wI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iD),e);try{const i=new aD(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ql(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,f]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ql(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ql(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ql(t,"user-disabled",s);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw vI(t,p,f);Yt(t,p)}}catch(i){if(i instanceof Xn)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function ol(t,e,n,r,i={}){const o=await Zn(t,e,n,r,i);return"mfaPendingCredential"in o&&Yt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function _I(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dg(t.config,i):`${t.config.apiScheme}://${i}`}function sD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),oD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}function Uw(t){return t!==void 0&&t.enterprise!==void 0}class lD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uD(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function fD(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dD(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),i=hg(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:qs(Dd(i.auth_time)),issuedAtTime:qs(Dd(i.iat)),expirationTime:qs(Dd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Dd(t){return Number(t)*1e3}function hg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=rE(n);return i?JSON.parse(i):(wu("Failed to decode base64 JWT payload"),null)}catch(i){return wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hD(t){const e=hg(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&pD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pa(t,fD(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?yD(o.providerUserInfo):[],a=vD(t.providerData,s),l=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),p=l?f:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new EI(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function gD(t){const e=Ct(t);await mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yD(t){return t.map(e=>{var{providerId:n}=e,r=cg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(t,e){const n=await wI(t,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=_I(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yI.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _D(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await wD(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new xa;return r&&(K(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(K(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xa,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=cg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new EI(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Pa(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dD(this,e)}reload(){return gD(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pa(this,cD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,f,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(f=n.createdAt)!==null&&f!==void 0?f:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:_,emailVerified:k,isAnonymous:x,providerData:D,stsTokenManager:M}=n;K(_&&M,e,"internal-error");const z=xa.fromJSON(this.name,M);K(typeof _=="string",e,"internal-error"),ar(m,e.name),ar(g,e.name),K(typeof k=="boolean",e,"internal-error"),K(typeof x=="boolean",e,"internal-error"),ar(E,e.name),ar(I,e.name),ar(T,e.name),ar(C,e.name),ar(w,e.name),ar(v,e.name);const Y=new Ii({uid:_,auth:e,email:g,emailVerified:k,displayName:m,isAnonymous:x,photoURL:I,phoneNumber:E,tenantId:T,stsTokenManager:z,createdAt:w,lastLoginAt:v});return D&&Array.isArray(D)&&(Y.providerData=D.map(G=>Object.assign({},G))),C&&(Y._redirectEventId=C),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new xa;i.updateFromServerResponse(n);const o=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mc(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Map;function Mn(t){Kn(t instanceof Function,"Expected a class definition");let e=$w.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$w.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}II.type="NONE";const Bw=II;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class Io{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,o),this.fullPersistenceKey=_u("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Io(Mn(Bw),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Mn(Bw);const s=_u(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const p=await f._get(s);if(p){const m=Ii._fromJSON(e,p);f!==o&&(a=m),o=f;break}}catch{}const l=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Io(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(s)}catch{}})),new Io(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bI(e))return"Blackberry";if(CI(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||SI(e))&&!e.includes("edge/"))return"Chrome";if(AI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TI(t=Ve()){return/firefox\//i.test(t)}function pg(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SI(t=Ve()){return/crios\//i.test(t)}function kI(t=Ve()){return/iemobile/i.test(t)}function AI(t=Ve()){return/android/i.test(t)}function bI(t=Ve()){return/blackberry/i.test(t)}function CI(t=Ve()){return/webos/i.test(t)}function gf(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ED(t=Ve()){var e;return gf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ID(){return ZC()&&document.documentMode===10}function PI(t=Ve()){return gf(t)||AI(t)||CI(t)||bI(t)||/windows phone/i.test(t)||kI(t)}function TD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e=[]){let n;switch(t){case"Browser":n=zw(Ve());break;case"Worker":n=`${zw(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ho}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=6;class bD{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:AD,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hw(this),this.idTokenSubscription=new Hw(this),this.beforeStateQueue=new SD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kD(this),n=new bD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _D(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(t){return Ct(t)}class Hw{constructor(e){this.auth=e,this.observer=null,this.addObserver=sP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PD(t){vf=t}function RI(t){return vf.loadJS(t)}function xD(){return vf.recaptchaEnterpriseScript}function RD(){return vf.gapiScript}function ND(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const OD="recaptcha-enterprise",DD="NO_RECAPTCHA";class LD{constructor(e){this.type=OD,this.auth=er(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{uD(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const f=new lD(l);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,s(f.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Uw(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(f=>{s(f)}).catch(()=>{s(DD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Uw(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xD();l.length!==0&&(l+=a),RI(l).then(()=>{i(a,o,s)}).catch(f=>{s(f)})}}).catch(a=>{s(a)})})}}async function Ww(t,e,n,r=!1){const i=new LD(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function gc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ww(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ww(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e){const n=Sm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Yu(o,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function VD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FD(t,e,n){const r=er(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=NI(e),{host:s,port:a}=jD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UD()}function NI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jD(t){const e=NI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Kw(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Kw(s)}}}function Kw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function $D(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BD(t,e){return ol(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function zD(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function HD(t,e){return zD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e){return ol(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function KD(t,e){return ol(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends mg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,n,"signInWithPassword",BD);case"emailLink":return WD(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,r,"signUpPassword",$D);case"emailLink":return KD(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t,e){return ol(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="http://localhost";class Ni extends mg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=cg(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ni(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return To(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,To(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,To(e,n)}buildRequest(){const e={requestUri:qD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QD(t){const e=As(bs(t)).link,n=e?As(bs(e)).deep_link_id:null,r=As(bs(t)).deep_link_id;return(r?As(bs(r)).link:null)||r||n||e||t}class gg{constructor(e){var n,r,i,o,s,a;const l=As(bs(e)),f=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,m=GD((i=l.mode)!==null&&i!==void 0?i:null);K(f&&p&&m,"argument-error"),this.apiKey=f,this.operation=m,this.code=p,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QD(e);try{return new gg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,n){return Ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gg.parseLink(n);return K(r,"argument-error"),Ra._fromEmailAndCode(e,r.code,r.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends sl{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ni._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends sl{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends sl{constructor(){super("twitter.com")}static credential(e,n){return Ni._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t,e){return ol(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Ii._fromIdTokenResponse(e,r,i),s=qw(r);return new Oi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qw(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Xn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vc(e,n,r,i)}}function OI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,o,e,r):o})}async function XD(t,e,n=!1){const r=await Pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Pa(t,OI(r,i,e,t),n);K(o.idToken,r,"internal-error");const s=hg(o.idToken);K(s,r,"internal-error");const{sub:a}=s;return K(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e,n=!1){const r="signIn",i=await OI(t,r,e),o=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function ZD(t,e){return DI(er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t,e,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t){const e=er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function t4(t,e,n){const r=er(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&e4(r,i,n),await gc(r,i,"getOobCode",HD)}async function n4(t,e,n){const r=er(t),s=await gc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&LI(t),l}),a=await Oi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function r4(t,e,n){return ZD(Ct(t),Yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&LI(t),r})}function i4(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function o4(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function s4(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}function a4(t){return Ct(t).signOut()}const yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(){const t=Ve();return pg(t)||gf(t)}const u4=1e3,c4=10;class VI extends MI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=l4()&&TD(),this.fallbackToPolling=PI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);ID()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,c4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},u4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VI.type="LOCAL";const f4=VI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends MI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FI.type="SESSION";const jI=FI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async f=>f(n.origin,o)),l=await d4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const f=yg("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===f)switch(g.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function p4(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function m4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function v4(){return UI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="firebaseLocalStorageDb",y4=1,wc="firebaseLocalStorage",BI="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wf(t,e){return t.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function w4(){const t=indexedDB.deleteDatabase($I);return new al(t).toPromise()}function up(){const t=indexedDB.open($I,y4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wc,{keyPath:BI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wc)?e(r):(r.close(),await w4(),e(await up()))})})}async function Gw(t,e,n){const r=wf(t,!0).put({[BI]:e,value:n});return new al(r).toPromise()}async function _4(t,e){const n=wf(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function Qw(t,e){const n=wf(t,!0).delete(e);return new al(n).toPromise()}const E4=800,I4=3;class zI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>I4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yf._getInstance(v4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await m4(),!this.activeServiceWorker)return;this.sender=new h4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await Gw(e,yc,"1"),await Qw(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=wf(i,!1).getAll();return new al(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zI.type="LOCAL";const T4=zI;new il(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){return e?Mn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends mg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,n){return To(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S4(t){return DI(t.auth,new wg(t),t.bypassAuthState)}function k4(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),JD(n,new wg(t),t.bypassAuthState)}async function A4(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),XD(n,new wg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S4;case"linkViaPopup":case"linkViaRedirect":return A4;case"reauthViaPopup":case"reauthViaRedirect":return k4;default:Yt(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=new il(2e3,1e4);async function C4(t,e,n){const r=er(t);eD(t,e,vg);const i=HI(r,n);return new mi(r,"signInViaPopup",e,i).executeNotNull()}class mi extends WI{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b4.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4="pendingRedirect",Eu=new Map;class x4 extends WI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const r=await R4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R4(t,e){const n=D4(e),r=O4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function N4(t,e){Eu.set(t._key(),e)}function O4(t){return Mn(t._redirectPersistence)}function D4(t){return _u(P4,t.config.apiKey,t.name)}async function L4(t,e,n=!1){const r=er(t),i=HI(r,e),s=await new x4(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=10*60*1e3;class V4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yw(e))}saveEventToCache(e){this.cachedEventUids.add(Yw(e)),this.lastProcessedEventTime=Date.now()}}function Yw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function F4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j4(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$4=/^https?/;async function B4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await j4(t);for(const n of e)try{if(z4(n))return}catch{}Yt(t,"unauthorized-domain")}function z4(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$4.test(n))return!1;if(U4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H4=new il(3e4,6e4);function Xw(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W4(t){return new Promise((e,n)=>{var r,i,o;function s(){Xw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xw(),n(En(t,"network-request-failed"))},timeout:H4.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=In().gapi)===null||o===void 0)&&o.load)s();else{const a=ND("iframefcb");return In()[a]=()=>{gapi.load?s():n(En(t,"network-request-failed"))},RI(`${RD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Iu=null,e})}let Iu=null;function K4(t){return Iu=Iu||W4(t),Iu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=new il(5e3,15e3),G4="__/auth/iframe",Q4="emulator/auth/iframe",Y4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J4(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dg(e,Q4):`https://${t.config.authDomain}/${G4}`,r={apiKey:e.apiKey,appName:t.name,v:Ho},i=X4.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Wa(r).slice(1)}`}async function Z4(t){const e=await K4(t),n=In().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:J4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y4,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=En(t,"network-request-failed"),a=In().setTimeout(()=>{o(s)},q4.get());function l(){In().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tL=500,nL=600,rL="_blank",iL="http://localhost";class Jw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oL(t,e,n,r=tL,i=nL){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eL),{width:r.toString(),height:i.toString(),top:o,left:s}),f=Ve().toLowerCase();n&&(a=SI(f)?rL:n),TI(f)&&(e=e||iL,l.scrollbars="yes");const p=Object.entries(l).reduce((g,[E,I])=>`${g}${E}=${I},`,"");if(ED(f)&&a!=="_self")return sL(e||"",a),new Jw(null);const m=window.open(e||"",a,p);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Jw(m)}function sL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="__/auth/handler",lL="emulator/auth/handler",uL=encodeURIComponent("fac");async function Zw(t,e,n,r,i,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ho,eventId:i};if(e instanceof vg){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",oP(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(o||{}))s[p]=m}if(e instanceof sl){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(s.scopes=p.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),f=l?`#${uL}=${encodeURIComponent(l)}`:"";return`${cL(t)}?${Wa(a).slice(1)}${f}`}function cL({config:t}){return t.emulator?dg(t,lL):`https://${t.authDomain}/${aL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class fL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jI,this._completeRedirectFn=L4,this._overrideRedirectResult=N4}async _openPopup(e,n,r,i){var o;Kn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zw(e,n,r,lp(),i);return oL(e,s,yg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Zw(e,n,r,lp(),i);return p4(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Z4(e),r=new V4(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ld,{type:Ld},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ld];s!==void 0&&n(!!s),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PI()||pg()||gf()}}const dL=fL;var e0="@firebase/auth",t0="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mL(t){No(new Ci("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;K(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xI(t)},f=new CD(r,i,o,l);return VD(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),No(new Ci("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(r=>new hL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(e0,t0,pL(t)),xr(e0,t0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=5*60,vL=sE("authIdTokenMaxAge")||gL;let n0=null;const yL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vL)return;const i=n==null?void 0:n.token;n0!==i&&(n0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _f(t=fE()){const e=Sm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MD(t,{popupRedirectResolver:dL,persistence:[T4,f4,jI]}),r=sE("authTokenSyncURL");if(r){const o=yL(r);o4(n,o,()=>o(n.currentUser)),i4(n,s=>o(s))}const i=iE("auth");return i&&FD(n,`http://${i}`),n}function wL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=En("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",wL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mL("Browser");/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Na.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const r0="popstate";function _L(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:a="",hash:l=""}=Ui(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),cp("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,f=l.indexOf("#");a=f===-1?l:l.slice(0,f)}return a+"#"+(typeof o=="string"?o:_c(o))}function r(i,o){_g(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return IL(e,n,r,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _g(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EL(){return Math.random().toString(36).substr(2,8)}function i0(t,e){return{usr:t.state,key:t.key,idx:e}}function cp(t,e,n,r){return n===void 0&&(n=null),Na({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ui(e):e,{state:n,key:e&&e.key||r||EL()})}function _c(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IL(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=yr.Pop,l=null,f=p();f==null&&(f=0,s.replaceState(Na({},s.state,{idx:f}),""));function p(){return(s.state||{idx:null}).idx}function m(){a=yr.Pop;let C=p(),w=C==null?null:C-f;f=C,l&&l({action:a,location:T.location,delta:w})}function g(C,w){a=yr.Push;let v=cp(T.location,C,w);n&&n(v,C),f=p()+1;let _=i0(v,f),k=T.createHref(v);try{s.pushState(_,"",k)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(k)}o&&l&&l({action:a,location:T.location,delta:1})}function E(C,w){a=yr.Replace;let v=cp(T.location,C,w);n&&n(v,C),f=p();let _=i0(v,f),k=T.createHref(v);s.replaceState(_,"",k),o&&l&&l({action:a,location:T.location,delta:0})}function I(C){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:_c(C);return v=v.replace(/ $/,"%20"),Oe(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let T={get action(){return a},get location(){return t(i,s)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(r0,m),l=C,()=>{i.removeEventListener(r0,m),l=null}},createHref(C){return e(i,C)},createURL:I,encodeLocation(C){let w=I(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:E,go(C){return s.go(C)}};return T}var o0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(o0||(o0={}));function TL(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ui(e):e,i=Eg(r.pathname||"/",n);if(i==null)return null;let o=qI(t);SL(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=ML(i);s=OL(o[a],l)}return s}function qI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let f=Or([r,l.relativePath]),p=n.concat(l);o.children&&o.children.length>0&&(Oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),qI(o.children,e,p,f)),!(o.path==null&&!o.index)&&e.push({path:f,score:RL(f,o.index),routesMeta:p})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of GI(o.path))i(o,s,l)}),e}function GI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=GI(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kL=/^:[\w-]+$/,AL=3,bL=2,CL=1,PL=10,xL=-2,s0=t=>t==="*";function RL(t,e){let n=t.split("/"),r=n.length;return n.some(s0)&&(r+=xL),e&&(r+=bL),n.filter(i=>!s0(i)).reduce((i,o)=>i+(kL.test(o)?AL:o===""?CL:PL),r)}function NL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function OL(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,f=i==="/"?e:e.slice(i.length)||"/",p=DL({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},f);if(!p)return null;Object.assign(r,p.params);let m=a.route;o.push({params:r,pathname:Or([i,p.pathname]),pathnameBase:UL(Or([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Or([i,p.pathnameBase]))}return o}function DL(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((f,p,m)=>{let{paramName:g,isOptional:E}=p;if(g==="*"){let T=a[m]||"";s=o.slice(0,o.length-T.length).replace(/(.)\/+$/,"$1")}const I=a[m];return E&&!I?f[g]=void 0:f[g]=(I||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:s,pattern:t}}function LL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_g(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ML(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _g(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VL(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ui(t):t;return{pathname:n?n.startsWith("/")?n:FL(n,e):e,search:$L(r),hash:BL(i)}}function FL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jL(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ig(t,e){let n=jL(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Tg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ui(t):(i=Na({},t),Oe(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let l=VL(i,a),f=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(f||p)&&(l.pathname+="/"),l}const Or=t=>t.join("/").replace(/\/\/+/g,"/"),UL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$L=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QI=["post","put","patch","delete"];new Set(QI);const HL=["get",...QI];new Set(HL);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}const Sg=V.createContext(null),WL=V.createContext(null),Gr=V.createContext(null),Ef=V.createContext(null),Qr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),YI=V.createContext(null);function KL(t,e){let{relative:n}=e===void 0?{}:e;Xo()||Oe(!1);let{basename:r,navigator:i}=V.useContext(Gr),{hash:o,pathname:s,search:a}=JI(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Or([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Xo(){return V.useContext(Ef)!=null}function ll(){return Xo()||Oe(!1),V.useContext(Ef).location}function XI(t){V.useContext(Gr).static||V.useLayoutEffect(t)}function If(){let{isDataRoute:t}=V.useContext(Qr);return t?oM():qL()}function qL(){Xo()||Oe(!1);let t=V.useContext(Sg),{basename:e,future:n,navigator:r}=V.useContext(Gr),{matches:i}=V.useContext(Qr),{pathname:o}=ll(),s=JSON.stringify(Ig(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return XI(()=>{a.current=!0}),V.useCallback(function(f,p){if(p===void 0&&(p={}),!a.current)return;if(typeof f=="number"){r.go(f);return}let m=Tg(f,JSON.parse(s),o,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Or([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,s,o,t])}function JI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(Gr),{matches:i}=V.useContext(Qr),{pathname:o}=ll(),s=JSON.stringify(Ig(i,r.v7_relativeSplatPath));return V.useMemo(()=>Tg(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function GL(t,e){return QL(t,e)}function QL(t,e,n,r){Xo()||Oe(!1);let{navigator:i}=V.useContext(Gr),{matches:o}=V.useContext(Qr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let f=ll(),p;if(e){var m;let C=typeof e=="string"?Ui(e):e;l==="/"||(m=C.pathname)!=null&&m.startsWith(l)||Oe(!1),p=C}else p=f;let g=p.pathname||"/",E=g;if(l!=="/"){let C=l.replace(/^\//,"").split("/");E="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let I=TL(t,{pathname:E}),T=eM(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Or([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Or([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,r);return e&&T?V.createElement(Ef.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yr.Pop}},T):T}function YL(){let t=iM(),e=zL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const XL=V.createElement(YL,null);class JL extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Qr.Provider,{value:this.props.routeContext},V.createElement(YI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZL(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Sg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Qr.Provider,{value:e},r)}function eM(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id]));p>=0||Oe(!1),s=s.slice(0,Math.min(s.length,p+1))}let l=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:g,errors:E}=n,I=m.route.loader&&g[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||I){l=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((p,m,g)=>{let E,I=!1,T=null,C=null;n&&(E=a&&m.route.id?a[m.route.id]:void 0,T=m.route.errorElement||XL,l&&(f<0&&g===0?(sM("route-fallback",!1),I=!0,C=null):f===g&&(I=!0,C=m.route.hydrateFallbackElement||null)));let w=e.concat(s.slice(0,g+1)),v=()=>{let _;return E?_=T:I?_=C:m.route.Component?_=V.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,V.createElement(ZL,{match:m,routeContext:{outlet:p,matches:w,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?V.createElement(JL,{location:n.location,revalidation:n.revalidation,component:T,error:E,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var ZI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ZI||{}),Ec=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ec||{});function tM(t){let e=V.useContext(Sg);return e||Oe(!1),e}function nM(t){let e=V.useContext(WL);return e||Oe(!1),e}function rM(t){let e=V.useContext(Qr);return e||Oe(!1),e}function eT(t){let e=rM(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function iM(){var t;let e=V.useContext(YI),n=nM(Ec.UseRouteError),r=eT(Ec.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oM(){let{router:t}=tM(ZI.UseNavigateStable),e=eT(Ec.UseNavigateStable),n=V.useRef(!1);return XI(()=>{n.current=!0}),V.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Oa({fromRouteId:e},o)))},[t,e])}const a0={};function sM(t,e,n){!e&&!a0[t]&&(a0[t]=!0)}function Vd(t){let{to:e,replace:n,state:r,relative:i}=t;Xo()||Oe(!1);let{future:o,static:s}=V.useContext(Gr),{matches:a}=V.useContext(Qr),{pathname:l}=ll(),f=If(),p=Tg(e,Ig(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(p);return V.useEffect(()=>f(JSON.parse(m),{replace:n,state:r,relative:i}),[f,m,i,n,r]),null}function xs(t){Oe(!1)}function aM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:o,static:s=!1,future:a}=t;Xo()&&Oe(!1);let l=e.replace(/^\/*/,"/"),f=V.useMemo(()=>({basename:l,navigator:o,static:s,future:Oa({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ui(r));let{pathname:p="/",search:m="",hash:g="",state:E=null,key:I="default"}=r,T=V.useMemo(()=>{let C=Eg(p,l);return C==null?null:{location:{pathname:C,search:m,hash:g,state:E,key:I},navigationType:i}},[l,p,m,g,E,I,i]);return T==null?null:V.createElement(Gr.Provider,{value:f},V.createElement(Ef.Provider,{children:n,value:T}))}function lM(t){let{children:e,location:n}=t;return GL(fp(e),n)}new Promise(()=>{});function fp(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let o=[...e,i];if(r.type===V.Fragment){n.push.apply(n,fp(r.props.children,o));return}r.type!==xs&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=fp(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dp(){return dp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dp.apply(this,arguments)}function uM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fM(t,e){return t.button===0&&(!e||e==="_self")&&!cM(t)}const dM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hM="6";try{window.__reactRouterVersion=hM}catch{}const pM="startTransition",l0=CA[pM];function mM(t){let{basename:e,children:n,future:r,window:i}=t,o=V.useRef();o.current==null&&(o.current=_L({window:i,v5Compat:!0}));let s=o.current,[a,l]=V.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},p=V.useCallback(m=>{f&&l0?l0(()=>l(m)):l(m)},[l,f]);return V.useLayoutEffect(()=>s.listen(p),[s,p]),V.createElement(aM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const gM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:f,preventScrollReset:p,unstable_viewTransition:m}=e,g=uM(e,dM),{basename:E}=V.useContext(Gr),I,T=!1;if(typeof f=="string"&&vM.test(f)&&(I=f,gM))try{let _=new URL(window.location.href),k=f.startsWith("//")?new URL(_.protocol+f):new URL(f),x=Eg(k.pathname,E);k.origin===_.origin&&x!=null?f=x+k.search+k.hash:T=!0}catch{}let C=KL(f,{relative:i}),w=yM(f,{replace:s,state:a,target:l,preventScrollReset:p,relative:i,unstable_viewTransition:m});function v(_){r&&r(_),_.defaultPrevented||w(_)}return V.createElement("a",dp({},g,{href:I||C,onClick:T||o?r:v,ref:n,target:l}))});var u0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u0||(u0={}));var c0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(c0||(c0={}));function yM(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=If(),f=ll(),p=JI(t,{relative:s});return V.useCallback(m=>{if(fM(m,n)){m.preventDefault();let g=r!==void 0?r:_c(f)===_c(p);l(t,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[f,l,p,r,i,n,t,o,s,a])}const wM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=",tT="https://andresra13.github.io/firebase-app/assets/login-3MxNWmoB.png";var nT={exports:{}};/*!
* sweetalert2 v11.10.5
* Released under the MIT License.
*/(function(t,e){(function(n,r){t.exports=r()})(or,function(){function n(h,u,c){return u=E(u),C(h,i()?Reflect.construct(u,c||[],E(h).constructor):u.apply(h,c))}function r(h,u,c){if(i())return Reflect.construct.apply(null,arguments);var d=[null];d.push.apply(d,u);var y=new(h.bind.apply(h,d));return c&&I(y,c.prototype),y}function i(){try{var h=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(i=function(){return!!h})()}function o(h,u){var c=h==null?null:typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(c!=null){var d,y,A,F,J=[],Z=!0,ke=!1;try{if(A=(c=c.call(h)).next,u===0){if(Object(c)!==c)return;Z=!1}else for(;!(Z=(d=A.call(c)).done)&&(J.push(d.value),J.length!==u);Z=!0);}catch(us){ke=!0,y=us}finally{try{if(!Z&&c.return!=null&&(F=c.return(),Object(F)!==F))return}finally{if(ke)throw y}}return J}}function s(h,u){if(typeof h!="object"||!h)return h;var c=h[Symbol.toPrimitive];if(c!==void 0){var d=c.call(h,u||"default");if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(h)}function a(h){var u=s(h,"string");return typeof u=="symbol"?u:String(u)}function l(h){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},l(h)}function f(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function p(h,u){for(var c=0;c<u.length;c++){var d=u[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(h,a(d.key),d)}}function m(h,u,c){return u&&p(h.prototype,u),c&&p(h,c),Object.defineProperty(h,"prototype",{writable:!1}),h}function g(h,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(u&&u.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),u&&I(h,u)}function E(h){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},E(h)}function I(h,u){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,y){return d.__proto__=y,d},I(h,u)}function T(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function C(h,u){if(u&&(typeof u=="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(h)}function w(h,u){for(;!Object.prototype.hasOwnProperty.call(h,u)&&(h=E(h),h!==null););return h}function v(){return typeof Reflect<"u"&&Reflect.get?v=Reflect.get.bind():v=function(u,c,d){var y=w(u,c);if(y){var A=Object.getOwnPropertyDescriptor(y,c);return A.get?A.get.call(arguments.length<3?u:d):A.value}},v.apply(this,arguments)}function _(h,u){return D(h)||o(h,u)||z(h,u)||xt()}function k(h){return x(h)||M(h)||z(h)||G()}function x(h){if(Array.isArray(h))return Y(h)}function D(h){if(Array.isArray(h))return h}function M(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function z(h,u){if(h){if(typeof h=="string")return Y(h,u);var c=Object.prototype.toString.call(h).slice(8,-1);if(c==="Object"&&h.constructor&&(c=h.constructor.name),c==="Map"||c==="Set")return Array.from(h);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Y(h,u)}}function Y(h,u){(u==null||u>h.length)&&(u=h.length);for(var c=0,d=new Array(u);c<u;c++)d[c]=h[c];return d}function G(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(h,u){var c=Zo(h,u,"get");return bf(h,c)}function Yr(h,u,c){var d=Zo(h,u,"set");return es(h,d,c),c}function Zo(h,u,c){if(!u.has(h))throw new TypeError("attempted to "+c+" private field on non-instance");return u.get(h)}function bf(h,u){return u.get?u.get.call(h):u.value}function es(h,u,c){if(u.set)u.set.call(h,c);else{if(!u.writable)throw new TypeError("attempted to set read only private field");u.value=c}}function ts(h,u){if(u.has(h))throw new TypeError("Cannot initialize the same private elements twice on an object")}function $(h,u,c){ts(h,u),u.set(h,c)}var Q=100,O={},_e=function(){O.previousActiveElement instanceof HTMLElement?(O.previousActiveElement.focus(),O.previousActiveElement=null):document.body&&document.body.focus()},De=function(u){return new Promise(function(c){if(!u)return c();var d=window.scrollX,y=window.scrollY;O.restoreFocusTimeout=setTimeout(function(){_e(),c()},Q),window.scrollTo(d,y)})},Xr="swal2-",kn=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],S=kn.reduce(function(h,u){return h[u]=Xr+u,h},{}),An=["success","warning","info","question","error"],bn=An.reduce(function(h,u){return h[u]=Xr+u,h},{}),Fg="SweetAlert2:",Cf=function(u){return u.charAt(0).toUpperCase()+u.slice(1)},It=function(u){console.warn("".concat(Fg," ").concat(l(u)==="object"?u.join(" "):u))},Jr=function(u){console.error("".concat(Fg," ").concat(u))},jg=[],MT=function(u){jg.includes(u)||(jg.push(u),It(u))},VT=function(u,c){MT('"'.concat(u,'" is deprecated and will be removed in the next major release. Please use "').concat(c,'" instead.'))},dl=function(u){return typeof u=="function"?u():u},Pf=function(u){return u&&typeof u.toPromise=="function"},ns=function(u){return Pf(u)?u.toPromise():Promise.resolve(u)},xf=function(u){return u&&Promise.resolve(u)===u},gt=function(){return document.body.querySelector(".".concat(S.container))},rs=function(u){var c=gt();return c?c.querySelector(u):null},Rt=function(u){return rs(".".concat(u))},ae=function(){return Rt(S.popup)},is=function(){return Rt(S.icon)},FT=function(){return Rt(S["icon-content"])},Ug=function(){return Rt(S.title)},Rf=function(){return Rt(S["html-container"])},$g=function(){return Rt(S.image)},Nf=function(){return Rt(S["progress-steps"])},hl=function(){return Rt(S["validation-message"])},un=function(){return rs(".".concat(S.actions," .").concat(S.confirm))},$i=function(){return rs(".".concat(S.actions," .").concat(S.cancel))},Zr=function(){return rs(".".concat(S.actions," .").concat(S.deny))},jT=function(){return Rt(S["input-label"])},Bi=function(){return rs(".".concat(S.loader))},os=function(){return Rt(S.actions)},Bg=function(){return Rt(S.footer)},pl=function(){return Rt(S["timer-progress-bar"])},Of=function(){return Rt(S.close)},UT=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Df=function(){var u=ae();if(!u)return[];var c=u.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),d=Array.from(c).sort(function(F,J){var Z=parseInt(F.getAttribute("tabindex")||"0"),ke=parseInt(J.getAttribute("tabindex")||"0");return Z>ke?1:Z<ke?-1:0}),y=u.querySelectorAll(UT),A=Array.from(y).filter(function(F){return F.getAttribute("tabindex")!=="-1"});return k(new Set(d.concat(A))).filter(function(F){return Ot(F)})},Lf=function(){return Cn(document.body,S.shown)&&!Cn(document.body,S["toast-shown"])&&!Cn(document.body,S["no-backdrop"])},ml=function(){var u=ae();return u?Cn(u,S.toast):!1},$T=function(){var u=ae();return u?u.hasAttribute("data-loading"):!1},Nt=function(u,c){if(u.textContent="",c){var d=new DOMParser,y=d.parseFromString(c,"text/html"),A=y.querySelector("head");A&&Array.from(A.childNodes).forEach(function(J){u.appendChild(J)});var F=y.querySelector("body");F&&Array.from(F.childNodes).forEach(function(J){J instanceof HTMLVideoElement||J instanceof HTMLAudioElement?u.appendChild(J.cloneNode(!0)):u.appendChild(J)})}},Cn=function(u,c){if(!c)return!1;for(var d=c.split(/\s+/),y=0;y<d.length;y++)if(!u.classList.contains(d[y]))return!1;return!0},BT=function(u,c){Array.from(u.classList).forEach(function(d){!Object.values(S).includes(d)&&!Object.values(bn).includes(d)&&!Object.values(c.showClass||{}).includes(d)&&u.classList.remove(d)})},Bt=function(u,c,d){if(BT(u,c),c.customClass&&c.customClass[d]){if(typeof c.customClass[d]!="string"&&!c.customClass[d].forEach){It("Invalid type of customClass.".concat(d,'! Expected string or iterable object, got "').concat(l(c.customClass[d]),'"'));return}oe(u,c.customClass[d])}},gl=function(u,c){if(!c)return null;switch(c){case"select":case"textarea":case"file":return u.querySelector(".".concat(S.popup," > .").concat(S[c]));case"checkbox":return u.querySelector(".".concat(S.popup," > .").concat(S.checkbox," input"));case"radio":return u.querySelector(".".concat(S.popup," > .").concat(S.radio," input:checked"))||u.querySelector(".".concat(S.popup," > .").concat(S.radio," input:first-child"));case"range":return u.querySelector(".".concat(S.popup," > .").concat(S.range," input"));default:return u.querySelector(".".concat(S.popup," > .").concat(S.input))}},zg=function(u){if(u.focus(),u.type!=="file"){var c=u.value;u.value="",u.value=c}},Hg=function(u,c,d){!u||!c||(typeof c=="string"&&(c=c.split(/\s+/).filter(Boolean)),c.forEach(function(y){Array.isArray(u)?u.forEach(function(A){d?A.classList.add(y):A.classList.remove(y)}):d?u.classList.add(y):u.classList.remove(y)}))},oe=function(u,c){Hg(u,c,!0)},cn=function(u,c){Hg(u,c,!1)},rr=function(u,c){for(var d=Array.from(u.children),y=0;y<d.length;y++){var A=d[y];if(A instanceof HTMLElement&&Cn(A,c))return A}},ei=function(u,c,d){d==="".concat(parseInt(d))&&(d=parseInt(d)),d||parseInt(d)===0?u.style.setProperty(c,typeof d=="number"?"".concat(d,"px"):d):u.style.removeProperty(c)},$e=function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u&&(u.style.display=c)},it=function(u){u&&(u.style.display="none")},Mf=function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";u&&new MutationObserver(function(){ss(u,u.innerHTML,c)}).observe(u,{childList:!0,subtree:!0})},Wg=function(u,c,d,y){var A=u.querySelector(c);A&&A.style.setProperty(d,y)},ss=function(u,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";c?$e(u,d):it(u)},Ot=function(u){return!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length))},zT=function(){return!Ot(un())&&!Ot(Zr())&&!Ot($i())},Kg=function(u){return u.scrollHeight>u.clientHeight},qg=function(u){var c=window.getComputedStyle(u),d=parseFloat(c.getPropertyValue("animation-duration")||"0"),y=parseFloat(c.getPropertyValue("transition-duration")||"0");return d>0||y>0},Vf=function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=pl();d&&Ot(d)&&(c&&(d.style.transition="none",d.style.width="100%"),setTimeout(function(){d.style.transition="width ".concat(u/1e3,"s linear"),d.style.width="0%"},10))},HT=function(){var u=pl();if(u){var c=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";var d=parseInt(window.getComputedStyle(u).width),y=c/d*100;u.style.width="".concat(y,"%")}},Gg=function(){return typeof window>"u"||typeof document>"u"},WT=`
 <div aria-labelledby="`.concat(S.title,'" aria-describedby="').concat(S["html-container"],'" class="').concat(S.popup,`" tabindex="-1">
   <button type="button" class="`).concat(S.close,`"></button>
   <ul class="`).concat(S["progress-steps"],`"></ul>
   <div class="`).concat(S.icon,`"></div>
   <img class="`).concat(S.image,`" />
   <h2 class="`).concat(S.title,'" id="').concat(S.title,`"></h2>
   <div class="`).concat(S["html-container"],'" id="').concat(S["html-container"],`"></div>
   <input class="`).concat(S.input,'" id="').concat(S.input,`" />
   <input type="file" class="`).concat(S.file,`" />
   <div class="`).concat(S.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(S.select,'" id="').concat(S.select,`"></select>
   <div class="`).concat(S.radio,`"></div>
   <label class="`).concat(S.checkbox,`">
     <input type="checkbox" id="`).concat(S.checkbox,`" />
     <span class="`).concat(S.label,`"></span>
   </label>
   <textarea class="`).concat(S.textarea,'" id="').concat(S.textarea,`"></textarea>
   <div class="`).concat(S["validation-message"],'" id="').concat(S["validation-message"],`"></div>
   <div class="`).concat(S.actions,`">
     <div class="`).concat(S.loader,`"></div>
     <button type="button" class="`).concat(S.confirm,`"></button>
     <button type="button" class="`).concat(S.deny,`"></button>
     <button type="button" class="`).concat(S.cancel,`"></button>
   </div>
   <div class="`).concat(S.footer,`"></div>
   <div class="`).concat(S["timer-progress-bar-container"],`">
     <div class="`).concat(S["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),KT=function(){var u=gt();return u?(u.remove(),cn([document.documentElement,document.body],[S["no-backdrop"],S["toast-shown"],S["has-column"]]),!0):!1},ti=function(){O.currentInstance.resetValidationMessage()},qT=function(){var u=ae(),c=rr(u,S.input),d=rr(u,S.file),y=u.querySelector(".".concat(S.range," input")),A=u.querySelector(".".concat(S.range," output")),F=rr(u,S.select),J=u.querySelector(".".concat(S.checkbox," input")),Z=rr(u,S.textarea);c.oninput=ti,d.onchange=ti,F.onchange=ti,J.onchange=ti,Z.oninput=ti,y.oninput=function(){ti(),A.value=y.value},y.onchange=function(){ti(),A.value=y.value}},GT=function(u){return typeof u=="string"?document.querySelector(u):u},QT=function(u){var c=ae();c.setAttribute("role",u.toast?"alert":"dialog"),c.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||c.setAttribute("aria-modal","true")},YT=function(u){window.getComputedStyle(u).direction==="rtl"&&oe(gt(),S.rtl)},XT=function(u){var c=KT();if(Gg()){Jr("SweetAlert2 requires document to initialize");return}var d=document.createElement("div");d.className=S.container,c&&oe(d,S["no-transition"]),Nt(d,WT);var y=GT(u.target);y.appendChild(d),QT(u),YT(y),qT()},Ff=function(u,c){u instanceof HTMLElement?c.appendChild(u):l(u)==="object"?JT(u,c):u&&Nt(c,u)},JT=function(u,c){u.jquery?ZT(c,u):Nt(c,u.toString())},ZT=function(u,c){if(u.textContent="",0 in c)for(var d=0;d in c;d++)u.appendChild(c[d].cloneNode(!0));else u.appendChild(c.cloneNode(!0))},ni=function(){if(Gg())return!1;var h=document.createElement("div");return typeof h.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof h.style.animation<"u"?"animationend":!1}(),eS=function(u,c){var d=os(),y=Bi();!d||!y||(!c.showConfirmButton&&!c.showDenyButton&&!c.showCancelButton?it(d):$e(d),Bt(d,c,"actions"),tS(d,y,c),Nt(y,c.loaderHtml||""),Bt(y,c,"loader"))};function tS(h,u,c){var d=un(),y=Zr(),A=$i();!d||!y||!A||(jf(d,"confirm",c),jf(y,"deny",c),jf(A,"cancel",c),nS(d,y,A,c),c.reverseButtons&&(c.toast?(h.insertBefore(A,d),h.insertBefore(y,d)):(h.insertBefore(A,u),h.insertBefore(y,u),h.insertBefore(d,u))))}function nS(h,u,c,d){if(!d.buttonsStyling){cn([h,u,c],S.styled);return}oe([h,u,c],S.styled),d.confirmButtonColor&&(h.style.backgroundColor=d.confirmButtonColor,oe(h,S["default-outline"])),d.denyButtonColor&&(u.style.backgroundColor=d.denyButtonColor,oe(u,S["default-outline"])),d.cancelButtonColor&&(c.style.backgroundColor=d.cancelButtonColor,oe(c,S["default-outline"]))}function jf(h,u,c){var d=Cf(u);ss(h,c["show".concat(d,"Button")],"inline-block"),Nt(h,c["".concat(u,"ButtonText")]||""),h.setAttribute("aria-label",c["".concat(u,"ButtonAriaLabel")]||""),h.className=S[u],Bt(h,c,"".concat(u,"Button"))}var rS=function(u,c){var d=Of();d&&(Nt(d,c.closeButtonHtml||""),Bt(d,c,"closeButton"),ss(d,c.showCloseButton),d.setAttribute("aria-label",c.closeButtonAriaLabel||""))},iS=function(u,c){var d=gt();d&&(oS(d,c.backdrop),sS(d,c.position),aS(d,c.grow),Bt(d,c,"container"))};function oS(h,u){typeof u=="string"?h.style.background=u:u||oe([document.documentElement,document.body],S["no-backdrop"])}function sS(h,u){u&&(u in S?oe(h,S[u]):(It('The "position" parameter is not valid, defaulting to "center"'),oe(h,S.center)))}function aS(h,u){u&&oe(h,S["grow-".concat(u)])}var ce={innerParams:new WeakMap,domCache:new WeakMap},lS=["input","file","range","select","radio","checkbox","textarea"],uS=function(u,c){var d=ae();if(d){var y=ce.innerParams.get(u),A=!y||c.input!==y.input;lS.forEach(function(F){var J=rr(d,S[F]);J&&(dS(F,c.inputAttributes),J.className=S[F],A&&it(J))}),c.input&&(A&&cS(c),hS(c))}},cS=function(u){if(u.input){if(!xe[u.input]){Jr("Unexpected type of input! Expected ".concat(Object.keys(xe).join(" | "),', got "').concat(u.input,'"'));return}var c=Qg(u.input),d=xe[u.input](c,u);$e(c),u.inputAutoFocus&&setTimeout(function(){zg(d)})}},fS=function(u){for(var c=0;c<u.attributes.length;c++){var d=u.attributes[c].name;["id","type","value","style"].includes(d)||u.removeAttribute(d)}},dS=function(u,c){var d=gl(ae(),u);if(d){fS(d);for(var y in c)d.setAttribute(y,c[y])}},hS=function(u){var c=Qg(u.input);l(u.customClass)==="object"&&oe(c,u.customClass.input)},Uf=function(u,c){(!u.placeholder||c.inputPlaceholder)&&(u.placeholder=c.inputPlaceholder)},as=function(u,c,d){if(d.inputLabel){var y=document.createElement("label"),A=S["input-label"];y.setAttribute("for",u.id),y.className=A,l(d.customClass)==="object"&&oe(y,d.customClass.inputLabel),y.innerText=d.inputLabel,c.insertAdjacentElement("beforebegin",y)}},Qg=function(u){return rr(ae(),S[u]||S.input)},vl=function(u,c){["string","number"].includes(l(c))?u.value="".concat(c):xf(c)||It('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(l(c),'"'))},xe={};xe.text=xe.email=xe.password=xe.number=xe.tel=xe.url=xe.search=xe.date=xe["datetime-local"]=xe.time=xe.week=xe.month=function(h,u){return vl(h,u.inputValue),as(h,h,u),Uf(h,u),h.type=u.input,h},xe.file=function(h,u){return as(h,h,u),Uf(h,u),h},xe.range=function(h,u){var c=h.querySelector("input"),d=h.querySelector("output");return vl(c,u.inputValue),c.type=u.input,vl(d,u.inputValue),as(c,h,u),h},xe.select=function(h,u){if(h.textContent="",u.inputPlaceholder){var c=document.createElement("option");Nt(c,u.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,h.appendChild(c)}return as(h,h,u),h},xe.radio=function(h){return h.textContent="",h},xe.checkbox=function(h,u){var c=gl(ae(),"checkbox");c.value="1",c.checked=!!u.inputValue;var d=h.querySelector("span");return Nt(d,u.inputPlaceholder),c},xe.textarea=function(h,u){vl(h,u.inputValue),Uf(h,u),as(h,h,u);var c=function(y){return parseInt(window.getComputedStyle(y).marginLeft)+parseInt(window.getComputedStyle(y).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var d=parseInt(window.getComputedStyle(ae()).width),y=function(){if(document.body.contains(h)){var F=h.offsetWidth+c(h);F>d?ae().style.width="".concat(F,"px"):ei(ae(),"width",u.width)}};new MutationObserver(y).observe(h,{attributes:!0,attributeFilter:["style"]})}}),h};var pS=function(u,c){var d=Rf();d&&(Mf(d),Bt(d,c,"htmlContainer"),c.html?(Ff(c.html,d),$e(d,"block")):c.text?(d.textContent=c.text,$e(d,"block")):it(d),uS(u,c))},mS=function(u,c){var d=Bg();d&&(Mf(d),ss(d,c.footer,"block"),c.footer&&Ff(c.footer,d),Bt(d,c,"footer"))},gS=function(u,c){var d=ce.innerParams.get(u),y=is();if(y){if(d&&c.icon===d.icon){Xg(y,c),Yg(y,c);return}if(!c.icon&&!c.iconHtml){it(y);return}if(c.icon&&Object.keys(bn).indexOf(c.icon)===-1){Jr('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(c.icon,'"')),it(y);return}$e(y),Xg(y,c),Yg(y,c),oe(y,c.showClass&&c.showClass.icon)}},Yg=function(u,c){for(var d=0,y=Object.entries(bn);d<y.length;d++){var A=_(y[d],2),F=A[0],J=A[1];c.icon!==F&&cn(u,J)}oe(u,c.icon&&bn[c.icon]),_S(u,c),vS(),Bt(u,c,"icon")},vS=function(){var u=ae();if(u)for(var c=window.getComputedStyle(u).getPropertyValue("background-color"),d=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),y=0;y<d.length;y++)d[y].style.backgroundColor=c},yS=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,wS=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Xg=function(u,c){if(!(!c.icon&&!c.iconHtml)){var d=u.innerHTML,y="";if(c.iconHtml)y=Jg(c.iconHtml);else if(c.icon==="success")y=yS,d=d.replace(/ style=".*?"/g,"");else if(c.icon==="error")y=wS;else if(c.icon){var A={question:"?",warning:"!",info:"i"};y=Jg(A[c.icon])}d.trim()!==y.trim()&&Nt(u,y)}},_S=function(u,c){if(c.iconColor){u.style.color=c.iconColor,u.style.borderColor=c.iconColor;for(var d=0,y=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];d<y.length;d++){var A=y[d];Wg(u,A,"background-color",c.iconColor)}Wg(u,".swal2-success-ring","border-color",c.iconColor)}},Jg=function(u){return'<div class="'.concat(S["icon-content"],'">').concat(u,"</div>")},ES=function(u,c){var d=$g();if(d){if(!c.imageUrl){it(d);return}$e(d,""),d.setAttribute("src",c.imageUrl),d.setAttribute("alt",c.imageAlt||""),ei(d,"width",c.imageWidth),ei(d,"height",c.imageHeight),d.className=S.image,Bt(d,c,"image")}},IS=function(u,c){var d=gt(),y=ae();if(!(!d||!y)){if(c.toast){ei(d,"width",c.width),y.style.width="100%";var A=Bi();A&&y.insertBefore(A,is())}else ei(y,"width",c.width);ei(y,"padding",c.padding),c.color&&(y.style.color=c.color),c.background&&(y.style.background=c.background),it(hl()),TS(y,c)}},TS=function(u,c){var d=c.showClass||{};u.className="".concat(S.popup," ").concat(Ot(u)?d.popup:""),c.toast?(oe([document.documentElement,document.body],S["toast-shown"]),oe(u,S.toast)):oe(u,S.modal),Bt(u,c,"popup"),typeof c.customClass=="string"&&oe(u,c.customClass),c.icon&&oe(u,S["icon-".concat(c.icon)])},SS=function(u,c){var d=Nf();if(d){var y=c.progressSteps,A=c.currentProgressStep;if(!y||y.length===0||A===void 0){it(d);return}$e(d),d.textContent="",A>=y.length&&It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),y.forEach(function(F,J){var Z=kS(F);if(d.appendChild(Z),J===A&&oe(Z,S["active-progress-step"]),J!==y.length-1){var ke=AS(c);d.appendChild(ke)}})}},kS=function(u){var c=document.createElement("li");return oe(c,S["progress-step"]),Nt(c,u),c},AS=function(u){var c=document.createElement("li");return oe(c,S["progress-step-line"]),u.progressStepsDistance&&ei(c,"width",u.progressStepsDistance),c},bS=function(u,c){var d=Ug();d&&(Mf(d),ss(d,c.title||c.titleText,"block"),c.title&&Ff(c.title,d),c.titleText&&(d.innerText=c.titleText),Bt(d,c,"title"))},Zg=function(u,c){IS(u,c),iS(u,c),SS(u,c),gS(u,c),ES(u,c),bS(u,c),rS(u,c),pS(u,c),eS(u,c),mS(u,c);var d=ae();typeof c.didRender=="function"&&d&&c.didRender(d)},CS=function(){return Ot(ae())},ev=function(){var u;return(u=un())===null||u===void 0?void 0:u.click()},PS=function(){var u;return(u=Zr())===null||u===void 0?void 0:u.click()},xS=function(){var u;return(u=$i())===null||u===void 0?void 0:u.click()},zi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),tv=function(u){u.keydownTarget&&u.keydownHandlerAdded&&(u.keydownTarget.removeEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!1)},RS=function(u,c,d){tv(u),c.toast||(u.keydownHandler=function(y){return OS(c,y,d)},u.keydownTarget=c.keydownListenerCapture?window:ae(),u.keydownListenerCapture=c.keydownListenerCapture,u.keydownTarget.addEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!0)},$f=function(u,c){var d,y=Df();if(y.length){u=u+c,u===y.length?u=0:u===-1&&(u=y.length-1),y[u].focus();return}(d=ae())===null||d===void 0||d.focus()},nv=["ArrowRight","ArrowDown"],NS=["ArrowLeft","ArrowUp"],OS=function(u,c,d){u&&(c.isComposing||c.keyCode===229||(u.stopKeydownPropagation&&c.stopPropagation(),c.key==="Enter"?DS(c,u):c.key==="Tab"?LS(c):[].concat(nv,NS).includes(c.key)?MS(c.key):c.key==="Escape"&&VS(c,u,d)))},DS=function(u,c){if(dl(c.allowEnterKey)){var d=gl(ae(),c.input);if(u.target&&d&&u.target instanceof HTMLElement&&u.target.outerHTML===d.outerHTML){if(["textarea","file"].includes(c.input))return;ev(),u.preventDefault()}}},LS=function(u){for(var c=u.target,d=Df(),y=-1,A=0;A<d.length;A++)if(c===d[A]){y=A;break}u.shiftKey?$f(y,-1):$f(y,1),u.stopPropagation(),u.preventDefault()},MS=function(u){var c=os(),d=un(),y=Zr(),A=$i();if(!(!c||!d||!y||!A)){var F=[d,y,A];if(!(document.activeElement instanceof HTMLElement&&!F.includes(document.activeElement))){var J=nv.includes(u)?"nextElementSibling":"previousElementSibling",Z=document.activeElement;if(Z){for(var ke=0;ke<c.children.length;ke++){if(Z=Z[J],!Z)return;if(Z instanceof HTMLButtonElement&&Ot(Z))break}Z instanceof HTMLButtonElement&&Z.focus()}}}},VS=function(u,c,d){dl(c.allowEscapeKey)&&(u.preventDefault(),d(zi.esc))},Hi={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},FS=function(){var u=Array.from(document.body.children);u.forEach(function(c){c===gt()||c.contains(gt())||(c.hasAttribute("aria-hidden")&&c.setAttribute("data-previous-aria-hidden",c.getAttribute("aria-hidden")||""),c.setAttribute("aria-hidden","true"))})},rv=function(){var u=Array.from(document.body.children);u.forEach(function(c){c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")||""),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},iv=typeof window<"u"&&!!window.GestureEvent,jS=function(){if(iv&&!Cn(document.body,S.iosfix)){var u=document.body.scrollTop;document.body.style.top="".concat(u*-1,"px"),oe(document.body,S.iosfix),US()}},US=function(){var u=gt();if(u){var c;u.ontouchstart=function(d){c=$S(d)},u.ontouchmove=function(d){c&&(d.preventDefault(),d.stopPropagation())}}},$S=function(u){var c=u.target,d=gt(),y=Rf();return!d||!y||BS(u)||zS(u)?!1:c===d||!Kg(d)&&c instanceof HTMLElement&&c.tagName!=="INPUT"&&c.tagName!=="TEXTAREA"&&!(Kg(y)&&y.contains(c))},BS=function(u){return u.touches&&u.touches.length&&u.touches[0].touchType==="stylus"},zS=function(u){return u.touches&&u.touches.length>1},HS=function(){if(Cn(document.body,S.iosfix)){var u=parseInt(document.body.style.top,10);cn(document.body,S.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},WS=function(){var u=document.createElement("div");u.className=S["scrollbar-measure"],document.body.appendChild(u);var c=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),c},Wi=null,KS=function(u){Wi===null&&(document.body.scrollHeight>window.innerHeight||u==="scroll")&&(Wi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Wi+WS(),"px"))},qS=function(){Wi!==null&&(document.body.style.paddingRight="".concat(Wi,"px"),Wi=null)};function ov(h,u,c,d){ml()?av(h,d):(De(c).then(function(){return av(h,d)}),tv(O)),iv?(u.setAttribute("style","display:none !important"),u.removeAttribute("class"),u.innerHTML=""):u.remove(),Lf()&&(qS(),HS(),rv()),GS()}function GS(){cn([document.documentElement,document.body],[S.shown,S["height-auto"],S["no-backdrop"],S["toast-shown"]])}function ir(h){h=YS(h);var u=Hi.swalPromiseResolve.get(this),c=QS(this);this.isAwaitingPromise?h.isDismissed||(ls(this),u(h)):c&&u(h)}var QS=function(u){var c=ae();if(!c)return!1;var d=ce.innerParams.get(u);if(!d||Cn(c,d.hideClass.popup))return!1;cn(c,d.showClass.popup),oe(c,d.hideClass.popup);var y=gt();return cn(y,d.showClass.backdrop),oe(y,d.hideClass.backdrop),XS(u,c,d),!0};function sv(h){var u=Hi.swalPromiseReject.get(this);ls(this),u&&u(h)}var ls=function(u){u.isAwaitingPromise&&(delete u.isAwaitingPromise,ce.innerParams.get(u)||u._destroy())},YS=function(u){return typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u)},XS=function(u,c,d){var y=gt(),A=ni&&qg(c);typeof d.willClose=="function"&&d.willClose(c),A?JS(u,c,y,d.returnFocus,d.didClose):ov(u,y,d.returnFocus,d.didClose)},JS=function(u,c,d,y,A){ni&&(O.swalCloseEventFinishedCallback=ov.bind(null,u,d,y,A),c.addEventListener(ni,function(F){F.target===c&&(O.swalCloseEventFinishedCallback(),delete O.swalCloseEventFinishedCallback)}))},av=function(u,c){setTimeout(function(){typeof c=="function"&&c.bind(u.params)(),u._destroy&&u._destroy()})},Ki=function(u){var c=ae();if(c||new Il,c=ae(),!!c){var d=Bi();ml()?it(is()):ZS(c,u),$e(d),c.setAttribute("data-loading","true"),c.setAttribute("aria-busy","true"),c.focus()}},ZS=function(u,c){var d=os(),y=Bi();!d||!y||(!c&&Ot(un())&&(c=un()),$e(d),c&&(it(c),y.setAttribute("data-button-to-replace",c.className),d.insertBefore(y,c)),oe([u,d],S.loading))},ek=function(u,c){c.input==="select"||c.input==="radio"?ok(u,c):["text","email","number","tel","textarea"].some(function(d){return d===c.input})&&(Pf(c.inputValue)||xf(c.inputValue))&&(Ki(un()),sk(u,c))},tk=function(u,c){var d=u.getInput();if(!d)return null;switch(c.input){case"checkbox":return nk(d);case"radio":return rk(d);case"file":return ik(d);default:return c.inputAutoTrim?d.value.trim():d.value}},nk=function(u){return u.checked?1:0},rk=function(u){return u.checked?u.value:null},ik=function(u){return u.files&&u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null},ok=function(u,c){var d=ae();if(d){var y=function(F){c.input==="select"?ak(d,lv(F),c):c.input==="radio"&&lk(d,lv(F),c)};Pf(c.inputOptions)||xf(c.inputOptions)?(Ki(un()),ns(c.inputOptions).then(function(A){u.hideLoading(),y(A)})):l(c.inputOptions)==="object"?y(c.inputOptions):Jr("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(l(c.inputOptions)))}},sk=function(u,c){var d=u.getInput();d&&(it(d),ns(c.inputValue).then(function(y){d.value=c.input==="number"?"".concat(parseFloat(y)||0):"".concat(y),$e(d),d.focus(),u.hideLoading()}).catch(function(y){Jr("Error in inputValue promise: ".concat(y)),d.value="",$e(d),d.focus(),u.hideLoading()}))};function ak(h,u,c){var d=rr(h,S.select);if(d){var y=function(F,J,Z){var ke=document.createElement("option");ke.value=Z,Nt(ke,J),ke.selected=uv(Z,c.inputValue),F.appendChild(ke)};u.forEach(function(A){var F=A[0],J=A[1];if(Array.isArray(J)){var Z=document.createElement("optgroup");Z.label=F,Z.disabled=!1,d.appendChild(Z),J.forEach(function(ke){return y(Z,ke[1],ke[0])})}else y(d,J,F)}),d.focus()}}function lk(h,u,c){var d=rr(h,S.radio);if(d){u.forEach(function(A){var F=A[0],J=A[1],Z=document.createElement("input"),ke=document.createElement("label");Z.type="radio",Z.name=S.radio,Z.value=F,uv(F,c.inputValue)&&(Z.checked=!0);var us=document.createElement("span");Nt(us,J),us.className=S.label,ke.appendChild(Z),ke.appendChild(us),d.appendChild(ke)});var y=d.querySelectorAll("input");y.length&&y[0].focus()}}var lv=function h(u){var c=[];return u instanceof Map?u.forEach(function(d,y){var A=d;l(A)==="object"&&(A=h(A)),c.push([y,A])}):Object.keys(u).forEach(function(d){var y=u[d];l(y)==="object"&&(y=h(y)),c.push([d,y])}),c},uv=function(u,c){return!!c&&c.toString()===u.toString()},yl=void 0,uk=function(u){var c=ce.innerParams.get(u);u.disableButtons(),c.input?cv(u,"confirm"):zf(u,!0)},ck=function(u){var c=ce.innerParams.get(u);u.disableButtons(),c.returnInputValueOnDeny?cv(u,"deny"):Bf(u,!1)},fk=function(u,c){u.disableButtons(),c(zi.cancel)},cv=function(u,c){var d=ce.innerParams.get(u);if(!d.input){Jr('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Cf(c)));return}var y=u.getInput(),A=tk(u,d);d.inputValidator?dk(u,A,c):y&&!y.checkValidity()?(u.enableButtons(),u.showValidationMessage(d.validationMessage||y.validationMessage)):c==="deny"?Bf(u,A):zf(u,A)},dk=function(u,c,d){var y=ce.innerParams.get(u);u.disableInput();var A=Promise.resolve().then(function(){return ns(y.inputValidator(c,y.validationMessage))});A.then(function(F){u.enableButtons(),u.enableInput(),F?u.showValidationMessage(F):d==="deny"?Bf(u,c):zf(u,c)})},Bf=function(u,c){var d=ce.innerParams.get(u||yl);if(d.showLoaderOnDeny&&Ki(Zr()),d.preDeny){u.isAwaitingPromise=!0;var y=Promise.resolve().then(function(){return ns(d.preDeny(c,d.validationMessage))});y.then(function(A){A===!1?(u.hideLoading(),ls(u)):u.close({isDenied:!0,value:typeof A>"u"?c:A})}).catch(function(A){return dv(u||yl,A)})}else u.close({isDenied:!0,value:c})},fv=function(u,c){u.close({isConfirmed:!0,value:c})},dv=function(u,c){u.rejectPromise(c)},zf=function(u,c){var d=ce.innerParams.get(u||yl);if(d.showLoaderOnConfirm&&Ki(),d.preConfirm){u.resetValidationMessage(),u.isAwaitingPromise=!0;var y=Promise.resolve().then(function(){return ns(d.preConfirm(c,d.validationMessage))});y.then(function(A){Ot(hl())||A===!1?(u.hideLoading(),ls(u)):fv(u,typeof A>"u"?c:A)}).catch(function(A){return dv(u||yl,A)})}else fv(u,c)};function wl(){var h=ce.innerParams.get(this);if(h){var u=ce.domCache.get(this);it(u.loader),ml()?h.icon&&$e(is()):hk(u),cn([u.popup,u.actions],S.loading),u.popup.removeAttribute("aria-busy"),u.popup.removeAttribute("data-loading"),u.confirmButton.disabled=!1,u.denyButton.disabled=!1,u.cancelButton.disabled=!1}}var hk=function(u){var c=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));c.length?$e(c[0],"inline-block"):zT()&&it(u.actions)};function hv(){var h=ce.innerParams.get(this),u=ce.domCache.get(this);return u?gl(u.popup,h.input):null}function pv(h,u,c){var d=ce.domCache.get(h);u.forEach(function(y){d[y].disabled=c})}function mv(h,u){var c=ae();if(!(!c||!h))if(h.type==="radio")for(var d=c.querySelectorAll('[name="'.concat(S.radio,'"]')),y=0;y<d.length;y++)d[y].disabled=u;else h.disabled=u}function gv(){pv(this,["confirmButton","denyButton","cancelButton"],!1)}function vv(){pv(this,["confirmButton","denyButton","cancelButton"],!0)}function yv(){mv(this.getInput(),!1)}function wv(){mv(this.getInput(),!0)}function _v(h){var u=ce.domCache.get(this),c=ce.innerParams.get(this);Nt(u.validationMessage,h),u.validationMessage.className=S["validation-message"],c.customClass&&c.customClass.validationMessage&&oe(u.validationMessage,c.customClass.validationMessage),$e(u.validationMessage);var d=this.getInput();d&&(d.setAttribute("aria-invalid","true"),d.setAttribute("aria-describedby",S["validation-message"]),zg(d),oe(d,S.inputerror))}function Ev(){var h=ce.domCache.get(this);h.validationMessage&&it(h.validationMessage);var u=this.getInput();u&&(u.removeAttribute("aria-invalid"),u.removeAttribute("aria-describedby"),cn(u,S.inputerror))}var qi={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},pk=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],mk={},gk=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Iv=function(u){return Object.prototype.hasOwnProperty.call(qi,u)},Tv=function(u){return pk.indexOf(u)!==-1},Sv=function(u){return mk[u]},vk=function(u){Iv(u)||It('Unknown parameter "'.concat(u,'"'))},yk=function(u){gk.includes(u)&&It('The parameter "'.concat(u,'" is incompatible with toasts'))},wk=function(u){var c=Sv(u);c&&VT(u,c)},_k=function(u){u.backdrop===!1&&u.allowOutsideClick&&It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var c in u)vk(c),u.toast&&yk(c),wk(c)};function kv(h){var u=ae(),c=ce.innerParams.get(this);if(!u||Cn(u,c.hideClass.popup)){It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var d=Ek(h),y=Object.assign({},c,d);Zg(this,y),ce.innerParams.set(this,y),Object.defineProperties(this,{params:{value:Object.assign({},this.params,h),writable:!1,enumerable:!0}})}var Ek=function(u){var c={};return Object.keys(u).forEach(function(d){Tv(d)?c[d]=u[d]:It("Invalid parameter to update: ".concat(d))}),c};function Av(){var h=ce.domCache.get(this),u=ce.innerParams.get(this);if(!u){bv(this);return}h.popup&&O.swalCloseEventFinishedCallback&&(O.swalCloseEventFinishedCallback(),delete O.swalCloseEventFinishedCallback),typeof u.didDestroy=="function"&&u.didDestroy(),Ik(this)}var Ik=function(u){bv(u),delete u.params,delete O.keydownHandler,delete O.keydownTarget,delete O.currentInstance},bv=function(u){u.isAwaitingPromise?(Hf(ce,u),u.isAwaitingPromise=!0):(Hf(Hi,u),Hf(ce,u),delete u.isAwaitingPromise,delete u.disableButtons,delete u.enableButtons,delete u.getInput,delete u.disableInput,delete u.enableInput,delete u.hideLoading,delete u.disableLoading,delete u.showValidationMessage,delete u.resetValidationMessage,delete u.close,delete u.closePopup,delete u.closeModal,delete u.closeToast,delete u.rejectPromise,delete u.update,delete u._destroy)},Hf=function(u,c){for(var d in u)u[d].delete(c)},Tk=Object.freeze({__proto__:null,_destroy:Av,close:ir,closeModal:ir,closePopup:ir,closeToast:ir,disableButtons:vv,disableInput:wv,disableLoading:wl,enableButtons:gv,enableInput:yv,getInput:hv,handleAwaitingPromise:ls,hideLoading:wl,rejectPromise:sv,resetValidationMessage:Ev,showValidationMessage:_v,update:kv}),Sk=function(u,c,d){u.toast?kk(u,c,d):(bk(c),Ck(c),Pk(u,c,d))},kk=function(u,c,d){c.popup.onclick=function(){u&&(Ak(u)||u.timer||u.input)||d(zi.close)}},Ak=function(u){return!!(u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton)},_l=!1,bk=function(u){u.popup.onmousedown=function(){u.container.onmouseup=function(c){u.container.onmouseup=function(){},c.target===u.container&&(_l=!0)}}},Ck=function(u){u.container.onmousedown=function(){u.popup.onmouseup=function(c){u.popup.onmouseup=function(){},(c.target===u.popup||c.target instanceof HTMLElement&&u.popup.contains(c.target))&&(_l=!0)}}},Pk=function(u,c,d){c.container.onclick=function(y){if(_l){_l=!1;return}y.target===c.container&&dl(u.allowOutsideClick)&&d(zi.backdrop)}},xk=function(u){return l(u)==="object"&&u.jquery},Cv=function(u){return u instanceof Element||xk(u)},Rk=function(u){var c={};return l(u[0])==="object"&&!Cv(u[0])?Object.assign(c,u[0]):["title","html","icon"].forEach(function(d,y){var A=u[y];typeof A=="string"||Cv(A)?c[d]=A:A!==void 0&&Jr("Unexpected type of ".concat(d,'! Expected "string" or "Element", got ').concat(l(A)))}),c};function Nk(){for(var h=this,u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return r(h,c)}function Ok(h){var u=function(c){g(d,c);function d(){return f(this,d),n(this,d,arguments)}return m(d,[{key:"_main",value:function(A,F){return v(E(d.prototype),"_main",this).call(this,A,Object.assign({},h,F))}}]),d}(this);return u}var Dk=function(){return O.timeout&&O.timeout.getTimerLeft()},Pv=function(){if(O.timeout)return HT(),O.timeout.stop()},xv=function(){if(O.timeout){var u=O.timeout.start();return Vf(u),u}},Lk=function(){var u=O.timeout;return u&&(u.running?Pv():xv())},Mk=function(u){if(O.timeout){var c=O.timeout.increase(u);return Vf(c,!0),c}},Vk=function(){return!!(O.timeout&&O.timeout.isRunning())},Rv=!1,Wf={};function Fk(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Wf[h]=this,Rv||(document.body.addEventListener("click",jk),Rv=!0)}var jk=function(u){for(var c=u.target;c&&c!==document;c=c.parentNode)for(var d in Wf){var y=c.getAttribute(d);if(y){Wf[d].fire({template:y});return}}},Uk=Object.freeze({__proto__:null,argsToParams:Rk,bindClickHandler:Fk,clickCancel:xS,clickConfirm:ev,clickDeny:PS,enableLoading:Ki,fire:Nk,getActions:os,getCancelButton:$i,getCloseButton:Of,getConfirmButton:un,getContainer:gt,getDenyButton:Zr,getFocusableElements:Df,getFooter:Bg,getHtmlContainer:Rf,getIcon:is,getIconContent:FT,getImage:$g,getInputLabel:jT,getLoader:Bi,getPopup:ae,getProgressSteps:Nf,getTimerLeft:Dk,getTimerProgressBar:pl,getTitle:Ug,getValidationMessage:hl,increaseTimer:Mk,isDeprecatedParameter:Sv,isLoading:$T,isTimerRunning:Vk,isUpdatableParameter:Tv,isValidParameter:Iv,isVisible:CS,mixin:Ok,resumeTimer:xv,showLoading:Ki,stopTimer:Pv,toggleTimer:Lk}),$k=function(){function h(u,c){f(this,h),this.callback=u,this.remaining=c,this.running=!1,this.start()}return m(h,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(c){var d=this.running;return d&&this.stop(),this.remaining+=c,d&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),h}(),Nv=["swal-title","swal-html","swal-footer"],Bk=function(u){var c=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!c)return{};var d=c.content;Yk(d);var y=Object.assign(zk(d),Hk(d),Wk(d),Kk(d),qk(d),Gk(d),Qk(d,Nv));return y},zk=function(u){var c={},d=Array.from(u.querySelectorAll("swal-param"));return d.forEach(function(y){ri(y,["name","value"]);var A=y.getAttribute("name"),F=y.getAttribute("value");typeof qi[A]=="boolean"?c[A]=F!=="false":l(qi[A])==="object"?c[A]=JSON.parse(F):c[A]=F}),c},Hk=function(u){var c={},d=Array.from(u.querySelectorAll("swal-function-param"));return d.forEach(function(y){var A=y.getAttribute("name"),F=y.getAttribute("value");c[A]=new Function("return ".concat(F))()}),c},Wk=function(u){var c={},d=Array.from(u.querySelectorAll("swal-button"));return d.forEach(function(y){ri(y,["type","color","aria-label"]);var A=y.getAttribute("type");c["".concat(A,"ButtonText")]=y.innerHTML,c["show".concat(Cf(A),"Button")]=!0,y.hasAttribute("color")&&(c["".concat(A,"ButtonColor")]=y.getAttribute("color")),y.hasAttribute("aria-label")&&(c["".concat(A,"ButtonAriaLabel")]=y.getAttribute("aria-label"))}),c},Kk=function(u){var c={},d=u.querySelector("swal-image");return d&&(ri(d,["src","width","height","alt"]),d.hasAttribute("src")&&(c.imageUrl=d.getAttribute("src")),d.hasAttribute("width")&&(c.imageWidth=d.getAttribute("width")),d.hasAttribute("height")&&(c.imageHeight=d.getAttribute("height")),d.hasAttribute("alt")&&(c.imageAlt=d.getAttribute("alt"))),c},qk=function(u){var c={},d=u.querySelector("swal-icon");return d&&(ri(d,["type","color"]),d.hasAttribute("type")&&(c.icon=d.getAttribute("type")),d.hasAttribute("color")&&(c.iconColor=d.getAttribute("color")),c.iconHtml=d.innerHTML),c},Gk=function(u){var c={},d=u.querySelector("swal-input");d&&(ri(d,["type","label","placeholder","value"]),c.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(c.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(c.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(c.inputValue=d.getAttribute("value")));var y=Array.from(u.querySelectorAll("swal-input-option"));return y.length&&(c.inputOptions={},y.forEach(function(A){ri(A,["value"]);var F=A.getAttribute("value"),J=A.innerHTML;c.inputOptions[F]=J})),c},Qk=function(u,c){var d={};for(var y in c){var A=c[y],F=u.querySelector(A);F&&(ri(F,[]),d[A.replace(/^swal-/,"")]=F.innerHTML.trim())}return d},Yk=function(u){var c=Nv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(u.children).forEach(function(d){var y=d.tagName.toLowerCase();c.includes(y)||It("Unrecognized element <".concat(y,">"))})},ri=function(u,c){Array.from(u.attributes).forEach(function(d){c.indexOf(d.name)===-1&&It(['Unrecognized attribute "'.concat(d.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(c.length?"Allowed attributes are: ".concat(c.join(", ")):"To set the value, use HTML within the element.")])})},Ov=10,Xk=function(u){var c=gt(),d=ae();typeof u.willOpen=="function"&&u.willOpen(d);var y=window.getComputedStyle(document.body),A=y.overflowY;tA(c,d,u),setTimeout(function(){Zk(c,d)},Ov),Lf()&&(eA(c,u.scrollbarPadding,A),FS()),!ml()&&!O.previousActiveElement&&(O.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(function(){return u.didOpen(d)}),cn(c,S["no-transition"])},Jk=function h(u){var c=ae();if(!(u.target!==c||!ni)){var d=gt();c.removeEventListener(ni,h),d.style.overflowY="auto"}},Zk=function(u,c){ni&&qg(c)?(u.style.overflowY="hidden",c.addEventListener(ni,Jk)):u.style.overflowY="auto"},eA=function(u,c,d){jS(),c&&d!=="hidden"&&KS(d),setTimeout(function(){u.scrollTop=0})},tA=function(u,c,d){oe(u,d.showClass.backdrop),d.animation?(c.style.setProperty("opacity","0","important"),$e(c,"grid"),setTimeout(function(){oe(c,d.showClass.popup),c.style.removeProperty("opacity")},Ov)):$e(c,"grid"),oe([document.documentElement,document.body],S.shown),d.heightAuto&&d.backdrop&&!d.toast&&oe([document.documentElement,document.body],S["height-auto"])},Dv={email:function(u,c){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)?Promise.resolve():Promise.resolve(c||"Invalid email address")},url:function(u,c){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(c||"Invalid URL")}};function nA(h){h.inputValidator||(h.input==="email"&&(h.inputValidator=Dv.email),h.input==="url"&&(h.inputValidator=Dv.url))}function rA(h){(!h.target||typeof h.target=="string"&&!document.querySelector(h.target)||typeof h.target!="string"&&!h.target.appendChild)&&(It('Target parameter is not valid, defaulting to "body"'),h.target="body")}function iA(h){nA(h),h.showLoaderOnConfirm&&!h.preConfirm&&It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),rA(h),typeof h.title=="string"&&(h.title=h.title.split(`
`).join("<br />")),XT(h)}var fn,El=new WeakMap,Re=function(){function h(){if(f(this,h),$(this,El,{writable:!0,value:void 0}),!(typeof window>"u")){fn=this;for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var y=Object.freeze(this.constructor.argsToParams(c));this.params=y,this.isAwaitingPromise=!1,Yr(this,El,this._main(fn.params))}}return m(h,[{key:"_main",value:function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(_k(Object.assign({},d,c)),O.currentInstance){var y=Hi.swalPromiseResolve.get(O.currentInstance),A=O.currentInstance.isAwaitingPromise;O.currentInstance._destroy(),A||y({isDismissed:!0}),Lf()&&rv()}O.currentInstance=fn;var F=sA(c,d);iA(F),Object.freeze(F),O.timeout&&(O.timeout.stop(),delete O.timeout),clearTimeout(O.restoreFocusTimeout);var J=aA(fn);return Zg(fn,F),ce.innerParams.set(fn,F),oA(fn,J,F)}},{key:"then",value:function(c){return nr(this,El).then(c)}},{key:"finally",value:function(c){return nr(this,El).finally(c)}}]),h}(),oA=function(u,c,d){return new Promise(function(y,A){var F=function(Z){u.close({isDismissed:!0,dismiss:Z})};Hi.swalPromiseResolve.set(u,y),Hi.swalPromiseReject.set(u,A),c.confirmButton.onclick=function(){uk(u)},c.denyButton.onclick=function(){ck(u)},c.cancelButton.onclick=function(){fk(u,F)},c.closeButton.onclick=function(){F(zi.close)},Sk(d,c,F),RS(O,d,F),ek(u,d),Xk(d),lA(O,d,F),uA(c,d),setTimeout(function(){c.container.scrollTop=0})})},sA=function(u,c){var d=Bk(u),y=Object.assign({},qi,c,d,u);return y.showClass=Object.assign({},qi.showClass,y.showClass),y.hideClass=Object.assign({},qi.hideClass,y.hideClass),y.animation===!1&&(y.showClass={backdrop:"swal2-noanimation"},y.hideClass={}),y},aA=function(u){var c={popup:ae(),container:gt(),actions:os(),confirmButton:un(),denyButton:Zr(),cancelButton:$i(),loader:Bi(),closeButton:Of(),validationMessage:hl(),progressSteps:Nf()};return ce.domCache.set(u,c),c},lA=function(u,c,d){var y=pl();it(y),c.timer&&(u.timeout=new $k(function(){d("timer"),delete u.timeout},c.timer),c.timerProgressBar&&($e(y),Bt(y,c,"timerProgressBar"),setTimeout(function(){u.timeout&&u.timeout.running&&Vf(c.timer)})))},uA=function(u,c){if(!c.toast){if(!dl(c.allowEnterKey)){fA();return}cA(u,c)||$f(-1,1)}},cA=function(u,c){return c.focusDeny&&Ot(u.denyButton)?(u.denyButton.focus(),!0):c.focusCancel&&Ot(u.cancelButton)?(u.cancelButton.focus(),!0):c.focusConfirm&&Ot(u.confirmButton)?(u.confirmButton.focus(),!0):!1},fA=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Lv=new Date,Mv=localStorage.getItem("swal-initiation");Mv?(Lv.getTime()-Date.parse(Mv))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var h=document.createElement("audio");h.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",h.loop=!0,document.body.appendChild(h),setTimeout(function(){h.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Lv))}Re.prototype.disableButtons=vv,Re.prototype.enableButtons=gv,Re.prototype.getInput=hv,Re.prototype.disableInput=wv,Re.prototype.enableInput=yv,Re.prototype.hideLoading=wl,Re.prototype.disableLoading=wl,Re.prototype.showValidationMessage=_v,Re.prototype.resetValidationMessage=Ev,Re.prototype.close=ir,Re.prototype.closePopup=ir,Re.prototype.closeModal=ir,Re.prototype.closeToast=ir,Re.prototype.rejectPromise=sv,Re.prototype.update=kv,Re.prototype._destroy=Av,Object.assign(Re,Uk),Object.keys(Tk).forEach(function(h){Re[h]=function(){if(fn&&fn[h]){var u;return(u=fn)[h].apply(u,arguments)}return null}}),Re.DismissReason=zi,Re.version="11.10.5";var Il=Re;return Il.default=Il,Il}),typeof or<"u"&&or.Sweetalert2&&(or.swal=or.sweetAlert=or.Swal=or.SweetAlert=or.Sweetalert2),typeof document<"u"&&function(n,r){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=r);else try{i.innerHTML=r}catch{i.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(nT);var _M=nT.exports;const Gs=bp(_M),Fd=_f(Qo),EM=oI(Qo),IM=()=>{const t=If(),[e,n]=V.useState(!1),r=async o=>{o.preventDefault();const s=o.target.email.value,a=o.target.password.value;if(e)try{const f=(await n4(Fd,s,a)).user;if(o.target.nombre.value.trim()!==""){const p=LO(EM,"usuarios");await QO(p,{nombre:o.target.nombre.value,email:s,password:a})}t("/home")}catch{Gs.fire("Asegúrate de que la contraseña tenga más de 8 caracteres")}else try{await r4(Fd,s,a),t("/home")}catch{Gs.fire("El correo y/o contraseña son incorrectos")}},i=async()=>{const o=new Rn;try{const a=(await C4(Fd,o)).user;t("/home")}catch(s){console.error("Error al iniciar sesión con Google:",s)}};return b.jsxs("div",{className:"login",children:[b.jsx("div",{className:"login__border",children:b.jsxs("div",{className:"login__container",children:[b.jsx("div",{className:"logo",children:e?"SignUp":"Login"}),b.jsxs("form",{onSubmit:r,className:"signupForm",children:[e&&b.jsxs("div",{className:"input__field",children:[b.jsx("i",{className:"bx bx-user"}),b.jsx("input",{type:"text",className:"input",id:"nombre",placeholder:"Name",autoComplete:"off"})]}),b.jsxs("div",{className:"input__field",children:[b.jsx("i",{className:"bx bx-mail-send"}),b.jsx("input",{type:"email",className:"input",id:"email",placeholder:"Email",required:!0,autoComplete:"off"})]}),b.jsxs("div",{className:"input__field",children:[b.jsx("i",{className:"bx bx-lock-alt"}),b.jsx("input",{type:"password",className:"input",id:"password",placeholder:"Password",required:!0,autoComplete:"off"})]}),b.jsxs("div",{className:"three_cols",children:[b.jsxs("label",{htmlFor:"check",children:[b.jsx("input",{type:"checkbox",id:"check"}),"Recordar"]}),!e&&b.jsx(lt,{to:"/password",children:" Olvidaste la contraseña"})]}),b.jsx("div",{className:"submits",children:b.jsx("button",{children:e?"Registrate":"Inicia Sesion"})})]}),b.jsx("div",{className:"social-signin",children:b.jsxs("button",{onClick:i,className:"google",children:[" ",b.jsx("img",{src:wM,alt:""}),"Google"]})}),b.jsx("div",{className:"two__cols",children:b.jsxs("h4",{children:[e?"Si ya tienes cuenta":"No tienes cuenta",b.jsx("p",{onClick:()=>n(!e),children:e?"Login":"Registrate"})]})})]})}),b.jsx("div",{className:"login_left",children:b.jsx("img",{src:tT,alt:""})})]})},jd="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23686868'%20stroke-width='1.5'%20fill='none'%20d='m1%201%204%204%204-4'/%3e%3c/svg%3e",f0="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203v12a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a1%201%200%200%201%201-1h1V1a1%201%200%201%201%202%200v1h2V1a1%201%200%201%201%202%200v1h2V1a1%201%200%200%201%202%200v1h1a1%201%200%200%201%201%201Zm-2%203H2v1h10V6Zm0%203H2v1h10V9Zm0%203H2v1h10v-1Z'%20fill='%23726CEE'/%3e%3c/svg%3e",d0="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.667%208.667h-4v4h4v-4ZM11.334%200v1.333H4.667V0h-2v1.333h-1C.75%201.333%200%202.083%200%203v11.333C0%2015.25.75%2016%201.667%2016h12.667C15.25%2016%2016%2015.25%2016%2014.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3%2014.333H1.667V5.5h12.667v8.833Z'%20fill='%234BB1DA'/%3e%3c/svg%3e",h0="data:image/svg+xml,%3csvg%20width='13'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.408%2013.916c-3.313%200-6-1.343-6-3%200-.612.371-1.18%201-1.654V7.916a5%205%200%200%201%203.041-4.6%202%202%200%200%201%203.507-1.664%202%202%200%200%201%20.411%201.664%205.002%205.002%200%200%201%203.041%204.6v1.346c.629.474%201%201.042%201%201.654%200%201.657-2.687%203-6%203Zm0%201c.694%200%201.352-.066%201.984-.16.004.054.016.105.016.16a2%202%200%200%201-4%200c0-.055.012-.106.016-.16.633.094%201.29.16%201.984.16Z'%20fill='%23EDD556'/%3e%3c/svg%3e",p0="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200a8%208%200%201%201%200%2016A8%208%200%200%201%208%200Zm0%202.133a5.867%205.867%200%201%200%200%2011.734A5.867%205.867%200%200%200%208%202.133ZM8%203.2a4.8%204.8%200%201%201%200%209.6%204.8%204.8%200%200%201%200-9.6Zm-.533%202.667a.533.533%200%200%200-.534.533v2.133c0%20.295.24.534.534.534h3.2a.533.533%200%200%200%200-1.067H8V6.4a.533.533%200%200%200-.533-.533Z'%20fill='%238E4CB6'/%3e%3c/svg%3e",TM="https://andresra13.github.io/firebase-app/assets/ipuc-dj-pBQW_.png";function m0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m0(Object(n),!0).forEach(function(r){Ue(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ic(t){"@babel/helpers - typeof";return Ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ic(t)}function SM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function kM(t,e,n){return e&&g0(t.prototype,e),n&&g0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ue(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kg(t,e){return bM(t)||PM(t,e)||rT(t,e)||RM()}function ul(t){return AM(t)||CM(t)||rT(t)||xM()}function AM(t){if(Array.isArray(t))return hp(t)}function bM(t){if(Array.isArray(t))return t}function CM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function PM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function rT(t,e){if(t){if(typeof t=="string")return hp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hp(t,e)}}function hp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v0=function(){},Ag={},iT={},oT=null,sT={mark:v0,measure:v0};try{typeof window<"u"&&(Ag=window),typeof document<"u"&&(iT=document),typeof MutationObserver<"u"&&(oT=MutationObserver),typeof performance<"u"&&(sT=performance)}catch{}var NM=Ag.navigator||{},y0=NM.userAgent,w0=y0===void 0?"":y0,Ur=Ag,ve=iT,_0=oT,Yl=sT;Ur.document;var tr=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",aT=~w0.indexOf("MSIE")||~w0.indexOf("Trident/"),Xl,Jl,Zl,eu,tu,qn="___FONT_AWESOME___",pp=16,lT="fa",uT="svg-inline--fa",Di="data-fa-i2svg",mp="data-fa-pseudo-element",OM="data-fa-pseudo-element-pending",bg="data-prefix",Cg="data-icon",E0="fontawesome-i2svg",DM="async",LM=["HTML","HEAD","STYLE","SCRIPT"],cT=function(){try{return!0}catch{return!1}}(),pe="classic",be="sharp",Pg=[pe,be];function cl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[pe]}})}var Da=cl((Xl={},Ue(Xl,pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ue(Xl,be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Xl)),La=cl((Jl={},Ue(Jl,pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ue(Jl,be,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Jl)),Ma=cl((Zl={},Ue(Zl,pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ue(Zl,be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Zl)),MM=cl((eu={},Ue(eu,pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ue(eu,be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),eu)),VM=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,fT="fa-layers-text",FM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jM=cl((tu={},Ue(tu,pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ue(tu,be,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),tu)),dT=[1,2,3,4,5,6,7,8,9,10],UM=dT.concat([11,12,13,14,15,16,17,18,19,20]),$M=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Va=new Set;Object.keys(La[pe]).map(Va.add.bind(Va));Object.keys(La[be]).map(Va.add.bind(Va));var BM=[].concat(Pg,ul(Va),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gi.GROUP,gi.SWAP_OPACITY,gi.PRIMARY,gi.SECONDARY]).concat(dT.map(function(t){return"".concat(t,"x")})).concat(UM.map(function(t){return"w-".concat(t)})),Qs=Ur.FontAwesomeConfig||{};function zM(t){var e=ve.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function HM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ve&&typeof ve.querySelector=="function"){var WM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];WM.forEach(function(t){var e=kg(t,2),n=e[0],r=e[1],i=HM(zM(n));i!=null&&(Qs[r]=i)})}var hT={styleDefault:"solid",familyDefault:"classic",cssPrefix:lT,replacementClass:uT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qs.familyPrefix&&(Qs.cssPrefix=Qs.familyPrefix);var jo=U(U({},hT),Qs);jo.autoReplaceSvg||(jo.observeMutations=!1);var H={};Object.keys(hT).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){jo[t]=n,Ys.forEach(function(r){return r(H)})},get:function(){return jo[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){jo.cssPrefix=e,Ys.forEach(function(n){return n(H)})},get:function(){return jo.cssPrefix}});Ur.FontAwesomeConfig=H;var Ys=[];function KM(t){return Ys.push(t),function(){Ys.splice(Ys.indexOf(t),1)}}var lr=pp,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qM(t){if(!(!t||!tr)){var e=ve.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ve.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ve.head.insertBefore(e,r),t}}var GM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fa(){for(var t=12,e="";t-- >0;)e+=GM[Math.random()*62|0];return e}function Jo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xg(t){return t.classList?Jo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(pT(t[n]),'" ')},"").trim()}function Tf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Rg(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function YM(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function XM(t){var e=t.transform,n=t.width,r=n===void 0?pp:n,i=t.height,o=i===void 0?pp:i,s=t.startCentered,a=s===void 0?!1:s,l="";return a&&aT?l+="translate(".concat(e.x/lr-r/2,"em, ").concat(e.y/lr-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/lr,"em), calc(-50% + ").concat(e.y/lr,"em)) "):l+="translate(".concat(e.x/lr,"em, ").concat(e.y/lr,"em) "),l+="scale(".concat(e.size/lr*(e.flipX?-1:1),", ").concat(e.size/lr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var JM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mT(){var t=lT,e=uT,n=H.cssPrefix,r=H.replacementClass,i=JM;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var I0=!1;function Ud(){H.autoAddCss&&!I0&&(qM(mT()),I0=!0)}var ZM={mixout:function(){return{dom:{css:mT,insertCss:Ud}}},hooks:function(){return{beforeDOMElementCreation:function(){Ud()},beforeI2svg:function(){Ud()}}}},Gn=Ur||{};Gn[qn]||(Gn[qn]={});Gn[qn].styles||(Gn[qn].styles={});Gn[qn].hooks||(Gn[qn].hooks={});Gn[qn].shims||(Gn[qn].shims=[]);var on=Gn[qn],gT=[],e5=function t(){ve.removeEventListener("DOMContentLoaded",t),Tc=1,gT.map(function(e){return e()})},Tc=!1;tr&&(Tc=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),Tc||ve.addEventListener("DOMContentLoaded",e5));function t5(t){tr&&(Tc?setTimeout(t,0):gT.push(t))}function fl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?pT(t):"<".concat(e," ").concat(QM(r),">").concat(o.map(fl).join(""),"</").concat(e,">")}function T0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var n5=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},$d=function(e,n,r,i){var o=Object.keys(e),s=o.length,a=i!==void 0?n5(n,i):n,l,f,p;for(r===void 0?(l=1,p=e[o[0]]):(l=0,p=r);l<s;l++)f=o[l],p=a(p,e[f],f,e);return p};function r5(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function gp(t){var e=r5(t);return e.length===1?e[0].toString(16):null}function i5(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function S0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function vp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=S0(e);typeof on.hooks.addPack=="function"&&!i?on.hooks.addPack(t,S0(e)):on.styles[t]=U(U({},on.styles[t]||{}),o),t==="fas"&&vp("fa",e)}var nu,ru,iu,co=on.styles,o5=on.shims,s5=(nu={},Ue(nu,pe,Object.values(Ma[pe])),Ue(nu,be,Object.values(Ma[be])),nu),Ng=null,vT={},yT={},wT={},_T={},ET={},a5=(ru={},Ue(ru,pe,Object.keys(Da[pe])),Ue(ru,be,Object.keys(Da[be])),ru);function l5(t){return~BM.indexOf(t)}function u5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!l5(i)?i:null}var IT=function(){var e=function(o){return $d(co,function(s,a,l){return s[l]=$d(a,o,{}),s},{})};vT=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),yT=e(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),ET=e(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in co||H.autoFetchSvg,r=$d(o5,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});wT=r.names,_T=r.unicodes,Ng=Sf(H.styleDefault,{family:H.familyDefault})};KM(function(t){Ng=Sf(t.styleDefault,{family:H.familyDefault})});IT();function Og(t,e){return(vT[t]||{})[e]}function c5(t,e){return(yT[t]||{})[e]}function vi(t,e){return(ET[t]||{})[e]}function TT(t){return wT[t]||{prefix:null,iconName:null}}function f5(t){var e=_T[t],n=Og("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $r(){return Ng}var Dg=function(){return{prefix:null,iconName:null,rest:[]}};function Sf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?pe:n,i=Da[r][t],o=La[r][t]||La[r][i],s=t in on.styles?t:null;return o||s||null}var k0=(iu={},Ue(iu,pe,Object.keys(Ma[pe])),Ue(iu,be,Object.keys(Ma[be])),iu);function kf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},Ue(e,pe,"".concat(H.cssPrefix,"-").concat(pe)),Ue(e,be,"".concat(H.cssPrefix,"-").concat(be)),e),s=null,a=pe;(t.includes(o[pe])||t.some(function(f){return k0[pe].includes(f)}))&&(a=pe),(t.includes(o[be])||t.some(function(f){return k0[be].includes(f)}))&&(a=be);var l=t.reduce(function(f,p){var m=u5(H.cssPrefix,p);if(co[p]?(p=s5[a].includes(p)?MM[a][p]:p,s=p,f.prefix=p):a5[a].indexOf(p)>-1?(s=p,f.prefix=Sf(p,{family:a})):m?f.iconName=m:p!==H.replacementClass&&p!==o[pe]&&p!==o[be]&&f.rest.push(p),!i&&f.prefix&&f.iconName){var g=s==="fa"?TT(f.iconName):{},E=vi(f.prefix,f.iconName);g.prefix&&(s=null),f.iconName=g.iconName||E||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!co.far&&co.fas&&!H.autoFetchSvg&&(f.prefix="fas")}return f},Dg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===be&&(co.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=vi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=$r()||"fas"),l}var d5=function(){function t(){SM(this,t),this.definitions={}}return kM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),s[a]),vp(a,s[a]);var l=Ma[pe][a];l&&vp(l,s[a]),IT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,f=s.icon,p=f[2];n[a]||(n[a]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(n[a][m]=f)}),n[a][l]=f}),n}}]),t}(),A0=[],fo={},So={},h5=Object.keys(So);function p5(t,e){var n=e.mixoutsTo;return A0=t,fo={},Object.keys(So).forEach(function(r){h5.indexOf(r)===-1&&delete So[r]}),A0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Ic(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){fo[s]||(fo[s]=[]),fo[s].push(o[s])})}r.provides&&r.provides(So)}),n}function yp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=fo[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Li(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fo[t]||[];i.forEach(function(o){o.apply(null,n)})}function Qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return So[t]?So[t].apply(null,e):void 0}function wp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||$r();if(e)return e=vi(n,e)||e,T0(ST.definitions,n,e)||T0(on.styles,n,e)}var ST=new d5,m5=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Li("noAuto")},g5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tr?(Li("beforeI2svg",e),Qn("pseudoElements2svg",e),Qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,t5(function(){y5({autoReplaceSvgRoot:n}),Li("watch",e)})}},v5={icon:function(e){if(e===null)return null;if(Ic(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:vi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Sf(e[0]);return{prefix:r,iconName:vi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(VM))){var i=kf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||$r(),iconName:vi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=$r();return{prefix:o,iconName:vi(o,e)||e}}}},$t={noAuto:m5,config:H,dom:g5,parse:v5,library:ST,findIconDefinition:wp,toHtml:fl},y5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ve:n;(Object.keys(on.styles).length>0||H.autoFetchSvg)&&tr&&H.autoReplaceSvg&&$t.dom.i2svg({node:r})};function Af(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(tr){var r=ve.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function w5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Rg(s)&&n.found&&!r.found){var a=n.width,l=n.height,f={x:a/l/2,y:.5};i.style=Tf(U(U({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function _5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:s}),children:r}]}]}function Lg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,a=t.symbol,l=t.title,f=t.maskId,p=t.titleId,m=t.extra,g=t.watchable,E=g===void 0?!1:g,I=r.found?r:n,T=I.width,C=I.height,w=i==="fak",v=[H.replacementClass,o?"".concat(H.cssPrefix,"-").concat(o):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),_={children:[],attributes:U(U({},m.attributes),{},{"data-prefix":i,"data-icon":o,class:v,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(C)})},k=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/C*16*.0625,"em")}:{};E&&(_.attributes[Di]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(p||Fa())},children:[l]}),delete _.attributes.title);var x=U(U({},_),{},{prefix:i,iconName:o,main:n,mask:r,maskId:f,transform:s,symbol:a,styles:U(U({},k),m.styles)}),D=r.found&&n.found?Qn("generateAbstractMask",x)||{children:[],attributes:{}}:Qn("generateAbstractIcon",x)||{children:[],attributes:{}},M=D.children,z=D.attributes;return x.children=M,x.attributes=z,a?_5(x):w5(x)}function b0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,a=t.watchable,l=a===void 0?!1:a,f=U(U(U({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(f[Di]="");var p=U({},s.styles);Rg(i)&&(p.transform=XM({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var m=Tf(p);m.length>0&&(f.style=m);var g=[];return g.push({tag:"span",attributes:f,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function E5(t){var e=t.content,n=t.title,r=t.extra,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Tf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Bd=on.styles;function _p(t){var e=t[0],n=t[1],r=t.slice(4),i=kg(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(gi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(gi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var I5={found:!1,width:512,height:512};function T5(t,e){!cT&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ep(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=$r()),new Promise(function(r,i){if(Qn("missingIconAbstract"),n==="fa"){var o=TT(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Bd[e]&&Bd[e][t]){var s=Bd[e][t];return r(_p(s))}T5(t,e),r(U(U({},I5),{},{icon:H.showMissingIcons&&t?Qn("missingIconAbstract")||{}:{}}))})}var C0=function(){},Ip=H.measurePerformance&&Yl&&Yl.mark&&Yl.measure?Yl:{mark:C0,measure:C0},Rs='FA "6.5.1"',S5=function(e){return Ip.mark("".concat(Rs," ").concat(e," begins")),function(){return kT(e)}},kT=function(e){Ip.mark("".concat(Rs," ").concat(e," ends")),Ip.measure("".concat(Rs," ").concat(e),"".concat(Rs," ").concat(e," begins"),"".concat(Rs," ").concat(e," ends"))},Mg={begin:S5,end:kT},Tu=function(){};function P0(t){var e=t.getAttribute?t.getAttribute(Di):null;return typeof e=="string"}function k5(t){var e=t.getAttribute?t.getAttribute(bg):null,n=t.getAttribute?t.getAttribute(Cg):null;return e&&n}function A5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function b5(){if(H.autoReplaceSvg===!0)return Su.replace;var t=Su[H.autoReplaceSvg];return t||Su.replace}function C5(t){return ve.createElementNS("http://www.w3.org/2000/svg",t)}function P5(t){return ve.createElement(t)}function AT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?C5:P5:n;if(typeof t=="string")return ve.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(AT(s,{ceFn:r}))}),i}function x5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Su={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(AT(i),n)}),n.getAttribute(Di)===null&&H.keepOriginalSource){var r=ve.createComment(x5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~xg(n).indexOf(H.replacementClass))return Su.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===H.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return fl(a)}).join(`
`);n.setAttribute(Di,""),n.innerHTML=s}};function x0(t){t()}function bT(t,e){var n=typeof e=="function"?e:Tu;if(t.length===0)n();else{var r=x0;H.mutateApproach===DM&&(r=Ur.requestAnimationFrame||x0),r(function(){var i=b5(),o=Mg.begin("mutate");t.map(i),o(),n()})}}var Vg=!1;function CT(){Vg=!0}function Tp(){Vg=!1}var Sc=null;function R0(t){if(_0&&H.observeMutations){var e=t.treeCallback,n=e===void 0?Tu:e,r=t.nodeCallback,i=r===void 0?Tu:r,o=t.pseudoElementsCallback,s=o===void 0?Tu:o,a=t.observeMutationsRoot,l=a===void 0?ve:a;Sc=new _0(function(f){if(!Vg){var p=$r();Jo(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!P0(m.addedNodes[0])&&(H.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&H.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&P0(m.target)&&~$M.indexOf(m.attributeName))if(m.attributeName==="class"&&k5(m.target)){var g=kf(xg(m.target)),E=g.prefix,I=g.iconName;m.target.setAttribute(bg,E||p),I&&m.target.setAttribute(Cg,I)}else A5(m.target)&&i(m.target)})}}),tr&&Sc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function R5(){Sc&&Sc.disconnect()}function N5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function O5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=kf(xg(t));return i.prefix||(i.prefix=$r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=c5(i.prefix,t.innerText)||Og(i.prefix,gp(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function D5(t){var e=Jo(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||Fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function L5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function N0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=O5(t),r=n.iconName,i=n.prefix,o=n.rest,s=D5(t),a=yp("parseNodeAttributes",{},t),l=e.styleParser?N5(t):[];return U({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var M5=on.styles;function PT(t){var e=H.autoReplaceSvg==="nest"?N0(t,{styleParser:!1}):N0(t);return~e.extra.classes.indexOf(fT)?Qn("generateLayersText",t,e):Qn("generateSvgReplacementMutation",t,e)}var Br=new Set;Pg.map(function(t){Br.add("fa-".concat(t))});Object.keys(Da[pe]).map(Br.add.bind(Br));Object.keys(Da[be]).map(Br.add.bind(Br));Br=ul(Br);function O0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tr)return Promise.resolve();var n=ve.documentElement.classList,r=function(m){return n.add("".concat(E0,"-").concat(m))},i=function(m){return n.remove("".concat(E0,"-").concat(m))},o=H.autoFetchSvg?Br:Pg.map(function(p){return"fa-".concat(p)}).concat(Object.keys(M5));o.includes("fa")||o.push("fa");var s=[".".concat(fT,":not([").concat(Di,"])")].concat(o.map(function(p){return".".concat(p,":not([").concat(Di,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Jo(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Mg.begin("onTree"),f=a.reduce(function(p,m){try{var g=PT(m);g&&p.push(g)}catch(E){cT||E.name==="MissingIcon"&&console.error(E)}return p},[]);return new Promise(function(p,m){Promise.all(f).then(function(g){bT(g,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),p()})}).catch(function(g){l(),m(g)})})}function V5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;PT(t).then(function(n){n&&bT([n],e)})}function F5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:wp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wp(i||{})),t(r,U(U({},n),{},{mask:i}))}}var j5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?yn:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,f=n.maskId,p=f===void 0?null:f,m=n.title,g=m===void 0?null:m,E=n.titleId,I=E===void 0?null:E,T=n.classes,C=T===void 0?[]:T,w=n.attributes,v=w===void 0?{}:w,_=n.styles,k=_===void 0?{}:_;if(e){var x=e.prefix,D=e.iconName,M=e.icon;return Af(U({type:"icon"},e),function(){return Li("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(g?v["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(I||Fa()):(v["aria-hidden"]="true",v.focusable="false")),Lg({icons:{main:_p(M),mask:l?_p(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:D,transform:U(U({},yn),i),symbol:s,title:g,maskId:p,titleId:I,extra:{attributes:v,styles:k,classes:C}})})}},U5={mixout:function(){return{icon:F5(j5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=O0,n.nodeCallback=V5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ve:r,o=n.callback,s=o===void 0?function(){}:o;return O0(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,f=r.symbol,p=r.mask,m=r.maskId,g=r.extra;return new Promise(function(E,I){Promise.all([Ep(i,a),p.iconName?Ep(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var C=kg(T,2),w=C[0],v=C[1];E([n,Lg({icons:{main:w,mask:v},prefix:a,iconName:i,transform:l,symbol:f,maskId:m,title:o,titleId:s,extra:g,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=Tf(a);l.length>0&&(i.style=l);var f;return Rg(s)&&(f=Qn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:i}}}},$5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Af({type:"layer"},function(){Li("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(ul(o)).join(" ")},children:s}]})}}}},B5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,p=r.styles,m=p===void 0?{}:p;return Af({type:"counter",content:n},function(){return Li("beforeDOMElementCreation",{content:n,params:r}),E5({content:n.toString(),title:o,extra:{attributes:f,styles:m,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(ul(a))}})})}}}},z5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?yn:i,s=r.title,a=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,p=r.attributes,m=p===void 0?{}:p,g=r.styles,E=g===void 0?{}:g;return Af({type:"text",content:n},function(){return Li("beforeDOMElementCreation",{content:n,params:r}),b0({content:n,transform:U(U({},yn),o),title:a,extra:{attributes:m,styles:E,classes:["".concat(H.cssPrefix,"-layers-text")].concat(ul(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(aT){var f=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();a=p.width/f,l=p.height/f}return H.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,b0({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},H5=new RegExp('"',"ug"),D0=[1105920,1112319];function W5(t){var e=t.replace(H5,""),n=i5(e,0),r=n>=D0[0]&&n<=D0[1],i=e.length===2?e[0]===e[1]:!1;return{value:gp(i?e[0]:e),isSecondary:r||i}}function L0(t,e){var n="".concat(OM).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Jo(t.children),s=o.filter(function(M){return M.getAttribute(mp)===e})[0],a=Ur.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(FM),f=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&p!=="none"&&p!==""){var m=a.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?be:pe,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?La[g][l[2].toLowerCase()]:jM[g][f],I=W5(m),T=I.value,C=I.isSecondary,w=l[0].startsWith("FontAwesome"),v=Og(E,T),_=v;if(w){var k=f5(T);k.iconName&&k.prefix&&(v=k.iconName,E=k.prefix)}if(v&&!C&&(!s||s.getAttribute(bg)!==E||s.getAttribute(Cg)!==_)){t.setAttribute(n,_),s&&t.removeChild(s);var x=L5(),D=x.extra;D.attributes[mp]=e,Ep(v,E).then(function(M){var z=Lg(U(U({},x),{},{icons:{main:M,mask:Dg()},prefix:E,iconName:_,extra:D,watchable:!0})),Y=ve.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=z.map(function(G){return fl(G)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function K5(t){return Promise.all([L0(t,"::before"),L0(t,"::after")])}function q5(t){return t.parentNode!==document.head&&!~LM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function M0(t){if(tr)return new Promise(function(e,n){var r=Jo(t.querySelectorAll("*")).filter(q5).map(K5),i=Mg.begin("searchPseudoElements");CT(),Promise.all(r).then(function(){i(),Tp(),e()}).catch(function(){i(),Tp(),n()})})}var G5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=M0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ve:r;H.searchPseudoElements&&M0(i)}}},V0=!1,Q5={mixout:function(){return{dom:{unwatch:function(){CT(),V0=!0}}}},hooks:function(){return{bootstrap:function(){R0(yp("mutationObserverCallbacks",{}))},noAuto:function(){R5()},watch:function(n){var r=n.observeMutationsRoot;V0?Tp():R0(yp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},F0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Y5={mixout:function(){return{parse:{transform:function(n){return F0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=F0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(p)},g={transform:"translate(".concat(s/2*-1," -256)")},E={outer:a,inner:m,path:g};return{tag:"g",attributes:U({},E.outer),children:[{tag:"g",attributes:U({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:U(U({},r.icon.attributes),E.path)}]}]}}}},zd={x:0,y:0,width:"100%",height:"100%"};function j0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function X5(t){return t.tag==="g"?t.children:[t]}var J5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?kf(i.split(" ").map(function(s){return s.trim()})):Dg();return o.prefix||(o.prefix=$r()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,f=o.width,p=o.icon,m=s.width,g=s.icon,E=YM({transform:l,containerWidth:m,iconWidth:f}),I={tag:"rect",attributes:U(U({},zd),{},{fill:"white"})},T=p.children?{children:p.children.map(j0)}:{},C={tag:"g",attributes:U({},E.inner),children:[j0(U({tag:p.tag,attributes:U(U({},p.attributes),E.path)},T))]},w={tag:"g",attributes:U({},E.outer),children:[C]},v="mask-".concat(a||Fa()),_="clip-".concat(a||Fa()),k={tag:"mask",attributes:U(U({},zd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,w]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:X5(g)},k]};return r.push(x,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(v,")")},zd)}),{children:r,attributes:i}}}},Z5={provides:function(e){var n=!1;Ur.matchMedia&&(n=Ur.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=U(U({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},eV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},tV=[ZM,U5,$5,B5,z5,G5,Q5,Y5,J5,Z5,eV];p5(tV,{mixoutsTo:$t});$t.noAuto;$t.config;$t.library;$t.dom;var Sp=$t.parse;$t.findIconDefinition;$t.toHtml;var nV=$t.icon;$t.layer;$t.text;$t.counter;var xT={exports:{}},rV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iV=rV,oV=iV;function RT(){}function NT(){}NT.resetWarningCache=RT;var sV=function(){function t(r,i,o,s,a,l){if(l!==oV){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:NT,resetWarningCache:RT};return n.PropTypes=n,n};xT.exports=sV();var aV=xT.exports;const ee=bp(aV);function U0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U0(Object(n),!0).forEach(function(r){ho(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kc(t){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kc(t)}function ho(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function uV(t,e){if(t==null)return{};var n=lV(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function kp(t){return cV(t)||fV(t)||dV(t)||hV()}function cV(t){if(Array.isArray(t))return Ap(t)}function fV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dV(t,e){if(t){if(typeof t=="string")return Ap(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ap(t,e)}}function Ap(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function hV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,a=t.flash,l=t.spin,f=t.spinPulse,p=t.spinReverse,m=t.pulse,g=t.fixedWidth,E=t.inverse,I=t.border,T=t.listItem,C=t.flip,w=t.size,v=t.rotation,_=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":p,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":g,"fa-inverse":E,"fa-border":I,"fa-li":T,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},ho(e,"fa-".concat(w),typeof w<"u"&&w!==null),ho(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ho(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),ho(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(x){return k[x]?x:null}).filter(function(x){return x})}function mV(t){return t=t-0,t===t}function OT(t){return mV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var gV=["style"];function vV(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=OT(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[vV(i)]=o:e[i]=o,e},{})}function DT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return DT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var p=e.attributes[f];switch(f){case"class":l.attrs.className=p,delete e.attributes.class;break;case"style":l.attrs.style=yV(p);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=p:l.attrs[OT(f)]=p}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=uV(n,gV);return i.attrs.style=wr(wr({},i.attrs.style),s),t.apply(void 0,[e.tag,wr(wr({},i.attrs),a)].concat(kp(r)))}var LT=!1;try{LT=!0}catch{}function wV(){if(!LT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $0(t){if(t&&kc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sp.icon)return Sp.icon(t);if(t===null)return null;if(t&&kc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Hd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ho({},t,e):{}}var Uo=bc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,a=t.titleId,l=t.maskId,f=$0(n),p=Hd("classes",[].concat(kp(pV(t)),kp(o.split(" ")))),m=Hd("transform",typeof t.transform=="string"?Sp.transform(t.transform):t.transform),g=Hd("mask",$0(r)),E=nV(f,wr(wr(wr(wr({},p),m),g),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!E)return wV("Could not find icon",f),null;var I=E.abstract,T={ref:e};return Object.keys(t).forEach(function(C){Uo.defaultProps.hasOwnProperty(C)||(T[C]=t[C])}),_V(I[0],T)});Uo.displayName="FontAwesomeIcon";Uo.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};Uo.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var _V=DT.bind(null,bc.createElement),EV={prefix:"far",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"]},IV={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function TV(){const[t,e]=V.useState(!1),[n,r]=V.useState(null);V.useEffect(()=>{n||r(document.querySelector(".nav__inner"));const l=()=>{n&&window.innerWidth>768&&(a(n),document.querySelectorAll(".nav__inner").forEach(p=>{p.style.height=""}))};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[n]);const i=()=>{e(!t),t&&r(null)},o=l=>{l.preventDefault();const f=l.target;if(s(f,"nav__parent")){const p=f.parentElement.children[1];if(window.innerWidth<768){let m=p.clientHeight===0?p.scrollHeight:0;p.style.height=`${m}px`}else s(p,"nav__inner--show")||a(n),p.classList.toggle("nav__inner--show"),r(p)}},s=(l,f)=>l&&l.classList.value.includes(f),a=l=>{s(l,"nav__inner--show")&&l.classList.remove("nav__inner--show")};return b.jsxs("nav",{className:"nav container",children:[b.jsxs("div",{className:"nav__title",children:[b.jsx("img",{src:TM,alt:""}),b.jsx("h1",{className:"logo",children:"IPUC"})]}),b.jsx("div",{className:`nav__hamburguer ${t?"nav__hamburguer--open":""}`,onClick:i}),b.jsx("div",{className:`nav__overlay ${t?"nav__overlay--show":""}`,onClick:o,children:b.jsxs("ul",{className:"nav__menu",children:[b.jsx("li",{className:"nav__item",children:b.jsx(lt,{to:"",className:"nav__link",children:"Inicio"})}),b.jsx("li",{className:"nav__item",children:b.jsx(lt,{to:"",className:"nav__link",children:"Blog"})}),b.jsxs("li",{className:"nav__item",children:[b.jsxs("span",{className:"nav__parent",children:["Solicitudes",b.jsx("img",{src:jd,alt:"Arrow",className:"nav__arrow"})]}),b.jsxs("ul",{className:"nav__inner",children:[b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:f0,alt:"todo_list",className:"nav__illustration"}),"somos"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:d0,alt:"calendary_icon",className:"nav__illustration"}),"creemos?"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:h0,alt:"reiminders_icon",className:"nav__illustration"}),"Reminder"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:p0,alt:"plannign_icon",className:"nav__illustration"}),"Planning"]})})]})]}),b.jsxs("li",{className:"nav__item",children:[b.jsxs("span",{className:"nav__parent",children:["Eventos",b.jsx("img",{src:jd,alt:"arrow_icon",className:"nav__arrow"})]}),b.jsxs("ul",{className:"nav__inner",children:[b.jsx("li",{className:"nav__dropdown",children:b.jsx(lt,{to:"",className:"nav__link",children:"History"})}),b.jsx("li",{className:"nav__dropdown",children:b.jsx(lt,{to:"",className:"nav__link",children:"Our Team"})}),b.jsx("li",{className:"nav__dropdown",children:b.jsx(lt,{to:"",className:"nav__link",children:"Blog"})})]})]}),b.jsxs("li",{className:"nav__item",children:[b.jsxs("span",{className:"nav__parent",children:["Registros",b.jsx("img",{src:jd,alt:"arrow_icon",className:"nav__arrow"})]}),b.jsxs("ul",{className:"nav__inner",children:[b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:f0,alt:"todo_icon",className:"nav__illustration"}),"Todo List"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:d0,alt:"calendary_icon",className:"nav__illustration"}),"Calendar"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:h0,alt:"reminder_icon",className:"nav__illustration"}),"Reminder"]})}),b.jsx("li",{className:"nav__dropdown",children:b.jsxs(lt,{to:"",className:"nav__link",children:[b.jsx("img",{src:p0,alt:"planning_icon",className:"nav__illustration"}),"Planning"]})})]})]}),b.jsx("li",{className:"nav__login",children:b.jsx(lt,{to:"/register",className:"nav__sign",children:b.jsxs("div",{className:"nav__center",children:[b.jsx(Uo,{icon:EV}),b.jsx("h1",{className:"nav__send",children:"Registro"})]})})}),b.jsx("li",{className:"nav__login nav__login--border",children:b.jsx(lt,{to:"/contacto",className:"nav__sign",children:b.jsxs("div",{className:"nav__center",children:[b.jsx(Uo,{icon:IV}),b.jsx("h1",{className:"nav__send",children:"Contacto"})]})})})]})})]})}const SV=_f(Qo),kV=({correoUsuario:t})=>b.jsxs(b.Fragment,{children:[b.jsxs("div",{children:["Binvenido ",t," ",b.jsx("button",{onClick:()=>a4(SV),children:"Cerrar Sesión"})]}),b.jsx(TV,{})]}),AV=()=>b.jsx("div",{className:"Error404",children:b.jsx("h1",{children:"UPPS! Surgio un Error"})}),bV=()=>{const t=_f(Qo),e=If(),[n,r]=V.useState(""),i=async s=>{if(s.preventDefault(),!n){Gs.fire({icon:"error",title:"Error",text:"No has escrito tu correo."});return}try{await t4(t,n),Gs.fire({icon:"success",title:"Éxito",text:"Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico."}),e("/")}catch(a){Gs.fire({icon:"error",title:"Error",text:"Error al enviar el correo de restablecimiento de contraseña: "+a.message})}},o=()=>{e("/")};return b.jsxs("div",{className:"login",children:[b.jsxs("div",{className:"login__container",children:[b.jsxs("form",{className:"form",onSubmit:i,children:[b.jsx("h3",{className:"title",children:"Restablecer Contraseña"}),b.jsxs("div",{className:"input__field",children:[b.jsx("i",{className:"bx bx-mail-send"}),b.jsx("input",{required:!0,value:n,onChange:s=>r(s.target.value),className:"input",type:"email",placeholder:"Correo electrónico"})]}),b.jsx("button",{type:"submit",className:"button",children:"Enviar Correo"})]}),b.jsx("button",{className:"button",onClick:o,children:"Volver"})]}),b.jsx("div",{className:"login_left",children:b.jsx("img",{src:tT,alt:""})})]})},CV=({usuario:t})=>b.jsxs(lM,{children:[b.jsx(xs,{path:"/",element:t?b.jsx(Vd,{to:"/home"}):b.jsx(IM,{})}),b.jsx(xs,{path:"/home",element:t?b.jsx(kV,{}):b.jsx(Vd,{to:"/"})}),b.jsx(xs,{path:"/password",element:t?b.jsx(Vd,{to:"/home"}):b.jsx(bV,{})}),b.jsx(xs,{path:"*",element:b.jsx(AV,{})})]}),PV=_f(Qo);function xV(){const[t,e]=V.useState(null);return V.useEffect(()=>{const n=s4(PV,r=>{e(r||null)});return()=>n()},[]),b.jsx("div",{children:b.jsx(CV,{usuario:t})})}Wd.createRoot(document.getElementById("root")).render(b.jsx(bc.StrictMode,{children:b.jsx(mM,{children:b.jsx(xV,{})})}));
