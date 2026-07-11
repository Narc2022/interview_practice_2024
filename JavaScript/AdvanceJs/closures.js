function x() {
    var a = 7;
    function y() {
        console.log("value", a);
    }
    y()
}
x()

// closures is the combination of function and it's lexical environment, allowing functions to access
// the variables from its outer scope even after outer scope has finished the exection