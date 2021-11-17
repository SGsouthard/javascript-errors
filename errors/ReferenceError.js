function referenceError() {
    try {
        let a = undefinedVariable
    } catch (e) {
        console.log(e instanceof ReferenceError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
    try {
        throw new ReferenceError('Hello', 'index.js', 10)
    } catch (e) {
        console.log(e instanceof ReferenceError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
}

module.exports = {
    referenceError,
}