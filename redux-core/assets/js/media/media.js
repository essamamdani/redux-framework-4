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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/assets/js/media/media.js":
/*!*********************************************!*\
  !*** ./redux-core/assets/js/media/media.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof26(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof26 = function _typeof26(obj) { return typeof obj; }; } else { _typeof26 = function _typeof26(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof26(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof26(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 43);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./redux-core/assets/js/media/media.js":
  /*!*********************************************!*\
    !*** ./redux-core/assets/js/media/media.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
    function _typeof25(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof25 = function _typeof25(obj) {
          return typeof obj;
        };
      } else {
        _typeof25 = function _typeof25(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof25(obj);
    }
    /******/


    (function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof25(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 43);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./redux-core/assets/js/media/media.js":
      /*!*********************************************!*\
        !*** ./redux-core/assets/js/media/media.js ***!
        \*********************************************/

      /*! no static exports found */

      /***/
      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
        function _typeof24(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof24 = function _typeof24(obj) {
              return typeof obj;
            };
          } else {
            _typeof24 = function _typeof24(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof24(obj);
        }
        /******/


        (function (modules) {
          // webpackBootstrap

          /******/
          // The module cache

          /******/
          var installedModules = {};
          /******/

          /******/
          // The require function

          /******/

          function __webpack_require__(moduleId) {
            /******/

            /******/
            // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {
              /******/
              return installedModules[moduleId].exports;
              /******/
            }
            /******/
            // Create a new module (and put it into the cache)

            /******/


            var module = installedModules[moduleId] = {
              /******/
              i: moduleId,

              /******/
              l: false,

              /******/
              exports: {}
              /******/

            };
            /******/

            /******/
            // Execute the module function

            /******/

            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/

            /******/
            // Flag the module as loaded

            /******/

            module.l = true;
            /******/

            /******/
            // Return the exports of the module

            /******/

            return module.exports;
            /******/
          }
          /******/

          /******/

          /******/
          // expose the modules object (__webpack_modules__)

          /******/


          __webpack_require__.m = modules;
          /******/

          /******/
          // expose the module cache

          /******/

          __webpack_require__.c = installedModules;
          /******/

          /******/
          // define getter function for harmony exports

          /******/

          __webpack_require__.d = function (exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
              /******/
              Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
              });
              /******/
            }
            /******/

          };
          /******/

          /******/
          // define __esModule on exports

          /******/


          __webpack_require__.r = function (exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
              /******/
              Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
              });
              /******/
            }
            /******/


            Object.defineProperty(exports, '__esModule', {
              value: true
            });
            /******/
          };
          /******/

          /******/
          // create a fake namespace object

          /******/
          // mode & 1: value is a module id, require it

          /******/
          // mode & 2: merge all properties of value into the ns

          /******/
          // mode & 4: return value when already ns object

          /******/
          // mode & 8|1: behave like require

          /******/


          __webpack_require__.t = function (value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/

            if (mode & 8) return value;
            /******/

            if (mode & 4 && _typeof24(value) === 'object' && value && value.__esModule) return value;
            /******/

            var ns = Object.create(null);
            /******/

            __webpack_require__.r(ns);
            /******/


            Object.defineProperty(ns, 'default', {
              enumerable: true,
              value: value
            });
            /******/

            if (mode & 2 && typeof value != 'string') for (var key in value) {
              __webpack_require__.d(ns, key, function (key) {
                return value[key];
              }.bind(null, key));
            }
            /******/

            return ns;
            /******/
          };
          /******/

          /******/
          // getDefaultExport function for compatibility with non-harmony modules

          /******/


          __webpack_require__.n = function (module) {
            /******/
            var getter = module && module.__esModule ?
            /******/
            function getDefault() {
              return module['default'];
            } :
            /******/
            function getModuleExports() {
              return module;
            };
            /******/

            __webpack_require__.d(getter, 'a', getter);
            /******/


            return getter;
            /******/
          };
          /******/

          /******/
          // Object.prototype.hasOwnProperty.call

          /******/


          __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          /******/

          /******/
          // __webpack_public_path__

          /******/


          __webpack_require__.p = "/";
          /******/

          /******/

          /******/
          // Load entry module and return exports

          /******/

          return __webpack_require__(__webpack_require__.s = 43);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./redux-core/assets/js/media/media.js":
          /*!*********************************************!*\
            !*** ./redux-core/assets/js/media/media.js ***!
            \*********************************************/

          /*! no static exports found */

          /***/
          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
            function _typeof23(obj) {
              "@babel/helpers - typeof";

              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _typeof23 = function _typeof23(obj) {
                  return typeof obj;
                };
              } else {
                _typeof23 = function _typeof23(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
              }

              return _typeof23(obj);
            }
            /******/


            (function (modules) {
              // webpackBootstrap

              /******/
              // The module cache

              /******/
              var installedModules = {};
              /******/

              /******/
              // The require function

              /******/

              function __webpack_require__(moduleId) {
                /******/

                /******/
                // Check if module is in cache

                /******/
                if (installedModules[moduleId]) {
                  /******/
                  return installedModules[moduleId].exports;
                  /******/
                }
                /******/
                // Create a new module (and put it into the cache)

                /******/


                var module = installedModules[moduleId] = {
                  /******/
                  i: moduleId,

                  /******/
                  l: false,

                  /******/
                  exports: {}
                  /******/

                };
                /******/

                /******/
                // Execute the module function

                /******/

                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/

                /******/
                // Flag the module as loaded

                /******/

                module.l = true;
                /******/

                /******/
                // Return the exports of the module

                /******/

                return module.exports;
                /******/
              }
              /******/

              /******/

              /******/
              // expose the modules object (__webpack_modules__)

              /******/


              __webpack_require__.m = modules;
              /******/

              /******/
              // expose the module cache

              /******/

              __webpack_require__.c = installedModules;
              /******/

              /******/
              // define getter function for harmony exports

              /******/

              __webpack_require__.d = function (exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                  /******/
                  Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                  });
                  /******/
                }
                /******/

              };
              /******/

              /******/
              // define __esModule on exports

              /******/


              __webpack_require__.r = function (exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                  /******/
                  Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                  });
                  /******/
                }
                /******/


                Object.defineProperty(exports, '__esModule', {
                  value: true
                });
                /******/
              };
              /******/

              /******/
              // create a fake namespace object

              /******/
              // mode & 1: value is a module id, require it

              /******/
              // mode & 2: merge all properties of value into the ns

              /******/
              // mode & 4: return value when already ns object

              /******/
              // mode & 8|1: behave like require

              /******/


              __webpack_require__.t = function (value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/

                if (mode & 8) return value;
                /******/

                if (mode & 4 && _typeof23(value) === 'object' && value && value.__esModule) return value;
                /******/

                var ns = Object.create(null);
                /******/

                __webpack_require__.r(ns);
                /******/


                Object.defineProperty(ns, 'default', {
                  enumerable: true,
                  value: value
                });
                /******/

                if (mode & 2 && typeof value != 'string') for (var key in value) {
                  __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                  }.bind(null, key));
                }
                /******/

                return ns;
                /******/
              };
              /******/

              /******/
              // getDefaultExport function for compatibility with non-harmony modules

              /******/


              __webpack_require__.n = function (module) {
                /******/
                var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                  return module['default'];
                } :
                /******/
                function getModuleExports() {
                  return module;
                };
                /******/

                __webpack_require__.d(getter, 'a', getter);
                /******/


                return getter;
                /******/
              };
              /******/

              /******/
              // Object.prototype.hasOwnProperty.call

              /******/


              __webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
              };
              /******/

              /******/
              // __webpack_public_path__

              /******/


              __webpack_require__.p = "/";
              /******/

              /******/

              /******/
              // Load entry module and return exports

              /******/

              return __webpack_require__(__webpack_require__.s = 43);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./redux-core/assets/js/media/media.js":
              /*!*********************************************!*\
                !*** ./redux-core/assets/js/media/media.js ***!
                \*********************************************/

              /*! no static exports found */

              /***/
              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                function _typeof22(obj) {
                  "@babel/helpers - typeof";

                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof22 = function _typeof22(obj) {
                      return typeof obj;
                    };
                  } else {
                    _typeof22 = function _typeof22(obj) {
                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                  }

                  return _typeof22(obj);
                }
                /******/


                (function (modules) {
                  // webpackBootstrap

                  /******/
                  // The module cache

                  /******/
                  var installedModules = {};
                  /******/

                  /******/
                  // The require function

                  /******/

                  function __webpack_require__(moduleId) {
                    /******/

                    /******/
                    // Check if module is in cache

                    /******/
                    if (installedModules[moduleId]) {
                      /******/
                      return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/
                    // Create a new module (and put it into the cache)

                    /******/


                    var module = installedModules[moduleId] = {
                      /******/
                      i: moduleId,

                      /******/
                      l: false,

                      /******/
                      exports: {}
                      /******/

                    };
                    /******/

                    /******/
                    // Execute the module function

                    /******/

                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/

                    /******/
                    // Flag the module as loaded

                    /******/

                    module.l = true;
                    /******/

                    /******/
                    // Return the exports of the module

                    /******/

                    return module.exports;
                    /******/
                  }
                  /******/

                  /******/

                  /******/
                  // expose the modules object (__webpack_modules__)

                  /******/


                  __webpack_require__.m = modules;
                  /******/

                  /******/
                  // expose the module cache

                  /******/

                  __webpack_require__.c = installedModules;
                  /******/

                  /******/
                  // define getter function for harmony exports

                  /******/

                  __webpack_require__.d = function (exports, name, getter) {
                    /******/
                    if (!__webpack_require__.o(exports, name)) {
                      /******/
                      Object.defineProperty(exports, name, {
                        enumerable: true,
                        get: getter
                      });
                      /******/
                    }
                    /******/

                  };
                  /******/

                  /******/
                  // define __esModule on exports

                  /******/


                  __webpack_require__.r = function (exports) {
                    /******/
                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                      /******/
                      Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                      });
                      /******/
                    }
                    /******/


                    Object.defineProperty(exports, '__esModule', {
                      value: true
                    });
                    /******/
                  };
                  /******/

                  /******/
                  // create a fake namespace object

                  /******/
                  // mode & 1: value is a module id, require it

                  /******/
                  // mode & 2: merge all properties of value into the ns

                  /******/
                  // mode & 4: return value when already ns object

                  /******/
                  // mode & 8|1: behave like require

                  /******/


                  __webpack_require__.t = function (value, mode) {
                    /******/
                    if (mode & 1) value = __webpack_require__(value);
                    /******/

                    if (mode & 8) return value;
                    /******/

                    if (mode & 4 && _typeof22(value) === 'object' && value && value.__esModule) return value;
                    /******/

                    var ns = Object.create(null);
                    /******/

                    __webpack_require__.r(ns);
                    /******/


                    Object.defineProperty(ns, 'default', {
                      enumerable: true,
                      value: value
                    });
                    /******/

                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                      __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                      }.bind(null, key));
                    }
                    /******/

                    return ns;
                    /******/
                  };
                  /******/

                  /******/
                  // getDefaultExport function for compatibility with non-harmony modules

                  /******/


                  __webpack_require__.n = function (module) {
                    /******/
                    var getter = module && module.__esModule ?
                    /******/
                    function getDefault() {
                      return module['default'];
                    } :
                    /******/
                    function getModuleExports() {
                      return module;
                    };
                    /******/

                    __webpack_require__.d(getter, 'a', getter);
                    /******/


                    return getter;
                    /******/
                  };
                  /******/

                  /******/
                  // Object.prototype.hasOwnProperty.call

                  /******/


                  __webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/

                  /******/
                  // __webpack_public_path__

                  /******/


                  __webpack_require__.p = "/";
                  /******/

                  /******/

                  /******/
                  // Load entry module and return exports

                  /******/

                  return __webpack_require__(__webpack_require__.s = 43);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./redux-core/assets/js/media/media.js":
                  /*!*********************************************!*\
                    !*** ./redux-core/assets/js/media/media.js ***!
                    \*********************************************/

                  /*! no static exports found */

                  /***/
                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                    function _typeof21(obj) {
                      "@babel/helpers - typeof";

                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof21 = function _typeof21(obj) {
                          return typeof obj;
                        };
                      } else {
                        _typeof21 = function _typeof21(obj) {
                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                      }

                      return _typeof21(obj);
                    }
                    /******/


                    (function (modules) {
                      // webpackBootstrap

                      /******/
                      // The module cache

                      /******/
                      var installedModules = {};
                      /******/

                      /******/
                      // The require function

                      /******/

                      function __webpack_require__(moduleId) {
                        /******/

                        /******/
                        // Check if module is in cache

                        /******/
                        if (installedModules[moduleId]) {
                          /******/
                          return installedModules[moduleId].exports;
                          /******/
                        }
                        /******/
                        // Create a new module (and put it into the cache)

                        /******/


                        var module = installedModules[moduleId] = {
                          /******/
                          i: moduleId,

                          /******/
                          l: false,

                          /******/
                          exports: {}
                          /******/

                        };
                        /******/

                        /******/
                        // Execute the module function

                        /******/

                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        /******/

                        /******/
                        // Flag the module as loaded

                        /******/

                        module.l = true;
                        /******/

                        /******/
                        // Return the exports of the module

                        /******/

                        return module.exports;
                        /******/
                      }
                      /******/

                      /******/

                      /******/
                      // expose the modules object (__webpack_modules__)

                      /******/


                      __webpack_require__.m = modules;
                      /******/

                      /******/
                      // expose the module cache

                      /******/

                      __webpack_require__.c = installedModules;
                      /******/

                      /******/
                      // define getter function for harmony exports

                      /******/

                      __webpack_require__.d = function (exports, name, getter) {
                        /******/
                        if (!__webpack_require__.o(exports, name)) {
                          /******/
                          Object.defineProperty(exports, name, {
                            enumerable: true,
                            get: getter
                          });
                          /******/
                        }
                        /******/

                      };
                      /******/

                      /******/
                      // define __esModule on exports

                      /******/


                      __webpack_require__.r = function (exports) {
                        /******/
                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                          /******/
                          Object.defineProperty(exports, Symbol.toStringTag, {
                            value: 'Module'
                          });
                          /******/
                        }
                        /******/


                        Object.defineProperty(exports, '__esModule', {
                          value: true
                        });
                        /******/
                      };
                      /******/

                      /******/
                      // create a fake namespace object

                      /******/
                      // mode & 1: value is a module id, require it

                      /******/
                      // mode & 2: merge all properties of value into the ns

                      /******/
                      // mode & 4: return value when already ns object

                      /******/
                      // mode & 8|1: behave like require

                      /******/


                      __webpack_require__.t = function (value, mode) {
                        /******/
                        if (mode & 1) value = __webpack_require__(value);
                        /******/

                        if (mode & 8) return value;
                        /******/

                        if (mode & 4 && _typeof21(value) === 'object' && value && value.__esModule) return value;
                        /******/

                        var ns = Object.create(null);
                        /******/

                        __webpack_require__.r(ns);
                        /******/


                        Object.defineProperty(ns, 'default', {
                          enumerable: true,
                          value: value
                        });
                        /******/

                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                          __webpack_require__.d(ns, key, function (key) {
                            return value[key];
                          }.bind(null, key));
                        }
                        /******/

                        return ns;
                        /******/
                      };
                      /******/

                      /******/
                      // getDefaultExport function for compatibility with non-harmony modules

                      /******/


                      __webpack_require__.n = function (module) {
                        /******/
                        var getter = module && module.__esModule ?
                        /******/
                        function getDefault() {
                          return module['default'];
                        } :
                        /******/
                        function getModuleExports() {
                          return module;
                        };
                        /******/

                        __webpack_require__.d(getter, 'a', getter);
                        /******/


                        return getter;
                        /******/
                      };
                      /******/

                      /******/
                      // Object.prototype.hasOwnProperty.call

                      /******/


                      __webpack_require__.o = function (object, property) {
                        return Object.prototype.hasOwnProperty.call(object, property);
                      };
                      /******/

                      /******/
                      // __webpack_public_path__

                      /******/


                      __webpack_require__.p = "/";
                      /******/

                      /******/

                      /******/
                      // Load entry module and return exports

                      /******/

                      return __webpack_require__(__webpack_require__.s = 43);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./redux-core/assets/js/media/media.js":
                      /*!*********************************************!*\
                        !*** ./redux-core/assets/js/media/media.js ***!
                        \*********************************************/

                      /*! no static exports found */

                      /***/
                      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                        function _typeof20(obj) {
                          "@babel/helpers - typeof";

                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof20 = function _typeof20(obj) {
                              return typeof obj;
                            };
                          } else {
                            _typeof20 = function _typeof20(obj) {
                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                          }

                          return _typeof20(obj);
                        }
                        /******/


                        (function (modules) {
                          // webpackBootstrap

                          /******/
                          // The module cache

                          /******/
                          var installedModules = {};
                          /******/

                          /******/
                          // The require function

                          /******/

                          function __webpack_require__(moduleId) {
                            /******/

                            /******/
                            // Check if module is in cache

                            /******/
                            if (installedModules[moduleId]) {
                              /******/
                              return installedModules[moduleId].exports;
                              /******/
                            }
                            /******/
                            // Create a new module (and put it into the cache)

                            /******/


                            var module = installedModules[moduleId] = {
                              /******/
                              i: moduleId,

                              /******/
                              l: false,

                              /******/
                              exports: {}
                              /******/

                            };
                            /******/

                            /******/
                            // Execute the module function

                            /******/

                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                            /******/

                            /******/
                            // Flag the module as loaded

                            /******/

                            module.l = true;
                            /******/

                            /******/
                            // Return the exports of the module

                            /******/

                            return module.exports;
                            /******/
                          }
                          /******/

                          /******/

                          /******/
                          // expose the modules object (__webpack_modules__)

                          /******/


                          __webpack_require__.m = modules;
                          /******/

                          /******/
                          // expose the module cache

                          /******/

                          __webpack_require__.c = installedModules;
                          /******/

                          /******/
                          // define getter function for harmony exports

                          /******/

                          __webpack_require__.d = function (exports, name, getter) {
                            /******/
                            if (!__webpack_require__.o(exports, name)) {
                              /******/
                              Object.defineProperty(exports, name, {
                                enumerable: true,
                                get: getter
                              });
                              /******/
                            }
                            /******/

                          };
                          /******/

                          /******/
                          // define __esModule on exports

                          /******/


                          __webpack_require__.r = function (exports) {
                            /******/
                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                              /******/
                              Object.defineProperty(exports, Symbol.toStringTag, {
                                value: 'Module'
                              });
                              /******/
                            }
                            /******/


                            Object.defineProperty(exports, '__esModule', {
                              value: true
                            });
                            /******/
                          };
                          /******/

                          /******/
                          // create a fake namespace object

                          /******/
                          // mode & 1: value is a module id, require it

                          /******/
                          // mode & 2: merge all properties of value into the ns

                          /******/
                          // mode & 4: return value when already ns object

                          /******/
                          // mode & 8|1: behave like require

                          /******/


                          __webpack_require__.t = function (value, mode) {
                            /******/
                            if (mode & 1) value = __webpack_require__(value);
                            /******/

                            if (mode & 8) return value;
                            /******/

                            if (mode & 4 && _typeof20(value) === 'object' && value && value.__esModule) return value;
                            /******/

                            var ns = Object.create(null);
                            /******/

                            __webpack_require__.r(ns);
                            /******/


                            Object.defineProperty(ns, 'default', {
                              enumerable: true,
                              value: value
                            });
                            /******/

                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                              __webpack_require__.d(ns, key, function (key) {
                                return value[key];
                              }.bind(null, key));
                            }
                            /******/

                            return ns;
                            /******/
                          };
                          /******/

                          /******/
                          // getDefaultExport function for compatibility with non-harmony modules

                          /******/


                          __webpack_require__.n = function (module) {
                            /******/
                            var getter = module && module.__esModule ?
                            /******/
                            function getDefault() {
                              return module['default'];
                            } :
                            /******/
                            function getModuleExports() {
                              return module;
                            };
                            /******/

                            __webpack_require__.d(getter, 'a', getter);
                            /******/


                            return getter;
                            /******/
                          };
                          /******/

                          /******/
                          // Object.prototype.hasOwnProperty.call

                          /******/


                          __webpack_require__.o = function (object, property) {
                            return Object.prototype.hasOwnProperty.call(object, property);
                          };
                          /******/

                          /******/
                          // __webpack_public_path__

                          /******/


                          __webpack_require__.p = "/";
                          /******/

                          /******/

                          /******/
                          // Load entry module and return exports

                          /******/

                          return __webpack_require__(__webpack_require__.s = 43);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./redux-core/assets/js/media/media.js":
                          /*!*********************************************!*\
                            !*** ./redux-core/assets/js/media/media.js ***!
                            \*********************************************/

                          /*! no static exports found */

                          /***/
                          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                            function _typeof19(obj) {
                              "@babel/helpers - typeof";

                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                _typeof19 = function _typeof19(obj) {
                                  return typeof obj;
                                };
                              } else {
                                _typeof19 = function _typeof19(obj) {
                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                };
                              }

                              return _typeof19(obj);
                            }
                            /******/


                            (function (modules) {
                              // webpackBootstrap

                              /******/
                              // The module cache

                              /******/
                              var installedModules = {};
                              /******/

                              /******/
                              // The require function

                              /******/

                              function __webpack_require__(moduleId) {
                                /******/

                                /******/
                                // Check if module is in cache

                                /******/
                                if (installedModules[moduleId]) {
                                  /******/
                                  return installedModules[moduleId].exports;
                                  /******/
                                }
                                /******/
                                // Create a new module (and put it into the cache)

                                /******/


                                var module = installedModules[moduleId] = {
                                  /******/
                                  i: moduleId,

                                  /******/
                                  l: false,

                                  /******/
                                  exports: {}
                                  /******/

                                };
                                /******/

                                /******/
                                // Execute the module function

                                /******/

                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                /******/

                                /******/
                                // Flag the module as loaded

                                /******/

                                module.l = true;
                                /******/

                                /******/
                                // Return the exports of the module

                                /******/

                                return module.exports;
                                /******/
                              }
                              /******/

                              /******/

                              /******/
                              // expose the modules object (__webpack_modules__)

                              /******/


                              __webpack_require__.m = modules;
                              /******/

                              /******/
                              // expose the module cache

                              /******/

                              __webpack_require__.c = installedModules;
                              /******/

                              /******/
                              // define getter function for harmony exports

                              /******/

                              __webpack_require__.d = function (exports, name, getter) {
                                /******/
                                if (!__webpack_require__.o(exports, name)) {
                                  /******/
                                  Object.defineProperty(exports, name, {
                                    enumerable: true,
                                    get: getter
                                  });
                                  /******/
                                }
                                /******/

                              };
                              /******/

                              /******/
                              // define __esModule on exports

                              /******/


                              __webpack_require__.r = function (exports) {
                                /******/
                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                  /******/
                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                    value: 'Module'
                                  });
                                  /******/
                                }
                                /******/


                                Object.defineProperty(exports, '__esModule', {
                                  value: true
                                });
                                /******/
                              };
                              /******/

                              /******/
                              // create a fake namespace object

                              /******/
                              // mode & 1: value is a module id, require it

                              /******/
                              // mode & 2: merge all properties of value into the ns

                              /******/
                              // mode & 4: return value when already ns object

                              /******/
                              // mode & 8|1: behave like require

                              /******/


                              __webpack_require__.t = function (value, mode) {
                                /******/
                                if (mode & 1) value = __webpack_require__(value);
                                /******/

                                if (mode & 8) return value;
                                /******/

                                if (mode & 4 && _typeof19(value) === 'object' && value && value.__esModule) return value;
                                /******/

                                var ns = Object.create(null);
                                /******/

                                __webpack_require__.r(ns);
                                /******/


                                Object.defineProperty(ns, 'default', {
                                  enumerable: true,
                                  value: value
                                });
                                /******/

                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                  __webpack_require__.d(ns, key, function (key) {
                                    return value[key];
                                  }.bind(null, key));
                                }
                                /******/

                                return ns;
                                /******/
                              };
                              /******/

                              /******/
                              // getDefaultExport function for compatibility with non-harmony modules

                              /******/


                              __webpack_require__.n = function (module) {
                                /******/
                                var getter = module && module.__esModule ?
                                /******/
                                function getDefault() {
                                  return module['default'];
                                } :
                                /******/
                                function getModuleExports() {
                                  return module;
                                };
                                /******/

                                __webpack_require__.d(getter, 'a', getter);
                                /******/


                                return getter;
                                /******/
                              };
                              /******/

                              /******/
                              // Object.prototype.hasOwnProperty.call

                              /******/


                              __webpack_require__.o = function (object, property) {
                                return Object.prototype.hasOwnProperty.call(object, property);
                              };
                              /******/

                              /******/
                              // __webpack_public_path__

                              /******/


                              __webpack_require__.p = "/";
                              /******/

                              /******/

                              /******/
                              // Load entry module and return exports

                              /******/

                              return __webpack_require__(__webpack_require__.s = 43);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./redux-core/assets/js/media/media.js":
                              /*!*********************************************!*\
                                !*** ./redux-core/assets/js/media/media.js ***!
                                \*********************************************/

                              /*! no static exports found */

                              /***/
                              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                function _typeof18(obj) {
                                  "@babel/helpers - typeof";

                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                    _typeof18 = function _typeof18(obj) {
                                      return typeof obj;
                                    };
                                  } else {
                                    _typeof18 = function _typeof18(obj) {
                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                  }

                                  return _typeof18(obj);
                                }
                                /******/


                                (function (modules) {
                                  // webpackBootstrap

                                  /******/
                                  // The module cache

                                  /******/
                                  var installedModules = {};
                                  /******/

                                  /******/
                                  // The require function

                                  /******/

                                  function __webpack_require__(moduleId) {
                                    /******/

                                    /******/
                                    // Check if module is in cache

                                    /******/
                                    if (installedModules[moduleId]) {
                                      /******/
                                      return installedModules[moduleId].exports;
                                      /******/
                                    }
                                    /******/
                                    // Create a new module (and put it into the cache)

                                    /******/


                                    var module = installedModules[moduleId] = {
                                      /******/
                                      i: moduleId,

                                      /******/
                                      l: false,

                                      /******/
                                      exports: {}
                                      /******/

                                    };
                                    /******/

                                    /******/
                                    // Execute the module function

                                    /******/

                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                    /******/

                                    /******/
                                    // Flag the module as loaded

                                    /******/

                                    module.l = true;
                                    /******/

                                    /******/
                                    // Return the exports of the module

                                    /******/

                                    return module.exports;
                                    /******/
                                  }
                                  /******/

                                  /******/

                                  /******/
                                  // expose the modules object (__webpack_modules__)

                                  /******/


                                  __webpack_require__.m = modules;
                                  /******/

                                  /******/
                                  // expose the module cache

                                  /******/

                                  __webpack_require__.c = installedModules;
                                  /******/

                                  /******/
                                  // define getter function for harmony exports

                                  /******/

                                  __webpack_require__.d = function (exports, name, getter) {
                                    /******/
                                    if (!__webpack_require__.o(exports, name)) {
                                      /******/
                                      Object.defineProperty(exports, name, {
                                        enumerable: true,
                                        get: getter
                                      });
                                      /******/
                                    }
                                    /******/

                                  };
                                  /******/

                                  /******/
                                  // define __esModule on exports

                                  /******/


                                  __webpack_require__.r = function (exports) {
                                    /******/
                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                      /******/
                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                        value: 'Module'
                                      });
                                      /******/
                                    }
                                    /******/


                                    Object.defineProperty(exports, '__esModule', {
                                      value: true
                                    });
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // create a fake namespace object

                                  /******/
                                  // mode & 1: value is a module id, require it

                                  /******/
                                  // mode & 2: merge all properties of value into the ns

                                  /******/
                                  // mode & 4: return value when already ns object

                                  /******/
                                  // mode & 8|1: behave like require

                                  /******/


                                  __webpack_require__.t = function (value, mode) {
                                    /******/
                                    if (mode & 1) value = __webpack_require__(value);
                                    /******/

                                    if (mode & 8) return value;
                                    /******/

                                    if (mode & 4 && _typeof18(value) === 'object' && value && value.__esModule) return value;
                                    /******/

                                    var ns = Object.create(null);
                                    /******/

                                    __webpack_require__.r(ns);
                                    /******/


                                    Object.defineProperty(ns, 'default', {
                                      enumerable: true,
                                      value: value
                                    });
                                    /******/

                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                      __webpack_require__.d(ns, key, function (key) {
                                        return value[key];
                                      }.bind(null, key));
                                    }
                                    /******/

                                    return ns;
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // getDefaultExport function for compatibility with non-harmony modules

                                  /******/


                                  __webpack_require__.n = function (module) {
                                    /******/
                                    var getter = module && module.__esModule ?
                                    /******/
                                    function getDefault() {
                                      return module['default'];
                                    } :
                                    /******/
                                    function getModuleExports() {
                                      return module;
                                    };
                                    /******/

                                    __webpack_require__.d(getter, 'a', getter);
                                    /******/


                                    return getter;
                                    /******/
                                  };
                                  /******/

                                  /******/
                                  // Object.prototype.hasOwnProperty.call

                                  /******/


                                  __webpack_require__.o = function (object, property) {
                                    return Object.prototype.hasOwnProperty.call(object, property);
                                  };
                                  /******/

                                  /******/
                                  // __webpack_public_path__

                                  /******/


                                  __webpack_require__.p = "/";
                                  /******/

                                  /******/

                                  /******/
                                  // Load entry module and return exports

                                  /******/

                                  return __webpack_require__(__webpack_require__.s = 43);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./redux-core/assets/js/media/media.js":
                                  /*!*********************************************!*\
                                    !*** ./redux-core/assets/js/media/media.js ***!
                                    \*********************************************/

                                  /*! no static exports found */

                                  /***/
                                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                    function _typeof17(obj) {
                                      "@babel/helpers - typeof";

                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                        _typeof17 = function _typeof17(obj) {
                                          return typeof obj;
                                        };
                                      } else {
                                        _typeof17 = function _typeof17(obj) {
                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                        };
                                      }

                                      return _typeof17(obj);
                                    }
                                    /******/


                                    (function (modules) {
                                      // webpackBootstrap

                                      /******/
                                      // The module cache

                                      /******/
                                      var installedModules = {};
                                      /******/

                                      /******/
                                      // The require function

                                      /******/

                                      function __webpack_require__(moduleId) {
                                        /******/

                                        /******/
                                        // Check if module is in cache

                                        /******/
                                        if (installedModules[moduleId]) {
                                          /******/
                                          return installedModules[moduleId].exports;
                                          /******/
                                        }
                                        /******/
                                        // Create a new module (and put it into the cache)

                                        /******/


                                        var module = installedModules[moduleId] = {
                                          /******/
                                          i: moduleId,

                                          /******/
                                          l: false,

                                          /******/
                                          exports: {}
                                          /******/

                                        };
                                        /******/

                                        /******/
                                        // Execute the module function

                                        /******/

                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                        /******/

                                        /******/
                                        // Flag the module as loaded

                                        /******/

                                        module.l = true;
                                        /******/

                                        /******/
                                        // Return the exports of the module

                                        /******/

                                        return module.exports;
                                        /******/
                                      }
                                      /******/

                                      /******/

                                      /******/
                                      // expose the modules object (__webpack_modules__)

                                      /******/


                                      __webpack_require__.m = modules;
                                      /******/

                                      /******/
                                      // expose the module cache

                                      /******/

                                      __webpack_require__.c = installedModules;
                                      /******/

                                      /******/
                                      // define getter function for harmony exports

                                      /******/

                                      __webpack_require__.d = function (exports, name, getter) {
                                        /******/
                                        if (!__webpack_require__.o(exports, name)) {
                                          /******/
                                          Object.defineProperty(exports, name, {
                                            enumerable: true,
                                            get: getter
                                          });
                                          /******/
                                        }
                                        /******/

                                      };
                                      /******/

                                      /******/
                                      // define __esModule on exports

                                      /******/


                                      __webpack_require__.r = function (exports) {
                                        /******/
                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                          /******/
                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                            value: 'Module'
                                          });
                                          /******/
                                        }
                                        /******/


                                        Object.defineProperty(exports, '__esModule', {
                                          value: true
                                        });
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // create a fake namespace object

                                      /******/
                                      // mode & 1: value is a module id, require it

                                      /******/
                                      // mode & 2: merge all properties of value into the ns

                                      /******/
                                      // mode & 4: return value when already ns object

                                      /******/
                                      // mode & 8|1: behave like require

                                      /******/


                                      __webpack_require__.t = function (value, mode) {
                                        /******/
                                        if (mode & 1) value = __webpack_require__(value);
                                        /******/

                                        if (mode & 8) return value;
                                        /******/

                                        if (mode & 4 && _typeof17(value) === 'object' && value && value.__esModule) return value;
                                        /******/

                                        var ns = Object.create(null);
                                        /******/

                                        __webpack_require__.r(ns);
                                        /******/


                                        Object.defineProperty(ns, 'default', {
                                          enumerable: true,
                                          value: value
                                        });
                                        /******/

                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                          __webpack_require__.d(ns, key, function (key) {
                                            return value[key];
                                          }.bind(null, key));
                                        }
                                        /******/

                                        return ns;
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // getDefaultExport function for compatibility with non-harmony modules

                                      /******/


                                      __webpack_require__.n = function (module) {
                                        /******/
                                        var getter = module && module.__esModule ?
                                        /******/
                                        function getDefault() {
                                          return module['default'];
                                        } :
                                        /******/
                                        function getModuleExports() {
                                          return module;
                                        };
                                        /******/

                                        __webpack_require__.d(getter, 'a', getter);
                                        /******/


                                        return getter;
                                        /******/
                                      };
                                      /******/

                                      /******/
                                      // Object.prototype.hasOwnProperty.call

                                      /******/


                                      __webpack_require__.o = function (object, property) {
                                        return Object.prototype.hasOwnProperty.call(object, property);
                                      };
                                      /******/

                                      /******/
                                      // __webpack_public_path__

                                      /******/


                                      __webpack_require__.p = "/";
                                      /******/

                                      /******/

                                      /******/
                                      // Load entry module and return exports

                                      /******/

                                      return __webpack_require__(__webpack_require__.s = 43);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./redux-core/assets/js/media/media.js":
                                      /*!*********************************************!*\
                                        !*** ./redux-core/assets/js/media/media.js ***!
                                        \*********************************************/

                                      /*! no static exports found */

                                      /***/
                                      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                        function _typeof16(obj) {
                                          "@babel/helpers - typeof";

                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                            _typeof16 = function _typeof16(obj) {
                                              return typeof obj;
                                            };
                                          } else {
                                            _typeof16 = function _typeof16(obj) {
                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                            };
                                          }

                                          return _typeof16(obj);
                                        }
                                        /******/


                                        (function (modules) {
                                          // webpackBootstrap

                                          /******/
                                          // The module cache

                                          /******/
                                          var installedModules = {};
                                          /******/

                                          /******/
                                          // The require function

                                          /******/

                                          function __webpack_require__(moduleId) {
                                            /******/

                                            /******/
                                            // Check if module is in cache

                                            /******/
                                            if (installedModules[moduleId]) {
                                              /******/
                                              return installedModules[moduleId].exports;
                                              /******/
                                            }
                                            /******/
                                            // Create a new module (and put it into the cache)

                                            /******/


                                            var module = installedModules[moduleId] = {
                                              /******/
                                              i: moduleId,

                                              /******/
                                              l: false,

                                              /******/
                                              exports: {}
                                              /******/

                                            };
                                            /******/

                                            /******/
                                            // Execute the module function

                                            /******/

                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                            /******/

                                            /******/
                                            // Flag the module as loaded

                                            /******/

                                            module.l = true;
                                            /******/

                                            /******/
                                            // Return the exports of the module

                                            /******/

                                            return module.exports;
                                            /******/
                                          }
                                          /******/

                                          /******/

                                          /******/
                                          // expose the modules object (__webpack_modules__)

                                          /******/


                                          __webpack_require__.m = modules;
                                          /******/

                                          /******/
                                          // expose the module cache

                                          /******/

                                          __webpack_require__.c = installedModules;
                                          /******/

                                          /******/
                                          // define getter function for harmony exports

                                          /******/

                                          __webpack_require__.d = function (exports, name, getter) {
                                            /******/
                                            if (!__webpack_require__.o(exports, name)) {
                                              /******/
                                              Object.defineProperty(exports, name, {
                                                enumerable: true,
                                                get: getter
                                              });
                                              /******/
                                            }
                                            /******/

                                          };
                                          /******/

                                          /******/
                                          // define __esModule on exports

                                          /******/


                                          __webpack_require__.r = function (exports) {
                                            /******/
                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                              /******/
                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                value: 'Module'
                                              });
                                              /******/
                                            }
                                            /******/


                                            Object.defineProperty(exports, '__esModule', {
                                              value: true
                                            });
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // create a fake namespace object

                                          /******/
                                          // mode & 1: value is a module id, require it

                                          /******/
                                          // mode & 2: merge all properties of value into the ns

                                          /******/
                                          // mode & 4: return value when already ns object

                                          /******/
                                          // mode & 8|1: behave like require

                                          /******/


                                          __webpack_require__.t = function (value, mode) {
                                            /******/
                                            if (mode & 1) value = __webpack_require__(value);
                                            /******/

                                            if (mode & 8) return value;
                                            /******/

                                            if (mode & 4 && _typeof16(value) === 'object' && value && value.__esModule) return value;
                                            /******/

                                            var ns = Object.create(null);
                                            /******/

                                            __webpack_require__.r(ns);
                                            /******/


                                            Object.defineProperty(ns, 'default', {
                                              enumerable: true,
                                              value: value
                                            });
                                            /******/

                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                              __webpack_require__.d(ns, key, function (key) {
                                                return value[key];
                                              }.bind(null, key));
                                            }
                                            /******/

                                            return ns;
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // getDefaultExport function for compatibility with non-harmony modules

                                          /******/


                                          __webpack_require__.n = function (module) {
                                            /******/
                                            var getter = module && module.__esModule ?
                                            /******/
                                            function getDefault() {
                                              return module['default'];
                                            } :
                                            /******/
                                            function getModuleExports() {
                                              return module;
                                            };
                                            /******/

                                            __webpack_require__.d(getter, 'a', getter);
                                            /******/


                                            return getter;
                                            /******/
                                          };
                                          /******/

                                          /******/
                                          // Object.prototype.hasOwnProperty.call

                                          /******/


                                          __webpack_require__.o = function (object, property) {
                                            return Object.prototype.hasOwnProperty.call(object, property);
                                          };
                                          /******/

                                          /******/
                                          // __webpack_public_path__

                                          /******/


                                          __webpack_require__.p = "/";
                                          /******/

                                          /******/

                                          /******/
                                          // Load entry module and return exports

                                          /******/

                                          return __webpack_require__(__webpack_require__.s = 43);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./redux-core/assets/js/media/media.js":
                                          /*!*********************************************!*\
                                            !*** ./redux-core/assets/js/media/media.js ***!
                                            \*********************************************/

                                          /*! no static exports found */

                                          /***/
                                          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                            function _typeof15(obj) {
                                              "@babel/helpers - typeof";

                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                _typeof15 = function _typeof15(obj) {
                                                  return typeof obj;
                                                };
                                              } else {
                                                _typeof15 = function _typeof15(obj) {
                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                };
                                              }

                                              return _typeof15(obj);
                                            }
                                            /******/


                                            (function (modules) {
                                              // webpackBootstrap

                                              /******/
                                              // The module cache

                                              /******/
                                              var installedModules = {};
                                              /******/

                                              /******/
                                              // The require function

                                              /******/

                                              function __webpack_require__(moduleId) {
                                                /******/

                                                /******/
                                                // Check if module is in cache

                                                /******/
                                                if (installedModules[moduleId]) {
                                                  /******/
                                                  return installedModules[moduleId].exports;
                                                  /******/
                                                }
                                                /******/
                                                // Create a new module (and put it into the cache)

                                                /******/


                                                var module = installedModules[moduleId] = {
                                                  /******/
                                                  i: moduleId,

                                                  /******/
                                                  l: false,

                                                  /******/
                                                  exports: {}
                                                  /******/

                                                };
                                                /******/

                                                /******/
                                                // Execute the module function

                                                /******/

                                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                /******/

                                                /******/
                                                // Flag the module as loaded

                                                /******/

                                                module.l = true;
                                                /******/

                                                /******/
                                                // Return the exports of the module

                                                /******/

                                                return module.exports;
                                                /******/
                                              }
                                              /******/

                                              /******/

                                              /******/
                                              // expose the modules object (__webpack_modules__)

                                              /******/


                                              __webpack_require__.m = modules;
                                              /******/

                                              /******/
                                              // expose the module cache

                                              /******/

                                              __webpack_require__.c = installedModules;
                                              /******/

                                              /******/
                                              // define getter function for harmony exports

                                              /******/

                                              __webpack_require__.d = function (exports, name, getter) {
                                                /******/
                                                if (!__webpack_require__.o(exports, name)) {
                                                  /******/
                                                  Object.defineProperty(exports, name, {
                                                    enumerable: true,
                                                    get: getter
                                                  });
                                                  /******/
                                                }
                                                /******/

                                              };
                                              /******/

                                              /******/
                                              // define __esModule on exports

                                              /******/


                                              __webpack_require__.r = function (exports) {
                                                /******/
                                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                  /******/
                                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                                    value: 'Module'
                                                  });
                                                  /******/
                                                }
                                                /******/


                                                Object.defineProperty(exports, '__esModule', {
                                                  value: true
                                                });
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // create a fake namespace object

                                              /******/
                                              // mode & 1: value is a module id, require it

                                              /******/
                                              // mode & 2: merge all properties of value into the ns

                                              /******/
                                              // mode & 4: return value when already ns object

                                              /******/
                                              // mode & 8|1: behave like require

                                              /******/


                                              __webpack_require__.t = function (value, mode) {
                                                /******/
                                                if (mode & 1) value = __webpack_require__(value);
                                                /******/

                                                if (mode & 8) return value;
                                                /******/

                                                if (mode & 4 && _typeof15(value) === 'object' && value && value.__esModule) return value;
                                                /******/

                                                var ns = Object.create(null);
                                                /******/

                                                __webpack_require__.r(ns);
                                                /******/


                                                Object.defineProperty(ns, 'default', {
                                                  enumerable: true,
                                                  value: value
                                                });
                                                /******/

                                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                  __webpack_require__.d(ns, key, function (key) {
                                                    return value[key];
                                                  }.bind(null, key));
                                                }
                                                /******/

                                                return ns;
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // getDefaultExport function for compatibility with non-harmony modules

                                              /******/


                                              __webpack_require__.n = function (module) {
                                                /******/
                                                var getter = module && module.__esModule ?
                                                /******/
                                                function getDefault() {
                                                  return module['default'];
                                                } :
                                                /******/
                                                function getModuleExports() {
                                                  return module;
                                                };
                                                /******/

                                                __webpack_require__.d(getter, 'a', getter);
                                                /******/


                                                return getter;
                                                /******/
                                              };
                                              /******/

                                              /******/
                                              // Object.prototype.hasOwnProperty.call

                                              /******/


                                              __webpack_require__.o = function (object, property) {
                                                return Object.prototype.hasOwnProperty.call(object, property);
                                              };
                                              /******/

                                              /******/
                                              // __webpack_public_path__

                                              /******/


                                              __webpack_require__.p = "/";
                                              /******/

                                              /******/

                                              /******/
                                              // Load entry module and return exports

                                              /******/

                                              return __webpack_require__(__webpack_require__.s = 43);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./redux-core/assets/js/media/media.js":
                                              /*!*********************************************!*\
                                                !*** ./redux-core/assets/js/media/media.js ***!
                                                \*********************************************/

                                              /*! no static exports found */

                                              /***/
                                              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                function _typeof14(obj) {
                                                  "@babel/helpers - typeof";

                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                    _typeof14 = function _typeof14(obj) {
                                                      return typeof obj;
                                                    };
                                                  } else {
                                                    _typeof14 = function _typeof14(obj) {
                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                    };
                                                  }

                                                  return _typeof14(obj);
                                                }
                                                /******/


                                                (function (modules) {
                                                  // webpackBootstrap

                                                  /******/
                                                  // The module cache

                                                  /******/
                                                  var installedModules = {};
                                                  /******/

                                                  /******/
                                                  // The require function

                                                  /******/

                                                  function __webpack_require__(moduleId) {
                                                    /******/

                                                    /******/
                                                    // Check if module is in cache

                                                    /******/
                                                    if (installedModules[moduleId]) {
                                                      /******/
                                                      return installedModules[moduleId].exports;
                                                      /******/
                                                    }
                                                    /******/
                                                    // Create a new module (and put it into the cache)

                                                    /******/


                                                    var module = installedModules[moduleId] = {
                                                      /******/
                                                      i: moduleId,

                                                      /******/
                                                      l: false,

                                                      /******/
                                                      exports: {}
                                                      /******/

                                                    };
                                                    /******/

                                                    /******/
                                                    // Execute the module function

                                                    /******/

                                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                    /******/

                                                    /******/
                                                    // Flag the module as loaded

                                                    /******/

                                                    module.l = true;
                                                    /******/

                                                    /******/
                                                    // Return the exports of the module

                                                    /******/

                                                    return module.exports;
                                                    /******/
                                                  }
                                                  /******/

                                                  /******/

                                                  /******/
                                                  // expose the modules object (__webpack_modules__)

                                                  /******/


                                                  __webpack_require__.m = modules;
                                                  /******/

                                                  /******/
                                                  // expose the module cache

                                                  /******/

                                                  __webpack_require__.c = installedModules;
                                                  /******/

                                                  /******/
                                                  // define getter function for harmony exports

                                                  /******/

                                                  __webpack_require__.d = function (exports, name, getter) {
                                                    /******/
                                                    if (!__webpack_require__.o(exports, name)) {
                                                      /******/
                                                      Object.defineProperty(exports, name, {
                                                        enumerable: true,
                                                        get: getter
                                                      });
                                                      /******/
                                                    }
                                                    /******/

                                                  };
                                                  /******/

                                                  /******/
                                                  // define __esModule on exports

                                                  /******/


                                                  __webpack_require__.r = function (exports) {
                                                    /******/
                                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                      /******/
                                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                                        value: 'Module'
                                                      });
                                                      /******/
                                                    }
                                                    /******/


                                                    Object.defineProperty(exports, '__esModule', {
                                                      value: true
                                                    });
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // create a fake namespace object

                                                  /******/
                                                  // mode & 1: value is a module id, require it

                                                  /******/
                                                  // mode & 2: merge all properties of value into the ns

                                                  /******/
                                                  // mode & 4: return value when already ns object

                                                  /******/
                                                  // mode & 8|1: behave like require

                                                  /******/


                                                  __webpack_require__.t = function (value, mode) {
                                                    /******/
                                                    if (mode & 1) value = __webpack_require__(value);
                                                    /******/

                                                    if (mode & 8) return value;
                                                    /******/

                                                    if (mode & 4 && _typeof14(value) === 'object' && value && value.__esModule) return value;
                                                    /******/

                                                    var ns = Object.create(null);
                                                    /******/

                                                    __webpack_require__.r(ns);
                                                    /******/


                                                    Object.defineProperty(ns, 'default', {
                                                      enumerable: true,
                                                      value: value
                                                    });
                                                    /******/

                                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                      __webpack_require__.d(ns, key, function (key) {
                                                        return value[key];
                                                      }.bind(null, key));
                                                    }
                                                    /******/

                                                    return ns;
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // getDefaultExport function for compatibility with non-harmony modules

                                                  /******/


                                                  __webpack_require__.n = function (module) {
                                                    /******/
                                                    var getter = module && module.__esModule ?
                                                    /******/
                                                    function getDefault() {
                                                      return module['default'];
                                                    } :
                                                    /******/
                                                    function getModuleExports() {
                                                      return module;
                                                    };
                                                    /******/

                                                    __webpack_require__.d(getter, 'a', getter);
                                                    /******/


                                                    return getter;
                                                    /******/
                                                  };
                                                  /******/

                                                  /******/
                                                  // Object.prototype.hasOwnProperty.call

                                                  /******/


                                                  __webpack_require__.o = function (object, property) {
                                                    return Object.prototype.hasOwnProperty.call(object, property);
                                                  };
                                                  /******/

                                                  /******/
                                                  // __webpack_public_path__

                                                  /******/


                                                  __webpack_require__.p = "/";
                                                  /******/

                                                  /******/

                                                  /******/
                                                  // Load entry module and return exports

                                                  /******/

                                                  return __webpack_require__(__webpack_require__.s = 43);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./redux-core/assets/js/media/media.js":
                                                  /*!*********************************************!*\
                                                    !*** ./redux-core/assets/js/media/media.js ***!
                                                    \*********************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                    function _typeof13(obj) {
                                                      "@babel/helpers - typeof";

                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                        _typeof13 = function _typeof13(obj) {
                                                          return typeof obj;
                                                        };
                                                      } else {
                                                        _typeof13 = function _typeof13(obj) {
                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                        };
                                                      }

                                                      return _typeof13(obj);
                                                    }
                                                    /******/


                                                    (function (modules) {
                                                      // webpackBootstrap

                                                      /******/
                                                      // The module cache

                                                      /******/
                                                      var installedModules = {};
                                                      /******/

                                                      /******/
                                                      // The require function

                                                      /******/

                                                      function __webpack_require__(moduleId) {
                                                        /******/

                                                        /******/
                                                        // Check if module is in cache

                                                        /******/
                                                        if (installedModules[moduleId]) {
                                                          /******/
                                                          return installedModules[moduleId].exports;
                                                          /******/
                                                        }
                                                        /******/
                                                        // Create a new module (and put it into the cache)

                                                        /******/


                                                        var module = installedModules[moduleId] = {
                                                          /******/
                                                          i: moduleId,

                                                          /******/
                                                          l: false,

                                                          /******/
                                                          exports: {}
                                                          /******/

                                                        };
                                                        /******/

                                                        /******/
                                                        // Execute the module function

                                                        /******/

                                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                        /******/

                                                        /******/
                                                        // Flag the module as loaded

                                                        /******/

                                                        module.l = true;
                                                        /******/

                                                        /******/
                                                        // Return the exports of the module

                                                        /******/

                                                        return module.exports;
                                                        /******/
                                                      }
                                                      /******/

                                                      /******/

                                                      /******/
                                                      // expose the modules object (__webpack_modules__)

                                                      /******/


                                                      __webpack_require__.m = modules;
                                                      /******/

                                                      /******/
                                                      // expose the module cache

                                                      /******/

                                                      __webpack_require__.c = installedModules;
                                                      /******/

                                                      /******/
                                                      // define getter function for harmony exports

                                                      /******/

                                                      __webpack_require__.d = function (exports, name, getter) {
                                                        /******/
                                                        if (!__webpack_require__.o(exports, name)) {
                                                          /******/
                                                          Object.defineProperty(exports, name, {
                                                            enumerable: true,
                                                            get: getter
                                                          });
                                                          /******/
                                                        }
                                                        /******/

                                                      };
                                                      /******/

                                                      /******/
                                                      // define __esModule on exports

                                                      /******/


                                                      __webpack_require__.r = function (exports) {
                                                        /******/
                                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                          /******/
                                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                                            value: 'Module'
                                                          });
                                                          /******/
                                                        }
                                                        /******/


                                                        Object.defineProperty(exports, '__esModule', {
                                                          value: true
                                                        });
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // create a fake namespace object

                                                      /******/
                                                      // mode & 1: value is a module id, require it

                                                      /******/
                                                      // mode & 2: merge all properties of value into the ns

                                                      /******/
                                                      // mode & 4: return value when already ns object

                                                      /******/
                                                      // mode & 8|1: behave like require

                                                      /******/


                                                      __webpack_require__.t = function (value, mode) {
                                                        /******/
                                                        if (mode & 1) value = __webpack_require__(value);
                                                        /******/

                                                        if (mode & 8) return value;
                                                        /******/

                                                        if (mode & 4 && _typeof13(value) === 'object' && value && value.__esModule) return value;
                                                        /******/

                                                        var ns = Object.create(null);
                                                        /******/

                                                        __webpack_require__.r(ns);
                                                        /******/


                                                        Object.defineProperty(ns, 'default', {
                                                          enumerable: true,
                                                          value: value
                                                        });
                                                        /******/

                                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                          __webpack_require__.d(ns, key, function (key) {
                                                            return value[key];
                                                          }.bind(null, key));
                                                        }
                                                        /******/

                                                        return ns;
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // getDefaultExport function for compatibility with non-harmony modules

                                                      /******/


                                                      __webpack_require__.n = function (module) {
                                                        /******/
                                                        var getter = module && module.__esModule ?
                                                        /******/
                                                        function getDefault() {
                                                          return module['default'];
                                                        } :
                                                        /******/
                                                        function getModuleExports() {
                                                          return module;
                                                        };
                                                        /******/

                                                        __webpack_require__.d(getter, 'a', getter);
                                                        /******/


                                                        return getter;
                                                        /******/
                                                      };
                                                      /******/

                                                      /******/
                                                      // Object.prototype.hasOwnProperty.call

                                                      /******/


                                                      __webpack_require__.o = function (object, property) {
                                                        return Object.prototype.hasOwnProperty.call(object, property);
                                                      };
                                                      /******/

                                                      /******/
                                                      // __webpack_public_path__

                                                      /******/


                                                      __webpack_require__.p = "/";
                                                      /******/

                                                      /******/

                                                      /******/
                                                      // Load entry module and return exports

                                                      /******/

                                                      return __webpack_require__(__webpack_require__.s = 43);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./redux-core/assets/js/media/media.js":
                                                      /*!*********************************************!*\
                                                        !*** ./redux-core/assets/js/media/media.js ***!
                                                        \*********************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                        function _typeof12(obj) {
                                                          "@babel/helpers - typeof";

                                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                            _typeof12 = function _typeof12(obj) {
                                                              return typeof obj;
                                                            };
                                                          } else {
                                                            _typeof12 = function _typeof12(obj) {
                                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                            };
                                                          }

                                                          return _typeof12(obj);
                                                        }
                                                        /******/


                                                        (function (modules) {
                                                          // webpackBootstrap

                                                          /******/
                                                          // The module cache

                                                          /******/
                                                          var installedModules = {};
                                                          /******/

                                                          /******/
                                                          // The require function

                                                          /******/

                                                          function __webpack_require__(moduleId) {
                                                            /******/

                                                            /******/
                                                            // Check if module is in cache

                                                            /******/
                                                            if (installedModules[moduleId]) {
                                                              /******/
                                                              return installedModules[moduleId].exports;
                                                              /******/
                                                            }
                                                            /******/
                                                            // Create a new module (and put it into the cache)

                                                            /******/


                                                            var module = installedModules[moduleId] = {
                                                              /******/
                                                              i: moduleId,

                                                              /******/
                                                              l: false,

                                                              /******/
                                                              exports: {}
                                                              /******/

                                                            };
                                                            /******/

                                                            /******/
                                                            // Execute the module function

                                                            /******/

                                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                            /******/

                                                            /******/
                                                            // Flag the module as loaded

                                                            /******/

                                                            module.l = true;
                                                            /******/

                                                            /******/
                                                            // Return the exports of the module

                                                            /******/

                                                            return module.exports;
                                                            /******/
                                                          }
                                                          /******/

                                                          /******/

                                                          /******/
                                                          // expose the modules object (__webpack_modules__)

                                                          /******/


                                                          __webpack_require__.m = modules;
                                                          /******/

                                                          /******/
                                                          // expose the module cache

                                                          /******/

                                                          __webpack_require__.c = installedModules;
                                                          /******/

                                                          /******/
                                                          // define getter function for harmony exports

                                                          /******/

                                                          __webpack_require__.d = function (exports, name, getter) {
                                                            /******/
                                                            if (!__webpack_require__.o(exports, name)) {
                                                              /******/
                                                              Object.defineProperty(exports, name, {
                                                                enumerable: true,
                                                                get: getter
                                                              });
                                                              /******/
                                                            }
                                                            /******/

                                                          };
                                                          /******/

                                                          /******/
                                                          // define __esModule on exports

                                                          /******/


                                                          __webpack_require__.r = function (exports) {
                                                            /******/
                                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                              /******/
                                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                                value: 'Module'
                                                              });
                                                              /******/
                                                            }
                                                            /******/


                                                            Object.defineProperty(exports, '__esModule', {
                                                              value: true
                                                            });
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // create a fake namespace object

                                                          /******/
                                                          // mode & 1: value is a module id, require it

                                                          /******/
                                                          // mode & 2: merge all properties of value into the ns

                                                          /******/
                                                          // mode & 4: return value when already ns object

                                                          /******/
                                                          // mode & 8|1: behave like require

                                                          /******/


                                                          __webpack_require__.t = function (value, mode) {
                                                            /******/
                                                            if (mode & 1) value = __webpack_require__(value);
                                                            /******/

                                                            if (mode & 8) return value;
                                                            /******/

                                                            if (mode & 4 && _typeof12(value) === 'object' && value && value.__esModule) return value;
                                                            /******/

                                                            var ns = Object.create(null);
                                                            /******/

                                                            __webpack_require__.r(ns);
                                                            /******/


                                                            Object.defineProperty(ns, 'default', {
                                                              enumerable: true,
                                                              value: value
                                                            });
                                                            /******/

                                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                              __webpack_require__.d(ns, key, function (key) {
                                                                return value[key];
                                                              }.bind(null, key));
                                                            }
                                                            /******/

                                                            return ns;
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // getDefaultExport function for compatibility with non-harmony modules

                                                          /******/


                                                          __webpack_require__.n = function (module) {
                                                            /******/
                                                            var getter = module && module.__esModule ?
                                                            /******/
                                                            function getDefault() {
                                                              return module['default'];
                                                            } :
                                                            /******/
                                                            function getModuleExports() {
                                                              return module;
                                                            };
                                                            /******/

                                                            __webpack_require__.d(getter, 'a', getter);
                                                            /******/


                                                            return getter;
                                                            /******/
                                                          };
                                                          /******/

                                                          /******/
                                                          // Object.prototype.hasOwnProperty.call

                                                          /******/


                                                          __webpack_require__.o = function (object, property) {
                                                            return Object.prototype.hasOwnProperty.call(object, property);
                                                          };
                                                          /******/

                                                          /******/
                                                          // __webpack_public_path__

                                                          /******/


                                                          __webpack_require__.p = "/";
                                                          /******/

                                                          /******/

                                                          /******/
                                                          // Load entry module and return exports

                                                          /******/

                                                          return __webpack_require__(__webpack_require__.s = 43);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./redux-core/assets/js/media/media.js":
                                                          /*!*********************************************!*\
                                                            !*** ./redux-core/assets/js/media/media.js ***!
                                                            \*********************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                            function _typeof11(obj) {
                                                              "@babel/helpers - typeof";

                                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                _typeof11 = function _typeof11(obj) {
                                                                  return typeof obj;
                                                                };
                                                              } else {
                                                                _typeof11 = function _typeof11(obj) {
                                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                };
                                                              }

                                                              return _typeof11(obj);
                                                            }
                                                            /******/


                                                            (function (modules) {
                                                              // webpackBootstrap

                                                              /******/
                                                              // The module cache

                                                              /******/
                                                              var installedModules = {};
                                                              /******/

                                                              /******/
                                                              // The require function

                                                              /******/

                                                              function __webpack_require__(moduleId) {
                                                                /******/

                                                                /******/
                                                                // Check if module is in cache

                                                                /******/
                                                                if (installedModules[moduleId]) {
                                                                  /******/
                                                                  return installedModules[moduleId].exports;
                                                                  /******/
                                                                }
                                                                /******/
                                                                // Create a new module (and put it into the cache)

                                                                /******/


                                                                var module = installedModules[moduleId] = {
                                                                  /******/
                                                                  i: moduleId,

                                                                  /******/
                                                                  l: false,

                                                                  /******/
                                                                  exports: {}
                                                                  /******/

                                                                };
                                                                /******/

                                                                /******/
                                                                // Execute the module function

                                                                /******/

                                                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                /******/

                                                                /******/
                                                                // Flag the module as loaded

                                                                /******/

                                                                module.l = true;
                                                                /******/

                                                                /******/
                                                                // Return the exports of the module

                                                                /******/

                                                                return module.exports;
                                                                /******/
                                                              }
                                                              /******/

                                                              /******/

                                                              /******/
                                                              // expose the modules object (__webpack_modules__)

                                                              /******/


                                                              __webpack_require__.m = modules;
                                                              /******/

                                                              /******/
                                                              // expose the module cache

                                                              /******/

                                                              __webpack_require__.c = installedModules;
                                                              /******/

                                                              /******/
                                                              // define getter function for harmony exports

                                                              /******/

                                                              __webpack_require__.d = function (exports, name, getter) {
                                                                /******/
                                                                if (!__webpack_require__.o(exports, name)) {
                                                                  /******/
                                                                  Object.defineProperty(exports, name, {
                                                                    enumerable: true,
                                                                    get: getter
                                                                  });
                                                                  /******/
                                                                }
                                                                /******/

                                                              };
                                                              /******/

                                                              /******/
                                                              // define __esModule on exports

                                                              /******/


                                                              __webpack_require__.r = function (exports) {
                                                                /******/
                                                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                  /******/
                                                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                                                    value: 'Module'
                                                                  });
                                                                  /******/
                                                                }
                                                                /******/


                                                                Object.defineProperty(exports, '__esModule', {
                                                                  value: true
                                                                });
                                                                /******/
                                                              };
                                                              /******/

                                                              /******/
                                                              // create a fake namespace object

                                                              /******/
                                                              // mode & 1: value is a module id, require it

                                                              /******/
                                                              // mode & 2: merge all properties of value into the ns

                                                              /******/
                                                              // mode & 4: return value when already ns object

                                                              /******/
                                                              // mode & 8|1: behave like require

                                                              /******/


                                                              __webpack_require__.t = function (value, mode) {
                                                                /******/
                                                                if (mode & 1) value = __webpack_require__(value);
                                                                /******/

                                                                if (mode & 8) return value;
                                                                /******/

                                                                if (mode & 4 && _typeof11(value) === 'object' && value && value.__esModule) return value;
                                                                /******/

                                                                var ns = Object.create(null);
                                                                /******/

                                                                __webpack_require__.r(ns);
                                                                /******/


                                                                Object.defineProperty(ns, 'default', {
                                                                  enumerable: true,
                                                                  value: value
                                                                });
                                                                /******/

                                                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                  __webpack_require__.d(ns, key, function (key) {
                                                                    return value[key];
                                                                  }.bind(null, key));
                                                                }
                                                                /******/

                                                                return ns;
                                                                /******/
                                                              };
                                                              /******/

                                                              /******/
                                                              // getDefaultExport function for compatibility with non-harmony modules

                                                              /******/


                                                              __webpack_require__.n = function (module) {
                                                                /******/
                                                                var getter = module && module.__esModule ?
                                                                /******/
                                                                function getDefault() {
                                                                  return module['default'];
                                                                } :
                                                                /******/
                                                                function getModuleExports() {
                                                                  return module;
                                                                };
                                                                /******/

                                                                __webpack_require__.d(getter, 'a', getter);
                                                                /******/


                                                                return getter;
                                                                /******/
                                                              };
                                                              /******/

                                                              /******/
                                                              // Object.prototype.hasOwnProperty.call

                                                              /******/


                                                              __webpack_require__.o = function (object, property) {
                                                                return Object.prototype.hasOwnProperty.call(object, property);
                                                              };
                                                              /******/

                                                              /******/
                                                              // __webpack_public_path__

                                                              /******/


                                                              __webpack_require__.p = "/";
                                                              /******/

                                                              /******/

                                                              /******/
                                                              // Load entry module and return exports

                                                              /******/

                                                              return __webpack_require__(__webpack_require__.s = 43);
                                                              /******/
                                                            })(
                                                            /************************************************************************/

                                                            /******/
                                                            {
                                                              /***/
                                                              "./redux-core/assets/js/media/media.js":
                                                              /*!*********************************************!*\
                                                                !*** ./redux-core/assets/js/media/media.js ***!
                                                                \*********************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                function _typeof10(obj) {
                                                                  "@babel/helpers - typeof";

                                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                    _typeof10 = function _typeof10(obj) {
                                                                      return typeof obj;
                                                                    };
                                                                  } else {
                                                                    _typeof10 = function _typeof10(obj) {
                                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                    };
                                                                  }

                                                                  return _typeof10(obj);
                                                                }
                                                                /******/


                                                                (function (modules) {
                                                                  // webpackBootstrap

                                                                  /******/
                                                                  // The module cache

                                                                  /******/
                                                                  var installedModules = {};
                                                                  /******/

                                                                  /******/
                                                                  // The require function

                                                                  /******/

                                                                  function __webpack_require__(moduleId) {
                                                                    /******/

                                                                    /******/
                                                                    // Check if module is in cache

                                                                    /******/
                                                                    if (installedModules[moduleId]) {
                                                                      /******/
                                                                      return installedModules[moduleId].exports;
                                                                      /******/
                                                                    }
                                                                    /******/
                                                                    // Create a new module (and put it into the cache)

                                                                    /******/


                                                                    var module = installedModules[moduleId] = {
                                                                      /******/
                                                                      i: moduleId,

                                                                      /******/
                                                                      l: false,

                                                                      /******/
                                                                      exports: {}
                                                                      /******/

                                                                    };
                                                                    /******/

                                                                    /******/
                                                                    // Execute the module function

                                                                    /******/

                                                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                    /******/

                                                                    /******/
                                                                    // Flag the module as loaded

                                                                    /******/

                                                                    module.l = true;
                                                                    /******/

                                                                    /******/
                                                                    // Return the exports of the module

                                                                    /******/

                                                                    return module.exports;
                                                                    /******/
                                                                  }
                                                                  /******/

                                                                  /******/

                                                                  /******/
                                                                  // expose the modules object (__webpack_modules__)

                                                                  /******/


                                                                  __webpack_require__.m = modules;
                                                                  /******/

                                                                  /******/
                                                                  // expose the module cache

                                                                  /******/

                                                                  __webpack_require__.c = installedModules;
                                                                  /******/

                                                                  /******/
                                                                  // define getter function for harmony exports

                                                                  /******/

                                                                  __webpack_require__.d = function (exports, name, getter) {
                                                                    /******/
                                                                    if (!__webpack_require__.o(exports, name)) {
                                                                      /******/
                                                                      Object.defineProperty(exports, name, {
                                                                        enumerable: true,
                                                                        get: getter
                                                                      });
                                                                      /******/
                                                                    }
                                                                    /******/

                                                                  };
                                                                  /******/

                                                                  /******/
                                                                  // define __esModule on exports

                                                                  /******/


                                                                  __webpack_require__.r = function (exports) {
                                                                    /******/
                                                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                      /******/
                                                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                                                        value: 'Module'
                                                                      });
                                                                      /******/
                                                                    }
                                                                    /******/


                                                                    Object.defineProperty(exports, '__esModule', {
                                                                      value: true
                                                                    });
                                                                    /******/
                                                                  };
                                                                  /******/

                                                                  /******/
                                                                  // create a fake namespace object

                                                                  /******/
                                                                  // mode & 1: value is a module id, require it

                                                                  /******/
                                                                  // mode & 2: merge all properties of value into the ns

                                                                  /******/
                                                                  // mode & 4: return value when already ns object

                                                                  /******/
                                                                  // mode & 8|1: behave like require

                                                                  /******/


                                                                  __webpack_require__.t = function (value, mode) {
                                                                    /******/
                                                                    if (mode & 1) value = __webpack_require__(value);
                                                                    /******/

                                                                    if (mode & 8) return value;
                                                                    /******/

                                                                    if (mode & 4 && _typeof10(value) === 'object' && value && value.__esModule) return value;
                                                                    /******/

                                                                    var ns = Object.create(null);
                                                                    /******/

                                                                    __webpack_require__.r(ns);
                                                                    /******/


                                                                    Object.defineProperty(ns, 'default', {
                                                                      enumerable: true,
                                                                      value: value
                                                                    });
                                                                    /******/

                                                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                      __webpack_require__.d(ns, key, function (key) {
                                                                        return value[key];
                                                                      }.bind(null, key));
                                                                    }
                                                                    /******/

                                                                    return ns;
                                                                    /******/
                                                                  };
                                                                  /******/

                                                                  /******/
                                                                  // getDefaultExport function for compatibility with non-harmony modules

                                                                  /******/


                                                                  __webpack_require__.n = function (module) {
                                                                    /******/
                                                                    var getter = module && module.__esModule ?
                                                                    /******/
                                                                    function getDefault() {
                                                                      return module['default'];
                                                                    } :
                                                                    /******/
                                                                    function getModuleExports() {
                                                                      return module;
                                                                    };
                                                                    /******/

                                                                    __webpack_require__.d(getter, 'a', getter);
                                                                    /******/


                                                                    return getter;
                                                                    /******/
                                                                  };
                                                                  /******/

                                                                  /******/
                                                                  // Object.prototype.hasOwnProperty.call

                                                                  /******/


                                                                  __webpack_require__.o = function (object, property) {
                                                                    return Object.prototype.hasOwnProperty.call(object, property);
                                                                  };
                                                                  /******/

                                                                  /******/
                                                                  // __webpack_public_path__

                                                                  /******/


                                                                  __webpack_require__.p = "/";
                                                                  /******/

                                                                  /******/

                                                                  /******/
                                                                  // Load entry module and return exports

                                                                  /******/

                                                                  return __webpack_require__(__webpack_require__.s = 43);
                                                                  /******/
                                                                })(
                                                                /************************************************************************/

                                                                /******/
                                                                {
                                                                  /***/
                                                                  "./redux-core/assets/js/media/media.js":
                                                                  /*!*********************************************!*\
                                                                    !*** ./redux-core/assets/js/media/media.js ***!
                                                                    \*********************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                    function _typeof9(obj) {
                                                                      "@babel/helpers - typeof";

                                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                        _typeof9 = function _typeof9(obj) {
                                                                          return typeof obj;
                                                                        };
                                                                      } else {
                                                                        _typeof9 = function _typeof9(obj) {
                                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                        };
                                                                      }

                                                                      return _typeof9(obj);
                                                                    }
                                                                    /******/


                                                                    (function (modules) {
                                                                      // webpackBootstrap

                                                                      /******/
                                                                      // The module cache

                                                                      /******/
                                                                      var installedModules = {};
                                                                      /******/

                                                                      /******/
                                                                      // The require function

                                                                      /******/

                                                                      function __webpack_require__(moduleId) {
                                                                        /******/

                                                                        /******/
                                                                        // Check if module is in cache

                                                                        /******/
                                                                        if (installedModules[moduleId]) {
                                                                          /******/
                                                                          return installedModules[moduleId].exports;
                                                                          /******/
                                                                        }
                                                                        /******/
                                                                        // Create a new module (and put it into the cache)

                                                                        /******/


                                                                        var module = installedModules[moduleId] = {
                                                                          /******/
                                                                          i: moduleId,

                                                                          /******/
                                                                          l: false,

                                                                          /******/
                                                                          exports: {}
                                                                          /******/

                                                                        };
                                                                        /******/

                                                                        /******/
                                                                        // Execute the module function

                                                                        /******/

                                                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                        /******/

                                                                        /******/
                                                                        // Flag the module as loaded

                                                                        /******/

                                                                        module.l = true;
                                                                        /******/

                                                                        /******/
                                                                        // Return the exports of the module

                                                                        /******/

                                                                        return module.exports;
                                                                        /******/
                                                                      }
                                                                      /******/

                                                                      /******/

                                                                      /******/
                                                                      // expose the modules object (__webpack_modules__)

                                                                      /******/


                                                                      __webpack_require__.m = modules;
                                                                      /******/

                                                                      /******/
                                                                      // expose the module cache

                                                                      /******/

                                                                      __webpack_require__.c = installedModules;
                                                                      /******/

                                                                      /******/
                                                                      // define getter function for harmony exports

                                                                      /******/

                                                                      __webpack_require__.d = function (exports, name, getter) {
                                                                        /******/
                                                                        if (!__webpack_require__.o(exports, name)) {
                                                                          /******/
                                                                          Object.defineProperty(exports, name, {
                                                                            enumerable: true,
                                                                            get: getter
                                                                          });
                                                                          /******/
                                                                        }
                                                                        /******/

                                                                      };
                                                                      /******/

                                                                      /******/
                                                                      // define __esModule on exports

                                                                      /******/


                                                                      __webpack_require__.r = function (exports) {
                                                                        /******/
                                                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                          /******/
                                                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                                                            value: 'Module'
                                                                          });
                                                                          /******/
                                                                        }
                                                                        /******/


                                                                        Object.defineProperty(exports, '__esModule', {
                                                                          value: true
                                                                        });
                                                                        /******/
                                                                      };
                                                                      /******/

                                                                      /******/
                                                                      // create a fake namespace object

                                                                      /******/
                                                                      // mode & 1: value is a module id, require it

                                                                      /******/
                                                                      // mode & 2: merge all properties of value into the ns

                                                                      /******/
                                                                      // mode & 4: return value when already ns object

                                                                      /******/
                                                                      // mode & 8|1: behave like require

                                                                      /******/


                                                                      __webpack_require__.t = function (value, mode) {
                                                                        /******/
                                                                        if (mode & 1) value = __webpack_require__(value);
                                                                        /******/

                                                                        if (mode & 8) return value;
                                                                        /******/

                                                                        if (mode & 4 && _typeof9(value) === 'object' && value && value.__esModule) return value;
                                                                        /******/

                                                                        var ns = Object.create(null);
                                                                        /******/

                                                                        __webpack_require__.r(ns);
                                                                        /******/


                                                                        Object.defineProperty(ns, 'default', {
                                                                          enumerable: true,
                                                                          value: value
                                                                        });
                                                                        /******/

                                                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                          __webpack_require__.d(ns, key, function (key) {
                                                                            return value[key];
                                                                          }.bind(null, key));
                                                                        }
                                                                        /******/

                                                                        return ns;
                                                                        /******/
                                                                      };
                                                                      /******/

                                                                      /******/
                                                                      // getDefaultExport function for compatibility with non-harmony modules

                                                                      /******/


                                                                      __webpack_require__.n = function (module) {
                                                                        /******/
                                                                        var getter = module && module.__esModule ?
                                                                        /******/
                                                                        function getDefault() {
                                                                          return module['default'];
                                                                        } :
                                                                        /******/
                                                                        function getModuleExports() {
                                                                          return module;
                                                                        };
                                                                        /******/

                                                                        __webpack_require__.d(getter, 'a', getter);
                                                                        /******/


                                                                        return getter;
                                                                        /******/
                                                                      };
                                                                      /******/

                                                                      /******/
                                                                      // Object.prototype.hasOwnProperty.call

                                                                      /******/


                                                                      __webpack_require__.o = function (object, property) {
                                                                        return Object.prototype.hasOwnProperty.call(object, property);
                                                                      };
                                                                      /******/

                                                                      /******/
                                                                      // __webpack_public_path__

                                                                      /******/


                                                                      __webpack_require__.p = "/";
                                                                      /******/

                                                                      /******/

                                                                      /******/
                                                                      // Load entry module and return exports

                                                                      /******/

                                                                      return __webpack_require__(__webpack_require__.s = 43);
                                                                      /******/
                                                                    })(
                                                                    /************************************************************************/

                                                                    /******/
                                                                    {
                                                                      /***/
                                                                      "./redux-core/assets/js/media/media.js":
                                                                      /*!*********************************************!*\
                                                                        !*** ./redux-core/assets/js/media/media.js ***!
                                                                        \*********************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                        function _typeof8(obj) {
                                                                          "@babel/helpers - typeof";

                                                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                            _typeof8 = function _typeof8(obj) {
                                                                              return typeof obj;
                                                                            };
                                                                          } else {
                                                                            _typeof8 = function _typeof8(obj) {
                                                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                            };
                                                                          }

                                                                          return _typeof8(obj);
                                                                        }
                                                                        /******/


                                                                        (function (modules) {
                                                                          // webpackBootstrap

                                                                          /******/
                                                                          // The module cache

                                                                          /******/
                                                                          var installedModules = {};
                                                                          /******/

                                                                          /******/
                                                                          // The require function

                                                                          /******/

                                                                          function __webpack_require__(moduleId) {
                                                                            /******/

                                                                            /******/
                                                                            // Check if module is in cache

                                                                            /******/
                                                                            if (installedModules[moduleId]) {
                                                                              /******/
                                                                              return installedModules[moduleId].exports;
                                                                              /******/
                                                                            }
                                                                            /******/
                                                                            // Create a new module (and put it into the cache)

                                                                            /******/


                                                                            var module = installedModules[moduleId] = {
                                                                              /******/
                                                                              i: moduleId,

                                                                              /******/
                                                                              l: false,

                                                                              /******/
                                                                              exports: {}
                                                                              /******/

                                                                            };
                                                                            /******/

                                                                            /******/
                                                                            // Execute the module function

                                                                            /******/

                                                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                            /******/

                                                                            /******/
                                                                            // Flag the module as loaded

                                                                            /******/

                                                                            module.l = true;
                                                                            /******/

                                                                            /******/
                                                                            // Return the exports of the module

                                                                            /******/

                                                                            return module.exports;
                                                                            /******/
                                                                          }
                                                                          /******/

                                                                          /******/

                                                                          /******/
                                                                          // expose the modules object (__webpack_modules__)

                                                                          /******/


                                                                          __webpack_require__.m = modules;
                                                                          /******/

                                                                          /******/
                                                                          // expose the module cache

                                                                          /******/

                                                                          __webpack_require__.c = installedModules;
                                                                          /******/

                                                                          /******/
                                                                          // define getter function for harmony exports

                                                                          /******/

                                                                          __webpack_require__.d = function (exports, name, getter) {
                                                                            /******/
                                                                            if (!__webpack_require__.o(exports, name)) {
                                                                              /******/
                                                                              Object.defineProperty(exports, name, {
                                                                                enumerable: true,
                                                                                get: getter
                                                                              });
                                                                              /******/
                                                                            }
                                                                            /******/

                                                                          };
                                                                          /******/

                                                                          /******/
                                                                          // define __esModule on exports

                                                                          /******/


                                                                          __webpack_require__.r = function (exports) {
                                                                            /******/
                                                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                              /******/
                                                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                value: 'Module'
                                                                              });
                                                                              /******/
                                                                            }
                                                                            /******/


                                                                            Object.defineProperty(exports, '__esModule', {
                                                                              value: true
                                                                            });
                                                                            /******/
                                                                          };
                                                                          /******/

                                                                          /******/
                                                                          // create a fake namespace object

                                                                          /******/
                                                                          // mode & 1: value is a module id, require it

                                                                          /******/
                                                                          // mode & 2: merge all properties of value into the ns

                                                                          /******/
                                                                          // mode & 4: return value when already ns object

                                                                          /******/
                                                                          // mode & 8|1: behave like require

                                                                          /******/


                                                                          __webpack_require__.t = function (value, mode) {
                                                                            /******/
                                                                            if (mode & 1) value = __webpack_require__(value);
                                                                            /******/

                                                                            if (mode & 8) return value;
                                                                            /******/

                                                                            if (mode & 4 && _typeof8(value) === 'object' && value && value.__esModule) return value;
                                                                            /******/

                                                                            var ns = Object.create(null);
                                                                            /******/

                                                                            __webpack_require__.r(ns);
                                                                            /******/


                                                                            Object.defineProperty(ns, 'default', {
                                                                              enumerable: true,
                                                                              value: value
                                                                            });
                                                                            /******/

                                                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                              __webpack_require__.d(ns, key, function (key) {
                                                                                return value[key];
                                                                              }.bind(null, key));
                                                                            }
                                                                            /******/

                                                                            return ns;
                                                                            /******/
                                                                          };
                                                                          /******/

                                                                          /******/
                                                                          // getDefaultExport function for compatibility with non-harmony modules

                                                                          /******/


                                                                          __webpack_require__.n = function (module) {
                                                                            /******/
                                                                            var getter = module && module.__esModule ?
                                                                            /******/
                                                                            function getDefault() {
                                                                              return module['default'];
                                                                            } :
                                                                            /******/
                                                                            function getModuleExports() {
                                                                              return module;
                                                                            };
                                                                            /******/

                                                                            __webpack_require__.d(getter, 'a', getter);
                                                                            /******/


                                                                            return getter;
                                                                            /******/
                                                                          };
                                                                          /******/

                                                                          /******/
                                                                          // Object.prototype.hasOwnProperty.call

                                                                          /******/


                                                                          __webpack_require__.o = function (object, property) {
                                                                            return Object.prototype.hasOwnProperty.call(object, property);
                                                                          };
                                                                          /******/

                                                                          /******/
                                                                          // __webpack_public_path__

                                                                          /******/


                                                                          __webpack_require__.p = "/";
                                                                          /******/

                                                                          /******/

                                                                          /******/
                                                                          // Load entry module and return exports

                                                                          /******/

                                                                          return __webpack_require__(__webpack_require__.s = 43);
                                                                          /******/
                                                                        })(
                                                                        /************************************************************************/

                                                                        /******/
                                                                        {
                                                                          /***/
                                                                          "./redux-core/assets/js/media/media.js":
                                                                          /*!*********************************************!*\
                                                                            !*** ./redux-core/assets/js/media/media.js ***!
                                                                            \*********************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                            function _typeof7(obj) {
                                                                              "@babel/helpers - typeof";

                                                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                _typeof7 = function _typeof7(obj) {
                                                                                  return typeof obj;
                                                                                };
                                                                              } else {
                                                                                _typeof7 = function _typeof7(obj) {
                                                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                };
                                                                              }

                                                                              return _typeof7(obj);
                                                                            }
                                                                            /******/


                                                                            (function (modules) {
                                                                              // webpackBootstrap

                                                                              /******/
                                                                              // The module cache

                                                                              /******/
                                                                              var installedModules = {};
                                                                              /******/

                                                                              /******/
                                                                              // The require function

                                                                              /******/

                                                                              function __webpack_require__(moduleId) {
                                                                                /******/

                                                                                /******/
                                                                                // Check if module is in cache

                                                                                /******/
                                                                                if (installedModules[moduleId]) {
                                                                                  /******/
                                                                                  return installedModules[moduleId].exports;
                                                                                  /******/
                                                                                }
                                                                                /******/
                                                                                // Create a new module (and put it into the cache)

                                                                                /******/


                                                                                var module = installedModules[moduleId] = {
                                                                                  /******/
                                                                                  i: moduleId,

                                                                                  /******/
                                                                                  l: false,

                                                                                  /******/
                                                                                  exports: {}
                                                                                  /******/

                                                                                };
                                                                                /******/

                                                                                /******/
                                                                                // Execute the module function

                                                                                /******/

                                                                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                /******/

                                                                                /******/
                                                                                // Flag the module as loaded

                                                                                /******/

                                                                                module.l = true;
                                                                                /******/

                                                                                /******/
                                                                                // Return the exports of the module

                                                                                /******/

                                                                                return module.exports;
                                                                                /******/
                                                                              }
                                                                              /******/

                                                                              /******/

                                                                              /******/
                                                                              // expose the modules object (__webpack_modules__)

                                                                              /******/


                                                                              __webpack_require__.m = modules;
                                                                              /******/

                                                                              /******/
                                                                              // expose the module cache

                                                                              /******/

                                                                              __webpack_require__.c = installedModules;
                                                                              /******/

                                                                              /******/
                                                                              // define getter function for harmony exports

                                                                              /******/

                                                                              __webpack_require__.d = function (exports, name, getter) {
                                                                                /******/
                                                                                if (!__webpack_require__.o(exports, name)) {
                                                                                  /******/
                                                                                  Object.defineProperty(exports, name, {
                                                                                    enumerable: true,
                                                                                    get: getter
                                                                                  });
                                                                                  /******/
                                                                                }
                                                                                /******/

                                                                              };
                                                                              /******/

                                                                              /******/
                                                                              // define __esModule on exports

                                                                              /******/


                                                                              __webpack_require__.r = function (exports) {
                                                                                /******/
                                                                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                  /******/
                                                                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                    value: 'Module'
                                                                                  });
                                                                                  /******/
                                                                                }
                                                                                /******/


                                                                                Object.defineProperty(exports, '__esModule', {
                                                                                  value: true
                                                                                });
                                                                                /******/
                                                                              };
                                                                              /******/

                                                                              /******/
                                                                              // create a fake namespace object

                                                                              /******/
                                                                              // mode & 1: value is a module id, require it

                                                                              /******/
                                                                              // mode & 2: merge all properties of value into the ns

                                                                              /******/
                                                                              // mode & 4: return value when already ns object

                                                                              /******/
                                                                              // mode & 8|1: behave like require

                                                                              /******/


                                                                              __webpack_require__.t = function (value, mode) {
                                                                                /******/
                                                                                if (mode & 1) value = __webpack_require__(value);
                                                                                /******/

                                                                                if (mode & 8) return value;
                                                                                /******/

                                                                                if (mode & 4 && _typeof7(value) === 'object' && value && value.__esModule) return value;
                                                                                /******/

                                                                                var ns = Object.create(null);
                                                                                /******/

                                                                                __webpack_require__.r(ns);
                                                                                /******/


                                                                                Object.defineProperty(ns, 'default', {
                                                                                  enumerable: true,
                                                                                  value: value
                                                                                });
                                                                                /******/

                                                                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                  __webpack_require__.d(ns, key, function (key) {
                                                                                    return value[key];
                                                                                  }.bind(null, key));
                                                                                }
                                                                                /******/

                                                                                return ns;
                                                                                /******/
                                                                              };
                                                                              /******/

                                                                              /******/
                                                                              // getDefaultExport function for compatibility with non-harmony modules

                                                                              /******/


                                                                              __webpack_require__.n = function (module) {
                                                                                /******/
                                                                                var getter = module && module.__esModule ?
                                                                                /******/
                                                                                function getDefault() {
                                                                                  return module['default'];
                                                                                } :
                                                                                /******/
                                                                                function getModuleExports() {
                                                                                  return module;
                                                                                };
                                                                                /******/

                                                                                __webpack_require__.d(getter, 'a', getter);
                                                                                /******/


                                                                                return getter;
                                                                                /******/
                                                                              };
                                                                              /******/

                                                                              /******/
                                                                              // Object.prototype.hasOwnProperty.call

                                                                              /******/


                                                                              __webpack_require__.o = function (object, property) {
                                                                                return Object.prototype.hasOwnProperty.call(object, property);
                                                                              };
                                                                              /******/

                                                                              /******/
                                                                              // __webpack_public_path__

                                                                              /******/


                                                                              __webpack_require__.p = "/";
                                                                              /******/

                                                                              /******/

                                                                              /******/
                                                                              // Load entry module and return exports

                                                                              /******/

                                                                              return __webpack_require__(__webpack_require__.s = 43);
                                                                              /******/
                                                                            })(
                                                                            /************************************************************************/

                                                                            /******/
                                                                            {
                                                                              /***/
                                                                              "./redux-core/assets/js/media/media.js":
                                                                              /*!*********************************************!*\
                                                                                !*** ./redux-core/assets/js/media/media.js ***!
                                                                                \*********************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                function _typeof6(obj) {
                                                                                  "@babel/helpers - typeof";

                                                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                    _typeof6 = function _typeof6(obj) {
                                                                                      return typeof obj;
                                                                                    };
                                                                                  } else {
                                                                                    _typeof6 = function _typeof6(obj) {
                                                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                    };
                                                                                  }

                                                                                  return _typeof6(obj);
                                                                                }
                                                                                /******/


                                                                                (function (modules) {
                                                                                  // webpackBootstrap

                                                                                  /******/
                                                                                  // The module cache

                                                                                  /******/
                                                                                  var installedModules = {};
                                                                                  /******/

                                                                                  /******/
                                                                                  // The require function

                                                                                  /******/

                                                                                  function __webpack_require__(moduleId) {
                                                                                    /******/

                                                                                    /******/
                                                                                    // Check if module is in cache

                                                                                    /******/
                                                                                    if (installedModules[moduleId]) {
                                                                                      /******/
                                                                                      return installedModules[moduleId].exports;
                                                                                      /******/
                                                                                    }
                                                                                    /******/
                                                                                    // Create a new module (and put it into the cache)

                                                                                    /******/


                                                                                    var module = installedModules[moduleId] = {
                                                                                      /******/
                                                                                      i: moduleId,

                                                                                      /******/
                                                                                      l: false,

                                                                                      /******/
                                                                                      exports: {}
                                                                                      /******/

                                                                                    };
                                                                                    /******/

                                                                                    /******/
                                                                                    // Execute the module function

                                                                                    /******/

                                                                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                    /******/

                                                                                    /******/
                                                                                    // Flag the module as loaded

                                                                                    /******/

                                                                                    module.l = true;
                                                                                    /******/

                                                                                    /******/
                                                                                    // Return the exports of the module

                                                                                    /******/

                                                                                    return module.exports;
                                                                                    /******/
                                                                                  }
                                                                                  /******/

                                                                                  /******/

                                                                                  /******/
                                                                                  // expose the modules object (__webpack_modules__)

                                                                                  /******/


                                                                                  __webpack_require__.m = modules;
                                                                                  /******/

                                                                                  /******/
                                                                                  // expose the module cache

                                                                                  /******/

                                                                                  __webpack_require__.c = installedModules;
                                                                                  /******/

                                                                                  /******/
                                                                                  // define getter function for harmony exports

                                                                                  /******/

                                                                                  __webpack_require__.d = function (exports, name, getter) {
                                                                                    /******/
                                                                                    if (!__webpack_require__.o(exports, name)) {
                                                                                      /******/
                                                                                      Object.defineProperty(exports, name, {
                                                                                        enumerable: true,
                                                                                        get: getter
                                                                                      });
                                                                                      /******/
                                                                                    }
                                                                                    /******/

                                                                                  };
                                                                                  /******/

                                                                                  /******/
                                                                                  // define __esModule on exports

                                                                                  /******/


                                                                                  __webpack_require__.r = function (exports) {
                                                                                    /******/
                                                                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                      /******/
                                                                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                        value: 'Module'
                                                                                      });
                                                                                      /******/
                                                                                    }
                                                                                    /******/


                                                                                    Object.defineProperty(exports, '__esModule', {
                                                                                      value: true
                                                                                    });
                                                                                    /******/
                                                                                  };
                                                                                  /******/

                                                                                  /******/
                                                                                  // create a fake namespace object

                                                                                  /******/
                                                                                  // mode & 1: value is a module id, require it

                                                                                  /******/
                                                                                  // mode & 2: merge all properties of value into the ns

                                                                                  /******/
                                                                                  // mode & 4: return value when already ns object

                                                                                  /******/
                                                                                  // mode & 8|1: behave like require

                                                                                  /******/


                                                                                  __webpack_require__.t = function (value, mode) {
                                                                                    /******/
                                                                                    if (mode & 1) value = __webpack_require__(value);
                                                                                    /******/

                                                                                    if (mode & 8) return value;
                                                                                    /******/

                                                                                    if (mode & 4 && _typeof6(value) === 'object' && value && value.__esModule) return value;
                                                                                    /******/

                                                                                    var ns = Object.create(null);
                                                                                    /******/

                                                                                    __webpack_require__.r(ns);
                                                                                    /******/


                                                                                    Object.defineProperty(ns, 'default', {
                                                                                      enumerable: true,
                                                                                      value: value
                                                                                    });
                                                                                    /******/

                                                                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                      __webpack_require__.d(ns, key, function (key) {
                                                                                        return value[key];
                                                                                      }.bind(null, key));
                                                                                    }
                                                                                    /******/

                                                                                    return ns;
                                                                                    /******/
                                                                                  };
                                                                                  /******/

                                                                                  /******/
                                                                                  // getDefaultExport function for compatibility with non-harmony modules

                                                                                  /******/


                                                                                  __webpack_require__.n = function (module) {
                                                                                    /******/
                                                                                    var getter = module && module.__esModule ?
                                                                                    /******/
                                                                                    function getDefault() {
                                                                                      return module['default'];
                                                                                    } :
                                                                                    /******/
                                                                                    function getModuleExports() {
                                                                                      return module;
                                                                                    };
                                                                                    /******/

                                                                                    __webpack_require__.d(getter, 'a', getter);
                                                                                    /******/


                                                                                    return getter;
                                                                                    /******/
                                                                                  };
                                                                                  /******/

                                                                                  /******/
                                                                                  // Object.prototype.hasOwnProperty.call

                                                                                  /******/


                                                                                  __webpack_require__.o = function (object, property) {
                                                                                    return Object.prototype.hasOwnProperty.call(object, property);
                                                                                  };
                                                                                  /******/

                                                                                  /******/
                                                                                  // __webpack_public_path__

                                                                                  /******/


                                                                                  __webpack_require__.p = "/";
                                                                                  /******/

                                                                                  /******/

                                                                                  /******/
                                                                                  // Load entry module and return exports

                                                                                  /******/

                                                                                  return __webpack_require__(__webpack_require__.s = 43);
                                                                                  /******/
                                                                                })(
                                                                                /************************************************************************/

                                                                                /******/
                                                                                {
                                                                                  /***/
                                                                                  "./redux-core/assets/js/media/media.js":
                                                                                  /*!*********************************************!*\
                                                                                    !*** ./redux-core/assets/js/media/media.js ***!
                                                                                    \*********************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                    function _typeof5(obj) {
                                                                                      "@babel/helpers - typeof";

                                                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                        _typeof5 = function _typeof5(obj) {
                                                                                          return typeof obj;
                                                                                        };
                                                                                      } else {
                                                                                        _typeof5 = function _typeof5(obj) {
                                                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                        };
                                                                                      }

                                                                                      return _typeof5(obj);
                                                                                    }
                                                                                    /******/


                                                                                    (function (modules) {
                                                                                      // webpackBootstrap

                                                                                      /******/
                                                                                      // The module cache

                                                                                      /******/
                                                                                      var installedModules = {};
                                                                                      /******/

                                                                                      /******/
                                                                                      // The require function

                                                                                      /******/

                                                                                      function __webpack_require__(moduleId) {
                                                                                        /******/

                                                                                        /******/
                                                                                        // Check if module is in cache

                                                                                        /******/
                                                                                        if (installedModules[moduleId]) {
                                                                                          /******/
                                                                                          return installedModules[moduleId].exports;
                                                                                          /******/
                                                                                        }
                                                                                        /******/
                                                                                        // Create a new module (and put it into the cache)

                                                                                        /******/


                                                                                        var module = installedModules[moduleId] = {
                                                                                          /******/
                                                                                          i: moduleId,

                                                                                          /******/
                                                                                          l: false,

                                                                                          /******/
                                                                                          exports: {}
                                                                                          /******/

                                                                                        };
                                                                                        /******/

                                                                                        /******/
                                                                                        // Execute the module function

                                                                                        /******/

                                                                                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                        /******/

                                                                                        /******/
                                                                                        // Flag the module as loaded

                                                                                        /******/

                                                                                        module.l = true;
                                                                                        /******/

                                                                                        /******/
                                                                                        // Return the exports of the module

                                                                                        /******/

                                                                                        return module.exports;
                                                                                        /******/
                                                                                      }
                                                                                      /******/

                                                                                      /******/

                                                                                      /******/
                                                                                      // expose the modules object (__webpack_modules__)

                                                                                      /******/


                                                                                      __webpack_require__.m = modules;
                                                                                      /******/

                                                                                      /******/
                                                                                      // expose the module cache

                                                                                      /******/

                                                                                      __webpack_require__.c = installedModules;
                                                                                      /******/

                                                                                      /******/
                                                                                      // define getter function for harmony exports

                                                                                      /******/

                                                                                      __webpack_require__.d = function (exports, name, getter) {
                                                                                        /******/
                                                                                        if (!__webpack_require__.o(exports, name)) {
                                                                                          /******/
                                                                                          Object.defineProperty(exports, name, {
                                                                                            enumerable: true,
                                                                                            get: getter
                                                                                          });
                                                                                          /******/
                                                                                        }
                                                                                        /******/

                                                                                      };
                                                                                      /******/

                                                                                      /******/
                                                                                      // define __esModule on exports

                                                                                      /******/


                                                                                      __webpack_require__.r = function (exports) {
                                                                                        /******/
                                                                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                          /******/
                                                                                          Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                            value: 'Module'
                                                                                          });
                                                                                          /******/
                                                                                        }
                                                                                        /******/


                                                                                        Object.defineProperty(exports, '__esModule', {
                                                                                          value: true
                                                                                        });
                                                                                        /******/
                                                                                      };
                                                                                      /******/

                                                                                      /******/
                                                                                      // create a fake namespace object

                                                                                      /******/
                                                                                      // mode & 1: value is a module id, require it

                                                                                      /******/
                                                                                      // mode & 2: merge all properties of value into the ns

                                                                                      /******/
                                                                                      // mode & 4: return value when already ns object

                                                                                      /******/
                                                                                      // mode & 8|1: behave like require

                                                                                      /******/


                                                                                      __webpack_require__.t = function (value, mode) {
                                                                                        /******/
                                                                                        if (mode & 1) value = __webpack_require__(value);
                                                                                        /******/

                                                                                        if (mode & 8) return value;
                                                                                        /******/

                                                                                        if (mode & 4 && _typeof5(value) === 'object' && value && value.__esModule) return value;
                                                                                        /******/

                                                                                        var ns = Object.create(null);
                                                                                        /******/

                                                                                        __webpack_require__.r(ns);
                                                                                        /******/


                                                                                        Object.defineProperty(ns, 'default', {
                                                                                          enumerable: true,
                                                                                          value: value
                                                                                        });
                                                                                        /******/

                                                                                        if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                          __webpack_require__.d(ns, key, function (key) {
                                                                                            return value[key];
                                                                                          }.bind(null, key));
                                                                                        }
                                                                                        /******/

                                                                                        return ns;
                                                                                        /******/
                                                                                      };
                                                                                      /******/

                                                                                      /******/
                                                                                      // getDefaultExport function for compatibility with non-harmony modules

                                                                                      /******/


                                                                                      __webpack_require__.n = function (module) {
                                                                                        /******/
                                                                                        var getter = module && module.__esModule ?
                                                                                        /******/
                                                                                        function getDefault() {
                                                                                          return module['default'];
                                                                                        } :
                                                                                        /******/
                                                                                        function getModuleExports() {
                                                                                          return module;
                                                                                        };
                                                                                        /******/

                                                                                        __webpack_require__.d(getter, 'a', getter);
                                                                                        /******/


                                                                                        return getter;
                                                                                        /******/
                                                                                      };
                                                                                      /******/

                                                                                      /******/
                                                                                      // Object.prototype.hasOwnProperty.call

                                                                                      /******/


                                                                                      __webpack_require__.o = function (object, property) {
                                                                                        return Object.prototype.hasOwnProperty.call(object, property);
                                                                                      };
                                                                                      /******/

                                                                                      /******/
                                                                                      // __webpack_public_path__

                                                                                      /******/


                                                                                      __webpack_require__.p = "/";
                                                                                      /******/

                                                                                      /******/

                                                                                      /******/
                                                                                      // Load entry module and return exports

                                                                                      /******/

                                                                                      return __webpack_require__(__webpack_require__.s = 43);
                                                                                      /******/
                                                                                    })(
                                                                                    /************************************************************************/

                                                                                    /******/
                                                                                    {
                                                                                      /***/
                                                                                      "./redux-core/assets/js/media/media.js":
                                                                                      /*!*********************************************!*\
                                                                                        !*** ./redux-core/assets/js/media/media.js ***!
                                                                                        \*********************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                        function _typeof4(obj) {
                                                                                          "@babel/helpers - typeof";

                                                                                          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                            _typeof4 = function _typeof4(obj) {
                                                                                              return typeof obj;
                                                                                            };
                                                                                          } else {
                                                                                            _typeof4 = function _typeof4(obj) {
                                                                                              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                            };
                                                                                          }

                                                                                          return _typeof4(obj);
                                                                                        }
                                                                                        /******/


                                                                                        (function (modules) {
                                                                                          // webpackBootstrap

                                                                                          /******/
                                                                                          // The module cache

                                                                                          /******/
                                                                                          var installedModules = {};
                                                                                          /******/

                                                                                          /******/
                                                                                          // The require function

                                                                                          /******/

                                                                                          function __webpack_require__(moduleId) {
                                                                                            /******/

                                                                                            /******/
                                                                                            // Check if module is in cache

                                                                                            /******/
                                                                                            if (installedModules[moduleId]) {
                                                                                              /******/
                                                                                              return installedModules[moduleId].exports;
                                                                                              /******/
                                                                                            }
                                                                                            /******/
                                                                                            // Create a new module (and put it into the cache)

                                                                                            /******/


                                                                                            var module = installedModules[moduleId] = {
                                                                                              /******/
                                                                                              i: moduleId,

                                                                                              /******/
                                                                                              l: false,

                                                                                              /******/
                                                                                              exports: {}
                                                                                              /******/

                                                                                            };
                                                                                            /******/

                                                                                            /******/
                                                                                            // Execute the module function

                                                                                            /******/

                                                                                            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                            /******/

                                                                                            /******/
                                                                                            // Flag the module as loaded

                                                                                            /******/

                                                                                            module.l = true;
                                                                                            /******/

                                                                                            /******/
                                                                                            // Return the exports of the module

                                                                                            /******/

                                                                                            return module.exports;
                                                                                            /******/
                                                                                          }
                                                                                          /******/

                                                                                          /******/

                                                                                          /******/
                                                                                          // expose the modules object (__webpack_modules__)

                                                                                          /******/


                                                                                          __webpack_require__.m = modules;
                                                                                          /******/

                                                                                          /******/
                                                                                          // expose the module cache

                                                                                          /******/

                                                                                          __webpack_require__.c = installedModules;
                                                                                          /******/

                                                                                          /******/
                                                                                          // define getter function for harmony exports

                                                                                          /******/

                                                                                          __webpack_require__.d = function (exports, name, getter) {
                                                                                            /******/
                                                                                            if (!__webpack_require__.o(exports, name)) {
                                                                                              /******/
                                                                                              Object.defineProperty(exports, name, {
                                                                                                enumerable: true,
                                                                                                get: getter
                                                                                              });
                                                                                              /******/
                                                                                            }
                                                                                            /******/

                                                                                          };
                                                                                          /******/

                                                                                          /******/
                                                                                          // define __esModule on exports

                                                                                          /******/


                                                                                          __webpack_require__.r = function (exports) {
                                                                                            /******/
                                                                                            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                              /******/
                                                                                              Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                                value: 'Module'
                                                                                              });
                                                                                              /******/
                                                                                            }
                                                                                            /******/


                                                                                            Object.defineProperty(exports, '__esModule', {
                                                                                              value: true
                                                                                            });
                                                                                            /******/
                                                                                          };
                                                                                          /******/

                                                                                          /******/
                                                                                          // create a fake namespace object

                                                                                          /******/
                                                                                          // mode & 1: value is a module id, require it

                                                                                          /******/
                                                                                          // mode & 2: merge all properties of value into the ns

                                                                                          /******/
                                                                                          // mode & 4: return value when already ns object

                                                                                          /******/
                                                                                          // mode & 8|1: behave like require

                                                                                          /******/


                                                                                          __webpack_require__.t = function (value, mode) {
                                                                                            /******/
                                                                                            if (mode & 1) value = __webpack_require__(value);
                                                                                            /******/

                                                                                            if (mode & 8) return value;
                                                                                            /******/

                                                                                            if (mode & 4 && _typeof4(value) === 'object' && value && value.__esModule) return value;
                                                                                            /******/

                                                                                            var ns = Object.create(null);
                                                                                            /******/

                                                                                            __webpack_require__.r(ns);
                                                                                            /******/


                                                                                            Object.defineProperty(ns, 'default', {
                                                                                              enumerable: true,
                                                                                              value: value
                                                                                            });
                                                                                            /******/

                                                                                            if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                              __webpack_require__.d(ns, key, function (key) {
                                                                                                return value[key];
                                                                                              }.bind(null, key));
                                                                                            }
                                                                                            /******/

                                                                                            return ns;
                                                                                            /******/
                                                                                          };
                                                                                          /******/

                                                                                          /******/
                                                                                          // getDefaultExport function for compatibility with non-harmony modules

                                                                                          /******/


                                                                                          __webpack_require__.n = function (module) {
                                                                                            /******/
                                                                                            var getter = module && module.__esModule ?
                                                                                            /******/
                                                                                            function getDefault() {
                                                                                              return module['default'];
                                                                                            } :
                                                                                            /******/
                                                                                            function getModuleExports() {
                                                                                              return module;
                                                                                            };
                                                                                            /******/

                                                                                            __webpack_require__.d(getter, 'a', getter);
                                                                                            /******/


                                                                                            return getter;
                                                                                            /******/
                                                                                          };
                                                                                          /******/

                                                                                          /******/
                                                                                          // Object.prototype.hasOwnProperty.call

                                                                                          /******/


                                                                                          __webpack_require__.o = function (object, property) {
                                                                                            return Object.prototype.hasOwnProperty.call(object, property);
                                                                                          };
                                                                                          /******/

                                                                                          /******/
                                                                                          // __webpack_public_path__

                                                                                          /******/


                                                                                          __webpack_require__.p = "/";
                                                                                          /******/

                                                                                          /******/

                                                                                          /******/
                                                                                          // Load entry module and return exports

                                                                                          /******/

                                                                                          return __webpack_require__(__webpack_require__.s = 43);
                                                                                          /******/
                                                                                        })(
                                                                                        /************************************************************************/

                                                                                        /******/
                                                                                        {
                                                                                          /***/
                                                                                          "./redux-core/assets/js/media/media.js":
                                                                                          /*!*********************************************!*\
                                                                                            !*** ./redux-core/assets/js/media/media.js ***!
                                                                                            \*********************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                            function _typeof3(obj) {
                                                                                              "@babel/helpers - typeof";

                                                                                              if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                                _typeof3 = function _typeof3(obj) {
                                                                                                  return typeof obj;
                                                                                                };
                                                                                              } else {
                                                                                                _typeof3 = function _typeof3(obj) {
                                                                                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                                };
                                                                                              }

                                                                                              return _typeof3(obj);
                                                                                            }
                                                                                            /******/


                                                                                            (function (modules) {
                                                                                              // webpackBootstrap

                                                                                              /******/
                                                                                              // The module cache

                                                                                              /******/
                                                                                              var installedModules = {};
                                                                                              /******/

                                                                                              /******/
                                                                                              // The require function

                                                                                              /******/

                                                                                              function __webpack_require__(moduleId) {
                                                                                                /******/

                                                                                                /******/
                                                                                                // Check if module is in cache

                                                                                                /******/
                                                                                                if (installedModules[moduleId]) {
                                                                                                  /******/
                                                                                                  return installedModules[moduleId].exports;
                                                                                                  /******/
                                                                                                }
                                                                                                /******/
                                                                                                // Create a new module (and put it into the cache)

                                                                                                /******/


                                                                                                var module = installedModules[moduleId] = {
                                                                                                  /******/
                                                                                                  i: moduleId,

                                                                                                  /******/
                                                                                                  l: false,

                                                                                                  /******/
                                                                                                  exports: {}
                                                                                                  /******/

                                                                                                };
                                                                                                /******/

                                                                                                /******/
                                                                                                // Execute the module function

                                                                                                /******/

                                                                                                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                                /******/

                                                                                                /******/
                                                                                                // Flag the module as loaded

                                                                                                /******/

                                                                                                module.l = true;
                                                                                                /******/

                                                                                                /******/
                                                                                                // Return the exports of the module

                                                                                                /******/

                                                                                                return module.exports;
                                                                                                /******/
                                                                                              }
                                                                                              /******/

                                                                                              /******/

                                                                                              /******/
                                                                                              // expose the modules object (__webpack_modules__)

                                                                                              /******/


                                                                                              __webpack_require__.m = modules;
                                                                                              /******/

                                                                                              /******/
                                                                                              // expose the module cache

                                                                                              /******/

                                                                                              __webpack_require__.c = installedModules;
                                                                                              /******/

                                                                                              /******/
                                                                                              // define getter function for harmony exports

                                                                                              /******/

                                                                                              __webpack_require__.d = function (exports, name, getter) {
                                                                                                /******/
                                                                                                if (!__webpack_require__.o(exports, name)) {
                                                                                                  /******/
                                                                                                  Object.defineProperty(exports, name, {
                                                                                                    enumerable: true,
                                                                                                    get: getter
                                                                                                  });
                                                                                                  /******/
                                                                                                }
                                                                                                /******/

                                                                                              };
                                                                                              /******/

                                                                                              /******/
                                                                                              // define __esModule on exports

                                                                                              /******/


                                                                                              __webpack_require__.r = function (exports) {
                                                                                                /******/
                                                                                                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                                  /******/
                                                                                                  Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                                    value: 'Module'
                                                                                                  });
                                                                                                  /******/
                                                                                                }
                                                                                                /******/


                                                                                                Object.defineProperty(exports, '__esModule', {
                                                                                                  value: true
                                                                                                });
                                                                                                /******/
                                                                                              };
                                                                                              /******/

                                                                                              /******/
                                                                                              // create a fake namespace object

                                                                                              /******/
                                                                                              // mode & 1: value is a module id, require it

                                                                                              /******/
                                                                                              // mode & 2: merge all properties of value into the ns

                                                                                              /******/
                                                                                              // mode & 4: return value when already ns object

                                                                                              /******/
                                                                                              // mode & 8|1: behave like require

                                                                                              /******/


                                                                                              __webpack_require__.t = function (value, mode) {
                                                                                                /******/
                                                                                                if (mode & 1) value = __webpack_require__(value);
                                                                                                /******/

                                                                                                if (mode & 8) return value;
                                                                                                /******/

                                                                                                if (mode & 4 && _typeof3(value) === 'object' && value && value.__esModule) return value;
                                                                                                /******/

                                                                                                var ns = Object.create(null);
                                                                                                /******/

                                                                                                __webpack_require__.r(ns);
                                                                                                /******/


                                                                                                Object.defineProperty(ns, 'default', {
                                                                                                  enumerable: true,
                                                                                                  value: value
                                                                                                });
                                                                                                /******/

                                                                                                if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                                  __webpack_require__.d(ns, key, function (key) {
                                                                                                    return value[key];
                                                                                                  }.bind(null, key));
                                                                                                }
                                                                                                /******/

                                                                                                return ns;
                                                                                                /******/
                                                                                              };
                                                                                              /******/

                                                                                              /******/
                                                                                              // getDefaultExport function for compatibility with non-harmony modules

                                                                                              /******/


                                                                                              __webpack_require__.n = function (module) {
                                                                                                /******/
                                                                                                var getter = module && module.__esModule ?
                                                                                                /******/
                                                                                                function getDefault() {
                                                                                                  return module['default'];
                                                                                                } :
                                                                                                /******/
                                                                                                function getModuleExports() {
                                                                                                  return module;
                                                                                                };
                                                                                                /******/

                                                                                                __webpack_require__.d(getter, 'a', getter);
                                                                                                /******/


                                                                                                return getter;
                                                                                                /******/
                                                                                              };
                                                                                              /******/

                                                                                              /******/
                                                                                              // Object.prototype.hasOwnProperty.call

                                                                                              /******/


                                                                                              __webpack_require__.o = function (object, property) {
                                                                                                return Object.prototype.hasOwnProperty.call(object, property);
                                                                                              };
                                                                                              /******/

                                                                                              /******/
                                                                                              // __webpack_public_path__

                                                                                              /******/


                                                                                              __webpack_require__.p = "/";
                                                                                              /******/

                                                                                              /******/

                                                                                              /******/
                                                                                              // Load entry module and return exports

                                                                                              /******/

                                                                                              return __webpack_require__(__webpack_require__.s = 43);
                                                                                              /******/
                                                                                            })(
                                                                                            /************************************************************************/

                                                                                            /******/
                                                                                            {
                                                                                              /***/
                                                                                              "./redux-core/assets/js/media/media.js":
                                                                                              /*!*********************************************!*\
                                                                                                !*** ./redux-core/assets/js/media/media.js ***!
                                                                                                \*********************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                                function _typeof2(obj) {
                                                                                                  "@babel/helpers - typeof";

                                                                                                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                                    _typeof2 = function _typeof2(obj) {
                                                                                                      return typeof obj;
                                                                                                    };
                                                                                                  } else {
                                                                                                    _typeof2 = function _typeof2(obj) {
                                                                                                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                                    };
                                                                                                  }

                                                                                                  return _typeof2(obj);
                                                                                                }
                                                                                                /******/


                                                                                                (function (modules) {
                                                                                                  // webpackBootstrap

                                                                                                  /******/
                                                                                                  // The module cache

                                                                                                  /******/
                                                                                                  var installedModules = {};
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // The require function

                                                                                                  /******/

                                                                                                  function __webpack_require__(moduleId) {
                                                                                                    /******/

                                                                                                    /******/
                                                                                                    // Check if module is in cache

                                                                                                    /******/
                                                                                                    if (installedModules[moduleId]) {
                                                                                                      /******/
                                                                                                      return installedModules[moduleId].exports;
                                                                                                      /******/
                                                                                                    }
                                                                                                    /******/
                                                                                                    // Create a new module (and put it into the cache)

                                                                                                    /******/


                                                                                                    var module = installedModules[moduleId] = {
                                                                                                      /******/
                                                                                                      i: moduleId,

                                                                                                      /******/
                                                                                                      l: false,

                                                                                                      /******/
                                                                                                      exports: {}
                                                                                                      /******/

                                                                                                    };
                                                                                                    /******/

                                                                                                    /******/
                                                                                                    // Execute the module function

                                                                                                    /******/

                                                                                                    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                                                                                    /******/

                                                                                                    /******/
                                                                                                    // Flag the module as loaded

                                                                                                    /******/

                                                                                                    module.l = true;
                                                                                                    /******/

                                                                                                    /******/
                                                                                                    // Return the exports of the module

                                                                                                    /******/

                                                                                                    return module.exports;
                                                                                                    /******/
                                                                                                  }
                                                                                                  /******/

                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // expose the modules object (__webpack_modules__)

                                                                                                  /******/


                                                                                                  __webpack_require__.m = modules;
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // expose the module cache

                                                                                                  /******/

                                                                                                  __webpack_require__.c = installedModules;
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // define getter function for harmony exports

                                                                                                  /******/

                                                                                                  __webpack_require__.d = function (exports, name, getter) {
                                                                                                    /******/
                                                                                                    if (!__webpack_require__.o(exports, name)) {
                                                                                                      /******/
                                                                                                      Object.defineProperty(exports, name, {
                                                                                                        enumerable: true,
                                                                                                        get: getter
                                                                                                      });
                                                                                                      /******/
                                                                                                    }
                                                                                                    /******/

                                                                                                  };
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // define __esModule on exports

                                                                                                  /******/


                                                                                                  __webpack_require__.r = function (exports) {
                                                                                                    /******/
                                                                                                    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                                                      /******/
                                                                                                      Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                                        value: 'Module'
                                                                                                      });
                                                                                                      /******/
                                                                                                    }
                                                                                                    /******/


                                                                                                    Object.defineProperty(exports, '__esModule', {
                                                                                                      value: true
                                                                                                    });
                                                                                                    /******/
                                                                                                  };
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // create a fake namespace object

                                                                                                  /******/
                                                                                                  // mode & 1: value is a module id, require it

                                                                                                  /******/
                                                                                                  // mode & 2: merge all properties of value into the ns

                                                                                                  /******/
                                                                                                  // mode & 4: return value when already ns object

                                                                                                  /******/
                                                                                                  // mode & 8|1: behave like require

                                                                                                  /******/


                                                                                                  __webpack_require__.t = function (value, mode) {
                                                                                                    /******/
                                                                                                    if (mode & 1) value = __webpack_require__(value);
                                                                                                    /******/

                                                                                                    if (mode & 8) return value;
                                                                                                    /******/

                                                                                                    if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
                                                                                                    /******/

                                                                                                    var ns = Object.create(null);
                                                                                                    /******/

                                                                                                    __webpack_require__.r(ns);
                                                                                                    /******/


                                                                                                    Object.defineProperty(ns, 'default', {
                                                                                                      enumerable: true,
                                                                                                      value: value
                                                                                                    });
                                                                                                    /******/

                                                                                                    if (mode & 2 && typeof value != 'string') for (var key in value) {
                                                                                                      __webpack_require__.d(ns, key, function (key) {
                                                                                                        return value[key];
                                                                                                      }.bind(null, key));
                                                                                                    }
                                                                                                    /******/

                                                                                                    return ns;
                                                                                                    /******/
                                                                                                  };
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // getDefaultExport function for compatibility with non-harmony modules

                                                                                                  /******/


                                                                                                  __webpack_require__.n = function (module) {
                                                                                                    /******/
                                                                                                    var getter = module && module.__esModule ?
                                                                                                    /******/
                                                                                                    function getDefault() {
                                                                                                      return module['default'];
                                                                                                    } :
                                                                                                    /******/
                                                                                                    function getModuleExports() {
                                                                                                      return module;
                                                                                                    };
                                                                                                    /******/

                                                                                                    __webpack_require__.d(getter, 'a', getter);
                                                                                                    /******/


                                                                                                    return getter;
                                                                                                    /******/
                                                                                                  };
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // Object.prototype.hasOwnProperty.call

                                                                                                  /******/


                                                                                                  __webpack_require__.o = function (object, property) {
                                                                                                    return Object.prototype.hasOwnProperty.call(object, property);
                                                                                                  };
                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // __webpack_public_path__

                                                                                                  /******/


                                                                                                  __webpack_require__.p = "/";
                                                                                                  /******/

                                                                                                  /******/

                                                                                                  /******/
                                                                                                  // Load entry module and return exports

                                                                                                  /******/

                                                                                                  return __webpack_require__(__webpack_require__.s = 43);
                                                                                                  /******/
                                                                                                })(
                                                                                                /************************************************************************/

                                                                                                /******/
                                                                                                {
                                                                                                  /***/
                                                                                                  "./redux-core/assets/js/media/media.js":
                                                                                                  /*!*********************************************!*\
                                                                                                    !*** ./redux-core/assets/js/media/media.js ***!
                                                                                                    \*********************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function reduxCoreAssetsJsMediaMediaJs(module, exports) {
                                                                                                    function _typeof(obj) {
                                                                                                      "@babel/helpers - typeof";

                                                                                                      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                                                                                                        _typeof = function _typeof(obj) {
                                                                                                          return typeof obj;
                                                                                                        };
                                                                                                      } else {
                                                                                                        _typeof = function _typeof(obj) {
                                                                                                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                                                                                        };
                                                                                                      }

                                                                                                      return _typeof(obj);
                                                                                                    }
                                                                                                    /*global redux_change, wp, redux */

                                                                                                    /**
                                                                                                     * Media Uploader
                                                                                                     * Dependencies        : jquery, wp media uploader
                                                                                                     * Feature added by    : Smartik - http://smartik.ws/
                                                                                                     * Date                  : 05.28.2013
                                                                                                     */


                                                                                                    (function ($) {
                                                                                                      'use strict';

                                                                                                      var isFiltered;
                                                                                                      redux.field_objects = redux.field_objects || {};
                                                                                                      redux.field_objects.media = redux.field_objects.media || {};

                                                                                                      redux.field_objects.media.init = function (selector) {
                                                                                                        if (!selector) {
                                                                                                          selector = $(document).find('.redux-group-tab:visible').find('.redux-container-media:visible');
                                                                                                        }

                                                                                                        $(selector).each(function () {
                                                                                                          var el = $(this);
                                                                                                          var parent = el;

                                                                                                          if (!el.hasClass('redux-field-container')) {
                                                                                                            parent = el.parents('.redux-field-container:first');
                                                                                                          }

                                                                                                          if (parent.is(':hidden')) {
                                                                                                            return;
                                                                                                          }

                                                                                                          if (parent.hasClass('redux-field-init')) {
                                                                                                            parent.removeClass('redux-field-init');
                                                                                                          } else {
                                                                                                            return;
                                                                                                          }

                                                                                                          isFiltered = false; // Remove the image button.

                                                                                                          el.find('.remove-image, .remove-file').unbind('click').on('click', function () {
                                                                                                            redux.field_objects.media.removeFile($(this).parents('fieldset.redux-field:first'));
                                                                                                          }); // Upload media button.

                                                                                                          el.find('.media_upload_button').unbind().on('click', function (event) {
                                                                                                            redux.field_objects.media.addFile(event, $(this).parents('fieldset.redux-field:first'));
                                                                                                          });
                                                                                                        });
                                                                                                      }; // Add a file via the wp.media function.


                                                                                                      redux.field_objects.media.addFile = function (event, selector) {
                                                                                                        var frame;
                                                                                                        var libFilter;
                                                                                                        var filter;
                                                                                                        var data;
                                                                                                        var thumbSrc;
                                                                                                        var height;
                                                                                                        var key;
                                                                                                        var object;
                                                                                                        var jQueryel = $(this);
                                                                                                        event.preventDefault(); // If the media frame already exists, reopen it.

                                                                                                        if (frame) {
                                                                                                          frame.open();
                                                                                                          return;
                                                                                                        } // Get library filter data.


                                                                                                        filter = $(selector).find('.library-filter').data('lib-filter'); // Must exist to do decoding.

                                                                                                        if (undefined !== filter) {
                                                                                                          if ('' !== filter) {
                                                                                                            libFilter = [];
                                                                                                            isFiltered = true;
                                                                                                            filter = decodeURIComponent(filter);
                                                                                                            filter = JSON.parse(filter);
                                                                                                            $.each(filter, function (index, value) {
                                                                                                              index = null;
                                                                                                              libFilter.push(value);
                                                                                                            });
                                                                                                          }
                                                                                                        } // Create the media frame.


                                                                                                        frame = wp.media({
                                                                                                          multiple: false,
                                                                                                          library: {
                                                                                                            type: libFilter
                                                                                                          },
                                                                                                          // Only allow images.
                                                                                                          // Set the title of the modal.
                                                                                                          title: jQueryel.data('choose'),
                                                                                                          // Customize the submit button.
                                                                                                          button: {
                                                                                                            // Set the text of the button.
                                                                                                            text: jQueryel.data('update') // Tell the button not to close the modal, since we're
                                                                                                            // going to refresh the page when the image is selected.

                                                                                                          }
                                                                                                        }); // When an image is selected, run a callback.

                                                                                                        frame.on('select', function () {
                                                                                                          // Grab the selected attachment.
                                                                                                          var attachment = frame.state().get('selection').first();
                                                                                                          frame.close();
                                                                                                          data = $(selector).find('.data').data();

                                                                                                          if ('undefined' === typeof redux.field_objects.media || undefined === _typeof(redux.field_objects.media)) {
                                                                                                            redux.field_objects.media = {};
                                                                                                          }

                                                                                                          if (undefined === data || 'undefined' === data.mode) {
                                                                                                            data = {};
                                                                                                            data.mode = 'image';
                                                                                                          }

                                                                                                          if (true === isFiltered) {
                                                                                                            data.mode = 0;
                                                                                                          }

                                                                                                          if (0 === data.mode) {} else {
                                                                                                            if (false !== data.mode) {
                                                                                                              if (attachment.attributes.type !== data.mode) {
                                                                                                                if (attachment.attributes.subtype !== data.mode) {
                                                                                                                  return;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }

                                                                                                          selector.find('.upload').val(attachment.attributes.url);
                                                                                                          selector.find('.upload-id').val(attachment.attributes.id);
                                                                                                          selector.find('.upload-height').val(attachment.attributes.height);
                                                                                                          selector.find('.upload-width').val(attachment.attributes.width);
                                                                                                          redux_change($(selector).find('.upload-id'));
                                                                                                          thumbSrc = attachment.attributes.url;

                                                                                                          if ('undefined' !== typeof attachment.attributes.sizes && 'undefined' !== typeof attachment.attributes.sizes.thumbnail) {
                                                                                                            if ('thumbnail' === data.previewSize) {
                                                                                                              thumbSrc = attachment.attributes.sizes.thumbnail.url;
                                                                                                            }
                                                                                                          } else if ('undefined' !== typeof attachment.attributes.sizes) {
                                                                                                            height = attachment.attributes.height;

                                                                                                            for (key in attachment.attributes.sizes) {
                                                                                                              if (attachment.attributes.sizes.hasOwnProperty(key)) {
                                                                                                                object = attachment.attributes.sizes[key];

                                                                                                                if (object.height < height) {
                                                                                                                  height = object.height;
                                                                                                                  thumbSrc = object.url;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          } else {
                                                                                                            thumbSrc = attachment.attributes.icon;
                                                                                                          }

                                                                                                          selector.find('.upload-thumbnail').val(thumbSrc);

                                                                                                          if (!selector.find('.upload').hasClass('noPreview')) {
                                                                                                            selector.find('.screenshot').empty().hide().append('<img class="redux-option-image" src="' + thumbSrc + '">').slideDown('fast');
                                                                                                          }

                                                                                                          selector.find('.remove-image').removeClass('hide'); // Show "Remove" button.

                                                                                                          selector.find('.redux-background-properties').slideDown();
                                                                                                        }); // Finally, open the modal.

                                                                                                        frame.open();
                                                                                                      }; // Function to remove the image on click. Still requires a save.


                                                                                                      redux.field_objects.media.removeFile = function (selector) {
                                                                                                        var screenshot; // This shouldn't have been run...

                                                                                                        if (!selector.find('.remove-image').addClass('hide')) {
                                                                                                          return;
                                                                                                        }

                                                                                                        selector.find('.remove-image').addClass('hide'); // Hide "Remove" button.

                                                                                                        selector.find('.upload').val('');
                                                                                                        selector.find('.upload-id').val('');
                                                                                                        selector.find('.upload-height').val('');
                                                                                                        selector.find('.upload-width').val('');
                                                                                                        selector.find('.upload-thumbnail').val('');
                                                                                                        redux_change($(selector).find('.upload-id'));
                                                                                                        selector.find('.redux-background-properties').hide();
                                                                                                        screenshot = selector.find('.screenshot'); // Hide the screenshot.

                                                                                                        screenshot.slideUp();
                                                                                                        selector.find('.remove-file').unbind(); // We don't display the upload button if .upload-notice is present.
                                                                                                        // This means the user doesn't have the WordPress 3.5 Media Library Support.

                                                                                                        if (selector.find('.section-upload .upload-notice').length > 0) {
                                                                                                          selector.find('.media_upload_button').remove();
                                                                                                        }
                                                                                                      };
                                                                                                    })(jQuery);
                                                                                                    /***/

                                                                                                  },

                                                                                                  /***/
                                                                                                  43:
                                                                                                  /*!***************************************************!*\
                                                                                                    !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                                    \***************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function _(module, exports, __webpack_require__) {
                                                                                                    module.exports = __webpack_require__(
                                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                                    "./redux-core/assets/js/media/media.js");
                                                                                                    /***/
                                                                                                  }
                                                                                                  /******/

                                                                                                });
                                                                                                /***/

                                                                                              },

                                                                                              /***/
                                                                                              43:
                                                                                              /*!***************************************************!*\
                                                                                                !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                                \***************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function _(module, exports, __webpack_require__) {
                                                                                                module.exports = __webpack_require__(
                                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                                "./redux-core/assets/js/media/media.js");
                                                                                                /***/
                                                                                              }
                                                                                              /******/

                                                                                            });
                                                                                            /***/

                                                                                          },

                                                                                          /***/
                                                                                          43:
                                                                                          /*!***************************************************!*\
                                                                                            !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                            \***************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function _(module, exports, __webpack_require__) {
                                                                                            module.exports = __webpack_require__(
                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                            "./redux-core/assets/js/media/media.js");
                                                                                            /***/
                                                                                          }
                                                                                          /******/

                                                                                        });
                                                                                        /***/

                                                                                      },

                                                                                      /***/
                                                                                      43:
                                                                                      /*!***************************************************!*\
                                                                                        !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                        \***************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function _(module, exports, __webpack_require__) {
                                                                                        module.exports = __webpack_require__(
                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                        "./redux-core/assets/js/media/media.js");
                                                                                        /***/
                                                                                      }
                                                                                      /******/

                                                                                    });
                                                                                    /***/

                                                                                  },

                                                                                  /***/
                                                                                  43:
                                                                                  /*!***************************************************!*\
                                                                                    !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                    \***************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function _(module, exports, __webpack_require__) {
                                                                                    module.exports = __webpack_require__(
                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                    "./redux-core/assets/js/media/media.js");
                                                                                    /***/
                                                                                  }
                                                                                  /******/

                                                                                });
                                                                                /***/

                                                                              },

                                                                              /***/
                                                                              43:
                                                                              /*!***************************************************!*\
                                                                                !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                                \***************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function _(module, exports, __webpack_require__) {
                                                                                module.exports = __webpack_require__(
                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                                "./redux-core/assets/js/media/media.js");
                                                                                /***/
                                                                              }
                                                                              /******/

                                                                            });
                                                                            /***/

                                                                          },

                                                                          /***/
                                                                          43:
                                                                          /*!***************************************************!*\
                                                                            !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                            \***************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function _(module, exports, __webpack_require__) {
                                                                            module.exports = __webpack_require__(
                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                            "./redux-core/assets/js/media/media.js");
                                                                            /***/
                                                                          }
                                                                          /******/

                                                                        });
                                                                        /***/

                                                                      },

                                                                      /***/
                                                                      43:
                                                                      /*!***************************************************!*\
                                                                        !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                        \***************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function _(module, exports, __webpack_require__) {
                                                                        module.exports = __webpack_require__(
                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                        "./redux-core/assets/js/media/media.js");
                                                                        /***/
                                                                      }
                                                                      /******/

                                                                    });
                                                                    /***/

                                                                  },

                                                                  /***/
                                                                  43:
                                                                  /*!***************************************************!*\
                                                                    !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                    \***************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function _(module, exports, __webpack_require__) {
                                                                    module.exports = __webpack_require__(
                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                    "./redux-core/assets/js/media/media.js");
                                                                    /***/
                                                                  }
                                                                  /******/

                                                                });
                                                                /***/

                                                              },

                                                              /***/
                                                              43:
                                                              /*!***************************************************!*\
                                                                !*** multi ./redux-core/assets/js/media/media.js ***!
                                                                \***************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function _(module, exports, __webpack_require__) {
                                                                module.exports = __webpack_require__(
                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                                "./redux-core/assets/js/media/media.js");
                                                                /***/
                                                              }
                                                              /******/

                                                            });
                                                            /***/

                                                          },

                                                          /***/
                                                          43:
                                                          /*!***************************************************!*\
                                                            !*** multi ./redux-core/assets/js/media/media.js ***!
                                                            \***************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                            "./redux-core/assets/js/media/media.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      43:
                                                      /*!***************************************************!*\
                                                        !*** multi ./redux-core/assets/js/media/media.js ***!
                                                        \***************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        module.exports = __webpack_require__(
                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                        "./redux-core/assets/js/media/media.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  43:
                                                  /*!***************************************************!*\
                                                    !*** multi ./redux-core/assets/js/media/media.js ***!
                                                    \***************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    module.exports = __webpack_require__(
                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                    "./redux-core/assets/js/media/media.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              43:
                                              /*!***************************************************!*\
                                                !*** multi ./redux-core/assets/js/media/media.js ***!
                                                \***************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                module.exports = __webpack_require__(
                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                                "./redux-core/assets/js/media/media.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          43:
                                          /*!***************************************************!*\
                                            !*** multi ./redux-core/assets/js/media/media.js ***!
                                            \***************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            module.exports = __webpack_require__(
                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                            "./redux-core/assets/js/media/media.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      43:
                                      /*!***************************************************!*\
                                        !*** multi ./redux-core/assets/js/media/media.js ***!
                                        \***************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        module.exports = __webpack_require__(
                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                        "./redux-core/assets/js/media/media.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  43:
                                  /*!***************************************************!*\
                                    !*** multi ./redux-core/assets/js/media/media.js ***!
                                    \***************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    module.exports = __webpack_require__(
                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                    "./redux-core/assets/js/media/media.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              43:
                              /*!***************************************************!*\
                                !*** multi ./redux-core/assets/js/media/media.js ***!
                                \***************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(
                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                                "./redux-core/assets/js/media/media.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          43:
                          /*!***************************************************!*\
                            !*** multi ./redux-core/assets/js/media/media.js ***!
                            \***************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(
                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                            "./redux-core/assets/js/media/media.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      43:
                      /*!***************************************************!*\
                        !*** multi ./redux-core/assets/js/media/media.js ***!
                        \***************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        module.exports = __webpack_require__(
                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                        "./redux-core/assets/js/media/media.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  43:
                  /*!***************************************************!*\
                    !*** multi ./redux-core/assets/js/media/media.js ***!
                    \***************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(
                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                    "./redux-core/assets/js/media/media.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              43:
              /*!***************************************************!*\
                !*** multi ./redux-core/assets/js/media/media.js ***!
                \***************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
                "./redux-core/assets/js/media/media.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          43:
          /*!***************************************************!*\
            !*** multi ./redux-core/assets/js/media/media.js ***!
            \***************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
            "./redux-core/assets/js/media/media.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      43:
      /*!***************************************************!*\
        !*** multi ./redux-core/assets/js/media/media.js ***!
        \***************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
        "./redux-core/assets/js/media/media.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  43:
  /*!***************************************************!*\
    !*** multi ./redux-core/assets/js/media/media.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */
    "./redux-core/assets/js/media/media.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ 43:
/*!***************************************************!*\
  !*** multi ./redux-core/assets/js/media/media.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\assets\js\media\media.js */"./redux-core/assets/js/media/media.js");


/***/ })

/******/ });