"use strict";
function add(num1, num2) {
    return num1 + num2;
}
let addition = (num1, num2, num3) => {
    // the ? means that that variable is optional
    return num1 + num2;
};
let additionwithrequirednum3 = (num1, num2, ...num3) => {
    // the ? means that that variable is optional
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
};
console.log(add(3, 4));
console.log(additionwithrequirednum3(3, 4, 3, 3, 4, 4, 5));
//the rest array will be assigned to the arry
//generic Function
function items(values) {
    return new Array().concat(values);
}
let concatNUmbers = items([1, 2, 3]);
