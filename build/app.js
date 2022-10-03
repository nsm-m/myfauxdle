/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/jsmodules/wordGenerator.js
function randomWord() {
  console.log("wordGenerator"); // alert("randomword");

  fetch("/.netlify/functions/get-word").then(function (res) {
    return res;
  }).then(function (data) {
    return console.log(data);
  });
}
;// CONCATENATED MODULE: ./src/jsmodules/dictionary.js
function dictionaryCheck() {
  console.log("dictionary"); // alert("dictionary");  
}
;// CONCATENATED MODULE: ./src/jsmodules/wordCheck.js
function isWordGuessed() {
  console.log("word found?");
}
;// CONCATENATED MODULE: ./src/index.js




randomWord();
dictionaryCheck();
isWordGuessed(); // $(document).ready(function () {
//   
// });
/******/ })()
;