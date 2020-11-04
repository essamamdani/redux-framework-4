/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/inc/fields/typography/redux-typography.js":
/*!**************************************************************!*\
  !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof28(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof28=function _typeof28(obj){return typeof obj;};}else{_typeof28=function _typeof28(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof28(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof28(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
  !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
  \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof27(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof27=function _typeof27(obj){return typeof obj;};}else{_typeof27=function _typeof27(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof27(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof27(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof26(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof26=function _typeof26(obj){return typeof obj;};}else{_typeof26=function _typeof26(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof26(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof26(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof25(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof25=function _typeof25(obj){return typeof obj;};}else{_typeof25=function _typeof25(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof25(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof25(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof24(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof24=function _typeof24(obj){return typeof obj;};}else{_typeof24=function _typeof24(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof24(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof24(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof23(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof23=function _typeof23(obj){return typeof obj;};}else{_typeof23=function _typeof23(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof23(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof23(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof22(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof22=function _typeof22(obj){return typeof obj;};}else{_typeof22=function _typeof22(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof22(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof22(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof21(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof21=function _typeof21(obj){return typeof obj;};}else{_typeof21=function _typeof21(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof21(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof21(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof20(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof20=function _typeof20(obj){return typeof obj;};}else{_typeof20=function _typeof20(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof20(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof20(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof19(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof19=function _typeof19(obj){return typeof obj;};}else{_typeof19=function _typeof19(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof19(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof19(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof18(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof18=function _typeof18(obj){return typeof obj;};}else{_typeof18=function _typeof18(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof18(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof18(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof17(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof17=function _typeof17(obj){return typeof obj;};}else{_typeof17=function _typeof17(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof17(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof17(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof16(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof16=function _typeof16(obj){return typeof obj;};}else{_typeof16=function _typeof16(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof16(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof16(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof15(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof15=function _typeof15(obj){return typeof obj;};}else{_typeof15=function _typeof15(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof15(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof15(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof14(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof14=function _typeof14(obj){return typeof obj;};}else{_typeof14=function _typeof14(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof14(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof14(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof13(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof13=function _typeof13(obj){return typeof obj;};}else{_typeof13=function _typeof13(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof13(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof13(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof12(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof12=function _typeof12(obj){return typeof obj;};}else{_typeof12=function _typeof12(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof12(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof12(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof11(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof11=function _typeof11(obj){return typeof obj;};}else{_typeof11=function _typeof11(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof11(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof11(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof10(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof10=function _typeof10(obj){return typeof obj;};}else{_typeof10=function _typeof10(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof10(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof10(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof9(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof9=function _typeof9(obj){return typeof obj;};}else{_typeof9=function _typeof9(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof9(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof9(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof8(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof8=function _typeof8(obj){return typeof obj;};}else{_typeof8=function _typeof8(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof8(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof8(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof7(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof7=function _typeof7(obj){return typeof obj;};}else{_typeof7=function _typeof7(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof7(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof7(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof6(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof6=function _typeof6(obj){return typeof obj;};}else{_typeof6=function _typeof6(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof6(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof6(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof5(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof5=function _typeof5(obj){return typeof obj;};}else{_typeof5=function _typeof5(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof5(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof5(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                            !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                            \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof4(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof4=function _typeof4(obj){return typeof obj;};}else{_typeof4=function _typeof4(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof4(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof4(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                                !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof3(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof3=function _typeof3(obj){return typeof obj;};}else{_typeof3=function _typeof3(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof3(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof3(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                                    !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                    \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof2(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}/******/(function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&_typeof2(value)==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="/";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=42);/******/})(/************************************************************************/ /******/{/***/"./redux-core/inc/fields/typography/redux-typography.js":/*!**************************************************************!*\
                                                                                                        !*** ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                        \**************************************************************/ /*! no static exports found */ /***/function reduxCoreIncFieldsTypographyReduxTypographyJs(module,exports){function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*global redux_change, redux, redux_typography_ajax, WebFont */ /**
                                                                                                         * Typography
                                                                                                         * Dependencies:        google.com, jquery, select2
                                                                                                         * Feature added by:    Dovy Paukstys - http://simplerain.com/
                                                                                                         * Date:                06.14.2013
                                                                                                         *
                                                                                                         * Rewrite:             Kevin Provance (kprovance)
                                                                                                         * Date:                May 25, 2014
                                                                                                         * And again on:        April 4, 2017 for v4.0
                                                                                                         */(function($){'use strict';var selVals=[];var isSelecting=false;var proLoaded=true;redux.field_objects=redux.field_objects||{};redux.field_objects.typography=redux.field_objects.typography||{};redux.field_objects.typography.init=function(selector){selector=$.redux.getSelector(selector,'typography');$(selector).each(function(){var el=$(this);var parent=el;if(!el.hasClass('redux-field-container')){parent=el.parents('.redux-field-container:first');}if(parent.is(':hidden')){return;}if(undefined===redux.field_objects.pro){proLoaded=false;}el.each(function(){// Init each typography field.
$(this).find('.redux-typography-container').each(function(){var el=$(this);var parent=el;var key;var obj;var prop;var fontData;var val;var xx;var reduxTypography;var family=$(this).find('.redux-typography-family');var familyData=family.data('value');var data=[{id:'none',text:'none'}];var thisID=$(this).find('.redux-typography-family').parents('.redux-container-typography:first').data('id');var usingGoogleFonts=$('#'+thisID+' .redux-typography-google').val();// Set up data array.
var buildData=[];var fontKids=[];// User included fonts?
var isUserFonts=$('#'+thisID+' .redux-typography-font-family').data('user-fonts');if(!el.hasClass('redux-field-container')){parent=el.parents('.redux-field-container:first');}if(parent.is(':hidden')){return;}if(parent.hasClass('redux-field-init')){parent.removeClass('redux-field-init');}else{return;}if(undefined===familyData){family=$(this);}else if(''!==familyData){$(family).val(familyData);}isUserFonts=isUserFonts?1:0;// Google font isn use?
usingGoogleFonts=usingGoogleFonts?1:0;// If custom fonts, push onto array.
if(undefined!==redux.customfonts){buildData.push(redux.customfonts);}// If typekit fonts, push onto array.
if(undefined!==redux.typekitfonts){buildData.push(redux.typekitfonts);}// If standard fonts, push onto array.
if(undefined!==redux.stdfonts&&0===isUserFonts){buildData.push(redux.stdfonts);}// If user fonts, pull from localize and push into array.
if(1===isUserFonts){// <option>
for(key in redux.optName.typography[thisID]){if(redux.optName.typography[thisID].hasOwnProperty(key)){obj=redux.optName.typography[thisID].std_font;for(prop in obj){if(obj.hasOwnProperty(prop)){fontKids.push({id:prop,text:prop,'data-google':'false'});}}}}// <optgroup>
fontData={text:'Standard Fonts',children:fontKids};buildData.push(fontData);}// If googfonts on and had data, push into array.
if(1===usingGoogleFonts||true===usingGoogleFonts&&undefined!==redux.googlefonts){buildData.push(redux.googlefonts);}// Output data to drop down.
data=buildData;val=$(this).find('.redux-typography-family').data('value');$(this).find('.redux-typography-family').addClass('ignore-change');$(this).find('.redux-typography-family').select2({data:data});$(this).find('.redux-typography-family').val(val).trigger('change');$(this).find('.redux-typography-family').removeClass('ignore-change');xx=el.find('.redux-typography-family');if(!xx.hasClass('redux-typography-family')){el.find('.redux-typography-style').select2();}$(this).find('.redux-typography-align').select2();$(this).find('.redux-typography-family-backup').select2();$(this).find('.redux-typography-transform').select2();$(this).find('.redux-typography-font-variant').select2();$(this).find('.redux-typography-decoration').select2();$(this).find('.redux-insights-data-we-collect-typography').on('click',function(e){e.preventDefault();$(this).parent().find('.description').toggle();});// Init select2 for indicated fields.
redux.field_objects.typography.select(family,true,false,null,true);// Init when value is changed.
$(this).find('.redux-typography-family, .redux-typography-family-backup, .redux-typography-style, .redux-typography-subsets, .redux-typography-align').on('change',function(val){var getVals;var fontName;var thisID=$(this).attr('id'),that=$('#'+thisID);if($(this).hasClass('redux-typography-family')){if(that.val()){getVals=$(this).select2('data');if(getVals){fontName=getVals[0].text;}else{fontName=null;}that.data('value',fontName);selVals=getVals[0];isSelecting=true;redux.field_objects.typography.select(that,true,false,fontName,true);}}else{val=that.val();that.data('value',val);if($(this).hasClass('redux-typography-align')||$(this).hasClass('redux-typography-subsets')||$(this).hasClass('redux-typography-family-backup')||$(this).hasClass('redux-typography-transform')||$(this).hasClass('redux-typography-font-variant')||$(this).hasClass('redux-typography-decoration')){that.find('option[selected="selected"]').removeAttr('selected');that.find('option[value="'+val+'"]').attr('selected','selected');}if($(this).hasClass('redux-typography-subsets')){that.siblings('.typography-subsets').val(val);}redux.field_objects.typography.select($(this),true,false,null,false);}});// Init when value is changed.
$(this).find('.redux-typography-size, .redux-typography-height, .redux-typography-word, .redux-typography-letter').keyup(function(){redux.field_objects.typography.select($(this).parents('.redux-container-typography:first'));});if(proLoaded){redux.field_objects.pro.typography.fieldChange($(this));redux.field_objects.pro.typography.colorPicker($(this));}// Have to redeclare the wpColorPicker to get a callback function.
$(this).find('.redux-typography-color').wpColorPicker({change:function change(e,ui){e=null;$(this).val(ui.color.toString());redux.field_objects.typography.select($(this).parents('.redux-container-typography:first'));}});// Don't allow negative numbers for size field.
$(this).find('.redux-typography-size').numeric({allowMinus:false});// Allow negative numbers for indicated fields.
$(this).find('.redux-typography-height, .redux-typography-word, .redux-typography-letter').numeric({allowMinus:true});reduxTypography=$(this).find('.redux-typography');reduxTypography.on('select2:unselecting',function(){var thisID;var that;var opts=$(this).data('select2').options;opts.set('disabled',true);setTimeout(function(){opts.set('disabled',false);},1);thisID=$(this).attr('id');that=$('#'+thisID);that.data('value','');if($(this).hasClass('redux-typography-family')){$(this).find('.redux-typography-family').addClass('ignore-change');$(this).val(null).trigger('change');$(this).find('.redux-typography-family').removeClass('ignore-change');redux.field_objects.typography.select(that,true,false,null,true);}else{if($(this).hasClass('redux-typography-align')||$(this).hasClass('redux-typography-subsets')||$(this).hasClass('redux-typography-family-backup')||$(this).hasClass('redux-typography-transform')||$(this).hasClass('redux-typography-font-variant')||$(this).hasClass('redux-typography-decoration')){$('#'+thisID+' option[selected="selected"]').removeAttr('selected');}if($(this).hasClass('redux-typography-subsets')){that.siblings('.typography-subsets').val('');}if($(this).hasClass('redux-typography-family-backup')){$(this).find('.redux-typography-family-backup').addClass('ignore-change');that.val(null).trigger('change');$(this).find('.redux-typography-family-backup').removeClass('ignore-change');}redux.field_objects.typography.select($(this),true,false,null,false);}});redux.field_objects.typography.updates($(this));window.onbeforeunload=null;parent.removeClass('redux-field-init');});});});};redux.field_objects.typography.updates=function(obj){obj.find('.update-google-fonts').bind('click',function(e){var $action=$(this).data('action');var $update_parent=$(this).parent().parent();var $nonce=$update_parent.attr('data-nonce');$update_parent.find('p').text(redux_typography_ajax.update_google_fonts.updating);$update_parent.find('p').attr('aria-label',redux_typography_ajax.update_google_fonts.updating);$update_parent.removeClass('updating-message updated-message notice-success notice-warning notice-error').addClass('update-message notice-warning updating-message');$.ajax({type:'post',dataType:'json',url:redux_typography_ajax.ajaxurl,data:{action:'redux_update_google_fonts',nonce:$nonce,data:$action},error:function error(response){var msg;console.log(response);$update_parent.removeClass('notice-warning updating-message updated-message notice-success').addClass('notice-error');msg=response.error;if(msg){msg=': "'+msg+'"';}$update_parent.find('p').html(redux_typography_ajax.update_google_fonts.error.replace('%s',$action).replace('|msg',msg));$update_parent.find('p').attr('aria-label',redux_typography_ajax.update_google_fonts.error);redux.field_objects.typography.updates(obj);},success:function success(response){var msg;console.log(response);if('success'===response.status){$update_parent.find('p').html(redux_typography_ajax.update_google_fonts.success);$update_parent.find('p').attr('aria-label',redux_typography_ajax.update_google_fonts.success);$update_parent.removeClass('updating-message notice-warning').addClass('updated-message notice-success');$('.redux-update-google-fonts').not('.notice-success').remove();}else{$update_parent.removeClass('notice-warning updating-message updated-message notice-success').addClass('notice-error');msg=response.error;if(msg){msg=': "'+msg+'"';}$update_parent.find('p').html(redux_typography_ajax.update_google_fonts.error.replace('%s',$action).replace('|msg',msg));$update_parent.find('p').attr('aria-label',redux_typography_ajax.update_google_fonts.error);redux.field_objects.typography.updates(obj);}}});e.preventDefault();return false;});};// Return font size.
redux.field_objects.typography.size=function(obj){var size=0;var key;for(key in obj){if(obj.hasOwnProperty(key)){size+=1;}}return size;};// Return proper bool value.
redux.field_objects.typography.makeBool=function(val){if('false'===val||'0'===val||false===val||0===val){return false;}else if('true'===val||'1'===val||true===val||1===val){return true;}};redux.field_objects.typography.contrastColour=function(hexcolour){var r;var b;var g;var res;// Default value is black.
var retVal='#444444';// In case - for some reason - a blank value is passed.
// This should *not* happen.  If a function passing a value
// is canceled, it should pass the current value instead of
// a blank.  This is how the Windows Common Controls do it.  :P .
if(''!==hexcolour){// Replace the hash with a blank.
hexcolour=hexcolour.replace('#','');r=parseInt(hexcolour.substr(0,2),16);g=parseInt(hexcolour.substr(2,2),16);b=parseInt(hexcolour.substr(4,2),16);res=(r*299+g*587+b*114)/1000;// Instead of pure black, I opted to use WP 3.8 black, so it looks uniform.  :) - kp.
retVal=res>=128?'#444444':'#ffffff';}return retVal;};// Sync up font options.
redux.field_objects.typography.select=function(selector,skipCheck,destroy,fontName,active){var mainID;var that;var family;var google;var familyBackup;var size;var height;var word;var letter;var align;var transform;var fontVariant;var decoration;var style;var script;var color;var units;var _linkclass;var the_font;var link;var isPreviewSize;var typekit=false;var details='';var html='<option value=""></option>';var selected='';var allowEmptyLineHeight=false;var default_font_weights={'400':'Normal 400','700':'Bold 700','400italic':'Normal 400 Italic','700italic':'Bold 700 Italic'};// Main id for selected field.
mainID=$(selector).parents('.redux-container-typography:first').data('id');if(undefined===mainID){mainID=$(selector).data('id');}that=$('#'+mainID);family=$('#'+mainID+'-family').val();if(!family){family=null;// 'inherit';
}if(fontName){family=fontName;}familyBackup=that.find('select.redux-typography-family-backup').val();size=that.find('.redux-typography-size').val();height=that.find('.redux-typography-height').val();word=that.find('.redux-typography-word').val();letter=that.find('.redux-typography-letter').val();align=that.find('select.redux-typography-align').val();transform=that.find('select.redux-typography-transform').val();fontVariant=that.find('select.redux-typography-font-variant').val();decoration=that.find('select.redux-typography-decoration').val();style=that.find('select.redux-typography-style').val();script=that.find('select.redux-typography-subsets').val();color=that.find('.redux-typography-color').val();units=that.data('units');// Is selected font a google font?
if(true===isSelecting){google=redux.field_objects.typography.makeBool(selVals['data-google']);that.find('.redux-typography-google-font').val(google);}else{google=redux.field_objects.typography.makeBool(that.find('.redux-typography-google-font').val());// Check if font is a google font.
}if(active){// Page load. Speeds things up memory wise to offload to client.
if(!that.hasClass('typography-initialized')){style=that.find('select.redux-typography-style').data('value');script=that.find('select.redux-typography-subsets').data('value');if(''!==style){style=String(style);}if(undefined!==_typeof(script)){script=String(script);}}// Something went wrong trying to read google fonts, so turn google off.
if(undefined===redux.fonts.google){google=false;}// Get font details.
if(true===google&&family in redux.fonts.google){details=redux.fonts.google[family];}else{if(undefined!==redux.fonts.typekit&&family in redux.fonts.typekit){typekit=true;details=redux.fonts.typekit[family];}else{details=default_font_weights;}}if($(selector).hasClass('redux-typography-subsets')){that.find('input.typography-subsets').val(script);}// If we changed the font.
if($(selector).hasClass('redux-typography-family')){// Google specific stuff.
if(true===google){// STYLES.
$.each(details.variants,function(index,variant){index=null;if(variant.id===style||1===redux.field_objects.typography.size(details.variants)){selected=' selected="selected"';style=variant.id;}else{selected='';}html+='<option value="'+variant.id+'"'+selected+'>'+variant.name.replace(/\+/g,' ')+'</option>';});// Destroy select2.
if(destroy){that.find('.redux-typography-style').select2('destroy');}// Instert new HTML.
that.find('.redux-typography-style').html(html).select2();// SUBSETS.
selected='';html='<option value=""></option>';$.each(details.subsets,function(index,subset){index=null;if(script===subset.id||1===redux.field_objects.typography.size(details.subsets)){selected=' selected="selected"';script=subset.id;that.find('input.typography-subsets').val(script);}else{selected='';}html+='<option value="'+subset.id+'"'+selected+'>'+subset.name.replace(/\+/g,' ')+'</option>';});// Destroy select2.
if(destroy){that.find('.redux-typography-subsets').select2('destroy');}// Inset new HTML.
that.find('.redux-typography-subsets').html(html).select2({width:'100%'});that.find('.redux-typography-subsets').parent().fadeIn('fast');that.find('.typography-family-backup').fadeIn('fast');}else if(true===typekit){$.each(details.variants,function(index,variant){index=null;if(style===variant.id||1===redux.field_objects.typography.size(details.variants)){selected=' selected="selected"';style=variant.id;}else{selected='';}html+='<option value="'+variant.id+'"'+selected+'>'+variant.name.replace(/\+/g,' ')+'</option>';});// Destroy select2.
that.find('.redux-typography-style').select2('destroy');// Instert new HTML.
that.find('.redux-typography-style').html(html).select2();// Prettify things.
that.find('.redux-typography-subsets').parent().fadeOut('fast');that.find('.typography-family-backup').fadeOut('fast');}else{if(that.find('.redux-typography-style')){$.each(default_font_weights,function(index,value){if(style===index||'normal'===index){selected=' selected="selected"';that.find('.typography-style select2-selection__rendered').text(value);}else{selected='';}html+='<option value="'+index+'"'+selected+'>'+value.replace('+',' ')+'</option>';});// Destory select2.
if(destroy){that.find('.redux-typography-style').select2('destroy');}// Insert new HTML.
that.find('.redux-typography-style').html(html).select2();}}that.find('.redux-typography-font-family').val(family);}else if($(selector).hasClass('redux-typography-family-backup')&&''!==familyBackup){that.find('.redux-typography-font-family-backup').val(familyBackup);}else{details=default_font_weights;if(details){$.each(details,function(index,value){if(style===index||'normal'===index){selected=' selected="selected"';that.find('.typography-style select2-selection__rendered').text(value);}else{selected='';}html+='<option value="'+index+'"'+selected+'>'+value.replace('+',' ')+'</option>';});// Destory select2.
if(destroy){that.find('.redux-typography-style').select2('destroy');}// Insert new HTML.
that.find('.redux-typography-style').html(html).select2();// Prettify things.
that.find('.redux-typography-subsets').parent().fadeOut('fast');that.find('.typography-family-backup').fadeOut('fast');}}}if(active){that.find('.redux-typography-style').addClass('ignore-change');// Check if the selected value exists. If not, empty it. Else, apply it.
if(0===that.find('select.redux-typography-style option[value=\''+style+'\']').length){style='';that.find('select.redux-typography-style').val('').trigger('change');}else if('400'===style){that.find('select.redux-typography-style').val(style).trigger('change');}that.find('.redux-typography-style').removeClass('ignore-change');// Handle empty subset select.
if(0===that.find('select.redux-typography-subsets option[value=\''+script+'\']').length){script='';that.find('.redux-typography-style').addClass('ignore-change');that.find('select.redux-typography-subsets').val('').trigger('change');that.find('input.typography-subsets').val(script);that.find('.redux-typography-style').removeClass('ignore-change');}}_linkclass='style_link_'+mainID;// Remove other elements crested in <head>.
$('.'+_linkclass).remove();if(null!==family&&'inherit'!==family&&that.hasClass('typography-initialized')){// Replace spaces with "+" sign.
the_font=family.replace(/\s+/g,'+');if(true===google){// Add reference to google font family.
link=the_font;if(style&&''!==style){link+=':'+style.replace(/\-/g,' ');}if(script&&''!==script){link+='&subset='+script;}if(false===isSelecting){if('undefined'!==typeof WebFont&&WebFont){WebFont.load({google:{families:[link]}});}}that.find('.redux-typography-google').val(true);}else{that.find('.redux-typography-google').val(false);}}// Weight and italic.
if(style&&-1!==style.indexOf('italic')){that.find('.typography-preview').css('font-style','italic');that.find('.typography-font-style').val('italic');style=style.replace('italic','');}else{that.find('.typography-preview').css('font-style','normal');that.find('.typography-font-style').val('');}that.find('.typography-font-weight').val(style);allowEmptyLineHeight=Boolean(that.find('.redux-typography-height').data('allow-empty'));if(!allowEmptyLineHeight){if(!height){height=size;}}if(''===size||undefined===size){that.find('.typography-font-size').val('');}else{that.find('.typography-font-size').val(size+units);}if(''===height||undefined===height){that.find('.typography-line-height').val('');}else{that.find('.typography-line-height').val(height+units);}if(''===word||undefined===word){that.find('.typography-word-spacing').val('');}else{that.find('.typography-word-spacing').val(word+units);}if(''===letter||undefined===letter){that.find('.typography-letter-spacing').val('');}else{that.find('.typography-letter-spacing').val(letter+units);}if(proLoaded){redux.field_objects.pro.typography.select(mainID);}// Show more preview stuff.
if(that.hasClass('typography-initialized')){isPreviewSize=that.find('.typography-preview').data('preview-size');if(0===isPreviewSize){that.find('.typography-preview').css('font-size',size+units);}that.find('.typography-preview').css({'font-weight':style,'text-align':align,'font-family':family+', sans-serif'});if('none'===family&&''===family){// If selected is not a font remove style 'font-family' at preview box.
that.find('.typography-preview').css('font-family','inherit');}that.find('.typography-preview').css({'line-height':height+units,'word-spacing':word+units,'letter-spacing':letter+units});if(color){that.find('.typography-preview').css('color',color);}if(proLoaded){redux.field_objects.typography.previewShadow(mainID);}that.find('.typography-style select2-selection__rendered').text(that.find('.redux-typography-style option:selected').text());that.find('.typography-script select2-selection__rendered').text(that.find('.redux-typography-subsets option:selected').text());if(align){that.find('.typography-preview').css('text-align',align);}if(transform){that.find('.typography-preview').css('text-transform',transform);}if(fontVariant){that.find('.typography-preview').css('font-variant',fontVariant);}if(decoration){that.find('.typography-preview').css('text-decoration',decoration);}that.find('.typography-preview').slideDown();}// End preview stuff.
// If not preview showing, then set preview to show.
if(!that.hasClass('typography-initialized')){that.addClass('typography-initialized');}isSelecting=false;if(!skipCheck){redux_change(selector);}};})(jQuery);/***/},/***/42:/*!********************************************************************!*\
                                                                                                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
                !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
                \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
            !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
            \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
        !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
        \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
    !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
    \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});/***/},/***/42:/*!********************************************************************!*\
  !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
  \********************************************************************/ /*! no static exports found */ /***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");/***/}/******/});

/***/ }),

/***/ 42:
/*!********************************************************************!*\
  !*** multi ./redux-core/inc/fields/typography/redux-typography.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\typography\redux-typography.js */"./redux-core/inc/fields/typography/redux-typography.js");


/***/ })

/******/ });