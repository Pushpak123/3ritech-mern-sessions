// setTimeout()
/*setTimeout(function() {
    console.log("setTimeout is executing in just 1sec");
}, 1000);*/

// setInterval()
/*setInterval(function() {
    console.log("setInterval is executing for multiple no of times in just 1sec");
}, 1000);*/

/*var i = 0;
setInterval(function() {
    console.log(`the i: ${i}`);
    i = i + 1;
}, 1000);*/

// recursive function
// the function definition itself can have the function call
/*var recursiveFunc = function() {
    console.log("its a recursiveFunc");
    setInterval(recursiveFunc, 1000);
};
recursiveFunc();*/

// setImmediate()
var execFunc = function() {
    setTimeout(function() {
        console.log("setTimeout executes");
    }, 0);
    setImmediate(function() {
        console.log("setImmediate executes");
    });
};
execFunc();