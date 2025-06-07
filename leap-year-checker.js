//  task4-leap-year-checker.js
// Create a variable called year.
// A leap year is:
// divisible by 4, but not divisible by 100,
// unless also divisible by 400.
// let year = 2024;
// Write your code here
// Print "Leap year" or "Not a leap year"

let year = 2024

if (year % 4 === 0 && year % 100 !== 0){
    console.log(year + " is a leap year.")
} else {
    console.log(year + " is not a leap year.")
}
// 
// year % 4 === 0 checks if the year is divisible by 4.

// year % 100 !== 0 ensures it’s not divisible by 100 unless...

// year % 400 === 0 which makes it a leap year even if divisible by 100.