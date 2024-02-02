// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log("error message", this.errMsg)
}

const o1 = {
    errMsg: "o1",
    logMsg: logMsg
}

const o2 = {
    errMsg:"o2",
    logMsg: logMsg
}

o1.logMsg()
o2.logMsg()
