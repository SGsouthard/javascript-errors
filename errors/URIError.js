function uriError() {
    //catching an URIError
    try {
        decodeURIComponent('%')
    } catch (e) {
        console.log(e instanceof URIError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
    //creating an URIError
    try {
        throw new URIError('Hello', 'index.js', 10)
    } catch (e) {
        console.log(e instanceof URIError);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e.fileName);
        // console.log(e.lineNumber);
        // console.log(e.columnNumber);
        console.log(e.stack);
    }
}

module.exports = {
    uriError,
}