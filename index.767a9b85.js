!function(){function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequiref85d;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequiref85d=n);var l=n.register;l("iflN6",function(t,o){e(t.exports,"SCHEMAS",function(){return l}),e(t.exports,"DATA_ATR",function(){return a}),e(t.exports,"colorMode",function(){return i}),e(t.exports,"bodyElement",function(){return s});var r=n("ar2Dz");let l={DARK:"dark",LIGHT:"light"},a="data-theme",i=new r.WebStorage({propertyName:"color-mode"}),s=document.querySelector("body")}),l("ar2Dz",function(t,o){e(t.exports,"WebStorage",function(){return r});class r{#e;#t;constructor({propertyName:e}){this.#e=e,this.getItem()}get propertyValue(){return this.#t}set propertyValue(e){this.#t=e}getItem(){this.#t=window.localStorage.getItem(this.#e)}setItem(){window.localStorage.setItem(this.#e,this.#t)}removeItem(){window.localStorage.removeItem(this.#e)}}});var a=n("iflN6");let i=(0,a.bodyElement).getAttribute(a.DATA_ATR);for(let e of document.querySelectorAll('[id="theme-button"]'))e.addEventListener("click",()=>{let e=i===a.SCHEMAS.DARK?a.SCHEMAS.LIGHT:a.SCHEMAS.DARK;(0,a.bodyElement).setAttribute(a.DATA_ATR,e),a.colorMode.propertyValue=e,(0,a.colorMode).setItem(),i=e});let s=function(e,t=0){let o;return(...r)=>{clearTimeout(o),o=setTimeout(()=>{e(...r)},t)}};window.matchMedia("(min-width: 768px)").matches?function(){let e=document.querySelector("main");document.addEventListener("scroll",s(function(e,t){let o=window.visualViewport.height,r=window.scrollY||0,n=Object.values(e).reduce((e,o,r)=>(e[r]={selector:t.children[o],value:0,menuItem:document.querySelector(`div.header-nav a[href="#${o}"]`).parentNode},e),[]);return()=>n.forEach(({selector:e,value:t,menuItem:n},l,a)=>{let{top:i,bottom:s}=e.getBoundingClientRect();if(!(i-o<0&&s>0)){0!==t&&(n.style.backgroundSize="0%",a[l].value=0),r=window.scrollY;return}let c=0,u=o-i;if(t===(c=u>o?s<=o?Math.round(s/(e.clientHeight/100)):100:u<=e.clientHeight?Math.round(u/(e.clientHeight/100)):100))return;let d=window.scrollY;switch(l){case a.length-1:n.style.backgroundPositionX="left";break;case 0:n.style.backgroundPositionX="right";break;default:d<r?n.style.backgroundPositionX=a[l+1].value>0?"right":"left":n.style.backgroundPositionX=l>0&&a[l-1].value>0?"left":"right"}n.style.backgroundSize=`${c}%`,a[l].value=c,r=d})}({home:"home",about:"about",offer:"offer",skills:"skills",portfolio:"portfolio"},e),300))}():function(){let e=document.querySelector("div.modal-menu nav ul"),t="hundred";e.addEventListener("click",e=>{let o=[...e.currentTarget.children];if(o.includes(e.target.parentNode)){for(let e of o)e.classList.contains(t)&&e.classList.remove(t);e.target.parentNode.classList.add(t)}})}();class c{#o;#r;#n;#l=()=>{for(let e of this.#r)e.classList.toggle(this.#n)};constructor({button:e,changeNode:t,classForChange:o}){this.#o=document.querySelectorAll(`[${e}]`),this.#r=document.querySelectorAll(`[${t}]`),this.#n=o}addLisener(e){for(let t of this.#o)t.addEventListener(e,this.#l)}removeLisener(e){for(let t of this.#o)t.removeEventListener(e,this.#l)}get changeNode(){return this.#r}get button(){return this.#o}get classForChange(){return this.#n}get addClass(){return this.#l}}new c({button:"modal-menu-button",changeNode:"modal-menu-overlay",classForChange:"is-open"}).addLisener("click");let u=new c({button:"modal-contact-button",changeNode:"modal-contact-overlay",classForChange:"is-open"});u.closeOnOverlay=function(){this.changeNode[0].addEventListener("click",e=>{e.currentTarget===e.target&&this.addClass()})},u.addLisener("click"),u.closeOnOverlay()}();
//# sourceMappingURL=index.767a9b85.js.map
