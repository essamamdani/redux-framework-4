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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
/*!**************************************************************!*\
  !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
  \**************************************************************/
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

  return __webpack_require__(__webpack_require__.s = 15);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
  /*!**************************************************************!*\
    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

      return __webpack_require__(__webpack_require__.s = 15);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
      /*!**************************************************************!*\
        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

          return __webpack_require__(__webpack_require__.s = 15);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
          /*!**************************************************************!*\
            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
            \**************************************************************/

          /*! no static exports found */

          /***/
          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

              return __webpack_require__(__webpack_require__.s = 15);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
              /*!**************************************************************!*\
                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                \**************************************************************/

              /*! no static exports found */

              /***/
              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                  return __webpack_require__(__webpack_require__.s = 15);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                  /*!**************************************************************!*\
                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                    \**************************************************************/

                  /*! no static exports found */

                  /***/
                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                      return __webpack_require__(__webpack_require__.s = 15);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                      /*!**************************************************************!*\
                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                        \**************************************************************/

                      /*! no static exports found */

                      /***/
                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                          return __webpack_require__(__webpack_require__.s = 15);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                          /*!**************************************************************!*\
                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                            \**************************************************************/

                          /*! no static exports found */

                          /***/
                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                              return __webpack_require__(__webpack_require__.s = 15);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                              /*!**************************************************************!*\
                                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                \**************************************************************/

                              /*! no static exports found */

                              /***/
                              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                  return __webpack_require__(__webpack_require__.s = 15);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                  /*!**************************************************************!*\
                                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                    \**************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                      return __webpack_require__(__webpack_require__.s = 15);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                      /*!**************************************************************!*\
                                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                        \**************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                          return __webpack_require__(__webpack_require__.s = 15);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                          /*!**************************************************************!*\
                                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                            \**************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                              return __webpack_require__(__webpack_require__.s = 15);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                              /*!**************************************************************!*\
                                                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                \**************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                  return __webpack_require__(__webpack_require__.s = 15);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                  /*!**************************************************************!*\
                                                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                    \**************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                      return __webpack_require__(__webpack_require__.s = 15);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                      /*!**************************************************************!*\
                                                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                        \**************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                          return __webpack_require__(__webpack_require__.s = 15);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                          /*!**************************************************************!*\
                                                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                            \**************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                              return __webpack_require__(__webpack_require__.s = 15);
                                                              /******/
                                                            })(
                                                            /************************************************************************/

                                                            /******/
                                                            {
                                                              /***/
                                                              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                              /*!**************************************************************!*\
                                                                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                \**************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                  return __webpack_require__(__webpack_require__.s = 15);
                                                                  /******/
                                                                })(
                                                                /************************************************************************/

                                                                /******/
                                                                {
                                                                  /***/
                                                                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                  /*!**************************************************************!*\
                                                                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                    \**************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                      return __webpack_require__(__webpack_require__.s = 15);
                                                                      /******/
                                                                    })(
                                                                    /************************************************************************/

                                                                    /******/
                                                                    {
                                                                      /***/
                                                                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                      /*!**************************************************************!*\
                                                                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                        \**************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                          return __webpack_require__(__webpack_require__.s = 15);
                                                                          /******/
                                                                        })(
                                                                        /************************************************************************/

                                                                        /******/
                                                                        {
                                                                          /***/
                                                                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                          /*!**************************************************************!*\
                                                                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                            \**************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                              return __webpack_require__(__webpack_require__.s = 15);
                                                                              /******/
                                                                            })(
                                                                            /************************************************************************/

                                                                            /******/
                                                                            {
                                                                              /***/
                                                                              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                              /*!**************************************************************!*\
                                                                                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                \**************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                  return __webpack_require__(__webpack_require__.s = 15);
                                                                                  /******/
                                                                                })(
                                                                                /************************************************************************/

                                                                                /******/
                                                                                {
                                                                                  /***/
                                                                                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                  /*!**************************************************************!*\
                                                                                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                    \**************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                      return __webpack_require__(__webpack_require__.s = 15);
                                                                                      /******/
                                                                                    })(
                                                                                    /************************************************************************/

                                                                                    /******/
                                                                                    {
                                                                                      /***/
                                                                                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                      /*!**************************************************************!*\
                                                                                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                        \**************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                          return __webpack_require__(__webpack_require__.s = 15);
                                                                                          /******/
                                                                                        })(
                                                                                        /************************************************************************/

                                                                                        /******/
                                                                                        {
                                                                                          /***/
                                                                                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                          /*!**************************************************************!*\
                                                                                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                            \**************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                              return __webpack_require__(__webpack_require__.s = 15);
                                                                                              /******/
                                                                                            })(
                                                                                            /************************************************************************/

                                                                                            /******/
                                                                                            {
                                                                                              /***/
                                                                                              "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                              /*!**************************************************************!*\
                                                                                                !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                \**************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                                  return __webpack_require__(__webpack_require__.s = 15);
                                                                                                  /******/
                                                                                                })(
                                                                                                /************************************************************************/

                                                                                                /******/
                                                                                                {
                                                                                                  /***/
                                                                                                  "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                                  /*!**************************************************************!*\
                                                                                                    !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                    \**************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                                      return __webpack_require__(__webpack_require__.s = 15);
                                                                                                      /******/
                                                                                                    })(
                                                                                                    /************************************************************************/

                                                                                                    /******/
                                                                                                    {
                                                                                                      /***/
                                                                                                      "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                                      /*!**************************************************************!*\
                                                                                                        !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                        \**************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
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

                                                                                                          return __webpack_require__(__webpack_require__.s = 15);
                                                                                                          /******/
                                                                                                        })(
                                                                                                        /************************************************************************/

                                                                                                        /******/
                                                                                                        {
                                                                                                          /***/
                                                                                                          "./redux-core/inc/fields/color_rgba/redux-color-rgba.js":
                                                                                                          /*!**************************************************************!*\
                                                                                                            !*** ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                            \**************************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function reduxCoreIncFieldsColor_rgbaReduxColorRgbaJs(module, exports) {
                                                                                                            /* global redux, redux_change */
                                                                                                            (function ($) {
                                                                                                              'use strict';

                                                                                                              redux.field_objects = redux.field_objects || {};
                                                                                                              redux.field_objects.color_rgba = redux.field_objects.color_rgba || {};
                                                                                                              redux.field_objects.color_rgba.fieldID = '';

                                                                                                              redux.field_objects.color_rgba.hexToRGBA = function (hex, alpha) {
                                                                                                                var result;
                                                                                                                var r;
                                                                                                                var g;
                                                                                                                var b;

                                                                                                                if (null === hex) {
                                                                                                                  result = '';
                                                                                                                } else {
                                                                                                                  hex = hex.replace('#', '');
                                                                                                                  r = parseInt(hex.substring(0, 2), 16);
                                                                                                                  g = parseInt(hex.substring(2, 4), 16);
                                                                                                                  b = parseInt(hex.substring(4, 6), 16);
                                                                                                                  result = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
                                                                                                                }

                                                                                                                return result;
                                                                                                              };

                                                                                                              redux.field_objects.color_rgba.init = function (selector) {
                                                                                                                selector = $.redux.getSelector(selector, 'color_rgba');
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

                                                                                                                  redux.field_objects.color_rgba.modInit(el);
                                                                                                                  redux.field_objects.color_rgba.initColorPicker(el);
                                                                                                                });
                                                                                                              };

                                                                                                              redux.field_objects.color_rgba.modInit = function (el) {
                                                                                                                redux.field_objects.color_rgba.fieldID = el.find('.redux-color_rgba-container').data('id');
                                                                                                              }; // Initialize colour picker.


                                                                                                              redux.field_objects.color_rgba.initColorPicker = function (el) {
                                                                                                                // Get field ID.
                                                                                                                var field_id = redux.field_objects.color_rgba.fieldID; // Get the color scheme container.

                                                                                                                var colorpickerInput = el.find('.redux-color-rgba'); // Get alpha value and sanitize it.

                                                                                                                var currentAlpha = colorpickerInput.data('current-alpha'); // Get colour value and sanitize it.

                                                                                                                var currentColor = colorpickerInput.data('current-color');
                                                                                                                var outputTransparent = colorpickerInput.data('output-transparent'); // Color picker arguments.

                                                                                                                var container = el.find('.redux-color-rgba-container'); // Get, decode and parse palette.

                                                                                                                var palette = container.data('palette'); // Get and sanitize show input argument.

                                                                                                                var showInput = container.data('show-input'); // Get and sanitize show initial argument.

                                                                                                                var showInitial = container.data('show-initial'); // Get and sanitize show alpha argument.

                                                                                                                var showAlpha = container.data('show-alpha'); // Get and sanitize allow empty argument.

                                                                                                                var allowEmpty = container.data('allow-empty'); // Get and sanitize show palette argument.

                                                                                                                var showPalette = container.data('show-palette'); // Get and sanitize show palette only argument.

                                                                                                                var showPaletteOnly = container.data('show-palette-only'); // Get and sanitize show selection palette argument.

                                                                                                                var showSelectionPalette = container.data('show-selection-palette'); // Get max palette size.

                                                                                                                var maxPaletteSize = Number(container.data('max-palette-size')); // Get and sanitize clickout fires change argument.

                                                                                                                var clickoutFiresChange = container.data('clickout-fires-change'); // Get choose button text.

                                                                                                                var chooseText = String(container.data('choose-text')); // Get cancel button text.

                                                                                                                var cancelText = String(container.data('cancel-text')); // Get cancel button text.

                                                                                                                var inputText = String(container.data('input-text')); // Get and sanitize show buttons argument.

                                                                                                                var showButtons = container.data('show-buttons'); // Get container class.

                                                                                                                var containerClass = String(container.data('container-class')); // Get replacer class.

                                                                                                                var replacerClass = String(container.data('replacer-class'));
                                                                                                                currentAlpha = Number(null === currentAlpha || undefined === currentAlpha ? 1 : currentAlpha);
                                                                                                                currentColor = '' === currentColor || 'transparent' === currentColor ? '' : currentColor;
                                                                                                                outputTransparent = Boolean('' === outputTransparent ? false : outputTransparent);
                                                                                                                palette = decodeURIComponent(palette);
                                                                                                                palette = JSON.parse(palette); // Default palette.

                                                                                                                if (null === palette) {
                                                                                                                  palette = [['#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff'], ['#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff'], ['#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d9ead3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc'], ['#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd'], ['#cc4125', '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0'], ['#a61c00', '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79'], ['#85200c', '#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47'], ['#5b0f00', '#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130']];
                                                                                                                }

                                                                                                                showInput = Boolean('' === showInput ? false : showInput);
                                                                                                                showInitial = Boolean('' === showInitial ? false : showInitial);
                                                                                                                showAlpha = Boolean('' === showAlpha ? false : showAlpha);
                                                                                                                allowEmpty = Boolean('' === allowEmpty ? false : allowEmpty);
                                                                                                                showPalette = Boolean('' === showPalette ? false : showPalette);
                                                                                                                showPaletteOnly = Boolean('' === showPaletteOnly ? false : showPaletteOnly);
                                                                                                                showSelectionPalette = Boolean('' === showSelectionPalette ? false : showSelectionPalette);
                                                                                                                clickoutFiresChange = Boolean('' === clickoutFiresChange ? false : clickoutFiresChange);
                                                                                                                showButtons = Boolean('' === showButtons ? false : showButtons); // Color picker options.

                                                                                                                colorpickerInput.spectrum({
                                                                                                                  color: currentColor,
                                                                                                                  showAlpha: showAlpha,
                                                                                                                  showInput: showInput,
                                                                                                                  allowEmpty: allowEmpty,
                                                                                                                  className: 'redux-color-rgba',
                                                                                                                  showInitial: showInitial,
                                                                                                                  showPalette: showPalette,
                                                                                                                  showSelectionPalette: showSelectionPalette,
                                                                                                                  maxPaletteSize: maxPaletteSize,
                                                                                                                  showPaletteOnly: showPaletteOnly,
                                                                                                                  clickoutFiresChange: clickoutFiresChange,
                                                                                                                  chooseText: chooseText,
                                                                                                                  cancelText: cancelText,
                                                                                                                  showButtons: showButtons,
                                                                                                                  containerClassName: containerClass,
                                                                                                                  replacerClassName: replacerClass,
                                                                                                                  preferredFormat: 'hex6',
                                                                                                                  localStorageKey: 'redux.color-rgba.' + field_id,
                                                                                                                  palette: palette,
                                                                                                                  inputText: inputText,
                                                                                                                  // On change.
                                                                                                                  change: function change(color) {
                                                                                                                    var blockID;
                                                                                                                    var colorVal;
                                                                                                                    var alphaVal;
                                                                                                                    var rgbaVal;

                                                                                                                    if (null === color) {
                                                                                                                      if (true === outputTransparent) {
                                                                                                                        colorVal = 'transparent';
                                                                                                                      } else {
                                                                                                                        colorVal = null;
                                                                                                                      }

                                                                                                                      alphaVal = null;
                                                                                                                    } else {
                                                                                                                      colorVal = color.toHexString();
                                                                                                                      alphaVal = color.alpha;
                                                                                                                    }

                                                                                                                    if ('transparent' !== colorVal) {
                                                                                                                      rgbaVal = redux.field_objects.color_rgba.hexToRGBA(colorVal, alphaVal);
                                                                                                                    } else {
                                                                                                                      rgbaVal = 'transparent';
                                                                                                                    }

                                                                                                                    blockID = $(this).data('block-id'); // Update HTML color value.

                                                                                                                    el.find('input#' + blockID + '-color').val(colorVal); // Update HTML alpha value.

                                                                                                                    el.find('input#' + blockID + '-alpha').val(alphaVal); // Update RGBA alpha value.

                                                                                                                    el.find('input#' + blockID + '-rgba').val(rgbaVal);
                                                                                                                    redux_change(el.find('.redux-color-rgba-container'));
                                                                                                                  }
                                                                                                                });
                                                                                                              };
                                                                                                            })(jQuery);
                                                                                                            /***/

                                                                                                          },

                                                                                                          /***/
                                                                                                          15:
                                                                                                          /*!********************************************************************!*\
                                                                                                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                            \********************************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function _(module, exports, __webpack_require__) {
                                                                                                            module.exports = __webpack_require__(
                                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                                            /***/
                                                                                                          }
                                                                                                          /******/

                                                                                                        });
                                                                                                        /***/

                                                                                                      },

                                                                                                      /***/
                                                                                                      15:
                                                                                                      /*!********************************************************************!*\
                                                                                                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                        \********************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function _(module, exports, __webpack_require__) {
                                                                                                        module.exports = __webpack_require__(
                                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                                        /***/
                                                                                                      }
                                                                                                      /******/

                                                                                                    });
                                                                                                    /***/

                                                                                                  },

                                                                                                  /***/
                                                                                                  15:
                                                                                                  /*!********************************************************************!*\
                                                                                                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                    \********************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function _(module, exports, __webpack_require__) {
                                                                                                    module.exports = __webpack_require__(
                                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                                    /***/
                                                                                                  }
                                                                                                  /******/

                                                                                                });
                                                                                                /***/

                                                                                              },

                                                                                              /***/
                                                                                              15:
                                                                                              /*!********************************************************************!*\
                                                                                                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                                \********************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function _(module, exports, __webpack_require__) {
                                                                                                module.exports = __webpack_require__(
                                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                                /***/
                                                                                              }
                                                                                              /******/

                                                                                            });
                                                                                            /***/

                                                                                          },

                                                                                          /***/
                                                                                          15:
                                                                                          /*!********************************************************************!*\
                                                                                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                            \********************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function _(module, exports, __webpack_require__) {
                                                                                            module.exports = __webpack_require__(
                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                            /***/
                                                                                          }
                                                                                          /******/

                                                                                        });
                                                                                        /***/

                                                                                      },

                                                                                      /***/
                                                                                      15:
                                                                                      /*!********************************************************************!*\
                                                                                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                        \********************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function _(module, exports, __webpack_require__) {
                                                                                        module.exports = __webpack_require__(
                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                        /***/
                                                                                      }
                                                                                      /******/

                                                                                    });
                                                                                    /***/

                                                                                  },

                                                                                  /***/
                                                                                  15:
                                                                                  /*!********************************************************************!*\
                                                                                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                    \********************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function _(module, exports, __webpack_require__) {
                                                                                    module.exports = __webpack_require__(
                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                    /***/
                                                                                  }
                                                                                  /******/

                                                                                });
                                                                                /***/

                                                                              },

                                                                              /***/
                                                                              15:
                                                                              /*!********************************************************************!*\
                                                                                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                                \********************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function _(module, exports, __webpack_require__) {
                                                                                module.exports = __webpack_require__(
                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                                /***/
                                                                              }
                                                                              /******/

                                                                            });
                                                                            /***/

                                                                          },

                                                                          /***/
                                                                          15:
                                                                          /*!********************************************************************!*\
                                                                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                            \********************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function _(module, exports, __webpack_require__) {
                                                                            module.exports = __webpack_require__(
                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                            /***/
                                                                          }
                                                                          /******/

                                                                        });
                                                                        /***/

                                                                      },

                                                                      /***/
                                                                      15:
                                                                      /*!********************************************************************!*\
                                                                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                        \********************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function _(module, exports, __webpack_require__) {
                                                                        module.exports = __webpack_require__(
                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                        /***/
                                                                      }
                                                                      /******/

                                                                    });
                                                                    /***/

                                                                  },

                                                                  /***/
                                                                  15:
                                                                  /*!********************************************************************!*\
                                                                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                    \********************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function _(module, exports, __webpack_require__) {
                                                                    module.exports = __webpack_require__(
                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                    /***/
                                                                  }
                                                                  /******/

                                                                });
                                                                /***/

                                                              },

                                                              /***/
                                                              15:
                                                              /*!********************************************************************!*\
                                                                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                                \********************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function _(module, exports, __webpack_require__) {
                                                                module.exports = __webpack_require__(
                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                                /***/
                                                              }
                                                              /******/

                                                            });
                                                            /***/

                                                          },

                                                          /***/
                                                          15:
                                                          /*!********************************************************************!*\
                                                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                            \********************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      15:
                                                      /*!********************************************************************!*\
                                                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                        \********************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        module.exports = __webpack_require__(
                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  15:
                                                  /*!********************************************************************!*\
                                                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                    \********************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    module.exports = __webpack_require__(
                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              15:
                                              /*!********************************************************************!*\
                                                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                                \********************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                module.exports = __webpack_require__(
                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          15:
                                          /*!********************************************************************!*\
                                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                            \********************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            module.exports = __webpack_require__(
                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      15:
                                      /*!********************************************************************!*\
                                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                        \********************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        module.exports = __webpack_require__(
                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  15:
                                  /*!********************************************************************!*\
                                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                    \********************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    module.exports = __webpack_require__(
                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              15:
                              /*!********************************************************************!*\
                                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                                \********************************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(
                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          15:
                          /*!********************************************************************!*\
                            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                            \********************************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(
                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      15:
                      /*!********************************************************************!*\
                        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                        \********************************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        module.exports = __webpack_require__(
                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  15:
                  /*!********************************************************************!*\
                    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                    \********************************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(
                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              15:
              /*!********************************************************************!*\
                !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
                \********************************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
                "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          15:
          /*!********************************************************************!*\
            !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
            \********************************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
            "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      15:
      /*!********************************************************************!*\
        !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
        \********************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
        "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  15:
  /*!********************************************************************!*\
    !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */
    "./redux-core/inc/fields/color_rgba/redux-color-rgba.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ 15:
/*!********************************************************************!*\
  !*** multi ./redux-core/inc/fields/color_rgba/redux-color-rgba.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\color_rgba\redux-color-rgba.js */"./redux-core/inc/fields/color_rgba/redux-color-rgba.js");


/***/ })

/******/ });