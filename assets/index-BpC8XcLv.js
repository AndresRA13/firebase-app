function L1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jm={exports:{}},ja={},Um={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),b1=Symbol.for("react.portal"),D1=Symbol.for("react.fragment"),M1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),j1=Symbol.for("react.provider"),U1=Symbol.for("react.context"),F1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),V1=Symbol.for("react.lazy"),qd=Symbol.iterator;function H1(e){return e===null||typeof e!="object"?null:(e=qd&&e[qd]||e["@@iterator"],typeof e=="function"?e:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Bm={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Fm}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vm(){}Vm.prototype=Zr.prototype;function Xc(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Fm}var qc=Xc.prototype=new Vm;qc.constructor=Xc;zm(qc,Zr.prototype);qc.isPureReactComponent=!0;var Qd=Array.isArray,Hm=Object.prototype.hasOwnProperty,Qc={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Km(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Hm.call(t,r)&&!Wm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Po,type:e,key:o,ref:s,props:i,_owner:Qc.current}}function W1(e,t){return{$$typeof:Po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Po}function K1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jd=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K1(""+e.key):t.toString(36)}function xs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Po:case b1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Al(s,0):r,Qd(i)?(n="",e!=null&&(n=e.replace(Jd,"$&/")+"/"),xs(i,t,n,"",function(u){return u})):i!=null&&(Jc(i)&&(i=W1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Jd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Qd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Al(o,a);s+=xs(o,t,n,l,i)}else if(l=H1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Al(o,a++),s+=xs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Jo(e,t,n){if(e==null)return e;var r=[],i=0;return xs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function G1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Ns={transition:null},Y1={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Ns,ReactCurrentOwner:Qc};U.Children={map:Jo,forEach:function(e,t,n){Jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jo(e,function(){t++}),t},toArray:function(e){return Jo(e,function(t){return t})||[]},only:function(e){if(!Jc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Zr;U.Fragment=D1;U.Profiler=$1;U.PureComponent=Xc;U.StrictMode=M1;U.Suspense=z1;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Qc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Hm.call(t,l)&&!Wm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Po,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:U1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j1,_context:e},e.Consumer=e};U.createElement=Km;U.createFactory=function(e){var t=Km.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:F1,render:e}};U.isValidElement=Jc;U.lazy=function(e){return{$$typeof:V1,_payload:{_status:-1,_result:e},_init:G1}};U.memo=function(e,t){return{$$typeof:B1,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ns.transition;Ns.transition={};try{e()}finally{Ns.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Le.current.useCallback(e,t)};U.useContext=function(e){return Le.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};U.useEffect=function(e,t){return Le.current.useEffect(e,t)};U.useId=function(){return Le.current.useId()};U.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Le.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};U.useRef=function(e){return Le.current.useRef(e)};U.useState=function(e){return Le.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Le.current.useTransition()};U.version="18.2.0";Um.exports=U;var T=Um.exports;const Ua=$m(T),X1=L1({__proto__:null,default:Ua},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1=T,Q1=Symbol.for("react.element"),J1=Symbol.for("react.fragment"),Z1=Object.prototype.hasOwnProperty,ew=q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tw={key:!0,ref:!0,__self:!0,__source:!0};function Gm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Z1.call(t,r)&&!tw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Q1,type:e,key:o,ref:s,props:i,_owner:ew.current}}ja.Fragment=J1;ja.jsx=Gm;ja.jsxs=Gm;jm.exports=ja;var _=jm.exports,_u={},Ym={exports:{}},Ye={},Xm={exports:{}},qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,D){var $=N.length;N.push(D);e:for(;0<$;){var ie=$-1>>>1,de=N[ie];if(0<i(de,D))N[ie]=D,N[$]=de,$=ie;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],$=N.pop();if($!==D){N[0]=$;e:for(var ie=0,de=N.length,qo=de>>>1;ie<qo;){var Mn=2*(ie+1)-1,Pl=N[Mn],$n=Mn+1,Qo=N[$n];if(0>i(Pl,$))$n<de&&0>i(Qo,Pl)?(N[ie]=Qo,N[$n]=$,ie=$n):(N[ie]=Pl,N[Mn]=$,ie=Mn);else if($n<de&&0>i(Qo,$))N[ie]=Qo,N[$n]=$,ie=$n;else break e}}return D}function i(N,D){var $=N.sortIndex-D.sortIndex;return $!==0?$:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=N)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function y(N){if(w=!1,m(N),!v)if(n(l)!==null)v=!0,Tl(k);else{var D=n(u);D!==null&&Cl(y,D.startTime-N)}}function k(N,D){v=!1,w&&(w=!1,p(O),O=-1),g=!0;var $=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||N&&!ot());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var de=ie(f.expirationTime<=D);D=e.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var qo=!0;else{var Mn=n(u);Mn!==null&&Cl(y,Mn.startTime-D),qo=!1}return qo}finally{f=null,h=$,g=!1}}var C=!1,P=null,O=-1,F=5,M=-1;function ot(){return!(e.unstable_now()-M<F)}function ui(){if(P!==null){var N=e.unstable_now();M=N;var D=!0;try{D=P(!0,N)}finally{D?ci():(C=!1,P=null)}}else C=!1}var ci;if(typeof d=="function")ci=function(){d(ui)};else if(typeof MessageChannel<"u"){var Xd=new MessageChannel,O1=Xd.port2;Xd.port1.onmessage=ui,ci=function(){O1.postMessage(null)}}else ci=function(){E(ui,0)};function Tl(N){P=N,C||(C=!0,ci())}function Cl(N,D){O=E(function(){N(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Tl(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var $=h;h=D;try{return N()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=h;h=N;try{return D()}finally{h=$}},e.unstable_scheduleCallback=function(N,D,$){var ie=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,N={id:c++,callback:D,priorityLevel:N,startTime:$,expirationTime:de,sortIndex:-1},$>ie?(N.sortIndex=$,t(u,N),n(l)===null&&N===n(u)&&(w?(p(O),O=-1):w=!0,Cl(y,$-ie))):(N.sortIndex=de,t(l,N),v||g||(v=!0,Tl(k))),N},e.unstable_shouldYield=ot,e.unstable_wrapCallback=function(N){var D=h;return function(){var $=h;h=D;try{return N.apply(this,arguments)}finally{h=$}}}})(qm);Xm.exports=qm;var nw=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=T,Ge=nw;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,Vi={};function ur(e,t){Vr(e,t),Vr(e+"Capture",t)}function Vr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Jm.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,rw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zd={},eh={};function iw(e){return Eu.call(eh,e)?!0:Eu.call(Zd,e)?!1:rw.test(e)?eh[e]=!0:(Zd[e]=!0,!1)}function ow(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sw(e,t,n,r){if(t===null||typeof t>"u"||ow(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zc=/[\-:]([a-z])/g;function ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zc,ef);Ee[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zc,ef);Ee[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zc,ef);Ee[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function tf(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sw(t,n,i,r)&&(n=null),r||i===null?iw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),th=Symbol.iterator;function fi(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,xl;function Ei(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var Nl=!1;function Rl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function aw(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function Tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case mr:return"Portal";case ku:return"Profiler";case nf:return"StrictMode";case Su:return"Suspense";case Iu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eg:return(e.displayName||"Context")+".Consumer";case Zm:return(e._context.displayName||"Context")+".Provider";case rf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case of:return t=e.displayName||null,t!==null?t:Tu(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Tu(e(t))}catch{}}return null}function lw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(t);case 8:return t===nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ng(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uw(e){var t=ng(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function es(e){e._valueTracker||(e._valueTracker=uw(e))}function rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ng(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cu(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ig(e,t){t=t.checked,t!=null&&tf(e,"checked",t,!1)}function Pu(e,t){ig(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ih(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ki(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function og(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ts,ag=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ts=ts||document.createElement("div"),ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cw=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(e){cw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ni[t]=Ni[e]})});function lg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ni.hasOwnProperty(e)&&Ni[e]?(""+t).trim():t+"px"}function ug(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(e,t){if(t){if(fw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bu=null,Lr=null,br=null;function sh(e){if(e=No(e)){if(typeof bu!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ha(t),bu(e.stateNode,e.type,t))}}function cg(e){Lr?br?br.push(e):br=[e]:Lr=e}function fg(){if(Lr){var e=Lr,t=br;if(br=Lr=null,sh(e),t)for(e=0;e<t.length;e++)sh(t[e])}}function dg(e,t){return e(t)}function hg(){}var Ol=!1;function pg(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return dg(e,t,n)}finally{Ol=!1,(Lr!==null||br!==null)&&(hg(),fg())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ha(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Du=!1;if(Dt)try{var di={};Object.defineProperty(di,"passive",{get:function(){Du=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{Du=!1}function dw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ri=!1,Xs=null,qs=!1,Mu=null,hw={onError:function(e){Ri=!0,Xs=e}};function pw(e,t,n,r,i,o,s,a,l){Ri=!1,Xs=null,dw.apply(hw,arguments)}function mw(e,t,n,r,i,o,s,a,l){if(pw.apply(this,arguments),Ri){if(Ri){var u=Xs;Ri=!1,Xs=null}else throw Error(S(198));qs||(qs=!0,Mu=u)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ah(e){if(cr(e)!==e)throw Error(S(188))}function gw(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ah(i),e;if(o===r)return ah(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function gg(e){return e=gw(e),e!==null?vg(e):null}function vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vg(e);if(t!==null)return t;e=e.sibling}return null}var yg=Ge.unstable_scheduleCallback,lh=Ge.unstable_cancelCallback,vw=Ge.unstable_shouldYield,yw=Ge.unstable_requestPaint,oe=Ge.unstable_now,ww=Ge.unstable_getCurrentPriorityLevel,af=Ge.unstable_ImmediatePriority,wg=Ge.unstable_UserBlockingPriority,Qs=Ge.unstable_NormalPriority,_w=Ge.unstable_LowPriority,_g=Ge.unstable_IdlePriority,Fa=null,kt=null;function Ew(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Iw,kw=Math.log,Sw=Math.LN2;function Iw(e){return e>>>=0,e===0?32:31-(kw(e)/Sw|0)|0}var ns=64,rs=4194304;function Si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Si(a):(o&=s,o!==0&&(r=Si(o)))}else s=n&~i,s!==0?r=Si(s):o!==0&&(r=Si(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Tw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ft(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Tw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eg(){var e=ns;return ns<<=1,!(ns&4194240)&&(ns=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Pw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function kg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sg,uf,Ig,Tg,Cg,ju=!1,is=[],cn=null,fn=null,dn=null,Ki=new Map,Gi=new Map,Zt=[],Aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=No(t),t!==null&&uf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xw(e,t,n,r,i){switch(t){case"focusin":return cn=hi(cn,e,t,n,r,i),!0;case"dragenter":return fn=hi(fn,e,t,n,r,i),!0;case"mouseover":return dn=hi(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,hi(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,hi(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function Pg(e){var t=zn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=mg(n),t!==null){e.blockedOn=t,Cg(e.priority,function(){Ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lu=r,n.target.dispatchEvent(r),Lu=null}else return t=No(n),t!==null&&uf(t),e.blockedOn=n,!1;t.shift()}return!0}function ch(e,t,n){Rs(e)&&n.delete(t)}function Nw(){ju=!1,cn!==null&&Rs(cn)&&(cn=null),fn!==null&&Rs(fn)&&(fn=null),dn!==null&&Rs(dn)&&(dn=null),Ki.forEach(ch),Gi.forEach(ch)}function pi(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Nw)))}function Yi(e){function t(i){return pi(i,e)}if(0<is.length){pi(is[0],e);for(var n=1;n<is.length;n++){var r=is[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&pi(cn,e),fn!==null&&pi(fn,e),dn!==null&&pi(dn,e),Ki.forEach(t),Gi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&Zt.shift()}var Dr=Ht.ReactCurrentBatchConfig,Zs=!0;function Rw(e,t,n,r){var i=H,o=Dr.transition;Dr.transition=null;try{H=1,cf(e,t,n,r)}finally{H=i,Dr.transition=o}}function Ow(e,t,n,r){var i=H,o=Dr.transition;Dr.transition=null;try{H=4,cf(e,t,n,r)}finally{H=i,Dr.transition=o}}function cf(e,t,n,r){if(Zs){var i=Uu(e,t,n,r);if(i===null)Vl(e,t,r,ea,n),uh(e,r);else if(xw(i,e,t,n,r))r.stopPropagation();else if(uh(e,r),t&4&&-1<Aw.indexOf(e)){for(;i!==null;){var o=No(i);if(o!==null&&Sg(o),o=Uu(e,t,n,r),o===null&&Vl(e,t,r,ea,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var ea=null;function Uu(e,t,n,r){if(ea=null,e=sf(r),e=zn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function Ag(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ww()){case af:return 1;case wg:return 4;case Qs:case _w:return 16;case _g:return 536870912;default:return 16}default:return 16}}var sn=null,ff=null,Os=null;function xg(){if(Os)return Os;var e,t=ff,n=t.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Os=i.slice(e,1<r?1-r:void 0)}function Ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function os(){return!0}function fh(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?os:fh,this.isPropagationStopped=fh,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Xe(ei),xo=te({},ei,{view:0,detail:0}),Lw=Xe(xo),bl,Dl,mi,za=te({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(bl=e.screenX-mi.screenX,Dl=e.screenY-mi.screenY):Dl=bl=0,mi=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),dh=Xe(za),bw=te({},za,{dataTransfer:0}),Dw=Xe(bw),Mw=te({},xo,{relatedTarget:0}),Ml=Xe(Mw),$w=te({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=Xe($w),Uw=te({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fw=Xe(Uw),zw=te({},ei,{data:0}),hh=Xe(zw),Bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ww(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hw[e])?!!t[e]:!1}function hf(){return Ww}var Kw=te({},xo,{key:function(e){if(e.key){var t=Bw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?Ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gw=Xe(Kw),Yw=te({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=Xe(Yw),Xw=te({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),qw=Xe(Xw),Qw=te({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jw=Xe(Qw),Zw=te({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e_=Xe(Zw),t_=[9,13,27,32],pf=Dt&&"CompositionEvent"in window,Oi=null;Dt&&"documentMode"in document&&(Oi=document.documentMode);var n_=Dt&&"TextEvent"in window&&!Oi,Ng=Dt&&(!pf||Oi&&8<Oi&&11>=Oi),mh=" ",gh=!1;function Rg(e,t){switch(e){case"keyup":return t_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function r_(e,t){switch(e){case"compositionend":return Og(t);case"keypress":return t.which!==32?null:(gh=!0,mh);case"textInput":return e=t.data,e===mh&&gh?null:e;default:return null}}function i_(e,t){if(vr)return e==="compositionend"||!pf&&Rg(e,t)?(e=xg(),Os=ff=sn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ng&&t.locale!=="ko"?null:t.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o_[e.type]:t==="textarea"}function Lg(e,t,n,r){cg(r),t=ta(t,"onChange"),0<t.length&&(n=new df("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Xi=null;function s_(e){Hg(e,0)}function Ba(e){var t=_r(e);if(rg(t))return e}function a_(e,t){if(e==="change")return t}var bg=!1;if(Dt){var $l;if(Dt){var jl="oninput"in document;if(!jl){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),jl=typeof yh.oninput=="function"}$l=jl}else $l=!1;bg=$l&&(!document.documentMode||9<document.documentMode)}function wh(){Li&&(Li.detachEvent("onpropertychange",Dg),Xi=Li=null)}function Dg(e){if(e.propertyName==="value"&&Ba(Xi)){var t=[];Lg(t,Xi,e,sf(e)),pg(s_,t)}}function l_(e,t,n){e==="focusin"?(wh(),Li=t,Xi=n,Li.attachEvent("onpropertychange",Dg)):e==="focusout"&&wh()}function u_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Xi)}function c_(e,t){if(e==="click")return Ba(t)}function f_(e,t){if(e==="input"||e==="change")return Ba(t)}function d_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:d_;function qi(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function _h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eh(e,t){var n=_h(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function Mg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $g(){for(var e=window,t=Ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ys(e.document)}return t}function mf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h_(e){var t=$g(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mg(n.ownerDocument.documentElement,n)){if(r!==null&&mf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Eh(n,o);var s=Eh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p_=Dt&&"documentMode"in document&&11>=document.documentMode,yr=null,Fu=null,bi=null,zu=!1;function kh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||yr==null||yr!==Ys(r)||(r=yr,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&qi(bi,r)||(bi=r,r=ta(Fu,"onSelect"),0<r.length&&(t=new df("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},Ul={},jg={};Dt&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Va(e){if(Ul[e])return Ul[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jg)return Ul[e]=t[n];return e}var Ug=Va("animationend"),Fg=Va("animationiteration"),zg=Va("animationstart"),Bg=Va("transitionend"),Vg=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){Vg.set(e,t),ur(t,[e])}for(var Fl=0;Fl<Sh.length;Fl++){var zl=Sh[Fl],m_=zl.toLowerCase(),g_=zl[0].toUpperCase()+zl.slice(1);Pn(m_,"on"+g_)}Pn(Ug,"onAnimationEnd");Pn(Fg,"onAnimationIteration");Pn(zg,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Bg,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function Ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mw(r,t,void 0,e),e.currentTarget=null}function Hg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ih(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ih(i,a,u),o=l}}}if(qs)throw e=Mu,qs=!1,Mu=null,e}function G(e,t){var n=t[Ku];n===void 0&&(n=t[Ku]=new Set);var r=e+"__bubble";n.has(r)||(Wg(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),Wg(n,e,r,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[as]){e[as]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(v_.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,Bl("selectionchange",!1,t))}}function Wg(e,t,n,r){switch(Ag(t)){case 1:var i=Rw;break;case 4:i=Ow;break;default:i=cf}n=i.bind(null,t,n,e),i=void 0,!Du||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=zn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}pg(function(){var u=o,c=sf(n),f=[];e:{var h=Vg.get(e);if(h!==void 0){var g=df,v=e;switch(e){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":g=Gw;break;case"focusin":v="focus",g=Ml;break;case"focusout":v="blur",g=Ml;break;case"beforeblur":case"afterblur":g=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=qw;break;case Ug:case Fg:case zg:g=jw;break;case Bg:g=Jw;break;case"scroll":g=Lw;break;case"wheel":g=e_;break;case"copy":case"cut":case"paste":g=Fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ph}var w=(t&4)!==0,E=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Wi(d,p),y!=null&&w.push(Ji(d,y,m)))),E)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Lu&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Mt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?zn(v):null,v!==null&&(E=cr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=dh,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ph,y="onPointerLeave",p="onPointerEnter",d="pointer"),E=g==null?h:_r(g),m=v==null?h:_r(v),h=new w(y,d+"leave",g,n,c),h.target=E,h.relatedTarget=m,y=null,zn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=E,y=w),E=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=hr(m))d++;for(m=0,y=p;y;y=hr(y))m++;for(;0<d-m;)w=hr(w),d--;for(;0<m-d;)p=hr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=hr(w),p=hr(p)}w=null}else w=null;g!==null&&Th(f,h,g,w,!1),v!==null&&E!==null&&Th(f,E,v,w,!0)}}e:{if(h=u?_r(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=a_;else if(vh(h))if(bg)k=f_;else{k=u_;var C=l_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=c_);if(k&&(k=k(e,u))){Lg(f,k,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Au(h,"number",h.value)}switch(C=u?_r(u):window,e){case"focusin":(vh(C)||C.contentEditable==="true")&&(yr=C,Fu=u,bi=null);break;case"focusout":bi=Fu=yr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,kh(f,n,c);break;case"selectionchange":if(p_)break;case"keydown":case"keyup":kh(f,n,c)}var P;if(pf)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else vr?Rg(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ng&&n.locale!=="ko"&&(vr||O!=="onCompositionStart"?O==="onCompositionEnd"&&vr&&(P=xg()):(sn=c,ff="value"in sn?sn.value:sn.textContent,vr=!0)),C=ta(u,O),0<C.length&&(O=new hh(O,e,null,n,c),f.push({event:O,listeners:C}),P?O.data=P:(P=Og(n),P!==null&&(O.data=P)))),(P=n_?r_(e,n):i_(e,n))&&(u=ta(u,"onBeforeInput"),0<u.length&&(c=new hh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Hg(f,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wi(e,n),o!=null&&r.unshift(Ji(e,o,i)),o=Wi(e,t),o!=null&&r.push(Ji(e,o,i))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Th(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wi(n,o),l!=null&&s.unshift(Ji(n,l,a))):i||(l=Wi(n,o),l!=null&&s.push(Ji(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var y_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function Ch(e){return(typeof e=="string"?e:""+e).replace(y_,`
`).replace(w_,"")}function ls(e,t,n){if(t=Ch(t),Ch(e)!==t&&n)throw Error(S(425))}function na(){}var Bu=null,Vu=null;function Hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,__=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(e){return Ph.resolve(null).then(e).catch(k_)}:Wu;function k_(e){setTimeout(function(){throw e})}function Hl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),vt="__reactFiber$"+ti,Zi="__reactProps$"+ti,Mt="__reactContainer$"+ti,Ku="__reactEvents$"+ti,S_="__reactListeners$"+ti,I_="__reactHandles$"+ti;function zn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ah(e);e!==null;){if(n=e[vt])return n;e=Ah(e)}return t}e=n,n=e.parentNode}return null}function No(e){return e=e[vt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ha(e){return e[Zi]||null}var Gu=[],Er=-1;function An(e){return{current:e}}function q(e){0>Er||(e.current=Gu[Er],Gu[Er]=null,Er--)}function K(e,t){Er++,Gu[Er]=e.current,e.current=t}var Sn={},Pe=An(Sn),je=An(!1),Jn=Sn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function ra(){q(je),q(Pe)}function xh(e,t,n){if(Pe.current!==Sn)throw Error(S(168));K(Pe,t),K(je,n)}function Kg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,lw(e)||"Unknown",i));return te({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Jn=Pe.current,K(Pe,e),K(je,je.current),!0}function Nh(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Kg(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,q(je),q(Pe),K(Pe,e)):q(je),K(je,n)}var At=null,Wa=!1,Wl=!1;function Gg(e){At===null?At=[e]:At.push(e)}function T_(e){Wa=!0,Gg(e)}function xn(){if(!Wl&&At!==null){Wl=!0;var e=0,t=H;try{var n=At;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Wa=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),yg(af,xn),i}finally{H=t,Wl=!1}}return null}var kr=[],Sr=0,oa=null,sa=0,Qe=[],Je=0,Zn=null,xt=1,Nt="";function jn(e,t){kr[Sr++]=sa,kr[Sr++]=oa,oa=e,sa=t}function Yg(e,t,n){Qe[Je++]=xt,Qe[Je++]=Nt,Qe[Je++]=Zn,Zn=e;var r=xt;e=Nt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var o=32-ft(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,xt=1<<32-ft(t)+i|n<<i|r,Nt=o+e}else xt=1<<o|n<<i|r,Nt=e}function gf(e){e.return!==null&&(jn(e,1),Yg(e,1,0))}function vf(e){for(;e===oa;)oa=kr[--Sr],kr[Sr]=null,sa=kr[--Sr],kr[Sr]=null;for(;e===Zn;)Zn=Qe[--Je],Qe[Je]=null,Nt=Qe[--Je],Qe[Je]=null,xt=Qe[--Je],Qe[Je]=null}var Ke=null,He=null,J=!1,ut=null;function Xg(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,He=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:xt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,He=null,!0):!1;default:return!1}}function Yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xu(e){if(J){var t=He;if(t){var n=t;if(!Rh(e,t)){if(Yu(e))throw Error(S(418));t=hn(n.nextSibling);var r=Ke;t&&Rh(e,t)?Xg(r,n):(e.flags=e.flags&-4097|2,J=!1,Ke=e)}}else{if(Yu(e))throw Error(S(418));e.flags=e.flags&-4097|2,J=!1,Ke=e}}}function Oh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function us(e){if(e!==Ke)return!1;if(!J)return Oh(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hu(e.type,e.memoizedProps)),t&&(t=He)){if(Yu(e))throw qg(),Error(S(418));for(;t;)Xg(e,t),t=hn(t.nextSibling)}if(Oh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ke?hn(e.stateNode.nextSibling):null;return!0}function qg(){for(var e=He;e;)e=hn(e.nextSibling)}function Wr(){He=Ke=null,J=!1}function yf(e){ut===null?ut=[e]:ut.push(e)}var C_=Ht.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var aa=An(null),la=null,Ir=null,wf=null;function _f(){wf=Ir=la=null}function Ef(e){var t=aa.current;q(aa),e._currentValue=t}function qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){la=e,wf=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(wf!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(la===null)throw Error(S(308));Ir=e,la.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Bn=null;function kf(e){Bn===null?Bn=[e]:Bn.push(e)}function Qg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kf(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,kf(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}function Lh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=te({},f,h);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tr|=s,e.lanes=s,e.memoizedState=f}}function bh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Zg=new Qm.Component().refs;function Qu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ka={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=gn(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(dt(t,e,i,r),bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=gn(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(dt(t,e,i,r),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=gn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(dt(t,e,r,n),bs(t,e,r))}};function Dh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qi(n,r)||!qi(i,o):!0}function ev(e,t,n){var r=!1,i=Sn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Ue(t)?Jn:Pe.current,r=t.contextTypes,o=(r=r!=null)?Hr(e,i):Sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ka.enqueueReplaceState(t,t.state,null)}function Ju(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zg,Sf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Ue(t)?Jn:Pe.current,i.context=Hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ka.enqueueReplaceState(i,i.state,null),ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Zg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function cs(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $h(e){var t=e._init;return t(e._payload)}function tv(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=vn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,y){return d===null||d.tag!==6?(d=Jl(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var k=m.type;return k===gr?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&$h(k)===d.type)?(y=i(d,m.props),y.ref=gi(p,d,m),y.return=p,y):(y=Fs(m.type,m.key,m.props,null,p.mode,y),y.ref=gi(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Zl(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,k){return d===null||d.tag!==7?(d=Xn(m,p.mode,y,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Zo:return m=Fs(d.type,d.key,d.props,null,p.mode,m),m.ref=gi(p,null,d),m.return=p,m;case mr:return d=Zl(d,p.mode,m),d.return=p,d;case Qt:var y=d._init;return f(p,y(d._payload),m)}if(ki(d)||fi(d))return d=Xn(d,p.mode,m,null),d.return=p,d;cs(p,d)}return null}function h(p,d,m,y){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zo:return m.key===k?l(p,d,m,y):null;case mr:return m.key===k?u(p,d,m,y):null;case Qt:return k=m._init,h(p,d,k(m._payload),y)}if(ki(m)||fi(m))return k!==null?null:c(p,d,m,y,null);cs(p,m)}return null}function g(p,d,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(d,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,k);case mr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,k);case Qt:var C=y._init;return g(p,d,m,C(y._payload),k)}if(ki(y)||fi(y))return p=p.get(m)||null,c(d,p,y,k,null);cs(d,y)}return null}function v(p,d,m,y){for(var k=null,C=null,P=d,O=d=0,F=null;P!==null&&O<m.length;O++){P.index>O?(F=P,P=null):F=P.sibling;var M=h(p,P,m[O],y);if(M===null){P===null&&(P=F);break}e&&P&&M.alternate===null&&t(p,P),d=o(M,d,O),C===null?k=M:C.sibling=M,C=M,P=F}if(O===m.length)return n(p,P),J&&jn(p,O),k;if(P===null){for(;O<m.length;O++)P=f(p,m[O],y),P!==null&&(d=o(P,d,O),C===null?k=P:C.sibling=P,C=P);return J&&jn(p,O),k}for(P=r(p,P);O<m.length;O++)F=g(P,p,O,m[O],y),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?O:F.key),d=o(F,d,O),C===null?k=F:C.sibling=F,C=F);return e&&P.forEach(function(ot){return t(p,ot)}),J&&jn(p,O),k}function w(p,d,m,y){var k=fi(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var C=k=null,P=d,O=d=0,F=null,M=m.next();P!==null&&!M.done;O++,M=m.next()){P.index>O?(F=P,P=null):F=P.sibling;var ot=h(p,P,M.value,y);if(ot===null){P===null&&(P=F);break}e&&P&&ot.alternate===null&&t(p,P),d=o(ot,d,O),C===null?k=ot:C.sibling=ot,C=ot,P=F}if(M.done)return n(p,P),J&&jn(p,O),k;if(P===null){for(;!M.done;O++,M=m.next())M=f(p,M.value,y),M!==null&&(d=o(M,d,O),C===null?k=M:C.sibling=M,C=M);return J&&jn(p,O),k}for(P=r(p,P);!M.done;O++,M=m.next())M=g(P,p,O,M.value,y),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?O:M.key),d=o(M,d,O),C===null?k=M:C.sibling=M,C=M);return e&&P.forEach(function(ui){return t(p,ui)}),J&&jn(p,O),k}function E(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Zo:e:{for(var k=m.key,C=d;C!==null;){if(C.key===k){if(k=m.type,k===gr){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&$h(k)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=gi(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===gr?(d=Xn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Fs(m.type,m.key,m.props,null,p.mode,y),y.ref=gi(p,d,m),y.return=p,p=y)}return s(p);case mr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Zl(m,p.mode,y),d.return=p,p=d}return s(p);case Qt:return C=m._init,E(p,d,C(m._payload),y)}if(ki(m))return v(p,d,m,y);if(fi(m))return w(p,d,m,y);cs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Jl(m,p.mode,y),d.return=p,p=d),s(p)):n(p,d)}return E}var Kr=tv(!0),nv=tv(!1),Ro={},St=An(Ro),eo=An(Ro),to=An(Ro);function Vn(e){if(e===Ro)throw Error(S(174));return e}function If(e,t){switch(K(to,t),K(eo,e),K(St,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nu(t,e)}q(St),K(St,t)}function Gr(){q(St),q(eo),q(to)}function rv(e){Vn(to.current);var t=Vn(St.current),n=Nu(t,e.type);t!==n&&(K(eo,e),K(St,n))}function Tf(e){eo.current===e&&(q(St),q(eo))}var Z=An(0);function ca(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Cf(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var Ds=Ht.ReactCurrentDispatcher,Gl=Ht.ReactCurrentBatchConfig,er=0,ee=null,ue=null,he=null,fa=!1,Di=!1,no=0,P_=0;function ke(){throw Error(S(321))}function Pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Af(e,t,n,r,i,o){if(er=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=e===null||e.memoizedState===null?R_:O_,e=n(r,i),Di){o=0;do{if(Di=!1,no=0,25<=o)throw Error(S(301));o+=1,he=ue=null,t.updateQueue=null,Ds.current=L_,e=n(r,i)}while(Di)}if(Ds.current=da,t=ue!==null&&ue.next!==null,er=0,he=ue=ee=null,fa=!1,t)throw Error(S(300));return e}function xf(){var e=no!==0;return no=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function rt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,ue=e;else{if(e===null)throw Error(S(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function ro(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ee.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ht(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,tr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ht(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function iv(){}function ov(e,t){var n=ee,r=rt(),i=t(),o=!ht(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Nf(lv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,io(9,av.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(S(349));er&30||sv(n,t,i)}return i}function sv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function av(e,t,n,r){t.value=n,t.getSnapshot=r,uv(t)&&cv(e)}function lv(e,t,n){return n(function(){uv(t)&&cv(e)})}function uv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function cv(e){var t=$t(e,1);t!==null&&dt(t,e,1,-1)}function jh(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=N_.bind(null,ee,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fv(){return rt().memoizedState}function Ms(e,t,n,r){var i=gt();ee.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function Ga(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Pf(r,s.deps)){i.memoizedState=io(t,n,o,r);return}}ee.flags|=e,i.memoizedState=io(1|t,n,o,r)}function Uh(e,t){return Ms(8390656,8,e,t)}function Nf(e,t){return Ga(2048,8,e,t)}function dv(e,t){return Ga(4,2,e,t)}function hv(e,t){return Ga(4,4,e,t)}function pv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mv(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4,4,pv.bind(null,t,e),n)}function Rf(){}function gv(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vv(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yv(e,t,n){return er&21?(ht(n,t)||(n=Eg(),ee.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function A_(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{H=n,Gl.transition=r}}function wv(){return rt().memoizedState}function x_(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_v(e))Ev(t,n);else if(n=Qg(e,t,n,r),n!==null){var i=Oe();dt(n,e,r,i),kv(n,t,r)}}function N_(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(e))Ev(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,s)){var l=t.interleaved;l===null?(i.next=i,kf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Qg(e,t,i,r),n!==null&&(i=Oe(),dt(n,e,r,i),kv(n,t,r))}}function _v(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ev(e,t){Di=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lf(e,n)}}var da={readContext:nt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},R_={readContext:nt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Uh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4194308,4,pv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ms(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=x_.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:jh,useDebugValue:Rf,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=jh(!1),t=e[0];return e=A_.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=gt();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),pe===null)throw Error(S(349));er&30||sv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Uh(lv.bind(null,r,o,e),[e]),r.flags|=2048,io(9,av.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=pe.identifierPrefix;if(J){var n=Nt,r=xt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O_={readContext:nt,useCallback:gv,useContext:nt,useEffect:Nf,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:Yl,useRef:fv,useState:function(){return Yl(ro)},useDebugValue:Rf,useDeferredValue:function(e){var t=rt();return yv(t,ue.memoizedState,e)},useTransition:function(){var e=Yl(ro)[0],t=rt().memoizedState;return[e,t]},useMutableSource:iv,useSyncExternalStore:ov,useId:wv,unstable_isNewReconciler:!1},L_={readContext:nt,useCallback:gv,useContext:nt,useEffect:Nf,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:vv,useReducer:Xl,useRef:fv,useState:function(){return Xl(ro)},useDebugValue:Rf,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:yv(t,ue.memoizedState,e)},useTransition:function(){var e=Xl(ro)[0],t=rt().memoizedState;return[e,t]},useMutableSource:iv,useSyncExternalStore:ov,useId:wv,unstable_isNewReconciler:!1};function Yr(e,t){try{var n="",r=t;do n+=aw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var b_=typeof WeakMap=="function"?WeakMap:Map;function Sv(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,uc=r),Zu(e,t)},n}function Iv(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zu(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new b_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Y_.bind(null,e,t,n),t.then(e,e))}function zh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var D_=Ht.ReactCurrentOwner,$e=!1;function Ne(e,t,n,r){t.child=e===null?nv(t,null,n,r):Kr(t,e.child,n,r)}function Vh(e,t,n,r,i){n=n.render;var o=t.ref;return Mr(t,i),r=Af(e,t,n,r,o,i),n=xf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(J&&n&&gf(t),t.flags|=1,Ne(e,t,r,i),t.child)}function Hh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Uf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tv(e,t,o,r,i)):(e=Fs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(s,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qi(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,jt(e,t,i)}return ec(e,t,n,r,i)}function Cv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Cr,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Cr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(Cr,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(Cr,ze),ze|=r;return Ne(e,t,i,n),t.child}function Pv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ec(e,t,n,r,i){var o=Ue(n)?Jn:Pe.current;return o=Hr(t,o),Mr(t,i),n=Af(e,t,n,r,o,i),r=xf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(J&&r&&gf(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Wh(e,t,n,r,i){if(Ue(n)){var o=!0;ia(t)}else o=!1;if(Mr(t,i),t.stateNode===null)$s(e,t),ev(t,n,r),Ju(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ue(n)?Jn:Pe.current,u=Hr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Mh(t,s,r,u),Jt=!1;var h=t.memoizedState;s.state=h,ua(t,r,s,i),l=t.memoizedState,a!==r||h!==l||je.current||Jt?(typeof c=="function"&&(Qu(t,n,c,r),l=t.memoizedState),(a=Jt||Dh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Jg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Ue(n)?Jn:Pe.current,l=Hr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mh(t,s,r,l),Jt=!1,h=t.memoizedState,s.state=h,ua(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||je.current||Jt?(typeof g=="function"&&(Qu(t,n,g,r),v=t.memoizedState),(u=Jt||Dh(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return tc(e,t,n,r,o,i)}function tc(e,t,n,r,i,o){Pv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Nh(t,n,!1),jt(e,t,o);r=t.stateNode,D_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,a,o)):Ne(e,t,a,o),t.memoizedState=r.state,i&&Nh(t,n,!0),t.child}function Av(e){var t=e.stateNode;t.pendingContext?xh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xh(e,t.context,!1),If(e,t.containerInfo)}function Kh(e,t,n,r,i){return Wr(),yf(i),t.flags|=256,Ne(e,t,n,r),t.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function rc(e){return{baseLanes:e,cachePool:null,transitions:null}}function xv(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(Z,i&1),e===null)return Xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qa(s,r,0,null),e=Xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rc(n),t.memoizedState=nc,e):Of(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return M_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=vn(a,o):(o=Xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?rc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=nc,r}return o=e.child,e=o.sibling,r=vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Of(e,t){return t=qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,n,r){return r!==null&&yf(r),Kr(t,e.child,null,n),e=Of(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(S(422))),fs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=qa({mode:"visible",children:r.children},i,0,null),o=Xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,s),t.child.memoizedState=rc(s),t.memoizedState=nc,o);if(!(t.mode&1))return fs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=ql(o,r,void 0),fs(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(e,i),dt(r,e,i,-1))}return jf(),r=ql(Error(S(421))),fs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=X_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=hn(i.nextSibling),Ke=t,J=!0,ut=null,e!==null&&(Qe[Je++]=xt,Qe[Je++]=Nt,Qe[Je++]=Zn,xt=e.id,Nt=e.overflow,Zn=t),t=Of(t,r.children),t.flags|=4096,t)}function Gh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qu(e.return,t,n)}function Ql(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Nv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gh(e,n,t);else if(e.tag===19)Gh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ca(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ql(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ca(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ql(t,!0,n,null,o);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $_(e,t,n){switch(t.tag){case 3:Av(t),Wr();break;case 5:rv(t);break;case 1:Ue(t.type)&&ia(t);break;case 4:If(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?xv(e,t,n):(K(Z,Z.current&1),e=jt(e,t,n),e!==null?e.sibling:null);K(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Cv(e,t,n)}return jt(e,t,n)}var Rv,ic,Ov,Lv;Rv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ic=function(){};Ov=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(St.current);var o=null;switch(n){case"input":i=Cu(e,i),r=Cu(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=xu(e,i),r=xu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}Ru(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Lv=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j_(e,t,n){var r=t.pendingProps;switch(vf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ue(t.type)&&ra(),Se(t),null;case 3:return r=t.stateNode,Gr(),q(je),q(Pe),Cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(us(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(dc(ut),ut=null))),ic(e,t),Se(t),null;case 5:Tf(t);var i=Vn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)Ov(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Se(t),null}if(e=Vn(St.current),us(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)G(Ii[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":nh(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":ih(r,o),G("invalid",r)}Ru(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ls(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ls(r.textContent,a,e),i=["children",""+a]):Vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":es(r),rh(r,o,!0);break;case"textarea":es(r),oh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=na)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[Zi]=r,Rv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ou(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)G(Ii[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":nh(e,r),i=Cu(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),G("invalid",e);break;case"textarea":ih(e,r),i=xu(e,r),G("invalid",e);break;default:i=r}Ru(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ug(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(e,l):typeof l=="number"&&Hi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",e):l!=null&&tf(e,o,l,s))}switch(n){case"input":es(e),rh(e,r,!1);break;case"textarea":es(e),oh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Or(e,!!r.multiple,o,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Lv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Vn(to.current),Vn(St.current),us(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ls(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Se(t),null;case 13:if(q(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&He!==null&&t.mode&1&&!(t.flags&128))qg(),Wr(),t.flags|=98560,o=!1;else if(o=us(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[vt]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ut!==null&&(dc(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):jf())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Gr(),ic(e,t),e===null&&Qi(t.stateNode.containerInfo),Se(t),null;case 10:return Ef(t.type._context),Se(t),null;case 17:return Ue(t.type)&&ra(),Se(t),null;case 19:if(q(Z),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)vi(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ca(e),s!==null){for(t.flags|=128,vi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Xr&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ca(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return Se(t),null}else 2*oe()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=Z.current,K(Z,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return $f(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function U_(e,t){switch(vf(t),t.tag){case 1:return Ue(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),q(je),q(Pe),Cf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tf(t),null;case 13:if(q(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Z),null;case 4:return Gr(),null;case 10:return Ef(t.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ds=!1,Ie=!1,F_=typeof WeakSet=="function"?WeakSet:Set,x=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function oc(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Yh=!1;function z_(e,t){if(Bu=Zs,e=$g(),mf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:e,selectionRange:n},Zs=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:at(t.type,w),E);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){ne(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return v=Yh,Yh=!1,v}function Mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&oc(t,n,o)}i=i.next}while(i!==r)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bv(e){var t=e.alternate;t!==null&&(e.alternate=null,bv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Zi],delete t[Ku],delete t[S_],delete t[I_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dv(e){return e.tag===5||e.tag===3||e.tag===4}function Xh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lc(e,t,n),e=e.sibling;e!==null;)lc(e,t,n),e=e.sibling}var ve=null,lt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Mv(e,t,n),n=n.sibling}function Mv(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:Ie||Tr(n,t);case 6:var r=ve,i=lt;ve=null,Yt(e,t,n),ve=r,lt=i,ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?Hl(e.parentNode,n):e.nodeType===1&&Hl(e,n),Yi(e)):Hl(ve,n.stateNode));break;case 4:r=ve,i=lt,ve=n.stateNode.containerInfo,lt=!0,Yt(e,t,n),ve=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&oc(n,t,s),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!Ie&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Yt(e,t,n),Ie=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function qh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F_),t.forEach(function(r){var i=q_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,lt=!1;break e;case 3:ve=a.stateNode.containerInfo,lt=!0;break e;case 4:ve=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ve===null)throw Error(S(160));Mv(o,s,i),ve=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$v(t,e),t=t.sibling}function $v(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),mt(e),r&4){try{Mi(3,e,e.return),Ya(3,e)}catch(w){ne(e,e.return,w)}try{Mi(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:st(t,e),mt(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(st(t,e),mt(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(w){ne(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ig(i,o),Ou(a,s);var u=Ou(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?ug(i,f):c==="dangerouslySetInnerHTML"?ag(i,f):c==="children"?Hi(i,f):tf(i,c,f,u)}switch(a){case"input":Pu(i,o);break;case"textarea":og(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Or(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(w){ne(e,e.return,w)}}break;case 6:if(st(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ne(e,e.return,w)}}break;case 3:if(st(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:st(t,e),mt(e);break;case 13:st(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=oe())),r&4&&qh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,st(t,e),Ie=u):st(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(x=e,c=e.child;c!==null;){for(f=x=c;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:Mi(4,h,h.return);break;case 1:Tr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ne(r,n,w)}}break;case 5:Tr(h,h.return);break;case 22:if(h.memoizedState!==null){Jh(f);continue}}g!==null?(g.return=h,x=g):Jh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lg("display",s))}catch(w){ne(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ne(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:st(t,e),mt(e),r&4&&qh(e);break;case 21:break;default:st(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=Xh(e);lc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xh(e);ac(e,a,s);break;default:throw Error(S(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B_(e,t,n){x=e,jv(e)}function jv(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ds;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=ds;var u=Ie;if(ds=s,(Ie=l)&&!u)for(x=i;x!==null;)s=x,l=s.child,s.tag===22&&s.memoizedState!==null?Zh(i):l!==null?(l.return=s,x=l):Zh(i);for(;o!==null;)x=o,jv(o),o=o.sibling;x=i,ds=a,Ie=u}Qh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):Qh(e)}}function Qh(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Ya(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||t.flags&512&&sc(t)}catch(h){ne(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Jh(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Zh(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{sc(t)}catch(l){ne(t,o,l)}break;case 5:var s=t.return;try{sc(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var V_=Math.ceil,ha=Ht.ReactCurrentDispatcher,Lf=Ht.ReactCurrentOwner,tt=Ht.ReactCurrentBatchConfig,B=0,pe=null,le=null,we=0,ze=0,Cr=An(0),ce=0,oo=null,tr=0,Xa=0,bf=0,$i=null,Me=null,Df=0,Xr=1/0,Pt=null,pa=!1,uc=null,mn=null,hs=!1,an=null,ma=0,ji=0,cc=null,js=-1,Us=0;function Oe(){return B&6?oe():js!==-1?js:js=oe()}function gn(e){return e.mode&1?B&2&&we!==0?we&-we:C_.transition!==null?(Us===0&&(Us=Eg()),Us):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ag(e.type)),e):1}function dt(e,t,n,r){if(50<ji)throw ji=0,cc=null,Error(S(185));Ao(e,n,r),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(Xa|=n),ce===4&&en(e,we)),Fe(e,r),n===1&&B===0&&!(t.mode&1)&&(Xr=oe()+500,Wa&&xn()))}function Fe(e,t){var n=e.callbackNode;Cw(e,t);var r=Js(e,e===pe?we:0);if(r===0)n!==null&&lh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lh(n),t===1)e.tag===0?T_(ep.bind(null,e)):Gg(ep.bind(null,e)),E_(function(){!(B&6)&&xn()}),n=null;else{switch(kg(r)){case 1:n=af;break;case 4:n=wg;break;case 16:n=Qs;break;case 536870912:n=_g;break;default:n=Qs}n=Kv(n,Uv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uv(e,t){if(js=-1,Us=0,B&6)throw Error(S(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=Js(e,e===pe?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=B;B|=2;var o=zv();(pe!==e||we!==t)&&(Pt=null,Xr=oe()+500,Yn(e,t));do try{K_();break}catch(a){Fv(e,a)}while(!0);_f(),ha.current=o,B=i,le!==null?t=0:(pe=null,we=0,t=ce)}if(t!==0){if(t===2&&(i=$u(e),i!==0&&(r=i,t=fc(e,i))),t===1)throw n=oo,Yn(e,0),en(e,r),Fe(e,oe()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!H_(i)&&(t=ga(e,r),t===2&&(o=$u(e),o!==0&&(r=o,t=fc(e,o))),t===1))throw n=oo,Yn(e,0),en(e,r),Fe(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Un(e,Me,Pt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Df+500-oe(),10<t)){if(Js(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wu(Un.bind(null,e,Me,Pt),t);break}Un(e,Me,Pt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ft(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V_(r/1960))-r,10<r){e.timeoutHandle=Wu(Un.bind(null,e,Me,Pt),r);break}Un(e,Me,Pt);break;case 5:Un(e,Me,Pt);break;default:throw Error(S(329))}}}return Fe(e,oe()),e.callbackNode===n?Uv.bind(null,e):null}function fc(e,t){var n=$i;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=ga(e,t),e!==2&&(t=Me,Me=n,t!==null&&dc(t)),e}function dc(e){Me===null?Me=e:Me.push.apply(Me,e)}function H_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~bf,t&=~Xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function ep(e){if(B&6)throw Error(S(327));$r();var t=Js(e,0);if(!(t&1))return Fe(e,oe()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=$u(e);r!==0&&(t=r,n=fc(e,r))}if(n===1)throw n=oo,Yn(e,0),en(e,t),Fe(e,oe()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,Me,Pt),Fe(e,oe()),null}function Mf(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Xr=oe()+500,Wa&&xn())}}function nr(e){an!==null&&an.tag===0&&!(B&6)&&$r();var t=B;B|=1;var n=tt.transition,r=H;try{if(tt.transition=null,H=1,e)return e()}finally{H=r,tt.transition=n,B=t,!(B&6)&&xn()}}function $f(){ze=Cr.current,q(Cr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,__(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Gr(),q(je),q(Pe),Cf();break;case 5:Tf(r);break;case 4:Gr();break;case 13:q(Z);break;case 19:q(Z);break;case 10:Ef(r.type._context);break;case 22:case 23:$f()}n=n.return}if(pe=e,le=e=vn(e.current,null),we=ze=t,ce=0,oo=null,bf=Xa=tr=0,Me=$i=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Bn=null}return e}function Fv(e,t){do{var n=le;try{if(_f(),Ds.current=da,fa){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fa=!1}if(er=0,he=ue=ee=null,Di=!1,no=0,Lf.current=null,n===null||n.return===null){ce=1,oo=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=zh(s);if(g!==null){g.flags&=-257,Bh(g,s,a,o,t),g.mode&1&&Fh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Fh(o,u,t),jf();break e}l=Error(S(426))}}else if(J&&a.mode&1){var E=zh(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Bh(E,s,a,o,t),yf(Yr(l,a));break e}}o=l=Yr(l,a),ce!==4&&(ce=2),$i===null?$i=[o]:$i.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Sv(o,l,t);Lh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mn===null||!mn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Iv(o,a,t);Lh(o,y);break e}}o=o.return}while(o!==null)}Vv(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function zv(){var e=ha.current;return ha.current=da,e===null?da:e}function jf(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(tr&268435455)&&!(Xa&268435455)||en(pe,we)}function ga(e,t){var n=B;B|=2;var r=zv();(pe!==e||we!==t)&&(Pt=null,Yn(e,t));do try{W_();break}catch(i){Fv(e,i)}while(!0);if(_f(),B=n,ha.current=r,le!==null)throw Error(S(261));return pe=null,we=0,ce}function W_(){for(;le!==null;)Bv(le)}function K_(){for(;le!==null&&!vw();)Bv(le)}function Bv(e){var t=Wv(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Vv(e):le=t,Lf.current=null}function Vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=U_(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=j_(n,t,ze),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function Un(e,t,n){var r=H,i=tt.transition;try{tt.transition=null,H=1,G_(e,t,n,r)}finally{tt.transition=i,H=r}return null}function G_(e,t,n,r){do $r();while(an!==null);if(B&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pw(e,o),e===pe&&(le=pe=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hs||(hs=!0,Kv(Qs,function(){return $r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=H;H=1;var a=B;B|=4,Lf.current=null,z_(e,n),$v(n,e),h_(Vu),Zs=!!Bu,Vu=Bu=null,e.current=n,B_(n),yw(),B=a,H=s,tt.transition=o}else e.current=n;if(hs&&(hs=!1,an=e,ma=i),o=e.pendingLanes,o===0&&(mn=null),Ew(n.stateNode),Fe(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=uc,uc=null,e;return ma&1&&e.tag!==0&&$r(),o=e.pendingLanes,o&1?e===cc?ji++:(ji=0,cc=e):ji=0,xn(),null}function $r(){if(an!==null){var e=kg(ma),t=tt.transition,n=H;try{if(tt.transition=null,H=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,ma=0,B&6)throw Error(S(331));var i=B;for(B|=4,x=e.current;x!==null;){var o=x,s=o.child;if(x.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Mi(8,c,o)}var f=c.child;if(f!==null)f.return=c,x=f;else for(;x!==null;){c=x;var h=c.sibling,g=c.return;if(bv(c),c===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}x=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,x=s;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,x=p;break e}x=o.return}}var d=e.current;for(x=d;x!==null;){s=x;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,x=m;else e:for(s=d;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ya(9,a)}}catch(k){ne(a,a.return,k)}if(a===s){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(B=i,xn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{H=n,tt.transition=t}}return!1}function tp(e,t,n){t=Yr(n,t),t=Sv(e,t,1),e=pn(e,t,1),t=Oe(),e!==null&&(Ao(e,1,t),Fe(e,t))}function ne(e,t,n){if(e.tag===3)tp(e,e,n);else for(;t!==null;){if(t.tag===3){tp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Yr(n,e),e=Iv(t,e,1),t=pn(t,e,1),e=Oe(),t!==null&&(Ao(t,1,e),Fe(t,e));break}}t=t.return}}function Y_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(we&n)===n&&(ce===4||ce===3&&(we&130023424)===we&&500>oe()-Df?Yn(e,0):bf|=n),Fe(e,t)}function Hv(e,t){t===0&&(e.mode&1?(t=rs,rs<<=1,!(rs&130023424)&&(rs=4194304)):t=1);var n=Oe();e=$t(e,t),e!==null&&(Ao(e,t,n),Fe(e,n))}function X_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hv(e,n)}function q_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Hv(e,n)}var Wv;Wv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,$_(e,t,n);$e=!!(e.flags&131072)}else $e=!1,J&&t.flags&1048576&&Yg(t,sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Hr(t,Pe.current);Mr(t,n),i=Af(null,t,r,e,i,n);var o=xf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,ia(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sf(t),i.updater=Ka,t.stateNode=i,i._reactInternals=t,Ju(t,r,e,n),t=tc(null,t,r,!0,o,n)):(t.tag=0,J&&o&&gf(t),Ne(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J_(r),e=at(r,e),i){case 0:t=ec(null,t,r,e,n);break e;case 1:t=Wh(null,t,r,e,n);break e;case 11:t=Vh(null,t,r,e,n);break e;case 14:t=Hh(null,t,r,at(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),ec(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Wh(e,t,r,i,n);case 3:e:{if(Av(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Jg(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yr(Error(S(423)),t),t=Kh(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(S(424)),t),t=Kh(e,t,r,n,i);break e}else for(He=hn(t.stateNode.containerInfo.firstChild),Ke=t,J=!0,ut=null,n=nv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===i){t=jt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return rv(t),e===null&&Xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Hu(r,i)?s=null:o!==null&&Hu(r,o)&&(t.flags|=32),Pv(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&Xu(t),null;case 13:return xv(e,t,n);case 4:return If(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Vh(e,t,r,i,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,K(aa,r._currentValue),r._currentValue=s,o!==null)if(ht(o.value,s)){if(o.children===i.children&&!je.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=bt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),qu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=nt(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Hh(e,t,r,i,n);case 15:return Tv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),$s(e,t),t.tag=1,Ue(r)?(e=!0,ia(t)):e=!1,Mr(t,n),ev(t,r,i),Ju(t,r,i,n),tc(null,t,r,!0,e,n);case 19:return Nv(e,t,n);case 22:return Cv(e,t,n)}throw Error(S(156,t.tag))};function Kv(e,t){return yg(e,t)}function Q_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Q_(e,t,n,r)}function Uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J_(e){if(typeof e=="function")return Uf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rf)return 11;if(e===of)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Uf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case gr:return Xn(n.children,i,o,t);case nf:s=8,i|=8;break;case ku:return e=et(12,n,t,i|2),e.elementType=ku,e.lanes=o,e;case Su:return e=et(13,n,t,i),e.elementType=Su,e.lanes=o,e;case Iu:return e=et(19,n,t,i),e.elementType=Iu,e.lanes=o,e;case tg:return qa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zm:s=10;break e;case eg:s=9;break e;case rf:s=11;break e;case of:s=14;break e;case Qt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function qa(e,t,n,r){return e=et(22,e,r,t),e.elementType=tg,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ff(e,t,n,r,i,o,s,a,l){return e=new Z_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(o),e}function e2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gv(e){if(!e)return Sn;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Kg(e,n,t)}return t}function Yv(e,t,n,r,i,o,s,a,l){return e=Ff(n,r,!0,e,i,o,s,a,l),e.context=Gv(null),n=e.current,r=Oe(),i=gn(n),o=bt(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,Ao(e,i,r),Fe(e,r),e}function Qa(e,t,n,r){var i=t.current,o=Oe(),s=gn(i);return n=Gv(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,s),e!==null&&(dt(e,i,s,o),bs(e,i,s)),s}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zf(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function t2(){return null}var Xv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bf(e){this._internalRoot=e}Ja.prototype.render=Bf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Qa(e,t,null,null)};Ja.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Qa(null,e,null,null)}),t[Mt]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&Pg(e)}};function Vf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function n2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=va(s);o.call(u)}}var s=Yv(t,r,e,0,null,!1,!1,"",rp);return e._reactRootContainer=s,e[Mt]=s.current,Qi(e.nodeType===8?e.parentNode:e),nr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=va(l);a.call(u)}}var l=Ff(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=l,e[Mt]=l.current,Qi(e.nodeType===8?e.parentNode:e),nr(function(){Qa(t,l,n,r)}),l}function el(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=va(s);a.call(l)}}Qa(t,s,e,i)}else s=n2(n,t,e,i,r);return va(s)}Sg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Si(t.pendingLanes);n!==0&&(lf(t,n|1),Fe(t,oe()),!(B&6)&&(Xr=oe()+500,xn()))}break;case 13:nr(function(){var r=$t(e,1);if(r!==null){var i=Oe();dt(r,e,1,i)}}),zf(e,1)}};uf=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Oe();dt(t,e,134217728,n)}zf(e,134217728)}};Ig=function(e){if(e.tag===13){var t=gn(e),n=$t(e,t);if(n!==null){var r=Oe();dt(n,e,t,r)}zf(e,t)}};Tg=function(){return H};Cg=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};bu=function(e,t,n){switch(t){case"input":if(Pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ha(r);if(!i)throw Error(S(90));rg(r),Pu(r,i)}}}break;case"textarea":og(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};dg=Mf;hg=nr;var r2={usingClientEntryPoint:!1,Events:[No,_r,Ha,cg,fg,Mf]},yi={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i2={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gg(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||t2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{Fa=ps.inject(i2),kt=ps}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r2;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(t))throw Error(S(200));return e2(e,t,null,n)};Ye.createRoot=function(e,t){if(!Vf(e))throw Error(S(299));var n=!1,r="",i=Xv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ff(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Bf(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=gg(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return nr(e)};Ye.hydrate=function(e,t,n){if(!Za(t))throw Error(S(200));return el(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Vf(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yv(t,null,e,1,n??null,i,!1,o,s),e[Mt]=t.current,Qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ja(t)};Ye.render=function(e,t,n){if(!Za(t))throw Error(S(200));return el(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Za(e))throw Error(S(40));return e._reactRootContainer?(nr(function(){el(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Mf;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Za(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return el(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(e){console.error(e)}}qv(),Ym.exports=Ye;var o2=Ym.exports,ip=o2;_u.createRoot=ip.createRoot,_u.hydrateRoot=ip.hydrateRoot;var op={};/**
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
 */const Qv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},s2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new a2;const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l2=function(e){const t=Qv(e);return Jv.encodeByteArray(t,!0)},Zv=function(e){return l2(e).replace(/\./g,"")},e0=function(e){try{return Jv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function u2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const c2=()=>u2().__FIREBASE_DEFAULTS__,f2=()=>{if(typeof process>"u"||typeof op>"u")return;const e=op.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&e0(e[1]);return t&&JSON.parse(t)},Hf=()=>{try{return c2()||f2()||d2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},h2=e=>{var t,n;return(n=(t=Hf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},t0=()=>{var e;return(e=Hf())===null||e===void 0?void 0:e.config},n0=e=>{var t;return(t=Hf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class p2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function g2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function v2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y2(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w2(){try{return typeof indexedDB=="object"}catch{return!1}}function _2(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const E2="FirebaseError";class Wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=E2,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?k2(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Wt(i,a,r)}}function k2(e,t){return e.replace(S2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const S2=/\{\$([^}]+)}/g;function I2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ya(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(sp(o)&&sp(s)){if(!ya(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sp(e){return e!==null&&typeof e=="object"}/**
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
 */function Lo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Ci(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function T2(e,t){const n=new C2(e,t);return n.subscribe.bind(n)}class C2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P2(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=eu),i.error===void 0&&(i.error=eu),i.complete===void 0&&(i.complete=eu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function eu(){}/**
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
 */function Kt(e){return e&&e._delegate?e._delegate:e}class rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class A2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new p2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(N2(t))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fn){return this.instances.has(t)}getOptions(t=Fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Fn){return this.component?this.component.multipleInstances?t:Fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x2(e){return e===Fn?void 0:e}function N2(e){return e.instantiationMode==="EAGER"}/**
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
 */class R2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new A2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const O2={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},L2=V.INFO,b2={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},D2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=b2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wf{constructor(t){this.name=t,this._logLevel=L2,this._logHandler=D2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?O2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const M2=(e,t)=>t.some(n=>e instanceof n);let ap,lp;function $2(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j2(){return lp||(lp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,hc=new WeakMap,i0=new WeakMap,tu=new WeakMap,Kf=new WeakMap;function U2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(yn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&r0.set(n,e)}).catch(()=>{}),Kf.set(t,e),t}function F2(e){if(hc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});hc.set(e,t)}let pc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||i0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function z2(e){pc=e(pc)}function B2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(nu(this),t,...n);return i0.set(r,t.sort?t.sort():[t]),yn(r)}:j2().includes(e)?function(...t){return e.apply(nu(this),t),yn(r0.get(this))}:function(...t){return yn(e.apply(nu(this),t))}}function V2(e){return typeof e=="function"?B2(e):(e instanceof IDBTransaction&&F2(e),M2(e,$2())?new Proxy(e,pc):e)}function yn(e){if(e instanceof IDBRequest)return U2(e);if(tu.has(e))return tu.get(e);const t=V2(e);return t!==e&&(tu.set(e,t),Kf.set(t,e)),t}const nu=e=>Kf.get(e);function H2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=yn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(yn(s.result),l.oldVersion,l.newVersion,yn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const W2=["get","getKey","getAll","getAllKeys","count"],K2=["put","add","delete","clear"],ru=new Map;function up(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ru.get(t))return ru.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=K2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W2.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ru.set(t,o),o}z2(e=>({...e,get:(t,n,r)=>up(t,n)||e.get(t,n,r),has:(t,n)=>!!up(t,n)||e.has(t,n)}));/**
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
 */class G2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mc="@firebase/app",cp="0.9.28";/**
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
 */const ir=new Wf("@firebase/app"),X2="@firebase/app-compat",q2="@firebase/analytics-compat",Q2="@firebase/analytics",J2="@firebase/app-check-compat",Z2="@firebase/app-check",eE="@firebase/auth",tE="@firebase/auth-compat",nE="@firebase/database",rE="@firebase/database-compat",iE="@firebase/functions",oE="@firebase/functions-compat",sE="@firebase/installations",aE="@firebase/installations-compat",lE="@firebase/messaging",uE="@firebase/messaging-compat",cE="@firebase/performance",fE="@firebase/performance-compat",dE="@firebase/remote-config",hE="@firebase/remote-config-compat",pE="@firebase/storage",mE="@firebase/storage-compat",gE="@firebase/firestore",vE="@firebase/firestore-compat",yE="firebase",wE="10.8.1";/**
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
 */const gc="[DEFAULT]",_E={[mc]:"fire-core",[X2]:"fire-core-compat",[Q2]:"fire-analytics",[q2]:"fire-analytics-compat",[Z2]:"fire-app-check",[J2]:"fire-app-check-compat",[eE]:"fire-auth",[tE]:"fire-auth-compat",[nE]:"fire-rtdb",[rE]:"fire-rtdb-compat",[iE]:"fire-fn",[oE]:"fire-fn-compat",[sE]:"fire-iid",[aE]:"fire-iid-compat",[lE]:"fire-fcm",[uE]:"fire-fcm-compat",[cE]:"fire-perf",[fE]:"fire-perf-compat",[dE]:"fire-rc",[hE]:"fire-rc-compat",[pE]:"fire-gcs",[mE]:"fire-gcs-compat",[gE]:"fire-fst",[vE]:"fire-fst-compat","fire-js":"fire-js",[yE]:"fire-js-all"};/**
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
 */const wa=new Map,vc=new Map;function EE(e,t){try{e.container.addComponent(t)}catch(n){ir.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qr(e){const t=e.name;if(vc.has(t))return ir.debug(`There were multiple attempts to register component ${t}.`),!1;vc.set(t,e);for(const n of wa.values())EE(n,e);return!0}function o0(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const kE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Oo("app","Firebase",kE);/**
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
 */class SE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=wE;function s0(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:gc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=t0()),!n)throw wn.create("no-options");const o=wa.get(i);if(o){if(ya(n,o.options)&&ya(r,o.config))return o;throw wn.create("duplicate-app",{appName:i})}const s=new R2(i);for(const l of vc.values())s.addComponent(l);const a=new SE(n,r,s);return wa.set(i,a),a}function IE(e=gc){const t=wa.get(e);if(!t&&e===gc&&t0())return s0();if(!t)throw wn.create("no-app",{appName:e});return t}function _n(e,t,n){var r;let i=(r=_E[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}qr(new rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const TE="firebase-heartbeat-database",CE=1,so="firebase-heartbeat-store";let iu=null;function a0(){return iu||(iu=H2(TE,CE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(e=>{throw wn.create("idb-open",{originalErrorMessage:e.message})})),iu}async function PE(e){try{const n=(await a0()).transaction(so),r=await n.objectStore(so).get(l0(e));return await n.done,r}catch(t){if(t instanceof Wt)ir.warn(t.message);else{const n=wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ir.warn(n.message)}}}async function fp(e,t){try{const r=(await a0()).transaction(so,"readwrite");await r.objectStore(so).put(t,l0(e)),await r.done}catch(n){if(n instanceof Wt)ir.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function l0(e){return`${e.name}!${e.options.appId}`}/**
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
 */const AE=1024,xE=30*24*60*60*1e3;class NE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=dp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=xE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dp(),{heartbeatsToSend:r,unsentEntries:i}=RE(this._heartbeatsCache.heartbeats),o=Zv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function dp(){return new Date().toISOString().substring(0,10)}function RE(e,t=AE){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),hp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w2()?_2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hp(e){return Zv(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function LE(e){qr(new rr("platform-logger",t=>new G2(t),"PRIVATE")),qr(new rr("heartbeat",t=>new NE(t),"PRIVATE")),_n(mc,cp,e),_n(mc,cp,"esm2017"),_n("fire-js","")}LE("");var bE="firebase",DE="10.8.1";/**
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
 */_n(bE,DE,"app");var ME=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Gf=Gf||{},b=ME||self;function tl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function bo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function $E(e){return Object.prototype.hasOwnProperty.call(e,ou)&&e[ou]||(e[ou]=++jE)}var ou="closure_uid_"+(1e9*Math.random()>>>0),jE=0;function UE(e,t,n){return e.call.apply(e.bind,arguments)}function FE(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Te(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=UE:Te=FE,Te.apply(null,arguments)}function ms(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ge(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Nn(){this.s=this.s,this.o=this.o}var zE=0;Nn.prototype.s=!1;Nn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zE!=0)&&$E(this)};Nn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const u0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Yf(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function pp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var BE=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};b.addEventListener("test",n,t),b.removeEventListener("test",n,t)}catch{}return e}();function ao(e){return/^[\s\xa0]*$/.test(e)}function nl(){var e=b.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return nl().indexOf(e)!=-1}function Xf(e){return Xf[" "](e),e}Xf[" "]=function(){};function VE(e,t){var n=Mk;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var HE=yt("Opera"),lo=yt("Trident")||yt("MSIE"),c0=yt("Edge"),yc=c0||lo,f0=yt("Gecko")&&!(nl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),WE=nl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function d0(){var e=b.document;return e?e.documentMode:void 0}e:{var mp="",su=function(){var e=nl();if(f0)return/rv:([^\);]+)(\)|;)/.exec(e);if(c0)return/Edge\/([\d\.]+)/.exec(e);if(lo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(WE)return/WebKit\/(\S+)/.exec(e);if(HE)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(su&&(mp=su?su[1]:""),lo){var gp=d0();if(gp!=null&&gp>parseFloat(mp))break e}}b.document&&lo&&d0();function uo(e,t){if(Ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(f0){e:{try{Xf(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:KE[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&uo.$.h.call(this)}}ge(uo,Ce);var KE={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Do="closure_listenable_"+(1e6*Math.random()|0),GE=0;function YE(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++GE,this.fa=this.ia=!1}function rl(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function qf(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function XE(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function h0(e){const t={};for(const n in e)t[n]=e[n];return t}const vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<vp.length;o++)n=vp[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function il(e){this.src=e,this.g={},this.h=0}il.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=_c(e,t,r,i);return-1<s?(t=e[s],n||(t.ia=!1)):(t=new YE(t,this.src,o,!!r,i),t.ia=n,e.push(t)),t};function wc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=u0(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(rl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function _c(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==r)return i}return-1}var Qf="closure_lm_"+(1e6*Math.random()|0),au={};function m0(e,t,n,r,i){if(r&&r.once)return v0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)m0(e,t[o],n,r,i);return null}return n=ed(n),e&&e[Do]?e.O(t,n,bo(r)?!!r.capture:!!r,i):g0(e,t,n,!1,r,i)}function g0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=bo(i)?!!i.capture:!!i,a=Zf(e);if(a||(e[Qf]=a=new il(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=qE(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)BE||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(w0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qE(){function e(n){return t.call(e.src,e.listener,n)}const t=QE;return e}function v0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)v0(e,t[o],n,r,i);return null}return n=ed(n),e&&e[Do]?e.P(t,n,bo(r)?!!r.capture:!!r,i):g0(e,t,n,!0,r,i)}function y0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)y0(e,t[o],n,r,i);else r=bo(r)?!!r.capture:!!r,n=ed(n),e&&e[Do]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=_c(o,n,r,i),-1<n&&(rl(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Zf(e))&&(t=e.g[t.toString()],e=-1,t&&(e=_c(t,n,r,i)),(n=-1<e?t[e]:null)&&Jf(n))}function Jf(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Do])wc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(w0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zf(t))?(wc(n,e),n.h==0&&(n.src=null,t[Qf]=null)):rl(e)}}}function w0(e){return e in au?au[e]:au[e]="on"+e}function QE(e,t){if(e.fa)e=!0;else{t=new uo(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Jf(e),e=n.call(r,t)}return e}function Zf(e){return e=e[Qf],e instanceof il?e:null}var lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ed(e){return typeof e=="function"?e:(e[lu]||(e[lu]=function(t){return e.handleEvent(t)}),e[lu])}function me(){Nn.call(this),this.i=new il(this),this.S=this,this.J=null}ge(me,Nn);me.prototype[Do]=!0;me.prototype.removeEventListener=function(e,t,n,r){y0(this,e,t,n,r)};function _e(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ce(t,e);else if(t instanceof Ce)t.target=t.target||e;else{var i=t;t=new Ce(r,e),p0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=gs(s,r,!0,t)&&i}if(s=t.g=e,i=gs(s,r,!0,t)&&i,i=gs(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=gs(s,r,!1,t)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)rl(n[r]);delete e.g[t],e.h--}}this.J=null};me.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};me.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function gs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,l=s.la||s.src;s.ia&&wc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var td=b.JSON.stringify;class JE{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ZE(){var e=nd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ek{constructor(){this.h=this.g=null}add(t,n){const r=_0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _0=new JE(()=>new tk,e=>e.reset());class tk{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nk(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rk(e){b.setTimeout(()=>{throw e},0)}let co,fo=!1,nd=new ek,E0=()=>{const e=b.Promise.resolve(void 0);co=()=>{e.then(ik)}};var ik=()=>{for(var e;e=ZE();){try{e.h.call(e.g)}catch(n){rk(n)}var t=_0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}fo=!1};function ol(e,t){me.call(this),this.h=e||1,this.g=t||b,this.j=Te(this.qb,this),this.l=Date.now()}ge(ol,me);I=ol.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(rd(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){ol.$.N.call(this),rd(this),delete this.g};function id(e,t,n){if(typeof e=="function")n&&(e=Te(e,n));else if(e&&typeof e.handleEvent=="function")e=Te(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(e,t||0)}function k0(e){e.g=id(()=>{e.g=null,e.i&&(e.i=!1,k0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ok extends Nn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:k0(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ho(e){Nn.call(this),this.h=e,this.g={}}ge(ho,Nn);var yp=[];function S0(e,t,n,r){Array.isArray(n)||(n&&(yp[0]=n.toString()),n=yp);for(var i=0;i<n.length;i++){var o=m0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function I0(e){qf(e.g,function(t,n){this.g.hasOwnProperty(n)&&Jf(t)},e),e.g={}}ho.prototype.N=function(){ho.$.N.call(this),I0(this)};ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sl(){this.g=!0}sl.prototype.Ea=function(){this.g=!1};function sk(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function ak(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Pr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+uk(e,n)+(r?" "+r:"")})}function lk(e,t){e.info(function(){return"TIMEOUT: "+t})}sl.prototype.info=function(){};function uk(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return td(n)}catch{return t}}var ri={},wp=null;function od(){return wp=wp||new me}ri.Ta="serverreachability";function T0(e){Ce.call(this,ri.Ta,e)}ge(T0,Ce);function po(e){const t=od();_e(t,new T0(t))}ri.STAT_EVENT="statevent";function C0(e,t){Ce.call(this,ri.STAT_EVENT,e),this.stat=t}ge(C0,Ce);function Re(e){const t=od();_e(t,new C0(t,e))}ri.Ua="timingevent";function P0(e,t){Ce.call(this,ri.Ua,e),this.size=t}ge(P0,Ce);function Mo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){e()},t)}var sd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ck={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ad(){}ad.prototype.h=null;function _p(e){return e.h||(e.h=e.i())}function fk(){}var $o={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ld(){Ce.call(this,"d")}ge(ld,Ce);function ud(){Ce.call(this,"c")}ge(ud,Ce);var Ec;function al(){}ge(al,ad);al.prototype.g=function(){return new XMLHttpRequest};al.prototype.i=function(){return{}};Ec=new al;function jo(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ho(this),this.P=dk,e=yc?125:void 0,this.V=new ol(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new A0}function A0(){this.i=null,this.g="",this.h=!1}var dk=45e3,x0={},kc={};I=jo.prototype;I.setTimeout=function(e){this.P=e};function Sc(e,t,n){e.L=1,e.A=ul(Ut(t)),e.u=n,e.S=!0,N0(e,null)}function N0(e,t){e.G=Date.now(),Uo(e),e.B=Ut(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),j0(n.i,"t",r),e.o=0,n=e.l.J,e.h=new A0,e.g=oy(e.l,n?t:null,!e.u),0<e.O&&(e.M=new ok(Te(e.Pa,e,e.g),e.O)),S0(e.U,e.g,"readystatechange",e.nb),t=e.I?h0(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),po(),sk(e.j,e.v,e.B,e.m,e.W,e.u)}I.nb=function(e){e=e.target;const t=this.M;t&&wt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)e:{const c=wt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||yc||this.g&&(this.h.h||this.g.ja()||Ip(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?po(3):po(2)),ll(this);var n=this.g.da();this.ca=n;t:if(R0(this)){var r=Ip(this.g);e="";var i=r.length,o=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),Ui(this);var s="";break t}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.length=0,this.h.g+=e,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,ak(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ao(a)){var u=a;break t}}u=null}if(n=u)Pr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ic(this,n);else{this.i=!1,this.s=3,Re(12),Hn(this),Ui(this);break e}}this.S?(O0(this,c,s),yc&&this.i&&c==3&&(S0(this.U,this.V,"tick",this.mb),this.V.start())):(Pr(this.j,this.m,s,null),Ic(this,s)),c==4&&Hn(this),this.i&&!this.J&&(c==4?ty(this.l,this):(this.i=!1,Uo(this)))}else Lk(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Hn(this),Ui(this)}}}catch{}finally{}};function R0(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function O0(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=hk(e,n),i==kc){t==4&&(e.s=4,Re(14),r=!1),Pr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==x0){e.s=4,Re(15),Pr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Pr(e.j,e.m,i,null),Ic(e,i);R0(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Re(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),md(t),t.M=!0,Re(11))):(Pr(e.j,e.m,n,"[Invalid Chunked Response]"),Hn(e),Ui(e))}I.mb=function(){if(this.g){var e=wt(this.g),t=this.g.ja();this.o<t.length&&(ll(this),O0(this,e,t),this.i&&e!=4&&Uo(this))}};function hk(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?kc:(n=Number(t.substring(n,r)),isNaN(n)?x0:(r+=1,r+n>t.length?kc:(t=t.slice(r,r+n),e.o=r+n,t)))}I.cancel=function(){this.J=!0,Hn(this)};function Uo(e){e.Y=Date.now()+e.P,L0(e,e.P)}function L0(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Mo(Te(e.lb,e),t)}function ll(e){e.C&&(b.clearTimeout(e.C),e.C=null)}I.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(lk(this.j,this.B),this.L!=2&&(po(),Re(17)),Hn(this),this.s=2,Ui(this)):L0(this,this.Y-e)};function Ui(e){e.l.H==0||e.J||ty(e.l,e)}function Hn(e){ll(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,rd(e.V),I0(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ic(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Tc(n.i,e))){if(!e.K&&Tc(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ka(n),hl(n);else break e;pd(n),Re(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Mo(Te(n.ib,n),6e3));if(1>=z0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wn(n,11)}else if((e.K||n.g==e)&&ka(n),!ao(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.i;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(cd(o,o.h),o.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,X(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=e;if(r.wa=iy(r,r.J?r.pa:null,r.Y),s.K){B0(r.i,s);var a=s,l=r.L;l&&a.setTimeout(l),a.C&&(ll(a),Uo(a)),r.g=s}else Z0(r);0<n.j.length&&pl(n)}else u[0]!="stop"&&u[0]!="close"||Wn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wn(n,7):hd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}po(4)}catch{}}function pk(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(tl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function mk(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(tl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function b0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(tl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=mk(e),r=pk(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var D0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gk(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qn){this.h=e.h,_a(this,e.j),this.s=e.s,this.g=e.g,Ea(this,e.m),this.l=e.l;var t=e.i,n=new mo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ep(this,n),this.o=e.o}else e&&(t=String(e).match(D0))?(this.h=!1,_a(this,t[1]||"",!0),this.s=Pi(t[2]||""),this.g=Pi(t[3]||"",!0),Ea(this,t[4]),this.l=Pi(t[5]||"",!0),Ep(this,t[6]||"",!0),this.o=Pi(t[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}qn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ai(t,kp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ai(t,kp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ai(n,n.charAt(0)=="/"?wk:yk,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ai(n,Ek)),e.join("")};function Ut(e){return new qn(e)}function _a(e,t,n){e.j=n?Pi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ea(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ep(e,t,n){t instanceof mo?(e.i=t,kk(e.i,e.h)):(n||(t=Ai(t,_k)),e.i=new mo(t,e.h))}function X(e,t,n){e.i.set(t,n)}function ul(e){return X(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ai(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,vk),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function vk(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var kp=/[#\/\?@]/g,yk=/[#\?:]/g,wk=/[#\?]/g,_k=/[#\?@]/g,Ek=/#/g;function mo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rn(e){e.g||(e.g=new Map,e.h=0,e.i&&gk(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=mo.prototype;I.add=function(e,t){Rn(this),this.i=null,e=ii(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function M0(e,t){Rn(e),t=ii(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $0(e,t){return Rn(e),t=ii(e,t),e.g.has(t)}I.forEach=function(e,t){Rn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){Rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};I.Z=function(e){Rn(this);let t=[];if(typeof e=="string")$0(this,e)&&(t=t.concat(this.g.get(ii(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return Rn(this),this.i=null,e=ii(this,e),$0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function j0(e,t,n){M0(e,t),0<n.length&&(e.i=null,e.g.set(ii(e,t),Yf(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ii(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kk(e,t){t&&!e.j&&(Rn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(M0(this,r),j0(this,i,n))},e)),e.j=t}var Sk=class{constructor(e,t){this.g=e,this.map=t}};function U0(e){this.l=e||Ik,b.PerformanceNavigationTiming?(e=b.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ik=10;function F0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function z0(e){return e.h?1:e.g?e.g.size:0}function Tc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function cd(e,t){e.g?e.g.add(t):e.h=t}function B0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}U0.prototype.cancel=function(){if(this.i=V0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function V0(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Yf(e.i)}var Tk=class{stringify(e){return b.JSON.stringify(e,void 0)}parse(e){return b.JSON.parse(e,void 0)}};function Ck(){this.g=new Tk}function Pk(e,t,n){const r=n||"";try{b0(e,function(i,o){let s=i;bo(i)&&(s=td(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ak(e,t){const n=new sl;if(b.Image){const r=new Image;r.onload=ms(vs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ms(vs,n,r,"TestLoadImage: error",!1,t),r.onabort=ms(vs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ms(vs,n,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function vs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function cl(e){this.l=e.ec||null,this.j=e.ob||!1}ge(cl,ad);cl.prototype.g=function(){return new fl(this.l,this.j)};cl.prototype.i=function(e){return function(){return e}}({});function fl(e,t){me.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=fd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(fl,me);var fd=0;I=fl.prototype;I.open=function(e,t){if(this.readyState!=fd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,go(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=fd};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H0(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function H0(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fo(this):go(this),this.readyState==3&&H0(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,Fo(this))};I.Ya=function(e){this.g&&(this.response=e,Fo(this))};I.ka=function(){this.g&&Fo(this)};function Fo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,go(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function go(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var xk=b.JSON.parse;function ae(e){me.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=W0,this.L=this.M=!1}ge(ae,me);var W0="",Nk=/^https?$/i,Rk=["POST","PUT"];I=ae.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ec.g(),this.C=this.u?_p(this.u):_p(Ec),this.g.onreadystatechange=Te(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(o){Sp(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=b.FormData&&e instanceof b.FormData,!(0<=u0(Rk,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Y0(this),0<this.B&&((this.L=Ok(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.ua,this)):this.A=id(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Sp(this,o)}};function Ok(e){return lo&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof Gf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function Sp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,K0(e),dl(e)}function K0(e){e.F||(e.F=!0,_e(e,"complete"),_e(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_e(this,"complete"),_e(this,"abort"),dl(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dl(this,!0)),ae.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?G0(this):this.kb())};I.kb=function(){G0(this)};function G0(e){if(e.h&&typeof Gf<"u"&&(!e.C[1]||wt(e)!=4||e.da()!=2)){if(e.v&&wt(e)==4)id(e.La,0,e);else if(_e(e,"readystatechange"),wt(e)==4){e.h=!1;try{const s=e.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=s===0){var i=String(e.I).match(D0)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Nk.test(i?i.toLowerCase():"")}n=r}if(n)_e(e,"complete"),_e(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",K0(e)}}finally{dl(e)}}}}function dl(e,t){if(e.g){Y0(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||_e(e,"ready");try{n.onreadystatechange=r}catch{}}}function Y0(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(b.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function wt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),xk(t)}};function Ip(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case W0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Lk(e){const t={};e=(e.g&&2<=wt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ao(e[r]))continue;var n=nk(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}XE(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function X0(e){let t="";return qf(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function dd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=X0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):X(e,t,n))}function wi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function q0(e){this.Ga=0,this.j=[],this.l=new sl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wi("baseRetryDelayMs",5e3,e),this.hb=wi("retryDelaySeedMs",1e4,e),this.eb=wi("forwardChannelMaxRetries",2,e),this.xa=wi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new U0(e&&e.concurrentRequestLimit),this.Ja=new Ck,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=q0.prototype;I.ra=8;I.H=1;function hd(e){if(Q0(e),e.H==3){var t=e.W++,n=Ut(e.I);if(X(n,"SID",e.K),X(n,"RID",t),X(n,"TYPE","terminate"),zo(e,n),t=new jo(e,e.l,t),t.L=2,t.A=ul(Ut(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&b.Image&&(new Image().src=t.A,n=!0),n||(t.g=oy(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Uo(t)}ry(e)}function hl(e){e.g&&(md(e),e.g.cancel(),e.g=null)}function Q0(e){hl(e),e.u&&(b.clearTimeout(e.u),e.u=null),ka(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&b.clearTimeout(e.m),e.m=null)}function pl(e){if(!F0(e.i)&&!e.m){e.m=!0;var t=e.Na;co||E0(),fo||(co(),fo=!0),nd.add(t,e),e.C=0}}function bk(e,t){return z0(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Mo(Te(e.Na,e,t),ny(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new jo(this,this.l,e);let o=this.s;if(this.U&&(o?(o=h0(o),p0(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=J0(this,i,t),n=Ut(this.I),X(n,"RID",e),X(n,"CVER",22),this.F&&X(n,"X-HTTP-Session-Id",this.F),zo(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(X0(o)))+"&"+t:this.o&&dd(n,this.o,o)),cd(this.i,i),this.bb&&X(n,"TYPE","init"),this.P?(X(n,"$req",t),X(n,"SID","null"),i.aa=!0,Sc(i,n,null)):Sc(i,n,t),this.H=2}}else this.H==3&&(e?Tp(this,e):this.j.length==0||F0(this.i)||Tp(this))};function Tp(e,t){var n;t?n=t.m:n=e.W++;const r=Ut(e.I);X(r,"SID",e.K),X(r,"RID",n),X(r,"AID",e.V),zo(e,r),e.o&&e.s&&dd(r,e.o,e.s),n=new jo(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=J0(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),cd(e.i,n),Sc(n,r,t)}function zo(e,t){e.na&&qf(e.na,function(n,r){X(t,r,n)}),e.h&&b0({},function(n,r){X(t,r,n)})}function J0(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Te(e.h.Va,e.h,e):null;e:{var i=e.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=o,0>u)o=Math.max(0,i[l].g-100),a=!1;else try{Pk(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Z0(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;co||E0(),fo||(co(),fo=!0),nd.add(t,e),e.A=0}}function pd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Mo(Te(e.Ma,e),ny(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,ey(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Mo(Te(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Re(10),hl(this),ey(this))};function md(e){e.B!=null&&(b.clearTimeout(e.B),e.B=null)}function ey(e){e.g=new jo(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ut(e.wa);X(t,"RID","rpc"),X(t,"SID",e.K),X(t,"AID",e.V),X(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&X(t,"TO",e.qa),X(t,"TYPE","xmlhttp"),zo(e,t),e.o&&e.s&&dd(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ul(Ut(t)),n.u=null,n.S=!0,N0(n,e)}I.ib=function(){this.v!=null&&(this.v=null,hl(this),pd(this),Re(19))};function ka(e){e.v!=null&&(b.clearTimeout(e.v),e.v=null)}function ty(e,t){var n=null;if(e.g==t){ka(e),md(e),e.g=null;var r=2}else if(Tc(e.i,t))n=t.F,B0(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=od(),_e(r,new P0(r,n)),pl(e)}else Z0(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&bk(e,t)||r==2&&pd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Wn(e,5);break;case 4:Wn(e,10);break;case 3:Wn(e,6);break;default:Wn(e,2)}}}function ny(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Wn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Te(e.pb,e);n||(n=new qn("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||_a(n,"https"),ul(n)),Ak(n.toString(),r)}else Re(2);e.H=0,e.h&&e.h.za(t),ry(e),Q0(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Re(2)):(this.l.info("Failed to ping google.com"),Re(1))};function ry(e){if(e.H=0,e.ma=[],e.h){const t=V0(e.i);(t.length!=0||e.j.length!=0)&&(pp(e.ma,t),pp(e.ma,e.j),e.i.i.length=0,Yf(e.j),e.j.length=0),e.h.ya()}}function iy(e,t,n){var r=n instanceof qn?Ut(n):new qn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ea(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new qn(null);r&&_a(o,r),t&&(o.g=t),i&&Ea(o,i),n&&(o.l=n),r=o}return n=e.F,t=e.Da,n&&t&&X(r,n,t),X(r,"VER",e.ra),zo(e,r),r}function oy(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new ae(new cl({ob:n})):new ae(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function sy(){}I=sy.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function it(e,t){me.call(this),this.g=new q0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ao(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ao(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new oi(this)}ge(it,me);it.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Re(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=iy(e,null,e.Y),pl(e)};it.prototype.close=function(){hd(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=td(e),e=n);t.j.push(new Sk(t.fb++,e)),t.H==3&&pl(t)};it.prototype.N=function(){this.g.h=null,delete this.j,hd(this.g),delete this.g,it.$.N.call(this)};function ay(e){ld.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ge(ay,ld);function ly(){ud.call(this),this.status=1}ge(ly,ud);function oi(e){this.g=e}ge(oi,sy);oi.prototype.Ba=function(){_e(this.g,"a")};oi.prototype.Aa=function(e){_e(this.g,new ay(e))};oi.prototype.za=function(e){_e(this.g,new ly)};oi.prototype.ya=function(){_e(this.g,"b")};function Dk(){this.blockSize=-1}function Ct(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Ct,Dk);Ct.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uu(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}Ct.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,o=0;o<t;){if(i==0)for(;o<=n;)uu(this,e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(r[i++]=e.charCodeAt(o++),i==this.blockSize){uu(this,r),i=0;break}}else for(;o<t;)if(r[i++]=e[o++],i==this.blockSize){uu(this,r),i=0;break}}this.h=i,this.i+=t};Ct.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function W(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=e[i]|0;r&&o==t||(n[i]=o,r=!1)}this.g=n}var Mk={};function gd(e){return-128<=e&&128>e?VE(e,function(t){return new W([t|0],0>t?-1:0)}):new W([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return jr;if(0>e)return ye(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Cc;return new W(t,0)}function uy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ye(uy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=jr,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=_t(Math.pow(t,o)),r=r.R(o).add(_t(s))):(r=r.R(n),r=r.add(_t(s)))}return r}var Cc=4294967296,jr=gd(0),Pc=gd(1),Cp=gd(16777216);I=W.prototype;I.ea=function(){if(Ze(this))return-ye(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Cc+r)*t,t*=Cc}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(Ze(this))return"-"+ye(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var i=Ia(n,t).g;n=Sa(n,i.R(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rt(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ze(e){return e.h==-1}I.X=function(e){return e=Sa(this,e),Ze(e)?-1:Rt(e)?0:1};function ye(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new W(n,~e.h).add(Pc)}I.abs=function(){return Ze(this)?ye(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(this.D(i)&65535)+(e.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new W(n,n[n.length-1]&-2147483648?-1:0)};function Sa(e,t){return e.add(ye(t))}I.R=function(e){if(Rt(this)||Rt(e))return jr;if(Ze(this))return Ze(e)?ye(this).R(ye(e)):ye(ye(this).R(e));if(Ze(e))return ye(this.R(ye(e)));if(0>this.X(Cp)&&0>e.X(Cp))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=s*l,ys(n,2*r+2*i),n[2*r+2*i+1]+=o*l,ys(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,ys(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,ys(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new W(n,0)};function ys(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _i(e,t){this.g=e,this.h=t}function Ia(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new _i(jr,jr);if(Ze(e))return t=Ia(ye(e),t),new _i(ye(t.g),ye(t.h));if(Ze(t))return t=Ia(e,ye(t)),new _i(ye(t.g),t.h);if(30<e.g.length){if(Ze(e)||Ze(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Pc,r=t;0>=r.X(e);)n=Pp(n),r=Pp(r);var i=pr(n,1),o=pr(r,1);for(r=pr(r,2),n=pr(n,2);!Rt(r);){var s=o.add(r);0>=s.X(e)&&(i=i.add(n),o=s),r=pr(r,1),n=pr(n,1)}return t=Sa(e,i.R(t)),new _i(i,t)}for(i=jr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=_t(n),s=o.R(t);Ze(s)||0<s.X(e);)n-=r,o=_t(n),s=o.R(t);Rt(o)&&(o=Pc),i=i.add(o),e=Sa(e,s)}return new _i(i,e)}I.gb=function(e){return Ia(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new W(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new W(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new W(n,this.h^e.h)};function Pp(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new W(n,e.h)}function pr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new W(i,e.h)}it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;sd.NO_ERROR=0;sd.TIMEOUT=8;sd.HTTP_ERROR=6;ck.COMPLETE="complete";fk.EventType=$o;$o.OPEN="a";$o.CLOSE="b";$o.ERROR="c";$o.MESSAGE="d";me.prototype.listen=me.prototype.O;ae.prototype.listenOnce=ae.prototype.P;ae.prototype.getLastError=ae.prototype.Sa;ae.prototype.getLastErrorCode=ae.prototype.Ia;ae.prototype.getStatus=ae.prototype.da;ae.prototype.getResponseJson=ae.prototype.Wa;ae.prototype.getResponseText=ae.prototype.ja;ae.prototype.send=ae.prototype.ha;ae.prototype.setWithCredentials=ae.prototype.Oa;Ct.prototype.digest=Ct.prototype.l;Ct.prototype.reset=Ct.prototype.reset;Ct.prototype.update=Ct.prototype.j;W.prototype.add=W.prototype.add;W.prototype.multiply=W.prototype.R;W.prototype.modulo=W.prototype.gb;W.prototype.compare=W.prototype.X;W.prototype.toNumber=W.prototype.ea;W.prototype.toString=W.prototype.toString;W.prototype.getBits=W.prototype.D;W.fromNumber=_t;W.fromString=uy;var $k=W;const Ap="@firebase/firestore";/**
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
 */class De{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let ml="10.8.1";/**
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
 */const Ta=new Wf("@firebase/firestore");function We(e,...t){if(Ta.logLevel<=V.DEBUG){const n=t.map(cy);Ta.debug(`Firestore (${ml}): ${e}`,...n)}}function vd(e,...t){if(Ta.logLevel<=V.ERROR){const n=t.map(cy);Ta.error(`Firestore (${ml}): ${e}`,...n)}}function cy(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function fy(e="Unexpected state"){const t=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: `+e;throw vd(t),new Error(t)}function Ac(e,t){e||fy()}/**
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
 */const Be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends Wt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class jk{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Uk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(De.UNAUTHENTICATED))}shutdown(){}}class Fk{constructor(t){this.t=t,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ur,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{We("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(We("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ur)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(We("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ac(typeof r.accessToken=="string"),new jk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ac(t===null||typeof t=="string"),new De(t)}}class zk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new zk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&We("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,We("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{We("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):We("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ac(typeof n.token=="string"),this.R=n.token,new Vk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Wk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Kk{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Wk(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function dy(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Gk{constructor(t,n,r,i,o,s,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ca{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ca&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var xp,z;(z=xp||(xp={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $k([4294967295,4294967295],0);function cu(){return typeof document<"u"?document:null}/**
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
 */class Yk{constructor(t,n,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&We("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class yd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new yd(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(Be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xk(e,t){if(vd("AsyncQueue",`${t}: ${e}`),dy(e))return new Ve(Be.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class qk{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=Kk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{We("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(We("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ve(Be.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Xk(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function hy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Np=new Map;function Qk(e,t,n,r){if(t===!0&&r===!0)throw new Ve(Be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Rp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(Be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(Be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jk{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ve(Be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ve(Be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uk;switch(r.type){case"firstParty":return new Bk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(Be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Np.get(n);r&&(We("ComponentProvider","Removing Datastore"),Np.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Zk{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Yk(this,"async_queue_retry"),this._u=()=>{const n=cu();n&&We("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=cu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Ur;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!dy(t))throw t;We("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw vd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=yd.createAndSchedule(this,t,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&fy()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class eS extends Jk{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Zk}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tS(this),this._firestoreClient.terminate()}}function tS(e){var t,n,r;const i=e._freezeSettings(),o=function(a,l,u,c){return new Gk(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,hy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new qk(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ml=i})(ni),qr(new rr("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new eS(new Fk(r.getProvider("auth-internal")),new Hk(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ve(Be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),_n(Ap,"4.4.3",t),_n(Ap,"4.4.3","esm2017")})();const nS={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},wd=s0(nS);function _d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rS=py,my=new Oo("auth","Firebase",py());/**
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
 */const Pa=new Wf("@firebase/auth");function iS(e,...t){Pa.logLevel<=V.WARN&&Pa.warn(`Auth (${ni}): ${e}`,...t)}function zs(e,...t){Pa.logLevel<=V.ERROR&&Pa.error(`Auth (${ni}): ${e}`,...t)}/**
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
 */function pt(e,...t){throw Ed(e,...t)}function It(e,...t){return Ed(e,...t)}function oS(e,t,n){const r=Object.assign(Object.assign({},rS()),{[t]:n});return new Oo("auth","Firebase",r).create(t,{appName:e.name})}function Ed(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return my.create(e,...t)}function L(e,t,...n){if(!e)throw Ed(t,...n)}function Ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zs(t),new Error(t)}function Ft(e,t){e||Ot(t)}/**
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
 */function xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function sS(){return Op()==="http:"||Op()==="https:"}function Op(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function aS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sS()||g2()||"connection"in navigator)?navigator.onLine:!0}function lS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Bo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=m2()||v2()}get(){return aS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kd(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class gy{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cS=new Bo(3e4,6e4);function On(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ln(e,t,n,r,i={}){return vy(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Lo(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),gy.fetch()(yy(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function vy(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uS),t);try{const i=new dS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ws(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ws(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ws(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oS(e,c,u);pt(e,c)}}catch(i){if(i instanceof Wt)throw i;pt(e,"network-request-failed",{message:String(i)})}}async function Vo(e,t,n,r,i={}){const o=await Ln(e,t,n,r,i);return"mfaPendingCredential"in o&&pt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function yy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kd(e.config,i):`${e.config.apiScheme}://${i}`}function fS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),cS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(e,t,r);return i.customData._tokenResponse=n,i}function Lp(e){return e!==void 0&&e.enterprise!==void 0}class hS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pS(e,t){return Ln(e,"GET","/v2/recaptchaConfig",On(e,t))}/**
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
 */async function mS(e,t){return Ln(e,"POST","/v1/accounts:delete",t)}async function gS(e,t){return Ln(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Fi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vS(e,t=!1){const n=Kt(e),r=await n.getIdToken(t),i=Sd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Fi(fu(i.auth_time)),issuedAtTime:Fi(fu(i.iat)),expirationTime:Fi(fu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fu(e){return Number(e)*1e3}function Sd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=e0(n);return i?JSON.parse(i):(zs("Failed to decode base64 JWT payload"),null)}catch(i){return zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yS(e){const t=Sd(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function vo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Wt&&wS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function wS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _S{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await vo(e,gS(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?SS(o.providerUserInfo):[],a=kS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new wy(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function ES(e){const t=Kt(e);await Aa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function SS(e){return e.map(t=>{var{providerId:n}=t,r=_d(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function IS(e,t){const n=await vy(e,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=yy(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gy.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TS(e,t){return Ln(e,"POST","/v2/accounts:revokeToken",On(e,t))}/**
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
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await IS(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new yo;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Xt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Qn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=_d(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _S(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new wy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await vo(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vS(this,t)}reload(){return ES(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await vo(this,mS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:C,stsTokenManager:P}=n;L(m&&P,t,"internal-error");const O=yo.fromJSON(this.name,P);L(typeof m=="string",t,"internal-error"),Xt(f,t.name),Xt(h,t.name),L(typeof y=="boolean",t,"internal-error"),L(typeof k=="boolean",t,"internal-error"),Xt(g,t.name),Xt(v,t.name),Xt(w,t.name),Xt(E,t.name),Xt(p,t.name),Xt(d,t.name);const F=new Qn({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:O,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(F.providerData=C.map(M=>Object.assign({},M))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new yo;i.updateFromServerResponse(n);const o=new Qn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Aa(o),o}}/**
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
 */const bp=new Map;function Lt(e){Ft(e instanceof Function,"Expected a class definition");let t=bp.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bp.set(e,t),t)}/**
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
 */class _y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_y.type="NONE";const Dp=_y;/**
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
 */function Bs(e,t,n){return`firebase:${e}:${t}:${n}`}class Fr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Bs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Bs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fr(Lt(Dp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Lt(Dp);const s=Bs(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Qn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fr(o,t,r))}}/**
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
 */function Mp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ey(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ty(t))return"Blackberry";if(Cy(t))return"Webos";if(Id(t))return"Safari";if((t.includes("chrome/")||ky(t))&&!t.includes("edge/"))return"Chrome";if(Iy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ey(e=Ae()){return/firefox\//i.test(e)}function Id(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ky(e=Ae()){return/crios\//i.test(e)}function Sy(e=Ae()){return/iemobile/i.test(e)}function Iy(e=Ae()){return/android/i.test(e)}function Ty(e=Ae()){return/blackberry/i.test(e)}function Cy(e=Ae()){return/webos/i.test(e)}function gl(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function CS(e=Ae()){var t;return gl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function PS(){return y2()&&document.documentMode===10}function Py(e=Ae()){return gl(e)||Iy(e)||Cy(e)||Ty(e)||/windows phone/i.test(e)||Sy(e)}function AS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ay(e,t=[]){let n;switch(e){case"Browser":n=Mp(Ae());break;case"Worker":n=`${Mp(Ae())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class xS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function NS(e,t={}){return Ln(e,"GET","/v2/passwordPolicy",On(e,t))}/**
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
 */const RS=6;class OS{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:RS,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class LS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $p(this),this.idTokenSubscription=new $p(this),this.beforeStateQueue=new xS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Aa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Kt(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await NS(this),n=new OS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Oo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await TS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Lt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ay(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&iS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fr(e){return Kt(e)}class $p{constructor(t){this.auth=t,this.observer=null,this.addObserver=T2(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bS(e){vl=e}function xy(e){return vl.loadJS(e)}function DS(){return vl.recaptchaEnterpriseScript}function MS(){return vl.gapiScript}function $S(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const jS="recaptcha-enterprise",US="NO_RECAPTCHA";class FS{constructor(t){this.type=jS,this.auth=fr(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{pS(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new hS(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Lp(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(US)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Lp(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DS();l.length!==0&&(l+=a),xy(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function jp(e,t,n,r=!1){const i=new FS(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Nc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jp(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await jp(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function zS(e,t){const n=o0(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ya(o,t??{}))return i;pt(i,"already-initialized")}return n.initialize({options:t})}function BS(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function VS(e,t,n){const r=fr(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Ny(t),{host:s,port:a}=HS(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WS()}function Ny(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function HS(e){const t=Ny(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Up(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Up(s)}}}function Up(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function WS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Td{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(t){return Ot("not implemented")}_linkToIdToken(t,n){return Ot("not implemented")}_getReauthenticationResolver(t){return Ot("not implemented")}}async function KS(e,t){return Ln(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function GS(e,t){return Vo(e,"POST","/v1/accounts:signInWithPassword",On(e,t))}/**
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
 */async function YS(e,t){return Vo(e,"POST","/v1/accounts:signInWithEmailLink",On(e,t))}async function XS(e,t){return Vo(e,"POST","/v1/accounts:signInWithEmailLink",On(e,t))}/**
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
 */class wo extends Td{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new wo(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new wo(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(t,n,"signInWithPassword",GS);case"emailLink":return YS(t,{email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(t,r,"signUpPassword",KS);case"emailLink":return XS(t,{idToken:n,email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function zr(e,t){return Vo(e,"POST","/v1/accounts:signInWithIdp",On(e,t))}/**
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
 */const qS="http://localhost";class or extends Td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new or(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=_d(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new or(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return zr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zr(t,n)}buildRequest(){const t={requestUri:qS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Lo(n)}return t}}/**
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
 */function QS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JS(e){const t=Ti(Ci(e)).link,n=t?Ti(Ci(t)).deep_link_id:null,r=Ti(Ci(e)).deep_link_id;return(r?Ti(Ci(r)).link:null)||r||n||t||e}class Cd{constructor(t){var n,r,i,o,s,a;const l=Ti(Ci(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=QS((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=JS(t);try{return new Cd(n)}catch{return null}}}/**
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
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(t,n){return wo._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Cd.parseLink(n);return L(r,"argument-error"),wo._fromEmailAndCode(t,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ry{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ho extends Ry{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Ho{constructor(){super("facebook.com")}static credential(t){return or._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return or._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class rn extends Ho{constructor(){super("github.com")}static credential(t){return or._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rn.credential(t.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */class on extends Ho{constructor(){super("twitter.com")}static credential(t,n){return or._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return on.credentialFromTaggedObject(t)}static credentialFromError(t){return on.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */async function ZS(e,t){return Vo(e,"POST","/v1/accounts:signUp",On(e,t))}/**
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
 */class sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Qn._fromIdTokenResponse(t,r,i),s=Fp(r);return new sr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Fp(r);return new sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Fp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class xa extends Wt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xa(t,n,r,i)}}function Oy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(e,o,t,r):o})}async function eI(e,t,n=!1){const r=await vo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sr._forOperation(e,"link",r)}/**
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
 */async function tI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await vo(e,Oy(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=Sd(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),sr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),o}}/**
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
 */async function Ly(e,t,n=!1){const r="signIn",i=await Oy(e,r,t),o=await sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function nI(e,t){return Ly(fr(e),t)}/**
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
 */async function by(e){const t=fr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function rI(e,t,n){const r=fr(e),s=await Nc(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&by(e),l}),a=await sr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function iI(e,t,n){return nI(Kt(e),si.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&by(e),r})}function oI(e,t,n,r){return Kt(e).onIdTokenChanged(t,n,r)}function sI(e,t,n){return Kt(e).beforeAuthStateChanged(t,n)}function aI(e,t,n,r){return Kt(e).onAuthStateChanged(t,n,r)}function lI(e){return Kt(e).signOut()}const Na="__sak";/**
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
 */class Dy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uI(){const e=Ae();return Id(e)||gl(e)}const cI=1e3,fI=10;class My extends Dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uI()&&AS(),this.fallbackToPolling=Py(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);PS()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,fI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}My.type="LOCAL";const dI=My;/**
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
 */class $y extends Dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$y.type="SESSION";const jy=$y;/**
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
 */function hI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new yl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await hI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yl.receivers=[];/**
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
 */function Pd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class pI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Pd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Tt(){return window}function mI(e){Tt().location.href=e}/**
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
 */function Uy(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function gI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function yI(){return Uy()?self:null}/**
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
 */const Fy="firebaseLocalStorageDb",wI=1,Ra="firebaseLocalStorage",zy="fbase_key";class Wo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wl(e,t){return e.transaction([Ra],t?"readwrite":"readonly").objectStore(Ra)}function _I(){const e=indexedDB.deleteDatabase(Fy);return new Wo(e).toPromise()}function Rc(){const e=indexedDB.open(Fy,wI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ra,{keyPath:zy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ra)?t(r):(r.close(),await _I(),t(await Rc()))})})}async function zp(e,t,n){const r=wl(e,!0).put({[zy]:t,value:n});return new Wo(r).toPromise()}async function EI(e,t){const n=wl(e,!1).get(t),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Bp(e,t){const n=wl(e,!0).delete(t);return new Wo(n).toPromise()}const kI=800,SI=3;class By{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>SI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yl._getInstance(yI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gI(),!this.activeServiceWorker)return;this.sender=new pI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Rc();return await zp(t,Na,"1"),await Bp(t,Na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>EI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=wl(i,!1).getAll();return new Wo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}By.type="LOCAL";const II=By;new Bo(3e4,6e4);/**
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
 */function TI(e,t){return t?Lt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ad extends Td{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function CI(e){return Ly(e.auth,new Ad(e),e.bypassAuthState)}function PI(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),tI(n,new Ad(e),e.bypassAuthState)}async function AI(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),eI(n,new Ad(e),e.bypassAuthState)}/**
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
 */class Vy{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return AI;case"reauthViaPopup":case"reauthViaRedirect":return PI;default:pt(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xI=new Bo(2e3,1e4);class Ar extends Vy{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xI.get())};t()}}Ar.currentPopupAction=null;/**
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
 */const NI="pendingRedirect",Vs=new Map;class RI extends Vy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vs.get(this.auth._key());if(!t){try{const r=await OI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vs.set(this.auth._key(),t)}return this.bypassAuthState||Vs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OI(e,t){const n=DI(t),r=bI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LI(e,t){Vs.set(e._key(),t)}function bI(e){return Lt(e._redirectPersistence)}function DI(e){return Bs(NI,e.config.apiKey,e.name)}async function MI(e,t,n=!1){const r=fr(e),i=TI(r,t),s=await new RI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const $I=10*60*1e3;class jI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!UI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Hy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$I&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vp(t))}saveEventToCache(t){this.cachedEventUids.add(Vp(t)),this.lastProcessedEventTime=Date.now()}}function Vp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Hy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function UI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(e);default:return!1}}/**
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
 */async function FI(e,t={}){return Ln(e,"GET","/v1/projects",t)}/**
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
 */const zI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BI=/^https?/;async function VI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await FI(e);for(const n of t)try{if(HI(n))return}catch{}pt(e,"unauthorized-domain")}function HI(e){const t=xc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!BI.test(n))return!1;if(zI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WI=new Bo(3e4,6e4);function Hp(){const e=Tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function KI(e){return new Promise((t,n)=>{var r,i,o;function s(){Hp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hp(),n(It(e,"network-request-failed"))},timeout:WI.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Tt().gapi)===null||o===void 0)&&o.load)s();else{const a=$S("iframefcb");return Tt()[a]=()=>{gapi.load?s():n(It(e,"network-request-failed"))},xy(`${MS()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Hs=null,t})}let Hs=null;function GI(e){return Hs=Hs||KI(e),Hs}/**
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
 */const YI=new Bo(5e3,15e3),XI="__/auth/iframe",qI="emulator/auth/iframe",QI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kd(t,qI):`https://${e.config.authDomain}/${XI}`,r={apiKey:t.apiKey,appName:e.name,v:ni},i=JI.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Lo(r).slice(1)}`}async function eT(e){const t=await GI(e),n=Tt().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:ZI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=It(e,"network-request-failed"),a=Tt().setTimeout(()=>{o(s)},YI.get());function l(){Tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const tT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nT=500,rT=600,iT="_blank",oT="http://localhost";class Wp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sT(e,t,n,r=nT,i=rT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ae().toLowerCase();n&&(a=ky(u)?iT:n),Ey(u)&&(t=t||oT,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(CS(u)&&a!=="_self")return aT(t||"",a),new Wp(null);const f=window.open(t||"",a,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new Wp(f)}function aT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lT="__/auth/handler",uT="emulator/auth/handler",cT=encodeURIComponent("fac");async function Kp(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(t instanceof Ry){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",I2(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof Ho){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${cT}=${encodeURIComponent(l)}`:"";return`${fT(e)}?${Lo(a).slice(1)}${u}`}function fT({config:e}){return e.emulator?kd(e,uT):`https://${e.authDomain}/${lT}`}/**
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
 */const du="webStorageSupport";class dT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jy,this._completeRedirectFn=MI,this._overrideRedirectResult=LI}async _openPopup(t,n,r,i){var o;Ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Kp(t,n,r,xc(),i);return sT(t,s,Pd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Kp(t,n,r,xc(),i);return mI(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await eT(t),r=new jI(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(du,{type:du},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[du];s!==void 0&&n(!!s),pt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Py()||Id()||gl()}}const hT=dT;var Gp="@firebase/auth",Yp="1.6.1";/**
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
 */class pT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gT(e){qr(new rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ay(e)},u=new LS(r,i,o,l);return BS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),qr(new rr("auth-internal",t=>{const n=fr(t.getProvider("auth").getImmediate());return(r=>new pT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Gp,Yp,mT(e)),_n(Gp,Yp,"esm2017")}/**
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
 */const vT=5*60,yT=n0("authIdTokenMaxAge")||vT;let Xp=null;const wT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yT)return;const i=n==null?void 0:n.token;Xp!==i&&(Xp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xd(e=IE()){const t=o0(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zS(e,{popupRedirectResolver:hT,persistence:[II,dI,jy]}),r=n0("authTokenSyncURL");if(r){const o=wT(r);sI(n,o,()=>o(n.currentUser)),oI(n,s=>o(s))}const i=h2("auth");return i&&VS(n,`http://${i}`),n}function _T(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}bS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=It("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_T().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gT("Browser");/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const qp="popstate";function ET(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=dr(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Oc("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:Oa(o))}function r(i,o){Nd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ST(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kT(){return Math.random().toString(36).substr(2,8)}function Qp(e,t){return{usr:e.state,key:e.key,idx:t}}function Oc(e,t,n,r){return n===void 0&&(n=null),_o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dr(t):t,{state:n,key:t&&t.key||r||kT()})}function Oa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ST(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ln.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(_o({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=ln.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:p})}function h(E,p){a=ln.Push;let d=Oc(w.location,E,p);n&&n(d,E),u=c()+1;let m=Qp(d,u),y=w.createHref(d);try{s.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&l&&l({action:a,location:w.location,delta:1})}function g(E,p){a=ln.Replace;let d=Oc(w.location,E,p);n&&n(d,E),u=c();let m=Qp(d,u),y=w.createHref(d);s.replaceState(m,"",y),o&&l&&l({action:a,location:w.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:Oa(E);return d=d.replace(/ $/,"%20"),se(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qp,f),l=E,()=>{i.removeEventListener(qp,f),l=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(E){return s.go(E)}};return w}var Jp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jp||(Jp={}));function IT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?dr(t):t,i=Rd(r.pathname||"/",n);if(i==null)return null;let o=Wy(e);TT(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=$T(i);s=bT(o[a],l)}return s}function Wy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=En([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wy(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:OT(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ky(o.path))i(o,s,l)}),t}function Ky(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ky(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function TT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:LT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CT=/^:[\w-]+$/,PT=3,AT=2,xT=1,NT=10,RT=-2,Zp=e=>e==="*";function OT(e,t){let n=e.split("/"),r=n.length;return n.some(Zp)&&(r+=RT),t&&(r+=AT),n.filter(i=>!Zp(i)).reduce((i,o)=>i+(CT.test(o)?PT:o===""?xT:NT),r)}function LT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bT(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=DT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:En([i,c.pathname]),pathnameBase:zT(En([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=En([i,c.pathnameBase]))}return o}function DT(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=MT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function MT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Nd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $T(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Nd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function jT(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?dr(e):e;return{pathname:n?n.startsWith("/")?n:UT(n,t):t,search:BT(r),hash:VT(i)}}function UT(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Od(e,t){let n=FT(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ld(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=dr(e):(i=_o({},e),se(!i.pathname||!i.pathname.includes("?"),hu("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),hu("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),hu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=jT(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const En=e=>e.join("/").replace(/\/\/+/g,"/"),zT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),BT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,VT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function HT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gy=["post","put","patch","delete"];new Set(Gy);const WT=["get",...Gy];new Set(WT);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(this,arguments)}const bd=T.createContext(null),KT=T.createContext(null),bn=T.createContext(null),_l=T.createContext(null),Dn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Yy=T.createContext(null);function GT(e,t){let{relative:n}=t===void 0?{}:t;ai()||se(!1);let{basename:r,navigator:i}=T.useContext(bn),{hash:o,pathname:s,search:a}=qy(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:En([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ai(){return T.useContext(_l)!=null}function Ko(){return ai()||se(!1),T.useContext(_l).location}function Xy(e){T.useContext(bn).static||T.useLayoutEffect(e)}function Dd(){let{isDataRoute:e}=T.useContext(Dn);return e?sC():YT()}function YT(){ai()||se(!1);let e=T.useContext(bd),{basename:t,future:n,navigator:r}=T.useContext(bn),{matches:i}=T.useContext(Dn),{pathname:o}=Ko(),s=JSON.stringify(Od(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return Xy(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ld(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:En([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}function qy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(bn),{matches:i}=T.useContext(Dn),{pathname:o}=Ko(),s=JSON.stringify(Od(i,r.v7_relativeSplatPath));return T.useMemo(()=>Ld(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function XT(e,t){return qT(e,t)}function qT(e,t,n,r){ai()||se(!1);let{navigator:i}=T.useContext(bn),{matches:o}=T.useContext(Dn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Ko(),c;if(t){var f;let E=typeof t=="string"?dr(t):t;l==="/"||(f=E.pathname)!=null&&f.startsWith(l)||se(!1),c=E}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=IT(e,{pathname:g}),w=tC(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:En([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:En([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&w?T.createElement(_l.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ln.Pop}},w):w}function QT(){let e=oC(),t=HT(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const JT=T.createElement(QT,null);class ZT extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Dn.Provider,{value:this.props.routeContext},T.createElement(Yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(bd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Dn.Provider,{value:t},r)}function tC(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||se(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,h)=>{let g,v=!1,w=null,E=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||JT,l&&(u<0&&h===0?(aC("route-fallback",!1),v=!0,E=null):u===h&&(v=!0,E=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),d=()=>{let m;return g?m=w:v?m=E:f.route.Component?m=T.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,T.createElement(eC,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?T.createElement(ZT,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Qy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qy||{}),La=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(La||{});function nC(e){let t=T.useContext(bd);return t||se(!1),t}function rC(e){let t=T.useContext(KT);return t||se(!1),t}function iC(e){let t=T.useContext(Dn);return t||se(!1),t}function Jy(e){let t=iC(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function oC(){var e;let t=T.useContext(Yy),n=rC(La.UseRouteError),r=Jy(La.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function sC(){let{router:e}=nC(Qy.UseNavigateStable),t=Jy(La.UseNavigateStable),n=T.useRef(!1);return Xy(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Eo({fromRouteId:t},o)))},[e,t])}const em={};function aC(e,t,n){!t&&!em[e]&&(em[e]=!0)}function tm(e){let{to:t,replace:n,state:r,relative:i}=e;ai()||se(!1);let{future:o,static:s}=T.useContext(bn),{matches:a}=T.useContext(Dn),{pathname:l}=Ko(),u=Dd(),c=Ld(t,Od(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return T.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Ws(e){se(!1)}function lC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:o,static:s=!1,future:a}=e;ai()&&se(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:o,static:s,future:Eo({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=dr(r));let{pathname:c="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,w=T.useMemo(()=>{let E=Rd(c,l);return E==null?null:{location:{pathname:E,search:f,hash:h,state:g,key:v},navigationType:i}},[l,c,f,h,g,v,i]);return w==null?null:T.createElement(bn.Provider,{value:u},T.createElement(_l.Provider,{children:n,value:w}))}function uC(e){let{children:t,location:n}=e;return XT(Lc(t),n)}new Promise(()=>{});function Lc(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Lc(r.props.children,o));return}r.type!==Ws&&se(!1),!r.props.index||!r.props.children||se(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Lc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bc.apply(this,arguments)}function cC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dC(e,t){return e.button===0&&(!t||t==="_self")&&!fC(e)}const hC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pC="6";try{window.__reactRouterVersion=pC}catch{}const mC="startTransition",nm=X1[mC];function gC(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=ET({window:i,v5Compat:!0}));let s=o.current,[a,l]=T.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&nm?nm(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>s.listen(c),[s,c]),T.createElement(lC,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const vC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=cC(t,hC),{basename:g}=T.useContext(bn),v,w=!1;if(typeof u=="string"&&yC.test(u)&&(v=u,vC))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Rd(y.pathname,g);y.origin===m.origin&&k!=null?u=k+y.search+y.hash:w=!0}catch{}let E=GT(u,{relative:i}),p=wC(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return T.createElement("a",bc({},h,{href:v||E,onClick:w||o?r:d,ref:n,target:l}))});var rm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rm||(rm={}));var im;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(im||(im={}));function wC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Dd(),u=Ko(),c=qy(e,{relative:s});return T.useCallback(f=>{if(dC(f,n)){f.preventDefault();let h=r!==void 0?r:Oa(u)===Oa(c);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}const _C="https://andresra13.github.io/firebase-app/assets/login-3MxNWmoB.png",om=xd(wd),EC=()=>{const e=Dd(),[t,n]=T.useState(!1),r=async i=>{i.preventDefault();const o=i.target.email.value,s=i.target.password.value;if(t)try{await rI(om,o,s),e("/home")}catch{alert("asegurese que la contraseña tenga más de 8 caracteres")}else try{await iI(om,o,s),e("/home")}catch{alert("El correo y/o contraseña son incorrectos")}};return _.jsxs("div",{className:"login",children:[_.jsx("div",{className:"login__border",children:_.jsxs("div",{className:"login__container",children:[_.jsx("div",{className:"logo",children:t?"SignUp":"Login"}),_.jsxs("form",{onSubmit:r,className:"signupForm",children:[_.jsxs("div",{className:"input__field",children:[_.jsx("i",{className:"bx bx-mail-send"}),_.jsx("input",{type:"email",className:"input",id:"email",placeholder:"Email",required:!0,autoComplete:"off"})]}),_.jsxs("div",{className:"input__field",children:[_.jsx("i",{className:"bx bx-lock-alt"}),_.jsx("input",{type:"password",className:"input",id:"password",placeholder:"Password",required:!0,autoComplete:"off"})]}),_.jsxs("div",{className:"three_cols",children:[_.jsxs("label",{htmlFor:"check",children:[_.jsx("input",{type:"checkbox",id:"check"}),"Recordar"]}),_.jsx("a",{href:"#",children:" Olvidaste la contraseña"})]}),_.jsx("div",{className:"submits",children:_.jsx("button",{children:t?"Registrate":"Inicia Sesion"})})]}),_.jsx("div",{className:"two__cols",children:_.jsxs("h4",{children:[t?"Si ya tienes cuenta":"No tienes cuenta",_.jsx("button",{onClick:()=>n(!t),children:t?"Inicia Sesion":"Registrate"})]})})]})}),_.jsx("div",{className:"login_left",children:_.jsx("img",{src:_C,alt:""})})]})},pu="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23686868'%20stroke-width='1.5'%20fill='none'%20d='m1%201%204%204%204-4'/%3e%3c/svg%3e",sm="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203v12a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a1%201%200%200%201%201-1h1V1a1%201%200%201%201%202%200v1h2V1a1%201%200%201%201%202%200v1h2V1a1%201%200%200%201%202%200v1h1a1%201%200%200%201%201%201Zm-2%203H2v1h10V6Zm0%203H2v1h10V9Zm0%203H2v1h10v-1Z'%20fill='%23726CEE'/%3e%3c/svg%3e",am="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.667%208.667h-4v4h4v-4ZM11.334%200v1.333H4.667V0h-2v1.333h-1C.75%201.333%200%202.083%200%203v11.333C0%2015.25.75%2016%201.667%2016h12.667C15.25%2016%2016%2015.25%2016%2014.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3%2014.333H1.667V5.5h12.667v8.833Z'%20fill='%234BB1DA'/%3e%3c/svg%3e",lm="data:image/svg+xml,%3csvg%20width='13'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.408%2013.916c-3.313%200-6-1.343-6-3%200-.612.371-1.18%201-1.654V7.916a5%205%200%200%201%203.041-4.6%202%202%200%200%201%203.507-1.664%202%202%200%200%201%20.411%201.664%205.002%205.002%200%200%201%203.041%204.6v1.346c.629.474%201%201.042%201%201.654%200%201.657-2.687%203-6%203Zm0%201c.694%200%201.352-.066%201.984-.16.004.054.016.105.016.16a2%202%200%200%201-4%200c0-.055.012-.106.016-.16.633.094%201.29.16%201.984.16Z'%20fill='%23EDD556'/%3e%3c/svg%3e",um="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200a8%208%200%201%201%200%2016A8%208%200%200%201%208%200Zm0%202.133a5.867%205.867%200%201%200%200%2011.734A5.867%205.867%200%200%200%208%202.133ZM8%203.2a4.8%204.8%200%201%201%200%209.6%204.8%204.8%200%200%201%200-9.6Zm-.533%202.667a.533.533%200%200%200-.534.533v2.133c0%20.295.24.534.534.534h3.2a.533.533%200%200%200%200-1.067H8V6.4a.533.533%200%200%200-.533-.533Z'%20fill='%238E4CB6'/%3e%3c/svg%3e",kC="https://andresra13.github.io/firebase-app/assets/ipuc-dj-pBQW_.png";function cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cm(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ba(e){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}function SC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function IC(e,t,n){return t&&fm(e.prototype,t),n&&fm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Md(e,t){return CC(e)||AC(e,t)||Zy(e,t)||NC()}function Go(e){return TC(e)||PC(e)||Zy(e)||xC()}function TC(e){if(Array.isArray(e))return Dc(e)}function CC(e){if(Array.isArray(e))return e}function PC(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Zy(e,t){if(e){if(typeof e=="string")return Dc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dc(e,t)}}function Dc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dm=function(){},$d={},e1={},t1=null,n1={mark:dm,measure:dm};try{typeof window<"u"&&($d=window),typeof document<"u"&&(e1=document),typeof MutationObserver<"u"&&(t1=MutationObserver),typeof performance<"u"&&(n1=performance)}catch{}var RC=$d.navigator||{},hm=RC.userAgent,pm=hm===void 0?"":hm,In=$d,Q=e1,mm=t1,_s=n1;In.document;var Gt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",r1=~pm.indexOf("MSIE")||~pm.indexOf("Trident/"),Es,ks,Ss,Is,Ts,zt="___FONT_AWESOME___",Mc=16,i1="fa",o1="svg-inline--fa",ar="data-fa-i2svg",$c="data-fa-pseudo-element",OC="data-fa-pseudo-element-pending",jd="data-prefix",Ud="data-icon",gm="fontawesome-i2svg",LC="async",bC=["HTML","HEAD","STYLE","SCRIPT"],s1=function(){try{return!0}catch{return!1}}(),Y="classic",re="sharp",Fd=[Y,re];function Yo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var ko=Yo((Es={},fe(Es,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(Es,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Es)),So=Yo((ks={},fe(ks,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(ks,re,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ks)),Io=Yo((Ss={},fe(Ss,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Ss,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ss)),DC=Yo((Is={},fe(Is,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Is,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Is)),MC=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,a1="fa-layers-text",$C=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jC=Yo((Ts={},fe(Ts,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Ts,re,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ts)),l1=[1,2,3,4,5,6,7,8,9,10],UC=l1.concat([11,12,13,14,15,16,17,18,19,20]),FC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},To=new Set;Object.keys(So[Y]).map(To.add.bind(To));Object.keys(So[re]).map(To.add.bind(To));var zC=[].concat(Fd,Go(To),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kn.GROUP,Kn.SWAP_OPACITY,Kn.PRIMARY,Kn.SECONDARY]).concat(l1.map(function(e){return"".concat(e,"x")})).concat(UC.map(function(e){return"w-".concat(e)})),zi=In.FontAwesomeConfig||{};function BC(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function VC(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var HC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];HC.forEach(function(e){var t=Md(e,2),n=t[0],r=t[1],i=VC(BC(n));i!=null&&(zi[r]=i)})}var u1={styleDefault:"solid",familyDefault:"classic",cssPrefix:i1,replacementClass:o1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zi.familyPrefix&&(zi.cssPrefix=zi.familyPrefix);var Qr=A(A({},u1),zi);Qr.autoReplaceSvg||(Qr.observeMutations=!1);var R={};Object.keys(u1).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Qr[e]=n,Bi.forEach(function(r){return r(R)})},get:function(){return Qr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Qr.cssPrefix=t,Bi.forEach(function(n){return n(R)})},get:function(){return Qr.cssPrefix}});In.FontAwesomeConfig=R;var Bi=[];function WC(e){return Bi.push(e),function(){Bi.splice(Bi.indexOf(e),1)}}var qt=Mc,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KC(e){if(!(!e||!Gt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var GC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Co(){for(var e=12,t="";e-- >0;)t+=GC[Math.random()*62|0];return t}function li(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zd(e){return e.classList?li(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function c1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YC(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(c1(e[n]),'" ')},"").trim()}function El(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Bd(e){return e.size!==Et.size||e.x!==Et.x||e.y!==Et.y||e.rotate!==Et.rotate||e.flipX||e.flipY}function XC(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function qC(e){var t=e.transform,n=e.width,r=n===void 0?Mc:n,i=e.height,o=i===void 0?Mc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&r1?l+="translate(".concat(t.x/qt-r/2,"em, ").concat(t.y/qt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/qt,"em), calc(-50% + ").concat(t.y/qt,"em)) "):l+="translate(".concat(t.x/qt,"em, ").concat(t.y/qt,"em) "),l+="scale(".concat(t.size/qt*(t.flipX?-1:1),", ").concat(t.size/qt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var QC=`:root, :host {
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
}`;function f1(){var e=i1,t=o1,n=R.cssPrefix,r=R.replacementClass,i=QC;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var vm=!1;function mu(){R.autoAddCss&&!vm&&(KC(f1()),vm=!0)}var JC={mixout:function(){return{dom:{css:f1,insertCss:mu}}},hooks:function(){return{beforeDOMElementCreation:function(){mu()},beforeI2svg:function(){mu()}}}},Bt=In||{};Bt[zt]||(Bt[zt]={});Bt[zt].styles||(Bt[zt].styles={});Bt[zt].hooks||(Bt[zt].hooks={});Bt[zt].shims||(Bt[zt].shims=[]);var ct=Bt[zt],d1=[],ZC=function e(){Q.removeEventListener("DOMContentLoaded",e),Da=1,d1.map(function(t){return t()})},Da=!1;Gt&&(Da=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Da||Q.addEventListener("DOMContentLoaded",ZC));function eP(e){Gt&&(Da?setTimeout(e,0):d1.push(e))}function Xo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?c1(e):"<".concat(t," ").concat(YC(r),">").concat(o.map(Xo).join(""),"</").concat(t,">")}function ym(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var tP=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},gu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?tP(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function nP(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function jc(e){var t=nP(e);return t.length===1?t[0].toString(16):null}function rP(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function wm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Uc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=wm(t);typeof ct.hooks.addPack=="function"&&!i?ct.hooks.addPack(e,wm(t)):ct.styles[e]=A(A({},ct.styles[e]||{}),o),e==="fas"&&Uc("fa",t)}var Cs,Ps,As,xr=ct.styles,iP=ct.shims,oP=(Cs={},fe(Cs,Y,Object.values(Io[Y])),fe(Cs,re,Object.values(Io[re])),Cs),Vd=null,h1={},p1={},m1={},g1={},v1={},sP=(Ps={},fe(Ps,Y,Object.keys(ko[Y])),fe(Ps,re,Object.keys(ko[re])),Ps);function aP(e){return~zC.indexOf(e)}function lP(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!aP(i)?i:null}var y1=function(){var t=function(o){return gu(xr,function(s,a,l){return s[l]=gu(a,o,{}),s},{})};h1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),p1=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),v1=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in xr||R.autoFetchSvg,r=gu(iP,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});m1=r.names,g1=r.unicodes,Vd=kl(R.styleDefault,{family:R.familyDefault})};WC(function(e){Vd=kl(e.styleDefault,{family:R.familyDefault})});y1();function Hd(e,t){return(h1[e]||{})[t]}function uP(e,t){return(p1[e]||{})[t]}function Gn(e,t){return(v1[e]||{})[t]}function w1(e){return m1[e]||{prefix:null,iconName:null}}function cP(e){var t=g1[e],n=Hd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Tn(){return Vd}var Wd=function(){return{prefix:null,iconName:null,rest:[]}};function kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=ko[r][e],o=So[r][e]||So[r][i],s=e in ct.styles?e:null;return o||s||null}var _m=(As={},fe(As,Y,Object.keys(Io[Y])),fe(As,re,Object.keys(Io[re])),As);function Sl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},fe(t,Y,"".concat(R.cssPrefix,"-").concat(Y)),fe(t,re,"".concat(R.cssPrefix,"-").concat(re)),t),s=null,a=Y;(e.includes(o[Y])||e.some(function(u){return _m[Y].includes(u)}))&&(a=Y),(e.includes(o[re])||e.some(function(u){return _m[re].includes(u)}))&&(a=re);var l=e.reduce(function(u,c){var f=lP(R.cssPrefix,c);if(xr[c]?(c=oP[a].includes(c)?DC[a][c]:c,s=c,u.prefix=c):sP[a].indexOf(c)>-1?(s=c,u.prefix=kl(c,{family:a})):f?u.iconName=f:c!==R.replacementClass&&c!==o[Y]&&c!==o[re]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?w1(u.iconName):{},g=Gn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!xr.far&&xr.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},Wd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===re&&(xr.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Tn()||"fas"),l}var fP=function(){function e(){SC(this,e),this.definitions={}}return IC(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=A(A({},n.definitions[a]||{}),s[a]),Uc(a,s[a]);var l=Io[Y][a];l&&Uc(l,s[a]),y1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),Em=[],Nr={},Br={},dP=Object.keys(Br);function hP(e,t){var n=t.mixoutsTo;return Em=e,Nr={},Object.keys(Br).forEach(function(r){dP.indexOf(r)===-1&&delete Br[r]}),Em.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ba(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Nr[s]||(Nr[s]=[]),Nr[s].push(o[s])})}r.provides&&r.provides(Br)}),n}function Fc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Nr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function lr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Br[e]?Br[e].apply(null,t):void 0}function zc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Tn();if(t)return t=Gn(n,t)||t,ym(_1.definitions,n,t)||ym(ct.styles,n,t)}var _1=new fP,pP=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,lr("noAuto")},mP={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?(lr("beforeI2svg",t),Vt("pseudoElements2svg",t),Vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,eP(function(){vP({autoReplaceSvgRoot:n}),lr("watch",t)})}},gP={icon:function(t){if(t===null)return null;if(ba(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=kl(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(MC))){var i=Sl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Tn(),iconName:Gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Tn();return{prefix:o,iconName:Gn(o,t)||t}}}},qe={noAuto:pP,config:R,dom:mP,parse:gP,library:_1,findIconDefinition:zc,toHtml:Xo},vP=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(ct.styles).length>0||R.autoFetchSvg)&&Gt&&R.autoReplaceSvg&&qe.dom.i2svg({node:r})};function Il(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Gt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function yP(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Bd(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=El(A(A({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function wP(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:s}),children:r}]}]}function Kd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,E=v.height,p=i==="fak",d=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),m={children:[],attributes:A(A({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(E)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/E*16*.0625,"em")}:{};g&&(m.attributes[ar]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Co())},children:[l]}),delete m.attributes.title);var k=A(A({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:A(A({},y),f.styles)}),C=r.found&&n.found?Vt("generateAbstractMask",k)||{children:[],attributes:{}}:Vt("generateAbstractIcon",k)||{children:[],attributes:{}},P=C.children,O=C.attributes;return k.children=P,k.attributes=O,a?wP(k):yP(k)}function km(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=A(A(A({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[ar]="");var c=A({},s.styles);Bd(i)&&(c.transform=qC({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=El(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function _P(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=El(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var vu=ct.styles;function Bc(e){var t=e[0],n=e[1],r=e.slice(4),i=Md(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Kn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Kn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Kn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var EP={found:!1,width:512,height:512};function kP(e,t){!s1&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vc(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=Tn()),new Promise(function(r,i){if(Vt("missingIconAbstract"),n==="fa"){var o=w1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&vu[t]&&vu[t][e]){var s=vu[t][e];return r(Bc(s))}kP(e,t),r(A(A({},EP),{},{icon:R.showMissingIcons&&e?Vt("missingIconAbstract")||{}:{}}))})}var Sm=function(){},Hc=R.measurePerformance&&_s&&_s.mark&&_s.measure?_s:{mark:Sm,measure:Sm},xi='FA "6.5.1"',SP=function(t){return Hc.mark("".concat(xi," ").concat(t," begins")),function(){return E1(t)}},E1=function(t){Hc.mark("".concat(xi," ").concat(t," ends")),Hc.measure("".concat(xi," ").concat(t),"".concat(xi," ").concat(t," begins"),"".concat(xi," ").concat(t," ends"))},Gd={begin:SP,end:E1},Ks=function(){};function Im(e){var t=e.getAttribute?e.getAttribute(ar):null;return typeof t=="string"}function IP(e){var t=e.getAttribute?e.getAttribute(jd):null,n=e.getAttribute?e.getAttribute(Ud):null;return t&&n}function TP(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function CP(){if(R.autoReplaceSvg===!0)return Gs.replace;var e=Gs[R.autoReplaceSvg];return e||Gs.replace}function PP(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function AP(e){return Q.createElement(e)}function k1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?PP:AP:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(k1(s,{ceFn:r}))}),i}function xP(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Gs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(k1(i),n)}),n.getAttribute(ar)===null&&R.keepOriginalSource){var r=Q.createComment(xP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~zd(n).indexOf(R.replacementClass))return Gs.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Xo(a)}).join(`
`);n.setAttribute(ar,""),n.innerHTML=s}};function Tm(e){e()}function S1(e,t){var n=typeof t=="function"?t:Ks;if(e.length===0)n();else{var r=Tm;R.mutateApproach===LC&&(r=In.requestAnimationFrame||Tm),r(function(){var i=CP(),o=Gd.begin("mutate");e.map(i),o(),n()})}}var Yd=!1;function I1(){Yd=!0}function Wc(){Yd=!1}var Ma=null;function Cm(e){if(mm&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Ks:t,r=e.nodeCallback,i=r===void 0?Ks:r,o=e.pseudoElementsCallback,s=o===void 0?Ks:o,a=e.observeMutationsRoot,l=a===void 0?Q:a;Ma=new mm(function(u){if(!Yd){var c=Tn();li(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Im(f.addedNodes[0])&&(R.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Im(f.target)&&~FC.indexOf(f.attributeName))if(f.attributeName==="class"&&IP(f.target)){var h=Sl(zd(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(jd,g||c),v&&f.target.setAttribute(Ud,v)}else TP(f.target)&&i(f.target)})}}),Gt&&Ma.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function NP(){Ma&&Ma.disconnect()}function RP(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function OP(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Sl(zd(e));return i.prefix||(i.prefix=Tn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uP(i.prefix,e.innerText)||Hd(i.prefix,jc(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function LP(e){var t=li(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||Co()):(t["aria-hidden"]="true",t.focusable="false")),t}function bP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=OP(e),r=n.iconName,i=n.prefix,o=n.rest,s=LP(e),a=Fc("parseNodeAttributes",{},e),l=t.styleParser?RP(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var DP=ct.styles;function T1(e){var t=R.autoReplaceSvg==="nest"?Pm(e,{styleParser:!1}):Pm(e);return~t.extra.classes.indexOf(a1)?Vt("generateLayersText",e,t):Vt("generateSvgReplacementMutation",e,t)}var Cn=new Set;Fd.map(function(e){Cn.add("fa-".concat(e))});Object.keys(ko[Y]).map(Cn.add.bind(Cn));Object.keys(ko[re]).map(Cn.add.bind(Cn));Cn=Go(Cn);function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(gm,"-").concat(f))},i=function(f){return n.remove("".concat(gm,"-").concat(f))},o=R.autoFetchSvg?Cn:Fd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(DP));o.includes("fa")||o.push("fa");var s=[".".concat(a1,":not([").concat(ar,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(ar,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=li(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Gd.begin("onTree"),u=a.reduce(function(c,f){try{var h=T1(f);h&&c.push(h)}catch(g){s1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){S1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function MP(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T1(e).then(function(n){n&&S1([n],t)})}function $P(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:zc(i||{})),e(r,A(A({},n),{},{mask:i}))}}var jP=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Et:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,E=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var k=t.prefix,C=t.iconName,P=t.icon;return Il(A({type:"icon"},t),function(){return lr("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||Co()):(d["aria-hidden"]="true",d.focusable="false")),Kd({icons:{main:Bc(P),mask:l?Bc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:A(A({},Et),i),symbol:s,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:E}})})}},UP={mixout:function(){return{icon:$P(jP)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Am,n.nodeCallback=MP,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,s=o===void 0?function(){}:o;return Am(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Vc(i,a),c.iconName?Vc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var E=Md(w,2),p=E[0],d=E[1];g([n,Kd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=El(a);l.length>0&&(i.style=l);var u;return Bd(s)&&(u=Vt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},FP={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Il({type:"layer"},function(){lr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Go(o)).join(" ")},children:s}]})}}}},zP={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Il({type:"counter",content:n},function(){return lr("beforeDOMElementCreation",{content:n,params:r}),_P({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Go(a))}})})}}}},BP={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Et:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Il({type:"text",content:n},function(){return lr("beforeDOMElementCreation",{content:n,params:r}),km({content:n,transform:A(A({},Et),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Go(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(r1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,km({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},VP=new RegExp('"',"ug"),xm=[1105920,1112319];function HP(e){var t=e.replace(VP,""),n=rP(t,0),r=n>=xm[0]&&n<=xm[1],i=t.length===2?t[0]===t[1]:!1;return{value:jc(i?t[0]:t),isSecondary:r||i}}function Nm(e,t){var n="".concat(OC).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=li(e.children),s=o.filter(function(P){return P.getAttribute($c)===t})[0],a=In.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match($C),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?re:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?So[h][l[2].toLowerCase()]:jC[h][u],v=HP(f),w=v.value,E=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Hd(g,w),m=d;if(p){var y=cP(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!E&&(!s||s.getAttribute(jd)!==g||s.getAttribute(Ud)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var k=bP(),C=k.extra;C.attributes[$c]=t,Vc(d,g).then(function(P){var O=Kd(A(A({},k),{},{icons:{main:P,mask:Wd()},prefix:g,iconName:m,extra:C,watchable:!0})),F=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=O.map(function(M){return Xo(M)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function WP(e){return Promise.all([Nm(e,"::before"),Nm(e,"::after")])}function KP(e){return e.parentNode!==document.head&&!~bC.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($c)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Rm(e){if(Gt)return new Promise(function(t,n){var r=li(e.querySelectorAll("*")).filter(KP).map(WP),i=Gd.begin("searchPseudoElements");I1(),Promise.all(r).then(function(){i(),Wc(),t()}).catch(function(){i(),Wc(),n()})})}var GP={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;R.searchPseudoElements&&Rm(i)}}},Om=!1,YP={mixout:function(){return{dom:{unwatch:function(){I1(),Om=!0}}}},hooks:function(){return{bootstrap:function(){Cm(Fc("mutationObserverCallbacks",{}))},noAuto:function(){NP()},watch:function(n){var r=n.observeMutationsRoot;Om?Wc():Cm(Fc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Lm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},XP={mixout:function(){return{parse:{transform:function(n){return Lm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Lm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},yu={x:0,y:0,width:"100%",height:"100%"};function bm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qP(e){return e.tag==="g"?e.children:[e]}var QP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Sl(i.split(" ").map(function(s){return s.trim()})):Wd();return o.prefix||(o.prefix=Tn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,g=XC({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:A(A({},yu),{},{fill:"white"})},w=c.children?{children:c.children.map(bm)}:{},E={tag:"g",attributes:A({},g.inner),children:[bm(A({tag:c.tag,attributes:A(A({},c.attributes),g.path)},w))]},p={tag:"g",attributes:A({},g.outer),children:[E]},d="mask-".concat(a||Co()),m="clip-".concat(a||Co()),y={tag:"mask",attributes:A(A({},yu),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:qP(h)},y]};return r.push(k,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},yu)}),{children:r,attributes:i}}}},JP={provides:function(t){var n=!1;In.matchMedia&&(n=In.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=A(A({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:A(A({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ZP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},eA=[JC,UP,FP,zP,BP,GP,YP,XP,QP,JP,ZP];hP(eA,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Kc=qe.parse;qe.findIconDefinition;qe.toHtml;var tA=qe.icon;qe.layer;qe.text;qe.counter;var C1={exports:{}},nA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rA=nA,iA=rA;function P1(){}function A1(){}A1.resetWarningCache=P1;var oA=function(){function e(r,i,o,s,a,l){if(l!==iA){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:A1,resetWarningCache:P1};return n.PropTypes=n,n};C1.exports=oA();var sA=C1.exports;const j=$m(sA);function Dm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dm(Object(n),!0).forEach(function(r){Rr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $a(e){"@babel/helpers - typeof";return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$a(e)}function Rr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aA(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lA(e,t){if(e==null)return{};var n=aA(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gc(e){return uA(e)||cA(e)||fA(e)||dA()}function uA(e){if(Array.isArray(e))return Yc(e)}function cA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fA(e,t){if(e){if(typeof e=="string")return Yc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yc(e,t)}}function Yc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hA(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,E=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Rr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Rr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Rr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Rr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function pA(e){return e=e-0,e===e}function x1(e){return pA(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var mA=["style"];function gA(e){return e.charAt(0).toUpperCase()+e.slice(1)}function vA(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=x1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[gA(i)]=o:t[i]=o,t},{})}function N1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return N1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=vA(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[x1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=lA(n,mA);return i.attrs.style=un(un({},i.attrs.style),s),e.apply(void 0,[t.tag,un(un({},i.attrs),a)].concat(Gc(r)))}var R1=!1;try{R1=!0}catch{}function yA(){if(!R1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mm(e){if(e&&$a(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kc.icon)return Kc.icon(e);if(e===null)return null;if(e&&$a(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function wu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Rr({},e,t):{}}var Jr=Ua.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Mm(n),c=wu("classes",[].concat(Gc(hA(e)),Gc(o.split(" ")))),f=wu("transform",typeof e.transform=="string"?Kc.transform(e.transform):e.transform),h=wu("mask",Mm(r)),g=tA(u,un(un(un(un({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return yA("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(E){Jr.defaultProps.hasOwnProperty(E)||(w[E]=e[E])}),wA(v[0],w)});Jr.displayName="FontAwesomeIcon";Jr.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};Jr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var wA=N1.bind(null,Ua.createElement),_A={prefix:"far",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"]},EA={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function kA(){const[e,t]=T.useState(!1),[n,r]=T.useState(null);T.useEffect(()=>{n||r(document.querySelector(".nav__inner"));const l=()=>{n&&window.innerWidth>768&&(a(n),document.querySelectorAll(".nav__inner").forEach(c=>{c.style.height=""}))};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[n]);const i=()=>{t(!e),e&&r(null)},o=l=>{l.preventDefault();const u=l.target;if(s(u,"nav__parent")){const c=u.parentElement.children[1];if(window.innerWidth<768){let f=c.clientHeight===0?c.scrollHeight:0;c.style.height=`${f}px`}else s(c,"nav__inner--show")||a(n),c.classList.toggle("nav__inner--show"),r(c)}},s=(l,u)=>l&&l.classList.value.includes(u),a=l=>{s(l,"nav__inner--show")&&l.classList.remove("nav__inner--show")};return _.jsxs("nav",{className:"nav container",children:[_.jsxs("div",{className:"nav__title",children:[_.jsx("img",{src:kC,alt:""}),_.jsx("h1",{className:"logo",children:"IPUC"})]}),_.jsx("div",{className:`nav__hamburguer ${e?"nav__hamburguer--open":""}`,onClick:i}),_.jsx("div",{className:`nav__overlay ${e?"nav__overlay--show":""}`,onClick:o,children:_.jsxs("ul",{className:"nav__menu",children:[_.jsx("li",{className:"nav__item",children:_.jsx(xe,{to:"",className:"nav__link",children:"Inicio"})}),_.jsx("li",{className:"nav__item",children:_.jsx(xe,{to:"",className:"nav__link",children:"Blog"})}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Solicitudes",_.jsx("img",{src:pu,alt:"Arrow",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:sm,alt:"todo_list",className:"nav__illustration"}),"somos"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:am,alt:"calendary_icon",className:"nav__illustration"}),"creemos?"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:lm,alt:"reiminders_icon",className:"nav__illustration"}),"Reminder"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:um,alt:"plannign_icon",className:"nav__illustration"}),"Planning"]})})]})]}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Eventos",_.jsx("img",{src:pu,alt:"arrow_icon",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsx(xe,{to:"",className:"nav__link",children:"History"})}),_.jsx("li",{className:"nav__dropdown",children:_.jsx(xe,{to:"",className:"nav__link",children:"Our Team"})}),_.jsx("li",{className:"nav__dropdown",children:_.jsx(xe,{to:"",className:"nav__link",children:"Blog"})})]})]}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Registros",_.jsx("img",{src:pu,alt:"arrow_icon",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:sm,alt:"todo_icon",className:"nav__illustration"}),"Todo List"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:am,alt:"calendary_icon",className:"nav__illustration"}),"Calendar"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:lm,alt:"reminder_icon",className:"nav__illustration"}),"Reminder"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(xe,{to:"",className:"nav__link",children:[_.jsx("img",{src:um,alt:"planning_icon",className:"nav__illustration"}),"Planning"]})})]})]}),_.jsx("li",{className:"nav__login",children:_.jsx(xe,{to:"/register",className:"nav__sign",children:_.jsxs("div",{className:"nav__center",children:[_.jsx(Jr,{icon:_A}),_.jsx("h1",{className:"nav__send",children:"Registro"})]})})}),_.jsx("li",{className:"nav__login nav__login--border",children:_.jsx(xe,{to:"/contacto",className:"nav__sign",children:_.jsxs("div",{className:"nav__center",children:[_.jsx(Jr,{icon:EA}),_.jsx("h1",{className:"nav__send",children:"Contacto"})]})})})]})})]})}const SA=xd(wd),IA=({correoUsuario:e})=>_.jsxs(_.Fragment,{children:[_.jsxs("div",{children:["Home ",e," ",_.jsx("button",{onClick:()=>lI(SA),children:"Cerrar Sesión"})]}),_.jsx(kA,{})]}),TA=()=>_.jsx("h1",{children:"Errorr"}),CA=({usuario:e})=>_.jsxs(uC,{children:[_.jsx(Ws,{path:"/",element:e?_.jsx(tm,{to:"/home"}):_.jsx(EC,{})}),_.jsx(Ws,{path:"/home",element:e?_.jsx(IA,{}):_.jsx(tm,{to:"/"})}),_.jsx(Ws,{path:"*",element:_.jsx(TA,{})})]}),PA=xd(wd);function AA(){const[e,t]=T.useState(null);return T.useEffect(()=>{const n=aI(PA,r=>{t(r||null)});return()=>n()},[]),_.jsx("div",{children:_.jsx(CA,{usuario:e})})}_u.createRoot(document.getElementById("root")).render(_.jsx(Ua.StrictMode,{children:_.jsx(gC,{children:_.jsx(AA,{})})}));
