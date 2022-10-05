/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/jsmodules/wordGenerator.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var generatedWord = "";
var wordObject;
var generatedWordExport;
var formattedWord;
var WordToGuess = /*#__PURE__*/function () {
  function WordToGuess(word) {
    _classCallCheck(this, WordToGuess);

    this.word = word;
  }

  _createClass(WordToGuess, [{
    key: "getWordToGuess",
    value: function getWordToGuess() {
      return this.word;
    }
  }]);

  return WordToGuess;
}();
function generateWord() {
  return _generateWord.apply(this, arguments);
} //generateWord();

function _generateWord() {
  _generateWord = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/.netlify/functions/random-word").then(function (res) {
              return res.json();
            }).then(function (data) {
              generatedWord = data;
              wordObject = new WordToGuess(generatedWord);
              generatedWordExport = JSON.stringify(wordObject);
              var parsedWord = JSON.parse(generatedWordExport);
              formattedWord = parsedWord.word; //  console.log("testing" + formattedWord);
              //  console.log(wordObject);
              //  console.log('Success:', generatedWord);
            });

          case 2:
            return _context.abrupt("return", formattedWord);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateWord.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/jsmodules/dictionary.js
function dictionary_typeof(obj) { "@babel/helpers - typeof"; return dictionary_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, dictionary_typeof(obj); }

function dictionary_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ dictionary_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == dictionary_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function dictionary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dictionary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dictionary_createClass(Constructor, protoProps, staticProps) { if (protoProps) dictionary_defineProperties(Constructor.prototype, protoProps); if (staticProps) dictionary_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function dictionary_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function dictionary_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { dictionary_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { dictionary_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


$(document).ready(function () {
  var wordCreated;
  var newWord; //generate word

  generateWord().then(function (value) {
    wordCreated = value;
    newWord = new WordToGuess(value);
    console.log("another test: " + value);
    console.log("wordCreated: " + wordCreated);
    console.log("wordCreated new word var: " + newWord.getWordToGuess());
    test(wordCreated);
    $(validateWord).click(function (event) {
      event.preventDefault();
      console.log("validate word");
      submitWord();
    });
    return wordCreated, newWord;
  }, function (error) {
    console.log(error);
  });

  function test(val) {
    newWord = val;
    console.log("val etst: " + newWord);
    return newWord;
  }

  console.log("val 1" + newWord);
  console.log("hnet" + newWord);
  var rgBGreen = "rgb(12, 206, 107)";
  var rgbYellow = "rgb(220, 237, 49)";
  var rgbGrey = "rgb(142, 141, 145)";
  var MAX_GUESSES = 6;
  var guessNumber = 0;
  var wordsubmitted = "";
  var count = 0;
  var wordArray = [];
  var lettersCount = 0;
  var elems = document.querySelectorAll(".letter");
  var deleteLetter = document.getElementById("delete");
  var validateWord = document.getElementById("submit");
  var countDisplay = document.getElementById("count");
  $(document).keydown(function (event) {
    if (wordArray.length < 5 && count < MAX_GUESSES) {
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        var typedLetter = String.fromCharCode(event.keyCode);
        var normalizedLetter = typedLetter.toLowerCase();
        console.log(normalizedLetter);
        wordArray.push(normalizedLetter);
        addelement(normalizedLetter);
        console.log(wordArray);
        console.log(count);
      }
    } else if (wordArray.length === 5) {
      alert("enough letters validate input!");
    }
  }); //Function addelement(l) : 
  //- displays the letter picked

  function addelement(l) {
    var lettersCount = wordArray.length; // lettersCount = lettersCount + 1;

    console.log("letters count" + lettersCount);
    var completeWord = document.getElementById("try".concat(guessNumber + 1, "-").concat(lettersCount));
    completeWord.innerHTML += l;
  } // Function pickLetters():
  // - select letters
  // - create array with the selected letters 
  // - this array is used to be create a word that will be then checked 


  function pickLetters() {
    var clickedBtnID = $(this).attr('value'); // letter count check

    if (wordArray.length < 5 && count < MAX_GUESSES) {
      wordArray.push(clickedBtnID);
      console.log(wordArray);
      console.log(count);
      addelement(clickedBtnID);
    } else if (wordArray.length === 5) {
      alert("enough letters validate input!");
    }
  }

  function removeLetter() {
    var lettersCount2 = wordArray.length;
    var currentWord = document.getElementById("try".concat(guessNumber + 1, "-").concat(lettersCount));
    console.log(lettersCount);
    wordArray.pop();
    $("#try".concat(guessNumber + 1, "-").concat(lettersCount2)).text("");
    console.log(wordArray);
  }

  function existingLetter(exist) {
    if (exist === true) {
      $(".li").css('color', '#3399ff');
    }
  }

  var wordTested;
  var isValidWord;
  var wordGuess;

  function submitWord() {
    return _submitWord.apply(this, arguments);
  }

  function _submitWord() {
    _submitWord = dictionary_asyncToGenerator( /*#__PURE__*/dictionary_regeneratorRuntime().mark(function _callee() {
      return dictionary_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(count < MAX_GUESSES && wordArray.length === 5)) {
                _context.next = 9;
                break;
              }

              wordGuess = wordArray.join("");
              wordsubmitted = wordGuess;
              _context.next = 5;
              return fetch("/.netlify/functions/dictionary-check?wordGuess=".concat(wordGuess)).then(function (res) {
                return res.json();
              }).then(function (data) {
                console.log("submit word data" + data); // generatedWord = data;
                // wordObject = new WordToGuess(generatedWord);
                // generatedWordExport = JSON.stringify(wordObject);
                // let parsedWord = JSON.parse(generatedWordExport);
                // formattedWord = parsedWord.word;
                //  console.log("testing" + formattedWord);
                //  console.log(wordObject);
                //  console.log('Success:', generatedWord);
              });

            case 5:
              // console.log("Word submitted: " + wordsubmitted);
              // const dictionarySettings = {
              //     "async": false,
              //     "crossDomain": true,
              //     "url": `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${wordGuess}`,
              //     "method": "GET",
              //     "headers": {
              //         "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
              //         "x-rapidapi-key": "56bc15abd1msh8abeae14cab8d8ep1a87a3jsn2982dc6544e6"
              //     }
              // };
              // $.ajax(dictionarySettings).done(function (response) {
              //     const result = response;
              //     console.log(result);
              //     isValidWord = result.valid;
              // });
              //  isValidWord = true; // remove this when removing commented
              console.log(isValidWord);

              if (isValidWord == false) {
                alert("word not valid");
                guessNumber = guessNumber;
                count = count;
                wordArray = wordArray;
              } else {
                guessNumber = guessNumber + 1;
                count = count + 1;

                if (count === MAX_GUESSES) {
                  alert("enough guesses");
                  $(elems).attr("disabled", "disable");
                }

                console.log(count);
                wordTested = new WordToTest(wordsubmitted, count);
                lettersCheck(wordTested.getWordToTest());
                wordArray = [];
              }

              _context.next = 10;
              break;

            case 9:
              if (wordArray.length != 5) {
                alert("You're missing letters ".concat(5 - wordArray.length, " letters"));
              }

            case 10:
              // displayCount();
              lettersCount = 0;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitWord.apply(this, arguments);
  }

  function displayCount() {
    // countDisplay.innerHTML += wordTested.getWordToGuessCount();
    countDisplay.innerHTML += wordTested.getWordToGuessCount();
  }

  var isValidLetter;
  var letterExist; //check letter by letter

  function lettersCheck(wordGuess) {
    console.log("newWord lettersCheck : " + newWord); //  The 2 words are stored in 2 arrays:
    // - one for the word to guess
    // - a second for the users guess)
    //  Step 1: Check valid letters
    //  Step 1: Check existing letters 

    var validLettersCount = 0;
    var wordToGuess2 = newWord;
    var wtg = wordToGuess2.split("");
    var userGuess = wordTested.getWordToTest();
    var userGuessArray = userGuess.split(""); //  Step 1: Check valid letters 
    //  The for... loop compares the 2 arrays
    //  When letters are the same, we remove the letter from both arrays
    //  So they are not included again when checking if they exist in the word the user has to guess   

    for (var _i = 0; _i < userGuessArray.length; _i++) {
      var letterWordToGuess = wtg[_i];

      var _test = _i + 1;

      var lWtT = userGuessArray[_i];
      var letterWordToTest = lWtT;
      var listElement = document.getElementById("try".concat(guessNumber, "-").concat(_test)); //console.log("test try" + guessNumber + "- " + test);

      if (letterWordToGuess === letterWordToTest.toLowerCase()) {
        console.log("letter word to guess: " + letterWordToGuess + " /letter word to test: " + letterWordToTest + " so letter is valid");
        isValidLetter = true;
        wtg.splice(_i, 1, null);
        userGuessArray.splice(_i, 1, null);

        if (isValidLetter === true) {
          validLettersCount = validLettersCount + 1;
          wordTested.validCount = validLettersCount;
          $(listElement).css('background-color', rgBGreen); //  $(`#${letterWordToTest}`).css('background-color', '#2FC620');
        }

        console.log("word to guess after validated : " + wtg);
        console.log("word to test after validated : " + userGuessArray);
      }
    } //  Step 2: Check existing letters 
    //  The for... loop compares the 2 arrays
    //  If the letter exist it will appear in yellow
    //  Otherwise, that means the letter is false and will appear in grey


    for (var _i2 = 0; _i2 < userGuessArray.length; _i2++) {
      var letterWordToGuess2 = wtg[_i2];
      var test2 = _i2 + 1;
      var lWtT2 = userGuessArray[_i2];
      var letterWordToTest2 = lWtT2;
      var listElement2 = document.getElementById("try".concat(guessNumber, "-").concat(test2));
      console.log("test try" + guessNumber + "- " + test2); //if ((letterWordToGuess2 != null) && (letterWordToTest2 != null)) {

      console.log("exist test letter word to guess: " + letterWordToGuess2 + " /letter word to test: " + letterWordToTest2 + " so letter is valid");

      if (letterWordToGuess2 !== letterWordToTest2) {
        if (wtg.includes(letterWordToTest2) === true) {
          letterExist = true; //  wtg.splice(i, 1, null);
          // userGuessArray.splice(i, 1, null);

          wtg.splice(wtg.indexOf(letterWordToTest2), 1, null);
          console.log(letterWordToTest2 + " is included ");
          $(listElement2).css('background-color', rgbYellow); //  $(`#${letterWordToTest2}`).css('background-color', '#FFC300');

          if (letterExist === true) {
            existingLetter(letterExist);
          }
        } else {
          console.log(letterWordToTest2 + "not valid");
          $(listElement2).css('background-color', rgbGrey); //  $(`#${letterWordToTest2}`).css('background-color', '#A3A6AD');
        }
      } else {// console.log(letterWordToTest2 + "error");
      }

      console.log("word to guess after : " + wtg);
      console.log("word to test after: " + userGuessArray); //  }
    }

    console.log(wordTested);
    lettersKeyboard(); // If all the letters are valid generate alert and disable keyboard

    if (wordTested.isWordValid() === true) {
      alert("found");
      $(elems).attr("disabled", "disable");
    }
  }

  function lettersKeyboard() {
    var validLettersCount = 0;
    var wordToGuess2 = newWord;
    var wtg3 = wordToGuess2.split("");
    var userGuess = wordTested.getWordToTest();
    var userGuessArray3 = userGuess.split("");
    var test2 = i + 1;

    for (var _i3 = 0; _i3 < userGuessArray3.length; _i3++) {
      var letterToFind = wtg3[_i3];
      var letterTested = userGuessArray3[_i3];
      var letterWordToTest2 = letterTested;
      console.log("letter to find " + letterToFind + "letter tested " + letterTested);

      if (letterToFind === letterTested) {
        $("#".concat(letterTested)).css('background-color', rgBGreen);
      } else if (letterToFind !== letterTested) {
        if (wtg3.includes(letterTested) === true) {
          if ($("#".concat(letterTested)).css("background-color") !== rgBGreen) {
            $("#".concat(letterTested)).css('background-color', rgbYellow);
          }

          console.log("existing keybord: " + letterToFind);
        } else {
          $("#".concat(letterTested)).css('background-color', rgbGrey);
          console.log("invalid letter keybord: " + letterToFind);
        }
      }
    }
  }

  $(deleteLetter).on("click", removeLetter);
  $(elems).on("click", pickLetters); // $(validateWord).click(function (event) {
  //     event.preventDefault();
  //     submitWord();
  // });

  var WordToTest = /*#__PURE__*/function () {
    function WordToTest(wordTest, counted, countValidLetters) {
      dictionary_classCallCheck(this, WordToTest);

      this.wordTest = wordTest;
      this.counted = counted;
      this.countValidLetters = countValidLetters;
    }

    dictionary_createClass(WordToTest, [{
      key: "validCount",
      set: function set(numberOfValidLetters) {
        this.countValidLetters = numberOfValidLetters;
      }
    }, {
      key: "getWordToTest",
      value: function getWordToTest() {
        return this.wordTest;
      }
    }, {
      key: "getWordToGuessCount",
      value: function getWordToGuessCount() {
        return this.counted;
      }
    }, {
      key: "getValidCount",
      value: function getValidCount() {
        return this.counted;
      }
    }, {
      key: "isWordValid",
      value: function isWordValid() {
        if (this.countValidLetters === 5) {
          // alert("fail");
          return true;
        } else {
          return false;
        }
      }
    }]);

    return WordToTest;
  }();
});
;// CONCATENATED MODULE: ./src/index.js



 //dictionaryCheck();
//isWordGuessed();
// $(document).ready(function () { 
//   
// });
/******/ })()
;