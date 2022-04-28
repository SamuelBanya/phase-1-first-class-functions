function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    const namedFunction = a => console.log(a);
    
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}


