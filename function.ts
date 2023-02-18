function add(num1: number, num2: number): number {
  return num1 + num2;
}
let addition = (num1: number, num2: number, num3?: number): number => {
  // the ? means that that variable is optional
  return num1 + num2;
};
let additionwithrequirednum3 = (
  num1: number,
  num2: number,
  ...num3: number[]
): number => {
  // the ? means that that variable is optional
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
};
console.log(add(3, 4));
console.log(additionwithrequirednum3(3, 4, 3, 3, 4, 4, 5));
//the rest array will be assigned to the arry
//generic Function

function items<Type>(values: Type[]): Type[] {
  return new Array<Type>().concat(values);
}
let concatNUmbers = items<number>([1, 2, 3]);
