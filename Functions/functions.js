//making functions, method 1
//function name() {}

//function declaration

function sayHello () {
    console.log ("Hello");
}

sayHello(); // calling the function

//second way is function expression
//var a = function name() {}

var sayBye = function() { //anonymous function.. doesn't have a name. the function can't be accessed without the variable.
    console.log("Bye");
}
sayBye();
