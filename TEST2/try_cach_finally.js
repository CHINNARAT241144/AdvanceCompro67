function criticalCode() {
    throw "thowing an exception";
}

function logError(theException) {
    console.log(theException);
}


console.log("\n**************Try..catch**************\n");
try {
    criticalCode();
} catch (ex){
    console.log("Got an error")
    logError(ex)
}

console.log("\n**************Thowing..inTry..catch**************\n");
try {
    criticalCode();
} catch (ex){
    console.log("Got an error")
    logError(ex)
}

