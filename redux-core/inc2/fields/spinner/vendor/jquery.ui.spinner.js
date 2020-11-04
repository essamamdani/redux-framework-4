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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
/*!*******************************************************************!*\
  !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
  \*******************************************************************/
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

  return __webpack_require__(__webpack_require__.s = 44);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
  /*!*******************************************************************!*\
    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

      return __webpack_require__(__webpack_require__.s = 44);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
      /*!*******************************************************************!*\
        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

          return __webpack_require__(__webpack_require__.s = 44);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
          /*!*******************************************************************!*\
            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
            \*******************************************************************/

          /*! no static exports found */

          /***/
          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

              return __webpack_require__(__webpack_require__.s = 44);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
              /*!*******************************************************************!*\
                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                \*******************************************************************/

              /*! no static exports found */

              /***/
              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                  return __webpack_require__(__webpack_require__.s = 44);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                  /*!*******************************************************************!*\
                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                    \*******************************************************************/

                  /*! no static exports found */

                  /***/
                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                      return __webpack_require__(__webpack_require__.s = 44);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                      /*!*******************************************************************!*\
                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                        \*******************************************************************/

                      /*! no static exports found */

                      /***/
                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                          return __webpack_require__(__webpack_require__.s = 44);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                          /*!*******************************************************************!*\
                            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                            \*******************************************************************/

                          /*! no static exports found */

                          /***/
                          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                              return __webpack_require__(__webpack_require__.s = 44);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                              /*!*******************************************************************!*\
                                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                \*******************************************************************/

                              /*! no static exports found */

                              /***/
                              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                  return __webpack_require__(__webpack_require__.s = 44);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                  /*!*******************************************************************!*\
                                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                    \*******************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                      return __webpack_require__(__webpack_require__.s = 44);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                      /*!*******************************************************************!*\
                                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                        \*******************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                          return __webpack_require__(__webpack_require__.s = 44);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                          /*!*******************************************************************!*\
                                            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                            \*******************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                              return __webpack_require__(__webpack_require__.s = 44);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                              /*!*******************************************************************!*\
                                                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                \*******************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                  return __webpack_require__(__webpack_require__.s = 44);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                  /*!*******************************************************************!*\
                                                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                    \*******************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                      return __webpack_require__(__webpack_require__.s = 44);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                      /*!*******************************************************************!*\
                                                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                        \*******************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                          return __webpack_require__(__webpack_require__.s = 44);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                          /*!*******************************************************************!*\
                                                            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                            \*******************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                              return __webpack_require__(__webpack_require__.s = 44);
                                                              /******/
                                                            })(
                                                            /************************************************************************/

                                                            /******/
                                                            {
                                                              /***/
                                                              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                              /*!*******************************************************************!*\
                                                                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                \*******************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                  return __webpack_require__(__webpack_require__.s = 44);
                                                                  /******/
                                                                })(
                                                                /************************************************************************/

                                                                /******/
                                                                {
                                                                  /***/
                                                                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                  /*!*******************************************************************!*\
                                                                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                    \*******************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                      return __webpack_require__(__webpack_require__.s = 44);
                                                                      /******/
                                                                    })(
                                                                    /************************************************************************/

                                                                    /******/
                                                                    {
                                                                      /***/
                                                                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                      /*!*******************************************************************!*\
                                                                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                        \*******************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                          return __webpack_require__(__webpack_require__.s = 44);
                                                                          /******/
                                                                        })(
                                                                        /************************************************************************/

                                                                        /******/
                                                                        {
                                                                          /***/
                                                                          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                          /*!*******************************************************************!*\
                                                                            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                            \*******************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                              return __webpack_require__(__webpack_require__.s = 44);
                                                                              /******/
                                                                            })(
                                                                            /************************************************************************/

                                                                            /******/
                                                                            {
                                                                              /***/
                                                                              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                              /*!*******************************************************************!*\
                                                                                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                \*******************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                  return __webpack_require__(__webpack_require__.s = 44);
                                                                                  /******/
                                                                                })(
                                                                                /************************************************************************/

                                                                                /******/
                                                                                {
                                                                                  /***/
                                                                                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                  /*!*******************************************************************!*\
                                                                                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                    \*******************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                      return __webpack_require__(__webpack_require__.s = 44);
                                                                                      /******/
                                                                                    })(
                                                                                    /************************************************************************/

                                                                                    /******/
                                                                                    {
                                                                                      /***/
                                                                                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                      /*!*******************************************************************!*\
                                                                                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                        \*******************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                          return __webpack_require__(__webpack_require__.s = 44);
                                                                                          /******/
                                                                                        })(
                                                                                        /************************************************************************/

                                                                                        /******/
                                                                                        {
                                                                                          /***/
                                                                                          "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                          /*!*******************************************************************!*\
                                                                                            !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                            \*******************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                              return __webpack_require__(__webpack_require__.s = 44);
                                                                                              /******/
                                                                                            })(
                                                                                            /************************************************************************/

                                                                                            /******/
                                                                                            {
                                                                                              /***/
                                                                                              "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                              /*!*******************************************************************!*\
                                                                                                !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                \*******************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                                  return __webpack_require__(__webpack_require__.s = 44);
                                                                                                  /******/
                                                                                                })(
                                                                                                /************************************************************************/

                                                                                                /******/
                                                                                                {
                                                                                                  /***/
                                                                                                  "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                                  /*!*******************************************************************!*\
                                                                                                    !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                    \*******************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
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

                                                                                                      return __webpack_require__(__webpack_require__.s = 44);
                                                                                                      /******/
                                                                                                    })(
                                                                                                    /************************************************************************/

                                                                                                    /******/
                                                                                                    {
                                                                                                      /***/
                                                                                                      "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js":
                                                                                                      /*!*******************************************************************!*\
                                                                                                        !*** ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                        \*******************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function reduxCoreIncFieldsSpinnerVendorJqueryUiSpinnerJs(module, exports) {
                                                                                                        /**
                                                                                                         * Extension for jQuery Spinner.
                                                                                                         *
                                                                                                         * @license jQuery UI Spinner 1.20
                                                                                                         *
                                                                                                         * Copyright (c) 2009-2010 Brant Burnett
                                                                                                         * Dual licensed under the MIT or GPL Version 2 licenses.
                                                                                                         *
                                                                                                         * The original author is no longer maintaining this code.
                                                                                                         *
                                                                                                         * Modified for the Redux Framework Spinner field by Kevin Provance (kprovance).
                                                                                                         *
                                                                                                         * Listen up y'all, I painstakingly recreated the original code from it's modified and minified version to the thing of
                                                                                                         * beauty you see below.  Mess with it and I'll kill ya! - kp
                                                                                                         *
                                                                                                         * Deprecated jQuery API $.browser was replaced with the accepted hack below.
                                                                                                         * Deprecated boxSupport was removed, since Redux does not use boxSupport.
                                                                                                         */
                                                                                                        jQuery.uaMatch = function (ua) {
                                                                                                          var match;
                                                                                                          ua = ua.toLowerCase();
                                                                                                          match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
                                                                                                          return {
                                                                                                            browser: match[1] || '',
                                                                                                            version: match[2] || '0'
                                                                                                          };
                                                                                                        };

                                                                                                        (function ($) {
                                                                                                          var active = 'ui-state-active';
                                                                                                          var hover = 'ui-state-hover';
                                                                                                          var disabled = 'ui-state-disabled';
                                                                                                          var keyCode = $.ui.keyCode;
                                                                                                          var up = keyCode.UP;
                                                                                                          var down = keyCode.DOWN;
                                                                                                          var right = keyCode.RIGHT;
                                                                                                          var left = keyCode.LEFT;
                                                                                                          var pageUp = keyCode.PAGE_UP;
                                                                                                          var pageDown = keyCode.PAGE_DOWN;
                                                                                                          var home = keyCode.HOME;
                                                                                                          var end = keyCode.END;
                                                                                                          var msie = $.uaMatch.msie;
                                                                                                          var mouseWheelEventName = $.uaMatch.mozilla ? 'DOMMouseScroll' : 'mousewheel';
                                                                                                          var eventNamespace = '.uispinner';
                                                                                                          var validKeys = [up, down, right, left, pageUp, pageDown, home, end, keyCode.BACKSPACE, keyCode.DELETE, keyCode.TAB];
                                                                                                          var focusCtrl;
                                                                                                          $.widget('ui.spinner', {
                                                                                                            options: {
                                                                                                              min: null,
                                                                                                              max: null,
                                                                                                              allowNull: false,
                                                                                                              group: '',
                                                                                                              point: '.',
                                                                                                              prefix: '',
                                                                                                              suffix: '',
                                                                                                              places: null,
                                                                                                              defaultStep: 1,
                                                                                                              largeStep: 10,
                                                                                                              mouseWheel: true,
                                                                                                              increment: 'slow',
                                                                                                              className: null,
                                                                                                              showOn: 'always',
                                                                                                              width: 95,
                                                                                                              upIconClass: 'ui-icon-triangle-1-n',
                                                                                                              downIconClass: 'ui-icon-triangle-1-s',
                                                                                                              addText: '+',
                                                                                                              subText: '-',
                                                                                                              format: function format(num, places) {
                                                                                                                var _this = this;

                                                                                                                var regex = /(\d+)(\d{3})/;
                                                                                                                var result;
                                                                                                                var realNum = Number(num);
                                                                                                                /* jscs:disable disallowImplicitTypeConversion */

                                                                                                                result = (isNaN(num) ? 0 : Math.abs(realNum)).toFixed(places) + '';

                                                                                                                for (result = result.replace('.', _this.point); regex.test(result) && _this.group; result = result.replace(regex, '$1' + _this.group + '$2')) {}

                                                                                                                return (num < 0 ? '-' : '') + _this.prefix + result + _this.suffix;
                                                                                                              },
                                                                                                              parse: function parse(val) {
                                                                                                                var _this = this;

                                                                                                                if ('.' === _this.group) {
                                                                                                                  val = val.replace('.', '');
                                                                                                                }

                                                                                                                if ('.' !== _this.point) {
                                                                                                                  val = val.replace(_this.point, '.');
                                                                                                                }

                                                                                                                return parseFloat(val.replace(/[^0-9\-\.]/g, ''));
                                                                                                              }
                                                                                                            },
                                                                                                            _create: function _create() {
                                                                                                              var _this = this;

                                                                                                              var input = _this.element;
                                                                                                              var type = input.attr('type');

                                                                                                              if (!input.is('input') || 'text' !== type && 'number' !== type) {
                                                                                                                console.error('Invalid target for ui.spinner');
                                                                                                                return;
                                                                                                              }

                                                                                                              _this._procOptions(true);

                                                                                                              _this._createButtons(input);

                                                                                                              if (!input.is(':enabled')) {
                                                                                                                _this.disable();
                                                                                                              }
                                                                                                            },
                                                                                                            _createButtons: function _createButtons(input) {
                                                                                                              var _this = this;

                                                                                                              var options = _this.options;
                                                                                                              var className = options.className;
                                                                                                              var buttonWidth = options.width;
                                                                                                              var showOn = options.showOn;
                                                                                                              var height = input.outerHeight();
                                                                                                              var wrapper;
                                                                                                              var upButton;
                                                                                                              var downButton;
                                                                                                              var buttons;
                                                                                                              var icons;
                                                                                                              var hoverDelay;
                                                                                                              var hoverDelayCallback;
                                                                                                              var hovered;
                                                                                                              var inKeyDown;
                                                                                                              var inSpecialKey;
                                                                                                              var inMouseDown;
                                                                                                              var btnContainer;
                                                                                                              var rtl;

                                                                                                              function mouseUp() {
                                                                                                                /* jshint validthis:true */
                                                                                                                if (inMouseDown) {
                                                                                                                  $(this).removeClass(active);

                                                                                                                  _this._stopSpin();

                                                                                                                  inMouseDown = false;
                                                                                                                }

                                                                                                                return false;
                                                                                                              }

                                                                                                              function mouseDown() {
                                                                                                                var input;
                                                                                                                var dir;
                                                                                                                /* jshint validthis:true */

                                                                                                                if (!options.disabled) {
                                                                                                                  input = _this.element[0];
                                                                                                                  dir = upButton === this ? 1 : -1;
                                                                                                                  input.focus();
                                                                                                                  input.select();
                                                                                                                  $(this).addClass(active);
                                                                                                                  inMouseDown = true;

                                                                                                                  _this._startSpin(dir);
                                                                                                                }

                                                                                                                return false;
                                                                                                              }

                                                                                                              function setHoverDelay(callback) {
                                                                                                                function execute() {
                                                                                                                  hoverDelay = 0;
                                                                                                                  callback();
                                                                                                                }

                                                                                                                if (hoverDelay) {
                                                                                                                  if (callback === hoverDelayCallback) {
                                                                                                                    return;
                                                                                                                  }

                                                                                                                  clearTimeout(hoverDelay);
                                                                                                                }

                                                                                                                hoverDelayCallback = callback;
                                                                                                                hoverDelay = setTimeout(execute, 100);
                                                                                                              }

                                                                                                              function invalidKey(keyCode, charCode) {
                                                                                                                var ch;
                                                                                                                var options;

                                                                                                                if (inSpecialKey) {
                                                                                                                  return false;
                                                                                                                }

                                                                                                                ch = String.fromCharCode(charCode || keyCode);
                                                                                                                options = _this.options;

                                                                                                                if (ch >= '0' && ch <= '9' || '-' === ch) {
                                                                                                                  return false;
                                                                                                                }

                                                                                                                if (_this.places > 0 && ch === options.point || ch === options.group) {
                                                                                                                  return false;
                                                                                                                }

                                                                                                                return true;
                                                                                                              }

                                                                                                              function isSpecialKey(keyCode) {
                                                                                                                var vKeys = validKeys.length;
                                                                                                                var i;

                                                                                                                for (i = 0; i < vKeys; i += 1) {
                                                                                                                  if (validKeys[i] === keyCode) {
                                                                                                                    return true;
                                                                                                                  }
                                                                                                                }

                                                                                                                return false;
                                                                                                              }

                                                                                                              wrapper = input.wrap('<span class="spinner-wrpr" />').css({
                                                                                                                width: (_this.oWidth = input.outerWidth()) - buttonWidth + '!important',
                                                                                                                marginRight: '30px',
                                                                                                                marginLeft: '30px',
                                                                                                                textAlign: 'center',
                                                                                                                'float': 'none',
                                                                                                                marginTop: 0
                                                                                                              }).after('<span class="ui-spinner ui-widget"></span>').next();
                                                                                                              _this.wrapper = wrapper;
                                                                                                              btnContainer = $('<div class="ui-spinner-buttons"><div class="ui-spinner-up ui-spinner-button ui-state-default ui-corner-tr"><span class="ui-icon ' + options.upIconClass + '">' + options.addText + '</span></div><div class="ui-spinner-down ui-spinner-button ui-state-default ui-corner-br"><span class="ui-icon ' + options.downIconClass + '">' + options.subText + '</span></div></div>');
                                                                                                              _this.btnContainer = btnContainer;
                                                                                                              rtl = 'rtl' === input[0].dir;

                                                                                                              if (className) {
                                                                                                                wrapper.addClass(className);
                                                                                                              }

                                                                                                              wrapper.append(btnContainer.css({
                                                                                                                height: height,
                                                                                                                left: 0,
                                                                                                                top: 0
                                                                                                              }));
                                                                                                              buttons = _this.buttons = btnContainer.find('.ui-spinner-button');
                                                                                                              buttons.css({
                                                                                                                width: '30px',
                                                                                                                height: height - 0
                                                                                                              });
                                                                                                              buttons.eq(0).css({
                                                                                                                right: '0'
                                                                                                              });
                                                                                                              buttons.eq(1).css({
                                                                                                                left: '0'
                                                                                                              });
                                                                                                              upButton = buttons[0];
                                                                                                              downButton = buttons[1];
                                                                                                              icons = buttons.find('.ui-icon');
                                                                                                              btnContainer.width('135px');

                                                                                                              if ('always' !== showOn) {
                                                                                                                btnContainer.css('opacity', 0);
                                                                                                              }

                                                                                                              if ('hover' === showOn || 'both' === showOn) {
                                                                                                                buttons.add(input).bind('mouseenter' + eventNamespace, function () {
                                                                                                                  setHoverDelay(function () {
                                                                                                                    hovered = true;

                                                                                                                    if (!_this.focused || 'hover' === showOn) {
                                                                                                                      _this.showButtons();
                                                                                                                    }
                                                                                                                  });
                                                                                                                }).bind('mouseleave' + eventNamespace, function () {
                                                                                                                  setHoverDelay(function () {
                                                                                                                    hovered = false;

                                                                                                                    if (!_this.focused || 'hover' === showOn) {
                                                                                                                      _this.hideButtons();
                                                                                                                    }
                                                                                                                  });
                                                                                                                });
                                                                                                              }

                                                                                                              buttons.hover(function () {
                                                                                                                _this.buttons.removeClass(hover);

                                                                                                                if (!options.disabled) {
                                                                                                                  $(this).addClass(hover);
                                                                                                                }
                                                                                                              }, function () {
                                                                                                                $(this).removeClass(hover);
                                                                                                              }).mousedown(mouseDown).mouseup(mouseUp).mouseout(mouseUp);

                                                                                                              if (msie) {
                                                                                                                buttons.dblclick(function () {
                                                                                                                  if (!options.disabled) {
                                                                                                                    _this._change();

                                                                                                                    _this._doSpin((this === upButton ? 1 : -1) * options.step);
                                                                                                                  }

                                                                                                                  return false;
                                                                                                                }).bind('selectstart', function () {
                                                                                                                  return false;
                                                                                                                });
                                                                                                              }

                                                                                                              input.bind('keydown' + eventNamespace, function (e) {
                                                                                                                var dir;
                                                                                                                var large;
                                                                                                                var limit;
                                                                                                                var keyCode = e.keyCode;

                                                                                                                if (e.ctrl || e.alt) {
                                                                                                                  return true;
                                                                                                                }

                                                                                                                if (isSpecialKey(keyCode)) {
                                                                                                                  inSpecialKey = true;
                                                                                                                }

                                                                                                                if (inKeyDown) {
                                                                                                                  return false;
                                                                                                                }
                                                                                                                /*jslint bitwise: true */


                                                                                                                switch (keyCode) {
                                                                                                                  case up:
                                                                                                                  case pageUp:
                                                                                                                    dir = 1;
                                                                                                                    large = keyCode === pageUp;
                                                                                                                    break;

                                                                                                                  case down:
                                                                                                                  case pageDown:
                                                                                                                    hover = -1;
                                                                                                                    large = keyCode === pageDown;
                                                                                                                    break;

                                                                                                                  case right:
                                                                                                                  case left:
                                                                                                                    dir = keyCode === right ^ rtl ? 1 : -1;
                                                                                                                    break;

                                                                                                                  case home:
                                                                                                                    limit = _this.options.min;

                                                                                                                    if (null !== limit) {
                                                                                                                      _this._setValue(limit);
                                                                                                                    }

                                                                                                                    return false;

                                                                                                                  case end:
                                                                                                                    limit = _this.options.max;
                                                                                                                    limit = _this.options.max;

                                                                                                                    if (null !== limit) {
                                                                                                                      _this._setValue(limit);
                                                                                                                    }

                                                                                                                    return false;
                                                                                                                }

                                                                                                                if (dir) {
                                                                                                                  if (!inKeyDown && !options.disabled) {
                                                                                                                    $(dir > 0 ? upButton : downButton).addClass(active);
                                                                                                                    inKeyDown = true;

                                                                                                                    _this._startSpin(dir, large);
                                                                                                                  }

                                                                                                                  return false;
                                                                                                                }
                                                                                                              }).bind('keyup' + eventNamespace, function (e) {
                                                                                                                if (e.ctrl || e.alt) {
                                                                                                                  return true;
                                                                                                                }

                                                                                                                if (isSpecialKey(keyCode)) {
                                                                                                                  inSpecialKey = false;
                                                                                                                }

                                                                                                                switch (e.keyCode) {
                                                                                                                  case up:
                                                                                                                  case right:
                                                                                                                  case pageUp:
                                                                                                                  case down:
                                                                                                                  case left:
                                                                                                                  case pageDown:
                                                                                                                    buttons.removeClass(active);

                                                                                                                    _this._stopSpin();

                                                                                                                    inKeyDown = false;
                                                                                                                    return false;
                                                                                                                }
                                                                                                              }).bind('keypress' + eventNamespace, function (e) {
                                                                                                                if (invalidKey(e.keyCode, e.charCode)) {
                                                                                                                  return false;
                                                                                                                }
                                                                                                              }).bind('change' + eventNamespace, function () {
                                                                                                                _this._change();
                                                                                                              }).bind('focus' + eventNamespace, function () {
                                                                                                                function selectAll() {
                                                                                                                  _this.element.select();
                                                                                                                }

                                                                                                                if (msie) {
                                                                                                                  selectAll();
                                                                                                                } else {
                                                                                                                  setTimeout(selectAll, 0);
                                                                                                                }

                                                                                                                _this.focused = true;
                                                                                                                focusCtrl = _this;

                                                                                                                if (!hovered && ('focus' === showOn || 'both' === showOn)) {
                                                                                                                  _this.showButtons();
                                                                                                                }
                                                                                                              }).bind('blur' + eventNamespace, function () {
                                                                                                                _this.focused = false;

                                                                                                                if (!hovered && ('focus' === showOn || 'both' === showOn)) {
                                                                                                                  _this.hideButtons();
                                                                                                                }
                                                                                                              });
                                                                                                            },
                                                                                                            _procOptions: function _procOptions(init) {
                                                                                                              var _this = this;

                                                                                                              var input = _this.element;
                                                                                                              var options = _this.options;
                                                                                                              var min = options.min;
                                                                                                              var max = options.max;
                                                                                                              var step = options.step;
                                                                                                              var places = options.places;
                                                                                                              var maxLength = -1;
                                                                                                              var temp;

                                                                                                              if ('slow' === options.increment) {
                                                                                                                options.increment = [{
                                                                                                                  count: 1,
                                                                                                                  mult: 1,
                                                                                                                  delay: 250
                                                                                                                }, {
                                                                                                                  count: 3,
                                                                                                                  mult: 1,
                                                                                                                  delay: 100
                                                                                                                }, {
                                                                                                                  count: 0,
                                                                                                                  mult: 1,
                                                                                                                  delay: 50
                                                                                                                }];
                                                                                                              } else if ('fast' === options.increment) {
                                                                                                                options.increment = [{
                                                                                                                  count: 1,
                                                                                                                  mult: 1,
                                                                                                                  delay: 250
                                                                                                                }, {
                                                                                                                  count: 19,
                                                                                                                  mult: 1,
                                                                                                                  delay: 100
                                                                                                                }, {
                                                                                                                  count: 80,
                                                                                                                  mult: 1,
                                                                                                                  delay: 20
                                                                                                                }, {
                                                                                                                  count: 100,
                                                                                                                  mult: 10,
                                                                                                                  delay: 20
                                                                                                                }, {
                                                                                                                  count: 0,
                                                                                                                  mult: 100,
                                                                                                                  delay: 20
                                                                                                                }];
                                                                                                              }

                                                                                                              if (null === min && null !== (temp = input.attr('min'))) {
                                                                                                                min = parseFloat(temp);
                                                                                                              }

                                                                                                              if (null === max && null !== (temp = input.attr('max'))) {
                                                                                                                max = parseFloat(temp);
                                                                                                              }

                                                                                                              if (!step && null !== (temp = input.attr('step'))) {
                                                                                                                if ('any' !== temp) {
                                                                                                                  step = parseFloat(temp);
                                                                                                                  options.largeStep *= step;
                                                                                                                }
                                                                                                              }

                                                                                                              options.step = step = step || options.defaultStep;

                                                                                                              if (null === places && -1 !== (temp = step + '').indexOf('.')) {
                                                                                                                places = temp.length - temp.indexOf('.') - 1;
                                                                                                              }

                                                                                                              _this.places = places;

                                                                                                              if (null !== max && null !== min) {
                                                                                                                if (min > max) {
                                                                                                                  min = max;
                                                                                                                }

                                                                                                                maxLength = Math.max(Math.max(maxLength, options.format(max, places, input).length), options.format(min, places, input).length);
                                                                                                              }

                                                                                                              if (init) {
                                                                                                                _this.inputMaxLength = input[0].maxLength;
                                                                                                              }

                                                                                                              temp = _this.inputMaxLength;

                                                                                                              if (temp > 0) {
                                                                                                                maxLength = maxLength > 0 ? Math.min(temp, maxLength) : temp;
                                                                                                                temp = Math.pow(10, maxLength) - 1;

                                                                                                                if (null === max || max > temp) {
                                                                                                                  max = temp;
                                                                                                                }

                                                                                                                temp = -(temp + 1) / 10 + 1;

                                                                                                                if (null === min || min < temp) {
                                                                                                                  min = temp;
                                                                                                                }
                                                                                                              }

                                                                                                              if (maxLength > 0) {
                                                                                                                input.attr('maxlength', maxLength);
                                                                                                              }

                                                                                                              options.min = min;
                                                                                                              options.max = max;

                                                                                                              _this._change();

                                                                                                              input.unbind(mouseWheelEventName + eventNamespace);

                                                                                                              if (options.mouseWheel) {
                                                                                                                input.bind(mouseWheelEventName + eventNamespace, _this._mouseWheel);
                                                                                                              }
                                                                                                            },
                                                                                                            _mouseWheel: function _mouseWheel(e) {
                                                                                                              var self = $.data(this, 'spinner');

                                                                                                              if (!self.options.disabled && self.focused && self === focusCtrl) {
                                                                                                                self._change();

                                                                                                                self._doSpin(((e.wheelDelta || -e.detail) > 0 ? 1 : -1) * self.options.step);

                                                                                                                return false;
                                                                                                              }
                                                                                                            },
                                                                                                            _setTimer: function _setTimer(delay, dir, large) {
                                                                                                              var _this = this;

                                                                                                              function e() {
                                                                                                                _this._spin(dir, large);
                                                                                                              }

                                                                                                              _this._stopSpin();

                                                                                                              _this.timer = setInterval(e, delay);
                                                                                                            },
                                                                                                            _stopSpin: function _stopSpin() {
                                                                                                              if (this.timer) {
                                                                                                                clearInterval(this.timer);
                                                                                                                this.timer = 0;
                                                                                                              }
                                                                                                            },
                                                                                                            _startSpin: function _startSpin(dir, large) {
                                                                                                              var _this = this;

                                                                                                              var options = _this.options;
                                                                                                              var increment = options.increment;

                                                                                                              _this._change();

                                                                                                              _this._doSpin(dir * (large ? _this.options.largeStep : _this.options.step));

                                                                                                              if (increment && increment.length > 0) {
                                                                                                                _this.counter = 0;
                                                                                                                _this.incCounter = 0;

                                                                                                                _this._setTimer(increment[0].delay, dir, large);
                                                                                                              }
                                                                                                            },
                                                                                                            _spin: function _spin(dir, large) {
                                                                                                              var _this = this;

                                                                                                              var increment = _this.options.increment;
                                                                                                              var curIncrement = increment[_this.incCounter];

                                                                                                              _this._doSpin(dir * curIncrement.mult * (large ? _this.options.largeStep : _this.options.step));

                                                                                                              _this.counter += 1;

                                                                                                              if (_this.counter > curIncrement.count && _this.incCounter < increment.length - 1) {
                                                                                                                _this.counter = 0;
                                                                                                                /* jshint plusplus:false */

                                                                                                                curIncrement = increment[++_this.incCounter];

                                                                                                                _this._setTimer(curIncrement.delay, dir, large);
                                                                                                              }
                                                                                                            },
                                                                                                            _doSpin: function _doSpin(step) {
                                                                                                              var _this = this;

                                                                                                              var value = _this.curvalue;

                                                                                                              if (null === value) {
                                                                                                                value = (step > 0 ? _this.options.min : _this.options.max) || 0;
                                                                                                              }

                                                                                                              _this._setValue(value + step);
                                                                                                            },
                                                                                                            _parseValue: function _parseValue() {
                                                                                                              var value = this.element.val();
                                                                                                              return value ? this.options.parse(value, this.element) : null;
                                                                                                            },
                                                                                                            _validate: function _validate(value) {
                                                                                                              var options = this.options;
                                                                                                              var min = options.min;
                                                                                                              var max = options.max;

                                                                                                              if (null === value && !options.allowNull) {
                                                                                                                value = null !== this.curvalue ? this.curvalue : min || max || 0;
                                                                                                              }

                                                                                                              if (null !== max && (value > max || value === max)) {
                                                                                                                if (undefined !== this.buttons) {
                                                                                                                  $(this.buttons[0]).addClass(disabled);
                                                                                                                }

                                                                                                                return max;
                                                                                                              } else if (null !== min && (value < min || value === min)) {
                                                                                                                if (undefined !== this.buttons) {
                                                                                                                  $(this.buttons[1]).addClass(disabled);
                                                                                                                }

                                                                                                                return min;
                                                                                                              } else {
                                                                                                                if (undefined !== this.buttons) {
                                                                                                                  $(this.buttons[0]).removeClass(disabled);
                                                                                                                  $(this.buttons[1]).removeClass(disabled);
                                                                                                                }

                                                                                                                return value;
                                                                                                              }
                                                                                                            },
                                                                                                            _change: function _change() {
                                                                                                              var _this = this;

                                                                                                              var value = _this._parseValue();

                                                                                                              if (!_this.selfChange) {
                                                                                                                if (isNaN(value)) {
                                                                                                                  value = _this.curvalue;
                                                                                                                }

                                                                                                                _this._setValue(value, true);
                                                                                                              }
                                                                                                            },
                                                                                                            _setOption: function _setOption(key, value) {
                                                                                                              $.Widget.prototype._setOption.call(this, key, value);

                                                                                                              this._procOptions();
                                                                                                            },
                                                                                                            increment: function increment() {
                                                                                                              this._doSpin(this.options.step);
                                                                                                            },
                                                                                                            decrement: function decrement() {
                                                                                                              this._doSpin(-this.options.step);
                                                                                                            },
                                                                                                            showButtons: function showButtons(immediate) {
                                                                                                              var btnContainer = this.btnContainer.stop();

                                                                                                              if (immediate) {
                                                                                                                btnContainer.css('opacity', 1);
                                                                                                              } else {
                                                                                                                btnContainer.fadeTo('fast', 1);
                                                                                                              }
                                                                                                            },
                                                                                                            hideButtons: function hideButtons(immediate) {
                                                                                                              var btnContainer = this.btnContainer.stop();

                                                                                                              if (immediate) {
                                                                                                                btnContainer.css('opacity', 0);
                                                                                                              } else {
                                                                                                                btnContainer.fadeTo('fast', 0);
                                                                                                              }

                                                                                                              this.buttons.removeClass(hover);
                                                                                                            },
                                                                                                            _setValue: function _setValue(value, suppressFireEvent) {
                                                                                                              var _this = this;

                                                                                                              _this.curvalue = value = _this._validate(value);

                                                                                                              _this.element.val(null !== value ? _this.options.format(value, _this.places, _this.element) : '');

                                                                                                              if (!suppressFireEvent) {
                                                                                                                _this.selfChange = true;

                                                                                                                _this.element.change();

                                                                                                                _this.selfChange = false;
                                                                                                              }
                                                                                                            },
                                                                                                            value: function value(newValue) {
                                                                                                              if (arguments.length) {
                                                                                                                this._setValue(newValue);

                                                                                                                return this.element;
                                                                                                              }

                                                                                                              return this.curvalue;
                                                                                                            },
                                                                                                            enable: function enable() {
                                                                                                              this.buttons.removeClass(disabled);
                                                                                                              this.element[0].disabled = false;
                                                                                                              $.Widget.prototype.enable.call(this);
                                                                                                            },
                                                                                                            disable: function disable() {
                                                                                                              this.buttons.addClass(disabled).removeClass(hover);
                                                                                                              this.element[0].disabled = true;
                                                                                                              $.Widget.prototype.disable.call(this);
                                                                                                            },
                                                                                                            destroy: function destroy() {
                                                                                                              this.wrapper.remove();
                                                                                                              this.element.unbind(eventNamespace).css({
                                                                                                                width: this.oWidth,
                                                                                                                marginRight: this.oMargin
                                                                                                              });
                                                                                                              $.Widget.prototype.destroy.call(this);
                                                                                                            }
                                                                                                          });
                                                                                                        })(jQuery);
                                                                                                        /***/

                                                                                                      },

                                                                                                      /***/
                                                                                                      44:
                                                                                                      /*!*************************************************************************!*\
                                                                                                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                        \*************************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function _(module, exports, __webpack_require__) {
                                                                                                        module.exports = __webpack_require__(
                                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                                        /***/
                                                                                                      }
                                                                                                      /******/

                                                                                                    });
                                                                                                    /***/

                                                                                                  },

                                                                                                  /***/
                                                                                                  44:
                                                                                                  /*!*************************************************************************!*\
                                                                                                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                    \*************************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function _(module, exports, __webpack_require__) {
                                                                                                    module.exports = __webpack_require__(
                                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                                    /***/
                                                                                                  }
                                                                                                  /******/

                                                                                                });
                                                                                                /***/

                                                                                              },

                                                                                              /***/
                                                                                              44:
                                                                                              /*!*************************************************************************!*\
                                                                                                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                                \*************************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function _(module, exports, __webpack_require__) {
                                                                                                module.exports = __webpack_require__(
                                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                                /***/
                                                                                              }
                                                                                              /******/

                                                                                            });
                                                                                            /***/

                                                                                          },

                                                                                          /***/
                                                                                          44:
                                                                                          /*!*************************************************************************!*\
                                                                                            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                            \*************************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function _(module, exports, __webpack_require__) {
                                                                                            module.exports = __webpack_require__(
                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                            /***/
                                                                                          }
                                                                                          /******/

                                                                                        });
                                                                                        /***/

                                                                                      },

                                                                                      /***/
                                                                                      44:
                                                                                      /*!*************************************************************************!*\
                                                                                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                        \*************************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function _(module, exports, __webpack_require__) {
                                                                                        module.exports = __webpack_require__(
                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                        /***/
                                                                                      }
                                                                                      /******/

                                                                                    });
                                                                                    /***/

                                                                                  },

                                                                                  /***/
                                                                                  44:
                                                                                  /*!*************************************************************************!*\
                                                                                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                    \*************************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function _(module, exports, __webpack_require__) {
                                                                                    module.exports = __webpack_require__(
                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                    /***/
                                                                                  }
                                                                                  /******/

                                                                                });
                                                                                /***/

                                                                              },

                                                                              /***/
                                                                              44:
                                                                              /*!*************************************************************************!*\
                                                                                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                                \*************************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function _(module, exports, __webpack_require__) {
                                                                                module.exports = __webpack_require__(
                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                                /***/
                                                                              }
                                                                              /******/

                                                                            });
                                                                            /***/

                                                                          },

                                                                          /***/
                                                                          44:
                                                                          /*!*************************************************************************!*\
                                                                            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                            \*************************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function _(module, exports, __webpack_require__) {
                                                                            module.exports = __webpack_require__(
                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                            /***/
                                                                          }
                                                                          /******/

                                                                        });
                                                                        /***/

                                                                      },

                                                                      /***/
                                                                      44:
                                                                      /*!*************************************************************************!*\
                                                                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                        \*************************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function _(module, exports, __webpack_require__) {
                                                                        module.exports = __webpack_require__(
                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                        /***/
                                                                      }
                                                                      /******/

                                                                    });
                                                                    /***/

                                                                  },

                                                                  /***/
                                                                  44:
                                                                  /*!*************************************************************************!*\
                                                                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                    \*************************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function _(module, exports, __webpack_require__) {
                                                                    module.exports = __webpack_require__(
                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                    /***/
                                                                  }
                                                                  /******/

                                                                });
                                                                /***/

                                                              },

                                                              /***/
                                                              44:
                                                              /*!*************************************************************************!*\
                                                                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                                \*************************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function _(module, exports, __webpack_require__) {
                                                                module.exports = __webpack_require__(
                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                                /***/
                                                              }
                                                              /******/

                                                            });
                                                            /***/

                                                          },

                                                          /***/
                                                          44:
                                                          /*!*************************************************************************!*\
                                                            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                            \*************************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      44:
                                                      /*!*************************************************************************!*\
                                                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                        \*************************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        module.exports = __webpack_require__(
                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  44:
                                                  /*!*************************************************************************!*\
                                                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                    \*************************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    module.exports = __webpack_require__(
                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              44:
                                              /*!*************************************************************************!*\
                                                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                                \*************************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                module.exports = __webpack_require__(
                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          44:
                                          /*!*************************************************************************!*\
                                            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                            \*************************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            module.exports = __webpack_require__(
                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      44:
                                      /*!*************************************************************************!*\
                                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                        \*************************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        module.exports = __webpack_require__(
                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  44:
                                  /*!*************************************************************************!*\
                                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                    \*************************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    module.exports = __webpack_require__(
                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              44:
                              /*!*************************************************************************!*\
                                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                                \*************************************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(
                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          44:
                          /*!*************************************************************************!*\
                            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                            \*************************************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(
                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      44:
                      /*!*************************************************************************!*\
                        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                        \*************************************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        module.exports = __webpack_require__(
                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  44:
                  /*!*************************************************************************!*\
                    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                    \*************************************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(
                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              44:
              /*!*************************************************************************!*\
                !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
                \*************************************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
                "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          44:
          /*!*************************************************************************!*\
            !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
            \*************************************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
            "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      44:
      /*!*************************************************************************!*\
        !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
        "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  44:
  /*!*************************************************************************!*\
    !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */
    "./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ 44:
/*!*************************************************************************!*\
  !*** multi ./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\spinner\vendor\jquery.ui.spinner.js */"./redux-core/inc/fields/spinner/vendor/jquery.ui.spinner.js");


/***/ })

/******/ });