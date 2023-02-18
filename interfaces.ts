export interface User {
  name: string;
  id: number;
  age: number;
  email: string;
}

let jackon: User = {
  name: 'jackon',
  id: 23,
  age: 45,
  email: 'jackon20@gmail.com',
};
//inherit an interface
interface Student extends User {
  Marks: string;
}
let Lucy: Student = {
  name: 'jackon',
  id: 23,
  age: 45,
  email: 'jackon20@gmail.com',
  Marks: 'B',
};

console.log(Lucy);

//methods definetion interfaces
export interface Login {
  Loging(): User;
}

let [user1, user2]: User[] = [
  {
    name: 'jackon',
    id: 23,
    age: 45,
    email: 'jackon20@gmail.com',
  },
  {
    name: 'jackon',
    id: 24,
    age: 45,
    email: 'jackon20@gmail.com',
  },
  {
    name: 'jackon',
    id: 25,
    age: 45,
    email: 'jackon20@gmail.com',
  },
];
console.log(user1);
console.log(user2);
