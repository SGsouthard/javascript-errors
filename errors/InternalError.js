function internalError() {
    function loop(x) {
        if (x >= 10000000000000000000000000)
        return;
        loop (x+1);
    }
    loop(0);
}

module.exports = {
    internalError,
}