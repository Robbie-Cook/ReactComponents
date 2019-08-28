import{faCircleNotch as n}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as e}from"@fortawesome/react-fontawesome";import t,{Component as r,useContext as o,useState as i,useEffect as a}from"react";import{AnimatePresence as c,motion as l}from"framer-motion";import u from"styled-components";import s from"lodash";import f from"next/head";import{document as p}from"browser-monads";import{Button as d}from"grommet";import"react-pose";import{Close as m}from"styled-icons/material/Close";import{Menu as h}from"styled-icons/material/Menu";import{Helmet as y}from"react-helmet";function v(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function b(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function g(n,e,t){return e&&b(n.prototype,e),t&&b(n,t),n}function x(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&k(n,e)}function E(n){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function k(n,e){return(k=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function S(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function C(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?S(n):e}function O(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T={color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"},j={color:"#dcd6ce",font:"'Roboto', sans-serif"},M={backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D",padding:"20px 90px",mobilePadding:"20px 30px"},R={textColor:"#dcd6ce",backgroundColor:"#0f0f0f",link:T,text:j,page:M,navbar:{backgroundColor:M.backgroundColor,height:"60px",title:{name:"My dank website",font:"bold 20px 'Roboto Slab',serif"},color:j.color,padding:"0px 90px 0px 90px",mobilePadding:"0 30px",links:{color:j.color,borderColor:"transparent",activeColor:T.color,hoverColor:T.color,font:"bold 15px 'Roboto Slab',serif"}},button:{backgroundColor:T.color,color:j.color,borderColor:T.color,hover:{backgroundColor:M.backgroundColor,color:T.color}}},_=t.createContext(R);function $(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function z(n,e){return n(e={exports:{}},e.exports),e.exports}var D=z(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,h=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case s:case f:case i:case c:case a:case d:return n;default:switch(n=n&&n.$$typeof){case u:case p:case l:return n;default:return e}}case y:case h:case o:return e}}}function x(n){return g(n)===f}e.typeOf=g,e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=l,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=y,e.Memo=h,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===c||n===a||n===d||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===y||n.$$typeof===h||n.$$typeof===l||n.$$typeof===u||n.$$typeof===p||n.$$typeof===v||n.$$typeof===b)},e.isAsyncMode=function(n){return x(n)||g(n)===s},e.isConcurrentMode=x,e.isContextConsumer=function(n){return g(n)===u},e.isContextProvider=function(n){return g(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===r},e.isForwardRef=function(n){return g(n)===p},e.isFragment=function(n){return g(n)===i},e.isLazy=function(n){return g(n)===y},e.isMemo=function(n){return g(n)===h},e.isPortal=function(n){return g(n)===o},e.isProfiler=function(n){return g(n)===c},e.isStrictMode=function(n){return g(n)===a},e.isSuspense=function(n){return g(n)===d}});$(D);D.typeOf,D.AsyncMode,D.ConcurrentMode,D.ContextConsumer,D.ContextProvider,D.Element,D.ForwardRef,D.Fragment,D.Lazy,D.Memo,D.Portal,D.Profiler,D.StrictMode,D.Suspense,D.isValidElementType,D.isAsyncMode,D.isConcurrentMode,D.isContextConsumer,D.isContextProvider,D.isElement,D.isForwardRef,D.isFragment,D.isLazy,D.isMemo,D.isPortal,D.isProfiler,D.isStrictMode,D.isSuspense;var N=z(function(n,e){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;var b=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(n){}},g=function(n,e){if(void 0===e)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[e].concat(r))}};function x(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var d=n.type;switch(d){case u:case s:case o:case a:case i:case p:return d;default:var y=d&&d.$$typeof;switch(y){case l:case f:case c:return y;default:return e}}case h:case m:case r:return e}}}var w=u,E=s,k=l,S=c,C=t,O=f,P=o,T=h,j=m,M=r,R=a,_=i,$=p,z=!1;function D(n){return x(n)===s}e.typeOf=x,e.AsyncMode=w,e.ConcurrentMode=E,e.ContextConsumer=k,e.ContextProvider=S,e.Element=C,e.ForwardRef=O,e.Fragment=P,e.Lazy=T,e.Memo=j,e.Portal=M,e.Profiler=R,e.StrictMode=_,e.Suspense=$,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===i||n===p||n===d||"object"==typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===m||n.$$typeof===c||n.$$typeof===l||n.$$typeof===f||n.$$typeof===y||n.$$typeof===v)},e.isAsyncMode=function(n){return z||(z=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),D(n)||x(n)===u},e.isConcurrentMode=D,e.isContextConsumer=function(n){return x(n)===l},e.isContextProvider=function(n){return x(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return x(n)===f},e.isFragment=function(n){return x(n)===o},e.isLazy=function(n){return x(n)===h},e.isMemo=function(n){return x(n)===m},e.isPortal=function(n){return x(n)===r},e.isProfiler=function(n){return x(n)===a},e.isStrictMode=function(n){return x(n)===i},e.isSuspense=function(n){return x(n)===p}}()});$(N);N.typeOf,N.AsyncMode,N.ConcurrentMode,N.ContextConsumer,N.ContextProvider,N.Element,N.ForwardRef,N.Fragment,N.Lazy,N.Memo,N.Portal,N.Profiler,N.StrictMode,N.Suspense,N.isValidElementType,N.isAsyncMode,N.isConcurrentMode,N.isContextConsumer,N.isContextProvider,N.isElement,N.isForwardRef,N.isFragment,N.isLazy,N.isMemo,N.isPortal,N.isProfiler,N.isStrictMode,N.isSuspense;var A=z(function(n){"production"===process.env.NODE_ENV?n.exports=D:n.exports=N}),I=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function V(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var L=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=V(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))F.call(t,a)&&(o[a]=t[a]);if(I){r=I(t);for(var c=0;c<r.length;c++)W.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=function(){};if("production"!==process.env.NODE_ENV){var U=q,B={},Y=Function.call.bind(Object.prototype.hasOwnProperty);H=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function J(n,e,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(Y(n,i)){var a;try{if("function"!=typeof n[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}a=n[i](e,i,r,t,null,U)}catch(n){a=n}if(!a||a instanceof Error||H((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in B)){B[a.message]=!0;var l=o?o():"";H("Failed "+t+" type: "+a.message+(null!=l?l:""))}}}J.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(B={})};var G=J,K=Function.call.bind(Object.prototype.hasOwnProperty),Q=function(){};function X(){return null}"production"!==process.env.NODE_ENV&&(Q=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}});var Z=function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(X),arrayOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var u=n(a,l,r,o,i+"["+l+"]",q);if(u instanceof Error)return u}return null})},element:l(function(e,t,r,o,i){var a=e[t];return n(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:l(function(n,e,t,r,o){var i=n[e];return A.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return l(function(e,t,r,i,a){if(!(e[t]instanceof n)){var l=n.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(n){if(!n.constructor||!n.constructor.name)return o;return n.constructor.name}(e[t])+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:l(function(n,e,t,r,o){return s(n[e])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in a)if(K(a,u)){var s=n(a,u,r,o,i+"."+u,q);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&(arguments.length>1?Q("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):Q("Invalid argument supplied to oneOf, expected an array.")),X;return l(function(e,t,r,o,i){for(var l=e[t],u=0;u<n.length;u++)if(a(l,n[u]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new c("Invalid "+o+" `"+i+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&Q("Invalid argument supplied to oneOfType, expected an instance of array."),X;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return Q("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+e+"."),X}return l(function(e,t,r,o,i){for(var a=0;a<n.length;a++){if(null==(0,n[a])(e,t,r,o,i,q))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in n){var s=n[u];if(s){var p=s(a,u,r,o,i+"."+u,q);if(p)return p}}return null})},exact:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=L({},e[t],n);for(var s in u){var p=n[s];if(!p)return new c("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var d=p(a,s,r,o,i+"."+s,q);if(d)return d}return null})}};function a(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function c(n){this.message=n,this.stack=""}function l(n){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,l,u,s,f,p){if(u=u||o,f=f||l,p!==q){if(e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=u+":"+l;!t[m]&&r<3&&(Q("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[l]?i?null===a[l]?new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:n(a,l,u,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function u(n){return l(function(e,t,r,o,i,a){var l=e[t];return f(l)!==n?new c("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function s(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||n(e))return!0;var o=function(n){var e=n&&(t&&n[t]||n[r]);if("function"==typeof e)return e}(e);if(!o)return!1;var i,a=o.call(e);if(o!==e.entries){for(;!(i=a.next()).done;)if(!s(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=f(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function d(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return c.prototype=Error.prototype,i.checkPropTypes=G,i.resetWarningCache=G.resetWarningCache,i.PropTypes=i,i};function nn(){}function en(){}en.resetWarningCache=nn;var tn=z(function(n){if("production"!==process.env.NODE_ENV){var e=A;n.exports=Z(e.isElement,!0)}else n.exports=function(){function n(n,e,t,r,o,i){if(i!==q){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:en,resetWarningCache:nn};return t.PropTypes=t,t}()}),rn=function n(){v(this,n)};x(rn,"navbar",{height:"64"}),x(rn,"page",{sideMargin:"90px"});var on=function(){function n(){v(this,n)}return g(n,null,[{key:"fillTheme",value:function(n){return s.merge(R,n)}}]),n}();function an(){var n=O(["\n    animation-name: spin;\n    align-items: center;\n    max-width: 200px;\n    animation-duration: 2500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "]);return an=function(){return n},n}function cn(){var n=O(["\n    min-width: 100px;\n    width: 100%;\n    color: ","\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  "]);return cn=function(){return n},n}function ln(n){return t.createElement(c,null,n.spinner&&!n.show&&t.createElement(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},exit:{opacity:0},key:"spinner"},t.createElement(un,{color:"white"}),"}"),n.show&&t.createElement(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2},key:"main"},n.children))}function un(r){var o=u.div(cn(),r.color),i=u.div(an());return t.createElement(o,null,t.createElement(i,null,t.createElement(e,{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:n})))}function sn(n){return t.createElement(t.Fragment,null)}function fn(){var n=O(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return fn=function(){return n},n}ln.defaultProps={show:!1},un.defaultProps={color:"white"},sn.defaultProps={optionalWidth:"20px"};var pn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=u.div(fn(),DefaultTheme.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",DefaultTheme.backgroundColor,DefaultTheme.text.color);return t.createElement(n,null,this.props.children)}}]),e}();pn.propTypes={width:tn.string,height:tn.string,horizontalScroll:tn.bool,verticalScroll:tn.bool};var dn=function n(){v(this,n)};x(dn,"mobileSize","900");var mn=function(){function n(e){v(this,n),this.style=e}return g(n,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(dn.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),n}();function hn(){var n=O(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 40px 20px 0;\n    width: ",";\n\n    ","\n  "]);return hn=function(){return n},n}function yn(){var n=O(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return yn=function(){return n},n}function vn(){var n=O(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return vn=function(){return n},n}var bn=u.div(vn()),gn=u.div(yn(),new mn("\n    flex-direction: column;\n  "));function xn(n){var e=u.div(hn(),n.width,new mn("\n        width: 100%;\n      "));return t.createElement(e,null,n.children)}function wn(n){return t.createElement(t.Fragment,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,n.title),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",{jsx:!0,global:!0},"\n          body {\n            background-color: ".concat(n.backgroundColor,";\n            margin: 0;\n          }\n        ")))}xn.propTypes={width:tn.string},wn.defaultProps={title:"Robbie Cook",backgroundColor:"red"};var En=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];v(this,n),this.name=e,this.path=t,this.exact=o}return g(n,[{key:"isActive",value:function(){return"/"+p.URL.split("/")[3]===this.path}}]),n}(),kn=function n(){v(this,n)};x(kn,"sitename","My Dank Website"),x(kn,"links",[new En("Home","/"),new En("News","/news"),new En("Link3","/link3")]);var Sn=t.createContext(kn);function Cn(n){return t.createElement(f,null,t.createElement(wn,{title:n.title,backgroundColor:n.backgroundColor}))}function On(){var n=O(["\n    height: ",";\n    width: ",";\n  "]);return On=function(){return n},n}function Pn(n){var e=u.div(On(),n.height,n.width);return t.createElement(e,null)}function Tn(){var n=O(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return Tn=function(){return n},n}function jn(){var n=O(["\n      display: flex;\n      align-items: center;\n    "]);return jn=function(){return n},n}Cn.defaultProps={title:"Robbie Cook's Awesome Website",backgroundColor:"red"},Pn.propTypes={width:tn.string,height:tn.string};var Mn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){return t.createElement(t.Fragment,null,this.props.content)}}]),e}();Mn.propTypes={position:tn.string};var Rn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=u.div(jn()),e=u.span(Tn(),this.props.fontSize,this.props.color,this.props.opacity),r=t.createElement(e,null,"<"),o=t.createElement(t.Fragment,null,t.createElement(Pn,{width:this.props.rightTagSpacing}),t.createElement(e,null," />"));return t.createElement(n,null,t.createElement(Mn,{position:"left",content:r}),this.props.children,t.createElement(Mn,{position:"right",content:o}))}}]),e}();function _n(){var n=O(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return _n=function(){return n},n}function $n(){var n=O(["\n    margin: 12px 0;\n    color: ",";\n\n    font-family: ",";\n    ",";\n  "]);return $n=function(){return n},n}function zn(){var n=O(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return zn=function(){return n},n}function Dn(){var n=O(["\n      ","\n      font-size: 20px;\n    "]);return Dn=function(){return n},n}function Nn(){var n=O(["\n      ","\n      font-size: 25px;\n    "]);return Nn=function(){return n},n}function An(){var n=O(["\n      ","\n      font-size: 30px;\n    "]);return An=function(){return n},n}function In(){var n=O(["\n      ","\n      font-size: 40px;\n    "]);return In=function(){return n},n}function Fn(){var n=O(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return Fn=function(){return n},n}Rn.propTypes={color:tn.string,fontSize:tn.string,rightTagSpacing:tn.string,opacity:tn.string},Rn.defaultProps={color:R.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var Wn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"getHeading",value:function(n,e,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(R.text.color,";\n    "),i=u.h1(Fn(),o,"53px","53px"),a=u.h2(In(),o),c=u.h3(An(),o),l=u.h4(Nn(),o),s=u.h5(Dn(),o),f=u.div(zn(),this.props.center&&"align-self: center",this.props.style),p="";"h1"===n||void 0===n?p=i:"h2"===n?p=a:"h3"===n?p=c:"h4"===n?p=l:"h5"===n&&(p=s);var d=t.createElement(p,{className:r},this.props.children);return t.createElement(f,null,this.props.codify?t.createElement(Rn,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),e}();function Vn(n){var e=o(_).text,r=u.p($n(),e.color,e.font,n.style);return t.createElement(r,null,n.children)}function Ln(n){var e=u.a(_n(),R.link.color,n.style);return t.createElement(e,{href:n.href},n.children)}function qn(){var n=O(["\n      ","\n      display: flex;\n      ",";\n    "]);return qn=function(){return n},n}function Hn(){var n=O(["\n    border: 3px solid ",";\n    border-radius: 6px;\n    transition: 0.03s;\n    height: 40px;\n    transition: .2s;\n\n    /* for svg icons */\n    fill: ",";\n    stroke: ",";\n    border: 1px solid ",";\n\n    &:hover {\n      & p {\n        border-bottom: 1px solid transparent;\n        color: ",";\n      }\n      background-color: ",";\n      box-shadow: none;\n    }\n\n    & p {\n      color: ",";\n      line-height: 28px;\n    }\n\n    margin: ",";\n    color: ",";\n    line-height: 27px;\n    font-size: 16px;\n    padding: 5px 12px;\n    font-weight: normal;\n\n    // Styles for active links\n    background-color: ",";\n\n    ",";\n  "]);return Hn=function(){return n},n}function Un(n){var e=o(_).button,r=u(d)(Hn(),e.backgroundColor,e.color,e.color,e.color,e.hover.color,e.hover.backgroundColor,e.color,n.margin,e.color,e.backgroundColor,n.style),i=t.createElement(Vn,{style:"\n    color: ".concat(e.color,";\n    margin: 0;\n    text-decoration: none;\n    line-height: 20px;\n  ")},n.label);return t.createElement(r,{icon:n.icon,label:i,onClick:n.function,href:n.to})}Wn.propTypes={type:tn.string,codify:tn.bool,style:tn.string,margin:tn.string,center:tn.bool},Wn.defaultProps={margin:"0 0 20px 0;",center:!1},Vn.defaultProps={style:""},Un.defaultProps={to:"/",label:"My name",active:!1};var Bn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=this;return t.createElement(Yn,{buttonRow:this.props.buttonRow},this.props.labels.map(function(e,r){return t.createElement(Un,{function:n.props.functions[r],margin:n.props.buttonMargin,style:n.props.buttonStyle,label:e})}))}}]),e}();Bn.propTypes={labels:tn.array.isRequired,functions:tn.array,buttonRow:tn.bool,buttonStyle:tn.string,activeColor:tn.string};var Yn=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=this,e=u.div(qn(),"flex-direction: "+(!1!==n.props.buttonRow?"row":"column")+";",this.props.style);return t.createElement(e,null,this.props.children)}}]),e}();function Jn(n){var e=o(_),r="\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0px;\n    color: ".concat(e.navbar.links.color,";\n    width: fit-content;\n    display: flex;\n    align-contents: center;\n\n    & > * {\n      transition-duration: .1s;\n      font: ").concat(e.navbar.links.font,"!important;\n      color: ").concat(e.navbar.links.hoverColor,";\n      align-self: center;\n    }\n\n    &:hover {\n      & > * {\n        color: ").concat(e.navbar.links.hoverColor,";\n        border-bottom: 0px!important;\n      }\n    }\n\n    margin: ").concat(e.navbar.links.margin,";\n\n    ").concat(n.active&&"\n    & p {\n      color: ".concat(e.navbar.links.activeColor,";\n    }\n    "),";\n\n    ").concat(n.style,";\n  ");return t.createElement(Un,{style:r,label:n.label,to:n.to},n.children)}function Gn(){var n=O(["\n    position: relative;\n    transition: 0.2s;\n    opacity: 0.8;\n    margin: 0;\n    width: ",";\n    cursor: pointer;\n    display: flex;\n    width: ",";\n    height: ",";\n    color: ",";\n    font-size: 25px;\n    transition: 0.2s;\n\n    &:hover {\n      opacity: 1;\n    }\n  "]);return Gn=function(){return n},n}function Kn(){var n=O(["\n    ",";\n    & * {\n      color: red;\n    }\n    &:hover {\n      transform: rotate(90deg);\n    }\n  "]);return Kn=function(){return n},n}function Qn(){var n=O(["\n    ",";\n    & * {\n      color: ",";\n    }\n  "]);return Qn=function(){return n},n}function Xn(n){var e=n.open,r=n.width,i=n.height,a=o(_),s="\n    width: 30px;\n    left: 0;\n    transition: 0.2s;\n    margin: 0;\n    &:hover {\n      transform: scale(1.2);\n    }\n  ",f=u(h)(Qn(),s,a.navbar.links.color),p=u(m)(Kn(),s),d=u.div(Gn(),r,r,i,a.color),y={position:"absolute",width:r,height:i,display:"flex",justifyContent:"center",margin:"0px"};return t.createElement(c,null,t.createElement(d,null,e?t.createElement(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:y},t.createElement(p,null)):t.createElement(l.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:y},t.createElement(f,null))))}function Zn(){var n=O(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    position: absolute;\n    left: 0;\n    padding: 6px 11px 10px 10px;\n  "]);return Zn=function(){return n},n}function ne(n){var e=n.open,r=n.children,i=o(_),a=u.div(Zn(),i.navbar.backgroundColor);return t.createElement(c,null,e&&t.createElement(l.div,{key:"modal",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},t.createElement(a,null,r)))}function ee(n){var e=n.links,r=n.height,a=(o(_).navbar,P(i(!1),2)),c=a[0],l=a[1];return t.createElement("div",{onClick:function(){l(!c)},style:{height:r}},t.createElement(Xn,{key:"mobile-menu-button",open:c,height:r}),t.createElement(ne,{key:"menu-container",open:c},e))}function te(){var n=O(["\n    display: none;\n    z-index: 1;\n    align-self: baseline;\n    ","\n    flex-direction: column;\n    width: ",";\n    height: ",";\n  "]);return te=function(){return n},n}function re(n){var e,r=o(_),i=u.div(te(),new mn("display: flex!important;"),"50px",r.navbar.height);return t.createElement(i,null,t.createElement(ee,{links:(e=[],n.links.map(function(n,r){e.push(t.createElement(Jn,{key:r,to:n.path,label:n.name,active:n.isActive(),style:"margin-bottom: 10px; background-color: transparent;"}))}),e),height:r.navbar.height}))}function oe(){var n=O(["\n    display: flex;\n    ","\n    height: ",";\n    line-height: ",";\n    align-items: center;\n  "]);return oe=function(){return n},n}function ie(){var n=O(["\n    margin: 0;\n    color: ",";\n    margin-bottom: 0;\n    font: ",";\n  "]);return ie=function(){return n},n}function ae(){var n=O(["\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    padding: ",";\n    box-sizing: border-box;\n\n    ","\n  "]);return ae=function(){return n},n}function ce(n){var e=P(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)});var c,l=o(_),s=u.div(ae(),l.navbar.height,l.navbar.backgroundColor,l.navbar.padding,new mn("\n      padding: ".concat(l.navbar.mobilePadding,";\n    "))),f=(c=[],n.links.forEach(function(n){c.push(t.createElement(Jn,{to:n.path,label:n.name,active:n.isActive(),style:"\n            margin: 0 20px 0 0; \n            line-height: ".concat(l.navbar.height,"!important;\n            & > * {\n              line-height: ").concat(l.navbar.height,"!important\n            }\n          ")}))}),c),p=u.p(ie(),l.navbar.color,l.navbar.title.font),d=u.div(oe(),new mn("display: none;"),l.navbar.height,l.navbar.height);return t.createElement(s,null,t.createElement(re,{links:n.links,theme:l}),t.createElement(p,null,l.navbar.title.name),t.createElement(Pn,{width:"55px"}),t.createElement(d,null,f))}function le(n){var e=P(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)},[]);var c=o(_).navbar;o(Sn);return t.createElement(ce,{links:n.links,height:c.height})}Yn.propTypes={buttonRow:tn.bool},Jn.defaultProps={label:"My label",to:"/",active:!1},Xn.defaultProps={width:"60px",open:!1,height:"60px"},ne.defaultProps={visible:!0},Xn.defaultProps={onClick:function(){console.log("Pressed!")},links:t.createElement(t.Fragment,null),height:"60px"},re.defaultProps={theme:R,height:"60px"},ce.defaultProps={title:"Testing title",links:[]},le.defaultProps={title:"My Website",links:[]};var ue=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;v(this,n),"string"==typeof e?(this.top=e,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(e,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return g(n,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),n}();function se(n){return t.createElement("div",{className:"application"},t.createElement(y,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,n.title),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",null,"\n              body {\n                background-color: ".concat(n.backgroundColor,";\n                margin: 0;\n              }\n            "))))}function fe(){var n=O(["\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    // Mobile styles\n    ","\n  "]);return fe=function(){return n},n}function pe(n){var e=P(i(!1),2),r=e[0],c=e[1];a(function(){c(!0)},[]);var l=o(_),s=o(Sn),f=u.div(fe(),l.page.padding,new mn("\n      flex-direction: column;\n      padding: ".concat(l.page.mobilePadding,"; \n    ")));return t.createElement(t.Fragment,null,t.createElement(se,{title:s.sitename,backgroundColor:l.backgroundColor}),r&&t.createElement(t.Fragment,null,n.next&&t.createElement(Cn,{title:s.sitename,backgroundColor:l.backgroundColor}),t.createElement(le,{title:l.navbar.title,links:s.links}),t.createElement("div",{style:n.style},t.createElement(f,{style:n.style},n.children))))}function de(){var n=O(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return de=function(){return n},n}se.defaultProps={backgroundColor:"white",title:"Robbie Cook"},pe.defaultProps={next:!0,padding:""};var me=function(n){function e(n){var t;return v(this,e),(t=C(this,E(e).call(this,n))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(S(t)),t}return w(e,r),g(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var n=u.div(de(),this.state.height-rn.navbar.height,this.props.style);return t.createElement(n,null,this.props.children)}}]),e}();function he(){var n=O(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return he=function(){return n},n}var ye=u.div(he());function ve(n){return t.createElement(pe,null,t.createElement(bn,null,t.createElement(Wn,{type:"h1"},"Sample"),t.createElement(gn,null,t.createElement(xn,null),t.createElement(xn,null))))}function be(){var n=O(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return be=function(){return n},n}function ge(){var n=O(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return ge=function(){return n},n}function xe(){var n=O(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return xe=function(){return n},n}var we=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=u.div(xe());return t.createElement(n,null,this.props.children)}}]),e}();we.propTypes={};var Ee=function(n){function e(){return v(this,e),C(this,E(e).apply(this,arguments))}return w(e,r),g(e,[{key:"render",value:function(){var n=u.div(ge(),50,50,25,50,35,DefaultTheme.text.color,DefaultTheme.backgroundColor,DefaultTheme.link.color,DefaultTheme.text.color,DefaultTheme.link.color,DefaultTheme.text.color),e=u.a(be());return t.createElement(n,null,t.createElement(e,{href:this.props.href},this.props.children))}}]),e}();Ee.propTypes={};export{pn as BorderBox,Un as Button,Bn as ButtonGenerator,Yn as ButtonWrapper,Rn as Codify,xn as Col,ye as Container,kn as DefaultSiteContext,ue as Dimensions,Wn as Heading,Ee as Icon,we as IconsWrapper,bn as LayoutWrapper,Ln as Link,mn as MobileView,se as MyHelmet,En as MyLink,le as NavigationBar,pe as Page,gn as Row,sn as SampleComponent,ve as SamplePage,me as Section,Sn as SiteContext,rn as Sizes,Pn as Spacer,Vn as Text,_ as ThemeContext,on as ThemeManager,ln as Transition};
//# sourceMappingURL=index.es.js.map
