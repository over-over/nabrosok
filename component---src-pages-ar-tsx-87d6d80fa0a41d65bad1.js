(self.webpackChunknabrosok_2021=self.webpackChunknabrosok_2021||[]).push([[769],{6814:function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}r.d(t,{Z:function(){return n}})},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},7027:function(e,t,r){"use strict";r.r(t),r.d(t,{Ar:function(){return ge},default:function(){return ve}});var n,o,i,a,c=r(6814),u=r(7294),s=r(5697),l=r.n(s),f=r(4839),p=r.n(f),d=r(2993),h=r.n(d),m=r(6494),y=r.n(m),b="bodyAttributes",T="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),A="cssText",E="href",C="http-equiv",O="innerHTML",S="itemprop",j="name",k="property",P="rel",x="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",N="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=X(e,v.TITLE),r=X(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,M);return t||n||void 0},$=function(e){return X(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===P&&"canonical"===e[r].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==O&&c!==A&&c!==S||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(v.BODY,n),se(v.HTML,o),ue(f,p);var d={baseTag:le(v.BASE,r),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,s),styleTags:le(v.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ce=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(v.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=pe(r,n),[u.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=fe(r),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case T:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===A){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===A)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},he=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(b,r,n),htmlAttributes:de(T,o,n),link:de(v.LINK,i,n),meta:de(v.META,a,n),noscript:de(v.NOSCRIPT,c,n),script:de(v.SCRIPT,u,n),style:de(v.STYLE,s,n),title:de(v.TITLE,{title:f,titleAttributes:p},n)}},me=p()((function(e){return{baseTag:J([E,L],e),bodyAttributes:G(b,e),defer:X(e,R),encode:X(e,N),htmlAttributes:G(T,e),linkTags:Q(v.LINK,[P,E],e),metaTags:Q(v.META,[j,w,C,k,S],e),noscriptTags:Q(v.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:Q(v.SCRIPT,[x,O],e),styleTags:Q(v.STYLE,[A],e),title:Z(e),titleAttributes:G(g,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),he)((function(){return null})),ye=(o=me,a=i=function(e){function t(){return Y(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return z({},o,((t={})[n.type]=a,t.titleAttributes=z({},i),t));case v.BODY:return z({},o,{bodyAttributes:z({},i)});case v.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((r={})[n.type]=z({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(K(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(o,n)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var be=ye,Te=u.createElement(u.Fragment,null,u.createElement("div",{className:"arjs-loader"},u.createElement("div",null,"Loading, please wait...")),u.createElement("a-scene",{"vr-mode-ui":"enabled: false;",embedded:!0,arjs:"trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"},u.createElement("a-nft",{type:"nft",url:"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball",smooth:"true",smoothCount:"10",smoothTolerance:"0.01",smoothThreshold:"5"},u.createElement("a-entity",{"gltf-model":"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",position:"75 150 0",rotation:"90 90 90",scale:"10 10 10"})),u.createElement("a-entity",{camera:!0}))),ge=function(e){(0,c.Z)(e);var t=u.useState(!0),r=t[0],n=t[1],o=u.useCallback((function(){n(!1)}),[]);return u.useEffect((function(){"complete"===document.readyState&&o()}),[document.readyState]),u.createElement(u.Fragment,null,u.createElement(be,null,u.createElement("script",{src:"https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"}),u.createElement("script",{src:"https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"})),r?u.createElement("div",null,"Wait pls!"):Te)},ve=ge}}]);
//# sourceMappingURL=component---src-pages-ar-tsx-87d6d80fa0a41d65bad1.js.map