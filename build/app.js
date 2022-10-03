/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _jsmodules_wordGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsmodules/wordGenerator.js */ \"./src/jsmodules/wordGenerator.js\");\n/* harmony import */ var _jsmodules_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsmodules/dictionary */ \"./src/jsmodules/dictionary.js\");\n/* harmony import */ var _jsmodules_wordCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsmodules/wordCheck */ \"./src/jsmodules/wordCheck.js\");\n\n\n\n\n(0,_jsmodules_wordGenerator_js__WEBPACK_IMPORTED_MODULE_1__.randomWord)();\n(0,_jsmodules_dictionary__WEBPACK_IMPORTED_MODULE_2__.dictionaryCheck)();\n(0,_jsmodules_wordCheck__WEBPACK_IMPORTED_MODULE_3__.isWordGuessed)(); // $(document).ready(function () {\n//   \n// });\n\n//# sourceURL=webpack://myfauxdle/./src/index.js?");

/***/ }),

/***/ "./src/jsmodules/dictionary.js":
/*!*************************************!*\
  !*** ./src/jsmodules/dictionary.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dictionaryCheck\": () => (/* binding */ dictionaryCheck)\n/* harmony export */ });\nfunction dictionaryCheck() {\n  console.log(\"dictionary\"); // alert(\"dictionary\");\n}\n\n//# sourceURL=webpack://myfauxdle/./src/jsmodules/dictionary.js?");

/***/ }),

/***/ "./src/jsmodules/wordCheck.js":
/*!************************************!*\
  !*** ./src/jsmodules/wordCheck.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWordGuessed\": () => (/* binding */ isWordGuessed)\n/* harmony export */ });\nfunction isWordGuessed() {\n  console.log(\"word found?\");\n}\n\n//# sourceURL=webpack://myfauxdle/./src/jsmodules/wordCheck.js?");

/***/ }),

/***/ "./src/jsmodules/wordGenerator.js":
/*!****************************************!*\
  !*** ./src/jsmodules/wordGenerator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomWord\": () => (/* binding */ randomWord)\n/* harmony export */ });\nfunction randomWord() {\n  console.log(\"wordGenerator\"); // alert(\"randomword\");\n}\n\n//# sourceURL=webpack://myfauxdle/./src/jsmodules/wordGenerator.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://myfauxdle/./src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;