(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slave", function() { return Slave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccuseReception", function() { return AccuseReception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeEmetteurDestinataire", function() { return TypeEmetteurDestinataire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeChannel", function() { return TypeChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Channel", function() { return Channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMessagePortail", function() { return postMessagePortail; });
class Slave {
}
;
class Message {
    constructor() {
        const u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
        this.guid = [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');
        const d = new Date();
        this.dateEnvoi = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
    }
}
;
class AccuseReception {
    constructor(guid) {
        this.guid = guid;
        this.isAccuse = true;
        const d = new Date();
        this.dateAccuseReception = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
    }
}
;
var TypeEmetteurDestinataire;
(function (TypeEmetteurDestinataire) {
    TypeEmetteurDestinataire["PORTAIL"] = "PORTAIL";
    TypeEmetteurDestinataire["DESMOS"] = "DESMOS";
    TypeEmetteurDestinataire["MEDAPLIX"] = "MEDAPLIX";
})(TypeEmetteurDestinataire || (TypeEmetteurDestinataire = {}));
;
var TypeChannel;
(function (TypeChannel) {
    TypeChannel["MASTER"] = "MASTER";
    TypeChannel["SLAVE"] = "SLAVE";
})(TypeChannel || (TypeChannel = {}));
;
class Channel {
    constructor(type, callback, listSlaveElement) {
        this._type = type;
        if (listSlaveElement) {
            this._slaves = listSlaveElement;
        }
        window.addEventListener('message', (event) => {
            console.log("receive:", event);
            if (event.data.isAccuse) {
                const accuse = event.data;
                console.log(accuse);
            }
            else {
                const msg = event.data;
                if (this._type === msg.destinataire) {
                    //Le message est pour moi j'execute la fonction de callback
                    callback(msg);
                    return;
                }
                else {
                    //Le message n'est pas pour moi
                    //Je le redistribue
                    const slaveDestinataire = this._slaves.find(x => x.type === msg.destinataire);
                    if (slaveDestinataire) {
                        //J'ai bien un esclave qui correspond au destinataire du message
                        //Je lui passe le message
                        if (event.origin !== slaveDestinataire.elementHtmlIframe.src) {
                            console.log('origine du message erreur');
                            console.log('event.origin', event.origin);
                            console.log('slaveDestinataire.elementHtmlIframe.src', slaveDestinataire.elementHtmlIframe.src);
                            return;
                        }
                        console.log('document.referrer', slaveDestinataire.elementHtmlIframe.src);
                        slaveDestinataire.elementHtmlIframe.contentWindow.postMessage(msg, slaveDestinataire.elementHtmlIframe.src /*'*' document.referrer*/);
                        //if (msg.destinataire === TypeEmetteurDestinataire.DESMOS) {
                        //    slaveDestinataire.elementHtmlIframe.contentWindow.postMessage(msg, 'http://localhost:65008'/*'*' document.referrer*/);
                        //} else {
                        //    slaveDestinataire.elementHtmlIframe.contentWindow.postMessage(msg, 'http://localhost:65000' /*'*' document.referrer*/);
                        //}
                    }
                    else {
                        //J'ai pas d'esclave correspondant
                        //TODO je fais quoi
                    }
                }
            }
        }, false);
    }
    get slaves() {
        return this._slaves;
    }
    publish(message) {
        console.log('publish message', message);
        window.top.postMessage(message, document.referrer);
    }
}
;
function postMessagePortail(msg) {
    console.log('postMessagePortail');
    console.log(msg);
    console.log(document.referrer);
    parent.postMessage(msg, document.referrer);
}
;


/***/ })
/******/ ]);
});