/*! For license information please see 863.9422c7d3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_asu_components_core=self.webpackChunk_asu_components_core||[]).push([[863],{"../../node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"../../node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache,react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache;__webpack_require__.d(__webpack_exports__,{Kd:()=>BrowserRouter,N_:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js"),react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-router/dist/index.js"),_remix_run_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}new Map;const startTransitionImpl=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).startTransition;(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache||(react_dom__WEBPACK_IMPORTED_MODULE_1___namespace_cache=__webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_1__,2))).flushSync,(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useId;function BrowserRouter(_ref4){let{basename,children,future,window}=_ref4,historyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();null==historyRef.current&&(historyRef.current=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.zR)({window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react__WEBPACK_IMPORTED_MODULE_0__.useState({action:history.action,location:history.location}),{v7_startTransition}=future||{},setState=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState=>{v7_startTransition&&startTransitionImpl?startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Ix,{basename,children,location:state.location,navigationType:state.action,navigator:history,future})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function LinkWithRef(_ref7,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset,unstable_viewTransition}=_ref7,rest=_objectWithoutPropertiesLoose(_ref7,_excluded),{basename}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.jb),isExternal=!1;if("string"==typeof to&&ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.pb)(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.$P)(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative,unstable_viewTransition}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.Zp)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.zy)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_3__.x$)(to,{relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.AO)(location)===(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.AO)(path);navigate(to,{replace,state,preventScrollReset,relative,unstable_viewTransition})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative,unstable_viewTransition])}(to,{replace,state,target,preventScrollReset,relative,unstable_viewTransition});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));var DataRouterHook,DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher",DataRouterHook.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetcher="useFetcher",DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}))}}]);