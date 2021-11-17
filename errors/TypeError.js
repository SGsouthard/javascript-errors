function typeError() {
    try {
        null.f()
    } catch (e) {
        // console.log(e instanceof TypeError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
    try {
        throw new TypeError('Hello', 'index.js', 10)
    } catch (e) {
        // console.log(e instanceof TypeError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
}

module.exports = {
    typeError,
}