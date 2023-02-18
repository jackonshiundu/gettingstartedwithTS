//data types
//strings
let fname = 'john';
const newFname = fname.toUpperCase();
console.log(newFname);

//number
let age: number;
age = parseInt('49');
console.log(age);

//boolean
let isValid: boolean = true;
console.log(isValid);
//when working with boolean in ts always indicate the value of the boolean

//array
let empList: string[];
let depList: Array<string>;

//enum
enum Color {
  Red,
  Blue,
  Green,
}
let c: Color = Color.Red;

console.log(c);
//swapnum
let swapNum: [number, string];
function swapNUmunbers(num1: number, name: string): [number, string] {
  return [num1, name];
}
swapNum = swapNUmunbers(20, 'jackon');
console.log(swapNum[1]);

//any
//no type checking
let thisNum: any;
thisNum = '78';
thisNum = 45;
//void
//never
