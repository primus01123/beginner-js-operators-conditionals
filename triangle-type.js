// task7-triangle-type.js
// Create three variables for side lengths: a, b, c.
// First, check if the sides can form a triangle:
// The sum of any two sides must be greater than the third side.
// If valid:
// All sides equal → print "Equilateral"
// Two sides equal → print "Isosceles"
// No sides equal → print "Scalene"
// If not valid, print "Not a valid triangle"
// let a = 3
// let b = 3
// let c = 3
// Write your code here

let a = 3
let b = 3
let c = 3

if (a + b > c && a + c > b && b + c > a) {
    // valid triangle 
    if (a === b && b === c) {
        console.log("Equilateral");
    } else if (a === b || a === c || b === c) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
} else {
    // Not a valid triangle
    console.log("Not a valid triangle");
}
// All sides equal → print "Equilateral"

