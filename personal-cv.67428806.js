
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$extendImportMap(map) {
  Object.assign(parcelRequire.i ??= {}, map);
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$resolve(url) {
  url = parcelRequire.i?.[url] || url;
  return new URL($parcel$distDir + url, import.meta.url).toString();
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  var $parcel$distDir = "./";

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref85d"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref85d"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("b0e1O", function(module, exports) {

$parcel$export(module.exports, "SCHEMAS", function () { return $802a93829ce4eb37$export$75099da408f61966; });
$parcel$export(module.exports, "DATA_ATR", function () { return $802a93829ce4eb37$export$7c0e3daa4414abda; });
$parcel$export(module.exports, "colorMode", function () { return $802a93829ce4eb37$export$688338a0db0d596d; });
$parcel$export(module.exports, "bodyElement", function () { return $802a93829ce4eb37$export$e1122b4c4bd5b838; });

var $cWFeL = parcelRequire("cWFeL");
const $802a93829ce4eb37$export$75099da408f61966 = {
    DARK: 'dark',
    LIGHT: 'light'
};
const $802a93829ce4eb37$export$7c0e3daa4414abda = 'data-theme';
const $802a93829ce4eb37$export$688338a0db0d596d = new (0, $cWFeL.WebStorage)({
    propertyName: 'color-mode'
});
const $802a93829ce4eb37$export$e1122b4c4bd5b838 = document.querySelector('body');

});
parcelRegister("cWFeL", function(module, exports) {

$parcel$export(module.exports, "WebStorage", function () { return $96cae3a6379ca107$export$2b71c64c3b06cfe; });
class $96cae3a6379ca107$export$2b71c64c3b06cfe {
    #propertyName;
    #propertyValue;
    constructor({ propertyName: propertyName }){
        this.#propertyName = propertyName;
        this.getItem();
    }
    get propertyValue() {
        return this.#propertyValue;
    }
    set propertyValue(newValue) {
        this.#propertyValue = newValue;
    }
    getItem() {
        this.#propertyValue = window.localStorage.getItem(this.#propertyName);
    }
    setItem() {
        window.localStorage.setItem(this.#propertyName, this.#propertyValue);
    }
    removeItem() {
        window.localStorage.removeItem(this.#propertyName);
    }
}

});


var $519d0d2014688212$exports = {};
$parcel$extendImportMap({
    "7rxyk": "def.246408a5.jpeg",
    "ibJOv": "Frame.596b6eca.svg"
});


var $b0e1O = parcelRequire("b0e1O");
let $8d3606515290629b$var$currentTheme = (0, $b0e1O.bodyElement).getAttribute((0, $b0e1O.DATA_ATR));
const $8d3606515290629b$var$BUTTON_ID = 'theme-button';
const $8d3606515290629b$var$btns = document.querySelectorAll(`[id="${$8d3606515290629b$var$BUTTON_ID}"]`);
for (const btn of $8d3606515290629b$var$btns)btn.addEventListener('click', ()=>{
    const color = $8d3606515290629b$var$currentTheme === (0, $b0e1O.SCHEMAS).DARK ? (0, $b0e1O.SCHEMAS).LIGHT : (0, $b0e1O.SCHEMAS).DARK;
    (0, $b0e1O.bodyElement).setAttribute((0, $b0e1O.DATA_ATR), color);
    (0, $b0e1O.colorMode).propertyValue = color;
    (0, $b0e1O.colorMode).setItem();
    $8d3606515290629b$var$currentTheme = color;
});


function $de0fcc247af9967d$export$8d759a6f69dcfaf0(calback, delay = 0) {
    let lastCall = 0;
    let wait;
    let handle;
    return (...args)=>{
        const now = Date.now();
        wait = lastCall + delay - now;
        clearTimeout(handle);
        if (wait <= 0) handle = setTimeout(()=>{
            calback(...args);
            lastCall = now;
        });
    };
}
const $de0fcc247af9967d$export$61fc7d43ac8f84b0 = function(calback, delay = 0) {
    let handle;
    return (...args)=>{
        clearTimeout(handle);
        handle = setTimeout(()=>{
            calback(...args);
        }, delay);
    };
};


const $eb511a22d9d9d9cc$var$tabletWidth = window.matchMedia('(min-width: 768px)');
if ($eb511a22d9d9d9cc$var$tabletWidth.matches) $eb511a22d9d9d9cc$var$tabletVersion();
else $eb511a22d9d9d9cc$var$mobileVersion();
function $eb511a22d9d9d9cc$var$mobileVersion() {
    const navLists = document.querySelector('div.modal-menu nav ul');
    const chosenCls = 'hundred';
    navLists.addEventListener('click', (e)=>{
        const liArr = [
            ...e.currentTarget.children
        ];
        if (liArr.includes(e.target.parentNode)) {
            for (const elem of liArr){
                if (!elem.classList.contains(chosenCls)) continue;
                elem.classList.remove(chosenCls);
            }
            e.target.parentNode.classList.add(chosenCls);
        }
    });
}
function $eb511a22d9d9d9cc$var$tabletVersion() {
    const mainElem = document.querySelector('main');
    const sections = {
        home: 'home',
        about: 'about',
        offer: 'offer',
        skills: 'skills',
        portfolio: 'portfolio'
    };
    document.addEventListener('scroll', (0, $de0fcc247af9967d$export$61fc7d43ac8f84b0)($eb511a22d9d9d9cc$var$lisenerEnv(sections, mainElem), 300));
}
function $eb511a22d9d9d9cc$var$lisenerEnv(sections, mainElem) {
    const viewportHeight = window.visualViewport.height;
    let oldScroll = window.scrollY || 0;
    const selectors = Object.values(sections).reduce((prev, key, i)=>{
        prev[i] = {
            selector: mainElem.children[key],
            value: 0,
            menuItem: document.querySelector(`div.header-nav a[href="#${key}"]`).parentNode
        };
        return prev;
    }, []);
    return ()=>selectors.forEach(({ selector: selector, value: value, menuItem: menuItem }, index, arr)=>{
            const { top: t, bottom: b } = selector.getBoundingClientRect();
            if (!(t - viewportHeight < 0 && b > 0)) {
                if (value !== 0) {
                    menuItem.style.backgroundSize = '0%';
                    arr[index].value = 0;
                }
                oldScroll = window.scrollY;
                return;
            }
            let percentOfElemInView = 0;
            const partOfElenInView = viewportHeight - t;
            if (partOfElenInView > viewportHeight) percentOfElemInView = b <= viewportHeight ? Math.round(b / (selector.clientHeight / 100)) : 100;
            else percentOfElemInView = partOfElenInView <= selector.clientHeight ? Math.round(partOfElenInView / (selector.clientHeight / 100)) : 100;
            if (value === percentOfElemInView) return;
            const newScroll = window.scrollY;
            switch(index){
                case arr.length - 1:
                    menuItem.style.backgroundPositionX = 'left';
                    break;
                case 0:
                    menuItem.style.backgroundPositionX = 'right';
                    break;
                default:
                    if (newScroll < oldScroll) // up
                    menuItem.style.backgroundPositionX = arr[index + 1].value > 0 ? 'right' : 'left';
                    else // down
                    menuItem.style.backgroundPositionX = index > 0 && arr[index - 1].value > 0 ? 'left' : 'right';
                    break;
            }
            menuItem.style.backgroundSize = `${percentOfElemInView}%`;
            arr[index].value = percentOfElemInView;
            oldScroll = newScroll;
        });
}


class $270ed55cd01ad160$export$8cf1832d0a515216 {
    #button;
    #changeNode;
    #classForChange;
    #body;
    #bodyClass;
    #addClass = ()=>{
        for (const element of this.#changeNode){
            element.classList.toggle(this.#classForChange);
            if (!this.#bodyClass) return;
            this.#body.classList.toggle(this.#bodyClass);
        }
    };
    constructor({ button: button, changeNode: changeNode, classForChange: classForChange, bodyClass: bodyClass = null }){
        this.#button = document.querySelectorAll(`[${button}]`);
        this.#changeNode = document.querySelectorAll(`[${changeNode}]`);
        this.#classForChange = classForChange;
        this.#body = document.querySelector('body');
        this.#bodyClass = bodyClass;
    }
    addLisener(event) {
        for (const element of this.#button)element.addEventListener(event, this.#addClass);
    }
    removeLisener(event) {
        for (const element of this.#button)element.removeEventListener(event, this.#addClass);
    }
    get changeNode() {
        return this.#changeNode;
    }
    get button() {
        return this.#button;
    }
    get classForChange() {
        return this.#classForChange;
    }
    get addClass() {
        return this.#addClass;
    }
}


const $e0228fbbd7220d90$var$menu = new (0, $270ed55cd01ad160$export$8cf1832d0a515216)({
    button: 'modal-menu-button',
    changeNode: 'modal-menu-overlay',
    classForChange: 'is-open'
});
$e0228fbbd7220d90$var$menu.addLisener('click');
const $e0228fbbd7220d90$var$contact = new (0, $270ed55cd01ad160$export$8cf1832d0a515216)({
    button: 'modal-contact-button',
    changeNode: 'modal-contact-overlay',
    classForChange: 'is-open',
    bodyClass: 'modal-open-body'
});
$e0228fbbd7220d90$var$contact.closeOnOverlay = function() {
    this.changeNode[0].addEventListener('click', (e)=>{
        if (e.currentTarget === e.target) this.addClass();
    });
};
$e0228fbbd7220d90$var$contact.addLisener('click');
$e0228fbbd7220d90$var$contact.closeOnOverlay();



var $cWFeL = parcelRequire("cWFeL");
const $26a6bbb0745c9619$export$17b07c660794dc13 = window.location;
const $26a6bbb0745c9619$export$789c912f57fe164c = document.children[0].getAttribute('lang');
const $26a6bbb0745c9619$export$cdecc7848fd1f779 = document.getElementById('home-avatar-img');
const $26a6bbb0745c9619$export$5afa5e5875219111 = document.getElementById('home-intro-text');
const $26a6bbb0745c9619$export$5037fa10c1969cca = document.getElementById('about-text');
const $26a6bbb0745c9619$export$2bac2ed8d58748e5 = document.getElementById('resume-download');
const $26a6bbb0745c9619$export$e086546dab571269 = document.querySelectorAll('[social-list-id="social-link-list"]');
const $26a6bbb0745c9619$export$1104a4ae1c8bfebe = document.getElementById('hard-skills-list');
const $26a6bbb0745c9619$export$30cbd9dba95d9954 = document.getElementById('soft-skills-list');
const $26a6bbb0745c9619$export$3c0fe33db69d8340 = document.getElementById('loader');
const $26a6bbb0745c9619$export$12767bb12998a75d = document.getElementById('hard-skills-pagination');
const $26a6bbb0745c9619$export$32f1ed782e6b101a = document.getElementById('soft-skills-pagination');
const $26a6bbb0745c9619$export$f51a5b9bb823e217 = document.getElementById('portfolio');


var $854ed9b1c7623dab$exports = {};
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var $cbc29ec01ce5487c$exports = {};
// shim for using process in browser
var $cbc29ec01ce5487c$var$process = $cbc29ec01ce5487c$exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $cbc29ec01ce5487c$var$cachedSetTimeout;
var $cbc29ec01ce5487c$var$cachedClearTimeout;
function $cbc29ec01ce5487c$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $cbc29ec01ce5487c$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $cbc29ec01ce5487c$var$cachedSetTimeout = setTimeout;
        else $cbc29ec01ce5487c$var$cachedSetTimeout = $cbc29ec01ce5487c$var$defaultSetTimout;
    } catch (e) {
        $cbc29ec01ce5487c$var$cachedSetTimeout = $cbc29ec01ce5487c$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $cbc29ec01ce5487c$var$cachedClearTimeout = clearTimeout;
        else $cbc29ec01ce5487c$var$cachedClearTimeout = $cbc29ec01ce5487c$var$defaultClearTimeout;
    } catch (e) {
        $cbc29ec01ce5487c$var$cachedClearTimeout = $cbc29ec01ce5487c$var$defaultClearTimeout;
    }
})();
function $cbc29ec01ce5487c$var$runTimeout(fun) {
    if ($cbc29ec01ce5487c$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($cbc29ec01ce5487c$var$cachedSetTimeout === $cbc29ec01ce5487c$var$defaultSetTimout || !$cbc29ec01ce5487c$var$cachedSetTimeout) && setTimeout) {
        $cbc29ec01ce5487c$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cbc29ec01ce5487c$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $cbc29ec01ce5487c$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $cbc29ec01ce5487c$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $cbc29ec01ce5487c$var$runClearTimeout(marker) {
    if ($cbc29ec01ce5487c$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($cbc29ec01ce5487c$var$cachedClearTimeout === $cbc29ec01ce5487c$var$defaultClearTimeout || !$cbc29ec01ce5487c$var$cachedClearTimeout) && clearTimeout) {
        $cbc29ec01ce5487c$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $cbc29ec01ce5487c$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $cbc29ec01ce5487c$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $cbc29ec01ce5487c$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $cbc29ec01ce5487c$var$queue = [];
var $cbc29ec01ce5487c$var$draining = false;
var $cbc29ec01ce5487c$var$currentQueue;
var $cbc29ec01ce5487c$var$queueIndex = -1;
function $cbc29ec01ce5487c$var$cleanUpNextTick() {
    if (!$cbc29ec01ce5487c$var$draining || !$cbc29ec01ce5487c$var$currentQueue) return;
    $cbc29ec01ce5487c$var$draining = false;
    if ($cbc29ec01ce5487c$var$currentQueue.length) $cbc29ec01ce5487c$var$queue = $cbc29ec01ce5487c$var$currentQueue.concat($cbc29ec01ce5487c$var$queue);
    else $cbc29ec01ce5487c$var$queueIndex = -1;
    if ($cbc29ec01ce5487c$var$queue.length) $cbc29ec01ce5487c$var$drainQueue();
}
function $cbc29ec01ce5487c$var$drainQueue() {
    if ($cbc29ec01ce5487c$var$draining) return;
    var timeout = $cbc29ec01ce5487c$var$runTimeout($cbc29ec01ce5487c$var$cleanUpNextTick);
    $cbc29ec01ce5487c$var$draining = true;
    var len = $cbc29ec01ce5487c$var$queue.length;
    while(len){
        $cbc29ec01ce5487c$var$currentQueue = $cbc29ec01ce5487c$var$queue;
        $cbc29ec01ce5487c$var$queue = [];
        while(++$cbc29ec01ce5487c$var$queueIndex < len)if ($cbc29ec01ce5487c$var$currentQueue) $cbc29ec01ce5487c$var$currentQueue[$cbc29ec01ce5487c$var$queueIndex].run();
        $cbc29ec01ce5487c$var$queueIndex = -1;
        len = $cbc29ec01ce5487c$var$queue.length;
    }
    $cbc29ec01ce5487c$var$currentQueue = null;
    $cbc29ec01ce5487c$var$draining = false;
    $cbc29ec01ce5487c$var$runClearTimeout(timeout);
}
$cbc29ec01ce5487c$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $cbc29ec01ce5487c$var$queue.push(new $cbc29ec01ce5487c$var$Item(fun, args));
    if ($cbc29ec01ce5487c$var$queue.length === 1 && !$cbc29ec01ce5487c$var$draining) $cbc29ec01ce5487c$var$runTimeout($cbc29ec01ce5487c$var$drainQueue);
};
// v8 likes predictible objects
function $cbc29ec01ce5487c$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$cbc29ec01ce5487c$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$cbc29ec01ce5487c$var$process.title = 'browser';
$cbc29ec01ce5487c$var$process.browser = true;
$cbc29ec01ce5487c$var$process.env = {};
$cbc29ec01ce5487c$var$process.argv = [];
$cbc29ec01ce5487c$var$process.version = ''; // empty string to avoid regexp issues
$cbc29ec01ce5487c$var$process.versions = {};
function $cbc29ec01ce5487c$var$noop() {}
$cbc29ec01ce5487c$var$process.on = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.addListener = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.once = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.off = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.removeListener = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.removeAllListeners = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.emit = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.prependListener = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.prependOnceListener = $cbc29ec01ce5487c$var$noop;
$cbc29ec01ce5487c$var$process.listeners = function(name) {
    return [];
};
$cbc29ec01ce5487c$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$cbc29ec01ce5487c$var$process.cwd = function() {
    return '/';
};
$cbc29ec01ce5487c$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$cbc29ec01ce5487c$var$process.umask = function() {
    return 0;
};


'use strict';
function $854ed9b1c7623dab$var$assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function $854ed9b1c7623dab$var$normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function $854ed9b1c7623dab$var$_format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var $854ed9b1c7623dab$var$posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = $cbc29ec01ce5487c$exports.cwd();
                path = cwd;
            }
            $854ed9b1c7623dab$var$assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = $854ed9b1c7623dab$var$normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        $854ed9b1c7623dab$var$assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = $854ed9b1c7623dab$var$normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        $854ed9b1c7623dab$var$assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            $854ed9b1c7623dab$var$assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return $854ed9b1c7623dab$var$posix.normalize(joined);
    },
    relative: function relative(from, to) {
        $854ed9b1c7623dab$var$assertPath(from);
        $854ed9b1c7623dab$var$assertPath(to);
        if (from === to) return '';
        from = $854ed9b1c7623dab$var$posix.resolve(from);
        to = $854ed9b1c7623dab$var$posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        $854ed9b1c7623dab$var$assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        $854ed9b1c7623dab$var$assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        $854ed9b1c7623dab$var$assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return $854ed9b1c7623dab$var$_format('/', pathObject);
    },
    parse: function parse(path) {
        $854ed9b1c7623dab$var$assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
$854ed9b1c7623dab$var$posix.posix = $854ed9b1c7623dab$var$posix;
$854ed9b1c7623dab$exports = $854ed9b1c7623dab$var$posix;


const $105c8a0895893f07$var$langPrefer = new (0, $cWFeL.WebStorage)({
    propertyName: 'lang-prefer'
});
const $105c8a0895893f07$var$linkAttribute = 'lang-switch-tablet';
const $105c8a0895893f07$var$langSwither = window.matchMedia('(min-width: 768px)').matches ? document.querySelector(`[${$105c8a0895893f07$var$linkAttribute}]`) : document.querySelectorAll(`[${$105c8a0895893f07$var$linkAttribute}]`)[1];
(()=>{
    if (!$105c8a0895893f07$var$langPrefer.propertyValue) return;
    if ($105c8a0895893f07$var$langPrefer.propertyValue === (0, $26a6bbb0745c9619$export$789c912f57fe164c)) {
        const text = `${(0, $26a6bbb0745c9619$export$17b07c660794dc13).pathname}`;
        const p = (0, (/*@__PURE__*/$parcel$interopDefault($854ed9b1c7623dab$exports))).join(text.split('/').reduce((prevValue, value)=>{
            if (value !== 'index.html') prevValue += `/${value}`;
            return prevValue;
        }, '/'));
        window.history.pushState(null, null, p + (0, $26a6bbb0745c9619$export$17b07c660794dc13).hash);
        return;
    }
    if ($105c8a0895893f07$var$langPrefer.propertyValue === 'uk') window.location.href += 'uk';
    else if ($105c8a0895893f07$var$langPrefer.propertyValue === 'en') window.location.href = window.location.origin;
})();
$105c8a0895893f07$var$langSwither.addEventListener('click', $105c8a0895893f07$var$languageClick);
function $105c8a0895893f07$var$languageClick(e) {
    const linkAttributeValue = $105c8a0895893f07$var$langSwither.getAttribute(`${$105c8a0895893f07$var$linkAttribute}`);
    $105c8a0895893f07$var$langPrefer.propertyValue = linkAttributeValue;
    $105c8a0895893f07$var$langPrefer.setItem();
}



const $5b4eec6700723b4f$export$37b96ba04a8c05d1 = 'https://personal-cv-api-ivan-lavers-projects.vercel.app';


class $845eab8850209cc8$var$ApiService {
    #BASE_API_URL;
    #statEnum = {
        opened: 'opened',
        downloadresume: 'downloadresume',
        sendemail: 'sendemail',
        openlinkedin: 'openlinkedin',
        openfacebook: 'openfacebook',
        openinstagram: 'openinstagram',
        opentelegram: 'opentelegram',
        opengithub: 'opengithub'
    };
    constructor(){
        this.#BASE_API_URL = (0, $5b4eec6700723b4f$export$37b96ba04a8c05d1);
        this.getInfo = this.#errorHAndler(this.getInfo);
        this.getSoftSkills = this.#errorHAndler(this.getSoftSkills);
        this.getHardSkills = this.#errorHAndler(this.getHardSkills);
        this.sendEmail = this.#errorHAndler(this.sendEmail);
        this.getHardSkillsByIdList = this.#errorHAndler(this.getHardSkillsByIdList);
        this.getProjects = this.#errorHAndler(this.getProjects);
    }
    #errorHAndler(func) {
        return async (...args)=>{
            try {
                return await func.apply(this, args);
            } catch (error) {
                console.log(error);
                return null;
            }
        };
    }
    get statEnum() {
        return this.#statEnum;
    }
    async getInfo() {
        const url = this.#BASE_API_URL + '/admin/info';
        const response = await fetch(url, {
            mode: 'cors'
        }).then((response)=>{
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }).then((data)=>data.data);
        return response;
    }
    async getSoftSkills(lang, perPage = 100, page = 1) {
        const url = this.#BASE_API_URL + `/admin/softSkills/${lang}?perPage=${perPage}&page=${page}`;
        const response = await fetch(url, {
            mode: 'cors'
        }).then((response)=>{
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }).then((data)=>{
            return data;
        });
        return response;
    }
    async getHardSkills(perPage = 100, page = 1) {
        const url = this.#BASE_API_URL + `/admin/hardSkills?perPage=${perPage}&page=${page}`;
        const response = await fetch(url, {
            mode: 'cors'
        }).then((response)=>{
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }).then((data)=>{
            return data;
        });
        return response;
    }
    async getResume() {
        const url = (0, $5b4eec6700723b4f$export$37b96ba04a8c05d1) + '/admin/info/resume';
        const response = await fetch(url, {
            mode: 'cors'
        }).then(async (response)=>{
            if (!response.ok) throw new Error(response.status);
            const contentDisposition = response.headers.get('Content-Disposition');
            let originalFileName = 'default_filename.pdf';
            if (contentDisposition) {
                // Use a regular expression to extract the filename from the header value
                const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
                if (filenameMatch && filenameMatch[1]) originalFileName = filenameMatch[1];
            }
            return {
                file: await response.blob(),
                originalFileName: originalFileName
            };
        }).catch((e)=>{
            console.log('get Resume error');
            console.log(e);
        });
        return response;
    }
    async sendEmail(data) {
        const url = this.#BASE_API_URL + '/contactme/byemail';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        });
    }
    async getHardSkillsByIdList(idArr) {
        const url = this.#BASE_API_URL + `/admin/hardSkills/ids?idArr=${JSON.stringify(idArr)}`;
        const response = await fetch(url, {
            mode: 'cors'
        }).then((response)=>{
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }).then((data)=>{
            return data;
        });
        return response;
    }
    async getProjects(lang, perPage, page) {
        const url = this.#BASE_API_URL + `/admin/projects?perPage=${perPage}&page=${page}&language=${lang.toUpperCase()}`;
        const response = await fetch(url, {
            mode: 'cors'
        }).then((response)=>{
            if (!response.ok) throw new Error(response.status);
            return response.json();
        }).then((data)=>{
            return data;
        });
        return response;
    }
    async sendStat(act, language) {
        const url = this.#BASE_API_URL + `/admin/statistics?act=${act}&language=${language}`;
        try {
            fetch(url, {
                mode: 'cors',
                method: 'put'
            });
        } catch  {}
    }
}
const $845eab8850209cc8$var$apiService = new $845eab8850209cc8$var$ApiService();
var $845eab8850209cc8$export$2e2bcd8739ae039 = $845eab8850209cc8$var$apiService;


const $d2e1e1038a5b4cd3$var$openLinkListener = (e)=>{
    (0, $845eab8850209cc8$export$2e2bcd8739ae039).sendStat((0, $845eab8850209cc8$export$2e2bcd8739ae039).statEnum[`open${e.currentTarget.getAttribute('id').split('-')[2]}`], (0, $26a6bbb0745c9619$export$789c912f57fe164c));
};
const $d2e1e1038a5b4cd3$var$updateLinks = (listClone, data)=>{
    if (data.linkedin) {
        const linkedinRef = listClone.querySelector('#social-link-linkedin');
        linkedinRef.setAttribute('href', data.linkedin);
    }
    if (data.facebook) {
        const facebookRef = listClone.querySelector('#social-link-facebook');
        facebookRef.setAttribute('href', data.facebook);
    }
    if (data.instagram) {
        const instagramRef = listClone.querySelector('#social-link-instagram');
        instagramRef.setAttribute('href', data.instagram);
    }
    if (data.github) {
        const githubRef = listClone.querySelector('#social-link-github');
        githubRef.setAttribute('href', data.github);
    }
    if (data.phone) {
        const telegramRef = listClone.querySelector('#social-link-telegram');
        telegramRef.setAttribute('href', `https://t.me/${data.phone}`);
    }
    return listClone;
};
const $d2e1e1038a5b4cd3$export$377fc7b78d5fcfc6 = (data)=>{
    for(let i = 0; i < (0, $26a6bbb0745c9619$export$e086546dab571269).length; i++){
        const element = (0, $26a6bbb0745c9619$export$e086546dab571269)[i];
        element.replaceChildren(...$d2e1e1038a5b4cd3$var$updateLinks(element.cloneNode(true), data).children);
        element.querySelectorAll('a').forEach((link)=>{
            link.addEventListener('click', $d2e1e1038a5b4cd3$var$openLinkListener);
        });
    }
};




const $81e0c7f72e46bddc$export$2dd3d40a27a48d6e = async ()=>{
    const response = await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getResume();
    (0, $26a6bbb0745c9619$export$2bac2ed8d58748e5).setAttribute('href', URL.createObjectURL(response.file));
    (0, $26a6bbb0745c9619$export$2bac2ed8d58748e5).setAttribute('download', response.originalFileName);
    (0, $26a6bbb0745c9619$export$2bac2ed8d58748e5).addEventListener('click', ()=>{
        (0, $845eab8850209cc8$export$2e2bcd8739ae039).sendStat((0, $845eab8850209cc8$export$2e2bcd8739ae039).statEnum.downloadresume, (0, $26a6bbb0745c9619$export$789c912f57fe164c));
    });
};




class $954b237d10c1beba$export$2c4b17e1c2e0931 {
    #propertyName;
    #propertyValue;
    constructor({ propertyName: propertyName }){
        this.#propertyName = propertyName;
        this.getItem();
    }
    get propertyValue() {
        return this.#propertyValue;
    }
    set propertyValue(newValue) {
        this.#propertyValue = newValue;
    }
    getItem() {
        const value = window.sessionStorage.getItem(this.#propertyName);
        this.#propertyValue = !value ? value : JSON.parse(value);
    }
    setItem() {
        window.sessionStorage.setItem(this.#propertyName, JSON.stringify(this.#propertyValue));
    }
    removeItem() {
        window.sessionStorage.removeItem(this.#propertyName);
    }
}


class $d7941be0afad2db3$export$56aa485540066c9a {
    #hasPrevPage;
    #hasNextPage;
    #totalPages;
    #page;
    #paginationRef;
    #paginationListRef;
    #apiGetItems;
    #createItemsList;
    #ItemsListRef;
    #btnPrev;
    #btnNext;
    #perPage;
    nextListener;
    prevListener;
    itemListener;
    sessionStorage;
    constructor({ hasPrevPage: hasPrevPage, hasNextPage: hasNextPage, totalPages: totalPages, page: page, paginationRef: paginationRef, sessionStorage: sessionStorage, ItemsListRef: ItemsListRef, apiGetItems: apiGetItems, createItemsList: createItemsList, perPage: perPage }){
        this.#hasPrevPage = hasPrevPage;
        this.#hasNextPage = hasNextPage;
        this.#totalPages = totalPages;
        this.#paginationRef = paginationRef;
        this.#ItemsListRef = ItemsListRef;
        this.sessionStorage = sessionStorage;
        this.#apiGetItems = apiGetItems;
        this.#createItemsList = createItemsList;
        this.#perPage = perPage;
        this.#page = page;
        this.#paginationListRef = paginationRef.querySelector('ul');
        this.#btnPrev = this.#paginationRef.querySelector('button[prev-btn]');
        this.#btnNext = this.#paginationRef.querySelector('button[next-btn]');
        this.itemListener = this.contextFunc(this.itemListenerFunc);
        this.nextListener = this.contextFunc(this.nextListenerFunc);
        this.prevListener = this.contextFunc(this.prevListenerFunc);
    }
    contextFunc = (func)=>{
        return async (...args)=>{
            await func.call(this, ...args);
        };
    };
    handlePagination(sessionStorage) {
        this.#paginationRef.classList.remove('displaynone');
        if (!this.#hasPrevPage) this.#btnPrev.setAttribute('disabled', true);
        else {
            this.#btnPrev.addEventListener('click', this.prevListener);
            this.#btnPrev.removeAttribute('disabled');
        }
        if (!this.#hasNextPage) this.#btnNext.setAttribute('disabled', true);
        else {
            this.#btnNext.addEventListener('click', this.nextListener);
            this.#btnNext.removeAttribute('disabled');
        }
        const pageListCount = this.#totalPages < 5 ? this.#totalPages : 5;
        const pageList = [];
        let counter = 0;
        if (this.#page === 2) counter = -1;
        else if (this.#page > 2) {
            if (this.#page === 4 && this.#totalPages < 5) counter = -3;
            else counter = -2;
        }
        if (pageListCount === 5) {
            if (this.#totalPages === this.#page) counter = -4;
            else if (this.#totalPages - this.#page === 1) counter = -3;
        }
        for(let i = 0; i < pageListCount; i++){
            const pageNum = this.#page + counter + i;
            if (pageNum > this.#totalPages) continue;
            const li = document.createElement('li');
            li.classList.add('pagination-list-item');
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('data-page', pageNum);
            button.innerText = pageNum;
            if (pageNum === this.#page) {
                button.classList.add('pagination-activ-button');
                button.setAttribute('disabled', true);
            }
            li.appendChild(button);
            pageList.push(li);
        }
        this.#paginationListRef.replaceChildren(...pageList);
        this.#paginationListRef.addEventListener('click', this.itemListener);
    }
    async itemListenerFunc(e) {
        if (e.target.nodeName === 'BUTTON') {
            let data = [];
            this.#page = Number(e.target.getAttribute('data-page'));
            this.#perPage = this.sessionStorage.propertyValue.perPage;
            this.sessionStorage.propertyValue.page = this.#page;
            this.sessionStorage.setItem();
            const skills = await this.#apiGetItems(this.#perPage, this.#page);
            data = [
                ...skills.data
            ];
            this.#hasNextPage = skills.hasNextPage;
            this.#hasPrevPage = skills.hasPrevPage;
            this.#ItemsListRef.replaceChildren(...await this.#createItemsList(data));
            // TODO: still need somesimg better
            this.#ItemsListRef.parentNode.scrollIntoView({
                behavior: 'smooth'
            });
            this.#btnNext.removeEventListener('click', this.nextListener);
            this.#btnPrev.removeEventListener('click', this.prevListener);
            this.#paginationListRef.removeEventListener('click', this.itemListener);
            this.handlePagination();
        }
    }
    async nextListenerFunc() {
        let data = [];
        this.#page = Number(this.sessionStorage.propertyValue.page) + 1;
        this.#perPage = this.sessionStorage.propertyValue.perPage;
        this.sessionStorage.propertyValue.page = this.#page;
        this.sessionStorage.setItem();
        const skills = await this.#apiGetItems(this.#perPage, this.#page);
        data = [
            ...skills.data
        ];
        this.#hasNextPage = skills.hasNextPage;
        this.#hasPrevPage = skills.hasPrevPage;
        this.#ItemsListRef.replaceChildren(...await this.#createItemsList(data));
        // TODO: still need somesimg better
        this.#ItemsListRef.parentNode.scrollIntoView({
            behavior: 'smooth'
        });
        this.#btnPrev.removeEventListener('click', this.prevListener);
        this.#paginationListRef.removeEventListener('click', this.itemListener);
        this.#btnNext.removeEventListener('click', this.nextListener);
        this.handlePagination();
    }
    async prevListenerFunc(e) {
        let data = [];
        this.#page = Number(this.sessionStorage.propertyValue.page) - 1;
        this.#perPage = this.sessionStorage.propertyValue.perPage;
        this.sessionStorage.propertyValue.page = this.#page;
        this.sessionStorage.setItem();
        const skills = await this.#apiGetItems(this.#perPage, this.#page);
        data = [
            ...skills.data
        ];
        this.#hasNextPage = skills.hasNextPage;
        this.#hasPrevPage = skills.hasPrevPage;
        this.#ItemsListRef.replaceChildren(...await this.#createItemsList(data));
        // TODO: still need somesimg better
        this.#ItemsListRef.parentNode.scrollIntoView({
            behavior: 'smooth'
        });
        this.#paginationListRef.removeEventListener('click', this.itemListener);
        this.#btnNext.removeEventListener('click', this.nextListener);
        this.#btnPrev.removeEventListener('click', this.prevListener);
        this.handlePagination();
    }
}


const $d03c3069dc0d9dd0$var$sessionStorage = new (0, $954b237d10c1beba$export$2c4b17e1c2e0931)({
    propertyName: 'hardSkills'
});
async function $d03c3069dc0d9dd0$export$894f2874bc7eccda() {
    let perPage;
    let page;
    let data = [];
    let totalPages = 1;
    let hasNextPage = false;
    let hasPrevPage = false;
    if (!$d03c3069dc0d9dd0$var$sessionStorage.propertyValue) {
        perPage = window.matchMedia('(min-width: 768px)').matches ? 9 : 6;
        page = 1;
        $d03c3069dc0d9dd0$var$sessionStorage.propertyValue = {
            perPage: perPage,
            page: page
        };
        $d03c3069dc0d9dd0$var$sessionStorage.setItem();
    } else {
        perPage = $d03c3069dc0d9dd0$var$sessionStorage.propertyValue.perPage;
        page = $d03c3069dc0d9dd0$var$sessionStorage.propertyValue.page;
    }
    ({ data: data, totalPages: totalPages, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage } = await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getHardSkills(perPage, page));
    if (data.length < 1) return;
    (0, $26a6bbb0745c9619$export$1104a4ae1c8bfebe).append(...$d03c3069dc0d9dd0$var$createHardSkillsList(data));
    if (totalPages < 2) return;
    const pagination = new (0, $d7941be0afad2db3$export$56aa485540066c9a)({
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage,
        totalPages: totalPages,
        page: page,
        perPage: perPage,
        paginationRef: (0, $26a6bbb0745c9619$export$12767bb12998a75d),
        sessionStorage: $d03c3069dc0d9dd0$var$sessionStorage,
        apiGetItems: (0, $845eab8850209cc8$export$2e2bcd8739ae039).getHardSkills,
        ItemsListRef: (0, $26a6bbb0745c9619$export$1104a4ae1c8bfebe),
        createItemsList: $d03c3069dc0d9dd0$var$createHardSkillsList
    });
    pagination.handlePagination();
}
function $d03c3069dc0d9dd0$var$createHardSkillsList(data) {
    const list = data.map(({ _id: _id, title: title, image: image })=>{
        const li = document.createElement('li');
        li.setAttribute('class', 'offer-item');
        li.setAttribute('hard-skill-id', _id);
        li.innerHTML = `<div class="hard-skill-card">
  <figure>
    <img src="${image}" alt="${title} icon" />
    <figcaption>${title}</figcaption>
  </figure>
</div>`;
        return li;
    });
    return list;
}



function $c6c76b357c6b7ef6$export$452d89caaeca6fd4() {
    (0, $26a6bbb0745c9619$export$3c0fe33db69d8340).classList.add('close');
}






const $16b9b6f7b91533aa$var$sessionStorage = new (0, $954b237d10c1beba$export$2c4b17e1c2e0931)({
    propertyName: 'portfolio'
});
const $16b9b6f7b91533aa$var$portfolioListRef = (0, $26a6bbb0745c9619$export$f51a5b9bb823e217).querySelector('ul');
const $16b9b6f7b91533aa$var$portfolioPaginationRef = (0, $26a6bbb0745c9619$export$f51a5b9bb823e217).querySelector('#portfolio-pagination');
var $0c2e26fba2beb59a$exports = {};
$0c2e26fba2beb59a$exports = $parcel$resolve("7rxyk");


const $16b9b6f7b91533aa$var$defImgUrl = new URL($0c2e26fba2beb59a$exports);
const $16b9b6f7b91533aa$export$b00a271f69f3d728 = async ()=>{
    let perPage;
    let page;
    let data = [];
    let totalPages = 1;
    let hasNextPage = false;
    let hasPrevPage = false;
    if (!$16b9b6f7b91533aa$var$sessionStorage.propertyValue) {
        perPage = window.matchMedia('(min-width: 768px)').matches ? 6 : 4;
        page = 1;
        $16b9b6f7b91533aa$var$sessionStorage.propertyValue = {
            perPage: perPage,
            page: page
        };
        $16b9b6f7b91533aa$var$sessionStorage.setItem();
    } else {
        perPage = $16b9b6f7b91533aa$var$sessionStorage.propertyValue.perPage;
        page = $16b9b6f7b91533aa$var$sessionStorage.propertyValue.page;
    }
    ({ data: data, totalPages: totalPages, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage } = await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getProjects((0, $26a6bbb0745c9619$export$789c912f57fe164c), perPage, page));
    if (data.length < 1) return;
    $16b9b6f7b91533aa$var$portfolioListRef.replaceChildren(...await $16b9b6f7b91533aa$var$createPortfolioList(data));
    if (totalPages < 2) return;
    const pagination = new (0, $d7941be0afad2db3$export$56aa485540066c9a)({
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage,
        totalPages: totalPages,
        page: page,
        perPage: perPage,
        paginationRef: $16b9b6f7b91533aa$var$portfolioPaginationRef,
        sessionStorage: $16b9b6f7b91533aa$var$sessionStorage,
        apiGetItems: $16b9b6f7b91533aa$var$handleGetProjects((0, $26a6bbb0745c9619$export$789c912f57fe164c)),
        ItemsListRef: $16b9b6f7b91533aa$var$portfolioListRef,
        createItemsList: $16b9b6f7b91533aa$var$createPortfolioList
    });
    pagination.handlePagination();
};
async function $16b9b6f7b91533aa$var$createPortfolioList(data) {
    const list = data.map(async ({ _id: _id, title: title, image: image, description: description, link: link, github: github, technology: technology })=>{
        const skills = await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getHardSkillsByIdList(technology);
        const skillTitles = skills.data.map((skill)=>skill.title);
        const li = document.createElement('li');
        li.setAttribute('class', 'portfolio-list-item');
        li.setAttribute('project-id', _id);
        li.innerHTML = `
     <div> 
     <div class="img-block">
        <img src="${image.url || $16b9b6f7b91533aa$var$defImgUrl}" alt="${image.name} icon" />
      </div>
      <h3>${title || 'project name'}</h3>
      <p>${description || 'description fo project'}</p>
      <p>${skillTitles.join(', ')}</p>
      </div>
      <div class="project-links">
        <a href="${link}" target="_blank">link to project</a>
        <a href="${github}" target="_blank">link to github</a>
      </div>`;
        return li;
    });
    return await Promise.all(list);
}
function $16b9b6f7b91533aa$var$handleGetProjects(lang) {
    return async (perPage, page)=>{
        return await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getProjects(lang, perPage, page);
    };
}




const $caefbc3b2f878a03$export$3eb9aefa484a841 = async ()=>{
    const contactModalFormRef = document.getElementById('contact-modal-form');
    const closeBtn = document.querySelector('[modal-contact-button]');
    contactModalFormRef.addEventListener('submit', (e)=>{
        e.preventDefault();
        // TODO: cheeck if email
        const { name: name, email: email, message: message } = e.target.elements;
        if ($caefbc3b2f878a03$var$valid(email)) return;
        (0, $845eab8850209cc8$export$2e2bcd8739ae039).sendEmail({
            name: name.value,
            email: email.value,
            text: message.value
        });
        closeBtn.click();
        (0, $845eab8850209cc8$export$2e2bcd8739ae039).sendStat((0, $845eab8850209cc8$export$2e2bcd8739ae039).statEnum.sendemail, (0, $26a6bbb0745c9619$export$789c912f57fe164c));
    });
};
function $caefbc3b2f878a03$var$valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}






var $e41c4804638487dc$exports = {};
$e41c4804638487dc$exports = $parcel$resolve("ibJOv");


const $e2b1a55366505731$var$image = new URL($e41c4804638487dc$exports);
const $e2b1a55366505731$var$sessionStorage = new (0, $954b237d10c1beba$export$2c4b17e1c2e0931)({
    propertyName: 'softSkills'
});
async function $e2b1a55366505731$export$4ebc89133cd9a022(language) {
    let perPage;
    let page;
    let data = [];
    let totalPages = 1;
    let hasNextPage = false;
    let hasPrevPage = false;
    if (!$e2b1a55366505731$var$sessionStorage.propertyValue) {
        perPage = 6;
        page = 1;
        $e2b1a55366505731$var$sessionStorage.propertyValue = {
            perPage: perPage,
            page: page
        };
        $e2b1a55366505731$var$sessionStorage.setItem();
    } else {
        perPage = $e2b1a55366505731$var$sessionStorage.propertyValue.perPage;
        page = $e2b1a55366505731$var$sessionStorage.propertyValue.page;
    }
    ({ data: data, totalPages: totalPages, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage } = await $e2b1a55366505731$var$handleGetSoftSkills(language.toUpperCase())(perPage, page));
    if (data.length < 1) return;
    (0, $26a6bbb0745c9619$export$30cbd9dba95d9954).append(...$e2b1a55366505731$var$createSoftSkillsList(data));
    if (totalPages < 2) return;
    const pagination = new (0, $d7941be0afad2db3$export$56aa485540066c9a)({
        hasPrevPage: hasPrevPage,
        hasNextPage: hasNextPage,
        totalPages: totalPages,
        page: page,
        perPage: perPage,
        paginationRef: (0, $26a6bbb0745c9619$export$32f1ed782e6b101a),
        sessionStorage: $e2b1a55366505731$var$sessionStorage,
        apiGetItems: $e2b1a55366505731$var$handleGetSoftSkills(language.toUpperCase()),
        ItemsListRef: (0, $26a6bbb0745c9619$export$30cbd9dba95d9954),
        createItemsList: $e2b1a55366505731$var$createSoftSkillsList
    });
    pagination.handlePagination();
}
function $e2b1a55366505731$var$createSoftSkillsList(data) {
    const items = data.map(({ _id: _id, title: title, text: text })=>{
        const li = document.createElement('li');
        li.setAttribute('class', 'offer-item');
        li.setAttribute('offer-id', _id);
        li.innerHTML = `<div class="skill-card">
    <div class="skill-card-title-icon-container">
    <div class="skill-icon">
    <img src="${$e2b1a55366505731$var$image}" alt="defoult skill logo" />
    </div>
    <h4 class="skill-title">${title}</h4>
    </div>
    <p class="skill-text">
      ${text}
    </p>
  </div>`;
        return li;
    });
    return items;
}
function $e2b1a55366505731$var$handleGetSoftSkills(lang) {
    return async (perPage, page)=>{
        return await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getSoftSkills(lang, perPage, page);
    };
}




(async ()=>{
    const data = await (0, $845eab8850209cc8$export$2e2bcd8739ae039).getInfo();
    (0, $26a6bbb0745c9619$export$cdecc7848fd1f779).setAttribute('src', data.avatar.cut);
    (0, $26a6bbb0745c9619$export$5afa5e5875219111).innerText = data.intro[0, $26a6bbb0745c9619$export$789c912f57fe164c];
    (0, $26a6bbb0745c9619$export$5037fa10c1969cca).innerText = data.about[0, $26a6bbb0745c9619$export$789c912f57fe164c];
    (0, $d2e1e1038a5b4cd3$export$377fc7b78d5fcfc6)(data);
    (0, $e2b1a55366505731$export$4ebc89133cd9a022)((0, $26a6bbb0745c9619$export$789c912f57fe164c));
    (0, $d03c3069dc0d9dd0$export$894f2874bc7eccda)();
    (0, $81e0c7f72e46bddc$export$2dd3d40a27a48d6e)();
    (0, $c6c76b357c6b7ef6$export$452d89caaeca6fd4)();
    (0, $caefbc3b2f878a03$export$3eb9aefa484a841)();
    (0, $16b9b6f7b91533aa$export$b00a271f69f3d728)();
    (0, $845eab8850209cc8$export$2e2bcd8739ae039).sendStat((0, $845eab8850209cc8$export$2e2bcd8739ae039).statEnum.opened, (0, $26a6bbb0745c9619$export$789c912f57fe164c));
})();




//# sourceMappingURL=personal-cv.67428806.js.map
