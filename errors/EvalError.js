
function evalError() {
    try {
        throw new EvalError('Hello', 'evalError.js', 10);
    } catch (e) {
        console.log(e instanceof EvalError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
}

module.exports = {
    evalError,
}