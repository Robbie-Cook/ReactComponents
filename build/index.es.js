import{faCircleNotch as n}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as e}from"@fortawesome/react-fontawesome";import t,{Component as r,useContext as o,useState as i,useEffect as a}from"react";import c from"react-pose";import l from"styled-components";import u from"next/head";import{document as s}from"browser-monads";import{Button as f}from"grommet";import{Helmet as p}from"react-helmet";import{Carousel as d}from"react-responsive-carousel";import"react-responsive-carousel/lib/styles/carousel.min.css";function m(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n,e,t){return e&&y(n.prototype,e),t&&y(n,t),n}function v(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&w(n,e)}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function w(n,e){return(w=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function x(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function E(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?x(n):e}function k(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=function n(){m(this,n)};v(C,"textColor","#dcd6ce"),v(C,"backgroundColor","#0f0f0f"),v(C,"link",{color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"}),v(C,"text",{color:C.textColor,font:"'Roboto', sans-serif"}),v(C,"page",{backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D"}),v(C,"navbar",{backgroundColor:C.backgroundColor,height:"60px",button:{backgroundColor:C.backgroundColor,color:C.textColor,borderColor:"transparent",activeColor:C.link.color}}),v(C,"button",{backgroundColor:C.link.color,color:C.text.color,borderColor:C.textColor});var O=t.createContext(C);function P(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function j(n,e){return n(e={exports:{}},e.exports),e.exports}var T=j(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,s=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case r:switch(n=n.type){case s:case f:case i:case c:case a:case d:return n;default:switch(n=n&&n.$$typeof){case u:case p:case l:return n;default:return e}}case h:case y:case o:return e}}}function w(n){return g(n)===f}e.typeOf=g,e.AsyncMode=s,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=l,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=h,e.Memo=y,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=d,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===f||n===c||n===a||n===d||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===h||n.$$typeof===y||n.$$typeof===l||n.$$typeof===u||n.$$typeof===p||n.$$typeof===v||n.$$typeof===b)},e.isAsyncMode=function(n){return w(n)||g(n)===s},e.isConcurrentMode=w,e.isContextConsumer=function(n){return g(n)===u},e.isContextProvider=function(n){return g(n)===l},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===r},e.isForwardRef=function(n){return g(n)===p},e.isFragment=function(n){return g(n)===i},e.isLazy=function(n){return g(n)===h},e.isMemo=function(n){return g(n)===y},e.isPortal=function(n){return g(n)===o},e.isProfiler=function(n){return g(n)===c},e.isStrictMode=function(n){return g(n)===a},e.isSuspense=function(n){return g(n)===d}});P(T);T.typeOf,T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isValidElementType,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense;var R=j(function(n,e){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;var b=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+n.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(n){}},g=function(n,e){if(void 0===e)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[e].concat(r))}};function w(n){if("object"==typeof n&&null!==n){var e=n.$$typeof;switch(e){case t:var d=n.type;switch(d){case u:case s:case o:case a:case i:case p:return d;default:var h=d&&d.$$typeof;switch(h){case l:case f:case c:return h;default:return e}}case y:case m:case r:return e}}}var x=u,E=s,k=l,S=c,C=t,O=f,P=o,j=y,T=m,R=r,M=a,_=i,$=p,z=!1;function N(n){return w(n)===s}e.typeOf=w,e.AsyncMode=x,e.ConcurrentMode=E,e.ContextConsumer=k,e.ContextProvider=S,e.Element=C,e.ForwardRef=O,e.Fragment=P,e.Lazy=j,e.Memo=T,e.Portal=R,e.Profiler=M,e.StrictMode=_,e.Suspense=$,e.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===i||n===p||n===d||"object"==typeof n&&null!==n&&(n.$$typeof===y||n.$$typeof===m||n.$$typeof===c||n.$$typeof===l||n.$$typeof===f||n.$$typeof===h||n.$$typeof===v)},e.isAsyncMode=function(n){return z||(z=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(n)||w(n)===u},e.isConcurrentMode=N,e.isContextConsumer=function(n){return w(n)===l},e.isContextProvider=function(n){return w(n)===c},e.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===t},e.isForwardRef=function(n){return w(n)===f},e.isFragment=function(n){return w(n)===o},e.isLazy=function(n){return w(n)===y},e.isMemo=function(n){return w(n)===m},e.isPortal=function(n){return w(n)===r},e.isProfiler=function(n){return w(n)===a},e.isStrictMode=function(n){return w(n)===i},e.isSuspense=function(n){return w(n)===p}}()});P(R);R.typeOf,R.AsyncMode,R.ConcurrentMode,R.ContextConsumer,R.ContextProvider,R.Element,R.ForwardRef,R.Fragment,R.Lazy,R.Memo,R.Portal,R.Profiler,R.StrictMode,R.Suspense,R.isValidElementType,R.isAsyncMode,R.isConcurrentMode,R.isContextConsumer,R.isContextProvider,R.isElement,R.isForwardRef,R.isFragment,R.isLazy,R.isMemo,R.isPortal,R.isProfiler,R.isStrictMode,R.isSuspense;var M=j(function(n){"production"===process.env.NODE_ENV?n.exports=T:n.exports=R}),_=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function N(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var A=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(n){return e[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var t,r,o=N(n),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))$.call(t,a)&&(o[a]=t[a]);if(_){r=_(t);for(var c=0;c<r.length;c++)z.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I=function(){};if("production"!==process.env.NODE_ENV){var D=F,W={},V=Function.call.bind(Object.prototype.hasOwnProperty);I=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}}}function L(n,e,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(V(n,i)){var a;try{if("function"!=typeof n[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}a=n[i](e,i,r,t,null,D)}catch(n){a=n}if(!a||a instanceof Error||I((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in W)){W[a.message]=!0;var l=o?o():"";I("Failed "+t+" type: "+a.message+(null!=l?l:""))}}}L.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(W={})};var q=L,H=Function.call.bind(Object.prototype.hasOwnProperty),U=function(){};function B(){return null}"production"!==process.env.NODE_ENV&&(U=function(n){var e="Warning: "+n;"undefined"!=typeof console&&console.error(e);try{throw new Error(e)}catch(n){}});var Y=function(n,e){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:u("array"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:l(B),arrayOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<a.length;l++){var u=n(a,l,r,o,i+"["+l+"]",F);if(u instanceof Error)return u}return null})},element:l(function(e,t,r,o,i){var a=e[t];return n(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+f(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:l(function(n,e,t,r,o){var i=n[e];return M.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(n){return l(function(e,t,r,i,a){if(!(e[t]instanceof n)){var l=n.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(n){if(!n.constructor||!n.constructor.name)return o;return n.constructor.name}(e[t])+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}return null})},node:l(function(n,e,t,r,o){return s(n[e])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(n){return l(function(e,t,r,o,i){if("function"!=typeof n)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in a)if(H(a,u)){var s=n(a,u,r,o,i+"."+u,F);if(s instanceof Error)return s}return null})},oneOf:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&(arguments.length>1?U("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):U("Invalid argument supplied to oneOf, expected an array.")),B;return l(function(e,t,r,o,i){for(var l=e[t],u=0;u<n.length;u++)if(a(l,n[u]))return null;var s=JSON.stringify(n,function(n,e){return"symbol"===p(e)?String(e):e});return new c("Invalid "+o+" `"+i+"` of value `"+String(l)+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&U("Invalid argument supplied to oneOfType, expected an instance of array."),B;for(var e=0;e<n.length;e++){var t=n[e];if("function"!=typeof t)return U("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+e+"."),B}return l(function(e,t,r,o,i){for(var a=0;a<n.length;a++){if(null==(0,n[a])(e,t,r,o,i,F))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var u in n){var s=n[u];if(s){var p=s(a,u,r,o,i+"."+u,F);if(p)return p}}return null})},exact:function(n){return l(function(e,t,r,o,i){var a=e[t],l=f(a);if("object"!==l)return new c("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var u=A({},e[t],n);for(var s in u){var p=n[s];if(!p)return new c("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var d=p(a,s,r,o,i+"."+s,F);if(d)return d}return null})}};function a(n,e){return n===e?0!==n||1/n==1/e:n!=n&&e!=e}function c(n){this.message=n,this.stack=""}function l(n){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,l,u,s,f,p){if(u=u||o,f=f||l,p!==F){if(e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=u+":"+l;!t[m]&&r<3&&(U("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[l]?i?null===a[l]?new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `null`."):new c("The "+s+" `"+f+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:n(a,l,u,s,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function u(n){return l(function(e,t,r,o,i,a){var l=e[t];return f(l)!==n?new c("Invalid "+o+" `"+i+"` of type `"+p(l)+"` supplied to `"+r+"`, expected `"+n+"`."):null})}function s(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(s);if(null===e||n(e))return!0;var o=function(n){var e=n&&(t&&n[t]||n[r]);if("function"==typeof e)return e}(e);if(!o)return!1;var i,a=o.call(e);if(o!==e.entries){for(;!(i=a.next()).done;)if(!s(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!s(c[1]))return!1}return!0;default:return!1}}function f(n){var e=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,e){return"symbol"===n||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,n)?"symbol":e}function p(n){if(null==n)return""+n;var e=f(n);if("object"===e){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return e}function d(n){var e=p(n);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return c.prototype=Error.prototype,i.checkPropTypes=q,i.resetWarningCache=q.resetWarningCache,i.PropTypes=i,i};function J(){}function G(){}G.resetWarningCache=J;var K=j(function(n){if("production"!==process.env.NODE_ENV){var e=M;n.exports=Y(e.isElement,!0)}else n.exports=function(){function n(n,e,t,r,o,i){if(i!==F){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:G,resetWarningCache:J};return t.PropTypes=t,t}()}),Q=function n(){m(this,n)};function X(){var n=k(["\n    animation-name: spin;\n    align-items: center;\n    max-width: 200px;\n    animation-duration: 2500ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  "]);return X=function(){return n},n}function Z(){var n=k(["\n    min-width: 100px;\n    width: 100%;\n    color: ","\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  "]);return Z=function(){return n},n}function nn(){var n=k([""]);return nn=function(){return n},n}function en(n){var e=c.div({visible:{opacity:1,height:"auto",transition:{default:{ease:"linear",duration:500}}},hidden:{opacity:0,height:"0px",overflow:"hidden",transition:{default:{ease:"linear",duration:500}}}}),r=l(e)(nn());return t.createElement(t.Fragment,null,t.createElement(r,{initialPose:"visible",pose:n.loaded?"hidden":"visible"},t.createElement(tn,{color:"white"})),t.createElement(r,{initialPose:"hidden",pose:n.loaded?"visible":"hidden"},n.loaded&&n.children))}function tn(r){var o=l.div(Z(),r.color),i=l.div(X());return t.createElement(o,null,t.createElement(i,null,t.createElement(e,{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:n})))}function rn(n){return t.createElement(t.Fragment,null)}function on(){var n=k(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return on=function(){return n},n}v(Q,"navbar",{height:"64"}),v(Q,"page",{sideMargin:"90px"}),en.defaultProps={loaded:!1},tn.defaultProps={color:"white"},rn.defaultProps={optionalWidth:"20px"};var an=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=l.div(on(),C.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",C.backgroundColor,C.text.color);return t.createElement(n,null,this.props.children)}}]),e}();an.propTypes={width:K.string,height:K.string,horizontalScroll:K.bool,verticalScroll:K.bool};var cn=function n(){m(this,n)};v(cn,"mobileSize","900");var ln=function(){function n(e){m(this,n),this.style=e}return h(n,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(cn.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),n}();function un(){var n=k(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 40px 20px 0;\n    width: ",";\n\n    ","\n  "]);return un=function(){return n},n}function sn(){var n=k(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return sn=function(){return n},n}function fn(){var n=k(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return fn=function(){return n},n}var pn=l.div(fn()),dn=l.div(sn(),new ln("\n    flex-direction: column;\n  "));function mn(n){var e=l.div(un(),n.width,new ln("\n        width: 100%;\n      "));return t.createElement(e,null,n.children)}function yn(n){return React.createElement(React.Fragment,null,React.createElement("meta",{charSet:"utf-8"}),React.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),React.createElement("title",null,n.title),React.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),React.createElement("style",{jsx:!0,global:!0},"\n          body {\n            background-color: red;\n            margin: 0;\n          }\n        "))}mn.propTypes={width:K.string},yn.defaultProps={title:"Robbie Cook",backgroundColor:"red"};var hn=function(){function n(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];m(this,n),this.name=e,this.path=t,this.exact=o}return h(n,[{key:"isActive",value:function(){return"/"+s.URL.split("/")[3]===this.path}}]),n}(),vn=function n(){m(this,n)};v(vn,"name","My Website"),v(vn,"links",[new hn("Home","/"),new hn("News","/news"),new hn("Link3","/link3")]);var bn=t.createContext(vn);function gn(n){return t.createElement(u,null,t.createElement(yn,{title:n.title,backgroundColor:n.backgroundColor}))}function wn(){var n=k(["\n    height: ",";\n    width: ",";\n  "]);return wn=function(){return n},n}function xn(n){var e=l.div(wn(),n.height,n.width);return t.createElement(e,null)}function En(){var n=k(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return En=function(){return n},n}function kn(){var n=k(["\n      display: flex;\n      align-items: center;\n    "]);return kn=function(){return n},n}gn.defaultProps={title:"Robbie Cook's Awesome Website",backgroundColor:"red"},xn.propTypes={width:K.string,height:K.string};var Sn=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){return t.createElement(t.Fragment,null,this.props.content)}}]),e}();Sn.propTypes={position:K.string};var Cn=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=l.div(kn()),e=l.span(En(),this.props.fontSize,this.props.color,this.props.opacity),r=t.createElement(e,null,"<"),o=t.createElement(t.Fragment,null,t.createElement(xn,{width:this.props.rightTagSpacing}),t.createElement(e,null," />"));return t.createElement(n,null,t.createElement(Sn,{position:"left",content:r}),this.props.children,t.createElement(Sn,{position:"right",content:o}))}}]),e}();function On(){var n=k(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return On=function(){return n},n}function Pn(){var n=k(["\n    margin: 12px 0;\n    color: ",";\n\n    font-family: ",";\n    ",";\n  "]);return Pn=function(){return n},n}function jn(){var n=k(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return jn=function(){return n},n}function Tn(){var n=k(["\n      ","\n      font-size: 20px;\n    "]);return Tn=function(){return n},n}function Rn(){var n=k(["\n      ","\n      font-size: 25px;\n    "]);return Rn=function(){return n},n}function Mn(){var n=k(["\n      ","\n      font-size: 30px;\n    "]);return Mn=function(){return n},n}function _n(){var n=k(["\n      ","\n      font-size: 40px;\n    "]);return _n=function(){return n},n}function $n(){var n=k(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return $n=function(){return n},n}Cn.propTypes={color:K.string,fontSize:K.string,rightTagSpacing:K.string,opacity:K.string},Cn.defaultProps={color:C.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var zn=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"getHeading",value:function(n,e,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(C.text.color,";\n    "),i=l.h1($n(),o,"53px","53px"),a=l.h2(_n(),o),c=l.h3(Mn(),o),u=l.h4(Rn(),o),s=l.h5(Tn(),o),f=l.div(jn(),this.props.center&&"align-self: center",this.props.style),p="";"h1"===n||void 0===n?p=i:"h2"===n?p=a:"h3"===n?p=c:"h4"===n?p=u:"h5"===n&&(p=s);var d=t.createElement(p,{className:r},this.props.children);return t.createElement(f,null,this.props.codify?t.createElement(Cn,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),e}();function Nn(n){var e=o(O).text,r=l.p(Pn(),e.color,e.font,n.style);return t.createElement(r,null,n.children)}function An(n){var e=l.a(On(),C.link.color,n.style);return t.createElement(e,{href:n.href},n.children)}function Fn(){var n=k(["\n      ","\n      display: flex;\n      ",";\n    "]);return Fn=function(){return n},n}function In(){var n=k(["\n    border: 3px solid ",";\n    border-radius: 6px;\n    color: ",";\n    transition: 0.03s;\n    height: 36px;\n\n    /* for svg icons */\n    fill: ",";\n    stroke: ",";\n\n    &:hover {\n      & p {\n        border-bottom: 1px solid transparent;\n      }\n      background-color: ",";\n    }\n\n    & p {\n      color: ","\n    }\n\n    margin: ",";\n    color: ",";\n    line-height: 27px;\n    font-size: 16px;\n    padding: 5px 12px;\n    font-weight: normal;\n\n    // Styles for active links\n    background-color: ",";\n\n    ",";\n  "]);return In=function(){return n},n}function Dn(n){var e=o(O).button;console.log(e);var r=l(f)(In(),e.backgroundColor,e.color,e.color,e.color,e.backgroundColor,e.color,n.margin,e.color,e.backgroundColor,n.style),i=t.createElement(Nn,{style:"\n    color: ".concat(e.color,";\n    margin: 0;\n    text-decoration: none;\n    line-height: 20px;\n  ")},n.label);return t.createElement(r,{icon:n.icon,label:i,onClick:n.function,href:n.to})}zn.propTypes={type:K.string,codify:K.bool,style:K.string,margin:K.string,center:K.bool},zn.defaultProps={margin:"0 0 20px 0;",center:!1},Nn.defaultProps={style:""},Dn.defaultProps={to:"/",label:"My name",active:!1};var Wn=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=this;return t.createElement(Vn,{buttonRow:this.props.buttonRow},this.props.labels.map(function(e,r){return t.createElement(Dn,{function:n.props.functions[r],margin:n.props.buttonMargin,style:n.props.buttonStyle,label:e})}))}}]),e}();Wn.propTypes={labels:K.array.isRequired,functions:K.array,buttonRow:K.bool,buttonStyle:K.string,activeColor:K.string};var Vn=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=this,e=l.div(Fn(),"flex-direction: "+(!1!==n.props.buttonRow?"row":"column")+";",this.props.style);return t.createElement(e,null,this.props.children)}}]),e}();function Ln(n){var e=o(O).navbar.button,r="\n    background-color: ".concat(e.backgroundColor,";\n    border-color: ").concat(e.borderColor,";\n\n    &:hover {\n      background-color: ").concat(e.backgroundColor,";\n    }\n\n    margin: ").concat(n.margin,";\n\n    ").concat(n.active&&"\n    & p {\n      color: ".concat(e.activeColor,";\n    }\n    "),"\n  ");return t.createElement(Dn,{style:r,label:n.label,to:n.to},n.children)}function qn(){var n=k([""]);return qn=function(){return n},n}function Hn(){var n=k(["\n    height: ",";\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: ",";\n    padding-left: 40px;\n    padding-right: 40px;\n    box-sizing: border-box;\n  "]);return Hn=function(){return n},n}function Un(n){var e=S(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)});var c,u=o(O).navbar,s=l.div(Hn(),u.height,u.backgroundColor),f=(c=[],n.links.forEach(function(n){c.push(t.createElement(Ln,{to:n.path,label:n.name,active:n.isActive()}))}),c),p=l(Nn)(qn());return t.createElement(s,null,t.createElement(p,null,n.title),t.createElement(xn,{width:"30px"}),f)}function Bn(n){var e=S(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)},[]);o(O).navbar;var c=o(bn);return t.createElement(t.Fragment,null,t.createElement(Un,{title:c.name,links:c.links}))}Vn.propTypes={buttonRow:K.bool},Ln.defaultProps={label:"My label",to:"/",active:!1,margin:"0 30px 0 0"},Un.defaultProps={title:"Testing title",links:C.navbar.links};var Yn=function(){function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;m(this,n),"string"==typeof e?(this.top=e,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(e,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return h(n,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),n}();function Jn(n){return t.createElement("div",{className:"application"},t.createElement(p,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,n.title),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",null,"\n              body {\n                background-color: ".concat(n.backgroundColor,";\n                margin: 0;\n              }\n            "))))}function Gn(){var n=k(["\n    display: flex;\n    flex-direction: column;\n    padding: ",";\n\n    // Mobile styles\n    ","\n  "]);return Gn=function(){return n},n}function Kn(n){var e=S(i(!1),2),r=(e[0],e[1]);a(function(){r(!0)},[]);var c=o(O),u=o(bn),s=l.div(Gn(),new Yn(40,90,0,90),new ln("\n      flex-direction: column;\n      padding: ".concat(new Yn(20,30),"; \n    ")));return t.createElement(t.Fragment,null,n.next?t.createElement(gn,{title:u.name,backgroundColor:c.backgroundColor}):t.createElement(Jn,{title:u.name,backgroundColor:c.backgroundColor}),t.createElement("div",null,t.createElement(t.Fragment,null,t.createElement(Bn,null),t.createElement("div",{style:n.style},t.createElement(s,{style:n.style},n.children)))))}function Qn(){var n=k(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return Qn=function(){return n},n}Jn.defaultProps={backgroundColor:"white",title:"Robbie Cook"},Kn.defaultProps={next:!0};var Xn=function(n){function e(n){var t;return m(this,e),(t=E(this,g(e).call(this,n))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(x(t)),t}return b(e,r),h(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var n=l.div(Qn(),this.state.height-Q.navbar.height,this.props.style);return t.createElement(n,null,this.props.children)}}]),e}();function Zn(){var n=k(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return Zn=function(){return n},n}var ne=l.div(Zn());function ee(n){return t.createElement(Kn,null,t.createElement(pn,null,t.createElement(zn,{type:"h1"},"Sample"),t.createElement(dn,null,t.createElement(mn,null),t.createElement(mn,null))))}function te(){var n=k(["\n      display: flex;\n      height: 100%;\n      align-items: center;\n      & > div {\n        overflow: hidden!important;\n        width: 100%;\n        border: 4px solid ",";\n      }\n      \n      // Make arrows bigger on carousel\n\n      & .control-next:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-left: "," solid #fff!important;\n      }\n\n      & .control-prev:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-right: "," solid #fff!important;\n      }\n    "]);return te=function(){return n},n}function re(){var n=k(["\n      max-height: 300px;\n      width: auto !important;\n    "]);return re=function(){return n},n}var oe=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"getCarouselPhotoElement",value:function(n){var e=l.img(re()),r=[],o=!0,i=!1,a=void 0;try{for(var c,u=n[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var s=c.value;r.push(t.createElement("div",null,t.createElement(e,{src:s})))}}catch(n){i=!0,a=n}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}return r}},{key:"render",value:function(){var n=l.div(te(),C.text.color,"20px","20px","20px","20px","20px","20px");return t.createElement(n,null,t.createElement(d,{showThumbs:!1},this.getCarouselPhotoElement(this.props.photos)))}}]),e}();function ie(){var n=k(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return ie=function(){return n},n}function ae(){var n=k(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return ae=function(){return n},n}function ce(){var n=k(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return ce=function(){return n},n}d.propTypes={photos:K.any};var le=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=l.div(ce());return t.createElement(n,null,this.props.children)}}]),e}();le.propTypes={};var ue=function(n){function e(){return m(this,e),E(this,g(e).apply(this,arguments))}return b(e,r),h(e,[{key:"render",value:function(){var n=l.div(ae(),50,50,25,50,35,C.text.color,C.backgroundColor,C.link.color,C.text.color,C.link.color,C.text.color),e=l.a(ie());return t.createElement(n,null,t.createElement(e,{href:this.props.href},this.props.children))}}]),e}();ue.propTypes={};export{an as BorderBox,Dn as Button,Wn as ButtonGenerator,Vn as ButtonWrapper,oe as Carousel,Cn as Codify,mn as Col,ne as Container,vn as DefaultSiteContext,C as DefaultTheme,Yn as Dimensions,zn as Heading,ue as Icon,le as IconsWrapper,pn as LayoutWrapper,An as Link,ln as MobileView,Jn as MyHelmet,hn as MyLink,Bn as NavigationBar,Kn as Page,dn as Row,rn as SampleComponent,ee as SamplePage,Xn as Section,bn as SiteContext,Q as Sizes,xn as Spacer,Nn as Text,O as ThemeContext,en as Transition};
//# sourceMappingURL=index.es.js.map
