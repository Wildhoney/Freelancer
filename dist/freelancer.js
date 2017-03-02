module.exports =
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
/**
 * @method createUrl
 * @param {Function} fn
 * @param {*} [options = undefined]
 * @return {String}
 */
const createUrl = (fn, options = undefined) => {

    if (typeof fn !== 'function') {

        // Ensure the passed parameter is actually a function.
        throw new Error('Freelancer: Passed parameter must be a function.');
    }

    // Transform the passed function into an IIFE and then create a blob URL from it.
    const blob = new Blob([`(${fn.toString()})(${JSON.stringify(options)})`], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
};

/**
 * @class Freelancer
 * @extends Worker
 */
class Freelancer extends Worker {

    /**
     * @constructor
     * @param {Array} args
     * @return {Worker}
     */
    constructor(...args) {
        return super(createUrl(...args));
    }

}

exports.Freelancer = Freelancer; /**
                                  * @class SharedFreelancer
                                  * @extends SharedWorker
                                  */

class SharedFreelancer extends SharedWorker {

    /**
     * @constructor
     * @param {Array} args
     * @return {Worker}
     */
    constructor(...args) {
        return super(createUrl(...args));
    }

}

exports.SharedFreelancer = SharedFreelancer;
exports.default = Freelancer;

/***/ })
/******/ ]);