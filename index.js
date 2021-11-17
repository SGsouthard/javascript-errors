const wowThatEval  = require("./errors/EvalError");
const rangeCheckOne  = require("./errors/RangeErrorOne");
const rangeCheckTwo  = require("./errors/RangeErrorTwo");
const referenceError = require("./errors/ReferenceError");
const syntaxError = require("./errors/SyntaxError");
const typeError = require('./errors/TypeError');
const uriError = require('./errors/URIError');
const aggregateError = require('./errors/AggregateError');
const internalError = require('./errors/InternalError');

//comment in whichever command you need to test
wowThatEval.evalError();
// rangeCheckOne.checkOne();
// rangeCheckTwo.checkTwo("cabbage");
// referenceError.referenceError();
// syntaxError.syntaxError();
// typeError.typeError();
// uriError.uriError();
// aggregateError.aggregateError('hello');
// internalError.internalError();