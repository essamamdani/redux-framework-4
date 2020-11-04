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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/inc/fields/slider/redux-slider.js":
/*!******************************************************!*\
  !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof27(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof27 = function _typeof27(obj) { return typeof obj; }; } else { _typeof27 = function _typeof27(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof27(obj); }

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

    if (mode & 4 && _typeof27(value) === 'object' && value && value.__esModule) return value;
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

  return __webpack_require__(__webpack_require__.s = 33);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./redux-core/inc/fields/slider/redux-slider.js":
  /*!******************************************************!*\
    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
    function _typeof26(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof26 = function _typeof26(obj) {
          return typeof obj;
        };
      } else {
        _typeof26 = function _typeof26(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof26(obj);
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

      return __webpack_require__(__webpack_require__.s = 33);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./redux-core/inc/fields/slider/redux-slider.js":
      /*!******************************************************!*\
        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
        \******************************************************/

      /*! no static exports found */

      /***/
      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

          return __webpack_require__(__webpack_require__.s = 33);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./redux-core/inc/fields/slider/redux-slider.js":
          /*!******************************************************!*\
            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
            \******************************************************/

          /*! no static exports found */

          /***/
          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

              return __webpack_require__(__webpack_require__.s = 33);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./redux-core/inc/fields/slider/redux-slider.js":
              /*!******************************************************!*\
                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                \******************************************************/

              /*! no static exports found */

              /***/
              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                  return __webpack_require__(__webpack_require__.s = 33);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./redux-core/inc/fields/slider/redux-slider.js":
                  /*!******************************************************!*\
                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                    \******************************************************/

                  /*! no static exports found */

                  /***/
                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                      return __webpack_require__(__webpack_require__.s = 33);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./redux-core/inc/fields/slider/redux-slider.js":
                      /*!******************************************************!*\
                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                        \******************************************************/

                      /*! no static exports found */

                      /***/
                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                          return __webpack_require__(__webpack_require__.s = 33);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./redux-core/inc/fields/slider/redux-slider.js":
                          /*!******************************************************!*\
                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                            \******************************************************/

                          /*! no static exports found */

                          /***/
                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                              return __webpack_require__(__webpack_require__.s = 33);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./redux-core/inc/fields/slider/redux-slider.js":
                              /*!******************************************************!*\
                                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                \******************************************************/

                              /*! no static exports found */

                              /***/
                              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                  return __webpack_require__(__webpack_require__.s = 33);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./redux-core/inc/fields/slider/redux-slider.js":
                                  /*!******************************************************!*\
                                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                    \******************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                      return __webpack_require__(__webpack_require__.s = 33);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./redux-core/inc/fields/slider/redux-slider.js":
                                      /*!******************************************************!*\
                                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                        \******************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                          return __webpack_require__(__webpack_require__.s = 33);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./redux-core/inc/fields/slider/redux-slider.js":
                                          /*!******************************************************!*\
                                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                            \******************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                              return __webpack_require__(__webpack_require__.s = 33);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./redux-core/inc/fields/slider/redux-slider.js":
                                              /*!******************************************************!*\
                                                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                \******************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                  return __webpack_require__(__webpack_require__.s = 33);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./redux-core/inc/fields/slider/redux-slider.js":
                                                  /*!******************************************************!*\
                                                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                    \******************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                      return __webpack_require__(__webpack_require__.s = 33);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./redux-core/inc/fields/slider/redux-slider.js":
                                                      /*!******************************************************!*\
                                                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                        \******************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                          return __webpack_require__(__webpack_require__.s = 33);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./redux-core/inc/fields/slider/redux-slider.js":
                                                          /*!******************************************************!*\
                                                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                            \******************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                              return __webpack_require__(__webpack_require__.s = 33);
                                                              /******/
                                                            })(
                                                            /************************************************************************/

                                                            /******/
                                                            {
                                                              /***/
                                                              "./redux-core/inc/fields/slider/redux-slider.js":
                                                              /*!******************************************************!*\
                                                                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                \******************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                  return __webpack_require__(__webpack_require__.s = 33);
                                                                  /******/
                                                                })(
                                                                /************************************************************************/

                                                                /******/
                                                                {
                                                                  /***/
                                                                  "./redux-core/inc/fields/slider/redux-slider.js":
                                                                  /*!******************************************************!*\
                                                                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                    \******************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                      return __webpack_require__(__webpack_require__.s = 33);
                                                                      /******/
                                                                    })(
                                                                    /************************************************************************/

                                                                    /******/
                                                                    {
                                                                      /***/
                                                                      "./redux-core/inc/fields/slider/redux-slider.js":
                                                                      /*!******************************************************!*\
                                                                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                        \******************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                          return __webpack_require__(__webpack_require__.s = 33);
                                                                          /******/
                                                                        })(
                                                                        /************************************************************************/

                                                                        /******/
                                                                        {
                                                                          /***/
                                                                          "./redux-core/inc/fields/slider/redux-slider.js":
                                                                          /*!******************************************************!*\
                                                                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                            \******************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                              return __webpack_require__(__webpack_require__.s = 33);
                                                                              /******/
                                                                            })(
                                                                            /************************************************************************/

                                                                            /******/
                                                                            {
                                                                              /***/
                                                                              "./redux-core/inc/fields/slider/redux-slider.js":
                                                                              /*!******************************************************!*\
                                                                                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                \******************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                  return __webpack_require__(__webpack_require__.s = 33);
                                                                                  /******/
                                                                                })(
                                                                                /************************************************************************/

                                                                                /******/
                                                                                {
                                                                                  /***/
                                                                                  "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                  /*!******************************************************!*\
                                                                                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                    \******************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                      return __webpack_require__(__webpack_require__.s = 33);
                                                                                      /******/
                                                                                    })(
                                                                                    /************************************************************************/

                                                                                    /******/
                                                                                    {
                                                                                      /***/
                                                                                      "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                      /*!******************************************************!*\
                                                                                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                        \******************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                          return __webpack_require__(__webpack_require__.s = 33);
                                                                                          /******/
                                                                                        })(
                                                                                        /************************************************************************/

                                                                                        /******/
                                                                                        {
                                                                                          /***/
                                                                                          "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                          /*!******************************************************!*\
                                                                                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                            \******************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                              return __webpack_require__(__webpack_require__.s = 33);
                                                                                              /******/
                                                                                            })(
                                                                                            /************************************************************************/

                                                                                            /******/
                                                                                            {
                                                                                              /***/
                                                                                              "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                              /*!******************************************************!*\
                                                                                                !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                \******************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                                  return __webpack_require__(__webpack_require__.s = 33);
                                                                                                  /******/
                                                                                                })(
                                                                                                /************************************************************************/

                                                                                                /******/
                                                                                                {
                                                                                                  /***/
                                                                                                  "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                                  /*!******************************************************!*\
                                                                                                    !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                    \******************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                                      return __webpack_require__(__webpack_require__.s = 33);
                                                                                                      /******/
                                                                                                    })(
                                                                                                    /************************************************************************/

                                                                                                    /******/
                                                                                                    {
                                                                                                      /***/
                                                                                                      "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                                      /*!******************************************************!*\
                                                                                                        !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                        \******************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
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

                                                                                                            if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
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

                                                                                                          return __webpack_require__(__webpack_require__.s = 33);
                                                                                                          /******/
                                                                                                        })(
                                                                                                        /************************************************************************/

                                                                                                        /******/
                                                                                                        {
                                                                                                          /***/
                                                                                                          "./redux-core/inc/fields/slider/redux-slider.js":
                                                                                                          /*!******************************************************!*\
                                                                                                            !*** ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                            \******************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function reduxCoreIncFieldsSliderReduxSliderJs(module, exports) {
                                                                                                            /*global redux_change, redux*/
                                                                                                            (function ($) {
                                                                                                              'use strict';

                                                                                                              redux.field_objects = redux.field_objects || {};
                                                                                                              redux.field_objects.slider = redux.field_objects.slider || {};

                                                                                                              redux.field_objects.slider.init = function (selector) {
                                                                                                                selector = $.redux.getSelector(selector, 'slider');
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

                                                                                                                  el.find('div.redux-slider-container').each(function () {
                                                                                                                    var start;
                                                                                                                    var toClass;
                                                                                                                    var defClassOne;
                                                                                                                    var defClassTwo;
                                                                                                                    var connectVal;
                                                                                                                    var range;
                                                                                                                    var startOne;
                                                                                                                    var startTwo;
                                                                                                                    var inputOne;
                                                                                                                    var inputTwo;
                                                                                                                    var classOne;
                                                                                                                    var classTwo;
                                                                                                                    var x;
                                                                                                                    var y;
                                                                                                                    var slider;
                                                                                                                    var inpSliderVal;
                                                                                                                    var DISPLAY_NONE = 0;
                                                                                                                    var DISPLAY_LABEL = 1;
                                                                                                                    var DISPLAY_TEXT = 2;
                                                                                                                    var DISPLAY_SELECT = 3;
                                                                                                                    var mainID = $(this).data('id');
                                                                                                                    var minVal = $(this).data('min');
                                                                                                                    var maxVal = $(this).data('max');
                                                                                                                    var stepVal = $(this).data('step');
                                                                                                                    var handles = $(this).data('handles');
                                                                                                                    var defValOne = $(this).data('default-one');
                                                                                                                    var defValTwo = $(this).data('default-two');
                                                                                                                    var resVal = $(this).data('resolution');
                                                                                                                    var displayValue = parseInt($(this).data('display'));
                                                                                                                    var rtlVal = Boolean($(this).data('rtl'));
                                                                                                                    var floatMark = $(this).data('float-mark');
                                                                                                                    var rtl;

                                                                                                                    if (true === rtlVal) {
                                                                                                                      rtl = 'rtl';
                                                                                                                    } else {
                                                                                                                      rtl = 'ltr';
                                                                                                                    } // Range array.


                                                                                                                    range = [minVal, maxVal]; // Set default values for dual slides.

                                                                                                                    startTwo = [defValOne, defValTwo]; // Set default value for single slide.

                                                                                                                    startOne = [defValOne];

                                                                                                                    if (displayValue === DISPLAY_TEXT) {
                                                                                                                      defClassOne = el.find('.redux-slider-input-one-' + mainID);
                                                                                                                      defClassTwo = el.find('.redux-slider-input-two-' + mainID);
                                                                                                                      inputOne = defClassOne;
                                                                                                                      inputTwo = defClassTwo;
                                                                                                                    } else if (displayValue === DISPLAY_SELECT) {
                                                                                                                      defClassOne = el.find('.redux-slider-select-one-' + mainID);
                                                                                                                      defClassTwo = el.find('.redux-slider-select-two-' + mainID);
                                                                                                                      redux.field_objects.slider.loadSelect(defClassOne, minVal, maxVal, resVal, stepVal);

                                                                                                                      if (2 === handles) {
                                                                                                                        redux.field_objects.slider.loadSelect(defClassTwo, minVal, maxVal, resVal, stepVal);
                                                                                                                      }
                                                                                                                    } else if (displayValue === DISPLAY_LABEL) {
                                                                                                                      defClassOne = el.find('#redux-slider-label-one-' + mainID);
                                                                                                                      defClassTwo = el.find('#redux-slider-label-two-' + mainID);
                                                                                                                    } else if (displayValue === DISPLAY_NONE) {
                                                                                                                      defClassOne = el.find('.redux-slider-value-one-' + mainID);
                                                                                                                      defClassTwo = el.find('.redux-slider-value-two-' + mainID);
                                                                                                                    }

                                                                                                                    if (displayValue === DISPLAY_LABEL) {
                                                                                                                      x = [defClassOne, 'html'];
                                                                                                                      y = [defClassTwo, 'html'];
                                                                                                                      classOne = [x];
                                                                                                                      classTwo = [x, y];
                                                                                                                    } else {
                                                                                                                      classOne = [defClassOne];
                                                                                                                      classTwo = [defClassOne, defClassTwo];
                                                                                                                    }

                                                                                                                    if (2 === handles) {
                                                                                                                      start = startTwo;
                                                                                                                      toClass = classTwo;
                                                                                                                      connectVal = true;
                                                                                                                    } else {
                                                                                                                      start = startOne;
                                                                                                                      toClass = classOne;
                                                                                                                      connectVal = 'lower';
                                                                                                                    }

                                                                                                                    slider = $(this).reduxNoUiSlider({
                                                                                                                      range: range,
                                                                                                                      start: start,
                                                                                                                      handles: handles,
                                                                                                                      step: stepVal,
                                                                                                                      connect: connectVal,
                                                                                                                      behaviour: 'tap-drag',
                                                                                                                      direction: rtl,
                                                                                                                      serialization: {
                                                                                                                        resolution: resVal,
                                                                                                                        to: toClass,
                                                                                                                        mark: floatMark
                                                                                                                      },
                                                                                                                      slide: function slide() {
                                                                                                                        if (displayValue === DISPLAY_LABEL) {
                                                                                                                          if (2 === handles) {
                                                                                                                            inpSliderVal = slider.val();
                                                                                                                            el.find('input.redux-slider-value-one-' + mainID).attr('value', inpSliderVal[0]);
                                                                                                                            el.find('input.redux-slider-value-two-' + mainID).attr('value', inpSliderVal[1]);
                                                                                                                          } else {
                                                                                                                            el.find('input.redux-slider-value-one-' + mainID).attr('value', slider.val());
                                                                                                                          }
                                                                                                                        }

                                                                                                                        if (displayValue === DISPLAY_SELECT) {
                                                                                                                          if (2 === handles) {
                                                                                                                            el.find('.redux-slider-select-one').val(slider.val()[0]).trigger('change');
                                                                                                                            el.find('.redux-slider-select-two').val(slider.val()[1]).trigger('change');
                                                                                                                          } else {
                                                                                                                            el.find('.redux-slider-select-one').val(slider.val());
                                                                                                                          }
                                                                                                                        }

                                                                                                                        redux_change($(this));
                                                                                                                      }
                                                                                                                    });

                                                                                                                    if (displayValue === DISPLAY_TEXT) {
                                                                                                                      inputOne.keydown(function (e) {
                                                                                                                        var sliderOne = slider.val();
                                                                                                                        var value = parseInt(sliderOne[0]);

                                                                                                                        switch (e.which) {
                                                                                                                          case 38:
                                                                                                                            slider.val([value + 1, null]);
                                                                                                                            break;

                                                                                                                          case 40:
                                                                                                                            slider.val([value - 1, null]);
                                                                                                                            break;

                                                                                                                          case 13:
                                                                                                                            e.preventDefault();
                                                                                                                            break;
                                                                                                                        }
                                                                                                                      });

                                                                                                                      if (2 === handles) {
                                                                                                                        inputTwo.keydown(function (e) {
                                                                                                                          var sliderTwo = slider.val();
                                                                                                                          var value = parseInt(sliderTwo[1]);

                                                                                                                          switch (e.which) {
                                                                                                                            case 38:
                                                                                                                              slider.val([null, value + 1]);
                                                                                                                              break;

                                                                                                                            case 40:
                                                                                                                              slider.val([null, value - 1]);
                                                                                                                              break;

                                                                                                                            case 13:
                                                                                                                              e.preventDefault();
                                                                                                                              break;
                                                                                                                          }
                                                                                                                        });
                                                                                                                      }
                                                                                                                    }
                                                                                                                  });
                                                                                                                  el.find('select.redux-slider-select-one, select.redux-slider-select-two').select2();
                                                                                                                });
                                                                                                              }; // Return true for float value, false otherwise.


                                                                                                              redux.field_objects.slider.isFloat = function (mixed_var) {
                                                                                                                return +mixed_var === mixed_var && !isFinite(mixed_var) || Boolean(mixed_var % 1);
                                                                                                              }; // Return number of integers after the decimal point.


                                                                                                              redux.field_objects.slider.decimalCount = function (res) {
                                                                                                                var q = res.toString().split('.');
                                                                                                                return q[1].length;
                                                                                                              };

                                                                                                              redux.field_objects.slider.loadSelect = function (myClass, min, max, res) {
                                                                                                                var decCount;
                                                                                                                var i;
                                                                                                                var n;

                                                                                                                for (i = min; i <= max; i = i + res) {
                                                                                                                  n = i;

                                                                                                                  if (redux.field_objects.slider.isFloat(res)) {
                                                                                                                    decCount = redux.field_objects.slider.decimalCount(res);
                                                                                                                    n = i.toFixed(decCount);
                                                                                                                  }

                                                                                                                  $(myClass).append('<option value="' + n + '">' + n + '</option>');
                                                                                                                }
                                                                                                              };
                                                                                                            })(jQuery);
                                                                                                            /***/

                                                                                                          },

                                                                                                          /***/
                                                                                                          33:
                                                                                                          /*!************************************************************!*\
                                                                                                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                            \************************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function _(module, exports, __webpack_require__) {
                                                                                                            module.exports = __webpack_require__(
                                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                                            "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                                            /***/
                                                                                                          }
                                                                                                          /******/

                                                                                                        });
                                                                                                        /***/

                                                                                                      },

                                                                                                      /***/
                                                                                                      33:
                                                                                                      /*!************************************************************!*\
                                                                                                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                        \************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function _(module, exports, __webpack_require__) {
                                                                                                        module.exports = __webpack_require__(
                                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                                        "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                                        /***/
                                                                                                      }
                                                                                                      /******/

                                                                                                    });
                                                                                                    /***/

                                                                                                  },

                                                                                                  /***/
                                                                                                  33:
                                                                                                  /*!************************************************************!*\
                                                                                                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                    \************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function _(module, exports, __webpack_require__) {
                                                                                                    module.exports = __webpack_require__(
                                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                                    "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                                    /***/
                                                                                                  }
                                                                                                  /******/

                                                                                                });
                                                                                                /***/

                                                                                              },

                                                                                              /***/
                                                                                              33:
                                                                                              /*!************************************************************!*\
                                                                                                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                                \************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function _(module, exports, __webpack_require__) {
                                                                                                module.exports = __webpack_require__(
                                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                                "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                                /***/
                                                                                              }
                                                                                              /******/

                                                                                            });
                                                                                            /***/

                                                                                          },

                                                                                          /***/
                                                                                          33:
                                                                                          /*!************************************************************!*\
                                                                                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                            \************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function _(module, exports, __webpack_require__) {
                                                                                            module.exports = __webpack_require__(
                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                            "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                            /***/
                                                                                          }
                                                                                          /******/

                                                                                        });
                                                                                        /***/

                                                                                      },

                                                                                      /***/
                                                                                      33:
                                                                                      /*!************************************************************!*\
                                                                                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                        \************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function _(module, exports, __webpack_require__) {
                                                                                        module.exports = __webpack_require__(
                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                        "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                        /***/
                                                                                      }
                                                                                      /******/

                                                                                    });
                                                                                    /***/

                                                                                  },

                                                                                  /***/
                                                                                  33:
                                                                                  /*!************************************************************!*\
                                                                                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                    \************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function _(module, exports, __webpack_require__) {
                                                                                    module.exports = __webpack_require__(
                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                    "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                    /***/
                                                                                  }
                                                                                  /******/

                                                                                });
                                                                                /***/

                                                                              },

                                                                              /***/
                                                                              33:
                                                                              /*!************************************************************!*\
                                                                                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                                \************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function _(module, exports, __webpack_require__) {
                                                                                module.exports = __webpack_require__(
                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                                "./redux-core/inc/fields/slider/redux-slider.js");
                                                                                /***/
                                                                              }
                                                                              /******/

                                                                            });
                                                                            /***/

                                                                          },

                                                                          /***/
                                                                          33:
                                                                          /*!************************************************************!*\
                                                                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                            \************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function _(module, exports, __webpack_require__) {
                                                                            module.exports = __webpack_require__(
                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                            "./redux-core/inc/fields/slider/redux-slider.js");
                                                                            /***/
                                                                          }
                                                                          /******/

                                                                        });
                                                                        /***/

                                                                      },

                                                                      /***/
                                                                      33:
                                                                      /*!************************************************************!*\
                                                                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                        \************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function _(module, exports, __webpack_require__) {
                                                                        module.exports = __webpack_require__(
                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                        "./redux-core/inc/fields/slider/redux-slider.js");
                                                                        /***/
                                                                      }
                                                                      /******/

                                                                    });
                                                                    /***/

                                                                  },

                                                                  /***/
                                                                  33:
                                                                  /*!************************************************************!*\
                                                                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                    \************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function _(module, exports, __webpack_require__) {
                                                                    module.exports = __webpack_require__(
                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                    "./redux-core/inc/fields/slider/redux-slider.js");
                                                                    /***/
                                                                  }
                                                                  /******/

                                                                });
                                                                /***/

                                                              },

                                                              /***/
                                                              33:
                                                              /*!************************************************************!*\
                                                                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                                \************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function _(module, exports, __webpack_require__) {
                                                                module.exports = __webpack_require__(
                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                                "./redux-core/inc/fields/slider/redux-slider.js");
                                                                /***/
                                                              }
                                                              /******/

                                                            });
                                                            /***/

                                                          },

                                                          /***/
                                                          33:
                                                          /*!************************************************************!*\
                                                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                            \************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                            "./redux-core/inc/fields/slider/redux-slider.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      33:
                                                      /*!************************************************************!*\
                                                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                        \************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        module.exports = __webpack_require__(
                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                        "./redux-core/inc/fields/slider/redux-slider.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  33:
                                                  /*!************************************************************!*\
                                                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                    \************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    module.exports = __webpack_require__(
                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                    "./redux-core/inc/fields/slider/redux-slider.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              33:
                                              /*!************************************************************!*\
                                                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                                \************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                module.exports = __webpack_require__(
                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                                "./redux-core/inc/fields/slider/redux-slider.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          33:
                                          /*!************************************************************!*\
                                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                            \************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            module.exports = __webpack_require__(
                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                            "./redux-core/inc/fields/slider/redux-slider.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      33:
                                      /*!************************************************************!*\
                                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                        \************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        module.exports = __webpack_require__(
                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                        "./redux-core/inc/fields/slider/redux-slider.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  33:
                                  /*!************************************************************!*\
                                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                    \************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    module.exports = __webpack_require__(
                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                    "./redux-core/inc/fields/slider/redux-slider.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              33:
                              /*!************************************************************!*\
                                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                                \************************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(
                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                                "./redux-core/inc/fields/slider/redux-slider.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          33:
                          /*!************************************************************!*\
                            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                            \************************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(
                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                            "./redux-core/inc/fields/slider/redux-slider.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      33:
                      /*!************************************************************!*\
                        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                        \************************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        module.exports = __webpack_require__(
                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                        "./redux-core/inc/fields/slider/redux-slider.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  33:
                  /*!************************************************************!*\
                    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                    \************************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(
                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                    "./redux-core/inc/fields/slider/redux-slider.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              33:
              /*!************************************************************!*\
                !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
                \************************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
                "./redux-core/inc/fields/slider/redux-slider.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          33:
          /*!************************************************************!*\
            !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
            \************************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
            "./redux-core/inc/fields/slider/redux-slider.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      33:
      /*!************************************************************!*\
        !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
        \************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
        "./redux-core/inc/fields/slider/redux-slider.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  33:
  /*!************************************************************!*\
    !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */
    "./redux-core/inc/fields/slider/redux-slider.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ 33:
/*!************************************************************!*\
  !*** multi ./redux-core/inc/fields/slider/redux-slider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\slider\redux-slider.js */"./redux-core/inc/fields/slider/redux-slider.js");


/***/ })

/******/ });