/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @method createBlob
 * @param {Function} fn
 * @return {String}
 */
var createBlob = function createBlob(fn) {

    if (typeof fn !== 'function') {

        // Ensure the passed parameter is actually a function.
        throw 'Freelancer: Passed parameter must be a function.';
    }

    // Transform the passed function into an IIFE and then create a blob URL from it.
    var blob = new Blob(['(' + fn.toString() + ')()'], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
};

/**
 * @class Freelancer
 * @extends Worker
 */

var Freelancer = exports.Freelancer = function (_Worker) {
    _inherits(Freelancer, _Worker);

    /**
     * @constructor
     * @param {Function} fn
     * @return {Worker}
     */
    function Freelancer(fn) {
        var _this, _ret;

        _classCallCheck(this, Freelancer);

        return _ret = (_this = _possibleConstructorReturn(this, (Freelancer.__proto__ || Object.getPrototypeOf(Freelancer)).call(this, createBlob(fn))), _this), _possibleConstructorReturn(_this, _ret);
    }

    return Freelancer;
}(Worker);

/**
 * @class SharedFreelancer
 * @extends SharedWorker
 */


var SharedFreelancer = exports.SharedFreelancer = function (_SharedWorker) {
    _inherits(SharedFreelancer, _SharedWorker);

    /**
     * @constructor
     * @param {Function} fn
     * @return {Worker}
     */
    function SharedFreelancer(fn) {
        var _this2, _ret2;

        _classCallCheck(this, SharedFreelancer);

        return _ret2 = (_this2 = _possibleConstructorReturn(this, (SharedFreelancer.__proto__ || Object.getPrototypeOf(SharedFreelancer)).call(this, createBlob(fn))), _this2), _possibleConstructorReturn(_this2, _ret2);
    }

    return SharedFreelancer;
}(SharedWorker);

/***/ })
/******/ ]);