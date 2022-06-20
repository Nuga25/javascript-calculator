function add(a, b) {
    return a + b;
}
function subtract(a, b ){
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function modulus(a, b) {
    return a % b;
}


function userInput() {
    var name = prompt("Hello there, this is a simple calculator of basic operations \n\nWhat is your name?");
    var a = parseInt(prompt("Enter your first number"));
    var b = parseInt(prompt("Enter your second number"));
    var operator  = prompt("Enter a operator");
    var result = 0;
    if (operator == "+") {
        result = add(a, b)
    }
    else if (operator == "-") {
        result = subtract(a, b)
    }
    else if (operator == "/") {
        result = divide(a, b)
    }
    else if (operator == "*") {
        result = multiply(a, b)
    }
    else if (operator == "%") {
        result = modulus(a, b)
    }
    else{
        alert(name + " you have entered an invalid operator");
        return
    }
    alert(name + ", the result is " + result + "\n\nThank you for using!");
}
userInput();