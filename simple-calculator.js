//  task5-simple-calculator.js
// Create 3 variables: num1, num2, and operator.
// operator can be "+", "-", "*", or "/".
// Use if statements to perform the correct calculation.
// let num1 = 12;
// let num2 = 4;
// let operator = "*";
// Write your code here
// If operator is "+", print num1 + num2
// If "-", print subtraction
// If "*", print multiplication
// If "/", print division
// If operator is something else, print "Invalid operator"

let num1 = 12
let num2 = 4
let operator = "*"
let result

if (operator === "+") {
    result = num1 + num2
} else if (operator === "-") {
    result = num1 - num2
} else if (operator === "*") {
    result = num1 * num2
} else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero"
} else {
    result = "Invalid operator"
}

console.log("Result:", result)

// Result: 48(multiplication("*"))
 
