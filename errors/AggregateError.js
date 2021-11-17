function aggregateError() {
    //catching an aggregate error
    Promise.any([
        Promise.reject(new Error("some error")),
    ]).catch(e => {
        console.log(e instanceof AggregateError);
        // console.log(e.message);
        // console.log(e.name);
        console.log(e.errors);
    });

    //creating an aggregate error
    try {
        throw new AggregateError([
            new Error("some error"),
        ], 'Hello');
    } catch (e) {
        console.log(e instanceof AggregateError);
        // console.log(e.message);
        // console.log(e.name);
        console.log(e.errors);
    }
}

module.exports = {
    aggregateError,
}