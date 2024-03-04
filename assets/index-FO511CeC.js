function Vv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zd={exports:{}},Eo={},eh={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),Wv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),qv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),eg=Symbol.for("react.lazy"),Pc=Symbol.iterator;function tg(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var th={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nh=Object.assign,rh={};function yr(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ih(){}ih.prototype=yr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||th}var nu=tu.prototype=new ih;nu.constructor=tu;nh(nu,yr.prototype);nu.isPureReactComponent=!0;var bc=Array.isArray,ah=Object.prototype.hasOwnProperty,ru={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ah.call(t,r)&&!oh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Pi,type:e,key:a,ref:o,props:i,_owner:ru.current}}function ng(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function rg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nc=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rg(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pi:case Wv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+qo(o,0):r,bc(i)?(n="",e!=null&&(n=e.replace(Nc,"$&/")+"/"),wa(i,t,n,"",function(u){return u})):i!=null&&(iu(i)&&(i=ng(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+qo(a,s);o+=wa(a,t,n,l,i)}else if(l=tg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+qo(a,s++),o+=wa(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},_a={transition:null},ag={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:_a,ReactCurrentOwner:ru};j.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=yr;j.Fragment=Kv;j.Profiler=Gv;j.PureComponent=tu;j.StrictMode=Yv;j.Suspense=Jv;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nh({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ah.call(t,l)&&!oh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pi,type:e.type,key:i,ref:a,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Xv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qv,_context:e},e.Consumer=e};j.createElement=sh;j.createFactory=function(e){var t=sh.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:qv,render:e}};j.isValidElement=iu;j.lazy=function(e){return{$$typeof:eg,_payload:{_status:-1,_result:e},_init:ig}};j.memo=function(e,t){return{$$typeof:Zv,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=_a.transition;_a.transition={};try{e()}finally{_a.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return _e.current.useCallback(e,t)};j.useContext=function(e){return _e.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};j.useEffect=function(e,t){return _e.current.useEffect(e,t)};j.useId=function(){return _e.current.useId()};j.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return _e.current.useMemo(e,t)};j.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};j.useRef=function(e){return _e.current.useRef(e)};j.useState=function(e){return _e.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return _e.current.useTransition()};j.version="18.2.0";eh.exports=j;var I=eh.exports;const So=Jd(I),og=Vv({__proto__:null,default:So},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=I,lg=Symbol.for("react.element"),ug=Symbol.for("react.fragment"),cg=Object.prototype.hasOwnProperty,fg=sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dg={key:!0,ref:!0,__self:!0,__source:!0};function lh(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)cg.call(t,r)&&!dg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lg,type:e,key:a,ref:o,props:i,_owner:fg.current}}Eo.Fragment=ug;Eo.jsx=lh;Eo.jsxs=lh;Zd.exports=Eo;var _=Zd.exports,js={},uh={exports:{}},Oe={},ch={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,A){var D=b.length;b.push(A);e:for(;0<D;){var Z=D-1>>>1,oe=b[Z];if(0<i(oe,A))b[Z]=A,b[D]=oe,D=Z;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var A=b[0],D=b.pop();if(D!==A){b[0]=D;e:for(var Z=0,oe=b.length,Vi=oe>>>1;Z<Vi;){var ln=2*(Z+1)-1,Xo=b[ln],un=ln+1,Wi=b[un];if(0>i(Xo,D))un<oe&&0>i(Wi,Xo)?(b[Z]=Wi,b[un]=D,Z=un):(b[Z]=Xo,b[ln]=D,Z=ln);else if(un<oe&&0>i(Wi,D))b[Z]=Wi,b[un]=D,Z=un;else break e}}return A}function i(b,A){var D=b.sortIndex-A.sortIndex;return D!==0?D:b.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,m=3,v=!1,g=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=b)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function y(b){if(w=!1,p(b),!g)if(n(l)!==null)g=!0,Go(E);else{var A=n(u);A!==null&&Qo(y,A.startTime-b)}}function E(b,A){g=!1,w&&(w=!1,h(O),O=-1),v=!0;var D=m;try{for(p(A),f=n(l);f!==null&&(!(f.expirationTime>A)||b&&!Fe());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,m=f.priorityLevel;var oe=Z(f.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),p(A)}else r(l);f=n(l)}if(f!==null)var Vi=!0;else{var ln=n(u);ln!==null&&Qo(y,ln.startTime-A),Vi=!1}return Vi}finally{f=null,m=D,v=!1}}var C=!1,T=null,O=-1,U=5,L=-1;function Fe(){return!(e.unstable_now()-L<U)}function Ir(){if(T!==null){var b=e.unstable_now();L=b;var A=!0;try{A=T(!0,b)}finally{A?Cr():(C=!1,T=null)}}else C=!1}var Cr;if(typeof d=="function")Cr=function(){d(Ir)};else if(typeof MessageChannel<"u"){var xc=new MessageChannel,Hv=xc.port2;xc.port1.onmessage=Ir,Cr=function(){Hv.postMessage(null)}}else Cr=function(){k(Ir,0)};function Go(b){T=b,C||(C=!0,Cr())}function Qo(b,A){O=k(function(){b(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Go(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return b()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,A){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=m;m=b;try{return A()}finally{m=D}},e.unstable_scheduleCallback=function(b,A,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,b){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,b={id:c++,callback:A,priorityLevel:b,startTime:D,expirationTime:oe,sortIndex:-1},D>Z?(b.sortIndex=D,t(u,b),n(l)===null&&b===n(u)&&(w?(h(O),O=-1):w=!0,Qo(y,D-Z))):(b.sortIndex=oe,t(l,b),g||v||(g=!0,Go(E))),b},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(b){var A=m;return function(){var D=m;m=A;try{return b.apply(this,arguments)}finally{m=D}}}})(fh);ch.exports=fh;var hg=ch.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=I,Ne=hg;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hh=new Set,Zr={};function On(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)hh.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oc={},Rc={};function mg(e){return Us.call(Rc,e)?!0:Us.call(Oc,e)?!1:pg.test(e)?Rc[e]=!0:(Oc[e]=!0,!1)}function vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gg(e,t,n,r){if(t===null||typeof t>"u"||vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var au=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(au,ou);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(au,ou);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(au,ou);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gg(t,n,i,r)&&(n=null),r||i===null?mg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),ph=Symbol.for("react.provider"),mh=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),vh=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Jo;function Lr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var Zo=!1;function es(e,t){if(!e||Zo)return"";Zo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Zo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function yg(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1),e;case 11:return e=es(e.type.render,!1),e;case 1:return e=es(e.type,!0),e;default:return""}}function Bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Mn:return"Portal";case zs:return"Profiler";case lu:return"StrictMode";case Fs:return"Suspense";case $s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mh:return(e.displayName||"Context")+".Consumer";case ph:return(e._context.displayName||"Context")+".Provider";case uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:Bs(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Bs(e(t))}catch{}}return null}function wg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bs(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _g(e){var t=gh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=_g(e))}function yh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wh(e,t){t=t.checked,t!=null&&su(e,"checked",t,!1)}function Vs(e,t){wh(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||Ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ks(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Dr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function _h(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Eh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kg=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){kg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function Sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function Ih(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Eg=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(Eg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Zn=null,er=null;function Uc(e){if(e=Oi(e)){if(typeof qs!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Po(t),qs(e.stateNode,e.type,t))}}function Ch(e){Zn?er?er.push(e):er=[e]:Zn=e}function Th(){if(Zn){var e=Zn,t=er;if(er=Zn=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function xh(e,t){return e(t)}function Ph(){}var ts=!1;function bh(e,t,n){if(ts)return e(t,n);ts=!0;try{return xh(e,t,n)}finally{ts=!1,(Zn!==null||er!==null)&&(Ph(),Th())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Js=!1;if(ft)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Js=!1}function Sg(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Br=!1,za=null,Fa=!1,Zs=null,Ig={onError:function(e){Br=!0,za=e}};function Cg(e,t,n,r,i,a,o,s,l){Br=!1,za=null,Sg.apply(Ig,arguments)}function Tg(e,t,n,r,i,a,o,s,l){if(Cg.apply(this,arguments),Br){if(Br){var u=za;Br=!1,za=null}else throw Error(S(198));Fa||(Fa=!0,Zs=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Rn(e)!==e)throw Error(S(188))}function xg(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return zc(i),e;if(a===r)return zc(i),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Oh(e){return e=xg(e),e!==null?Rh(e):null}function Rh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rh(e);if(t!==null)return t;e=e.sibling}return null}var Ah=Ne.unstable_scheduleCallback,Fc=Ne.unstable_cancelCallback,Pg=Ne.unstable_shouldYield,bg=Ne.unstable_requestPaint,ee=Ne.unstable_now,Ng=Ne.unstable_getCurrentPriorityLevel,du=Ne.unstable_ImmediatePriority,Lh=Ne.unstable_UserBlockingPriority,$a=Ne.unstable_NormalPriority,Og=Ne.unstable_LowPriority,Dh=Ne.unstable_IdlePriority,Io=null,et=null;function Rg(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Dg,Ag=Math.log,Lg=Math.LN2;function Dg(e){return e>>>=0,e===0?32:31-(Ag(e)/Lg|0)|0}var Xi=64,qi=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Mr(s):(a&=o,a!==0&&(r=Mr(a)))}else o=n&~i,o!==0?r=Mr(o):a!==0&&(r=Mr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Mg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ke(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Mg(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mh(){var e=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),e}function ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function jh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uh,pu,zh,Fh,$h,tl=!1,Ji=[],jt=null,Ut=null,zt=null,ni=new Map,ri=new Map,xt=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $c(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function Pr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Oi(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fg(e,t,n,r,i){switch(t){case"focusin":return jt=Pr(jt,e,t,n,r,i),!0;case"dragenter":return Ut=Pr(Ut,e,t,n,r,i),!0;case"mouseover":return zt=Pr(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ni.set(a,Pr(ni.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ri.set(a,Pr(ri.get(a)||null,e,t,n,r,i)),!0}return!1}function Bh(e){var t=hn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nh(n),t!==null){e.blockedOn=t,$h(e.priority,function(){zh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xs=r,n.target.dispatchEvent(r),Xs=null}else return t=Oi(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){ka(e)&&n.delete(t)}function $g(){tl=!1,jt!==null&&ka(jt)&&(jt=null),Ut!==null&&ka(Ut)&&(Ut=null),zt!==null&&ka(zt)&&(zt=null),ni.forEach(Bc),ri.forEach(Bc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,$g)))}function ii(e){function t(i){return br(i,e)}if(0<Ji.length){br(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&br(jt,e),Ut!==null&&br(Ut,e),zt!==null&&br(zt,e),ni.forEach(t),ri.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Bh(n),n.blockedOn===null&&xt.shift()}var tr=wt.ReactCurrentBatchConfig,Ha=!0;function Bg(e,t,n,r){var i=F,a=tr.transition;tr.transition=null;try{F=1,mu(e,t,n,r)}finally{F=i,tr.transition=a}}function Hg(e,t,n,r){var i=F,a=tr.transition;tr.transition=null;try{F=4,mu(e,t,n,r)}finally{F=i,tr.transition=a}}function mu(e,t,n,r){if(Ha){var i=nl(e,t,n,r);if(i===null)ds(e,t,r,Va,n),$c(e,r);else if(Fg(i,e,t,n,r))r.stopPropagation();else if($c(e,r),t&4&&-1<zg.indexOf(e)){for(;i!==null;){var a=Oi(i);if(a!==null&&Uh(a),a=nl(e,t,n,r),a===null&&ds(e,t,r,Va,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var Va=null;function nl(e,t,n,r){if(Va=null,e=fu(r),e=hn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Va=e,null}function Hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ng()){case du:return 1;case Lh:return 4;case $a:case Og:return 16;case Dh:return 536870912;default:return 16}default:return 16}}var At=null,vu=null,Ea=null;function Vh(){if(Ea)return Ea;var e,t=vu,n=t.length,r,i="value"in At?At.value:At.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ea=i.slice(e,1<r?1-r:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Hc(){return!1}function Re(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zi:Hc,this.isPropagationStopped=Hc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=Re(wr),Ni=X({},wr,{view:0,detail:0}),Vg=Re(Ni),rs,is,Nr,Co=X({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(rs=e.screenX-Nr.screenX,is=e.screenY-Nr.screenY):is=rs=0,Nr=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:is}}),Vc=Re(Co),Wg=X({},Co,{dataTransfer:0}),Kg=Re(Wg),Yg=X({},Ni,{relatedTarget:0}),as=Re(Yg),Gg=X({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=Re(Gg),Xg=X({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qg=Re(Xg),Jg=X({},wr,{data:0}),Wc=Re(Jg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function yu(){return n0}var r0=X({},Ni,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i0=Re(r0),a0=X({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Re(a0),o0=X({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),s0=Re(o0),l0=X({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Re(l0),c0=X({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=Re(c0),d0=[9,13,27,32],wu=ft&&"CompositionEvent"in window,Hr=null;ft&&"documentMode"in document&&(Hr=document.documentMode);var h0=ft&&"TextEvent"in window&&!Hr,Wh=ft&&(!wu||Hr&&8<Hr&&11>=Hr),Yc=" ",Gc=!1;function Kh(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function p0(e,t){switch(e){case"compositionend":return Yh(t);case"keypress":return t.which!==32?null:(Gc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Gc?null:e;default:return null}}function m0(e,t){if(Un)return e==="compositionend"||!wu&&Kh(e,t)?(e=Vh(),Ea=vu=At=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wh&&t.locale!=="ko"?null:t.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v0[e.type]:t==="textarea"}function Gh(e,t,n,r){Ch(r),t=Wa(t,"onChange"),0<t.length&&(n=new gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,ai=null;function g0(e){ap(e,0)}function To(e){var t=$n(e);if(yh(t))return e}function y0(e,t){if(e==="change")return t}var Qh=!1;if(ft){var os;if(ft){var ss="oninput"in document;if(!ss){var Xc=document.createElement("div");Xc.setAttribute("oninput","return;"),ss=typeof Xc.oninput=="function"}os=ss}else os=!1;Qh=os&&(!document.documentMode||9<document.documentMode)}function qc(){Vr&&(Vr.detachEvent("onpropertychange",Xh),ai=Vr=null)}function Xh(e){if(e.propertyName==="value"&&To(ai)){var t=[];Gh(t,ai,e,fu(e)),bh(g0,t)}}function w0(e,t,n){e==="focusin"?(qc(),Vr=t,ai=n,Vr.attachEvent("onpropertychange",Xh)):e==="focusout"&&qc()}function _0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(ai)}function k0(e,t){if(e==="click")return To(t)}function E0(e,t){if(e==="input"||e==="change")return To(t)}function S0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:S0;function oi(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Us.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jh(){for(var e=window,t=Ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ua(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I0(e){var t=Jh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qh(n.ownerDocument.documentElement,n)){if(r!==null&&_u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Zc(n,a);var o=Zc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C0=ft&&"documentMode"in document&&11>=document.documentMode,zn=null,rl=null,Wr=null,il=!1;function ef(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;il||zn==null||zn!==Ua(r)||(r=zn,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&oi(Wr,r)||(Wr=r,r=Wa(rl,"onSelect"),0<r.length&&(t=new gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ls={},Zh={};ft&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function xo(e){if(ls[e])return ls[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zh)return ls[e]=t[n];return e}var ep=xo("animationend"),tp=xo("animationiteration"),np=xo("animationstart"),rp=xo("transitionend"),ip=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){ip.set(e,t),On(t,[e])}for(var us=0;us<tf.length;us++){var cs=tf[us],T0=cs.toLowerCase(),x0=cs[0].toUpperCase()+cs.slice(1);Zt(T0,"on"+x0)}Zt(ep,"onAnimationEnd");Zt(tp,"onAnimationIteration");Zt(np,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(rp,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function nf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tg(r,t,void 0,e),e.currentTarget=null}function ap(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;nf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;nf(i,s,u),a=l}}}if(Fa)throw e=Zs,Fa=!1,Zs=null,e}function H(e,t){var n=t[ul];n===void 0&&(n=t[ul]=new Set);var r=e+"__bubble";n.has(r)||(op(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),op(n,e,r,t)}var ta="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[ta]){e[ta]=!0,hh.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ta]||(t[ta]=!0,fs("selectionchange",!1,t))}}function op(e,t,n,r){switch(Hh(t)){case 1:var i=Bg;break;case 4:i=Hg;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=hn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}bh(function(){var u=a,c=fu(n),f=[];e:{var m=ip.get(e);if(m!==void 0){var v=gu,g=e;switch(e){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":v=i0;break;case"focusin":g="focus",v=as;break;case"focusout":g="blur",v=as;break;case"beforeblur":case"afterblur":v=as;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=s0;break;case ep:case tp:case np:v=Qg;break;case rp:v=u0;break;case"scroll":v=Vg;break;case"wheel":v=f0;break;case"copy":case"cut":case"paste":v=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kc}var w=(t&4)!==0,k=!w&&e==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=ti(d,h),y!=null&&w.push(li(d,y,p)))),k)break;d=d.return}0<w.length&&(m=new v(m,g,null,n,c),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Xs&&(g=n.relatedTarget||n.fromElement)&&(hn(g)||g[dt]))break e;if((v||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?hn(g):null,g!==null&&(k=Rn(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(w=Vc,y="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Kc,y="onPointerLeave",h="onPointerEnter",d="pointer"),k=v==null?m:$n(v),p=g==null?m:$n(g),m=new w(y,d+"leave",v,n,c),m.target=k,m.relatedTarget=p,y=null,hn(c)===u&&(w=new w(h,d+"enter",g,n,c),w.target=p,w.relatedTarget=k,y=w),k=y,v&&g)t:{for(w=v,h=g,d=0,p=w;p;p=Dn(p))d++;for(p=0,y=h;y;y=Dn(y))p++;for(;0<d-p;)w=Dn(w),d--;for(;0<p-d;)h=Dn(h),p--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=Dn(w),h=Dn(h)}w=null}else w=null;v!==null&&rf(f,m,v,w,!1),g!==null&&k!==null&&rf(f,k,g,w,!0)}}e:{if(m=u?$n(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=y0;else if(Qc(m))if(Qh)E=E0;else{E=_0;var C=w0}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=k0);if(E&&(E=E(e,u))){Gh(f,E,n,c);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ws(m,"number",m.value)}switch(C=u?$n(u):window,e){case"focusin":(Qc(C)||C.contentEditable==="true")&&(zn=C,rl=u,Wr=null);break;case"focusout":Wr=rl=zn=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,ef(f,n,c);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":ef(f,n,c)}var T;if(wu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Un?Kh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Wh&&n.locale!=="ko"&&(Un||O!=="onCompositionStart"?O==="onCompositionEnd"&&Un&&(T=Vh()):(At=c,vu="value"in At?At.value:At.textContent,Un=!0)),C=Wa(u,O),0<C.length&&(O=new Wc(O,e,null,n,c),f.push({event:O,listeners:C}),T?O.data=T:(T=Yh(n),T!==null&&(O.data=T)))),(T=h0?p0(e,n):m0(e,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(c=new Wc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}ap(f,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ti(e,n),a!=null&&r.unshift(li(e,a,i)),a=ti(e,t),a!=null&&r.push(li(e,a,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ti(n,a),l!=null&&o.unshift(li(n,l,s))):i||(l=ti(n,a),l!=null&&o.push(li(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var b0=/\r\n?/g,N0=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace(b0,`
`).replace(N0,"")}function na(e,t,n){if(t=af(t),af(e)!==t&&n)throw Error(S(425))}function Ka(){}var al=null,ol=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(A0)}:ll;function A0(e){setTimeout(function(){throw e})}function hs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ii(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Je="__reactFiber$"+_r,ui="__reactProps$"+_r,dt="__reactContainer$"+_r,ul="__reactEvents$"+_r,L0="__reactListeners$"+_r,D0="__reactHandles$"+_r;function hn(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sf(e);e!==null;){if(n=e[Je])return n;e=sf(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Je]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Po(e){return e[ui]||null}var cl=[],Bn=-1;function en(e){return{current:e}}function W(e){0>Bn||(e.current=cl[Bn],cl[Bn]=null,Bn--)}function B(e,t){Bn++,cl[Bn]=e.current,e.current=t}var Qt={},me=en(Qt),Ie=en(!1),kn=Qt;function ur(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Ya(){W(Ie),W(me)}function lf(e,t,n){if(me.current!==Qt)throw Error(S(168));B(me,t),B(Ie,n)}function sp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,wg(e)||"Unknown",i));return X({},n,r)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,kn=me.current,B(me,e),B(Ie,Ie.current),!0}function uf(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=sp(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,W(Ie),W(me),B(me,e)):W(Ie),B(Ie,n)}var at=null,bo=!1,ps=!1;function lp(e){at===null?at=[e]:at.push(e)}function M0(e){bo=!0,lp(e)}function tn(){if(!ps&&at!==null){ps=!0;var e=0,t=F;try{var n=at;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,bo=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),Ah(du,tn),i}finally{F=t,ps=!1}}return null}var Hn=[],Vn=0,Qa=null,Xa=0,Le=[],De=0,En=null,ot=1,st="";function cn(e,t){Hn[Vn++]=Xa,Hn[Vn++]=Qa,Qa=e,Xa=t}function up(e,t,n){Le[De++]=ot,Le[De++]=st,Le[De++]=En,En=e;var r=ot;e=st;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ot=1<<32-Ke(t)+i|n<<i|r,st=a+e}else ot=1<<a|n<<i|r,st=e}function ku(e){e.return!==null&&(cn(e,1),up(e,1,0))}function Eu(e){for(;e===Qa;)Qa=Hn[--Vn],Hn[Vn]=null,Xa=Hn[--Vn],Hn[Vn]=null;for(;e===En;)En=Le[--De],Le[De]=null,st=Le[--De],Le[De]=null,ot=Le[--De],Le[De]=null}var be=null,Pe=null,Y=!1,Ve=null;function cp(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Pe=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:ot,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Pe=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(Y){var t=Pe;if(t){var n=t;if(!cf(e,t)){if(fl(e))throw Error(S(418));t=Ft(n.nextSibling);var r=be;t&&cf(e,t)?cp(r,n):(e.flags=e.flags&-4097|2,Y=!1,be=e)}}else{if(fl(e))throw Error(S(418));e.flags=e.flags&-4097|2,Y=!1,be=e}}}function ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function ra(e){if(e!==be)return!1;if(!Y)return ff(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=Pe)){if(fl(e))throw fp(),Error(S(418));for(;t;)cp(e,t),t=Ft(t.nextSibling)}if(ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=be?Ft(e.stateNode.nextSibling):null;return!0}function fp(){for(var e=Pe;e;)e=Ft(e.nextSibling)}function cr(){Pe=be=null,Y=!1}function Su(e){Ve===null?Ve=[e]:Ve.push(e)}var j0=wt.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qa=en(null),Ja=null,Wn=null,Iu=null;function Cu(){Iu=Wn=Ja=null}function Tu(e){var t=qa.current;W(qa),e._currentValue=t}function hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Ja=e,Iu=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Iu!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Ja===null)throw Error(S(308));Wn=e,Ja.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var pn=null;function xu(e){pn===null?pn=[e]:pn.push(e)}function dp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xu(t)):(n.next=i.next,i.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ht(e,n)}return i=r.interleaved,i===null?(t.next=t,xu(r)):(t.next=i.next,i.next=t),r.interleaved=t,ht(e,n)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function df(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var i=e.updateQueue;Tt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var m=s.lane,v=s.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,w=s;switch(m=t,v=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){f=g.call(v,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,m=typeof g=="function"?g.call(v,f,m):g,m==null)break e;f=X({},f,m);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=f):c=c.next=v,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);In|=o,e.lanes=o,e.memoizedState=f}}function hf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var pp=new dh.Component().refs;function pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var No={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ht(e),a=ct(r,i);a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,i),t!==null&&(Ye(t,e,i,r),Ia(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ht(e),a=ct(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,i),t!==null&&(Ye(t,e,i,r),Ia(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ht(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,r),t!==null&&(Ye(t,e,r,n),Ia(t,e,r))}};function pf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(i,a):!0}function mp(e,t,n){var r=!1,i=Qt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ue(a):(i=Ce(t)?kn:me.current,r=t.contextTypes,a=(r=r!=null)?ur(e,i):Qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=No,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function mf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=pp,Pu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ue(a):(a=Ce(t)?kn:me.current,i.context=ur(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(pl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&No.enqueueReplaceState(i,i.state,null),Za(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===pp&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vf(e){var t=e._init;return t(e._payload)}function vp(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Vt(h,d),h.index=0,h.sibling=null,h}function a(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,p,y){return d===null||d.tag!==6?(d=ks(p,h.mode,y),d.return=h,d):(d=i(d,p),d.return=h,d)}function l(h,d,p,y){var E=p.type;return E===jn?c(h,d,p.props.children,y,p.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&vf(E)===d.type)?(y=i(d,p.props),y.ref=Or(h,d,p),y.return=h,y):(y=Na(p.type,p.key,p.props,null,h.mode,y),y.ref=Or(h,d,p),y.return=h,y)}function u(h,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Es(p,h.mode,y),d.return=h,d):(d=i(d,p.children||[]),d.return=h,d)}function c(h,d,p,y,E){return d===null||d.tag!==7?(d=wn(p,h.mode,y,E),d.return=h,d):(d=i(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ks(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yi:return p=Na(d.type,d.key,d.props,null,h.mode,p),p.ref=Or(h,null,d),p.return=h,p;case Mn:return d=Es(d,h.mode,p),d.return=h,d;case Ct:var y=d._init;return f(h,y(d._payload),p)}if(Dr(d)||Tr(d))return d=wn(d,h.mode,p,null),d.return=h,d;ia(h,d)}return null}function m(h,d,p,y){var E=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(h,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return p.key===E?l(h,d,p,y):null;case Mn:return p.key===E?u(h,d,p,y):null;case Ct:return E=p._init,m(h,d,E(p._payload),y)}if(Dr(p)||Tr(p))return E!==null?null:c(h,d,p,y,null);ia(h,p)}return null}function v(h,d,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,s(d,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:return h=h.get(y.key===null?p:y.key)||null,l(d,h,y,E);case Mn:return h=h.get(y.key===null?p:y.key)||null,u(d,h,y,E);case Ct:var C=y._init;return v(h,d,p,C(y._payload),E)}if(Dr(y)||Tr(y))return h=h.get(p)||null,c(d,h,y,E,null);ia(d,y)}return null}function g(h,d,p,y){for(var E=null,C=null,T=d,O=d=0,U=null;T!==null&&O<p.length;O++){T.index>O?(U=T,T=null):U=T.sibling;var L=m(h,T,p[O],y);if(L===null){T===null&&(T=U);break}e&&T&&L.alternate===null&&t(h,T),d=a(L,d,O),C===null?E=L:C.sibling=L,C=L,T=U}if(O===p.length)return n(h,T),Y&&cn(h,O),E;if(T===null){for(;O<p.length;O++)T=f(h,p[O],y),T!==null&&(d=a(T,d,O),C===null?E=T:C.sibling=T,C=T);return Y&&cn(h,O),E}for(T=r(h,T);O<p.length;O++)U=v(T,h,O,p[O],y),U!==null&&(e&&U.alternate!==null&&T.delete(U.key===null?O:U.key),d=a(U,d,O),C===null?E=U:C.sibling=U,C=U);return e&&T.forEach(function(Fe){return t(h,Fe)}),Y&&cn(h,O),E}function w(h,d,p,y){var E=Tr(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var C=E=null,T=d,O=d=0,U=null,L=p.next();T!==null&&!L.done;O++,L=p.next()){T.index>O?(U=T,T=null):U=T.sibling;var Fe=m(h,T,L.value,y);if(Fe===null){T===null&&(T=U);break}e&&T&&Fe.alternate===null&&t(h,T),d=a(Fe,d,O),C===null?E=Fe:C.sibling=Fe,C=Fe,T=U}if(L.done)return n(h,T),Y&&cn(h,O),E;if(T===null){for(;!L.done;O++,L=p.next())L=f(h,L.value,y),L!==null&&(d=a(L,d,O),C===null?E=L:C.sibling=L,C=L);return Y&&cn(h,O),E}for(T=r(h,T);!L.done;O++,L=p.next())L=v(T,h,O,L.value,y),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?O:L.key),d=a(L,d,O),C===null?E=L:C.sibling=L,C=L);return e&&T.forEach(function(Ir){return t(h,Ir)}),Y&&cn(h,O),E}function k(h,d,p,y){if(typeof p=="object"&&p!==null&&p.type===jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:e:{for(var E=p.key,C=d;C!==null;){if(C.key===E){if(E=p.type,E===jn){if(C.tag===7){n(h,C.sibling),d=i(C,p.props.children),d.return=h,h=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&vf(E)===C.type){n(h,C.sibling),d=i(C,p.props),d.ref=Or(h,C,p),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}p.type===jn?(d=wn(p.props.children,h.mode,y,p.key),d.return=h,h=d):(y=Na(p.type,p.key,p.props,null,h.mode,y),y.ref=Or(h,d,p),y.return=h,h=y)}return o(h);case Mn:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=i(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Es(p,h.mode,y),d.return=h,h=d}return o(h);case Ct:return C=p._init,k(h,d,C(p._payload),y)}if(Dr(p))return g(h,d,p,y);if(Tr(p))return w(h,d,p,y);ia(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,p),d.return=h,h=d):(n(h,d),d=ks(p,h.mode,y),d.return=h,h=d),o(h)):n(h,d)}return k}var fr=vp(!0),gp=vp(!1),Ri={},tt=en(Ri),ci=en(Ri),fi=en(Ri);function mn(e){if(e===Ri)throw Error(S(174));return e}function bu(e,t){switch(B(fi,t),B(ci,e),B(tt,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ys(t,e)}W(tt),B(tt,t)}function dr(){W(tt),W(ci),W(fi)}function yp(e){mn(fi.current);var t=mn(tt.current),n=Ys(t,e.type);t!==n&&(B(ci,e),B(tt,n))}function Nu(e){ci.current===e&&(W(tt),W(ci))}var G=en(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function Ou(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var Ca=wt.ReactCurrentDispatcher,vs=wt.ReactCurrentBatchConfig,Sn=0,Q=null,re=null,se=null,to=!1,Kr=!1,di=0,U0=0;function de(){throw Error(S(321))}function Ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Au(e,t,n,r,i,a){if(Sn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ca.current=e===null||e.memoizedState===null?B0:H0,e=n(r,i),Kr){a=0;do{if(Kr=!1,di=0,25<=a)throw Error(S(301));a+=1,se=re=null,t.updateQueue=null,Ca.current=V0,e=n(r,i)}while(Kr)}if(Ca.current=no,t=re!==null&&re.next!==null,Sn=0,se=re=Q=null,to=!1,t)throw Error(S(300));return e}function Lu(){var e=di!==0;return di=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Q.memoizedState=se=e:se=se.next=e,se}function ze(){if(re===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=se===null?Q.memoizedState:se.next;if(t!==null)se=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?Q.memoizedState=se=e:se=se.next=e}return se}function hi(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Sn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Q.lanes|=c,In|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ge(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,In|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ys(e){var t=ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ge(a,t.memoizedState)||(Se=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function wp(){}function _p(e,t){var n=Q,r=ze(),i=t(),a=!Ge(r.memoizedState,i);if(a&&(r.memoizedState=i,Se=!0),r=r.queue,Du(Sp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,pi(9,Ep.bind(null,n,r,i,t),void 0,null),le===null)throw Error(S(349));Sn&30||kp(n,t,i)}return i}function kp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ep(e,t,n,r){t.value=n,t.getSnapshot=r,Ip(t)&&Cp(e)}function Sp(e,t,n){return n(function(){Ip(t)&&Cp(e)})}function Ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Cp(e){var t=ht(e,1);t!==null&&Ye(t,e,1,-1)}function gf(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hi,lastRenderedState:e},t.queue=e,e=e.dispatch=$0.bind(null,Q,e),[t.memoizedState,e]}function pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tp(){return ze().memoizedState}function Ta(e,t,n,r){var i=qe();Q.flags|=e,i.memoizedState=pi(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=ze();r=r===void 0?null:r;var a=void 0;if(re!==null){var o=re.memoizedState;if(a=o.destroy,r!==null&&Ru(r,o.deps)){i.memoizedState=pi(t,n,a,r);return}}Q.flags|=e,i.memoizedState=pi(1|t,n,a,r)}function yf(e,t){return Ta(8390656,8,e,t)}function Du(e,t){return Oo(2048,8,e,t)}function xp(e,t){return Oo(4,2,e,t)}function Pp(e,t){return Oo(4,4,e,t)}function bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,bp.bind(null,t,e),n)}function Mu(){}function Op(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rp(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ap(e,t,n){return Sn&21?(Ge(n,t)||(n=Mh(),Q.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function z0(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=vs.transition;vs.transition={};try{e(!1),t()}finally{F=n,vs.transition=r}}function Lp(){return ze().memoizedState}function F0(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dp(e))Mp(t,n);else if(n=dp(e,t,n,r),n!==null){var i=we();Ye(n,e,r,i),jp(n,t,r)}}function $0(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dp(e))Mp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,o)){var l=t.interleaved;l===null?(i.next=i,xu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=dp(e,t,i,r),n!==null&&(i=we(),Ye(n,e,r,i),jp(n,t,r))}}function Dp(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Mp(e,t){Kr=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var no={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},B0={readContext:Ue,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,bp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:gf,useDebugValue:Mu,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=gf(!1),t=e[0];return e=z0.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=qe();if(Y){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Sn&30||kp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yf(Sp.bind(null,r,a,e),[e]),r.flags|=2048,pi(9,Ep.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=qe(),t=le.identifierPrefix;if(Y){var n=st,r=ot;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},H0={readContext:Ue,useCallback:Op,useContext:Ue,useEffect:Du,useImperativeHandle:Np,useInsertionEffect:xp,useLayoutEffect:Pp,useMemo:Rp,useReducer:gs,useRef:Tp,useState:function(){return gs(hi)},useDebugValue:Mu,useDeferredValue:function(e){var t=ze();return Ap(t,re.memoizedState,e)},useTransition:function(){var e=gs(hi)[0],t=ze().memoizedState;return[e,t]},useMutableSource:wp,useSyncExternalStore:_p,useId:Lp,unstable_isNewReconciler:!1},V0={readContext:Ue,useCallback:Op,useContext:Ue,useEffect:Du,useImperativeHandle:Np,useInsertionEffect:xp,useLayoutEffect:Pp,useMemo:Rp,useReducer:ys,useRef:Tp,useState:function(){return ys(hi)},useDebugValue:Mu,useDeferredValue:function(e){var t=ze();return re===null?t.memoizedState=e:Ap(t,re.memoizedState,e)},useTransition:function(){var e=ys(hi)[0],t=ze().memoizedState;return[e,t]},useMutableSource:wp,useSyncExternalStore:_p,useId:Lp,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=yg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,Tl=r),vl(e,t)},n}function zp(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ay.bind(null,e,t,n),t.then(e,e))}function _f(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var K0=wt.ReactCurrentOwner,Se=!1;function ye(e,t,n,r){t.child=e===null?gp(t,null,n,r):fr(t,e.child,n,r)}function Ef(e,t,n,r,i){n=n.render;var a=t.ref;return nr(t,i),r=Au(e,t,n,r,a,i),n=Lu(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Y&&n&&ku(t),t.flags|=1,ye(e,t,r,i),t.child)}function Sf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Vu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fp(e,t,a,r,i)):(e=Na(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(o,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Vt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(oi(a,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,i)}return gl(e,t,n,r,i)}function $p(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Yn,xe),xe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Yn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(Yn,xe),xe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Yn,xe),xe|=r;return ye(e,t,i,n),t.child}function Bp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gl(e,t,n,r,i){var a=Ce(n)?kn:me.current;return a=ur(t,a),nr(t,i),n=Au(e,t,n,r,a,i),r=Lu(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Y&&r&&ku(t),t.flags|=1,ye(e,t,n,i),t.child)}function If(e,t,n,r,i){if(Ce(n)){var a=!0;Ga(t)}else a=!1;if(nr(t,i),t.stateNode===null)xa(e,t),mp(t,n,r),ml(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Ce(n)?kn:me.current,u=ur(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&mf(t,o,r,u),Tt=!1;var m=t.memoizedState;o.state=m,Za(t,r,o,i),l=t.memoizedState,s!==r||m!==l||Ie.current||Tt?(typeof c=="function"&&(pl(t,n,c,r),l=t.memoizedState),(s=Tt||pf(t,n,s,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Be(t.type,s),o.props=u,f=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Ce(n)?kn:me.current,l=ur(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||m!==l)&&mf(t,o,r,l),Tt=!1,m=t.memoizedState,o.state=m,Za(t,r,o,i);var g=t.memoizedState;s!==f||m!==g||Ie.current||Tt?(typeof v=="function"&&(pl(t,n,v,r),g=t.memoizedState),(u=Tt||pf(t,n,u,r,m,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return yl(e,t,n,r,a,i)}function yl(e,t,n,r,i,a){Bp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&uf(t,n,!1),pt(e,t,a);r=t.stateNode,K0.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,s,a)):ye(e,t,s,a),t.memoizedState=r.state,i&&uf(t,n,!0),t.child}function Hp(e){var t=e.stateNode;t.pendingContext?lf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lf(e,t.context,!1),bu(e,t.containerInfo)}function Cf(e,t,n,r,i){return cr(),Su(i),t.flags|=256,ye(e,t,n,r),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vp(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Lo(o,r,0,null),e=wn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_l(n),t.memoizedState=wl,e):ju(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Y0(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Vt(s,a):(a=wn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?_l(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=wl,r}return a=e.child,e=a.sibling,r=Vt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,n,r){return r!==null&&Su(r),fr(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Y0(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ws(Error(S(422))),aa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),a=wn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&fr(t,e.child,null,o),t.child.memoizedState=_l(o),t.memoizedState=wl,a);if(!(t.mode&1))return aa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=ws(a,r,void 0),aa(e,t,o,r)}if(s=(o&e.childLanes)!==0,Se||s){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,ht(e,i),Ye(r,e,i,-1))}return Hu(),r=ws(Error(S(421))),aa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=oy.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pe=Ft(i.nextSibling),be=t,Y=!0,Ve=null,e!==null&&(Le[De++]=ot,Le[De++]=st,Le[De++]=En,ot=e.id,st=e.overflow,En=t),t=ju(t,r.children),t.flags|=4096,t)}function Tf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hl(e.return,t,n)}function _s(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ye(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tf(e,n,t);else if(e.tag===19)Tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_s(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_s(t,!0,n,null,a);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G0(e,t,n){switch(t.tag){case 3:Hp(t),cr();break;case 5:yp(t);break;case 1:Ce(t.type)&&Ga(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Vp(e,t,n):(B(G,G.current&1),e=pt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,$p(e,t,n)}return pt(e,t,n)}var Kp,kl,Yp,Gp;Kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kl=function(){};Yp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mn(tt.current);var a=null;switch(n){case"input":i=Hs(e,i),r=Hs(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=Ks(e,i),r=Ks(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ka)}Gs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Q0(e,t,n){var r=t.pendingProps;switch(Eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ce(t.type)&&Ya(),he(t),null;case 3:return r=t.stateNode,dr(),W(Ie),W(me),Ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(bl(Ve),Ve=null))),kl(e,t),he(t),null;case 5:Nu(t);var i=mn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)Yp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=mn(tt.current),ra(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Je]=t,r[ui]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)H(jr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Lc(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":Mc(r,a),H("invalid",r)}Gs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&na(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&na(r.textContent,s,e),i=["children",""+s]):Zr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Gi(r),Dc(r,a,!0);break;case"textarea":Gi(r),jc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ka)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Je]=t,e[ui]=r,Kp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Qs(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)H(jr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Lc(e,r),i=Hs(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":Mc(e,r),i=Ks(e,r),H("invalid",e);break;default:i=r}Gs(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Ih(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Eh(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ei(e,l):typeof l=="number"&&ei(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Zr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&su(e,a,l,o))}switch(n){case"input":Gi(e),Dc(e,r,!1);break;case"textarea":Gi(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Jn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=mn(fi.current),mn(tt.current),ra(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(a=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return he(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))fp(),cr(),t.flags|=98560,a=!1;else if(a=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Je]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else Ve!==null&&(bl(Ve),Ve=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):Hu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return dr(),kl(e,t),e===null&&si(t.stateNode.containerInfo),he(t),null;case 10:return Tu(t.type._context),he(t),null;case 17:return Ce(t.type)&&Ya(),he(t),null;case 19:if(W(G),a=t.memoizedState,a===null)return he(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Rr(a,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,Rr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>pr&&(t.flags|=128,r=!0,Rr(a,!1),t.lanes=4194304)}else{if(!r)if(e=eo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return he(t),null}else 2*ee()-a.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function X0(e,t){switch(Eu(t),t.tag){case 1:return Ce(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),W(Ie),W(me),Ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nu(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return dr(),null;case 10:return Tu(t.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var oa=!1,pe=!1,q0=typeof WeakSet=="function"?WeakSet:Set,P=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function El(e,t,n){try{n()}catch(r){q(e,t,r)}}var xf=!1;function J0(e,t){if(al=Ha,e=Jh(),_u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(s=o),m===a&&++c===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},Ha=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,k=g.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=xf,xf=!1,g}function Yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&El(t,n,a)}i=i.next}while(i!==r)}}function Ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qp(e){var t=e.alternate;t!==null&&(e.alternate=null,Qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[ui],delete t[ul],delete t[L0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xp(e){return e.tag===5||e.tag===3||e.tag===4}function Pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ka));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}var ue=null,He=!1;function Et(e,t,n){for(n=n.child;n!==null;)qp(e,t,n),n=n.sibling}function qp(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:pe||Kn(n,t);case 6:var r=ue,i=He;ue=null,Et(e,t,n),ue=r,He=i,ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?hs(e.parentNode,n):e.nodeType===1&&hs(e,n),ii(e)):hs(ue,n.stateNode));break;case 4:r=ue,i=He,ue=n.stateNode.containerInfo,He=!0,Et(e,t,n),ue=r,He=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&El(n,t,o),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!pe&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,Et(e,t,n),pe=r):Et(e,t,n);break;default:Et(e,t,n)}}function bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q0),t.forEach(function(r){var i=sy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,He=!1;break e;case 3:ue=s.stateNode.containerInfo,He=!0;break e;case 4:ue=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(ue===null)throw Error(S(160));qp(a,o,i),ue=null,He=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Xe(e),r&4){try{Yr(3,e,e.return),Ro(3,e)}catch(w){q(e,e.return,w)}try{Yr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:$e(t,e),Xe(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if($e(t,e),Xe(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var i=e.stateNode;try{ei(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&wh(i,a),Qs(s,o);var u=Qs(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Ih(i,f):c==="dangerouslySetInnerHTML"?Eh(i,f):c==="children"?ei(i,f):su(i,c,f,u)}switch(s){case"input":Vs(i,a);break;case"textarea":_h(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Jn(i,!!a.multiple,v,!1):m!==!!a.multiple&&(a.defaultValue!=null?Jn(i,!!a.multiple,a.defaultValue,!0):Jn(i,!!a.multiple,a.multiple?[]:"",!1))}i[ui]=a}catch(w){q(e,e.return,w)}}break;case 6:if($e(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){q(e,e.return,w)}}break;case 3:if($e(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ii(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:$e(t,e),Xe(e);break;case 13:$e(t,e),Xe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=ee())),r&4&&bf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||c,$e(t,e),pe=u):$e(t,e),Xe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:Yr(4,m,m.return);break;case 1:Kn(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Kn(m,m.return);break;case 22:if(m.memoizedState!==null){Of(f);continue}}v!==null?(v.return=m,P=v):Of(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Sh("display",o))}catch(w){q(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(t,e),Xe(e),r&4&&bf(e);break;case 21:break;default:$e(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ei(i,""),r.flags&=-33);var a=Pf(e);Cl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Pf(e);Il(e,s,o);break;default:throw Error(S(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z0(e,t,n){P=e,Zp(e)}function Zp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oa;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||pe;s=oa;var u=pe;if(oa=o,(pe=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Rf(i):l!==null?(l.return=o,P=l):Rf(i);for(;a!==null;)P=a,Zp(a),a=a.sibling;P=i,oa=s,pe=u}Nf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):Nf(e)}}function Nf(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&hf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ii(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Sl(t)}catch(m){q(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Of(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Rf(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ro(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var a=t.return;try{Sl(t)}catch(l){q(t,a,l)}break;case 5:var o=t.return;try{Sl(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var ey=Math.ceil,ro=wt.ReactCurrentDispatcher,Uu=wt.ReactCurrentOwner,je=wt.ReactCurrentBatchConfig,z=0,le=null,ne=null,ce=0,xe=0,Yn=en(0),ie=0,mi=null,In=0,Ao=0,zu=0,Gr=null,Ee=null,Fu=0,pr=1/0,it=null,io=!1,Tl=null,Bt=null,sa=!1,Lt=null,ao=0,Qr=0,xl=null,Pa=-1,ba=0;function we(){return z&6?ee():Pa!==-1?Pa:Pa=ee()}function Ht(e){return e.mode&1?z&2&&ce!==0?ce&-ce:j0.transition!==null?(ba===0&&(ba=Mh()),ba):(e=F,e!==0||(e=window.event,e=e===void 0?16:Hh(e.type)),e):1}function Ye(e,t,n,r){if(50<Qr)throw Qr=0,xl=null,Error(S(185));bi(e,n,r),(!(z&2)||e!==le)&&(e===le&&(!(z&2)&&(Ao|=n),ie===4&&Pt(e,ce)),Te(e,r),n===1&&z===0&&!(t.mode&1)&&(pr=ee()+500,bo&&tn()))}function Te(e,t){var n=e.callbackNode;jg(e,t);var r=Ba(e,e===le?ce:0);if(r===0)n!==null&&Fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fc(n),t===1)e.tag===0?M0(Af.bind(null,e)):lp(Af.bind(null,e)),R0(function(){!(z&6)&&tn()}),n=null;else{switch(jh(r)){case 1:n=du;break;case 4:n=Lh;break;case 16:n=$a;break;case 536870912:n=Dh;break;default:n=$a}n=sm(n,em.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function em(e,t){if(Pa=-1,ba=0,z&6)throw Error(S(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=Ba(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=z;z|=2;var a=nm();(le!==e||ce!==t)&&(it=null,pr=ee()+500,yn(e,t));do try{ry();break}catch(s){tm(e,s)}while(!0);Cu(),ro.current=a,z=i,ne!==null?t=0:(le=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=el(e),i!==0&&(r=i,t=Pl(e,i))),t===1)throw n=mi,yn(e,0),Pt(e,r),Te(e,ee()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ty(i)&&(t=oo(e,r),t===2&&(a=el(e),a!==0&&(r=a,t=Pl(e,a))),t===1))throw n=mi,yn(e,0),Pt(e,r),Te(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:fn(e,Ee,it);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Fu+500-ee(),10<t)){if(Ba(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ll(fn.bind(null,e,Ee,it),t);break}fn(e,Ee,it);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ey(r/1960))-r,10<r){e.timeoutHandle=ll(fn.bind(null,e,Ee,it),r);break}fn(e,Ee,it);break;case 5:fn(e,Ee,it);break;default:throw Error(S(329))}}}return Te(e,ee()),e.callbackNode===n?em.bind(null,e):null}function Pl(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&bl(t)),e}function bl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function ty(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ge(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~zu,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Af(e){if(z&6)throw Error(S(327));rr();var t=Ba(e,0);if(!(t&1))return Te(e,ee()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=el(e);r!==0&&(t=r,n=Pl(e,r))}if(n===1)throw n=mi,yn(e,0),Pt(e,t),Te(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fn(e,Ee,it),Te(e,ee()),null}function $u(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(pr=ee()+500,bo&&tn())}}function Cn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&rr();var t=z;z|=1;var n=je.transition,r=F;try{if(je.transition=null,F=1,e)return e()}finally{F=r,je.transition=n,z=t,!(z&6)&&tn()}}function Bu(){xe=Yn.current,W(Yn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,O0(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:dr(),W(Ie),W(me),Ou();break;case 5:Nu(r);break;case 4:dr();break;case 13:W(G);break;case 19:W(G);break;case 10:Tu(r.type._context);break;case 22:case 23:Bu()}n=n.return}if(le=e,ne=e=Vt(e.current,null),ce=xe=t,ie=0,mi=null,zu=Ao=In=0,Ee=Gr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}pn=null}return e}function tm(e,t){do{var n=ne;try{if(Cu(),Ca.current=no,to){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(Sn=0,se=re=Q=null,Kr=!1,di=0,Uu.current=null,n===null||n.return===null){ie=1,mi=t,ne=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ce,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=_f(o);if(v!==null){v.flags&=-257,kf(v,o,s,a,t),v.mode&1&&wf(a,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var w=new Set;w.add(l),t.updateQueue=w}else g.add(l);break e}else{if(!(t&1)){wf(a,u,t),Hu();break e}l=Error(S(426))}}else if(Y&&s.mode&1){var k=_f(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kf(k,o,s,a,t),Su(hr(l,s));break e}}a=l=hr(l,s),ie!==4&&(ie=2),Gr===null?Gr=[a]:Gr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Up(a,l,t);df(a,h);break e;case 1:s=l;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=zp(a,s,t);df(a,y);break e}}a=a.return}while(a!==null)}im(n)}catch(E){t=E,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function nm(){var e=ro.current;return ro.current=no,e===null?no:e}function Hu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(In&268435455)&&!(Ao&268435455)||Pt(le,ce)}function oo(e,t){var n=z;z|=2;var r=nm();(le!==e||ce!==t)&&(it=null,yn(e,t));do try{ny();break}catch(i){tm(e,i)}while(!0);if(Cu(),z=n,ro.current=r,ne!==null)throw Error(S(261));return le=null,ce=0,ie}function ny(){for(;ne!==null;)rm(ne)}function ry(){for(;ne!==null&&!Pg();)rm(ne)}function rm(e){var t=om(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?im(e):ne=t,Uu.current=null}function im(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X0(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=Q0(n,t,xe),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function fn(e,t,n){var r=F,i=je.transition;try{je.transition=null,F=1,iy(e,t,n,r)}finally{je.transition=i,F=r}return null}function iy(e,t,n,r){do rr();while(Lt!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Ug(e,a),e===le&&(ne=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sa||(sa=!0,sm($a,function(){return rr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=je.transition,je.transition=null;var o=F;F=1;var s=z;z|=4,Uu.current=null,J0(e,n),Jp(n,e),I0(ol),Ha=!!al,ol=al=null,e.current=n,Z0(n),bg(),z=s,F=o,je.transition=a}else e.current=n;if(sa&&(sa=!1,Lt=e,ao=i),a=e.pendingLanes,a===0&&(Bt=null),Rg(n.stateNode),Te(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=Tl,Tl=null,e;return ao&1&&e.tag!==0&&rr(),a=e.pendingLanes,a&1?e===xl?Qr++:(Qr=0,xl=e):Qr=0,tn(),null}function rr(){if(Lt!==null){var e=jh(ao),t=je.transition,n=F;try{if(je.transition=null,F=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,ao=0,z&6)throw Error(S(331));var i=z;for(z|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Yr(8,c,a)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var m=c.sibling,v=c.return;if(Qp(c),c===u){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var g=a.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Yr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,P=h;break e}P=a.return}}var d=e.current;for(P=d;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=d;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ro(9,s)}}catch(E){q(s,s.return,E)}if(s===o){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(z=i,tn(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{F=n,je.transition=t}}return!1}function Lf(e,t,n){t=hr(n,t),t=Up(e,t,1),e=$t(e,t,1),t=we(),e!==null&&(bi(e,1,t),Te(e,t))}function q(e,t,n){if(e.tag===3)Lf(e,e,n);else for(;t!==null;){if(t.tag===3){Lf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){e=hr(n,e),e=zp(t,e,1),t=$t(t,e,1),e=we(),t!==null&&(bi(t,1,e),Te(t,e));break}}t=t.return}}function ay(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ee()-Fu?yn(e,0):zu|=n),Te(e,t)}function am(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=we();e=ht(e,t),e!==null&&(bi(e,t,n),Te(e,n))}function oy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function sy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),am(e,n)}var om;om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,G0(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&up(t,Xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xa(e,t),e=t.pendingProps;var i=ur(t,me.current);nr(t,n),i=Au(null,t,r,e,i,n);var a=Lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(a=!0,Ga(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pu(t),i.updater=No,t.stateNode=i,i._reactInternals=t,ml(t,r,e,n),t=yl(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&ku(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=uy(r),e=Be(r,e),i){case 0:t=gl(null,t,r,e,n);break e;case 1:t=If(null,t,r,e,n);break e;case 11:t=Ef(null,t,r,e,n);break e;case 14:t=Sf(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),gl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),If(e,t,r,i,n);case 3:e:{if(Hp(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,i=a.element,hp(e,t),Za(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=hr(Error(S(423)),t),t=Cf(e,t,r,n,i);break e}else if(r!==i){i=hr(Error(S(424)),t),t=Cf(e,t,r,n,i);break e}else for(Pe=Ft(t.stateNode.containerInfo.firstChild),be=t,Y=!0,Ve=null,n=gp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){t=pt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return yp(t),e===null&&dl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,sl(r,i)?o=null:a!==null&&sl(r,a)&&(t.flags|=32),Bp(e,t),ye(e,t,o,n),t.child;case 6:return e===null&&dl(t),null;case 13:return Vp(e,t,n);case 4:return bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ef(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(qa,r._currentValue),r._currentValue=o,a!==null)if(Ge(a.value,o)){if(a.children===i.children&&!Ie.current){t=pt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ct(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),hl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nr(t,n),i=Ue(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Sf(e,t,r,i,n);case 15:return Fp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),xa(e,t),t.tag=1,Ce(r)?(e=!0,Ga(t)):e=!1,nr(t,n),mp(t,r,i),ml(t,r,i,n),yl(null,t,r,!0,e,n);case 19:return Wp(e,t,n);case 22:return $p(e,t,n)}throw Error(S(156,t.tag))};function sm(e,t){return Ah(e,t)}function ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new ly(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uy(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===cu)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Vu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return wn(n.children,i,a,t);case lu:o=8,i|=8;break;case zs:return e=Me(12,n,t,i|2),e.elementType=zs,e.lanes=a,e;case Fs:return e=Me(13,n,t,i),e.elementType=Fs,e.lanes=a,e;case $s:return e=Me(19,n,t,i),e.elementType=$s,e.lanes=a,e;case vh:return Lo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ph:o=10;break e;case mh:o=9;break e;case uu:o=11;break e;case cu:o=14;break e;case Ct:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function wn(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=vh,e.lanes=n,e.stateNode={isHidden:!1},e}function ks(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Es(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ns(0),this.expirationTimes=ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,i,a,o,s,l){return e=new cy(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Me(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(a),e}function fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lm(e){if(!e)return Qt;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return sp(e,n,t)}return t}function um(e,t,n,r,i,a,o,s,l){return e=Wu(n,r,!0,e,i,a,o,s,l),e.context=lm(null),n=e.current,r=we(),i=Ht(n),a=ct(r,i),a.callback=t??null,$t(n,a,i),e.current.lanes=i,bi(e,i,r),Te(e,r),e}function Do(e,t,n,r){var i=t.current,a=we(),o=Ht(i);return n=lm(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(i,t,o),e!==null&&(Ye(e,i,o,a),Ia(e,i,o)),o}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Df(e,t),(e=e.alternate)&&Df(e,t)}function dy(){return null}var cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Mo.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Do(e,t,null,null)};Mo.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){Do(null,e,null,null)}),t[dt]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Bh(e)}};function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mf(){}function hy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=so(o);a.call(u)}}var o=um(t,r,e,0,null,!1,!1,"",Mf);return e._reactRootContainer=o,e[dt]=o.current,si(e.nodeType===8?e.parentNode:e),Cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=so(l);s.call(u)}}var l=Wu(e,0,!1,null,null,!1,!1,"",Mf);return e._reactRootContainer=l,e[dt]=l.current,si(e.nodeType===8?e.parentNode:e),Cn(function(){Do(t,l,n,r)}),l}function Uo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=so(o);s.call(l)}}Do(t,o,e,i)}else o=hy(n,t,e,i,r);return so(o)}Uh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(hu(t,n|1),Te(t,ee()),!(z&6)&&(pr=ee()+500,tn()))}break;case 13:Cn(function(){var r=ht(e,1);if(r!==null){var i=we();Ye(r,e,1,i)}}),Ku(e,1)}};pu=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=we();Ye(t,e,134217728,n)}Ku(e,134217728)}};zh=function(e){if(e.tag===13){var t=Ht(e),n=ht(e,t);if(n!==null){var r=we();Ye(n,e,t,r)}Ku(e,t)}};Fh=function(){return F};$h=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};qs=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(S(90));yh(r),Vs(r,i)}}}break;case"textarea":_h(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};xh=$u;Ph=Cn;var py={usingClientEntryPoint:!1,Events:[Oi,$n,Po,Ch,Th,$u]},Ar={findFiberByHostInstance:hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},my={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Io=la.inject(my),et=la}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(t))throw Error(S(200));return fy(e,t,null,n)};Oe.createRoot=function(e,t){if(!Gu(e))throw Error(S(299));var n=!1,r="",i=cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wu(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,si(e.nodeType===8?e.parentNode:e),new Yu(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Oh(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Cn(e)};Oe.hydrate=function(e,t,n){if(!jo(t))throw Error(S(200));return Uo(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=cm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=um(t,null,e,1,n??null,i,!1,a,o),e[dt]=t.current,si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};Oe.render=function(e,t,n){if(!jo(t))throw Error(S(200));return Uo(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!jo(e))throw Error(S(40));return e._reactRootContainer?(Cn(function(){Uo(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Oe.unstable_batchedUpdates=$u;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Uo(e,t,n,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),uh.exports=Oe;var vy=uh.exports,jf=vy;js.createRoot=jf.createRoot,js.hydrateRoot=jf.hydrateRoot;var Uf={};/**
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
 */const dm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let m=(s&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[c],n[f],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new yy;const m=a<<2|s>>4;if(r.push(m),u!==64){const v=s<<4&240|u>>2;if(r.push(v),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wy=function(e){const t=dm(e);return hm.encodeByteArray(t,!0)},pm=function(e){return wy(e).replace(/\./g,"")},mm=function(e){try{return hm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _y(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ky=()=>_y().__FIREBASE_DEFAULTS__,Ey=()=>{if(typeof process>"u"||typeof Uf>"u")return;const e=Uf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mm(e[1]);return t&&JSON.parse(t)},Qu=()=>{try{return ky()||Ey()||Sy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Iy=e=>{var t,n;return(n=(t=Qu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vm=()=>{var e;return(e=Qu())===null||e===void 0?void 0:e.config},gm=e=>{var t;return(t=Qu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function xy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ny(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const Ry="FirebaseError";class nn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ry,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?Ay(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new nn(i,s,r)}}function Ay(e,t){return e.replace(Ly,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ly=/\{\$([^}]+)}/g;function Dy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function lo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(zf(a)&&zf(o)){if(!lo(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zf(e){return e!==null&&typeof e=="object"}/**
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
 */function Li(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function My(e,t){const n=new jy(e,t);return n.subscribe.bind(n)}class jy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ss),i.error===void 0&&(i.error=Ss),i.complete===void 0&&(i.complete=Ss);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ss(){}/**
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
 */function _t(e){return e&&e._delegate?e._delegate:e}class mr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class zy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($y(t))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=dn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dn){return this.instances.has(t)}getOptions(t=dn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dn){return this.component?this.component.multipleInstances?t:dn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fy(e){return e===dn?void 0:e}function $y(e){return e.instantiationMode==="EAGER"}/**
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
 */class By{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const Hy={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Vy=$.INFO,Wy={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ky=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ym{constructor(t){this.name=t,this._logLevel=Vy,this._logHandler=Ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Yy=(e,t)=>t.some(n=>e instanceof n);let Ff,$f;function Gy(){return Ff||(Ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return $f||($f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wm=new WeakMap,Nl=new WeakMap,_m=new WeakMap,Is=new WeakMap,Xu=new WeakMap;function Xy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Wt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wm.set(n,e)}).catch(()=>{}),Xu.set(t,e),t}function qy(e){if(Nl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Nl.set(e,t)}let Ol={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Nl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_m.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jy(e){Ol=e(Ol)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cs(this),t,...n);return _m.set(r,t.sort?t.sort():[t]),Wt(r)}:Qy().includes(e)?function(...t){return e.apply(Cs(this),t),Wt(wm.get(this))}:function(...t){return Wt(e.apply(Cs(this),t))}}function e1(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&qy(e),Yy(e,Gy())?new Proxy(e,Ol):e)}function Wt(e){if(e instanceof IDBRequest)return Xy(e);if(Is.has(e))return Is.get(e);const t=e1(e);return t!==e&&(Is.set(e,t),Xu.set(t,e)),t}const Cs=e=>Xu.get(e);function t1(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Wt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const n1=["get","getKey","getAll","getAllKeys","count"],r1=["put","add","delete","clear"],Ts=new Map;function Bf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=r1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n1.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Ts.set(t,a),a}Jy(e=>({...e,get:(t,n,r)=>Bf(t,n)||e.get(t,n,r),has:(t,n)=>!!Bf(t,n)||e.has(t,n)}));/**
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
 */class i1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rl="@firebase/app",Hf="0.9.28";/**
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
 */const Tn=new ym("@firebase/app"),o1="@firebase/app-compat",s1="@firebase/analytics-compat",l1="@firebase/analytics",u1="@firebase/app-check-compat",c1="@firebase/app-check",f1="@firebase/auth",d1="@firebase/auth-compat",h1="@firebase/database",p1="@firebase/database-compat",m1="@firebase/functions",v1="@firebase/functions-compat",g1="@firebase/installations",y1="@firebase/installations-compat",w1="@firebase/messaging",_1="@firebase/messaging-compat",k1="@firebase/performance",E1="@firebase/performance-compat",S1="@firebase/remote-config",I1="@firebase/remote-config-compat",C1="@firebase/storage",T1="@firebase/storage-compat",x1="@firebase/firestore",P1="@firebase/firestore-compat",b1="firebase",N1="10.8.1";/**
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
 */const Al="[DEFAULT]",O1={[Rl]:"fire-core",[o1]:"fire-core-compat",[l1]:"fire-analytics",[s1]:"fire-analytics-compat",[c1]:"fire-app-check",[u1]:"fire-app-check-compat",[f1]:"fire-auth",[d1]:"fire-auth-compat",[h1]:"fire-rtdb",[p1]:"fire-rtdb-compat",[m1]:"fire-fn",[v1]:"fire-fn-compat",[g1]:"fire-iid",[y1]:"fire-iid-compat",[w1]:"fire-fcm",[_1]:"fire-fcm-compat",[k1]:"fire-perf",[E1]:"fire-perf-compat",[S1]:"fire-rc",[I1]:"fire-rc-compat",[C1]:"fire-gcs",[T1]:"fire-gcs-compat",[x1]:"fire-fst",[P1]:"fire-fst-compat","fire-js":"fire-js",[b1]:"fire-js-all"};/**
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
 */const uo=new Map,Ll=new Map;function R1(e,t){try{e.container.addComponent(t)}catch(n){Tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vi(e){const t=e.name;if(Ll.has(t))return Tn.debug(`There were multiple attempts to register component ${t}.`),!1;Ll.set(t,e);for(const n of uo.values())R1(n,e);return!0}function km(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const A1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Ai("app","Firebase",A1);/**
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
 */class L1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=N1;function Em(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Al,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=vm()),!n)throw Kt.create("no-options");const a=uo.get(i);if(a){if(lo(n,a.options)&&lo(r,a.config))return a;throw Kt.create("duplicate-app",{appName:i})}const o=new By(i);for(const l of Ll.values())o.addComponent(l);const s=new L1(n,r,o);return uo.set(i,s),s}function D1(e=Al){const t=uo.get(e);if(!t&&e===Al&&vm())return Em();if(!t)throw Kt.create("no-app",{appName:e});return t}function ir(e,t,n){var r;let i=(r=O1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Tn.warn(s.join(" "));return}vi(new mr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const M1="firebase-heartbeat-database",j1=1,gi="firebase-heartbeat-store";let xs=null;function Sm(){return xs||(xs=t1(M1,j1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Kt.create("idb-open",{originalErrorMessage:e.message})})),xs}async function U1(e){try{const n=(await Sm()).transaction(gi),r=await n.objectStore(gi).get(Im(e));return await n.done,r}catch(t){if(t instanceof nn)Tn.warn(t.message);else{const n=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(n.message)}}}async function Vf(e,t){try{const r=(await Sm()).transaction(gi,"readwrite");await r.objectStore(gi).put(t,Im(e)),await r.done}catch(n){if(n instanceof nn)Tn.warn(n.message);else{const r=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Im(e){return`${e.name}!${e.options.appId}`}/**
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
 */const z1=1024,F1=30*24*60*60*1e3;class $1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Wf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=F1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wf(),{heartbeatsToSend:r,unsentEntries:i}=B1(this._heartbeatsCache.heartbeats),a=pm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Wf(){return new Date().toISOString().substring(0,10)}function B1(e,t=z1){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Kf(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class H1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ny()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await U1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Kf(e){return pm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function V1(e){vi(new mr("platform-logger",t=>new i1(t),"PRIVATE")),vi(new mr("heartbeat",t=>new $1(t),"PRIVATE")),ir(Rl,Hf,e),ir(Rl,Hf,"esm2017"),ir("fire-js","")}V1("");var W1="firebase",K1="10.8.1";/**
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
 */ir(W1,K1,"app");const Y1={apiKey:"AIzaSyAQCwDr8Sh7GLZSUlCAnCcal7rAqBxG5-0",authDomain:"fir-app-7d6ea.firebaseapp.com",projectId:"fir-app-7d6ea",storageBucket:"fir-app-7d6ea.appspot.com",messagingSenderId:"340764694664",appId:"1:340764694664:web:6b92e4af5476eeeb4c273d"},qu=Em(Y1);function Ju(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Cm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G1=Cm,Tm=new Ai("auth","Firebase",Cm());/**
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
 */const co=new ym("@firebase/auth");function Q1(e,...t){co.logLevel<=$.WARN&&co.warn(`Auth (${Di}): ${e}`,...t)}function Oa(e,...t){co.logLevel<=$.ERROR&&co.error(`Auth (${Di}): ${e}`,...t)}/**
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
 */function Qe(e,...t){throw Zu(e,...t)}function nt(e,...t){return Zu(e,...t)}function X1(e,t,n){const r=Object.assign(Object.assign({},G1()),{[t]:n});return new Ai("auth","Firebase",r).create(t,{appName:e.name})}function Zu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tm.create(e,...t)}function R(e,t,...n){if(!e)throw Zu(t,...n)}function lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oa(t),new Error(t)}function mt(e,t){e||lt(t)}/**
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
 */function Dl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function q1(){return Yf()==="http:"||Yf()==="https:"}function Yf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function J1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q1()||xy()||"connection"in navigator)?navigator.onLine:!0}function Z1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Mi{constructor(t,n){this.shortDelay=t,this.longDelay=n,mt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ty()||Py()}get(){return J1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ec(e,t){mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class xm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ew={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tw=new Mi(3e4,6e4);function rn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function an(e,t,n,r,i={}){return Pm(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Li(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),xm.fetch()(bm(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Pm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ew),t);try{const i=new rw(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ua(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ua(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ua(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw X1(e,c,u);Qe(e,c)}}catch(i){if(i instanceof nn)throw i;Qe(e,"network-request-failed",{message:String(i)})}}async function ji(e,t,n,r,i={}){const a=await an(e,t,n,r,i);return"mfaPendingCredential"in a&&Qe(e,"multi-factor-auth-required",{_serverResponse:a}),a}function bm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ec(e.config,i):`${e.config.apiScheme}://${i}`}function nw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),tw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}function Gf(e){return e!==void 0&&e.enterprise!==void 0}class iw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return nw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function aw(e,t){return an(e,"GET","/v2/recaptchaConfig",rn(e,t))}/**
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
 */async function ow(e,t){return an(e,"POST","/v1/accounts:delete",t)}async function sw(e,t){return an(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Xr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lw(e,t=!1){const n=_t(e),r=await n.getIdToken(t),i=tc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Xr(Ps(i.auth_time)),issuedAtTime:Xr(Ps(i.iat)),expirationTime:Xr(Ps(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ps(e){return Number(e)*1e3}function tc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=mm(n);return i?JSON.parse(i):(Oa("Failed to decode base64 JWT payload"),null)}catch(i){return Oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(e){const t=tc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function yi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof nn&&cw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function cw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class fw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await yi(e,sw(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?pw(a.providerUserInfo):[],s=hw(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Nm(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function dw(e){const t=_t(e);await fo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function pw(e){return e.map(t=>{var{providerId:n}=t,r=Ju(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mw(e,t){const n=await Pm(e,{},async()=>{const r=Li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=bm(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",xm.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vw(e,t){return an(e,"POST","/v2/accounts:revokeToken",rn(e,t))}/**
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
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await mw(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new wi;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function St(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class _n{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Ju(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Nm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await yi(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lw(this,t)}reload(){return dw(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new _n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await yi(this,ow(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:E,providerData:C,stsTokenManager:T}=n;R(p&&T,t,"internal-error");const O=wi.fromJSON(this.name,T);R(typeof p=="string",t,"internal-error"),St(f,t.name),St(m,t.name),R(typeof y=="boolean",t,"internal-error"),R(typeof E=="boolean",t,"internal-error"),St(v,t.name),St(g,t.name),St(w,t.name),St(k,t.name),St(h,t.name),St(d,t.name);const U=new _n({uid:p,auth:t,email:m,emailVerified:y,displayName:f,isAnonymous:E,photoURL:g,phoneNumber:v,tenantId:w,stsTokenManager:O,createdAt:h,lastLoginAt:d});return C&&Array.isArray(C)&&(U.providerData=C.map(L=>Object.assign({},L))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new wi;i.updateFromServerResponse(n);const a=new _n({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await fo(a),a}}/**
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
 */const Qf=new Map;function ut(e){mt(e instanceof Function,"Expected a class definition");let t=Qf.get(e);return t?(mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qf.set(e,t),t)}/**
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
 */class Om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Om.type="NONE";const Xf=Om;/**
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
 */function Ra(e,t,n){return`firebase:${e}:${t}:${n}`}class ar{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ra("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_n._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ar(ut(Xf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||ut(Xf);const o=Ra(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=_n._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ar(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new ar(a,t,r))}}/**
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
 */function qf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mm(t))return"Blackberry";if(jm(t))return"Webos";if(nc(t))return"Safari";if((t.includes("chrome/")||Am(t))&&!t.includes("edge/"))return"Chrome";if(Dm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rm(e=ve()){return/firefox\//i.test(e)}function nc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Am(e=ve()){return/crios\//i.test(e)}function Lm(e=ve()){return/iemobile/i.test(e)}function Dm(e=ve()){return/android/i.test(e)}function Mm(e=ve()){return/blackberry/i.test(e)}function jm(e=ve()){return/webos/i.test(e)}function zo(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gw(e=ve()){var t;return zo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function yw(){return by()&&document.documentMode===10}function Um(e=ve()){return zo(e)||Dm(e)||jm(e)||Mm(e)||/windows phone/i.test(e)||Lm(e)}function ww(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zm(e,t=[]){let n;switch(e){case"Browser":n=qf(ve());break;case"Worker":n=`${qf(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class _w{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kw(e,t={}){return an(e,"GET","/v2/passwordPolicy",rn(e,t))}/**
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
 */const Ew=6;class Sw{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ew,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class Iw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new _w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await fo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Z1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?_t(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kw(this),n=new Sw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ai("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ut(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Q1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(e){return _t(e)}class Jf{constructor(t){this.auth=t,this.observer=null,this.addObserver=My(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cw(e){Fo=e}function Fm(e){return Fo.loadJS(e)}function Tw(){return Fo.recaptchaEnterpriseScript}function xw(){return Fo.gapiScript}function Pw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const bw="recaptcha-enterprise",Nw="NO_RECAPTCHA";class Ow{constructor(t){this.type=bw,this.auth=An(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{aw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new iw(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;Gf(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(Nw)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&Gf(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Tw();l.length!==0&&(l+=s),Fm(l).then(()=>{i(s,a,o)}).catch(u=>{o(u)})}}).catch(s=>{o(s)})})}}async function Zf(e,t,n,r=!1){const i=new Ow(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ml(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zf(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zf(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(a)})}/**
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
 */function Rw(e,t){const n=km(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(lo(a,t??{}))return i;Qe(i,"already-initialized")}return n.initialize({options:t})}function Aw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Lw(e,t,n){const r=An(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=$m(t),{host:o,port:s}=Dw(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mw()}function $m(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dw(e){const t=$m(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:ed(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:ed(o)}}}function ed(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Mw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class rc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(t){return lt("not implemented")}_linkToIdToken(t,n){return lt("not implemented")}_getReauthenticationResolver(t){return lt("not implemented")}}async function jw(e,t){return an(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Uw(e,t){return ji(e,"POST","/v1/accounts:signInWithPassword",rn(e,t))}/**
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
 */async function zw(e,t){return ji(e,"POST","/v1/accounts:signInWithEmailLink",rn(e,t))}async function Fw(e,t){return ji(e,"POST","/v1/accounts:signInWithEmailLink",rn(e,t))}/**
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
 */class _i extends rc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new _i(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new _i(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(t,n,"signInWithPassword",Uw);case"emailLink":return zw(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(t,r,"signUpPassword",jw);case"emailLink":return Fw(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function or(e,t){return ji(e,"POST","/v1/accounts:signInWithIdp",rn(e,t))}/**
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
 */const $w="http://localhost";class xn extends rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Ju(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return or(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,or(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,or(t,n)}buildRequest(){const t={requestUri:$w,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Li(n)}return t}}/**
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
 */function Bw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hw(e){const t=Ur(zr(e)).link,n=t?Ur(zr(t)).deep_link_id:null,r=Ur(zr(e)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||n||t||e}class ic{constructor(t){var n,r,i,a,o,s;const l=Ur(zr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Bw((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=Hw(t);try{return new ic(n)}catch{return null}}}/**
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
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(t,n){return _i._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ic.parseLink(n);return R(r,"argument-error"),_i._fromEmailAndCode(t,r.code,r.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends Bm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends Ui{constructor(){super("facebook.com")}static credential(t){return xn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Ui{constructor(){super("github.com")}static credential(t){return xn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Rt extends Ui{constructor(){super("twitter.com")}static credential(t,n){return xn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */async function Vw(e,t){return ji(e,"POST","/v1/accounts:signUp",rn(e,t))}/**
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
 */class Pn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await _n._fromIdTokenResponse(t,r,i),o=td(r);return new Pn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=td(r);return new Pn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function td(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ho extends nn{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ho(t,n,r,i)}}function Hm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(e,a,t,r):a})}async function Ww(e,t,n=!1){const r=await yi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pn._forOperation(e,"link",r)}/**
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
 */async function Kw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await yi(e,Hm(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=tc(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),Pn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),a}}/**
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
 */async function Vm(e,t,n=!1){const r="signIn",i=await Hm(e,r,t),a=await Pn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Yw(e,t){return Vm(An(e),t)}/**
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
 */async function Wm(e){const t=An(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Gw(e,t,n){const r=An(e),o=await Ml(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Wm(e),l}),s=await Pn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(s.user),s}function Qw(e,t,n){return Yw(_t(e),kr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wm(e),r})}function Xw(e,t,n,r){return _t(e).onIdTokenChanged(t,n,r)}function qw(e,t,n){return _t(e).beforeAuthStateChanged(t,n)}function Jw(e,t,n,r){return _t(e).onAuthStateChanged(t,n,r)}function Zw(e){return _t(e).signOut()}const po="__sak";/**
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
 */class Km{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e_(){const e=ve();return nc(e)||zo(e)}const t_=1e3,n_=10;class Ym extends Km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e_()&&ww(),this.fallbackToPolling=Um(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);yw()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,n_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},t_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ym.type="LOCAL";const r_=Ym;/**
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
 */class Gm extends Km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Gm.type="SESSION";const Qm=Gm;/**
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
 */function i_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $o{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new $o(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await i_(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
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
 */function ac(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class a_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=ac("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(m.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function o_(e){rt().location.href=e}/**
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
 */function Xm(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function s_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function u_(){return Xm()?self:null}/**
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
 */const qm="firebaseLocalStorageDb",c_=1,mo="firebaseLocalStorage",Jm="fbase_key";class zi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bo(e,t){return e.transaction([mo],t?"readwrite":"readonly").objectStore(mo)}function f_(){const e=indexedDB.deleteDatabase(qm);return new zi(e).toPromise()}function jl(){const e=indexedDB.open(qm,c_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(mo,{keyPath:Jm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(mo)?t(r):(r.close(),await f_(),t(await jl()))})})}async function nd(e,t,n){const r=Bo(e,!0).put({[Jm]:t,value:n});return new zi(r).toPromise()}async function d_(e,t){const n=Bo(e,!1).get(t),r=await new zi(n).toPromise();return r===void 0?null:r.value}function rd(e,t){const n=Bo(e,!0).delete(t);return new zi(n).toPromise()}const h_=800,p_=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>p_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(u_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await s_(),!this.activeServiceWorker)return;this.sender=new a_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||l_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await jl();return await nd(t,po,"1"),await rd(t,po),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>d_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Bo(i,!1).getAll();return new zi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const m_=Zm;new Mi(3e4,6e4);/**
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
 */function v_(e,t){return t?ut(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class oc extends rc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return or(t,this._buildIdpRequest())}_linkToIdToken(t,n){return or(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return or(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function g_(e){return Vm(e.auth,new oc(e),e.bypassAuthState)}function y_(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),Kw(n,new oc(e),e.bypassAuthState)}async function w_(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),Ww(n,new oc(e),e.bypassAuthState)}/**
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
 */class ev{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return g_;case"linkViaPopup":case"linkViaRedirect":return w_;case"reauthViaPopup":case"reauthViaRedirect":return y_;default:Qe(this.auth,"internal-error")}}resolve(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const __=new Mi(2e3,1e4);class Gn extends ev{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const t=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,__.get())};t()}}Gn.currentPopupAction=null;/**
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
 */const k_="pendingRedirect",Aa=new Map;class E_ extends ev{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Aa.get(this.auth._key());if(!t){try{const r=await S_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Aa.set(this.auth._key(),t)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(e,t){const n=T_(t),r=C_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function I_(e,t){Aa.set(e._key(),t)}function C_(e){return ut(e._redirectPersistence)}function T_(e){return Ra(k_,e.config.apiKey,e.name)}async function x_(e,t,n=!1){const r=An(e),i=v_(r,t),o=await new E_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const P_=10*60*1e3;class b_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!N_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=P_&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(t))}saveEventToCache(t){this.cachedEventUids.add(id(t)),this.lastProcessedEventTime=Date.now()}}function id(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function N_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tv(e);default:return!1}}/**
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
 */async function O_(e,t={}){return an(e,"GET","/v1/projects",t)}/**
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
 */const R_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A_=/^https?/;async function L_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await O_(e);for(const n of t)try{if(D_(n))return}catch{}Qe(e,"unauthorized-domain")}function D_(e){const t=Dl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A_.test(n))return!1;if(R_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const M_=new Mi(3e4,6e4);function ad(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function j_(e){return new Promise((t,n)=>{var r,i,a;function o(){ad(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(nt(e,"network-request-failed"))},timeout:M_.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=rt().gapi)===null||a===void 0)&&a.load)o();else{const s=Pw("iframefcb");return rt()[s]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},Fm(`${xw()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw La=null,t})}let La=null;function U_(e){return La=La||j_(e),La}/**
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
 */const z_=new Mi(5e3,15e3),F_="__/auth/iframe",$_="emulator/auth/iframe",B_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V_(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ec(t,$_):`https://${e.config.authDomain}/${F_}`,r={apiKey:t.apiKey,appName:e.name,v:Di},i=H_.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Li(r).slice(1)}`}async function W_(e){const t=await U_(e),n=rt().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:V_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B_,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),s=rt().setTimeout(()=>{a(o)},z_.get());function l(){rt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const K_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,G_=600,Q_="_blank",X_="http://localhost";class od{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q_(e,t,n,r=Y_,i=G_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},K_),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ve().toLowerCase();n&&(s=Am(u)?Q_:n),Rm(u)&&(t=t||X_,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[v,g])=>`${m}${v}=${g},`,"");if(gw(u)&&s!=="_self")return J_(t||"",s),new od(null);const f=window.open(t||"",s,c);R(f,e,"popup-blocked");try{f.focus()}catch{}return new od(f)}function J_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z_="__/auth/handler",ek="emulator/auth/handler",tk=encodeURIComponent("fac");async function sd(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Di,eventId:i};if(t instanceof Bm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Dy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Ui){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${tk}=${encodeURIComponent(l)}`:"";return`${nk(e)}?${Li(s).slice(1)}${u}`}function nk({config:e}){return e.emulator?ec(e,ek):`https://${e.authDomain}/${Z_}`}/**
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
 */const bs="webStorageSupport";class rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qm,this._completeRedirectFn=x_,this._overrideRedirectResult=I_}async _openPopup(t,n,r,i){var a;mt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await sd(t,n,r,Dl(),i);return q_(t,o,ac())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await sd(t,n,r,Dl(),i);return o_(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(mt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await W_(t),r=new b_(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bs,{type:bs},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[bs];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Um()||nc()||zo()}}const ik=rk;var ld="@firebase/auth",ud="1.6.1";/**
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
 */class ak{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ok(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(e){vi(new mr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zm(e)},u=new Iw(r,i,a,l);return Aw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),vi(new mr("auth-internal",t=>{const n=An(t.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(ld,ud,ok(e)),ir(ld,ud,"esm2017")}/**
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
 */const lk=5*60,uk=gm("authIdTokenMaxAge")||lk;let cd=null;const ck=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uk)return;const i=n==null?void 0:n.token;cd!==i&&(cd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sc(e=D1()){const t=km(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Rw(e,{popupRedirectResolver:ik,persistence:[m_,r_,Qm]}),r=gm("authTokenSyncURL");if(r){const a=ck(r);qw(n,a,()=>a(n.currentUser)),Xw(n,o=>a(o))}const i=Iy("auth");return i&&Lw(n,`http://${i}`),n}function fk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Cw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=nt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",fk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const fd="popstate";function dk(e){e===void 0&&(e={});function t(i,a){let{pathname:o="/",search:s="",hash:l=""}=Ln(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ul("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof a=="string"?a:vo(a))}function r(i,a){lc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return pk(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hk(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ul(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ln(t):t,{state:n,key:t&&t.key||r||hk()})}function vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Dt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ki({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=Dt.Pop;let k=c(),h=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:h})}function m(k,h){s=Dt.Push;let d=Ul(w.location,k,h);n&&n(d,k),u=c()+1;let p=dd(d,u),y=w.createHref(d);try{o.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function v(k,h){s=Dt.Replace;let d=Ul(w.location,k,h);n&&n(d,k),u=c();let p=dd(d,u),y=w.createHref(d);o.replaceState(p,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function g(k){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:vo(k);return d=d.replace(/ $/,"%20"),te(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let w={get action(){return s},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fd,f),l=k,()=>{i.removeEventListener(fd,f),l=null}},createHref(k){return t(i,k)},createURL:g,encodeLocation(k){let h=g(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(k){return o.go(k)}};return w}var hd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hd||(hd={}));function mk(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ln(t):t,i=uc(r.pathname||"/",n);if(i==null)return null;let a=nv(e);vk(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let l=Pk(i);o=Ck(a[s],l)}return o}function nv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(te(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nv(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Sk(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of rv(a.path))i(a,o,l)}),t}function rv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=rv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function vk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ik(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gk=/^:[\w-]+$/,yk=3,wk=2,_k=1,kk=10,Ek=-2,pd=e=>e==="*";function Sk(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=Ek),t&&(r+=wk),n.filter(i=>!pd(i)).reduce((i,a)=>i+(gk.test(a)?yk:a===""?_k:kk),r)}function Ik(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ck(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Tk({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Yt([i,c.pathname]),pathnameBase:Rk(Yt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Yt([i,c.pathnameBase]))}return a}function Tk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:m,isOptional:v}=c;if(m==="*"){let w=s[f]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const g=s[f];return v&&!g?u[m]=void 0:u[m]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function xk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Pk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ln(e):e;return{pathname:n?n.startsWith("/")?n:Nk(n,t):t,search:Ak(r),hash:Lk(i)}}function Nk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ns(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ok(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cc(e,t){let n=Ok(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ln(e):(i=ki({},e),te(!i.pathname||!i.pathname.includes("?"),Ns("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Ns("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Ns("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}s=f>=0?t[f]:"/"}let l=bk(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),Rk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ak=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iv=["post","put","patch","delete"];new Set(iv);const Mk=["get",...iv];new Set(Mk);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ei.apply(this,arguments)}const dc=I.createContext(null),jk=I.createContext(null),on=I.createContext(null),Ho=I.createContext(null),sn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),av=I.createContext(null);function Uk(e,t){let{relative:n}=t===void 0?{}:t;Er()||te(!1);let{basename:r,navigator:i}=I.useContext(on),{hash:a,pathname:o,search:s}=sv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Yt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Er(){return I.useContext(Ho)!=null}function Fi(){return Er()||te(!1),I.useContext(Ho).location}function ov(e){I.useContext(on).static||I.useLayoutEffect(e)}function hc(){let{isDataRoute:e}=I.useContext(sn);return e?qk():zk()}function zk(){Er()||te(!1);let e=I.useContext(dc),{basename:t,future:n,navigator:r}=I.useContext(on),{matches:i}=I.useContext(sn),{pathname:a}=Fi(),o=JSON.stringify(cc(i,n.v7_relativeSplatPath)),s=I.useRef(!1);return ov(()=>{s.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=fc(u,JSON.parse(o),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Yt([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,a,e])}function sv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(on),{matches:i}=I.useContext(sn),{pathname:a}=Fi(),o=JSON.stringify(cc(i,r.v7_relativeSplatPath));return I.useMemo(()=>fc(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Fk(e,t){return $k(e,t)}function $k(e,t,n,r){Er()||te(!1);let{navigator:i}=I.useContext(on),{matches:a}=I.useContext(sn),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Fi(),c;if(t){var f;let k=typeof t=="string"?Ln(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||te(!1),c=k}else c=u;let m=c.pathname||"/",v=m;if(l!=="/"){let k=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let g=mk(e,{pathname:v}),w=Kk(g&&g.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:Yt([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Yt([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&w?I.createElement(Ho.Provider,{value:{location:Ei({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Dt.Pop}},w):w}function Bk(){let e=Xk(),t=Dk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const Hk=I.createElement(Bk,null);class Vk extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(sn.Provider,{value:this.props.routeContext},I.createElement(av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wk(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(dc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(sn.Provider,{value:t},r)}function Kk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));c>=0||te(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:m,errors:v}=n,g=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,m)=>{let v,g=!1,w=null,k=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||Hk,l&&(u<0&&m===0?(Jk("route-fallback",!1),g=!0,k=null):u===m&&(g=!0,k=f.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,m+1)),d=()=>{let p;return v?p=w:g?p=k:f.route.Component?p=I.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=c,I.createElement(Wk,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?I.createElement(Vk,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var lv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lv||{}),go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(go||{});function Yk(e){let t=I.useContext(dc);return t||te(!1),t}function Gk(e){let t=I.useContext(jk);return t||te(!1),t}function Qk(e){let t=I.useContext(sn);return t||te(!1),t}function uv(e){let t=Qk(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Xk(){var e;let t=I.useContext(av),n=Gk(go.UseRouteError),r=uv(go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function qk(){let{router:e}=Yk(lv.UseNavigateStable),t=uv(go.UseNavigateStable),n=I.useRef(!1);return ov(()=>{n.current=!0}),I.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ei({fromRouteId:t},a)))},[e,t])}const md={};function Jk(e,t,n){!t&&!md[e]&&(md[e]=!0)}function vd(e){let{to:t,replace:n,state:r,relative:i}=e;Er()||te(!1);let{future:a,static:o}=I.useContext(on),{matches:s}=I.useContext(sn),{pathname:l}=Fi(),u=hc(),c=fc(t,cc(s,a.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return I.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Da(e){te(!1)}function Zk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dt.Pop,navigator:a,static:o=!1,future:s}=e;Er()&&te(!1);let l=t.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:a,static:o,future:Ei({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=Ln(r));let{pathname:c="/",search:f="",hash:m="",state:v=null,key:g="default"}=r,w=I.useMemo(()=>{let k=uc(c,l);return k==null?null:{location:{pathname:k,search:f,hash:m,state:v,key:g},navigationType:i}},[l,c,f,m,v,g,i]);return w==null?null:I.createElement(on.Provider,{value:u},I.createElement(Ho.Provider,{children:n,value:w}))}function eE(e){let{children:t,location:n}=e;return Fk(zl(t),n)}new Promise(()=>{});function zl(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;let a=[...t,i];if(r.type===I.Fragment){n.push.apply(n,zl(r.props.children,a));return}r.type!==Da&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zl(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fl.apply(this,arguments)}function tE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rE(e,t){return e.button===0&&(!t||t==="_self")&&!nE(e)}const iE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],aE="6";try{window.__reactRouterVersion=aE}catch{}const oE="startTransition",gd=og[oE];function sE(e){let{basename:t,children:n,future:r,window:i}=e,a=I.useRef();a.current==null&&(a.current=dk({window:i,v5Compat:!0}));let o=a.current,[s,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(f=>{u&&gd?gd(()=>l(f)):l(f)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(Zk,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const lE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ge=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,m=tE(t,iE),{basename:v}=I.useContext(on),g,w=!1;if(typeof u=="string"&&uE.test(u)&&(g=u,lE))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=uc(y.pathname,v);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let k=Uk(u,{relative:i}),h=cE(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(p){r&&r(p),p.defaultPrevented||h(p)}return I.createElement("a",Fl({},m,{href:g||k,onClick:w||a?r:d,ref:n,target:l}))});var yd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yd||(yd={}));var wd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wd||(wd={}));function cE(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=hc(),u=Fi(),c=sv(e,{relative:o});return I.useCallback(f=>{if(rE(f,n)){f.preventDefault();let m=r!==void 0?r:vo(u)===vo(c);l(e,{replace:m,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,c,r,i,n,e,a,o,s])}const fE="https://andresra13.github.io/firebase-app/assets/login-3MxNWmoB.png",_d=sc(qu),dE=()=>{const e=hc(),[t,n]=I.useState(!1),r=async i=>{i.preventDefault();const a=i.target.email.value,o=i.target.password.value;if(t)try{await Gw(_d,a,o),e("/home")}catch{alert("asegurese que la contraseña tenga más de 8 caracteres")}else try{await Qw(_d,a,o),e("/home")}catch{alert("El correo y/o contraseña son incorrectos")}};return _.jsxs("div",{className:"login",children:[_.jsx("div",{className:"login__border",children:_.jsxs("div",{className:"login__container",children:[_.jsx("div",{className:"logo",children:t?"SignUp":"Login"}),_.jsxs("form",{onSubmit:r,className:"signupForm",children:[_.jsxs("div",{className:"input__field",children:[_.jsx("i",{className:"bx bx-mail-send"}),_.jsx("input",{type:"email",className:"input",id:"email",placeholder:"Email",required:!0,autoComplete:"off"})]}),_.jsxs("div",{className:"input__field",children:[_.jsx("i",{className:"bx bx-lock-alt"}),_.jsx("input",{type:"password",className:"input",id:"password",placeholder:"Password",required:!0,autoComplete:"off"})]}),_.jsxs("div",{className:"three_cols",children:[_.jsxs("label",{htmlFor:"check",children:[_.jsx("input",{type:"checkbox",id:"check"}),"Recordar"]}),_.jsx("a",{href:"#",children:" Olvidaste la contraseña"})]}),_.jsx("div",{className:"submits",children:_.jsx("button",{children:t?"Registrate":"Inicia Sesion"})})]}),_.jsx("div",{className:"two__cols",children:_.jsxs("h4",{children:[t?"Si ya tienes cuenta":"No tienes cuenta",_.jsx("button",{onClick:()=>n(!t),children:t?"Inicia Sesion":"Registrate"})]})})]})}),_.jsx("div",{className:"login_left",children:_.jsx("img",{src:fE,alt:""})})]})},Os="data:image/svg+xml,%3csvg%20width='10'%20height='6'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20stroke='%23686868'%20stroke-width='1.5'%20fill='none'%20d='m1%201%204%204%204-4'/%3e%3c/svg%3e",kd="data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203v12a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a1%201%200%200%201%201-1h1V1a1%201%200%201%201%202%200v1h2V1a1%201%200%201%201%202%200v1h2V1a1%201%200%200%201%202%200v1h1a1%201%200%200%201%201%201Zm-2%203H2v1h10V6Zm0%203H2v1h10V9Zm0%203H2v1h10v-1Z'%20fill='%23726CEE'/%3e%3c/svg%3e",Ed="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.667%208.667h-4v4h4v-4ZM11.334%200v1.333H4.667V0h-2v1.333h-1C.75%201.333%200%202.083%200%203v11.333C0%2015.25.75%2016%201.667%2016h12.667C15.25%2016%2016%2015.25%2016%2014.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3%2014.333H1.667V5.5h12.667v8.833Z'%20fill='%234BB1DA'/%3e%3c/svg%3e",Sd="data:image/svg+xml,%3csvg%20width='13'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.408%2013.916c-3.313%200-6-1.343-6-3%200-.612.371-1.18%201-1.654V7.916a5%205%200%200%201%203.041-4.6%202%202%200%200%201%203.507-1.664%202%202%200%200%201%20.411%201.664%205.002%205.002%200%200%201%203.041%204.6v1.346c.629.474%201%201.042%201%201.654%200%201.657-2.687%203-6%203Zm0%201c.694%200%201.352-.066%201.984-.16.004.054.016.105.016.16a2%202%200%200%201-4%200c0-.055.012-.106.016-.16.633.094%201.29.16%201.984.16Z'%20fill='%23EDD556'/%3e%3c/svg%3e",Id="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200a8%208%200%201%201%200%2016A8%208%200%200%201%208%200Zm0%202.133a5.867%205.867%200%201%200%200%2011.734A5.867%205.867%200%200%200%208%202.133ZM8%203.2a4.8%204.8%200%201%201%200%209.6%204.8%204.8%200%200%201%200-9.6Zm-.533%202.667a.533.533%200%200%200-.534.533v2.133c0%20.295.24.534.534.534h3.2a.533.533%200%200%200%200-1.067H8V6.4a.533.533%200%200%200-.533-.533Z'%20fill='%238E4CB6'/%3e%3c/svg%3e",hE="https://andresra13.github.io/firebase-app/assets/ipuc-dj-pBQW_.png";function Cd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cd(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yo(e){"@babel/helpers - typeof";return yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yo(e)}function pE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Td(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mE(e,t,n){return t&&Td(e.prototype,t),n&&Td(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pc(e,t){return gE(e)||wE(e,t)||cv(e,t)||kE()}function $i(e){return vE(e)||yE(e)||cv(e)||_E()}function vE(e){if(Array.isArray(e))return $l(e)}function gE(e){if(Array.isArray(e))return e}function yE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function cv(e,t){if(e){if(typeof e=="string")return $l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $l(e,t)}}function $l(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _E(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xd=function(){},mc={},fv={},dv=null,hv={mark:xd,measure:xd};try{typeof window<"u"&&(mc=window),typeof document<"u"&&(fv=document),typeof MutationObserver<"u"&&(dv=MutationObserver),typeof performance<"u"&&(hv=performance)}catch{}var EE=mc.navigator||{},Pd=EE.userAgent,bd=Pd===void 0?"":Pd,Xt=mc,K=fv,Nd=dv,ca=hv;Xt.document;var kt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",pv=~bd.indexOf("MSIE")||~bd.indexOf("Trident/"),fa,da,ha,pa,ma,vt="___FONT_AWESOME___",Bl=16,mv="fa",vv="svg-inline--fa",bn="data-fa-i2svg",Hl="data-fa-pseudo-element",SE="data-fa-pseudo-element-pending",vc="data-prefix",gc="data-icon",Od="fontawesome-i2svg",IE="async",CE=["HTML","HEAD","STYLE","SCRIPT"],gv=function(){try{return!0}catch{return!1}}(),V="classic",J="sharp",yc=[V,J];function Bi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Si=Bi((fa={},ae(fa,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ae(fa,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),fa)),Ii=Bi((da={},ae(da,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(da,J,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),da)),Ci=Bi((ha={},ae(ha,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(ha,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ha)),TE=Bi((pa={},ae(pa,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(pa,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pa)),xE=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,yv="fa-layers-text",PE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bE=Bi((ma={},ae(ma,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(ma,J,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ma)),wv=[1,2,3,4,5,6,7,8,9,10],NE=wv.concat([11,12,13,14,15,16,17,18,19,20]),OE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ti=new Set;Object.keys(Ii[V]).map(Ti.add.bind(Ti));Object.keys(Ii[J]).map(Ti.add.bind(Ti));var RE=[].concat(yc,$i(Ti),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vn.GROUP,vn.SWAP_OPACITY,vn.PRIMARY,vn.SECONDARY]).concat(wv.map(function(e){return"".concat(e,"x")})).concat(NE.map(function(e){return"w-".concat(e)})),qr=Xt.FontAwesomeConfig||{};function AE(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function LE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var DE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DE.forEach(function(e){var t=pc(e,2),n=t[0],r=t[1],i=LE(AE(n));i!=null&&(qr[r]=i)})}var _v={styleDefault:"solid",familyDefault:"classic",cssPrefix:mv,replacementClass:vv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qr.familyPrefix&&(qr.cssPrefix=qr.familyPrefix);var vr=x(x({},_v),qr);vr.autoReplaceSvg||(vr.observeMutations=!1);var N={};Object.keys(_v).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){vr[e]=n,Jr.forEach(function(r){return r(N)})},get:function(){return vr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){vr.cssPrefix=t,Jr.forEach(function(n){return n(N)})},get:function(){return vr.cssPrefix}});Xt.FontAwesomeConfig=N;var Jr=[];function ME(e){return Jr.push(e),function(){Jr.splice(Jr.indexOf(e),1)}}var It=Bl,Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jE(e){if(!(!e||!kt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var UE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xi(){for(var e=12,t="";e-- >0;)t+=UE[Math.random()*62|0];return t}function Sr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wc(e){return e.classList?Sr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function kv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zE(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(kv(e[n]),'" ')},"").trim()}function Vo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _c(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function FE(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $E(e){var t=e.transform,n=e.width,r=n===void 0?Bl:n,i=e.height,a=i===void 0?Bl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&pv?l+="translate(".concat(t.x/It-r/2,"em, ").concat(t.y/It-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/It,"em), calc(-50% + ").concat(t.y/It,"em)) "):l+="translate(".concat(t.x/It,"em, ").concat(t.y/It,"em) "),l+="scale(".concat(t.size/It*(t.flipX?-1:1),", ").concat(t.size/It*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var BE=`:root, :host {
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
}`;function Ev(){var e=mv,t=vv,n=N.cssPrefix,r=N.replacementClass,i=BE;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Rd=!1;function Rs(){N.autoAddCss&&!Rd&&(jE(Ev()),Rd=!0)}var HE={mixout:function(){return{dom:{css:Ev,insertCss:Rs}}},hooks:function(){return{beforeDOMElementCreation:function(){Rs()},beforeI2svg:function(){Rs()}}}},gt=Xt||{};gt[vt]||(gt[vt]={});gt[vt].styles||(gt[vt].styles={});gt[vt].hooks||(gt[vt].hooks={});gt[vt].shims||(gt[vt].shims=[]);var We=gt[vt],Sv=[],VE=function e(){K.removeEventListener("DOMContentLoaded",e),wo=1,Sv.map(function(t){return t()})},wo=!1;kt&&(wo=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),wo||K.addEventListener("DOMContentLoaded",VE));function WE(e){kt&&(wo?setTimeout(e,0):Sv.push(e))}function Hi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?kv(e):"<".concat(t," ").concat(zE(r),">").concat(a.map(Hi).join(""),"</").concat(t,">")}function Ad(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var KE=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},As=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?KE(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function YE(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Vl(e){var t=YE(e);return t.length===1?t[0].toString(16):null}function GE(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ld(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ld(t);typeof We.hooks.addPack=="function"&&!i?We.hooks.addPack(e,Ld(t)):We.styles[e]=x(x({},We.styles[e]||{}),a),e==="fas"&&Wl("fa",t)}var va,ga,ya,Qn=We.styles,QE=We.shims,XE=(va={},ae(va,V,Object.values(Ci[V])),ae(va,J,Object.values(Ci[J])),va),kc=null,Iv={},Cv={},Tv={},xv={},Pv={},qE=(ga={},ae(ga,V,Object.keys(Si[V])),ae(ga,J,Object.keys(Si[J])),ga);function JE(e){return~RE.indexOf(e)}function ZE(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!JE(i)?i:null}var bv=function(){var t=function(a){return As(Qn,function(o,s,l){return o[l]=As(s,a,{}),o},{})};Iv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Cv=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Pv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Qn||N.autoFetchSvg,r=As(QE,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Tv=r.names,xv=r.unicodes,kc=Wo(N.styleDefault,{family:N.familyDefault})};ME(function(e){kc=Wo(e.styleDefault,{family:N.familyDefault})});bv();function Ec(e,t){return(Iv[e]||{})[t]}function eS(e,t){return(Cv[e]||{})[t]}function gn(e,t){return(Pv[e]||{})[t]}function Nv(e){return Tv[e]||{prefix:null,iconName:null}}function tS(e){var t=xv[e],n=Ec("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return kc}var Sc=function(){return{prefix:null,iconName:null,rest:[]}};function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,i=Si[r][e],a=Ii[r][e]||Ii[r][i],o=e in We.styles?e:null;return a||o||null}var Dd=(ya={},ae(ya,V,Object.keys(Ci[V])),ae(ya,J,Object.keys(Ci[J])),ya);function Ko(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ae(t,V,"".concat(N.cssPrefix,"-").concat(V)),ae(t,J,"".concat(N.cssPrefix,"-").concat(J)),t),o=null,s=V;(e.includes(a[V])||e.some(function(u){return Dd[V].includes(u)}))&&(s=V),(e.includes(a[J])||e.some(function(u){return Dd[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var f=ZE(N.cssPrefix,c);if(Qn[c]?(c=XE[s].includes(c)?TE[s][c]:c,o=c,u.prefix=c):qE[s].indexOf(c)>-1?(o=c,u.prefix=Wo(c,{family:s})):f?u.iconName=f:c!==N.replacementClass&&c!==a[V]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var m=o==="fa"?Nv(u.iconName):{},v=gn(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||v||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Qn.far&&Qn.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},Sc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(Qn.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qt()||"fas"),l}var nS=function(){function e(){pE(this,e),this.definitions={}}return mE(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),Wl(s,o[s]);var l=Ci[V][s];l&&Wl(l,o[s]),bv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Md=[],Xn={},sr={},rS=Object.keys(sr);function iS(e,t){var n=t.mixoutsTo;return Md=e,Xn={},Object.keys(sr).forEach(function(r){rS.indexOf(r)===-1&&delete sr[r]}),Md.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),yo(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Xn[o]||(Xn[o]=[]),Xn[o].push(a[o])})}r.provides&&r.provides(sr)}),n}function Kl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Xn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Xn[e]||[];i.forEach(function(a){a.apply(null,n)})}function yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return sr[e]?sr[e].apply(null,t):void 0}function Yl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||qt();if(t)return t=gn(n,t)||t,Ad(Ov.definitions,n,t)||Ad(We.styles,n,t)}var Ov=new nS,aS=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Nn("noAuto")},oS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(Nn("beforeI2svg",t),yt("pseudoElements2svg",t),yt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,WE(function(){lS({autoReplaceSvgRoot:n}),Nn("watch",t)})}},sS={icon:function(t){if(t===null)return null;if(yo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Wo(t[0]);return{prefix:r,iconName:gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(xE))){var i=Ko(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||qt(),iconName:gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=qt();return{prefix:a,iconName:gn(a,t)||t}}}},Ae={noAuto:aS,config:N,dom:oS,parse:sS,library:Ov,findIconDefinition:Yl,toHtml:Hi},lS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(We.styles).length>0||N.autoFetchSvg)&&kt&&N.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Yo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Hi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(kt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function uS(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(_c(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Vo(x(x({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function cS(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function Ic(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,m=e.watchable,v=m===void 0?!1:m,g=r.found?r:n,w=g.width,k=g.height,h=i==="fak",d=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),p={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(k)})},y=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/k*16*.0625,"em")}:{};v&&(p.attributes[bn]=""),l&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(c||xi())},children:[l]}),delete p.attributes.title);var E=x(x({},p),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:x(x({},y),f.styles)}),C=r.found&&n.found?yt("generateAbstractMask",E)||{children:[],attributes:{}}:yt("generateAbstractIcon",E)||{children:[],attributes:{}},T=C.children,O=C.attributes;return E.children=T,E.attributes=O,s?cS(E):uS(E)}function jd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[bn]="");var c=x({},o.styles);_c(i)&&(c.transform=$E({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Vo(c);f.length>0&&(u.style=f);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function fS(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Vo(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ls=We.styles;function Gl(e){var t=e[0],n=e[1],r=e.slice(4),i=pc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var dS={found:!1,width:512,height:512};function hS(e,t){!gv&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ql(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=qt()),new Promise(function(r,i){if(yt("missingIconAbstract"),n==="fa"){var a=Nv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ls[t]&&Ls[t][e]){var o=Ls[t][e];return r(Gl(o))}hS(e,t),r(x(x({},dS),{},{icon:N.showMissingIcons&&e?yt("missingIconAbstract")||{}:{}}))})}var Ud=function(){},Xl=N.measurePerformance&&ca&&ca.mark&&ca.measure?ca:{mark:Ud,measure:Ud},Fr='FA "6.5.1"',pS=function(t){return Xl.mark("".concat(Fr," ").concat(t," begins")),function(){return Rv(t)}},Rv=function(t){Xl.mark("".concat(Fr," ").concat(t," ends")),Xl.measure("".concat(Fr," ").concat(t),"".concat(Fr," ").concat(t," begins"),"".concat(Fr," ").concat(t," ends"))},Cc={begin:pS,end:Rv},Ma=function(){};function zd(e){var t=e.getAttribute?e.getAttribute(bn):null;return typeof t=="string"}function mS(e){var t=e.getAttribute?e.getAttribute(vc):null,n=e.getAttribute?e.getAttribute(gc):null;return t&&n}function vS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function gS(){if(N.autoReplaceSvg===!0)return ja.replace;var e=ja[N.autoReplaceSvg];return e||ja.replace}function yS(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function wS(e){return K.createElement(e)}function Av(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yS:wS:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Av(o,{ceFn:r}))}),i}function _S(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ja={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Av(i),n)}),n.getAttribute(bn)===null&&N.keepOriginalSource){var r=K.createComment(_S(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~wc(n).indexOf(N.replacementClass))return ja.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Hi(s)}).join(`
`);n.setAttribute(bn,""),n.innerHTML=o}};function Fd(e){e()}function Lv(e,t){var n=typeof t=="function"?t:Ma;if(e.length===0)n();else{var r=Fd;N.mutateApproach===IE&&(r=Xt.requestAnimationFrame||Fd),r(function(){var i=gS(),a=Cc.begin("mutate");e.map(i),a(),n()})}}var Tc=!1;function Dv(){Tc=!0}function ql(){Tc=!1}var _o=null;function $d(e){if(Nd&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Ma:t,r=e.nodeCallback,i=r===void 0?Ma:r,a=e.pseudoElementsCallback,o=a===void 0?Ma:a,s=e.observeMutationsRoot,l=s===void 0?K:s;_o=new Nd(function(u){if(!Tc){var c=qt();Sr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!zd(f.addedNodes[0])&&(N.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&N.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&zd(f.target)&&~OE.indexOf(f.attributeName))if(f.attributeName==="class"&&mS(f.target)){var m=Ko(wc(f.target)),v=m.prefix,g=m.iconName;f.target.setAttribute(vc,v||c),g&&f.target.setAttribute(gc,g)}else vS(f.target)&&i(f.target)})}}),kt&&_o.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kS(){_o&&_o.disconnect()}function ES(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function SS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ko(wc(e));return i.prefix||(i.prefix=qt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eS(i.prefix,e.innerText)||Ec(i.prefix,Vl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function IS(e){var t=Sr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||xi()):(t["aria-hidden"]="true",t.focusable="false")),t}function CS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=SS(e),r=n.iconName,i=n.prefix,a=n.rest,o=IS(e),s=Kl("parseNodeAttributes",{},e),l=t.styleParser?ES(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var TS=We.styles;function Mv(e){var t=N.autoReplaceSvg==="nest"?Bd(e,{styleParser:!1}):Bd(e);return~t.extra.classes.indexOf(yv)?yt("generateLayersText",e,t):yt("generateSvgReplacementMutation",e,t)}var Jt=new Set;yc.map(function(e){Jt.add("fa-".concat(e))});Object.keys(Si[V]).map(Jt.add.bind(Jt));Object.keys(Si[J]).map(Jt.add.bind(Jt));Jt=$i(Jt);function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();var n=K.documentElement.classList,r=function(f){return n.add("".concat(Od,"-").concat(f))},i=function(f){return n.remove("".concat(Od,"-").concat(f))},a=N.autoFetchSvg?Jt:yc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(TS));a.includes("fa")||a.push("fa");var o=[".".concat(yv,":not([").concat(bn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(bn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Sr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Cc.begin("onTree"),u=s.reduce(function(c,f){try{var m=Mv(f);m&&c.push(m)}catch(v){gv||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(m){Lv(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),f(m)})})}function xS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mv(e).then(function(n){n&&Lv([n],t)})}function PS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Yl(i||{})),e(r,x(x({},n),{},{mask:i}))}}var bS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ze:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,m=f===void 0?null:f,v=n.titleId,g=v===void 0?null:v,w=n.classes,k=w===void 0?[]:w,h=n.attributes,d=h===void 0?{}:h,p=n.styles,y=p===void 0?{}:p;if(t){var E=t.prefix,C=t.iconName,T=t.icon;return Yo(x({type:"icon"},t),function(){return Nn("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(m?d["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(g||xi()):(d["aria-hidden"]="true",d.focusable="false")),Ic({icons:{main:Gl(T),mask:l?Gl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:x(x({},Ze),i),symbol:o,title:m,maskId:c,titleId:g,extra:{attributes:d,styles:y,classes:k}})})}},NS={mixout:function(){return{icon:PS(bS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hd,n.nodeCallback=xS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return Hd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,m=r.extra;return new Promise(function(v,g){Promise.all([Ql(i,s),c.iconName?Ql(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var k=pc(w,2),h=k[0],d=k[1];v([n,Ic({icons:{main:h,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:m,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Vo(s);l.length>0&&(i.style=l);var u;return _c(o)&&(u=yt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},OS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Yo({type:"layer"},function(){Nn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat($i(a)).join(" ")},children:o}]})}}}},RS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Yo({type:"counter",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),fS({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(N.cssPrefix,"-layers-counter")].concat($i(s))}})})}}}},AS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ze:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,m=r.styles,v=m===void 0?{}:m;return Yo({type:"text",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),jd({content:n,transform:x(x({},Ze),a),title:s,extra:{attributes:f,styles:v,classes:["".concat(N.cssPrefix,"-layers-text")].concat($i(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(pv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,jd({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},LS=new RegExp('"',"ug"),Vd=[1105920,1112319];function DS(e){var t=e.replace(LS,""),n=GE(t,0),r=n>=Vd[0]&&n<=Vd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Vl(i?t[0]:t),isSecondary:r||i}}function Wd(e,t){var n="".concat(SE).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Sr(e.children),o=a.filter(function(T){return T.getAttribute(Hl)===t})[0],s=Xt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(PE),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?J:V,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ii[m][l[2].toLowerCase()]:bE[m][u],g=DS(f),w=g.value,k=g.isSecondary,h=l[0].startsWith("FontAwesome"),d=Ec(v,w),p=d;if(h){var y=tS(w);y.iconName&&y.prefix&&(d=y.iconName,v=y.prefix)}if(d&&!k&&(!o||o.getAttribute(vc)!==v||o.getAttribute(gc)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var E=CS(),C=E.extra;C.attributes[Hl]=t,Ql(d,v).then(function(T){var O=Ic(x(x({},E),{},{icons:{main:T,mask:Sc()},prefix:v,iconName:p,extra:C,watchable:!0})),U=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=O.map(function(L){return Hi(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function MS(e){return Promise.all([Wd(e,"::before"),Wd(e,"::after")])}function jS(e){return e.parentNode!==document.head&&!~CE.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Kd(e){if(kt)return new Promise(function(t,n){var r=Sr(e.querySelectorAll("*")).filter(jS).map(MS),i=Cc.begin("searchPseudoElements");Dv(),Promise.all(r).then(function(){i(),ql(),t()}).catch(function(){i(),ql(),n()})})}var US={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Kd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;N.searchPseudoElements&&Kd(i)}}},Yd=!1,zS={mixout:function(){return{dom:{unwatch:function(){Dv(),Yd=!0}}}},hooks:function(){return{bootstrap:function(){$d(Kl("mutationObserverCallbacks",{}))},noAuto:function(){kS()},watch:function(n){var r=n.observeMutationsRoot;Yd?ql():$d(Kl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},FS={mixout:function(){return{parse:{transform:function(n){return Gd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:f,path:m};return{tag:"g",attributes:x({},v.outer),children:[{tag:"g",attributes:x({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),v.path)}]}]}}}},Ds={x:0,y:0,width:"100%",height:"100%"};function Qd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $S(e){return e.tag==="g"?e.children:[e]}var BS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ko(i.split(" ").map(function(o){return o.trim()})):Sc();return a.prefix||(a.prefix=qt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,m=o.icon,v=FE({transform:l,containerWidth:f,iconWidth:u}),g={tag:"rect",attributes:x(x({},Ds),{},{fill:"white"})},w=c.children?{children:c.children.map(Qd)}:{},k={tag:"g",attributes:x({},v.inner),children:[Qd(x({tag:c.tag,attributes:x(x({},c.attributes),v.path)},w))]},h={tag:"g",attributes:x({},v.outer),children:[k]},d="mask-".concat(s||xi()),p="clip-".concat(s||xi()),y={tag:"mask",attributes:x(x({},Ds),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,h]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:$S(m)},y]};return r.push(E,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")")},Ds)}),{children:r,attributes:i}}}},HS={provides:function(t){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},VS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},WS=[HE,NS,OS,RS,AS,US,zS,FS,BS,HS,VS];iS(WS,{mixoutsTo:Ae});Ae.noAuto;Ae.config;Ae.library;Ae.dom;var Jl=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var KS=Ae.icon;Ae.layer;Ae.text;Ae.counter;var jv={exports:{}},YS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GS=YS,QS=GS;function Uv(){}function zv(){}zv.resetWarningCache=Uv;var XS=function(){function e(r,i,a,o,s,l){if(l!==QS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:zv,resetWarningCache:Uv};return n.PropTypes=n,n};jv.exports=XS();var qS=jv.exports;const M=Jd(qS);function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xd(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function qn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function JS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ZS(e,t){if(e==null)return{};var n=JS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zl(e){return e2(e)||t2(e)||n2(e)||r2()}function e2(e){if(Array.isArray(e))return eu(e)}function t2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function n2(e,t){if(e){if(typeof e=="string")return eu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eu(e,t)}}function eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,m=e.fixedWidth,v=e.inverse,g=e.border,w=e.listItem,k=e.flip,h=e.size,d=e.rotation,p=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":m,"fa-inverse":v,"fa-border":g,"fa-li":w,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},qn(t,"fa-".concat(h),typeof h<"u"&&h!==null),qn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),qn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),qn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(E){return y[E]?E:null}).filter(function(E){return E})}function a2(e){return e=e-0,e===e}function Fv(e){return a2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var o2=["style"];function s2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function l2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Fv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[s2(i)]=a:t[i]=a,t},{})}function $v(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return $v(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=l2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Fv(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=ZS(n,o2);return i.attrs.style=Mt(Mt({},i.attrs.style),o),e.apply(void 0,[t.tag,Mt(Mt({},i.attrs),s)].concat(Zl(r)))}var Bv=!1;try{Bv=!0}catch{}function u2(){if(!Bv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qd(e){if(e&&ko(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jl.icon)return Jl.icon(e);if(e===null)return null;if(e&&ko(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ms(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?qn({},e,t):{}}var gr=So.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=qd(n),c=Ms("classes",[].concat(Zl(i2(e)),Zl(a.split(" ")))),f=Ms("transform",typeof e.transform=="string"?Jl.transform(e.transform):e.transform),m=Ms("mask",qd(r)),v=KS(u,Mt(Mt(Mt(Mt({},c),f),m),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return u2("Could not find icon",u),null;var g=v.abstract,w={ref:t};return Object.keys(e).forEach(function(k){gr.defaultProps.hasOwnProperty(k)||(w[k]=e[k])}),c2(g[0],w)});gr.displayName="FontAwesomeIcon";gr.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};gr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var c2=$v.bind(null,So.createElement),f2={prefix:"far",iconName:"address-card",icon:[576,512,[62140,"contact-card","vcard"],"f2bb","M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"]},d2={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function h2(){const[e,t]=I.useState(!1),[n,r]=I.useState(null);I.useEffect(()=>{n||r(document.querySelector(".nav__inner"));const l=()=>{n&&window.innerWidth>768&&(s(n),document.querySelectorAll(".nav__inner").forEach(c=>{c.style.height=""}))};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[n]);const i=()=>{t(!e),e&&r(null)},a=l=>{l.preventDefault();const u=l.target;if(o(u,"nav__parent")){const c=u.parentElement.children[1];if(window.innerWidth<768){let f=c.clientHeight===0?c.scrollHeight:0;c.style.height=`${f}px`}else o(c,"nav__inner--show")||s(n),c.classList.toggle("nav__inner--show"),r(c)}},o=(l,u)=>l&&l.classList.value.includes(u),s=l=>{o(l,"nav__inner--show")&&l.classList.remove("nav__inner--show")};return _.jsxs("nav",{className:"nav container",children:[_.jsxs("div",{className:"nav__title",children:[_.jsx("img",{src:hE,alt:""}),_.jsx("h1",{className:"logo",children:"IPUC"})]}),_.jsx("div",{className:`nav__hamburguer ${e?"nav__hamburguer--open":""}`,onClick:i}),_.jsx("div",{className:`nav__overlay ${e?"nav__overlay--show":""}`,onClick:a,children:_.jsxs("ul",{className:"nav__menu",children:[_.jsx("li",{className:"nav__item",children:_.jsx(ge,{to:"",className:"nav__link",children:"Inicio"})}),_.jsx("li",{className:"nav__item",children:_.jsx(ge,{to:"",className:"nav__link",children:"Blog"})}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Solicitudes",_.jsx("img",{src:Os,alt:"Arrow",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:kd,alt:"todo_list",className:"nav__illustration"}),"somos"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Ed,alt:"calendary_icon",className:"nav__illustration"}),"creemos?"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Sd,alt:"reiminders_icon",className:"nav__illustration"}),"Reminder"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Id,alt:"plannign_icon",className:"nav__illustration"}),"Planning"]})})]})]}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Eventos",_.jsx("img",{src:Os,alt:"arrow_icon",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsx(ge,{to:"",className:"nav__link",children:"History"})}),_.jsx("li",{className:"nav__dropdown",children:_.jsx(ge,{to:"",className:"nav__link",children:"Our Team"})}),_.jsx("li",{className:"nav__dropdown",children:_.jsx(ge,{to:"",className:"nav__link",children:"Blog"})})]})]}),_.jsxs("li",{className:"nav__item",children:[_.jsxs("span",{className:"nav__parent",children:["Registros",_.jsx("img",{src:Os,alt:"arrow_icon",className:"nav__arrow"})]}),_.jsxs("ul",{className:"nav__inner",children:[_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:kd,alt:"todo_icon",className:"nav__illustration"}),"Todo List"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Ed,alt:"calendary_icon",className:"nav__illustration"}),"Calendar"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Sd,alt:"reminder_icon",className:"nav__illustration"}),"Reminder"]})}),_.jsx("li",{className:"nav__dropdown",children:_.jsxs(ge,{to:"",className:"nav__link",children:[_.jsx("img",{src:Id,alt:"planning_icon",className:"nav__illustration"}),"Planning"]})})]})]}),_.jsx("li",{className:"nav__login",children:_.jsx(ge,{to:"/register",className:"nav__sign",children:_.jsxs("div",{className:"nav__center",children:[_.jsx(gr,{icon:f2}),_.jsx("h1",{className:"nav__send",children:"Registro"})]})})}),_.jsx("li",{className:"nav__login nav__login--border",children:_.jsx(ge,{to:"/contacto",className:"nav__sign",children:_.jsxs("div",{className:"nav__center",children:[_.jsx(gr,{icon:d2}),_.jsx("h1",{className:"nav__send",children:"Contacto"})]})})})]})})]})}const p2=sc(qu),m2=({correoUsuario:e})=>_.jsxs(_.Fragment,{children:[_.jsxs("div",{children:["Home ",e," ",_.jsx("button",{onClick:()=>Zw(p2),children:"Cerrar Sesión"})]}),_.jsx(h2,{})]}),v2=()=>_.jsx("h1",{children:"Errorr"}),g2=({usuario:e})=>_.jsxs(eE,{children:[_.jsx(Da,{path:"/",element:e?_.jsx(vd,{to:"/home"}):_.jsx(dE,{})}),_.jsx(Da,{path:"/home",element:e?_.jsx(m2,{}):_.jsx(vd,{to:"/"})}),_.jsx(Da,{path:"*",element:_.jsx(v2,{})})]}),y2=sc(qu);function w2(){const[e,t]=I.useState(null);return I.useEffect(()=>{const n=Jw(y2,r=>{t(r||null)});return()=>n()},[]),_.jsx("div",{children:_.jsx(g2,{usuario:e})})}js.createRoot(document.getElementById("root")).render(_.jsx(So.StrictMode,{children:_.jsx(sE,{children:_.jsx(w2,{})})}));
