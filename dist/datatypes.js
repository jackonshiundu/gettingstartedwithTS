"use strict";
//data types
//strings
let fname = 'john';
const newFname = fname.toUpperCase();
console.log(newFname);
//number
let age;
age = parseInt('49');
console.log(age);
//boolean
let isValid = true;
console.log(isValid);
//when working with boolean in ts always indicate the value of the boolean
//array
let empList;
let depList;
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let c = Color.Red;
console.log(c);
//swapnum
let swapNum;
function swapNUmunbers(num1, name) {
    return [num1, name];
}
swapNum = swapNUmunbers(20, 'jackon');
console.log(swapNum[1]);
//any
//no type checking
let thisNum;
thisNum = '78';
thisNum = 45;
//void
//never
