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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./redux-core/inc/fields/sortable/redux-sortable.js":
/*!**********************************************************!*\
  !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
  \**********************************************************/
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

  return __webpack_require__(__webpack_require__.s = 35);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./redux-core/inc/fields/sortable/redux-sortable.js":
  /*!**********************************************************!*\
    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

      return __webpack_require__(__webpack_require__.s = 35);
      /******/
    })(
    /************************************************************************/

    /******/
    {
      /***/
      "./redux-core/inc/fields/sortable/redux-sortable.js":
      /*!**********************************************************!*\
        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

          return __webpack_require__(__webpack_require__.s = 35);
          /******/
        })(
        /************************************************************************/

        /******/
        {
          /***/
          "./redux-core/inc/fields/sortable/redux-sortable.js":
          /*!**********************************************************!*\
            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
            \**********************************************************/

          /*! no static exports found */

          /***/
          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

              return __webpack_require__(__webpack_require__.s = 35);
              /******/
            })(
            /************************************************************************/

            /******/
            {
              /***/
              "./redux-core/inc/fields/sortable/redux-sortable.js":
              /*!**********************************************************!*\
                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                \**********************************************************/

              /*! no static exports found */

              /***/
              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                  return __webpack_require__(__webpack_require__.s = 35);
                  /******/
                })(
                /************************************************************************/

                /******/
                {
                  /***/
                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                  /*!**********************************************************!*\
                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                    \**********************************************************/

                  /*! no static exports found */

                  /***/
                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                      return __webpack_require__(__webpack_require__.s = 35);
                      /******/
                    })(
                    /************************************************************************/

                    /******/
                    {
                      /***/
                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                      /*!**********************************************************!*\
                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                        \**********************************************************/

                      /*! no static exports found */

                      /***/
                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                          return __webpack_require__(__webpack_require__.s = 35);
                          /******/
                        })(
                        /************************************************************************/

                        /******/
                        {
                          /***/
                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                          /*!**********************************************************!*\
                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                            \**********************************************************/

                          /*! no static exports found */

                          /***/
                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                              return __webpack_require__(__webpack_require__.s = 35);
                              /******/
                            })(
                            /************************************************************************/

                            /******/
                            {
                              /***/
                              "./redux-core/inc/fields/sortable/redux-sortable.js":
                              /*!**********************************************************!*\
                                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                \**********************************************************/

                              /*! no static exports found */

                              /***/
                              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                  return __webpack_require__(__webpack_require__.s = 35);
                                  /******/
                                })(
                                /************************************************************************/

                                /******/
                                {
                                  /***/
                                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                                  /*!**********************************************************!*\
                                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                    \**********************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                      return __webpack_require__(__webpack_require__.s = 35);
                                      /******/
                                    })(
                                    /************************************************************************/

                                    /******/
                                    {
                                      /***/
                                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                                      /*!**********************************************************!*\
                                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                        \**********************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                          return __webpack_require__(__webpack_require__.s = 35);
                                          /******/
                                        })(
                                        /************************************************************************/

                                        /******/
                                        {
                                          /***/
                                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                                          /*!**********************************************************!*\
                                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                            \**********************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                              return __webpack_require__(__webpack_require__.s = 35);
                                              /******/
                                            })(
                                            /************************************************************************/

                                            /******/
                                            {
                                              /***/
                                              "./redux-core/inc/fields/sortable/redux-sortable.js":
                                              /*!**********************************************************!*\
                                                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                \**********************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                  return __webpack_require__(__webpack_require__.s = 35);
                                                  /******/
                                                })(
                                                /************************************************************************/

                                                /******/
                                                {
                                                  /***/
                                                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                  /*!**********************************************************!*\
                                                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                    \**********************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                      return __webpack_require__(__webpack_require__.s = 35);
                                                      /******/
                                                    })(
                                                    /************************************************************************/

                                                    /******/
                                                    {
                                                      /***/
                                                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                      /*!**********************************************************!*\
                                                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                        \**********************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                          return __webpack_require__(__webpack_require__.s = 35);
                                                          /******/
                                                        })(
                                                        /************************************************************************/

                                                        /******/
                                                        {
                                                          /***/
                                                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                          /*!**********************************************************!*\
                                                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                            \**********************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                              return __webpack_require__(__webpack_require__.s = 35);
                                                              /******/
                                                            })(
                                                            /************************************************************************/

                                                            /******/
                                                            {
                                                              /***/
                                                              "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                              /*!**********************************************************!*\
                                                                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                \**********************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                  return __webpack_require__(__webpack_require__.s = 35);
                                                                  /******/
                                                                })(
                                                                /************************************************************************/

                                                                /******/
                                                                {
                                                                  /***/
                                                                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                  /*!**********************************************************!*\
                                                                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                    \**********************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                      return __webpack_require__(__webpack_require__.s = 35);
                                                                      /******/
                                                                    })(
                                                                    /************************************************************************/

                                                                    /******/
                                                                    {
                                                                      /***/
                                                                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                      /*!**********************************************************!*\
                                                                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                        \**********************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                          return __webpack_require__(__webpack_require__.s = 35);
                                                                          /******/
                                                                        })(
                                                                        /************************************************************************/

                                                                        /******/
                                                                        {
                                                                          /***/
                                                                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                          /*!**********************************************************!*\
                                                                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                            \**********************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                              return __webpack_require__(__webpack_require__.s = 35);
                                                                              /******/
                                                                            })(
                                                                            /************************************************************************/

                                                                            /******/
                                                                            {
                                                                              /***/
                                                                              "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                              /*!**********************************************************!*\
                                                                                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                \**********************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                  return __webpack_require__(__webpack_require__.s = 35);
                                                                                  /******/
                                                                                })(
                                                                                /************************************************************************/

                                                                                /******/
                                                                                {
                                                                                  /***/
                                                                                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                  /*!**********************************************************!*\
                                                                                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                    \**********************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                      return __webpack_require__(__webpack_require__.s = 35);
                                                                                      /******/
                                                                                    })(
                                                                                    /************************************************************************/

                                                                                    /******/
                                                                                    {
                                                                                      /***/
                                                                                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                      /*!**********************************************************!*\
                                                                                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                        \**********************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                          return __webpack_require__(__webpack_require__.s = 35);
                                                                                          /******/
                                                                                        })(
                                                                                        /************************************************************************/

                                                                                        /******/
                                                                                        {
                                                                                          /***/
                                                                                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                          /*!**********************************************************!*\
                                                                                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                            \**********************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                              return __webpack_require__(__webpack_require__.s = 35);
                                                                                              /******/
                                                                                            })(
                                                                                            /************************************************************************/

                                                                                            /******/
                                                                                            {
                                                                                              /***/
                                                                                              "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                              /*!**********************************************************!*\
                                                                                                !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                \**********************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                                  return __webpack_require__(__webpack_require__.s = 35);
                                                                                                  /******/
                                                                                                })(
                                                                                                /************************************************************************/

                                                                                                /******/
                                                                                                {
                                                                                                  /***/
                                                                                                  "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                                  /*!**********************************************************!*\
                                                                                                    !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                    \**********************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                                      return __webpack_require__(__webpack_require__.s = 35);
                                                                                                      /******/
                                                                                                    })(
                                                                                                    /************************************************************************/

                                                                                                    /******/
                                                                                                    {
                                                                                                      /***/
                                                                                                      "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                                      /*!**********************************************************!*\
                                                                                                        !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                        \**********************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
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

                                                                                                          return __webpack_require__(__webpack_require__.s = 35);
                                                                                                          /******/
                                                                                                        })(
                                                                                                        /************************************************************************/

                                                                                                        /******/
                                                                                                        {
                                                                                                          /***/
                                                                                                          "./redux-core/inc/fields/sortable/redux-sortable.js":
                                                                                                          /*!**********************************************************!*\
                                                                                                            !*** ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                            \**********************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function reduxCoreIncFieldsSortableReduxSortableJs(module, exports) {
                                                                                                            /*global jQuery, redux_change, redux*/
                                                                                                            (function ($) {
                                                                                                              'use strict';

                                                                                                              var scrollDir = '';
                                                                                                              redux.field_objects = redux.field_objects || {};
                                                                                                              redux.field_objects.sortable = redux.field_objects.sortable || {};

                                                                                                              redux.field_objects.sortable.init = function (selector) {
                                                                                                                selector = $.redux.getSelector(selector, 'sortable');
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

                                                                                                                  el.find('.redux-sortable').sortable({
                                                                                                                    handle: '.drag',
                                                                                                                    placeholder: 'placeholder',
                                                                                                                    opacity: 0.7,
                                                                                                                    scroll: false,
                                                                                                                    out: function out(event, ui) {
                                                                                                                      event = null;

                                                                                                                      if (!ui.helper) {
                                                                                                                        return;
                                                                                                                      }

                                                                                                                      if (ui.offset.top > 0) {
                                                                                                                        scrollDir = 'down';
                                                                                                                      } else {
                                                                                                                        scrollDir = 'up';
                                                                                                                      }

                                                                                                                      redux.field_objects.sortable.scrolling($(this).parents('.redux-field-container:first'));
                                                                                                                    },
                                                                                                                    over: function over() {
                                                                                                                      scrollDir = '';
                                                                                                                    },
                                                                                                                    deactivate: function deactivate() {
                                                                                                                      scrollDir = '';
                                                                                                                    },
                                                                                                                    update: function update() {
                                                                                                                      redux_change($(this));
                                                                                                                    }
                                                                                                                  });
                                                                                                                  el.find('.redux-sortable i.visibility').on('click', function () {
                                                                                                                    var val;
                                                                                                                    var hiddenInput;
                                                                                                                    var li = $(this).parents('li');

                                                                                                                    if (li.hasClass('invisible')) {
                                                                                                                      li.removeClass('invisible');
                                                                                                                      val = 1;
                                                                                                                    } else {
                                                                                                                      li.addClass('invisible');
                                                                                                                      val = '';
                                                                                                                    }

                                                                                                                    hiddenInput = li.find('input[type="hidden"]');
                                                                                                                    hiddenInput.val(val);
                                                                                                                  });
                                                                                                                });
                                                                                                              };

                                                                                                              redux.field_objects.sortable.scrolling = function (selector) {
                                                                                                                var $scrollable;

                                                                                                                if (undefined === selector) {
                                                                                                                  return;
                                                                                                                }

                                                                                                                $scrollable = selector.find('.redux-sorter');

                                                                                                                if ('up' === scrollDir) {
                                                                                                                  $scrollable.scrollTop($scrollable.scrollTop() - 20);
                                                                                                                  setTimeout(redux.field_objects.sortable.scrolling, 50);
                                                                                                                } else if ('down' === scrollDir) {
                                                                                                                  $scrollable.scrollTop($scrollable.scrollTop() + 20);
                                                                                                                  setTimeout(redux.field_objects.sortable.scrolling, 50);
                                                                                                                }
                                                                                                              };
                                                                                                            })(jQuery);
                                                                                                            /***/

                                                                                                          },

                                                                                                          /***/
                                                                                                          35:
                                                                                                          /*!****************************************************************!*\
                                                                                                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                            \****************************************************************/

                                                                                                          /*! no static exports found */

                                                                                                          /***/
                                                                                                          function _(module, exports, __webpack_require__) {
                                                                                                            module.exports = __webpack_require__(
                                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                                            /***/
                                                                                                          }
                                                                                                          /******/

                                                                                                        });
                                                                                                        /***/

                                                                                                      },

                                                                                                      /***/
                                                                                                      35:
                                                                                                      /*!****************************************************************!*\
                                                                                                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                        \****************************************************************/

                                                                                                      /*! no static exports found */

                                                                                                      /***/
                                                                                                      function _(module, exports, __webpack_require__) {
                                                                                                        module.exports = __webpack_require__(
                                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                                        /***/
                                                                                                      }
                                                                                                      /******/

                                                                                                    });
                                                                                                    /***/

                                                                                                  },

                                                                                                  /***/
                                                                                                  35:
                                                                                                  /*!****************************************************************!*\
                                                                                                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                    \****************************************************************/

                                                                                                  /*! no static exports found */

                                                                                                  /***/
                                                                                                  function _(module, exports, __webpack_require__) {
                                                                                                    module.exports = __webpack_require__(
                                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                                    /***/
                                                                                                  }
                                                                                                  /******/

                                                                                                });
                                                                                                /***/

                                                                                              },

                                                                                              /***/
                                                                                              35:
                                                                                              /*!****************************************************************!*\
                                                                                                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                                \****************************************************************/

                                                                                              /*! no static exports found */

                                                                                              /***/
                                                                                              function _(module, exports, __webpack_require__) {
                                                                                                module.exports = __webpack_require__(
                                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                                "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                                /***/
                                                                                              }
                                                                                              /******/

                                                                                            });
                                                                                            /***/

                                                                                          },

                                                                                          /***/
                                                                                          35:
                                                                                          /*!****************************************************************!*\
                                                                                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                            \****************************************************************/

                                                                                          /*! no static exports found */

                                                                                          /***/
                                                                                          function _(module, exports, __webpack_require__) {
                                                                                            module.exports = __webpack_require__(
                                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                            /***/
                                                                                          }
                                                                                          /******/

                                                                                        });
                                                                                        /***/

                                                                                      },

                                                                                      /***/
                                                                                      35:
                                                                                      /*!****************************************************************!*\
                                                                                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                        \****************************************************************/

                                                                                      /*! no static exports found */

                                                                                      /***/
                                                                                      function _(module, exports, __webpack_require__) {
                                                                                        module.exports = __webpack_require__(
                                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                        /***/
                                                                                      }
                                                                                      /******/

                                                                                    });
                                                                                    /***/

                                                                                  },

                                                                                  /***/
                                                                                  35:
                                                                                  /*!****************************************************************!*\
                                                                                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                    \****************************************************************/

                                                                                  /*! no static exports found */

                                                                                  /***/
                                                                                  function _(module, exports, __webpack_require__) {
                                                                                    module.exports = __webpack_require__(
                                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                    /***/
                                                                                  }
                                                                                  /******/

                                                                                });
                                                                                /***/

                                                                              },

                                                                              /***/
                                                                              35:
                                                                              /*!****************************************************************!*\
                                                                                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                                \****************************************************************/

                                                                              /*! no static exports found */

                                                                              /***/
                                                                              function _(module, exports, __webpack_require__) {
                                                                                module.exports = __webpack_require__(
                                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                                "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                                /***/
                                                                              }
                                                                              /******/

                                                                            });
                                                                            /***/

                                                                          },

                                                                          /***/
                                                                          35:
                                                                          /*!****************************************************************!*\
                                                                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                            \****************************************************************/

                                                                          /*! no static exports found */

                                                                          /***/
                                                                          function _(module, exports, __webpack_require__) {
                                                                            module.exports = __webpack_require__(
                                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                            /***/
                                                                          }
                                                                          /******/

                                                                        });
                                                                        /***/

                                                                      },

                                                                      /***/
                                                                      35:
                                                                      /*!****************************************************************!*\
                                                                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                        \****************************************************************/

                                                                      /*! no static exports found */

                                                                      /***/
                                                                      function _(module, exports, __webpack_require__) {
                                                                        module.exports = __webpack_require__(
                                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                        /***/
                                                                      }
                                                                      /******/

                                                                    });
                                                                    /***/

                                                                  },

                                                                  /***/
                                                                  35:
                                                                  /*!****************************************************************!*\
                                                                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                    \****************************************************************/

                                                                  /*! no static exports found */

                                                                  /***/
                                                                  function _(module, exports, __webpack_require__) {
                                                                    module.exports = __webpack_require__(
                                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                    /***/
                                                                  }
                                                                  /******/

                                                                });
                                                                /***/

                                                              },

                                                              /***/
                                                              35:
                                                              /*!****************************************************************!*\
                                                                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                                \****************************************************************/

                                                              /*! no static exports found */

                                                              /***/
                                                              function _(module, exports, __webpack_require__) {
                                                                module.exports = __webpack_require__(
                                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                                "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                                /***/
                                                              }
                                                              /******/

                                                            });
                                                            /***/

                                                          },

                                                          /***/
                                                          35:
                                                          /*!****************************************************************!*\
                                                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                            \****************************************************************/

                                                          /*! no static exports found */

                                                          /***/
                                                          function _(module, exports, __webpack_require__) {
                                                            module.exports = __webpack_require__(
                                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                            /***/
                                                          }
                                                          /******/

                                                        });
                                                        /***/

                                                      },

                                                      /***/
                                                      35:
                                                      /*!****************************************************************!*\
                                                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                        \****************************************************************/

                                                      /*! no static exports found */

                                                      /***/
                                                      function _(module, exports, __webpack_require__) {
                                                        module.exports = __webpack_require__(
                                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                        /***/
                                                      }
                                                      /******/

                                                    });
                                                    /***/

                                                  },

                                                  /***/
                                                  35:
                                                  /*!****************************************************************!*\
                                                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                    \****************************************************************/

                                                  /*! no static exports found */

                                                  /***/
                                                  function _(module, exports, __webpack_require__) {
                                                    module.exports = __webpack_require__(
                                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                    /***/
                                                  }
                                                  /******/

                                                });
                                                /***/

                                              },

                                              /***/
                                              35:
                                              /*!****************************************************************!*\
                                                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                                \****************************************************************/

                                              /*! no static exports found */

                                              /***/
                                              function _(module, exports, __webpack_require__) {
                                                module.exports = __webpack_require__(
                                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                                "./redux-core/inc/fields/sortable/redux-sortable.js");
                                                /***/
                                              }
                                              /******/

                                            });
                                            /***/

                                          },

                                          /***/
                                          35:
                                          /*!****************************************************************!*\
                                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                            \****************************************************************/

                                          /*! no static exports found */

                                          /***/
                                          function _(module, exports, __webpack_require__) {
                                            module.exports = __webpack_require__(
                                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                                            /***/
                                          }
                                          /******/

                                        });
                                        /***/

                                      },

                                      /***/
                                      35:
                                      /*!****************************************************************!*\
                                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                        \****************************************************************/

                                      /*! no static exports found */

                                      /***/
                                      function _(module, exports, __webpack_require__) {
                                        module.exports = __webpack_require__(
                                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                                        /***/
                                      }
                                      /******/

                                    });
                                    /***/

                                  },

                                  /***/
                                  35:
                                  /*!****************************************************************!*\
                                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                    \****************************************************************/

                                  /*! no static exports found */

                                  /***/
                                  function _(module, exports, __webpack_require__) {
                                    module.exports = __webpack_require__(
                                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                                    /***/
                                  }
                                  /******/

                                });
                                /***/

                              },

                              /***/
                              35:
                              /*!****************************************************************!*\
                                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                                \****************************************************************/

                              /*! no static exports found */

                              /***/
                              function _(module, exports, __webpack_require__) {
                                module.exports = __webpack_require__(
                                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                                "./redux-core/inc/fields/sortable/redux-sortable.js");
                                /***/
                              }
                              /******/

                            });
                            /***/

                          },

                          /***/
                          35:
                          /*!****************************************************************!*\
                            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                            \****************************************************************/

                          /*! no static exports found */

                          /***/
                          function _(module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(
                            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                            "./redux-core/inc/fields/sortable/redux-sortable.js");
                            /***/
                          }
                          /******/

                        });
                        /***/

                      },

                      /***/
                      35:
                      /*!****************************************************************!*\
                        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                        \****************************************************************/

                      /*! no static exports found */

                      /***/
                      function _(module, exports, __webpack_require__) {
                        module.exports = __webpack_require__(
                        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                        "./redux-core/inc/fields/sortable/redux-sortable.js");
                        /***/
                      }
                      /******/

                    });
                    /***/

                  },

                  /***/
                  35:
                  /*!****************************************************************!*\
                    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                    \****************************************************************/

                  /*! no static exports found */

                  /***/
                  function _(module, exports, __webpack_require__) {
                    module.exports = __webpack_require__(
                    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                    "./redux-core/inc/fields/sortable/redux-sortable.js");
                    /***/
                  }
                  /******/

                });
                /***/

              },

              /***/
              35:
              /*!****************************************************************!*\
                !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
                \****************************************************************/

              /*! no static exports found */

              /***/
              function _(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
                "./redux-core/inc/fields/sortable/redux-sortable.js");
                /***/
              }
              /******/

            });
            /***/

          },

          /***/
          35:
          /*!****************************************************************!*\
            !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
            \****************************************************************/

          /*! no static exports found */

          /***/
          function _(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(
            /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
            "./redux-core/inc/fields/sortable/redux-sortable.js");
            /***/
          }
          /******/

        });
        /***/

      },

      /***/
      35:
      /*!****************************************************************!*\
        !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
        \****************************************************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
        "./redux-core/inc/fields/sortable/redux-sortable.js");
        /***/
      }
      /******/

    });
    /***/

  },

  /***/
  35:
  /*!****************************************************************!*\
    !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */
    "./redux-core/inc/fields/sortable/redux-sortable.js");
    /***/
  }
  /******/

});

/***/ }),

/***/ 35:
/*!****************************************************************!*\
  !*** multi ./redux-core/inc/fields/sortable/redux-sortable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\plugins\redux-framework-4\redux-core\inc\fields\sortable\redux-sortable.js */"./redux-core/inc/fields/sortable/redux-sortable.js");


/***/ })

/******/ });