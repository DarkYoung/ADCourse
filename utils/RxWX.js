"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o.default=e,o}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_Rx=require("./Rx"),Rx=_interopRequireWildcard(_Rx),ob={Rx:{},fromEvent:function(e,o){var n=new Rx.Subject;return e[o]=function(e){n.next(e)},n}};for(var p in Rx)ob.Rx[p]=Rx[p];var cbObj2Obs=function(e,o,n){return Rx.Observable.create(function(n){if("object"===(void 0===e?"undefined":_typeof(e))||void 0===e){var t=Object.assign({},e),r=new Promise(function(e,o){t.success=function(){e.apply(void 0,arguments)},t.fail=function(e){return o(e)}}),c=o.call(null,t)||{};r.then(function(e){n.next(Object.assign(c,e)),n.complete()},function(e){n.error(e,c),n.complete()})}else n.next(o.call(null,e))})},_loop=function(e){switch(_typeof(wx[e])){case"object":ob[e]=Object.assign(wx[e]);break;case"function":/Sync$/.test(e)?ob[e]=function(){for(var o,n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return Rx.Observable.of((o=wx[e]).call.apply(o,[null].concat(t)))}:ob[e]=function(o){return cbObj2Obs(o,wx[e])};break;default:ob[e]=wx[e]}};for(var _p in wx)_loop(_p);module.exports=ob;